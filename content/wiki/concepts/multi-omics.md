---
title: "Multi-Omics"
type: concept
updated: 2026-05-19
---

# Multi-Omics (다중 오믹스)

## 정의

Multi-omics(다중 오믹스)는 게놈(genomics), 전사체(transcriptomics), 단백체(proteomics), 인산화단백체(phosphoproteomics), 후성유전체(epigenomics), 대사체(metabolomics), 지질체(lipidomics) 등 두 가지 이상의 오믹스 데이터 레이어를 통합하여 생물학적 시스템을 포괄적으로 이해하는 접근법이다. 단일 오믹스가 포착하지 못하는 분자 간 상호작용과 조절 계층을 드러냄으로써, 암의 분자 아형 분류, 바이오마커 발굴, 치료 표적 식별, 예후 예측에 있어 단일 오믹스 대비 월등한 성능을 보인다.

암 연구에서 multi-omics 통합의 핵심 발견 중 하나는 단백질이 생존(survival) 예측에서 mRNA보다 일관되게 우월하다는 것이다. CPTAC 연구들에서 mRNA-단백질 발현의 median 상관계수는 약 0.48로, 단백질 수준의 정보가 독립적으로 중요한 생물학적 의미를 지님을 보여준다. 많은 임상적으로 중요한 변화들이 후전사적(post-transcriptional) 조절을 통해 발생하여 DNA/RNA 수준에서는 보이지 않기 때문에, 단백체와 인산화단백체 데이터를 포함한 통합 분석이 필수적이다.

## 핵심 원리

- **데이터 레이어**: 게놈(WES/WGS, somatic mutation, CNA), 전사체(RNA-seq, mRNA, lncRNA), 단백체(MS-based LC-MS/MS, TMT/iTRAQ), 인산화단백체(phosphoproteomics), 후성유전체(methylation array/WGBS, histone mark), 대사체(metabolomics), 지질체(lipidomics), 표면 당단백체(glycoproteomics), 방사체(radiomics), 공간전사체(spatial transcriptomics) 등.
- **통합 방법론**:
  - **수직 통합(vertical integration)**: 같은 샘플에서 여러 오믹스를 동시에 측정하고, 소마틱 돌연변이 → mRNA → 단백질 → 인산화단백질 수직 연계 분석 (CPTAC 방식).
  - **수평 통합(horizontal integration)**: 여러 독립적인 오믹스 코호트 또는 데이터베이스(TCGA, CPTAC, GTEx, GEO)를 조합하여 분석.
  - **MOFA(Multi-Omics Factor Analysis)**: 잠재 인자를 이용하여 여러 오믹스 레이어에서 공유되는 분산 구조를 추출 (Esplin 2024 FAP 연구에서 사용).
  - **NMF(Non-negative Matrix Factorization)**: 단백체 데이터 기반 분자 아형 분류에 사용 (TNBC, ESCC 연구 등).
  - **ML/네트워크 기반**: XGBoost(FunMap), GNN, kinase-substrate 네트워크 분석.
- **Protein > RNA for survival**: 단백질 공발현이 mRNA보다 유전자 기능적 연관성 예측에 우월하다는 사실이 FunMap(Shi 2025)에서 입증되었다. 또한 kinase 표적의 경우 게놈 증폭 없이 단백질 수준에서만 과발현되는 경우가 많다(OPPTI).
- **분자 아형의 임상 우월성**: HER2+ 유방암에서 단백체 아형이 PAM50보다 pCR 예측력이 높으며(Jaehnig 2025), TNBC에서도 단백체 기반 분류가 RNA 기반보다 화학요법 반응 예측력이 높다(Lee 2026).
- **mRNA-단백질 불일치**: 단백질이 mRNA 발현과 다른 수준을 보이는 경우, 후전사적 조절이 작용하는 것으로 해석된다. ESCC에서 median mRNA-단백질 상관이 종양 0.30, 인접 정상 0.11로 낮고, cytochrome P450·pyruvate 대사·glutathione 대사·glycolysis 경로에서 불일치가 집중되었다(Zhao 2024).
- **암의 단계별 분자 이행**: FAP 연구(Esplin 2024)에서 four-omics 동시 프로파일링이 점막-폴립-이형성 전이에서 각 오믹스 레이어가 다른 시점에 지배적임을 보여주었다. Arachidonic acid pathway가 가장 이른 활성화 표적 경로.
- **여러 레이어 포함 시 독립적 예후 가치**: CBCGA(Jiang 2024)에서 대사체 아형이 표준 분류를 넘어서는 독립적 예후 가치를 지님을 6 레이어 통합에서 확인.
- **TCGA + CPTAC + 공개 DB 통합**: MCMBP 연구(Zhang 2025)에서 TCGA, CPTAC, GTEx, GEO를 결합하여 새 환자 데이터 없이 바이오마커 발굴이 가능함을 시연.

## 위키 내 관련 논문

- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — 6 오믹스 레이어 × 773명 중국 유방암(CBCGA); 대사체 아형의 독립적 예후 가치 등 포괄적 multi-omics 통합 방법론 (Nature Cancer 2024)
- [[esplin-2024-multiomic-analysis-familial-adenomatous-polyposis]] — FAP 93 샘플의 four-omics 동시 프로파일링 (전사체/단백체/대사체/지질체); MOFA 통합, 단계별 오믹스 지배 패턴 발견 (Nature Cancer 2024)
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap: 11개 CPTAC 암종에서 단백질 공발현이 mRNA보다 기능적 연관성 예측에 우월함을 ML로 증명 (Nature Cancer 2025)
- [[elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional]] — OPPTI: 단백질 수준의 post-transcriptional kinase 표적 23개가 게놈 정보만으로는 발견 불가함을 규명 (Communications Biology 2021)
- [[zhao-2024-multi-omics-characterization-esophageal-squamous-cell]] — ESCC 60 샘플의 transcriptome + proteome + phosphoproteome 통합; mRNA-단백질 불일치 경로 규명 및 CSNK2A1 표적 발굴 (JCI Insight 2024)
- [[ji-2025-multi-omic-molecular-characterization-high-risk]] — 142명 고위험 유방암의 multi-omics 기반 IA/VT/KA 아형 분류; 아형별 최적 neoadjuvant 치료 대응 (2025)
- [[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]] — TCGA/CPTAC/GTEx/GEO 통합 multi-omics로 PANCAD MCMBP 바이오마커 발굴; GDSC + CMap 병용 drug sensitivity pipeline (Frontiers in Immunology 2025)
- [[pugazenthi-2025-evolution-application-multi-omic-analysis-pituitary]] — PitNET에 적용된 다중 오믹스 접근법(게놈/전사체/후성유전체/단백체/대사체) 리뷰 (Frontiers in Medicine 2025)
- [[xu-2023-atlas-genetic-scores-predict-multi-omic]] — 유전자 점수와 multi-omic 특성의 관계를 pan-cancer로 매핑한 atlas (2023)
- [[rahmann-2018-multiomic-medulloblastomas]] — 수모세포종(medulloblastoma)의 multi-omics 분석 (2018)
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — 10개 암종 1,043개 종양의 druggable proteome 체계적 발굴; mRNA-단백질 상관 median 0.48 보고 (Cell 2024)
- [[pan-2025-integrative-proteogenomic-characterization-reveals-therapeutic]] — 통합 proteogenomics로 치료 취약성 규명 (2025)

## 관련 개념

- [[CPTAC]]
- [[breast-cancer]]
- [[immune-evasion]]
- [[immunotherapy]]
- [[network-medicine]]
