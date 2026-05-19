---
title: "Pan-Cancer Analysis"
type: concept
updated: 2026-05-19
---

# Pan-Cancer Analysis (범암종 분석)

## 정의

범암종 분석(pan-cancer analysis)은 단일 암종이 아닌 여러 암종을 동시에 비교·통합 분석해 암 전반에 걸친 공통 패턴, 공유 취약성, 암종 특이적 차이를 체계적으로 규명하는 접근이다. TCGA(The Cancer Genome Atlas)의 게놈 중심 pan-cancer 분석에서 출발해, CPTAC(Clinical Proteomic Tumor Analysis Consortium)의 단백질체 기반 프로테오게놈 pan-cancer 분석으로 확장됐다. 이 접근은 게놈 기반 분석으로는 감지하기 어려운 단백질 수준의 치료 표적·biomarker·면역 아형을 발굴할 수 있다.

대표적 발견으로는 암종 경계를 가로지르는 공통 면역 아형, 단백질 과발현에 의한 druggable kinase target(게놈 변이 없이도 단백질 수준 과발현), pan-cancer 대사 이상(퓨린 대사, 아미노산 대사), 전사 후 조절(post-transcriptional regulation)에 의한 mRNA-단백질 불일치 등이 있다. mRNA와 단백질 발현의 중앙 상관계수는 약 0.48로, 단백질 수준 분석이 게놈/전사체 분석으로는 놓치는 정보를 제공한다.

## 핵심 원리

- **CPTAC 프로테오게놈 인프라**: 10~11개 암종, 1,000개 이상 종양에서 WES/WGS, RNA-seq, TMT 단백질체, 인산화체를 통합해 표준화된 파이프라인으로 분석한다. 주요 발표 Cancer Cell(2024)·Cell(2024) 연구가 대표 자원이다.
- **치료 표적 발굴**: 2,863개 druggable 단백질을 5등급으로 분류하고, 단백질 과발현/과활성화 의존성, synthetic lethality, 신생항원(neoantigen; 공공 KRAS 변이 펩타이드)을 통합적으로 식별한다. CDK4/6, PDK1, MET 등은 게놈 증폭 없이 단백질 수준 과발현으로만 발견된다.
- **범암종 면역 아형**: CPTAC 1,056개 종양에서 7개 pan-cancer 면역 아형이 정의되며, DNA 변이와 면역 아형의 연관성이 규명됐다. 인산화체 기반 키나제 활성 분석으로 면역 아형별 정밀 치료 표적이 도출된다.
- **전사 후 조절과 단백질 수준 표적(OPPTI)**: CPTAC 1,071개 케이스를 대상으로 공동 발현 네트워크 기반 이상값 탐지(OPPTI)로 23개 druggable kinase를 발굴. CDK4/6, MET 등은 DNA/RNA 수준 분석으로는 식별 불가.
- **범암종 TME 수렴 모티프**: CyTOF/IMC를 이용한 17개 암종 메타 분석에서 CD8+ T세포 bifurcation(효과기 vs 소진), CD38+ TAM 장벽, TLS 성숙도, CTLA-4+ NK세포, 대사 정의 면역 틈새 등 5개 공통 TME 모티프가 확인된다.
- **범암종 대사 이상**: 20개 암종 2,561명 혈장 대사체 분석에서 hypoxanthine·cysteine·pyruvic acid가 보편적 암 biomarker로 제시된다. 33개 퓨린 대사 유전자가 TCGA 범암종 조직에서 일관되게 이상을 보인다.
- **단일 유전자 범암종 프로파일링**: UBD/FAT10(ubiquitin-like modifier)은 14개 암종에서 과발현되며, 소화기암에서 진단 AUC >0.8을 보인다. MTHFD1(엽산 대사 효소)은 12개 암종에서 과발현되며 16개 암종에서 면역 세포 침윤과 역상관을 보인다.
- **CoPheeMap/CoPheeKSA**: CPTAC 11개 암종 1,195개 종양의 인산화체 데이터로 범암종 인산화 co-regulation 네트워크를 구축. dark phosphoproteome(95% 기능 미상)을 ML로 해독한다.
- **iProPhos/cProSite 등 웹 플랫폼**: CPTAC 데이터를 코드 없이 탐색 가능한 웹 플랫폼들이 범암종 단백질체/인산화체 분석 접근성을 크게 향상시켰다.

## 위키 내 관련 논문

- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — CPTAC 1,043개 종양, 10개 암종, 2,863개 druggable 단백질 분석. 단백질 과발현 의존성·synthetic lethality·KRAS 신생항원 제시 (Cell 2024).
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — CPTAC 1,056개 종양의 7개 범암종 면역 아형 정의. 인산화체 키나제 활성으로 면역 아형별 정밀 치료 표적 발굴 (Cell 2024).
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — OPPTI 알고리즘으로 CPTAC 1,071 케이스에서 23개 druggable kinase를 DNA/RNA 수준 변이 없이 단백질 과발현으로 발굴. CDK4/6, PDK1, MET 포함.
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]] — CyTOF/IMC 61개 연구, 17개 암종의 PRISMA 기반 리뷰. 5개 pan-cancer TME 수렴 모티프 도출. FlowSOM, PhenoGraph 파이프라인 정리.
- [[yu-2025-purine-metabolism-pan-cancer-metabolic-dysregulation]] — 20개 암종 2,561명 혈장 대사체 분석. hypoxanthine이 보편적 암 biomarker로 제시. 33개 퓨린 대사 유전자의 TCGA 범암종 패턴 규명.
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] — CPTAC 1,195개 종양 인산화체로 CoPheeMap 구축. XGBoost 기반 co-regulation 네트워크로 24,015개 신규 키나제-기질 쌍 예측.
- [[zhang-2025-pan-cancer-landscape-ubdfat10-experimental-validation]] — TCGA/GTEx/CPTAC 33개 암종에서 UBD/FAT10 범암종 발현·예후·면역 상관 분석. 식도암에서 기능 검증, imatinib 약물 도킹 제안.
- [[gong-2025-analysis-pan-cancer-panel-reveals-amino]] — TCGA/CPTAC/CCLE/GTEx 통합으로 MTHFD1의 범암종 발현 및 면역 세포 침윤 음의 상관 분석. LUAD·KIRC에서 기능 검증.
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — CPTAC 12개 암종 기반 iProPhos 웹 플랫폼. 키나제-기질 enrichment, 단백질-인산화체 통합 분석, 사용자 데이터 업로드 지원.

## 관련 개념

- [[proteogenomics]]
- [[kinase-signaling]]
- [[pancreatic-cancer]]
- [[colorectal-cancer]]
- [[NSCLC]]
- [[drug-repurposing]]
- [[tumor-microenvironment]]
- [[CPTAC]]
