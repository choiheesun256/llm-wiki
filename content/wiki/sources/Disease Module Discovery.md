---
title: Disease Module Discovery
type: source
status: active
source_files:
  - Clippings/Inferring and Evaluating Network Medicine-Based Disease Modules with Nextflow.md
  - Clippings/nf-corediseasemodulediscovery A pipeline for network-based disease module identification..md
updated: 2026-04-28
---

# Disease Module Discovery

> 📄 [Kersting et al., *bioRxiv* (2025)](https://doi.org/10.1101/2025.11.20.687681)
> 🔧 [nf-core/diseasemodulediscovery](https://nf-co.re/diseasemodulediscovery)

## 요약

Disease module discovery는 질병 관련 seed gene을 interactome 네트워크에서 확장하여 disease module (질병 관련 서브네트워크)을 식별하는 접근이다. 이 논문은 6가지 대표적 module detection 도구를 Nextflow 파이프라인으로 통합하여 체계적으로 비교 평가한다.

## 핵심 내용

- DOMINO, DIAMOnD, ROBUST 등 6가지 module detection 방법을 자동화된 파이프라인으로 실행 및 비교
- Module의 topology, functional coherence, robustness, seed recovery 능력을 평가
- 50개 질병-네트워크 조합에서 방법 간 결과가 크게 다름을 확인
- 어떤 방법도 일관되게 우수하지 않아 신중한 방법 선택이 필요
- Drug prioritization과 Drugst.One 연동으로 repurposing 후보까지 제안

## Drug repurposing과의 관련성

- Disease module은 drug repurposing의 타겟 발견 단계에서 핵심적인 역할
- Module 내 유전자를 타겟으로 기존 약물을 재배치하는 전략의 기반
- 파이프라인이 nf-core에 통합되어 재현 가능한 연구를 지원

## 한계점

- Disease module의 정의와 경계가 방법에 따라 크게 달라짐
- Seed gene의 선택이 결과에 큰 영향을 미침
- 네트워크의 불완전성(missing interactions)이 module 품질을 제한

## 관련 페이지

- [[drug-repurposing]]
- [[network-medicine]]
- [[CADDIE]]
