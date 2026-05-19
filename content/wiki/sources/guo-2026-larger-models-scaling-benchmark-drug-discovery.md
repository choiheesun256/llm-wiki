---
title: "Do Larger Models Really Win in Drug Discovery? A Benchmark Assessment of Model Scaling in AI-Driven Molecular Property and Activity Prediction"
authors: "Guo J."
year: 2026
doi: "10.48550/arXiv.2604.26498"
source: "guo-2026-larger-models-scaling-benchmark-drug-discovery.md"
category: "other"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/guo-2026-larger-models-scaling-benchmark-drug-discovery.pdf"
pdf_filename: "guo-2026-larger-models-scaling-benchmark-drug-discovery.pdf"
source_collection: "batch-2026-05"
tags: [benchmark, QSAR, GNN, LLM, ADMET, Tox21, molecular-property, model-scaling]
---

# Model Scaling Benchmark for Drug Discovery

## Summary

Systematic benchmark of classical ML, GNNs, pretrained molecular sequence models, and LLM-SAR baselines across 22 molecular property and activity endpoints (ADMET, Tox21, anti-TB, antimalarial). Classical ML (RF/ExtraTrees with ECFP/RDKit) wins 10 primary metrics, GNNs win 9, pretrained sequence models win 3, and LLM-SAR wins none. Scale alone does not predict performance — the alignment between molecular representation, inductive bias, data regime, and endpoint biology matters more.

## Key points

- 167,056 held-out evaluations under structure-similarity-separated 5-fold CV
- Performance differences among model families are modest and endpoint-dependent
- LLMs add value for zero-shot SAR reasoning and interpretation but not for primary prediction metrics
- Compact, specialized models remain highly effective for molecular property prediction

## Project relevance

- Informs model selection for QSAR/ADMET prediction in drug repurposing pipelines
- Classical ML with fingerprints should always serve as a baseline before deploying complex architectures
- LLM role is better suited for SAR interpretation than direct prediction

## Caveats

- Anti-TB and antimalarial datasets are internal (not yet publicly available)
- LLM-SAR uses rule application, not fine-tuning — may not be a fully fair comparison
- Only 3 regression tasks; limited conclusions for continuous-valued endpoints

## Related pages

- [[drug-repurposing]]
- [[virtual-screening]]
