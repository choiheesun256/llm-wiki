---
title: "Protein vs RNA for Cancer Survival Prediction"
type: comparison
updated: 2026-05-19
---

# 암종별 단백질 vs RNA 생존 예측력 비교

## 개요

Proteogenomics 연구의 핵심 발견 중 하나는 단백질 발현이 mRNA 발현보다 임상 결과(생존, 치료 반응) 예측에 더 유용하다는 것이다. 이는 mRNA-단백질 간 상관관계가 암종에 따라 0.3~0.5 수준에 불과하고, 번역 후 조절(PTM, 단백질 분해)이 단백질 발현을 독립적으로 조절하기 때문이다. 이 비교표는 wiki에 수록된 proteogenomics 논문들에서 보고된 단백질 vs RNA 생존 예측력 데이터를 암종별로 정리한 것이다.

## 비교표

| 암종 | 연구 (저자 + 연도) | 단백질 관련 생존 유전자/지표 | RNA 관련 생존 유전자/지표 | 단백질 우세? | 주요 단백질 경로/특징 | 비고 |
|------|-------------------|--------------------------|--------------------------|-------------|---------------------|------|
| Lung adenocarcinoma (LUAD) | Soltis et al. 2022 (APOLLO) | 단백질 발현이 생존과 더 빈번하게 연관 (정량적 비교 보고) | RNA 기반 생존 연관 유전자 수 더 적음 | **단백질 우세** | 흡연 관련 3 genomic subtype; subtype별 단백질 표시자 | US 코호트(87명); 단백질 발현이 RNA보다 생존 예측에서 우월함을 명시 |
| Lung adenocarcinoma (HNSCC 연구 내 언급) | Huang et al. 2021 (CPTAC HNSCC) | 11,744 단백질 정량; 단백질이 유전자 기능 예측에서 RNA 능가 | RNA는 단백질보다 기능 예측력 낮음 | **단백질 우세** | FAT1/11q13.3, EGFR 활성화 모드, 면역-cold 표시자 | 108명; "단백질이 mRNA보다 유전자 기능 예측 성능 우위" 명시 |
| Lung adenocarcinoma (SEL1L3) | Shen et al. 2023 (Taiwan) | SEL1L3 단백질 과발현: HR=0.54 (OS 개선) | SEL1L3은 기존 RNA 데이터에서 주목받지 못함 | **단백질 우세** | ER stress; SEL1L3 90% 과발현 (RNA로는 발견 어려운 단백질) | 98명; 단백질로만 발굴 가능한 예후 유전자 예시 |
| NSCLC (Korean) | Song et al. 2024 | 5개 subtype (metabolic/alveolar-like/proliferative/hypoxic/immunogenic); protein-based subtype이 치료 반응 예측 | RNA만으로는 동일 subtype 구분 어려움 | **단백질 우세 (subtype 수준)** | 대사, 저산소, 면역 경로 | 229명; subtype별 치료 반응 예측에서 단백질 subtyping의 임상적 가치 |
| Breast cancer (TNBC) | Lee et al. 2026 | 단백질 기반 모델이 RNA 기반 모델보다 pCR 예측 우수 | RNA 기반 예측 모델 성능 열등 | **단백질 우세** | AURKB pathway; 면역풍부형 subtype; EMT subtype | 50명; pCR 예측에서 protein-based prediction이 명시적으로 RNA 능가 |
| Breast cancer (HER2+) | Jaehnig et al. 2025 (CALGB 40601) | Proteome subtype이 pCR 예측에서 PAM50 능가; GPRC5A/TPBG 단백질 발현이 내성 예측 | PAM50 (RNA 기반) 예측력 낮음 | **단백질 우세** | HER2 bypass kinase pathway; 면역풍부형 subtype | CALGB 40601 trial; PAM50 vs proteome subtype 직접 비교 |
| Esophageal SCC | Zhao et al. 2024 | TIMMDC1 단백질 독립적 예후 인자; S-III subtype (glycolysis/DNA repair 풍부) → 최악 예후 | mRNA-단백질 상관관계 0.30 (종양) vs 0.11 (정상); RNA 단독으로 예후 예측 불완전 | **단백질 우세** | glycolysis, DNA repair; CSNK2A1 kinase 표적 | 60명 (7년 추적); mRNA-protein 상관관계 낮음 → 단백질 독자적 정보 가치 |
| ccRCC | Zhang et al. 2023 | 270 예후 단백질 (sunitinib 치료군) vs 630 예후 단백질 (비치료군) — 공유 단백질 19개만 | RNA 기반 예후 표시자는 치료 맥락 미반영 | **단백질 우세 (치료 맥락 의존)** | mTOR signaling (7q gain); VHL + AA 서명 | 115명; 치료 여부에 따라 예후 단백질 완전히 달라짐 → 단백질의 임상 맥락 의존성 강조 |
| GBM (ferroptosis) | Wang et al. 2023 | HSPB1 인산화 수준 → OS 예측 (단백질/PTM 레벨 지표) | RNA로는 HSPB1 인산화 상태 측정 불가 | **단백질/PTM 우세** | Ferroptosis (GPX4, ACSL3); AKT-HSPB1 축 | 99명 (CPTAC GBM); PTM(인산화)이 RNA에서 완전히 비가시적인 예후 정보 제공 |
| Multiple myeloma | Ramberger et al. 2024 | R-ISS와 독립적인 단백질 서명이 예후 예측 | R-ISS(임상+유전체 기반)는 단백질 예후 서명 포착 못 함 | **단백질 우세** | 고도 조절 이상 phosphoproteome; 염색체 이상 기반 subgroup | 138명; 단백질 서명이 기존 임상 점수 R-ISS 독립적으로 예후 예측 |
| CRC (primary + metastasis) | Tanaka et al. 2024 | Hypoxia/EMT/stemness 단백질 subtype이 전이 및 예후 예측 | 유전체 차이가 subtype 간 최소 → RNA/DNA 기반 subtyping 부적절 | **단백질 우세** | Hypoxia signaling, EMT, MHC class I 억제 | 296명 (154 원발 + 142 전이); 유전체적 차이 없이 단백체 가소성이 전이 결정 |
| LUAD (air pollution, Xuanwei) | Zhang et al. 2024 | 단백질 기반 4 subtype이 radiomics + 대사 + 면역 경로 포착 | RNA 단독 subtyping은 동일 구분력 미달성 | **단백질 우세 (multimodal)** | BaP 돌연변이 서명; CYP1A1 과발현; MAD1/TPRN | 169명; radiomics + proteomics 통합 → 비침습 분자 subtyping 가능성 |
| Skull-base chordoma | Zhang et al. 2024 | CIN 단백질 서명 → OS/PFS 독립 예후 (p=0.0024) | RNA/DNA 기반 CIN 추정은 단백질 CIN 점수 대체 불가 | **단백질 우세** | Mitochondrial function (1q gain); 면역-cold (9p/10q loss) | 187명; phosphoproteomics 포함 → 시그널링 수준 예후 인자 |

## 단백질이 RNA보다 우세한 이유 (mechanistic basis)

| 메커니즘 | 설명 | 임상적 함의 |
|---------|------|------------|
| mRNA-단백질 상관관계 낮음 | 암 조직에서 r=0.3~0.5 수준; 정상 조직보다 더 낮음 (Zhao 2024: 종양 0.30 vs 정상 0.11) | RNA로 단백질 발현 추정 부정확 |
| 번역 후 조절 (PTM) | 인산화, 유비퀴틴화 등이 단백질 기능을 독립적으로 결정 | HSPB1 인산화 (Wang 2023)처럼 RNA에서 비가시적 예후 정보 |
| 단백질 안정성 / 분해 | proteasome, autophagy에 의한 선택적 분해 → 단백질 풍부도가 mRNA와 독립 | 동일 mRNA에서 매우 다른 단백질 발현 가능 |
| 복합체 형성 / 국소화 | 단백질의 기능은 발현량 외에 상호작용 파트너와 세포 내 위치에 의존 | MERTINS 2016: GPCR 클러스터가 단백질 레벨에서만 검출 |
| 치료 맥락 의존성 | 치료 관련 단백질 변화는 mRNA와 독립적으로 발생 | Zhang 2023 ccRCC: 치료군/비치료군에서 예후 단백질이 완전히 다름 |

## 핵심 차이점

- **모든 연구에서 단백질 우세**: Wiki에 수록된 proteogenomics 연구 중 RNA가 단백질보다 생존 예측에서 우세한 사례는 없다. 이는 proteogenomics 분야의 기본 전제를 강하게 지지한다.
- **PTM이 단백질 발현보다도 더 세밀한 예측**: GBM(Wang 2023), ESCC(Zhao 2024) 연구에서 인산화 수준이 단백질 발현량보다 예후와 더 강한 연관성을 보였다. 이는 phosphoproteomics의 임상적 가치를 시사한다.
- **Subtype 수준 vs. 단일 유전자 수준**: 단백질 우세는 단일 biomarker 발견(SEL1L3, TIMMDC1)부터 전체 subtype 분류(TNBC 5형, NSCLC 5형)까지 모든 수준에서 일관되게 나타난다.
- **치료 맥락 분리**: ccRCC 연구(Zhang 2023)는 치료를 받은 환자와 받지 않은 환자에서 예후 단백질이 거의 겹치지 않음을 보여줬다. RNA 기반 연구는 이 맥락 의존성을 포착하지 못할 수 있다.
- **Pan-cancer 수준에서도 동일**: FunMap(Shi 2025, 1,194명)과 OPPTI(Elmas 2021, 1,071명)는 pan-cancer 규모에서도 단백질 공발현이 mRNA보다 기능 예측과 임상 관련성에서 우수함을 확인했다.

## 관련 논문

- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]]
- [[huang-2021-proteogenomic-insights-biology-treatment-hpv-negative]]
- [[shen-2023-tissue-proteogenomic-landscape-reveals-role]]
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]]
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]]
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]]
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]]
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]]
- [[wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals]]
- [[ramberger-2024-proteogenomic-landscape-multiple-myeloma-reveals]]
- [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]]
- [[zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer]]
- [[zhang-2024-proteogenomic-characterization-skull-base-chordoma]]
- [[shi-2025-functional-network-human-cancer-proteogenomics]]
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]]
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]]

## 관련 개념

- [[proteogenomics]]
- [[mRNA-protein-correlation]]
- [[phosphoproteomics]]
- [[biomarker-discovery]]
- [[survival-analysis]]
- [[molecular-subtype]]
- [[CPTAC]]
- [[post-translational-modification]]
