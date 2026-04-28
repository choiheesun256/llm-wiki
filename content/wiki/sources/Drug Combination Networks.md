---
title: Drug Combination Networks
type: source
status: active
source_files: []
updated: 2026-04-29
---

# Drug Combination Networks

> 📄 [Cheng et al., *Nature Communications* (2019)](https://doi.org/10.1038/s41467-019-09186-x)

## 요약

인간 interactome에서 약물 조합의 효과를 네트워크 관점으로 예측하는 연구다. 성공적인 약물 조합은 disease module 내 서로 다른 이웃(neighborhood)을 타겟한다는 핵심 원리를 제시한다.

## 핵심 내용

- 약물 타겟 간 네트워크 거리가 약물 조합의 효능을 예측하는 핵심 지표
- 같은 module 내 서로 겹치는 타겟보다, 분리된 이웃을 타겟하는 조합이 더 효과적
- 이 원리를 기반으로 새로운 항암 약물 조합 후보를 식별

## Drug repurposing과의 관련성

- 단일 약물 repurposing을 넘어 약물 조합 repurposing의 이론적 기반
- Disease module 구조가 약물 조합 설계에 직접적으로 활용 가능
- annForce의 combinatorial perturbation 개념과도 연결점이 있음

## 한계점

- Interactome의 불완전성이 예측 정확도를 제한
- 약물 간 pharmacokinetic 상호작용은 네트워크만으로 포착 불가

## 관련 페이지

- [[drug-repurposing]]
- [[network-medicine]]
- [[NeDRex]]
