---
title: CellRank
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CellRank

## Summary

`CellRank` is a probabilistic framework for fate mapping that combines directional information such as RNA velocity with Markov-state modeling.

## Key points

- Estimates initial, intermediate, and terminal states.
- Computes fate probabilities instead of only pseudotime.
- CellRank 2 expands this to multiview data and experimental time.

## Why it matters for annForce

- annForce is partly a fate-aware dynamics model, so CellRank is a key conceptual benchmark.
- CellRank focuses on transition probabilities on a graph; annForce focuses on learned continuous vector fields.
- Both are relevant when evaluation is about lineage bias and fate outcomes rather than only reconstruction loss.

## Limitations

- Requires meaningful directional priors or transition kernels.
- Fate mapping is not the same thing as perturbation-conditioned dynamics.

## Related pages

- [[annForce]]
- [[cell-state-dynamics-and-fate-mapping]]
- [[annForce-related-methods]]
