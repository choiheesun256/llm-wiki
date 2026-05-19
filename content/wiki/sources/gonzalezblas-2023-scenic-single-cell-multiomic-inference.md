---
title: "SCENIC+: single-cell multiomic inference of enhancers and gene regulatory networks"
authors: "Gonzalez-Blas et al."
year: 2023
doi: "10.1038/s41592-023-01938-4"
source: "gonzalezblas-2023-scenic-single-cell-multiomic-inference.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/gonzalezblas-2023-scenic-single-cell-multiomic-inference.pdf"
pdf_filename: "gonzalezblas-2023-scenic-single-cell-multiomic-inference.pdf"
source_collection: "batch-2026-05"
tags: [GRN, enhancer, single-cell, multiomics, ATAC-seq, transcription-factor]
---

# SCENIC+

## Summary

SCENIC+ infers enhancer-driven gene regulatory networks from joint single-cell chromatin accessibility and gene expression data. It uses pycisTopic for topic modeling of regions, pycisTarget for motif enrichment, and links TFs to enhancers to target genes via three-way correlation.

## Key points

- Extends SCENIC from promoter-level to enhancer-level GRN inference
- Curated motif collection of 34,524 motifs from 29 databases
- Validated on PBMC, melanoma, ENCODE ChIP-seq, and cross-species brain data
- Enables TF perturbation effect prediction along differentiation trajectories

## Project relevance

- Directly relevant to perturbation modeling through GRN-based prediction
- Melanoma cell state analysis demonstrates cancer application
- Enhancer-level regulation important for understanding drug resistance epigenetics

## Caveats

- Requires paired scATAC+scRNA multiome data
- Correlation-based; cannot distinguish direct from indirect TF-target regulation

## Related pages

- [[perturbation-modeling]]
- [[single-cell-methods]]
