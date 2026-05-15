---
title: "MSstatsPTM: Statistical Relative Quantification of Posttranslational Modifications in Bottom-Up Mass Spectrometry-Based Proteomics"
authors:
  - Devon Kohler
  - Tsung-Heng Tsai
  - Erik Verschueren
  - Ting Huang
  - Trent Hinkle
  - Lilian Phu
  - Meena Choi
  - Olga Vitek
year: 2023
doi: 10.1016/j.mcpro.2022.100477
journal: "Molecular & Cellular Proteomics"
category: cancer
pdf_path: "llm-wiki/papers/plus/kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational.pdf"
pdf_filename: "kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational.pdf"
source_collection: "plus-batch-2026-05"
source_note: "[[sources/kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational]]"
tags:
  - MSstatsPTM
  - posttranslational-modification
  - PTM
  - mass-spectrometry
  - proteomics
  - phosphorylation
  - ubiquitination
  - statistical-methods
  - R-package
  - Bioconductor
  - differential-abundance
  - cancer-proteomics
  - label-free
  - TMT
---

# MSstatsPTM

> Kohler et al., *Mol Cell Proteomics* 2023 | [DOI](https://doi.org/10.1016/j.mcpro.2022.100477) | [[sources/kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational|Source Note]]

## Summary

MSstatsPTM is an open-source R/Bioconductor package for statistical relative quantification of posttranslational modifications (PTMs) from bottom-up LC-MS/MS data. Its central contribution is a principled method to **separate PTM-specific changes from global protein abundance changes** — a confounding problem that causes existing tools (ANOVA, Limma) to produce excessive false positives. The package extends MSstats/MSstatsTMT to the PTM context, supporting label-free and TMT-based experiments of arbitrary complexity.

## Core Problem

When a modified peptide becomes more or less abundant between conditions, this could reflect:
1. A true change in site occupancy / modification stoichiometry (the signal of interest), or
2. Simply a change in total protein abundance (the confound).

Naive PTM analysis measures (1) + (2) together. MSstatsPTM estimates the **adjusted log2-fold change**:

$$\Delta_{\text{adj}} = \Delta_{\text{PTM}} - \Delta_{\text{protein}}$$

by separately modeling modified and unmodified peptide features with linear mixed effects models, then combining the estimates and their standard errors.

## Method Overview

The workflow has six steps:

1. Acquire PTM-enriched lysate and global proteome lysate in parallel (label-free DDA/DIA/SRM or TMT).
2. Identify and quantify spectral features using MaxQuant, Progenesis, or Spectronaut.
3. **Convert** outputs to MSstatsPTM format (requires modification site annotation, e.g., S70 for serine at position 70).
4. **Summarize** PTM and protein features separately into run-level log2 intensities using Tukey Median Polish (`dataSummarizationPTM()`).
5. **Group comparison**: fit separate linear mixed effects models to PTM and protein summaries; combine to produce $\hat{\Delta}_{\text{adj}}$ and its standard error (`groupComparisonPTM()`); apply Benjamin-Hochberg FDR correction.
6. **Sample size calculation** for future experiments (`designSampleSizePTM()`).

If no global profiling run exists, the method falls back to unadjusted PTM-level testing.

## Key Advantages Over Prior Methods

| Feature | ANOVA/Limma | Ratio-based ANOVA/Limma | Isobar-PTM | MSstatsPTM |
|---|---|---|---|---|
| Adjusts for protein abundance | No | Partially | Yes (TMT only) | Yes |
| Complex designs (TMT, time course) | No | No | No | Yes |
| Label-free support | Yes | Yes | No | Yes |
| Handles missing values robustly | No | No | No | Yes |
| Self-contained software | Yes | No (manual) | No (manual) | Yes |

- Ratio-based methods require equal replicate counts between PTM and protein profiling runs — MSstatsPTM does not.
- Tukey Median Polish summarization is more robust to outliers and retains more data than ratio-based summarization (which discarded ~9.6% of unmodified protein run summaries in benchmarks vs. 0% for MSstatsPTM).

## Benchmark Results

### Simulations
- **Clean simulation**: Unadjusted methods (Limma, ANOVA without protein adjustment) showed eFDR >> 5%. MSstatsPTM maintained eFDR near the 5% target.
- **Noisy simulation** (limited features, 20% missing values): MSstatsPTM showed higher accuracy than Limma and ANOVA across all conditions. IQR of estimated fold changes was 32.5% smaller for MSstatsPTM than Limma/ANOVA.

### Spike-In Ubiquitination Benchmark (label-free)
- Before protein adjustment, fold changes of spiked KGG peptides deviated systematically from ground truth.
- After adjustment, MSstatsPTM FP rate fell from 20.88% to 1.84%; Limma from 26.04% to 1.18%.
- Limma estimated 35.7% higher variance on average, yielding lower sensitivity despite similar FP control.

### Biological Experiments (TMT)
- **Human ubiquitination (1mix-TMT)**: Adjustment removed 3,236 PTM hits (false positives driven by protein changes) and revealed 1,352 new hits previously masked by protein-level changes.
  - Key finding: GSDMD ubiquitination at **K62** was upregulated (log2FC = 2.79) under IpaH7.8/Dox treatment — a result that appeared absent or confounded in unadjusted global profiling.
- **Mouse phosphorylation (2mix-TMT)**: TTP phosphorylation at **S178** lost significance after adjustment — 69.5% of its apparent change was attributable to the unmodified protein, leaving only 30.5% due to the modification itself.

### Label-Free Without Global Profiling
- Adjustment was possible for only 4,526 of 10,799 PTM sites when no dedicated global profiling run was available.
- Performance was reduced but still better than no adjustment among sites with available protein data.

## Key Biological Insights Enabled

- **GSDMD / IpaH7.8**: Shigella ubiquitin ligase IpaH7.8 inhibits GSDMD. Without protein-level adjustment, GSDMD ubiquitination at K62 appeared masked because total GSDMD protein was also downregulated by Dox. MSstatsPTM revealed the true K62 ubiquitination increase.
- **TTP phosphorylation at S178**: Apparent differential phosphorylation in murine macrophages during S. flexneri infection was largely an artifact of protein abundance change, not a true regulatory event at the modification site.

## Practical Considerations

- A dedicated global proteome profiling run (separate from PTM-enriched runs) is strongly recommended for best adjustment performance.
- PTMs with multiple modification sites on a single peptide are handled separately (multi-site peptides are excluded from single-site summarization); peptides with multiple modifications are grouped separately.
- Missing value imputation for modified features is supported but should be used cautiously — PTMs may be missing for reasons other than low abundance (e.g., low feature counts), violating imputation assumptions.
- The package requires modification site annotation in the input (e.g., the amino acid and position in the protein sequence); MSstatsPTM provides a helper function to infer this from peptide sequences and FASTA files.

## Software

- **Package**: MSstatsPTM (R/Bioconductor)
- **Bioconductor**: http://www.bioconductor.org/packages/release/bioc/html/MSstatsPTM.html
- **GitHub**: https://github.com/Vitek-Lab/MSstatsPTM
- **Data**: MassIVE.quant (MSV000088971, MSV000000669, MSV000088966, MSV000000356, MSV000085565, MSV000000357, MSV000078977, MSV000000358)
- **Dependencies**: MSstats, MSstatsTMT, lme4, lmerTest

## Related Work

- [[sources/chang-2025-analysis-isobaric-quantitative-proteomic-data|Chang et al. 2025]] — MSstatsTMT isobaric quantification
- [[sources/mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins et al. 2016]] — integrated PTM proteogenomics
- [[sources/asuzu-2025-phosphoproteomic-dysregulation-drives-tumor-proliferation|Asuzu et al. 2025]] — phosphoproteomic dysregulation in tumor
- [[sources/jiang-2025-dark-cancer-phosphoproteome-coregulation|Jiang et al. 2025]] — dark cancer phosphoproteome
- [[sources/muller-dott-2025-phosphoproteomic-kinase-activity-inference|Muller-Dott et al. 2025]] — phosphoproteomic kinase activity inference
