---
title: "scRNA-seq"
type: concept
updated: 2026-05-19
---

# 단일세포 RNA 시퀀싱 (Single-cell RNA Sequencing, scRNA-seq)

## 정의

단일세포 RNA 시퀀싱(scRNA-seq)은 개별 세포 수준에서 전사체를 정량 분석하는 기술로, 세포 유형의 이질성, 세포 상태, 발달 경로, 세포 간 상호작용 등을 고해상도로 규명할 수 있다. 10x Genomics Chromium 플랫폼이 현재 가장 널리 사용되며, 수만에서 수십만 개의 단일세포를 동시에 프로파일링한다. 암 연구에서는 종양 내 이질성, 종양 미세환경(TME) 세포 구성, 치료 내성 세포 아집단 발견에 핵심적으로 활용된다.

최근에는 scRNA-seq과 공간 전사체(spatial transcriptomics), ATAC-seq, 단백질체를 결합한 멀티오믹스 접근법이 확산되고 있으며, 대규모 단일세포 재단 모델(single-cell foundation model)도 등장하고 있다. 고정 샘플(FFPE 포함) 분석을 위한 probe-based 기술(10x Flex)도 임상 연구 적용 범위를 넓히고 있다.

## 핵심 원리

- **Droplet-based 플랫폼**: 10x Genomics Chromium — 액적(droplet) 내 단일세포 캡처, UMI(unique molecular identifier) 기반 정량, 수만 세포 동시 분석
- **세포 유형 발견**: 비지도 군집화(unsupervised clustering) + 마커 유전자 기반 주석(annotation)으로 암 세포 아집단, 면역 세포 하위형, CAF 아형 등 규명
- **치료 표적 발굴**: 53개 다발성 골수종 골수 검체, 146,725 단일세포 분석으로 38개 MM 특이 마커 유전자 규명 — 11개 신규 치료 표적 포함 (Yao 2023)
- **HGSOC 면역 이질성**: 42명 160개 부위 scRNA-seq으로 HGSOC 유전체 아형별 면역 회피 모드 및 부위 특이적 세포 상태 규명 (Vázquez-García 2022)
- **10x Flex for PDX**: 혼합 human+mouse probe set으로 이종이식 모델에서 종간 deconvolution 없이 dual-species scRNA-seq 가능 (Llora-Batlle 2024)
- **단일세포 재단 모델**: Tahoe-x1은 100M+ 단일세포, 50개 암세포주, 1,100+ 약물 perturbation 기반 — drug token 명시적 입력으로 약물 반응 예측 (Gandhi 2025)
- **SCENIC+ 통합**: scRNA-seq + scATAC-seq 결합으로 enhancer 구동 유전자 조절 네트워크(GRN) 추론 — 전사인자 perturbation 효과 예측 가능 (Gonzalez-Blas 2023)
- **공간 통합**: scRNA-seq과 Visium 공간 전사체 통합으로 세포 유형 분포와 리간드-수용체 상호작용의 공간적 맥락 파악

## 위키 내 관련 논문

- [[yao-2023-single-cell-discovery-multiomic-characterization-therapeutic]] — 다발성 골수종 scRNA-seq 치료 표적 발굴
- [[vzquezgarca-2022-ovarian-cancer-mutational-processes-drive]] — HGSOC 다부위 scRNA-seq, 유전체 아형-면역 연결
- [[llora-batlle-2024-10x-flex-fixed-xenograft-single-cell]] — 10x Flex PDX 이종이식 dual-species scRNA-seq
- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]] — Tahoe-x1 perturbation 기반 단일세포 재단 모델

## 관련 개념

- [[single-cell-methods]]
- [[single-cell-foundation-models]]
- [[spatial-transcriptomics]]
- [[tumor-microenvironment]]
- [[perturbation-modeling]]
- [[multi-omics]]
