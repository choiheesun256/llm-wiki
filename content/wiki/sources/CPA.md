---
title: CPA
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# CPA

## Summary

`CPA` (Compositional Perturbation Autoencoder) predicts single-cell responses to drug and genetic perturbations by composing additive embeddings in latent space.

## Key points

- Separates basal state, perturbation, and covariate effects.
- Supports dosage-aware and combination-aware prediction.
- Makes composition explicit rather than purely black-box.

## Why it matters for annForce

- Conceptually the closest literature neighbor.
- Both methods rely on additive composition.
- annForce shifts the additive idea from latent embeddings to force fields over state trajectories.

## Limitations

- Additivity is expressed in representation space, not directly in state-space dynamics.
- Biological interactions can violate simple composition unless modeled separately.

## Related pages

- [[annForce]]
- [[GEARS]]
- [[perturbation-modeling]]
