---
title: "PROTEUS: zero-shot protein flexibility from SimpleFold embeddings"
authors: "Luiz Felipe Piochi, Yasaman Karami, Hamed Khakzad"
year: 2026
doi: "10.64898/2026.04.27.721098"
category: "target-discovery"
notion_source: "https://www.notion.so/354302d9c59881feb373f4c3f4688221"
source_collection: "notion-review-2026-05-07"
tags: [protein-flexibility, simplefold, zero-shot, druggability, protac]
---

# PROTEUS

## Summary

PROTEUS reinterprets SimpleFold internal embedding movement as a zero-shot conformational plasticity score. The method estimates flexible residues without training on experimental dynamics data.

## Method

- Compares per-residue latent vectors at sequence-only and structure-converged steps.
- Uses the maximum Euclidean displacement as a flexibility score.
- Evaluates fold-switching, open-closed transitions, and buried phosphosite exposure.

## Project relevance

- Fast pre-filter for target protein plasticity before docking, binder design, or PROTAC design.
- Useful for identifying flexible interfaces, cryptic pockets, induced-fit regions, or regulatory hotspots.
- Complements AlphaFold/ProteinMPNN-style binder QC by adding a protein-side flexibility dimension.

## Caveats

- SimpleFold-specific; transferring to AlphaFold, ESMFold, or other structure models requires recalibration.
- Flexibility scores do not encode cellular context, ligand availability, or kinase activity.

## Related pages

- [[nrl-target-discovery]]
- [[chun-2026-antibody-cdr-fitness-mapping]]
- [[protein-language-models]]
