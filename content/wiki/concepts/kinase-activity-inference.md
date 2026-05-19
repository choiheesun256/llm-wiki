---
title: "Kinase Activity Inference"
type: concept
updated: 2026-05-20
---

# Kinase Activity Inference (키나아제 활성 추론)

## 정의
Kinase activity inference는 인산화 프로테오믹스 데이터로부터 특정 키나아제의 활성을 계산적으로 추론하는 방법론이다. 키나아제 자체의 발현량보다 기질(substrate) 인산화 패턴이 키나아제 기능 상태를 더 잘 반영한다는 원리에 기반하며, KSEA (Kinase-Substrate Enrichment Analysis), VIPER, decoupler 등의 도구가 활용된다.

## 핵심 원리
- **KSEA**: PhosphoSitePlus 등 키나아제-기질 데이터베이스를 참조하여 기질 집합의 인산화 변화를 집계
- **활성 스코어**: 각 키나아제에 대해 기질들의 인산화 fold-change를 통계적으로 요약 (z-score 또는 NES)
- **Network propagation**: 인산화 신호를 상위 키나아제로 역추적하는 방법 (e.g., CARNEVAL, PTM-SEA)
- mRNA/단백질 발현만으로는 놓치는 post-translational 활성 변화를 포착
- 임상 샘플에서 actionable kinase를 발굴하는 데 직접 활용

## 위키 내 관련 논문
- [[ylmaz-2021-robust-inference-kinase-activity-using]]
- [[wiredja-2017-ksea-app-web-based-tool-kinase]]
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]]

## 관련 개념
- [[kinase-activity]]
- [[PhosphoSitePlus]]
- [[multi-omics-integration]]
