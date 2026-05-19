---
title: "Credentialing Individual Samples for Proteogenomic Analysis"
authors: "Zhao et al."
year: 2018
doi: "10.1074/mcp.RA118.000645"
source: "zhao-2018-credentialing-individual-samples-proteogenomic-analysis.md"
category: "proteogenomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhao-2018-credentialing-individual-samples-proteogenomic-analysis.pdf"
pdf_filename: "zhao-2018-credentialing-individual-samples-proteogenomic-analysis.pdf"
source_collection: "batch-2026-05"
tags: [proteogenomics, quality-control, PMC-score, RPPA, mass-spectrometry, CPTAC, TCGA, mRNA-protein-correlation]
---

# PMC Score: Sample Credentialing for Proteogenomic Studies

## Summary
This MCP (2018) paper proposes a protein-mRNA correlation (PMC) score as a robust metric to credential individual samples prior to integrated proteogenomic analysis. Analyzing RNA-seq and RPPA data from 7,303 TCGA samples across 31 tumour types and CPTAC mass spectrometry data, the study shows that samples with high PMC scores have significantly higher protein-mRNA correlation, total protein content, and tumour purity — identifying low-quality samples that introduce noise and reduce statistical power.

## Key points
- PMC score = per-sample Pearson correlation across cis protein-mRNA pairs that are highly correlated (R > 0.6) in a pan-cancer TCGA13 reference set
- PMC markers derived from 13 cancer types with >100 samples and >15 tissue-specific markers via leave-one-out cross-validation
- Median cis protein-mRNA Pearson r = 0.336 in TCGA tumors vs. 0.514 in matched cancer cell lines (controlled preanalytic conditions)
- PMC score associates with total protein content, tumour purity, and overall proteome-transcriptome concordance
- CPTAC study found ~26% of samples unsatisfactory, consistent with findings using PMC filtering
- Three gynecological cancers (BRCA, UCEC, OV) show higher concordance than most other tumour types
- ROC analysis demonstrates PMC score's ability to classify low-quality samples

## Project relevance
- Direct application as quality control step before integrating multi-omics data in drug repurposing project
- When using CPTAC data: PMC score-based filtering removes low-quality samples prior to analysis
- Important caveat for transcript-to-protein imputation: protein-mRNA correlations vary substantially by cancer type

## Caveats
- PMC markers defined using RPPA; direct application to MS-based proteomics requires revalidation
- Stromal content and tumour heterogeneity reduce protein-mRNA correlation independently of sample quality
- Does not fully account for differences in tumour purity vs. preanalytic variability

## Related pages
- [[proteogenomics]]
- [[CPTAC]]
- [[quality-control]]
- [[mRNA-protein-correlation]]
