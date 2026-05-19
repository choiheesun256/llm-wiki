---
title: "Multi-omics 통합 분석을 통해 밝혀진 암의 분자 아형(molecular subtypes)과 그 임상적 의미는?"
type: question
status: active
category: [proteogenomics, multi-omics, molecular-subtypes]
source_files:
  - soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals.md
  - lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc.md
  - jaehnig-2025-proteogenomic-landscape-her2-positive-breast.md
  - jiang-2024-integrated-multi-omic-characterization-chinese-breast.md
  - mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer.md
  - hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal.md
  - tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer.md
  - zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor.md
  - hu-2024-multi-omic-profiling-clear-cell-renal.md
  - oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups.md
  - zhao-2024-multi-omics-characterization-esophageal-squamous-cell.md
  - ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals.md
  - pan-2025-integrative-proteogenomic-characterization-reveals-therapeutic.md
  - elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional.md
  - yu-2025-purine-metabolism-pan-cancer-metabolic-dysregulation.md
  - yao-2023-proteogenomics-different-urothelial-bladder-cancer.md
  - ji-2023-pharmaco-proteogenomic-characterization-liver-cancer.md
  - petralia-2020-integrated-proteogenomic-characterization-across-major.md
updated: 2026-05-19
---

# Multi-omics 통합 분석을 통해 밝혀진 암의 분자 아형(molecular subtypes)과 그 임상적 의미는?

## 짧은 답변

Multi-omics 통합 분석은 유전체(WES/WGS), 전사체(RNA-seq), 단백질체(proteomics), 인산화단백질체(phosphoproteomics), 대사체(metabolomics) 데이터를 결합하여 mRNA 수준에서는 보이지 않는 분자 아형을 발굴한다. 여러 CPTAC/독립 연구에서 단백질 발현이 RNA 발현보다 생존과 치료 반응 예측에 더 우수한 것으로 일관되게 나타나며, phosphoproteomics는 kinase 수준의 신호전달 아형 정보를 추가로 제공한다. 각 아형은 뚜렷한 취약점과 치료 전략을 제시하여 정밀 종양학의 분자적 토대가 된다.

## 상세 답변

### 1. 왜 Multi-omics가 단일 omics보다 우월한가?

유전체 돌연변이가 동일해도 단백질 발현과 신호전달 패턴은 크게 다를 수 있다. DNA/RNA 수준의 변이가 반드시 단백질 기능 변화로 이어지지 않기 때문에, 단백질체와 인산화단백질체 정보는 임상적으로 중요한 추가 층위를 제공한다.

- **단백질 vs RNA**: [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] LUAD 연구에서 단백질 발현이 RNA 발현보다 환자 생존과 더 자주 연관된다. [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] TNBC 연구에서도 단백질 기반 예측이 RNA 기반 모델을 능가한다. [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] HER2+ 유방암에서 단백질체 기반 아형이 PAM50 전사체 분류보다 pCR 예측에 우수하다.
- **mRNA-단백질 불일치**: [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] ESCC에서 중앙값 mRNA-단백질 상관계수는 종양 0.30, 인접 정상 조직 0.11로 낮으며, 특히 cytochrome P450, 해당과정, 글루타티온 대사 경로에서 불일치가 심하다.
- **Phosphoproteomics의 추가 가치**: 인산화단백질체는 실제 kinase 활성과 신호전달 상태를 반영한다. [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] OPPTI 연구는 10개 암 유형에서 DNA/RNA 수준으로는 보이지 않는 23개 druggable kinase를 단백질 수준에서 발굴한다(CDK4/6, PDK1, MET 포함).

### 2. 암 유형별 분자 아형 사례

#### LUAD (폐선암)

[[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]](APOLLO 코호트, 87명)은 WGS, RNA-seq, proteomics(7,614개 단백질), phosphoproteomics(10,093개 인산화 사이트)를 통합하여 흡연 이력과 연관된 3개 유전체 아형을 규명한다. 각 아형은 서로 다른 돌연변이 서명(mutational signature)과 인산화단백질체 네트워크 패턴을 가지며, 아형별 치료 취약점이 제시된다.

#### 유방암 (Breast Cancer)

**TNBC**: [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]]는 신보조 화학요법(anthracycline-taxane) 치료를 받은 TNBC 50명의 WES, RNA-seq, TMT proteomics/phosphoproteomics를 통합하여 NMF clustering으로 5개 아형을 도출한다. 면역 활성화 아형은 pCR율 55.6%인 반면 EMT/이종물질(xenobiotic) 아형은 pCR 0%다. 잔존 종양에서 AURKB 경로 활성화가 발견되어 Aurora kinase 억제제 + 파클리탁셀 병용 전략을 제안한다.

**HER2+ 유방암**: [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]](CALGB 40601 임상시험)에서 단백질체 아형이 PAM50보다 pCR 예측에 우수하며, GPRC5A와 TPBG가 trastuzumab 내성 바이오마커로 확인된다. 면역 풍부 아형이 가장 높은 pCR율을 보인다.

**중국인 유방암**: [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]](CBCGA, 773명)은 유전체, 전사체, 단백질체, 대사체, 방사선체(radiomics), 디지털 병리 6개 층위를 통합한 가장 포괄적인 아시아인 유방암 atlas다. 대사체 아형이 표준 분류 외의 독립적 예후 정보를 제공하며, AKT1 E17K 돌연변이가 서양 코호트보다 아시아 코호트에서 풍부하다. Basal-like 아형에서 GPX4 의존적 ferroptosis 취약성이 확인된다.

**초기 CPTAC**: [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]]는 105개 TCGA 유방암 샘플의 iTRAQ 기반 proteogenomics(12,553개 단백질, 33,239개 인산화 사이트)를 수행하여 5q 결실의 trans-effect(CETN3/SKP1 소실 → EGFR/SRC 활성화)를 발견하고, mRNA 수준에서는 보이지 않는 GPCR 신호전달 cluster를 규명한다.

#### PDAC (췌장관선암)

[[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]](196명 Asian 코호트)은 WES, RNA-seq, proteomics, phosphoproteomics 통합으로 6개 분자 아형을 확인한다: classical progenitor, 3개 squamous 변이형, immunogenic progenitor, exocrine-like. 단백질/인산화단백질 데이터가 transcriptomics만으로는 구분되지 않는 squamous 아형의 3가지 임상적으로 구별되는 subgroup을 세분화한다. KRAS 돌연변이는 표적 deep sequencing(100만× 심도)으로 94.9%에서 확인된다. TS4(침습-증식) 아형은 T 세포 증식을 억제하는 pro-tumorigenic 면역세포로 풍부하다.

#### CRC (대장암)

[[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]](154개 원발암 + 142개 간 전이, 340개 샘플)은 label-free MS proteomics로 6개 단백질체 아형을 규명한다: 원발암 3개 및 전이암 3개. 전이암에서 저산소증(hypoxia), EMT, 항원 제시 억제 신호가 풍부하다. 핵심 발견은 아형 간 유전체적 차이가 최소한인 반면 단백질체 가소성(plasticity)이 전이 진행을 이끈다는 것으로, 유전체만으로는 포착할 수 없는 생물학을 보여준다.

#### ccRCC (투명세포 신장암)

**TKI 반응**: [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]](115명, sunitinib 치료)은 다중omics random forest 분류기로 ROC-AUC 0.98을 달성한다. Chr 7q 증폭 → mTOR 활성화 → sunitinib 내성, 아리스토로크산(AA) 돌연변이 서명 + VHL 돌연변이 → 해당과정 강화 → 감수성의 상반된 분자 경로를 규명한다.

**대사 아형**: [[hu-2024-multi-omic-profiling-clear-cell-renal]](100명, 7가지 omics)은 4개 면역 아형(IM1-IM4)과 신규 DCCD(De-clear cell differentiated) 아형을 규명한다. DCCD는 지질 방울 소실, 대사 활성 감소, 영양소 흡수 증가, 1기에서도 재발률이 높은 나쁜 예후를 보인다. 동아시아인 특이적 AA 돌연변이 서명이 49%에서 관찰된다.

#### 기타 암 유형

**ESCC (식도편평세포암)**: [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]]는 3개 단백질체 아형(S-I: 최고 예후, S-II: 중간, S-III: 최악 예후; 해당과정/DNA 수리 단백질 풍부)을 규명하고, 인산화단백질체 kinase-substrate 네트워크 분석으로 CSNK2A1을 치료 표적으로 제안한다.

**방광암**: [[yao-2023-proteogenomics-different-urothelial-bladder-cancer]](190명, 모든 병기)은 papillary urothelial cancer(PUC: HRAS/FGFR3 경로)와 carcinoma in situ(CIS: TP53/RB1 경로)의 서로 다른 분자적 침습 경로를 규명한다. CIS 유래 종양에서 RBPMS 소실이 AP-1을 통한 전이를 촉진한다.

**GBM**: [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]](IDH-wildtype GBM)는 proteomics 기반으로 2개 아형(mitotic vs invasive)을 규명하며, 각 아형별 약물 감수성과 kinase activity 기반 치료 표적이 서로 다르다. [[liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify]]는 1,194명 IDH-wildtype 교종에서 3개 아형(MOFS1-3)과 비침습적 MRI 기반 아형 예측을 가능하게 한다.

**다발골수종(MM)**: [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]](138명)은 염색체 이상이 단백질 수준 아형 형성을 주도하고, R-ISS와 독립적인 예후 단백질 서명을 발굴한다. 인산화단백질체가 MM에서 특히 강하게 deregulated되어 있다.

**갑상선암(PDTC/ATC)**: [[pan-2025-integrative-proteogenomic-characterization-reveals-therapeutic]](348명)은 공격적 갑상선암(최악 예후군)에서 분자 아형과 druggable kinase 표적을 최초로 규명한다.

### 3. Phosphoproteomics: kinase 수준의 아형 정보

Phosphoproteomics는 단백질체를 넘어 실제 kinase 활성과 신호전달 상태를 직접 포착한다. 이는 분자 아형을 더욱 정밀하게 구분하고 치료 표적을 제시하는 데 핵심적이다.

- ESCC에서 CSNK2A1 동정 및 in vitro/in vivo 검증 ([[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]])
- TNBC 잔존 종양에서 AURKB 경로 활성화 확인 ([[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]])
- PDAC에서 KRAS/SMAD4 돌연변이를 RhoA/actin 신호전달과 연결 ([[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]])
- HER2+ 유방암에서 비-HER2 kinase bypass 경로 확인 ([[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]])

### 4. Metabolomics 통합: 대사 아형의 임상적 의미

[[yu-2025-purine-metabolism-pan-cancer-metabolic-dysregulation]](2,561명, 20개 암 유형 혈장 대사체)은 hypoxanthine, cysteine, pyruvic acid를 범암종 바이오마커로 제시하며, 33개 purine 대사 핵심 유전자를 TCGA pan-cancer 조직에서 확인한다. 대사체 아형은 CBCGA 연구([[jiang-2024-integrated-multi-omic-characterization-chinese-breast]])에서도 표준 유방암 분류 외 독립적 예후 정보를 제공하는 것으로 나타났다.

Pharmaco-multi-omics 접근법(pharmaco-transcriptomics + pharmaco-proteomics)으로 purine 대사 경로를 표적하는 약물 후보들이 도출된다.

### 5. 치료적 함의 요약

| 암 유형 | 분자 아형 수 | 핵심 치료 함의 |
|--------|------------|-------------|
| TNBC | 5 (NMF) | 면역 활성화 아형 → 면역요법; EMT 아형 → AURKB 억제제 |
| HER2+ 유방암 | 단백질체 기반 | GPRC5A/TPBG 높은 군 → trastuzumab 내성; 면역 아형 → pCR 최고 |
| PDAC | 6 | immunogenic progenitor → 면역요법; squamous → 공격적 치료 |
| CRC | 6 (3원발+3전이) | 전이 저산소증 아형 → 저산소증 표적 전략 |
| ccRCC | 4 (면역) + DCCD | DCCD Stage I → 수술 후 추가 치료 필요 |
| GBM | 2–3 | mitotic → 세포주기 표적; invasive → 침습 억제 |
| ESCC | 3 | S-III(최악) → CSNK2A1 억제제; TIMMDC1 예후 바이오마커 |
| MM | 염색체 이상 기반 | 유전적 아형별 약물 표적 차별화 |

## 핵심 비교표

| 연구 | 암 종 | Omics 층위 | 아형 수 | 핵심 발견 | 저널/연도 |
|-----|------|-----------|--------|---------|---------|
| [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] | LUAD | WGS+RNA+prot+phospho | 3 | 단백질>RNA for 생존 예측 | Cell Rep Med 2022 |
| [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] | TNBC | WES+RNA+TMT prot+phospho | 5 | 면역 아형 pCR 55.6%; AURKB 내성 | Genome Biol 2026 |
| [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] | HER2+ 유방 | prot+phospho+RNA | 단백질체 | PAM50보다 pCR 예측 우수 | Cell Rep Med 2025 |
| [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] | 유방암 (중국) | 6-layer (유전+전사+단백+대사+방사+병리) | 대사 아형 포함 | AKT1 E17K 아시아 특이; ferroptosis | Nat Cancer 2024 |
| [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] | PDAC | WES+RNA+prot+phospho | 6 | 단백질로 squamous 아형 세분화 | Nat Cancer 2023 |
| [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] | CRC | WGS+RNA+prot | 6 (3+3) | 유전체 아닌 단백질체 가소성이 전이 주도 | Cell Rep 2024 |
| [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] | ccRCC | WES+RNA+prot+phospho | TKI 반응군 | Multi-omics RF AUC 0.98 | Nat Comms 2023 |
| [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]] | GBM | WES+RNA+prot+phospho+약물 | 2 | mitotic vs invasive; 아형별 약물 감수성 | Nat Comms 2020 |
| [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] | ESCC | RNA+prot+phospho | 3 | CSNK2A1 kinase 표적 동정 | JCI Insight 2024 |
| [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] | MM | TMT prot+phospho+RNA+nanopore | 염색체 기반 | R-ISS 독립 예후 서명 | Nat Cancer 2024 |
| [[yu-2025-purine-metabolism-pan-cancer-metabolic-dysregulation]] | 20 암 종 | 혈장 대사체 + TCGA + CPTAC | 대사 아형 | Hypoxanthine 범암종 바이오마커 | Mol Cancer 2025 |

## 관련 논문

- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] — LUAD proteogenomics(APOLLO); 단백질>RNA 생존 연관, 흡연 기반 3 유전체 아형
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — TNBC 화학요법 내성 5 아형; 면역 아형 pCR 최고, AURKB 내성 기전
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] — HER2+ 유방암 CALGB 40601; 단백질체 아형 PAM50 능가, GPRC5A/TPBG 내성 바이오마커
- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — 중국인 유방암 6-layer CBCGA atlas; 대사체 독립 예후, AKT1 E17K 아시아 특이
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — CPTAC 유방암 proteogenomics 선구 연구; 5q trans-effect, GPCR 클러스터
- [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] — PDAC 6 분자 아형; 단백질로 squamous 아형 세분화, KRAS 돌연변이-인산화 연결
- [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] — CRC 6 단백질체 아형; 단백질체 가소성이 전이 주도
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — ccRCC TKI 반응 multi-omics 분류기 AUC 0.98; Chr7q-mTOR 내성
- [[hu-2024-multi-omic-profiling-clear-cell-renal]] — ccRCC 7-omics; 4 면역 아형 + DCCD 신규 아형 발견
- [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]] — GBM 2 아형(mitotic/invasive); 아형별 약물 감수성과 kinase 표적
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] — ESCC 3 단백질체 아형; CSNK2A1 치료 표적, TIMMDC1 예후 바이오마커
- [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]] — MM 최초 대규모 proteogenomics; 염색체 이상 기반 아형, R-ISS 독립 예후 서명
- [[pan-2025-integrative-proteogenomic-characterization-reveals-therapeutic]] — PDTC/ATC 갑상선암 348명; 분자 아형과 druggable kinase 표적
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — 10 암 유형 pan-cancer 23개 druggable kinase; OPPTI 알고리즘
- [[yu-2025-purine-metabolism-pan-cancer-metabolic-dysregulation]] — 20 암 유형 pan-cancer 대사체; hypoxanthine 범암종 바이오마커, 퓨린 대사 아형
- [[yao-2023-proteogenomics-different-urothelial-bladder-cancer]] — 방광암 전 병기 proteogenomics; PUC vs CIS 서로 다른 분자 침습 경로
- [[ji-2023-pharmaco-proteogenomic-characterization-liver-cancer]] — 간암 organoid biobank; proteogenomic 아형과 약물 감수성 연결
- [[petralia-2020-integrated-proteogenomic-characterization-across-major]] — 소아 뇌종양 7개 조직학형; 단백질체 cluster가 조직학 경계를 초월

## Related pages

- [[proteogenomics]]
- [[molecular-subtype]]
- [[phosphoproteomics]]
- [[CPTAC]]
- [[multi-omics]]
- [[drug-resistance-mechanisms]]
- [[therapeutic-vulnerability]]
- [[metabolomics]]
- [[kinase-signaling]]
