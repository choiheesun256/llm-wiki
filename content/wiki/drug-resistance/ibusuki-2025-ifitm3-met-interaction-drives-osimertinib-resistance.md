---
title: "IFITM3-MET interaction drives osimertinib resistance through AKT pathway activation in EGFR-mutant non-small cell lung cancer"
authors:
  - Ritsu Ibusuki
  - Eiji Iwama
  - Atsushi Shimauchi
  - Hiromu Kawano
  - Shun Mizusaki
  - Isamu Okamoto
year: 2025
doi: 10.1186/s12943-025-02493-6
category: drug-resistance
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance.pdf"
pdf_filename: "ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - IFITM3
  - osimertinib
  - EGFR-TKI
  - drug-resistance
  - NSCLC
  - MET
  - AKT
  - PI3K
  - tumor-microenvironment
  - lung-cancer
  - spatial-transcriptomics
  - nongenetic-resistance
---

## Summary

This study identifies IFITM3 (interferon-induced transmembrane protein 3) as a previously unrecognized, nongenetic driver of acquired osimertinib resistance in EGFR-mutant non-small cell lung cancer (NSCLC). Through transcriptomics analysis of 127 clinical specimens, IFITM3 emerged as the only significantly upregulated gene in patients with poor osimertinib response. Mechanistically, IFITM3 physically interacts with the receptor tyrosine kinase MET — facilitated by lipid rafts — to activate the PI3K-AKT signaling pathway and maintain tumor cell survival despite EGFR inhibition. IFITM3 expression in tumor cells is driven by inflammatory cytokines (TNF-α, IL-6, IFN-γ) released from the tumor microenvironment (TME) and, in a feed-forward loop, from tumor cells themselves in response to osimertinib. Combined inhibition of EGFR (osimertinib) and MET (capmatinib) suppresses IFITM3-mediated resistance in a mouse xenograft model. The findings suggest that targeting the IFITM3-MET axis is a clinically actionable strategy, particularly given the already-approved bispecific EGFR/MET antibody amivantamab.

## Key Contributions

1. **Novel nongenetic resistance gene**: IFITM3 is identified as the sole gene significantly upregulated (out of >19,000) in short-PFS vs. long-PFS EGFR-mutant NSCLC patients receiving first-line osimertinib; this addresses the ~50% of resistance cases without known genetic alterations.
2. **Clinical prognostic biomarker**: IHC validation in 95 pretreatment specimens confirms IFITM3 positivity (>10% tumor cells) as a significant predictor of shorter PFS on osimertinib (HR 1.87; P=0.013).
3. **IFITM3-MET protein interaction**: Co-immunoprecipitation, LC-MS/MS proteomics, and proximity ligation assay demonstrate a direct physical interaction between IFITM3 and MET in EGFR-mutant NSCLC cells.
4. **TME cytokine circuit**: Spatial transcriptomics reveals that cytokines (TNF-α, IL-6, IFN-γ) secreted by TME cells — elevated after osimertinib treatment — drive IFITM3 upregulation in tumor cells, establishing a TME-mediated resistance loop not detectable by genomic sequencing.
5. **Therapeutic strategy validated in vivo**: Osimertinib + capmatinib (MET inhibitor) combination effectively suppresses IFITM3-driven resistance in xenograft models, supporting combinatorial clinical strategies.

## Methodology and Architecture

### Study Design and Cohorts

- **Overall cohort**: 127 EGFR mutation-positive NSCLC patients, first-line osimertinib, 8 institutions, Jan 2016 – Apr 2023
- **Discovery cohort** (n=32): RNA-seq on FFPE tumor sections; short PFS (n=10, <12 months) vs. long PFS (n=22, >20 months)
- **Validation cohort** (n=95): IHC for IFITM3 protein expression; 10% tumor cell positivity used as optimal cutoff (AICc/BIC model selection)
- **Post-treatment cohort**: 18 additional patients who developed osimertinib resistance, subjected to IHC

### Spatial Transcriptomics

- Platform: 10X Genomics Visium HD; 8 FFPE specimens from 2 patients (pre/post osimertinib paired)
- Analysis: Scanpy pipeline; Harmony batch correction; Leiden clustering; cell types (tumor, T cell, macrophage, fibroblast, B cell, etc.) annotated by known marker genes; inferCNVpy to distinguish tumor from normal epithelial cells
- Key finding: IFITM3 expression heterogeneous within tumors; highest in tumor cell cluster; markedly elevated post-osimertinib in the short-PFS patient; cytokine genes (TNF, IL-6, IFN-γ) elevated in TME cells post-treatment

### In Vitro Mechanistic Dissection

- **Cell lines**: PC-9 and H1975 (EGFR driver mutations) as primary models; 5 EGFR-mutant and 5 EGFR-WT lines tested
- **Perturbations**: siRNA knockdown (transient), shRNA knockdown (stable lentiviral), retroviral overexpression (pQCXIP-IFITM3 and pQCXIP-Flag-IFITM3)
- **Resistance induction assay**: Gradual escalation of osimertinib from 10 nM to 1 µM over 30 days
- **Proteomics**: Co-IP with anti-IFITM3 or anti-Flag antibodies followed by LC-MS/MS (Orbitrap Exploris 240); 97 proteins shared between PC-9 and H1975 as candidate IFITM3 partners; MET identified as the only PI3K-AKT-associated membrane protein in the shared set
- **PLA**: In situ detection of IFITM3-MET complexes; significantly increased in IFITM3-overexpressing cells
- **Lipid raft disruption**: MβCD treatment reversed IFITM3-induced MET phosphorylation
- **Pharmacological rescue**: Capmatinib (MET inhibitor) and MK-2206 (AKT inhibitor) restored osimertinib sensitivity in IFITM3-overexpressing cells

### In Vivo Model

- Athymic nude mice; subcutaneous PC-9/EV vs. PC-9/IFITM3 xenografts
- Treatment: osimertinib (2.5 mg/kg p.o.) ± capmatinib (5.0 mg/kg p.o.) once daily for 28 days (n=5/group)
- No significant toxicity (no ≥10% body weight loss)

## Results

### Clinical Findings

- IFITM3 is the only gene significantly upregulated in short-PFS vs. long-PFS patients among >19,000 genes analyzed by RNA-seq
- IFITM3-high tumors associated with non-responder status (SD or PD) vs. complete/partial response
- IHC validation (n=95): IFITM3-positive tumors have median PFS 18.4 vs. 24.8 months; HR 1.87 (95% CI 1.06–3.30); P=0.013
- IFITM3 mRNA and protein significantly higher in EGFR driver mutation cell lines vs. WT (CCLE, TCGA datasets)
- Post-treatment specimens show increased IFITM3 protein vs. pretreatment (IHC, spatial transcriptomics)

### IFITM3 Drives Osimertinib Resistance In Vitro

| Condition | Cell line | IC50 (osimertinib) |
|-----------|-----------|-------------------|
| Scramble shRNA | PC-9 | 114 nM |
| shIFITM3 | PC-9 | 21.2 nM |
| Scramble shRNA | H1975 | 93.2 nM |
| shIFITM3 | H1975 | 8.05 nM |
| Empty vector | PC-9 | 251 nM |
| IFITM3 overexpression | PC-9 | 1220 nM |
| Empty vector | H1975 | 62.2 nM |
| IFITM3 overexpression | H1975 | 517 nM |

- PC-9/IFITM3 cells develop resistance to 1 µM osimertinib within 30 days; PC-9/EV control cells do not

### Mechanism: IFITM3-MET-PI3K-AKT Axis

- RNA-seq of shIFITM3 vs. shControl PC-9 cells: PI3K-AKT pathway is the most significantly downregulated KEGG pathway; tumor-promoting genes TOP2A and MKI67 downregulated; lung cancer poor survival gene set negatively enriched (NES=0.54)
- IFITM3 overexpression maintains pAKT even in the presence of osimertinib (immunoblot)
- LC-MS/MS identifies MET as the only PI3K-AKT pathway-related membrane protein binding to IFITM3 in both PC-9 and H1975 cells (97 shared binding partners; 58 membrane proteins)
- Co-IP and PLA confirm IFITM3-MET physical interaction in cells
- shIFITM3 reduces pMET and pAKT levels
- MβCD (lipid raft disruptor) reverses IFITM3-induced MET phosphorylation, implicating lipid rafts as the structural basis for IFITM3-MET interaction

### TME Cytokine Circuit

- Spatial transcriptomics: TME cytokine genes (TNF, IL-6, IFNG) markedly elevated in post-osimertinib samples, especially for the short-PFS patient
- RT-qPCR: TNF-α, IL-6, and IFN-γ each increase IFITM3 mRNA in EGFR-mutant NSCLC lines
- Inhibition of IL-6R (tocilizumab) or TNF-α (infliximab) suppresses osimertinib-induced IFITM3 upregulation in cell lines
- Osimertinib itself also induces cytokine production in tumor cells, creating a feed-forward loop

### MET Inhibition Restores Sensitivity

- Capmatinib + osimertinib in IFITM3-overexpressing PC-9: IC50 reduced from 1280 nM to 173 nM
- Capmatinib + osimertinib in IFITM3-overexpressing H1975: IC50 reduced from 1180 nM to 40.3 nM
- In vivo: combination effectively suppresses PC-9/IFITM3 xenograft growth; osimertinib alone fails to control IFITM3-overexpressing tumors

### Proposed Mechanistic Model

TME immune/stromal cells release cytokines (TNF-α, IL-6) in response to osimertinib treatment → cytokines induce IFITM3 expression in EGFR-mutant tumor cells (also amplified by tumor cell-derived cytokines) → IFITM3 protein localizes to lipid rafts at the plasma membrane → IFITM3 acts as a scaffold for MET in lipid rafts → MET phosphorylation → PI3K-AKT activation → persistent AKT signaling despite EGFR inhibition → reduced osimertinib sensitivity and development of acquired resistance.

## Related Papers

- [[nakamura-2021-spatial-transcriptomics-egfr-mutant-nsclc]] — prior spatial transcriptomics work from the same group (Visium platform, EGFR-mutant NSCLC TME dynamics)
- [[ibusuki-2024-tp53-osimertinib-resistance-tnf-nfkb]] — prior work by same group; TP53 gain-of-function mutations promote osimertinib resistance via TNF-α–NF-κB signaling
- [[planchard-2015-egfr-independent-met-resistance]] — EGFR-independent MET amplification as resistance to AZD9291 (osimertinib) in EGFR T790M+ NSCLC
- [[sequist-2020-savolitinib-osimertinib-met-amplified]] — phase Ib trial of savolitinib + osimertinib for MET-amplified osimertinib-resistant NSCLC
- [[cho-2024-amivantamab-lazertinib-egfr-met]] — amivantamab (anti-EGFR/MET bispecific) + lazertinib improved PFS in untreated EGFR-mutant NSCLC (N Engl J Med. 2024)
- [[lee-2020-ifitm3-pip3-scaffold-pi3k]] — IFITM3 functions as a PIP3 scaffold to amplify PI3K signaling in B cell leukemia and lymphoma (Nature. 2020)
- [[chu-2022-ifitm3-gastric-cancer-met-akt-foxo3]] — IFITM3 promotes malignant progression of gastric cancer by targeting MET/AKT/FOXO3/c-MYC axis (Cell Biosci. 2022)
- [[jacobsen-2017-convergent-akt-egfr-resistance]] — convergent AKT activation drives acquired EGFR inhibitor resistance in lung cancer (Nat Commun. 2017)
- [[moghal-2023-spatial-drug-tolerant-persisters]] — single-cell analysis of transcriptomic features of drug-tolerant persisters in EGFR-mutant lung adenocarcinoma xenograft model (J Thorac Oncol. 2023)
