---
title: "Domain generalization enables general cancer cell annotation in single-cell and spatial transcriptomics"
authors: "Zhong et al."
year: 2024
doi: "10.1038/s41467-024-46413-6"
source: "zhong-2024-domain-generalization-enables-general-cancer.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhong-2024-domain-generalization-enables-general-cancer.pdf"
pdf_filename: "zhong-2024-domain-generalization-enables-general-cancer.pdf"
source_collection: "batch-2026-05"
tags: [Cancer-Finder, scRNA-seq, spatial-transcriptomics, domain-generalization, malignant-cell-annotation, deep-learning, pan-cancer, ccRCC]
---

# Cancer-Finder: Domain Generalization for Pan-Cancer Malignant Cell Annotation

## Summary
Cancer-Finder (Nature Communications, 2024) is a domain generalization-based deep learning algorithm for rapid and accurate annotation of malignant cells in single-cell and spatial transcriptomic data. Trained on 328,230 single-cell expression profiles from 13 tissue types using 74 TISCH tumour datasets, it achieves 95.16% average accuracy in identifying malignant cells across pan-cancer data. It extends to spatial transcriptomics by substituting the training set with ST datasets, demonstrating its utility on 5 clear cell renal cell carcinoma (ccRCC) ST samples.

## Key points
- Two-module neural network: feature extraction (2 fully connected layers + dropout) + classification (softmax with default threshold 0.5)
- Domain generalization via empirical risk extrapolation: minimizes both variance risk (across-tissue disparity) and average risk (overall cross-entropy)
- Training: TISCH database, 13 tissue types, 80/20 train/validation split; 5 pretrained models
- External validation on PBMC (10x genomics) + cancer cell lines: average 98.30% accuracy
- Interpretability via modified saliency map to identify key discriminating genes
- ST extension: replacing scRNA-seq training set with ST datasets for spatial malignant spot identification
- On 5 ccRCC ST slides, identifies a 10-gene signature at the tumour-normal interface with prognostic significance

## Project relevance
- Domain generalization strategy for multi-tissue training is applicable to perturbation prediction tasks where data comes from heterogeneous sources (annForce)
- Accurate malignant cell annotation is a prerequisite for TME analysis in drug repurposing project
- Small training set + ST transfer approach reduces data requirements for new cancer types

## Caveats
- Training data depends on TISCH database; potential database-level biases
- Default threshold (0.5) may not be optimal for all cancer types; requires tuning
- Performance on rare tumour types not validated

## Related pages
- [[scRNA-seq]]
- [[spatial-transcriptomics]]
- [[tumor-microenvironment]]
- [[domain-generalization]]
- [[malignant-cell-annotation]]
