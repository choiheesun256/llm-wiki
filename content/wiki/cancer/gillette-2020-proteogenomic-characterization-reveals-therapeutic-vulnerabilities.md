---
title: "Proteogenomic Characterization Reveals Therapeutic Vulnerabilities in Lung Adenocarcinoma"
authors: "Michael A. Gillette, Shankha Satpathy, Song Cao, et al., Clinical Proteomic Tumor Analysis Consortium"
year: 2020
doi: "10.1016/j.cell.2020.06.013"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.pdf"
pdf_filename: "gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities.pdf"
source_collection: "plus-batch-2026-05"
tags: [LUAD, lung-adenocarcinoma, proteogenomics, multi-omics, phosphoproteomics, acetylomics, EGFR, KRAS, ALK, STK11, KEAP1, NMF-clustering, tumor-microenvironment, immunotherapy, CPTAC, drug-targets, copy-number-alteration, DNA-methylation, PTM, neutrophil-degranulation, SOS1, PTPN11]
---

## Summary

This 2020 CPTAC Cell paper by Gillette, Satpathy, Cao et al. performed the most comprehensive proteogenomic characterization of lung adenocarcinoma (LUAD) to date. 110 treatment-naive tumors and 101 matched normal adjacent tissues (NATs) were profiled across genomics, epigenomics, transcriptomics, and deep-scale proteomics (proteome, phosphoproteome, acetylome). The study identified four multi-omics molecular subtypes, characterized downstream consequences of driver mutations at the protein and PTM level, mapped the immune landscape, and nominated novel therapeutic targets — most notably PTPN11 Y62 in EGFR mutant tumors and SOS1 S1161 in KRAS mutant tumors — that are invisible at the DNA or RNA level.

## Key Contributions

- **Multi-omics molecular subtypes**: NMF clustering across RNA, protein, phosphoproteome, and acetylome defined four stable clusters (C1–C4): C1/proximal-inflammatory (TP53-enriched, CIMP-high), C2/proximal-proliferative subcluster (Western patients, EGFR/TP53 WT), C3/dominant proximal-proliferative (Vietnamese patients, STK11-enriched), C4/terminal respiratory unit (EGFR-enriched, female-enriched, Chinese patients)
- **ALK fusion phospho-marker**: ALK Y1507 phosphorylation is consistently elevated in all ALK fusion-positive tumors and absent in NATs and non-ALK fusions; validated by IHC; novel 5′ fusion partners HMBOX1 and ANKRD36B identified; 27 additional phosphorylation outliers in ALK fusion tumors including SND1, HDLBP, ARHGEF5
- **PTPN11/Shp2 as EGFR target**: PTPN11 Y62 hyperphosphorylation detected exclusively at phosphoprotein level in EGFR mutant (and ALK fusion) LUADs — not at RNA or protein level; Y62 stabilizes the active conformation; PTPN11/Shp2 inhibitors are already in clinical trials
- **SOS1 as KRAS target**: SOS1 S1161 (C-terminal GEF domain) significantly hyperphosphorylated in KRAS mutant tumors; SOS1 activates KRAS; SOS1 inhibition an emerging clinical strategy
- **KEAP1/NFE2L2 regulatory network**: KEAP1 mutations increase NFE2L2 phosphorylation on S215/S433; G511V missense mutation uniquely preserves KEAP1 protein but disrupts KEAP1-NFE2L2 interaction, revealing a novel allosteric mechanism distinct from protein stability loss
- **STK11 immune-cold mechanism**: STK11 mutation associated with depleted cDC and macrophage infiltration; neutrophil degranulation identified as the defining proteomic pathway of STK11 immune-cold tumors (16 proteins including CAMP, LTF, BPI, MMP8, MMP9, MPO, LCN2, ELANE, ARG1 overexpressed at protein but not RNA level)
- **Tumor biomarkers and immunotherapy candidates**: 289 tumor-specific proteins (log2FC > 2 in ≥90% tumor-NAT pairs); 44 cancer-testis antigens recurrently overexpressed; 2,481 mRNA-validated somatic mutation-derived neoantigens; KIF2C most ubiquitous CT antigen (62% of tumors)
- **Smoking-associated molecular signatures**: Correlation with PAH environmental exposure signatures; ARHGEF5 Y1370 phosphorylation highest in ALK fusion never-smoker tumors, suggesting an oncogenic Rho GTPase mechanism specific to this subgroup

## Methodology

| Platform | Data Type | Features |
|---|---|---|
| WES | Germline mutations | 16,660 |
| WGS | Somatic mutations / CNA | 32,250 / 9,267 |
| Methylation array | DNA methylation | 16,478 |
| RNA-seq | mRNA | 18,099 |
| miRNA-seq | miRNA | 2,585 |
| TMT Proteomics | Proteins | 10,699 |
| TMT Proteomics | Phosphosites | 41,188 |
| TMT Proteomics | Acetylsites | 6,906 |

**Cohort**: 110 treatment-naive LUAD tumors + 101 matched NATs; geographically diverse (USA, China, Vietnam, Eastern Europe); balanced never-smoker/smoker representation. Complete data available for 101 tumors / 96 NATs.

**Key analytic approaches**: NMF-based multi-omics clustering; Spearman CNA cis/trans correlation; CMAP perturbation signature matching; methylation cis-effect cascade analysis; Wilcoxon-based driver mutation PTM impact; BlackSheep outlier kinase analysis; xCell immune deconvolution; PTM Signature Analysis; SignatureAnalyzer mutational signatures.

## Results

### Multi-omics Subtypes (C1–C4)

Four NMF clusters with distinct biology:

| Cluster | n | Key enrichments |
|---|---|---|
| C1 (proximal-inflammatory) | 31 | TP53 mut, CIMP-high, high mutation burden, immune signaling |
| C2 (proximal-proliferative) | 13 | USA/Western patients, TP53/EGFR WT, intermediate CIMP, Rho GTPase/hemostasis |
| C3 (dominant proximal-proliferative) | 30 | Vietnamese patients, STK11 mut, histone deacetylase signature |
| C4 (terminal respiratory unit) | 36 | EGFR mut, female, Chinese, MAPK1/MAPK3 signaling, surfactant metabolism |

EML4-ALK fusions assigned predominantly to C4; consistent with EGFR-driven biology.

### Driver Mutation Proteogenomic Effects

- **TP53 mutations**: Upregulate MMR pathway proteins (MLH1, MSH2, MSH6, PSM2) and DNA damage response proteins (ATM, ATR, BRCA1); elevated EZH2 and CDK1 phosphorylation; downregulate Wnt signaling (AXIN1, TCF7L2)
- **EGFR mutations**: PTPN11 Y62 hyperphosphorylated (phosphoprotein level only); CTNNB1 S552 elevated; decreased CTNNB1 acetylation; ROCK1 upregulated; complement/clotting cascade upregulated; VTE risk pathway elevated
- **KRAS mutations**: SOS1 S1161 hyperphosphorylated; DNMBP C-terminal phosphorylation; extracellular glycoproteins, collagens, enzymes enriched; KRAS-associated chemokine CXCL8 elevated
- **STK11 mutations**: Reduced cognate protein and phosphosite abundance; SMAD4 S138 phosphorylation increased (EMT/TGF-β); amino acid metabolism proteins enriched; urea cycle perturbation
- **KEAP1 mutations**: KEAP1 protein downregulated; NFE2L2 S215/S433 phosphorylation increased; G511V uniquely preserves KEAP1 protein but maximal NFE2L2 phosphorylation (PPI disruption mechanism)

### CNA and Methylation Effects

- CNA cis effects broadly dampened at protein vs. RNA level; 6,043 vs. 2,354 significant cis correlations respectively
- 12 CNA events with trans-effects matching CMAP perturbation profiles: RALA amplification (EGFR/KRAS), BZW2 amplification (AKT/mTOR/PI3K), NUDC03/CTSB (poor prognosis markers)
- 120 methylation-driven cis-effects; CLDN18, ANK1, PTPRCAP have cascading effects to protein level; PTPRCAP is part of a five-gene methylation-based immune signature (with PTPRC, CD4, LCK)

### Immune Landscape

Three consensus immune clusters:
- **HTE (hot-tumor-enriched)**: B-cells, CD4+/CD8+ T-cells, DCs, macrophages enriched; IDO1/PD1/PD-L1 upregulated; also shows T-reg signatures (CTLA4, FOXP3); anti-CTLA4 and IDO1 inhibition as therapeutic opportunities; associated with C1 multi-omics cluster
- **CTE (cold-tumor-enriched)**: Glycolysis and PPAR signaling elevated; MUC5B, WFDC2 (HE4) upregulated; associated with C3/C4
- **NAT-enriched**: Intermediate immune infiltration; bidirectional regulation between HTE and CTE

STK11 mutant tumors: lowest ESTIMATE immune scores (especially KRAS/STK11 double-mutants); depleted for cDC and macrophages; neutrophil degranulation as the dominant and proteomic-level immunosuppressive mechanism (invisible at RNA level). Deep learning histopathology classifier distinguished STK11 mutant vs. WT LUAD at 94% accuracy on slide tiles.

### Tumor vs. NAT Biomarkers

- 289 proteins significantly upregulated (log2FC > 2, FDR < 0.01, ≥90% tumor-NAT pairs)
- GREM1 (log2FC > 5) known poor prognosis marker
- 60 also differential at RNA level; 5 (GFPT1, BZW2, PDIA4, P4HB, PMM2) upregulated in all tumor samples
- 44 recurrently overexpressed cancer-testis antigens; KIF2C most common (62%); 9 in ≥10% of samples
- 97/110 samples with CT antigen or neoantigen evidence — immunotherapy potential

## Therapeutic Implications

| Driver | Target | Evidence Level | Mechanism |
|---|---|---|---|
| EGFR mut / ALK fusion | PTPN11/Shp2 (Y62) | Phosphoproteomics only | Y62 stabilizes active PTP conformation; SHP2 inhibitors in clinical trials |
| KRAS mut | SOS1 (S1161) | Phosphoproteomics | GEF activates KRAS; SOS1 inhibitors emerging |
| EGFR mut | PRKCD | Phosphoproteomics outlier | Druggable kinase outlier in EGFR context |
| KRAS mut | BRAF | Phosphoproteomics outlier | Druggable kinase outlier |
| EML4-ALK | WEE1 | Phosphoproteomics outlier | Druggable kinase outlier |
| STK11 mut | Neutrophil degranulation pathway | Proteomics | Potential immunotherapy target |
| HTE immune cluster | IDO1 | RNA + protein | Anti-IDO1 combination therapy |
| HTE immune cluster | CTLA4/FOXP3 T-regs | RNA | Anti-CTLA4 therapy |
| Never-smoker ALK | ARHGEF5 (Y1370) | Phosphoproteomics | Auto-inhibitory peptides; Rho GTPase hyperactivation |

## Related Papers

- [[sources/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — Full source note
- [[cancer/adua-2022-brain-metastatic-outgrowth-osimertinib-resistance]] — EGFR-driven LUAD resistance mechanisms
- [[cancer/dubbury-2018-cdk12-regulates-dna-repair-genes]] — Kinase-driven transcriptional regulation in cancer
- [[cancer/fassl-2022-cdk4-cdk6-kinases-basic-science]] — CDK-based cell cycle regulation relevant to C1 cluster biology
- [[cancer/ghelli-2020-wee1-family-business-regulation-mitosis]] — WEE1 kinase identified as outlier in EML4-ALK tumors
