---
title: "Bioinformatics Tool"
type: concept
updated: 2026-05-19
---

# 생물정보학 도구 (Bioinformatics Tool)

## 정의

생물정보학 도구(bioinformatics tool)는 유전체, 전사체, 단백체, 인산화체 등 대규모 오믹스 데이터를 처리·분석·시각화하기 위한 소프트웨어 및 웹 플랫폼의 총칭이다. 암 프로테오제노믹스 분야에서는 CPTAC 등의 대규모 데이터를 활용하기 위한 다양한 특화 도구들이 개발되어 있으며, 단백질 발현 비교, 인산화 사이트 분석, 키나아제 활성 추론, EMT 점수화, 기능 네트워크 구축 등 다양한 분석을 지원한다.

이러한 도구들은 크게 웹 기반 인터랙티브 플랫폼과 커맨드라인 파이프라인으로 나뉜다. 웹 기반 플랫폼은 코딩 없이 탐색적 분석을 가능하게 하며, CPTAC 데이터에 대한 접근성을 높인다. 반면 커맨드라인 도구는 대규모 배치 분석, 커스텀 파이프라인 통합, 재현 가능한 연구(reproducible research)에 유리하다. 최근에는 머신러닝(ML)과 그래프 신경망(GNN)을 활용한 기능 예측 도구들도 등장하고 있다.

## 핵심 원리

- **cProSite**: CPTAC 12개 암종의 단백질·인산화 발현 데이터를 시각화하는 NCI 웹 플랫폼; 종양 vs 정상 비교, mRNA-단백질 상관관계, 암종 간 교차 비교 제공
- **EMTome**: pan-cancer EMT 유전자 서명, EMT 점수, 약물 감수성(GDSC/CCLE), 면역 프로파일을 통합하는 MD Anderson 웹 포털
- **FunMap**: CPTAC 1,194명 11개 암종의 단백질 공발현 기반 기능 네트워크(10,525 유전자, 196,800 엣지); XGBoost + GNN으로 저빈도 암 드라이버 발굴
- **PhosphoSitePlus**: 인산화 사이트 참조 데이터베이스; 실험 검증 사이트 수록
- **KSEA (Kinase-Substrate Enrichment Analysis)**: 인산화프로테오믹스 데이터로부터 키나아제 활성 추론
- **Percolator**: semi-supervised learning 기반 펩타이드 동정 FDR 제어; MS 데이터 분석 표준 도구
- **limma**: 선형 모델 및 empirical Bayes 방법을 적용한 차등 단백질 발현 분석; 소규모 복제 실험에 특히 유리
- **DIA-NN, Spectronaut**: DIA 데이터 분석 소프트웨어; spectral library 기반 정밀 정량

## 위키 내 관련 논문

### 웹 플랫폼
- [[wang-2023-cprosite-web-based-interactive-platform]] — cProSite: CPTAC 12개 암종 단백질·인산화·유전체 통합 분석 웹 플랫폼
- [[vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal]] — EMTome: pan-cancer EMT 유전자 서명 및 약물 감수성 포털

### 기능 네트워크 및 ML
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap: CPTAC pan-cancer 기능 네트워크 (Nature Cancer 2025)

### 인산화프로테오믹스 분석
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] — 인산화프로테오믹스 생물정보학 도구 16개 키나아제/인산가수분해효소 데이터베이스 종합 가이드

### 통계 방법론
- [[smyth-2004-linear-models-empirical-bayes-methods]] — limma: 선형 모델 + empirical Bayes 차등 발현 분석 방법론

## 관련 개념

- [[proteomics]]
- [[phosphoproteomics]]
- [[proteogenomics]]
- [[CPTAC]]
- [[multi-omics]]
- [[pan-cancer]]
- [[kinase-signaling]]
