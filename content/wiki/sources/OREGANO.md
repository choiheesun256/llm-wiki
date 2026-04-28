---
title: OREGANO
type: source
status: active
source_files: []
updated: 2026-04-29
---

# OREGANO

> 📄 [*Scientific Data* (2023)](https://doi.org/10.1038/s41597-023-02757-0)

## 요약

`OREGANO`는 drug repurposing을 위해 설계된 공개 knowledge graph다. 약물, 질병, 유전자, 경로 간의 관계를 하나의 그래프로 통합하여 computational drug repurposing 연구의 기반 데이터로 제공한다.

## 핵심 내용

- 약물-질병, 약물-유전자, 질병-유전자, 유전자-경로 등 다양한 관계 유형을 통합
- 공개 접근 가능하여 재현 가능한 연구를 지원
- KG embedding이나 GNN 모델의 입력 데이터로 활용 가능

## Drug repurposing과의 관련성

- [[TxGNN]] 같은 foundation model의 학습 데이터로 활용 가능한 유형의 KG
- [[NeDRex]]와 유사하게 이질적 데이터를 통합하되, 더 경량화된 형태
- 연구자가 자체 분석 파이프라인에 빠르게 통합 가능

## 한계점

- KG의 커버리지는 원본 데이터 소스의 완전성에 의존
- 시간에 따른 업데이트 빈도가 중요하나 보장되지 않을 수 있음

## 관련 페이지

- [[drug-repurposing]]
- [[KG Drug Repurposing Review]]
- [[TxGNN]]
- [[network-medicine]]
