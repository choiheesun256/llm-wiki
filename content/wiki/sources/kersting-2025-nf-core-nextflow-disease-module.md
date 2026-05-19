---
title: "nf-core Nextflow disease module discovery pipeline"
authors: "Kersting et al."
year: 2025
doi: "10.1101/2025.11.20.687681"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/kersting-2025-nf-core-nextflow-disease-module.pdf"
pdf_filename: "kersting-2025-nf-core-nextflow-disease-module.pdf"
source_collection: "notion-handoff-2026-05"
---

nf-core Nextflow pipeline automating disease module discovery + evaluation + drug prioritisation across 6 algorithms and 10 PPI networks. Key message: no single method consistently outperforms, and input network choice dominates results.

## 1. Document Information

- **Journal**: bioRxiv preprint (2025)
- **Affiliations**: List/Baumbach lab (CADDIE successor)
- **DOI**: [10.1101/2025.11.20.687681](https://doi.org/10.1101/2025.11.20.687681)

## 2. Key Contributions

1. Integrates 6 disease module detection methods (DOMINO, DIAMOnD, ROBUST, ROBUST bias-aware, 1st Neighbors, RWR) in a reproducible Nextflow pipeline.
2. Automated multi-metric evaluation: topological summary, Jaccard overlap, g:Profiler enrichment, DIGEST coherence, leave-one-out, seed rediscovery, degree dependence.
3. Drug prioritisation via degree centrality, harmonic centrality, TrustRank.
4. Critical warning: inferred modules vary drastically by algorithm, input network, and seed gene set.

## 3. Methodology and Architecture

- **Module detection**: DOMINO, DIAMOnD, ROBUST, ROBUST bias-aware, 1st Neighbors, RWR.
- **Evaluation**: topological summary, pairwise Jaccard, g:Profiler, DIGEST, leave-one-out, seed rediscovery, node-degree dependence.
- **Drug prioritisation**: NeDRexDB annotation, degree/harmonic centrality, TrustRank.
- **Output**: static figures + interactive HTML network views + MultiQC report.
- **Experiment**: 5 diseases x 10 PPI networks x 6 algorithms = 300 combinations.

## 4. Key Results and Benchmarks

- DOMINO returns small modules; RWR/1st Neighbors return larger ones.
- ROBUST bias-aware is most explorative.
- Disease specificity often depends on seed genes, not newly added nodes.
- Input network selection has large impact (low Jaccard overlap across networks).
- Network rewiring has far greater impact than seed removal → results vulnerable to network completeness and study bias.

## 5. Limitations and Future Work

- No generalizable "best" algorithm-network combination even across 300 combos.
- Large modules risk gene set test inflation.
- Network rewiring dependence warns that network quality may drive conclusions.
- Preprint; not peer-reviewed.

## 6. Related Work

- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]] (same group's predecessor web tool)
- [[cancer/chauquet-2026-twas-signature-matching-for-drug]] (complementary GWAS-to-drug approach)

## 7. Glossary

- **RWR**: Random Walk with Restart — graph algorithm propagating from seed nodes.
- **DIAMOnD**: Disease Module Detection — iterative connectivity significance algorithm.
- **DIGEST**: Disease Gene Set Test — functional coherence evaluation.
- **NeDRexDB**: Network-based Drug Repurposing knowledge graph database.
