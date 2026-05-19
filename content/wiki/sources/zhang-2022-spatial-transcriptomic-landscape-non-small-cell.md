---
title: "The spatial transcriptomic landscape of non-small cell lung cancer brain metastasis"
authors: "Zhang et al."
year: 2022
doi: "10.1038/s41467-022-33365-y"
source: "zhang-2022-spatial-transcriptomic-landscape-non-small-cell.md"
category: "spatial-transcriptomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2022-spatial-transcriptomic-landscape-non-small-cell.pdf"
pdf_filename: "zhang-2022-spatial-transcriptomic-landscape-non-small-cell.pdf"
source_collection: "batch-2026-05"
tags: [spatial-transcriptomics, NSCLC, brain-metastasis, TME, fibrosis, immunosuppression, DSP, NanoString]
---

# NSCLC Brain Metastasis Spatial Transcriptomics (Nature Communications 2022)

## Summary
Spatial RNA sequencing of 44 NSCLC patients with brain metastases using NanoString GeoMx DSP across 119 ROIs (18,694 genes). The brain tumor microenvironment (TME and TBME) is extensively remodeled into an immunosuppressive and fibrogenic niche compared to the primary lung tumor. Key features include reduced antigen presentation, impaired B/T cell function, increased M2 macrophages, immature microglia, and reactive astrocytes.

## Key points
- NanoString GeoMx DSP platform; 119 ROIs stratified by IHC markers (CD45, PanCK, GFAP)
- 7 ROI types: primary lung (L), metastatic LN (mLN), brain metastasis (LB), TIME-L, TIME-B, TBME, normal brain control (BC)
- Q3 normalization; cell composition estimated by SpatialDecon and MCP-counter
- Brain TME significantly immunosuppressed vs primary lung TME
- CAFs abundant in both primary and metastatic TME
- Fibrosis and immune regulation are the major functional modules disrupted in both sites
- Findings support TME-tailored therapeutic strategies for brain metastases

## Project relevance
- DSP-based spatial transcriptomics pipeline applicable to TME characterization
- Primary vs metastatic TME comparison approach transferable to other cancer systems
- Cell composition deconvolution methods (SpatialDecon, MCP-counter) are standard references
- Immunosuppressive TME features relevant to drug repurposing targeting the immune axis

## Caveats
- n=44 patients; limited statistical power for subtype-specific analyses
- DSP provides region-average data, not single-cell resolution
- No longitudinal data (pre/post metastasis)

## Related pages
- [[spatial-transcriptomics]]
- [[tumor-microenvironment]]
- [[lung-cancer]]
- [[brain-metastasis]]
