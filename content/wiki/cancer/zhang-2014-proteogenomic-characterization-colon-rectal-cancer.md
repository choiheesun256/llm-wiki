---
title: "Proteogenomic characterization of human colon and rectal cancer"
authors:
  - Bing Zhang
  - Jing Wang
  - Xiaojing Wang
  - Jing Zhu
  - Qi Liu
  - Zhiao Shi
  - Matthew C. Chambers
  - Lisa J. Zimmerman
  - Daniel C. Liebler
  - NCI CPTAC
year: 2014
doi: 10.1038/nature13438
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/zhang-2014-proteogenomic-characterization-colon-rectal-cancer.pdf
pdf_filename: zhang-2014-proteogenomic-characterization-colon-rectal-cancer.pdf
source_collection: plus-batch-2026-05
tags:
  - proteogenomics
  - colorectal-cancer
  - CRC
  - TCGA
  - CPTAC
  - mass-spectrometry
  - proteomics
  - copy-number-alteration
  - mRNA-protein-correlation
  - proteomic-subtypes
  - cancer-subtyping
  - HNF4A
  - EMT
  - cancer-driver-genes
---

## Summary

Zhang et al. (2014) present the first comprehensive proteogenomic characterization of the TCGA colorectal cancer (CRC) cohort, analyzing 95 tumor specimens by deep shotgun LC-MS/MS proteomics and integrating the results with genomic and transcriptomic data. The central finding is that mRNA abundance is an unreliable predictor of protein abundance: while steady-state mRNA and protein levels are positively correlated within individual samples (mean Spearman r = 0.47), only 32% of genes show statistically significant mRNA-protein variation correlation across tumors (mean r = 0.23). Copy number alterations (CNAs) exhibit strong cis-effects at the mRNA level but these effects are largely attenuated at the protein level, suggesting widespread post-transcriptional buffering. Using consensus clustering on 1,263 variably expressed proteins, the authors identify five proteomic subtypes with distinct genomic signatures and clinical outcomes — including a novel subtype C characterized by EMT activation and poor prognosis that is distinct from TCGA transcriptomic classification. The study also prioritizes candidate driver genes in the chromosome 20q amplicon — particularly HNF4A, TOMM34, and SRC — by leveraging the integrated proteomic and genomic data. Together, these results establish proteogenomics as a new paradigm for understanding cancer biology that complements and extends purely genomic analyses.

---

## Key Contributions

1. **Demonstrated mRNA-protein discordance in tumors**: Only 32% of gene pairs show statistically significant mRNA-protein variation correlation across CRC tumors (mean Spearman r = 0.23), establishing that mRNA measurements systematically misrepresent protein-level biology in human cancers.

2. **Quantified CNA post-transcriptional attenuation**: CNAs show strong cis-effects on mRNA abundance (diagonal pattern in CNA-mRNA correlation matrix) but markedly weaker cis-effects at the protein level; focal amplifications have stronger protein-level cis-effects than deletions, consistent with selection for high protein abundance in amplified regions.

3. **Identified five proteomic subtypes of CRC**: Consensus proteomic clustering yields five subtypes (A–E) that partially recapitulate TCGA transcriptomic subtypes but additionally capture a novel subtype C associated with EMT, stem-like phenotype, and poor prognosis — a biological distinction invisible to transcriptomics alone.

4. **Prioritized 20q amplicon driver candidates**: Proteomics highlighted HNF4A (hepatocyte nuclear factor 4 alpha), TOMM34 (translocase of outer mitochondrial membrane 34), and SRC (proto-oncogene non-receptor tyrosine kinase) as candidates with strong integrated CNA-mRNA-protein correlations, providing functional context for the most recurrently amplified chromosomal region in CRC.

5. **Detected and validated somatic variant proteins**: 796 SAAVs (single amino acid variants) identified across 86 tumors with matched RNA-seq; somatic variants significantly reduce protein abundance more than germline variants; 64 mapped to COSMIC somatic variants including in KRAS, CTNNB1, and other Cancer Gene Census genes.

6. **Established a reusable proteogenomic framework**: The integrated pipeline (LC-MS/MS, custom RNA-seq-derived FASTA databases, quantile-normalized spectral counts, consensus clustering, remMap trans-effect analysis) became a template for subsequent CPTAC studies across cancer types.

---

## Methodology and Architecture

### Study Design and Samples
- 95 TCGA CRC tumor samples (90 patients, 5 duplicates); 30 normal colon epithelium controls
- Samples obtained through TCGA Biospecimen Core Resource; no additional selection criteria beyond availability
- Patient-derived xenografts (basal WHIM2, luminal WHIM16) used as quality control inter-run standards

### Proteomics Pipeline
- **Digestion**: TFE/trypsin on frozen tissue
- **Fractionation**: Off-line basic reverse-phase LC (bRPLC), 15 concatenated fractions
- **MS instrument**: Thermo LTQ Orbitrap Velos; full MS at 60,000 resolution, data-dependent MS/MS on linear ion trap quadrupole
- **Database search**: Three engines — Myrimatch, Pepitome, MS-GF+ — against RefSeq human (release 54) plus custom RNA-seq-derived FASTA databases per sample
- **Protein assembly**: IDPicker 3 (idpDB); protein-level FDR 2.64% for 7,526 protein groups / 7,211 genes
- **Quantification**: Spectral counts, quantile normalized; 3,899 genes at 0.43% protein FDR for relative abundance comparisons

### Variant Peptide Identification
- Per-sample customized FASTA databases from RNA-seq BAM files (samtools/varFilter); SNVs and short indels
- SAAVs annotated against dbSNP135, COSMIC64, TCGA somatic MAF files
- PRM validation on Q-Exactive for selected SAAVs (KRAS Gly12Asp confirmed in TCGA-AA-3818)

### Genomic Data Integration
- CNA: GISTIC2 output from Affymetrix SNP Array 6.0 (23,125 genes, 575 samples normalized to have mean 0, SD 1)
- RNA-seq: RSEM normalization (preferred over FPKM due to gene-length independence); 87 matched samples
- Spearman correlation for CNA-mRNA and CNA-protein associations; Benjamini-Hochberg multi-test correction (adjusted P < 0.01)
- remMap regularized multivariate regression for trans-effect identification (two-dimensional grid search, 5-fold CV)

### Proteomic Subtyping
- Input: 1,263 proteins (expressed in ≥95% of 90 samples, MAD > 0.5)
- Consensus clustering (GenePattern): hierarchical, 1-Pearson distance, average linkage; k=2–8; 1,000 runs; 80% resampling
- k=7 as empirical optimum by CDF; biologically interpretable k=5 chosen (five clusters with >5 samples)
- Core samples identified by positive silhouette width; 79 core samples; leave-one-out CV error rate 3.8%
- Signature proteins per subtype: supervised Wilcoxon rank-sum (vs. all other subtypes AND vs. normal colon); Benjamini-Hochberg P < 0.05

### Association and Enrichment Analysis
- Subtype-genomic feature associations: Fisher's exact test (hypermutation, MSI, POLE, BRAF, KRAS, TP53, 18q loss, methylation subtype)
- GO enrichment: WebGestalt, Fisher's exact test, adjusted P < 0.05
- Network analysis: NetGestalt with iRef protein-protein interaction network, NetSAM hierarchical module identification

---

## Results

### mRNA-Protein Correlation
| Analysis | Result |
|---|---|
| Sample-level steady-state correlation | 100% positive; mean Spearman r = 0.47 |
| Gene-level variation correlation (across tumors) | 89.4% positive; only 32% significant (mean r = 0.23) |
| KEGG pathways with high correlation | Arginine/proline metabolism, butanoate metabolism, fatty acid metabolism |
| KEGG pathways with low/negative correlation | Ribosome, oxidative phosphorylation, spliceosome, RNA splicing |
| Molecular stability effect | Stable mRNA-stable protein genes have highest correlation (P = 5.27 × 10^-6, Wilcoxon) |

### CNA Effects on mRNA and Protein
- Focal amplifications: strongest cis-effects on both mRNA and protein among all CNA types
- Focal deletions: no stronger cis-effect than non-focal regions at protein level
- Trans-acting hot spots on chromosomes 20q, 18, 16, 13, 7; most hot spot mRNA changes do NOT propagate to protein
- 20q amplicon: 85% of genes show significant CNA-mRNA correlation; only 51% show significant CNA-protein correlation

### Somatic Variant Peptides
- 796 total SAAVs: 526 dbSNP-supported (germline-likely), 75 COSMIC-supported, 7 TCGA-somatic, 162 novel
- Somatic variants enriched in MSI-high/hypermutated samples (P < 2.2 × 10^-16)
- Impact on protein abundance: somatic variants negative impact significantly stronger than germline (Kolmogorov-Smirnov P < 2.2 × 10^-16; Chi-squared P < 2.2 × 10^-16)
- 108 somatic/COSMIC proteins map to Cancer Gene Census genes including KRAS, CTNNB1, SF3B1, ALDH2, FH, plus 14 FDA-approved drug targets

### Five Proteomic Subtypes
| Subtype | n | Genomic features | Key biology |
|---|---|---|---|
| A | 15 | CIN | — |
| B | 9 | MSI-high, CIMP-high, POLE mutations, BRAF mutations | Better prognosis; no TP53 mutations or 18q loss; overlaps TCGA MSI/CIMP + CCS2 |
| C | 26 | Non-CIMP (cluster 4 methylation); Stage II enriched | EMT activation; poor prognosis; stem-like/CCS3; E-cadherin most under-expressed; wound-response signature |
| D | 11 | CIN | — |
| E | 22 | CIN; TP53 mutations; 18q loss; HNF4A amplification | Higher HNF4A protein (P = 1.09 × 10^-8 vs. normal colon) |

- Subtype C: four enriched protein-protein network modules; down-signature includes E-cadherin (CDH1)-β-catenin complex, desmosomal proteins (PKP2, JUP, DSG2), cytokeratins (KRT18, KRT6A, KRT8); up-signature includes collagens (COL1A1, COL3A1), fibronectin (FN1), BGN, FBN1, FBN2 (EMT markers)
- Subtype C wound-response gene signature validated as strong predictor of poor outcome in early-stage breast cancer

### 20q Amplicon Candidate Drivers
- **HNF4A**: transcription factor at 20q13.12; significant CNA-mRNA-protein correlations; shRNA knockdown shows stronger negative impact on CRC proliferation when HNF4A is amplified; contradictory oncogene/tumor suppressor reports resolved by isoform and amplification context
- **TOMM34**: mitochondrial outer membrane translocase; frequently overexpressed in majority of human cancers; involved in CRC cell growth
- **SRC**: non-receptor tyrosine kinase at 20q11-12; implicated in activating mutations in advanced colon cancer

---

## Related Papers

- [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — CPTAC breast cancer proteogenomics using the same LC-MS/MS + spectral counting framework
- [[cao-2021-proteogenomic-characterization-pancreatic-ductal-adenocarcinoma]] — Subsequent CPTAC proteogenomic study applying similar methods to pancreatic cancer
- [[dou-2020-proteogenomic-characterization-endometrial-carcinoma]] — CPTAC proteogenomics of endometrial carcinoma
- [[chen-2019-pan-cancer-molecular-subtypes-proteomic-characterization]] — Pan-cancer proteomics extending the single-cancer proteomic subtyping approach
- [[clark-2019-integrated-proteogenomic-characterization-clear-cell]] — CPTAC clear cell renal cell carcinoma proteogenomics
- [[anurag-2022-proteogenomic-markers-chemotherapy-resistance-response]] — Clinical proteogenomics for treatment response prediction
- [[chakraborty-2024-pan-cancer-proteogenomics-vulnerabilities-opportunities]] — Review of pan-cancer proteogenomic insights and therapeutic opportunities
- [[chong-2020-integrated-proteogenomic-deep-sequencing-analytics]] — Integrated proteogenomic analytics methodology
- [[hanahan-2022-hallmarks-cancer-new-dimensions]] — Conceptual framework for cancer hallmarks including proteome-level considerations
