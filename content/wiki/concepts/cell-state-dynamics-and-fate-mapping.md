---
title: Cell-State Dynamics and Fate Mapping
type: concept
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# Cell-State Dynamics and Fate Mapping

## Summary

This topic covers methods that try to infer how cells move through state space, branch, and commit to terminal fates.

## Main references

- RNA velocity
- scVelo
- [[CellRank]]
- Waddington-OT
- LARRY lineage tracing
- Population balance analysis

## Key modeling tensions

- Snapshot data versus real temporal supervision
- Local directionality versus global fate structure
- Mechanistic interpretation versus predictive utility
- Continuous vector fields versus graph-based transition operators

## Relevance to annForce

annForce is unusual because it sits on both sides of the line:

- it is a perturbation prediction model
- it is also a dynamics model

That means its evaluation should probably include both:

- perturbation reconstruction metrics
- fate and trajectory metrics

## Related pages

- [[annForce]]
- [[CellRank]]
- [[single-cell-perturbation-prediction]]
