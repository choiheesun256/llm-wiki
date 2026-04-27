---
title: Method Comparison Matrix
type: comparison
status: active
source_files:
  - Clippings/GPerturb Gaussian process modelling of single-cell perturbation data - Nature Communications.md
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Method Comparison Matrix

| Method | Method family | Strengths | Limits | Notes |
| --- | --- | --- | --- | --- |
| [[annForce]] | perturbation-conditioned dynamics | additive force composition, trajectory simulation, combinatorial extrapolation | needs strong validation for biological interpretability | project under study |
| [[scGen]] | latent translation VAE | strong classical baseline, simple framing | weak explicit dynamics | perturbation response predictor |
| [[CPA]] | compositional autoencoder | additive composition, dosage and covariate handling | composition is in latent space | closest conceptual neighbor |
| [[CellOT]] | optimal transport | distribution-aware response prediction | limited explicit perturbation decomposition | transport-centric |
| [[GEARS]] | graph-informed perturbation predictor | strong unseen multigene prediction | weaker continuous dynamics story | combinatorial baseline |
| [[GPerturb]] | Gaussian process regression | interpretable sparse gene-level effects, uncertainty estimates | less expressive for rich trajectory modeling | interpretable additive baseline |
| [[CellRank]] | probabilistic fate mapping | terminal states and fate probabilities | not a perturbation generator | dynamics benchmark |
