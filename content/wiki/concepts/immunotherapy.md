---
title: "Immunotherapy"
type: concept
updated: 2026-05-19
---

# Immunotherapy (암 면역치료)

## 정의

암 면역치료(cancer immunotherapy)는 환자 자신의 면역계를 활성화하거나 강화하여 암세포를 인식하고 제거하도록 하는 치료 전략의 총칭이다. 2010년대 이후 면역관문억제제(immune checkpoint blockade, ICB)의 임상 성공으로 종양학의 패러다임이 바뀌었으며, 현재 흑색종, 비소세포폐암(NSCLC), 방광암, 두경부암, 결장직장암(MSI-H) 등 다수의 암종에서 표준 치료로 자리잡았다. ICB 이외에도 CAR-T 세포 치료, 암 백신, 이중 특이적 항체(bispecific antibody), 사이토카인 치료, 온콜리틱 바이러스, 나노 면역치료 등이 활발히 연구되고 있다.

ICB는 T cell의 활성화를 억제하는 면역관문 단백질을 차단하여 항종양 면역 반응을 회복시킨다. 대표적인 표적은 PD-1(programmed death-1)/PD-L1 축과 CTLA-4(cytotoxic T-lymphocyte antigen 4)이다. 그러나 많은 환자에서 일차 내성(primary resistance) 또는 이차 내성(acquired resistance)이 발생하며, 유효 반응 예측 바이오마커와 내성 극복 전략 개발이 현재 면역치료 연구의 핵심 과제이다.

## 핵심 원리

- **주요 ICB 표적**:
  - **anti-PD-1/PD-L1**: nivolumab, pembrolizumab (anti-PD-1); atezolizumab, durvalumab, avelumab (anti-PD-L1). PD-L1이 T cell의 PD-1에 결합하면 T cell이 비활성화되므로, 이를 차단하여 항종양 T cell 기능을 회복.
  - **anti-CTLA-4**: ipilimumab. T cell 활성화 초기 단계를 규제하는 CTLA-4를 차단하여 T cell 프라이밍을 강화.
  - **Dual ICB**: anti-PD-1 + anti-CTLA-4 병용은 단독보다 높은 반응률을 보이지만 면역 관련 부작용(irAE)이 증가한다.
- **신규 checkpoint 표적**: LAG-3, TIGIT, VISTA, TIM-3 등이 PD-1/CTLA-4 이외의 신흥 표적으로 임상 개발 중이다. 이중 특이적 항체 tebotelimab(PD-1+LAG-3)이 주목받고 있다.
- **반응 바이오마커**:
  - TMB(tumor mutation burden): 돌연변이 부하가 높을수록 신항원이 많아 면역 반응에 유리.
  - MSI-H(microsatellite instability-high): DNA mismatch repair 결함으로 높은 돌연변이 부하; 결장직장암에서 pembrolizumab 승인의 근거.
  - PD-L1 발현: 불완전한 바이오마커이나 일부 암종에서 반응 예측에 활용.
  - DNA 메틸화 소실(Jung 2019): TMB보다 강한 ICI 내성 예측인자.
  - mtDNA 돌연변이(Ikeda 2025): 흑색종/NSCLC에서 TIL의 mtDNA 돌연변이 존재가 불량 ICI 반응의 예측인자.
  - 면역 아형: CPTAC pan-cancer 7개 면역 아형(Petralia 2024); 면역 풍부 아형이 가장 높은 pCR률.
- **내성 기전**:
  - KEAP1/STK11(LKB1) 돌연변이: NSCLC에서 PD-(L)1 억제제의 가장 강력한 게놈 내성 예측인자. Dual ICB(tremelimumab + durvalumab, POSEIDON 시험)로 이 아형의 OS가 두 배로 증가.
  - TGFβ 매개 T cell exclusion: 전이성 CRC(MSS, CMS4)에서 항종양 T cell이 종양 주변부에서 배제됨. Galunisertib(TGFBR1 억제제) + anti-PD-1 병용으로 내성 극복 가능.
  - Autophagy 매개 MHC-I degradation (PDAC): chloroquine + dual ICB 병용으로 내성 극복 (Yamamoto 2020).
  - 미토콘드리아 전달에 의한 T cell 기능 소실 (Ikeda 2025): PD-L1/TMB와 독립적인 신규 내성 기전.
  - EMT/hybrid E/M 상태: checkpoint 분자 증가 및 항원 제시 결함으로 ICB 내성 유발.
  - T cell exhaustion의 단백질 항상성 붕괴(proteostasis collapse): NEURL3, RNF149, WSB1 E3 ligase 과발현이 progenitor-exhausted T cell 기능을 회복하고 anti-PD-1과 시너지를 나타냄 (Scharping 2026).
- **조합 전략**:
  - ICB + autophagy 억제(chloroquine/hydroxychloroquine): MHC-I 복원을 통한 시너지.
  - ICB + TGFβ 억제: 면역 배제형 종양을 면역 침윤형으로 전환.
  - ICB + UDCA(bile acid): CHIP-mediated TGF-β degradation → Treg 감소, CD8+ T cell 활성화 (Shen 2022).
  - Dual ICB: KEAP1/STK11 돌연변이 NSCLC에서 특히 유효.
  - ADC + ICB: T-DXd가 cGAS-STING를 활성화하여 HER2+ 위암에서 면역 강화 (Oh 2024).
- **분자 아형별 면역치료 감수성**: Basal-like/면역 풍부 TNBC는 ICB에 잘 반응; EMT 아형은 저항. 방광암에서 basal 아형이 luminal 아형보다 anti-PD-1에 반응적. 혈액암 등에서도 분자 아형이 면역치료 반응을 예측.
- **TME 재프로그래밍**: CD38+ TAM barrier, CTLA-4+ NK cell subset, TLS(tertiary lymphoid structure) 성숙도 등이 pan-cancer TME에서 면역치료 반응과 연관된 재현 가능한 motif이다 (Vallée 2025).

## 위키 내 관련 논문

- [[tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge]] — 면역 회피 메커니즘과 ICB, bispecific 항체, 온콜리틱 바이러스, 나노면역치료를 포괄하는 최신 리뷰 (Signal Transduction and Targeted Therapy 2025)
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 돌연변이 NSCLC에서 dual ICB(tremelimumab+durvalumab)가 PD-(L)1i 내성 극복; POSEIDON 시험 분석 (Nature 2024)
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — PDAC의 autophagy 매개 MHC-I degradation; chloroquine + dual ICB 시너지 메커니즘 (Nature 2020)
- [[tauriello-2018-tgf-drives-immune-evasion-genetically]] — TGFβ가 전이성 CRC에서 T cell exclusion의 주 원인; galunisertib + anti-PD-1 내성 극복 (Nature 2018)
- [[scharping-2026-t-cell-exhaustion-proteostasis]] — T cell exhaustion에서 proteostasis 붕괴; NEURL3/RNF149/WSB1 E3 ligase 과발현이 anti-PD-1 시너지 (Cell 2026)
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — 10개 암종 1,056개 종양의 7개 pan-cancer 면역 아형; kinase 활성 기반 면역치료 표적 발굴 (Cell 2024)
- [[shen-2022-ursodeoxycholic-acid-reduces-antitumor-immunosuppression]] — 승인 담즙산 약물 UDCA의 CHIP-mediated TGF-β degradation → anti-PD-1 시너지; drug repurposing 예시 (Nature Communications 2022)
- [[jung-2019-dna-methylation-loss-promotes-immune]] — DNA 메틸화 소실이 TMB보다 강한 ICI 내성 예측인자; 폐암/흑색종 코호트 검증 (Nature Communications 2019)
- [[ikeda-2025-immune-evasion-through-mitochondrial-transfer]] — 미토콘드리아 전달에 의한 TIL 기능 소실; mtDNA 돌연변이가 ICI 반응 예측 바이오마커 (Nature 2025)
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]] — 61개 CyTOF/IMC 연구의 scoping review; 5개 pan-cancer TME motif 규명 (Frontiers in Immunology 2025)
- [[saito-2018-molecular-subtype-specific-immunocompetent]] — 방광암 basal(BBN) vs luminal(UPPL) 아형에서 면역치료 반응의 분자 아형 특이성 (Cancer Research 2018)
- [[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]] — JAK-STAT3-PD-L1 축 억제를 통한 MCMBP-low 환자의 anti-PD-L1 반응 예측 (Frontiers in Immunology 2025)

## 관련 개념

- [[immune-evasion]]
- [[breast-cancer]]
- [[CPTAC]]
- [[multi-omics]]
- [[network-medicine]]
