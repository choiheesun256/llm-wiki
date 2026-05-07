---
title: "Mapping transcription factor functions in astrocytes using in vivo gain-of-function Perturb-seq"
authors: "Zhang L., Ma Q., Kong X., et al."
year: 2026
doi: "10.1126/science.adw2156"
category: "single-cell"
notion_source: "https://www.notion.so/351302d9c59881efb2f8e47fe75fdf2e"
source_collection: "notion-review-2026-05-07"
tags: [perturb-seq, astrocyte, transcription-factor, disease-context, validation]
---

# iGOF-Perturb-seq

## Summary

This Science paper maps transcription-factor function in mouse astrocytes with in vivo gain-of-function Perturb-seq. For virtual-cell projects, the central lesson is workflow architecture: perturbation atlas, disease-context matching, and downstream rescue validation belong in one chain.

## Key points

- Uses AAV-PHP.eB to overexpress about 1,000 TF ORFs in mouse astrocytes.
- Main atlas profiles 955 TFs and 121,807 MOI=1 astrocytes.
- Compares perturbation signatures with disease snRNA-seq atlases to prioritize disease-relevant TFs.
- Validates Ferd3l in neuroinflammation and 5XFAD contexts.

## Project relevance

- Treats model prediction as a hypothesis that must pass perturbation and disease-context validation.
- Encourages pathway or state overlap rather than only raw DEG overlap.
- Transferable metadata fields include guide/barcode, target, MOI, dose/time, assay, batch, cell type, and disease context.

## Caveats

- Astrocyte-specific gain-of-function biology is not directly transferable to CRISPRi in liver, immune, or cancer cells.
- The generalizable part is the validation architecture, not the specific TF biology.

## Related pages

- [[vital-digital-cell]]
- [[single-cell-perturbation-prediction]]
- [[perturbation-modeling]]
