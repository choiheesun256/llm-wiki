---
title: "Inferring histology-associated gene expression gradients in spatial transcriptomic studies"
authors: "Kueckelhaus et al."
year: 2024
doi: "10.1038/s41467-024-50904-x"
source: "kueckelhaus-2024-inferring-histology-gene-expression-gradients-spatial.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/kueckelhaus-2024-inferring-histology-associated-gene-expression-gradients.pdf"
pdf_filename: "kueckelhaus-2024-inferring-histology-associated-gene-expression-gradients.pdf"
source_collection: "batch-2026-05"
tags: [spatial-transcriptomics, gene-expression-gradient, SPATA2, glioblastoma, computational-tool, histology, spatial-analysis]
---

# SPATA2: Histology-Associated Gene Expression Gradients

## Summary

Spatial Gradient Screening algorithm within the SPATA2 R framework for inferring histology-associated gene expression gradients in spatial transcriptomic data. Models distance-dependent expression changes from histological landmarks (e.g., tumor margins). Applied to glioblastoma, identifies invasion-associated gene programs at tumor borders.

## Key points

- Spatial gradient screening quantifies distance-dependent expression
- SPATA2 R package for systematic gradient analysis
- Glioblastoma margins show distinct gradient patterns
- Complements standard spot-level spatial analyses

## Project relevance

- Novel spatial transcriptomics analysis methodology
- Tumor margin biology characterization
- Computational tool for spatial pattern detection

## Caveats

- Visium spot-level resolution limits gradient precision
- Manual histological landmark annotation required
- Linear gradient assumption may oversimplify biology
- Primarily validated on glioblastoma

## Related pages

- [[spatial-transcriptomics]]
- [[glioblastoma]]
- [[computational-tools]]
