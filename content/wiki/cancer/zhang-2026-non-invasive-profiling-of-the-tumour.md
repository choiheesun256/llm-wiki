---
title: "Non-invasive profiling of the tumour microenvironment with spatial ecotypes"
authors: "Wubing Zhang, Erin L. Brown, Abul Usmani, et al."
year: 2026
doi: "10.1038/s41586-026-10452-4"
source: "zhang-2026-non-invasive-profiling-of-the-tumour.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-non-invasive-profiling-of-the-tumour.pdf"
pdf_filename: "zhang-2026-non-invasive-profiling-of-the-tumour.pdf"
source_collection: "notion-handoff-2026-05"
tags: [spatial-transcriptomics, tme, immunotherapy, cfdna, methylation, digital-cytometry]
---

## Summary

Nature paper defining nine conserved tumour microenvironment spatial ecotypes (SE1-SE9) from pan-cancer spatial transcriptomics and single-cell data using Spatial EcoTyper, then recovering these ecotypes non-invasively from plasma cfDNA methylation with Liquid EcoTyper. The main translational result is that favourable inflammatory ecotypes SE7/SE8 and resistant stromal ecotype SE4 can be measured in pretreatment melanoma plasma and predict ICI benefit, PFS, and OS.

## Key Contributions

- Introduces a spatially informed ecotype vocabulary for TME organization beyond cell fractions alone
- Connects solid-tumour spatial transcriptomics, bulk RNA-seq deconvolution, and plasma cfDNA methylation in one framework
- Identifies SE7/SE8 as favourable inflammatory ecotypes and SE4/SE5 as adverse stromal or immunosuppressive ecotypes
- Shows cfDNA methylation can recover spatial TME state and outperform standard single-axis biomarkers in some ICI analyses

## Methodology and Architecture

Discovery layer: 132 tumour ST specimens across 10 cancer types and 6 platforms plus scRNA-seq atlases from 144 tumours. CytoSPACE reconstructs cell-type-resolved ST where needed. Spatial EcoTyper builds a joint embedding of spatial neighbourhood gene programs across cell types and samples, then derives nine ecotypes with NMF/archetypal analysis. A pseudo-bulk-trained deconvolution model scales these ecotypes to bulk RNA-seq and bulk ST. Liquid EcoTyper then learns ecotype-specific CpG methylation signatures from simulated melanoma cfDNA and applies them to tumour and plasma EM-seq profiles.

## Results

| Result | Detail |
|--------|--------|
| Discovery | 9 SEs from 41,066 spatial neighbourhoods; robust across MERSCOPE, Xenium, Visium, Visium HD, and scRNA-seq recovery |
| Survival | 6/9 evaluable SEs associated with OS in 7,076 TCGA tumours |
| ICI tissue cohorts | In 1,249 pretreatment tumours, SE8 and SE7 tracked benefit and SE4 tracked resistance |
| Plasma validation | In 78 metastatic melanoma pretreatment cfDNA samples, high SE7/SE8 predicted durable benefit and HR < 0.38 for PFS/OS; high SE4 predicted resistance with HR 2.92 for PFS and 2.29 for OS |
| Biomarker positioning | Liquid-vs-tissue ICI response associations were highly concordant and SE signals added information beyond ctDNA, TMB, and CD274 |

## Related Papers

- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]
- [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]]
