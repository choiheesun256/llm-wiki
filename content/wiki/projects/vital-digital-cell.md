---
title: VITAL Digital Cell
type: project
status: active
updated: 2026-05-07
source_collection: notion-review-2026-05-07
---

# VITAL Digital Cell

## Summary

VITAL is a virtual-cell style project around single-cell and multimodal data for disease-context prediction, perturbation response, and target or compound prioritization. The relevant literature clusters into foundation models, perturbation models, spatial/multiome integration, and validation platforms.

## Literature map

| Track                                  | Main references                                                                         | Use in project design                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Compound-aware scFM                    | [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]]                                     | drug tokens, held-out drug and cell-line benchmark design                     |
| KG-conditioned perturbation prediction | [[wenkel-tu-2026-txpert-knowledge-graphs]]                                              | transcriptomic response prediction with STRING/GO/phenomic/transcriptomic KGs |
| Disease-context validation             | [[zhang-2026-igof-perturb-seq]]                                                         | in silico prediction to Perturb-seq to disease-signature matching             |
| Sample-level phenotype modeling        | [[benjamin-zador-2026-tissueformer]]                                                    | cell-set to donor/tissue/patient-level outcome prediction                     |
| Spatial multiomics                     | [[chang-2026-scigma-spatial-multiomics]], [[an-2026-spatialquery-multicellular-motifs]] | spatial graph integration, uncertainty, and motif discovery                   |
| Regulatory sequence design             | [[sarkar-2026-d3-regulatory-dna-design]]                                                | generative design of cell-context regulatory DNA                              |

## Benchmark implications

- Metadata must separate `cell type`, `cell line`, `donor`, `disease`, `assay`, `perturbation`, `dose`, `time`, and `batch`.
- Evaluation should include held-out perturbations, held-out cell lines, held-out disease contexts, and external assay validation.
- Perturbation-response metrics should include full-profile correlation, retrieval rank, response heterogeneity, and disease-signature reversal.
- Spatial and multiome models need location-level uncertainty and assay QC, not just embedding visual quality.

## Related pages

- [[single-cell-foundation-models]]
- [[single-cell-perturbation-prediction]]
- [[perturbation-modeling]]
- [[spatial-ai-for-cancer]]
