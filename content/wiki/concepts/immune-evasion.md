---
title: "Immune Evasion"
type: concept
updated: 2026-05-19
---

# Immune Evasion (종양 면역 회피)

## 정의

종양 면역 회피(immune evasion)란 암세포가 숙주의 면역 감시 체계를 피하여 생존하고 증식하는 기전의 총칭이다. 정상 세포에서 돌연변이가 축적되어 암세포가 형성될 때 면역계는 이를 인식하고 제거하려 하지만, 암세포는 다양한 세포 내재적(cell-intrinsic) 및 미세환경적(TME-mediated) 전략을 통해 이 과정을 무력화한다. 면역 회피는 암 진행의 핵심 hallmark 중 하나이며, 면역관문억제제(immune checkpoint blockade, ICB) 치료에 대한 내성(resistance)의 주요 원인이기도 하다.

크게 네 가지 축으로 정리할 수 있다: (1) 면역억제(immunosuppression) — 억제성 사이토카인 및 세포를 통한 면역 기능 저하, (2) 면역관문 조절 — PD-L1/PD-L2, CTLA-4 등 checkpoint 분자 상향 조절, (3) 항원 제시 억제 — MHC-I 발현 저하 또는 degradation, (4) TME 리모델링 — MDSC, TAM, Treg 유입을 통한 면역억제성 미세환경 조성. 이 네 축은 서로 복잡하게 얽혀 있으며, 단일 경로만을 표적으로 하는 치료에 대한 내성이 흔히 발생한다.

## 핵심 원리

- **MHC-I 하향 조절**: 암세포는 NBR1 cargo receptor를 통한 autophagy로 MHC-I를 선택적으로 degradation하거나(특히 PDAC), PCSK9 매개 경로를 통해 MHC-I 표면 발현을 억제한다. SOX17 재발현은 IFNγ 신호 전달을 억제하여 세포 내재적으로 CD8+ T cell 살상을 차단한다.
- **PD-L1/PD-L2 축**: PD-L1(B7-H1)은 T cell의 PD-1에 결합하여 면역 반응을 억제한다. PD-L2의 N-glycosylation은 단백질 안정성을 높이고 PD-1 결합을 강화하여 anti-PD-1 치료 내성을 유발한다.
- **cGAS-STING 경로 조절**: 염색체 불안정성(CIN) 종양에서 cGAS-STING 활성화로 생성된 extracellular cGAMP는 ENPP1 ectonucleotidase에 의해 면역억제성 adenosine으로 가수분해되어 면역 회피 및 전이를 촉진한다.
- **Autophagy의 이중적 역할**: 종양세포 autophagy는 MHC-I를 degradation하고 PD-L1 안정성을 조절하여 면역 회피를 촉진하나, 면역세포(T cell, DC)에서는 항종양 기능을 유지하는 데 필요하다.
- **미토콘드리아 전달(mitochondrial transfer)**: 암세포는 mtDNA 돌연변이가 있는 미토콘드리아를 tunneling nanotubes(TNT)와 extracellular vesicle을 통해 TIL에 전달하고, T cell에서 homoplasmic replacement를 유도하여 대사 이상, senescence, 효과 기능 소실을 일으킨다.
- **대사 재프로그래밍**: 락트산(lactate) 축적, 저산소 환경, arginase 활성화가 TME 내 T cell 기능을 억제한다.
- **EMT/EMP와 면역 회피**: 상피-간엽 전환(EMT) 및 hybrid E/M 상태는 checkpoint 분자 증가, 항원 제시 결함, MDSC/TAM/Treg 유입을 통해 면역 억제 미세환경을 조성하고 ICB 내성에 기여한다.
- **후성유전적 조절**: 전반적인 DNA 메틸화 소실(global hypomethylation)은 late-replicating domain의 면역조절 유전자를 CGI promoter hypermethylation으로 침묵시켜 ICI 내성을 유발하며, 이는 TMB보다 강한 예측인자이다.
- **지질 대사**: KRAS 돌연변이 암에서는 UGCG/B4GALT5를 통한 glycosphingolipid(GSL) 합성이 상향 조절되어 종양 세포 표면에 GSL이 축적되고, NK/T cell 인식을 차단한다.
- **신규 checkpoint**: LAG-3, TIGIT, VISTA 등이 PD-1/CTLA-4 이외의 신흥 치료 표적으로 주목받고 있다.

## 위키 내 관련 논문

- [[tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge]] — 면역 회피 메커니즘과 최신 치료 전략 전반에 대한 포괄적 리뷰 (2025); PD-1/CTLA-4/LAG-3/TIGIT 포함
- [[ikeda-2025-immune-evasion-through-mitochondrial-transfer]] — 암세포가 미토콘드리아를 TIL에 전달하여 T cell 기능을 무력화하는 신규 기전 (Nature 2025)
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — PDAC에서 autophagy–NBR1 경로를 통한 MHC-I selective degradation; chloroquine + dual ICB 병용 시너지 (Nature 2020)
- [[meng-2025-reversal-tumour-immune-evasion-enhanced]] — PCSK9 knockdown과 tumor antigen mRNA를 결합한 dual-functional LNP로 MHC-I 복원 및 TME 재프로그래밍 (2025)
- [[li-2021-metastasis-immune-evasion-cgamp-enpp1]] — ENPP1이 cGAMP를 adenosine으로 가수분해하여 면역 회피 및 전이를 촉진; ENPP1 억제가 anti-PD-1 반응 회복 (Cancer Discovery 2021)
- [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]] — EMP/hybrid E/M 상태가 checkpoint 분자 증가, 항원 제시 결함, MDSC/TAM/Treg 유입을 통해 면역 회피를 유도하는 리뷰 (2022)
- [[soula-2024-glycosphingolipid-synthesis-mediates-immune-evasion]] — KRAS 활성화로 GSL 합성 효소(UGCG/B4GALT5) 상향 조절 → 종양 표면 GSL 축적 → NK/T cell 인식 차단 (Nature 2024)
- [[jung-2019-dna-methylation-loss-promotes-immune]] — DNA 메틸화 소실이 ICI 내성을 유발; TMB보다 강한 예측인자임을 pan-cancer TCGA 분석으로 제시 (Nature Communications 2019)
- [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion]] — PD-L2의 N-glycosylation이 단백질 안정화 및 PD-1 결합 강화를 통해 anti-PD-1 내성 유발 (JITC 2021)
- [[goto-2024-sox17-enables-immune-evasion-early]] — SOX17이 CRC 초기 발생에서 IFNγ 신호를 억제하고 MHC-I 발현을 낮추어 CD8+ T cell 살상을 차단 (Nature 2024)
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]] — 종양 및 면역세포에서 autophagy의 이중적 역할과 autophagy 억제제 + ICB 병용 전략 리뷰 (Molecular Cancer 2025)
- [[tauriello-2018-tgf-drives-immune-evasion-genetically]] — TGFβ가 전이성 CRC에서 T cell exclusion의 주 원인; galunisertib + anti-PD-1 병용이 내성 극복 (Nature 2018)

## 관련 개념

- [[immunotherapy]]
- [[tumor-microenvironment]]
- [[multi-omics]]
- [[breast-cancer]]
- [[CPTAC]]
