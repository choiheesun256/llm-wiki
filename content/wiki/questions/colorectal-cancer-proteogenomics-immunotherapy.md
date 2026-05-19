---
title: "대장암의 proteogenomic 특성과 면역치료 반응을 결정하는 요인은?"
type: question
status: active
category: [colorectal-cancer, proteogenomics, immunotherapy, drug-resistance, tumor-evolution]
source_files:
  - li-2024-proteogenomic-profiling-colorectal-cancer-progression.md
  - tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer.md
  - lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer.md
  - lee-2024-proteogenomic-analysis-adiposity-colorectal-cancer.md
  - yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr.md
  - yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4.md
  - zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer.md
  - wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals.md
  - zapata-2018-negative-selection-tumor-genome-evolution.md
  - esplin-2024-multiomic-analysis-familial-adenomatous-polyposis.md
updated: 2026-05-19
---

# 대장암의 proteogenomic 특성과 면역치료 반응을 결정하는 요인은?

## 짧은 답변

대장암(CRC)의 면역치료 반응은 **MSI/MSS 상태**, **TP53-mTORC1 축**, **종양 진화 과정에서의 면역편집**이 핵심 결정인자이다. MSI-H CRC는 높은 돌연변이 부담과 neoantigenic 압력으로 면역관문 억제제(ICI)에 잘 반응하는 반면, MSS CRC(전체의 ~85%)는 TP53 소실에 의한 mTORC1 과활성화 + 자가포식 억제로 면역억제적 TME를 형성하여 ICI에 내성을 보인다. KRAS G12C 표적 치료의 획득 내성, ANGPTL4·GREM1 등 순환 단백질 매개 위험 인자, 그리고 인산화·아세틸화 PTM crosstalk이 치료 전략 수립의 새로운 기준을 제시하고 있다.

---

## 상세 답변

### 1. CRC 진행 단계별 Proteogenomic 특성 (Li 2024)

[[li-2024-proteogenomic-profiling-colorectal-cancer-progression]]는 148명 CRC 환자의 435개 trace-tumor 샘플을 **정상 → IEN → IFT → A-CRC** 단계에 걸쳐 분석한 가장 포괄적인 단계 해소(stage-resolved) proteogenomics 연구이다.

#### 진행 단계별 핵심 분자 사건

| 진행 단계 | 지배적 게놈 변이 | 단백질·대사 변화 | 면역 특성 |
|---------|--------------|--------------|---------|
| IEN(초기 종양내피) | KRAS/BRAF 상호배타적 돌연변이 | OXPHOS 활성화 | 면역 감시 활발 |
| IFT | chr17q 소실 시작 | ECM 재편 시작 | 중간 상태 |
| A-CRC(진행 암) | TP53 돌연변이, chr20q 획득 | ECM 경직, 대사 재프로그래밍 | 면역억제적 |

- **MSI** vs. **MSS**: MSI CRC는 초기부터 과돌연변이(hypermutation), 면역활성화 단백체 프로파일을 보이는 반면, MSS는 구조적 변이와 ECM 경직이 주도
- **CMS/CRIS** 아형 특이적 진행 경로가 확인됨 — 동일한 "CRC"도 분자 경로에 따라 면역치료 적합성이 달라짐

---

### 2. Primary vs. 전이 CRC의 단백체 아형 (Tanaka 2024)

[[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]]는 154개 원발 + 142개 간 전이(총 340 샘플, 16 matched triplet 포함)의 label-free MS proteomics를 통해 **6개 단백체 기반 아형**을 발견했다.

#### 6개 단백체 아형의 특성

| 아형 군 | 주요 특성 | 면역치료 관련성 |
|--------|---------|-------------|
| Hypoxia (전이 농축) | HIF 경로, EMT, 대사 적응 | ICI 내성 — HIF 표적화 필요 |
| Stemness | ALT pathway, 높은 종양 원성 | ICI 내성 경향 |
| Immune-cold | MHC class I/II 억제 | ICI 완전 내성; 항원 제시 복구 필요 |

**핵심 발견**: 아형 간 게놈적 차이는 미미하지만 단백질 발현 차이는 현저함 → **단백체 가소성(proteomic plasticity)**이 전이 적응의 핵심 드라이버이며, 게놈 데이터만으로는 면역치료 예측이 불충분하다는 강력한 근거.

---

### 3. TP53-mTORC1 축과 Immune-Cold MSS CRC (Lee 2026)

[[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]]는 TCGA 647명 bulk RNA-seq, scRNA-seq(11,138 TIL), CPTAC 단백체/인산체 데이터를 통합한 대규모 다중오믹스 분석이다.

#### TP53 소실 → 면역억제 경로

```
TP53 소실
  └─→ mTORC1 지속 활성화 (4E-BP/S6K 인산화 증가; CPTAC 인산체로 확인)
        └─→ 자가포식(autophagy) 억제
              └─→ 손상 세포 소기관 축적, 면역원성 세포사 억제
                    └─→ DC 성숙 억제, Treg 우세 TME 형성
                          └─→ ICI 무반응 (immune-cold)
```

- scRNA-seq: TP53 돌연변이 종양에서 **FOXP3+ Treg** 우세, CD8+ T세포 소수화 확인
- **치료 제안**: mTOR 억제제 + ICI 병용이 자가포식 복구 → 면역원성 증가 → ICI 감작화로 이어질 수 있음
- MSS CRC의 약 70%가 TP53 돌연변이를 보유하므로 임상적 적용 범위가 광범위

---

### 4. 비만/지방과다증과 CRC: GREM1 매개 기전 (Lee 2024)

[[lee-2024-proteogenomic-analysis-adiposity-colorectal-cancer]]는 Mendelian randomization + SomaScan 혈장 단백체(최대 4,907 aptamers)를 결합하여 **GREM1(BMP 길항제)**이 BMI-CRC 인과 경로의 매개 단백질임을 확인했다.

- **6,591**개의 지방-단백질 연관성, **33**개의 단백질-CRC 위험 연관성 발견
- GREM1은 BMP 신호를 억제 → 장 상피 증식 촉진 → CRC 위험 증가
- 효과는 **여성에서 더 강함** (sex-specific mediation)
- GREM1 경로 억제가 고비만 CRC 환자에서의 예방 전략이 될 수 있음

---

### 5. KRAS G12C 표적 치료 획득 내성 (Yaeger 2023)

[[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]]는 KRAS G12C + EGFR 병용 억제(sotorasib/adagrasib + cetuximab)에 대한 획득 내성의 분자 landscape를 Cancer Discovery에 발표했다.

#### 내성 메커니즘의 계층 구조

| 내성 유형 | 메커니즘 | 빈도 | 특성 |
|---------|---------|------|------|
| 주요 클론 내성 | **KRAS G12C 증폭** | 가장 흔함 | ERK 억제 불가 |
| 아클론 내성 | BRAF/MEK 돌연변이 | 다양함 | ctDNA로 추적 가능 |
| 아클론 내성 | RTK 활성화(EGFR, FGFR) | 다양함 | 낮은 VAF |

- **치료 중단(drug holiday)** 시 내성 세포가 **종양 세포 노화(senescence)**로 진입
- 노화 세포는 senolytics(navitoclax 등)에 취약 → **약물 중단 + senolytic** 병용 전략 제안
- **ctDNA**로 아클론 내성의 실시간 동적 추적 가능 — 단순 조직 생검보다 내성 landscape를 더 완전하게 포착

---

### 6. ANGPTL4: 지질 대사와 CRC 위험 (Yarmolinsky 2025)

[[yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4]]는 JNCI에서 cis-MR, colocalization, 전향적 코호트 분석을 삼각검증하여 **ANGPTL4 억제가 CRC 위험을 감소**시킴을 입증했다:

- Genetically proxied ANGPTL4 억제: **OR 0.76** (24% CRC 위험 감소)
- EPIC 코호트 + UK Biobank에서 pre-diagnostic ANGPTL4 단백질 수준과 CRC 위험 역상관 확인
- ANGPTL4 **E40K loss-of-function** 변이 → 결장 조직에서 세포 증식 및 EMT 경로 하향조절
- ANGPTL3, APOC3, PCSK9 등 다른 지질 표적과 달리 ANGPTL4만이 CRC 특이적 효과

ANGPTL4는 기존 지질 조절 약물(ANGPTL4 억제 항체 개발 중)의 **암 예방 용도 확장(drug repurposing)**을 위한 강력한 근거를 제공한다.

---

### 7. Kinase 억제제 반응의 인산화·아세틸화 PTM crosstalk (Zhao 2025)

[[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]]는 HCT116 CRC 세포주에서 7개 kinase 억제제에 대한 단백체, 인산체, 아세틸화체를 TMTpro로 동시 정량하여 **PTM crosstalk**를 규명했다.

#### 핵심 발견

- 동일 경로(예: 세포주기) 억제제도 분자 수준에서 **현저히 다른 효과** → 치료 개별화 필요
- **AKT2 인산화 감소(lapatinib)** + **HDAC6 아세틸화 증가(refametinib)**의 PTM crosstalk 발견
- 미토콘드리아 단백질 특이적 교란: lapatinib(내막), refametinib(기질), AT7519(기질/IMS/외막)
- 이 PTM 상보성을 기반으로 **병용 약물 조합 전략** 제안

#### 면역치료 관련성

- PI3K-mTOR 억제제의 phosphoproteomic profile이 면역세포 기능에도 영향을 미칠 수 있음
- KSEA(kinase substrate enrichment analysis)를 통한 면역 관련 kinase 활성 변화 추론 가능

---

### 8. 페롭토시스 조절인자와 치료 취약점 (Wang 2023)

[[wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals]]는 GBM에서 CPTAC proteogenomics를 이용하여 페롭토시스 조절인자 네트워크를 규명한 연구로, CRC의 치료 전략에도 방법론적으로 적용 가능한 프레임워크를 제시한다:

- 142개의 페롭토시스 관련 단백질이 차등 발현
- 5-gene 페롭토시스 예후 signature(HSPB1, GPX4, ACSL3, IL33, ELAVL1) 구축
- **HSPB1 인산화** → 페롭토시스 억제 → 불량 예후 연결 고리
- **Ipatasertib(pan-AKT 억제제)**가 HSPB1 인산화를 억제하여 페롭토시스 유도

CRC에서도 GPX4·SLC7A11(xCT) 등 페롭토시스 핵심 인자들이 면역억제 TME와 연결되므로, 동일한 proteogenomic 프레임워크를 적용하면 CRC 특이적 페롭토시스 취약점을 발굴할 수 있다.

---

### 9. 종양 게놈 진화에서의 음성 선택 (Zapata 2018)

[[zapata-2018-negative-selection-tumor-genome-evolution]]은 TCGA 7,546 exome(26 암종)에서 **음성 선택(negative selection)**이 종양 진화에 미치는 영향을 분석한 pan-cancer 연구이다:

- 필수 세포 기능(단백질 합성, 포도당 대사, 분자 수송)에서 음성 선택 작동
- **면역펩티돔(immunopeptidome)**에서도 음성 선택 관찰 → 면역 감시가 종양 게놈 진화를 능동적으로 형성
- SSB(somatic substitution bias) 보정 dN/dS 지표로 표준 방법의 음성 선택 과소추정(~34%) 수정
- CRC는 MSI-H 종양에서 immune-mediated 음성 선택이 특히 강하게 작동

**면역치료 시사점**: 음성 선택으로 면역원성 neoantigen이 제거된 경우, ICI 반응성이 낮아질 수 있다. MSS CRC에서 면역 편집의 정도가 ICI 내성을 예측하는 추가 인자로 기능할 수 있다.

---

### 10. FAP 모델로 본 초기 발암과 예방 (Esplin 2024)

[[esplin-2024-multiomic-analysis-familial-adenomatous-polyposis]]는 6명 FAP 환자의 93개 결장 샘플에서 전사체·단백체·대사체·지질체 4중 오믹스를 수행하여 **점막 → 폴립 → 이형성증** 전환의 분자 경로를 규명했다:

- 초기 과형성(hyperplasia) 단계에서 **아라키돈산(arachidonic acid) 경로**가 가장 먼저 활성화됨
- 이는 NSAID/아스피린의 COX 억제를 통한 CRC 화학 예방의 분자적 근거를 제공
- 오믹스 레이어마다 지배적인 전환 단계가 다름 → 단일 오믹스의 한계를 보완하는 다중오믹스의 필요성 제시
- HTAN(Human Tumor Atlas Network) 공개 데이터 자원

---

## 핵심 비교표

| 연구 | 암종/단계 | 오믹스 레이어 | 면역치료 관련 핵심 발견 | 치료 전략 |
|------|---------|------------|---------------------|---------|
| Li 2024 | CRC 진행 단계별 | WGS+RNA+단백+인산 | MSI vs. MSS 단백체 차이; 단계별 면역 전환 | 단계 특이적 표적화 |
| Tanaka 2024 | Primary + 간전이 CRC | WGS+RNA+단백 | Immune-cold 아형은 MHC 억제; 게놈 변이와 무관 | 단백체 기반 면역 아형 구분 |
| Lee 2026 | MSS CRC (CPTAC+TCGA+scRNA) | RNA+단백+인산+scRNA | TP53 소실 → mTORC1 → 자가포식↓ → Treg 우세 | mTOR 억제제 + ICI |
| Lee 2024 | CRC 위험 (MR + SomaScan) | 혈장 단백체 + GWAS | GREM1이 BMI-CRC 경로 매개 | GREM1 경로 억제 |
| Yaeger 2023 | KRAS G12C CRC | ctDNA + 조직 | KRAS 증폭이 주요 내성; 중단 시 노화 취약성 | Drug holiday + senolytic |
| Yarmolinsky 2025 | CRC 예방 (MR + EPIC/UKB) | 혈장 단백체 + GWAS | ANGPTL4 억제 → OR 0.76 CRC 감소 | ANGPTL4 억제제 (예방) |
| Zhao 2025 | HCT116 (CRC 세포주) | 단백+인산+아세틸 | 동일 경로 억제제도 PTM 다름; PTM crosstalk 발견 | 병용 약물 PTM 상보성 기반 설계 |
| Wang 2023 | GBM (CPTAC) | 단백+인산 | HSPB1 인산화 → 페롭토시스 억제; ipatasertib 역전 | AKT 억제 → 페롭토시스 유도 (CRC 적용 가능성) |
| Zapata 2018 | Pan-cancer (26종, TCGA) | Exome (dN/dS) | 면역펩티돔에 음성 선택 → 면역 편집 | ICI 반응성과 음성 선택 정도 연계 |
| Esplin 2024 | FAP/CRC 초기 | 4중 오믹스 | 아라키돈산 경로가 가장 초기 표적 | NSAID 화학예방 분자 근거 |

---

## 면역치료 반응 결정 인자 요약

```
면역치료 반응 결정 인자
├─ 유리한 인자 (ICI 반응 증가)
│   ├─ MSI-H (고돌연변이 부담, 높은 neoantigen 부담)
│   ├─ 음성 선택 약함 (neoantigen 보존)
│   └─ 자가포식 활성 (TP53 정상)
└─ 불리한 인자 (ICI 내성)
    ├─ MSS + TP53 소실 → mTORC1↑ → 자가포식↓ → Treg 우세
    ├─ Immune-cold 단백체 아형 (MHC I/II 억제)
    ├─ Hypoxia 아형 (전이 시 농축)
    ├─ KRAS G12C 획득 내성 (ERK 재활성화)
    └─ ANGPTL4↑ / GREM1↑ (비만 관련 종양 촉진 환경)
```

---

## 관련 논문

- [[li-2024-proteogenomic-profiling-colorectal-cancer-progression]] — 435 샘플, 단계별 CRC proteogenomics; MSI/MSS 특성과 CMS 아형 분기 규명
- [[tanaka-2024-proteogenomic-characterization-primary-colorectal-cancer]] — 6개 단백체 아형; immune-cold·hypoxia 아형이 게놈 변이보다 전이 특성을 더 잘 설명
- [[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]] — TP53→mTORC1→자가포식 억제→Treg 우세 축이 MSS CRC의 ICI 내성 기반
- [[lee-2024-proteogenomic-analysis-adiposity-colorectal-cancer]] — MR + SomaScan으로 GREM1이 BMI-CRC 인과 경로의 매개 단백질임을 입증
- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] — KRAS G12C 획득 내성의 클론적 구조; 노화 취약성을 이용한 senolytic 전략 제안
- [[yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4]] — ANGPTL4 억제가 CRC 위험을 24% 감소; 지질 대사-암 연결의 proteogenomic 인과 증거
- [[zhao-2025-phosphoproteomic-acetylomic-characterization-colorectal-cancer]] — 7개 kinase 억제제의 인산화·아세틸화 crosstalk; 병용 설계에 PTM 상보성 원리 제공
- [[wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals]] — CPTAC proteogenomics로 페롭토시스 조절 네트워크 규명; HSPB1-AKT-페롭토시스 축 및 ipatasertib 재창출
- [[zapata-2018-negative-selection-tumor-genome-evolution]] — 면역펩티돔에 음성 선택이 작동; 면역 편집이 ICI 반응성을 결정하는 진화적 기반
- [[esplin-2024-multiomic-analysis-familial-adenomatous-polyposis]] — FAP 4중 오믹스; 아라키돈산 경로가 CRC 가장 초기 표적 → NSAID 예방 근거

## Related pages

- [[colorectal-cancer]]
- [[proteogenomics]]
- [[immunotherapy]]
- [[MSI-H]]
- [[MSS]]
- [[TP53]]
- [[mTOR-signaling]]
- [[KRAS-G12C]]
- [[tumor-microenvironment]]
- [[drug-resistance]]
- [[ferroptosis]]
- [[tumor-evolution]]
