---
title: Cell-State Dynamics and Fate Mapping
type: concept
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Cell-State Dynamics and Fate Mapping

## 요약

세포가 state space를 어떻게 이동하고, 분기하며, 최종 운명(terminal fate)으로 수렴하는지를 추론하는 방법론들을 다룬다.

## 주요 참고 방법론

- RNA velocity
- scVelo
- [[CellRank]]
- Waddington-OT
- LARRY lineage tracing
- Population balance analysis

## 핵심 모델링 긴장 관계

- 스냅샷 데이터 vs. 실제 시간 감독(temporal supervision)
- 지역적 방향성(local directionality) vs. 전체적 fate 구조
- 메커니즘적 해석 vs. 예측 성능
- 연속 벡터장 vs. 그래프 기반 전이 연산자

## annForce와의 관련성

annForce는 두 가지 측면을 동시에 가지고 있어 독특한 위치에 있다:

- perturbation 예측 모델이기도 하고
- dynamics 모델이기도 하다

따라서 평가에는 두 가지 지표가 모두 포함되어야 한다:

- perturbation 재구성 지표
- fate 및 trajectory 지표

## 관련 페이지

- [[annForce]]
- [[CellRank]]
- [[single-cell-perturbation-prediction]]
