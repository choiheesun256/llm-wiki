---
title: Single-Cell Perturbation Prediction
type: concept
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Single-Cell Perturbation Prediction

## 요약

유전적, 화학적, 또는 환경적 perturbation에 의해 세포 상태가 어떻게 변화하는지를 예측하는 모델들을 다룬다.

## 주요 계열

- [[scGen]] 같은 latent translation 모델
- [[CPA]] 같은 compositional latent 모델
- [[GEARS]] 같은 지식 기반 조합 예측 모델
- [[CellOT]] 같은 transport 모델
- [[GPerturb]] 같은 해석 가능한 additive 모델
- 세포 반응의 이질성을 고려한 scoring 방법

## annForce가 추가하는 것

- 단순 종단점(endpoint) 예측이 아닌 명시적 연속 dynamics 모델링
- perturbation을 additive force 객체로 표현
- 조합적 중첩(combinatorial superposition)으로 자연스럽게 확장 가능
- 유전자 발현 재구성뿐 아니라 fate 예측과의 연결 가능성

## 미해결 질문들

- Additive force 합성이 latent vector 산술보다 더 나은 inductive bias인가?
- 실제 시간 레이블이 없을 때 모델이 얼마나 견고한가?
- 명시적 dynamics가 out-of-distribution perturbation 일반화를 실제로 개선하는가?

## 관련 페이지

- [[annForce]]
- [[perturbation-modeling]]
- [[annForce-related-methods]]
