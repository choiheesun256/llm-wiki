---
title: "Autophagy가 암의 면역 회피에 어떻게 기여하고, 치료 전략으로 활용할 수 있는가?"
type: question
status: active
source_files:
  - cancer/hanahan-2022-hallmarks-cancer-new-dimensions.md
  - cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers.md
  - cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell.md
  - cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.md
  - drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired.md
  - cancer-study/day-08-cancer-hallmarks-tme-computational.md
updated: 2026-05-19
---

# Autophagy가 암의 면역 회피에 어떻게 기여하고, 치료 전략으로 활용할 수 있는가?

## 짧은 답변

Autophagy(자가포식)는 이중적 역할을 갖는다. 초기 종양 형성에서는 종양 억제적으로 작용하지만, 진행된 암에서는 면역원성 세포 사멸(immunogenic cell death, ICD)을 억제하고, MHC class I 분자와 항원을 분해하며, 면역 억제 사이토카인 분비를 조절함으로써 면역 회피를 촉진한다. Chloroquine/hydroxychloroquine(autophagy flux 차단)과 면역관문 억제제(ICI)의 병합이 전임상에서 시너지를 보이며 임상 시험이 진행 중이다.

## 상세 답변

### Autophagy의 기본 기전

Autophagy는 세포 내 손상 소기관, 단백질 응집체, 병원체를 lysosome에서 분해하는 세포 보존 경로다. 핵심 과정:

1. **Initiation**: ULK1/2 kinase 복합체 활성화 (mTORC1 억제에 의해 촉발)
2. **Nucleation**: Beclin-1/VPS34 PI3K 복합체가 phagophore 막 형성
3. **Elongation**: ATG5-ATG12-ATG16L1 복합체와 LC3-II 생성으로 autophagosome 완성
4. **Fusion/Degradation**: Autophagosome이 lysosome과 융합하여 내용물 분해

AMPK 활성화(영양 결핍, 에너지 스트레스)는 ULK1을 직접 인산화하여 autophagy를 유도한다. [[cancer/steinberg-2023-new-insights-activation-function-ampk]]의 AMPK 연구는 AMPK가 mTORC1 억제를 통한 autophagy 유도의 핵심 조절자임을 확인한다.

### Autophagy의 이중적 역할

**종양 억제 단계 (초기)**

정상 세포와 초기 전암 단계에서 autophagy는:
- 손상된 미토콘드리아(mitophagy)를 제거하여 ROS 축적과 게놈 불안정성을 방지
- p62/SQSTM1 과축적을 막아 NF-κB 과활성화 억제
- Oncogene-induced senescence(OIS) 실행에 기여

Beclin-1은 BRCA1과 상호작용하며, 단배자성 결실이 유방암·난소암에서 빈번하다. PTEN 결실 → PI3K/AKT/mTOR 과활성화 → autophagy 억제로 이어지는 경로가 종양 촉진에 기여한다.

**종양 촉진 단계 (진행된 암)**

[[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]의 "enabling replicative immortality"와 "resisting cell death" hallmark에서 autophagy는 영양 결핍·저산소 환경에서의 생존을 지원한다:
- 아미노산·지방산·핵산 재활용으로 에너지 위기 극복
- ER stress, 방사선·화학요법 유발 손상에 대한 세포 보호
- 암 줄기세포(CSC) 상태 유지

### Autophagy와 면역 회피의 구체적 기전

**1. MHC class I 항원 제시 억제**

종양 세포의 autophagy는 MHC class I 분자 자체와 peptide loading 복합체(TAP1, TAP2, tapasin)를 선택적으로 분해하여 세포독성 T 림프구(CTL)에 의한 인식을 회피한다. 이 기전은 anti-PD-1 치료 내성과 연관된다.

구체적으로, KRAS 변이 폐암([[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]])에서 관찰되는 "immune-cold" 표현형은 부분적으로 autophagy-mediated antigen presentation 억제에 기인할 수 있다. STK11 변이에 의한 AMPK 비활성화는 mTOR 과활성화와 autophagy 조절 이상을 초래한다.

**2. NK cell 및 CTL 인식 분자 분해**

NKG2D 리간드(MICA/MICB, ULBP1-3)는 세포 스트레스 시 표면에 발현되어 NK cell 활성화를 유발한다. 종양 세포는 autophagy를 이용해 이들 리간드를 표면에서 내재화 후 lysosome 분해하여 NK cell 인식을 회피한다. 또한 Fas(CD95)를 분해하여 Fas ligand 매개 세포사멸 감수성을 줄인다.

**3. 면역 억제 미세환경 조성**

- Autophagy는 손상 관련 분자 패턴(DAMP)인 HMGB1, ATP, calreticulin의 세포 외 방출을 조절한다. ICD 과정에서 이들은 면역원성 신호를 제공하지만, 암세포의 autophagy가 세포 사멸 전 이들을 분해하면 면역원성이 감소한다.
- 종양 관련 대식세포(TAM)의 M2 극화를 촉진: 종양 세포의 autophagy-secreted 인자가 대식세포의 autophagy와 IL-10, TGF-β 분비를 유도한다.
- [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]]의 Classical LSCC 아형에서 관찰되는 높은 OxPhos와 낮은 면역 활성은 에너지 대사-autophagy-면역 냉각 연결을 시사한다.

**4. 표현형 가소성과 EMT 연결**

[[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]에서 "unlocking phenotypic plasticity"는 독립적 hallmark로 제안된다. Autophagy는 EMT 과정에서 E-cadherin, γ-catenin을 선택적으로 분해하여 mesenchymal 전환을 촉진한다. EMT 세포는 더 높은 autophagy flux를 보이며 CTL 저항성을 획득한다.

[[drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired]]에서 PDAC의 EMT가 IRF6 후성유전적 침묵을 통해 checkpoint blockade 내성을 구동하는 것처럼, autophagy-EMT 축도 유사한 면역 회피 회로를 구성한다.

**5. PD-L1 안정화**

Autophagy는 CMTM6 의존적으로 PD-L1 재활용(recycling)을 조절한다. Autophagy 억제 시 PD-L1이 lysosome 경로로 분해되어 표면 발현이 감소하지만, 특정 맥락에서는 autophagy가 PD-L1 분해를 억제하여 면역 체크포인트를 강화할 수도 있다.

### 치료 전략

**Autophagy 억제 + 면역관문 억제제 병합**

가장 활발히 연구되는 전략이다. Chloroquine(CQ)과 hydroxychloroquine(HCQ)는 lysosome을 알칼리화하여 autophagy flux를 차단한다:
- CQ/HCQ + anti-PD-1: 전임상 모델에서 항종양 면역 증강. pancreatic cancer, melanoma, NSCLC에서 임상 시험 진행 중.
- 기전: (1) MHC I 항원 제시 회복, (2) DAMP 방출 증가로 ICD 강화, (3) M2 TAM 전환 억제.

**ULK1/ATG4B 억제제**

선택적 autophagy 개시 억제제 개발 중:
- SBI-0206965(ULK1 억제제): mTOR 억제제와 시너지
- S130(ATG4B 억제제): Autophagosome 성숙 차단

**mTOR 억제의 양면성**

Rapamycin/rapalogue는 mTORC1 억제로 autophagy를 유도하여 종양 성장 억제(기존 적응증)와 동시에 면역 억제성 autophagy를 강화하는 역설이 있다. 따라서 면역 치료와의 병합 시 타이밍과 용량 조절이 중요하다.

**Selective autophagy 표적 (mitophagy, lipophagy)**

- **Mitophagy 억제**: PINK1/Parkin 경로 차단으로 손상 미토콘드리아 축적 → ROS 증가 → 종양 세포 사멸 촉진
- **Lipophagy 억제**: [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]]의 mesenchymal GBM에서 ACSL4/ALOX5 driven ferroptosis 취약성이 lipophagy와 연결될 수 있다.

**Beclin-1 경로 조절**

Bcl-2/Bcl-XL은 Beclin-1과 결합하여 autophagy를 억제한다. BH3 mimetic(venetoclax, ABT-737)은 이 결합을 해제하여 autophagy와 apoptosis를 동시에 활성화한다. 면역 세포에서는 autophagy 증강이 기억 T 세포 형성을 돕는 이점이 있다.

## 핵심 비교표

| 기전 | Autophagy 효과 | 면역 회피 방식 | 치료 표적 |
|---|---|---|---|
| MHC class I 분해 | 항원 제시 저하 | CTL 인식 회피 | CQ/HCQ로 차단 |
| NKG2D 리간드 내재화 | NK 세포 활성화 방지 | NK cell 회피 | Autophagy 억제 |
| DAMP 분해 (ATP, HMGB1) | ICD 억제 | 면역원성 감소 | ULK1 억제제 |
| TAM M2 극화 | 면역억제 환경 | 항종양 면역 약화 | CQ + anti-PD-1 |
| EMT 촉진 | E-cadherin 분해 | CTL 저항성 증가 | EMT 억제제 병합 |
| PD-L1 조절 | Context-dependent | 면역 checkpoint 강화 | 상황에 따라 다름 |
| 에너지 재활용 | 생존 촉진 | 종양 생존력 유지 | mTOR + autophagy 병합 |

## 관련 논문

- [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]] — 표현형 가소성 hallmark; SASP, senescence와 autophagy의 관계
- [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]] — KRAS/STK11/PTEN 돌연변이와 mTOR-autophagy 조절 이상
- [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]] — OxPhos/면역 냉각 연결; ubiquitylome과 autophagy-UPS 교차
- [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — STK11 변이 immune-cold 기전; KRAS-관련 대사 변화
- [[drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired]] — EMT-면역 회피 축; IRF6 침묵과 ICD 연결

## Related pages

- [[questions/ecm-remodeling-tumor-progression]]
- [[cancer-study/day-08-cancer-hallmarks-tme-computational]]
- [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]
- [[cancer/lee-2024-cdk46-senescence-immunogenic-properties]]
