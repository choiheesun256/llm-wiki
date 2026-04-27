---
title: Single-Cell Perturbation Prediction
type: concept
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Single-Cell Perturbation Prediction

## Summary

This topic covers models that predict how a cell state changes under genetic, chemical, or environmental perturbation.

## Main families

- Latent translation models such as [[scGen]]
- Compositional latent models such as [[CPA]]
- Knowledge-informed combinatorial models such as [[GEARS]]
- Transport models such as [[CellOT]]
- Interpretable additive models such as [[GPerturb]]
- Heterogeneity-aware response scoring methods

## What annForce adds

- Explicit continuous dynamics instead of only endpoint prediction
- Perturbations represented as additive force objects
- Natural route to combinatorial superposition
- Possible connection to fate prediction, not only expression reconstruction

## Open questions

- Is additive force composition a better inductive bias than latent vector arithmetic?
- How robust is the model when no real time labels are available?
- Does explicit dynamics improve out-of-distribution perturbation generalization?

## Related pages

- [[annForce]]
- [[perturbation-modeling]]
- [[annForce-related-methods]]
