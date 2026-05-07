---
title: Diffusion Models
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [diffusion, generative-models, denoising, adaln]
---

# Diffusion Models

## 한 줄 결론

Diffusion model은 데이터를 점진적으로 노이즈로 망가뜨리는 과정과, 그 노이즈를 거꾸로 제거해 데이터를 복원하는 과정을 학습하는 생성 모델이다. 이미지 생성에서 유명하지만, single-cell expression, regulatory DNA, protein, spatial data 같은 생물학 데이터에도 응용될 수 있다.

## Forward process

Forward process는 실제 데이터 `x0`에 조금씩 노이즈를 더해 완전한 노이즈에 가까운 `xT`로 만드는 과정이다.

```text
x0 -> x1 -> x2 -> ... -> xT
```

각 timestep에서 노이즈가 조금씩 증가한다. 이 과정은 보통 사람이 설계한 고정 과정이다. 모델이 학습하는 핵심은 이 방향이 아니라 반대 방향이다.

## Reverse process

Reverse process는 노이즈가 섞인 상태에서 원래 데이터 방향으로 되돌리는 과정이다.

```text
xT -> xT-1 -> ... -> x1 -> x0
```

모델은 각 timestep에서 "현재 noisy sample에서 어떤 노이즈를 제거해야 하는가"를 예측한다. 이 denoising step을 여러 번 반복하면 새로운 sample이 생성된다.

## Timestep이 중요한 이유

Diffusion model은 timestep마다 해야 할 일이 다르다. 노이즈가 많은 초반 reverse step에서는 큰 구조를 잡아야 하고, 노이즈가 적은 후반 step에서는 세부를 다듬어야 한다.

그래서 모델은 항상 현재 timestep 정보를 알아야 한다. 이 정보를 넣는 대표 방법이 [[timestep-embeddings]]이고, [[diffusion-transformers]]에서는 이 timestep embedding을 [[adaptive-layer-normalization-adaln|AdaLN]]으로 주입하는 경우가 많다.

## Conditional diffusion

조건부 diffusion model은 timestep 외에도 추가 조건을 사용한다.

- class label: 어떤 범주의 이미지를 만들지
- text prompt: 어떤 장면을 만들지
- segmentation map 또는 image condition: 어떤 구조를 따를지
- cell type, drug, dose, tissue: 어떤 생물학 조건을 따를지

조건을 넣는 방법은 다양하다. Cross-attention은 긴 text나 image condition에 강하고, AdaLN은 timestep이나 class처럼 compact한 조건에 효율적이다.

## 생물학 데이터에서의 의미

Diffusion model은 연속적인 data distribution을 학습하는 데 강하다. 생물학에서는 다음 같은 질문과 연결될 수 있다.

- 특정 perturbation 조건에서 single-cell expression profile을 생성할 수 있는가?
- Histology image에서 spatial transcriptomics 패턴을 생성하거나 보완할 수 있는가?
- 특정 regulatory activity를 만족하는 DNA sequence를 만들 수 있는가?
- Protein backbone이나 sequence design에서 조건부 생성이 가능한가?

다만 생물학 데이터는 batch, donor, assay, cell composition 같은 confounder가 강하기 때문에 conditioning 설계와 validation이 중요하다.

## 관련 페이지

- [[diffusion-transformers]]
- [[timestep-embeddings]]
- [[conditioning-mechanisms]]
- [[adaptive-layer-normalization-adaln]]
- [[spatial-ai-for-cancer]]
