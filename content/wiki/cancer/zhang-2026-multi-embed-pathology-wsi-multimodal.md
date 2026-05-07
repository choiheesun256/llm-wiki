---
title: "Systematically decoding pathological morphologies and molecular profiles with unified multimodal embedding"
authors: "Zhang et al."
year: 2026
doi: "10.1038/s41592-026-03070-5"
source: "zhang-2026-multi-embed-pathology-wsi-multimodal.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-multi-embed-pathology-wsi-multimodal.pdf"
pdf_filename: "zhang-2026-multi-embed-pathology-wsi-multimodal.pdf"
source_collection: "notion-handoff-2026-05"
tags: [pathology, wsi, multimodal, multi-omics, spatial-transcriptomics, drug-response]
---

## Summary

Multi-Embed aligns pathology WSI morphology with transcriptomics, methylation, proteomics, mutation, and spatial omics in a unified embedding space using UNI pathology foundation model + modality-specific FFNs + triplet self-supervised alignment. Enables molecular profile prediction from H&E images alone. Outperforms HE2RNA (PCC 0.29) and DeepPT (0.32) with PCC 0.37 across 12 TCGA cancer types, generalizes to 7 CPTAC external datasets, and supports spatial transcriptomics (Visium, Xenium, Visium HD), drug response prediction, and TLS detection.

## Key Contributions

- Unified embedding space for WSI + 5 omics modalities
- UNI foundation model for morphology features + modality-specific FFN projection
- Triplet self-supervised alignment with reconstruction and MMD regularization
- Applications: molecular prediction, prognosis, drug response, spatial clustering, TLS detection

## Methodology and Architecture

Image encoder: UNI pathology foundation model for WSI tiles. Omics encoders: modality-specific FFNs. Training: triplet alignment + reconstruction loss + divergence/MMD regularization. Evaluated on morphology-to-HVG prediction, cross-modal inference, spatial transcriptomics, prognosis, drug response.

## Results

| Task | Multi-Embed | Baseline |
|------|-------------|----------|
| Morphology-to-HVG (12 TCGA) | PCC **0.37** | HE2RNA 0.29, DeepPT 0.32 |
| CPTAC external | Generalizes (7 datasets) | — |
| Spatial (Visium/Xenium/HD) | > OmiCLIP, iStar | — |
| Drug response | Predictive | — |

## Related Papers

- [[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]]
- [[cancer/wu-2026-reimagining-human-centric-drug-development]]
- [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]]
