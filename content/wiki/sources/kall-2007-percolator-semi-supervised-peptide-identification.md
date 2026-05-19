---
title: "Semi-supervised learning for peptide identification from shotgun proteomics datasets"
authors: "Käll et al."
year: 2007
doi: "10.1038/NMETH1113"
source: "kall-2007-percolator-semi-supervised-peptide-identification.md"
category: "proteomics"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/lee-2024-oxidative-photocatalysis-membranes-triggers-non-canonical.pdf"
pdf_filename: "lee-2024-oxidative-photocatalysis-membranes-triggers-non-canonical.pdf"
source_collection: "batch-2026-05"
tags: [Percolator, proteomics, peptide-identification, machine-learning, SVM, mass-spectrometry, FDR]
---

# Percolator: Semi-supervised Peptide Identification

> **Note**: PDF filename is "lee-2024-oxidative-photocatalysis" but actual content is Käll et al. 2007 Percolator paper.

## Summary

Percolator is a semi-supervised machine learning algorithm (SVM-based) that improves peptide identification confidence from shotgun proteomics. Uses decoy database hits as negative training examples, eliminating manual curation. Post-processes database search results (SEQUEST), achieving 17-77% more peptide identifications than existing methods while maintaining rigorous FDR control via q-values.

## Key points

- SVM-based semi-supervised learning for peptide identification
- 17-77% improvement over PeptideProphet/DTASelect
- Automated: no manual training set required
- Foundation tool still widely used in proteomics

## Project relevance

- Core proteomics data analysis methodology
- Machine learning applied to biological data
- FDR control with target-decoy strategy

## Caveats

- Published 2007; many newer tools available
- Originally SEQUEST-specific (later extended)
- Manual feature engineering (20 features)
- SVM model; deep learning alternatives now exist

## Related pages

- [[proteomics]]
- [[mass-spectrometry]]
- [[machine-learning]]
