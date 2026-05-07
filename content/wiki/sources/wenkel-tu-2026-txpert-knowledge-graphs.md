---
title: "TxPert: using multiple knowledge graphs for prediction of transcriptomic perturbation effects"
authors: "Frederik Wenkel, Wilson Tu, Cassandra Masschelein, et al."
year: 2026
doi: "10.1038/s41587-026-03113-4"
url: "https://github.com/valence-labs/TxPert"
category: "single-cell"
notion_source: "https://www.notion.so/353302d9c59881fa8975cdd01a069ae6"
source_collection: "notion-review-2026-05-07"
tags: [perturb-seq, knowledge-graph, gnn, transcriptomics, deep-learning]
---

# TxPert

## Summary

TxPert predicts transcriptomic perturbation effects by combining a basal-state encoder with perturbation encoders over multiple knowledge graphs. It is a strong 2026 reference point for single-cell perturbation prediction because it improves over GEARS and scLAMBDA on unseen single perturbations and combination settings.

## Method

- Basal cell state is encoded with an MLP on batch-matched control-centered expression.
- Perturbations are encoded through GNNs over STRING, GO, phenomic PxMap, and transcriptomic TxMap graphs.
- Perturbation effects are composed as latent shifts and decoded to expression changes.
- Backbones include GAT, Exphormer, Hybrid-BMP, and GAT-MLG.

## Key results

- Evaluated on Replogle K562/RPE1, Jurkat/HEPG2 CRISPRi, and Norman K562 CRISPRa combinations.
- K562 unseen single perturbation Pearson delta is reported around 0.65 versus lower GEARS and scLAMBDA baselines.
- Multi-graph fusion outperforms any single graph in the main unseen single setting.
- Cross-cell-line leave-one-out generalization is a central evaluation target.

## Project relevance

- Useful baseline for VITAL-style CRISPRi Perturb-seq modeling.
- The evaluation protocol is as valuable as the architecture: batch-matched controls, retrieval rank, general baseline, nearest-cell-line baseline, and split-half experimental reproducibility.
- The failure to predict target mRNA downregulation directly is a reminder that perturbation models can hide target-knockdown shortcuts.

## Related pages

- [[single-cell-foundation-models]]
- [[single-cell-perturbation-prediction]]
- [[vital-digital-cell]]
