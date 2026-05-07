---
title: "Multimodal deep learning with LINCS L1000 identifies pan-cancer Class I HDAC inhibitors"
authors: "Siyuan Tong, Wen Zhang, Shiliang Ji"
year: 2026
doi: "10.64898/2026.04.22.720196"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/tong-2026-multimodal-dl-lincs-l1000-hdac.pdf"
pdf_filename: "tong-2026-multimodal-dl-lincs-l1000-hdac.pdf"
source_collection: "notion-handoff-2026-05"
---

Dual-stream multimodal model fusing 2D molecular graph (GCN) and Morgan/ECFP4 fingerprint (self-attention Transformer) via cross-modal attention to predict LINCS L1000 perturbational signatures. Pan-cancer screening across 22 TCGA cancer types consistently identifies brain-penetrant Class I HDAC inhibitors (TC-H-106, RG2833, Tianeptinaline) as broad-spectrum candidates.

## 1. Document Information

- **Journal**: bioRxiv preprint (2026)
- **Authors**: Siyuan Tong, Wen Zhang, Shiliang Ji
- **DOI**: [10.64898/2026.04.22.720196](https://doi.org/10.64898/2026.04.22.720196)

## 2. Key Contributions

1. **Dual-stream architecture**: GCN (spatial topology) + self-attention Transformer (sequential motif) fused via cross-modal attention.
2. **LINCS L1000 signature prediction**: trained on 55,695 drug-cell line pairs with proper drug-cell line split.
3. **Pan-cancer screen**: 22 TCGA cancer types screened; brain-penetrant Class I HDAC inhibitors consistently top-ranked.
4. **Docking validation**: TC-H-106 ↔ HDAC1 AutoDock Vina -7.0 kcal/mol.

## 3. Methodology and Architecture

- **Stream 1**: 2D molecular graph → GCN (spatial topology).
- **Stream 2**: Morgan/ECFP4 fingerprint → self-attention Transformer (sequential motifs).
- **Fusion**: Cross-modal attention combining both representations.
- **Output**: LINCS L1000 perturbational gene expression change vector.
- **Training**: N=55,695 drug-cell line pairs, drug-cell line split for generalization.

## 4. Key Results and Benchmarks

- Pan-cancer screen across 22 TCGA cancer types: Class I HDAC inhibitors consistently top-ranked.
- Top candidates: TC-H-106, RG2833, Tianeptinaline (all brain-penetrant).
- Potent across LUAD, BLCA, READ, and many others.
- TC-H-106 ↔ HDAC1 docking: AutoDock Vina -7.0 kcal/mol.

## 5. Limitations and Future Work

- LINCS L1000 data has inherent noise and cell-line bias → wet-lab validation essential.
- Tianeptinaline is a known neuro-active drug (serotonin reuptake); its appearance may reflect in silico bias rather than true anticancer activity — specificity re-verification needed.
- Drug-cell line split helps but does not fully address cell line generalization.

## 6. Related Work

- [[cancer/chauquet-2026-twas-signature-matching-for-drug]] (CMap/LINCS-based drug prioritisation)
- [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]] (multimodal protein-drug representation)

## 7. Glossary

- **LINCS L1000**: Library of Integrated Network-Based Cellular Signatures — perturbational gene expression database.
- **HDAC**: Histone Deacetylase — epigenetic regulator; Class I includes HDAC1/2/3/8.
- **ECFP4**: Extended-Connectivity Fingerprint with radius 4 — molecular fingerprint encoding.
