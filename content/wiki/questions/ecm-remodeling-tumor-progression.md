---
title: "세포외기질(ECM) 리모델링이 종양 진행과 전이에 어떤 역할을 하는가?"
type: question
status: active
source_files:
  - cancer/hanahan-2022-hallmarks-cancer-new-dimensions.md
  - cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers.md
  - cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers.md
  - cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell.md
  - cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.md
  - cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma.md
  - cancer-study/day-08-cancer-hallmarks-tme-computational.md
updated: 2026-05-19
---

# 세포외기질(ECM) 리모델링이 종양 진행과 전이에 어떤 역할을 하는가?

## 짧은 답변

세포외기질(Extracellular Matrix, ECM)은 단순한 구조적 지지체가 아니라 종양 세포의 증식, 침윤, 혈관신생, 면역 회피를 조율하는 동적 신호 플랫폼이다. 종양에서 ECM 리모델링은 matrix metalloproteinase(MMP), lysyl oxidase(LOX) family, 그리고 cancer-associated fibroblast(CAF)에 의해 구동되며, 전이 전 niche를 형성하고 치료 내성에 기여한다. CPTAC pan-cancer proteogenomics에서 ECM 관련 단백질 클러스터(s4, s5)가 여러 암종에 걸쳐 공통적으로 나타난다.

## 상세 답변

### ECM의 구성과 종양에서의 변화

정상 ECM은 collagen I/IV/VI, fibronectin, laminin, proteoglycan(heparan sulfate, versican, perlecan), hyaluronic acid, 그리고 다수의 matricellular protein으로 구성된다. 종양에서는 desmoplasia(섬유증 과증식)가 발생하여 ECM의 조성과 물리적 성질이 근본적으로 바뀐다:

- **Collagen 교차결합 증가**: PLOD2(procollagen-lysine,2-oxoglutarate 5-dioxygenase 2)가 collagen을 교차결합시켜 기질 경도(stiffness)를 높인다. [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]에서 PLOD2는 ccRCC, LUAD, PDAC 전체에서 높은 풍부도가 유의미하게 불량한 전체 생존과 연관된 pan-cancer 예후 바이오마커로 보고됐다.
- **기질 경도 증가**: Collagen fiber 밀도와 cross-linking이 증가하면 integrin 신호(FAK-Src-Rac1 축)를 활성화하여 세포 이동과 침윤을 촉진한다.
- **ECM 조성 변화**: 정상적인 basement membrane이 degradation되고 fibronectin, tenascin-C 등 침윤을 촉진하는 성분이 과발현된다.

### ECM 리모델링의 주요 효소 시스템

**Matrix metalloproteinases (MMPs)**

MMP 계열은 collagen, gelatin, laminin, fibronectin을 분해하여 종양 세포가 기저막을 통과하는 것을 가능하게 한다. MMP2, MMP9(gelatinase), MMP14(MT1-MMP)는 폐암, 유방암, 교모세포종에서 과발현되며 불량 예후와 연관된다. [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]]의 mesenchymal GBM에서 MMP14, FLT1, ENG, SERPINE1이 hypoxia/angiogenesis 하류에서 상향조절된다.

[[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]]에서 KRAS 변이 LUAD는 extracellular glycoprotein과 collagen 풍부화가 특징이며, 이것이 pancreatic cancer의 dense stroma와 유사한 KRAS-ECM 연관성을 시사한다.

**Lysyl oxidase (LOX) family**

LOX, LOXL2, LOXL4가 collagen과 elastin을 산화적으로 교차결합시켜 기질을 경화시킨다. LOX는 원발 종양 부위에서 분비되어 혈행을 통해 전이 예정 장기에 도달하여 pre-metastatic niche를 형성한다. Fibronectin과 함께 bone marrow derived cell(BMDC)을 모집하여 종양 세포 정착 환경을 준비한다.

**ADAMTS (A disintegrin and metalloproteinase with thrombospondin motifs)**

Aggrecan, versican 등 proteoglycan을 분해하여 ECM의 viscoelastic 성질을 변화시키고 성장인자의 방출과 이동성을 조절한다.

### ECM과 종양 미세환경(TME) 상호작용

**Cancer-associated fibroblast (CAF)**

CAF는 ECM 리모델링의 핵심 세포 행위자다. TGF-β, PDGF, FGF 신호를 받아 활성화된 CAF는 대량의 collagen I/III, fibronectin, VEGF, IL-6를 분비한다. [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]]의 EMT-Enriched(EMT-E) LSCC 아형은 높은 xCell fibroblast score와 PDGFRB/ROR2 RTK 활성화를 특징으로 하며, CAF-종양 상피 공동 발현이 관찰된다. Hanahan의 2022 hallmarks 업데이트[[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]에서 EMT 회로가 비돌연변이 후성유전 재프로그래밍과 결합하여 지속된다는 점이 강조된다.

**면역 세포 침윤 조절**

ECM은 물리적 장벽으로 작용하여 CD8+ T cell의 종양 내 침투를 방해한다. Dense desmoplastic ECM은 "immune-excluded" 표현형을 만든다. 반면 matrix degradation 산물(예: hyaluronic acid 조각, collagen 펩타이드)은 toll-like receptor(TLR) 신호를 통해 염증을 촉진할 수 있다.

**Mechanosensing과 신호 전달**

높은 기질 경도는 YAP/TAZ(Hippo pathway의 효과인자) 핵이동을 촉진한다. [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]의 pan-cancer 클러스터 D는 high EMT, ECM 활성을 특징으로 불량 생존과 연관된다. VEGFA-VEGFR2 신호가 ECM 재구성 클러스터(C: smooth muscle, ECM; KRAS 풍부)에서 두드러진다.

### Pan-cancer Proteome 아형에서의 ECM 패턴

[[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]]의 2,002개 종양 분석에서 11개 pan-cancer proteome 아형 중 두 아형이 ECM과 stromal 특성을 공유한다:

- **s4**: Tumor stroma, ECM, cell adhesion 풍부
- **s5**: Tumor stroma, collagen VI, B cells, complement 풍부

이 두 아형은 특정 암종에 국한되지 않고 여러 암종에 걸쳐 나타나며, ECM 기반 종양 행동이 조직 특이성을 초월한 공통 원칙임을 시사한다.

### 전이와 pre-metastatic niche 형성

ECM 리모델링은 전이의 다단계 과정 각각에서 역할을 한다:

1. **Local invasion**: MMP 분해로 기저막 통과
2. **Intravasation**: 혈관 내피의 junction 단백질 disruption
3. **Extravasation**: 표적 장기의 내피 접착 및 통과
4. **Colonization**: 전이 예정 장기에서 LOX-crosslinked fibronectin + BMDC 모집으로 niche 사전 형성

Tenascin-C, periostin, fibronectin은 전이 niche에서 LGR5+ 암 줄기세포의 생존 신호(Wnt, Notch)를 증폭시키는 ECM 리간드로 작용한다.

### 치료적 함의

- **MMP 억제제**: 전임상에서는 유망하지만 임상 시험에서 일관되게 실패. ECM 분해가 항종양 기능도 한다는 역설(면역 세포 접근 허용)이 원인 중 하나.
- **LOX/LOXL2 억제제**: Simtuzumab(anti-LOXL2)은 췌장암, 간섬유증에서 임상 시험됐으나 효과 부족.
- **CAF 표적**: FAP(fibroblast activation protein) 표적 약물, TGF-β 차단이 병합 요법으로 시험 중.
- **Mechanotherapy**: ECM 경도 감소를 위한 pirfenidone, losartan(콜라겐 합성 억제)이 desmoplastic tumor와 면역치료 병합에서 연구 중.

## 핵심 비교표

| ECM 성분/효소 | 기능 | 종양 진행에서의 역할 | 치료적 접근 |
|---|---|---|---|
| MMP2/9/14 | Collagen/gelatin 분해 | 기저막 파괴, 혈관신생 | 억제제 (임상 실패 多) |
| LOX/LOXL2 | Collagen 교차결합 | 기질 경화, pre-metastatic niche | Simtuzumab (임상 시험) |
| PLOD2 | Collagen 교차결합 | 범암 불량 예후 바이오마커 | 연구 단계 |
| Fibronectin | 세포-기질 접착 | Pre-metastatic niche 형성 | — |
| Tenascin-C | Matricellular | 전이 niche 줄기세포 신호 증폭 | — |
| Collagen I/VI | 구조적 지지 | Desmoplasia, immune exclusion | CAF 표적 요법 |
| Hyaluronic acid | 물리적 장벽 | CD44 매개 종양 증식, T cell 배제 | Hyaluronidase (병합) |
| YAP/TAZ | ECM 경도 센서 | Hippo pathway 비활성화 → 증식 | TEAD 억제제 |

## 관련 논문

- [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]] — ECM remodeling이 EMT 및 표현형 가소성 hallmark와 연결
- [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]] — PLOD2 pan-cancer 예후 바이오마커; ECM 클러스터 C/D
- [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]] — Proteome 아형 s4/s5의 ECM/stromal 특성
- [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]] — EMT-Enriched LSCC에서 CAF-ECM 축
- [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]] — GBM mesenchymal 아형의 ECM/angiogenesis 연결
- [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — KRAS 변이 LUAD에서 ECM glycoprotein 풍부화

## Related pages

- [[questions/autophagy-immune-evasion-cancer]]
- [[cancer-study/day-08-cancer-hallmarks-tme-computational]]
- [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]
- [[concepts/spatial-ai-for-cancer]]
