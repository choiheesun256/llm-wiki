---
title: Network Medicine
type: concept
status: active
source_files:
  - Clippings/The end of medicine as we know it - and why your health has a future.md
  - Clippings/Inferring and Evaluating Network Medicine-Based Disease Modules with Nextflow.md
  - Clippings/Cancer driver drug interaction explorer.md
updated: 2026-04-28
---

# Network Medicine

## 요약

질병을 단일 유전자나 단일 경로가 아닌, 분자 상호작용 네트워크(interactome) 내의 perturbation으로 이해하는 접근이다. Disease module — 질병과 관련된 유전자/단백질의 국소적 서브네트워크 — 이 핵심 단위다.

## 주요 개념

- **Interactome**: 인간 단백질-단백질 상호작용 네트워크 전체
- **Disease module**: 질병 관련 유전자가 interactome 내에서 형성하는 클러스터
- **Seed gene**: 질병과의 연관이 알려진 시작 유전자 집합
- **Module detection**: seed gene에서 출발하여 disease module을 확장하는 알고리즘 (DOMINO, DIAMOnD, ROBUST 등)

## Drug repurposing에서의 역할

Network medicine은 drug repurposing의 이론적 뼈대다:

- Disease module 내 유전자 중 druggable한 것을 타겟으로 기존 약물 재배치
- 직접 타겟이 불가능한 유전자도 네트워크상 이웃을 통해 간접 공략
- 서로 다른 질병이 module을 공유하면, 한 질병의 약물이 다른 질병에도 효과를 보일 수 있음

## 미해결 질문들

- Interactome의 불완전성이 disease module의 신뢰도에 얼마나 영향을 미치는가?
- Module detection 방법마다 결과가 크게 달라지는데, 어떤 기준으로 방법을 선택해야 하는가?
- Network 구조만으로 약물 효과를 예측하는 것이 어디까지 유효한가?

## 관련 페이지

- [[drug-repurposing]]
- [[Disease Module Discovery]]
- [[CADDIE]]
- [[Systems Medicine]]
