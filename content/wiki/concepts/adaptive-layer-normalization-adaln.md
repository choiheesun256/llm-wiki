---
title: Adaptive Layer Normalization (AdaLN)
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [adaln, layer-normalization, conditioning, diffusion-transformer]
---

# Adaptive Layer Normalization (AdaLN)

## 한 줄 결론

AdaLN은 독립적인 모델 이름이라기보다 **[[conditioning-mechanisms|조건 정보]]를 신경망 내부 hidden feature에 주입하는 정규화 기반 방법론**이다. 정확히는 [[layer-normalization|Layer Normalization]]의 scale과 shift를 고정 파라미터로 두지 않고, [[timestep-embeddings|timestep]], class, text embedding, cell type, perturbation 같은 조건 벡터에서 동적으로 만들어 쓰는 방식이다.

## 왜 필요한가

딥러닝 모델에서 조건부 생성이나 조건부 예측을 하려면 모델이 "지금 어떤 조건에서 계산 중인지" 알아야 한다. 예를 들어 [[diffusion-models|diffusion model]]에서는 현재 denoising timestep이 중요하고, text-to-image 모델에서는 텍스트 조건이 중요하다. 생물학 모델에서는 cell type, perturbation, dose, donor, tissue, disease state, assay platform 같은 조건이 결과를 크게 바꾼다.

조건을 넣는 가장 단순한 방법은 입력에 조건 벡터를 붙이는 것이다. 더 강한 방법은 [[cross-attention|cross-attention]]처럼 조건 토큰과 feature 토큰이 서로 attention하게 만드는 것이다. AdaLN은 그 중간에 있는 가벼운 방법이다. 조건 벡터가 hidden feature의 각 channel을 얼마나 키우고 줄일지 정한다.

즉 AdaLN의 역할은 다음처럼 이해하면 된다.

- [[layer-normalization|LayerNorm]]: feature 분포를 안정화한다.
- 조건 벡터: 지금 어떤 상황인지 알려준다.
- AdaLN: 안정화된 feature를 조건에 맞게 다시 scale/shift한다.

## 기본 LayerNorm 복습

[[transformer-blocks|Transformer block]] 안에서는 보통 attention이나 MLP 앞뒤로 LayerNorm을 쓴다. LayerNorm은 한 샘플 내부의 hidden dimension을 기준으로 평균과 분산을 맞춘다. batch 전체 통계를 쓰는 BatchNorm과 다르게, 각 샘플마다 독립적으로 정규화하기 때문에 transformer와 sequence model에서 널리 쓰인다.

일반 LayerNorm은 대략 이렇게 쓴다.

```text
LayerNorm(x) = gamma * normalize(x) + beta
```

여기서 `normalize(x)`는 hidden feature `x`를 평균 0, 분산 1에 가깝게 맞춘 값이다. `gamma`와 `beta`는 학습되는 고정 파라미터다.

- `gamma`: 각 feature channel을 얼마나 키울지 정하는 scale
- `beta`: 각 feature channel을 얼마나 이동시킬지 정하는 shift

일반 LayerNorm에서는 모든 입력에 같은 `gamma`, `beta`를 쓴다. 이 말은 조건이 달라도 정규화 뒤의 affine 변환은 고정되어 있다는 뜻이다.

## AdaLN의 핵심 아이디어

AdaLN은 고정된 `gamma`, `beta` 대신 조건 벡터 `c`에서 scale과 shift를 만든다.

```text
AdaLN(x, c) = gamma(c) * normalize(x) + beta(c)
```

여기서 `c`는 모델이 참고해야 하는 조건이다. diffusion transformer에서는 보통 timestep embedding과 class embedding을 합친 벡터가 된다. text-to-image 모델에서는 text condition은 cross-attention으로 넣고, timestep은 AdaLN으로 넣는 식의 hybrid 설계도 가능하다.

구현 관점에서는 보통 작은 MLP가 조건 벡터를 받아서 LayerNorm에 필요한 modulation parameter를 출력한다.

```text
c -> MLP -> gamma, beta
x -> LayerNorm -> gamma * normalized_x + beta
```

따라서 AdaLN은 "조건을 feature token으로 넣는 방식"이 아니라 "조건이 hidden channel의 강도를 조절하는 방식"이다. 이 차이가 중요하다. [[cross-attention]]은 조건 토큰과 입력 토큰 사이의 세밀한 상호작용을 학습한다. AdaLN은 조건 벡터 하나로 전체 hidden representation의 channel별 게이트를 조절한다. 그래서 더 가볍지만, 조건이 매우 길거나 구조적인 경우에는 표현력이 부족할 수 있다.

## FiLM과의 관계

AdaLN은 [[perez-2018-film-conditioning-layer|FiLM]]과 매우 가까운 아이디어다. FiLM은 [[feature-wise-modulation|feature-wise linear modulation]]의 약자로, 조건 벡터에서 나온 scale과 shift로 feature를 조절한다.

```text
FiLM(h, c) = gamma(c) * h + beta(c)
```

AdaLN은 여기에 LayerNorm을 결합한 형태로 볼 수 있다.

```text
AdaLN(h, c) = gamma(c) * LayerNorm(h) + beta(c)
```

즉 FiLM이 "조건부 feature modulation"의 일반형이라면, AdaLN은 "LayerNorm 이후에 수행하는 조건부 feature modulation"이다.

## Diffusion Transformer에서의 AdaLN

AdaLN이 많이 알려진 계기는 [[peebles-xie-2023-diffusion-transformers|DiT]] 논문이다. DiT는 U-Net 대신 Vision Transformer를 [[diffusion-transformers|diffusion model의 backbone]]으로 쓰는 모델이다. 이미지를 VAE latent로 압축하고, 이 latent feature map을 patch token으로 나눠 transformer block에 넣는다.

Diffusion model은 timestep 조건이 필수다. 각 step에서 노이즈가 얼마나 남아 있는지에 따라 denoising 방식이 달라져야 하기 때문이다. class-conditional ImageNet 생성에서는 class label 조건도 필요하다. DiT는 이 조건을 transformer block에 주입하는 여러 방식을 비교했다.

- 조건을 token으로 추가하는 in-context conditioning
- cross-attention으로 조건을 읽는 방식
- AdaLN으로 LayerNorm scale/shift를 조건화하는 방식
- AdaLN-Zero

그 결과 AdaLN-Zero가 성능과 계산 효율 측면에서 강한 선택지로 보고되었다.

## AdaLN-Zero는 무엇이 다른가

DiT에서 중요한 변형은 AdaLN-Zero다. 이름의 "Zero"는 modulation을 담당하는 마지막 linear layer를 0에 가깝게 초기화하는 [[zero-initialization|zero initialization]] 설계와 관련이 있다. 또한 단순히 scale과 shift만 만드는 것이 아니라, [[residual-connections|residual branch]]의 출력 강도를 조절하는 gate도 함께 예측한다.

직관은 다음과 같다.

- 학습 시작 시점에는 transformer block이 입력을 크게 망가뜨리지 않게 한다.
- residual update가 처음에는 거의 0에 가까워서 block이 identity function에 가깝게 동작한다.
- 학습이 진행되면서 조건별 modulation과 residual gate가 점진적으로 의미를 갖는다.

이 설계는 큰 diffusion transformer를 안정적으로 학습시키는 데 유리하다. [[zhu-2025-unveiling-adaln-zero|AdaLN-Zero 분석 논문]]은 AdaLN-Zero의 성능 이득을 여러 요소로 나눠 분석했고, 그중 zero initialization이 핵심적인 기여를 한다고 해석했다.

## PixArt-alpha와 AdaLN-single

[[chen-2023-pixart-alpha|PixArt-alpha]]는 text-to-image diffusion transformer에서 AdaLN 설계를 더 효율적으로 바꾼 사례다. text condition은 길고 구조적이기 때문에 cross-attention으로 처리하고, timestep condition은 AdaLN 계열로 처리한다.

PixArt-alpha의 AdaLN-single은 각 transformer block마다 별도의 modulation MLP를 두는 대신, timestep에서 나온 modulation을 더 공유하는 방식이다. 기본 생각은 이렇다.

- timestep 조건은 text 조건보다 상대적으로 단순하다.
- 모든 layer가 완전히 독립된 timestep modulation MLP를 가질 필요는 없을 수 있다.
- modulation을 공유하고 layer-specific embedding으로 보정하면 parameter와 memory를 줄일 수 있다.

이 사례는 AdaLN이 단순한 세부 구현이 아니라 모델 크기, 학습 비용, 조건 주입 방식에 직접 영향을 주는 설계 요소임을 보여준다.

## 주요 변형 정리

| 변형                        | 핵심 아이디어                                                     | 의미                                |
| --------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| Dynamic Layer Normalization | 입력 또는 context에서 LayerNorm scale/shift를 동적으로 생성       | AdaLN류 방법의 초기 형태            |
| FiLM-style conditioning     | 조건 벡터로 feature-wise affine modulation 수행                   | AdaLN의 넓은 개념적 조상            |
| AdaLN in DiT                | timestep/class embedding으로 LayerNorm scale/shift 생성           | diffusion transformer 조건 주입     |
| AdaLN-Zero                  | scale/shift에 residual gate를 더하고 modulation을 0 근처에서 시작 | 큰 DiT 학습 안정화                  |
| AdaLN-single                | block별 modulation MLP를 줄이고 modulation을 공유                 | PixArt 계열의 parameter/memory 절감 |
| AdaLN-Gaussian              | zero initialization 대신 Gaussian 초기화를 실험                   | AdaLN-Zero의 초기화 문제를 재검토   |

## Cross-attention과 어떻게 다를까

AdaLN과 cross-attention은 둘 다 조건을 넣는 방법이지만 성격이 다르다.

AdaLN은 조건 벡터 하나가 hidden channel 전체를 조절한다. 예를 들어 "timestep 300"이라는 조건이 들어오면, 각 layer의 feature channel이 timestep 300에 맞는 방식으로 커지거나 작아진다. 계산량이 적고 구현이 단순하다.

[[cross-attention|Cross-attention]]은 query token이 condition token들을 직접 읽는다. text-to-image에서 prompt가 길거나, biological model에서 pathway graph, gene set, histology patch, spatial neighborhood처럼 구조적인 조건을 넣어야 한다면 cross-attention이 더 자연스럽다.

실전에서는 둘을 같이 쓰는 경우가 많다.

- [[timestep-embeddings|timestep]], dose, batch, donor 같은 compact metadata: AdaLN
- text prompt, image patch, gene set, graph, neighborhood 같은 structured condition: cross-attention 또는 graph attention

## 생물학 ML에서 왜 볼 만한가

생물학 모델은 대부분 조건부 문제다. 같은 perturbation이라도 cell type, dose, time, donor, cancer type, tissue microenvironment에 따라 반응이 달라진다. 이런 조건을 모델이 안정적으로 반영하지 못하면 평균적인 예측만 하거나, batch effect를 생물학적 signal로 오해할 수 있다.

AdaLN은 다음 상황에서 특히 후보가 될 수 있다.

- tissue, disease, region, platform 조건을 반영하는 spatial transcriptomics 또는 histology 생성 모델
- single-cell generative model에서 perturbation, dose, cell type, donor, time, batch 조건 주입
- regulatory DNA 또는 protein generator에서 target expression, function, cell type 조건 주입
- histology-to-omics 모델에서 tissue, cancer subtype, platform metadata 주입
- multimodal foundation model에서 modality, assay, cohort 정보를 layer-wise feature modulation으로 반영

예를 들어 perturbation response prediction 모델을 생각하면, perturbation embedding을 transformer input token으로 넣을 수도 있고, AdaLN condition으로 넣을 수도 있다. perturbation이 단일 drug이나 gene knockout처럼 compact한 조건이면 AdaLN이 효율적일 수 있다. 반대로 perturbation이 pathway graph나 multiple gene set처럼 구조적이면 attention 기반 주입이 더 적합할 수 있다.

## 구현할 때 볼 포인트

AdaLN을 쓸 때는 단순히 `LayerNorm`을 바꾸는 것보다 다음 설계를 같이 봐야 한다.

1. 조건 벡터를 어떻게 만들 것인가

조건이 timestep이면 sinusoidal embedding이나 learned embedding을 쓸 수 있다. class label이면 embedding table을 쓸 수 있다. 생물학에서는 perturbation, dose, cell type, donor, tissue, batch를 각각 embedding한 뒤 합치거나 concatenate할 수 있다.

2. 어떤 parameter를 예측할 것인가

가장 단순한 AdaLN은 `gamma`, `beta`만 예측한다. DiT식 AdaLN-Zero는 attention branch와 MLP branch에 들어가는 shift, scale, gate를 더 많이 예측한다. 예측할 parameter가 많을수록 표현력은 늘지만 불안정성과 parameter cost도 늘 수 있다.

3. 초기화를 어떻게 할 것인가

AdaLN-Zero처럼 modulation을 0 근처에서 시작하면 학습 초기에 block이 identity에 가깝게 동작한다. 이는 큰 diffusion transformer에서 안정성을 줄 수 있다. 다만 모든 domain에서 zero initialization이 최선이라고 단정하면 안 된다.

4. 조건이 compact한가 structured한가

AdaLN은 compact condition에 강하다. 조건 자체가 sequence, graph, image patch처럼 구조를 가진다면 AdaLN 하나로 충분하지 않을 수 있다.

5. 해석 가능성이 있는가

AdaLN에서 나온 scale/gate 값은 조건별로 어떤 feature channel이 강화되는지 보여줄 수 있다. 다만 이것을 바로 생물학적 mechanism으로 해석하면 위험하다. feature channel이 명확한 gene program이나 pathway를 의미한다는 추가 검증이 필요하다.

## 간단한 pseudo-code

Transformer block에서 AdaLN-Zero류 조건화를 아주 단순화하면 다음과 같다.

```text
c = condition_embedding(timestep, class_or_metadata)
shift_msa, scale_msa, gate_msa, shift_mlp, scale_mlp, gate_mlp = MLP(c)

h = x + gate_msa * Attention(scale_msa * LayerNorm(x) + shift_msa)
h = h + gate_mlp * MLPBlock(scale_mlp * LayerNorm(h) + shift_mlp)
```

핵심은 attention과 MLP에 들어가기 전의 normalized feature를 조건별로 조절하고, residual update의 세기도 조건별로 조절한다는 점이다.

## 내 작업과 연결되는 질문

- single-cell perturbation prediction에서 perturbation embedding은 token으로 넣는 것이 좋은가, AdaLN condition으로 넣는 것이 좋은가?
- dose, time, donor, batch 같은 metadata는 correction layer로 처리해야 하는가, AdaLN으로 조건화해야 하는가?
- spatial model에서 tissue region이나 cancer subtype은 AdaLN으로 충분한가, 아니면 region token과 cross-attention이 필요한가?
- AdaLN의 gate/scale 값이 특정 gene program이나 pathway activation과 연결되는지 검증할 수 있는가?
- AdaLN-Zero의 안정화 효과가 omics diffusion model이나 regulatory sequence diffusion model에서도 유지되는가?

## 관련 논문

- [[ba-2016-layer-normalization]]
- [[kim-2017-dynamic-layer-normalization]]
- [[perez-2018-film-conditioning-layer]]
- [[peebles-xie-2023-diffusion-transformers]]
- [[chen-2023-pixart-alpha]]
- [[zhu-2025-unveiling-adaln-zero]]

## 관련 페이지

- [[layer-normalization]]
- [[conditioning-mechanisms]]
- [[feature-wise-modulation]]
- [[diffusion-models]]
- [[diffusion-transformers]]
- [[transformer-blocks]]
- [[cross-attention]]
- [[residual-connections]]
- [[zero-initialization]]
- [[timestep-embeddings]]
- [[single-cell-foundation-models]]
- [[spatial-ai-for-cancer]]
- [[perturbation-modeling]]
- [[protein-language-models]]
