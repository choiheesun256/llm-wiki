---
title: "T cell state TF cooperative engineering: KLF2 x RUNX2 memory-like CAR-T design"
authors: "Savage et al."
year: 2026
doi: "10.64898/2026.04.20.718569"
source: "savage-2026-t-cell-state-tf-cooperative.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/savage-2026-t-cell-state-tf-cooperative.pdf"
pdf_filename: "savage-2026-t-cell-state-tf-cooperative.pdf"
source_collection: "notion-handoff-2026-05"
tags: [car-t, tf-engineering, exhaustion, memory, alphafold3, perturb-seq]
---

## Summary

Identifies KLF2 as a key memory-like program regulator in CD8 T cells via pooled MORF overexpression screens and perturb-SHARE-seq single-cell multiome profiling. Discovers a RUNX:KLF composite motif grammar enriched at critical loci (TOX). Uses AlphaFold3 to hypothesize RUNX2-KLF2 TF cooperativity, then engineers a tethered construct that reduces precursor-exhaustion signatures more precisely than individual TFs. KLF2/memory signature matches clinical CAR-T response data.

## Key Contributions

- KLF2 identified as strongest TOX-modulating TF for memory-like program via pooled screen
- RUNX:KLF composite motif at key loci has effect far exceeding single motif perturbation
- AlphaFold3-guided TF cooperativity hypothesis validated with engineered constructs
- Tethered RUNX2-KLF2 outperforms monomer sum in exhaustion signature reduction
- Clinical relevance: KLF2/memory signature correlates with CAR-T treatment response

## Methodology and Architecture

Pooled MORF TF/isoform overexpression → TOX sorting → perturb-SHARE-seq (single-cell RNA+ATAC) → motif grammar inference → CRISPRi enhancer tiling → AlphaFold3 structure prediction → engineered mutant + tethered TF constructs.

## Results

- KLF2 overexpression increases memory-like features, reduces exhaustion program
- Composite RUNX:KLF motif perturbation >> single motif perturbation at TOX locus
- Tethered RUNX2-KLF2 construct most precisely reduces precursor-exhaustion signature
- Memory program signature matches CAR-T clinical responder profiles

## Related Papers

- [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]]
