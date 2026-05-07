---
title: "Linking spatial biology and clinical histology via Haiku"
authors: "Yan Cui, Jacob S. Leiby, Wenhui Lei, Dokyoon Kim, Yanxiang Deng, Aaron T. Mayer, Zhenqin Wu, Alexandro E. Trevino, Zhi Huang"
year: 2026
doi: "N/A"
url: "https://arxiv.org/abs/2605.00925"
category: "spatial-ai"
notion_source: "https://www.notion.so/358302d9c598819a8588f7e675218346"
source_collection: "notion-review-2026-05-07"
tags: [histology, spatial-proteomics, clinical-text, contrastive-learning, cancer]
---

# Linking spatial biology and clinical histology via Haiku

## Summary

Haiku is a tri-modal contrastive foundation model that aligns H&E pathology, multiplex immunofluorescence spatial protein patches, and clinical text in a common representation space. It is relevant to cancer multiomics because it offers a concrete design for linking routine pathology, spatial biology, and clinical metadata.

## Key points

- Trains H&E, mIF, and text encoders with tri-modal contrastive learning.
- Uses a large paired spatial proteomics corpus covering 26.7M patches, 3,218 tissue sections, 1,606 patients, and 11 organ types.
- Supports three-way cross-modal retrieval, fusion retrieval, zero-shot biomarker inference, and metadata counterfactual analysis.
- Reports Recall@50 up to 0.611, survival C-index 0.737, and average biomarker Pearson correlation 0.718 across 52 biomarkers.

## Project relevance

- Direct reference for multimodal alignment in cancer cohorts with H&E, spatial protein, and clinical metadata.
- Useful for testing whether adding molecular spatial layers improves outcome or treatment-response models over histology alone.
- Provides a prototype for niche-specific biomarker hypothesis generation, but causal claims should be treated as exploratory.

## Caveats

- arXiv preprint at the time of Notion review.
- Counterfactual metadata analysis is hypothesis-generating, not causal proof.
- Generalization to local cohorts needs independent testing.

## Related pages

- [[spatial-ai-for-cancer]]
- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]
- [[tran-2026-phoenix-virtual-spatial-transcriptomics]]
