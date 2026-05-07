---
title: NRL Target Discovery
type: project
status: active
updated: 2026-05-07
source_collection: notion-review-2026-05-07
---

# NRL Target Discovery

## Summary

This project map tracks target discovery for cancer, degraders, E3 ligases, binder design, and druggability. The key shift is to treat target-first evidence as only one axis. A practical pipeline should combine genetic support, functional reversal, safety liability, spatial target context, protein flexibility, and binder feasibility.

## Evidence axes

| Axis                                 | Representative references                                                                                  | What it contributes                                                   |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Genetic target support and safety    | [[tsepilov-2026-gentropy-pleiotropy-target-safety]]                                                        | PAV support, gene pleiotropy score, organism-level liability          |
| Functional disease reversal          | [[xing-2026-gps-transcriptomic-reversal]]                                                                  | compound-induced transcriptomic reversal and hit-to-lead design       |
| Spatial target context               | [[tran-2026-phoenix-virtual-spatial-transcriptomics]], [[zhang-2026-non-invasive-profiling-of-the-tumour]] | which TME ecosystem or cell-neighbourhood context a target belongs to |
| Spatial assay QC                     | [[bilous-2026-xenium-split-spillover]]                                                                     | prevents false cell-type-specific target calls                        |
| Protein flexibility and druggability | [[piochi-2026-proteus-protein-flexibility]]                                                                | rapid zero-shot conformational plasticity screening                   |
| Binder and antibody QC               | [[chun-2026-antibody-cdr-fitness-mapping]]                                                                 | affinity, productivity, stability, and AF3/ProteinMPNN rescue         |
| Immune proteostasis target biology   | [[scharping-2026-t-cell-exhaustion-proteostasis]]                                                          | E3 ligase axis in exhausted T cells and immunotherapy context         |

## Practical target triage

1. Check genetic support and pleiotropy/safety liability.
2. Ask whether perturbation or compound signatures reverse disease state.
3. Place the target in a spatial and cell-state context, especially in TME data.
4. Check whether spatial expression is robust to spillover correction.
5. Evaluate protein flexibility, pocket/binder feasibility, and expression or productivity risks.
6. Define the validation path before treating a target as actionable.

## Related pages

- [[drug-repurposing]]
- [[spatial-ai-for-cancer]]
- [[virtual-screening]]
