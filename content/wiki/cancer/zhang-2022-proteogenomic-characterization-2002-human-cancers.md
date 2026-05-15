---
title: "Pan-Cancer Proteogenomics: 2002-Tumor Compendium (Zhang 2022)"
authors:
  - Yiqun Zhang
  - Fengju Chen
  - Darshan S. Chandrashekar
  - Sooryanarayana Varambally
  - Chad J. Creighton
year: 2022
doi: 10.1038/s41467-022-30342-3
journal: Nature Communications
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/zhang-2022-proteogenomic-characterization-2002-human-cancers.pdf
pdf_filename: zhang-2022-proteogenomic-characterization-2002-human-cancers.pdf
source_collection: plus-batch-2026-05
source_note: "[[zhang-2022-proteogenomic-characterization-2002-human-cancers]]"
tags:
  - proteogenomics
  - pan-cancer
  - proteomics
  - mass-spectrometry
  - molecular-subtypes
  - CPTAC
  - copy-number-alteration
  - MYC
  - phosphoproteomics
  - tumor-microenvironment
  - TP53
  - KRAS
  - brain-tumor
  - glioblastoma
  - cancer-biology
---

# Pan-Cancer Proteogenomics: 2002-Tumor Compendium (Zhang 2022)

> Zhang et al. (2022) assembled a compendium of mass-spectrometry-based proteomics data from 2002 primary tumors across 14 cancer types and 17 studies. By integrating proteome, phosphoproteome, mRNA, CNA, and somatic mutation data, they identified 11 pan-cancer proteome-based subtypes, characterized genome–proteome relationships, and uncovered noncanonical somatic activators of the MYC pathway.

## 1. Study Overview

| Attribute | Detail |
|---|---|
| Dataset | 2,002 tumors, 14 cancer types, 17 studies |
| Proteome coverage | 15,439 genes (protein detected in ≥1 tumor); 10,129 genes in ≥50% tumors for ≥7 cancer types |
| Phosphoproteome | 199,284 features; 11,671 genes; 5,419 phospho-proteins in ≥50% tumors for ≥7 types |
| mRNA data | 1,899/2,002 tumors |
| CNA data | 1,837 tumors |
| Small mutation data | 1,698 tumors |
| Key platforms | LC-MS/MS (total protein + phosphoprotein), RNA-seq, SNP array CNA, WES/WGS |
| Data portal | UALCAN (http://ualcan.path.uab.edu/), CPTAC Data Commons |

Cancer types: breast, colorectal, gastric, glioblastoma, head and neck, liver, lung adenocarcinoma, lung squamous, ovarian, pancreatic, pediatric brain, prostate, renal, uterine.

## 2. Genome–Proteome Relationships

### 2.1 Protein–mRNA Concordance

- Median gene-wise Pearson r = 0.40 between protein and mRNA across 10,129 genes and 1,899 tumors.
- 97.1% of genes show significant positive protein–mRNA correlation (p < 0.01).
- **Low correlation categories** (post-transcriptional regulation dominant): ribosome, oxidative phosphorylation, electron transport chain, humoral immune response, DNA repair, cell cycle.
- **High correlation categories**: cell adhesion, fatty acid metabolism, adaptive immune response, T cell activation.
- Protein–CNA correlations are systematically lower than mRNA–CNA correlations.
- 756 genes with significant mRNA–CNA correlation but not protein–CNA correlation (7+ cancer types): enriched in protein-containing complex, mitochondrial, ribosomal subunit, translation, electron transport chain, DNA repair, cell cycle — suggesting post-transcriptional buffering of CNA effects.
- Somatic loss or indel of PI3K/AKT/mTOR pathway genes (PTEN, STK11, TSC1, TSC2): associated with lower protein abundance.

### 2.2 Tumor Grade Proteomic Correlates

- 1,936 proteins significantly associated with grade across 2+ cancer types (10 cancer types, 1,265 tumors).
- **Higher grade proteins shared across cancer types**: include genes in Type II interferon signaling (JAK–STAT axis: IFNG, JAK1, JAK2, STAT1, STAT2, IRF9, CXCL10, CXCL9, ICAM1 — lung adenocarcinoma, ovarian, renal) and Oncostatin M signaling (IL6ST, OSMR, STAT3, MAPK14 — liver, uterine).
- Protein kinases with functional impact in uterine endometrial cancer cells identified through grade correlation.

## 3. Pan-Cancer Proteome-Based Subtypes (s1–s11)

Unsupervised clustering (ConsensusClusterPlus, top 2000 variable proteins, Ward linkage) of 2,002 tumors yielded 11 subtypes spanning tissue types.

| Subtype | Key features | Cancer type enrichment |
|---|---|---|
| s1 | Proteasome, ubiquitin/UBQ regulation, immune system | Multiple |
| s2 | T cells, adaptive immune response, immune checkpoint | Multiple |
| s3 | Epithelium, oxidative phosphorylation, TCA cycle, basal-like breast | Multiple; breast |
| s4 | Tumor stroma, ECM, cell adhesion | Multiple |
| s5 | Tumor stroma, collagen VI, B cells, complement | Multiple |
| s6 | Hemoglobin complex, neuroendocrine markers | Multiple |
| s7 | Axon guidance, frizzled binding, DNA repair, chromatin organization | Multiple |
| s8 | Endoplasmic reticulum, steroid biosynthesis | Multiple |
| s9 | (Subset patterns) | Multiple |
| s10 | MYC/Wnt/Hippo pathway, high CNA burden, ependymoma/medulloblastoma | Pediatric brain, glioblastoma |
| s11 | Metabolic pathways (FA oxidation, TCA, OX-PHOS), low CNA burden, proneural GBM | Brain (pediatric + adult GBM entirely) |

- s10 and s11 are novel brain tumor subtypes not captured in prior 532-tumor compendium.
- s3 and s10 cancer cell lines tend to highly express essential genes (CRISPR screens), suggesting greater dependency on constitutively active pathways.
- Subtypes validated independently in TCGA RPPA (7,694 tumors) and CCLE mass spectrometry (375 cell lines).
- Pediatric brain subtype assignment correlates with patient survival in CBTTC cohort.

## 4. Pathway-Level Somatic Alteration and Proteome

### 4.1 Genome–Proteome Pathway Integration

- Somatic alteration (SNV/indel or CNA) in cancer-associated pathways is broadly reflected in proteome-based pathway signature scores.
- Pathways surveyed: RTK, mTOR, Wnt/beta-catenin, NRF2/KEAP1, MYC/MYCN, HIPPO, chromatin modification, p53/Rb-related, SWI/SNF, PI3K/AKT/mTOR.
- Exception: p53 transcriptional target signature applied to mRNA shows expected association with TP53 mutations; applied to protein data — does not. Only 9/27 p53 target genes show negative protein–TP53 mutation correlation vs 17/27 at mRNA level.

### 4.2 TP53 and KRAS Mutant Proteomic Signatures

- **TP53 mutation**: 2,752 proteins differential (FDR < 10%); 1,134 (41%) not reflected at mRNA. Associated GO: cell cycle (both levels); SWI/SNF, NF-kB, Wnt (protein-specific).
- **KRAS mutation**: 199 proteins, 580 mRNAs differential (FDR < 10%); focal adhesion/cell adhesion/cell junction (mRNA-level); humoral immune response (downregulated at mRNA).
- Key individual genes: p53 and HEATR1 protein levels higher in TP53 mutants (HEATR1 depletion impairs proliferation and induces p53-dependent cell cycle arrest); INSR and ERBIN protein levels higher in KRAS mutants.

### 4.3 Phosphoproteomic–Pathway Associations

- 36/106 pathway phosphoproteins significantly correlated with pathway DNA mutation class (Pearson, p < 0.05); 15 represent uncatalogued phosphosites.
- 24/106 significantly correlated with pathway gene signature score; 10 represent uncatalogued phosphosites.
- Nine phosphoproteins shared between mutation-class and signature-score associations, including PI3K/AKT/mTOR-related **PTEN:s294** and RTK-related **ERBB2:s671** and **ERBB2:s968** — not found in HPRD.

## 5. Noncanonical MYC Pathway Activators

A substantial fraction of cancers shows high MYC pathway signature without MYC or MYCN copy gain or amplification.

**Approach:** Identify somatic SNVs/indels enriched in tumors with high MYC pathway scoring but no canonical MYC/MYCN alterations; validate overlap between proteomic compendium and TCGA pan-cancer.

**12 noncanonical MYC activator genes** (significant in both datasets, p < 5E-8 overlap):

| Gene | Evidence for MYC role |
|---|---|
| ARID1A | SWI/SNF chromatin remodeling; loss increases MYC activity |
| ATM | DNA damage response; ATM promotes apoptosis/suppresses tumorigenesis in response to Myc |
| EP300 | Chromatin remodeling; BRG1/EP300 antagonizes Myc and promotes cell differentiation |
| JAK1 | JAK–STAT signaling upstream of MYC |
| KMT2C | Histone methylation; loss associated with MYC pathway |
| PTEN | PI3K/AKT regulation; PTEN transcriptionally modulates c-myc in breast cancer |
| RB1 | E2-containing promoter repression by p105-RB1 in concert with c-myc |
| RPL22 | Ribosomal; ribosome biogenesis linked to Myc |
| SETD2 | Histone H3K36 methylation |
| SMARCA4 | SWI/SNF; SMARCA4/ARID1A pancreatic neoplasia restraint |
| ZFHX3 | ERbeta regulation; inhibits cell proliferation via MYC downregulation |
| (12th not individually listed above) | |

- These noncanonical mutations account for an additional 14–18% of tumors with elevated MYC activity beyond those with MYC/MYCN copy gain.
- Findings replicated in TCGA pan-cancer (10,224 tumors, RNA-seq-based scoring).
- Implications: tumors lacking canonical MYC amplification may still be therapeutically targetable via MYC pathway, and the noncanonical genes represent potential combination targets.

## Key Takeaways

1. Protein and mRNA broadly but imperfectly correlate; systematic exceptions in ribosomes, electron transport, and immune response reflect post-transcriptional regulation rather than biology absent from transcriptome data.
2. Eleven pan-cancer proteome subtypes cut across tissue lineages, with two novel brain tumor subtypes (s10: MYC/Wnt/Hippo/high CNA; s11: metabolic/low CNA) not captured in prior smaller cohorts.
3. Somatic pathway alterations are reflected in proteomic signatures, but TP53 mutation's canonical transcriptional targets are not detectably reflected at the protein level — a critical limitation for protein-based p53 pathway inference.
4. MYC pathway activity is driven by noncanonical somatic mutations (ARID1A, ATM, PTEN, SMARCA4, RB1, EP300, etc.) in a substantial fraction of cancers without MYC/MYCN copy gain, expanding potential therapeutic targets.
5. Uncatalogued phosphosites (PTEN:s294, ERBB2:s671, ERBB2:s968) correlated with pathway status provide novel drug target hypotheses.
