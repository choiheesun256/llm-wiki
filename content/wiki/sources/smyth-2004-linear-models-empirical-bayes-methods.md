---
title: "Linear models and empirical Bayes methods for assessing differential expression in microarray experiments"
authors: "Smyth"
year: 2004
doi: "10.2202/1544-6115.1027"
source: "smyth-2004-linear-models-empirical-bayes-methods.md"
category: "bioinformatics-tool"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/smyth-2004-linear-models-empirical-bayes-methods.pdf"
pdf_filename: "smyth-2004-linear-models-empirical-bayes-methods.pdf"
source_collection: "batch-2026-05"
tags: [limma, empirical-Bayes, moderated-t-statistic, differential-expression, microarray, linear-model, statistics]
---

# Smyth 2004: limma Statistical Foundation

## Summary

Foundational statistical methods paper for the limma package. Develops empirical Bayes moderated t-statistics for differential expression analysis by shrinking gene-wise variance estimates towards a common value. The moderated t-statistic follows a t-distribution with augmented degrees of freedom, providing robust inference even with very small sample sizes. Companion theoretical paper to Ritchie et al. 2015 (limma NAR).

## Key points

- Moderated t-statistic: more robust than ordinary t-test
- Empirical Bayes variance shrinkage towards pooled estimate
- Closed-form hyperparameter estimators
- Handles incomplete data and quality weights

## Project relevance

- Statistical foundation for DE analysis in omics
- Core method used across proteomics and transcriptomics
- Reference for understanding limma internals

## Caveats

- Published 2004; microarray era
- Parametric distributional assumptions
- Bulk data; single-cell extensions needed

## Related pages

- [[differential-expression]]
- [[bioinformatics-tool]]
- [[statistics]]
