---
title: Layer Normalization
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [normalization, layernorm, transformer, adaln]
---

# Layer Normalization

## 한 줄 결론

Layer Normalization, 줄여서 LayerNorm은 한 샘플 안의 hidden dimension을 기준으로 feature를 정규화하는 방법이다. Transformer에서 attention과 MLP가 안정적으로 학습되도록 만드는 기본 부품이고, [[adaptive-layer-normalization-adaln|AdaLN]]은 이 LayerNorm의 affine parameter를 조건부로 바꾼 변형이다.

## 무엇을 정규화하나

신경망의 hidden vector `x`가 있다고 하자. 이 vector에는 여러 channel 또는 hidden dimension이 있다. LayerNorm은 같은 샘플 안에서 이 dimension들의 평균과 분산을 계산한 뒤, 값의 분포를 평균 0, 분산 1에 가깝게 맞춘다.

```text
normalize(x) = (x - mean(x)) / sqrt(var(x) + epsilon)
```

이후 학습 가능한 scale과 shift를 적용한다.

```text
LayerNorm(x) = gamma * normalize(x) + beta
```

여기서 `gamma`는 각 channel을 얼마나 키울지 정하는 scale이고, `beta`는 각 channel을 얼마나 이동시킬지 정하는 shift다.

## BatchNorm과의 차이

Batch Normalization은 mini-batch 전체의 통계를 사용한다. 반면 LayerNorm은 각 샘플 내부의 hidden dimension을 사용한다. 그래서 batch size가 작거나 sequence 길이가 변하거나 autoregressive decoding을 하는 상황에서도 쓰기 쉽다.

Transformer는 token마다 hidden vector를 갖는다. LayerNorm은 보통 각 token의 hidden vector를 독립적으로 정규화한다. 이 특성 때문에 Transformer 계열 모델에서 LayerNorm이 기본 선택지가 되었다.

## Transformer에서의 역할

Transformer block은 attention과 MLP를 반복한다. 이 과정에서 hidden representation의 크기가 계속 변하면 학습이 불안정해질 수 있다. LayerNorm은 각 block 안에서 feature scale을 일정하게 유지해준다.

Pre-LN 구조에서는 attention이나 MLP에 들어가기 전에 LayerNorm을 먼저 적용한다.

```text
h = x + Attention(LayerNorm(x))
y = h + MLP(LayerNorm(h))
```

이 구조는 깊은 transformer를 더 안정적으로 학습시키는 데 자주 쓰인다.

## AdaLN과의 관계

일반 LayerNorm의 `gamma`, `beta`는 학습 후 모든 조건에서 동일하게 쓰인다. AdaLN은 이 부분을 바꾼다.

```text
LayerNorm: gamma, beta
AdaLN: gamma(condition), beta(condition)
```

즉 LayerNorm이 "정규화 후 고정 affine 변환"이라면, AdaLN은 "정규화 후 조건부 affine 변환"이다. 조건이 바뀌면 normalized feature의 channel별 강조 방식도 바뀐다.

## 볼 때 주의할 점

LayerNorm은 feature를 표준화하지만 정보를 없애는 것만은 아니다. 정규화 후에도 scale과 shift가 다시 적용되고, residual connection을 통해 원래 흐름도 유지된다. 따라서 LayerNorm은 "정보 삭제"라기보다 "학습 가능한 안정화 장치"로 보는 것이 맞다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[feature-wise-modulation]]
- [[transformer-blocks]]
- [[zero-initialization]]
- [[ba-2016-layer-normalization]]
