---
title: "EMTome: a resource for pan-cancer analysis of epithelial-mesenchymal transition genes and signatures"
authors: "Vasaikar et al."
year: 2021
doi: "10.1038/s41416-020-01178-9"
category: "bioinformatics-tool"
source: "vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal.pdf"
pdf_filename: "vasaikar-2021-emtome-resource-pan-cancer-analysis-epithelial-mesenchymal.pdf"
source_collection: "batch-2026-05"
tags: [EMT, MET, epithelial-mesenchymal-transition, pan-cancer, web-tool, TCGA, drug-sensitivity, metastasis]
---

# EMTome: a resource for pan-cancer analysis of epithelial-mesenchymal transition genes and signatures

## Summary

EMTome is a web-based portal developed at MD Anderson Cancer Center for pan-cancer analysis of epithelial-mesenchymal transition (EMT) genes and signatures. Published in British Journal of Cancer (2021), the tool integrates EMT gene signatures, interactome networks, and EMT scoring across TCGA cancer types. It links EMT status to transcriptomics, epigenomics, proteomics, drug sensitivity (GDSC/CCLE), immune profiles, and clinical outcomes.

## Key points

- Provides curated EMT/MET gene signatures consolidated from the literature into a single searchable database
- Computes quantitative EMT signature scores per sample across TCGA tumor types, enabling cross-cancer comparisons
- Gene interactome module visualizes interaction networks among EMT-associated genes
- Connects EMT scores to multi-omics layers: methylation (epigenomics), protein expression (proteomics), immune cell composition, and survival outcomes
- Correlates EMT scores with drug sensitivity data from GDSC and CCLE cell line pharmacogenomics datasets

## Project relevance

Directly useful for the drug repurposing project: EMT score-drug sensitivity associations provide a pre-computed resource to identify which drugs preferentially target epithelial vs. mesenchymal tumor states. The pan-cancer EMT scoring methodology can be adapted to quantify EMT status in specific cancer cohorts of interest. The tool also serves as a reference for multi-omics integration approaches connecting transcriptomic phenotype to therapeutic response.

## Caveats

- Web portal interface limits custom dataset uploads and programmatic batch analysis
- Based on bulk TCGA RNA-seq; does not capture single-cell-resolution EMT heterogeneity within tumors
- Drug sensitivity associations are derived from cell lines (GDSC/CCLE), introducing potential discordance with in vivo tumor biology
- EMT is a continuous spectrum; score-based binary categorization may oversimplify biological reality
- Epigenomic and proteomic coverage is cancer-type dependent within TCGA

## Related pages

- [[EMT (Epithelial-Mesenchymal Transition)]]
- [[TCGA]]
- [[Pan-cancer analysis]]
- [[Drug sensitivity]]
- [[Metastasis]]
