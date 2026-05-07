---
title: scGen
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# scGen

## Summary

`scGen` is a landmark perturbation prediction model that learns latent-space translations between control and perturbed cells.

## Key points

- Uses a variational autoencoder backbone.
- Treats perturbation effects as approximately vector-like shifts in latent space.
- Demonstrates cross-cell-type and cross-study perturbation generalization.

## Why it matters for annForce

- It is a canonical baseline for single-cell perturbation prediction.
- annForce differs by modeling perturbations as force fields over continuous dynamics rather than static latent translations.
- The comparison is useful for testing whether explicit dynamics buys better extrapolation or interpretability.

## Limitations

- Shift-based latent arithmetic can oversimplify nonlinear or path-dependent responses.
- It is more endpoint-oriented than trajectory-oriented.

## Related pages

- [[annForce]]
- [[CPA]]
- [[CellOT]]
- [[GEARS]]
