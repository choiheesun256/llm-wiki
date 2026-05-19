---
title: "Single-cell과 spatial transcriptomics 데이터를 통합하는 방법론과 그 암 연구 적용은?"
type: question
status: active
source_files:
  - concepts/single-cell-methods.md
  - concepts/spatial-ai-for-cancer.md
  - concepts/single-cell-perturbation-prediction.md
  - cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma.md
  - cancer/zhang-2026-non-invasive-profiling-of-the-tumour.md
  - cancer-study/day-08-cancer-hallmarks-tme-computational.md
updated: 2026-05-19
---

# Single-cell과 spatial transcriptomics 데이터를 통합하는 방법론과 그 암 연구 적용은?

## 짧은 답변

Single-cell RNA-seq(scRNA-seq)은 세포 유형별 고해상도 전사체 정보를 제공하지만 공간 위치를 잃는다. Spatial transcriptomics(ST)는 조직 내 공간 맥락을 보존하지만 단일 세포 해상도나 유전자 커버리지가 제한적이다. 두 데이터를 통합하는 방법론은 deconvolution, mapping/integration, 그리고 virtual inference로 나뉘며, 암 연구에서는 종양 미세환경(TME) 세포 구성 지도화, 전이 공간 패턴 발굴, ICI 반응 예측 biomarker 개발에 핵심적으로 활용된다.

## 상세 답변

### 두 기술의 상보성

**scRNA-seq의 특성**

- 세포당 수천~수만 개 유전자 발현 정량
- 세포 유형/상태 분류 (clustering, trajectory analysis)
- Perturbation 반응, 세포 운명 추적 가능
- 조직 해리(dissociation) 과정에서 공간 정보 소실
- Dissociation bias: 물리적으로 연약한 세포(내피세포, 뉴런)는 과소 포집

**Spatial transcriptomics의 특성**

- 조직 절편 위의 spot 또는 단일 세포에 공간 좌표 부여
- 기술별 해상도와 유전자 수 차이가 크다:
  - Visium(10x): 55 µm spot, ~18,000 유전자, 여러 세포 혼합
  - Xenium/CosMx/MERSCOPE: 단일 세포 해상도, 수백~수천 유전자 panel
  - Slide-seq V2: ~10 µm bead, ~25,000 유전자
- 세포 혼합(spot deconvolution)이 필요한 기술이 많음
- Panel 기반 기술은 사전 유전자 선정 필요 (발견적 분석 제한)

[[concepts/spatial-ai-for-cancer]]는 Xenium/CosMx/MERSCOPE의 panel sensitivity와 segmentation 선택이 관찰되는 생물학을 지배할 수 있다고 경고하며, raw spatial count를 ground truth로 취급하기 전 QC와 spillover 교정이 필수임을 강조한다.

### 주요 통합 방법론

#### 1. Deconvolution (spot → cell type proportion)

Visium 등 multi-cell spot을 갖는 기술에서 scRNA-seq reference를 이용하여 각 spot의 세포 유형 비율을 추정한다.

- **RCTD** (Robust Cell Type Decomposition): 음이항 분포 모델; 각 spot에서 maximum 2개 세포 유형 허용 (doublet mode)
- **SPOTlight**: NMF 기반; scRNA-seq reference의 세포 유형 marker로 basis matrix 구성
- **Cell2location**: 계층적 Bayesian 모델; abundance와 co-localization을 동시 추정; 대용량 cohort에 적합
- **CARD**: Conditional autoregressive prior로 공간적 smoothness를 명시적으로 모델링

#### 2. Cell mapping (scRNA-seq cell → spatial position)

scRNA-seq 세포를 ST 공간에 투영하여 각 세포의 공간적 위치를 추정한다.

- **Seurat anchor integration / Harmony**: 유전자 발현 공간의 latent representation을 맞춰 nearest-neighbor mapping
- **Tangram**: DL 기반; scRNA-seq 와 ST 유전자 발현 분포 사이의 transport map을 최적화; probabilistic cell placement
- **novoSpaRc**: Optimal transport 기반; 유전자 발현 유사성과 공간적 근접성 prior를 결합

#### 3. Virtual/predicted spatial transcriptomics (H&E → gene expression)

[[concepts/spatial-ai-for-cancer]]에서 소개된 대로, [[tran-2026-phoenix-virtual-spatial-transcriptomics]] 같은 방법은 routine H&E 이미지로부터 Xenium 수준의 단일 세포 공간 발현을 예측한다. 대규모 archival 슬라이드에서 공간 정보를 retroactively 추출할 수 있어 임상 적용 잠재력이 크다. 그러나 이 접근은 H&E로부터 측정 없이 추론하므로 예측의 불확실성을 명시적으로 다뤄야 한다.

#### 4. Multi-modal spatial alignment

[[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]의 Multi-Embed와 같이 WSI(whole slide image) 패치를 전사체, 메틸화, 단백질체, spatial omics와 공동 임베딩하는 방향으로 발전하고 있다. Contrastive learning을 통해 서로 다른 modality의 spatial 표현을 정렬한다.

#### 5. Spatial ecotype 발굴

[[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]]의 Spatial EcoTyper는 spatial transcriptomics에서 9개 보존된 범암 TME 공간 ecotype(SE1–SE9)을 정의했다. 이 ecotype들은 서로 다른 면역 구성, 스트로마 상태, 종양 세포 표현형을 반영하며, 면역관문 억제제 반응 예측에 활용된다(흑색종에서 SE7/SE8 = 좋은 예후, SE4 = 불량 예후).

#### 6. Multicellular spatial motif 발굴

[[an-2026-spatialquery-multicellular-motifs]]([[concepts/single-cell-methods]] 참조)는 spatial omics에서 반복적인 다세포 이웃(neighbourhood) motif를 마이닝한다. 특정 세포 유형 배열 패턴이 종양 침윤, 치료 반응과 연관되는지 검색 가능하다.

### 암 연구 적용 사례

**TME 세포 조성 지도화**

[[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]]에서 18개 GBM 시료에 대한 snRNA-seq으로 tumor cell, TAM, T cell, OPC, 내피세포 등을 분류하고 bulk proteome과 통합하여 4개 면역 아형(im1–im4)의 세포 구성을 정밀하게 규명했다. Mesenchymal GBM의 EMT가 종양 세포 고유 특성임을 snRNA-seq으로 확인 — bulk RNA로는 stroma contamination과 구분이 불가능했다.

**면역치료 반응 예측 biomarker**

[[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]]의 Liquid EcoTyper는 혈장 cfDNA 메틸화로부터 spatial ecotype 정보를 비침습적으로 복원한다. 이는 spatial-single cell 통합으로 정의된 ecotype 지식을 liquid biopsy 진단으로 전이한 사례다.

**세포-세포 상호작용 추론**

Deconvolution 결과로 얻은 공간적 세포 유형 분포에서 ligand-receptor co-localization을 분석하여 세포 간 신호 회로를 추론한다. CellChat, NicheNet, LIANA 등의 도구가 scRNA-seq 기반 ligand-receptor 상호작용을 공간적 근접성 정보로 필터링한다.

**종양 공간 이질성과 침윤 경계**

공간적으로 구조화된 유전자 발현 패턴(예: tumor core vs. invasive margin, hypoxic center vs. normoxic periphery)이 치료 내성 기전과 연관된다. 침윤 경계에서의 EMT 전이 세포, hypoxic zone에서의 autophagy 활성화, lymphoid aggregate 구조 등이 spatial 분석으로 구체화된다.

**Pre-metastatic niche와 전이 패턴**

공간 패턴 분석으로 전이 선호 장기에서의 niche 형성 신호(ECM remodeling, immune suppression zone)를 원발 종양 내에서 예측하는 연구가 증가하고 있다.

### 기술적 도전과 주의사항

[[concepts/spatial-ai-for-cancer]]의 "failure modes" 섹션이 강조하는 바:
1. H&E 기반 발현 추론은 측정값이 아닌 예측값이다
2. Panel sensitivity와 segmentation 선택이 보이는 생물학을 좌우한다
3. 세포-세포 proximity 신호가 transcript spillover나 segmentation bleed-through를 반영할 수 있다
4. Spatial ecotype은 임상적으로 유용한 요약이지만 인과적 치료 표적이 아닐 수 있다

[[bilous-2026-xenium-split-spillover]]([[concepts/spatial-ai-for-cancer]] 참조)는 raw spatial count의 spillover 교정 없이는 가짜 세포-세포 신호와 바이오마커 신호가 생긴다고 경고한다.

## 핵심 비교표

| 방법론 범주 | 대표 도구 | 입력 | 출력 | 강점 | 한계 |
|---|---|---|---|---|---|
| Spot deconvolution | RCTD, Cell2location, SPOTlight | Visium ST + scRNA-seq ref | Spot별 세포 유형 비율 | 기존 Visium 데이터 활용 | Spot 내 세포 수 가정 |
| Cell spatial mapping | Tangram, novoSpaRc | scRNA-seq + ST | 세포별 공간 좌표 확률 | 단일 세포 해상도 추정 | 공간 prior 가정 |
| Virtual ST | Phoenix (Tran 2026) | H&E 이미지 | 예측 유전자 발현 공간 분포 | 아카이브 슬라이드 활용 | 예측 불확실성 |
| Spatial ecotype | EcoTyper (ST 확장) | ST 데이터 | 보존된 TME 공간 패턴 | 범암 비교 가능 | 인과성 미확립 |
| Multicellular motif | SpatialQuery | ST 데이터 | 반복 다세포 이웃 패턴 | 세포 배열 패턴 발굴 | 패턴 해석 필요 |
| Multi-modal alignment | Multi-Embed | WSI + multi-omics | 통합 spatial 임베딩 | 이기종 modality 통합 | 대규모 데이터 필요 |

## 관련 논문

- [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]] — snRNA-seq + bulk proteomics 통합으로 GBM TME 규명; tumor-intrinsic EMT 확인
- [[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]] — Spatial EcoTyper → Liquid EcoTyper: spatial 지식을 cfDNA로 전이
- [[concepts/spatial-ai-for-cancer]] — Spatial AI 설계 패턴, failure mode, 실용 워크플로우

## Related pages

- [[concepts/single-cell-methods]]
- [[concepts/spatial-ai-for-cancer]]
- [[concepts/cell-state-dynamics-and-fate-mapping]]
- [[questions/ecm-remodeling-tumor-progression]]
- [[cancer-study/day-08-cancer-hallmarks-tme-computational]]
