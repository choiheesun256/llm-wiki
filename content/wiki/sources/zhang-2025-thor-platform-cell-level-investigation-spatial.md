---
title: "Thor: a platform for cell-level investigation of spatial transcriptomics and histology"
authors: "Zhang et al."
year: 2025
doi: "10.1038/s41467-025-62593-1"
source: "zhang-2025-thor-platform-cell-level-investigation-spatial.md"
category: "bioinformatics-tool"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2025-thor-platform-cell-level-investigation-spatial.pdf"
pdf_filename: "zhang-2025-thor-platform-cell-level-investigation-spatial.pdf"
source_collection: "batch-2026-05"
tags: [spatial-transcriptomics, histology, single-cell, multimodal, Markov-diffusion, Visium, bioinformatics-tool]
---

# Thor: Cell-Level ST and Histology Integration Platform

## Summary
Thor is a comprehensive platform for cell-level analysis of spatial transcriptomics (ST) and histological images, published in Nature Communications (2025). It uses an anti-shrinking Markov graph diffusion method to infer single-cell spatial transcriptomes from spot-level ST data by jointly leveraging histological morphology and gene expression. The platform includes 10 modular analysis tools and a web-based interface (Mjolnir) for interactive gigapixel image exploration.

## Key points
- Anti-shrinking Markov diffusion infers in silico single-cell transcriptomes without requiring external scRNA-seq reference
- Workflow: cell segmentation from H&E → joint feature space (morphology + transcriptomics) → cell-cell graph → transition matrix → Markov diffusion
- 10 extensible modules: pathway enrichment, TF activity, tissue immune microenvironment, CNV, DEG, spatially expressed module detection
- Mjolnir web platform enables no-code interactive exploration of gigapixel images with genomic overlay
- Validated on ISH, MERFISH, Xenium, Stereo-seq, and Visium HD platforms
- Outperformed SOTA methods for cell-level ST prediction on Xenium ground truth data
- Applications: regenerative signatures in heart failure, breast cancer immune heterogeneity, fine layer resolution in mouse olfactory bulb, fibrotic heart tissue annotation

## Project relevance
- Approach to jointly analyze histology and transcriptomics is directly applicable to multimodal TME analysis in drug repurposing projects
- Reference-free cell-level inference is valuable when FFPE scRNA-seq reference quality is limited
- Mjolnir-style interactive visualization provides a model for communicating spatial biology findings

## Caveats
- Accuracy of in silico cell transcriptome depends on within-spot cellular heterogeneity
- FFPE tissues may compromise transcriptomic data quality and affect inference accuracy
- Scalability of Mjolnir web platform for very large cohorts is not demonstrated

## Related pages
- [[spatial-transcriptomics]]
- [[multimodal-learning]]
- [[tumor-microenvironment]]
