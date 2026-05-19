---
title: "METI: deep learning approach for spatial transcriptomics and morphological analysis of tumor microenvironment"
authors: "Jiang et al."
year: 2024
doi: "10.1038/s41467-024-51708-9"
source: "jiang-2024-meti-deep-profiling-tumor-ecosystems.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/jiang-2024-meti-deep-profiling-tumor-ecosystems.pdf"
pdf_filename: "jiang-2024-meti-deep-profiling-tumor-ecosystems.pdf"
source_collection: "batch-2026-05"
tags: [METI, spatial-transcriptomics, deep-learning, H&E, TME, morphology, gastric-cancer, lung-cancer, bladder-cancer]
---

# METI: Spatial Transcriptomics + Morphology Integration

## Summary

METI is a deep learning framework integrating spatial transcriptomics (Visium) with H&E morphology through 5 modules: cell type deconvolution, gene expression imputation, spatial domain identification, cell-cell interaction inference, and morphological feature extraction. Demonstrated across gastric, lung, and bladder cancers for comprehensive TME profiling. H&E morphology provides complementary predictive value beyond transcriptomics alone.

## Key points

- 5-module framework: deconvolution, imputation, spatial domains, interactions, morphology
- CNN-based morphology extraction + graph neural networks for spatial context
- Cross-cancer applicability (gastric, lung, bladder)
- H&E morphology adds predictive value to spatial transcriptomics

## Project relevance

- Multi-modal TME analysis tool combining spatial omics and pathology imaging
- Practical clinical translation (H&E universally available)
- Computational framework for spatial domain and cell interaction analysis

## Caveats

- Visium spot-level resolution (55 µm), not single-cell
- H&E staining variability affects morphology module performance
- Validated on 3 cancer types; broader applicability needs confirmation
- Computational resource requirements for 5-module pipeline

## Related pages

- [[spatial-transcriptomics]]
- [[deep-learning-pathology]]
- [[tumor-microenvironment]]
