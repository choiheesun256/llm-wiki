---
title: "Phosphoproteomics"
type: concept
updated: 2026-05-19
---

# Phosphoproteomics (인산화단백질체학)

## 정의

Phosphoproteomics는 세포 또는 조직 내의 모든 단백질 인산화(phosphorylation) 사건을 대규모로 동정하고 정량하는 학문 분야다. 인산화는 가장 중요하고 광범위한 post-translational modification(PTM)으로, 세린(Ser), 트레오닌(Thr), 타이로신(Tyr) 잔기의 히드록실기에 인산기가 추가된다. 키나아제(kinase)가 인산화를 수행하고, 포스파타아제(phosphatase)가 이를 제거한다. 이 동적인 인산화-탈인산화 순환이 세포 내 신호전달 네트워크의 물리적 기반이다.

암 연구에서 phosphoproteomics는 두 가지 핵심 가치를 제공한다. 첫째, 단백질 발현만으로는 알 수 없는 kinase 활성화 상태를 정량적으로 추론할 수 있다. 많은 oncogenic kinase는 발현 수준이 아닌 활성화 상태(인산화 여부)가 기능적으로 결정적이다. 둘째, 돌연변이나 copy number 변화가 실제 신호전달에 미치는 기능적 결과(downstream effect)를 phosphosite 수준에서 직접 측정할 수 있다. Mertins(2016)는 EGFR/SRC 활성화 phosphosite가 5q 결실의 트랜스-효과로 유도됨을 proteogenomics로 밝혔고, 이는 RNA/DNA 수준에서는 보이지 않는 신호였다.

## 핵심 원리

**Phosphopeptide 농축 (Enrichment)**
- 인산화 펩타이드는 전체 펩타이드 풀에서 소수(<1%)를 차지하므로 농축이 필수
- **IMAC (Immobilized Metal Affinity Chromatography)**: Fe3+, Ga3+ 등의 금속 이온이 인산기에 결합. 고처리량에 유리
- **TiO2 (Titanium Dioxide) enrichment**: 가장 널리 사용. pH 및 완충액 조건 최적화 필요
- 두 방법의 직렬 또는 병렬 적용으로 포괄적 커버리지 확보; CPTAC 워크플로우에서 표준
- **HILIC (Hydrophilic Interaction Liquid Chromatography)**: glycopeptide 분리에도 사용

**정량 방법: TMT vs. Label-free**
- **TMT (Tandem Mass Tag) / TMTpro**: 현재 CPTAC 표준. 최대 16개 샘플 동시 정량; 배치 효과 내부 표준(bridge channel)으로 보정; 비율 압축(ratio compression)이 단점
- **iTRAQ**: TMT 선행 기술; 8채널; 현재 CPTAC에서 TMT로 대체됨 (Mertins 2016)
- **Label-free quantification (LFQ)**: 라벨 비용 없음; 대규모 코호트에 유리하나 재현성이 TMT보다 낮을 수 있음 (Zhang 2023)
- **DIA (Data-Independent Acquisition)**: Orbitrap Astral 등 최신 기기로 30분에 ~30,000 phosphosite 측정 (Lancaster 2024)

**Kinase Activity Inference (키나아제 활성 추론)**
- 직접 kinase 활성을 측정하는 대신, 알려진 기질 phosphosite들의 정량값을 집합적으로 분석하여 upstream kinase 활성을 추론
- **KSEA (Kinase-Substrate Enrichment Analysis)**: Z-score 기반; PhosphoSitePlus + NetworKIN 기질 데이터베이스 사용; 웹앱 kseaapp (Wiredja 2017)
- **RoKAI**: kinase-substrate 주석, 공진화, 구조적 거리, PPI 네트워크를 통합한 네트워크 전파 기반 추론; 주석이 희박한 understudied kinase에서도 강건 (Yilmaz 2021)
- **PTM-SEA**: gene set enrichment analysis의 PTM 버전; pathway 수준 인산화 변화 분석

**"Dark Phosphoproteome" 문제**
- 전체 인산화 사건의 95% 이상은 kinase/기능 주석이 없는 "dark" phosphosite
- CoPheeMap/CoPheeKSA (Jiang 2025): CPTAC 1,195 종양에서 XGBoost로 26,280 phosphosite co-regulation 네트워크 구축; 24,015개 새로운 kinase-substrate 연관 예측
- 기존 서열 모티프 기반 예측을 넘어, 공발현 네트워크 기반으로 understudied kinase를 치료 표적으로 제안

**정규화(Normalization)**
- phosphoprotein level의 변화는 인산화 변화(stoichiometry)와 단백질 발현 변화가 복합된 것
- 단백질 발현으로 보정(phospho/protein ratio)하여 true phosphorylation stoichiometry 추정
- IRS (Internal Reference Scaling): TMT 배치 간 정규화; CPTAC 표준
- Wu(2011): 포괄적 인산화 동태 해석을 위한 올바른 정규화 방법 체계화

**시간 해상도 Phosphoproteomics**
- 단일 시점 스냅샷에서 시계열 분석으로 발전 (Vemulapalli 2021)
- SHP2 억제제 + EGF 자극 다시점 분석으로 6개 신호 응답 클러스터 정의; scaffolding vs. 촉매 기능 해리

**다중 PTM 통합**
- Phosphoproteomics + acetylomics 통합으로 PTM 간 crosstalk 발굴 (Zhao 2025)
- 같은 단백질의 인산화-아세틸화 협력/경쟁 조절이 kinase 억제제 반응에서 관찰됨

## 위키 내 관련 논문

### 방법론 / 기술
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] — phosphoproteomics 생물정보학 종합 가이드; 16개 kinase/phosphatase 데이터베이스 비교
- [[olsen-2013-status-large-scale-analysis-post-translational-modifications]] — 대규모 PTM 분석 현황; enrichment 전략 및 분석 파이프라인 기초
- [[wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics]] — 포괄적 인산화 동태의 올바른 해석; 정규화 방법론
- [[lancaster-2024-fast-deep-phosphoproteome-orbitrap-astral]] — Orbitrap Astral + DIA; 30분에 ~30,000 phosphosite; 마우스 12조직 아틀라스

### Kinase Activity Inference 도구
- [[wiredja-2017-ksea-app-web-based-tool-kinase]] — KSEA App; Z-score 기반 kinase 활성 추론; PhosphoSitePlus + NetworKIN
- [[ylmaz-2021-robust-inference-kinase-activity-using]] — RoKAI; 네트워크 전파; 4종 기능 정보 통합; understudied kinase에 강건
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] — CoPheeMap/CoPheeKSA; XGBoost 공발현 네트워크; dark phosphoproteome 조명; 24,015 kinase-substrate 예측

### 임상 / 환자별 Phosphoproteomics
- [[needham-2022-personalized-phosphoproteomics-identifies-functional-signaling]] — 개인화 phosphoproteomics; 개인간 분산으로 기능적 phosphosite 연결; mTOR-AMPK 협력 발굴
- [[keshishian-2021-multiplexed-quantitative-phosphosite-assay]] — 다중 정량 phosphosite 분석; 임상 적용 가능성

### 시간해상도 / 기전 연구
- [[vemulapalli-2021-time-resolved-phosphoproteomics-reveals-scaffolding-catalysis-responsive]] — 시간해상도 phosphoproteomics; SHP2 억제제 + EGF; 6개 반응 클러스터; scaffolding vs 촉매 기능

### 다중 PTM 통합
- [[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]] — TMTpro 기반 phosphoproteomics + acetylomics; 7개 kinase 억제제 반응; PTM crosstalk
- [[wu-2025-short-chain-acyl-post-translational-modifications-cancers]] — 짧은 사슬 아실 PTM과 암

### 암종별 Phosphoproteomics (Proteogenomics 연구의 phospho 구성 요소)
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — iTRAQ + phosphoproteomics; 5q 결실 트랜스-효과; 유방암 signaling
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] — ESCC; CSNK2A1 kinase; phosphosite network 기반 치료 표적
- [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] — PDAC; KRAS 돌연변이-인산화 상관; RhoA/actin 신호
- [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] — 다발골수종; 고도 조절 phosphoproteome; 유전적 아형별 표적
- [[zhang-2022-integrated-proteogenomic-characterization-across-major]] — PitNET 200례; 29,219 phosphosite
- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] — 폐선암 phosphoproteomics
- [[holt-2025-proteogenomic-characterization-unveils-biomarkers-associated]] — phosphoproteomics 기반 바이오마커
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — TNBC; AURKB 인산화 축; 화학요법 내성
- [[li-2023-proteogenomic-early-duodenal-cancer]] — 초기 십이지장암 phosphoproteomics
- [[li-2023-proteogenomic-early-esophageal-cancer]] — 초기 식도암 phosphoproteomics
- [[li-2024-proteogenomic-profiling-colorectal-cancer-progression]] — 대장암 진행 phosphoproteomics
- [[yu-2024-proteogenomic-analysis-cervical-cancer-reveals]] — 자궁경부암 phosphoproteomics

### 신호전달 기전
- [[lin-2024-nuak1-mediated-phosphorylation-nadk-mitigates-ros]] — NUAK1 매개 NADK 인산화; ROS 완화
- [[li-2025-cdk1-phosphorylation-map1b-glioblastoma]] — CDK1 MAP1B 인산화; GBM
- [[zhang-2025-stress-response-kinase-mk2-induces]] — MK2 kinase 스트레스 반응 인산화
- [[khan-2026-integrative-phosphoproteomic-network-camk2d-tpd52]] — CAMK2D-TPD52 인산화 네트워크

### 플랫폼 / 데이터베이스
- [[wang-2023-cprosite-web-based-interactive-platform]] — cProSite 웹 기반 phosphoproteomics 플랫폼
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — iProPhos 통합 phosphoproteomics 플랫폼
- [[ren-2025-multi-omics-insights-molecular-signature-prognosis]] — multi-omics 인산화 분자 서명

## 관련 개념

- [[proteogenomics]] — phosphoproteomics는 proteogenomics 워크플로우의 핵심 구성 요소
- [[drug-resistance]] — kinase 활성 변화가 내성의 주요 기전이며, phosphoproteomics로 직접 측정
- [[tumor-microenvironment]] — kinase 신호전달이 TME 세포들의 기능 상태를 결정
- [[network-medicine]] — kinase-substrate 네트워크를 통한 약물 표적 발굴
