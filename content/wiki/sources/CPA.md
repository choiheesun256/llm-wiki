---
title: CPA
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CPA

> 📄 [Lotfollahi et al., *Molecular Systems Biology* (2023)](https://doi.org/10.15252/msb.202211517)

## 요약

`CPA` (Compositional Perturbation Autoencoder)는 latent space에서 additive embedding을 조합하여 약물 및 유전적 perturbation에 대한 single-cell 반응을 예측하는 모델이다.

## 핵심 내용

- 기저 상태(basal state), perturbation 효과, 공변량(covariate) 효과를 분리하여 모델링한다.
- 용량(dosage) 및 조합(combination) 인식 예측을 지원한다.
- 조합 구조를 명시적으로 표현하여 블랙박스 방식을 피한다.

## annForce와의 관련성

- 개념적으로 가장 가까운 선행 연구다.
- 두 방법 모두 additive composition에 의존한다.
- annForce는 이 additive 아이디어를 latent embedding이 아닌 상태 궤적 위의 force field로 확장한다.

## 한계점

- Additivity가 표현 공간(representation space)에서 이루어지며, 상태 공간(state-space) dynamics에 직접 적용되지 않는다.
- 생물학적 상호작용은 별도로 모델링하지 않으면 단순 조합 가정을 위반할 수 있다.

## 관련 페이지

- [[annForce]]
- [[GEARS]]
- [[perturbation-modeling]]
