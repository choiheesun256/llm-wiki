---
title: "Non-invasive profiling of the tumour microenvironment with spatial ecotypes"
authors: "Wubing Zhang, Erin L. Brown, Abul Usmani, et al."
year: 2026
doi: "10.1038/s41586-026-10452-4"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/zhang-2026-non-invasive-profiling-of-the-tumour.pdf"
pdf_filename: "zhang-2026-non-invasive-profiling-of-the-tumour.pdf"
source_collection: "notion-handoff-2026-05"
---

Nature paper introducing Spatial EcoTyper and Liquid EcoTyper, a multimodal framework that defines nine conserved tumour microenvironment (TME) spatial ecotypes from pan-cancer spatial transcriptomics and recovers them non-invasively from plasma cfDNA methylation to predict melanoma immunotherapy response.

## 1. Document Information

- **Journal**: Nature (2026)
- **Published**: 2026-05-06
- **DOI**: [10.1038/s41586-026-10452-4](https://doi.org/10.1038/s41586-026-10452-4)
- **Core methods**: Spatial EcoTyper, Liquid EcoTyper, CytoSPACE, NMF, cfDNA EM-seq

## 2. Key Contributions

1. Defines **nine conserved spatial ecotypes (SE1-SE9)** across carcinomas and melanoma by integrating more than 10 million spatial transcriptomes from 132 tumour ST specimens, 10 cancer types, and 6 ST platforms.
2. Introduces **Spatial EcoTyper**, a machine-learning framework that fuses cell type-specific gene expression with spatial neighbourhood information into a common embedding for ecotype discovery.
3. Builds a bulk-expression deconvolution model that recovers SE composition from bulk RNA-seq and matched bulk ST, enabling scale-up from spatial assays to large clinical cohorts.
4. Introduces **Liquid EcoTyper**, a binary neural network that learns CpG methylation signatures of SEs and recovers them from plasma cfDNA.
5. Shows that liquid SE signals in pretreatment melanoma plasma predict ICI benefit, progression-free survival, and overall survival with stronger TME-state specificity than ctDNA burden alone.

## 3. Methodology and Architecture

- **Discovery data**: 132 human tumour ST specimens spanning melanoma plus 9 carcinoma types, across Visium, legacy ST, MERSCOPE, Xenium V1, Xenium Prime, and Visium HD; paired with scRNA-seq atlases from 144 tumours.
- **Spatial reconstruction**: bulk and lower-resolution ST assays were integrated with scRNA-seq using CytoSPACE to generate cell-type-resolved spatial maps.
- **Spatial EcoTyper**: aggregates spatial neighbourhoods, fuses cell type-specific gene expression programs into a shared spatial embedding, then applies NMF/archetypal analysis to identify ecotypes.
- **Digital cytometry**: trained on 1,000 pseudo-bulk tumours to infer SE abundances from bulk expression and validated against HTAN bulk+Visium pairs and paired Visium/MERSCOPE melanoma sections.
- **Liquid EcoTyper**: deep-learning model on CpG methylation profiles trained with simulated melanoma cfDNA built from tumour methylation plus healthy cfDNA background, then applied to tumour EM-seq and plasma cfDNA EM-seq.

## 4. Key Results and Benchmarks

| Task | Key result |
|------|------------|
| SE discovery | 9 robust SEs recovered from 41,066 spatial neighbourhoods |
| Clinical bulk cohort | 6 of 9 evaluable SEs associated with overall survival across 7,076 TCGA tumours |
| ICI tissue meta-analysis | In 1,249 pretreatment tumours, SE8 and SE7 associated with benefit, SE4 with resistance |
| Plasma-tissue concordance | Liquid vs tissue ICI-response associations were highly concordant (reported r = 0.97) |
| Melanoma plasma cohort | In 78 pretreatment metastatic melanoma cfDNA samples, high SE7/SE8 predicted durable benefit and longer PFS/OS; high SE4 predicted resistance, shorter PFS, and shorter OS |
| Biomarker comparison | SE7/SE8 outperformed TMB and CD274 in multivariable overall survival models; SEs added a non-redundant TME-state axis beyond ctDNA |

## 5. Limitations and Future Work

- Liquid EcoTyper clinical validation is strongest in metastatic melanoma treated with ICI; extension to other cancers and therapy settings remains prospective work.
- SEs are computationally inferred ecological states, not causal therapeutic targets; perturbation experiments are still needed.
- Performance depends on cross-platform spatial assay quality, segmentation, and spillover correction.
- The framework requires strong reference data across ST, scRNA-seq, and methylation to build transferable ecotype models.

## 6. Related Work

- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]] (multimodal pathology-to-omics alignment including spatial modalities)
- [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]] (immune-state organization relevant to ICI-responsive TMEs)

## 7. Glossary

- **Spatial ecotype (SE)**: recurrent multicellular ecosystem defined by joint spatial colocalization and transcriptional programs.
- **Spatial EcoTyper**: framework for discovering and deconvolving SEs from spatial and bulk expression data.
- **Liquid EcoTyper**: cfDNA methylation model for recovering SE levels from plasma.
- **CytoSPACE**: method for mapping scRNA-seq profiles into spatial transcriptomics coordinates.
- **EM-seq**: enzymatic methyl sequencing for genome-wide methylation profiling.
