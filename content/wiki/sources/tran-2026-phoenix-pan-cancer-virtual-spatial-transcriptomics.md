---
title: "Pan-cancer virtual spatial transcriptomics from routine histology with Phoenix"
authors: "Tran et al."
year: 2026
doi: "10.64898/2026.04.25.720812"
source: "tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics.md"
category: "AI-modeling"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics.pdf"
pdf_filename: "tran-2026-phoenix-pan-cancer-virtual-spatial-transcriptomics.pdf"
source_collection: "batch-2026-05"
tags: [virtual-ST, spatial-transcriptomics, flow-matching, generative-AI, histology, H&E, pan-cancer, Phoenix]
---

# Phoenix: Virtual Spatial Transcriptomics (Tran 2026)

## Summary

Phoenix is a generative AI model that infers single-cell resolution spatial transcriptomics from routine H&E histology images. Built on a latent flow matching architecture, it was trained on 22.2M cell-image and cell-expression pairs spanning 16 organ systems and 7 Xenium gene panels. Validated across 10,000+ patients, it achieves 35–173% improvement in Spearman correlation over prior state-of-the-art methods and can be applied zero-shot to new tissues and disease contexts without retraining.

## Key points

- Latent flow matching generative model architecture.
- Training data: 22.2M cell-image & cell-expression pairs from 16 organ systems, 7 Xenium gene panels; trained on JURECA supercomputer (10,000+ GPU hours).
- Validation cohorts: 763 head/neck, 84 breast, 157 ovarian cancer patients; 802 sarcoma tissue microarray cores; mouse pancreatic cancer model.
- 35–173% improvement in Spearman correlation vs SOTA baselines.
- Zero-shot transfer to new cohorts and tissue types without retraining.
- Identifies 3 novel spatial biomarkers and enables in silico treatment response analysis (platinum, trastuzumab).
- Cross-species transfer demonstrated in mouse pancreatic cancer.

## Project relevance

- Directly relevant for drug repurposing projects that rely on large retrospective pathology archives where measured spatial transcriptomics is unavailable.
- Flow matching generative approach is a strong architectural reference for annForce or similar perturbation prediction contexts.
- Zero-shot capability is important for generalizability across cancer types and species.

## Caveats

- bioRxiv preprint; not yet peer-reviewed.
- Output is inferred expression constrained to Xenium gene panels, not full-transcriptome spatial data.
- Quality of inference is dependent on H&E image quality.

## Related pages

- [[AI-model]]
- [[spatial-transcriptomics]]
- [[generative-AI]]
