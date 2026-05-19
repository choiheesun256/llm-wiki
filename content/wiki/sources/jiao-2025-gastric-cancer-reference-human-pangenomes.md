---
title: "Gastric cancer genomics study using reference human pangenomes"
authors: "Jiao et al."
year: 2025
doi: "10.26508/lsa.202402977"
source: "jiao-2025-gastric-cancer-reference-human-pangenomes.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/jiao-2025-gastric-cancer-reference-human-pangenomes.pdf"
pdf_filename: "jiao-2025-gastric-cancer-reference-human-pangenomes.pdf"
source_collection: "batch-2026-05"
tags: [pangenome, gastric-cancer, GGCPan, structural-variants, graph-genome, Chinese-cohort]
---

# GGCPan: Gastric Cancer Graph Pangenome

## Summary

Constructs GGCPan, a gastric cancer-specific graph pangenome from 185 Chinese patients' WGS data. Compared against GRCh38 and linear pangenome (GCPan), GGCPan achieves superior structural variant detection (recall 82.7% vs. 71.3% for GRCh38). Detects ~65% more SVs and identifies 5 additional driver gene candidates only discoverable through pangenome-based analysis. Demonstrates disease-specific pangenomes as a promising approach for cancer genomics.

## Key points

- GGCPan detects 65% more SVs than GRCh38-based analysis
- Recall: GGCPan 82.7% > GRCh38 71.3% > GCPan 61.0%
- 24 candidate driver genes, 5 detectable only via pangenome
- SV-related genes enriched in PI3K-AKT and focal adhesion pathways

## Project relevance

- Disease-specific pangenome approach for improved cancer variant detection
- Structural variant discovery beyond standard reference genome limitations
- Population-specific (Chinese) gastric cancer genomic landscape

## Caveats

- Chinese cohort-specific; generalization to other populations needed
- Short-read WGS; long-read could detect additional SVs
- Driver gene candidates are computational predictions without functional validation
- Graph genome analysis tools not yet standardized

## Related pages

- [[pangenomics]]
- [[gastric-cancer]]
- [[structural-variants]]
