---
title: "Integrated Proteogenomic Characterization of Human High-Grade Serous Ovarian Cancer"
authors:
  - Hui Zhang
  - Tao Liu
  - Zhen Zhang
  - Daniel W. Chan
  - Karin D. Rodland
  - the CPTAC Investigators
year: 2016
doi: 10.1016/j.cell.2016.05.069
journal: Cell
volume: 166
pages: 755–765
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/zhang-2016-integrated-proteogenomic-characterization-human-high-grade.pdf
pdf_filename: zhang-2016-integrated-proteogenomic-characterization-human-high-grade.pdf
source_collection: plus-batch-2026-05
tags:
  - proteogenomics
  - ovarian-cancer
  - HGSC
  - CPTAC
  - phosphoproteomics
  - copy-number-alterations
  - HRD
  - BRCA1
  - BRCA2
  - survival
  - TCGA
  - histone-acetylation
  - PARP-inhibitor
  - PDGFRb
---

# Zhang et al. 2016 — Integrated Proteogenomic Characterization of Human High-Grade Serous Ovarian Cancer

> **Source**: [[sources/zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Full source note]]
> **Journal**: *Cell* 166, 755–765 (2016) | **DOI**: [10.1016/j.cell.2016.05.069](http://dx.doi.org/10.1016/j.cell.2016.05.069)
> **Consortium**: CPTAC (Clinical Proteomic Tumor Analysis Consortium)

## Summary

The CPTAC consortium performed comprehensive mass-spectrometry-based proteomics and phosphoproteomics on 174 ovarian tumors (169 HGSCs) previously characterized by TCGA. By integrating protein and phosphoprotein abundance with existing genomic and transcriptomic data, the study revealed how copy-number alterations (CNAs) reshape the proteome in *trans*, how histone H4 acetylation marks homologous recombination deficiency (HRD), and which signaling pathways — visible only at the phosphoprotein level — associate with patient survival.

## Key Findings

### 1. Proteome Largely Tracks mRNA, But With Important Exceptions
- 90.6% of mRNA–protein pairs positively correlated; 79.4% significantly so (median Spearman r = 0.45)
- Pathways with low mRNA–protein correlation: complement/coagulation cascade, mRNA splicing — indicating active post-transcriptional regulation
- 23 mRNAs lacking poly(A) tails showed depressed protein correlation, consistent with decreased mRNA stability

### 2. Five Proteomic Subtypes, Including a Novel Stromal Cluster
- Protein abundance clustering yields five subtypes: differentiated, metabolic, proliferative, mesenchymal, and a novel **stromal** cluster
- Four clusters correspond to TCGA transcriptomic subtypes; the stromal cluster is enriched for ECM, erythrocyte/platelet, and complement cascade proteins
- The stromal subtype had lower tumor purity and may reflect tumor microenvironment composition rather than intrinsic tumor biology

### 3. CNAs Drive the Proteome in *trans*, Converging on Invasion and Immunity
- 0.72% of all CNA/protein pairs (950,209 tested) significantly associated (BH p < 0.01)
- Hotspot chromosomes with the broadest *trans* proteome impact: **chr 2, 7, 20, 22** (each affecting >200 proteins)
- Chr 2 *trans* effects are largely protein-specific with little corresponding mRNA change — implicating post-transcriptional mechanisms (microRNAs, RNA-binding proteins)
- Functionally, *trans*-affected proteins converge on **motility/invasion** and **immune regulation** pathways — hallmarks of cancer dissemination

### 4. CNA-Derived Survival Signatures
- Lasso-based Cox models built from *trans*-affected proteins at the four hotspot CNA loci each predict overall survival independently
- Consensus voting across four signatures significantly improves survival prediction (p = 1.9e−6)
- Shared proteins across signatures: CTNNA2, ARHGDIB, PACSIN2, RAN — all linked to invasion, migration, or cytoskeletal regulation
- SRF (serum response factor) target genes enriched across all four signatures, suggesting SRF activity as a key driver of poor prognosis in HGSC

### 5. Histone H4 Acetylation Marks HRD Status
- DDN analysis identified a 30-protein sub-network differentiating HRD from non-HRD tumors, enriched for histone acetylation/deacetylation proteins (HDAC1, RBBP4, RBBP7, EP300, HUS1)
- Dual acetylation of **histone H4 at K12 and K16** is significantly higher in HRD-positive tumors (iTRAQ p = 0.028; SWATH p = 0.039)
- H4 acetylation status reflects the preferred DSB repair pathway (HR vs. NHEJ)
- Rationale for HDAC inhibitor use: increased H4 acetylation in HRD tumors may potentiate HR, while HDAC inhibition could shift repair toward NHEJ and sensitize tumors to PARP inhibition

### 6. Phosphoproteomics Reveals Survival-Associated Pathways Invisible to Transcriptomics
- 15 pathways significantly upregulated (phosphorylation) in short-survival vs. long-survival patients (BH p < 0.01)
- Top survival-associated pathways: **RhoA regulatory**, **PDGFRβ**, **integrin-linked kinase**, Notch, HER2/Neu, Rac1, Cxcr4
- Transcriptomics identified only 1 significantly different pathway (androgen receptor signaling)
- PDGFRβ pathway activation in short-survival patients supports stratification for anti-angiogenic therapy trials (relevant to bevacizumab controversy in ovarian cancer)
- ERK1, AKT1, RAF1, STAT3 phosphorylation increased in short-survival patients by both MS and RPPA

## Biological Significance

| Layer | Key Insight |
|---|---|
| Proteome vs. transcriptome | Post-transcriptional regulation is pervasive; proteomics adds independent information |
| CNA → proteome | *Trans* effects dominate; converge on invasion/immune pathways regardless of CNA location |
| Histone acetylation | H4 K12/K16 dual acetylation is a functional readout of HRD, potential therapeutic biomarker |
| Phosphoproteomics | Pathway-level kinase activity readouts predict survival better than mRNA or CNA alone |
| Proteomic subtypes | Stromal subtype reflects TME, not captured by transcriptomics |

## Clinical Implications

- **Patient stratification**: CNA-derived protein signatures and phosphoproteomic pathway scores can stratify HGSC patients by overall survival prognosis
- **HDAC inhibitor therapy**: Increased H4 K12/K16 acetylation in HRD tumors provides rationale for HDAC inhibitor use; HDAC1 involvement suggests it modulates DSB repair pathway choice
- **PARP inhibitor selection**: H4 acetylation status as an alternative biomarker to BRCA mutation status for HRD classification
- **Anti-angiogenic therapy**: PDGFRβ pathway activation in poor-prognosis patients supports enrollment in bevacizumab or PDGFRβ-targeted trials
- **Proteomics as a clinical tool**: Protein signatures more robustly associate with outcome than RPPA-based signatures (Provar signature) in this cohort

## Methodological Notes

- **iTRAQ + LC-MS/MS**: Isobaric multiplexed quantification; 9,600 proteins identified; median CV between two sites = 16%
- **Phosphoproteomics**: 24,429 phosphosites from 6,769 phosphoproteins in 69 tumors
- **Proteogenomics pipeline**: Custom graph database of TCGA variant peptides; 20 synthetic peptide validations confirm variant detection
- **SWATH-MS**: Used for targeted, quantitative validation of acetylated peptides
- **Data**: All primary MS data deposited at CPTAC Data Coordinating Center ([cptac-data-portal.georgetown.edu](https://cptac-data-portal.georgetown.edu))
