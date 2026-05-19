---
title: "Proteogenomics of clear cell renal cell carcinoma response to tyrosine kinase inhibitor"
authors: "Zhang et al."
year: 2023
doi: "10.1038/s41467-023-39981-6"
source: "zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor.md"
category: "proteogenomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor.pdf"
pdf_filename: "zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor.pdf"
source_collection: "batch-2026-05"
tags: [proteogenomics, ccRCC, kidney-cancer, TKI, sunitinib, mTOR, VHL, drug-response, multi-omics-classifier]
---

# ccRCC TKI Response Proteogenomics (Nature Communications 2023)

## Summary
Multi-omics profiling (WES, RNA-seq, proteomics, phosphoproteomics) of 115 Chinese ccRCC patients treated with sunitinib, identifying molecular determinants of differential TKI response. Chr 7q gain-driven mTOR signaling activation associates with poor outcomes, while aristolochic acid (AA) mutational signature combined with VHL mutation correlates with better prognosis via enhanced glycolysis. A multi-omics classifier achieves ROC-AUC of 0.98.

## Key points
- 115 ccRCC patients (27 responders CR+PR; 88 non-responders SD+PD by RECIST)
- Label-free proteomics: 9,641 proteins; 37,055 phosphosites
- Chr 7q gain → LATMOR4/MDH2/CALU upregulation → mTOR activation → sunitinib resistance
- AA mutational signature (SBS22) + VHL mutation → enhanced glycolysis → sunitinib sensitivity
- mTOR signaling confirmed as central resistance mechanism at protein/phosphoprotein level
- Multi-omics random forest classifier: ROC-AUC 0.98; validated in independent cohort of 37
- Prognostic protein markers highly dependent on whether patient received sunitinib (270 vs 630 proteins, only 19 shared)

## Project relevance
- Multi-omics drug response classifier framework directly applicable to drug repurposing models
- mTOR as a targetable resistance mechanism; relevant for network-based drug target identification
- Demonstrates importance of treatment context when defining prognostic biomarkers
- Chinese patient cohort highlights population-specific molecular features

## Caveats
- Small responder group (n=27); limited statistical power
- Retrospective study design
- Chinese cohort primarily; generalizability to Western populations requires caution
- Functional validation limited to the 7q gain-mTOR mechanism

## Related pages
- [[proteogenomics]]
- [[drug-response-prediction]]
- [[mTOR-signaling]]
- [[kidney-cancer]]
- [[drug-repurposing]]
