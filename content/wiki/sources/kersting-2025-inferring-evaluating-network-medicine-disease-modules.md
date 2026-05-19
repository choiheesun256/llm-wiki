---
title: "Inferring and Evaluating Network Medicine-Based Disease Modules with Nextflow"
authors: "Kersting et al."
year: 2025
doi: "10.1101/2025.11.20.687681"
source: "kersting-2025-inferring-evaluating-network-medicine-disease-modules.md"
category: "other"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/kersting-2025-nf-core-disease-module-network-medicine.pdf"
pdf_filename: "kersting-2025-nf-core-disease-module-network-medicine.pdf"
source_collection: "batch-2026-05"
tags: [network-medicine, disease-module, Nextflow, PPI, drug-repurposing, benchmark, pipeline]
---

# Network Medicine Disease Module Pipeline

## Summary

Nextflow-based pipeline integrating 6 disease module detection algorithms (DIAMOnD, BiCoN, ROBUST, DiseaseModuleMiner, GrandForest, HotNet2) for systematic benchmarking across 50 disease-network combinations. Evaluates modules via overlap significance, functional enrichment, and drug target enrichment. Provides reproducible, containerized workflow for network medicine research.

## Key points

- 6 module detection algorithms in one reproducible Nextflow pipeline
- Systematic benchmarking across 50 disease-network combinations
- No single best algorithm; performance is disease-dependent
- Drug target enrichment as module evaluation criterion

## Project relevance

- Network medicine methodology for drug repurposing
- Disease module detection algorithm comparison framework
- PPI-based disease gene identification pipeline

## Caveats

- bioRxiv preprint; not peer-reviewed
- PPI network bias toward well-studied genes
- Computational evaluation only; no experimental validation
- Algorithm-specific parameter sensitivity not fully explored

## Related pages

- [[network-medicine]]
- [[drug-repurposing]]
- [[protein-protein-interaction]]
