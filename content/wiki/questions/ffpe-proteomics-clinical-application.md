---
title: "FFPE 조직에서의 proteomics는 어떻게 가능하며, 임상 적용에서의 장단점은?"
type: question
status: active
source_files:
  - cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis.md
  - cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell.md
  - cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.md
  - cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers.md
  - cancer-study/day-07-cptac-proteogenomics.md
updated: 2026-05-19
---

# FFPE 조직에서의 proteomics는 어떻게 가능하며, 임상 적용에서의 장단점은?

## 짧은 답변

FFPE(Formalin-Fixed Paraffin-Embedded) 조직은 포르말린 고정 과정에서 단백질 간 methylene bridge 교차결합이 형성되어 전통적인 proteomics에 적합하지 않다. 그러나 고온(95–100°C) 또는 microwave 기반 antigen retrieval, 그리고 HIER(Heat-Induced Epitope Retrieval) 완충액을 활용한 특수 전처리 프로토콜로 교차결합을 역전시켜 mass spectrometry 기반 정량 proteomics가 가능하다. 수십 년간 축적된 병리학 아카이브를 활용할 수 있다는 장점이 있으나 단백질 분해와 정량 신뢰도 저하가 주요 한계다.

## 상세 답변

### FFPE 고정의 생화학적 문제

포르말린(formaldehyde) 고정은 조직 형태를 보존하는 표준 임상 병리 절차다. 그러나 분자 수준에서는 단백질의 lysine, arginine, asparagine 잔기와 인접 아미노산 사이에 methylene bridge 교차결합(cross-link)을 형성한다. 이로 인해:

- 단백질이 불용성 응집체를 형성
- Trypsin 등 단백질 분해 효소의 접근 방해
- Peptide 수율 감소 및 서열 coverage 저하
- 고정 시간, 포르말린 농도, 조직 두께에 따른 심한 변동성

반면 CPTAC 등 대형 proteogenomics 연구들은 주로 신선 냉동(fresh-frozen) 조직이나 cryopulverization 처리 조직을 사용하며, 이를 "controlled ischemia" 조건으로 수집한다(예: [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]의 122개 전향적 종양).

### FFPE proteomics 기술적 접근

**열 유도 교차결합 역전 (HIER)**

가장 널리 사용되는 전처리 방법이다. FFPE 절편 또는 커팅된 조직을 Tris-HCl(pH 9.0), HEPES(pH 7.5), 또는 citrate buffer(pH 6.0) 내에서 95–100°C로 20–120분 incubation하여 methylene bridge를 가수분해한다. 이후 urea 또는 sodium dodecyl sulfate(SDS) 용해, trypsin 소화, TMT/iTRAQ 표지, LC-MS/MS로 진행된다.

**Pressure cycling technology (PCT)**

고압(35,000–45,000 psi) 사이클을 반복 적용하여 세포막과 단백질 교차결합을 기계적으로 파괴한다. HIER보다 재현성이 높다는 보고가 있지만 장비 비용이 크다.

**On-tissue proteomics**

MALDI-MSI(Matrix-Assisted Laser Desorption/Ionization Mass Spectrometry Imaging)를 이용하여 FFPE 절편에서 직접 공간적 단백질 분포를 측정할 수 있다. 단백질 동정 심도는 낮지만 조직 내 위치 정보를 유지한다.

**Microscaled proteomics (micro-PG)**

[[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]]에서 언급된 Satpathy et al. 2020의 microscaled proteogenomics(micro-PG) 워크플로우는 코어 생검(core needle biopsy) 수준의 소량 시료에서 정량 proteomics를 가능하게 한다. FFPE와 직접 결합하면 임상 루틴 생검 시료에서 proteogenomics를 수행할 수 있는 잠재력이 있다.

### 임상 적용의 장점

**1. 기존 아카이브 활용**

전 세계 병리학 아카이브에 수십 년치 FFPE 조직 블록이 수백만 건 보관돼 있다. 후향적 코호트 연구, 드문 암종 연구, 장기 추적 연구가 가능해진다.

**2. 조직 형태 보존**

H&E 염색, IHC, ISH와 단백질 질량 분석을 동일 블록에서 순차적으로 수행하거나 인접 절편에서 병행할 수 있다. 공간 proteomics와의 결합이 용이하다.

**3. 저비용 표준 수집**

신선 냉동 조직 수집에 비해 FFPE는 특별한 저온 인프라가 필요 없어 자원이 제한된 환경에서도 대규모 코호트 구성이 가능하다.

**4. 임상 경로와의 통합**

수술실에서 생검 채취 후 표준 병리 처리를 거쳐 추가 분자 분석에 활용할 수 있다. 환자 관리 흐름을 크게 변경하지 않아도 된다.

### 임상 적용의 단점 및 한계

**1. 단백질 분해와 정량 신뢰도**

고정 시간, 포르말린 농도, 파라핀 포매 조건에 따라 단백질 분해 정도가 다르다. 오래된 블록이나 비표준 고정 조건의 조직은 단백질 정보가 크게 손실된다. Peptide 수율 및 서열 coverage가 신선 냉동 조직 대비 현저히 낮다(일반적으로 30–50% 수준).

**2. Post-translational modification 검출 저하**

Phosphoproteomics, acetylomics 등 PTM 분석은 FFPE에서 더욱 도전적이다. 포르말린이 인산화 잔기에도 교차결합을 형성하고, PTM이 분해되기 쉽기 때문이다. CPTAC 연구들의 phosphoproteome 데이터 대부분은 신선 냉동 조직에서만 얻어진다.

**3. Batch effect와 표준화 어려움**

서로 다른 병원, 병리 실험실, 고정 프로토콜에서 수집된 FFPE 블록은 체계적 기술 변이가 크다. 이를 교정하기 위한 표준화 프로토콜과 내부 참조 표준(SIL 펩타이드 등)이 필요하다.

**4. 정량적 비교의 제한**

TMT 또는 SILAC 기반 정밀 정량이 신선 냉동 조직만큼 재현성 있게 적용되기 어렵다. Label-free quantification이 주로 사용되지만 신뢰 구간이 넓다.

## 핵심 비교표

| 특성 | FFPE 조직 | 신선 냉동 조직 |
|---|---|---|
| 단백질 상태 | Methylene bridge 교차결합 존재 | 자연 상태 유지 |
| 전처리 필요성 | HIER 등 교차결합 역전 필수 | 직접 용해 가능 |
| 단백질 동정 심도 | 신선 냉동 대비 30–50% | 최대 (>10,000 단백질) |
| PTM 분석 (phospho 등) | 제한적, 신뢰도 낮음 | 표준적, 고신뢰도 |
| 아카이브 활용 | 수십 년치 후향적 코호트 가능 | 전향적 수집 필요 |
| 수집 인프라 | 표준 병리 절차, 저비용 | 냉동 보관 인프라 필요 |
| 공간 정보 보존 | MALDI-MSI, IHC 병행 용이 | 가능하나 냉동 절편 필요 |
| 배치 효과 | 크고 교정 어려움 | 상대적으로 제어 가능 |
| 임상 통합 | 높음 (기존 경로 활용) | 전향적 설계 필요 |

## 관련 논문

- [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]] — 전향적 cryopulverization 표준 수집의 중요성 강조; ERBB2 단백질 수준 교정
- [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]] — Microscaled proteogenomics 워크플로우; 임상 생검 적용 가능성 언급
- [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — Controlled ischemia 수집 기준 제시
- [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]] — 다기관 multi-cohort 배치 효과 교정 방법론

## Related pages

- [[questions/protein-rna-discordance-cancer]]
- [[cancer-study/day-07-cptac-proteogenomics]]
- [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]
