---
title: "Non-invasive profiling of the tumour microenvironment with spatial ecotypes"
authors: "Zhang et al."
year: 2026
doi: "10.1038/s41586-026-10452-4"
source: "zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes.md"
category: "spatial-transcriptomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes.pdf"
pdf_filename: "zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes.pdf"
source_collection: "batch-2026-05"
tags: [spatial-transcriptomics, TME, spatial-ecotypes, cfDNA, liquid-biopsy, pan-cancer, immunotherapy, NMF]
---

# Non-Invasive TME Spatial Ecotype Profiling via cfDNA

## Summary
This Nature (2026) study integrates over 10 million single-cell and spot-level spatial transcriptomes from 10 cancer types to define nine spatially constrained multicellular ecosystems, termed Spatial Ecotypes (SEs), in the tumour microenvironment. Each SE has distinct biology, geographical features within tumours, and clinical associations including links to immunotherapy response. Crucially, SEs are recoverable non-invasively from plasma cell-free DNA (cfDNA) methylation profiling via deep learning, demonstrated in a melanoma immunotherapy cohort.

## Key points
- Nine pan-cancer SEs identified using Spatial EcoTyper: data fusion + statistical learning + deep learning framework
- SEs are highly conserved across 10 malignancies and six ST platforms (Visium, Xenium, MERSCOPE, legacy ST, Visium HD)
- CytoSPACE used to reconstruct single-cell resolution ST by mapping scRNA-seq profiles onto ST slides
- Non-negative matrix factorization (NMF) variant used to define SE membership
- cfDNA whole-genome bisulfite sequencing + deep learning recovers SE levels non-invasively
- In 78 pre-treatment melanoma plasma samples, SE levels predict ICI (immune checkpoint inhibitor) response and survival
- Spatial transcriptome-wide analysis confirms TME cell states vary by geographic location (tumour core vs periphery)

## Project relevance
- Non-invasive cfDNA-based TME monitoring is directly relevant to drug repurposing and therapy response prediction
- SE-level associations with ICI response provide potential predictive biomarkers applicable to drug response modeling
- Spatial EcoTyper provides a methodological template for multi-cancer spatial data integration

## Caveats
- cfDNA SE recovery validated only in melanoma; generalizability to other cancer types requires further study
- SE discovery limited to 10 cancer types; rare cancers not represented
- Platform batch effects in ST data may not be fully eliminated despite harmonization

## Related pages
- [[tumor-microenvironment]]
- [[spatial-transcriptomics]]
- [[liquid-biopsy]]
- [[immunotherapy-response]]
