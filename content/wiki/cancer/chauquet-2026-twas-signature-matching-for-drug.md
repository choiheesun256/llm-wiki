---
title: "TWAS signature-matching for drug prioritisation: best-practice benchmark"
authors: "Solal Chauquet, Jiayue-Clara Jiang, Lauren F. Barker, Zoe L. Hunter, Gagandeep Singh, Naomi R. Wray, Allan F. McRae, Sonia Shah"
year: 2026
doi: "10.64898/2026.04.22.26349470"
source: "chauquet-2026-twas-signature-matching-for-drug.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/chauquet-2026-twas-signature-matching-for-drug.pdf"
pdf_filename: "chauquet-2026-twas-signature-matching-for-drug.pdf"
source_collection: "notion-handoff-2026-05"
tags: [twas, gwas, cmap, drug-repurposing, benchmark]
---

## Summary

First systematic benchmark of all parameters in a TWAS signature-matching drug prioritisation pipeline. Demonstrates that TWAS-CMap matching can successfully prioritise known first-line drugs, but results are extremely sensitive to parameter choices — especially CMap cell line selection, which alone can drastically alter rankings. Provides a best-practice framework for GWAS → TWAS → drug repurposing workflows.

## Key Contributions

- Comprehensive benchmark across TWAS method, eQTL tissue, similarity metric, gene set size, and CMap cell line
- Demonstrates CMap cell line as the single most impactful parameter
- Validates on 3 proof-of-concept traits with known first-line therapies
- Best-practice framework for reproducible drug prioritisation

## Methodology and Architecture

Benchmarks PrediXcan/S-PrediXcan/MetaXcan with GTEx v8 tissue models, cosine/Spearman/KS similarity metrics, variable gene set sizes, and multiple CMap cell lines (A375, MCF7, PC3, HA1E). Evaluated on LDL cholesterol (statin ground truth), familial combined hyperlipidemia, and asthma.

## Results

- Known first-line drugs are successfully prioritised across parameter combinations
- Extreme parameter sensitivity: CMap cell line selection dominates ranking changes
- No single parameter combination is universally optimal

## Related Papers

- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]]
- [[cancer/tong-2026-multimodal-dl-lincs-l1000-hdac]]
