---
title: annForce
type: project
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
updated: 2026-04-27
---

# annForce

## 요약

`annForce`는 single-cell perturbation 예측을 위한 object-conditioned force dynamics 기반 연구 프로젝트이다.

핵심 아이디어:

- 각 perturbation을 additive force field로 표현
- 모든 조합을 명시적으로 학습하는 대신 superposition으로 perturbation을 결합
- flow-matching 방식의 학습으로 세포 상태 전이를 모델링
- 학습된 dynamics를 perturbation 반응 예측 및 fate-aware 시뮬레이션에 활용

## 왜 흥미로운가

이 모델은 기존에 별개로 다루어지던 여러 분야를 하나로 연결하려 한다:

- perturbation effect 예측
- 조합적 일반화 (combinatorial generalization)
- 연속 시간 세포 상태 dynamics
- perturbation effect의 해석 가능한 분해

이 때문에 다음에만 집중하는 모델들과 차별화된다:

- endpoint 발현 변화만 예측하는 모델
- black-box latent translation만 학습하는 모델
- perturbation 조건 없이 trajectory만 추론하는 모델

## 문헌 지도

현재 annForce 관련 문헌은 네 개의 그룹으로 묶인다:

1. [[single-cell-perturbation-prediction]]
2. [[cell-state-dynamics-and-fate-mapping]]
3. [[perturbation-modeling]]
4. [[single-cell-methods]]

엄선된 전체 논문 목록은 [[annForce literature scan]]에 있다.

## 주요 비교 대상

- [[CPA]]: additive하고 compositional한 perturbation embedding
- [[GEARS]]: 조합적 perturbation 예측의 강력한 기준 모델
- [[CellOT]]: transport 기반의 control-to-perturbed 매핑
- [[CellRank]]: 상태 전이에 대한 확률적 fate mapping
- [[GPerturb]]: 불확실성을 포함한 additive하고 해석 가능한 perturbation effect
- [[scGen]]: latent space 기반 perturbation 예측의 대표적인 모델

## 핵심 질문들

- Additive force superposition이 latent translation 모델보다 언제 더 나은 성능을 보이는가?
- 명시적인 vector field 관점이 미지의 조합에 대한 외삽(extrapolation)을 개선하는가?
- Dynamics 기반 모델이 정당화되려면 얼마나 많은 시간 정보가 필요한가?
- 학습된 force field 중 어떤 부분이 생물학적으로 해석 가능하고, 어떤 부분이 예측 목적에만 기여하는가?

## 읽기 순서

- [[annForce literature scan]]
- [[what papers are related to annForce]]
- [[annForce-related-methods]]
- [[single-cell-perturbation-prediction]]
- [[cell-state-dynamics-and-fate-mapping]]

## 관련 페이지

- [[overview]]
- [[annForce literature scan]]
- [[annForce-related-methods]]
- [[what papers are related to annForce]]
