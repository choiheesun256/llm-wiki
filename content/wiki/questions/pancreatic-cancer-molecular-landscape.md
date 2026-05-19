---
title: "췌장암의 분자적 특성과 치료 가능한 취약점은 무엇인가?"
type: question
status: active
category: [pancreatic-cancer, proteogenomics, immune-evasion, drug-resistance, multi-omics]
source_files:
  - hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal.md
  - tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid.md
  - yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic.md
  - xue-2023-schwann-cells-regulate-tumor-cells.md
  - zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic.md
  - fan-2024-osteoclast-cancer-cell-metabolic-cross-talk.md
  - wang-2025-multi-omic-profiling-intraductal-papillary-neoplasms.md
  - xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous.md
  - khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic.md
  - tong-2022-proteogenomic-insights-biology-treatment-pancreatic.md
updated: 2026-05-19
---

# 췌장암의 분자적 특성과 치료 가능한 취약점은 무엇인가?

## 짧은 답변

췌장관선암(PDAC)은 KRAS 돌연변이(~95%)가 지배적이며 밀도 높은 기질, 극도로 면역 억압적인 TME, 조기 원격 전이로 악명 높다. Proteogenomics([[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]])는 고전적-예후 인자(KRAS/SMAD4)와 인산화단백질체를 연결하여 6개 분자 아형을 정의했다. Autophagy-MHC-I 분해 축([[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]])은 면역 요법 내성의 핵심 기전이며, Schwann 세포-Midkine 신호([[xue-2023-schwann-cells-regulate-tumor-cells]])와 MCMBP-JAK-STAT3-PD-L1 축([[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]])이 면역 억압 TME를 형성한다. 치료 가능한 취약점으로는 STK39-PARPi 병용([[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous]]), SPN에서의 PDGFRA/ERBB2([[tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid]]), IPMN에서의 ECM 단백질 기반 조기 검출([[wang-2025-multi-omic-profiling-intraductal-papillary-neoplasms]])이 있다.

## 상세 답변

### 1. PDAC proteogenomic landscape: 한국 코호트 (Hyeon 2023)

[[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]]는 196명 PDAC 환자의 WES + RNA-seq + 단백질체 + 인산화단백질체를 통합한 아시아 최대 규모 proteogenomic 연구다.

#### 1.1 돌연변이 지형과 신호 연결

- **KRAS** 돌연변이: 표적 심층 시퀀싱(1백만× 깊이)으로 94.9% 검출 → 돌연변이 부담의 과소평가 문제 해결
- 7개 유의미 돌연변이 유전자 확인; KRAS/SMAD4 돌연변이가 **RhoA/actin 신호** 변화와 직접 연결
- 돌연변이-인산화단백질 상관 분석(mutation-phosphorylation correlation)으로 체세포 변이의 키나아제 하위 효과 규명

#### 1.2 6개 분자 아형과 치료적 함의

| 아형 | 핵심 특성 | 면역 TME | 치료적 시사점 |
|------|---------|---------|------------|
| 고전적 전구세포형 (Classical progenitor) | 상피 마커, FOXA1/2 | 중간 | 표준 Gemcitabine±nab-paclitaxel |
| 편평상피 변이형 1 (Squamous variant 1) | KRT 발현, p53 활성 | 낮음 | KRAS 억제제 병용 |
| 침습-증식형 (TS4, Invasive-proliferative) | 증식 마커, 높은 악성도 | 친종양 면역세포 농축, T세포 억제 | ICB + 면역 재프로그래밍 |
| 면역원성 전구세포형 (Immunogenic progenitor) | 면역 활성 | CD8+ T세포 풍부 | ICB 감수성 가능성 |
| 외분비선 유사형 (Exocrine-like) | 외분비 효소 마커 | 독특한 구성 | 별도 표적 전략 필요 |
| 기타 편평상피 변이형 2/3 | 간엽/EMT 요소 | 다양 | EMT 역전 전략 |

TS4 침습-증식형은 친종양 면역세포가 농축되어 T세포 증식을 억제하는 가장 불량한 면역 TME를 가진다.

---

### 2. 췌장 SPN의 독특한 proteogenomic 특성 (Tanaka 2025)

[[tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid]]는 췌장 고형 가성유두종양(SPN, n=13)을 PDAC(n=11), PanNET(n=10)과 비교한 최초의 포괄적 proteogenomic 연구다. FFPE 조직 MS 단백질체(무표지 정량, TopN DDA) + WES(MSK-IMPACT) 사용.

#### 2.1 SPN의 분자 특성

- **리소좀 단백질 농축** + **MITF/TFE3** 고발현: PDAC·PanNET과 완전히 구별되는 특성
- **MITF**: 현재 사용 IHC 마커보다 SPN에 특이적인 진단 마커로 제안; 285명 IHC 코호트에서 검증
- 대사 프로파일: **지방산 산화 우세, 해당 작용 낮음** → PDAC와 정반대
- 면역: MHC class I 발현 낮음 → 면역 회피 가능성
- **PDGFRA, ERBB2 과발현**: RTK 표적 치료 후보 (현재 SPN에 승인된 전신 치료 없음)

#### 2.2 치료 함의

PDAC와 달리 게놈 변이가 조용한 SPN에서 단백질체가 PDGFRA/ERBB2 과발현을 드러냄은 시퀀싱 단독 분석의 한계와 단백질체 접근의 추가적 가치를 보여주는 사례다. 리소좀/MITF 생물학이 자가포식 관련 약물 내성 기전과 교차할 가능성도 존재한다.

---

### 3. Autophagy-MHC-I 축: 면역 회피의 분자 기전 (Yamamoto 2020)

[[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]]는 PDAC 세포가 자가포식 cargo receptor **NBR1**을 통해 MHC-I를 선택적으로 분해하여 항원 제시를 줄이고 면역 회피를 가능하게 함을 Nature 2020에 발표했다:

- **NBR1**이 MHC-I를 자가포식소체로 격리 → 리소좀 분해 → 세포 표면 MHC-I 감소
- 자가포식 억제(유전적 KO 또는 chloroquine): MHC-I 표면 발현 회복, CD8+ T세포 반응 강화
- **dual ICB(anti-PD1 + anti-CTLA4)와 시너지**: PDAC 마우스 모델에서 종양 축소
- 이 기전이 PDAC의 단독 면역 관문 억제제 저항의 핵심 설명

**치료적 함의**: Chloroquine/hydroxychloroquine + ICB 병용이 PDAC 면역 요법의 합리적 전략. 임상 전환은 아직 진행 중이나, 자가포식-항원 제시 축은 검증된 약물 표적이다.

---

### 4. Schwann 세포-신경 기질: 새로운 종양 미세환경 구성요소 (Xue 2023)

[[xue-2023-schwann-cells-regulate-tumor-cells]]는 scRNA-seq + 공간전사체학으로 PDAC의 신경-기질 적소(neuro-stroma niche)를 특성화했다:

- **Schwann 세포 → Midkine 신호** → 종양 세포를 basal-like 아형으로 전환 (나쁜 예후)
- **Schwann 세포 → IL-1α** → 암 관련 섬유아세포(CAF)를 염증성 iCAF 아형으로 전환
- 신경병증(neuropathy)이 불량한 예후와 상관
- 신경 침습(perineural invasion)은 PDAC의 악명 높은 특성; Schwann 세포가 이 과정의 핵심 mediator

**치료적 함의**: Midkine 신호 차단이 종양 세포의 basal-like 전환을 억제할 수 있는 잠재적 전략. 신경-기질 상호작용이 약물 전달 장벽에도 기여할 가능성.

---

### 5. MCMBP-JAK-STAT3-PD-L1 축: 면역 억압 TME 형성 (Zhang 2025)

[[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]]는 TCGA, CPTAC, GTEx, 4개 GEO 데이터셋을 통합하여 MCMBP를 PAAD의 독립적 예후 인자로 규명했다:

- **MCMBP 과발현** → **JAK-STAT3 활성화** → **PD-L1 상향** → 면역 억압적 TME 형성
- DNA 저메틸화 + m6A 수식 증가가 MCMBP 발현을 상향 조절
- **MCMBP-저 환자**: anti-PD-L1 면역 요법 반응 우수 (IMvigor210 코호트 검증)
- 약물 감수성 분석: Gemcitabine+Paclitaxel, Tozasertib, Motesanib가 MCMBP-고 PAAD 후보 약물
- MCMBP 억제: 증식, 이동, 침습, G1-S 전환 억제

**치료적 함의**: MCMBP 발현 수준이 면역 요법 환자 선택 바이오마커가 될 수 있으며, JAK-STAT3 억제가 PDAC 면역 TME를 열 수 있다.

---

### 6. IPMN에서 PDAC로의 진행: 조기 검출 proteogenomics (Wang 2025)

[[wang-2025-multi-omic-profiling-intraductal-papillary-neoplasms]]는 Cancer Cell 2025에 발표된 Johns Hopkins 연구로 IPMN 64개, IOPN 5개, 정상 관 76개, PDAC 104개, 인접 정상 조직 43개, 낭액 55개를 단백질체 + 당단백질체로 분석했다:

- **등급별 단백질 특성**: 저등급 vs. 고등급 IPMN vs. PDAC에 걸친 진행 마커 규명
- **ECM 단백질 변화**: IPMN→PDAC 진행 단계를 추적; 기질 재형성이 핵심 과정
- **낭액 단백질체**: EUS-FNA로 수집 가능한 최소침습 바이오마커 소스; IPMN 위험도 층화 잠재력
- **당단백질체**: 악성 진행 동반 당화 변화 규명
- LMD 기반 세포 유형별 단백질 프로파일링으로 신호 특이성 확보

**치료적 함의**: 낭액 단백질 패널이 임상적으로 어려운 IPMN 고위험군 선별에 활용될 수 있다. ECM 마커는 PDAC 진행 경로의 개입 지점을 제시한다.

---

### 7. STK39-γH2AX-PARPi 내성: BRCA 독립적 HR 강화 (Xu 2024)

[[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous]]는 STK39 키나아제가 ATM 인산화를 통해 γH2AX를 증폭하고 MRN 복합체를 모집하여 상동재조합(HR) 복구를 강화함을 규명했다:

- DNA 손상 후 ATM이 STK39를 인산화 → STK39가 MRN 복합체를 통해 손상 부위에 모집
- **γH2AX 증폭** → HR 복구 강화 → BRCA 돌연변이 여부와 독립적으로 PARPi 내성
- **PAAD에서 STK39 과발현** → PARPi 내성과 상관
- STK39 억제 + PARPi: 전임상 모델에서 시너지 효과

**치료적 함의**: STK39는 BRCA 비돌연변이 PDAC에서도 PARPi 적용 가능성을 확장하는 병용 표적이다. 현재 임상용 STK39 억제제는 없으나, 이 경로가 PDAC PARPi 치료 영역 확장의 이론적 근거를 제공한다.

---

### 8. 공간전사체학으로 본 PDAC 이질성 (Khaliq 2024)

[[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]]는 13명 PDAC 환자의 원발-전이(간/폐) 대응 30개 시편에서 Visium FFPE 공간전사체학을 수행했다:

- **공간적 ecotype**: 종양 세포 상태와 TME 구성의 반복적 패턴 정의
- **종양 내 이질성**: 많은 경우 종양 간 이질성을 초과 → 단일 생검의 한계
- **전이 부위별 TME**: 원발에 비해 전이 부위에서 변형된 TME 구성
- CAF 아형이 특정 종양 세포 상태와 공간적으로 조직화

이 공간적 이질성은 왜 PDAC에서 단일 바이오마커 전략이 실패하는지, 그리고 왜 종양 부위별 sampling이 치료 결정에 중요한지를 설명한다.

---

### 9. EUS 기반 전임상 모델: 정밀 의학의 실용적 기반 (Tong 2023)

[[tong-2022-proteogenomic-insights-biology-treatment-pancreatic]]는 EUS-TA(내시경 초음파 유도 조직 획득)로 PDAC 전임상 모델(PDC, PDX, PDO)을 수립하는 포괄적 리뷰다:

- 대부분의 PDAC 환자는 수술 불가 → EUS-TA가 조직 획득의 유일한 경로
- **PDO(patient-derived organoid)**: 성공률 최고, 수립 시간 최단
- **PDX**: 원래 종양 이질성 최대 보존
- **약물 감수성 시험 + 분자 프로파일링**: 실시간 치료 선택 가이드 가능
- EUS-FNB가 EUS-FNA보다 더 큰 조직 코어 제공 → 모델 수립 성공률 향상

---

## 핵심 비교표

| 연구/기전 | 핵심 발견 | 치료적 함의 | 한계 |
|---------|---------|-----------|------|
| **Hyeon 2023 (PDAC 6 아형)** | KRAS→RhoA/actin; TS4 면역 억압 아형 최불량 | 아형별 맞춤 치료; TS4에 ICB+면역 재프로그래밍 | 한국 단일 코호트 |
| **Tanaka 2025 (SPN)** | MITF/lysosomal 농축; PDGFRA/ERBB2 과발현; FAO 우세 | PDGFRA/ERBB2 RTK 표적; MITF 진단 마커 | 소규모(n=13); 기능 검증 없음 |
| **Yamamoto 2020 (Autophagy-MHC-I)** | NBR1이 MHC-I를 자가포식으로 분해; chloroquine+ICB 시너지 | Chloroquine + 이중 ICB 병용 | 마우스 모델; 임상 전환 불확실 |
| **Xue 2023 (Schwann 세포)** | Midkine→basal-like 전환; IL-1α→iCAF 전환 | Midkine 차단; 신경-기질 표적 | 소규모 공간전사체학; PDAC 특이적 |
| **Zhang 2025 (MCMBP-JAK-STAT3)** | MCMBP→JAK-STAT3→PD-L1→면역 억압 | MCMBP를 ICB 반응 바이오마커로; JAK-STAT3 억제 | 생물정보학 중심; 임상 검증 없음 |
| **Wang 2025 (IPMN)** | IPMN 등급별 단백질 특성; ECM 진행 마커; 낭액 바이오마커 | 낭액 단백질로 IPMN 위험도 층화; ECM 조기 개입 | 후향적; 임상 컷오프 미확립 |
| **Xu 2024 (STK39-PARPi)** | STK39→γH2AX 증폭→HR 강화→PARPi 내성; PAAD 과발현 | STK39i + PARPi 병용; BRCA 독립적 PARPi 확장 | 전임상; 임상용 STK39i 없음 |
| **Khaliq 2024 (공간 이질성)** | 종양 내 이질성 > 종양 간 이질성; 전이 부위별 TME 변화 | 단일 생검 한계 인식; 공간 바이오마커 필요 | 소규모(13명); FFPE RNA 품질 |

---

## 관련 논문

- [[hyeon-2023-proteogenomic-landscape-human-pancreatic-ductal]] — 196명 PDAC 한국 코호트; KRAS 94.9% 심층 시퀀싱; mutation-phosphorylation 연결; 6개 분자 아형(TS4 최불량 면역 TME)
- [[tanaka-2025-deep-proteogenomic-characterization-pancreatic-solid]] — SPN 최초 포괄적 proteogenomics; MITF 특이 마커; PDGFRA/ERBB2 RTK 표적; FAO-우세 대사; 낮은 MHC class I; 285명 IHC 검증
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — Nature 2020 랜드마크; NBR1이 MHC-I를 자가포식으로 분해; chloroquine + dual ICB 시너지; PDAC 면역 요법 내성의 핵심 기전
- [[xue-2023-schwann-cells-regulate-tumor-cells]] — scRNA-seq + 공간전사체학; Schwann 세포가 Midkine로 basal-like 종양 전환, IL-1α로 iCAF 전환; 신경병증-예후 상관
- [[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]] — TCGA/CPTAC/GEO 통합 멀티오믹스; MCMBP→JAK-STAT3→PD-L1→면역 억압; IMvigor210 ICB 반응 검증; Gemcitabine+Paclitaxel/Tozasertib/Motesanib 후보 약물
- [[wang-2025-multi-omic-profiling-intraductal-papillary-neoplasms]] — Cancer Cell 2025; 낭액+조직 단백질체+당단백질체; IPMN 등급별 단백질 특성; ECM 진행 마커; 조기 검출 바이오마커 후보
- [[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous]] — STK39-ATM-MRN-γH2AX-HR 경로; PAAD에서 STK39 과발현→PARPi 내성; STK39i+PARPi 전임상 시너지; BRCA 독립적 HR 강화
- [[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]] — Visium FFPE 공간전사체학; 13명 PDAC 원발+전이 30 시편; 공간적 ecotype; 종양 내 이질성 강조; CAF 아형의 공간 조직화
- [[tong-2022-proteogenomic-insights-biology-treatment-pancreatic]] — EUS-TA 기반 PDC/PDX/PDO 수립 리뷰; 수술 불가 환자 조직 획득; 약물 감수성 시험 통한 정밀 의학; EUS-FNB 우월성

## Related pages

- [[pancreatic-cancer]]
- [[PDAC]]
- [[proteogenomics]]
- [[immune-evasion]]
- [[autophagy]]
- [[tumor-microenvironment]]
- [[drug-resistance-mechanisms]]
- [[PARP-inhibitor]]
- [[IPMN]]
- [[spatial-transcriptomics]]
- [[multi-omics]]
