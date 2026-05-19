---
title: "Pan-cancer proteogenomic investigations identify post-transcriptional kinase targets"
authors: "Elmas et al."
year: 2021
doi: "10.1038/s42003-021-02636-7"
source: "elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional.pdf"
pdf_filename: "elmas-2021-pan-cancer-proteogenomic-investigations-identify-post-transcriptional.pdf"
source_collection: "batch-2026-05"
tags: [proteogenomics, kinase, OPPTI, pan-cancer, drug-target, CPTAC]
---

# Pan-cancer Proteogenomic Kinase Targets (OPPTI)

## Summary

OPPTI identifies overexpressed kinase proteins across 10 cancer types (1,071 CPTAC cases) by comparing observed protein levels against co-expression network-inferred backgrounds. It discovers 23 druggable kinase targets, many invisible at DNA/RNA level, and validates them through DepMap CRISPR screens and phosphoproteomics.

## Key points

- Co-expression neighbor-based algorithm outperforms univariate outlier detection (F=0.91 vs 0.80 for HER2)
- CDK4/6, PDK1, MET frequently overexpressed at protein level without corresponding genomic amplification
- 626 differentially phosphorylated kinase-cancer pairs confirm signaling pathway upregulation
- Integrates CPTAC proteomics, DepMap CRISPR, and Pathology Atlas IHC

## Project relevance

- Demonstrates protein-level drug target discovery beyond genomics — directly relevant to drug repurposing pipelines
- OPPTI approach applicable to any cohort with quantitative proteomics data
- Phospho-signaling validation links to kinase activity inference methods

## Caveats

- Only detects overexpression, not loss-of-function or mutation-driven changes
- No independent cohort validation outside CPTAC

## Related pages

- [[drug-repurposing]]
- [[network-medicine]]
