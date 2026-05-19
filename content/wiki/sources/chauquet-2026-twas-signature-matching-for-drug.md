---
title: "TWAS signature-matching for drug prioritisation: best-practice benchmark"
authors: "Solal Chauquet, Jiayue-Clara Jiang, Lauren F. Barker, Zoe L. Hunter, Gagandeep Singh, Naomi R. Wray, Allan F. McRae, Sonia Shah"
year: 2026
doi: "10.64898/2026.04.22.26349470"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/chauquet-2026-twas-signature-matching-for-drug.pdf"
pdf_filename: "chauquet-2026-twas-signature-matching-for-drug.pdf"
source_collection: "notion-handoff-2026-05"
---

First systematic benchmark of all parameters in a TWAS signature-matching drug prioritisation pipeline, demonstrating that results are extremely sensitive to parameter choices, especially CMap cell line selection.

## 1. Document Information

- **Journal**: medRxiv preprint (2026)
- **Affiliations**: University of Queensland, Oxford
- **DOI**: [10.64898/2026.04.22.26349470](https://doi.org/10.64898/2026.04.22.26349470)

## 2. Key Contributions

1. First comprehensive benchmark of TWAS-to-drug repurposing pipeline parameters.
2. Demonstrates that CMap cell line selection alone can drastically change drug rankings.
3. Provides best-practice framework for GWAS → TWAS → CMap drug prioritisation.
4. Validates using proof-of-concept traits with known first-line drugs.

## 3. Methodology and Architecture

- **Benchmark parameters**: TWAS method (PrediXcan, S-PrediXcan, MetaXcan), eQTL tissue model (GTEx v8), similarity metric (cosine, Spearman, KS), gene set size (top N), CMap cell line (A375, MCF7, PC3, HA1E).
- **Proof-of-concept traits**: LDL cholesterol (statin ground truth), familial combined hyperlipidemia, asthma (corticosteroid, bronchodilator).
- **Evaluation**: Ability to prioritise known first-line drugs across parameter combinations.

## 4. Key Results and Benchmarks

- TWAS signature-matching can prioritise known first-line drugs successfully.
- Results are **extremely sensitive** to parameter choices.
- CMap cell line selection is the single most impactful parameter.
- No single parameter combination dominates across all traits.

## 5. Limitations and Future Work

- Preprint stage (medRxiv), not yet peer-reviewed.
- Proof-of-concept traits are non-cancer (LDL, asthma) — cancer-specific validation needed.
- CMap data inherent biases (cell line, dose, time).
- Does not address multi-tissue or single-cell eQTL models.

## 6. Related Work

- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]] (network-based cancer drug repurposing)
- [[cancer/tong-2026-multimodal-dl-lincs-l1000-hdac]] (LINCS L1000 perturbation-based screening)

## 7. Glossary

- **TWAS**: Transcriptome-Wide Association Study — links genetically predicted gene expression to phenotype.
- **CMap**: Connectivity Map — database of drug-induced gene expression signatures.
- **eQTL**: Expression Quantitative Trait Locus.
