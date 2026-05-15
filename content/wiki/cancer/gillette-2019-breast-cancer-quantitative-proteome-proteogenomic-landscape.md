---
title: "Breast cancer quantitative proteome and proteogenomic landscape"
authors: "Johansson, Socciarelli, Vacanti, Haugen, Zhu, Siavelis, Fernandez-Woodbridge, Aure, Sennblad, Vesterlund, Branca, Orre, Huss, Fredlund, Beraki, Garred, Boekel, Sauer, Zhao, Nord, Hoglander, Jans, Brismar, Haukaas, Bathen, Schlichting, Naume, Luders, Borgen, Kristensen, Russnes, Lingjerde, Mills, Sahlberg, Borresen-Dale, Lehtio"
year: 2019
doi: "10.1038/s41467-019-09018-y"
category: "cancer"
tags:
  - breast-cancer
  - proteomics
  - proteogenomics
  - PAM50
  - multi-omics
  - mass-spectrometry
  - HiRIEF
  - neoantigen
  - CNA
  - mRNA-protein-correlation
  - subtype-classification
  - immunotherapy
  - EGFR
  - MET
  - drug-targets
  - Oslo2-cohort
pdf_path: "llm-wiki/papers/plus/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape.pdf"
pdf_filename: "gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape.pdf"
source_collection: "plus-batch-2026-05"
---

# Breast Cancer Quantitative Proteome and Proteogenomic Landscape

> Johansson et al. (2019) — *Nature Communications* 10:1600 — DOI: [10.1038/s41467-019-09018-y](https://doi.org/10.1038/s41467-019-09018-y)

---

## Summary

This study presents the deepest unbiased quantitative proteome profiling of breast cancer to date, quantifying 9,995 proteins across 45 primary tumors from the Oslo2 Landscape cohort (9 per PAM50 subtype) using **HiRIEF nanoLC-MS/MS**. The central finding is that protein-level unsupervised clustering alone can recapitulate PAM50 molecular subtypes — the first demonstration of this at the proteome scale. Beyond replication, proteomics refines and extends subtype biology: basal-like tumors are further separated by immune content, a glycolytic HER2/luminal B group is identified, and normal-like tumors are clarified by EGFR-MET co-expression in their DCIS compartments.

The study integrates transcriptomics, RPPA phosphoproteomics, metabolomics, CNA, and SNP data to build a multi-layer molecular landscape. A key quantitative finding is that copy-number alterations (CNAs) propagate from genome to mRNA to protein, but their effects are significantly dampened at the protein level — likely through ubiquitin-proteasome-mediated degradation. Genes in established prognostic mRNA panels show higher-than-average mRNA-protein correlations, explaining their clinical robustness. Finally, a proteogenomics pipeline identifies 388 novel peptides from non-coding genomic regions, 30% of which are predicted MHC class I binders absent from normal tissue, marking a new class of tumor-specific immunotherapeutic targets.

---

## Key Contributions

1. **First unbiased proteome-level recapitulation of PAM50 subtypes.** Unsupervised clustering of 9,995 proteins stratifies 45 tumors consistent with mRNA-based PAM50 assignments, validating that deep proteomics captures the core biology of breast cancer subtype.

2. **Six Core Tumor Consensus Clusters (CoTC) refine PAM50.** Protein-based clustering identifies six clusters that subdivide basal-like into immune-depleted (CoTC1) and MHC-enriched (CoTC2) groups, separate normal-like (CoTC5), and identify a glycolytic Warburg-effect cluster (CoTC6) within luminal B/HER2 tumors.

3. **EGFR-MET co-expression marks normal-like DCIS.** Protein co-expression analysis and super-resolution STED microscopy show MET and EGFR are co-localized specifically in DCIS regions of normal-like tumors — supporting their use as a combined biomarker and dual-therapeutic target for this clinically ambiguous subtype.

4. **CNA effects are attenuated at the protein level.** While 83% of CNA-mRNA associations are detectable at the protein level, the magnitude of effect is significantly reduced. Highly attenuated proteins accumulate ubiquitin upon proteasome inhibition (bortezomib), implicating post-translational regulation as a buffering mechanism against genomic instability.

5. **Prognostic mRNA panels are enriched for high mRNA-protein correlates.** Genes in PAM50, Oncotype DX, MammaPrint, Prosigna, and similar panels show significantly higher Spearman mRNA-protein correlations than the genome-wide average, providing molecular justification for their protein-level predictive value.

6. **Novel non-coding peptides as immunotherapeutic candidates.** 388 novel peptides from pseudogenes, intergenic regions, ncRNA, intronic loci, and UTRs are identified; 116 are predicted MHC I binders not detected in normal tissue, representing a new category of tumor-specific neoantigens.

7. **Comprehensive SAAV catalog including driver gene variants.** 3,475 SAAVs are detected, including variants in MAP3K1, AKT2, FOXA1, ERBB2, and CDKN1B; SAAV peptides from homozygous SNPs show the expected protein-level allele dosage effects.

---

## Methodology and Architecture

### Cohort and Sample Preparation

- 45 primary breast tumors from the **Oslo2 Landscape cohort**, 9 per PAM50 subtype.
- Additional validation: Oslo1 TMA cohort (n=530), CPTAC breast cancer proteome, TCGA RNA-seq and RPPA.
- Sample preparation: spin filter-aided digestion; peptides separated by **HiRIEF** (immobilized pH gradient IEF, pH 3.7–4.9 narrow-range strips) to dramatically reduce fraction complexity.

### Mass Spectrometry

- Platform: Thermo Scientific Q Exactive (Orbitrap), nanoLC-MS/MS.
- 13,997 proteins identified (12,645 genes), 248,939 unique peptides, 3.8 million PSMs.
- Protein FDR: 1%; quantification by gene-symbol centric TMT-like approach (median 12 peptides, 24 PSMs per protein).
- 9,995 proteins quantified in all 45 tumors used for all downstream quantitative analyses.

### Multi-Omics Data Layers

| Layer | Platform | n |
|---|---|---|
| Proteomics (deep) | HiRIEF nanoLC-MS/MS | 45 |
| Phosphoproteomics | RPPA (41 antibodies) | 45 (Oslo2), 329 (Oslo2 full), 892 (TCGA) |
| Transcriptomics | RNA-seq | 45 (Oslo2), 378 (Oslo2 full), 950 (TCGA) |
| Metabolomics | HR-MAS MRS | 45 (partial) |
| Copy number | SNP array | 45 |
| Tissue validation | Immunofluorescence, STED microscopy | 40–530 |

### Proteogenomics Pipeline

- MS/MS spectra searched against: Ensembl, CanProVar 2.0, COSMIC 70, GeneCode 19, LNCiPedia 3.1, pI-restricted 6-frame translation.
- Filtering: class-specific FDR 1%; BLAST curation; SpectrumAI b/y ion support; RNA-seq transcript evidence; MHCflurry class I binding prediction.
- Validation: synthetic peptides (61/67 confirmed), CPTAC/draft proteome cross-referencing, CAGE and ribosome profiling from public data.

### Network and Statistical Analysis

- Protein co-expression network: 1,447 high-variance proteins, Pearson r >0.5, KCore >1.
- Unsupervised hierarchical clustering of Pearson correlation profiles (CoTC definition from 1,334 high-variance proteins).
- GSEA with MSigDB Hallmarks; Wilcoxon and Mann-Whitney U tests; Gaussian mixture model for CNA attenuation classification; Kolmogorov-Smirnov test for SAAV impact scores.

---

## Results

### Proteome Recapitulates and Refines PAM50 Subtypes

Unsupervised clustering of the 9,995-protein quantitative proteome stratifies the 45 Oslo2 tumors in agreement with PAM50 assignments (basal-like, normal-like, luminal A consistently separated; luminal B and HER2 intermixed, consistent with known molecular similarities). Six CoTC clusters provide protein-level refinement:

- **CoTC1 (basal-like):** Immune-depleted; MHC class proteins markedly lower than CoTC2; proliferation hallmarks elevated.
- **CoTC2 (basal-like):** MHC class I/II enriched; higher immune infiltration; may represent immunologically "hot" basal tumors.
- **CoTC3 (luminal A):** Estrogen response enriched; characteristic luminal protein expression.
- **CoTC4 (luminal B subset):** Interferon alpha response enriched; small immune-response subnetwork.
- **CoTC5 (normal-like):** ECM cluster 1 (ECM1) and plasma protein elevated; extracellular matrix dominated.
- **CoTC6 (luminal B/HER2):** Glycolytic; depleted glucose, elevated lactate and alanine; MKI67 elevated consistent with Warburg effect and high proliferation.

### mRNA-Protein Correlations and Prognostic Panels

- Median Spearman mRNA-protein correlation across 9,856 genes: 0.43; ~70% significantly positive.
- Prognostic gene panel genes (PAM50, Oncotype DX, MammaPrint, Spliceosome, Transcription factor panels) show significantly higher mRNA-protein correlation than genome-wide average.
- Genes causally associated with cancer (COSMIC, Nik-Zainal breast cancer drivers) show variable mRNA-protein correlation — some should not be studied by mRNA alone.
- Protein complex members (CORUM database) show substantially higher pairwise correlations at the protein level than at the mRNA level.
- Correlation to tumor mRNA-protein correlation by protein class: DNA replication, MYC targets, E2F targets show high positive association; extracellular matrix, plasma, hallmark complement show inverse association.

### CNA Attenuation at the Protein Level

- CNAs distributed across the genome; chromosome 17q11 (HER2 amplicon) shows gains at both mRNA and protein.
- 83% of CNA-mRNA associations in the Oslo2 cohort overlap with the 2,000-sample Curtis et al. dataset, confirming statistical power despite small n.
- Highly attenuated proteins (high mRNA-CNA, low protein-CNA correlation) accumulate ubiquitin upon bortezomib proteasome inhibition — implicating degradation as a buffering mechanism.

### EGFR-MET Co-expression in Normal-Like DCIS

- Protein abundances of MET and EGFR are highly correlated (Pearson r=0.77, Oslo2 MS data).
- Co-expression is not correlated at the mRNA level in either Oslo2 or TCGA RNA-seq cohorts, underscoring the unique information content of protein measurement.
- Histopathological and immunofluorescence scoring of Oslo2 (n=40) and Oslo1 (n=530) cohorts shows EGFR-MET co-elevation confined to DCIS regions of normal-like tumors.
- Super-resolution STED microscopy confirms co-localization at the cellular level.

### Novel Peptides and Neoantigen Candidates

- 388 novel peptides identified from non-coding loci; 195 from pseudogenes, 72 intergenic, 43 from 5'UTR, 33 intronic, 18 exonic alt ORF, 14 exon extension, 12 ncRNA, 1 from 3'UTR.
- 116 (30%) predicted to bind MHC class I (MHCflurry) and absent from normal tissue MS data.
- Patient-specific immunotargets exemplified by Inc-AKAP14-1:3 (elevated in one luminal A tumor) and Inc-CXorf36-3:1 (elevated in two luminal B tumors), each supported by multiple mapped peptides.
- 61/67 randomly selected novel peptides confirmed by synthetic peptide MS spectra.

### SAAV Analysis

- 3,475 SAAVs detected: 1,241 in CanProVar only, 1,401 in COSMIC only, 871 in both.
- Homozygous SNP allele peptides show significantly higher abundance than heterozygous and reference alleles.
- Driver gene SAAVs include MAP3K1, AKT2, FOXA1, ERBB2, CDKN1B.

---

## Related Papers

- [[mertins-2016-proteogenomics-connects-somatic-mutations-breast-cancer]] — CPTAC proteogenomic characterization of TCGA breast cancer samples; companion large-scale dataset
- [[tyanova-2016-proteomic-maps-breast-cancer-subtypes]] — Proteomic maps of PAM50 breast cancer subtypes; earlier protein-level subtype work
- [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — Proteogenomic characterization of lung adenocarcinoma; same group, same HiRIEF pipeline
- [[anurag-2022-proteogenomic-markers-chemotherapy-resistance-response]] — Builds on Oslo2 proteomics to study chemotherapy resistance
- [[chen-2019-pan-cancer-molecular-subtypes-proteomic-characterization]] — Pan-cancer proteomics subtype analysis; related multi-cancer proteogenomics
- [[cao-2021-proteogenomic-characterization-pancreatic-ductal-adenocarcinoma]] — Similar proteogenomic approach applied to pancreatic cancer
- [[dou-2020-proteogenomic-characterization-endometrial-carcinoma]] — Proteogenomic characterization of endometrial carcinoma; related CPTAC study
- [[branca-2014-hiRIEF-nanoLC-ms-deep-proteome]] — Method paper for the HiRIEF nanoLC-MS/MS platform used in this study
- [[zhu-2018-integrated-proteogenomics-analysis-workflow]] — Proteogenomics analysis workflow underpinning the SAAV and novel peptide pipeline
- [[goncalves-2017-post-transcriptional-attenuation-copy-number]] — Mechanistic context for CNA dampening at the protein level
