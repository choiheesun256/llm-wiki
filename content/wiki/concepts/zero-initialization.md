---
title: Zero Initialization
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [initialization, optimization, adaln-zero, transformer]
---

# Zero Initialization

## 한 줄 결론

Zero initialization은 특정 layer나 branch의 출력을 학습 시작 시점에 0에 가깝게 만들도록 초기화하는 방법이다. AdaLN-Zero에서는 modulation과 residual update가 처음에는 거의 작동하지 않게 하여 큰 diffusion transformer가 안정적으로 시작하도록 돕는다.

## 모든 weight를 0으로 둔다는 뜻은 아니다

주의할 점은 모델 전체를 0으로 초기화한다는 뜻이 아니라는 것이다. 모든 weight를 0으로 두면 neuron들이 같은 gradient를 받아 대칭성이 깨지지 않아 학습이 어렵다.

AdaLN-Zero에서 말하는 zero initialization은 보통 modulation을 출력하는 마지막 layer나 residual gate 관련 출력을 0 근처에서 시작하게 하는 것이다. 모델 전체의 attention, MLP weight까지 모두 0이라는 뜻은 아니다.

## 왜 안정화가 되는가

깊은 transformer에서 각 block이 처음부터 큰 residual update를 만들면 hidden representation이 빠르게 불안정해질 수 있다. Zero initialization을 쓰면 학습 초기에 각 block이 identity function에 가깝게 동작한다.

```text
output = x + small_update
```

이 상태에서 모델은 점진적으로 필요한 update를 키운다. 특히 diffusion model에서는 timestep별 denoising 함수가 복잡하므로, 초기 학습 안정성이 중요하다.

## AdaLN-Zero에서의 역할

AdaLN-Zero는 조건 벡터에서 LayerNorm shift/scale과 residual gate를 만든다. 이 modulation branch를 0 근처에서 시작하면 조건이 처음부터 hidden state를 과하게 흔들지 않는다.

학습이 진행되면서 조건별 modulation이 커지고, 각 transformer block이 timestep과 class condition에 맞는 denoising update를 학습한다.

## Zero initialization과 regularization

Zero initialization은 일종의 구조적 regularization처럼 작동할 수 있다. 모델이 처음부터 복잡한 조건부 변환을 하지 못하게 막고, 필요한 만큼만 residual update를 키우게 만든다.

다만 항상 최선은 아니다. [[zhu-2025-unveiling-adaln-zero|AdaLN-Zero 분석 논문]]은 zero initialization의 중요성을 분석하면서 AdaLN-Gaussian 같은 대안도 제안했다. domain과 architecture에 따라 초기화 전략은 다시 검증해야 한다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[residual-connections]]
- [[diffusion-transformers]]
- [[transformer-blocks]]
- [[zhu-2025-unveiling-adaln-zero]]
