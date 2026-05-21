---
title: "Day 13: AI가 바꾸는 암 연구"
draft: false
---

## 데이터 차원의 폭발과 AI의 필요성

현대 암 연구는 데이터의 위기를 맞이하고 있다. 단일 환자의 종양을 characterize하기 위해 수십만 개의 유전자 발현값, 수억 픽셀의 병리 이미지, 수천 종의 대사체 농도가 동시에 수집된다. 전통적인 통계 모델은 이 고차원 공간에서 작동하기 어렵다. 변수의 수가 샘플 수를 압도하는 "curse of dimensionality" 문제가 발생하고, 선형 가정이 붕괴되며, 데이터 타입 간 이질성이 분석을 가로막는다.

AI, 특히 deep learning은 이 문제를 근본적으로 다른 방식으로 접근한다. 수백만 개의 파라미터를 통해 데이터로부터 직접 표현(representation)을 학습하며, 인간이 명시적으로 정의한 피처 없이도 패턴을 추출한다. Self-supervised learning과 foundation model의 등장은 레이블이 부족한 의료 데이터 환경에서도 강력한 표현 학습을 가능하게 했다. 이로써 AI는 암 생물학의 거의 모든 분야 — 진단, 분류, 약물 발굴, 예후 예측 — 에 침투하고 있다.

## 병리 이미지 분석 — WSI에서 분자 아형 예측까지

Whole-slide image(WSI)는 수십억 픽셀에 달하는 고해상도 병리 슬라이드로, 종양의 형태학적 정보를 담고 있다. 전통적으로 병리학자는 이 이미지를 육안으로 판독하여 조직학적 등급과 아형을 결정했다. 그러나 이 과정은 주관적이며, 관찰자 간 재현성이 낮고, 분자 수준의 정보를 직접 추출하지 못한다는 한계가 있다.

Deep learning 기반 computational pathology는 WSI로부터 분자 아형, 돌연변이 상태, 예후 정보를 직접 예측하는 것이 가능함을 보여주었다. 이러한 접근에서 핵심 과제는 domain shift 문제다. 병원마다 슬라이드 준비 방식, 염색 농도, 스캐너 기종이 다르기 때문에, 한 기관에서 훈련된 모델이 다른 기관에서 성능이 크게 저하되는 현상이 빈번하게 발생한다. (Zhong 2024)[[zhong-2024-domain-generalization-enables-general-cancer]]는 domain generalization 전략을 통해 다기관 데이터에서 일관된 성능을 유지하는 cancer pathology AI를 개발했다. 이 연구는 모델이 특정 기관의 기술적 아티팩트 대신 생물학적으로 의미 있는 특징을 학습하도록 유도하는 것이 범용 병리 AI의 핵심임을 강조했다.

한편, 병리 이미지에서 공간 정보를 복원하는 시도도 이루어지고 있다. Spatial transcriptomics는 조직 내 유전자 발현의 공간적 분포를 측정하지만, 비용과 기술적 난이도 때문에 임상 적용이 어렵다. (Cui 2026)[[cui-2026-haiku-spatial-biology-clinical-histology]]의 Haiku는 일반적인 H&E 염색 이미지로부터 spatial gene expression 패턴을 예측하는 모델로, 기존 임상 병리 슬라이드를 사실상 spatial biology 데이터로 변환하는 가능성을 제시했다. (Zhang 2026)[[zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding]]의 Multi-Embed 접근 역시 병리 형태와 분자 데이터를 공유 embedding 공간에 통합하여 병리 이미지만으로 분자적 특성을 해독하는 체계를 제안했다.

## Diffusion Models과 생성 AI — 분자 설계와 단백질 구조

Generative AI는 새로운 분자와 단백질 구조를 생성하는 데 혁명을 일으키고 있다. Diffusion model은 데이터에 점진적으로 노이즈를 추가하는 forward process와, 이 노이즈로부터 원래 데이터를 복원하는 reverse process를 학습한다. 이 원리를 분자 구조에 적용하면, 원하는 특성을 가진 완전히 새로운 분자를 생성하는 것이 가능해진다.

(Peebles & Xie 2023)[[peebles-xie-2023-diffusion-transformers]]는 기존의 U-Net 기반 diffusion 아키텍처 대신 Transformer를 backbone으로 사용하는 Diffusion Transformer(DiT)를 제안했다. DiT는 스케일링 법칙을 따라 모델 크기가 커질수록 생성 품질이 향상되는 특성을 보이며, 이는 대규모 분자 생성 모델 구축에 이론적 토대를 제공했다. (Chen 2023)[[chen-2023-pixart-alpha]]의 PixArt-α는 diffusion 모델의 효율적 훈련 전략을 제시했고, (Zhu 2025)[[zhu-2025-unveiling-adaln-zero]]는 AdaLN-Zero 메커니즘을 분석하여 조건부 생성에서 안정적인 학습이 가능한 이유를 이론적으로 규명했다.

약물 발굴 맥락에서 생성 AI의 의미는 더욱 크다. (Ohlan 2025)[[ohlan-2025-molgene-e-inverse-molecular-design-transcriptomic-reversal]]의 MolGene-E는 역방향 분자 설계(inverse molecular design)에 transcriptomic reversal 전략을 결합했다. 이 접근은 특정 유전자 발현 시그니처를 "원상 복구"하는 방향으로 분자를 설계한다 — 즉, 암세포의 비정상적 발현 패턴을 정상에 가깝게 되돌릴 수 있는 화합물을 생성하는 것이다. 이는 표적 기반 설계(target-based design)를 보완하는 표현형 기반 분자 설계(phenotypic molecular design)의 새로운 패러다임을 제시한다.

## 가상 스크리닝 혁명 — Contrastive Learning 기반 대규모 스크리닝

전통적인 가상 스크리닝은 단백질-리간드 결합 에너지를 계산하여 후보 화합물을 순위화한다. 이 방식은 물리화학적으로 의미 있지만, 계산 비용이 크고 수십억 개의 화합물 라이브러리 전체를 스크리닝하기 어렵다. Contrastive learning은 이 병목을 해결하는 새로운 접근을 제공한다.

(Jia 2026)[[jia-2026-drugclip-contrastive-learning-genome-scale]]의 DrugCLIP은 CLIP(Contrastive Language-Image Pre-Training)의 원리를 단백질-약물 쌍에 적용했다. 단백질 pocket 표현과 약물 분자 표현을 동일한 embedding 공간에 학습시켜, 결합 파트너끼리는 가깝게, 비결합 쌍은 멀게 배치한다. 이렇게 학습된 표현 공간에서는 단순한 cosine similarity 계산만으로 수십억 개의 화합물을 초고속 스크리닝할 수 있다. DrugCLIP은 genome-scale 스크리닝에서 기존 docking 방법과 비교 가능한 성능을 훨씬 낮은 계산 비용으로 달성했다.

(Zhang 2026)[[zhang-2026-proteinaligner-tri-modal-contrastive-learning]]의 ProteinAligner는 tri-modal contrastive learning을 통해 단백질 서열, 구조, 기능 정보를 통합한 표현을 학습했다. 이 접근은 약물 표적으로서의 단백질 특성을 보다 풍부하게 표현하고, 새로운 기능적 관계를 발견하는 데 활용될 수 있다.

## Multi-modal Fusion — 서로 다른 Omics 데이터의 통합

단일 데이터 타입의 한계를 극복하기 위해 여러 modality를 융합하는 연구가 활발히 진행되고 있다. Multi-modal fusion의 핵심 과제는 서로 다른 데이터 공간을 어떻게 통합할 것인가 하는 문제다.

(Steyaert 2023)[[steyaert-2023-multimodal-data-fusion-cancer-biomarker]]는 병리 이미지와 genomic 데이터를 통합하는 multi-modal fusion 전략을 체계적으로 정리하고, 암 바이오마커 발굴에서의 적용 가능성을 검토했다. 서로 다른 modality가 보완적인 정보를 제공할 때 통합의 이득이 극대화됨을 보였다 — 예를 들어, 유전체 데이터가 분자 아형을 결정하는 반면 병리 이미지는 공간적 맥락과 종양 미세환경 정보를 추가로 제공한다.

(Tran 2026)[[tran-2026-phoenix-virtual-spatial-transcriptomics]]의 Phoenix는 virtual spatial transcriptomics를 구현했다. 일반 bulk RNA-seq 데이터와 spatial transcriptomics 레퍼런스를 결합하여 공간 정보가 없는 샘플에서 가상의 공간적 발현 분포를 복원하는 접근이다. 이는 방대한 기존 bulk RNA-seq 데이터를 공간 해상도의 맥락에서 재해석할 수 있게 하는 실용적 전략이다.

## 약물 반응 예측 — Transcriptomic Signature 활용

약물 반응을 개인 수준에서 예측하는 것은 정밀 종양학의 핵심 목표다. 전사체 수준의 반응 시그니처는 약물의 작용 기전을 반영하며, 이를 활용한 예측 모델이 다수 개발되었다.

(Tong 2026)[[tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor]]은 LINCS 데이터베이스의 대규모 약물-전사체 반응 데이터와 pan-cancer genomic 프로파일을 통합하여 HDAC inhibitor에 대한 반응을 예측하는 multi-modal 접근을 제시했다. HDAC inhibitor는 epigenetic 기전을 통해 광범위한 유전자 발현 변화를 유도하며, 이 복잡한 전사체 반응 패턴을 AI가 학습함으로써 반응자와 비반응자를 사전에 구분할 수 있다.

약물 반응 예측의 또 다른 전략은 MolGene-E(Ohlan 2025)가 채택한 transcriptomic reversal이다. 이 접근에서는 특정 화합물 처리 시 유발되는 전사체 변화가 암세포의 비정상적 시그니처를 얼마나 "역전(reverse)"시키는지를 계산하여, 반응 가능성을 예측한다. 이는 CMap(Connectivity Map) 프레임워크의 논리적 확장이며, 생성 AI와 결합함으로써 기존 화합물 탐색을 넘어 새로운 분자 설계로 이어진다.

## 결론

AI는 암 연구의 각 단계를 개별적으로 가속화하는 동시에, 이질적인 데이터 타입을 연결하는 다리 역할을 한다. 병리 이미지에서 공간 전사체를 예측하고, 전사체 시그니처로 분자를 설계하며, contrastive learning으로 수십억 개의 화합물을 스크리닝하는 일련의 워크플로우는 이전에는 불가능했던 분석을 현실로 만들었다. 향후 과제는 이러한 모델들의 임상적 해석 가능성(interpretability)과 실제 환자 코호트에서의 검증이다.

## 참고문헌

- [[zhong-2024-domain-generalization-enables-general-cancer|Zhong 2024]] — Domain generalization for cancer pathology AI
- [[cui-2026-haiku-spatial-biology-clinical-histology|Cui 2026]] — Haiku: spatial biology from clinical histology
- [[peebles-xie-2023-diffusion-transformers|Peebles & Xie 2023]] — Scalable Diffusion Models with Transformers (DiT)
- [[chen-2023-pixart-alpha|Chen 2023]] — PixArt-α: efficient diffusion training
- [[zhu-2025-unveiling-adaln-zero|Zhu 2025]] — Unveiling AdaLN-Zero in conditional generation
- [[jia-2026-drugclip-contrastive-learning-genome-scale|Jia 2026]] — DrugCLIP: contrastive learning for genome-scale virtual screening
- [[steyaert-2023-multimodal-data-fusion-cancer-biomarker|Steyaert 2023]] — Multimodal data fusion for cancer biomarker discovery
- [[zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding|Zhang 2026]] — Multi-Embed: decoding pathological morphologies
- [[zhang-2026-proteinaligner-tri-modal-contrastive-learning|Zhang 2026]] — ProteinAligner: tri-modal contrastive learning
- [[tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor|Tong 2026]] — Multimodal LINCS pan-cancer HDAC inhibitor response
- [[tran-2026-phoenix-virtual-spatial-transcriptomics|Tran 2026]] — Phoenix: virtual spatial transcriptomics
- [[ohlan-2025-molgene-e-inverse-molecular-design-transcriptomic-reversal|Ohlan 2025]] — MolGene-E: inverse molecular design via transcriptomic reversal
