---
title: annForce literature scan
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# annForce literature scan

## Summary

This source page distills the 30-paper literature scan collected in [[annForce related literature scan - IF5+ papers]].

The scan suggests that annForce should be read as a hybrid of:

- compositional perturbation modeling
- transport-based state transition modeling
- continuous cellular dynamics and fate mapping
- Perturb-seq-driven evaluation

## Key points

- The strongest direct comparators are [[CPA]], [[GEARS]], [[CellOT]], [[GPerturb]], and [[scGen]].
- The strongest supporting dynamics references are [[CellRank]], RNA velocity, scVelo, and Waddington-OT.
- The strongest data and evaluation anchors are Perturb-seq, CROP-seq, direct-capture Perturb-seq, genome-scale Perturb-seq, and LARRY.
- Recent literature is pushing harder on true generalization rather than in-distribution reconstruction.

## Evidence

- `Benchmarking algorithms for generalizable single-cell perturbation response prediction` makes generalization the central evaluation problem.
- `Predicting cellular responses to complex perturbations in high-throughput screens` and `Predicting transcriptional outcomes of novel multigene perturbations with GEARS` show that additive or structured composition remains a central design pattern.
- `Learning single-cell perturbation responses using neural optimal transport` and `Optimal-transport analysis of single-cell gene expression identifies developmental trajectories in reprogramming` show the value of transport-based views.
- `Fundamental limits on dynamic inference from single-cell snapshots` is a standing warning against over-claiming mechanistic dynamics from weak supervision.

## Limitations

- The scan prioritizes IF/JIF-filtered peer-reviewed papers, so some influential recent preprints are intentionally excluded.
- Several recent benchmarked methods have not yet appeared in high-IF journals and are therefore missing here.

## Related pages

- [[annForce]]
- [[what papers are related to annForce]]
- [[annForce-related-methods]]
