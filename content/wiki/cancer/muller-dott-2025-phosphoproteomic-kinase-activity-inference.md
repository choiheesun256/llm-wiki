---
title: "Comprehensive evaluation of phosphoproteomic-based kinase activity inference"
authors: "Müller-Dott, Jaehnig, Munchic, Jiang, Yaron-Barir, Savage, Garrido-Rodriguez, Johnson, Lussana, Petsalaki, Lei, Dugourd, Krug, Cantley, Mani, Zhang, Saez-Rodriguez"
year: 2025
doi: "10.1038/s41467-025-59779-y"
journal: "Nature Communications"
category: cancer
pdf_path: "llm-wiki/papers/plus/muller-dott-2025-phosphoproteomic-kinase-activity-inference.pdf"
pdf_filename: "muller-dott-2025-phosphoproteomic-kinase-activity-inference.pdf"
source_collection: "plus-batch-2026-05"
source_note: "[[sources/muller-dott-2025-phosphoproteomic-kinase-activity-inference]]"
tags:
  - kinase-activity
  - phosphoproteomics
  - benchmarking
  - kinase-substrate-library
  - cancer-proteogenomics
  - CPTAC
  - precision-oncology
  - signal-transduction
  - benchmarKIN
  - drug-response
  - RoKAI
  - NetworkKIN
---

# Comprehensive evaluation of phosphoproteomic-based kinase activity inference

> Müller-Dott et al., *Nature Communications* 16:4771 (2025) | DOI: [10.1038/s41467-025-59779-y](https://doi.org/10.1038/s41467-025-59779-y)

## Core Contribution

This paper provides the most comprehensive systematic evaluation to date of kinase activity inference from phosphoproteomic data. The authors introduce **benchmarKIN**, an R package implementing two complementary benchmarking frameworks:

1. **Perturbation-based benchmark** — expanded gold standard of 230 kinase perturbation experiments covering ~80 kinases
2. **Tumor-based benchmark (novel)** — multi-omics strategy using CPTAC proteogenomic data from 7 cancer types to benchmark inference of kinase activity in human tumors without perturbation experiments

The central finding is that **simpler methods with well-curated kinase-substrate libraries outperform complex algorithms with broader but noisier resources**, and that kinase activity scores are more predictive of drug inhibitor response than kinase protein abundance.

## Problem Statement

Phosphoproteomic-based kinase activity inference is critical for identifying drug targets and understanding cancer signaling, but faces two structural problems:

- **Coverage gap**: Only a minority of detected phosphopeptides can be assigned to a known upstream kinase. ~540 human kinases phosphorylate >350,000 sites, but most sites lack annotated kinase relationships in curated databases.
- **Method inconsistency**: 19+ distinct computational algorithms produce variable activity estimates, with no consensus on which is most reliable for tumor data.

Prior benchmarks were limited to perturbation experiments in cell lines — biased toward well-studied kinases and confounded by drug off-target effects.

## Key Methods

### 19 Inference Algorithms Tested
Methods span rank-based enrichment (fgsea, KSEA, VIPER, PTM-SEA), statistical tests (Mann-Whitney-U, Fisher, KS, X²), linear models (z-score and lm RoKAI, ulm, mlm), and descriptive statistics (mean, median, normalized mean, sum, UQ, PCA, KARP).

All methods evaluated using the `decoupleR` framework for standardized implementation.

### 6 Kinase-Substrate Libraries
- **Curated combination**: PhosphoSitePlus + PTMsigDB + GPS gold (414 kinases, experimentally validated)
- **OmniPath**: meta-resource integrating 100+ databases (467 kinases, highest coverage, lower accuracy)
- **NetworkKIN**: computationally predicted via sequence + PPI context (22,788 interactions)
- **iKiP-DB**: in vitro kinase-to-phosphosite large-scale study (26,786 interactions)

### Tumor-Based Benchmarking Design
Using CPTAC proteogenomics (BRCA, CCRCC, GBM, HNSCC, LSCC, LUAD, UCEC):
- GS positive set: kinase-patient pairs where the kinase protein is in the top 5% of expression
- GS negative set: kinase-patient pairs in the bottom 5%
- 12,850 total GS kinase-patient pairs across 388 kinases
- Auto-phosphorylation sites removed from target sets to prevent data leakage
- Evaluation via AUROC; subsampled 1,000x to control class imbalance

## Main Findings

### 1. Simpler methods perform as well as complex ones
Across both benchmarking strategies, the **z-score** (as implemented in RoKAI) consistently ranks at the top:
- Perturbation AUROC: **0.79**; scaled rank: 0.24
- Tumor protein-based AUROC: **~0.66–0.68**
- Tumor activating site-based AUROC: **~0.70–0.72**

PTM-SEA, KSEA, VIPER, mean, and fgsea are only marginally worse. KARP and X² test are substantially worse and near chance level in the tumor benchmark.

### 2. Library choice matters more than algorithm choice
The **curated combination** (PhosphoSitePlus + PTMsigDB + GPS gold) achieves the highest perturbation AUROC (0.73) and best overall tumor performance. OmniPath and iKiP-DB cover more kinases but introduce noise from unvalidated interactions, lowering accuracy. Key pattern: libraries with fewer, more reliable substrates consistently outperform larger noisier ones.

### 3. Adding NetworkKIN predictions improves tumor-based performance
Supplementing the curated combination with NetworkKIN-predicted targets (but not iKiP-DB, Kinase Library, or Phosformer):
- Protein-based AUROC: 0.669 → 0.689
- Activating site-based AUROC: 0.668 → 0.677
- Also expands the number of assessable kinases considerably

### 4. Kinase activity scores better predict drug response than protein levels
In NCI60 cell lines with GDSC drug sensitivity data:
- Kinase activity (curated + NetworkKIN z-score) better correlates with inhibitor response for **20/38** drug-kinase combinations vs. **22/38** for protein levels (in favor of protein levels by 2 combinations only)
- CDK4 example: high activity → better palbociclib response; high protein → worse response (opposite direction)

### 5. Phosphosite normalization to protein levels is counterproductive
All tested normalization strategies (global LM, per-protein LM, per-site LM, subtract) decrease performance in tumor benchmarks. Unnormalized phosphoproteomics provide the best input for kinase activity inference — suggesting host protein levels already carry kinase-activity-relevant signal that normalization removes.

### 6. Activating sites outperform protein levels as kinase activity biomarkers
For kinases where the activating phosphosite is poorly correlated with its host protein (r ≤ 0.2), activating sites show significantly greater correlation with inferred kinase activity than protein levels (Wilcoxon p = 0.025). For 12/23 examined kinases, specific phosphosite measurements (e.g., ARAF T318, DYRK1 S748, EPHA2 S901, PAK4 S173, ULK1 S539) serve as strong activity biomarkers across multiple cancer types.

## Practical Recommendations

| Use Case | Recommended Approach |
|---|---|
| General kinase activity inference | z-score (RoKAI) + curated combination (PhosphoSitePlus + PTMsigDB + GPS gold) |
| Maximize kinase coverage | Add NetworkKIN predicted targets to curated combination |
| Input data | Use unnormalized phosphoproteomics (do not normalize to protein levels) |
| Drug response prediction | Kinase activity scores preferred over protein levels |
| Biomarker selection | Consider activating phosphosites for kinases with low protein-site correlation |

**Not recommended**: iKiP-DB alone, OmniPath alone, KARP algorithm, X² test algorithm, Kinase Library/Phosformer for target augmentation.

## Relevance to Cancer Research

- **CPTAC proteogenomics integration**: The tumor-based benchmark directly enables evaluation of kinase inference in the CPTAC pan-cancer cohort, covering 7 cancer types. This is a practically important resource for researchers using CPTAC data.
- **Precision oncology**: Demonstrates that phosphoproteomic-based kinase activity inference can help identify tumors likely to respond to targeted kinase inhibitors — more reliably than protein abundance alone.
- **Drug target discovery**: benchmarKIN's tumor-based benchmark covers kinases not typically captured by perturbation studies, including understudied ("dark") kinases.
- **Multi-omics framework**: The tumor benchmark integrates proteomics + phosphoproteomics + (optionally) other CPTAC layers, providing a template for multi-omics kinase characterization.

## Tool & Data Availability

- **benchmarKIN R package**: [benchmarkin.readthedocs.io](https://benchmarkin.readthedocs.io/) | GitHub: [saezlab/benchmarKIN](https://github.com/saezlab/benchmarKIN)
- **Analysis code**: [saezlab/kinase_benchmark](https://github.com/saezlab/kinase_benchmark) (GPL-3.0)
- **Zenodo data archive**: [doi.org/10.5281/zenodo.15118822](https://doi.org/10.5281/zenodo.15118822)
- **Key dependencies**: decoupleR v2.8.0, ssGSEA2 v1.0.1, stats package v4.3.3

## Related Wiki Notes

- [[sources/muller-dott-2025-phosphoproteomic-kinase-activity-inference]] — Full source note with methods detail
- [[sources/casado-2013-kinase-substrate-enrichment-analysis-provides-insights]] — KSEA original method
- [[sources/hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]] — Hijazi perturbation dataset used in benchmark
- [[sources/hornbeck-2015-phosphositeplus]] — PhosphoSitePlus database
- [[sources/asuzu-2025-phosphoproteomic-dysregulation-drives-tumor-proliferation]] — Related phosphoproteomic cancer application
