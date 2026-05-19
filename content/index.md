---
title: Heesun LLM wiki
---

<div class="stats-row">
  <div class="stat">
    <div class="stat-num">275</div>
    <div class="stat-label">논문</div>
  </div>
  <div class="stat">
    <div class="stat-num">20</div>
    <div class="stat-label">Q&A</div>
  </div>
  <div class="stat">
    <div class="stat-num">21</div>
    <div class="stat-label">개념</div>
  </div>
  <div class="stat">
    <div class="stat-num">5</div>
    <div class="stat-label">프로젝트</div>
  </div>
</div>

<div class="card-grid">

<div class="card">
<span class="card-badge badge-cancer">Q&A 핵심</span>

### 위키 Q&A — 논문 기반 답변

275개 논문을 cross-reference하여 생성한 질문-답변 페이지

**Proteogenomics & Multi-omics**

- [[proteogenomics-cohort-landscape|암종별 Proteogenomics 코호트 현황]]
- [[multi-omics-integration-cancer-subtypes|Multi-omics 분자 아형과 임상적 의미]]
- [[rare-cancer-proteogenomics|희귀암 Proteogenomics 연구 현황]]

**약물 내성**

- [[egfr-resistance-mechanisms-landscape|EGFR TKI (osimertinib) 내성 메커니즘]]
- [[parp-inhibitor-resistance-mechanisms|PARP inhibitor 내성과 극복 전략]]
- [[kras-mutant-cancer-therapeutic-strategies|KRAS 변이 암 치료 전략]]

**면역 & TME**

- [[immune-evasion-mechanisms-cancer|암세포 면역 회피 메커니즘]]
- [[ptm-immune-checkpoint-regulation|PTM의 Immune Checkpoint 조절]]
- [[tumor-microenvironment-spatial-organization|TME 공간적 구조와 치료 반응]]

**기술 & 방법론**

- [[spatial-transcriptomics-cancer-applications|Spatial Transcriptomics 암 연구 적용]]
- [[phosphoproteomics-kinase-activity-methods|Phosphoproteomics Kinase Activity 추론법]]
- [[ai-models-cancer-diagnosis-prediction|AI/DL 암 진단 및 예후 예측 모델]]
- [[proteogenomics-bioinformatics-tools|Proteogenomics 생물정보학 도구]]
- [[network-medicine-drug-repurposing-cancer|Network Medicine 약물 재배치]]

**암종별 심층 분석**

- [[breast-cancer-proteogenomics-subtypes|유방암 Proteogenomic 아형]]
- [[pancreatic-cancer-molecular-landscape|췌장암 분자 landscape]]
- [[prostate-cancer-neuroendocrine-transition|전립선암 신경내분비 분화]]
- [[colorectal-cancer-proteogenomics-immunotherapy|대장암 Proteogenomics & 면역치료]]

**생물학적 메커니즘**

- [[emt-drug-resistance-immune-evasion|EMT와 약물 내성/면역 회피]]
- [[ecdna-cancer-evolution-resistance|ecDNA와 암 진화/치료 내성]]

</div>

<div class="card">
<span class="card-badge badge-cancer">논문 카테고리</span>

### 소스 논문 (275편)

**암 생물학 (93)**
cancer-biology — 일반 암 생물학, 종양 진화, 대사

**Proteogenomics (43)**
CPTAC, APOLLO, 아시아 코호트 등 대규모 멀티오믹스

**약물 내성 (36)**
EGFR TKI, PARPi, KRAS G12Ci, 내분비 치료 내성

**Spatial Transcriptomics (19)**
Visium, Xenium, GeoMx, virtual ST, deconvolution

**AI/DL 모델링 (15)**
병리 AI, spatial AI, single-cell DL, multimodal fusion

**Multi-omics (11)**
통합 오믹스, pan-cancer 분석

**Bioinformatics 도구 (10)**
cProSite, iProPhos, KSEA, RoKAI, limma

**면역 회피 (8)**
PD-L1/PD-L2, MHC-I, checkpoint PTM 조절

**Single-cell (6)**
scRNA-seq, Perturb-seq, spatial single-cell

**기타**
phosphoproteomics, proteomics, target discovery, normalization 등

</div>

<div class="card">
<span class="card-badge">프로젝트</span>

### [[annForce]]

Perturbation을 additive force field로 표현하는 single-cell 모델

- [[annForce literature scan|논문 스캔]] — IF5+ 30편 정리
- [[annForce-related-methods|방법론 비교]]
- [[what papers are related to annForce|관련 논문 Q&A]]

</div>

<div class="card">
<span class="card-badge">프로젝트</span>

### [[drug-repurposing|Drug Repurposing]]

Network medicine 기반 암 환자 대상 약물 재배치

- [[CADDIE]] · [[DrugCLIP]] · [[Disease Module Discovery|Disease Module]]
- [[Systems Medicine]] · [[kersting-2025-nf-core-nextflow-disease-module|nf-core pipeline]]
- [[network-medicine-drug-repurposing-cancer|Drug Repurposing Q&A]]

</div>

<div class="card">
<span class="card-badge badge-cancer">표적항암</span>

### Cancer — 표적항암치료제 멀티오믹스

**Drug discovery & screening**

- [[zhang-2026-proteinaligner-tri-modal-contrastive-learning|ProteinAligner]] · [[jia-2026-drugclip-contrastive-learning-genome-scale|DrugCLIP]]
- [[tong-2026-multimodal-dl-lincs-l1000-hdac|HDAC Inhibitor (LINCS)]] · [[chauquet-2026-twas-signature-matching-for-drug|TWAS Drug Prioritisation]]

**Network medicine**

- [[hartung-2022-caddie-cancer-driver-drug-interaction|CADDIE]] · [[kersting-2025-nf-core-nextflow-disease-module|nf-core Disease Module]]

**Multimodal & Platform**

- [[zhang-2026-multi-embed-pathology-wsi-multimodal|Multi-Embed (WSI+omics)]] · [[cui-2026-haiku-spatial-biology-clinical-histology|Haiku]] · [[tran-2026-phoenix-virtual-spatial-transcriptomics|Phoenix]]

</div>

<div class="card">
<span class="card-badge">디지털세포</span>

### [[vital-digital-cell|VITAL Digital Cell]]

Single-cell foundation model, perturbation prediction, spatial multiomics

- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm|Tahoe-x1]] · [[wenkel-tu-2026-txpert-knowledge-graphs|TxPert]]
- [[zhang-2026-igof-perturb-seq|iGOF-Perturb-seq]] · [[benjamin-zador-2026-tissueformer|TissueFormer]]

</div>

<div class="card">
<span class="card-badge">개념</span>

### 주요 개념

- [[perturbation-modeling|Perturbation modeling]]
- [[network-medicine|Network medicine]]
- [[spatial-ai-for-cancer|Spatial AI for cancer]]
- [[single-cell-foundation-models|Single-cell foundation models]]
- [[virtual-screening|Virtual screening]]
- [[protein-language-models|Protein language models]]
- [[adaptive-layer-normalization-adaln|Adaptive Layer Normalization (AdaLN)]]
- [[diffusion-models|Diffusion models]] · [[diffusion-transformers|Diffusion transformers]]

</div>

</div>
