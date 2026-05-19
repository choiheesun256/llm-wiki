---
title: "Spatial Transcriptomics Technology Comparison"
type: comparison
updated: 2026-05-19
---

# Spatial Transcriptomics 플랫폼 비교

## 개요

Spatial transcriptomics(공간 전사체학)는 조직 내 세포의 유전자 발현 정보를 공간적 위치 정보와 함께 측정하는 기술이다. 크게 세 범주로 나뉜다: (1) 공간 인덱싱(sequencing) 기반 — Visium, Visium HD, STEREO-seq, (2) In situ imaging 기반 — Xenium, MERFISH/MERSCOPE, (3) 혼합형 — GeoMx DSP. 각 플랫폼은 해상도, 유전자 커버리지, FFPE 호환성, 처리량, 비용 측면에서 서로 다른 트레이드오프를 가진다. Wiki에 수록된 논문들은 주로 Visium과 Xenium을 사용했으며, Rademacher et al. 2025는 5개 플랫폼을 같은 조직으로 직접 벤치마킹한 결과를 제공한다.

## 비교표

| 플랫폼 | 제조사 | 해상도 | 측정 유전자 수 | FFPE 호환 | 처리량 (cells/slide) | 접근 방식 | 강점 | 한계 | Wiki 논문 활용 |
|--------|--------|--------|----------------|-----------|---------------------|-----------|------|------|----------------|
| **Visium** | 10x Genomics | 55 µm/spot (다수 세포 포함) | 전체 전사체 (~20,000+) | 가능 (Visium for FFPE) | ~5,000 spots/section | Spatial barcoding + sequencing | Whole-transcriptome; 공개 파이프라인 풍부 | Single-cell 해상도 아님; spot당 여러 세포 혼합; 디컨볼루션 필요 | Ren 2023, Kiviaho 2024, Klein 2024, Jiang 2024 METI, Long 2023, Zhang 2026, Rademacher 2025 |
| **Visium HD** | 10x Genomics | 2 µm/bin (사실상 단세포 수준) | 전체 전사체 | 가능 | 수백만 bins/section | Spatial barcoding + sequencing (HD) | 거의 단세포 해상도 + 전체 전사체 동시 | 높은 비용; 대규모 데이터 처리 필요; 상용화 초기 | Zhang et al. 2026 (Spatial EcoTyper: 6개 ST 플랫폼 중 하나로 사용) |
| **Xenium** | 10x Genomics | 서브셀룰러 (<1 µm) | 패널 기반 (표준 313~5K Prime 유전자) | 가능 (FFPE 전용 설계) | 수십만~수백만 cells/run | In situ hybridization (ISH) | 단세포 이하 해상도; FFPE 임상 코호트 적합 | 패널 제한 (전체 전사체 아님); 스필오버/누화 문제 | Janesick 2023, Bilous 2026, Tran 2026 Phoenix (훈련 데이터), Zhang 2026, Rademacher 2025 |
| **MERFISH / MERSCOPE** | Vizgen | 서브셀룰러 (~100 nm) | 패널 기반 (~500–1,000+) | 가능 (최적화 필요) | 수십만~백만 cells/section | Multiplexed error-robust FISH (MERFISH) | 매우 높은 해상도; 정확한 단분자 검출 | 처리 시간 김; 데이터 처리 복잡 | Jin 2024 (리뷰에서 비교), Rademacher 2025 (Merscope 벤치마킹), Zhang 2026 (MERSCOPE 포함 6플랫폼) |
| **GeoMx DSP** | NanoString | ROI 기반 (수십~수백 µm 영역) | ~18,000 유전자 (WTA) 또는 단백질 패널 | 가능 | 수십~수백 ROI/section | Digital spatial profiling (DSP); photocleavable oligo | FFPE 적합; 유연한 ROI 선택; 단백질+RNA 동시 측정 | 단세포 해상도 없음; ROI 선택 편향 가능; 낮은 공간 연속성 | Jin 2024 (리뷰에서 비교); 직접 활용 논문 없음 |
| **STEREO-seq** | MGI/BGI | 500 nm (DNB array; 사실상 단세포 수준 가능) | 전체 전사체 | 가능 (개발 진행 중) | 수십억 DNB spots/chip; 대형 조직 섹션 가능 | DNA nanoball sequencing + spatial barcoding | 초고해상도 + 넓은 캡처 영역; 대형 조직 전체 프로파일링 | 기술 접근성 제한적 (주로 중국 시설); 상용 분석 파이프라인 부족 | Jin 2024 (리뷰에서 비교); 직접 활용 논문 없음 |

## 플랫폼 선택 가이드

| 목적 | 권장 플랫폼 |
|------|------------|
| 가설 생성 / 전체 전사체 탐색 | Visium, Visium HD |
| 단세포 정밀 세포 유형 분류 | Xenium, MERFISH |
| 임상 FFPE 아카이브 코호트 | Xenium (FFPE 전용), GeoMx DSP |
| TME 면역 세포 공간 배치 | Xenium, MERFISH, Visium + 디컨볼루션 |
| 대형 조직 전체 공간 지도 | STEREO-seq, Visium HD |
| 단백질 + RNA 동시 | GeoMx DSP |
| 멀티플랫폼 통합 | Visium + Xenium + scFFPE-seq (Janesick 2023 워크플로우) |

## 핵심 차이점

- **해상도 vs. 유전자 커버리지 트레이드오프**: Visium은 전체 전사체를 제공하지만 55 µm spot 해상도이므로 단세포 수준이 아니다. Xenium/MERFISH는 서브셀룰러 해상도를 제공하지만 패널 제한(수백~수천 유전자)이 있다. Visium HD는 이 간극을 좁히는 방향으로 발전하고 있다.
- **FFPE 호환성**: Xenium은 FFPE 조직 전용으로 설계되어 임상 아카이브 코호트 활용에 유리하다. Visium의 FFPE 버전도 있으나 민감도가 낮다.
- **스필오버/신호 오염 문제**: Bilous et al. 2026(Nature Methods)에서 Xenium의 transcript spillover가 TME 해석을 왜곡할 수 있음을 보여줬으며, SPLIT 알고리즘으로 보정 가능하다.
- **플랫폼 간 재현성**: Zhang et al. 2026(Nature)은 Visium, Xenium, MERSCOPE, Visium HD 등 6개 플랫폼에서 정의한 pan-cancer Spatial Ecotype이 재현 가능함을 보여줬다.
- **비용**: Visium이 상대적으로 접근성 높음; Xenium, MERFISH는 장비 투자 비용이 크지만 데이터 품질이 높다.
- **전산 분석 성숙도**: Visium 기반 분석 파이프라인(GraphST, METI, Seurat, Squidpy 등)이 가장 성숙하다.

## 관련 논문

- [[rademacher-2025-comparison-spatial-transcriptomics-technologies-using]]
- [[janesick-2023-high-resolution-mapping-human-breast]]
- [[bilous-2026-xenium-split-spillover]]
- [[jin-2024-advances-spatial-transcriptomics-applications-cancer]]
- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]]
- [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]]
- [[ren-2023-spatial-transcriptomics-reveals-niche-specific-enrichment]]
- [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]]
- [[klein-2024-single-cell-spatial-col6a3-biomarker-ups]]
- [[jiang-2024-meti-deep-learning-approach-spatial]]
- [[long-2023-spatially-informed-clustering-integration-deconvolution]]

## 관련 개념

- [[spatial-transcriptomics]]
- [[tumor-microenvironment]]
- [[cell-type-deconvolution]]
- [[single-cell-methods]]
- [[FFPE-proteomics]]
