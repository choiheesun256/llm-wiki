---
title: "Day 9: Spatial Transcriptomics — 공간이 말해주는 것"
draft: false
---

## 왜 공간 정보가 필요한가

암 생물학의 핵심 질문 중 하나는 "어떤 세포가 존재하는가"가 아니라 "어떤 세포가 어디에, 어떤 이웃과 함께 존재하는가"이다. Bulk RNA sequencing은 조직 전체의 평균 발현 프로파일을 제공하지만, 그 안에 존재하는 세포 유형의 다양성과 공간적 배치를 완전히 소거한다. Single-cell RNA sequencing(scRNA-seq)은 이 문제를 부분적으로 해결했지만, 조직을 단일세포로 해리(dissociation)하는 과정에서 세포의 위치 정보는 사라진다. 세포는 진공 속에 존재하지 않는다. 종양 내 면역세포의 기능은 그것이 종양 중심부에 위치하는지, 침윤 경계면(invasive margin)에 위치하는지, 아니면 기질(stroma) 내에 존재하는지에 따라 근본적으로 달라진다.

Spatial transcriptomics(공간 전사체학)는 세포의 유전자 발현 정보를 조직 내 물리적 좌표와 함께 측정하는 기술군이다. 이를 통해 연구자들은 세포 유형의 공간적 분포, 세포 간 상호작용(cell-cell interaction), 그리고 microenvironment의 구조적 조직화를 직접 관찰할 수 있게 되었다.

---

## 주요 기술 플랫폼

Spatial transcriptomics 기술은 크게 두 가지 접근법으로 분류된다: **imaging-based** 방법과 **sequencing-based** 방법이다.

### Imaging-based: FISH 기반 기술

**MERFISH**(Multiplexed Error-Robust Fluorescence In Situ Hybridization)와 **seqFISH+** 는 형광 in situ hybridization 원리를 확장하여 수백~수천 개의 유전자를 단일세포 해상도로 동시에 측정한다. 각 유전자에 고유한 이진(binary) 코드를 할당하고, 여러 라운드의 형광 이미징을 통해 각 전사체의 위치를 pixel 단위에서 직접 시각화한다. 이 접근법은 단일세포 이하(subcellular) 해상도를 제공하며, 세포 내 mRNA의 분포까지 추적할 수 있다는 장점이 있다.

**10x Xenium**은 이 원리를 상업적으로 구현한 플랫폼으로, FFPE(formalin-fixed paraffin-embedded) 조직 절편에서도 작동한다. Xenium은 탐침(probe) 간 spillover 신호가 발생할 수 있으며, [[bilous-2026-xenium-split-spillover|Bilous 2026]]은 이 spillover 문제를 보정하는 계산적 방법론을 제시했다. 또한 효율적인 codebook 설계—어떤 유전자 패널을 어떤 인코딩 전략으로 측정할 것인가—는 기술의 성능을 크게 좌우하며, [[hemminger-2026-cipher-codebook-design|Hemminger 2026]]은 이 codebook 설계 최적화를 다룬다.

### Sequencing-based: 어레이 기반 기술

**10x Visium**은 포획 올리고뉴클레오타이드(capture oligonucleotide)가 격자 패턴으로 코팅된 슬라이드 위에 조직 절편을 올려 전사체를 캡처한다. 각 spot의 크기는 약 55 μm로, 하나의 spot에 평균 1~10개의 세포가 포함되어 있어 단일세포 해상도를 제공하지 않는다. 이 점이 deconvolution 분석이 필요한 이유다.

**Slide-seq v2** 는 직경 ~10 μm의 바코드화된 비드를 무작위로 배치하여 단일세포 수준에 가까운 해상도를 달성했다. **HDST**(High-Definition Spatial Transcriptomics)도 유사한 접근법으로 2 μm 해상도를 구현했다.

[[rademacher-2025-comparison-spatial-transcriptomics-technologies-using|Rademacher 2025]]는 여러 플랫폼을 동일한 조직 샘플에 적용하여 각 기술의 유전자 검출 효율, 해상도, 노이즈 특성을 체계적으로 비교했다. 이 연구는 실험 목적에 따른 플랫폼 선택의 기준을 제공한다: 고해상도 단백질 공동발현 분석에는 imaging-based 방법이, 전체 전사체 수준의 탐색에는 sequencing-based 방법이 유리하다.

---

## Computational Methods

### Deconvolution

Visium처럼 spot 단위로 데이터를 생성하는 기술에서는 각 spot의 발현 프로파일이 여러 세포 유형의 혼합을 반영한다. **Deconvolution**은 이 혼합 신호에서 각 세포 유형의 비율을 추정하는 계산적 문제다.

[[ma-2022-spatially-informed-cell-type-deconvolution-spatial|Ma 2022]]는 scRNA-seq 참조 데이터를 활용하여 공간 전사체 데이터의 세포 유형 구성을 추정하는 방법론을 제시했다. 이 접근법은 단순히 각 spot을 독립적으로 처리하는 것이 아니라, 인접 spot 간의 공간적 연속성 prior를 도입하여 추정 정확도를 높인다. 이웃 spot들은 유사한 세포 구성을 공유할 가능성이 높다는 생물학적 직관을 모델에 반영한 것이다.

### Spatial Clustering

전통적인 scRNA-seq 클러스터링은 발현 유사성만을 기반으로 세포를 그룹화한다. 공간 전사체학에서는 발현 패턴과 물리적 위치를 동시에 고려하는 **spatial clustering**이 가능하다. [[long-2023-spatially-informed-clustering-integration-deconvolution|Long 2023]]은 공간 정보를 통합하는 클러스터링 방법론을 체계적으로 비교하고 평가했다. 공간 정보가 있을 때 생물학적으로 의미 있는 도메인—예컨대 종양 중심부, 침윤 경계, 정상 인접 조직—을 더 정확하게 식별할 수 있다.

### Cell-Cell Interaction 및 Multicellular Motif

세포 간 리간드-수용체 상호작용을 공간 좌표에서 추론하는 방법들도 발전했다. [[an-2026-spatialquery-multicellular-motifs|An 2026]]은 단순한 쌍별(pairwise) 상호작용을 넘어, 3개 이상의 세포 유형이 반복적으로 구성하는 **multicellular spatial motif**를 대규모 공간 전사체 데이터에서 식별하는 SpatialQuery 프레임워크를 제시했다. 이러한 multicellular motif는 단순한 세포 유형 마커보다 더 강력한 기능적 단위를 나타낼 수 있다.

### scRNA-seq 통합

공간 데이터의 약점—낮은 유전자 검출 수—을 보완하기 위해 scRNA-seq의 풍부한 전사체 정보를 공간 좌표에 '매핑'하는 통합 접근법이 필수적이다. [[moncada-2020-integrating-microarray-based-spatial-transcriptomics-single-cell|Moncada 2020]]은 spatial transcriptomics 어레이 데이터와 scRNA-seq를 최초로 통합 분석한 선구적 연구로, 각 spatial spot에 세포 유형 정체성을 부여하는 방법론의 토대를 닦았다.

[[chang-2026-scigma-spatial-multiomics|Chang 2026]]은 전사체 정보에 더해 chromatin accessibility, 단백질 발현 등 다중 분자 레이어를 공간 좌표에서 통합하는 **spatial multi-omics** 접근법을 다룬다.

---

## 공간 전사체학이 드러내는 TME 구조

Tumor microenvironment(TME)는 암세포, 면역세포, 기질세포(fibroblast, endothelial cell), 그리고 세포외기질(ECM)이 복잡하게 얽힌 생태계다. 공간 전사체학은 이 생태계의 구조적 조직화를 전례 없는 정밀도로 밝혀냈다.

**면역 니치(immune niche)**의 개념이 공간 데이터를 통해 구체화되었다. 특정 면역세포 유형들—예를 들어 CD8+ T 세포와 CXCL13+ helper T 세포, 그리고 특정 수지상세포 아형—이 공간적으로 함께 집적(co-localization)되어 기능적 단위를 형성한다. 이 niched 구조는 scRNA-seq만으로는 포착하기 어렵다.

[[nirmal-2022-spatial-landscape-progression-immunoediting-primary|Nirmal 2022]]는 melanoma의 진행 단계에 따른 면역편집(immunoediting) 과정을 공간적으로 추적했다. 초기 병변에서 후기 병변으로 진행할수록 면역세포의 공간적 배치, 종양-면역 인터페이스의 구조, 그리고 면역 억제 미세환경의 형성이 어떻게 변화하는지를 landscape 수준에서 보여주었다. 특히, T 세포의 exhaustion 상태가 단순히 세포 자율적(cell-autonomous)이지 않고 그 세포가 위치한 공간적 맥락—주변에 어떤 세포가 있는가—에 의해 강하게 규정됨을 시사했다.

[[zhang-2022-spatial-transcriptomic-landscape-non-small-cell|Zhang 2022]]는 non-small cell lung cancer(NSCLC)의 공간 전사체 지형도를 작성했다. 종양 내 구역에 따라 면역세포 침윤 정도, 암세포의 전사 상태, 기질 활성화 정도가 판이하게 달랐으며, 이 이질성이 치료 반응과 연관됨을 보였다.

**종양-기질 인터페이스(tumor-stroma interface)**는 암의 침윤과 전이를 이해하는 데 핵심적 공간이다. 이 경계면에서는 암세포와 cancer-associated fibroblast(CAF) 간의 paracrine 신호 교환이 일어나며, 면역세포 배제(immune exclusion) 또는 모집이 결정된다. 공간 데이터는 이 인터페이스를 수십 마이크론 단위의 정밀도로 분해하여 분석할 수 있게 한다.

---

## 임상 응용

### 예후 예측 바이오마커

전통적인 병리학적 지표(Gleason score, tumor grade 등)는 조직의 형태를 기반으로 하며, 분자적 맥락을 통합하지 못한다. 공간 전사체학은 세포 유형 구성, 기능 상태, 공간적 조직화를 종합한 **공간 분자 바이오마커**를 제공한다. 예를 들어, 면역 세포가 종양 내부에 침투(inflamed phenotype)하는지 아니면 종양 주변에만 국한(excluded phenotype)되는지는 면역치료 반응을 예측하는 강력한 인자다. 이 구분은 공간 데이터 없이는 불가능하다.

### 면역치료 반응 예측

Checkpoint inhibitor 치료에 반응하는 환자는 종양 내 T 세포 침윤, 특히 CXCL13+ exhausted T 세포와 CXCR5+ B 세포가 형성하는 **tertiary lymphoid structure(TLS)**를 갖는 경향이 있다. TLS는 공간적으로 정의되는 구조체로, 그 존재를 확인하기 위해서는 공간 정보가 필수적이다. 공간 전사체학은 TLS의 성숙도, 세포 구성, 기능 상태를 분자 수준에서 정량화할 수 있게 한다.

### 신약 개발과 치료 표적 발굴

특정 공간 맥락에서만 발현되거나 활성화되는 유전자/경로는 기존 bulk 분석에서는 검출되기 어렵다. 공간 전사체학을 통해 발견된 인터페이스 특이적 분자들은 새로운 치료 표적이 될 수 있다.

---

## 기술적 한계와 미래

현재 기술들은 해상도, 처리량, 유전자 커버리지 사이에서 균형을 이루어야 하는 트레이드오프에 직면해 있다. Imaging-based 방법은 해상도가 높지만 측정 가능한 유전자 수(수백~수천 개)에 제한이 있다. Sequencing-based 방법은 전체 전사체를 측정하지만 해상도가 낮다. 3D 공간 전사체학(연속 절편의 통합), 공간 후성유전체학(ATAC-seq 공간화), 공간 단백질체학(CODEX, IMC)과의 통합이 다음 단계의 과제다.

---

## 참고문헌

- [[moncada-2020-integrating-microarray-based-spatial-transcriptomics-single-cell|Moncada 2020]] — ST + scRNA-seq 통합 분석의 초기 연구
- [[nirmal-2022-spatial-landscape-progression-immunoediting-primary|Nirmal 2022]] — Melanoma 면역편집의 공간적 landscape
- [[long-2023-spatially-informed-clustering-integration-deconvolution|Long 2023]] — 공간 인식 클러스터링 방법론 비교
- [[ma-2022-spatially-informed-cell-type-deconvolution-spatial|Ma 2022]] — 공간 전사체 세포 유형 deconvolution
- [[zhang-2022-spatial-transcriptomic-landscape-non-small-cell|Zhang 2022]] — NSCLC 공간 전사체 지형도
- [[rademacher-2025-comparison-spatial-transcriptomics-technologies-using|Rademacher 2025]] — 플랫폼 간 기술 비교
- [[bilous-2026-xenium-split-spillover|Bilous 2026]] — Xenium spillover 보정
- [[an-2026-spatialquery-multicellular-motifs|An 2026]] — Multicellular spatial motif 식별
- [[hemminger-2026-cipher-codebook-design|Hemminger 2026]] — Spatial codebook 설계 최적화
- [[chang-2026-scigma-spatial-multiomics|Chang 2026]] — Spatial multi-omics 통합
