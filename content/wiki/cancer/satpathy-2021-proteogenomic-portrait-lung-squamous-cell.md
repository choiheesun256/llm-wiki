---
title: "A proteogenomic portrait of lung squamous cell carcinoma"
authors: "Shankha Satpathy, Karsten Krug, Pierre M. Jean Beltran, et al. (Clinical Proteomic Tumor Analysis Consortium)"
year: 2021
doi: "10.1016/j.cell.2021.07.016"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/satpathy-2021-proteogenomic-portrait-lung-squamous-cell.pdf"
pdf_filename: "satpathy-2021-proteogenomic-portrait-lung-squamous-cell.pdf"
source_collection: "plus-batch-2026-05"
tags: [LSCC, lung-squamous-cell-carcinoma, proteogenomics, CPTAC, phosphoproteomics, ubiquitylomics, EMT, NRF2, CDK4-6, survivin, NSD3, FGFR1, SOX2, immune-landscape, multi-omics, cancer-subtypes, therapeutic-targets]
---

## Summary

Satpathy et al. (2021) present a comprehensive proteogenomic characterization of lung squamous cell carcinoma (LSCC) — a leading cause of cancer mortality with few effective targeted therapies — using 108 treatment-naive primary tumors and 99 paired normal adjacent tissues (NATs). The dataset integrates nine molecular data types: WGS, WES, DNA methylation, RNA-seq, miRNA-seq, and four mass spectrometry-based proteomics layers (global proteome, phosphoproteome, acetylproteome, ubiquitylome). Published in *Cell* 184:4348–4371 (August 5, 2021) as part of the CPTAC consortium.

The study provides a multi-dimensional view of LSCC biology — identifying disease subtypes, alternative driver events, immune landscape architecture, and putative therapeutic vulnerabilities — and represents the most comprehensive PTM-level characterization of LSCC to date.

## Key Contributions

### 1. Five LSCC Molecular Subtypes via Multi-Omic NMF Clustering

Non-negative matrix factorization (NMF) applied jointly to CNA, RNA, protein, phosphoprotein, and acetylprotein data from 108 tumors identified five molecular subtypes:

- **Basal-Inclusive (B-I)**: Basaloid histology; upregulated metabolic, immune, and estrogen receptor signaling; high PBX3 expression (invasion/proliferation regulator); neutrophil degranulation signature.
- **Classical**: Mutations in KEAP1, CUL3, NRF2E2L2; SOX2 high-level amplification; TP63 high; features consistent with prior TCGA-derived classical subtype. CIMP-high, upregulated OxPhos and proliferation.
- **EMT-Enriched (EMT-E)**: Upregulated EMT, angiogenesis, and myogenesis; myxoid histology; fibroblast infiltration; PDGFRB and ROR2 RTK activation (phosphoproteomics-derived CBPE scores). High xCell fibroblast scores; co-expression of CAF and tumor epithelium undergoing EMT.
- **Inflamed-Secretory (I-S)**: Strong upregulation of immune-related pathways; aligned with TCGA secretory cluster; fewest CT antigens.
- **Proliferative-Primitive (P-P)**: Upregulated proliferation pathways; downregulated immune signaling; CIMP-low enrichment; RAN K127 hyperacetylation.

Tumors with mixed subtype membership (NMF Mixed) showed significantly worse overall survival compared to NMF Core members (p = 0.0051), suggesting tumor heterogeneity as a prognostic factor.

### 2. NSD3, Not FGFR1, as the Oncogenic Driver in 8p11.23 Amplification

The FGFR1-containing amplicon at 8p11.23 is a recurrent focal amplification in LSCC. FGFR1-targeted therapies have consistently failed in clinical trials. Proteomics data revealed that NSD3 (WHSC1L1), encoded within the same amplicon, shows markedly higher protein overexpression than FGFR1 in high-level FGFR1-amplified tumors — nominating NSD3 as the critical driver oncogene in this amplicon. NSD3 has since been confirmed as a key regulator of LSCC tumorigenesis via chromatin modification.

### 3. Proteogenomic Dissection of the CDK4/6 Pathway

The CDK4/6 pathway is universally disrupted in LSCC. Key findings:
- CDKN2A loss (homozygous deletion, missense mutation, or promoter methylation) is near-universal; however, RB1 protein expression and phosphorylation levels are highly variable even within CDKN2A wild-type tumors.
- Only 8 of 58 CDKN2A wild-type tumors showed p16 protein levels comparable to tumors with CDKN2A/p16 missense mutations — many WT tumors had promoter hypermethylation or nonsense-mediated decay.
- CCND1 amplification resulted in higher average Rb phosphorylation, but distributions were overlapping, partially explaining heterogeneous CDK4/6 inhibitor responses seen in trials.
- Phospho-Rb levels correlated with CDK4/6 inhibitor response in LSCC cell lines, nominating Rb phosphorylation as a downstream functional biomarker for patient selection in CDK4/6 inhibitor trials.

### 4. Chromosome 3q Proteogenomics and Therapeutic Targets

Chromosome 3q — harboring SOX2 and TP63 — showed the most dramatic arm-level amplification in LSCC. Key findings:
- TP63-low tumors (n=10) showed no RNA/protein elevation of TP63 despite overall 3q amplification, and were the group most overexpressing **survivin (BIRC5)** — a therapeutic target being explored in NSCLC clinical trials. DepMap data confirmed survivin dependency in TP63-low LSCC cell lines.
- SOX2 is considered undruggable. An unbiased protein correlation search identified **LSD1 (KDM1A)**, **KDM3A**, and **EZH2** as significantly correlated with SOX2 protein expression — proposed as indirect therapeutic targets for SOX2-overexpressing tumors. LSD1 inhibition is being explored clinically in LSCC (NCT04350463).
- SOX2 protein expression was negatively correlated with JAK-STAT signaling (Pearson r = −0.46), suggesting immune evasion implications of SOX2 amplification.
- miR-205, overexpressed in LSCC, was significantly correlated with TP63 expression and negatively correlated with EMT activity — its high expression associated with decreased DNA methylation at its promoter.

### 5. Lysine Ubiquitylation and Acetylation Crosstalk in Metabolism

The first large-scale characterization of the LSCC ubiquitylome (K-GG di-glycine remnant proteomics):
- Two ubiquitylproteome clusters identified (ethnicity/country-correlated); glycolysis, JAK-STAT, MAPK, and immune signaling proteins differentially modified between clusters.
- **HERC5** (major ISG15 E3 ligase) identified as the top E3 ligase with numerous positively correlated K-GG sites on glycolytic enzymes PGK1, PKM, ENO1 — suggesting ISGylation of glycolytic enzymes as a link between immune signaling and metabolic regulation.
- CLUMPS-based 3D structural analysis revealed significant co-clustering of acetylation and ubiquitylation sites in 33 proteins and 17 proteins respectively (p < 0.05), including glycolytic and OxPhos pathway enzymes.
- Tumor vs. NAT: glycolytic enzymes (PGK1, PKM) showed reduced acetylation at inhibitory sites and increased K-GG ubiquitylation; TXN1 (thioredoxin) regulation in the NMF Classical subtype was modulated through both Ub and PTM crosstalk.

## Immune Landscape

xCell-based deconvolution and proteomics classified 108 tumors into four immune clusters:
- **Hot tumors**: Rich in macrophages, CD4+, CD8+, Treg, dendritic cells; upregulated CTLA4, PD-1/PD-L1, IDO1, FOXP3 — suggesting checkpoint blockade therapeutic opportunity; enriched for OxPhos/TCA acetylproteome.
- **Warm tumors**: Intermediate; PD-1 signaling, IFN-γ response, allograft rejection upregulated; no downregulation of cell cycle.
- **Cold tumors**: High cell cycle/proliferation; downregulated immune signaling.
- **NAT-enriched**: Clustered with normal adjacent tissue.

Key immunoproteogenomic findings:
- **RhoGDIb K135 acetylation**: The most significantly acetylated protein in Hot tumors; acetylation at K135 modulates RhoA/Rac2 GTPase signaling; IHC confirmed RhoGDIb in infiltrating immune and mesenchymal cells of Hot tumors — proposed as a regulatory mechanism of immune cell function.
- **CSF1R** showed the highest RTK-CBPE scores and was positively associated with the Hot immune cluster; correlated with CCL5, PIK3R1 pY580, and WAFS2 S103 — macrophage-related immune evasion signaling.
- 15 protein QTLs identified in proteins differentially abundant between Hot and Cold tumors (TRIM22, TAPBPL, HLA-A, LRPPRC).
- EGFR ligand abundance (TGFA, HBEGF, AREG, EPGN, BTC) — not EGFR amplification — correlated with EGFR pathway activity, suggesting EGFR ligand abundance as a better predictor of cetuximab response than amplification status.

## Related Papers

- **Gillette et al. 2020** — Proteogenomic characterization of breast cancer (CPTAC BRCA). *Cell* 183:1436–1456.e31.
- **Cao et al. 2021** — Proteogenomic characterization of pancreatic ductal adenocarcinoma. [[cao-2021-proteogenomic-characterization-pancreatic-ductal-adenocarcinoma]]
- **Dou et al. 2020** — Proteogenomic characterization of endometrial carcinoma. [[dou-2020-proteogenomic-characterization-endometrial-carcinoma]]
- **Chen et al. 2020** — Proteogenomics of non-smoking lung cancer in East Asia. [[chen-2020-proteogenomics-non-smoking-lung-cancer-east]]
- **Anurag et al. 2022** — Proteogenomic markers of chemotherapy resistance in TNBC. [[anurag-2022-proteogenomic-markers-chemotherapy-resistance-response]]
- **Fassl et al. 2022** — CDK4/CDK6 kinases: from basic science to cancer therapy. [[fassl-2022-cdk4-cdk6-kinases-basic-science]]
- **Hijazi et al. 2020** — Reconstructing kinase network topologies from phosphoproteomics. [[hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]]
- **Hammerman et al. 2012** — Comprehensive genomic characterization of LSCC. *Nature* 489:519–525.
- **Stewart et al. 2019** — CPTAC LSCC prior proteomics characterization. (baseline reference dataset)
