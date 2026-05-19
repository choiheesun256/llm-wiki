---
title: "Analysis of a pan-cancer panel reveals the amino acid metabolism-related gene MTHFD1 as a potential prognostic and immunotherapeutic biomarker"
authors: "Gong et al."
year: 2025
doi: "10.3892/etm.2025.12892"
source: "gong-2025-analysis-pan-cancer-panel-reveals-amino.md"
category: "cancer-biology"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/gong-2025-analysis-pan-cancer-panel-reveals-amino.pdf"
pdf_filename: "gong-2025-analysis-pan-cancer-panel-reveals-amino.pdf"
source_collection: "batch-2026-05"
tags: [MTHFD1, amino-acid-metabolism, pan-cancer, biomarker, TCGA, CPTAC, immune-infiltration, prognosis]
---

## Summary

Pan-cancer analysis of MTHFD1 (methylenetetrahydrofolate dehydrogenase 1), an amino acid metabolism gene, across 33 cancer types using TCGA, CPTAC, CCLE, and GTEx data. MTHFD1 is upregulated in 12 cancers and downregulated in 6. It associates with poor prognosis in LUAD and kidney chromophobe, but with better prognosis in KIRC. MTHFD1 negatively correlates with immune cell infiltration in 16 tumor types. In vitro knockdown in A549 (LUAD) and overexpression in 786-O (KIRC) both reduced malignant phenotypes. Published in Experimental and Therapeutic Medicine 2025.

## Key points

- MTHFD1 expression is dysregulated across many cancer types, with context-dependent prognostic directionality
- Negative correlation with immune infiltration across 16 tumor types, suggesting a role in shaping the tumor immune microenvironment
- Multi-database integration (TCGA, CPTAC, GTEx, CCLE) enables robust pan-cancer biomarker evaluation
- ESTIMATE, CIBERSORT, and TIDE algorithms used in combination for immune deconvolution
- In vitro functional validation confirms MTHFD1 involvement in malignant phenotypes in both LUAD and KIRC

## Project relevance

Relevant to drug repurposing: MTHFD1 is a metabolic enzyme and potential druggable target. The pan-cancer immune correlation data could inform network medicine approaches for identifying immunotherapy-sensitizing targets. The multi-omics integration pipeline (TCGA + proteomics + cell line data) is methodologically transferable to target prioritization workflows.

## Caveats

- Mechanism behind opposite prognostic directions across cancer types is unexplained
- Immune infiltration estimates rely on bulk RNA-seq deconvolution algorithms, not single-cell resolution
- No in vivo validation; functional experiments limited to two cell lines
- Cancer-type sample sizes are uneven, potentially limiting statistical confidence in some analyses

## Related pages

- [[drug-repurposing]]
- [[pan-cancer-analysis]]
- [[tumor-microenvironment]]
- [[immune-infiltration]]
