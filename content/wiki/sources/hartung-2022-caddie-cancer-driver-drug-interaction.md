---
title: "CADDIE: Cancer Driver Drug Interaction Explorer"
authors: "Hartung et al."
year: 2022
doi: "10.1093/nar/gkac384"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/hartung-2022-caddie-cancer-driver-drug-interaction.pdf"
pdf_filename: "hartung-2022-caddie-cancer-driver-drug-interaction.pdf"
source_collection: "notion-handoff-2026-05"
---

Web-based network medicine platform for cancer drug repurposing that starts from cancer driver gene sets and automatically identifies drug targets and repurposing candidates using integrated gene-gene and drug-gene interaction networks (16,761 genes + 6,840 drugs).

## 1. Document Information

- **Journal**: Nucleic Acids Research (2022)
- **Affiliations**: List/Baumbach lab
- **DOI**: [10.1093/nar/gkac384](https://doi.org/10.1093/nar/gkac384)

## 2. Key Contributions

1. Integrates 6 gene-gene + 4 drug-gene interaction databases into a single interactome.
2. Cancer driver annotation from COSMIC, NCG6, IntOGen, cancer-genes.org.
3. Edge weighting by mutation frequency + expression data.
4. GUI-based network traversal for hypothesis generation.
5. Validated on sarcoma: rediscovers imatinib, sorafenib, sunitinib + novel candidates (staurosporine, AT-7519, lapatinib).

## 3. Methodology and Architecture

- **Input**: cancer driver DB, mutation/expression filter, custom gene list, disease search, variant calling output.
- **Driver annotation**: COSMIC, NCG6, IntOGen, cancer-genes.org.
- **Network**: 16,761 genes + 6,840 drugs from 10 interaction databases.
- **Edge weight**: mutation frequency + gene expression.
- **Backend**: graph-tool for whole human gene-drug interactome traversal.
- **Frontend**: interactive GUI + Python/Docker/API.

## 4. Key Results and Benchmarks

**Sarcoma case study**:
- Seed genes: AXL, ALK, FGFR3, MYC, SKP2, MDM2, etc.
- Rediscovered: imatinib, sorafenib, sunitinib, dasatinib, nilotinib, pazopanib, crizotinib.
- Novel candidates: staurosporine, AT-7519, lapatinib, erlotinib.

## 5. Limitations and Future Work

- Depends on network DB completeness; unknown interactions are missed.
- Scoring sensitive to algorithm and weight settings — sensitivity analysis required.
- Hypothesis generation tool, not clinical recommendation.
- Superseded by Kersting 2025 nf-core pipeline from the same group.

## 6. Related Work

- [[cancer/kersting-2025-nf-core-nextflow-disease-module]] (same group's reproducible pipeline successor)
- [[cancer/chauquet-2026-twas-signature-matching-for-drug]] (GWAS-to-drug prioritisation)

## 7. Glossary

- **Disease module**: Subnetwork of the interactome associated with a specific disease.
- **Driver gene**: Gene whose mutations causally contribute to cancer development.
- **Network traversal**: Graph algorithms that explore paths from seed genes to drug targets.
