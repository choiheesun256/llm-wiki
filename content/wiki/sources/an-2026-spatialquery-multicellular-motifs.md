---
title: "SpatialQuery: multicellular motif discovery in spatial omics"
authors: "Shaokun An, Mark Keller, Nils Gehlenborg, Martin Hemberg"
year: 2026
doi: "10.64898/2026.04.22.720136"
category: "spatial-transcriptomics"
notion_source: "https://www.notion.so/354302d9c598819e8e1de2904220f35f"
source_collection: "notion-review-2026-05-07"
tags: [spatial-omics, motifs, fp-growth, cell-neighbourhood, merfish]
---

# SpatialQuery

## Summary

SpatialQuery discovers recurrent multicellular motifs in spatial transcriptomics or spatial proteomics data, then connects motif occurrence to differential expression and gene covariation.

## Method

- Uses k-D trees to construct local neighbourhood cell-type motifs.
- Uses FP-Growth to mine frequent cell-type combinations.
- Applies hypergeometric testing to assess motif enrichment.
- Uses shifted Pearson covariation to distinguish motif-specific gene covariation from background.

## Project relevance

- Fits whole-brain MERFISH-scale analysis and tumour microenvironment motif discovery.
- Makes cell-neighbourhood features explicit rather than relying only on clusters or domains.
- Useful after spatial integration and QC, especially for disease-versus-control motif shifts.

## Related pages

- [[spatial-ai-for-cancer]]
- [[chang-2026-scigma-spatial-multiomics]]
- [[single-cell-methods]]
