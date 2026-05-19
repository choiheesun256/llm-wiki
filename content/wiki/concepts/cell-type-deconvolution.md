---
title: "Cell Type Deconvolution"
type: concept
updated: 2026-05-19
---

# 세포 유형 분해 (Cell Type Deconvolution)

## 정의
Cell type deconvolution은 bulk RNA-seq 또는 spatial transcriptomics 데이터에서 각 spot/sample에 기여하는 세포 유형의 비율을 추정하는 계산적 방법이다. 공간적 분해능이 낮은 ST 데이터를 single-cell 참조와 통합하는 데 필수적이다.

## 핵심 원리
- **SPOTlight**: NMF(Non-negative Matrix Factorization) 기반 seeded regression으로 ST spot의 세포 구성 비율 추정
- **CARD**: Conditional Autoregressive 모델을 이용한 공간적 맥락 고려 deconvolution
- **Cell2location**: Bayesian 계층 모델 기반으로 세포 유형 밀도를 공간적으로 매핑
- **참조 scRNA-seq 데이터**: 고품질 단일세포 참조 atlas가 deconvolution 정확도를 결정
- **한계**: spot 내 세포 수 불균형, 배치 효과, 참조 데이터 불완전성이 주요 오류 원인

## 위키 내 관련 논문
- [[elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute]]
- [[ma-2022-spatially-informed-cell-type-deconvolution-spatial]]
- [[long-2023-spatially-informed-clustering-integration-deconvolution]]

## 관련 개념
- [[spatial-transcriptomics]]
- [[scRNA-seq]]
- [[tumor-microenvironment]]
- [[spatial-ai-for-cancer]]
