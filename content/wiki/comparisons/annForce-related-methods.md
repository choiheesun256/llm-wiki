---
title: annForce Related Methods
type: comparison
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# annForce Related Methods

## Summary

This page compares annForce to the methods it is most likely to be discussed against.

## Comparison

| Method | Core representation | Uses time or dynamics explicitly | Handles combinations | Main strength | Main limit relative to annForce |
| --- | --- | --- | --- | --- | --- |
| annForce | additive perturbation force fields | yes | yes, by force superposition | continuous perturbation-conditioned dynamics | still needs proof that learned forces are identifiable and biologically meaningful |
| [[scGen]] | latent shift vectors | weakly | limited | simple and strong baseline | not built around explicit trajectories |
| [[CPA]] | additive latent composition | partially | yes | elegant composition and dosage handling | composition happens in latent space, not in force space |
| [[CellOT]] | transport maps | partially | limited | distribution-level response matching | less explicit about perturbation decomposition |
| [[GEARS]] | graph-informed perturbation decoder | no | yes | strong unseen-combination generalization | weaker dynamics story |
| [[GPerturb]] | sparse additive Gaussian processes | no | yes | interpretable effects and uncertainty | not a rich continuous-time neural dynamics model |
| [[CellRank]] | Markov transition kernels | yes | no | fate probabilities and terminal-state inference | not a perturbation-response generator |

## Reading

- Use [[CPA]] when the main question is compositional perturbation arithmetic.
- Use [[GEARS]] when the main question is novel multigene perturbation prediction.
- Use [[CellOT]] when the main question is control-to-perturbed transport.
- Use [[CellRank]] when the main question is fate structure.
- Use annForce when the goal is to unify perturbation composition with explicit dynamics.

## Related pages

- [[annForce]]
- [[annForce literature scan]]
- [[method-comparison-matrix]]
