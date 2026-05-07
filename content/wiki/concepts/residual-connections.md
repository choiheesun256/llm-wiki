---
title: Residual Connections
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [residual, transformer, optimization, adaln-zero]
---

# Residual Connections

## 한 줄 결론

Residual connection은 neural network block의 출력에 원래 입력을 더하는 구조다. 깊은 모델이 안정적으로 학습되도록 돕고, AdaLN-Zero에서는 residual branch의 업데이트 강도를 gate로 조절한다.

## 기본 형태

일반 block이 다음처럼 동작한다고 하자.

```text
y = F(x)
```

Residual connection은 원래 입력을 더한다.

```text
y = x + F(x)
```

이렇게 하면 block은 전체 변환을 처음부터 새로 배우는 대신, 입력에서 얼마나 바꿀지만 학습하면 된다.

## 왜 깊은 모델에 중요할까

Transformer나 ResNet처럼 block을 많이 쌓는 모델에서는 gradient가 깊은 layer까지 잘 전달되어야 한다. Residual connection은 입력에서 출력까지 직접 경로를 제공해 optimization을 쉽게 만든다.

또한 어떤 block이 지금 필요하지 않으면 `F(x)`를 0에 가깝게 만들어 거의 identity function처럼 동작할 수 있다.

## Transformer에서의 위치

Transformer block은 보통 attention branch와 MLP branch 각각에 residual connection을 둔다.

```text
h = x + Attention(LayerNorm(x))
y = h + MLP(LayerNorm(h))
```

이 구조 덕분에 attention이나 MLP가 학습 초기에 완벽하지 않아도 전체 모델이 입력 흐름을 유지할 수 있다.

## AdaLN-Zero와 residual gate

AdaLN-Zero에서는 단순히 LayerNorm scale/shift만 조건화하지 않는다. Attention branch와 MLP branch의 residual update 크기도 조건에서 나온 gate로 조절한다.

```text
h = x + gate_attn(condition) * Attention(...)
y = h + gate_mlp(condition) * MLP(...)
```

초기에는 gate가 0에 가깝게 시작해서 block이 거의 identity처럼 동작한다. 학습이 진행되면서 gate가 커지면 각 block이 필요한 만큼 denoising update를 수행한다.

## 생물학 모델에서의 해석

Residual connection은 "기본 상태에서 필요한 변화만 더한다"는 관점과 잘 맞는다. Perturbation modeling에서는 control state에서 perturbation-induced shift를 더하는 구조와 개념적으로 닮아 있다. 다만 transformer residual은 optimization 구조이고, biological perturbation effect와 직접 동일시하면 안 된다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[zero-initialization]]
- [[transformer-blocks]]
- [[diffusion-transformers]]
- [[perturbation-modeling]]
