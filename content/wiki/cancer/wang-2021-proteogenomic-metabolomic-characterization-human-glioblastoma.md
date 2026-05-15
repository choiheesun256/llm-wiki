---
title: "Proteogenomic and metabolomic characterization of human glioblastoma"
authors:
  - Liang-Bo Wang
  - Alla Karpova
  - Marina A. Gritsenko
  - Tao Liu
  - Li Ding
  - Clinical Proteomic Tumor Analysis Consortium
year: 2021
doi: "10.1016/j.ccell.2021.01.006"
journal: "Cancer Cell"
volume: 39
pages: "509–528"
category: cancer
pdf_path: "llm-wiki/papers/plus/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma.pdf"
pdf_filename: "wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - glioblastoma
  - GBM
  - proteogenomics
  - multi-omics
  - metabolomics
  - lipidomics
  - phosphoproteomics
  - snRNA-seq
  - CPTAC
  - tumor-microenvironment
  - EMT
  - histone-acetylation
  - RTK-signaling
  - IDH-mutation
  - immune-subtypes
  - cancer
---

# Proteogenomic and metabolomic characterization of human glioblastoma

Wang et al. (2021), *Cancer Cell* 39: 509–528. DOI: [10.1016/j.ccell.2021.01.006](https://doi.org/10.1016/j.ccell.2021.01.006)

---

## Summary

Glioblastoma (GBM) is the most aggressive primary brain cancer. Despite decades of genomic and transcriptomic profiling, most patients still receive standard-of-care treatment with minimal personalization. This CPTAC study performed the first comprehensive proteogenomic and metabolomic characterization of 99 treatment-naive adult GBMs using 10 multi-omics platforms, including WGS, WES, RNA-seq, miRNA-seq, single-nuclei RNA-seq (snRNA-seq), DNA methylation arrays, proteome, phosphoproteome, acetylome, and lipidome/metabolome.

Multi-omics NMF clustering identified three molecular subtypes — nmf1 (proneural-like), nmf2 (mesenchymal-like), and nmf3 (classical-like) — that align with TCGA expression subtypes but additionally stratify tumors by immune cell composition, epigenetic state, and metabolic phenotype. A key finding is that phosphorylated PTPN11 and PLCG1 constitute a convergent signaling hub downstream of multiple RTKs (EGFR, PDGFRA), providing a potential single bottleneck for therapeutic intervention in RTK-altered GBM. Four immune subtypes (im1–im4) were discovered using xCell-based immune enrichment scoring and validated by snRNA-seq and protein deconvolution. The mesenchymal EMT signature was resolved to be tumor-cell-intrinsic rather than entirely stroma-driven. Histone H2B hyperacetylation in classical-like GBMs is linked to BRD proteins CREBBP and EP300. Lipidomic analyses reveal mesenchymal-like tumors are enriched in ferroptosis-related lipid species, while IDH-mutant tumors display a distinct metabolic fingerprint centered on 2-HG accumulation and altered TCA cycle activity.

---

## Key Contributions

- **PTPN11/PLCG1 phosphosignaling hub**: Phosphorylated PTPN11 (Y62) and PLCG1 (Y783) act as convergent downstream effectors for both EGFR- and PDGFRA-driven RTK signaling, representing potential therapeutic bottlenecks in the 46–86% of GBMs with RTK alterations.

- **Four immune GBM subtypes**: im1 (high macrophage/microglia, mesenchymal-enriched), im2 (intermediate macrophages), im3 (T-cell/NK-high, IDH-mutant-enriched), and im4 (immune-low, neuronal/cell cycle features). These subtypes have distinct immune checkpoint expression profiles and potential immunotherapy implications.

- **Tumor-intrinsic EMT in mesenchymal GBM**: snRNA-seq demonstrated that EMT-related genes (TNC, ITGA3, PDPN, MET) are upregulated specifically in tumor cells of nmf2 samples — not solely attributable to infiltrating immune cells or stroma — resolving a longstanding controversy about the origin of mesenchymal GBM signatures.

- **H2B acetylation and immune exclusion**: Histone H2B hyperacetylation in classical-like (nmf3), immune-low GBMs is driven by BRD proteins CREBBP and EP300 and negatively correlates with immune infiltration. This identifies a potential epigenetic mechanism underlying immune-cold tumors.

- **Metabolic and lipidomic subtypes**: Mesenchymal-like GBMs show upregulation of ferroptosis pathway enzymes (ACSL4, ALOX5) and elevated triacylglycerols; proneural-like GBMs are enriched in VLCFAs; IDH-mutant GBMs are marked by 2-HG accumulation and GLUD1 upregulation, linking altered TCA cycle to druggable metabolic vulnerabilities.

- **Drug connectivity mapping**: Integration of CLUE (L1000) and iLINCS (P100) with phosphoproteomic signatures from EGFR- and NF1-altered tumors identifies subtype-specific candidate compounds, with phosphoproteomics providing more actionable drug predictions than transcriptomics alone.

---

## Methodology and Architecture

### Cohort and Platforms

99 treatment-naive adult GBMs from CPTAC-3 (prospective, multi-site collection) plus 10 GTEx frontal cortex normal brain samples. 10 data modalities per sample where available:

| Layer | Platform |
|---|---|
| Genome | WGS (PCR-free), WES |
| Epigenome | Illumina MethylationEPIC array |
| Transcriptome | RNA-seq, miRNA-seq |
| Single-cell | snRNA-seq (10x Chromium, n=18) |
| Proteome | Proteome, phosphoproteome, acetylome (MS/TMT-11) |
| Metabolome | Lipidome (582 lipids, GC/LC-MS), polar metabolites (LC-MS) |

### Multi-omics Clustering

NMF applied to CNV, RNA, protein, and phosphoprotein abundance matrices. Three subtypes identified (nmf1/2/3), corresponding to proneural-like, mesenchymal-like, and classical-like expression profiles. 12 "mixed subtype" samples with high membership in ≥2 clusters had significantly worse prognosis (log-rank p=0.035). DNA methylation identified 6 subtypes (dm1–dm6); dm6 is IDH-mutant-specific.

### Immune Subtyping

xCell cell-type immune enrichment scores from bulk RNA and protein data → consensus clustering → 4 immune subtypes (im1–im4). Validated independently by CIBERSORTx protein deconvolution and snRNA-seq UMAP clustering across 18 samples. Four immune subtypes confirmed in TCGA GBM cohort by transcriptome data.

### Phosphoproteomic and Signaling Analysis

TMT-11 labeled peptides; phosphopeptide enrichment by IMAC (Fe3+-NTA beads); kinase-substrate mapping via NetworKIN, DEPOD, OmniPath, and Reactome. CausalPath for causal network inference. Drug repurposing: CLUE (L1000 transcriptional) and iLINCS (P100 phosphoproteomic) connectivity to identify compounds reversing or enhancing GBM-subtype signatures.

### snRNA-seq

18 GBM samples (cryopulverized material); nuclei isolated → 10x Chromium platform; Seurat v3.1.2 for clustering; cell types identified: TAMs, T-cells, B-cells/Plasma, OPCs, neurons, endothelial cells, pericytes, vSMCs, oligodendrocytes. EMT gene expression compared across all cell types and specifically in tumor cells.

---

## Results

### Mutation Landscape and Proteogenomic Effects

Common alterations: EGFR (46%), PTEN (51%), TP53 (32%), NF1 (23%), PDGFRA (15%), PIK3CA (14%), RB1 (12%), ATRX (10%), TERT promoter (74%). Proteogenomics revealed 95 cis-trans phosphorylation events for EGFR and PDGFRA. Key findings:

- **EGFR SV tumors**: elevated CTNNB2 (β-catenin) protein despite decreased mRNA; upregulated PTPN11-Y62 and PLCG1-Y783 phosphorylation; PTPN11 forms a signaling hub with GAB1 and GRB2 to activate RAS.
- **TP53 mutants**: upregulated phosphorylation of DNA repair genes (ATM, COP2S2, MLH1, PRKDC, TRRAP) without increased protein levels — specific phospho-regulation; also elevated MAPK3, CDK2, CDK9 proteins.
- **RB1-altered**: downregulated RB1 → upregulated MCM2/MCM4/MCM6, CDK2, CDK6 (cell proliferation axis).
- **NF1-altered**: upregulated IRF8 (microglial motility transcription factor).
- **ATRX-altered**: significantly diminished ATRX RNA and protein; mutually exclusive with TERT promoter mutations; ATRX complex partners unaffected at RNA/protein level.

### Four Immune Subtypes

| Subtype | Immune profile | Enriched pathways | Notable associations |
|---|---|---|---|
| im1 | High macrophage, high T-cells | Microglia phagocytosis, innate immunity | Mesenchymal nmf2; high PD-1/PD-L1 |
| im2 | Medium macrophages, low T-cells | Collagen formation, carbohydrate metabolism, ECM | Mesenchymal nmf2 |
| im3 | High T-cells, high NK cells | Neuronal system, chemical synapses | IDH-mutant enriched (p=1.02e-5) |
| im4 | Low all immune cells | Mitotic cell cycle, neuronal/neurotransmitter features | Immune-cold; high H2B acetylation |

TAMs comprised the major non-neoplastic cell population in the GBM TME across all samples. im4 showed substantially lower T-cell and TAM infiltration (average 1.3% and 6% vs 7% and 19% in other subtypes by snRNA-seq).

### EMT in Mesenchymal Subtype

CausalPath confirmed hypoxia pathway upregulation (multiple HIF-1 downstream targets, network permutation p=0.0012) and elevated angiogenesis markers (FLT1, MMP14, ENG, SERPINE1) in nmf2. snRNA-seq revealed MET and TNC with highest expression in tumor cells; all EMT-related genes significantly elevated in bulk RNA and protein in nmf2 GBMs. Conclusion: mesenchymal GBM EMT is a tumor-cell property, amplified but not caused by immune infiltration.

### Histone Acetylation

Over 30 acetylation sites detected on H1, H2A, H2B, H3.3, H4. H2B N-terminal hyperacetylation cluster enriched in nmf3/classical-like, im4/immune-low tumors. Lasso regression: CREBBP and EP300 strongly associated with multiple H2B sites (H2B-K12/K13/K16/K17/K21/K24). H2B acetylation negatively correlates with TME immune enrichment; high-H2B-acetylation samples upregulate SUMO1 and UBE2I (SUMOylation pathway), with UBE2I stabilizing CDK6.

### Lipidome and Metabolome

- nmf2 (mesenchymal-like): elevated TGs, elevated ACSL4 (arachidonate CoA synthetase) and ALOX5 (5-lipoxygenase) → increased oxidized PE species → ferroptosis vulnerability; depleted PCs and PEs
- nmf1 (proneural-like): enriched in VLCFAs and glycerophospholipids with long-chain LC; elevated ACSL6 (DHA-incorporating enzyme); elevated creatinine and homocysteine; reduced L-cysteine and palatinol
- IDH-mutant: 2-HG most highly abundant metabolite (median log2FC=3.62); reduced glutamate, serine; elevated GLUD1 (confirmed in validation cohort); altered glycolytic intermediates consistent with IDH1-catalyzed 2-HG production
- DG (diacylglycerol) levels correlate significantly with AKT1, PLCD3, PLCG1 protein expression, connecting lipidomics to PI3K/PKC signaling

### Therapeutic Target Mapping

Three key oncogenic pathways altered in GBM:
- RTK/RAS: 86–92% of samples
- PI3K: 63–48%
- p53/Cell cycle: 90–66%

GSK3B phosphorylation positively associated with phosphorylation of downstream mTOR (RPTOR, TSC1) and Wnt (CTNNB1, APC) pathway substrates. EGFR-altered phosphoproteomic signatures predicted kinase inhibitors (beyond EGFR itself) and HDAC inhibitors as top candidates via iLINCS; NF1-altered tumors showed concordance between transcriptomics and phosphoproteomics in nominating MAPK inhibitors.

---

## Related Papers

- [[brennan-2013-somatic-genomic-landscape-glioblastoma]] — TCGA GBM genomic landscape; foundational expression subtypes used for comparison
- [[verhaak-2010-integrated-genomic-analysis-glioblastoma]] — Original GBM molecular subtype definition (Proneural, Classical, Mesenchymal, Neural) based on PDGFRA/IDH1, EGFR, NF1 abnormalities
- [[wang-2017-tumor-evolution-glioma-intrinsic-expression-subtypes]] — GBM subtype evolution and immunological changes in TME
- [[dou-2020-proteogenomic-characterization-endometrial-carcinoma]] — CPTAC predecessor study; acetylome/phosphoproteome methodology reference
- [[vasaikar-2019-proteogenomic-analysis-colon-cancer]] — CPTAC colon cancer; multi-omics integration framework
- [[mertins-2016-proteogenomics-connects-somatic-mutations-breast-cancer]] — CPTAC breast cancer; original proteogenomic approach
- [[hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]] — Kinase-substrate network analysis methodology relevant to RTK signaling hub discovery
- [[jiang-2025-dark-cancer-phosphoproteome-coregulation]] — Phosphoproteome co-regulation in cancer; related to phosphosignaling hub concepts
