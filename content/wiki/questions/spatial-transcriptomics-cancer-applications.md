---
title: "Spatial transcriptomics가 암 연구에서 어떤 새로운 발견을 가능하게 했는가?"
type: question
status: active
category: [spatial-transcriptomics, cancer-biology, tumor-microenvironment]
source_files: [jin-2024-advances-spatial-transcriptomics-applications-cancer, you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms, zhang-2022-spatial-transcriptomic-landscape-non-small-cell, khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic, zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes, smelik-2025-combining-spatial-transcriptomics-pseudotime-machine, an-2026-spatialquery-multicellular-motifs, hemminger-2026-cipher-codebook-design, zhang-2025-thor-platform-cell-level-investigation-spatial, rademacher-2025-comparison-spatial-transcriptomics-technologies-using, elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute, long-2023-spatially-informed-clustering-integration-deconvolution, ma-2022-spatially-informed-cell-type-deconvolution-spatial, nirmal-2022-spatial-landscape-progression-immunoediting-primary, ren-2023-spatial-transcriptomics-reveals-niche-specific-enrichment, kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer, tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics, bilous-2026-xenium-split-spillover]
updated: 2026-05-19
---

# Spatial transcriptomics가 암 연구에서 어떤 새로운 발견을 가능하게 했는가?

## 짧은 답변

Spatial transcriptomics(ST)는 조직 내 유전자 발현을 공간 좌표와 함께 측정함으로써, 기존 bulk/scRNA-seq로는 불가능했던 종양-면역 경계면, 전이 niche, 방사선 저항성 CAF 구역 등의 공간적 구조를 직접 규명하게 해 주었다. 단일 세포 해상도의 imaging 기반 기술(Xenium, MERFISH)부터 전사체 전체를 커버하는 sequencing 기반 기술(Visium, STEREO-seq)까지 20여 종의 플랫폼이 존재하며, 각각 해상도-처리량-유전자 커버리지 간의 trade-off를 가진다. 최근에는 cfDNA methylation으로 TME spatial ecotype을 비침습적으로 추론하는 단계까지 발전했다.

## 상세 답변

### 기술 지형 (Technology Landscape)

[[jin-2024-advances-spatial-transcriptomics-applications-cancer]]은 20종 이상의 ST 기술을 세 카테고리로 정리한다.

1. **LCM(Laser Capture Microdissection) 기반**: 형태학적으로 구분된 영역을 물리적으로 추출 후 시퀀싱. 해상도는 높으나 처리량이 낮다.
2. **In situ imaging 기반**: smFISH, MERFISH, ISS 등. 수백~수천 개 유전자를 단일 세포 해상도로 측정. CIPHER [[hemminger-2026-cipher-codebook-design]]처럼 codebook을 deep learning으로 최적화하는 방법도 등장했다.
3. **Spatial indexing 기반**: Visium(10x Genomics), Slide-seq, STEREO-seq 등. 전사체 전체를 커버하지만 55μm spot 수준 해상도로 세포 혼합 문제(deconvolution 필요)가 발생한다.

[[rademacher-2025-comparison-spatial-transcriptomics-technologies-using]]는 동일한 수모세포종(MBEN) 동결 절편에서 RNAscope HiPlex, Molecular Cartography, Merscope(MERFISH), Xenium, Visium 5종을 직접 비교하여, imaging 기반 기술이 세밀한 종양 미세해부학적 구조를 포착하는 데 우수함을 보였다. 반면 sensitivity, specificity, 세포 분할(segmentation) 품질은 플랫폼마다 유의하게 달랐다.

[[bilous-2026-xenium-split-spillover]]는 Xenium에서 인접 세포 간 transcript spillover가 TME 해석을 왜곡할 수 있음을 보이고, SPLIT 알고리즘으로 보정하면 종양 근처 T cell의 소진(exhaustion) 마커(HAVCR2, PDCD1, LAG3 등) 신호가 명확해짐을 보였다.

**HEST-1k** 데이터셋은 10,000개 이상의 Visium 슬라이드를 공개 아카이브화하여 [[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]] 등의 연구에서 공개 ST 데이터 기반 biomarker 발굴을 가능하게 했다.

---

### 핵심 생물학적 발견

#### 1. TME 공간 구조와 종양-면역 경계면

[[nirmal-2022-spatial-landscape-progression-immunoediting-primary]]는 흑색종에서 CyCIF 다중화 이미징과 ST를 통합하여, 종양 진행 단계마다 면역편집(immunoediting) 패턴이 공간적으로 구조화되어 있음을 보였다. 종양 영역별로 세포-세포 상호작용 네트워크가 다르며, 공간적 biomarker가 진행 단계와 연계된다.

[[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]]는 120명의 전립선암 환자에서 scRNA-seq + Visium을 결합하여, 종양에서 확장된 club-like cell이 면역억제성 골수세포(MDSC)와 공간적으로 공존하며 억제성 niche를 형성함을 밝혔다. Androgen 제거 요법이 club-like cell 비율을 변화시켜 TME 재프로그래밍이 일어남도 확인했다.

#### 2. 방사선 저항성 메커니즘 — NPC (You 2025)

[[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]]는 NPC(nasopharyngeal carcinoma) 환자 24명의 39개 종양(원발/재발)을 scRNA-seq과 ST로 분석했다. 재발 종양에서:
- **MCAM+ myofibroblastic CAF**가 collagen IV–ITGA2–FAK–AKT 축을 통해 방사선 저항성을 유도
- Collagen IV의 공간적 침착이 T cell 침윤을 억제
- CD8 ZNF683 T cell이 재발 NPC에서 세포독성 감소
- CD47–SIRPα 상호작용이 골수세포-종양 간 면역 회피를 매개

#### 3. 뇌 전이 niche — NSCLC (Zhang 2022)

[[zhang-2022-spatial-transcriptomic-landscape-non-small-cell]]은 NanoString GeoMx DSP를 사용, 44명의 NSCLC 뇌 전이 환자에서 119개 ROI를 프로파일링했다. 뇌 전이 TME(TBME)는 원발 폐 TME 대비:
- 항원 제시 감소, B/T cell 기능 저하
- M2 macrophage 및 미성숙 미세아교세포(microglia) 증가
- 반응성 astrocyte 증가로 섬유화·면역억제성 niche 형성

이는 뇌 전이에 대한 TME 맞춤형 치료 전략의 필요성을 시사한다.

#### 4. 췌장암 전이 niche (Khaliq 2024)

[[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]]은 Visium FFPE로 13명의 PDAC 환자에서 원발+전이(간/폐) 30개 절편을 분석했다. 공간 ecotype 정의로 종양 세포 상태와 TME 구성의 반복 패턴을 규명하고, 원발과 전이 부위 간 TME 구성이 유의하게 달라 intra-tumoral heterogeneity가 inter-tumoral보다 큰 경우가 많음을 보였다. CAF subtype이 특정 종양 세포 상태와 공간적으로 연계된다.

#### 5. 전립선암 malignant progression (Smelik 2025)

[[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]]은 HEST-1k 공개 ST 데이터에서 pseudotime 분석과 ML을 결합하여, pseudotime이 Gleason grade와 상관됨을 보이고 악성 변환 관련 45개 유전자를 발굴했다. 이를 기반으로 한 소변 단백질 예측 모델이 AUC 0.92를 달성(PSA 대비 0.69), 2,000명 이상에서 검증되었다.

#### 6. 교모세포종 침습 niche (Ren 2023)

[[ren-2023-spatial-transcriptomics-reveals-niche-specific-enrichment]]는 short/long-read Visium ST를 조합하여 DMG/GBM 10개 종양에서 4개의 공간 분리 전사 모듈을 규명했다. Radial glial stem-like(RG-like) 세포가 신경 풍부 침습 niche에 집중적으로 존재하며 FAM20C가 이 침습을 매개한다.

---

### 계산 도구

#### Deconvolution 도구 (spot 기반 플랫폼용)

| 도구 | 방법 | 특징 |
|------|------|------|
| **SPOTlight** [[elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute]] | seeded NMF + NNLS | scRNA-seq reference 기반, PDAC 검증 |
| **CARD** [[ma-2022-spatially-informed-cell-type-deconvolution-spatial]] | NMF + CAR model | 공간 상관 반영, 미측정 위치 imputation |
| **GraphST** [[long-2023-spatially-informed-clustering-integration-deconvolution]] | GNN + contrastive learning | multi-slice 통합, batch 보정, 10% clustering 향상 |

#### 세포-수준 분석 도구

- **Thor** [[zhang-2025-thor-platform-cell-level-investigation-spatial]]: anti-shrinking Markov graph diffusion으로 외부 scRNA-seq reference 없이 spot 내 단일 세포 전사체를 추론. 10개 모듈(pathway enrichment, TF activity, CNV 등)과 Mjolnir 웹 인터페이스 제공.
- **SpatialQuery** [[an-2026-spatialquery-multicellular-motifs]]: k-D tree + FP-Growth를 이용해 반복 다세포 motif를 발굴하고, motif별 유전자 공변이(co-variation)를 분석.
- **CIPHER** [[hemminger-2026-cipher-codebook-design]]: MERFISH 패널 설계를 differentiable 최적화로 처리, 세포 타입 decoding 정확도와 실험 제약을 동시에 최적화.

#### Virtual ST / 생성 AI

- **Phoenix** [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]]: 22.2M 세포-이미지-발현 쌍으로 훈련된 latent flow matching 모델이 H&E 이미지에서 단일 세포 해상도 ST를 생성. 10,000명 이상 검증, SOTA 대비 Spearman 상관 35–173% 향상, zero-shot 전이 가능.
- **Thor** (위 참조)도 H&E 조직학 이미지와 ST의 joint embedding을 활용.

---

### 비침습적 공간 추론 — cfDNA Spatial Ecotypes (Zhang 2026)

[[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]]는 10가지 암종에서 1,000만 개 이상의 단일 세포 및 spot 수준 공간 전사체를 통합하여 **9가지 pan-cancer Spatial Ecotype(SE)**을 정의했다.

- NMF 기반 Spatial EcoTyper 프레임워크 + CytoSPACE 단일 세포 해상도 재구성
- SE는 Visium, Xenium, MERSCOPE, Visium HD 등 6종 플랫폼에서 보존됨
- Plasma cfDNA whole-genome bisulfite sequencing + deep learning으로 SE 수준을 비침습적으로 추론 가능
- 흑색종 78명의 치료 전 혈장 샘플에서 SE가 ICI 반응 및 생존 예측

이는 **조직 생검 없이도 TME의 공간 구조를 혈액에서 모니터링**할 수 있는 첫 번째 실증 사례다.

---

### 임상 중개 가능성

1. **치료 반응 예측**: SE 기반 cfDNA 바이오마커로 면역항암제 반응 예측 (Zhang 2026)
2. **비침습적 진단**: ST + pseudotime 기반 소변 단백질 모델 AUC 0.92 (Smelik 2025)
3. **저항성 기전 규명**: MCAM+ CAF의 collagen IV 침착이 방사선 저항성 → 타겟 가능 (You 2025)
4. **전이 맞춤 치료**: 원발 vs. 전이 TME 구성 차이를 고려한 부위별 치료 전략 (Khaliq 2024, Zhang 2022)
5. **Virtual ST**: H&E 슬라이드만 있는 대규모 코호트에서 소급적 ST 추론 (Phoenix 2026)

## 핵심 비교표

| 플랫폼 | 카테고리 | 해상도 | 유전자 커버리지 | 대표 암 적용 |
|--------|----------|--------|----------------|------------|
| Visium (10x) | Spatial indexing | ~55μm spot | 전사체 전체 | PDAC (Khaliq 2024), prostate (Kiviaho 2024) |
| Visium HD | Spatial indexing | ~8μm | 전사체 전체 | pan-cancer SE (Zhang 2026) |
| Xenium | Imaging (ISS) | 단일 세포 | 수백~수천 유전자 | NSCLC/breast QC (Bilous 2026) |
| MERFISH/Merscope | Imaging | 단일 세포 | 수백~수천 유전자 | 뇌, TME motif (SpatialQuery 2026) |
| GeoMx DSP | LCM-based ROI | ROI 수준 | 전사체 전체 | NSCLC brain met (Zhang 2022) |
| STEREO-seq | Spatial indexing | ~500nm | 전사체 전체 | 대규모 조직 맵핑 |
| Phoenix (virtual) | AI 생성 | 단일 세포 | 제한(Xenium panel) | pan-cancer (Tran 2026) |

| 계산 도구 | 기능 | 입력 | 핵심 방법 |
|----------|------|------|----------|
| SPOTlight | Deconvolution | ST + scRNA-seq | seeded NMF + NNLS |
| CARD | Deconvolution | ST + scRNA-seq | NMF + CAR (공간 상관) |
| GraphST | Clustering/Integration | ST | GNN + contrastive learning |
| Thor | Cell-level 전사체 추론 | ST + H&E | Markov graph diffusion |
| SpatialQuery | Motif 발굴 | ST | FP-Growth + k-D tree |
| CIPHER | 패널 설계 | scRNA-seq ref | Differentiable codebook |

## 관련 논문

- [[jin-2024-advances-spatial-transcriptomics-applications-cancer]] — 20종 이상 ST 기술 비교 리뷰 (LCM, imaging, indexing 카테고리)
- [[you-2025-single-cell-spatial-transcriptomics-reveal-mechanisms]] — NPC 방사선 저항성: MCAM+ CAF–collagen IV–T cell 억제 축 (Nature Genetics)
- [[zhang-2022-spatial-transcriptomic-landscape-non-small-cell]] — NSCLC 뇌 전이 GeoMx DSP: 면역억제·섬유화 niche 규명 (Nature Communications)
- [[khaliq-2024-spatial-transcriptomic-primary-metastatic-pancreatic]] — PDAC 원발/전이 Visium FFPE: spatial ecotype과 intra-tumoral heterogeneity (Nature Genetics)
- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]] — 9가지 pan-cancer SE + cfDNA 비침습 추론 + ICI 반응 예측 (Nature)
- [[smelik-2025-combining-spatial-transcriptomics-pseudotime-machine]] — 전립선암 ST + pseudotime + ML: 소변 AUC 0.92 바이오마커
- [[an-2026-spatialquery-multicellular-motifs]] — SpatialQuery: FP-Growth 기반 다세포 motif 발굴
- [[hemminger-2026-cipher-codebook-design]] — CIPHER: MERFISH 코드북 differentiable 최적화
- [[zhang-2025-thor-platform-cell-level-investigation-spatial]] — Thor: Markov diffusion 기반 cell-level ST 추론 플랫폼 (Nature Communications)
- [[rademacher-2025-comparison-spatial-transcriptomics-technologies-using]] — 5종 ST 플랫폼 종양 조직 직접 비교 벤치마크 (Genome Biology)
- [[elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute]] — SPOTlight: seeded NMF deconvolution 기반 도구
- [[long-2023-spatially-informed-clustering-integration-deconvolution]] — GraphST: GNN contrastive learning 기반 ST 분석
- [[ma-2022-spatially-informed-cell-type-deconvolution-spatial]] — CARD: 공간 상관 고려 deconvolution (Nature Biotechnology)
- [[nirmal-2022-spatial-landscape-progression-immunoediting-primary]] — 흑색종 공간 면역편집 지형도 (Cancer Discovery)
- [[ren-2023-spatial-transcriptomics-reveals-niche-specific-enrichment]] — 교모세포종 RG-like 줄기세포의 침습 niche 집중 (Nature Communications)
- [[kiviaho-2024-single-cell-spatial-club-like-cells-prostate-cancer]] — 전립선암 club-like cell과 MDSC 면역억제 niche (Nature Communications)
- [[tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics]] — Phoenix: H&E에서 virtual ST 생성 (flow matching, zero-shot)
- [[bilous-2026-xenium-split-spillover]] — Xenium spillover 보정 SPLIT; TME 해석 왜곡 규명 (Nature Methods)

## Related pages

- [[spatial-transcriptomics]]
- [[tumor-microenvironment]]
- [[cell-type-deconvolution]]
- [[liquid-biopsy]]
- [[immunotherapy-response]]
- [[radioresistance]]
- [[brain-metastasis]]
- [[pancreatic-cancer]]
- [[prostate-cancer]]
