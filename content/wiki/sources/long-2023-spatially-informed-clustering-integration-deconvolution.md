---
title: "Spatially informed clustering, integration, and deconvolution of spatial transcriptomics with GraphST"
authors: "Long et al."
year: 2023
doi: "10.1038/s41467-023-36796-3"
source: "long-2023-spatially-informed-clustering-integration-deconvolution.md"
category: "spatial-transcriptomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/long-2023-spatially-informed-clustering-integration-deconvolution.pdf"
pdf_filename: "long-2023-spatially-informed-clustering-integration-deconvolution.pdf"
source_collection: "batch-2026-05"
tags: [GraphST, spatial-transcriptomics, GNN, contrastive-learning, clustering, deconvolution, batch-correction, self-supervised]
---

# GraphST: Spatial Transcriptomics Analysis

## Summary

GraphST is a graph self-supervised contrastive learning method for spatial transcriptomics analysis, addressing three tasks: spatial clustering, multi-sample integration, and cell-type deconvolution. Uses GNN with augmentation-based contrastive learning to encode both gene expression and spatial proximity. Achieves 10% higher clustering accuracy than existing methods and is the only method supporting multi-slice vertical/horizontal integration with batch correction.

## Key points

- GNN + self-supervised contrastive learning for spatial domain identification
- 10% improvement in clustering accuracy over existing methods
- Only method for multi-slice integration with batch correction
- Superior cell-type deconvolution via contrastive mapping matrix

## Project relevance

- Core spatial transcriptomics analysis tool
- Graph-based deep learning for spatial biology
- Multi-sample integration enabling large-scale spatial studies

## Caveats

- Computational cost for GNN training
- Limited by Visium 55μm resolution
- Hyperparameter tuning may be dataset-specific

## Related pages

- [[spatial-transcriptomics]]
- [[graph-neural-networks]]
- [[contrastive-learning]]
- [[cell-type-deconvolution]]
