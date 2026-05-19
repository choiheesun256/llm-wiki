---
title: "A deep-learning framework to predict cancer treatment response from histopathology images through imputed transcriptomics"
authors: "Hoang et al."
year: 2024
doi: "10.1038/s43018-024-00793-2"
source: "hoang-2024-deep-learning-framework-predict-cancer.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/hoang-2024-deep-learning-framework-predict-cancer.pdf"
pdf_filename: "hoang-2024-deep-learning-framework-predict-cancer.pdf"
source_collection: "batch-2026-05"
tags: [deep-learning, histopathology, treatment-response, transcriptomics, ENLIGHT, DeepPT, precision-oncology]
---

# DeepPT + ENLIGHT Treatment Response Prediction

## Summary

Two-step indirect framework: DeepPT (ResNet50 + autoencoder + MLP) predicts genome-wide tumor mRNA expression from H&E histopathology slides, then ENLIGHT uses imputed expression to predict response to targeted and immune therapies without requiring matched treatment-response training data. Validated across 16 TCGA cancer types and 5 independent clinical cohorts (OR=2.28, 39.5% increased response rate among predicted responders).

## Key points

- DeepPT achieves mean median correlation of 0.43 for top 1000 genes across 16 TCGA types
- Generalizes to external datasets (TransNEO-breast r=0.49, NCI-brain r=0.48)
- ENLIGHT is unsupervised — can predict response to new drugs without matched training data
- Comparable accuracy to direct supervised WSI-to-response approaches

## Project relevance

- Enables large-scale retrospective treatment response prediction from archival H&E slides
- ENLIGHT's unsupervised nature makes it applicable to drug repurposing scenarios
- Simple yet effective architecture (ResNet50 + autoencoder) as a reference for pathology DL

## Caveats

- Bulk-level expression prediction; no single-cell resolution
- Error propagation from DeepPT to ENLIGHT predictions
- Clinical validation cohorts are relatively small

## Related pages

- [[spatial-ai-for-cancer]]
- [[precision-oncology]]
