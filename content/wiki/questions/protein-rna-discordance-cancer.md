---
title: "Proteogenomics에서 단백질과 RNA 발현이 왜 불일치하고, 이것이 임상적으로 왜 중요한가?"
type: question
status: active
source_files:
  - cancer/mertins-2016-proteogenomics-connects-somatic-mutations-signalling.md
  - cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis.md
  - cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers.md
  - cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers.md
  - cancer/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape.md
  - cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.md
  - cancer-study/day-07-cptac-proteogenomics.md
updated: 2026-05-19
---

# Proteogenomics에서 단백질과 RNA 발현이 왜 불일치하고, 이것이 임상적으로 왜 중요한가?

## 짧은 답변

단백질과 RNA 발현의 불일치(mRNA-protein discordance)는 post-transcriptional regulation, ubiquitin-proteasome 매개 단백질 분해, 번역 조절 등 다층적 기전에 의해 발생한다. CPTAC 연구들은 copy number alteration(CNA)의 trans-effect 중 mRNA에서는 68%가 유의미하지만 단백질 수준에서는 13%만 전달된다는 사실을 일관되게 보여준다. 이 간극은 임상적으로 치료 반응 예측 바이오마커 선택과 약물 표적 발굴에 직접 영향을 미친다.

## 상세 답변

### 불일치의 주요 기전

**1. CNA buffering (복제수 완충)**

Copy number gain이 있어도 단백질 수준이 비례해서 증가하지 않는 현상이다. [[cancer/mertins-2016-proteogenomics-connects-somatic-mutations-signalling]]에서 77개 TCGA 유방암 종양 분석 결과, CNA cis-effect는 mRNA 수준에서 64% 유의미하지만 단백질 수준에서는 31%만 전달된다. Trans-effect는 더 심한 완충을 보여 mRNA에서 68%이지만 단백질에서는 단 13%만 남는다. [[cancer/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape]]는 높은 CNA 완충을 받는 단백질들이 bortezomib 처리 시 ubiquitin 축적을 보인다는 것을 실험적으로 확인하여 ubiquitin-proteasome system(UPS)이 주요 완충 기전임을 입증했다.

**2. Post-transcriptional regulation**

mRNA 안정성 조절(microRNA, RNA-binding protein), 번역 효율 차이, 코돈 사용 편향 등이 단백질 수준을 mRNA와 독립적으로 결정한다. [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]]의 2,002개 종양 compendium 분석에서 유전체 전반의 median Pearson r은 0.40에 불과하다. 특히 ribosome, oxidative phosphorylation, DNA repair, cell cycle 관련 유전자는 낮은 mRNA-단백질 상관을 보이는 반면, cell adhesion과 fatty acid metabolism은 높은 상관을 보인다.

**3. Oncogenic missense mutation의 단백질 안정성 효과**

[[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]에서 STK11, PBRM1, PTEN의 oncogenic missense mutation이 단백질 풍부도 감소와 연관된다는 사실이 발견됐다. 이는 RNA 수준 분석만으로는 놓치는 proteomics 고유의 발견이다. 돌연변이 단백질의 구조적 불안정화가 분해를 촉진하는 것으로 해석된다.

**4. TP53 전사 표적의 단절**

같은 연구에서 TP53 mutation의 전사 표적 signature는 mRNA 수준에서는 뚜렷하게 검출되지만 단백질 수준에서는 검출되지 않는다는 역설적 발견이 보고됐다. 27개 p53 전사 표적 중 17개는 mRNA에서 음의 상관을 보이지만 단백질에서는 9개만 그렇다.

### 임상적 중요성

**ERBB2 진단 상태 교정**

[[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]에서 가장 직접적인 임상 함의가 제시된다. ERBB2 증폭이 있지만 단백질 수준이 비증폭 종양 분포 내에 있는 "pseudo-ERBB2+" 케이스가 122개 전향적 종양 중 2건(17%)에서 확인됐다. 이 환자들은 trastuzumab 등 anti-ERBB2 치료가 효과 없을 가능성이 높다. PAM50 HER2E 분류와 proteomics 기반 ERBB2 분류가 15건 중 7건에서 불일치했다.

**Rb 단백질 수준과 CDK4/6 억제제 반응 예측**

RB1 유전형(mutation/deletion)보다 Rb 단백질 수준이 palbociclib 반응을 더 잘 예측한다. RB1 wild-type이지만 Rb 단백질이 낮은 cell line은 CDK4/6 억제제 내성을 보인다. 단백질 정량이 유전체 정보를 초월하는 임상 예측 정보를 제공한다.

**Phosphoproteomics 고유의 치료 표적 발굴**

[[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]]에서 PTPN11 Y62 과인산화는 EGFR 변이 LUAD에서만 발견되는데, RNA 또는 단백질 수준에서는 전혀 차이가 없다. 이는 phosphoproteomics 없이는 완전히 놓치는 actionable 표적이다. 마찬가지로 STK11 변이 종양의 neutrophil degranulation 면역억제 신호는 단백질 수준에서만 보인다.

**Kinase outlier와 약물 재배치**

Phosphoproteomics 기반 kinase outlier 분석(BlackSheep 등)이 각 하위 아형의 hyperphosphorylated kinase를 식별하여 약물 재배치 가설을 제공한다. 이 정보는 mRNA 분석만으로는 접근 불가능하다.

## 핵심 비교표

| 측면 | mRNA 분석 | Proteomics/Phosphoproteomics |
|---|---|---|
| CNA trans-effect 검출 | 68% 유의미 | 13%만 전달 (완충) |
| mRNA-단백질 중앙값 상관 (pan-cancer) | — | Pearson r ≈ 0.40 |
| TP53 전사 표적 검출 | 가능 | 대부분 미반영 |
| ERBB2 임상 상태 | 유전자 증폭 기반 | 단백질 수준으로 교정 가능 |
| CDK4/6i 반응 예측 | RB1 유전형 | Rb 단백질 수준이 우수 |
| 치료 표적 고유 발굴 | 제한적 | PTPN11-Y62, SOS1-S1161 등 phospho 전용 |
| 아형 분류 | PAM50, 전사체 기반 | 추가 아형 발견 (EMT 클러스터, 기질 농축 아형 등) |

## 관련 논문

- [[cancer/mertins-2016-proteogenomics-connects-somatic-mutations-signalling]] — mRNA-단백질 불일치의 원칙적 정립, CNA buffering 기전 규명
- [[cancer/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape]] — CNA 완충과 UPS, 비코딩 neoantigen 발굴
- [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]] — ERBB2 임상 교정, Rb 단백질 CDK4/6i 예측
- [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]] — 2,002 종양 compendium; 범암 불일치 패턴
- [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]] — Oncogenic missense mutation의 단백질 안정성 효과
- [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — PTPN11 Y62: phospho 전용 치료 표적

## Related pages

- [[cancer-study/day-07-cptac-proteogenomics]]
- [[questions/ffpe-proteomics-clinical-application]]
- [[concepts/single-cell-methods]]
