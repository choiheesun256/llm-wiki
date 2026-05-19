---
title: "limma powers differential expression analyses for RNA-sequencing and microarray studies"
authors: "Ritchie et al."
year: 2015
doi: "10.1093/nar/gkv007"
source: "ritchie-2015-limma.md"
category: "bioinformatics-tool"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/ritchie-2015-limma-powers-differential-expression-analyses.pdf"
pdf_filename: "ritchie-2015-limma-powers-differential-expression-analyses.pdf"
source_collection: "batch-2026-05"
tags: [limma, differential-expression, RNA-seq, microarray, R-Bioconductor, voom, empirical-Bayes]
---

# limma: Differential Expression Analysis

## Summary

R/Bioconductor package for differential expression analysis of microarray and RNA-seq data. Introduces the voom method for RNA-seq count transformation and uses empirical Bayes moderation for stable variance estimation in small-sample experiments. One of the most widely cited DE analysis tools in genomics.

## Key points

- voom method transforms RNA-seq counts with precision weights
- Empirical Bayes variance shrinkage for small samples
- Flexible linear model framework for complex designs
- Comparable performance to dedicated RNA-seq tools

## Project relevance

- Foundational bioinformatics tool for DE analysis
- voom method widely used in proteomics/transcriptomics pipelines
- Reference for statistical methods in omics

## Caveats

- Count-based methods (DESeq2/edgeR) may be preferred for RNA-seq
- Published 2015; extensions needed for single-cell applications

## Related pages

- [[differential-expression]]
- [[RNA-seq]]
- [[bioinformatics-tool]]
