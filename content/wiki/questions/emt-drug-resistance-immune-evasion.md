---
title: "EMT(상피-중간엽 전환)가 약물 내성과 면역 회피에 어떻게 기여하는가?"
type: question
status: active
category: [cancer-biology, drug-resistance, immune-evasion, EMT]
source_files:
  - mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion.md
  - vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal.md
  - kim-2024-plasticity-induced-repression-irf6-underlies-acquired.md
  - wagner-2020-senescence-therapeutically-relevant-cdk46.md
  - rodarte-2024-neuroendocrine-differentiation-prostate.md
  - romero-2024-neuroendocrine-transition-prostate.md
  - tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition.md
updated: 2026-05-19
---

# EMT(상피-중간엽 전환)가 약물 내성과 면역 회피에 어떻게 기여하는가?

## 짧은 답변

EMT(Epithelial-Mesenchymal Transition)는 단일한 스위치가 아닌 **연속적 스펙트럼(plasticity)**으로, 완전한 epithelial 상태에서 완전한 mesenchymal 상태 사이의 hybrid E/M 중간 상태들이 존재한다. 이 hybrid 상태가 오히려 약물 내성과 면역 회피에서 가장 강력하게 작동한다. 분자 수준에서 EMT는 checkpoint 분자 발현 증가, 항원 제시 결핍, 면역억제 TME 재구성을 통해 면역 회피를 유발하고(Mullins 2022), ZEB1/SNAIL 매개 IRF6 후성유전학적 침묵을 통해 T cell 세포독성 저항성을 획득하며(Kim 2024), TGF-beta 신호를 통해 다수의 내성 경로를 동시에 활성화한다(Tsai 2022). EMT의 극단적 형태인 neuroendocrine 분화(NEPC)는 선암의 표준 치료로부터 완전히 이탈하는 lineage plasticity의 임상적 귀결이다.

## 상세 답변

### 1. EMT는 스펙트럼이다: complete vs. partial EMT

전통적으로 EMT는 E-cadherin 소실/vimentin 획득을 기준으로 한 binary switch로 이해되었지만, 현재의 consensus는 이것이 **연속 스펙트럼**임을 인정한다. [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]]은 이 스펙트럼을 다음과 같이 기술한다:

- **Complete epithelial**: E-cadherin 고발현, 상피 마커 유지
- **Hybrid E/M (partial EMT)**: 두 프로그램을 동시에 발현; 집합적 이동(collective migration) 능력
- **Complete mesenchymal**: vimentin, N-cadherin, fibronectin 등 중간엽 마커 지배

임상적으로 중요한 점은 **hybrid E/M 상태가 완전 EMT보다 더 높은 전이 능력과 더 강한 면역 회피 능력을 가진다**는 것이다. Hybrid E/M 세포로 이루어진 CTC(circulating tumor cell) cluster는 단일 CTC에 비해 전이 효율이 수십 배 높으며, 면역억제적 이점도 더 크다.

이 스펙트럼의 정량화를 위해 [[vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal]](EMTome, MD Anderson, British Journal of Cancer 2021)이 개발되었다. EMTome은 TCGA pan-cancer 코호트 전체에 걸쳐 EMT signature score를 계산하고, 이를 multi-omics(메틸화, 단백질 발현, 면역세포 조성)와 약물 감수성(GDSC/CCLE)에 연결하는 웹 포털이다. 주요 기능:

- 문헌에서 통합된 큐레이션 EMT/MET 유전자 signatures 데이터베이스
- 암종 간 EMT score 정량적 비교
- EMT score와 약물 감수성의 상관관계 (epithelial vs. mesenchymal 상태별 취약성 식별)
- EMT 관련 유전자 interactome network 시각화

**한계**: bulk TCGA RNA-seq 기반으로 단일세포 수준의 EMT 이질성을 포착하지 못하며, 약물 감수성 데이터는 cell line(GDSC/CCLE)에서 도출되어 in vivo와 괴리가 있을 수 있다.

---

### 2. EMTome: Pan-cancer EMT landscape (Vasaikar 2021)

EMTome의 pan-cancer 분석 결과로부터 몇 가지 핵심 패턴이 도출된다:

- **암종별 EMT 분포**: 특정 암종(예: sarcoma, bladder cancer)은 전반적으로 mesenchymal 쪽으로 편향되어 있으며, 이는 기저적인 치료 저항성 경향과 일치한다
- **EMT-약물 감수성 연관**: mesenchymal EMT score가 높은 종양은 특정 세포독성 약물에 저항성을 보이고, 다른 약물(예: 일부 HDAC inhibitor)에는 오히려 감수성이 증가한다
- **임상 예후**: 높은 EMT score는 대부분 암종에서 불량한 전체 생존(OS)과 연관된다
- **면역 프로파일**: 높은 mesenchymal score는 CD8+ T cell 침윤 감소, TAM(M2) 증가와 연관된다 — 이는 면역 회피와의 직접적 연결을 시사한다

---

### 3. EMT와 약물 내성: CDK4/6 억제제 사례 (Wagner 2020)

[[wagner-2020-senescence-therapeutically-relevant-cdk46]](Oncogene 2020 review)는 CDK4/6 억제제(palbociclib, abemaciclib, ribociclib) 치료 반응으로서의 cellular senescence를 체계적으로 다룬다. EMT와의 연결은 여러 층위에서 일어난다:

**SASP(Senescence-Associated Secretory Phenotype)와 EMT 유도**:
- CDK4/6i 치료 후 senescent 세포에서 방출되는 SASP(IL-6, IL-8, TGF-beta 등)가 주변 종양 세포에서 EMT를 유도할 수 있다
- TGF-beta는 SASP의 핵심 구성 요소이자 EMT의 주요 유도 인자
- 즉, CDK4/6i에 반응한 senescent 세포가 SASP를 통해 비반응 세포의 EMT를 촉진하는 **역설적 내성 촉진 메커니즘**이 존재한다

**EMT와 CDK4/6i 직접 내성**:
- Mesenchymal 상태의 세포는 CDK4/6i에 대한 초기 반응성이 낮은 경향이 있다
- RB1 소실(CDK4/6i 핵심 내성 메커니즘)과 EMT는 동반 출현하는 경우가 많다

**치료적 함의**: Senolytic 약물(navitoclax/ABT-263) + CDK4/6i 병용이 senescent 세포를 제거하여 SASP 매개 EMT 유도를 차단하는 전략으로 제안된다.

---

### 4. EMT-면역 회피 연결 (Mullins 2022, Kim 2024)

#### 4.1 EMP의 면역 회피 메커니즘 (Mullins 2022)

[[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]](Cancer Research 2022)은 EMP(EMT plasticity)가 면역 회피에 기여하는 다중 메커니즘을 정리한다:

| 메커니즘 | 세부 내용 |
|---------|---------|
| Checkpoint 분자 상향 | PD-L1, CD47("don't eat me") 발현 증가 |
| 항원 제시 결핍 | MHC-I 발현 감소, antigen presentation machinery 하향 |
| 면역억제 세포 모집 | MDSC, TAM(M2), Treg를 TME로 유인하는 사이토카인 분비 |
| CTC cluster 면역 이점 | Hybrid E/M CTC cluster가 단일 세포보다 면역 파괴에 저항 |
| ICB 저항성 | EMP 상태 자체가 anti-PD-1/PD-L1 반응의 독립적 음성 예측 인자 |

핵심 개념: hybrid E/M 상태는 상피 세포가 가진 면역원성과 중간엽 세포가 가진 면역억제 능력을 **동시에** 활용한다.

#### 4.2 EMT-IRF6 축: T cell 세포독성의 세포 자율적 저항성 (Kim 2024)

[[kim-2024-plasticity-induced-repression-irf6-underlies-acquired]](Nature Communications 2024)는 EMT가 면역 회피를 유발하는 새로운 cell-intrinsic 메커니즘을 규명했다. KPC 마우스 PDAC 모델에서 면역항암제(GAFCP: gemcitabine + nab-paclitaxel + anti-CD40/CTLA-4/PD-1) 치료 후 재발한 종양(Esc)에서:

- **Esc 종양은 EMT-high**: Hallmark EMT NES > 2.5, E-cadherin 소실, Vimentin/Twist 획득
- **ZEB1/SNAIL이 Irf6을 후성유전학적으로 침묵**: ATAC-seq에서 Irf6 promoter 접근성 감소; ChIP-qPCR로 ZEB1/SNAIL의 직접 결합 확인
- **IRF6 소실 → TNF-alpha 유도 세포사멸 저항**: IRF6은 TNF-alpha/TRADD-FADD-CASP8 extrinsic apoptosis 경로를 sensitize하며, Esc 세포에서 TNF-alpha IC50이 ~20배 증가
- **역설적 TME**: Esc 종양은 TME가 오히려 immune-favorable(CD8+ T cell 증가, gMDSC 감소)하지만, 종양 세포 자체가 T cell 세포독성에 저항

**임상 검증**: NSCLC 환자 paired pre/post-ICB 데이터에서 IRF6 소실이 획득 내성 환자의 ~50%에서 확인되고, EMT 시그니처와 역상관관계.

**치료 전략**: Birinapant(cIAP1/2 억제제)가 IRF6 소실 Esc 세포를 T cell 세포독성에 재감작. ZEB1/SNAIL 억제를 통한 IRF6 재발현도 in vivo에서 부분적 ICB 반응 회복.

---

### 5. TGF-beta: EMT와 면역 회피의 master coordinator (Tsai 2022)

[[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]](J. Clin. Invest. 2022)는 sotorasib 치료 후 내성 종양에 대한 rapid-autopsy 연구에서 **TGF-beta가 acquired resistance의 가장 유의미한 upstream regulator**임을 IPA 분석으로 확인했다. TGF-beta는 단일 인자로:

- EMT 유도 (Hallmark EMT 시그니처 활성화)
- 면역억제 TME 형성 (T/B cell 기능적 시그니처 감소)
- 혈관신생 촉진
- Complement/coagulation 활성화

이를 통해 TGF-beta는 KRAS 억제 후 EMT가 면역 회피 및 다중 내성 경로를 동시에 활성화하는 통합 조율자로 작동한다.

---

### 6. Neuroendocrine 분화: EMT 스펙트럼의 극단 (Rodarte 2024, Romero 2024)

Neuroendocrine prostate cancer(NEPC)로의 전환은 EMT와는 다른 lineage plasticity이지만, "extreme phenotypic plasticity"라는 공통 범주에 속한다. 전립선암이 안드로겐 수용체(AR) 표적 치료에 저항하는 과정에서 선암(adenocarcinoma)에서 신경내분비 표현형으로 완전히 전환된다.

**ASCL1이 전환의 필수 인자 (Rodarte 2024)**:
[[rodarte-2024-neuroendocrine-differentiation-prostate]](Cancer Research 2024)는 RPM(Rb1/Trp53/Myc) GEM 모델에서 ASCL1 conditional knockout이 NE 분화를 **완전히 차단**하고 선암 상태를 유지함을 보였다. ASCL1은 NE 분화 프로그램의 master regulator로, 초기 lineage plasticity 단계에서 작동한다.

**전환의 역동성과 가역성 (Romero 2024)**:
[[romero-2024-neuroendocrine-transition-prostate]](Nature Cancer 2024)는 NE 전환이 **동적이고 가역적**임을 inducible 시스템으로 입증했다:
- ASCL1 지속적 발현이 NE 상태 유지에 필요
- ASCL1 제거 시 NE 표현형이 선암 상태로 회귀
- scRNA-seq + scATAC-seq으로 전환 과정의 temporal epigenetic 변화 추적
- ASCL1 표적 치료가 NEPC를 역전시킬 수 있다는 개념적 근거 제공

**EMT와의 비교**:

| 특성 | EMT | Neuroendocrine 분화 |
|------|-----|-------------------|
| 표현형 변화 | Epithelial → Mesenchymal | Adenocarcinoma → Neuroendocrine |
| 가역성 | 부분적 (hybrid E/M 특히 가역) | 가역적 (ASCL1 의존성) |
| 치료 맥락 | 다양한 표적 치료 후 | AR 표적 치료 후 |
| Master regulator | ZEB1, SNAIL, TWIST | ASCL1 (+ NEUROD1, POU2F3) |
| 임상 문제 | 약물 내성, 전이 | AR 독립적 완전 치료 저항성 |

---

### 7. EMT 표적 치료 전략

| 전략 | 표적/기전 | 근거 | 한계 |
|------|---------|------|------|
| TGF-beta 억제 | TGFBR1 억제(galunisertib) | Tauriello 2018: anti-PD-1 감작 | TGF-beta의 다면적 정상 기능 |
| ZEB1/SNAIL 억제 | EMT TF 직접 억제 | Kim 2024: IRF6 회복, ICB 반응 복원 | 선택적 소분자 없음 |
| IRF6 경로 활성화 | Birinapant(cIAP1/2i) | Kim 2024: T cell 세포독성 재감작 | 전임상 단계 |
| ASCL1 표적(NEPC) | ASCL1 억제 | Romero 2024: NE 역전 | 직접 표적 약물 부재 |
| Senolytic 병용 | Navitoclax + CDK4/6i | Wagner 2020: SASP-EMT 차단 | 전임상 |
| EMT score 기반 계층화 | EMTome 활용 | Vasaikar 2021: 약물 감수성 예측 | Cell line 데이터 기반 |

---

## 핵심 비교표

| 측면 | Complete EMT | Partial EMT (Hybrid E/M) |
|------|-------------|------------------------|
| 이동 양식 | 단일 세포 이동 | 집합적 이동 (collective migration) |
| 전이 효율 | 중간 | 최고 (CTC cluster 형성) |
| 면역 회피 강도 | 강함 | 가장 강함 (양면 활용) |
| 약물 내성 | 강함 | 강함 |
| 가역성 | 낮음 | 높음 |
| 임상 검출 | 용이 | 어려움 (intermediate marker) |

---

## 관련 논문

- [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]] — EMP hybrid E/M 상태가 PD-L1 상향, MHC-I 하향, MDSC/TAM/Treg 모집을 통해 면역 회피를 다층적으로 활성화; ICB 저항성의 독립 예측 인자 (Cancer Research review)
- [[vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal]] — EMTome 웹 포털: TCGA pan-cancer EMT scoring + multi-omics + 약물 감수성 통합; EMT 연구의 표준 참조 자원 (British Journal of Cancer)
- [[kim-2024-plasticity-induced-repression-irf6-underlies-acquired]] — ZEB1/SNAIL이 Irf6을 후성유전학적으로 침묵하여 TNF-alpha 매개 T cell 세포독성 저항성 유발; NSCLC 환자 ~50%에서 임상 검증 (Nature Communications)
- [[wagner-2020-senescence-therapeutically-relevant-cdk46]] — CDK4/6i 치료 후 SASP(TGF-beta, IL-6/8 포함)가 주변 세포 EMT 유도; senolytic 병용으로 SASP-EMT 차단 제안 (Oncogene review)
- [[rodarte-2024-neuroendocrine-differentiation-prostate]] — ASCL1 conditional KO가 NE 분화를 완전 차단; extreme lineage plasticity의 master regulator 확인 (Cancer Research)
- [[romero-2024-neuroendocrine-transition-prostate]] — NE 전환이 동적·가역적이며 ASCL1 지속 발현에 의존; ASCL1 제거 시 선암 회귀 입증 (Nature Cancer)
- [[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]] — Sotorasib 내성 종양에서 TGF-beta가 EMT·면역냉각·혈관신생을 동시 조율하는 master regulator로 확인; rapid-autopsy 공간적 분석 (J. Clin. Invest.)

## Related pages

- [[immune-evasion-mechanisms-cancer]]
- [[drug-resistance]]
- [[kras-mutant-cancer-therapeutic-strategies]]
- [[lineage-plasticity]]
- [[tumor-microenvironment]]
- [[immunotherapy-resistance]]
- [[CDK4/6-inhibitors]]
- [[neuroendocrine-prostate-cancer]]
- [[TGF-beta]]
