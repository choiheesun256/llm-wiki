---
title: "암 진단과 예후 예측에 사용되는 AI/딥러닝 모델들은 어떤 것들이 있고, 어떤 데이터를 활용하는가?"
type: question
status: active
category: [AI-modeling, deep-learning, pathology, spatial-transcriptomics]
source_files:
  - zhang-2026-multi-embed-pathology-wsi-multimodal.md
  - khoraminia-2026-predicting-bladder-cancer-molecular-subtypes-bcg.md
  - tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics.md
  - cui-2026-haiku-spatial-biology-clinical-histology.md
  - kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial.md
  - zhong-2024-domain-generalization-enables-general-cancer.md
  - hoang-2024-prediction-dna-methylation-based-tumor.md
  - hoang-2024-deep-learning-framework-predict-cancer.md
  - liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify.md
  - zhang-2025-thor-platform-cell-level-investigation-spatial.md
  - jiang-2024-meti-deep-learning-approach-spatial.md
  - steyaert-2023-multimodal-data-fusion-cancer-biomarker.md
updated: 2026-05-19
---

# 암 진단과 예후 예측에 사용되는 AI/딥러닝 모델들은 어떤 것들이 있고, 어떤 데이터를 활용하는가?

## 짧은 답변

암 진단과 예후 예측을 위한 AI/딥러닝 접근법은 크게 병리 이미지 기반, spatial transcriptomics 기반, single-cell 기반, 그리고 다양한 modality를 통합하는 multimodal fusion으로 분류된다. 최신 모델들은 H&E whole slide image(WSI)로부터 분자 프로파일을 직접 추론하거나, spatial gene expression을 가상으로 생성하는 수준까지 발전했다. 그러나 외부 코호트에 대한 일반화(generalization), 임상적 해석 가능성(interpretability), 전향적 검증(clinical validation)이 공통 과제로 남아있다.

## 상세 답변

### 1. 병리 이미지 기반 (Pathology-based AI)

H&E 슬라이드는 암 진단의 표준 도구로서 막대한 아카이브가 존재한다. 최근 딥러닝 모델들은 이 루틴 병리 이미지에서 분자적 정보까지 추출하는 방향으로 발전했다.

**Multi-Embed** ([[zhang-2026-multi-embed-pathology-wsi-multimodal]])는 Nature Methods(2026)에 발표된 unified multimodal embedding 프레임워크로, WSI morphology를 transcriptomics, methylation, proteomics, mutation, spatial omics 등 5개 이상의 omics modality와 공유 latent space에 정렬한다. UNI pathology foundation model로 WSI tile feature를 추출하고, modality별 feed-forward network로 omics 데이터를 동일 공간에 투영하는 구조다. 12개 TCGA 암 유형에서 morphology-to-HVG expression prediction PCC 0.37을 달성하며, HE2RNA(0.29)와 DeepPT(0.32)를 능가한다. 사이클로포스파미드 약물 반응 예측에도 적용 가능하다.

**BCG 반응 예측** ([[khoraminia-2026-predicting-bladder-cancer-molecular-subtypes-bcg]])는 비근침윤성 방광암(NMIBC) 환자 231명의 H&E WSI로부터 BCG Response Subtypes(BRS)를 예측하는 Multiple Instance Learning(MIL) 모델이다. 내부 AUC 0.79, 외부 검증 AUC 0.71을 달성하며, 고비용 분자 검사를 대체할 수 있는 비용 효율적 바이오마커 전략을 제시한다.

**DeepPT + ENLIGHT** ([[hoang-2024-deep-learning-framework-predict-cancer]])는 2단계 간접 프레임워크로, DeepPT(ResNet50 + autoencoder + MLP)가 H&E로부터 genome-wide mRNA 발현을 예측하고, ENLIGHT가 이 imputed expression으로 치료 반응을 추론한다. 16개 TCGA 암 유형과 5개 독립 임상 코호트에서 검증되었으며, 예측 반응군에서 반응률이 39.5% 향상된다. ENLIGHT는 unsupervised이므로 새로운 약물에도 matched training data 없이 적용 가능하다.

### 2. Spatial AI: 공간적 분자 정보 예측

**Phoenix** ([[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]])는 latent flow matching 생성 모델로, H&E 이미지에서 single-cell 해상도의 virtual spatial transcriptomics를 추론한다. 16개 장기 시스템, 7개 Xenium gene panel에서 수집한 2,220만 개 cell-image/expression pair로 학습하였으며, 10,000명 이상 환자 코호트에서 검증되어 기존 SOTA 대비 Spearman correlation을 35~173% 향상시킨다. 특히 새로운 조직이나 암 유형에 retraining 없이 zero-shot 전이가 가능하고, in silico 치료 반응 분석(백금, trastuzumab)도 지원한다.

**HAIKU** ([[cui-2026-haiku-spatial-biology-clinical-histology]])는 H&E pathology, multiplex immunofluorescence(mIF) spatial protein, clinical text를 공유 표현 공간에 정렬하는 tri-modal contrastive foundation model이다. 3,218개 tissue section, 1,606명 환자, 11개 장기 유형의 2,670만 patch pair로 학습하며, 3방향 cross-modal retrieval, zero-shot biomarker inference, metadata counterfactual analysis를 지원한다. 생존 C-index 0.737, 52개 바이오마커의 평균 Pearson correlation 0.718을 달성한다.

**SPATA2** ([[kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial]])는 spatial transcriptomic 데이터에서 조직학적 랜드마크(종양 경계 등)로부터 거리에 따른 유전자 발현 기울기를 정량화하는 알고리즘으로, R 패키지로 구현된다. 교모세포종(GBM)의 종양-정상 경계 침윤 관련 유전자 프로그램을 식별하는 데 적용되었다.

### 3. Single-cell AI: 악성 세포 주석

**Cancer-Finder** ([[zhong-2024-domain-generalization-enables-general-cancer]])는 single-cell 및 spatial transcriptomic 데이터에서 악성 세포를 범용적으로 주석하는 domain generalization 기반 딥러닝 알고리즘이다. TISCH 데이터베이스에서 13개 조직 유형의 32만 8,230개 single-cell profile로 학습하며, pan-cancer 평균 정확도 95.16%, 외부 검증 98.30%를 달성한다. Variance risk(조직 간 분산)와 average risk(전체 교차 엔트로피)를 동시에 최소화하는 empirical risk extrapolation 전략으로 domain shift 문제를 극복한다. ST 데이터셋으로 학습 세트를 교체하면 공간 데이터에도 적용 가능하며, 5개 ccRCC ST 슬라이드에서 종양-정상 경계의 10-gene prognostic signature를 도출했다.

### 4. 분자 프로파일 예측: DNA Methylation

**DEPLOY** ([[hoang-2024-prediction-dna-methylation-based-tumor]])는 CNS 종양 분류를 위한 3-모델 통합 시스템이다. 직접 모델(H&E → 종양 유형), 간접 모델(H&E → predicted methylation → ML 분류), 인구통계학적 모델(나이/성별/위치)을 결합하여 CNS 종양 10개 주요 카테고리를 분류한다. NCI 환자 1,796명으로 학습하고, 외부 코호트 2,156명에서 검증하여 전체 정확도 95%, balanced accuracy 91%를 달성한다. 중간 분자 feature(메틸화) 예측 후 분류하는 간접 모델(AUPRC 0.82)이 직접 분류 모델(AUPRC 0.77)보다 우수한 것이 주목할 만하다.

### 5. Multimodal Fusion: 복합 데이터 통합

**MOFS (Liu 2025)** ([[liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify]])는 IDH-wildtype 성인 신경교종 1,194명 환자에서 MRI radiomics, WSI pathomics, WES, RNA-seq, LC-MS proteomics를 통합하는 Multimodal Fusion Subtyping 프레임워크다. 11개 fusion 알고리즘 + COCA로 3개의 robust subtype을 도출하며(MOFS1: proneural, MOFS2: proliferative, MOFS3: TME-rich), DNN classifier로 비침습적 MRI 기반 아형 예측이 가능하다.

**Steyaert 2023** ([[steyaert-2023-multimodal-data-fusion-cancer-biomarker]])의 Nature Machine Intelligence 리뷰는 early fusion, intermediate fusion, late fusion의 3가지 전략을 체계적으로 비교한다. 대부분의 태스크에서 intermediate fusion(표현 수준 통합)이 가장 우수하며, attention mechanism이 modality 중요도 가중치 학습에 효과적임을 제시한다.

### 6. Platform Tools

**Thor** ([[zhang-2025-thor-platform-cell-level-investigation-spatial]])는 Nature Communications(2025)에 발표된 종합 플랫폼으로, anti-shrinking Markov graph diffusion 방법으로 spot-level ST 데이터에서 외부 scRNA-seq reference 없이 in silico single-cell transcriptome을 추론한다. 10개 분석 모듈(pathway enrichment, TF activity, TME, CNV, DEG, spatial module detection 등)과 Mjolnir 웹 인터페이스를 포함하며, ISH/MERFISH/Xenium/Stereo-seq/Visium HD 등 5개 플랫폼에서 검증되었다.

**METI** ([[jiang-2024-meti-deep-learning-approach-spatial]])는 spatial transcriptomics(Visium)와 H&E morphology를 5개 모듈로 통합하는 딥러닝 프레임워크다: cell type deconvolution, gene expression imputation, spatial domain identification, cell-cell interaction inference, morphological feature extraction. CNN 기반 형태학 추출과 graph neural network를 조합하여 위암, 폐암, 방광암에서 종합적 TME 프로파일링을 수행한다.

### 7. 주요 한계와 과제

| 과제 | 구체적 문제점 |
|------|-------------|
| **Generalization** | 단일 기관 학습 데이터, 암 유형 간 도메인 이동, 스캐너/염색 배치 효과 |
| **Interpretability** | 예측 근거의 생물학적 타당성 검증 부재, 임상의 신뢰 확보 어려움 |
| **Clinical validation** | 대부분 retrospective 연구; 전향적 검증 및 무작위 대조 시험 필요 |
| **Data modality 제한** | Phoenix는 Xenium gene panel로 한정; DeepPT는 bulk-level expression |
| **학습 데이터 불균형** | 희귀 암 유형, 소수 집단 코호트 과소 대표 |

## 핵심 비교표

| 모델 | 입력 데이터 | 출력/예측 | 특징 | 참고문헌 |
|------|-----------|---------|------|---------|
| Multi-Embed | H&E WSI | transcriptomics, methylation, proteomics, mutation | UNI 기반 unified embedding | [[zhang-2026-multi-embed-pathology-wsi-multimodal]] |
| Phoenix | H&E WSI | Virtual ST (single-cell resolution) | Latent flow matching, zero-shot | [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]] |
| HAIKU | H&E + mIF + clinical text | Biomarker inference, survival | Tri-modal contrastive | [[cui-2026-haiku-spatial-biology-clinical-histology]] |
| DEPLOY | H&E WSI | DNA methylation → CNS tumor type | Indirect (H&E → methylation → class) | [[hoang-2024-prediction-dna-methylation-based-tumor]] |
| DeepPT+ENLIGHT | H&E WSI | mRNA expression → treatment response | Unsupervised response prediction | [[hoang-2024-deep-learning-framework-predict-cancer]] |
| Cancer-Finder | scRNA-seq / ST | Malignant cell annotation | Domain generalization, pan-cancer | [[zhong-2024-domain-generalization-enables-general-cancer]] |
| BCG predictor | H&E WSI | BRS molecular subtype | MIL, AUC 0.79 | [[khoraminia-2026-predicting-bladder-cancer-molecular-subtypes-bcg]] |
| MOFS | MRI + WSI + WES + RNA + proteomics | Glioma subtypes (3) | 11 fusion algorithms | [[liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify]] |
| Thor | H&E + ST (spot-level) | Cell-level ST transcriptomes | Markov diffusion, reference-free | [[zhang-2025-thor-platform-cell-level-investigation-spatial]] |
| METI | Visium ST + H&E | TME profiling (5 modules) | CNN + GNN | [[jiang-2024-meti-deep-learning-approach-spatial]] |
| SPATA2 | Visium ST + H&E landmarks | Gene expression gradients | Distance-dependent modeling | [[kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial]] |

## 관련 논문

- [[zhang-2026-multi-embed-pathology-wsi-multimodal]] — H&E WSI와 5+ omics modality를 unified embedding으로 정렬하는 Multi-Embed (Nature Methods 2026)
- [[khoraminia-2026-predicting-bladder-cancer-molecular-subtypes-bcg]] — H&E에서 방광암 BCG 반응 아형을 예측하는 MIL 모델 (AUC 0.79)
- [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]] — H&E에서 virtual ST를 추론하는 Phoenix, latent flow matching 기반 (bioRxiv 2026)
- [[cui-2026-haiku-spatial-biology-clinical-histology]] — H&E, mIF, clinical text tri-modal contrastive 모델 HAIKU
- [[kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial]] — 조직학 랜드마크 기반 유전자 발현 기울기 분석 SPATA2 (Nat Comms 2024)
- [[zhong-2024-domain-generalization-enables-general-cancer]] — Domain generalization 기반 pan-cancer 악성세포 주석기 Cancer-Finder (Nat Comms 2024)
- [[hoang-2024-prediction-dna-methylation-based-tumor]] — H&E에서 DNA methylation 예측을 통한 CNS 종양 분류 DEPLOY (Nat Med 2024)
- [[hoang-2024-deep-learning-framework-predict-cancer]] — H&E → imputed mRNA → 치료 반응 예측 DeepPT+ENLIGHT (Nat Cancer 2024)
- [[liu-2025-multimodal-fusion-radio-pathology-proteogenomics-identify]] — MRI/WSI/proteogenomics 통합으로 교종 3-subtype MOFS 도출 (Nat Comms 2025)
- [[zhang-2025-thor-platform-cell-level-investigation-spatial]] — ST + H&E 통합 cell-level 분석 플랫폼 Thor (Nat Comms 2025)
- [[jiang-2024-meti-deep-learning-approach-spatial]] — Visium ST + H&E 5모듈 통합 TME 프로파일링 METI (Nat Comms 2024)
- [[steyaert-2023-multimodal-data-fusion-cancer-biomarker]] — Cancer biomarker 발견을 위한 multimodal DL fusion 전략 리뷰 (Nat Mach Intell 2023)

## Related pages

- [[AI-modeling]]
- [[deep-learning-pathology]]
- [[spatial-transcriptomics]]
- [[spatial-ai-for-cancer]]
- [[tumor-microenvironment]]
- [[multimodal-integration]]
- [[biomarker-prediction]]
