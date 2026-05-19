---
title: "Single-Cell Transcriptomics"
type: concept
updated: 2026-05-20
---

# Single-Cell Transcriptomics (단일 세포 전사체학)

## 정의
Single-cell transcriptomics는 개별 세포 수준에서 RNA 발현 프로파일을 측정하는 기술 집합으로, 특히 scRNA-seq (single-cell RNA sequencing)이 대표적이다. 세포 집단의 평균이 아닌 각 세포의 고유한 전사 상태를 포착함으로써 세포 타입 다양성, 발달 궤적, 종양 이질성 등을 고해상도로 분석할 수 있다.

## 핵심 원리
- **10x Genomics Chromium** 등 droplet 기반 플랫폼이 대규모 단일 세포 캡처를 가능하게 함
- **Cell Ranger / Seurat / Scanpy** 등 파이프라인으로 UMI 카운트 행렬 → 클러스터링 → 마커 유전자 분석
- **Trajectory inference** (CellRank, Monocle)으로 세포 상태 전환 및 분화 경로 추론
- Spatial transcriptomics와 결합 시 세포 타입을 조직 맥락에 매핑 가능
- Perturbation scRNA-seq (Perturb-seq)으로 유전자 기능을 대규모로 스크리닝

## 위키 내 관련 논문
- [[sande-2023-applications-single-cell-rna-sequencing]]
- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]]
- [[jin-2024-advances-spatial-transcriptomics-applications-cancer]]

## 관련 개념
- [[multi-omics-integration]]
- [[tumor-heterogeneity]]
- [[spatial-transcriptomics]]
