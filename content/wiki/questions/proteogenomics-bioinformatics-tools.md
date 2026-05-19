---
title: "Proteogenomics 데이터 분석을 위한 주요 생물정보학 도구와 데이터베이스는?"
type: question
status: active
category: [proteogenomics, bioinformatics-tool, phosphoproteomics]
source_files:
  - wang-2023-cprosite-web-based-interactive-platform
  - zou-2024-iprophos-web-based-interactive-platform-integrated
  - hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations
  - shi-2025-functional-network-human-cancer-proteogenomics
  - smyth-2004-linear-models-empirical-bayes-methods
  - wiredja-2017-ksea-app-web-based-tool-kinase
  - ylmaz-2021-robust-inference-kinase-activity-using
  - wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics
  - zhao-2018-credentialing-individual-samples-proteogenomic-analysis
  - li-2025-sonication-protein-extraction-cptac-protocol
  - zhang-2025-thor-platform-cell-level-investigation-spatial
  - an-2026-spatialquery-multicellular-motifs
  - gonzalezblas-2023-scenic-single-cell-multiomic-inference
  - savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide
updated: 2026-05-19
---

# Proteogenomics 데이터 분석을 위한 주요 생물정보학 도구와 데이터베이스

## 짧은 답변

Proteogenomics 분석 생태계는 크게 (1) 웹 기반 interactive platform, (2) PTM 참조 데이터베이스, (3) 통계·정규화 방법론, (4) kinase activity 추론 도구, (5) 샘플 품질 관리, (6) 실험 프로토콜 표준화, (7) 공간 omics 특화 도구로 구분할 수 있다. CPTAC 데이터를 코딩 없이 탐색하는 cProSite·iProPhos부터, phosphoproteomics 정규화의 방법론적 토대(Wu 2011), kinase activity 추론(KSEA App, RoKAI), 공간 omics 통합 플랫폼(Thor, SpatialQuery, SCENIC+)까지 전 분석 스택이 체계화되어 있다.

---

## 상세 답변

### 1. 웹 기반 Interactive Platform

#### cProSite (Wang et al. 2023)

[[wang-2023-cprosite-web-based-interactive-platform]] (Journal of Biotechnology and Biomedicine 2023)는 NCI Laboratory of Cellular Oncology가 개발한 CPTAC 데이터 탐색 플랫폼이다.

**주요 기능:**
- CPTAC 12개 암종(교아종, 유방암, 대장암, 폐SCC, 폐선암, 난소암, 자궁내막암, 신장암, 간암, 두경부암, 췌장암, 방광암) 커버
- 임의 단백질·phosphosite에 대한 종양 vs 정상 TMT log2 비율 boxplot 시각화
- 암종별 mRNA-단백질 상관관계 계산 — post-transcriptional regulation 정도 정량
- 단일 단백질의 12개 암종 동시 cross-cancer 비교 뷰
- **코딩 불필요** — bench biologist·임상 연구자 접근 가능
- URL: cprosite.ccr.cancer.gov

**한계:** CPTAC 외 데이터셋 미지원; 배치 쿼리·커스텀 파이프라인 통합 불가.

---

#### iProPhos (Zou et al. 2024)

[[zou-2024-iprophos-web-based-interactive-platform-integrated]] (Molecular & Cellular Proteomics 2024)는 Zhejiang University Long Lab이 개발한 CPTAC 기반 proteome+phosphoproteome 통합 분석 웹 서버이다.

**주요 기능:**
- CPTAC 12개 암종, 1,444개 종양 + 746개 정상 샘플 포함
- **두 개 모듈:**
  - Proteome Analysis: 발현 차등 분석, 생존 분석, 임상 특성 상관, 기능 농축, PPI 네트워크, mRNA-단백질 상관
  - Phosphoproteome Analysis: phosphosite 발현 차등 분석, **kinase activity 추론**, proteome-phosphoproteome 상관
- **사용자 데이터 업로드** 지원 — CPTAC 외 자체 데이터에도 적용 가능
- R Shiny 기반; HTML5/CSS/JavaScript 프론트엔드; 다운로드 가능 벡터 그래픽 출력
- 전처리: z-score 정규화(전사체), log2 TMT median centering(단백체/phospho), >50% 결측 제거, KNN imputation
- URL: http://longlab.zju.cn/iProPhos
- cProSite·CPPA·UALCAN·LinkedOmics 대비 **kinase-substrate 상관 분석 및 사용자 데이터 업로드**에서 차별화

**한계:** CPTAC 12개 암종 한정; raw-level 전처리 커스터마이징 불가.

---

#### LinkedOmics & FunMap (Shi et al. 2025)

[[shi-2025-functional-network-human-cancer-proteogenomics]] (Nature Cancer 2025)에서 제시된 **FunMap**은 CPTAC 11개 암종 1,194명의 proteomics·RNA-seq 데이터에 XGBoost supervised ML을 적용하여 구축한 pan-cancer 기능 네트워크이다.

**주요 특성:**
- 10,525개 유전자, 196,800개 엣지; 동기능 유전자 쌍 50배 농축
- 단백질 공발현이 mRNA 공발현보다 기능적 연관성 예측에 우수
- 계층적 모듈이 cancer hallmark와 연결
- **GNN 적용**으로 저빈도 cancer driver 유전자 식별
- 인터랙티브 웹: funmap.linkedomics.org

LinkedOmics (linkedomics.org)는 CPTAC 원본 다중 omics 데이터에 대한 연관 분석과 다운로드를 지원하는 data portal로, FunMap과 연계된 CPTAC 생태계의 핵심 데이터 접근 창구이다.

---

### 2. PTM 참조 데이터베이스

#### PhosphoSitePlus (Hornbeck et al. 2015)

[[hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations]] (Nucleic Acids Research 2015)는 포유류 PTM의 표준 curated knowledgebase이다.

**2014년 업데이트 기준:**
- **338,948개** 비중복 PTM site (phospho, acetyl, ubiquityl, methyl)
- 20,021개 인간 단백질 커버
- **PTMVar**: 25,000개 이상의 PTM site에 위치한 missense 돌연변이 — 신호 재배선 사건 식별
- **12,180개** kinase-substrate interaction + sequence logo
- 95% 이상의 site가 mass spectrometry 기반; 초기 데이터는 100만 스펙트럼 대비 재교정 적용
- Regulatory Sites dataset 추가

**활용 맥락:** KSEA App, RoKAI 등 kinase activity 추론 도구의 **기본 kinase-substrate annotation 소스**; NetworKIN과 함께 사용하면 예측 기반 coverage 확장 가능.

---

### 3. 통계 방법론

#### limma (Smyth 2004)

[[smyth-2004-linear-models-empirical-bayes-methods]] (Statistical Applications in Genetics and Molecular Biology 2004)는 proteomics·transcriptomics 전반에서 사용되는 차등 발현 분석의 통계적 기반이다.

**핵심 원리:**
- **Moderated t-statistic**: 유전자별 분산 추정치를 공통 값으로 shrinkage → 소규모 샘플에서도 안정적 추론
- Empirical Bayes 분산 shrinkage: 사전 분포 하이퍼파라미터를 closed-form으로 추정
- 결측 데이터 및 quality weight 처리 가능
- **효과:** 일반 t-검정 대비 통계 검정력 향상 + 위양성 감소

**적용 범위:** CPTAC proteomics 분석 파이프라인, phosphosite 차등 발현, multi-group 디자인(linear model 프레임워크).

---

#### 인산화 정규화 (Wu et al. 2011)

[[wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics]] (Molecular & Cellular Proteomics 2011)는 phosphoproteomics 데이터 해석의 방법론적 기반을 확립했다.

**핵심 발견:**
- 관찰되는 인산화 변화의 **약 30%**는 kinase/phosphatase 조절이 아닌 단백질 발현량 변화로 설명됨
- 따라서 phosphoproteomics는 반드시 **단백질 발현량으로 정규화**한 뒤 해석해야 함
- 효모 pheromone MAPK 신호 모델 시스템 사용
- **정규화 미적용 시 kinase activity 추론이 오염됨**

**실무 적용:** CPTAC 분석 파이프라인에서 phosphosite abundance를 해당 단백질 abundance로 나눠 "occupancy" 또는 "site-specific regulation"을 분리하는 절차의 이론적 근거.

---

### 4. Kinase Activity 추론

#### KSEA App (Wiredja et al. 2017)

[[wiredja-2017-ksea-app-web-based-tool-kinase]] (Bioinformatics 2017)는 정량 phosphoproteomics로부터 kinase activity를 추론하는 웹 도구이다.

**원리:**
- **KSEA Z-score**: 특정 kinase의 substrate set 평균 fold change를 전체 phosphoproteome 분포 대비 Z-score로 변환
- PhosphoSitePlus (실험 검증) + **NetworKIN** (예측 기반) 조합으로 kinase coverage 확장
- Selumetinib(MEK inhibitor) 처리 A549 세포에서 MEK/ERK 경로 억제 감지로 검증
- 웹: casecpb.shinyapps.io/ksea/; R 패키지 **KSEAapp** 제공

**한계:** 잘 연구된 kinase 편향; 간접 substrate 신호 오염; 소규모 샘플에서 통계 검정력 부족.

---

#### RoKAI (Yilmaz et al. 2021)

[[ylmaz-2021-robust-inference-kinase-activity-using]] (Nature Communications 2021)는 KSEA의 kinase annotation 희소성 문제를 **network propagation**으로 해결한다.

**핵심 방법:**
- 4가지 기능적 정보 통합: kinase-substrate annotation, **공진화(coevolution)**, **구조적 거리(structural distance)**, **PPI network**
- 기능적 이웃 내에서 인산화 신호를 전파하여 annotation이 부족한 kinase에 대해서도 robust한 활성도 추론
- 기존 모든 kinase activity 추론 방법의 정확도·안정성을 일관되게 향상
- **Web tool: rokai.io**

**비교:** KSEA가 직접 annotated substrate만 사용하는 반면, RoKAI는 네트워크 전파로 understudied kinase까지 커버 — 상호 보완적 사용 권장.

---

### 5. 샘플 품질 관리

#### PMC Score (Zhao et al. 2018)

[[zhao-2018-credentialing-individual-samples-proteogenomic-analysis]] (Molecular & Cellular Proteomics 2018)는 proteogenomic 분석 전 개별 샘플 품질 검증을 위한 **PMC (protein-mRNA correlation) score**를 제안했다.

**원리:**
- Pan-cancer TCGA 13개 암종에서 단백질-mRNA 높은 상관성(R > 0.6)을 보이는 marker gene set 정의 (leave-one-out cross-validation)
- 개별 샘플에서 이 marker set의 Pearson 상관계수 = PMC score
- PMC score ↑ → 단백질 총량, 종양 순도, 단백체-전사체 일치도 ↑
- TCGA 7,303 샘플·31개 암종 + CPTAC MS 데이터에서 검증: CPTAC 샘플의 ~26%가 불만족

**활용:** 통합 multi-omics 분석 전 저품질 샘플 필터링 QC 단계; 암종별 단백질-mRNA 상관 편차 이해.

---

### 6. 실험 프로토콜 표준화

#### CPTAC 소니케이션 프로토콜 (Li et al. 2025)

[[li-2025-sonication-protein-extraction-cptac-protocol]] (Nature Protocols 2025)는 CPTAC 표준 proteomics 프로토콜에 **소니케이션(sonication) 단계**를 추가하여 membrane-bound 단백질 및 DNA-binding 단백질 검출을 개선했다.

**성과:**
- TMT 실험당 >12,000개 단백질 및 >25,000개 phosphopeptide 동정
- 기존 urea 기반 조직 용해의 한계를 소니케이션으로 극복
- PDX 종양 조직에서 최적화된 소니케이션 파라미터 제공
- **치료 표적으로 중요한 막 단백질 커버리지 향상**

---

### 7. 공간 Omics 특화 도구

#### Thor (Zhang et al. 2025)

[[zhang-2025-thor-platform-cell-level-investigation-spatial]] (Nature Communications 2025)는 공간 전사체(ST) + 조직병리 이미지의 cell-level 통합 분석 플랫폼이다.

**핵심 기술:**
- **Anti-shrinking Markov graph diffusion**: spot-level ST를 외부 scRNA-seq reference 없이 in silico 단세포 전사체로 분해
- H&E → 세포 분할 → 형태+전사체 공동 특성 공간 → 세포-세포 그래프 → Transition matrix → Markov diffusion
- **10개 모듈**: pathway enrichment, TF activity, 조직 면역미세환경, CNV, DEG, 공간 발현 모듈 감지
- **Mjolnir**: gigapixel 이미지 no-code interactive 탐색 웹 플랫폼
- ISH·MERFISH·Xenium·Stereo-seq·Visium HD에서 검증
- 적용: 심부전 재생 서명, 유방암 면역 이질성, 생쥐 후각 구 세층 분해

---

#### SpatialQuery (An et al. 2026)

[[an-2026-spatialquery-multicellular-motifs]] (2026)는 공간 전사체 및 공간 단백체 데이터에서 **반복적 다세포 모티프(recurrent multicellular motifs)**를 발굴한다.

**방법:**
- k-D tree로 국소 이웃 세포 유형 모티프 구성
- **FP-Growth** 알고리즘으로 빈번한 세포 유형 조합 마이닝
- Hypergeometric test로 모티프 농축도 검정
- Shifted Pearson covariation으로 모티프 특이적 유전자 공변화 분리

**활용:** 종양 미세환경 모티프 발굴; 공간 omics QC 및 통합 후 disease-vs-control 모티프 비교.

---

#### SCENIC+ (Gonzalez-Blas et al. 2023)

[[gonzalezblas-2023-scenic-single-cell-multiomic-inference]] (Nature Methods 2023)는 scRNA-seq + scATAC-seq 공동 데이터에서 **enhancer 기반 유전자 조절 네트워크(GRN)**를 추론한다.

**핵심:**
- pycisTopic: 영역의 topic modeling
- pycisTarget: motif enrichment (34,524 motif, 29 데이터베이스)
- TF → enhancer → target gene의 **3방향 상관관계**로 GRN 구축
- TF perturbation 효과를 분화 궤적 상에서 예측
- 검증: PBMC, 흑색종, ENCODE ChIP-seq, 종간 뇌 데이터

**요구사항:** paired scATAC+scRNA multiome 데이터 필요.

---

### 8. Phosphoproteomics 종합 가이드

#### Savage & Zhang 2020

[[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] (Clinical Proteomics 2020)는 phosphoproteomics 데이터 해석을 위한 bioinformatics 자원의 종합 리뷰로:
- 16개 kinase/phosphatase knowledgebase 카탈로그 작성
- PhosphoSitePlus와 Swiss-Prot이 가장 활발히 유지 관리됨
- kinase activity 추론 도구 비교 및 사용성 평가
- 생물학자·임상의 관점에서 실용적 도구 선택 가이드

---

## 핵심 비교표

### 웹 플랫폼 비교

| 도구 | 개발 | 데이터 소스 | 주요 기능 | 특징 |
|------|------|-------------|-----------|------|
| **cProSite** | NCI | CPTAC 12암종 | 단백질/phosphosite 발현, mRNA-단백질 상관, cross-cancer 비교 | 코딩 불필요; NCI 공식 |
| **iProPhos** | ZJU | CPTAC 12암종 + 사용자 데이터 | 발현 분석 + 생존 + kinase activity 추론 | 사용자 데이터 업로드 지원 |
| **LinkedOmics/FunMap** | Baylor/WUSTL | CPTAC 11암종 | 연관 분석 + 기능 네트워크 + GNN driver 발굴 | protein coexpression 기반 ML |

### Kinase Activity 추론 도구 비교

| 도구 | 방법 | KS 어노테이션 소스 | 네트워크 통합 | 접근 방식 |
|------|------|-------------------|--------------|-----------|
| **KSEA App** | Z-score 기반 enrichment | PhosphoSitePlus + NetworKIN | X | 직접 substrate 기반 |
| **RoKAI** | Network propagation | KS annotation + 공진화 + 구조 + PPI | O | 이웃 전파로 understudied kinase 커버 |

### PTM 데이터베이스 비교

| 데이터베이스 | 규모 | 특화 기능 | 유지 관리 |
|-------------|------|-----------|-----------|
| **PhosphoSitePlus** | 338,948 site; 12,180 KS | PTMVar (돌연변이↔PTM), Regulatory Sites | 활발 (업데이트 지속) |
| **NetworKIN** | 예측 기반 KS | 맥락 특이적 kinase-substrate 예측 | KSEA와 조합 사용 |

### 분석 워크플로우 맥락에서의 도구 배치

| 단계 | 권장 도구/방법 |
|------|---------------|
| 샘플 QC | PMC Score (Zhao 2018) |
| 샘플 준비 표준화 | CPTAC Sonication Protocol (Li 2025) |
| 차등 발현 분석 | limma (Smyth 2004) |
| Phospho 정규화 | Wu 2011 단백질 발현 보정 |
| Kinase activity (기본) | KSEA App (Wiredja 2017) |
| Kinase activity (고급) | RoKAI (Yilmaz 2021) |
| KS 어노테이션 참조 | PhosphoSitePlus (Hornbeck 2015) |
| CPTAC 탐색 (no-code) | cProSite / iProPhos |
| Pan-cancer 기능 네트워크 | FunMap / LinkedOmics |
| 공간 전사체+조직병리 통합 | Thor (Zhang 2025) |
| 공간 다세포 모티프 발굴 | SpatialQuery (An 2026) |
| scMultiome GRN 추론 | SCENIC+ (Gonzalez-Blas 2023) |

---

## 데이터 접근 포털

| 포털 | URL | 수록 내용 |
|------|-----|-----------|
| **CPTAC Data Portal** | cptac-data-portal.georgetown.edu | CPTAC 전체 cohort raw/processed 데이터 |
| **cProSite** | cprosite.ccr.cancer.gov | CPTAC 12암종 interactive proteomics/phospho 탐색 |
| **iProPhos** | longlab.zju.cn/iProPhos | CPTAC 12암종 proteome+phosphoproteome 통합 분석 |
| **FunMap/LinkedOmics** | funmap.linkedomics.org | Pan-cancer 기능 네트워크; 연관 분석 |
| **PhosphoSitePlus** | phosphositeplus.org | PTM site curated knowledgebase |
| **RoKAI** | rokai.io | Network-based kinase activity 추론 |
| **KSEA App** | casecpb.shinyapps.io/ksea/ | KSEA 웹 인터페이스 |

---

## 관련 논문

- [[wang-2023-cprosite-web-based-interactive-platform]] — cProSite; NCI CPTAC 12암종 no-code proteomics 탐색 플랫폼
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — iProPhos; CPTAC 기반 proteome+phosphoproteome 통합; 사용자 데이터 업로드 지원
- [[hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations]] — PhosphoSitePlus 2014; 338,948 PTM site; PTMVar; 12,180 KS interaction
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap; pan-cancer 기능 네트워크; XGBoost + GNN; funmap.linkedomics.org
- [[smyth-2004-linear-models-empirical-bayes-methods]] — limma; empirical Bayes moderated t-statistic; 차등 발현 분석의 통계 기반
- [[wiredja-2017-ksea-app-web-based-tool-kinase]] — KSEA App; PhosphoSitePlus+NetworKIN 기반 kinase activity Z-score; web + R package
- [[ylmaz-2021-robust-inference-kinase-activity-using]] — RoKAI; network propagation 기반 robust kinase activity 추론; rokai.io
- [[wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics]] — Phosphoproteomics 정규화 원칙; 관찰 phospho 변화 30%는 단백질 풍부도에 기인
- [[zhao-2018-credentialing-individual-samples-proteogenomic-analysis]] — PMC score; proteogenomics 샘플 QC; 7,303 TCGA 샘플 검증
- [[li-2025-sonication-protein-extraction-cptac-protocol]] — CPTAC 소니케이션 프로토콜; 막단백질·DNA결합단백질 검출 개선
- [[zhang-2025-thor-platform-cell-level-investigation-spatial]] — Thor; ST+조직병리 cell-level 통합; Markov diffusion; Mjolnir 웹 플랫폼
- [[an-2026-spatialquery-multicellular-motifs]] — SpatialQuery; FP-Growth 기반 공간 다세포 모티프 발굴
- [[gonzalezblas-2023-scenic-single-cell-multiomic-inference]] — SCENIC+; enhancer 기반 GRN 추론; scATAC+scRNA multiome
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] — Phosphoproteomics bioinformatics 종합 가이드; 16개 KP knowledgebase 카탈로그

---

## Related pages

- [[proteogenomics]]
- [[phosphoproteomics]]
- [[kinase-activity-inference]]
- [[CPTAC]]
- [[PhosphoSitePlus]]
- [[differential-expression]]
- [[spatial-transcriptomics]]
- [[quality-control]]
- [[proteogenomics-cohort-landscape]]
- [[phosphoproteomics-kinase-activity-methods]]
