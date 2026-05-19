---
title: "Multimodal data fusion for cancer biomarker discovery with deep learning"
authors: "Steyaert et al."
year: 2023
doi: "10.1038/s42256-023-00633-5"
source: "steyaert-2023-multimodal-data-fusion-cancer-biomarker.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/steyaert-2023-multimodal-data-fusion-cancer-biomarker.pdf"
pdf_filename: "steyaert-2023-multimodal-data-fusion-cancer-biomarker.pdf"
source_collection: "batch-2026-05"
tags: [multimodal, deep-learning, data-fusion, biomarker, cancer, AI, review]
---

# Multimodal Data Fusion for Cancer Biomarkers (Steyaert 2023)

## Summary

Nature Machine Intelligence perspective reviewing deep learning-based multimodal data fusion strategies (imaging, genomics, clinical data) for cancer biomarker discovery. Systematically compares early, intermediate, and late fusion architectures, analyzes their strengths and limitations, and discusses key challenges including missing modality handling and clinical interpretability.

## Key points

- Three fusion strategies compared: early (input-level), intermediate (representation-level), late (prediction-level ensemble)
- Intermediate fusion generally outperforms other strategies across most tasks
- Attention mechanisms enable learning of modality importance weights
- Missing modality handling identified as a key unsolved challenge
- Interpretability is a prerequisite for clinical translation

## Project relevance

- Reference framework for designing multimodal cancer biomarker models
- Guides choice of fusion architecture for integrating genomic, proteomic, and imaging data
- Highlights attention-based approaches relevant to multi-omics integration

## Caveats

- Perspective paper; no new models or experimental benchmarks
- Pre-dates LLM/foundation model era (2023); landscape has evolved significantly
- Benchmark comparisons across methods are limited

## Related pages

- [[AI-model]]
- [[multi-omics]]
- [[biomarker]]
- [[deep-learning]]
