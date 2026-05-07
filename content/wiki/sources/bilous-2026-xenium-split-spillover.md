---
title: "Resolving sensitivity, specificity and signal contamination in Xenium spatial transcriptomics"
authors: "Mariia Bilous, Daria Buszta, Jonathan Bac, Senbai Kang, et al."
year: 2026
doi: "10.1038/s41592-026-03089-8"
category: "spatial-transcriptomics"
notion_source: "https://www.notion.so/358302d9c598812693b2cf559df729e6"
source_collection: "notion-review-2026-05-07"
tags: [xenium, spillover, segmentation, spatial-transcriptomics, tme, qc]
---

# Resolving sensitivity, specificity and signal contamination in Xenium spatial transcriptomics

## Summary

This Nature Methods paper shows that transcript spillover in Xenium can distort tumour microenvironment interpretation. SPLIT uses deconvolution weights to separate primary and contaminating expression components, improving cell-type purity and tumour-proximal T-cell exhaustion signal.

## Key points

- Evaluates 41 FFPE breast and lung tumour sections from 27 donors with matched snRNA-seq and IHC.
- Shows that 5K Prime broadens gene coverage but can have lower sensitivity and many low-count cells.
- Uses RCTD secondary weights to quantify neighbourhood-associated contamination.
- Shows malignant-cell transcripts can contaminate adjacent immune cells.
- SPLIT correction clarifies exhaustion markers such as HAVCR2, CTLA4, PDCD1, LAG3, and CXCL13 in tumour-proximal T cells.

## Project relevance

- Spatial biomarkers should be assessed on raw and corrected counts.
- Tumour-immune proximity, ligand-receptor analysis, and cell-type-specific target expression are spillover-sensitive.
- Virtual spatial transcriptomics models can learn assay artifacts if the spatial ground truth is not corrected.

## Caveats

- SPLIT depends on reference quality and may mis-decompose states absent from the reference.
- Low contamination can reflect low detection power rather than biological purity.

## Related pages

- [[spatial-ai-for-cancer]]
- [[tran-2026-phoenix-virtual-spatial-transcriptomics]]
- [[nrl-target-discovery]]
