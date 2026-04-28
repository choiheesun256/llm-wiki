---
title: CellOT
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CellOT

> 📄 [Bunne et al., *Nature Methods* (2023)](https://doi.org/10.1038/s41592-023-01969-x)

## 요약

`CellOT`는 대조군과 처리군 세포 분포 사이의 optimal transport(OT) 맵으로 perturbation 반응을 모델링하는 방법이다.

## 핵심 내용

- 짝지어지지 않은(unpaired) 대조군 및 처리군 집단 간의 매핑을 학습한다.
- 평균 이동(mean-shift) 방식의 baseline보다 이질적인 하위 집단 구조를 더 잘 보존한다.
- Embedding arithmetic이 아닌 transport 관점으로 문제를 정식화한다.

## annForce와의 관련성

- 두 방법 모두 세포 상태 분포 간의 전환을 모델링한다.
- CellOT는 분포 transport 중심, annForce는 vector field와 dynamics 중심이다.
- 명시적 궤적 모델링이 대조군-처리군 직접 transport보다 우수한지 비교하는 데 유용한 대상이다.

## 한계점

- 추가적인 시간적 구조가 도입되지 않으면 시간이 암묵적으로만 처리된다.
- Transport map은 기술적(descriptive) 관점에서는 강력하지만, 기계론적(mechanistic) 설명력은 부족할 수 있다.

## 관련 페이지

- [[annForce]]
- [[CellRank]]
- [[cell-state-dynamics-and-fate-mapping]]
