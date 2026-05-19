---
title: "SPOTlight: seeded NMF regression to deconvolute spatial transcriptomics spots with single-cell transcriptomes"
authors: "Elosua-Bayes et al."
year: 2021
doi: "10.1093/nar/gkab043"
source: "elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute.pdf"
pdf_filename: "elosuabayes-2021-spotlight-seeded-nmf-regression-deconvolute.pdf"
source_collection: "batch-2026-05"
tags: [spatial-transcriptomics, deconvolution, NMF, NNLS, scRNA-seq, cell-type-composition]
---

# SPOTlight

## Summary

SPOTlight deconvolves spatial transcriptomics spots into cell-type proportions using seeded non-negative matrix factorization (NMF) initialized with scRNA-seq marker genes, followed by NNLS regression. It works with unpaired ST and scRNA-seq data.

## Key points

- Seeded NMF initialization with cell-type markers improves consistency and biological relevance
- NNLS regression provides per-spot cell-type proportions with residual-based quality scores
- Validated on mouse brain (cortex layers) and human PDAC (tumor microenvironment)
- Competitive with MuSiC, CIBERSORTx across multiple metrics including low-cell scenarios

## Project relevance

- Foundational deconvolution tool for spot-based ST platforms (Visium)
- Enables TME characterization when single-cell resolution ST is unavailable
- Can serve as upstream preprocessing for spatial drug response modeling

## Caveats

- Depends heavily on scRNA-seq reference quality; missing cell types cannot be detected
- Less relevant for single-cell resolution platforms (Xenium, MERFISH)

## Related pages

- [[spatial-ai-for-cancer]]
- [[single-cell-methods]]
