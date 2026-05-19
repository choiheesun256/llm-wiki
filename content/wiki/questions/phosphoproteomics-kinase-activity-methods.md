---
title: "Phosphoproteomics 데이터에서 kinase activity를 추론하는 방법론"
type: question
status: active
category: [phosphoproteomics, kinase-activity, bioinformatics-tool]
source_files:
  - wiredja-2017-ksea-app-web-based-tool-kinase
  - ylmaz-2021-robust-inference-kinase-activity-using
  - wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics
  - savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide
  - hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations
  - zou-2024-iprophos-web-based-interactive-platform-integrated
  - wang-2023-cprosite-web-based-interactive-platform
  - jiang-2025-deciphering-dark-cancer-phosphoproteome-using
  - needham-2022-personalized-phosphoproteomics-identifies-functional-signaling
  - keshishian-2021-multiplexed-quantitative-phosphosite-assay
  - lancaster-2024-fast-deep-phosphoproteome-orbitrap-astral
  - olsen-2013-status-large-scale-analysis-post-translational-modifications
  - vemulapalli-2021-time-resolved-phosphoproteomics-reveals-scaffolding-catalysis-responsive
updated: 2026-05-19
---

# Phosphoproteomics 데이터에서 Kinase Activity를 추론하는 방법론

## 짧은 답변

Phosphoproteomics 데이터에서 kinase activity를 추론하는 핵심 접근은 kinase의 알려진 기질(substrate) phosphosite 집합의 인산화 변화량을 통계적으로 집계하는 것이다. 대표적 방법으로는 Z-score 기반의 KSEA (Wiredja 2017), functional network propagation 기반의 RoKAI (Yilmaz 2021), ML 기반의 CoPheeKSA (Jiang 2025) 등이 있으며, 정확한 해석을 위해서는 Wu 2011이 제시한 단백질 발현량 normalization이 선행되어야 한다.

---

## 상세 답변

### 1. 문제 정의: phosphosite → kinase activity

Phosphoproteomics는 수만 개의 phosphosite 수준 정량 데이터를 제공하지만, 연구자가 실제로 알고 싶은 것은 "어떤 kinase가 이 조건에서 활성화/억제되었는가"이다. 대부분의 phosphosite는 그것을 인산화하는 kinase가 알려져 있지 않으므로, kinase-substrate 데이터베이스([[hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations]], PhosphoSitePlus; NetworKIN 등)를 이용해 각 kinase의 기질 집합을 정의하고, 그 집합 내 phosphosite들의 변화 패턴으로 kinase 활성을 역추론한다.

현재까지 phosphosite의 약 95%는 기능이나 upstream kinase가 알려져 있지 않은 "dark phosphoproteome"에 해당한다 ([[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]]). 이것이 kinase activity 추론의 근본적 한계이자, 새로운 방법론 개발의 동기이다.

---

### 2. Normalization: 단백질 발현량 보정 (Wu 2011)

[[wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics]]는 phosphoproteomics 분석에서 가장 먼저 수행해야 할 전처리 단계를 확립했다.

**핵심 문제:** 관찰된 phosphopeptide 풍부도 변화의 약 30%는 kinase/phosphatase 조절이 아닌 **단순 단백질 발현량 변화**에서 기인한다. 즉, 단백질 자체가 더 많이 만들어지면 인산화 peptide도 함께 증가하는 것이다.

**해결 방법:**
- 같은 단백질의 non-phospho peptide(proteomics) 풍부도로 phospho peptide 풍부도를 나눈다.
- 이렇게 얻은 값은 "단백질 발현과 독립적인 인산화 수준(occupancy)"을 반영한다.

**실용적 의미:** 이 normalization을 생략하면 kinase activity 추론이 단순히 단백질 발현 변화를 반영하게 되어 오해를 낳는다. CPTAC 스타일의 통합 proteogenomics 연구에서는 proteomics와 phosphoproteomics 데이터를 동시에 보유하므로 이 보정이 항상 가능하다.

---

### 3. KSEA (Kinase-Substrate Enrichment Analysis)

[[wiredja-2017-ksea-app-web-based-tool-kinase]] (Bioinformatics 2017, Case Western Reserve University)

**원리:**
각 kinase k에 대해, 해당 kinase의 기질 집합 S_k의 phosphosite fold change들의 평균을 전체 phosphoproteome 배경 분포와 비교하는 Z-score를 계산한다:

```
Z_k = (mean_Sk - mean_background) / (SD_background / sqrt(|Sk|))
```

**기질 데이터베이스:**
- PhosphoSitePlus: 실험적으로 검증된 kinase-substrate 관계 (~12,180 interactions)
- NetworKIN: 서열 모티프 + 네트워크 기반 예측으로 커버리지 확장

**검증:** MEK 억제제 selumetinib 처리 A549 LUAD 세포에서 MEK/ERK 경로 억제를 정확히 감지함으로써 방법의 민감도를 확인.

**접근 방법:**
- Web app: casecpb.shinyapps.io/ksea/ (Shiny 기반, 코딩 불필요)
- R package: `KSEAapp` (파이프라인 통합 가능)

**장점:**
- 직관적인 Z-score 해석
- PhosphoSitePlus + NetworKIN 조합으로 넓은 kinase 커버리지
- 코딩 없이 사용 가능한 웹 인터페이스

**단점:**
- 잘 연구된 kinase(EGFR, CDK1/2 등)에 편향 — 기질이 적은 understudied kinase는 검출력 낮음
- 간접 기질(downstream effector의 downstream)이 noise를 유발할 수 있음
- 단순 Z-score는 kinase 간 network crosstalk를 반영하지 못함
- 작은 기질 집합(n<5)에서 통계적 신뢰도 낮음
- 데이터베이스 버전에 따라 결과가 달라질 수 있음

---

### 4. RoKAI (Robust Kinase Activity Inference)

[[ylmaz-2021-robust-inference-kinase-activity-using]] (Nature Communications 2021)

**원리:**
단순히 기질의 fold change를 집계하는 KSEA와 달리, RoKAI는 **functional network propagation** 방식을 사용한다. 4종의 기능적 연결성 정보를 통합하여 kinase 주변의 "functional neighborhood" 신호를 전파(propagation)시킨다:

1. Kinase-substrate annotations (PhosphoSitePlus 기반)
2. Coevolution 네트워크 (kinase 쌍의 공진화 점수)
3. Structural distance (phosphosite 간 3D 구조적 근접성)
4. Protein-protein interaction (PPI) 네트워크

이렇게 통합된 네트워크에서 phosphorylation 신호를 propagation하여 kinase activity score를 산출한다.

**핵심 장점:** Kinase-substrate annotation이 부족한 understudied kinase에서도 **network propagation을 통해 간접적 신호를 활용**함으로써 추론 정확도와 robustness를 높인다. 기존 모든 kinase activity inference 방법(KSEA 포함)에 전처리로 적용하면 성능이 일관되게 향상된다.

**접근 방법:**
- Web tool: rokai.io

**장점:**
- Understudied kinase에서 강건한 추론
- 4종 functional information 통합으로 annotation 불완전성 극복
- 기존 방법들(KSEA, VIPER 등)의 성능을 일관되게 개선하는 전처리로 활용 가능

**단점:**
- 네트워크 annotation의 품질에 의존
- 독자적 실험 데이터 없음 (계산 프레임워크)
- 제한된 perturbation 데이터셋으로 벤치마킹
- Tyrosine kinase보다 S/T kinase에 최적화

---

### 5. CoPheeKSA: ML 기반 kinase-substrate 예측 및 activity 추론

[[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] (Nature Communications 2025)

**원리:**
1,195개 CPTAC 종양(11개 암종)의 phosphoproteomics 데이터를 사용하여 XGBoost로 **phosphosite co-regulation network (CoPheeMap)**를 구성하고, 그 network embedding으로부터 **kinase-substrate 관계(CoPheeKSA)**를 예측한다.

- CoPheeMap: 26,280 phosphosite 간 co-regulation 네트워크
- CoPheeKSA: 9,399 phosphosite와 104개 S/T kinase 간 24,015 novel kinase-substrate 관계 예측

**의의:** 서열 모티프나 실험적 검증에 의존하지 않고, **암 데이터에서 직접 관찰된 공변동 패턴**으로부터 kinase-substrate 관계를 새롭게 추론한다. 기존 database의 dark zone을 조명하며, understudied kinase를 잠재적 치료 타겟으로 제시한다.

**장점:**
- 기존 데이터베이스에 없는 새로운 kinase-substrate 관계 예측
- 암 맥락에서 직접 학습된 관계이므로 생물학적 관련성 높음
- pan-cancer 적용 가능

**단점:**
- CPTAC 데이터 의존 → 다른 phosphoproteomics 플랫폼에서의 재현성 확인 필요
- 예측의 실험적 검증이 제한적
- S/T kinase만 다룸; tyrosine kinase 별도 분석 필요
- 대규모 암 코호트 데이터 없이는 모델 재학습 불가

---

### 6. VIPER / PTM-SEA 등 기타 방법들

[[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] (2020 종합 리뷰)에 따르면 kinase activity inference 도구들의 생태계는 다음과 같다:

| 방법 | 기반 원리 | 주요 DB |
|------|-----------|---------|
| KSEA | Z-score, 기질 집합 평균 | PhosphoSitePlus, NetworKIN |
| RoKAI | Network propagation | PhosphoSitePlus + PPI + coevolution + structure |
| CoPheeKSA | XGBoost + co-regulation | CPTAC pan-cancer data |
| PTM-SEA | Gene Set Enrichment Analysis 변형 | PTMsigDB (경로 수준) |
| VIPER | ARACNe 기반 regulon 추론 | 인산화 네트워크 |
| INKA | Kinase 기질 + 자기인산화 통합 | PhosphoSitePlus |

PTM-SEA는 개별 kinase가 아닌 **신호 경로(pathway) 수준**의 활성을 추론하는 데 적합하며, 임상 해석에 유리하다.

---

### 7. 실용 분석 플랫폼

#### iProPhos

[[zou-2024-iprophos-web-based-interactive-platform-integrated]] (MCP 2024)

12개 CPTAC 암종(종양 1,444개 + 정상 746개)의 proteome + phosphoproteome 데이터를 기반으로 하는 통합 웹 플랫폼.

**Phosphoproteome 모듈 주요 기능:**
- Phosphosite 차등 발현 분석
- Kinase activity inference (kinase-substrate enrichment 포함)
- Proteome-phosphoproteome 상관 분석
- 사용자 데이터 업로드 지원

**비교 우위:** TCPA, CPPA, UALCAN, LinkedOmics에 비해 kinase-substrate correlation 및 사용자 데이터 업로드 기능이 우수.

접근: http://longlab.zju.cn/iProPhos

#### cProSite

[[wang-2023-cprosite-web-based-interactive-platform]] (JBB 2023, NCI)

NCI Laboratory of Cellular Oncology 개발. 12개 CPTAC 암종의 TMT log2 ratio 시각화, mRNA-protein 상관 분석, cross-cancer 비교 제공.

접근: cprosite.ccr.cancer.gov

**두 플랫폼의 차이:** cProSite는 빠른 단백질/phosphosite 발현 조회에 특화, iProPhos는 kinase activity 추론을 포함한 심화 분석에 적합.

---

### 8. 표적 phosphoproteomics: SigPath (Keshishian 2021)

[[keshishian-2021-multiplexed-quantitative-phosphosite-assay]]

대규모 발견형 phosphoproteomics와 달리, **SigPath**는 암 관련 주요 신호 경로의 284개 phosphosite를 targeted MS(immuno-MRM)로 정량하는 패널이다. RTK, PI3K/AKT/mTOR, MAPK, DNA damage, 세포 주기 경로를 커버하며 CV <20%의 재현성을 보인다. FFPE 조직에도 적용 가능하며, 약물 유발 신호 변화를 민감하게 탐지한다.

**kinase activity 추론 맥락:** SigPath는 discovery가 아닌 **가설 검증 또는 임상 바이오마커 적용** 단계에 적합하다.

---

### 9. 고처리량 phosphoproteomics 기술 발전

[[lancaster-2024-fast-deep-phosphoproteome-orbitrap-astral]] (Nature Communications 2024)

Orbitrap Astral + DIA 조합으로 단 30분에 ~30,000 phosphosite를 정량하는 시대가 열렸다. 이는 kinase activity 추론의 입력 데이터 품질과 coverage를 급격히 향상시키며, 대규모 cohort 연구의 throughput 문제를 완화한다.

---

## 핵심 비교표

| 방법 | 기반 원리 | 필요 입력 | Understudied kinase | 코딩 필요 | 접근 방법 |
|------|-----------|-----------|---------------------|-----------|-----------|
| **KSEA** | Z-score, 기질 집합 평균 | phospho fold change | 불리 (기질 적으면 검출 어려움) | 불필요 (웹 앱) | casecpb.shinyapps.io/ksea |
| **RoKAI** | Network propagation (4종 통합) | phospho fold change | 유리 (네트워크로 보완) | 불필요 (웹 앱) | rokai.io |
| **CoPheeKSA** | XGBoost + co-regulation 네트워크 | CPTAC-style 대규모 데이터 | 유리 (새로운 KS 관계 예측) | 필요 | 연구 코드 |
| **PTM-SEA** | GSEA 변형, pathway-level | phospho fold change | 중립 (pathway 단위) | 필요 (R) | Bioconductor |
| **VIPER** | ARACNe regulon | phospho 행렬 | 중립 | 필요 (R) | Bioconductor |
| **iProPhos** | KSEA + 통합 분석 | CPTAC 또는 사용자 데이터 | KSEA 수준 | 불필요 (웹) | longlab.zju.cn/iProPhos |

### Normalization 전략 비교

| 접근 | 방법 | 적용 상황 |
|------|------|-----------|
| **단백질 발현 normalization** (Wu 2011) | phospho / protein abundance 비율 | Proteomics + phosphoproteomics 동시 보유 시 (CPTAC 스타일) |
| **Sample-level normalization** | TMT median centering, z-score | 기술적 배치 효과 보정 |
| **보정 생략** | raw fold change 사용 | 단백질 발현량 데이터 없을 때; 결과 해석 주의 필요 |

### Database 비교

| 데이터베이스 | 내용 | 규모 (2014 기준) | 특징 |
|------------|------|----------------|------|
| **PhosphoSitePlus** | 실험 검증 KS 관계 + PTM 사이트 | 338,948 PTM sites, 12,180 KS interactions | 가장 포괄적; 실험적 증거 |
| **NetworKIN** | 서열 모티프 + 네트워크 예측 | 수십만 predicted interactions | 커버리지 넓음; 예측 기반 |
| **PTMsigDB** | 경로 수준 phospho signatures | ~400 gene sets | PTM-SEA 전용; 임상 해석 친화적 |

---

## 관련 논문

- [[wiredja-2017-ksea-app-web-based-tool-kinase]] — KSEA App; Z-score 기반 kinase activity 추론; PhosphoSitePlus + NetworKIN; R package KSEAapp
- [[ylmaz-2021-robust-inference-kinase-activity-using]] — RoKAI; functional network propagation; understudied kinase에서 robust 추론; rokai.io
- [[wu-2011-correct-interpretation-comprehensive-phosphorylation-dynamics]] — phosphoproteomics normalization 필요성; ~30%가 단백질 발현 변화에서 기인; MAPK signaling 검증
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] — 16개 kinase/phosphatase knowledge base 종합 리뷰; 도구 선택 가이드
- [[hornbeck-2015-phosphositeplus-2014-mutations-ptms-recalibrations]] — PhosphoSitePlus 2014; 338,948 PTM site; 12,180 KS interactions; PTMVar
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — iProPhos; 12 CPTAC 암종; kinase activity inference 포함 통합 플랫폼
- [[wang-2023-cprosite-web-based-interactive-platform]] — cProSite; NCI 개발; 12 CPTAC 암종 빠른 조회; mRNA-protein 상관
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] — CoPheeMap/CoPheeKSA; XGBoost; 24,015 novel KS 관계 예측; dark phosphoproteome 조명
- [[needham-2022-personalized-phosphoproteomics-identifies-functional-signaling]] — 개인 간 분산 활용; >100 미규명 functional phosphosite 발굴; mTOR-AMPK S377 협조 조절
- [[keshishian-2021-multiplexed-quantitative-phosphosite-assay]] — SigPath; 284 phosphosite targeted MS 패널; CV <20%; FFPE 적용 가능
- [[lancaster-2024-fast-deep-phosphoproteome-orbitrap-astral]] — Orbitrap Astral + DIA; 30분에 30,000 phosphosite; 새로운 기술 벤치마크
- [[vemulapalli-2021-time-resolved-phosphoproteomics-reveals-scaffolding-catalysis-responsive]] — Time-resolved tyrosine phosphoproteomics; SHP2 scaffolding vs catalysis 구분; 6개 시간적 응답 cluster
- [[olsen-2013-status-large-scale-analysis-post-translational-modifications]] — 대규모 PTM 분석 현황 리뷰; phosphoproteomics >50K site 정량 시대 도입

---

## Related pages

- [[phosphoproteomics]]
- [[kinase-activity]]
- [[KSEA]]
- [[RoKAI]]
- [[PhosphoSitePlus]]
- [[normalization]]
- [[CPTAC]]
- [[proteogenomics]]
- [[bioinformatics-tool]]
- [[kinase-substrate]]
