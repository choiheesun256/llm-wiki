---
title: "Differential Expression"
type: concept
updated: 2026-05-19
---

# 차등 발현 분석 (Differential Expression Analysis)

## 정의
차등 발현(DE) 분석은 두 조건(예: 암 vs. 정상, 치료 전 vs. 후) 간의 유전자 또는 단백질 발현 차이를 통계적으로 검증하는 방법이다. RNA-seq과 proteomics 데이터 모두에 적용된다.

## 핵심 원리
- **limma (Linear Models for Microarray/RNA-seq)**: 선형 모델과 empirical Bayes 방법을 결합; 소표본에서도 강력한 통계적 검정력 제공
- **Moderated t-statistic**: 샘플별 분산 추정치를 사전분포(prior)로 보정하여 과적합 방지
- **DESeq2 / edgeR**: count 기반 RNA-seq 데이터에 특화된 음이항 모델 사용
- **Multiple testing correction**: Benjamini-Hochberg FDR 보정으로 위양성 제어
- **Proteomics DE**: TMT 정량 데이터에 limma 적용; 단백질 수준에서의 경로 분석과 연계

## 위키 내 관련 논문
- [[smyth-2004-linear-models-empirical-bayes-methods]]
- [[ritchie-2015-limma]]
- [[li-2017-cancer-proteome-atlas-tcpa]]

## 관련 개념
- [[proteomics]]
- [[phosphoproteomics]]
- [[multi-omics]]
- [[bioinformatics-tool]]
- [[kinase-substrate]]
