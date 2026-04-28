---
title: Perturbation Modeling
type: concept
status: active
source_files:
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Perturbation Modeling

세포가 perturbation에 어떻게 반응하는지를 예측하거나 설명하는 방법론들을 정리한다.

## 주요 설계 패턴

- control 세포를 perturbed 세포로 변환하는 latent translation
- perturbation embedding의 덧셈적 합성 (additive composition)
- control 분포와 perturbed 분포 사이의 transport
- perturbation conditioning을 통한 명시적 세포 상태 dynamics 모델링
- 불확실성을 포함한 해석 가능한 sparse perturbation 효과 추정

## 대표적 방법론

- [[scGen]]
- [[CPA]]
- [[CellOT]]
- [[GEARS]]
- [[GPerturb]]
- [[annForce]]

## 최근 연구 동향

이 분야는 단순한 분포 내(in-distribution) 예측을 넘어 다음으로 이동하고 있다:

- 학습에 없던 세포 유형 (unseen cell types)
- 학습에 없던 perturbation (unseen perturbations)
- 학습에 없던 조합 (unseen combinations)
- 이질적인 반응 분포 (heterogeneous response distributions)
- fate 또는 trajectory를 고려한 평가 방식

## 관련 페이지

- [[single-cell-perturbation-prediction]]
- [[annForce-related-methods]]
