---
title: "Spatial Transcriptomics"
type: concept
updated: 2026-05-19
---

# Spatial Transcriptomics (공간 전사체학)

## 정의

Spatial transcriptomics(ST)는 조직 절편에서 유전자 발현을 공간적 위치 정보와 함께 동시에 측정하는 기술 분야다. 기존의 bulk RNA-seq이 조직 내 모든 세포의 평균 발현 프로파일을 제공하고, scRNA-seq가 세포 유형 이질성을 해상도 있게 분석하지만 공간 정보를 잃는 것에 비해, ST는 "어느 세포가, 어디서, 무엇을 발현하는가"를 한꺼번에 규명할 수 있다.

ST의 핵심 가치는 종양 미세환경(TME)의 공간적 조직화를 이해하는 데 있다. 세포 간 상호작용은 물리적 근접성에 의존하며, 면역세포 침윤 패턴, CAF와 종양세포의 공간 배치, tertiary lymphoid structure(TLS)의 위치, 혈관 주변 니치 등이 모두 공간 정보 없이는 온전히 파악할 수 없는 생물학적 특성들이다. 최근에는 단일 세포 해상도를 넘어 세포 소기관 수준(subcellular resolution)까지 도달하는 기술들이 등장하고 있다.

## 핵심 원리

**기술 분류 체계**

ST 기술은 크게 세 범주로 구분된다 (Jin 2024 리뷰 기준):

1. **LCM-based(레이저 포획 미세절개 기반)**: 관심 영역을 물리적으로 절단하여 downstream RNA 분석에 사용. 선택적이지만 처리량이 낮음

2. **In situ imaging 기반**: 조직 내에서 직접 RNA를 형광으로 탐지
   - smFISH/MERFISH(MERSCOPE): 단분자 형광 RNA 계수. 세포 이하 해상도. 수십~수백 유전자에서 현재 수천 유전자까지 확장
   - Xenium (10x Genomics): 280~300+ 유전자 패널, 세포 이하 해상도, FFPE 조직 호환
   - ISS(In Situ Sequencing): cyclic sequencing으로 조직 내 시퀀싱
   - RNAscope / Molecular Cartography

3. **Spatial indexing(공간 바코딩) 기반**: 바코드 어레이 위에 조직 절편을 올려 위치 정보를 RNA에 태깅
   - Visium (10x Genomics): 55 μm 스팟, 약 4,000 스팟/슬라이드, 전사체 전체 포괄(~18,000 유전자). FFPE 및 신선 동결 조직 모두 가능. 가장 광범위하게 사용
   - Visium HD: 2 μm bin 해상도; 단세포 수준에 근접
   - Slide-seq / Slide-seqV2: 10 μm 해상도
   - STEREO-seq (BGI): 초고해상도, 대면적 타일링
   - GeoMx DSP (NanoString): ROI 기반 DSP; 지역별 선택적 분석

**Resolution vs. Throughput 트레이드오프**

| 기술 | 해상도 | 유전자 커버리지 | FFPE 호환 |
|------|--------|----------------|-----------|
| Xenium | 세포 이하 (subcellular) | 패널 (~280~500) | 가능 |
| MERFISH/MERSCOPE | 세포 이하 | 패널 (~500~1,000) | 제한적 |
| Visium HD | ~2 μm bin | 전사체 | 가능 |
| Visium | ~55 μm spot | 전사체 | 가능 |
| GeoMx DSP | ROI 평균 | 전사체/단백질 | 가능 |
| Slide-seq | ~10 μm | 전사체 | 제한적 |
| STEREO-seq | DNB (~220 nm) | 전사체 | 제한적 |

- Imaging 기반 방법은 해상도가 높지만 패널 유전자 수가 제한됨
- Sequencing 기반 방법은 전사체 전체를 포괄하지만 해상도가 낮아 deconvolution이 필요
- 두 접근법의 통합(Visium + Xenium + scFFPE-seq)이 상호 보완적 다중 스케일 분석을 가능하게 함 (Janesick 2023)

**세포 유형 분해(Deconvolution)**
- 스팟 기반 ST는 세포 혼합 문제를 가짐 → RCTD, SPOTlight, NNLS 등으로 세포 조성 추론
- CytoSPACE: scRNA-seq 프로파일을 ST 슬라이드에 mapping하여 단세포 해상도 재구성

**Spatial 분석 패러다임**
- Spatial clustering: 조직 구조 반영한 세포/스팟 군집화 (Seurat, BayesSpace)
- Cell-cell interaction: 근접 세포 간 ligand-receptor 쌍 추론 (CellChat, COMMOT)
- Spatial ecotypes: 반복적으로 출현하는 다세포 생태 단위 (Spatial EcoTyper)
- Pseudotime + spatial: 세포 상태 전이를 공간에 투영 (Smelik 2025)

**암 연구 적용**
- TME 세포 조성 공간 맵핑: 종양 핵심부 vs. 주변부 vs. 침윤 경계면
- TLS 공간 분석: 성숙도 구배, B/T 세포 상호작용, ICB 반응 예측 서명 (Wang 2024)
- 공간 ecotype과 임상 예후: 9개 pan-cancer SE가 ICI 반응 및 생존과 연관 (Zhang 2026)
- 종양 이질성의 공간 구조: 원발 vs. 전이 부위 TME 구성 차이 (Khaliq 2024)
- Niche-specific 유전자 발현: 신경 침윤 niché 내 줄기세포 농축 (Ren 2023)

## 위키 내 관련 논문

### 기술 리뷰 / 플랫폼 비교
- [[jin-2024-advances-spatial-transcriptomics-applications-cancer]] — 20+ ST 기술 비교 리뷰; LCM/in situ imaging/spatial indexing 3범주; 암 적용 체계적 정리
- [[rademacher-2025-comparison-spatial-transcriptomics-technologies-using]] — 5개 ST 플랫폼(RNAscope HiPlex, Molecular Cartography, Merscope, Xenium, Visium) 동일 조직 벤치마크
- [[janesick-2023-high-resolution-mapping-human-breast]] — Xenium + Visium + scFFPE-seq 통합; 다중 스케일 유방암 TME 분석
- [[bilous-2026-xenium-split-spillover]] — Xenium 스플릿/spillover 품질 관리

### Pan-cancer / TME 공간 지형
- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]] — 10개 암종, 6개 ST 플랫폼 통합; 9개 pan-cancer Spatial Ecotype; cfDNA 비침습 복구
- [[nirmal-2022-spatial-landscape-progression-immunoediting-primary]] — 흑색종 공간 면역편집; CyCIF 통합; 단세포 해상도 면역조절 지형
- [[valle-2025-pan-cancer-convergence-tumour-immune-microenvironment-motifs]] — CyTOF/IMC 기반 pan-cancer TME 모티프; 공간 AI와의 연계

### 유방암
- [[janesick-2023-high-resolution-mapping-human-breast]] — 유방암 TME 다중 플랫폼
- [[wang-2024-spatial-transcriptomics-reveals-substantial-heterogeneity]] — TNBC 92례; 9개 공간 아형; TLS 30-유전자 ICB 예측 서명

### 폐암 / 뇌전이
- [[zhang-2022-spatial-transcriptomic-landscape-non-small-cell]] — NSCLC 뇌전이 44례; GeoMx DSP; 면역억제 TME 재구성

### 췌장암
- [[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]] — PDAC 원발-전이 비교; Visium FFPE; 공간 ecotype 정의

### 뇌종양 / 신경종양
- [[ren-2023-spatial-transcriptomics-reveals-niche-specific-enrichment]] — DMG/GBM 10례; 방사글리아 줄기세포 침윤 니치; long-read Visium 이소형 다양성

### 비인두암 / 기타
- [[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]] — 비인두암 방사선내성; MCAM+ CAF 공간 분포; scRNA-seq + ST 통합

### 면역 프로파일링
- [[oliveira-2025-high-definition-spatial-transcriptomic-profiling-immune]] — Visium HD 2 μm; 대장암 면역세포 공간 프로파일링
- [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]] — 전립선암 club-like 세포 공간 맵핑
- [[klein-2024-single-cell-spatial-col6a3-biomarker-ups]] — COL6A3 바이오마커 단세포-공간 통합

### 분석 도구 / 방법론
- [[long-2023-spatially-informed-clustering-integration-deconvolution]] — 공간 정보 포함 클러스터링 및 deconvolution
- [[ma-2022-spatially-informed-cell-type-deconvolution-spatial]] — RCTD 기반 세포 유형 분해
- [[elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute]] — SPOTlight NMF 기반 deconvolution
- [[moncada-2020-integrating-microarray-based-spatial-transcriptomics-single-cell]] — 마이크로어레이 기반 ST-scRNA 통합
- [[jiang-2024-meti-deep-learning-approach-spatial]] — METI deep learning 공간 분석
- [[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]] — ST + pseudotime + machine learning 통합
- [[an-2026-spatialquery-multicellular-motifs]] — 다세포 모티프 쿼리 도구
- [[chang-2026-scigma-spatial-multiomics]] — 공간 multi-omics 통합
- [[kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial]] — 조직학-유전자 발현 그라디언트 추론
- [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]] — 가상 ST 생성; 표준 RNA-seq에서 공간 정보 예측
- [[tran-2026-phoenix-virtual-spatial-transcriptomics]] — phoenix 가상 ST 플랫폼
- [[zhang-2025-thor-platform-cell-level-investigation-spatial]] — THOR 세포 수준 공간 분석 플랫폼
- [[zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding]] — 병리 형태학 다중모달 임베딩
- [[cui-2026-haiku-spatial-biology-clinical-histology]] — HAIKU 공간 생물학-임상 병리 연계

### 암종별 특이 연구
- [[wei-2023-delineating-early-dissemination-mechanisms-acral]] — 발단 흑색종 초기 전파 기전
- [[wang-2024-spatial-transcriptomic-analysis-drives-pet]] — PET 기반 공간 전사체 분석
- [[hu-2024-multi-omic-profiling-clear-cell-renal]] — ccRCC multi-omic + 공간

## 관련 개념

- [[tumor-microenvironment]] — ST의 가장 핵심적인 응용 대상; 공간적 TME 조직화 규명
- [[single-cell-methods]] — ST와 상호 보완; scRNA-seq 참조 아틀라스를 ST에 투영
- [[drug-resistance]] — 내성 아집단의 공간적 분포 및 니치 의존성 분석
- [[proteogenomics]] — 단백질/전사체 공간 통합 (multi-modal spatial omics)
