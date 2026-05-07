---
title: "ProteinAligner: A Multi-Modal Contrastive Learning Framework for Protein Representation"
authors: "Li Zhang, Han Guo, Leah Schaffer, Young Su Ko, Digvijay Singh, Hamid Rahmani, Danielle Grotjahn, Elizabeth Villa, Michael Gilson, Wei Wang, Trey Ideker, Eric Xing, Pengtao Xie"
year: 2026
doi: "10.1016/j.crmeth.2026.101407"
source: "zhang-2026-proteinaligner-tri-modal-contrastive-learning.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-proteinaligner-tri-modal-contrastive-learning.pdf"
pdf_filename: "zhang-2026-proteinaligner-tri-modal-contrastive-learning.pdf"
source_collection: "notion-handoff-2026-05"
tags: [protein-foundation-model, contrastive-learning, tri-modal, missense-variant, drug-target]
---

## Summary

ProteinAligner is an 867M-parameter protein foundation model that aligns amino acid sequences, 3D structures, and functional text through sequence-anchored contrastive learning. It outperforms ESM-2, ESM-3 (1.4B), ProtST, and ProTrek across six downstream tasks including pathogenic missense prediction (F1 0.72 vs ESM-3 0.47) and bioactive peptide discovery. Its continuous 3D geometry preservation via GVP-GNN avoids the quantization artifacts of ESM-3 and ProTrek.

## Key Contributions

- Tri-modal contrastive framework aligning sequence + structure + text with sequence as the universal anchor
- GVP-GNN structure encoder preserving sub-angstrom backbone and side-chain information
- Parameter-efficient downstream: all encoders frozen, only task heads trained
- State-of-the-art on pathogenic missense, thermostability, bioactive peptide, AMP MIC tasks

## Methodology and Architecture

Three encoders (ESM-2 650M for sequence, ESM-IF1 GVP-GNN 124M for structure, 78M for text) are aligned via sequence-anchored contrastive loss. Pretrained on 290,480 UniProtKB/Swiss-Prot proteins with experimental structures and expert-reviewed annotations. BLASTp confirms no downstream test set leakage.

## Results

| Task | ProteinAligner | Best Baseline |
|------|----------------|---------------|
| Pathogenic missense F1 | **0.72** | ESM-3: 0.47 |
| Thermostability F1/Acc | **0.608/0.577** | ESM-IF1: 0.559/0.542 |
| AMP MIC MSE | **0.449** | ESM-3: 1.1 |
| Bioactive peptides | 6/7 > ESM-3 | — |

## Related Papers

- [[cancer/jia-2026-drugclip-contrastive-learning-genome-scale]]
- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]
