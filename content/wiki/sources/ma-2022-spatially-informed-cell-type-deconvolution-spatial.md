---
title: "Spatially informed cell-type deconvolution for spatial transcriptomics"
authors: "Ma and Zhou"
year: 2022
doi: "10.1038/s41587-022-01273-7"
source: "ma-2022-spatially-informed-cell-type-deconvolution-spatial.md"
category: "spatial-transcriptomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/ma-2022-spatially-informed-cell-type-deconvolution-spatial.pdf"
pdf_filename: "ma-2022-spatially-informed-cell-type-deconvolution-spatial.pdf"
source_collection: "batch-2026-05"
tags: [CARD, spatial-transcriptomics, deconvolution, NMF, conditional-autoregressive, cell-type-composition, scRNA-seq, pancreatic-cancer]
---

# CARD: Spatially Informed Deconvolution

## Summary

CARD (Conditional Autoregressive-based Deconvolution) performs spatially informed cell-type deconvolution for spatial transcriptomics using NMF with a conditional autoregressive model to account for spatial correlation. Outperforms 6 existing methods, handles mismatched scRNA-seq references, imputes compositions at unmeasured locations, and supports reference-free deconvolution.

## Key points

- NMF + CAR model for spatial correlation-aware deconvolution
- Best performance (median RMSE 0.079) among 7 methods
- Robust to mismatched scRNA-seq references
- Can impute at unmeasured tissue locations

## Project relevance

- Core spatial transcriptomics deconvolution tool
- Applicable to tumor microenvironment characterization
- Complementary to GraphST for spatial analysis

## Caveats

- Assumes spatial stationarity (CAR model)
- Spot-level resolution limitation
- Computational scalability for very large datasets

## Related pages

- [[spatial-transcriptomics]]
- [[cell-type-deconvolution]]
- [[NMF]]
