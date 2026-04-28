---
title: CellRank
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CellRank

> 📄 [Lange et al., *Nature Methods* (2022)](https://doi.org/10.1038/s41592-021-01346-6)

## 요약

`CellRank`는 RNA velocity와 같은 방향성 정보를 Markov 상태 모델링과 결합하여 세포 분화 운명(fate)을 추정하는 확률론적 프레임워크다.

## 핵심 내용

- 초기, 중간, 말단 상태를 추정한다.
- Pseudotime만 계산하는 것이 아니라 분화 확률(fate probabilities)을 산출한다.
- CellRank 2는 이를 멀티뷰(multiview) 데이터와 실험적 시간 정보로 확장했다.

## annForce와의 관련성

- annForce가 운명 인식(fate-aware) dynamics 모델을 지향하는 만큼, CellRank는 핵심적인 개념적 비교 대상이다.
- CellRank는 그래프 위의 전이 확률에, annForce는 학습된 연속 vector field에 초점을 맞춘다.
- 평가 지표가 재구성 손실이 아닌 계통 편향(lineage bias)과 분화 결과일 때 두 방법 모두 관련성이 높다.

## 한계점

- 의미 있는 방향성 사전 정보(directional prior) 또는 전이 커널(transition kernel)이 필요하다.
- 운명 매핑(fate mapping)과 perturbation 조건부 dynamics는 동일한 문제가 아니다.

## 관련 페이지

- [[annForce]]
- [[cell-state-dynamics-and-fate-mapping]]
- [[annForce-related-methods]]
