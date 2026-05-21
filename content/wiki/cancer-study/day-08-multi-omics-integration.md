---
title: "Day 8: Multi-omics 통합 — 하나의 레이어로는 부족하다"
draft: false
---

## 왜 Multi-omics인가 — 각 Omics 레이어의 한계

암은 단일 분자 레이어의 이상으로 설명되지 않는다. Genomics는 드라이버 돌연변이와 copy number variation을 드러내지만, 같은 돌연변이를 지닌 환자들 사이에서도 임상 경과가 크게 다를 수 있다. Transcriptomics는 유전자 발현의 전체적 패턴을 포착하지만, 번역 후 조절(post-translational regulation)과 단백질 활성 상태는 놓친다. Proteomics는 실제 기능 분자를 직접 측정하지만, 기술적 민감도와 정량성에 한계가 있다. Epigenomics는 DNA 메틸화와 히스톤 변형을 통해 발현 조절 메커니즘을 드러내지만, 단독으로는 세포 표현형의 완전한 그림을 그리기 어렵다.

각 omics 레이어는 암 생물학의 특정 면만을 조명하며, 서로 다른 레이어들은 상호 보완적인 정보를 담고 있다. 이것이 multi-omics 통합이 필요한 근본적 이유다. (Xu 2023)[[xu-2023-atlas-genetic-scores-predict-multi-omic]]은 genetic score — 즉, 유전체 수준의 요약 통계 — 가 여러 omics 레이어의 표현형을 동시에 예측할 수 있음을 체계적으로 보여주었다. 이는 서로 다른 분자 레이어들 사이에 구조화된 인과 관계가 존재함을 시사하며, 통합 분석의 이론적 토대를 제공한다.

## 통합 전략 — Early Fusion, Late Fusion, Intermediate Fusion

Multi-omics 데이터를 어떻게 통합할 것인가는 분석 전략의 핵심이다. 세 가지 주요 패러다임이 존재한다.

**Early fusion(조기 통합)**은 각 omics 데이터를 전처리 후 하나의 행렬로 단순 연결(concatenation)하여 분석한다. 구현이 단순하고 데이터 타입 간 직접적 상호작용을 허용한다는 장점이 있지만, 각 레이어의 스케일 차이와 노이즈 특성이 다를 경우 특정 레이어가 분석을 지배하는 문제가 발생한다. 또한 결측 데이터가 많은 경우 전체 분석이 제한된다.

**Late fusion(후기 통합)**은 각 omics 레이어를 독립적으로 분석한 뒤, 결과(예: 예측 점수, 클러스터 레이블)를 통합한다. 각 레이어의 특성에 맞는 분석 방법을 적용할 수 있고 결측 데이터에 강건하지만, 레이어 간 상호작용 정보를 통합 단계에서 포착하기 어렵다.

**Intermediate fusion(중간 통합)**은 각 레이어에서 중간 수준의 표현(latent representation)을 학습한 뒤 이를 통합하는 방식이다. Deep learning 기반 접근이 이 범주에 속하며, 레이어 간 상호작용을 학습하면서도 각 레이어의 고유 특성을 보존할 수 있다. (Ling 2025)[[ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification]]과 같은 연구가 이 전략을 활용하여 tumor microenvironment의 복합적 특성을 포착했다.

## 종양 분류에서의 Multi-omics — 아형 재정의와 예후 예측

Multi-omics 통합은 기존의 조직병리학적 분류 체계를 분자 수준에서 재정의하는 데 강력한 도구가 된다.

(Rahmann 2018)[[rahmann-2018-multiomic-medulloblastomas]]은 medulloblastoma의 multi-omics 분석을 통해 이 소아 뇌종양의 분자적 이질성을 체계적으로 규명했다. Medulloblastoma는 조직학적으로는 유사해 보이더라도 genomic, epigenomic, transcriptomic 프로파일에 따라 뚜렷이 다른 아형으로 구분되며, 각 아형은 서로 다른 발생 경로, 예후, 치료 취약성을 갖는다. DNA 메틸화 프로파일이 특히 강력한 분류자(classifier)로 기능했으며, WNT, SHH, Group 3, Group 4의 분자적 구분이 단일 omics로는 포착하기 어려운 세부 아형을 드러냈다.

난소암에서는 진화적 관점의 multi-omics 분석이 이루어졌다. (Vázquez-García 2022)[[vzquezgarca-2022-ovarian-cancer-mutational-processes-drive]]는 난소암에서 작동하는 다양한 mutational process가 어떻게 종양의 evolutionary trajectory를 형성하는지를 multi-omics 데이터로 추적했다. BRCA1/2 관련 homologous recombination deficiency(HRD)와 같은 특정 돌연변이 과정은 독특한 mutational signature를 남기며, 이는 genomic instability의 메커니즘과 치료 반응을 예측하는 중요한 바이오마커가 된다.

(Ren 2025)[[ren-2025-multi-omics-insights-molecular-signature-prognosis]]는 multi-omics 통합을 통해 암의 예후와 관련된 분자 시그니처를 발굴하는 접근을 제시했다. 단일 레이어 분석에서는 통계적 유의성을 얻지 못했던 분자 특징들이 다중 레이어 통합 맥락에서 예후와 강하게 연결되는 사례를 보여주었다. (Zhang 2025)[[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic]]는 MCMBP(MCM-binding protein)를 multi-omics 프로파일링을 통해 예후 바이오마커로 동정했다. MCMBP는 DNA 복제 라이선싱(replication licensing)에 관여하는 단백질로, 전사체와 단백질 수준의 동시 분석을 통해 그 예후적 의미가 확인되었다.

## 특정 암종의 Multi-omics 사례

### 위암과 시간적 다차원 프로파일링

(Li 2018)[[li-2018-time-resolved-multi-omic-atlas-mouse-stomach]]은 마우스 위 조직의 시간축을 따른 multi-omics 아틀라스를 구축했다. 이 연구는 위 발생 및 암화 과정에서 epigenome, transcriptome, proteome이 어떻게 조율되어 변화하는지를 시계열 분석으로 포착했다. 시간 분해능을 갖춘 multi-omics 분석은 단일 시점의 스냅샷으로는 파악할 수 없는 분자적 변화의 순서와 인과 관계를 드러낸다는 점에서 의미가 크다.

### 뇌하수체 종양의 진화하는 분류 체계

(Pugazenthi 2025)[[pugazenthi-2025-evolution-application-multi-omic-analysis-pituitary]]는 뇌하수체 종양에 대한 multi-omics 분석의 발전 과정을 체계적으로 정리했다. 뇌하수체 종양은 조직학적 분류만으로는 임상 행동을 예측하기 어려운 대표적 암종이다. Genomic, transcriptomic, epigenomic 데이터의 통합을 통해 침습성과 재발 위험을 예측하는 분자 바이오마커가 발굴되었으며, 이는 WHO 분류 체계를 보완하는 방향으로 발전하고 있다.

(Renner 2026)[[renner-2026-multi-layered-molecular-profiling-informs-diagnosis]]는 다층적 분자 프로파일링이 어떻게 임상 진단을 실질적으로 바꿀 수 있는지를 보여주었다. 단일 분자 레이어에 의존할 경우 진단이 모호한 사례들이 multi-omics 통합을 통해 명확하게 분류되었으며, 이는 치료 방향 결정에 직접적인 영향을 미쳤다.

### CAF와 줄기성 기반 분류

(Ling 2025)[[ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification]]는 cancer-associated fibroblast(CAF)의 줄기성(stemness)이 종양 분류의 새로운 기준이 될 수 있음을 multi-omics로 규명했다. CAF는 종양 미세환경에서 암세포의 증식, 침윤, 약물 내성을 촉진하는 핵심 구성 요소다. Multi-omics 분석은 CAF의 이질성을 분자 수준에서 세분화하고, stemness 상태가 높은 CAF 아형이 예후와 강하게 연관됨을 밝혔다.

## 다차원 프로파일링이 드러내는 새로운 바이오마커

Multi-omics 통합의 최종 목표 중 하나는 임상적으로 유용한 바이오마커의 발굴이다. 이 과정에서 single-cell 해상도의 multi-omics는 특히 강력하다.

(Yao 2023)[[yao-2023-single-cell-discovery-multiomic-characterization-therapeutic]]는 single-cell multi-omics를 통해 암세포 집단의 이질성을 세포 수준에서 포착하고, 치료 표적으로 활용 가능한 분자적 취약점을 동정했다. Bulk 분석에서는 주요 세포 집단의 신호에 묻혀버리는 소수 세포 집단(예: 치료 내성을 초래하는 암 줄기 세포)이 단일 세포 분석에서 드러난다.

(Schöpf 2024)[[schpf-2024-multi-omic-functional-analysis-classification-treatment]]는 multi-omics 기반 기능 분류가 치료 전략 결정에 어떻게 활용될 수 있는지를 제시했다. 단순한 분자 아형 분류를 넘어, 특정 분자 경로의 활성 상태를 multi-omics로 직접 측정하여 해당 경로를 표적으로 하는 치료의 반응을 예측하는 접근이다. 이는 multi-omics 통합이 분류 도구에서 치료 예측 도구로 진화하는 방향을 보여준다.

## 결론

Multi-omics 통합은 암 생물학의 복잡성을 다루는 데 있어서 선택이 아닌 필수가 되고 있다. 단일 omics 레이어로는 설명되지 않는 임상적 이질성, 치료 내성, 예후 차이가 여러 레이어의 통합에 의해 해소되는 사례가 반복적으로 보고되고 있다. 기술적 발전으로 single-cell 해상도에서의 multi-omics가 가능해지고, AI 기반 통합 방법론이 정교해지면서 분자적 복잡성을 임상적 의사결정으로 전환하는 능력이 빠르게 향상되고 있다. 향후 과제는 대규모 환자 코호트에서의 검증과, 이질적인 분자 데이터를 임상 현장에서 실시간으로 통합하는 인프라 구축이다.

## 참고문헌

- [[rahmann-2018-multiomic-medulloblastomas|Rahmann 2018]] — Multi-omics characterization of medulloblastoma
- [[vzquezgarca-2022-ovarian-cancer-mutational-processes-drive|Vázquez-García 2022]] — Mutational processes driving ovarian cancer evolution
- [[li-2018-time-resolved-multi-omic-atlas-mouse-stomach|Li 2018]] — Time-resolved multi-omic atlas of mouse stomach
- [[xu-2023-atlas-genetic-scores-predict-multi-omic|Xu 2023]] — Genetic scores predict multi-omic traits
- [[yao-2023-single-cell-discovery-multiomic-characterization-therapeutic|Yao 2023]] — Single-cell multi-omic discovery of therapeutic targets
- [[pugazenthi-2025-evolution-application-multi-omic-analysis-pituitary|Pugazenthi 2025]] — Multi-omics in pituitary tumor classification
- [[ling-2025-multi-omic-analysis-reveals-caf-stemness-governed-classification|Ling 2025]] — CAF stemness-governed tumor classification
- [[ren-2025-multi-omics-insights-molecular-signature-prognosis|Ren 2025]] — Multi-omics molecular signature and prognosis
- [[renner-2026-multi-layered-molecular-profiling-informs-diagnosis|Renner 2026]] — Multi-layered molecular profiling for diagnosis
- [[schpf-2024-multi-omic-functional-analysis-classification-treatment|Schöpf 2024]] — Multi-omic functional classification for treatment
- [[zhang-2025-multiomics-profiling-identifies-mcmbp-prognostic|Zhang 2025]] — MCMBP as a prognostic biomarker via multi-omics
