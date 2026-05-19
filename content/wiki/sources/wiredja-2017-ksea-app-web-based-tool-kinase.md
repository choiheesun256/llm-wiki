---
title: "The KSEA App: a web-based tool for kinase activity inference from quantitative phosphoproteomics"
authors: "Wiredja et al."
year: 2017
doi: "10.1093/bioinformatics/btx415"
category: "bioinformatics-tool"
source: "wiredja-2017-ksea-app-web-based-tool-kinase"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/wiredja-2017-ksea-app-web-based-tool-kinase.pdf"
pdf_filename: "wiredja-2017-ksea-app-web-based-tool-kinase.pdf"
source_collection: "batch-2026-05"
tags: [KSEA, kinase-activity, phosphoproteomics, web-tool, kinase-substrate, PhosphoSitePlus, NetworKIN, Bioinformatics]
---

## Summary

Bioinformatics 2017. Introduces the KSEA (Kinase-Substrate Enrichment Analysis) App, a web-based tool for inferring kinase activity from quantitative phosphoproteomics data. Uses PhosphoSitePlus and NetworKIN kinase-substrate annotations, applying Z-score transformation of substrate phosphorylation fold changes to quantify per-kinase activity. Validated using MEK inhibition (selumetinib) in A549 LUAD cells. Available at casecpb.shinyapps.io/ksea/ and as R package KSEAapp. Case Western Reserve University.

## Key points

- KSEA Z-score: compares mean fold change of a kinase's substrate set against the background phosphoproteome distribution
- PhosphoSitePlus (experimentally validated) + NetworKIN (predicted) combined for broader kinase coverage
- Selumetinib validation confirms sensitivity of KSEA for detecting MEK/ERK pathway suppression
- Web app (Shiny) makes the tool accessible to non-bioinformaticians
- R package KSEAapp enables pipeline integration and automation

## Project relevance

Directly applicable whenever phosphoproteomics data are available. In drug repurposing or cancer signaling contexts, KSEA converts a phosphopeptide list into an interpretable kinase activity landscape. Useful for identifying which kinases are perturbed by a drug or in a disease condition — complements network medicine approaches.

## Caveats

- Kinase-substrate database incompleteness creates well-studied kinase bias
- Indirect substrate phosphorylation may not faithfully reflect direct kinase activity
- Simple Z-score statistics do not account for complex kinase network crosstalk
- Low statistical power with small sample sizes
- Results may shift with database version updates

## Related pages

- [[KSEA]]
- [[phosphoproteomics]]
- [[kinase-activity]]
- [[PhosphoSitePlus]]
- [[NetworKIN]]
- [[kinase-substrate]]
