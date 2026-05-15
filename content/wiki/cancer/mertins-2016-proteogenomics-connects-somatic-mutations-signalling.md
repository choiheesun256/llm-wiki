---
title: "Proteogenomics connects somatic mutations to signalling in breast cancer"
authors: "Philipp Mertins, D. R. Mani, Kelly V. Ruggles, Michael A. Gillette, Karl R. Clauser, Pei Wang, Xianlong Wang, Jana W. Qiao, Song Cao, Francesca Petralia, Emily Kawaler, Filip Mundt, Karsten Krug, Zhidong Tu, Jonathan T. Lei, Michael L. Gatza, Matthew Wilkerson, Charles M. Perou, Venkata Yellapantula, Kuan-lin Huang, Chenwei Lin, Michael D. McLellan, Ping Yan, Sherri R. Davies, R. Reid Townsend, Steven J. Skates, Jing Wang, Bing Zhang, Christopher R. Kinsinger, Mehdi Mesri, Henry Rodriguez, Li Ding, Amanda G. Paulovich, David Fenyo, Matthew J. Ellis, Steven A. Carr & the NCI CPTAC"
year: 2016
doi: "10.1038/nature18003"
source: "mertins-2016-proteogenomics-connects-somatic-mutations-signalling.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/mertins-2016-proteogenomics-connects-somatic-mutations-signalling.pdf"
pdf_filename: "mertins-2016-proteogenomics-connects-somatic-mutations-signalling.pdf"
source_collection: "plus-batch-2026-05"
tags: [proteogenomics, breast-cancer, phosphoproteomics, mass-spectrometry, TCGA, CPTAC, copy-number-alterations, somatic-mutations, kinase, ERBB2, PIK3CA, TP53, CDK12, PAK1, iTRAQ]
---

## Summary

Quantitative mass-spectrometry-based proteomics and phosphoproteomics of 77 TCGA-annotated breast tumours (105 analysed; 77 passing QC) reveals how somatic genomic alterations propagate — and are buffered — across the mRNA, protein, and phosphoprotein layers. Copy number alteration (CNA) cis-effects are far more prevalent at the mRNA level than at the protein level (64% vs. 31% of CNA-mRNA and CNA-protein pairs respectively), while trans-effects are even more strongly buffered (68% at mRNA, 13% at protein). Interrogation of the 5q deletion — characteristic of basal-like breast cancer — against the LINCS functional knockdown database nominates CETN3 and SKP1 as trans-regulators driving elevated EGFR expression and SRC activation. Phosphoproteome profiling identifies mutation-specific kinase signatures for PIK3CA (RPS6KA5, EIF2AK4) and TP53 (CHEK2, MAST1, EEF2K). A proteome-level stromal subtype is discovered that is invisible to PAM50 mRNA classification. Beyond ERBB2, CDK12, TLK2, PAK1, and RIPK2 are identified as co-amplification-driven, therapeutically actionable kinases. This work establishes a high-quality proteogenomic resource for human breast cancer and demonstrates that protein-level data is essential for understanding the functional consequences of genomic alterations.

## Key Contributions

- Quantitative proteogenomic characterisation of 77 TCGA breast tumours: 12,553 proteins and 33,239 phosphosites identified; somatic variant peptides and novel splice junctions detected directly at the protein level
- Demonstrates genome-to-proteome buffering: CNA trans-effects are frequent at mRNA (68%) but rare at protein (13%) and phosphoprotein (8%) levels, revealing widespread post-transcriptional regulatory compensation
- Identifies CETN3 and SKP1 as candidate trans-regulators of the 5q deletion phenotype in basal-like breast cancer, with SKP1 loss functionally connected to elevated EGFR expression and SRC tyrosine kinase activity via the SCF ubiquitin ligase complex
- Defines phosphosite signatures specific to PIK3CA and TP53 mutations, allowing functional classification of tumours by pathway activity independent of mutation status; identifies novel kinase substrates downstream of each
- Discovers a stromal-enriched proteomic subtype and a novel GPCR/inositol phosphate signalling phosphoproteome cluster absent from mRNA-based classification — illustrating protein-layer information gain over transcriptomics alone
- Nomitates CDK12, PAK1, TLK2, and RIPK2 as amplicon-driven actionable kinases co-activated with ERBB2, supported by concordant CNA, mRNA, protein, and phosphosite outlier evidence across tumour subtypes

## Methodology and Architecture

- **Cohort**: 105 TCGA breast tumours (balanced PAM50: 25 basal, 29 luminal A, 33 luminal B, 18 HER2-enriched; 3 normals); 77 passed proteomic QC after exclusion of degraded samples
- **Quantitative MS**: iTRAQ 4-plex labelling; 37 LC-MS/MS experiments each with 3 tumours + 1 shared internal reference (pool of 40 tumours); high-resolution Orbitrap; IMAC phosphopeptide enrichment; data in Spectrum Mill
- **Proteogenomic databases**: Patient-specific protein sequence databases built from WES + RNA-seq data using QUILTS; enables detection of somatic variant peptides and novel splice junction peptides
- **CNA analysis**: Univariate Pearson correlation for 7,776 CNA genes against all mRNA-protein pairs; Benjamini-Hochberg FDR < 0.05; LINCS CMap connectivity score ≥ 90 to assign functional trans-effect candidates
- **Proteome clustering**: K-means consensus clustering (k=3 optimal) on 1,521 proteins with no missing values and s.d. > 1.5 across 1,000 resampled datasets; k=3 yields basal-enriched, luminal-enriched, stromal-enriched subtypes
- **Phosphoproteome subtypes**: ssGSEA on 908 pathways per sample; K-means consensus clustering on pathway activity scores; 4 robust clusters identified
- **Outlier kinase pipeline**: Kinases flagged at ≥1.5 IQR above median expression; pircos (proteogenomic circos) plots map CNA, mRNA, protein, and phosphosite outlier expression to genome; subtype-specific enrichment by Benjamini-Hochberg-adjusted binomial test

## Results

- **Proteome depth**: 12,553 proteins (10,062 genes), 33,239 phosphosites; 11,632 proteins and 26,310 phosphosites on average per tumour; 12,405 gene products across 37 experiments
- **Somatic variants at protein level**: 3,709 variant peptides (4.1% of somatic variants confirmed); 672 novel proteome-level splice junctions (0.28% of 238,646 RNA junctions)
- **CNA buffering**: 64% cis-effects at mRNA vs. 31% at protein; only 13% of trans-effects at mRNA propagate to protein — protein level filters genomic noise more strongly than mRNA
- **5q trans-effects in basal-like cancer**: GATA3 amplification (10q) anti-correlates with RNA and protein; GFPT2 and HK3 (hexosamine/glycolysis pathway) upregulated by 5q loss; CETN3 and SKP1 nominated as regulatory trans-drivers of EGFR and SRC upregulation via LINCS
- **PIK3CA phosphosignature**: 62 upregulated phosphosites in PIK3CA-mutated tumours; 58% of PIK3CA-mutated tumours activate the signature; helical-domain mutations but not kinase-domain mutations activate the signature; RPS6KA5 and EIF2AK4 identified as downstream kinases
- **TP53 phosphosignature**: 56 upregulated phosphosites; 54% of TP53-mutant tumours show upregulated signature; CHEK2, MAST1, EEF2K identified as significantly upregulated; R273H DNA-binding domain mutations show strongest signature
- **Proteome subtypes**: Basal-enriched (MYC, cell cycle, ATM/ATR/BRCA pathways), luminal-enriched (oestrogen receptor/ESR1 genes), stromal-enriched (normal-like adipocyte, smooth muscle, endothelium markers); stromal subtype has significantly higher stromal score
- **Phosphoproteome subtypes**: Subgroup 1 (novel GPCR/G-protein/inositol phosphate cluster); Subgroups 2/3 (stromal/luminal); Subgroup 4 (cell cycle/checkpoint-high, mostly basal + TP53-mutant non-basal tumours; CDK1 as top connected kinase)
- **CDK12**: Consistently co-amplified with ERBB2 on 17q; upregulated at RNA, protein, and phosphosite levels in ERBB2-amplified tumours; positive transcriptional regulator of HR repair genes; highest centrality among outlier CDKs in phosphoproteome network
- **PAK1**: Highly phosphorylated in PAK1-amplified (11q) tumours; co-expressed with CLNS1A, RFS1, GAB2; confirmed breast cancer driver kinase; poor prognosis factor in luminal breast cancer
- **Novel HER2-enriched kinase**: CDC42BPG (MRGK-gamma; RHO-family GTPase effector) identified at 5% FDR; basal-like kinases PRKDC and SPEG identified at 5% FDR

## Related Papers

- [[cancer/dubbury-2018-cdk12-regulates-dna-repair-genes]] — CDK12 function in DNA repair gene regulation; HR deficiency mechanism
- [[cancer/fassl-2022-cdk4-cdk6-kinases-basic-science]] — CDK kinase biology in breast cancer context
- [[cancer/ghelli-2020-wee1-family-business-regulation-mitosis]] — kinase regulation and cell cycle checkpoint in cancer
- [[cancer/chauquet-2026-twas-signature-matching-for-drug]] — TCGA-based multi-omics integration for drug target identification
- [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]] — tumour microenvironment and stromal subtype biology
