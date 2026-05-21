---
title: "Day 10: Single-cell 분석과 Foundation Models"
draft: false
---

## Single-cell RNA Sequencing의 혁명

조직을 하나의 평균으로 보는 것이 bulk RNA sequencing이라면, 그 조직을 구성하는 수만 개 세포 하나하나의 목소리를 듣는 것이 **single-cell RNA sequencing(scRNA-seq)**이다. 2009년 Tang et al.의 단일 세포 전사체 분석 이후, 기술의 고처리량화(high-throughput)를 가능하게 한 droplet-based 방법(10x Chromium 등)의 등장은 이 분야를 폭발적으로 성장시켰다.

scRNA-seq의 기본 원리는 다음과 같다. 조직을 단세포 현탁액(single-cell suspension)으로 해리한 뒤, 각 세포를 유수분리(microfluidics)를 통해 기름 방울(droplet) 안에 포획한다. 이 droplet 내에서 역전사(reverse transcription)가 일어나며, 각 세포 고유의 바코드(cell barcode)와 각 전사체 분자 고유의 UMI(Unique Molecular Identifier)가 함께 태깅된다. 시퀀싱 후 바코드를 기반으로 각 세포의 전사체 프로파일을 재구성하면, 수만 개의 세포 × 수만 개의 유전자로 이루어진 발현 행렬(expression matrix)이 만들어진다.

[[sande-2023-applications-single-cell-rna-sequencing|van de Sande 2023]]은 scRNA-seq가 신경과학, 면역학, 암 생물학 등 다양한 분야에서 어떻게 활용되고 있는지를 포괄적으로 리뷰했다. 세포 유형 분류, 발달 궤적(developmental trajectory) 추적, 세포 상태 전이(cell state transition) 분석이 대표적인 응용이다.

---

## 암 연구에서 scRNA-seq가 바꾼 것

### 종양 내 이질성(Intratumoral Heterogeneity)의 해부

암은 하나의 세포에서 기원하지만, 진화 과정에서 유전적·후성유전적 다양성을 획득하여 여러 아집단(subclone)으로 분화한다. Bulk sequencing은 이 다양성을 평균화하지만, scRNA-seq는 각 아집단의 전사 상태를 개별적으로 분해한다. 이를 통해 치료에 저항성을 보이는 소수 세포 집단, 줄기세포 특성(stemness)을 유지하는 암세포 아집단, 혹은 상피-중간엽 전환(EMT)을 겪고 있는 세포들을 동정할 수 있다.

### 발달 궤적과 의사시간(Pseudotime) 분석

Pseudotime 분석은 세포들이 연속적인 발달 또는 분화 과정에서 어느 위치에 있는지를 추론하는 방법이다. Monocle, RNA velocity 등의 알고리즘은 세포의 발현 패턴 변화와 미스플라이싱된 전사체(unspliced RNA) 비율을 이용하여 세포 운명의 방향성(directionality)을 예측한다. 암 연구에서 이 분석은 암세포의 분화 블록(differentiation block)이 어디에서 발생했는지, 어떤 전사 경로가 치료 저항성 획득과 연관되는지를 규명하는 데 사용된다.

### TME의 세포 구성 분해

[[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs|Valle 2025]]는 여러 암종에 걸쳐 TME의 세포 구성을 scRNA-seq로 비교 분석하여 pan-cancer 수준에서 반복적으로 나타나는 **면역 미세환경 motif**를 식별했다. 특정 암종에 독립적으로 공유되는 TME 구조가 있다는 발견은 암 유형을 초월한 공통적 면역치료 표적의 존재를 시사한다.

---

## 새로운 실험 패러다임: Perturb-seq

### CRISPR Screen + scRNA-seq

전통적인 CRISPR 스크린은 세포 생존이나 증식 같은 표현형을 readout으로 사용하여 필수 유전자를 식별한다. 그러나 이 접근법은 생존에 직접적인 영향을 주지 않지만 세포 상태에 중요한 영향을 미치는 유전자들을 놓친다. **Perturb-seq**는 각 세포에 적용된 CRISPR perturbation(어떤 유전자를 knock-out 혹은 knock-down 했는지)을 scRNA-seq의 세포 바코드와 연결한다. 그 결과, 각 유전자 perturbation이 전사체 전반에 미치는 영향—즉 **transcriptome-wide perturbation signature**—을 수천 개의 유전자에 대해 동시에 측정할 수 있다.

이 기술은 유전자 기능의 맥락 의존성(context dependency)을 이해하는 데 강력하다. 동일한 유전자를 제거해도 세포 유형이나 상태에 따라 전혀 다른 전사 반응이 나타날 수 있다. [[zhang-2026-igof-perturb-seq|Zhang 2026]]은 Perturb-seq 데이터를 활용하여 유전자 기능의 계층적 구조(iGOF, integrated Gene Ontology Framework)를 도출하는 방법론을 제시했다.

### Fixed Sample 처리: 10x Flex

실험적 도전 중 하나는 시료 처리의 균일성이다. 여러 환자 샘플을 동시에 처리하면 batch effect가 발생할 수 있다. **10x Chromium Fixed RNA Profiling(Flex)**는 세포를 고정(fix)한 뒤 처리를 지연하거나 여러 샘플을 pooling하여 동시에 시퀀싱할 수 있게 한다. [[llora-batlle-2024-10x-flex-fixed-xenograft-single-cell|Llorà-Batlle 2024]]는 xenograft 모델에서 Flex 기술을 적용하여 고정 처리가 데이터 품질에 미치는 영향을 평가하고, 이 기술이 임상 샘플 처리에 갖는 함의를 분석했다.

---

## Foundation Models for Single-cell

### 대규모 사전학습의 논리

자연어처리(NLP) 분야에서 GPT, BERT 등의 **foundation model**은 방대한 텍스트 데이터로 사전학습(pre-training)된 뒤, 특정 태스크에 맞게 fine-tuning되는 패러다임이다. 이 논리가 단일세포 생물학에도 적용되기 시작했다. 수천만 개의 단일세포 전사체 프로파일로 사전학습된 모델은 "생물학적 언어의 문법"을 학습한다고 볼 수 있다. 각 유전자를 토큰(token)으로, 세포의 전사 프로파일을 문장으로 비유하면, transformer 기반 아키텍처가 유전자 간의 문맥적 관계(contextual relationship)를 포착한다.

Geneformer, scGPT, Universal Cell Embeddings(UCE) 등이 이 방향의 초기 모델들이다. 이들은 세포 유형 분류, 약물 반응 예측, 유전자 perturbation 효과 예측 등 다양한 downstream task에서 표지학습(supervised learning) 베이스라인을 능가하는 성능을 보이기 시작했다.

### Perturbation 특화 Foundation Model: Tahoe-X1

[[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm|Gandhi 2025]]는 Tahoe-X1이라는 perturbation에 특화된 foundation model을 제시했다. 기존 single-cell foundation model들은 자연 상태(unperturbed)의 세포 데이터로 훈련되었기 때문에, 약물 처리나 유전자 제거 같은 외부 개입에 의한 전사체 변화를 정확히 예측하는 데 한계가 있었다. Tahoe-X1은 대규모 perturbation 실험 데이터—수천 가지 약물 또는 유전자 perturbation에 대한 scRNA-seq 프로파일—로 훈련되어, 실험하지 않은 새로운 perturbation의 효과를 예측하는 능력을 갖는다. 이는 약물 스크리닝의 가상화(in silico screening)를 가능하게 하는 중요한 발전이다.

### TissueFormer: 조직 수준의 컨텍스트

단일세포 수준을 넘어 조직 전체의 세포 구성과 상호작용을 모델링하는 시도도 등장했다. [[benjamin-zador-2026-tissueformer|Benjamin-Zador 2026]]의 TissueFormer는 조직 내 세포들의 집합적 상태를 표현하는 모델로, 개별 세포의 전사 상태뿐 아니라 세포 간의 공간적·기능적 관계를 통합적으로 학습한다. 이는 foundation model의 스케일을 단일세포에서 조직 수준으로 확장하는 방향이다.

### 지식 그래프와의 통합: TxPert

Foundation model의 또 다른 발전 방향은 기존 생물학적 지식(유전자 상호작용 네트워크, pathway database, protein-protein interaction network)을 모델에 통합하는 것이다. [[wenkel-tu-2026-txpert-knowledge-graphs|Wenkel-Tu 2026]]의 TxPert는 생물학적 지식 그래프(knowledge graph)를 perturbation prediction 모델에 통합하여, 데이터가 희소한(data-sparse) 상황에서도 지식 그래프의 관계적 구조를 통해 더 정확한 예측을 달성했다. 이는 순수 데이터 기반 학습과 지식 기반 추론의 하이브리드 접근법이다.

---

## 임상 응용

### 약물 반응 예측과 환자 계층화

scRNA-seq와 foundation model의 결합은 환자 샘플에서 직접 약물 반응을 예측하는 것을 가능하게 한다. 환자 종양의 세포 구성, 각 세포의 전사 상태, 면역 환경의 특성을 foundation model에 입력하면 어떤 약물 조합이 효과적일지 예측할 수 있다. 이는 **in silico personalized medicine**의 핵심 구성 요소가 될 수 있다.

### Resistance Mechanism 규명

치료 전-후 scRNA-seq 비교는 어떤 세포 집단이 살아남아 저항성을 획득하는지를 단일세포 해상도로 밝힌다. Foundation model은 이 저항성 획득 과정을 더 정확하게 모델링하고, 저항성 표현형을 역전시킬 수 있는 개입 지점(intervention point)을 예측하는 데 활용될 수 있다.

---

## 한계와 전망

현재 single-cell foundation model들은 몇 가지 근본적 도전에 직면해 있다. 첫째, 훈련 데이터의 편향: 공개된 scRNA-seq 데이터는 특정 세포 유형(면역세포, 암세포)과 특정 기술 플랫폼(10x Chromium)에 크게 치우쳐 있다. 둘째, 전사체-표현형 연결의 복잡성: 유전자 발현이 세포 기능을 완전히 결정하지는 않으며, 번역 후 수식(post-translational modification)과 단백질 수준의 조절이 빠져 있다. 셋째, 해석가능성(interpretability): 수억 개의 파라미터를 가진 모델이 어떤 생물학적 원리를 학습했는지 이해하는 것은 여전히 어렵다.

그럼에도 불구하고, 대규모 perturbation 데이터의 축적과 multi-modal 통합(전사체 + 후성유전체 + 공간 정보)이 진행됨에 따라 single-cell foundation model은 암 생물학의 근본적 질문에 답하는 강력한 도구로 자리잡을 것이다.

---

## 참고문헌

- [[sande-2023-applications-single-cell-rna-sequencing|van de Sande 2023]] — scRNA-seq 응용 전반 리뷰
- [[llora-batlle-2024-10x-flex-fixed-xenograft-single-cell|Llorà-Batlle 2024]] — 10x Flex 고정 샘플 처리
- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm|Gandhi 2025]] — Tahoe-X1 perturbation foundation model
- [[benjamin-zador-2026-tissueformer|Benjamin-Zador 2026]] — TissueFormer 조직 수준 모델
- [[wenkel-tu-2026-txpert-knowledge-graphs|Wenkel-Tu 2026]] — TxPert 지식 그래프 통합
- [[zhang-2026-igof-perturb-seq|Zhang 2026]] — iGOF Perturb-seq 방법론
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs|Valle 2025]] — Pan-cancer TME motif 분석
