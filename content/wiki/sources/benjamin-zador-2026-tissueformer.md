---
title: "TissueFormer: single-cell foundation model to tissue-level phenotype prediction"
authors: "Ari S. Benjamin, Anthony Zador"
year: 2026
doi: "10.1101/2025.08.17.670735"
category: "single-cell"
notion_source: "https://www.notion.so/354302d9c598815ba3e7e31491e9a7d3"
source_collection: "notion-review-2026-05-07"
tags: [single-cell-foundation-model, geneformer, cross-cell-attention, phenotype-prediction]
---

# TissueFormer

## Summary

TissueFormer extends a Geneformer-style cell encoder with cross-cell self-attention so a set of cells can predict tissue, sample, or donor-level phenotypes. It is relevant when the goal is not just cell annotation but patient or sample outcome prediction from many cells.

## Method

- Cell encoder uses rank-based gene tokenization in the Geneformer family.
- A population layer applies cross-cell self-attention across the sampled cells.
- The model maps cell sets directly to sample-level labels.

## Project relevance

- Useful design pattern for digital-cell projects where cell-level atlases must connect to donor-level or disease-level outcomes.
- Suggests that input cell count, cell composition, and sampling consistency become model QC variables.
- Can be viewed as a lightweight extension layer over existing scFM backbones.

## Caveats

- Short-report style evidence at the time of Notion review.
- Mouse-to-human and cohort-to-cohort generalization need independent validation.

## Related pages

- [[single-cell-foundation-models]]
- [[vital-digital-cell]]
- [[single-cell-methods]]
