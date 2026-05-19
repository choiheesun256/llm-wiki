---
title: "Prediction of DNA methylation-based tumor types from histopathology in central nervous system tumors with deep learning"
authors: "Hoang et al."
year: 2024
doi: "10.1038/s41591-024-02995-8"
source: "hoang-2024-prediction-dna-methylation-based-tumor.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/hoang-2024-prediction-dna-methylation-based-tumor.pdf"
pdf_filename: "hoang-2024-prediction-dna-methylation-based-tumor.pdf"
source_collection: "batch-2026-05"
tags: [deep-learning, DNA-methylation, CNS-tumors, DEPLOY, histopathology, tumor-classification]
---

# DEPLOY CNS Tumor Classification from H&E

## Summary

DEPLOY integrates three deep learning models — direct (H&E → tumor type), indirect (H&E → predicted methylation → classical ML classification), and demographic (age/sex/location) — to classify CNS tumors into 10 major categories from histopathology slides. Trained on 1,796 NCI patients and validated on 2,156 external patients across three cohorts, achieving 95% overall accuracy and 91% balanced accuracy on high-confidence samples.

## Key points

- Indirect model (via predicted methylation) outperforms direct classification (AUPRC 0.82 vs 0.77)
- Integrated model achieves AUPRC 0.87–0.93 across four cohorts
- Tile-level predictions can detect co-existing tumor types within a single WSI
- Same ResNet50 + autoencoder architecture as DeepPT

## Project relevance

- Demonstrates that predicting intermediate molecular features (methylation) improves classification vs. direct image-to-label approaches
- Enables CNS tumor diagnosis without methylation arrays — applicable in resource-limited settings
- Architecture pattern (image → molecular feature → downstream task) transferable to other cancer types

## Caveats

- Limited to 10 major CNS tumor categories (vs. 100+ WHO subtypes)
- Requires matched methylation data for training
- CNS-specific; separate models needed for other cancer types

## Related pages

- [[methylation-classification]]
- [[spatial-ai-for-cancer]]
