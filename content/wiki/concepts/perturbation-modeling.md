---
title: Perturbation Modeling
type: concept
status: active
source_files:
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-05-07
---

# Perturbation Modeling

Track methods that predict or explain cellular response to perturbations.

## Main design patterns

- latent translation of control to perturbed cells
- additive composition of perturbation embeddings
- transport between control and perturbed distributions
- explicit cell-state dynamics with perturbation conditioning
- interpretable sparse perturbation effects with uncertainty
- perturbation tokens for compounds, genes, dose, and time
- knowledge-graph-conditioned perturbation embeddings
- disease-state transcriptomic reversal

## Representative methods

- [[scGen]]
- [[CPA]]
- [[CellOT]]
- [[GEARS]]
- [[GPerturb]]
- [[annForce]]
- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]]
- [[wenkel-tu-2026-txpert-knowledge-graphs]]
- [[xing-2026-gps-transcriptomic-reversal]]

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
- [[vital-digital-cell]]
