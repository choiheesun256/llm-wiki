---
title: annForce
type: project
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
updated: 2026-04-27
---

# annForce

## Summary

`annForce` is a research project around object-conditioned force dynamics for single-cell perturbation prediction.

Core idea:

- represent each perturbation as an additive force field
- combine perturbations by superposition rather than by learning every combination explicitly
- learn cell-state transitions with flow-matching-style training
- use the resulting dynamics for perturbation response prediction and fate-aware simulation

## Why this is interesting

The model tries to bridge several areas that are often handled separately:

- perturbation effect prediction
- combinatorial generalization
- continuous-time cell-state dynamics
- interpretable decomposition of perturbation effects

That makes it different from models that only:

- predict endpoint expression shifts
- learn black-box latent translations
- infer trajectories without perturbation conditioning

## Literature map

The current literature around annForce clusters into four groups:

1. [[single-cell-perturbation-prediction]]
2. [[cell-state-dynamics-and-fate-mapping]]
3. [[perturbation-modeling]]
4. [[single-cell-methods]]

The full curated paper set is in [[annForce literature scan]].

## Closest neighboring methods

- [[CPA]]: additive and compositional perturbation embeddings
- [[GEARS]]: strong combinatorial perturbation prediction baseline
- [[CellOT]]: transport-based control-to-perturbed mapping
- [[CellRank]]: probabilistic fate mapping over state transitions
- [[GPerturb]]: additive and interpretable perturbation effects with uncertainty
- [[scGen]]: landmark latent-space perturbation prediction model

## Key questions

- When does additive force superposition outperform latent translation models?
- Does an explicit vector-field view improve extrapolation to unseen combinations?
- How much temporal information is needed before a dynamics-based model is justified?
- Which parts of the learned force field are biologically interpretable versus predictive only?

## Reading order

- [[annForce literature scan]]
- [[what papers are related to annForce]]
- [[annForce-related-methods]]
- [[single-cell-perturbation-prediction]]
- [[cell-state-dynamics-and-fate-mapping]]

## Related pages

- [[overview]]
- [[annForce literature scan]]
- [[annForce-related-methods]]
- [[what papers are related to annForce]]
