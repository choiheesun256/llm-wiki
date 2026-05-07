---
title: GEARS
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# GEARS

## Summary

`GEARS` is a knowledge-graph-informed model for predicting outcomes of novel single- and multi-gene perturbations from Perturb-seq data.

## Key points

- Strong focus on unseen genes and unseen combinations.
- Uses prior biological structure to improve generalization.
- Especially relevant for multigene perturbation extrapolation.

## Why it matters for annForce

- One of the strongest recent baselines for combinatorial perturbation prediction.
- annForce offers a different inductive bias: additive force superposition rather than graph-informed transcriptomic decoding.
- Good comparator when testing synergy, antagonism, and unseen-combination performance.

## Limitations

- Not primarily a continuous-time dynamics model.
- Gains depend partly on the quality of the underlying prior graph.

## Related pages

- [[annForce]]
- [[CPA]]
- [[annForce-related-methods]]
