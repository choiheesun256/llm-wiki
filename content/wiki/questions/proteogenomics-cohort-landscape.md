---
title: "주요 암종별 proteogenomics cohort 연구 현황"
type: question
status: active
category: [proteogenomics, pan-cancer, cohort]
source_files:
  - mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer
  - jiang-2024-integrated-multi-omic-characterization-chinese-breast
  - rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer
  - jaehnig-2025-proteogenomic-landscape-her2-positive-breast
  - soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals
  - zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer
  - kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad
  - song-2024-proteogenomic-analysis-reveals-non-small-cell
  - park-2024-proteogenomic-characterization-reveals-estrogen-signaling
  - huang-2021-proteogenomic-insights-biology-treatment-hpv-negative
  - mun-2019-proteogenomic-characterization-human-early-onset-gastric
  - hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal
  - tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid
  - ng-2022-integrative-proteogenomic-characterization-hepatocellular-carcinoma
  - ji-2023-pharmaco-proteogenomic-characterization-liver-cancer
  - li-2023-proteogenomic-early-esophageal-cancer
  - zhao-2024-multi-omics-characterization-esophageal-squamous-cell
  - tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer
  - li-2024-proteogenomic-profiling-colorectal-cancer-progression
  - yu-2024-proteogenomic-analysis-cervical-cancer-reveals
  - hu-2024-proteogenomic-insights-early-onset-endometrioid-endometrial
  - ou-2025-integrated-proteogenomic-characterization-localized-prostate
  - hu-2024-multi-omic-profiling-clear-cell-renal
  - zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor
  - qu-2022-proteogenomic-characterization-mit-family-translocation
  - ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals
  - shi-2022-integrated-proteogenomic-characterization-medullary-thyroid
  - qu-2024-integrated-proteogenomic-metabolomic-characterization-papillary
  - yao-2023-proteogenomics-different-urothelial-bladder-cancer
  - zhang-2025-integrated-proteogenomic-characterization-ampullary-adenocarcinoma
  - oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups
  - petralia-2020-integrated-proteogenomic-characterization-across-major
  - zhang-2022-integrated-proteogenomic-characterization-across-major
  - savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic
  - petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity
  - elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional
updated: 2026-05-19
---

# 주요 암종별 Proteogenomics Cohort 연구 현황

## 짧은 답변

2016년 CPTAC 유방암 연구를 시작으로 2026년 현재까지 30개 이상의 암종에 걸쳐 수십 건의 proteogenomics cohort 연구가 발표되었다. CPTAC(Clinical Proteomic Tumor Analysis Consortium)이 주도하는 미국 중심 연구 외에도, 중국·한국·일본에서 독립적인 Asian 코호트 연구가 활발히 진행되며 인구 집단 특이적 분자 특성을 밝히고 있다. 데이터 타입은 WES/WGS, RNA-seq, TMT 기반 proteomics, phosphoproteomics를 기본으로 하며, 최근에는 metabolomics·acetylproteomics·spatial omics까지 확장되는 추세이다.

---

## 상세 답변

### 1. Proteogenomics 연구의 역사적 흐름

Proteogenomics의 기반은 2016년 [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] (Mertins et al., Nature 2016)에서 확립되었다. 105개 TCGA 유방암 샘플에 대해 iTRAQ 기반 12,553개 단백질과 33,239개 phosphosite를 정량하며 somatic mutation이 downstream signaling을 어떻게 변화시키는지를 처음 체계적으로 연결했다. 이후 CPTAC은 암종 범위를 지속적으로 확장했고, 2020년대부터는 중국·한국을 중심으로 한 Asian cohort 연구들이 독립적으로 대규모 데이터를 생산하고 있다.

---

### 2. 암종별 주요 Cohort 연구

#### 유방암 (Breast Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] (CPTAC) | 미국 TCGA | 105 | WES, RNA-seq, proteomics (iTRAQ), phosphoproteomics | 최초 대규모 CPTAC 유방암 연구; 5q trans-effect, CDK12/PAK1/PTK2 발견 |
| [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] (CBCGA) | 중국 | 773 | WGS, RNA-seq, proteomics, metabolomics, radiomics, digital pathology | 6-layer multi-omics; AKT1 E17K Asian 특이 enrichment; 최대 규모 Asian 유방암 atlas |
| [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] | 유럽 | 117 | WGS, RNA-seq, proteomics, phosphoproteomics (LMD) | Laser microdissection으로 tumor cell enrichment; basal-like 재발 위험 예측 |
| [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] (CALGB 40601) | 미국 | ~100 | WES, proteomics, phosphoproteomics | HER2+ 신보조 치료 반응 예측; GPRC5A/TPBG 내성 바이오마커 |

유방암은 가장 많은 독립 cohort가 존재하며, CPTAC(서양 집단) vs CBCGA(중국) 간 AKT1 돌연변이 빈도 차이 등 인구 집단 특이 특성이 명확하게 확인된다.

---

#### 폐암 (Lung Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| CPTAC LUAD (Gillette et al. 2020) | 미국 | 110 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 대표 폐선암 연구 |
| [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] (APOLLO) | 미국 | 87 | WGS, RNA-seq, proteomics, phosphoproteomics | 흡연 관련 3개 genomic subtype; 단백질이 RNA보다 생존 예측력 우수 |
| [[zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer]] (XWLC) | 중국 Xuanwei | 169 | WES, RNA-seq, proteomics, phosphoproteomics, radiomics | 비흡연 여성; 석탄 연기 benzo[a]pyrene (BaP) 유발 EGFR-G719X 돌연변이; radiomics 통합 |
| [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] | 한국 | 99 | WGS, RNA-seq, TMT proteomics, phosphoproteomics | EGFR/ALK WT 비흡연 LUAD; 4개 subtype(증식·혈관·면역·대사) |
| [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] | 한국 | 229 | WGS, RNA-seq, TMT proteomics, phosphoproteomics | 최대 Korean NSCLC 코호트; 5개 분자 subtype; 높은 EGFR 돌연변이 빈도 |
| [[park-2024-proteogenomic-characterization-reveals-estrogen-signaling]] (NENA) | 한국 | 141 | WGS, RNA-seq, methylation EPIC, proteomics, phosphoproteomics | EGFR/ALK 음성 비흡연 NSLA; estrogen signaling 활성화; saracatinib 제안 |

폐암은 CPTAC(서양 흡연자), 한국(비흡연 East Asian), 중국(공해 노출) 등 에티올로지별로 독립 cohort가 존재하는 대표적 암종이다.

---

#### 위암 (Gastric Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[mun-2019-proteogenomic-characterization-human-early-onset-gastric]] | 한국 | ~80 | WES, RNA-seq, proteomics, phosphoproteomics, N-glycoproteomics | 조기 발병 미만형 위암; 5-layer multi-PTM omics; 4개 분자 subtype |

위암은 한국·중국 중심 코호트 연구가 특히 중요하며, N-glycoproteomics까지 포함한 multi-PTM 접근이 특징이다.

---

#### 췌장암 (Pancreatic Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| CPTAC PDAC (Cao et al. 2021) | 미국 | 140 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 표준 PDAC 연구 |
| [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] | 한국/Asian | 196 | WES, RNA-seq, proteomics, phosphoproteomics | KRAS 94.9% (deep sequencing); 6개 분자 subtype; squamous subtype 세분화 |
| [[tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid]] | 일본 | 13+21 | WES (MSK-IMPACT), FFPE proteomics | SPN vs PDAC vs PanNET 비교; MITF 진단 마커; PDGFRA/ERBB2 타겟 |

췌장암은 CPTAC + Asian (한국) 독립 코호트 모두 존재한다. Asian 코호트가 KRAS 돌연변이 빈도를 정확히 측정하는 데 특히 기여했다.

---

#### 간암 / 담도계 암 (Liver/Biliary Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[ng-2022-integrative-proteogenomic-characterization-hepatocellular-carcinoma]] | Asian (Singapore) | ~100 | WES, RNA-seq, proteomics, phosphoproteomics | HBV/HCV/대사성 에티올로지별 분자 특성; 분자 subtype 정의 |
| [[ji-2023-pharmaco-proteogenomic-characterization-liver-cancer]] (LICOB) | 중국 | 57 patients / 65 organoids | WES, RNA-seq, proteomics + 129종 약물 스크리닝 | 오가노이드 pharmaco-proteogenomics; temsirolimus+lenvatinib 시너지 |
| [[zhang-2025-integrated-proteogenomic-characterization-ampullary-adenocarcinoma]] | 중국 Fudan | 198 | WES, RNA-seq, proteomics, phosphoproteomics | 담낭-십이지장 접합부 암; 4q loss → 지방산 축적 → 증식; C-AD subtype 예후 불량 |

---

#### 식도암 (Esophageal Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[li-2023-proteogenomic-early-esophageal-cancer]] | 중국 | 154 patients / 786 샘플 | WES, label-free proteomics, phosphoproteomics | 9단계 발암 과정 추적; PGK1 S203 phosphorylation 약물 타겟; 256 샘플 독립 검증 |
| [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] | 중국 | 60 paired (종양+정상) | RNA-seq, TMT proteomics, phosphoproteomics | 3개 proteomic subtype; CSNK2A1 kinase 타겟 in vitro/in vivo 검증; 7년 추적 |

---

#### 대장암 (Colorectal Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| CPTAC CRC (Vasaikar et al. 2019) | 미국 | 110 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 표준 CRC 연구 |
| [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] | 일본 | 154 원발+142 전이 | WGS, RNA-seq, label-free proteomics | 원발 vs 간전이 비교; 6개 proteome subtype; 유전체 변화 최소 - 단백체 가소성이 전이 구동 |
| [[li-2024-proteogenomic-profiling-colorectal-cancer-progression]] | 중국 | 148 patients / 435 샘플 | WES, proteomics, phosphoproteomics | 정상→IEN→IFT→진행암 단계 추적; MSI/MSS 특성 구분; CMS/CRIS 분류 통합 |

---

#### 자궁경부암 / 자궁내막암 (Cervical / Endometrial Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[yu-2024-proteogenomic-analysis-cervical-cancer-reveals]] | 중국 | 139 | WES, RNA-seq, TMT+DIA proteomics, phosphoproteomics, acetylproteomics | HPV 관련 multi-omic landscape; EP300/FOSL2-K222 acetylation; PRKCB 방사선 반응 바이오마커 |
| [[hu-2024-proteogenomic-insights-early-onset-endometrioid-endometrial]] | 중국 | 215 (81 조기 발병) | WES, RNA-seq, FFPE proteomics | 조기 발병 EEC; CTNNB1/SIGLEC10 돌연변이; progestin 내성 메커니즘 |
| CPTAC 자궁내막암 (Dou et al. 2020) | 미국 | 95 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 표준 자궁내막암 연구 |

---

#### 두경부암 (Head and Neck Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[huang-2021-proteogenomic-insights-biology-treatment-hpv-negative]] (CPTAC) | 미국 | 108 | WES, WGS, RNA-seq, methylation, miRNA, proteomics, phosphoproteomics | HPV 음성 HNSCC; 11,744 단백질, 56,959 phosphosite; FAT1/11q13.3 상호 배타성; 3개 subtype → CDK4/6i, cetuximab, pembrolizumab |

---

#### 신장암 (Renal Cell Carcinoma)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| CPTAC ccRCC (Clark et al. 2019) | 미국 | 110 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 표준 신장암 연구 |
| [[hu-2024-multi-omic-profiling-clear-cell-renal]] | 중국 | 100 | WES, RNA-seq, proteomics, metabolomics, spatial transcriptomics, snRNA-seq/snATAC-seq | 4개 면역 subtype; DCCD 신규 subtype 발견; 공간 omics 통합 |
| [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] | 중국 | 115 | WES, RNA-seq, proteomics, phosphoproteomics | sunitinib 반응 예측; multi-omics classifier ROC-AUC 0.98; Chr 7q gain → mTOR 내성 |
| [[qu-2022-proteogenomic-characterization-mit-family-translocation]] | 중국 | 86 | WES, RNA-seq, proteomics, phosphoproteomics | MiT family tRCC; TFE3 fusion partner 15종 확인; mTOR 타겟 |

---

#### 전립선암 (Prostate Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[ou-2025-integrated-proteogenomic-characterization-localized-prostate]] | 중국 | 145 | WGS, RNA-seq, proteomics, phosphoproteomics | Localized PCa; AR signaling 이질성; 치료 stratification 프레임워크 |
| [[haas-2024-proteogenomics-prostate-cancer-radioresistance]] | 유럽 (세포주 기반) | 다수 | WGS, WES, RNA-seq, subcellular proteomics, miRNA | 방사선 내성; POLQ DNA 중합효소 타겟; 구획별 단백질 변화 분석 |

---

#### 갑상선암 (Thyroid Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[shi-2022-integrated-proteogenomic-characterization-medullary-thyroid]] | 중국 5개 기관 | 102 | WES, RNA-seq, methylation, proteomics, phosphoproteomics | MTC; RET/RAS 외 BRAF·NFT 신규 드라이버; 3개 subtype |
| [[qu-2024-integrated-proteogenomic-metabolomic-characterization-papillary]] | 중국 | 102 | WES, RNA-seq, proteomics, phosphoproteomics, metabolomics | PTC; 4개 subtype; RET/NTRK fusion 재발 위험 연관 |

---

#### 방광암 (Bladder Cancer)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| CPTAC BLCA | 미국 | 84 | WGS, RNA-seq, proteomics, phosphoproteomics | CPTAC 표준 방광암 연구 |
| [[yao-2023-proteogenomics-different-urothelial-bladder-cancer]] | 중국 | 190 patients / 448 샘플 | WES, RNA-seq, proteomics, phosphoproteomics | Papillary(HRAS/FGFR3) vs CIS(TP53/RB1) 분자 경로 구분; RBPMS 소실 → AP-1 활성 → 전이 |

---

#### 뇌종양 / 뇌하수체 종양

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[petralia-2020-integrated-proteogenomic-characterization-across-major]] (CPTAC) | 미국 CBTN | 218 | WGS, RNA-seq, proteomics, phosphoproteomics | 소아 뇌암 7개 조직학적 유형; 조직 경계를 넘는 proteomics cluster |
| [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]] | 한국 | ~50 | WES, RNA-seq, proteomics, phosphoproteomics + 약물 스크리닝 | IDH-wt GBM; mitotic vs invasive 2개 subtype; kinase activity 기반 약물 취약성 |
| [[zhang-2022-integrated-proteogenomic-characterization-across-major]] | 중국 | 200 | WES, RNA-seq, proteomics, phosphoproteomics | PitNET 뇌하수체 종양; 10,011 단백질, 29,219 phosphosite; 7개 subtype |

---

#### 혈액암 (Hematologic Malignancy)

| 연구 | 코호트 | 규모 | 데이터 타입 | 특징 |
|------|--------|------|-------------|------|
| [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] | 유럽 | 138 | RNA-seq, nanopore DNA-seq, TMT proteomics, phosphoproteomics | 다발성 골수종 최초 대규모 proteogenomics; R-ISS 독립 예후 단백질 서명 발견 |

---

#### Pan-Cancer 연구

| 연구 | 코호트 | 규모 | 데이터 타입 | 주요 발견 |
|------|--------|------|-------------|----------|
| [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] (CPTAC) | 미국 | 1,043 tumors / 10 cancer types | WGS, RNA-seq, proteomics, phosphoproteomics | 2,863 druggable protein 5-tier 분류; mRNA-protein 상관 중앙값 0.48; KRAS mutant 네오항원 |
| [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] (CPTAC) | 미국 | 1,056 tumors / 10 cancer types | WGS, RNA-seq, proteomics, phosphoproteomics | 7개 pan-cancer 면역 subtype; kinase activity 기반 면역치료 타겟 |
| [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] (OPPTI) | 미국 CPTAC | 1,071 cases / 10 cancer types | proteomics, phosphoproteomics | OPPTI 알고리즘으로 23개 druggable kinase 타겟 발굴; DNA/RNA 수준에서 비가시적 |

---

### 3. CPTAC vs Non-CPTAC (Asian) Cohort 비교

| 항목 | CPTAC (미국) | Asian Cohort (중국·한국·일본) |
|------|-------------|------------------------------|
| 주요 기관 | NCI, Broad Institute, WUSTL 등 | Fudan, PUMCH, Samsung Medical Center, 서울대병원, RIKEN 등 |
| 조직 보존 | 주로 fresh-frozen | Fresh-frozen + FFPE 혼용 |
| 정량 방법 | TMT-11/16plex, iTRAQ | TMT, label-free, DIA |
| 규모 | 80~220명/암종 | 60~773명/암종 |
| 특징적 인구 집단 | 서양 흡연자 중심 | 비흡연자, HBV 관련 간암, 조기 발병 위암 등 |
| 주요 차별점 | 표준화된 파이프라인, 공개 데이터 | 인구 집단 특이 돌연변이(AKT1 E17K, aristolochic acid SBS22), 동아시아 특이 병인 연구 |
| 데이터 공개 | CPTAC Data Portal (cptac-data-portal.georgetown.edu) | 제한적 공개 (GEO, PRIDE, 기관별 상이) |

**복수 독립 코호트가 존재하는 암종:** 유방암(≥4), 폐암(≥5), 대장암(≥3), 신장암(≥3), 위장관계 암(다수).

---

## 핵심 비교표

| 암종 | 대표 코호트 수 | 최대 규모 | WGS/WES | RNA-seq | Proteomics | Phosphoproteomics | 주목할 특징 |
|------|--------------|----------|---------|---------|------------|-------------------|------------|
| 유방암 | 4+ | 773 (CBCGA) | O | O | O | O | Asian vs Western 인구 차이 |
| 폐선암 | 5+ | 229 (Korean NSCLC) | O | O | O | O | 흡연/비흡연/공해 에티올로지별 |
| 대장암 | 3+ | 435 샘플 (CRC progression) | O | O | O | 일부 | 원발→전이→발암 단계 연구 |
| 췌장암 | 2+ | 196 (Asian PDAC) | O | O | O | O | KRAS mutation 심층 sequencing |
| 신장암 | 3+ | 115 (TKI response) | O | O | O | O | 치료 반응 예측 코호트 |
| 방광암 | 2 | 448 샘플 (Yao 2023) | O | O | O | O | Papillary vs CIS 비교 |
| 두경부암 | 1 (CPTAC) | 108 | O | O | O | O | 가장 많은 데이터 레이어(7종) |
| 갑상선암 | 2 | 102 각각 | O | O | O | 일부 | MTC + PTC 별도 코호트 |
| 다발성골수종 | 1 | 138 | nanopore | O | O | O | 혈액암 최초 대규모 연구 |
| 소아 뇌암 | 1 (CPTAC) | 218 | O | O | O | O | 7개 조직학적 유형 동시 분석 |

---

## 관련 논문

- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — CPTAC 유방암 proteogenomics 원조 연구; somatic mutation → signaling 연결 프레임워크 수립
- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — 773명 CBCGA; 6-layer multi-omics; AKT1 E17K Asian 특이 enrichment
- [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] — LMD 기반 tumor enrichment로 유방암 proteogenomics 정밀도 향상
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] — CALGB 40601 HER2+ 신보조 치료 반응 proteogenomics
- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] — APOLLO LUAD; 단백질이 RNA보다 생존 예측력 우수
- [[zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer]] — Xuanwei 공해 LUAD 코호트; BaP 유발 EGFR-G719X; radiomics 통합
- [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] — 한국 EGFR/ALK WT 비흡연 LUAD; 4개 subtype
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] — 229명 Korean NSCLC; 5개 분자 subtype
- [[park-2024-proteogenomic-characterization-reveals-estrogen-signaling]] — NENA 코호트; estrogen signaling → saracatinib 제안
- [[mun-2019-proteogenomic-characterization-human-early-onset-gastric]] — 한국 조기 발병 미만형 위암; N-glycoproteomics 포함
- [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] — 196명 Asian PDAC; KRAS 94.9%; 6개 subtype
- [[ng-2022-integrative-proteogenomic-characterization-hepatocellular-carcinoma]] — HCC 에티올로지별 (HBV/HCV/대사성) 분자 특성
- [[ji-2023-pharmaco-proteogenomic-characterization-liver-cancer]] — 간암 오가노이드 바이오뱅크; 129종 약물 스크리닝
- [[li-2023-proteogenomic-early-esophageal-cancer]] — 786 ESCC 샘플; 9단계 발암 과정 추적
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] — 60 ESCC; CSNK2A1 kinase 타겟 발굴 및 검증
- [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] — 일본 CRC; 원발 vs 전이; proteomics plasticity 확인
- [[li-2024-proteogenomic-profiling-colorectal-cancer-progression]] — CRC 발암 단계별 proteogenomics (435 샘플)
- [[yu-2024-proteogenomic-analysis-cervical-cancer-reveals]] — 139명 Chinese 자궁경부암; acetylproteomics 포함
- [[hu-2024-proteogenomic-insights-early-onset-endometrioid-endometrial]] — 215명 자궁내막암; 조기 발병 특이 SIGLEC10 돌연변이
- [[ou-2025-integrated-proteogenomic-characterization-localized-prostate]] — 145명 Chinese 국소 전립선암; AR signaling 이질성
- [[hu-2024-multi-omic-profiling-clear-cell-renal]] — 100명 ccRCC; 공간 omics + snRNA-seq; DCCD 신규 subtype
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — 115명 ccRCC sunitinib 반응; ROC-AUC 0.98 분류기
- [[qu-2022-proteogenomic-characterization-mit-family-translocation]] — 86명 tRCC; TFE3 fusion partner 15종
- [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] — 138명 다발성 골수종; 혈액암 최초 대규모 proteogenomics
- [[shi-2022-integrated-proteogenomic-characterization-medullary-thyroid]] — 102명 MTC; BRAF/NFT 신규 드라이버
- [[qu-2024-integrated-proteogenomic-metabolomic-characterization-papillary]] — 102명 PTC; metabolomics 통합
- [[yao-2023-proteogenomics-different-urothelial-bladder-cancer]] — 190명/448 샘플 방광암; PUC vs CIS 분자 경로 구분
- [[zhang-2025-integrated-proteogenomic-characterization-ampullary-adenocarcinoma]] — 198명 담낭-십이지장 접합부 암; 4q loss → 지방산 축적
- [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]] — Korean IDH-wt GBM; pharmaco-proteogenomics
- [[petralia-2020-integrated-proteogenomic-characterization-across-major]] — 218명 소아 뇌암 7개 유형; CPTAC/CBTN
- [[zhang-2022-integrated-proteogenomic-characterization-across-major]] — 200명 PitNET; 7개 subtype; GNAS 진단 마커
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — CPTAC pan-cancer; 1,043 tumors; 2,863 druggable protein
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — CPTAC 1,056 tumors; 7개 pan-cancer 면역 subtype
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — OPPTI; 1,071 CPTAC tumors; 23개 post-transcriptional kinase 타겟

---

## Related pages

- [[proteogenomics]]
- [[CPTAC]]
- [[pan-cancer]]
- [[phosphoproteomics]]
- [[multi-omics-integration]]
- [[molecular-subtype]]
- [[Asian-cohort]]
