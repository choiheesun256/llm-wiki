---
title: Cross-Attention
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [attention, conditioning, transformer, multimodal]
---

# Cross-Attention

## 한 줄 결론

Cross-attention은 한 token 집합이 다른 token 집합을 attention으로 읽는 방식이다. 조건이 text, image patch, gene set, graph node처럼 길고 구조적일 때 강력한 conditioning mechanism이다.

## Self-attention과의 차이

Self-attention에서는 query, key, value가 모두 같은 token sequence에서 나온다.

```text
tokens -> Q, K, V
```

Cross-attention에서는 query는 현재 처리 중인 token에서 나오고, key와 value는 조건 token에서 나온다.

```text
current tokens -> Q
condition tokens -> K, V
```

즉 현재 representation이 조건 정보를 직접 읽어오는 구조다.

## 왜 조건 주입에 강한가

Text prompt를 조건으로 쓰는 text-to-image 모델을 생각하면, prompt는 여러 token으로 이루어진 sequence다. 각 image patch는 prompt의 다른 단어를 참고할 수 있어야 한다. Cross-attention은 image token이 text token을 선택적으로 읽게 해준다.

생물학 모델에서도 조건이 구조적일 수 있다.

- gene set 또는 pathway token
- cell-cell interaction neighborhood
- histology patch sequence
- spatial region token
- protein sequence 또는 regulatory DNA motif token
- knowledge graph node와 edge representation

이런 조건은 하나의 vector로 압축하면 관계 정보가 사라질 수 있다.

## AdaLN과의 비교

[[adaptive-layer-normalization-adaln|AdaLN]]은 조건 vector가 hidden channel의 scale/shift를 조절한다. 계산이 가볍고 compact condition에 좋다.

Cross-attention은 조건 token을 직접 읽기 때문에 더 표현력이 크지만 계산량도 늘어난다. 조건 길이가 길수록 attention cost가 증가한다.

실전적으로는 둘을 같이 쓰는 경우가 많다.

- timestep, dose, batch: AdaLN
- text, image patch, graph, gene set: cross-attention

## 생물학 ML에서 주의점

Cross-attention weight가 높다고 해서 곧바로 causal mechanism을 의미하지는 않는다. 어떤 gene token이나 image patch를 많이 봤다는 것은 모델 내부의 사용 패턴일 뿐이며, 생물학적 인과를 주장하려면 perturbation, ablation, external validation이 필요하다.

## 관련 페이지

- [[conditioning-mechanisms]]
- [[feature-wise-modulation]]
- [[adaptive-layer-normalization-adaln]]
- [[transformer-blocks]]
- [[spatial-ai-for-cancer]]
