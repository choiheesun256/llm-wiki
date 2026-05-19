---
title: "Proteogenomic characterization of ferroptosis regulators reveals therapeutic potential in glioblastoma"
authors: "Wang et al."
year: 2023
doi: "10.1186/s12885-023-10894-3"
category: "proteogenomics"
source: "wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals.pdf"
pdf_filename: "wang-2023-proteogenomic-characterization-ferroptosis-regulators-reveals.pdf"
source_collection: "batch-2026-05"
tags: [ferroptosis, GBM, glioblastoma, proteogenomics, CPTAC, HSPB1, ipatasertib, prognostic-signature]
---

# Proteogenomic characterization of ferroptosis regulators reveals therapeutic potential in glioblastoma

## Summary

A BMC Cancer (2023) study applying proteogenomic analysis to characterize ferroptosis regulators in glioblastoma (GBM) using CPTAC data (99 GBM tumors + 10 normal brain). The study identifies 142 differentially expressed ferroptosis-related proteins, maps mutation-specific alterations (ACSL4 down in EGFR-mutant; FADS2 up in IDH1-mutant), and constructs a 5-gene ferroptosis prognostic signature (HSPB1, GPX4, ACSL3, IL33, ELAVL1). HSPB1 phosphorylation is associated with poor overall survival, and the pan-AKT inhibitor ipatasertib suppresses HSPB1 phosphorylation to induce ferroptosis in GBM cells.

## Key points

- 142 ferroptosis regulators differentially expressed between GBM and normal brain tissue in CPTAC proteomics
- Mutation-context-specific ferroptosis alterations: ACSL4 downregulated in EGFR-mutant GBM; FADS2 upregulated in IDH1-mutant GBM
- 5-gene ferroptosis prognostic signature (HSPB1, GPX4, ACSL3, IL33, ELAVL1) built by Lasso-Cox regression; validated in TCGA GBM cohort
- HSPB1 phosphorylation level correlates with poor overall survival — positions HSPB1 as a phosphorylation-based prognostic biomarker
- Ipatasertib (pan-AKT inhibitor) reduces HSPB1 phosphorylation → increases lipid peroxidation → induces ferroptosis in GBM cell lines
- High-risk signature group associated with immunosuppressive tumor microenvironment

## Project relevance

Directly relevant to the drug repurposing project: ipatasertib is an existing clinical compound repurposed here via a ferroptosis induction mechanism (AKT → HSPB1 phosphorylation → ferroptosis resistance). The HSPB1 phosphorylation-to-outcome link demonstrates the value of phosphoproteomics for identifying actionable post-translational modifications beyond mutation status. The proteogenomic characterization pipeline (CPTAC data + mutation context + prognostic modeling) is transferable to other cancer types and pathway analyses.

## Caveats

- CPTAC GBM cohort is relatively small (99 tumors), limiting statistical power, especially for subgroup analyses by mutation status
- Drug validation (ipatasertib) is cell-line only; in vivo efficacy data and patient pharmacodynamic studies are absent
- External validation of the prognostic signature relies on TCGA RNA-seq (transcriptomic proxy for protein) rather than an independent proteomic cohort
- Mechanism linking AKT inhibition to HSPB1 phosphorylation reduction is inferred but not fully resolved at the kinase-substrate level
- CPTAC GBM samples are from surgical resection (primary); recurrent GBM molecular profiles not represented

## Related pages

- [[Ferroptosis]]
- [[Glioblastoma (GBM)]]
- [[CPTAC]]
- [[Proteogenomics]]
- [[HSPB1]]
- [[ipatasertib]]
- [[Drug repurposing]]
- [[Prognostic signature]]
