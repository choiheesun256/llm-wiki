---
title: "CADDIE: Cancer Driver Drug Interaction Explorer"
authors: "Hartung et al."
year: 2022
doi: "10.1093/nar/gkac384"
source: "hartung-2022-caddie-cancer-driver-drug-interaction.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/hartung-2022-caddie-cancer-driver-drug-interaction.pdf"
pdf_filename: "hartung-2022-caddie-cancer-driver-drug-interaction.pdf"
source_collection: "notion-handoff-2026-05"
tags: [network-medicine, drug-repurposing, cancer-driver, interactome]
---

## Summary

Web-based network medicine platform for cancer drug repurposing. Takes cancer driver gene sets as input and traverses an integrated interactome (6 gene-gene + 4 drug-gene DBs, 16,761 genes + 6,840 drugs) to identify drug targets and repurposing candidates. Validated on sarcoma: rediscovers known kinase inhibitors (imatinib, sorafenib) and proposes novel candidates (staurosporine, AT-7519, lapatinib).

## Key Contributions

- Integrated interactome: 10 interaction databases, 16,761 genes, 6,840 drugs
- Cancer driver annotation from COSMIC, NCG6, IntOGen, cancer-genes.org
- Edge weighting by mutation frequency and expression data
- Interactive GUI accessible to clinicians and computational researchers alike

## Methodology and Architecture

Graph-tool backend traversing the full human gene-drug interactome. Input: cancer driver genes (from DB, custom list, or variant calling). Edge weights from mutation frequency + expression. Filters for drug action type. Frontend: interactive GUI + Python/Docker/API.

## Results

Sarcoma case: seed genes (AXL, ALK, FGFR3, MYC, SKP2, MDM2) → rediscovered imatinib, sorafenib, sunitinib, dasatinib, nilotinib, pazopanib, crizotinib. Novel candidates: staurosporine, AT-7519, lapatinib, erlotinib.

## Related Papers

- [[cancer/kersting-2025-nf-core-nextflow-disease-module]]
- [[cancer/chauquet-2026-twas-signature-matching-for-drug]]
