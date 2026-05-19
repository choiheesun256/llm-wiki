---
title: "Systematically decoding pathological morphologies and molecular profiles with unified multimodal embedding"
authors: "Zhang et al."
year: 2026
doi: "10.1038/s41592-026-03070-5"
source: "zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding.pdf"
pdf_filename: "zhang-2026-systematically-decoding-pathological-morphologies-multimodal-embedding.pdf"
source_collection: "batch-2026-05"
tags: [multimodal-embedding, pathology, spatial-transcriptomics, contrastive-learning, multi-omics, cross-modality, TCGA]
---

# Multi-Embed: Unified Multimodal Embedding for Pathology and Molecular Profiles

## Summary
Multi-Embed (Nature Methods, 2026) is a unified, self-supervised multimodal learning framework that integrates multilevel pathological morphologies (slide, spot, and cell level) with multilayer molecular profiles (genomics, epigenomics, transcriptomics, proteomics). It uses an auto-encoder with self-supervised contrastive learning to build a joint embedding space capturing both shared and complementary inter-modality information. It achieves state-of-the-art performance in cross-modality inference, spatial clustering, and multimodal prognosis across 12 cancer types.

## Key points
- UNI pathology foundation model extracts multilevel morphology features from pathology tiles
- Stacked feed-forward neural network projects morphological and molecular features into a shared embedding space
- Self-supervised contrastive learning (triplet loss) for inter-modality associations; self-reconstruction loss preserves intra-modality characteristics
- Pretrained on TCGA and reused across external datasets for the same sequencing technology
- Cross-modality tasks: image-to-gene, gene-to-image, image-to-methylation, image-to-protein, image-to-mutation
- Cross-modality integration: spatial clustering (ARI), multimodal prognosis (C-index), trajectory inference
- Outperforms HE2RNA, DeepPT, OmiCLIP, iStar, PROPOISE across diverse benchmark tasks
- Validated on 6 external independent CPTAC prognosis datasets and spatial proteomics dataset (ORION-CRC)

## Project relevance
- Joint embedding of morphology + molecular profiles is directly applicable to perturbation prediction feature representation (annForce)
- Multi-omics integration and multimodal prognosis modeling applicable to drug repurposing project outcome prediction
- Self-supervised approach enables cross-modality imputation when specific data types are missing in a cohort

## Caveats
- Pre-training is platform-specific; generalization across different sequencing technologies may be limited
- Interpretability module not fully validated in clinical settings
- Performance on small-scale ST datasets may be limited

## Related pages
- [[multimodal-learning]]
- [[spatial-transcriptomics]]
- [[contrastive-learning]]
- [[proteogenomics]]
