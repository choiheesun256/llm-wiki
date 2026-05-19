---
title: "iProPhos: A Web-Based Interactive Platform for Integrated Proteome and Phosphoproteome Analysis"
authors: "Zou et al."
year: 2024
doi: "10.1016/j.mcpro.2023.100693"
source: "zou-2024-iprophos-web-based-interactive-platform-integrated.md"
category: "bioinformatics-tool"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zou-2024-iprophos-web-based-interactive-platform-integrated.pdf"
pdf_filename: "zou-2024-iprophos-web-based-interactive-platform-integrated.pdf"
source_collection: "batch-2026-05"
tags: [iProPhos, CPTAC, proteomics, phosphoproteomics, web-platform, kinase-substrate, drug-target, interactive-visualization]
---

# iProPhos: Interactive Web Platform for CPTAC Proteome and Phosphoproteome Analysis

## Summary
iProPhos (MCP, 2024) is a user-friendly, code-free web server for integrated proteome and phosphoproteome analysis built on CPTAC data spanning 12 cancer types (1,444 tumour + 746 normal samples). It supports differential expression, patient survival analysis, clinical feature correlations, kinase-substrate enrichment, PPI network analysis, and mRNA-protein correlation. Users can also upload their own preprocessed data, making it broadly applicable beyond CPTAC cohorts. Freely accessible at http://longlab.zju.cn/iProPhos.

## Key points
- Built on R Shiny with HTML5/CSS/JavaScript frontend; outputs are interactive figures and downloadable PDF-compatible vector graphics
- Two main modules: Proteome Analysis (differential expression, survival, clinical features, functional enrichment, PPI, mRNA-protein correlation) and Phosphoproteome Analysis (phosphosite differential expression, kinase activity inference, proteome-phosphoproteome correlation)
- Data preprocessing: transcriptomics z-score normalization; proteomics/phosphoproteomics log2 TMT median centering; >50% missing filtered; KNN imputation
- Covers 12 CPTAC cancer types; clinical variables include age, gender, tumour stage, survival
- Demonstrated in two case studies: (1) candidate drug target identification; (2) upstream kinase discovery for site-specific phosphorylation
- Surpasses TCPA, CPPA, UALCAN, LinkedOmics in kinase-substrate correlation and user data upload capabilities

## Project relevance
- Direct tool for exploring drug target candidates in CPTAC proteomics/phosphoproteomics data for drug repurposing project
- Kinase-substrate enrichment analysis identifies upstream kinase activity changes — enables kinase-focused drug repurposing queries
- User data upload allows integration of project-specific multi-omics data for pan-cancer comparative analysis

## Caveats
- Limited to 12 CPTAC cancer types; rare cancers not covered
- Analysis based on preprocessed data; raw-level custom preprocessing not supported
- Web-based platform may have throughput limitations for large-scale batch analyses

## Related pages
- [[proteogenomics]]
- [[phosphoproteomics]]
- [[CPTAC]]
- [[kinase-substrate]]
- [[bioinformatics-tool]]
