---
title: "Kinase Signaling"
type: concept
updated: 2026-05-19
---

# Kinase Signaling (키나제 신호전달)

## 정의

키나제(kinase)는 ATP를 이용해 단백질의 특정 아미노산 잔기(Ser/Thr 또는 Tyr)를 인산화하는 효소로, 세포 내 신호전달 네트워크의 핵심 조절자다. 암에서는 수용체 타이로신 키나제(RTK)의 활성화 돌연변이·융합, MAPK/ERK 경로 및 PI3K/AKT/mTOR 경로의 과활성화, 세포 주기 키나제(CDK)의 비조절 등이 종양 발생과 진행의 주요 원인이 된다. 이 신호들은 단순한 선형 경로가 아니라 복잡한 상호 교차(crosstalk) 네트워크를 형성하며, 인산화체학(phosphoproteomics)을 통해 암 조직 내 실제 키나제 활성을 정량적으로 추론하는 것이 가능해졌다.

키나제 활성 추론은 개별 인산화 사이트의 발현량만으로는 부족하며, 하나의 키나제가 여러 기질(substrate)을 가진다는 점을 활용해 키나제-기질 세트의 집합적 발현 변화를 통계적으로 평가한다. KSEA(Kinase-Substrate Enrichment Analysis), RoKAI와 같은 방법이 대표적이며, PhosphoSitePlus·NetworKIN 등의 데이터베이스에 등록된 키나제-기질 주석에 의존한다.

## 핵심 원리

- **RTK → RAS → MAPK/ERK 경로**: EGFR, ALK, RET 등 RTK 활성화가 GRB2/SOS1을 통해 RAS-GTP 로딩을 유도하고, RAF-MEK-ERK 캐스케이드를 활성화한다. EML4-ALK 융합 단백질은 세포질 내 biomolecular condensate(membraneless granule)를 형성해 막 독립적으로 RAS를 활성화하는 기전도 존재한다.
- **PI3K/AKT/mTOR 경로**: PI3K가 PIP3를 생성하면 AKT가 활성화되어 mTORC1/2를 통한 단백질 합성·세포 성장을 촉진한다. PTEN 소실이 이 경로를 항시 활성화한다.
- **SHP2(PTPN11) 이중 기능**: SHP2는 인산화효소가 아니라 탈인산화효소(phosphatase)이나, SH2 도메인을 통한 scaffolding 기능으로도 인산화 신호를 유지할 수 있어 촉매 활성과 구조적 역할이 분리된다.
- **KSEA Z-score 기법**: 특정 키나제의 기질 집합의 평균 발현 fold change를 전체 인산화체 분포와 비교해 키나제 활성을 Z-score로 정량화한다. PhosphoSitePlus(실험 검증) + NetworKIN(예측) 조합이 표준적으로 사용된다.
- **RoKAI 네트워크 전파**: 키나제-기질 주석, 단백질 공진화, 3D 구조적 거리, PPI 네트워크 등 4가지 기능 정보를 통합해 sparse한 주석 문제를 극복한다.
- **CoPheeMap/CoPheeKSA**: XGBoost 기반 공동 조절 네트워크로 26,280개 인산화 사이트의 조절 관계를 학습하고, 기존에 알려지지 않은 24,015개의 키나제-기질 쌍을 예측한다.
- **PTM crosstalk**: 인산화와 아세틸화 사이에 교차 조절이 존재하며, 하나의 약물이 인산화 경로를 조절할 때 아세틸화 패턴도 변화한다.
- **Dark phosphoproteome**: 현재 알려진 기능이 있는 인산화 사이트는 전체의 5% 미만으로, 나머지 95%의 기능 규명이 핵심 과제다.

## 위키 내 관련 논문

- [[ylmaz-2021-robust-inference-kinase-activity-using]] — RoKAI: 4가지 기능 네트워크를 통합한 키나제 활성 추론 프레임워크. sparse한 키나제-기질 주석의 한계를 극복하고, 주석이 부족한 키나제에서도 정확도를 개선한다.
- [[wiredja-2017-ksea-app-web-based-tool-kinase]] — KSEA App: PhosphoSitePlus와 NetworKIN 기반 웹 도구. MEK 억제제(selumetinib) 처리 시 MEK/ERK 경로 억제를 감지해 검증됨.
- [[tulpule-2021-kinase-mediated-ras-signaling-membraneless-cytoplasmic]] — EML4-ALK 융합 단백질이 세포질 내 biomolecular condensate를 형성해 막 독립적으로 RAS-MAPK 신호를 활성화하는 기전 발견 (Cell 2021).
- [[vemulapalli-2021-time-resolved-phosphoproteomics-reveals-scaffolding-catalysis-responsive]] — 시간 분해 인산화체학으로 SHP2의 촉매 기능과 scaffolding 기능을 분리. SHP2 억제제(SHP099)와 EGF 자극 조합으로 6가지 시간적 인산화 반응 패턴 규명.
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] — CPTAC 1,195개 종양의 인산화체 데이터를 XGBoost로 학습해 CoPheeMap/CoPheeKSA를 구축, 95%에 달하는 dark phosphoproteome 해독 시도.
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — iProPhos: CPTAC 12개 암종 데이터 기반 웹 플랫폼, 키나제-기질 enrichment 분석 포함. 코드 없이 단백질/인산화체 분석 가능.
- [[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]] — 7가지 키나제 억제제(EGFR, MAPK, PI3K-mTOR, CDK 표적)에 의한 HCT116 CRC 세포의 인산화·아세틸화 변화를 TMTpro로 프로파일링, PTM crosstalk 발견.
- [[needham-2022-personalized-phosphoproteomics-identifies-functional-signaling]] — 개인 간 표현형 분산을 활용해 100개 이상의 기능적 인산화 사이트 식별, mTOR-AMPK 협력 조절 기전 발견.

## 관련 개념

- [[phosphoproteomics]]
- [[proteogenomics]]
- [[kinase-inhibitor]]
- [[NSCLC]]
- [[colorectal-cancer]]
- [[pan-cancer]]
- [[drug-repurposing]]
