---
title: "Robust inference of kinase activity using functional networks"
authors: "Yilmaz et al."
year: 2021
doi: "10.1038/s41467-021-21211-6"
source: "ylmaz-2021-robust-inference-kinase-activity-using.md"
category: "bioinformatics-tool"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/ylmaz-2021-robust-inference-kinase-activity-using.pdf"
pdf_filename: "ylmaz-2021-robust-inference-kinase-activity-using.pdf"
source_collection: "batch-2026-05"
tags: [RoKAI, kinase-activity, phosphoproteomics, functional-networks, bioinformatics, signaling, web-tool]
---

# RoKAI: Robust Kinase Activity Inference

## Summary
Nat Comms 2021 presenting RoKAI, a network-based framework for robust kinase activity inference from phosphoproteomics data. Integrates kinase-substrate annotations, coevolution, structural distance, and PPI networks to propagate phosphorylation signals across functional neighborhoods. Consistently improves accuracy and robustness of all kinase activity inference methods, especially for understudied kinases with sparse annotations.

## Key points
- Network propagation approach for kinase activity inference
- Integrates 4 types of functional information (KS annotations, coevolution, structure, PPI)
- Robust to missing kinase-substrate annotations
- Web tool available at rokai.io

## Project relevance
- Core tool for phosphoproteomics analysis
- Complements KSEA for kinase activity inference
- Applicable to CPTAC-style phospho data

## Caveats
- Depends on quality of network annotations
- Computational framework (no new experimental data)
- Benchmarked on limited perturbation datasets

## Related pages
- [[kinase-activity-inference]]
- [[phosphoproteomics]]
- [[network-propagation]]
