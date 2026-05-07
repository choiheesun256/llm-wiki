---
title: "Pan-cancer virtual spatial transcriptomics from routine histology with Phoenix"
authors: "Manuel Tran, Rushin H. Gindra, et al."
year: 2026
doi: "10.64898/2026.04.25.720812"
url: "https://github.com/peng-lab/phoenix"
category: "spatial-ai"
notion_source: "https://www.notion.so/358302d9c5988142ab4cf56f5b42da41"
source_collection: "notion-review-2026-05-07"
tags: [histology, virtual-spatial-transcriptomics, xenium, treatment-response, cancer]
---

# Pan-cancer virtual spatial transcriptomics from routine histology with Phoenix

## Summary

Phoenix infers Xenium-like single-cell spatial gene expression from routine H&E. The practical idea is to use measured spatial transcriptomics as an anchor, then extend spatial molecular hypotheses to large retrospective pathology archives.

## Key points

- Trained on The Nest: 79 Xenium slides, 924 cores, 16 organ systems, 7 gene panels, and 22.2M image-expression pairs.
- Reports zero-shot improvements over histology-to-expression baselines in external cohorts.
- Builds a TCGA-scale virtual spatial atlas and reports virtual pseudobulk concordance with TCGA RNA-seq.
- Defines spatial ecotypes such as immune dysfunction, immune competence, and stromal remodeling.
- Identifies spatial co-occurrence features as treatment-response biomarkers, for example activated CD8 T cells near resident fibroblasts.

## Project relevance

- Strong reference for H&E-first cohorts where spatial transcriptomics is only available for a subset.
- Encourages modeling spatial features beyond cell abundance: neighbourhood, niche, co-occurrence, and location.
- Useful for lung or solid-tumour treatment-response projects with archived slides.

## Caveats

- bioRxiv preprint at the time of Notion review.
- Output is inferred expression, not a substitute for measured spatial transcriptomics.
- Xenium panel dependence and panel generalization need careful validation.

## Related pages

- [[spatial-ai-for-cancer]]
- [[bilous-2026-xenium-split-spillover]]
- [[zhang-2026-non-invasive-profiling-of-the-tumour]]
