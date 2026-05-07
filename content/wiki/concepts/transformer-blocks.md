---
title: Transformer Blocks
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [transformer, attention, mlp, residual]
---

# Transformer Blocks

## 한 줄 결론

Transformer block은 self-attention, MLP, LayerNorm, residual connection으로 구성된 반복 단위다. AdaLN은 이 block 안의 LayerNorm을 조건부로 바꿔 조건 정보를 매 layer에 주입한다.

## 기본 구성

가장 단순화하면 transformer block은 두 개의 큰 branch를 가진다.

```text
attention branch
MLP branch
```

Pre-LN 구조에서는 다음처럼 동작한다.

```text
h = x + SelfAttention(LayerNorm(x))
y = h + MLP(LayerNorm(h))
```

여기서 `x`는 입력 token representation이고, `y`는 block 출력이다.

## Self-attention branch

Self-attention은 token들이 서로를 참고하게 한다. 한 token이 다른 token의 정보를 얼마나 읽을지 attention weight로 결정한다.

이미지 patch token에서는 멀리 떨어진 patch 간 관계를 볼 수 있고, single-cell gene token 또는 cell token에서는 서로 다른 feature나 cell 간 관계를 모델링할 수 있다.

## MLP branch

MLP branch는 각 token을 독립적으로 비선형 변환한다. Attention이 token 간 정보를 섞는 역할이라면, MLP는 각 token 내부 feature를 재조합하고 확장하는 역할을 한다.

보통 hidden dimension을 키웠다가 다시 줄이는 feed-forward network 형태다.

## LayerNorm의 위치

LayerNorm은 attention과 MLP 앞에 들어가 feature scale을 안정화한다. 깊은 transformer에서는 block을 수십, 수백 개 쌓을 수 있기 때문에 안정화가 중요하다.

AdaLN은 이 LayerNorm의 scale/shift를 조건 벡터에서 만든다. 그래서 transformer block마다 조건이 feature 처리 방식에 영향을 준다.

## Residual connection의 역할

Residual connection은 branch 출력만 쓰지 않고 원래 입력 `x`를 더한다.

```text
output = x + branch(x)
```

이 구조는 gradient 흐름을 좋게 하고, block이 필요한 변화만 학습하도록 만든다. AdaLN-Zero에서는 residual branch의 크기를 gate로 조절해 학습 초기에 block이 identity에 가깝게 시작하도록 만든다.

## AdaLN이 block에 들어가는 위치

DiT식 AdaLN-Zero를 단순화하면 다음과 같다.

```text
h = x + gate_attn * Attention(AdaLN_attn(x, condition))
y = h + gate_mlp * MLP(AdaLN_mlp(h, condition))
```

조건은 attention과 MLP에 들어가기 전 feature의 scale/shift를 바꾸고, residual update의 강도도 바꾼다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[layer-normalization]]
- [[residual-connections]]
- [[cross-attention]]
- [[diffusion-transformers]]
