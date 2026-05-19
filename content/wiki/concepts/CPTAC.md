---
title: "CPTAC"
type: concept
updated: 2026-05-19
---

# CPTAC (Clinical Proteomic Tumor Analysis Consortium)

## 정의

CPTAC(Clinical Proteomic Tumor Analysis Consortium)은 미국 국립암연구소(NCI)가 주도하는 대규모 암 proteogenomics 컨소시엄으로, 암 게놈 정보(소마틱 돌연변이, CNA, 전사체)와 단백체·인산화단백체(proteomics/phosphoproteomics) 데이터를 통합하여 암의 분자 메커니즘과 치료 표적을 체계적으로 규명하는 것을 목표로 한다. 2011년 NCI에 의해 설립되어, TCGA가 수집한 암 샘플 중 상당수에 대해 질량분석 기반 단백질 정량을 추가적으로 수행함으로써 게놈 정보와 단백체 정보를 연결하였다.

CPTAC의 핵심 기여는 mRNA 수준으로는 포착되지 않는 단백질 수준의 변화를 규명한다는 점이다. mRNA-단백질 발현 상관관계는 암 종류에 따라 차이가 있지만 median 약 0.48로, 단백질 기반 정보가 독립적인 생물학적 의미를 지닌다는 것을 보여준다. CPTAC은 유방암(2016)을 시작으로 현재 12개 이상의 암종에 대한 대규모 proteogenomics 데이터를 공개했으며, cProSite, LinkedOmics, `cptac` Python 패키지 등 다양한 데이터 접근 도구를 제공한다.

## 핵심 원리

- **역사 및 주요 코호트**: 2011년 설립 이후 유방암(Mertins 2016, iTRAQ 105 샘플)을 시작으로, 결장직장암, 난소암, 폐선암, 두경부암, 췌장암, 신세포암, 자궁내막암, 방광암, 교모세포종, 간세포암, 다발성 골수종, 소아 뇌종양 등 12개 이상 암종으로 확장되었다. 현재 1,000건 이상의 암 샘플에 대해 통합 데이터가 공개되어 있다.
- **주요 데이터 유형**: WES/WGS (somatic mutation, CNA), RNA-seq (전사체), TMT 기반 tandem mass tag 정량 proteomics, phosphoproteomics, 일부 코호트에서 glycoproteomics, acetylomics, methylome 추가 포함.
- **TMT 정량 방법**: iTRAQ (초기 연구) → TMT10/TMT11/TMT16plex 로 발전. 동위원소 태그를 통한 다중 샘플 동시 분석으로 대규모 코호트 비교가 가능.
- **Proteogenomics 접근법**: DNA 돌연변이 → mRNA → 단백질 → 인산화단백질 수직 연계 분석. CNA와 단백질 발현의 관계, 소마틱 돌연변이가 하위 신호 경로에 미치는 영향, mRNA-단백질 불일치(post-transcriptional regulation) 등을 규명.
- **Pan-cancer 분석**: FunMap(Shi 2025)은 11개 CPTAC 암종 1,194명에서 10,525개 유전자, 196,800개 엣지의 기능 네트워크를 ML로 구축. Savage 2024는 10개 암종 1,043개 종양에서 2,863개 druggable protein을 5-tier로 분류하고 단백질 수준 치료 표적을 규명. Petralia 2024는 10개 암종 1,056개 종양에서 7개 pan-cancer 면역 아형을 정의.
- **Protein > RNA for therapy**: mRNA-단백질 median 상관 0.48이라는 사실은 많은 치료 표적이 RNA 수준에서는 보이지 않음을 시사한다. OPPTI 연구(Elmas 2021)에서 CDK4/6, PDK1, MET 등 23개 kinase 표적이 게놈 증폭 없이 단백질 수준에서만 과발현됨을 발견하였다.
- **데이터 접근 도구**:
  - **cProSite** (cprosite.ccr.cancer.gov): 12개 CPTAC 암종의 proteomics/phosphoproteomics/genomics 시각화. 종양 vs 정상 발현 비교, mRNA-단백질 상관 계산, pan-cancer 비교 제공.
  - **LinkedOmics** (linkedomics.org): 다중 오믹스 레이어 통합 분석, FunMap 접근 포함.
  - **`cptac` Python 패키지** (`pip install cptac`): 7개 암종의 표준화된 multi-omic DataFrame 제공; pandas 형식으로 즉시 분석 가능.
- **주요 출판 저널**: Cell, Nature, Nature Cancer, Cell Reports Medicine 등 고영향력 저널에 게재.

## 위키 내 관련 논문

- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — 최초의 대규모 CPTAC 유방암 proteogenomics 랜드마크 연구; 5q trans-effect, GPCR 클러스터 등 단백질 수준에서만 포착되는 생물학 규명 (Nature 2016)
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — 10개 암종 1,043개 종양, 2,863개 druggable protein의 5-tier 분류; 단백질 수준 치료 표적 체계적 발굴 (Cell 2024)
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — 10개 암종 1,056개 종양의 7개 pan-cancer 면역 아형 정의; kinase 활성 기반 면역 표적 발굴 (Cell 2024)
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap: 11개 CPTAC 암종에서 XGBoost 기반 10,525 유전자 기능 네트워크 구축; GNN으로 저빈도 암 드라이버 발굴 (Nature Cancer 2025)
- [[wang-2023-cprosite-web-based-interactive-platform]] — cProSite 웹 플랫폼 소개; 12개 CPTAC 암종에 대한 no-code 접근 도구 (2023)
- [[lindgren-2021-simplified-unified-access-cancer-proteogenomic]] — `cptac` Python 패키지; 7개 암종의 통합 multi-omic DataFrame API 제공 (Journal of Proteome Research 2021)
- [[petralia-2020-integrated-proteogenomic-characterization-across-major]] — 218개 소아 뇌종양 7개 조직형에 대한 첫 대규모 CPTAC proteogenomics; 조직형 경계를 넘는 단백체 클러스터 발견 (Cell 2020)
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — OPPTI: 10개 암종 1,071 CPTAC 케이스에서 post-transcriptional kinase 표적 23개 발굴 (Communications Biology 2021)
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] — CPTAC 인산화단백체를 활용한 "dark phosphoproteome" 해독 연구 (2025)
- [[zhang-2025-pan-cancer-landscape-ubdfat10-experimental-validation]] — CPTAC 기반 pan-cancer ubiquitination/FAT10 landscape 분석 (2025)

## 관련 개념

- [[multi-omics]]
- [[breast-cancer]]
- [[immune-evasion]]
- [[immunotherapy]]
