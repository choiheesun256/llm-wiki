---
title: Notion Literature Review 2026-05-07
type: project
status: active
updated: 2026-05-07
source_collection: notion-review-2026-05-07
---

# Notion Literature Review 2026-05-07

## Scope

Read-only review of project-specific Notion literature hubs for papers relevant to cancer, single-cell biology, spatial transcriptomics, machine learning, and deep learning.

Notion was used only as a source. No Notion pages, databases, comments, or views were edited.

## Notion hubs reviewed

| Project hub                  | Notion location                             | Decision                                                                                          |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 표적항암치료제 멀티오믹스    | `참고 논문 및 아이디어`                     | Added spatial pathology, virtual spatial transcriptomics, and Xenium QC notes                     |
| 인간 뇌 싱글셀 아틀라스      | `참고 논문 및 아이디어`                     | Added spatial multi-omics design and motif-mining notes                                           |
| VITAL 디지털세포             | DB direct posts and `참고 논문 및 아이디어` | Added single-cell foundation and perturbation-modeling notes                                      |
| NRL2.0 타겟 발굴             | DB direct posts and `참고 논문 및 아이디어` | Added target discovery, safety liability, protein flexibility, and binder QC notes                |
| 데기디바 발달장애            | `참고 논문 및 아이디어`                     | Added regulatory DNA diffusion model because it is a direct deep-learning method                  |
| 한국인 ASD / 성차 / WGS hubs | project-specific reference pages            | Reviewed at hub level; most papers are outside this wiki batch's cancer/single-cell/spatial focus |

## New source notes

### Cancer, spatial transcriptomics, and pathology AI

- [[cui-2026-haiku-spatial-biology-clinical-histology]]
- [[tran-2026-phoenix-virtual-spatial-transcriptomics]]
- [[bilous-2026-xenium-split-spillover]]
- [[zhang-2026-non-invasive-profiling-of-the-tumour]] already existed and was retained as the Spatial EcoTyper reference.

### Single-cell foundation and perturbation models

- [[wenkel-tu-2026-txpert-knowledge-graphs]]
- [[gandhi-2025-tahoe-x1-perturbation-trained-sc-fm]]
- [[zhang-2026-igof-perturb-seq]]
- [[benjamin-zador-2026-tissueformer]]

### Spatial omics methods

- [[hemminger-2026-cipher-codebook-design]]
- [[chang-2026-scigma-spatial-multiomics]]
- [[an-2026-spatialquery-multicellular-motifs]]

### Target discovery, binder design, and regulatory ML

- [[tsepilov-2026-gentropy-pleiotropy-target-safety]]
- [[xing-2026-gps-transcriptomic-reversal]]
- [[piochi-2026-proteus-protein-flexibility]]
- [[scharping-2026-t-cell-exhaustion-proteostasis]]
- [[chun-2026-antibody-cdr-fitness-mapping]]
- [[sarkar-2026-d3-regulatory-dna-design]]

## Working synthesis

The most useful current split is:

- **Spatial AI for cancer**: H&E and molecular spatial assays are becoming a reusable bridge between retrospective pathology archives and treatment-response biomarkers.
- **Single-cell perturbation modeling**: the field is moving beyond GEARS/CPA-style baselines toward perturbation-trained foundation models and KG-conditioned GNNs.
- **Target discovery**: target-first evidence needs to be combined with phenotype reversal, pleiotropy/safety liability, and protein/binder feasibility.
- **Spatial assay QC**: virtual spatial transcriptomics and multimodal models should not be trained against uncorrected spatial data without segmentation, sensitivity, and spillover checks.

## Next review questions

- Which Notion pages should be promoted into full source notes next?
- Should older NRL proteogenomic papers such as Dou 2024, Anurag 2022, and Li 2022 be added as full source notes or only kept in the target discovery project map?
- Should this wiki begin storing paper PDFs locally again, or remain Markdown-only for this Quartz deployment?
