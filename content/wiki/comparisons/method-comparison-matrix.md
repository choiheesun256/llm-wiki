---
title: Method Comparison Matrix
type: comparison
status: active
source_files:
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Method Comparison Matrix

| 방법 | 방법 계열 | 강점 | 한계 | 비고 |
| --- | --- | --- | --- | --- |
| [[annForce]] | perturbation-conditioned dynamics | additive force 합성, trajectory 시뮬레이션, 조합적 외삽 | 생물학적 해석 가능성에 대한 검증이 더 필요함 | 연구 진행 중인 프로젝트 |
| [[scGen]] | latent translation VAE | 강력한 고전적 기준 모델, 단순한 구조 | 명시적 dynamics 약함 | perturbation 반응 예측 모델 |
| [[CPA]] | compositional autoencoder | additive 합성, dosage 및 covariate 처리 | 합성이 latent space 안에서 이루어짐 | 개념적으로 가장 가까운 이웃 |
| [[CellOT]] | optimal transport | 분포 수준의 반응 예측 | 명시적인 perturbation 분해에 한계 있음 | transport 중심 방법 |
| [[GEARS]] | graph-informed perturbation predictor | 미지의 multigene perturbation 예측 강함 | 연속 dynamics 설명이 약함 | 조합적 예측의 기준 모델 |
| [[GPerturb]] | Gaussian process regression | 해석 가능한 sparse 유전자 수준 효과, 불확실성 추정 | 풍부한 trajectory 모델링에는 표현력 부족 | 해석 가능한 additive 기준 모델 |
| [[CellRank]] | probabilistic fate mapping | terminal state 및 fate 확률 추론 | perturbation 생성 모델이 아님 | dynamics 벤치마크 |
