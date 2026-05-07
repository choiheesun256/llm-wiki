---
title: Spatial AI for Cancer
type: concept
status: active
updated: 2026-05-07
source_collection: notion-review-2026-05-07
---

# Spatial AI for Cancer

## Summary

Spatial AI for cancer connects routine pathology, spatial transcriptomics, spatial proteomics, clinical metadata, and treatment outcomes. The core promise is to turn archival H&E and limited anchor spatial assays into tumour microenvironment state, treatment-response biomarkers, and target-context discovery.

## Main design patterns

- **Tri-modal alignment**: [[cui-2026-haiku-spatial-biology-clinical-histology]] aligns H&E, mIF spatial protein patches, and clinical text.
- **Virtual spatial transcriptomics**: [[tran-2026-phoenix-virtual-spatial-transcriptomics]] infers Xenium-like single-cell spatial expression from H&E.
- **Spatial ecotypes**: [[zhang-2026-non-invasive-profiling-of-the-tumour]] defines recurrent TME ecotypes and recovers them from cfDNA methylation.
- **Assay QC and spillover correction**: [[bilous-2026-xenium-split-spillover]] warns that raw spatial counts can create false cell-cell and biomarker signals.
- **Spatial motif mining**: [[an-2026-spatialquery-multicellular-motifs]] searches recurrent multicellular neighbourhood motifs.

## Practical workflow

1. Use a small, well-QC'd anchor cohort with measured spatial omics.
2. Correct segmentation, sensitivity, panel, and spillover issues before treating spatial data as ground truth.
3. Train or benchmark H&E-to-spatial or multimodal alignment models against the corrected anchor data.
4. Project spatial features across retrospective H&E archives.
5. Separate prognostic features from treatment-by-biomarker predictive features.
6. Validate candidate spatial biomarkers with orthogonal spatial assays or targeted panels.

## Failure modes

- H&E-derived expression is inferred, not measured.
- Xenium/CosMx/MERSCOPE panel sensitivity and segmentation choices can dominate apparent biology.
- Cell-cell proximity signals may reflect transcript spillover or segmentation bleed-through.
- Spatial ecotypes are clinically useful summaries, but not automatically causal therapeutic targets.

## Related pages

- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]
- [[zhang-2026-non-invasive-profiling-of-the-tumour]]
- [[nrl-target-discovery]]
