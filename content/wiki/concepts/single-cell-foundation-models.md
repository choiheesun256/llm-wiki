---
title: Single-Cell Foundation Models
type: concept
status: active
updated: 2026-05-07
source_collection: notion-review-2026-05-07
---

# Single-Cell Foundation Models

## Summary

Single-cell foundation models pretrain large neural networks on millions to hundreds of millions of cell profiles, then reuse the learned representation for cell annotation, perturbation prediction, gene program discovery, imputation, cross-modal transfer, or sample-level phenotype prediction.

The current practical question is not simply which model is largest. For project use, the decision depends on the tokenization, metadata schema, perturbation conditioning, held-out evaluation design, and whether the model can predict beyond cell-level labels.

## Model families

| Family                            | Examples                                                                                        | Useful when                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Rank-ordered gene language models | Geneformer, TissueFormer backbone                                                               | gene program or network biology transfer is the main goal            |
| Generative transcriptome models   | scGPT, scFoundation, CellFM, scPRINT-2                                                          | annotation, imputation, and broad representation learning are needed |
| Perturbation-trained models       | [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]], [[wenkel-tu-2026-txpert-knowledge-graphs]] | genetic or chemical response prediction is central                   |
| Population-level extensions       | [[benjamin-zador-2026-tissueformer]]                                                            | donor, tissue, or patient-level outcomes are the target              |
| Spatially aware models            | Nicheformer, [[chang-2026-scigma-spatial-multiomics]]                                           | neighbourhood or spatial assay context must be preserved             |

## Evaluation dimensions

- **Held-out gene or drug**: can the model handle perturbations absent from training?
- **Held-out cell line or disease**: can it transfer across biological context?
- **Combination generalization**: does it predict double or higher-order perturbations from singles?
- **Distributional fidelity**: does it preserve single-cell heterogeneity, not just mean shifts?
- **Metadata use**: are dose, time, assay, donor, batch, and disease state explicit model inputs?
- **External validation**: does prediction lead to Perturb-seq, MPRA, proteomics, or functional validation?

## Key current references

- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]] uses drug tokens and large cancer-cell-line perturbation data as a compound-aware virtual-cell reference.
- [[wenkel-tu-2026-txpert-knowledge-graphs]] fuses multiple knowledge graphs to improve transcriptomic perturbation prediction.
- [[zhang-2026-igof-perturb-seq]] shows how perturbation atlases can be connected to disease-context validation.
- [[benjamin-zador-2026-tissueformer]] adds cross-cell attention to map cell sets to sample-level phenotypes.

## Related pages

- [[single-cell-methods]]
- [[single-cell-perturbation-prediction]]
- [[perturbation-modeling]]
- [[vital-digital-cell]]
