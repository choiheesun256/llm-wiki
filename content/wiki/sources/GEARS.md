---
title: GEARS
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# GEARS

> 📄 [Roohani et al., *Nature Biotechnology* (2024)](https://doi.org/10.1038/s41587-023-01905-6)

## 요약

`GEARS`는 지식 그래프(knowledge graph)를 활용하여 Perturb-seq 데이터에서 단일 및 다중 유전자 perturbation의 결과를 예측하는 GNN 기반 모델이다.

## 핵심 내용

- 학습에서 보지 못한 유전자 및 조합(unseen genes and combinations)에 대한 예측에 강점이 있다.
- 사전 생물학적 구조를 활용해 일반화 성능을 높인다.
- 특히 다중 유전자 perturbation 외삽에 적합하다.

## annForce와의 관련성

- 조합적 perturbation 예측 분야에서 가장 강력한 최신 baseline 중 하나다.
- annForce는 그래프 기반 전사체 디코딩 대신 additive force superposition이라는 다른 귀납적 편향(inductive bias)을 채택한다.
- 시너지, 길항 효과, 미학습 조합 성능을 비교하는 데 좋은 대조군이다.

## 한계점

- 기본적으로 연속 시간 dynamics 모델은 아니다.
- 성능이 사용된 사전 그래프(prior graph)의 품질에 부분적으로 의존한다.

## 관련 페이지

- [[annForce]]
- [[CPA]]
- [[annForce-related-methods]]
