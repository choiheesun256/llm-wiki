---
title: "Proteogenomics"
type: concept
updated: 2026-05-19
---

# Proteogenomics (단백질유전체학)

## 정의

Proteogenomics는 genomics(유전체학), transcriptomics(전사체학), proteomics(단백질체학), 그리고 phosphoproteomics(인산화단백질체학)를 통합 분석하는 multi-omics 접근법이다. 단순한 DNA 변이 목록을 넘어서, 그 변이가 실제 단백질 발현과 신호전달 경로에 어떤 기능적 결과를 초래하는지를 정량적으로 연결하는 것이 핵심 목표다.

이 분야의 근본적인 동기는 mRNA와 단백질 발현 사이의 discordance(불일치)에서 비롯된다. 전장 암 유전체 연구(TCGA 등)가 방대한 체세포 돌연변이 목록을 제공하지만, mRNA 수준에서는 보이지 않는 단백질 수준의 변화들이 암의 생물학적 특성을 상당 부분 결정한다. CPTAC(Clinical Proteomic Tumor Analysis Consortium)이 주도한 연구들에서 mRNA-단백질 상관계수 중앙값은 약 0.40~0.48로, RNA 데이터만으로는 단백질 수준 사건의 절반 이상을 설명하지 못한다.

## 핵심 원리

**CPTAC 워크플로우**
- 종양 조직에서 DNA(WES), RNA(RNA-seq), 단백질/인산화단백질(MS) 동시 추출
- TMT(Tandem Mass Tag) 또는 iTRAQ 기반 isobaric labeling으로 다중 샘플 동시 정량
- 1,000개 이상 샘플 규모의 pan-cancer 코호트 구성(10개 암종, 1,000+ 환자)

**TMT vs. iTRAQ**
- iTRAQ: 초기 CPTAC 연구(Mertins 2016)에서 사용, 4~8 채널 multiplexing
- TMT/TMTpro: 현재 표준, 16 채널까지 지원하여 배치 효과 최소화 및 처리량 증가
- 두 방법 모두 펩타이드 수준에서 상대적 정량이 가능하며, phosphopeptide enrichment(TiO2, IMAC)와 병행

**주요 분석 축**
- Somatic mutation → protein expression trans-effect: 5q 결실 → EGFR/SRC 활성화 등 시스-/트랜스 효과 규명
- Copy number alteration(CNA) → protein level: DNA 수준 증폭이 단백질 수준으로 전달되는 정도는 일관적이지 않음
- mRNA-protein discordance: post-transcriptional 조절 기전(RNA-binding protein, miRNA, protein turnover)에 의한 불일치 영역 식별
- Kinase activity inference: 인산화 기질 집합을 이용해 upstream kinase 활성을 KSEA, RoKAI 등으로 추론
- Proteomics-based molecular subtyping: mRNA 기반 분류를 보완하거나 새로운 임상적 의미의 아형 발굴

**Pan-cancer 통합 연구**
- CPTAC은 유방암, 대장암, 폐암(LUAD, LUSC), 난소암, 신장암(ccRCC), 자궁내막암, GBM, 두경부암, 담도암, 방광암, 전립선암 등 10+ 암종을 포함
- FunMap(Shi 2025): XGBoost 기반 pan-cancer 기능 네트워크 구축; 단백질 공발현이 mRNA보다 유전자 공기능 예측에 우수
- Pan-cancer druggable proteome(Savage 2024): 2,863개 druggable 단백질의 5단계 분류; mRNA 수준에서는 발견할 수 없는 단백질 수준 치료 표적 체계화

## 위키 내 관련 논문

### CPTAC Landmark 연구
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — iTRAQ 기반 유방암 105례; 체세포 돌연변이와 인산화 신호 연결
- [[petralia-2020-integrated-proteogenomic-characterization-across-major]] — 소아 뇌종양 218례 pan-histology; 단백질 클러스터가 조직형 경계를 초월
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — 10개 암종 1,056례 pan-cancer 면역 지형; 7개 면역 아형 정의
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — 10개 암종 1,043례; 2,863 druggable 단백질 5단계 분류

### Pan-cancer 기능 네트워크
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap; ML 기반 pan-cancer 기능 네트워크; GNN으로 저빈도 암 드라이버 발굴
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — OPPTI; 단백질 과발현 kinase 표적 23개 발굴; DNA/RNA 수준 불가시
- [[lindgren-2021-simplified-unified-access-cancer-proteogenomic]] — CPTAC 데이터 접근 통합 플랫폼

### 고형암 개별 암종 연구
- [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] — PDAC 196례 아시아 코호트; KRAS 돌연변이-인산화 연결
- [[ng-2022-integrative-proteogenomic-characterization-hepatocellular-carcinoma]] — HCC 다중 병인 코호트; 대사 재프로그래밍 아형
- [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] — 다발골수종 138례; 인산화체 심층 분석; 예후 단백질 서명
- [[zhang-2022-integrated-proteogenomic-characterization-across-major]] — 뇌하수체 신경내분비종양 200례; 7개 단백질 아형
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — ccRCC 115례; sunitinib 반응 예측 multi-omics 분류기 (ROC-AUC 0.98)
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] — ESCC 60례; CSNK2A1 kinase 표적 발굴
- [[shen-2023-tissue-proteogenomic-landscape-reveals-role]] — 조직 proteogenomic landscape
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] — 비소세포폐암 proteogenomics
- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] — 폐선암 proteogenomics
- [[huang-2021-proteogenomic-insights-biology-treatment-hpv-negative]] — HPV 음성 두경부암
- [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] — 비흡연자 LUAD
- [[mun-2019-proteogenomic-characterization-human-early-onset-gastric]] — 조기 발병 위암
- [[li-2023-proteogenomic-early-duodenal-cancer]] — 초기 십이지장암
- [[li-2023-proteogenomic-early-esophageal-cancer]] — 초기 식도암
- [[li-2024-proteogenomic-profiling-colorectal-cancer-progression]] — 대장암 진행 단계별
- [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] — 대장암 1차 코호트
- [[tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid]] — 췌장 고형 종양
- [[yu-2024-proteogenomic-analysis-cervical-cancer-reveals]] — 자궁경부암
- [[fan-2023-multiomic-analysis-cervical-squamous-cell]] — 자궁경부 편평세포암
- [[hu-2024-proteogenomic-insights-early-onset-endometrioid-endometrial]] — 조기 발병 자궁내막암
- [[park-2024-proteogenomic-characterization-reveals-estrogen-signaling]] — 에스트로겐 신호 중심
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] — HER2+ 유방암
- [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] — 치료 난치성 유방암
- [[haas-2024-proteogenomics-prostate-cancer-radioresistance]] — 전립선암 방사선 내성
- [[ou-2025-integrated-proteogenomic-characterization-localized-prostate]] — 국소 전립선암
- [[shi-2022-integrated-proteogenomic-characterization-medullary-thyroid]] — 갑상선 수질암
- [[qu-2022-proteogenomic-characterization-mit-family-translocation]] — MIT family 전위 신장암
- [[qu-2024-integrated-proteogenomic-metabolomic-characterization-papillary]] — 유두상 신장암 + 대사체
- [[yao-2023-proteogenomics-different-urothelial-bladder-cancer]] — 요로상피 방광암
- [[zhang-2024-proteogenomic-characterization-skull-base-chordoma]] — 두개저 척삭종
- [[zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer]] — 대기오염 관련 폐암
- [[pan-2025-integrative-proteogenomic-characterization-reveals-therapeutic]] — 치료 표적 통합 분석
- [[su-2025-proteogenomic-characterization-reveals-tumorigenesis-progression]] — 종양발생/진행 기전
- [[holt-2025-proteogenomic-characterization-unveils-biomarkers-associated]] — 바이오마커 발굴
- [[qin-2025-proteogenomic-characterization-reveals-lipid-droplet]] — 지질 방울 관련

### 약리 Proteogenomics
- [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]] — 약리-단백질유전체 통합; 2개 하위군 정의
- [[ji-2023-pharmaco-proteogenomic-characterization-liver-cancer]] — 간암 오가노이드 약리 proteogenomics
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — ccRCC TKI 반응 예측

### 임상/기술 방법론
- [[satpathy-2020-microscaled-proteogenomic-methods-precision-oncology]] — 미세 규모 proteogenomics; 코어 바이오프시 25μg으로 >10,000 단백질
- [[zhao-2018-credentialing-individual-samples-proteogenomic-analysis]] — 개별 샘플 품질 인증 방법
- [[tshaus-2025-towards-routine-proteome-profiling-ffpe]] — FFPE 조직 일상적 단백질체 분석
- [[naru-2024-proteogenomic-characterization-highly-enriched-viable]] — 농축 생존 세포 proteogenomics
- [[hamilton-2024-proteogenomic-surfaceome-study-identifies-dlk1]] — Surfaceome proteogenomics
- [[ryu-2025-proteogenomic-analysis-rna-m6a]] — RNA m6A 수정과 단백질 발현
- [[lee-2024-proteogenomic-analysis-adiposity-colorectal-cancer]] — 비만과 대장암
- [[yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4]] — 관찰 증거
- [[lehti-2021-proteogenomics-nsclc-subtypes-therapeutic-targets]] — NSCLC 아형과 표적
- [[kaur-2024-integrated-proteogenomic-analysis-reveals-distinct]] — 독특한 아형 발굴
- [[liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify]] — 방사선-병리-proteogenomics 다중모달 융합
- [[zhang-2025-integrated-proteogenomic-characterization-ampullary-adenocarcinoma]] — 팽대부 선암
- [[wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals]] — 페롭토시스 조절인자
- [[ji-2025-multi-omic-molecular-characterization-high-risk]] — 고위험 분자 특성
- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — 중국인 유방암 multi-omic
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — TNBC 화학요법 내성 proteogenomics

## 관련 개념

- [[phosphoproteomics]] — proteogenomics 워크플로우의 핵심 구성 요소
- [[tumor-microenvironment]] — 단백질 아형으로 TME 면역 지형 규명
- [[drug-resistance]] — 치료 내성 기전을 단백질/인산화 수준에서 규명
- [[single-cell-methods]] — bulk proteogenomics의 세포 구성 한계를 보완
- [[network-medicine]] — 단백질 네트워크를 통한 드라이버 유전자 및 약물 표적 발굴
