---
title: "Deep Learning"
type: concept
updated: 2026-05-20
---

# Deep Learning (딥러닝)

## 정의
Deep learning은 다층 인공 신경망(artificial neural network)을 이용한 머신러닝 패러다임으로, 암 연구에서 이미지 분석(병리 슬라이드), 멀티오믹스 패턴 인식, 약물 반응 예측, 생존 예측 등 광범위하게 활용된다. 대규모 레이블 데이터와 GPU 연산 능력의 발전에 힘입어 임상 oncology 에서 점차 실용화되고 있다.

## 핵심 원리
- **CNN (Convolutional Neural Network)**: 병리 이미지, WSI(Whole Slide Image)에서 형태적 특징 추출
- **Transformer / Attention**: 시퀀스 및 멀티모달 데이터(유전자 발현, 이미지)의 장거리 의존성 모델링
- **Self-supervised / Contrastive learning**: 레이블이 없는 대규모 생물학적 데이터 사전 학습
- **Multi-modal fusion**: 이미지 + 오믹스 + 임상 데이터를 결합한 예측 모델
- 해석 가능성(explainability) 확보가 임상 적용의 주요 과제

## 위키 내 관련 논문
- [[zhong-2024-domain-generalization-enables-general-cancer]]
- [[hoang-2024-deep-learning-framework-predict-cancer]]
- [[steyaert-2023-multimodal-data-fusion-cancer-biomarker]]

## 관련 개념
- [[deep-learning-pathology]]
- [[biomarker-discovery]]
- [[multi-omics-integration]]
