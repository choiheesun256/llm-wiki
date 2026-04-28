---
title: annForce Related Methods
type: comparison
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# annForce Related Methods

## 요약

이 페이지는 annForce를 함께 논의될 가능성이 높은 방법들과 비교한다.

## 비교

| 방법 | 핵심 표현 방식 | 시간 또는 dynamics를 명시적으로 사용하는가 | 조합 처리 가능 여부 | 주요 강점 | annForce 대비 주요 한계 |
| --- | --- | --- | --- | --- | --- |
| annForce | additive perturbation force fields | 예 | 예, force superposition으로 | 연속적인 perturbation-conditioned dynamics | 학습된 force가 식별 가능하고 생물학적으로 유의미하다는 증명이 아직 필요 |
| [[scGen]] | latent shift vectors | 약하게 | 제한적 | 단순하고 강력한 기준 모델 | 명시적인 trajectory 중심으로 설계되지 않음 |
| [[CPA]] | additive latent composition | 부분적 | 예 | 우아한 합성 방식과 dosage 처리 | 합성이 force space가 아닌 latent space에서 이루어짐 |
| [[CellOT]] | transport maps | 부분적 | 제한적 | 분포 수준의 반응 매칭 | perturbation 분해에 대한 명시성 부족 |
| [[GEARS]] | graph-informed perturbation decoder | 아니오 | 예 | 미지의 조합에 대한 강력한 일반화 | dynamics 설명이 약함 |
| [[GPerturb]] | sparse additive Gaussian processes | 아니오 | 예 | 해석 가능한 효과와 불확실성 추정 | 풍부한 연속 시간 neural dynamics 모델이 아님 |
| [[CellRank]] | Markov transition kernels | 예 | 아니오 | fate 확률 및 terminal state 추론 | perturbation 반응 생성 모델이 아님 |

## 활용 지침

- 조합적 perturbation 산술이 주요 질문이라면 [[CPA]]를 사용한다.
- 새로운 multigene perturbation 예측이 주요 질문이라면 [[GEARS]]를 사용한다.
- Control-to-perturbed transport가 주요 질문이라면 [[CellOT]]를 사용한다.
- Fate 구조가 주요 질문이라면 [[CellRank]]를 사용한다.
- Perturbation 합성과 명시적 dynamics를 통합하는 것이 목표라면 annForce를 사용한다.

## 관련 페이지

- [[annForce]]
- [[annForce literature scan]]
- [[method-comparison-matrix]]
