---
title: "Deciphering the dark cancer phosphoproteome using machine-learned co-regulation of phosphosites"
authors: "Jiang et al."
year: 2025
doi: "10.1038/s41467-025-57993-2"
source: "jiang-2025-deciphering-dark-cancer-phosphoproteome-using.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/jiang-2025-deciphering-dark-cancer-phosphoproteome-using.pdf"
pdf_filename: "jiang-2025-deciphering-dark-cancer-phosphoproteome-using.pdf"
source_collection: "batch-2026-05"
tags: [phosphoproteomics, machine-learning, CoPheeMap, CoPheeKSA, kinase-substrate, XGBoost, pan-cancer, CPTAC, dark-phosphoproteome]
---

# CoPheeMap/CoPheeKSA: ML-based Dark Cancer Phosphoproteome

## Summary

Integrates phosphoproteomic data from 1,195 CPTAC tumors (11 cancer types) using XGBoost to construct CoPheeMap, a co-regulation network of 26,280 phosphosites. CoPheeKSA, built on network embeddings from CoPheeMap, predicts 24,015 kinase-substrate associations between 9,399 phosphosites and 104 S/T kinases. Illuminates the "dark phosphoproteome" (95% of phosphosites with unknown function) and identifies understudied kinases as potential therapeutic targets.

## Key points

- CoPheeMap: XGBoost-based co-regulation network of 26,280 phosphosites
- CoPheeKSA: 24,015 novel kinase-substrate associations predicted
- Addresses the dark phosphoproteome (<5% with known kinase/function)
- Identifies understudied kinases as putative therapeutic targets

## Project relevance

- ML approach to functional annotation of the phosphoproteome
- Pan-cancer signaling pathway dysregulation analysis
- Network-based kinase-substrate prediction beyond sequence motifs

## Caveats

- CPTAC-centric; reproducibility on other phosphoproteomics platforms needs validation
- Computational predictions; limited experimental validation
- Focused on S/T kinases; tyrosine kinases require separate analysis

## Related pages

- [[phosphoproteomics]]
- [[proteogenomics]]
- [[machine-learning-biology]]
