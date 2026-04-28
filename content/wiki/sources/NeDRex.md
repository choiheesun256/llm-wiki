---
title: NeDRex
type: source
status: active
source_files: []
updated: 2026-04-29
---

# NeDRex

> 📄 [Sadegh et al., *Nature Communications* (2021)](https://doi.org/10.1038/s41467-021-27138-2)

## 요약

`NeDRex`는 network medicine 기반의 disease module 발견과 drug repurposing을 위한 통합 플랫폼이다. 10개의 이질적인 데이터 소스를 하나의 knowledge graph로 통합하고, 네트워크 알고리즘을 통해 disease module 식별부터 약물 후보 우선순위화까지 수행한다.

## 핵심 내용

- Gene, drug, drug target, disease annotation 및 이들 간의 관계를 통합하는 NeDRexDB 구축
- MuST, TrustRank, BiCoN, DIAMOnD 등 네트워크 알고리즘을 Cytoscape 앱으로 제공
- RESTful API와 Neo4j endpoint로 접근 가능
- nf-core/diseasemodulediscovery 파이프라인과 직접 연동

## Drug repurposing과의 관련성

- Disease module 발견에서 drug candidate 우선순위화까지 end-to-end 워크플로우 제공
- [[Disease Module Discovery]] 파이프라인의 핵심 백엔드 데이터 소스
- [[CADDIE]]와 상호 보완적: CADDIE는 암 특화, NeDRex는 범용

## 한계점

- 통합된 데이터의 완전성은 원본 DB에 의존
- 네트워크 알고리즘 간 결과 차이가 크므로 신중한 해석 필요

## 관련 페이지

- [[drug-repurposing]]
- [[network-medicine]]
- [[Disease Module Discovery]]
- [[CADDIE]]
