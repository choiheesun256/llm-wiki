---
title: "CIPHER: differentiable codebook design for compressed spatial transcriptomics"
authors: "Hemminger et al."
year: 2026
doi: "10.64898/2026.01.08.698503"
category: "spatial-transcriptomics"
notion_source: "https://www.notion.so/350302d9c59881fdbb95da3e61a3dc3b"
source_collection: "notion-review-2026-05-07"
tags: [merfish, codebook, spatial-transcriptomics, experimental-design, deep-learning]
---

# CIPHER

## Summary

CIPHER treats spatial transcriptomics codebook design as differentiable compression. Instead of selecting marker genes only by downstream accuracy, it co-optimizes cell-type decoding and experimental constraints such as brightness, dynamic range, and probe feasibility.

## Key points

- The gene-to-channel encoding matrix is learned jointly with a decoder.
- Loss combines cell-type classification and experimental inconvenience penalties.
- Tested on mouse brain, developing brain, and lymph-node references.

## Project relevance

- Useful when designing MERFISH or seqFISH panels from an existing scRNA-seq reference.
- Makes the experimental design step part of the computational model rather than a fixed preprocessing choice.
- Relevant to human brain atlas and spatial cancer pilot studies where channel budget is limiting.

## Caveats

- Real probe design constraints such as Tm, GC content, and off-targets are simplified.
- Final panel selection still needs wet-lab feasibility checks.

## Related pages

- [[spatial-ai-for-cancer]]
- [[chang-2026-scigma-spatial-multiomics]]
- [[an-2026-spatialquery-multicellular-motifs]]
