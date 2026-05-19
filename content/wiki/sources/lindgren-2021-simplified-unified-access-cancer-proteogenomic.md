---
title: "Simplified and Unified Access to Cancer Proteogenomic Data"
authors: "Lindgren et al."
year: 2021
doi: "10.1021/acs.jproteome.0c00919"
source: "lindgren-2021-simplified-unified-access-cancer-proteogenomic.md"
category: "proteogenomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/lindgren-2021-simplified-unified-access-cancer-proteogenomic.pdf"
pdf_filename: "lindgren-2021-simplified-unified-access-cancer-proteogenomic.pdf"
source_collection: "batch-2026-05"
tags: [CPTAC, cptac-python, proteogenomics, data-access, Python, API, pan-cancer, software-tool]
---

# cptac Python Package for CPTAC Data Access

## Summary

Python package `cptac` providing unified API access to CPTAC proteogenomic data across 7 cancer types. Streams finalized data tables as pandas DataFrames with consistent formatting for genomic, transcriptomic, proteomic, phosphoproteomic, and clinical data. Includes utility functions for statistical tests and pathway analysis.

## Key points

- `pip install cptac` for instant access to CPTAC data
- 7 cancer types with consistent multi-omic formatting
- Multi-level indexing for protein isoforms and PTM sites
- Open source with tutorials for pan-cancer analysis

## Project relevance

- Direct programmatic access to CPTAC proteogenomics data
- Pan-cancer proteogenomic analysis tool
- Integration with drug repurposing and multi-omics projects

## Caveats

- Processed data only; raw data not included
- May lag behind latest CPTAC releases
- Python-centric; R users need interoperability layer

## Related pages

- [[CPTAC]]
- [[proteogenomics]]
- [[data-resource]]
