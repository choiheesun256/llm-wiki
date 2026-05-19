---
title: "PTM이 immune checkpoint 단백질을 어떻게 조절하는가?"
type: question
status: active
category: [cancer-biology, immune-evasion, PTM]
source_files:
  - song-2025-implication-protein-post-translational-modifications.md
  - wu-2025-short-chain-acyl-post-translational-modifications-cancers.md
  - yang-2022-enhancing-pd-l1-degradation-itch-during.md
  - xu-2021-pd-l2-glycosylation-promotes-immune-evasion.md
  - yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation.md
  - zhang-2025-pan-cancer-landscape-ubdfat10-experimental-validation.md
  - voli-2020-intratumoral-copper-modulates-pd-l1-expression.md
  - lao-2024-multiple-ptm-profiling-hcc.md
  - olsen-2013-status-large-scale-analysis-post-translational-modifications.md
  - zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer.md
updated: 2026-05-19
---

# Post-translational modifications (PTMs)이 immune checkpoint 단백질을 어떻게 조절하고, 이것이 치료 전략에 주는 시사점은?

## 짧은 답변

PD-L1, PD-L2, B7-H4 등 immune checkpoint 단백질은 glycosylation, ubiquitination, palmitoylation, phosphorylation 등 다양한 PTM에 의해 단백질 안정성, 표면 발현량, 리간드 결합력이 결정된다. 이 PTM들은 단순한 번역 후 수식이 아니라 면역 회피의 핵심 스위치로 작동하며, PTM 효소(writer/eraser)를 표적으로 삼는 치료 전략이 기존 immune checkpoint blockade(ICB)와의 병용 시너지를 통해 주목받고 있다.

## 상세 답변

### PTM의 종류와 checkpoint 조절 원리

세포 표면의 immune checkpoint 단백질은 mRNA 수준의 발현 이외에도 PTM에 의해 그 기능이 크게 조율된다. [[olsen-2013-status-large-scale-analysis-post-translational-modifications]]에서 확립된 대규모 PTM 분석 방법론(phosphoproteomics, DiGly 기반 ubiquitinomics, glycoproteomics)은 이 분야의 기술적 기반을 제공한다. [[song-2025-implication-protein-post-translational-modifications]]은 위암을 중심으로 ubiquitination, phosphorylation, acetylation, SUMOylation, glycosylation이 종양 진행 및 약물 저항성과 어떻게 연결되는지를 종합적으로 정리한 리뷰이며, PTM 효소를 druggable target으로 제시한다.

### Glycosylation: 단백질 안정화와 PD-1 결합 강화

N-glycosylation은 checkpoint 단백질의 가장 중요한 안정화 기전 중 하나다. [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion]]은 PD-L2의 N-glycosylation이 단백질 분해를 억제하고 PD-1과의 결합력을 높여 HNSCC에서 면역 회피를 촉진함을 보였다. Glycosylation이 차단된 PD-L2는 표면 발현이 감소하고 T cell 살상 능력이 회복된다. 이는 PD-L1의 glycosylation에 관한 기존 연구 (Chen lab)와 일맥상통하며, N-glycosylation이 PD-1 axis 전반의 공통적 안정화 기전임을 시사한다. 이를 표적으로 하는 당질화 억제제와 anti-PD-1 항체의 병용 전략이 타당성을 얻는 근거가 된다.

### Ubiquitination: PD-L1 분해와 저항성 조절

Ubiquitin 시스템은 checkpoint 단백질의 분해를 통제하는 핵심 기전이다.

- **ITCH-PD-L1 axis**: [[yang-2022-enhancing-pd-l1-degradation-itch-during]]은 ITCH E3 ubiquitin ligase가 PD-L1을 ubiquitinate하여 proteasomal 분해를 유도함을 보였다. MAPK inhibitor(MAPKi) 치료 중 PD-L1이 비정상적으로 축적되어 면역 회피 및 획득 내성을 유발하는데, ITCH를 활성화하는 소분자 화합물이 PD-L1 분해를 강화하고 항종양 반응을 연장한다. 흑색종 및 KRAS 돌연변이 모델에서 in vivo 검증이 이루어졌다.

- **UBD/FAT10 pan-cancer landscape**: [[zhang-2025-pan-cancer-landscape-ubdfat10-experimental-validation]]은 ubiquitin-like modifier인 UBD(FAT10)가 33개 암종의 TCGA/CPTAC 데이터에서 14개 암에서 과발현되며, 위장관 종양에서 진단 AUC >0.8임을 보였다. UBD는 IFN-gamma 우세 C2 면역 아형(CD8+ T cell, M1 macrophage)과 양의 상관관계를 보이며, 식도암(ESCA)에서는 TP53 경로를 통해 증식과 이동을 촉진한다. Molecular docking으로 imatinib(-8.9 kcal/mol)이 후보 약물로 제시되었다.

- **RNF41 비정규 ubiquitination**: [[xiong-2024-noncanonical-e3-ubiquitin-ligase-rnf41-mediated]]는 RNF41이 MYO1C를 K63-linked ubiquitination으로 수식하여 전립선암 전이를 촉진함을 보여, ubiquitin linkage 유형에 따라 분해(K48)가 아닌 신호 전달(K63) 기능도 가짐을 강조한다.

### Palmitoylation: B7-H4의 lysosomal 분해 억제

[[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation]]은 ZDHHC3가 B7-H4의 Cys130을 palmitoylate하여 lysosomal 분해로부터 보호하고 면역 억제 상태를 유지함을 보인 Nat Comms 연구다. CDK4/6 inhibitor인 abemaciclib은 세포 주기 억제와 독립적으로 lysosome 활성화를 통해 B7-H4를 분해하여 T cell 매개 항종양 면역을 회복시킨다. 이는 palmitoylation 효소(DHHC family)가 immune checkpoint 단백질의 안정성을 제어하는 새로운 축임을 보여주며, CDK4/6 inhibitor의 drug repurposing 가능성(면역 조절)을 제시한다.

### Copper에 의한 PD-L1 인산화 조절

[[voli-2020-intratumoral-copper-modulates-pd-l1-expression]]은 종양 내 구리(Cu) 수준이 PD-L1 발현과 면역 회피를 결정한다는 Cancer Research 연구다. Copper transporter CTR-1(SLC31A1)의 발현은 TCGA 전체 암종에서 PD-L1(CD274)과 양의 상관관계를 보인다. 구리 보충은 STAT3와 EGFR 인산화를 통해 PD-L1을 전사 수준에서 상향 조절하고, 반대로 chelator(disulfiram+Cu, TEPA)는 pSTAT3/pEGFR을 억제하여 ubiquitin 매개 PD-L1 분해를 유도하고 CD8+ T cell 및 NK cell 침윤을 증가시킨다. Disulfiram은 이미 FDA 승인된 약물(알코올 의존증 치료제)로, drug repurposing 후보로서 의미가 있다.

### Short-chain acylation: 대사-면역 연결 축

[[wu-2025-short-chain-acyl-post-translational-modifications-cancers]]는 lactylation, succinylation, crotonylation, butyrylation 등 8종의 short-chain acyl PTM이 암에서 어떻게 유전자 발현과 신호 전달을 조절하는지를 종합 리뷰한다. Warburg effect로 인한 대사 재프로그래밍이 lactylation을 통해 직접 발암성 유전자 발현을 촉진한다는 개념은 면역 억제 유전자 조절에도 적용될 수 있으며, 이들 PTM의 writer/eraser 효소가 치료 표적으로 부상하고 있다.

### 다중 PTM 상호작용(PTM crosstalk)

[[lao-2024-multiple-ptm-profiling-hcc]]는 HCC 환자 18명에서 9종의 PTM(phosphorylation, acetylation, crotonylation, ubiquitination, lactylation, succinylation, malonylation, N-glycosylation, β-hydroxybutyrylation)을 동시 프로파일링하여 PTM 간 cross-talk을 분석했다. Phosphosites는 intrinsically disordered region(IDR)을, acylation sites는 folded region을 선호하는 구조적 패턴이 밝혀졌고, NCL의 phospho-acylation cross-talk이 RNA splicing을 조절함을 확인했다. [[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]]은 대장암 세포에서 kinase inhibitor 처리 시 phosphorylation-acetylation cross-talk이 약물 반응의 복잡성을 결정함을 보여, PTM 네트워크 관점이 치료 전략 수립에 필수적임을 강조한다.

### 치료 전략에 대한 시사점

1. **PTM 효소 표적화**: Glycosylation(STT3 inhibitor), ubiquitin E3 ligase(ITCH activator, MDM2 inhibitor), palmitoylation(ZDHHC3 inhibitor), lactylation eraser 등 PTM 효소를 직접 억제하거나 활성화하는 소분자가 새로운 치료 전략이 된다.
2. **ICB와의 병용**: PTM 조절을 통해 checkpoint 단백질의 표면 발현을 감소시키거나 T cell 활성을 복원하면, 기존 anti-PD-1/PD-L1 항체와의 상승 효과를 기대할 수 있다.
3. **Drug repurposing**: Abemaciclib(CDK4/6i → B7-H4 palmitoylation 경로), disulfiram(copper chelator → PD-L1 ubiquitin 분해), imatinib(UBD/FAT10 표적) 등 기존 승인 약물의 재활용 가능성이 PTM 기전 연구로부터 제시된다.
4. **바이오마커로서의 PTM**: 특정 PTM 상태(glycosylated PD-L1, palmitoylated B7-H4 등)는 ICB 반응 예측 바이오마커로 활용될 가능성이 있다.

## 핵심 비교표

| PTM 유형 | 표적 단백질 | 효소/기전 | 기능적 결과 | 치료 전략 |
|---|---|---|---|---|
| N-Glycosylation | PD-L2 | N-glycosyltransferase | 단백질 안정화, PD-1 결합 강화 | Glycosylation inhibitor + anti-PD-1 |
| Ubiquitination (K48) | PD-L1 | ITCH E3 ligase | Proteasomal 분해 | ITCH activator (MAPKi 병용) |
| Ubiquitination-like | 다수 (UBD/FAT10) | UBD modifier | 증식/면역 조절 | Imatinib (molecular docking) |
| Ubiquitination (K63) | MYO1C | RNF41 | 전이 촉진 (비분해성) | RNF41 억제 |
| Palmitoylation | B7-H4 | ZDHHC3 | Lysosomal 분해 억제 | Abemaciclib (CDK4/6i) |
| Phosphorylation | STAT3, EGFR | Copper-STAT3/EGFR axis | PD-L1 전사 활성화 | Copper chelator (disulfiram) |
| Short-chain acylation | 다수 | Lactate-driven writers | 종양유전자 발현 촉진 | Writer/eraser 효소 억제 |
| PTM crosstalk | NCL, AKT2 등 | 복합 | RNA splicing, 신호 재편 | 병용 억제 전략 |

## 관련 논문

- [[song-2025-implication-protein-post-translational-modifications]] — 위암에서의 PTM 종합 리뷰; ubiquitination, phosphorylation, acetylation, glycosylation이 치료 표적으로 제시됨
- [[wu-2025-short-chain-acyl-post-translational-modifications-cancers]] — Short-chain acyl PTM(lactylation 등) 8종의 기전, 기능, 치료 시사점 종합 리뷰
- [[yang-2022-enhancing-pd-l1-degradation-itch-during]] — ITCH E3 ligase가 MAPKi 치료 중 PD-L1을 ubiquitin 분해함; 소분자 ITCH activator로 획득 내성 억제
- [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion]] — PD-L2 N-glycosylation이 단백질 안정화 및 PD-1 결합 강화로 anti-PD-1 내성 유발
- [[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation]] — ZDHHC3 palmitoylation이 B7-H4를 lysosomal 분해로부터 보호; abemaciclib으로 B7-H4 분해 유도
- [[zhang-2025-pan-cancer-landscape-ubdfat10-experimental-validation]] — UBD/FAT10의 pan-cancer 발현 양상, 면역 침윤 상관관계, imatinib 분자 도킹
- [[voli-2020-intratumoral-copper-modulates-pd-l1-expression]] — 종양 내 구리가 STAT3/EGFR 인산화를 통해 PD-L1을 상향 조절; disulfiram 재활용 근거
- [[lao-2024-multiple-ptm-profiling-hcc]] — HCC에서 9종 PTM 동시 프로파일링; phospho-acylation cross-talk 발견
- [[olsen-2013-status-large-scale-analysis-post-translational-modifications]] — 대규모 PTM 분석 방법론 기반 리뷰; phosphoproteomics, ubiquitinomics, glycoproteomics
- [[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]] — 대장암에서 kinase inhibitor 반응 시 phospho-acetylation cross-talk 분석

## Related pages

- [[cancer-biology]]
- [[immune-evasion]]
- [[post-translational-modification]]
- [[drug-repurposing]]
- [[network-medicine]]
