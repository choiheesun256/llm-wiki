---
title: CADDIE
type: source
status: active
source_files:
  - Clippings/Cancer driver drug interaction explorer.md
updated: 2026-04-28
---

# CADDIE

> 📄 [Hartung et al., *Nucleic Acids Research* (2022)](https://doi.org/10.1093/nar/gkac384)

## 요약

`CADDIE` (Cancer Driver Drug Interaction Explorer)는 암 driver gene을 기반으로 drug repurposing 후보를 체계적으로 탐색하는 웹 애플리케이션이다.

## 핵심 내용

- 6개의 gene-gene interaction DB와 4개의 drug-gene interaction DB를 통합
- 암 driver gene, 암종별 mutation 빈도, 유전자 발현 정보, 항암 약물 정보를 포함
- 직접 타겟이 불가능한 driver gene에 대해 네트워크상 기능적으로 관련된 대안 타겟을 제안
- 다양한 네트워크 알고리즘으로 drug target 및 repurposing 후보를 식별

## Drug repurposing과의 관련성

- Precision oncology 패러다임에서 evidence 기반 약물 선택을 지원
- 네트워크 관점의 간접 타겟팅으로 druggable하지 않은 driver gene도 공략 가능
- Disease module 개념과 자연스럽게 연결됨

## 한계점

- 네트워크 DB의 완전성에 의존하며, 알려지지 않은 상호작용은 반영 불가
- In silico 결과가 실제 임상적 유효성을 보장하지 않음

## 관련 페이지

- [[drug-repurposing]]
- [[network-medicine]]
- [[Disease Module Discovery]]
