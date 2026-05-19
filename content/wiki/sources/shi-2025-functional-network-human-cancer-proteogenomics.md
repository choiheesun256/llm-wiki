---
title: "Mapping the functional network of human cancer through machine learning and pan-cancer proteogenomics"
authors: "Shi et al."
year: 2025
doi: "10.1038/s43018-024-00869-z"
source: "shi-2025-functional-network-human-cancer-proteogenomics.md"
category: "proteogenomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/shi-2025-functional-network-human-cancer-proteogenomics.pdf"
pdf_filename: "shi-2025-functional-network-human-cancer-proteogenomics.pdf"
source_collection: "batch-2026-05"
tags: [FunMap, functional-network, pan-cancer, CPTAC, XGBoost, protein-coexpression, GNN, Nature-Cancer, Bing-Zhang]
---

# FunMap: Cancer Functional Network

## Summary

Nature Cancer study presenting FunMap, a pan-cancer functional network of 10,525 genes and 196,800 edges constructed using supervised ML (XGBoost) on proteomics and RNA-seq data from 1,194 patients across 11 CPTAC cancer types. Protein coexpression is a stronger predictor of gene cofunctionality than mRNA. GNN applied to FunMap identifies low-frequency cancer drivers. Interactive web tool available at funmap.linkedomics.org.

## Key points

- 10,525 genes, 196,800 edges; 50x enrichment for functional pairs
- Protein coexpression outperforms mRNA for functional prediction
- Hierarchical modules linked to cancer hallmarks
- GNN identifies low-frequency cancer drivers

## Project relevance

- Key CPTAC pan-cancer resource (Bing Zhang lab)
- ML-based functional network construction
- Cancer driver prediction methodology

## Caveats

- CPTAC data only; tissue-level, not single-cell
- Static network; no dynamic/context-specific edges
- Protein data bias towards abundant proteins

## Related pages

- [[proteogenomics]]
- [[CPTAC]]
- [[pan-cancer]]
- [[network-biology]]
