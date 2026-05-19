---
title: "cProSite: A web based interactive platform for online proteomics, phosphoproteomics, and genomics data analysis"
authors: "Wang et al."
year: 2023
doi: "10.26502/jbb.2642-91280119"
category: "bioinformatics-tool"
source: "wang-2023-cprosite-web-based-interactive-platform"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/wang-2023-cprosite-web-based-interactive-platform.pdf"
pdf_filename: "wang-2023-cprosite-web-based-interactive-platform.pdf"
source_collection: "batch-2026-05"
tags: [cProSite, CPTAC, web-tool, proteomics, phosphoproteomics, pan-cancer, NCI]
---

# cProSite: A web based interactive platform for online proteomics, phosphoproteomics, and genomics data analysis

## Summary

cProSite is a web-based interactive platform developed by the NCI Laboratory of Cellular Oncology for analysis of CPTAC proteomics, phosphoproteomics, and genomics data, described in Journal of Biotechnology and Biomedicine (2023). The platform covers 12 tumor types and provides interactive visualizations for protein/phosphosite abundance comparison (tumor vs. normal), mRNA-protein correlation analysis, cross-cancer comparisons, and TMT log2 ratio plots. Accessible at cprosite.ccr.cancer.gov.

## Key points

- Covers 12 CPTAC tumor types including GBM, breast, colorectal, lung (SCC and adeno), ovarian, endometrial, renal, liver, head/neck, pancreatic, and bladder cancers
- Tumor vs. normal TMT log2 ratio boxplot visualization for any queried protein or phosphosite
- mRNA-to-protein correlation computed per cancer type — quantifies degree of post-transcriptional regulation
- Cross-cancer comparison view: a single protein's expression profile displayed across all 12 tumor types simultaneously
- No coding required — designed to make CPTAC proteomics accessible to bench biologists and clinical researchers
- Available at cprosite.ccr.cancer.gov; developed at NCI Laboratory of Cellular Oncology

## Project relevance

Provides rapid access to CPTAC proteomics and phosphoproteomics data for any gene of interest — useful for validating drug repurposing targets at the protein level across 12 cancer types. The mRNA-protein correlation feature is directly relevant to assessing whether transcriptomic-derived candidate targets translate to protein-level changes. Cross-cancer comparison enables quick prioritization of targets with consistent overexpression in multiple cancer types. Complements TCGA-based analyses by adding proteomic evidence.

## Caveats

- Restricted to CPTAC datasets — does not integrate TCGA-only RNA-seq cohorts or external proteomics datasets
- Limited to 12 cancer types; cancers not in CPTAC (e.g., many rare tumors) cannot be analyzed
- Web-based interface is not suited for large-scale batch queries or integration of custom analytical pipelines
- Normal tissue sample sizes are small for some cancer types, limiting statistical power in tumor-vs-normal comparisons
- TMT quantification is relative, not absolute — batch effects must be considered when comparing across cohorts

## Related pages

- [[CPTAC]]
- [[Proteomics]]
- [[Phosphoproteomics]]
- [[Pan-cancer analysis]]
- [[mRNA-protein correlation]]
- [[Bioinformatics tools]]
