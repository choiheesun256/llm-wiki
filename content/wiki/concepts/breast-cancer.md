---
title: "Breast Cancer"
type: concept
updated: 2026-05-19
---

# Breast Cancer (유방암)

## 정의

유방암(breast cancer)은 유방 상피 세포에서 발생하는 악성 종양으로, 여성에서 가장 흔한 암이다. 분자 아형(molecular subtype)에 따라 생물학적 특성, 예후, 치료 전략이 크게 달라지므로, 정밀 의학(precision medicine)을 적용하기에 적합한 모델 암종으로 오랫동안 연구되어 왔다. 2016년 CPTAC이 105개 TCGA 유방암 샘플에 대해 proteogenomics를 수행한 것을 시작으로, 이후 다수의 대규모 multi-omic 연구가 체계적으로 진행되어 유방암의 분자 생물학에 대한 이해를 크게 심화시켰다.

대표적인 분자 아형 분류는 PAM50 유전자 발현 프로파일에 기반한 것으로, Luminal A (ER+/PR+, HER2-, 저증식성), Luminal B (ER+/PR+, HER2± 또는 고증식성), HER2-enriched (HER2 과발현), Basal-like (ER-/PR-/HER2-, 주로 TNBC에 해당)로 나뉜다. 그러나 proteomics와 phosphoproteomics 기반의 다중 오믹스 연구들은 PAM50 분류만으로는 포착되지 않는 단백질 수준의 이질성과 치료 반응 예측력이 존재함을 반복적으로 보여주었다.

## 핵심 원리

- **PAM50 분자 아형**: Luminal A (저증식, 좋은 예후), Luminal B (고증식, 중간 예후), HER2-enriched (HER2 과발현, trastuzumab 표적), Basal-like/TNBC (ER/PR/HER2 모두 음성, 화학요법 또는 면역치료 주 사용).
- **TNBC 아형 세분화**: Lehmann 분류에 따라 BL1, BL2, LAR, M 4개의 TNBC 아형이 구분되며, 각각 CDK, TKI, PI3K, mTOR 표적 치료에 대한 취약성이 다르다. CNA가 단백질 변화의 주요 원인(21%)이며 돌연변이(4%)보다 훨씬 큰 비중을 차지한다.
- **Proteogenomics의 임상적 우월성**: HER2+ 유방암(CALGB 40601 시험)에서 단백체 기반 아형이 PAM50보다 pCR 예측력이 높으며, GPRC5A/TPBG가 trastuzumab 내성 바이오마커로 제시되었다. TNBC에서도 단백체 기반 예측이 RNA 기반 모델보다 화학요법 반응 예측력이 높다.
- **주요 신호 경로**: PI3K/AKT/mTOR (ESR1 변이, PIK3CA 변이), HER2/EGFR/ERBB 계열, CDK4/6-RB, TGFβ, Wnt/β-catenin, TP53, BRCA1/2.
- **ESR1 돌연변이**: Luminal 유방암에서 내분비 치료(tamoxifen/aromatase inhibitor) 이후 ESR1 ligand-binding domain 돌연변이가 획득 내성의 주요 원인이다. ctDNA를 통한 조기 감지가 가능하다.
- **AURKB 경로와 화학요법 내성**: TNBC 잔류 종양에서 Aurora kinase B(AURKB) 경로가 활성화되며, AURKB 억제제 + paclitaxel 병용이 내성 극복 전략으로 제시되었다.
- **면역 아형과 치료 반응**: 면역 풍부(immune-enriched) 아형은 HER2+ 및 TNBC 모두에서 가장 높은 pCR률을 보인다. TNBC에서는 EMT 아형이 화학요법에 가장 저항적이다.
- **아시아/중국 코호트 특이성**: CBCGA(773명) 연구에서 AKT1 E17K 돌연변이가 서양 코호트보다 아시아 코호트에서 더 풍부하게 나타났으며, basal-like 아형에서 GPX4 의존적 ferroptosis 취약성이 확인되었다.
- **레이저 미세절제(LMD) 기반 proteogenomics**: LMD로 종양세포를 농축하면 기질(stromal) 오염을 최소화하여 phosphoproteomic cluster가 basal-like 재발 위험을 보다 정확하게 예측한다.
- **Kinase bypass 경로**: HER2+ 비반응 종양에서 phosphoproteomics가 HER2 이외의 bypass kinase 활성화 경로를 규명하여 합리적 병용 치료 설계의 근거를 제공한다.

## 위키 내 관련 논문

- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — 랜드마크 CPTAC 유방암 proteogenomics (105 TCGA 샘플); somatic mutation → 하위 신호 변화, 5q deletion trans-effects, GPCR 클러스터 등 제시 (Nature 2016)
- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — CBCGA: 6 오믹스 레이어 × 773 중국 유방암 환자; AKT1 E17K 아시아 특이성, basal-like ferroptosis 취약성, 대사체 아형의 독립적 예후 가치 (Nature Cancer 2024)
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] — CALGB 40601 시험 proteogenomics; 단백체 아형이 PAM50보다 pCR 예측력 우수, GPRC5A/TPBG 내성 바이오마커 (2025)
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — 50명 TNBC 전향적 proteogenomics; 5 아형 중 면역 풍부 아형 pCR 55.6% vs EMT 0%; AURKB 내성 경로 (Genome Biology 2026)
- [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] — 117개 유방 종양 LMD 농축 proteogenomics; phosphoproteomic cluster로 basal-like 재발 위험 예측 (2024)
- [[kaur-2024-integrated-proteogenomic-analysis-reveals-distinct]] — TCGA TNBC 113개 샘플 RPPA 기반 proteogenomics; CNA가 단백질 변화의 주 원인; 아형별 CDK/PI3K/TKI/mTOR 취약성 (Cancers 2024)
- [[ji-2025-multi-omic-molecular-characterization-high-risk]] — 142명 고위험 초기 유방암 multi-omics; IA/VT/KA 3 아형과 최적 neoadjuvant 전략 대응; 7유전자 RNA 분류자 AUC ~90% (2025)
- [[toy-2013-esr1-ligand-binding-domain-mutations-breast]] — 내분비 치료 내성 유방암에서 ESR1 리간드 결합 도메인 돌연변이 발견 (2013)
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — TNBC에서 C5aR1+ 종양관련 대식세포(TAM)가 PARP 억제제 내성을 매개하는 기전 (2024)

## 관련 개념

- [[CPTAC]]
- [[multi-omics]]
- [[immune-evasion]]
- [[immunotherapy]]
