---
title: TxGNN
type: source
status: active
source_files: []
updated: 2026-04-29
---

# TxGNN

> 📄 [Huang et al., *Nature Medicine* (2024)](https://doi.org/10.1038/s41591-024-03233-x)

## 요약

`TxGNN`은 medical knowledge graph 위에서 학습된 GNN foundation model로, 17,080개 질병에 대해 zero-shot drug repurposing을 수행한다. 치료제가 없는 희귀 질환에도 적용 가능한 점이 핵심이다.

## 핵심 내용

- 17,080개 질병과 7,957개 치료 후보를 포함하는 knowledge graph에서 사전학습
- Metric learning으로 치료제가 있는 질병에서 없는 질병으로 지식 전이
- Indication 예측 49.2%, contraindication 예측 35.1% 정확도 향상 (8개 방법 대비)
- Explainer 모듈이 다중 hop 경로로 예측 근거를 제시
- 대규모 의료 시스템의 off-label 처방과 다수 일치

## Drug repurposing과의 관련성

- Zero-shot 능력으로 기존에 약물이 없는 질환에도 repurposing 후보 제안 가능
- Knowledge graph 기반이므로 [[network-medicine]]과 자연스럽게 연결
- Explainability가 있어 임상의의 의사결정을 지원

## 한계점

- Knowledge graph의 편향(잘 연구된 질병/약물 위주)이 예측에 반영될 수 있음
- Zero-shot 예측의 실제 임상 검증은 아직 제한적

## 관련 페이지

- [[drug-repurposing]]
- [[network-medicine]]
- [[KG Drug Repurposing Review]]
