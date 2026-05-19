---
title: "Tumor Microenvironment"
type: concept
updated: 2026-05-19
---

# Tumor Microenvironment (종양 미세환경)

## 정의

Tumor Microenvironment(TME)는 종양 세포를 둘러싸고 있는 복잡한 세포 생태계를 지칭한다. 종양 세포 그 자체뿐 아니라 면역 세포(T 세포, NK 세포, 대식세포, MDSC 등), 암 관련 섬유아세포(CAF), 혈관 내피세포, 세포외기질(ECM), 그리고 이 구성 요소들이 주고받는 신호 분자들이 모두 TME를 구성한다. TME는 종양의 성장, 전이, 면역 회피, 치료 반응을 조율하는 핵심 무대다.

TME 연구의 임상적 중요성은 면역관문억제제(immune checkpoint inhibitor, ICI)의 등장과 함께 크게 부각되었다. ICI 반응과 내성은 종양 세포 내재적 돌연변이뿐 아니라 TME 구성에 의해 결정적으로 좌우된다. 최근에는 single-cell RNA-seq, spatial transcriptomics, imaging mass cytometry 등의 기술 발전으로 TME를 세포 수준에서, 나아가 공간적 맥락 속에서 정밀하게 분석하는 것이 가능해졌다.

## 핵심 원리

**면역 세포 구성 요소**
- **CD8+ 세포독성 T 세포(CTL)**: 항종양 면역의 핵심 실행자. 활성화(effector) 상태와 고갈(exhausted) 상태(PD-1hi, TOX+)로 이분화되며, 고갈 정도가 ICI 반응을 결정하는 주요 인자
- **CD4+ T 세포 / Treg**: 도움 T 세포는 CTL 기능을 촉진; 조절 T 세포(Treg, FOXP3+)는 면역 억제를 유도하여 종양에 유리한 환경 조성
- **NK 세포**: MHC-I 발현이 낮은 종양 세포를 직접 살상. CTLA-4+ NK 세포 아형이 pan-cancer TME 공통 모티프로 보고됨
- **Tumor-Associated Macrophages (TAM)**: 가장 풍부한 면역 세포 유형 중 하나. M1(항종양, iNOS+) vs. M2(친종양, CD206+) 극성화 스펙트럼을 가지며, CD38+ TAM barrier가 세포독성 억제를 매개함. C5aR1+ TAM 아형은 PARPi 내성을 촉진
- **Myeloid-Derived Suppressor Cells (MDSC)**: 단구형(M-MDSC)과 과립구형(PMN-MDSC)으로 구분; T 세포 기능 억제; CAF와 상호작용하여 CSF1R 억제제 내성을 유발
- **Tertiary Lymphoid Structures (TLS)**: 이차 림프 기관 유사 구조물이 종양 내 형성될 때, 강력한 항종양 면역 반응과 좋은 예후가 연관됨. TLS 성숙도 및 30-유전자 서명이 ICB 반응 예측 인자로 활용

**Cancer-Associated Fibroblasts (CAF)**
- 종양 기질의 주요 구성 요소. myofibroblastic CAF(myCAF), inflammatory CAF(iCAF), antigen-presenting CAF 등 기능적 아형 존재
- ECM(collagen, fibronectin) 분비를 통해 물리적 장벽 형성 → 면역 세포 침투 방해 및 약물 접근 차단
- CXCL1/2/5 분비로 PMN-MDSC 모집 → CSF1R 억제제 치료 저항의 원인
- MCAM+ myofibroblastic CAF: collagen IV-ITGA2-FAK-AKT 축으로 방사선 내성 촉진

**혈관과 ECM**
- 종양 내 혈관은 구조적으로 비정상적(leaky, hypoxic) → 저산소 환경 조성
- 저산소 상태는 TAM의 M2 극성화, Treg 확장, MDSC 축적, effector T 세포 배제를 촉진
- 저용량 항혈관신생요법(anti-VEGF)을 통한 vascular normalization이 면역치료와의 시너지를 발휘
- LOX, MMP에 의한 ECM 경직화(stiffening)는 기계적 신호를 통해 종양 증식 및 전이 촉진

**면역 회피 기전**
- Checkpoint 과발현: PD-1/PD-L1, CTLA-4, LAG-3, TIGIT, VISTA
- 항원 제시 억제: MHC-I 하향조절(autophagy에 의한 분해 포함), beta-2-microglobulin 손실
- 대사 재프로그래밍: 락트산 축적(Warburg 효과), 아르기나제 분비 → T 세포 대사 억제
- 미토콘드리아 전달: 종양 세포가 mtDNA 돌연변이 미토콘드리아를 TIL에 전달 → T 세포 노화와 기능 소실
- EMT(상피-중간엽 전이): hybrid E/M 상태의 종양 세포가 checkpoint 발현 증가 및 MDSC/TAM 모집으로 면역 억제 강화

**공간적 조직**
- 종양 핵심부(core)와 주변부(periphery)는 서로 다른 면역 세포 조성과 기능 상태를 보임
- Spatial EcoTyper(Zhang 2026)는 pan-cancer 9개 Spatial Ecotype을 정의; 각 SE는 독특한 다세포 생태적 특성을 가짐
- 면역 편집(immunoediting): 면역 제거(elimination) → 균형(equilibrium) → 탈출(escape) 3단계 모델이 공간적 맥락에서 실증됨

## 위키 내 관련 논문

### Pan-cancer TME 지형
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — CPTAC 10개 암종; 7개 pan-cancer 면역 아형
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]] — CyTOF/IMC 61개 연구; 5개 pan-cancer TME 공통 모티프
- [[tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge]] — 면역 회피 4대 축; 최신 면역치료 전략 개괄
- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]] — 9개 pan-cancer Spatial Ecotype; cfDNA로 비침습적 TME 모니터링

### 면역 회피 기전
- [[ikeda-2025-immune-evasion-through-mitochondrial-transfer]] — 미토콘드리아 전달에 의한 TIL 기능 소실; ICI 내성 신기전
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]] — 자가포식과 MHC-I 분해; PD-L1 안정성 조절
- [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]] — EMT 스펙트럼과 면역 회피; hybrid E/M 상태의 면역조절
- [[soula-2024-glycosphingolipid-synthesis-mediates-immune-evasion]] — KRAS 구동 GSL 합성; NK/T 세포 인식 차단
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — 췌장암에서 자가포식의 면역 회피
- [[memon-2024-clinical-molecular-features-acquired-resistance]] — NSCLC ICI 내성; IFNγ 신호와 항원 제시 변화
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 돌연변이 ICI 내성; 이중 checkpoint 차단 극복
- [[jung-2019-dna-methylation-loss-promotes-immune]] — DNA 메틸화 소실과 면역 억제
- [[goto-2024-sox17-enables-immune-evasion-early]] — SOX17 매개 초기 면역 회피

### CAF / ECM
- [[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]] — CAF-PMN-MDSC 축; CSF1R 억제제 내성 기전
- [[yuan-2023-extracellular-matrix-remodeling-tumor-progression]] — ECM 리모델링(MMP, LOX); 면역 억제 및 기계적 신호
- [[xue-2023-schwann-cells-regulate-tumor-cells]] — Schwann 세포와 종양 세포 상호작용

### 대식세포 / 면역 억제 세포
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — BRCA1 TNBC; SREBF1 대식세포 대사 재프로그래밍; CSF1R 병합
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — C5aR1+ TAM 아형; PARPi 내성 매개
- [[singh-2025-dll1-responsive-pd-l1-tumor-associated-macrophages-promote]] — DLL1 반응성 PD-L1+ TAM
- [[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]] — 골수세포 주화성 표적화

### 혈관 / 저산소
- [[huang-2013-vascular-normalization-emerging-strategy-enhance]] — 혈관 정상화로 면역치료 강화; normalization window 개념
- [[tai-2024-flt1-activation-cancer-cells-promotes]] — FLT1 활성화와 종양 혈관 조절

### 공간 TME 분석
- [[nirmal-2022-spatial-landscape-progression-immunoediting-primary]] — 흑색종 공간적 면역편집 지형; CyCIF + ST 통합
- [[janesick-2023-high-resolution-mapping-human-breast]] — Xenium + Visium + scFFPE-seq 유방암 TME 다중 스케일 분석
- [[zhang-2022-spatial-transcriptomic-landscape-non-small-cell]] — NSCLC 뇌전이 TME; GeoMx DSP; 면역억제 TME 재구성
- [[wang-2024-spatial-transcriptomics-reveals-substantial-heterogeneity]] — TNBC 공간 아형; TLS 30-유전자 서명; ICB 반응 예측
- [[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]] — 비인두암 방사선내성; MCAM+ CAF; collagen IV-T 세포 배제
- [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]] — 전립선암 club-like 세포 공간 맵핑
- [[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]] — PDAC 원발-전이 부위 TME 비교

### TME 모델링 및 바이오마커
- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]] — cfDNA 기반 비침습적 SE 수준 복구
- [[hoang-2024-prediction-dna-methylation-based-tumor]] — DNA 메틸화 기반 종양 예측
- [[han-2023-tumour-microenvironment-changes-osimertinib-resistance]] — osimertinib 내성 시 TME 변화; TDE 매개 M2 극성화

## 관련 개념

- [[spatial-transcriptomics]] — TME를 공간적 맥락에서 분석하는 핵심 기술
- [[drug-resistance]] — TME 세포들이 치료 내성을 매개하는 중심 무대
- [[proteogenomics]] — 단백질체 수준에서 TME 면역 아형 규명
- [[single-cell-methods]] — TME 세포 이질성을 단세포 해상도로 분해
