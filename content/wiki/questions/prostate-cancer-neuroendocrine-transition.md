---
title: "전립선암의 신경내분비 분화(neuroendocrine differentiation)와 치료 내성의 관계는?"
type: question
status: active
category: [prostate-cancer, neuroendocrine, lineage-plasticity, drug-resistance, spatial-transcriptomics]
source_files:
  - rodarte-2024-neuroendocrine-differentiation-prostate.md
  - romero-2024-neuroendocrine-transition-prostate.md
  - ou-2025-integrated-proteogenomic-characterization-localized-prostate.md
  - haas-2024-proteogenomics-prostate-cancer-radioresistance.md
  - kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer.md
  - smelik-2025-combining-spatial-transcriptomics-pseudotime-machine.md
  - guo-2023-targeting-myeloid-chemotaxis-reverse-prostate.md
  - xiong-2024-noncanonical-e3-ubiquitin-ligase-rnf41-mediated.md
updated: 2026-05-19
---

# 전립선암의 신경내분비 분화(neuroendocrine differentiation)와 치료 내성의 관계는?

## 짧은 답변

전립선암의 신경내분비 분화(NED)는 안드로겐 수용체 신호 억제(ARSI) 치료에 의해 유도되는 lineage plasticity의 결과이다. **ASCL1**이 NEPC(neuroendocrine prostate cancer) 전환의 master regulator로 작용하며, 이 전환은 동적이고 가역적인 epigenetic 과정이다. 동시에, CXCR2 매개 골수세포 모집이 ARSI 내성의 독립적인 microenvironment 축을 형성하고, 공간 전사체학은 club-like 세포–MDSC의 면역억제 niche를 규명했다. 이 복합적 내성 기전들은 ASCL1 표적화, CXCR2 억제, POLQ 억제 등 다층적 치료 전략의 근거를 제공한다.

---

## 상세 답변

### 1. 신경내분비 전환의 임상적 맥락

전립선암은 초기에 안드로겐 수용체(AR) 신호에 의존하는 선암(adenocarcinoma)으로 시작하지만, enzalutamide·abiraterone과 같은 ARSI 치료 이후 일부 환자에서 AR-독립적 표현형으로 전환된다. 그 중 가장 치명적인 형태가 **NEPC(neuroendocrine prostate cancer)**로, 신경내분비 마커(CHGA, SYP, NCAM1)를 발현하고 ARSI에 완전 내성을 보이며 예후가 극히 불량하다. CRPC(castration-resistant prostate cancer)의 약 20–25%에서 이 전환이 관찰된다.

---

### 2. ASCL1: NED의 master regulator

#### 2.1 ASCL1의 필수성 (Rodarte 2024)

[[rodarte-2024-neuroendocrine-differentiation-prostate]]는 RPM(Rb1/Trp53/Myc) GEM 모델에서 ASCL1 conditional knockout이 NE 분화를 **완전히 차단**하고 종양을 선암 상태로 유지함을 보였다. 이는 ASCL1이 NED 과정의 초기에 작동하는 필수 전사인자임을 확립한다. 핵심 발견:

- ASCL1 결핍 → NE 마커 발현 소실, AR 발현 유지
- Lineage plasticity 프로그램의 출발점에서 ASCL1이 작동
- ASCL1 이 없으면 Myc 과발현도 NE 전환을 유도하지 못함

#### 2.2 NED의 동적 가역성 (Romero 2024)

[[romero-2024-neuroendocrine-transition-prostate]]는 NED가 고정된 epigenetic 상태가 아니라 **동적이고 가역적인 과정**임을 Nature Cancer에 보고했다. 유도성 ASCL1 시스템, scRNA-seq, scATAC-seq을 이용한 시간적 프로파일링의 핵심 결과:

- ASCL1를 제거하면 NEPC가 선암 표현형으로 **되돌아감**
- ASCL1이 NE 상태 유지에도 지속적으로 필요함(개시뿐 아니라 유지에도)
- 크로마틴 접근성 변화도 ASCL1 제거 시 부분적으로 역전됨
- 치료적 의미: ASCL1은 NEPC 예방뿐 아니라 **확립된 NEPC의 역전**에도 표적이 될 수 있음

#### 2.3 NEPC 아형과 ASCL1의 한계

현재까지 규명된 NEPC 아형은 세 가지이다:

| 아형 | 핵심 TF | 특징 |
|------|---------|------|
| ASCL1+ | ASCL1 | 가장 흔함; Rodarte·Romero 연구 대상 |
| NEUROD1+ | NEUROD1 | ASCL1 독립적 |
| POU2F3+ | POU2F3 | Tuft cell 유사 |

ASCL1 표적화 전략은 ASCL1+ 아형에만 적용되며, 다른 아형에 대한 분자 메커니즘은 아직 미탐색 영역이다.

---

### 3. Proteogenomic 관점: AR 이질성과 치료 취약점

#### 3.1 국소 전립선암의 AR 신호 이질성 (Ou 2025)

[[ou-2025-integrated-proteogenomic-characterization-localized-prostate]]는 145명의 중국인 코호트를 대상으로 WGS, RNA-seq, proteomics, phosphoproteomics를 통합하여 **AR 신호 이질성에 따른 분자 아형**을 정의했다. 주요 발견:

- 분자 아형별로 AR 단백질 발현 및 인산화 패턴이 현저히 상이
- 아형 특이적 치료 취약점(subtype-specific therapeutic vulnerabilities) 제시
- 동아시아 집단 특이적 게놈/단백체 특성 포함 — 서구 CRPC 연구와 보완적

이 연구는 국소 전립선암에서도 이미 AR 신호의 다양성이 존재하며, 이것이 향후 ARSI 치료 반응 및 NED 위험도와 연결될 수 있음을 시사한다.

#### 3.2 방사선 내성과 POLQ (Haas 2024)

[[haas-2024-proteogenomics-prostate-cancer-radioresistance]]는 ARSI 외에 방사선 치료에 대한 내성 메커니즘을 proteogenomics로 규명했다:

- 방사선 내성 세포는 대규모 유전체 불안정성(genomic instability)과 DNA mismatch repair 손상을 보임
- **POLQ(DNA Polymerase Theta)**가 방사선 내성의 핵심 표적으로 확인
- 유전적·약리학적 POLQ 억제가 내성 세포를 재감수화(resensitization)
- 세포분획 proteomics가 구획별 단백질 변화를 고해상도로 포착

NEPC는 방사선 치료에도 내성을 보이는 경향이 있으며, POLQ 과발현이 NE 분화와 연결되는지는 향후 연구 과제이다.

---

### 4. 종양 미세환경의 공간적 구조

#### 4.1 Club-like 세포–MDSC 면역억제 niche (Kiviaho 2024)

[[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]]는 120명 환자의 scRNA-seq + Visium 공간 전사체학을 통합하여 전립선암 TME에서 새로운 면역억제 niche를 규명했다:

- **Club-like 세포**(luminal progenitor 특성 보유)가 종양에서 특이적으로 확장
- 이 세포들은 공간적으로 MDSC(myeloid-derived suppressor cells)와 공존하며 ligand-receptor 상호작용을 통해 면역억제 niche를 형성
- **안드로겐 박탈 치료(ADT)**가 club-like 세포 비율을 변화시킴 → TME 재편이 치료 반응적

Club-like 세포가 NED를 향한 전구체 집단인지, 또는 NED 이후 TME 재편의 결과인지는 향후 연구가 필요하다.

#### 4.2 공간 전사체학 + pseudotime으로 발견한 소변 바이오마커 (Smelik 2025)

[[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]]는 HEST-1k 공간 전사체 데이터셋, pseudotime 분석, 머신러닝을 결합하여 전립선암의 비침습적 바이오마커를 개발했다:

- Pseudotime이 Gleason grade와 상관하며 악성 전환을 모델링
- 악성 전환과 연관된 **45개 유전자** 확인
- 이 유전자들 기반 **소변 단백질 예측 모델**이 AUC 0.92 달성 (PSA AUC 0.69 대비 현저한 향상)
- 2,000명 이상의 혈청, 조직, 소변 코호트에서 교차 검증

현행 PSA 기반 스크리닝의 낮은 특이도를 극복할 수 있는 비침습적 대안을 제시한다.

---

### 5. 골수세포 chemotaxis와 ARSI 내성 (Guo 2023)

[[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]]는 ARSI 내성의 TME 메커니즘으로서 **노화(senescence)-관련 골수 염증**을 제시했다:

- ARSI 치료로 유도된 세포 노화 → CXCR2 chemokine 분비 증가
- CXCR2 경로가 **PMN-MDSC(다형핵 MDSCs)**를 종양으로 모집
- 종양 내 PMN-MDSC 축적이 면역억제 + ARSI 내성 유발
- **AZD5069(CXCR2 억제제) + enzalutamide** 병용의 개념증명(PoC) 임상시험: mCRPC에서 안전성 확인 및 종양 내 골수세포 감소 확인
- 혈중 **NLR(호중구-림프구 비율)**이 골수세포 매개 내성의 간편 바이오마커로 제안

이 연구는 ARSI 내성이 종양 세포 자율적 mecanisms(NED 포함)과 TME 경로가 병존함을 보여준다. 또한 호흡기 질환용으로 개발된 AZD5069의 종양학적 전용(drug repurposing) 사례이기도 하다.

---

### 6. 전이 관련 메커니즘: RNF41-MYO1C 축 (Xiong 2024)

[[xiong-2024-noncanonical-e3-ubiquitin-ligase-rnf41-mediated]]는 NEPC와는 별개로 전립선암 전이의 새로운 분자 메커니즘을 규명했다:

- **RNF41**이 비정형 E3 ubiquitin ligase로서 **MYO1C**를 K63-linked ubiquitination으로 수식
- K63 ubiquitination은 단백질 분해가 아닌 기능 변화를 유도 → 세포골격(cytoskeletal) 재모델링 → 세포 이동·침습 촉진
- RNF41 과발현이 불량한 예후 및 전이 진행과 상관
- RNF41이 예후 마커 및 치료 표적으로 제안됨

NEPC 전환 이전 단계에서도 유사분열·운동성 관련 메커니즘이 전이를 촉진하며, 이는 치료 내성과 독립적인 위험 축을 형성한다.

---

### 7. 치료 전략 요약

| 내성/진행 메커니즘 | 분자 표적 | 치료 전략 | 근거 |
|-----------------|---------|---------|------|
| NEPC 전환(개시) | ASCL1 | ASCL1 억제제 개발 | [[rodarte-2024-neuroendocrine-differentiation-prostate]] |
| NEPC 유지(가역성) | ASCL1 | ASCL1 차단으로 NEPC 역전 | [[romero-2024-neuroendocrine-transition-prostate]] |
| ARSI 내성(TME 경로) | CXCR2/PMN-MDSC | AZD5069 + enzalutamide | [[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]] |
| 방사선 내성 | POLQ | POLQ 억제제 + 방사선 | [[haas-2024-proteogenomics-prostate-cancer-radioresistance]] |
| 전이 | RNF41/MYO1C | RNF41 억제 | [[xiong-2024-noncanonical-e3-ubiquitin-ligase-rnf41-mediated]] |
| 면역억제 niche | Club-like/MDSC | ADT + 면역관문 병용 | [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]] |
| 진단 개선 | 45-gene panel | 소변 단백질 바이오마커 | [[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]] |

---

## 핵심 비교표

| 연구 | 모델 | 핵심 발견 | 치료적 시사점 |
|------|------|---------|------------|
| Rodarte 2024 | RPM GEM, KO | ASCL1 결핍 = NED 완전 차단 | ASCL1 예방적 표적화 |
| Romero 2024 | 유도성 시스템, scRNA/ATAC | NED는 가역적; ASCL1 지속 필요 | 확립된 NEPC도 역전 가능 |
| Ou 2025 | 145명 환자 proteogenomics | AR 신호 이질성 → 아형별 취약점 | 아형 기반 치료 선택 |
| Haas 2024 | 세포주 proteogenomics | POLQ = 방사선 내성 표적 | POLQ 억제 + 재방사선 |
| Kiviaho 2024 | 120명 scRNA-seq + Visium | Club-like-MDSC 면역억제 niche | ADT + 면역관문 차단 병용 |
| Smelik 2025 | HEST-1k + ML | 소변 biomarker AUC 0.92 | PSA 대체 비침습 진단 |
| Guo 2023 | 전임상 + PoC 임상 | CXCR2-MDSC가 ARSI 내성 유발 | AZD5069 + enzalutamide |
| Xiong 2024 | 세포주 + 환자 데이터 | RNF41-MYO1C K63-Ub = 전이 촉진 | RNF41 예후마커 + 표적 |

---

## 관련 논문

- [[rodarte-2024-neuroendocrine-differentiation-prostate]] — ASCL1이 RPM GEM 모델에서 NE 분화에 필수적임을 확립; KO 시 완전 차단 확인
- [[romero-2024-neuroendocrine-transition-prostate]] — NE 전환이 동적이고 가역적임을 Nature Cancer에 보고; ASCL1 지속 의존성 입증
- [[ou-2025-integrated-proteogenomic-characterization-localized-prostate]] — 145명 중국인 코호트 기반 국소 전립선암 proteogenomics; AR 신호 이질성과 치료 취약점 정의
- [[haas-2024-proteogenomics-prostate-cancer-radioresistance]] — 방사선 내성의 proteogenomics; POLQ를 radiosensitizer 표적으로 제안
- [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]] — scRNA-seq + Visium으로 club-like 세포–MDSC 면역억제 niche 공간적 규명
- [[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]] — 공간 전사체 + pseudotime + ML로 AUC 0.92 소변 바이오마커 개발
- [[guo-2023-targeting-myeloid-chemotaxis-reverse-prostate]] — 노화-CXCR2-MDSC 축이 ARSI 내성 유발; AZD5069 PoC 임상시험 결과 포함
- [[xiong-2024-noncanonical-e3-ubiquitin-ligase-rnf41-mediated]] — RNF41이 MYO1C를 K63 ubiquitination하여 전립선암 전이 촉진

## Related pages

- [[prostate-cancer]]
- [[NEPC]]
- [[lineage-plasticity]]
- [[AR-signaling]]
- [[tumor-microenvironment]]
- [[spatial-transcriptomics]]
- [[drug-resistance]]
- [[proteogenomics]]
