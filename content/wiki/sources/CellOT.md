---
title: CellOT
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CellOT

## Summary

`CellOT` models perturbation response as an optimal transport map between control and perturbed cell distributions.

## Key points

- Learns mappings from unpaired control and treated populations.
- Preserves heterogeneous subpopulation structure better than mean-shift baselines.
- Framed around transport rather than embedding arithmetic.

## Why it matters for annForce

- Both methods model transitions between cellular state distributions.
- CellOT is distribution-transport first; annForce is vector-field and dynamics first.
- Useful comparison for whether explicit trajectories outperform direct control-to-perturbed transport.

## Limitations

- Time is implicit unless additional temporal structure is introduced.
- Transport maps are powerful descriptively but can still be weak mechanistically.

## Related pages

- [[annForce]]
- [[CellRank]]
- [[cell-state-dynamics-and-fate-mapping]]
