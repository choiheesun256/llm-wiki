---
title: "Day 14: Bioinformatics 도구들 — 데이터에서 생물학으로"
draft: false
---

## 왜 Bioinformatics가 필수인가

현대 암 생물학 연구는 본질적으로 데이터 과학의 문제이기도 하다. 단일 암 환자 샘플 하나에서 수만 개의 유전자 발현값, 수십만 개의 인산화 펩타이드 신호, 수백만 개의 단일 세포 시퀀싱 리드가 동시에 생성된다. 이러한 고차원 데이터(high-dimensional data)는 전통적인 실험적 방법론만으로는 해석이 불가능하며, 통계적으로 견고하고 생물학적으로 의미 있는 패턴을 추출하기 위해 체계적인 계산 도구가 반드시 필요하다.

Bioinformatics 도구의 역할은 단순한 데이터 처리를 넘어선다. 각 도구는 특정 생물학적 질문에 답하기 위해 설계된 통계 모델과 알고리즘을 내포하고 있으며, 어떤 도구를 어떤 맥락에서 사용하느냐에 따라 동일한 데이터로부터 전혀 다른 생물학적 결론이 도출될 수 있다. 따라서 bioinformatics 도구를 이해한다는 것은 단순히 소프트웨어 사용법을 익히는 것이 아니라, 그 도구가 기반하는 통계적 가정과 생물학적 모델을 이해하는 것이다.

---

## Differential Expression 분석의 통계적 기초 — limma와 Empirical Bayes

유전체 연구에서 가장 기본적인 질문 중 하나는 "어떤 유전자가 두 조건 사이에서 유의미하게 다르게 발현되는가?"이다. 이를 **differential expression (DE) 분석**이라 하며, 수만 개의 유전자를 동시에 검정해야 한다는 점에서 고전적인 통계 검정법을 그대로 적용하는 것은 적절하지 않다.

### 고전적 t-검정의 한계

각 유전자에 대해 독립적으로 t-검정을 수행하면 두 가지 문제가 발생한다. 첫째, 샘플 수가 적을 때(예: 각 그룹 n=3) 분산 추정치가 매우 불안정해진다. 분산이 우연히 작게 추정된 유전자가 실제로는 생물학적 의미가 없어도 극단적인 t-통계량을 가지게 된다. 둘째, 수만 번의 다중 검정(multiple testing)으로 인한 false positive 문제가 심각해진다.

### Empirical Bayes 접근법

[[smyth-2004-linear-models-empirical-bayes-methods|Smyth (2004)]]는 이 문제를 해결하기 위해 **empirical Bayes** 프레임워크를 도입했다. 핵심 아이디어는 각 유전자의 분산을 독립적으로 추정하지 않고, 모든 유전자에 걸친 분산 분포로부터 정보를 빌려와(borrowing information) 개별 분산 추정치를 안정화하는 것이다.

구체적으로, 각 유전자 $g$의 잔차 분산 $\sigma_g^2$은 inverse chi-squared 사전 분포(prior distribution)를 따른다고 가정한다. 이 사전 분포의 하이퍼파라미터는 데이터 자체로부터 경험적으로 추정된다 — 이것이 "empirical Bayes"라는 이름의 유래이다. 이로부터 도출된 **moderated t-statistic**은 각 유전자의 추정 분산과 전체 유전자 풀의 평균 분산을 가중 결합하여 계산된다. 결과적으로 분산이 불안정하게 추정된 유전자들은 전체 평균 쪽으로 수축(shrinkage)되어, 소표본에서도 robust한 검정 결과를 얻을 수 있다.

### limma 패키지

이 이론적 프레임워크를 구현한 R 패키지가 **limma**이다. [[ritchie-2015-limma|Ritchie et al. (2015)]]는 limma가 microarray에서 출발하여 RNA-seq, proteomics, methylation 등 다양한 고차원 생물의학 데이터에 적용 가능함을 보였다. limma는 **linear model** 기반으로 복잡한 실험 설계(paired design, batch effects, 다중 비교)를 유연하게 처리할 수 있다. `voom` 함수를 통해 count 기반 RNA-seq 데이터의 이분산성(heteroscedasticity)을 처리하며, `duplicateCorrelation`으로 반복 측정 데이터의 상관 구조를 모델링할 수 있다.

---

## Pathway 분석 — Reactome과 Enrichment Analysis의 원리

DE 분석으로 수백 개의 유의미한 유전자 목록을 얻었다고 하더라도, 개별 유전자 수준에서 생물학적 의미를 해석하는 것은 매우 어렵다. **Pathway 분석(pathway analysis)**은 이러한 유전자 목록을 알려진 생물학적 경로와 연결하여 상위 수준의 생물학적 인사이트를 도출하는 방법이다.

### Reactome 지식 베이스

[[orlicmilacic-2023-reactome-pathway-knowledgebase-2024|Orlić-Milačić et al. (2023)]]이 관리하는 **Reactome**은 인간 생물학의 반응 및 경로를 큐레이션한 오픈 소스 데이터베이스이다. 단순한 유전자 집합(gene set)이 아니라 반응물, 생성물, 효소, 반응 방향성을 포함하는 계층적 네트워크 구조로 지식을 표현한다. 2024년 기준 11,000개 이상의 반응과 2,600개 이상의 경로를 포괄하며, 각 항목은 원문 논문으로 뒷받침된다. 이 데이터베이스는 Over-Representation Analysis(ORA), Gene Set Enrichment Analysis(GSEA) 등 다양한 enrichment 분석 방법의 기반 지식으로 활용된다.

### Enrichment Analysis의 통계적 원리

**Over-Representation Analysis(ORA)**는 관심 유전자 목록(예: FDR < 0.05인 DEG)에서 특정 경로 유전자들이 우연보다 더 많이 나타나는지를 hypergeometric 검정 또는 Fisher's exact test로 평가한다. 이 방법은 임계값(threshold)에 의존한다는 한계가 있다.

**Gene Set Enrichment Analysis(GSEA)**는 유전자를 통계량(예: fold-change, t-statistic)에 따라 정렬한 후, 특정 유전자 집합이 이 정렬된 목록의 상단 또는 하단에 집중되는지를 Kolmogorov-Smirnov 유형의 통계량으로 평가한다. 임계값 없이 전체 유전자의 순위 정보를 활용하기 때문에 ORA보다 통계적 power가 높은 경우가 많다.

---

## Kinase Activity 분석 도구 — KSEA와 Kinase-Substrate 데이터베이스

Phosphoproteomics 데이터에서 특정 인산화 사이트의 변화를 관찰하는 것은 일차적 분석에 불과하다. 생물학적으로 더 의미 있는 질문은 "어떤 kinase가 활성화 또는 억제되었는가?"이다. **Kinase-Substrate Enrichment Analysis(KSEA)**는 이 질문에 답하기 위한 계산적 접근법이다.

[[wiredja-2017-ksea-app-web-based-tool-kinase|Wiredja et al. (2017)]]이 개발한 **KSEA App**은 kinase-substrate 관계 데이터베이스(PhosphoSitePlus, NetworKIN 등)를 활용하여, 각 kinase의 알려진 기질(substrate)들의 인산화 변화량 평균을 kinase activity 추정치로 사용한다. 직관적으로, 특정 kinase의 기질들이 전반적으로 인산화가 증가했다면 그 kinase가 활성화되었다고 추론하는 것이다.

그러나 KSEA의 한계는 kinase-substrate 데이터베이스의 불완전성과, 단순 평균이 통계적으로 robust하지 않을 수 있다는 점이다. [[ylmaz-2021-robust-inference-kinase-activity-using|Yılmaz et al. (2021)]]은 이러한 문제를 개선하여, 기질 목록의 크기와 인산화 변화량의 분산을 고려한 **robust kinase activity inference** 방법을 제안했다. 이 접근법은 특히 기질 수가 적은 kinase에 대해 과도한 확신을 피하고 불확실성을 적절히 반영한다.

---

## Phosphoproteomics 전문 도구 — iProphos와 cProSite

Phosphoproteomics 데이터의 분석은 단순한 DE 분석을 넘어 인산화 네트워크 수준의 해석이 필요하다. 이를 위한 통합 플랫폼들이 최근 개발되었다.

[[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide|Savage et al. (2020)]]은 phosphoproteomics bioinformatics의 전체 워크플로우를 체계적으로 정리한 리뷰로, 데이터 전처리, 결측값 처리, 정규화, 통계 분석, 기능 해석에 이르는 각 단계의 방법론적 선택과 그 함의를 논의했다. 이 리뷰는 분야에 입문하는 연구자에게 필수적인 참고 문헌으로, 특히 결측값 처리(MNAR vs. MCAR)와 배치 효과 보정이 최종 결론에 미치는 영향을 강조했다.

[[zou-2024-iprophos-web-based-interactive-platform-integrated|Zou et al. (2024)]]의 **iProphos**는 웹 기반 인터랙티브 플랫폼으로, 인산화체(phosphoproteome) 데이터의 업로드부터 kinase activity 분석, pathway enrichment, 네트워크 시각화까지 통합적으로 수행할 수 있다. 코딩 지식 없이도 복잡한 분석 파이프라인을 실행할 수 있어 실험 생물학자들의 접근성을 크게 높였다.

[[wang-2023-cprosite-web-based-interactive-platform|Wang et al. (2023)]]의 **cProSite**는 CPTAC(Clinical Proteomic Tumor Analysis Consortium) 데이터를 중심으로 암 종양의 단백질체 및 인산화체 데이터를 탐색하는 플랫폼이다. 사용자가 관심 유전자 또는 인산화 사이트를 입력하면 다양한 암종에 걸쳐 그 분자적 특성을 시각적으로 비교할 수 있다.

---

## EMT Scoring — EMTome

**Epithelial-Mesenchymal Transition(EMT)**은 암세포가 침습성과 전이 능력을 획득하는 핵심 과정이다. 그러나 EMT는 이분법적(binary) 전환이 아니라 연속적인 스펙트럼 위에 존재하며, 동일한 종양 내에서도 세포마다 EMT 상태가 이질적으로 분포한다. 이러한 EMT 상태를 정량적으로 평가하기 위한 도구가 **EMTome**이다.

[[vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal|Vasaikar et al. (2021)]]이 개발한 EMTome은 pan-cancer EMT 분석을 위한 통합 데이터베이스 및 분석 플랫폼이다. E-cadherin(CDH1), vimentin(VIM), N-cadherin(CDH2) 등 canonical EMT 마커들뿐 아니라, 암종별로 특이적인 EMT 시그니처를 포함하고 있다. 사용자는 자신의 발현 데이터에 대해 EMT 점수(EMT score)를 계산하고, TCGA 코호트와의 비교 분석을 수행할 수 있다. 이 플랫폼은 특히 전이 위험도 평가와 EMT 관련 치료 반응 예측 연구에 활용된다.

---

## 공간 데이터 분석 도구 — THOR

공간 전사체학(spatial transcriptomics)의 발전으로 조직 내 세포들의 유전자 발현을 공간적 맥락과 함께 분석하는 것이 가능해졌다. 그러나 세포 수준의 공간 해상도를 가진 대규모 데이터를 효율적으로 분석하는 것은 새로운 계산적 도전을 제기한다.

[[zhang-2025-thor-platform-cell-level-investigation-spatial|Zhang et al. (2025)]]이 개발한 **THOR(Toolbox for Histology and omics Research)**는 세포 수준의 공간 데이터 분석을 위한 통합 플랫폼이다. THOR는 세포 세분화(cell segmentation), 세포 유형 주석(cell type annotation), 공간적 이웃 분석(spatial neighborhood analysis), 세포-세포 상호작용 추론을 하나의 워크플로우로 통합한다. 특히 종양 미세환경(Tumor Microenvironment, TME)의 세포 구성과 공간적 조직화를 분석하는 데 강점을 보이며, 암세포와 면역세포 사이의 공간적 관계가 치료 반응과 어떻게 연결되는지 규명하는 연구에 적용되고 있다.

---

## 참고문헌

- [[smyth-2004-linear-models-empirical-bayes-methods|Smyth GK (2004)]] — Linear models and empirical Bayes methods for assessing differential expression in microarray experiments. *Stat Appl Genet Mol Biol* 3(1):Article3.
- [[ritchie-2015-limma|Ritchie ME et al. (2015)]] — limma powers differential expression analyses for RNA-sequencing and microarray studies. *Nucleic Acids Res* 43(7):e47.
- [[orlicmilacic-2023-reactome-pathway-knowledgebase-2024|Orlić-Milačić M et al. (2023)]] — The Reactome Pathway Knowledgebase 2024. *Nucleic Acids Res* 52(D1):D672–D678.
- [[wiredja-2017-ksea-app-web-based-tool-kinase|Wiredja DD et al. (2017)]] — The KSEA App: a web-based tool for kinase activity inference from quantitative phosphoproteomics. *Bioinformatics* 33(21):3489–3491.
- [[ylmaz-2021-robust-inference-kinase-activity-using|Yılmaz S et al. (2021)]] — Robust inference of kinase activity using functional networks. *Nat Commun* 12:1177.
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide|Savage SR & Zhang B (2020)]] — Using phosphoproteomics data to understand cellular signaling: a comprehensive guide to bioinformatics resources. *Clin Proteomics* 17:27.
- [[zou-2024-iprophos-web-based-interactive-platform-integrated|Zou Y et al. (2024)]] — iProphos: a web-based interactive platform for integrated phosphoproteomics analysis. *J Proteome Res* 23(1):234–242.
- [[wang-2023-cprosite-web-based-interactive-platform|Wang LB et al. (2023)]] — cProSite: a web-based interactive platform for cancer proteomics and phosphoproteomics analysis. *Mol Cell Proteomics* 22(6):100556.
- [[vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal|Vasaikar S et al. (2021)]] — EMTome: a resource for pan-cancer analysis of epithelial-mesenchymal transition genes and signatures. *Br J Cancer* 124(1):259–269.
- [[zhang-2025-thor-platform-cell-level-investigation-spatial|Zhang Y et al. (2025)]] — THOR: a platform for cell-level investigation of spatial transcriptomics data. *Nat Methods* 22(1):45–54.
