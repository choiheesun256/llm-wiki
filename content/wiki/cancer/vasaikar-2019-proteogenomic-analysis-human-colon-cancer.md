---
title: "Proteogenomic Analysis of Human Colon Cancer Reveals New Therapeutic Opportunities"
authors:
  - Suhas Vasaikar
  - Chen Huang
  - Xiaojing Wang
  - Bing Zhang
  - Clinical Proteomic Tumor Analysis Consortium (CPTAC)
year: 2019
doi: "10.1016/j.cell.2019.03.030"
category: cancer
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/vasaikar-2019-proteogenomic-analysis-human-colon-cancer.pdf"
pdf_filename: "vasaikar-2019-proteogenomic-analysis-human-colon-cancer.pdf"
source_collection: "plus-batch-2026-05"
source_note: "[[vasaikar-2019-proteogenomic-analysis-human-colon-cancer]]"
tags:
  - proteogenomics
  - colon-cancer
  - colorectal-cancer
  - CPTAC
  - phosphoproteomics
  - MSI
  - Rb-phosphorylation
  - CDK2
  - glycolysis
  - tumor-antigens
  - neoantigens
  - cancer-testis-antigens
  - molecular-subtypes
  - multi-omics
  - therapeutic-targets
  - immune-evasion
  - Warburg-effect
---

# Proteogenomic Analysis of Human Colon Cancer (Vasaikar 2019)

> Vasaikar et al., *Cell* 177:1035–1049 (2019) | DOI: [10.1016/j.cell.2019.03.030](https://doi.org/10.1016/j.cell.2019.03.030) | CPTAC

## 1. Core Contribution

This paper presents the first prospective proteogenomic study of colon cancer from the Clinical Proteomic Tumor Analysis Consortium (CPTAC). 110 patients were profiled across six omics platforms — WXS, SNP array, RNA-seq, miRNA-seq, label-free proteomics, TMT-based global proteomics, and TMT phosphoproteomics — enabling integrative discovery of therapeutic opportunities that are invisible from genomic analysis alone.

The central claim is that **proteogenomics resolves functional consequences of genomic events** that genomics cannot predict, and reveals novel drug targets at the protein and phosphosite level.

## 2. Multi-Omics Study Design

- **Cohort:** 110 colon adenocarcinoma patients (prospective); paired tumor + normal adjacent tissue (NAT) + blood
- **Omics layers:** WXS → SCNA + somatic mutations; RNA-seq + miRNA-seq → transcriptome; label-free + TMT global proteomics → protein abundance; TMT phosphoproteomics (IMAC enrichment) → phosphosites
- **Validation:** Targeted SRM for selected proteins/phosphosites in representative samples
- **Data resources:** SRA (genomics), CPTAC portal, LinkedOmics (multi-omics integrated)

Key methodological insight: TMT-based proteomics outperformed RNA-seq for co-expression-based gene function prediction, and CNA-protein correlations were stronger than CNA-mRNA correlations — underscoring the added quantitative precision of proteomics.

### MSI Stratification
- MSMuTect (MS INDEL calling) + Fisher's exact test → MSI-H (n = 24) vs. MSS (n = 82)
- Cutoff: 40 MS INDELs separating groups (bimodal distribution)
- PCR-based MSI testing agreed completely with WXS-based assignment (85/85 samples with PCR results)

## 3. Key Biological Findings

### 3.1 Somatic Mutations and Proteomic Consequences

**Non-hypermutated tumors (n = 81):** APC (64%), TP53 (50%), KRAS (42%), TCF7L2, SOX9, FBXW7, SMAD4, CSAG1 — all consistent with TCGA.

**Hypermutated tumors (n = 25):** ACVR2A (96%), CASP5 (88%), RNF43 (64%), BRAF (64%), TGFBR2 (60%). Six genes novel vs. TCGA: CASP5, RNF43, LTN1, BMPR2, RFX5, SNRNF40.

Proteomics revealed unexpected functional complexity:
- **APC** frameshift/stop-gain mutations → reduced phospho-APC-T2451 (expected)
- **TGFBR2** frameshift → reduced phospho-TGFBR2-S553 (expected)
- **TP53-R273** hotspot → 3.4–83-fold increased phospho-TP53-S315 (unexpected; consistent with CPTAC breast and ovarian studies)
- **SOX9** truncating mutations (downstream of HMG-box, upstream of K398 ubiquitination site) → protein **overexpressed** (p = 1.02 × 10^-10), arguing for oncogenic rather than tumor suppressor role. Removal of K398 ubiquitination site likely stabilizes SOX9 protein via 26S proteasome resistance.

### 3.2 Copy-Number Alterations

Focal SCNA prioritization strategy: GISTIC2 focal peaks → 6,155 quantifiable genes → 716 with CNV-mRNA correlation → 345 with CNV-protein correlation → 152 with consistent tumor-normal differential expression → 90 prioritized drivers.

Notable: Endocytosis pathway genes deleted across multiple independent focal regions (STX12, CHMP7, VPS4B, USP8, VPS37A) — may suppress growth factor receptor downregulation, conferring growth signal self-sufficiency.

### 3.3 Rb Phosphorylation as Oncogenic Driver and Therapeutic Target

This is the paper's most striking mechanistic finding:

- **RB1 is amplified** in CIN-subtype colon tumors — paradoxical for a classical tumor suppressor
- Rb protein: log2FC = +1.58 vs. NAT (p = 2.10 × 10^-15)
- Phospho-Rb: log2FC = +1.84, significantly higher than total Rb (p = 0.01, Wilcoxon signed-rank)
- Phospho-Rb correlates with **CDK2 activity** (r = 0.47, p = 1.8 × 10^-6) — strongest correlation among all kinases
- Phospho-Rb correlates with **E2F1 activity** (r = 0.30) and **H3.1 phosphorylation** (r = 0.49, marker of proliferation)
- Phospho-Rb **negatively** correlates with apoptosis hallmark genes (r = -0.28)

**Proposed model:** RB1 amplification → excess Rb protein → CDK2 hyperphosphorylates Rb → E2F1 activation → proliferation + suppressed apoptosis. The phospho-Rb → E2F1 → CDK2 positive feedback loop further drives the cycle.

**Therapeutic implication:** CDK2 inhibition can target Rb-phosphorylation-driven colon cancers. This is distinct from RB1-mutated/deleted cancers (where CDK2 inhibition is futile), making colon cancer a unique CDK2 inhibitor candidate.

Rb-S811/S807 phosphorylation is specifically elevated in the **CIN subtype** (1.61-fold and 1.51-fold), suggesting CDK2 inhibition may be most effective in CIN tumors.

### 3.4 Cancer-Associated Proteins and Phosphosites

- 31 proteins elevated >2-fold in tumors in >50% of tumor-NAT pairs → **colon cancer-associated proteins**
- Top: DDX21 (100%), S100A11 (100%), RSL1D1 (99%), S100P (97%), RPL36A (97%), PLOD2 (96%), SERPINH1 (95%), GPRC5A (95%)
- These proteins are enriched in plasma, secretome, transmembrane proteome, and enzymes → known clinical biomarkers and drug targets (e.g., CEACAM5)
- **Cancer-associated kinases** (phosphoproteomics-inferred): CDK1, CDK2, CDK4, CDK7, MELK, PI4KB, PFKFB3
  - CDK4: FDA-approved drug target; CDK1/2/7 and MELK: clinical trials; PI4KB: novel candidate
- Colon cancer-associated proteins had little overlap with Cancer Gene Census — novel information layer

### 3.5 Tumor Antigens for Immunotherapy

- **Neoantigens:** 173 proteomics-supported somatic mutations → 88 mutant peptides with high predicted HLA-I affinity → putative neoantigens in 38% of tumors
- **Cancer/testis (CT) antigens:** 16 total (≥2-fold, ≥5% samples); top 3: IGF2BP3 (51%), SPAG1 (14%), ATAD2 (8%)
  - IGF2BP3: confirmed immunogenic in esophageal cancer (phase I clinical trial); absent in normal colon, present in tumor
- **Combined:** Neoantigens or CT antigens found in **78% of all tumors** — including MSS tumors (low neoantigen load) where CT antigens compensate
- CT antigens are MSI-independent and patient-shared → ideal for off-the-shelf cancer vaccines, especially for MSS tumors ineligible for checkpoint blockade

### 3.6 Unified Multi-Omics Subtypes (UMS)

Three UMS subtypes defined by cross-platform network analysis:

| UMS | Genomic | Features | Immune microenvironment |
|---|---|---|---|
| **MSI** | MSI-H, high mutation load | Elevated glycolysis (protein level) | High cytotoxic T cells (NK, CD8), but suppressed by glycolysis |
| **CIN** | High chromosomal instability | Elevated Rb-S811/S807, high RB1 copy number | Lower immune infiltration |
| **Mesenchymal** | Mixed | High stromal infiltration | Suppressor cells (MDSCs, macrophages, Treg) |

These UMS subtypes integrate and supersede CMS (RNA-based) and ProS (proteomics-based) subtypes, validated in the TCGA CRC cohort.

### 3.7 Glycolysis and CD8 T Cell Suppression in MSI-H Tumors

- MSI-H tumors upregulate glycolytic enzymes broadly at the **protein level** (not mRNA level) → protein-level Warburg effect
- Glycolytic activity (mean protein abundance of glycolytic enzymes) negatively correlates with activated CD8 T cell infiltration in MSI: Spearman r = -0.61, p = 0.02
- This relationship is **specific to MSI subtype** — not seen in CIN or Mesenchymal
- SRM validation confirmed higher SLC2A3 and PKM2 protein in MSI vs. CIN and Mesenchymal
- PKM2 (not PKM1) is the dominant isoform — promotes aerobic glycolysis and lactate production
- Lactate inhibits T and NK cell function (Brand et al., 2016)
- MSI/CD8-H tumors had 2.23-fold higher CD8A than MSI/CD8-L tumors despite equivalent glycolytic enzyme levels in some cases

**Proposed model:** MSI-H → high mutation load → immune recognition → CD8 T cell recruitment → but elevated glycolysis → lactate → T cell suppression → checkpoint resistance. Glycolysis inhibition may restore T cell function and sensitize MSI-H tumors to checkpoint blockade.

## 4. Therapeutic Implications

| Target | Evidence | Strategy |
|---|---|---|
| **CDK2** | Phospho-Rb is oncogenic driver; CDK2 activity correlates strongest with phospho-Rb | CDK2 inhibitor (especially CIN subtype) |
| **CDK4** | Cancer-associated kinase; FDA-approved drug exists | CDK4/6 inhibitor |
| **Glycolytic enzymes** (SLC2A3, PKM2) | Upregulated at protein level in MSI-H; correlates with CD8 suppression | Glycolysis inhibitor + checkpoint blockade combination |
| **Neoantigens** | 38% tumors have proteomics-supported neoantigens | Personalized neoantigen vaccines |
| **CT antigens** (IGF2BP3, SPAG1, ATAD2) | Shared across patients; immunogenic; in 78% tumors including MSS | CT antigen-targeted immunotherapy |
| **CEACAM5** | Most widely used CRC clinical marker; in cancer-associated protein list | Established biomarker; antibody-drug conjugate target |

## 5. Context and Limitations

**Context:**
- Extends the CPTAC proteogenomics framework (previously applied to breast, ovarian cancers) to colon cancer
- First colon-specific large-scale phosphoproteomics dataset
- Complements TCGA CRC genomic data by adding protein-level translation and post-translational modification information
- LinkedOmics platform enables community access and re-analysis

**Limitations:**
- Only colon (not rectal) tumors included → limits direct comparison to full TCGA CRC cohort
- Therapeutic hypotheses (CDK2 inhibition, glycolysis + checkpoint combination) are not experimentally validated in this study
- Sex-stratified analyses not performed (sample size too small)
- 38% neoantigen detection rate reflects computational prediction, not functional T cell validation
- MSI subtype glycolysis-CD8 correlation is observational (n = 24 MSI-H tumors)
