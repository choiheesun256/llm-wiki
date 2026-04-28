---
title: annForce literature scan
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# annForce literature scan

## 요약

이 소스 페이지는 [[annForce related literature scan - IF5+ papers]]에서 수집된 30편의 문헌 스캔을 정리한 것이다.

스캔 결과, annForce는 다음 분야들의 혼합으로 이해될 수 있다:

- 조합적 perturbation 모델링
- transport 기반 상태 전이 모델링
- 연속 세포 dynamics 및 운명 매핑
- Perturb-seq 기반 평가

## 핵심 내용

- 가장 직접적인 비교 대상은 [[CPA]], [[GEARS]], [[CellOT]], [[GPerturb]], [[scGen]]이다.
- 가장 중요한 dynamics 참고 문헌은 [[CellRank]], RNA velocity, scVelo, Waddington-OT다.
- 데이터 및 평가의 핵심 기준점은 Perturb-seq, CROP-seq, direct-capture Perturb-seq, genome-scale Perturb-seq, LARRY다.
- 최근 연구 흐름은 분포 내 재구성보다 진정한 일반화(true generalization)를 더 중요하게 다루는 방향으로 나아가고 있다.

## 근거

- `Benchmarking algorithms for generalizable single-cell perturbation response prediction`은 일반화를 핵심 평가 문제로 삼는다.
- `Predicting cellular responses to complex perturbations in high-throughput screens`와 `Predicting transcriptional outcomes of novel multigene perturbations with GEARS`는 additive 또는 구조화된 조합이 여전히 핵심 설계 패턴임을 보여준다.
- `Learning single-cell perturbation responses using neural optimal transport`와 `Optimal-transport analysis of single-cell gene expression identifies developmental trajectories in reprogramming`는 transport 기반 관점의 유용성을 제시한다.
- `Fundamental limits on dynamic inference from single-cell snapshots`는 약한 지도(weak supervision)에서 기계론적 dynamics를 과도하게 주장하는 것에 대한 경고로 작용한다.

## 한계점

- 스캔이 IF/JIF 필터링된 동료 심사 논문을 우선시하기 때문에, 영향력 있는 최신 프리프린트는 의도적으로 제외되어 있다.
- 최근 벤치마킹된 여러 방법들이 아직 높은 IF 저널에 게재되지 않아 이 목록에 포함되지 않았다.

## 관련 페이지

- [[annForce]]
- [[what papers are related to annForce]]
- [[annForce-related-methods]]
