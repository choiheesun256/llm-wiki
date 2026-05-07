---
title: Conditioning Mechanisms
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [conditioning, conditional-generation, metadata, adaln]
---

# Conditioning Mechanisms

## 한 줄 결론

Conditioning mechanism은 모델에게 "어떤 조건에서 예측하거나 생성해야 하는지" 알려주는 방법이다. 조건은 class label, text prompt, timestep, cell type, drug, dose, donor, tissue, batch처럼 모델 출력에 영향을 주는 외부 정보다.

## 왜 중요한가

조건 없는 모델은 평균적인 패턴을 배운다. 하지만 실제 문제에서는 같은 입력이라도 조건에 따라 정답이 달라진다.

예를 들어 single-cell perturbation prediction에서 같은 약물이라도 cell type, dose, time, donor에 따라 transcriptomic response가 달라진다. Spatial transcriptomics에서도 같은 histology feature가 tissue region, cancer subtype, assay platform에 따라 다른 의미를 가질 수 있다.

Conditioning은 이런 정보를 모델 내부에 넣는 설계다.

## 대표적인 조건 주입 방식

| 방식                        | 설명                                         | 장점                          | 약점                                           |
| --------------------------- | -------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| Concatenation               | 입력 feature에 조건 벡터를 붙임              | 단순하고 구현이 쉬움          | 깊은 layer까지 조건이 잘 전달되지 않을 수 있음 |
| Condition token             | 조건을 별도 token으로 넣음                   | Transformer 구조와 잘 맞음    | 조건이 global vector일 때는 비효율적일 수 있음 |
| [[cross-attention]]         | 입력 token이 조건 token을 attention으로 읽음 | 길고 구조적인 조건에 강함     | 계산량과 메모리 사용이 커질 수 있음            |
| [[feature-wise-modulation]] | 조건이 feature channel의 scale/shift를 조절  | 가볍고 layer-wise 제어가 쉬움 | 조건의 세밀한 구조를 표현하기 어려울 수 있음   |
| Adapter/LoRA                | 조건별 작은 모듈이나 low-rank update를 사용  | pretrained model 조정에 유리  | 조건 수가 많으면 관리가 복잡해질 수 있음       |

## Compact condition과 structured condition

조건을 설계할 때 가장 먼저 볼 것은 조건의 형태다.

Compact condition은 하나의 벡터로 요약하기 쉬운 조건이다. 예를 들어 timestep, class label, dose, batch, tissue type, donor embedding 등이 여기에 가깝다. 이런 경우 [[adaptive-layer-normalization-adaln|AdaLN]] 같은 modulation 방식이 효율적이다.

Structured condition은 내부 구조가 중요한 조건이다. 예를 들어 text prompt, gene set, pathway graph, histology patch sequence, spatial neighborhood, protein sequence가 있다. 이런 경우 단일 벡터로 압축하면 중요한 관계가 사라질 수 있어 [[cross-attention]]이나 graph attention이 더 자연스럽다.

## 생물학 모델에서의 예시

- perturbation: drug, gene knockout, CRISPR activation
- metadata: dose, time, cell type, donor, sex, disease state
- assay context: platform, batch, tissue handling, spatial resolution
- structured biology: pathway graph, gene regulatory network, cell-cell interaction graph
- multimodal condition: histology patch, spatial coordinates, text report, omics profile

## AdaLN과의 연결

AdaLN은 conditioning mechanism 중에서도 feature-wise modulation 계열이다. 조건을 token으로 추가하지 않고, LayerNorm 뒤의 feature channel을 조건에 따라 재가중한다. 그래서 compact metadata를 반복적으로 transformer block에 주입할 때 유용하다.

## 관련 페이지

- [[adaptive-layer-normalization-adaln]]
- [[feature-wise-modulation]]
- [[cross-attention]]
- [[timestep-embeddings]]
- [[single-cell-perturbation-prediction]]
