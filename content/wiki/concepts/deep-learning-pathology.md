---
title: "Deep Learning for Pathology"
type: concept
updated: 2026-05-20
---

# Deep Learning for Pathology (병리학을 위한 딥러닝)

## 정의
Computational pathology에서 deep learning은 H&E 또는 IHC 염색 조직 슬라이드(WSI, Whole Slide Image)를 분석하여 암 아형 분류, 바이오마커 예측, 예후 추정, 공간적 TME 구성 추론 등을 수행한다. 수십 기가픽셀에 달하는 고해상도 이미지를 처리하기 위해 MIL(Multiple Instance Learning) 등 특수 아키텍처가 활용된다.

## 핵심 원리
- **MIL (Multiple Instance Learning)**: WSI를 타일로 분할하여 slide-level 예측에 집계
- **Foundation models**: CONCH, UNI 등 대규모 병리 데이터로 사전 학습된 인코더
- **Spatial transcriptomics 예측**: 조직 이미지에서 유전자 발현 패턴을 직접 imputation
- **Multi-modal**: 이미지 + 오믹스 결합으로 단독 모달보다 향상된 바이오마커 예측
- 병리의사 수준 또는 초인 수준의 진단 보조 가능성 증명

## 위키 내 관련 논문
- [[zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding]]
- [[jiang-2024-meti-deep-learning-approach-spatial]]
- [[khoraminia-2026-predicting-bladder-cancer-molecular-subtypes-bcg]]

## 관련 개념
- [[deep-learning]]
- [[bladder-cancer]]
- [[tumor-heterogeneity]]
