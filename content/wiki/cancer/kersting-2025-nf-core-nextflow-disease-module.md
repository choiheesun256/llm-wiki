---
title: "nf-core Nextflow disease module discovery pipeline"
authors: "Kersting et al."
year: 2025
doi: "10.1101/2025.11.20.687681"
source: "kersting-2025-nf-core-nextflow-disease-module.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/kersting-2025-nf-core-nextflow-disease-module.pdf"
pdf_filename: "kersting-2025-nf-core-nextflow-disease-module.pdf"
source_collection: "notion-handoff-2026-05"
tags: [network-medicine, disease-module, nextflow, reproducibility, drug-prioritisation]
---

## Summary

nf-core Nextflow pipeline automating disease module discovery, multi-metric evaluation, and drug prioritisation. Integrates 6 algorithms (DOMINO, DIAMOnD, ROBUST, ROBUST bias-aware, 1st Neighbors, RWR) across 10 PPI networks. Key finding: no single method consistently outperforms, and input network choice has greater impact than algorithm or seed gene choice — a critical reproducibility warning for network medicine.

## Key Contributions

- Reproducible Nextflow pipeline integrating 6 disease module detection methods
- Comprehensive automated evaluation: Jaccard overlap, g:Profiler, DIGEST, leave-one-out, degree dependence
- Drug prioritisation via TrustRank, harmonic/degree centrality
- Demonstrated that network rewiring impact >> seed gene removal impact

## Methodology and Architecture

5 diseases x 10 PPI networks x 6 algorithms = 300 combinations. Evaluation: topological summary, pairwise Jaccard, g:Profiler enrichment, DIGEST coherence, leave-one-out perturbation, seed rediscovery, node-degree dependence. Drug prioritisation via NeDRexDB + centrality measures. Output: MultiQC report + interactive HTML network views.

## Results

- DOMINO: small modules. RWR/1st Neighbors: larger modules. ROBUST bias-aware: most explorative.
- Disease specificity often depends on seed genes rather than newly discovered nodes.
- Input PPI network selection dominates Jaccard overlap differences.
- Network rewiring far more impactful than seed removal → results depend heavily on network quality.

## Related Papers

- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]]
- [[cancer/chauquet-2026-twas-signature-matching-for-drug]]
