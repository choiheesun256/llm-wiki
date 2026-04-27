---
title: Perturbation Modeling
type: concept
status: active
source_files:
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Perturbation Modeling

Track methods that predict or explain cellular response to perturbations.

## Main design patterns

- latent translation of control to perturbed cells
- additive composition of perturbation embeddings
- transport between control and perturbed distributions
- explicit cell-state dynamics with perturbation conditioning
- interpretable sparse perturbation effects with uncertainty

## Representative methods

- [[scGen]]
- [[CPA]]
- [[CellOT]]
- [[GEARS]]
- [[GPerturb]]
- [[annForce]]

## Current shift in the literature

The field has moved from simple in-distribution prediction toward:

- unseen cell types
- unseen perturbations
- unseen combinations
- heterogeneous response distributions
- fate-aware or trajectory-aware evaluation

## Related pages

- [[single-cell-perturbation-prediction]]
- [[annForce-related-methods]]
