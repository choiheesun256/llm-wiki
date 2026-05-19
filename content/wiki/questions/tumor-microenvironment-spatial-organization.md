---
title: "종양 미세환경(TME)의 공간적 구조가 치료 반응과 예후에 어떤 영향을 미치는가?"
type: question
status: active
category: [tumor-microenvironment, spatial-transcriptomics, immunotherapy, cancer-biology]
source_files:
  - zhang-2026-non-invasive-profiling-of-the-tumour.md
  - zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes.md
  - valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs.md
  - wang-2024-spatial-transcriptomics-reveals-substantial-heterogeneity.md
  - nirmal-2022-spatial-landscape-progression-immunoediting-primary.md
  - oliveira-2025-high-definition-spatial-transcriptomic-profiling-immune.md
  - petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity.md
  - guo-2023-targeting-myeloid-chemotaxis-reverse-prostate.md
  - kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r.md
  - mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp.md
  - li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer.md
  - singh-2025-dll1-responsive-pd-l1-tumor-associated-macrophages-promote.md
  - you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms.md
  - skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance.md
  - lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer.md
  - ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification.md
  - yuan-2023-extracellular-matrix-remodeling-tumor-progression.md
  - huang-2013-vascular-normalization-emerging-strategy-enhance.md
  - mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion.md
  - jin-2024-advances-spatial-transcriptomics-applications-cancer.md
updated: 2026-05-19
---

# 종양 미세환경(TME)의 공간적 구조가 치료 반응과 예후에 어떤 영향을 미치는가?

## 짧은 답변

TME는 암세포, 면역세포(T세포, NK세포, 대식세포, MDSC), cancer-associated fibroblasts(CAF), 혈관, 세포외기질(ECM)이 공간적으로 조직화된 복합 생태계이다. TME의 공간적 구조—특히 면역세포의 침윤 패턴, tertiary lymphoid structures(TLS)의 성숙도, macrophage 분극화 상태—는 면역치료 반응과 전체 생존율을 독립적으로 예측한다. 최근 9가지 pan-cancer spatial ecotype(SE)과 이를 cfDNA 메틸화로 비침습적으로 회수하는 기술이 개발되어, 조직 생검 없이 TME 구조를 실시간 모니터링하는 새로운 패러다임이 등장했다.

## 상세 답변

### 1. TME의 주요 세포 구성과 기능

TME는 단순한 암세포의 배경이 아니라, 종양의 진화와 치료 반응을 능동적으로 결정하는 **생태계**이다.

#### 1.1 면역세포 구성

**T세포**:
- CD8+ 세포독성 T세포(CTL): 암세포를 직접 사멸하는 핵심 effector. TME 내에서 exhausted 상태(exhausted CD8+)로 전환되면 기능을 잃음
- CD4+ helper T세포: CTL 활성화와 B세포 도움 제공
- Regulatory T세포(Treg): 면역억제적. [[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]]에서 TP53 소실 시 Treg가 지배적인 면역 환경 형성이 확인됨

**Tumor-Associated Macrophages(TAM)**:
- M1 표현형(iNOS+, pro-inflammatory): 항종양 기능
- M2 표현형(CD206+, anti-inflammatory): 면역억제, 혈관신생 촉진, 종양 지지
- [[singh-2025-dll1-responsive-pd-l1-tumor-associated-macrophages-promote]]에서 PD-L1+ M2 TAM이 ER+ 유방암 내분비 치료 내성을 매개함 확인
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]]에서 BRCA1 TNBC의 주요 면역세포가 대식세포이며 PARPi 내성을 SREBF1 대사 재프로그래밍을 통해 유발함 확인
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]]에서 C5aR1-high TAM_C3 클러스터가 PARPi 내성 종양에서 풍부함 확인

**Myeloid-Derived Suppressor Cells(MDSC)**:
- 면역억제 골수세포의 비성숙 전구체
- Polymorphonuclear(PMN)-MDSC: [[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]]에서 CXCR2 매개 PMN-MDSC 모집이 mCRPC의 안드로겐 수용체 억제제 내성을 유발함 확인
- [[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]]에서 CSF1R 억제 후 CAF가 CXCL1/2/5를 분비하여 보상적 PMN-MDSC 침윤이 발생함 확인

**NK세포**:
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]]에서 pan-cancer 공통 motif로 CTLA-4+ NK세포 서브셋 확인

#### 1.2 Cancer-Associated Fibroblasts (CAF)

CAF는 TME의 구조적 scaffolding을 담당하며 면역 조절에 핵심적 역할을 한다:

- [[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]]에서 MCAM+ myofibroblastic CAF가 collagen IV-ITGA2-FAK-AKT 축을 통해 방사선 내성을 유발하고, collagen IV가 T세포 침윤을 물리적으로 억제함 확인
- [[ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification]]에서 HCC에서 CAF 유래 CXCL12가 CXCR4/XRCC5 축을 통해 암 줄기세포성(stemness)을 촉진함 확인
- [[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]]에서 CAF가 macrophage 고갈 후 보상적 PMN-MDSC 모집으로 면역억제를 유지함 확인

#### 1.3 혈관과 저산소 환경

비정상적 종양 혈관은 TME 면역억제의 구조적 원인이다. [[huang-2013-vascular-normalization-emerging-strategy-enhance]]에서 VEGF가 DC 성숙 차단, Treg 확장, MDSC 축적을 통해 국소 및 전신 면역억제를 유발함이 정리되었다. 저용량 anti-VEGF 치료에 의한 혈관 정상화가 hypoxia를 해소하고 면역세포 침윤을 개선하는 "normalization window"를 만들 수 있다.

#### 1.4 세포외기질 (ECM)

[[yuan-2023-extracellular-matrix-remodeling-tumor-progression]]에 따르면 ECM 리모델링(MMPs, LOX 등)은 종양의 기계적 특성을 변화시키고 면역세포 이동을 차단하여 면역억제적 환경을 조성한다. ECM 강직도(stiffness) 증가는 mechanosignaling을 통해 종양 세포 증식을 촉진하고 T세포 침윤을 방해한다.

---

### 2. Spatial Organization Patterns: Immune-Hot vs. Cold, Excluded vs. Inflamed

TME의 공간적 패턴은 크게 **세 가지 면역 표현형**으로 분류된다:

| 표현형 | 특징 | 치료 반응 | 대표 메커니즘 |
|--------|------|---------|-------------|
| **Immune-Inflamed (Hot)** | CD8+ T세포가 종양 실질(parenchyma) 내 침윤 | ICI 반응 높음 | TLS 존재, 효과적 항원제시 |
| **Immune-Excluded** | T세포가 종양 주변부에 존재하나 실질 내 침윤 못함 | ICI 반응 낮음 | CAF/ECM 장벽, TGF-β |
| **Immune-Desert (Cold)** | T세포 침윤 자체가 결여 | ICI 반응 없음 | 낮은 항원성, Treg, mTOR 활성화 |

[[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]]에서 TP53 소실 → mTORC1 과활성화 → 자가소화(autophagy) 억제 → Treg 지배 → immune-cold 환경으로의 전환이 MSS colorectal cancer에서 확인되었다. 이는 특정 유전자 변이가 TME의 공간적 면역 표현형을 결정함을 보여준다.

[[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]]에서는 KEAP1/STK11 변이가 PD-(L)1 억제제 내성의 가장 강력한 유전체 예측 인자임이 확인되었으며, 이 내성이 골수세포(myeloid cell)의 iNOS+ 항종양 표현형으로의 재프로그래밍 저하와 연관됨을 보였다. 이중 immune checkpoint blockade(anti-CTLA4 + anti-PD-L1)이 이 내성을 극복하여 POSEIDON 임상시험에서 OS를 두 배로 개선했다.

---

### 3. Pan-Cancer TME Convergence Motifs (Vallée 2025)

[[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]]는 17개 암종에 걸친 61개 CyTOF/IMC(imaging mass cytometry) 연구의 PRISMA 기반 scoping review를 통해 **5가지 pan-cancer TME 공통 motif**를 도출했다:

1. **CD8+ T세포의 이분화(bifurcation)**: effector 상태 vs. exhausted 상태로의 분기. 면역억제 TME에서는 exhausted CD8+ T세포가 지배적
2. **CD38+ TAM barrier**: CD38을 발현하는 TAM이 세포독성 면역 반응을 억제하는 구조적 장벽 형성
3. **TLS 성숙도 기울기(maturity gradients)**: tertiary lymphoid structures가 초기 B세포 집합체에서 완전 성숙 germinal center를 갖춘 구조로 발전하는 스펙트럼. 성숙도가 높을수록 예후 및 ICI 반응 양호
4. **CTLA-4+ NK세포 서브셋**: 기존에 T세포에서만 주목받던 CTLA-4가 NK세포에서도 면역억제 기능을 수행하는 서브셋으로 발현됨
5. **대사적으로 정의된 면역 niches**: 면역세포가 국소 대사 환경(저산소, 포도당 고갈, 젖산 축적)에 따라 특정 기능 상태로 분극화되는 공간적 niches

이 5가지 motif는 암종을 초월하여 반복적으로 나타나며, **pan-cancer 면역 표현형 분류**의 프레임워크를 제공한다.

---

### 4. Myeloid Reprogramming과 Macrophage Polarization의 치료적 함의

#### 4.1 TAM 재프로그래밍 전략

[[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]]에서 이중 ICB에 의한 myeloid 재프로그래밍이 iNOS+ 항종양 표현형을 유도함으로써 PD-(L)1 내성을 극복하는 핵심 메커니즘임이 규명되었다. 이는 면역 checkpoint 억제가 T세포만이 아닌 myeloid compartment에도 작용함을 의미한다.

[[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]]에서 anti-CSF1R 항체가 대식세포를 면역억제적 상태에서 재프로그래밍하여 CD8+ T세포 반응을 강화하고 PARPi 효능을 회복시킴이 확인되었다.

[[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]]에서 C5aR1 억제가 TAM_C3 클러스터를 재프로그래밍하여 PARPi 감수성을 복원함이 scRNA-seq으로 확인되었다.

#### 4.2 CAF-Myeloid 교차 작용

[[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]]는 CAF와 myeloid 세포 간의 보상적 교차 작용을 규명한 중요한 연구이다. CSF1R 억제로 TAM이 고갈되면 CAF가 HDAC2 매개 후성유전학적 해제를 통해 CXCL1/2/5를 상향 조절하여 PMN-MDSC를 보상적으로 모집한다. CSF1R + CXCR2 병용, 또는 anti-PD-1 삼중 요법이 가장 강력한 항종양 효과를 보였다.

이 발견은 단일 면역억제 세포 표적화의 한계를 시사하며, **TME 내 다중 면역억제 경로의 동시 차단**이 필요함을 강조한다.

---

### 5. Spatial Ecotypes와 cfDNA Inference (Zhang 2026)

[[zhang-2026-non-invasive-profiling-of-the-tumour]]는 TME 공간 구조 연구의 패러다임을 전환한 Nature 2026 연구이다.

#### 5.1 9가지 Pan-Cancer Spatial Ecotype (SE) 발견

10개 암종, 132개 종양 ST 표본, 6개 ST 플랫폼(Visium, MERSCOPE, Xenium 등)에서 10백만 개 이상의 spatial transcriptome을 통합하여 **9개의 공간적으로 제한된 다세포 생태계(SE1-SE9)**를 정의했다:

- 방법론: Spatial EcoTyper 프레임워크—세포유형 특이적 유전자 발현 프로그램과 공간적 이웃 정보를 공통 embedding으로 융합 후 NMF/archetypal analysis 적용
- SE는 암종을 초월하여 **고도로 보존**되어 있으며, 각각 독특한 생물학, 종양 내 지리적 분포, 임상적 연관성을 가짐

주요 임상 연관성:
- TCGA 7,076개 종양 분석: **6/9 SE가 전체 생존율과 유의미하게 연관**
- 1,249개 전처치 종양의 메타분석: **SE8, SE7은 ICI 이득**과 연관; **SE4는 ICI 내성**과 연관

#### 5.2 Liquid EcoTyper: cfDNA로 SE 비침습 회수

가장 혁신적인 기여는 **Liquid EcoTyper**—혈장 cfDNA 메틸화 프로파일에서 SE를 비침습적으로 회수하는 deep learning 모델이다:

- 기술: 전장 유전체 bisulfite sequencing(EM-seq) + 이진 신경망으로 CpG 메틸화 시그니처 학습
- 조직-액체 생검 일치도: **r = 0.97**
- 전이성 흑색종 전처치 혈장 샘플 78개에서 검증:
  - 높은 SE7/SE8 → 지속적 ICI 이득, 긴 PFS/OS
  - 높은 SE4 → ICI 내성, 짧은 PFS/OS
  - SE7/SE8은 다변량 생존 모델에서 **TMB와 CD274(PD-L1)를 능가**

이는 종양 생검 없이 혈액 한 번으로 TME 공간 구조를 추론하여 면역치료 반응을 예측하는 시대를 열었다.

---

### 6. Spatial Transcriptomics가 밝힌 TME 구조-기능 관계

#### 6.1 TLS 공간 분석

[[wang-2024-spatial-transcriptomics-reveals-substantial-heterogeneity]]는 92명 TNBC 환자의 공간적 전사체 분석에서 9개 **spatial archetype**을 정의하고, TLS의 공간적 특성화에서 30-gene TLS 시그니처를 도출했다. 이 시그니처는 다중 암종에서 ICI 반응 예측력을 가짐이 확인되었다.

#### 6.2 Single-Cell Resolution 공간 면역 프로파일링

[[oliveira-2025-high-definition-spatial-transcriptomic-profiling-immune]]은 Visium HD(2μm 해상도)를 colorectal cancer에 적용하여 단일세포 수준의 면역세포 공간 분포를 매핑했다. 면역세포 niches와 공간적 이웃(neighborhood) 구조가 임상 특징과 상관됨을 확인했다.

#### 6.3 공간적 immunoediting 패턴

[[nirmal-2022-spatial-landscape-progression-immunoediting-primary]]는 CyCIF 멀티플렉스 이미징과 공간적 전사체를 통합하여 흑색종 진행에 따른 **공간적으로 조직화된 immunoediting 패턴**을 발견했다. 종양 진행 단계별로 세포-세포 상호작용 네트워크가 변화하며, 이는 공간적 바이오마커 발굴의 가능성을 제시했다.

#### 6.4 CAF와 T세포 배제의 공간적 메커니즘

[[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]]에서 NPC 재발 종양의 scRNA-seq + ST 통합 분석을 통해 MCAM+ CAF가 collagen IV를 분비하여 T세포를 물리적으로 배제하는 공간적 메커니즘이 규명되었다. CD47-SIRPα 축을 통한 myeloid-종양 세포 상호작용도 면역 회피에 기여함이 확인되었다.

---

### 7. TME와 Immunotherapy Response의 연결

Pan-cancer 차원의 proteogenomics 기반 면역 분류인 [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]]에서는 CPTAC 데이터를 이용해 1,056개 종양에서 **7가지 pan-cancer 면역 서브타입**을 정의하고, 유전체 변이가 면역 서브타입과 연관됨을 보였다. Phosphoproteomics 기반 kinase activity 분석을 통해 서브타입 특이적 면역치료 표적을 발굴했다.

EMP(epithelial-mesenchymal plasticity)도 TME 공간 구조에 영향을 미친다. [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]]에 따르면 hybrid E/M 상태의 암세포가 면역 checkpoint molecule 발현 증가, 항원 제시 결함, MDSC/TAM/Treg 모집을 통해 면역억제적 TME를 형성하며 ICI 내성에 기여한다.

---

## 핵심 비교표

| TME 구성 요소 | 주요 기능 | 치료 내성 메커니즘 | 치료 표적 전략 |
|-------------|---------|----------------|-------------|
| **CD8+ T세포 (exhausted)** | 항종양 CTL → 기능 소실 | T세포 소진, checkpoint 발현 | ICI (anti-PD-1/PD-L1) |
| **M2 TAM** | 면역억제, 혈관신생 | PD-L1 발현, cytokine 분비 | anti-CSF1R, anti-C5aR1, ICI |
| **PMN-MDSC** | 면역억제 myeloid 세포 | CTL 기능 억제, Treg 지지 | CXCR2 억제 (AZD5069) |
| **MCAM+ CAF** | ECM 분비, 구조 지지 | collagen IV → T세포 배제 | ECM 표적화, FAK/AKT 억제 |
| **혈관 (비정상)** | 산소/영양 공급 (불충분) | 저산소 → TAM M2 분극화 | 저용량 anti-VEGF (혈관 정상화) |
| **TLS (성숙)** | B/T세포 집합체, 국소 면역 활성화 | 미성숙 TLS = 낮은 항종양 기능 | TLS 성숙 유도 (연구 단계) |
| **SE4 ecotype** | ICI 내성 ecotype | 면역억제 신호 집합 | Liquid EcoTyper로 모니터링 |
| **SE7/SE8 ecotype** | ICI 반응 ecotype | - | cfDNA 예측 바이오마커 |

---

## 관련 논문

- [[zhang-2026-non-invasive-profiling-of-the-tumour]] — 9개 pan-cancer spatial ecotype 정의; Liquid EcoTyper로 cfDNA에서 SE 비침습 회수; 흑색종 ICI 반응 예측 (r=0.97 조직-혈액 일치); SE7/SE8은 ICI 이득, SE4는 내성과 연관
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]] — 61개 CyTOF/IMC 연구의 scoping review; 5가지 pan-cancer TME motif (CD8+ 이분화, CD38+ TAM barrier, TLS 성숙 기울기, CTLA-4+ NK, 대사적 niches) 도출
- [[wang-2024-spatial-transcriptomics-reveals-substantial-heterogeneity]] — TNBC 92명의 공간 전사체에서 9 spatial archetype; 30-gene TLS 시그니처가 pan-cancer ICI 반응 예측
- [[nirmal-2022-spatial-landscape-progression-immunoediting-primary]] — 흑색종의 CyCIF + ST 통합으로 공간적 immunoediting 패턴 발견; 진행 단계별 세포 상호작용 네트워크 변화
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — CPTAC 1,056개 종양; 7가지 pan-cancer 면역 서브타입; kinase activity 기반 면역치료 표적 발굴
- [[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]] — CXCR2 매개 myeloid 모집이 CRPC의 ARSI 내성 구동; CXCR2 억제제 임상 개념증명 시험
- [[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]] — CSF1R 억제 후 CAF가 CXCL1/2/5로 PMN-MDSC 보상 모집; CAF-myeloid 교차 작용 규명
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — 대식세포 SREBF1 대사 재프로그래밍이 PARPi 내성 매개; anti-CSF1R로 역전
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — C5aR1-high TAM_C3이 PARPi 내성 유발; C5aR1 억제로 재프로그래밍 및 감수성 복원
- [[singh-2025-dll1-responsive-pd-l1-tumor-associated-macrophages-promote]] — DLL1→PD-L1+ M2 TAM→CSC 유지 축이 ER+ 유방암 내분비 내성 매개
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 변이가 PD-(L)1 내성 최강 예측 인자; 이중 ICB가 myeloid 재프로그래밍으로 내성 극복 (POSEIDON 시험)
- [[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]] — NPC에서 MCAM+ CAF → collagen IV → T세포 배제; CD47-SIRPα myeloid 면역회피
- [[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]] — TP53 소실 → mTORC1/autophagy 억제 → Treg 지배 immune-cold TME; mTOR 억제 + ICI 병용 제안
- [[ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification]] — HCC에서 CAF-CXCL12-CXCR4 축이 암 줄기세포성 촉진; CAF 지배 분자 서브타입이 예후 예측
- [[huang-2013-vascular-normalization-emerging-strategy-enhance]] — 저용량 anti-VEGF의 혈관 정상화 → hypoxia 해소 → 면역세포 침윤 개선 → 면역치료 시너지
- [[yuan-2023-extracellular-matrix-remodeling-tumor-progression]] — ECM 리모델링이 면역억제 환경 조성; ECM 정상화의 치료 개념
- [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]] — Hybrid E/M 상태가 면역억제 TME 재편 및 ICI 내성 기여
- [[oliveira-2025-high-definition-spatial-transcriptomic-profiling-immune]] — Visium HD(2μm)로 CRC TME 면역세포 공간 지도; niches 및 neighborhood 구조 확인
- [[jin-2024-advances-spatial-transcriptomics-applications-cancer]] — 공간 전사체 기술(20+종)의 포괄적 비교; 암 TME 분석 응용 사례 정리

## Related pages

- [[tumor-microenvironment]]
- [[spatial-transcriptomics]]
- [[immunotherapy]]
- [[macrophage-polarization]]
- [[cancer-associated-fibroblasts]]
- [[TLS]]
- [[liquid-biopsy]]
- [[immune-evasion]]
- [[spatial-ecotypes]]
- [[pan-cancer]]
