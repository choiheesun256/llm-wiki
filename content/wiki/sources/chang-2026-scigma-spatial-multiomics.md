---
title: "SCIGMA: scalable and generalizable spatial multi-omics integration"
authors: "Chang et al."
year: 2026
doi: "10.64898/2026.04.19.718223"
category: "spatial-transcriptomics"
notion_source: "https://www.notion.so/350302d9c5988133b9a5e77d8308416e"
source_collection: "notion-review-2026-05-07"
tags: [spatial-multiomics, graph-attention, cross-attention, uncertainty, integration]
---

# SCIGMA

## Summary

SCIGMA integrates spatial multi-omics without assuming exactly two modalities. It builds spatial and feature graphs for each modality, aligns them with graph attention and cross-attention, and reports location-level uncertainty.

## Key points

- Handles spatial ATAC-RNA and RNA-protein examples.
- Uses contrastive learning and modality-specific reconstruction.
- Includes graph sampling for scalability.
- Designed to work on large assays such as Visium HD and Xenium Prime.

## Project relevance

- Useful for brain atlas or cancer spatial multiomics where modality count and resolution vary.
- Location-level uncertainty is important for ambiguous tissue boundaries, damaged areas, and mixed-cell regions.
- Provides a candidate integration layer upstream of motif mining or phenotype modeling.

## Caveats

- Needs independent validation beyond the initial preprint.
- Reconstruction loss is a proxy for information preservation, not a proof.

## Related pages

- [[spatial-ai-for-cancer]]
- [[single-cell-foundation-models]]
- [[vital-digital-cell]]
