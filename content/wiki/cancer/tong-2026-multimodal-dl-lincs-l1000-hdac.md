---
title: "Multimodal deep learning with LINCS L1000 identifies pan-cancer Class I HDAC inhibitors"
authors: "Siyuan Tong, Wen Zhang, Shiliang Ji"
year: 2026
doi: "10.64898/2026.04.22.720196"
source: "tong-2026-multimodal-dl-lincs-l1000-hdac.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/tong-2026-multimodal-dl-lincs-l1000-hdac.pdf"
pdf_filename: "tong-2026-multimodal-dl-lincs-l1000-hdac.pdf"
source_collection: "notion-handoff-2026-05"
tags: [hdac, lincs, multimodal-dl, drug-repurposing, pan-cancer]
---

## Summary

Dual-stream multimodal model combining 2D molecular graph (GCN) and Morgan/ECFP4 fingerprint (self-attention Transformer) via cross-modal attention to predict LINCS L1000 perturbational signatures. Pan-cancer screening across 22 TCGA cancer types consistently identifies brain-penetrant Class I HDAC inhibitors (TC-H-106, RG2833, Tianeptinaline) as broad-spectrum anticancer candidates. TC-H-106 docks to HDAC1 at -7.0 kcal/mol.

## Key Contributions

- Dual-stream GCN + Transformer architecture with cross-modal attention fusion
- LINCS L1000 perturbational signature prediction from molecular structure alone
- Pan-cancer drug screening across 22 TCGA cancer types
- Consistent identification of brain-penetrant Class I HDAC inhibitors

## Methodology and Architecture

Stream 1: 2D molecular graph → GCN. Stream 2: Morgan/ECFP4 fingerprint → self-attention Transformer. Fusion via cross-modal attention. Trained on 55,695 drug-cell line pairs with drug-cell line split. Output: predicted L1000 gene expression change vector.

## Results

- Brain-penetrant Class I HDAC inhibitors (TC-H-106, RG2833, Tianeptinaline) consistently top-ranked across 22 cancer types
- Potent in LUAD, BLCA, READ, and others
- TC-H-106 ↔ HDAC1 docking: AutoDock Vina -7.0 kcal/mol
- Proper drug-cell line split ensures generalization

## Related Papers

- [[cancer/chauquet-2026-twas-signature-matching-for-drug]]
- [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]]
