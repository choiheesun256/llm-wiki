---
title: "Multi-Modal Deep Learning Integrates Spatial Topologies and Sequential Motifs to Identify Class I HDAC Inhibitors as Pan-Cancer Therapeutics"
authors: "Tong et al."
year: 2026
doi: "10.64898/2026.04.22.720196"
source: "tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor.pdf"
pdf_filename: "tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor.pdf"
source_collection: "batch-2026-05"
tags: [drug-repurposing, GNN, Transformer, HDAC, LINCS-L1000, pan-cancer, deep-learning, multimodal]
---

# Multi-Modal DL for Drug Repurposing: HDAC Inhibitors (Tong 2026)

## Summary

A dual-stream deep learning framework combining a GCN over 2D molecular graphs (spatial topology) with a self-attention Transformer over ECFP4 Morgan fingerprint tokens (sequential motifs), fused via cross-modal attention. Trained on 55,695 LINCS L1000 perturbation signatures mapped to 22 TCGA cancer types, the model screens 28,000+ small molecules for transcriptomic reversal of cancer gene expression. Class I HDAC inhibitors (TC-H-106, RG2833, Tianeptinaline) emerge as pan-cancer top candidates. Validated by molecular docking (TC-H-106 binds HDAC1 catalytic pocket at Vina −7.0 kcal/mol) and network pharmacology. BBB-penetrant HDAC inhibitors are flagged for brain tumor applications.

## Key points

- Dual-stream GCN + Transformer outperforms single-modality baselines for drug response prediction
- Drug-Cell Line Pair split strategy prevents data leakage between training and test sets
- Class I HDAC inhibitors identified as pan-cancer transcriptomic reversal agents across 22 cancer types
- TC-H-106 shows favorable docking in the HDAC1 catalytic pocket; predicted to suppress G1/S transition and DNA damage repair pathways
- BBB-penetrant candidates extend applicability to brain tumors

## Project relevance

- Dual-stream molecular representation is directly relevant to AI model design in the annForce and drug repurposing projects
- LINCS L1000 transcriptomic reversal is an established computational drug repurposing paradigm for integration into pipelines
- Demonstrates that AI-driven drug repurposing from omics signatures can yield pan-cancer rather than tumor-type-specific candidates

## Caveats

- bioRxiv preprint; not yet peer-reviewed
- Validation is entirely in silico; no experimental wet-lab confirmation has been performed
- LINCS L1000 covers only 978 landmark genes — predictions may miss off-target effects captured only by full transcriptome profiling

## Related pages

- [[AI-model]]
- [[drug-repurposing]]
- [[deep-learning]]
