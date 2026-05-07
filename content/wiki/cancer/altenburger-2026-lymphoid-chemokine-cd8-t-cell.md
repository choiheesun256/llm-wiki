---
title: "Lymphoid chemokine limits CD8+ T cell priming time to preserve effector function"
authors: "Lukas M. Altenburger, Daniela Claudino Carvoeiro et al."
year: 2026
doi: "10.1126/science.adq2080"
source: "altenburger-2026-lymphoid-chemokine-cd8-t-cell.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/altenburger-2026-lymphoid-chemokine-cd8-t-cell.pdf"
pdf_filename: "altenburger-2026-lymphoid-chemokine-cd8-t-cell.pdf"
source_collection: "notion-handoff-2026-05"
tags: [t-cell, exhaustion, chemokine, immunotherapy, dock2, car-t]
---

## Summary

Defines a chemokine "off-switch" where lymph node stromal CCR7 ligands (CCL19/CCL21) actively drive activated CD8+ T cell detachment from DCs via DOCK2 relocalization. Non-detached T cells acquire a dysfunctional phenotype (PD-1/LAG-3/CD200 high, GzmB low) with impaired cytotoxicity and memory recall. In chronic LCMV, stromal CCL19/CCL21 loss prolongs T-DC contact and phenocopies this dysfunction. Implies that shorter TCR exposure during adoptive T cell expansion protocols may improve effector quality and longevity.

## Key Contributions

- CCR7 ligand-driven DC detachment as an active "off-switch" for T cell priming
- DOCK2 relocalization as the molecular effector of detachment (76% of events)
- Non-detached T cells: checkpoint-high, cytotoxicity-low, memory-impaired phenotype
- Chronic infection phenocopies prolonged engagement via stromal chemokine loss
- Translational implication: shorter TCR stimulation → better CAR-T/adoptive transfer outcomes

## Methodology and Architecture

OT-I/Nur77GFP intravital imaging, DOCK2-GFP microfluidic chamber, bulk RNA-seq + quantitative proteomics (6,578 proteins), LCMV-OVA / Lm-OVA in vivo cytotoxicity in Prf1-/- hosts, chronic LCMV cl.13 model.

## Results

| Metric | Detached (CD) | Non-Detached (ND) |
|--------|--------------|-------------------|
| DC contact time | 17 min | 49 min |
| Transwell detachment | 87% | 32% |
| Bacterial control | baseline | ~10x worse |
| PD-1/LAG-3/CD200 | low | high |
| GzmA/B | high | low |

## Related Papers

- [[cancer/savage-2026-t-cell-state-tf-cooperative]]
