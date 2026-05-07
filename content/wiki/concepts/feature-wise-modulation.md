---
title: Feature-Wise Modulation
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [modulation, film, conditioning, adaln]
---

# Feature-Wise Modulation

## 한 줄 결론

Feature-wise modulation은 조건 벡터가 hidden feature의 각 channel을 키우거나 줄이거나 이동시키는 조건 주입 방식이다. [[adaptive-layer-normalization-adaln|AdaLN]]과 [[perez-2018-film-conditioning-layer|FiLM]]은 이 계열의 대표적인 방법이다.

## 기본 형태

Hidden feature `h`와 조건 벡터 `c`가 있을 때, 조건에서 scale과 shift를 만든다.

```text
scale, shift = MLP(c)
modulated_h = scale * h + shift
```

이때 scale은 각 feature channel의 강도를 조절하고, shift는 feature의 기준점을 이동시킨다. 조건이 바뀌면 같은 입력 feature라도 다른 channel이 강조된다.

## FiLM과 AdaLN

FiLM은 feature 자체를 조건부 affine 변환한다.

```text
FiLM(h, c) = gamma(c) * h + beta(c)
```

AdaLN은 feature를 먼저 LayerNorm으로 안정화한 뒤 modulation을 적용한다.

```text
AdaLN(h, c) = gamma(c) * LayerNorm(h) + beta(c)
```

따라서 AdaLN은 "LayerNorm이 포함된 feature-wise modulation"으로 볼 수 있다.

## 왜 channel-wise 제어가 유용한가

Neural network의 hidden channel은 특정 feature detector처럼 동작할 수 있다. 조건 벡터가 channel별 scale을 조절하면, 모델은 상황에 따라 어떤 hidden feature를 더 쓰고 덜 쓸지 결정할 수 있다.

예를 들어 diffusion model에서 timestep이 초반이면 거친 구조 복원이 중요하고, 후반이면 세부 texture가 중요할 수 있다. Single-cell model에서는 특정 cell type에서만 중요한 gene program feature가 있을 수 있다. Feature-wise modulation은 이런 조건별 feature 사용량을 조절하는 도구다.

## 장점

- Cross-attention보다 계산량이 작다.
- Transformer block마다 조건을 반복적으로 주입하기 쉽다.
- Compact metadata를 넣는 데 적합하다.
- Modulation scale이나 gate를 분석하면 조건별 feature 사용 패턴을 볼 수 있다.

## 한계

조건을 하나의 vector로 요약해야 하므로 긴 text, graph, image patch, gene set처럼 구조가 중요한 조건에는 부족할 수 있다. 이런 경우 [[cross-attention]]이나 graph attention이 더 적합하다.

또한 channel이 어떤 생물학적 의미를 갖는지는 자동으로 보장되지 않는다. Modulation 값이 특정 pathway나 gene program과 연결된다고 주장하려면 별도 검증이 필요하다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[conditioning-mechanisms]]
- [[layer-normalization]]
- [[cross-attention]]
- [[perez-2018-film-conditioning-layer]]
