---
title: "Acquired RAD51C Promoter Methylation Loss Causes PARP Inhibitor Resistance in High-Grade Serous Ovarian Carcinoma"
authors: "Ksenija Nesic, Olga Kondrashova, Rachel M. Hurley, Cordelia D. McGehee, Cassandra J. Vandenberg, Gwo-Yaw Ho, Elizabeth Lieschke, Genevieve Dall, Nirashaa Bound, Kristy Shield-Artin, Marc Radke, Ashan Musafer, Zi Qing Chai, Mohammad Reza Eftekhariyan Ghamsari, Maria I. Harrell, Damien Kee, Inger Olesen, Orla McNally, Nadia Traficante, Australian Ovarian Cancer Study, Anna DeFazio, David D.L. Bowtell, Elizabeth M. Swisher, S. John Weroha, Katia Nones, Nicola Waddell, Scott H. Kaufmann, Alexander Dobrovic, Matthew J. Wakefield, Clare L. Scott"
year: 2021
doi: "10.1158/0008-5472.CAN-21-0774"
source: "nesic-2021-acquired-rad51c-promoter-methylation-loss.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/nesic-2021-acquired-rad51c-promoter-methylation-loss.pdf"
pdf_filename: "nesic-2021-acquired-rad51c-promoter-methylation-loss.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - drug-resistance
  - RAD51C
  - epigenetic-resistance
  - promoter-methylation
  - HRD
  - homologous-recombination
  - ovarian-cancer
  - HGSC
  - rucaparib
  - niraparib
  - PDX
  - methylation-zygosity
  - biomarker
  - DNA-repair
---

## Summary

This study resolves long-standing uncertainty about meRAD51C (RAD51C promoter methylation) in HGSC by demonstrating that it is a bona fide HRR defect that sensitizes tumors to PARP inhibitors, and that its acquired loss — even via a single unmethylated gene copy — is sufficient to restore HRR and cause PARPi resistance. Using three HGSC PDX models with confirmed meRAD51C, the authors show that both homogeneous and heterogeneous methylation patterns silence RAD51C and cause HRD. Under cyclical rucaparib treatment, PH039 PDX lineages acquired complete meRAD51C loss independently in two genetically distinct clonal lineages, establishing that resistance is epigenetically acquired rather than clonally selected. A patient cohort of 12 meRAD51C HGSC cases reveals both homogeneous and heterogeneous meRAD51C profiles in equal proportion, with one pretreated patient showing evidence of heterozygous meRAD51C and restored RAD51C expression consistent with treatment-induced methylation loss. The findings parallel the established meBRCA1 model: homozygous meRAD51C predicts PARPi sensitivity, but methylation zygosity must be carefully assessed in previously treated patients. The study also flags concern that epigenetic therapies such as DNMT or HDAC inhibitors could permanently abrogate meRAD51C, undermining its biomarker utility.

## Key Contributions

- **meRAD51C as bona fide HRR defect:** PDX #183 (homozygous meRAD51C) was cisplatin-sensitive, rucaparib-responsive (TTP 8 vs. 47 days at 450 mg/kg, P < 0.0001), and niraparib-responsive (8 vs. 50 days, P < 0.0001). RAD51C mRNA and protein were undetectable, and RAD51 foci-forming capacity was impaired, confirming HRD.
- **Heterogeneous meRAD51C also causes silencing and HRD:** PDX PH039 lineages with heterogeneous meRAD51C patterns had undetectable RAD51C expression and impaired RAD51 foci formation in vehicle-treated samples, demonstrating that heterogeneity does not preclude functional HRD.
- **Single unmethylated copy sufficient for resistance:** SNP array data showed only one RAD51C gene copy per cell in all PDX models (LOH at chr17). After meRAD51C loss under rucaparib pressure, that single copy was unmethylated and sufficient to restore RAD51C expression and HRR, causing PARPi resistance — directly analogous to the meBRCA1 haplo-sufficiency resistance model.
- **Resistance acquired independently in two lineages:** Clonal evolution analysis via SNP array showed that rucaparib-refractory PH039-A and PH039-B tumors with complete meRAD51C loss were derived from distinct clones within each lineage, demonstrating convergent epigenetic resistance acquisition rather than selection of pre-existing resistant subclones.
- **Patient cohort characterization:** In 12 meRAD51C HGSC patients, homogeneous and heterogeneous profiles occurred equally (6/12 each). No significant association with clinical outcome, platinum response, or HRR gene mutations. All meRAD51C tumors had HRD sum scores ≥42. One pretreated patient (AOCS-106) showed evidence of heterozygous meRAD51C with elevated RAD51C expression, suggesting treatment-induced loss of one methylated allele.
- **Methylation zygosity as clinical biomarker:** Homozygous meRAD51C (all neoplastic copies methylated) is a positive predictive biomarker for PARPi sensitivity. Heterozygous meRAD51C (≥1 unmethylated copy in neoplastic cells) predicts HRR proficiency and PARPi resistance. Methylation stability varies between patients and under treatment pressure.

## Methodology and Architecture

**Experimental System:**
- Three HGSC PDX models: PDX #183 (homozygous meRAD51C, homogeneous pattern), PDX #1240 (homozygous meRAD51C), PDX PH039 (heterogeneous meRAD51C; re-established as two lineages A and B)
- All PDX models derived from patient tumors enrolled in Australian Ovarian Cancer Study or WEHI/Mayo Clinic programs; transplanted into NOD/SCID IL2Rγnull mice
- Rucaparib retreatment protocol: cyclical treatment (two cycles per transplant, 450 mg/kg) until refractory (failure to complete fourth cycle)
- Patient cohort: 12 HGSC samples with meRAD51C from AOCS, University of Washington, and WEHI Stafford Fox Rare Cancer program

**Key Assays:**
- **MS-HRM:** Primary quantitative methylation assay; single-copy sensitive; used for screening all PDX aliquots and patient samples
- **Targeted RAD51C bisulfite amplicon sequencing:** NGS-based; characterizes individual epialleles at each CpG site; enables precise zygosity classification
- **Adjusted tumor meRAD51C calculation:** Accounts for tumor cellularity and RAD51C copy number; formula: AdjMe% = (ObsMe% × TotalCN × 100) / (TumCN × TumCell%)
- **SNP arrays:** Global Screening Array-24 v2-0; RAD51C copy number profiling and LOH detection on chr17
- **RAD51 foci formation:** Functional HRD assay; absence of RAD51 IRIF after DNA damage confirms HRR inability
- **RAD51C immunoblotting:** Protein-level confirmation of gene silencing
- **BROCA panel sequencing:** HRR gene mutation profiling to exclude confounding germline or somatic HRR mutations
- **RNA-seq (AOCS public data):** RAD51C expression in patient samples correlated with methylation status

**Methylation Zygosity Framework:**
- Homozygous methylated: only highly/completely methylated epialleles; gene silenced
- Heterozygous methylated: mix of methylated and unmethylated epialleles within cells; gene expressed if any copy unmethylated
- Unmethylated: no methylated epialleles; gene expressed
- Homogeneous vs. heterogeneous patterns describe the tissue-level diversity of epialleles (can be homogeneous-methylated or heterogeneous-methylated/unmethylated mixture)
- Critical threshold: ≥54% of 13 RAD51C promoter region CpG sites methylated is sufficient for silencing; bimodal distribution of epialleles (>7/13 or 0 CpGs methylated) observed in both PDX and patient samples

## Results

| Experiment | Key Finding |
|---|---|
| PDX #183 cisplatin response | Sensitive (P < 0.0001 vs. vehicle) |
| PDX #183 rucaparib (450 mg/kg) | TTP: 8 days (vehicle) vs. 47 days (rucaparib), P < 0.0001 |
| PDX #183 niraparib (100 mg/kg) | TTP: 8 days vs. 50 days, P < 0.0001 |
| PDX #183 meRAD51C stability | Stable across cisplatin and most rucaparib doses; 1/12 (25%) tumor aliquots lost meRAD51C after 4 cycles 300 mg/kg rucaparib |
| PH039 lineage A vs. B (rucaparib) | Lineage A less responsive (TTP 50 vs. 71 days, P = 0.0004); both lineages cisplatin sensitive |
| PH039 rucaparib retreatment (3 cycles) | All refractory tumors from both lineages showed complete meRAD51C loss by MS-HRM |
| meRAD51C loss vs. RAD51C expression | PH039-A R² = 0.3279, P = 0.0323; PH039-B R² = 0.6288, P = 0.0021 |
| RAD51 foci in PDX models | PDX #183 and both PH039 lineages: impaired RAD51 foci formation (HRD confirmed); vehicle-treated samples only |
| SNP array (RAD51C copy number) | Single RAD51C copy per cell in #183, PH039-A, and PH039-B (LOH at chr17) |
| Clonal independence of resistance | SNP profiles of post-rucaparib PH039-A and -B aliquots derived from distinct clones within each lineage (not shared pre-existing resistant clone) |
| Patient cohort meRAD51C profiles | 6/12 homogeneous, 6/12 heterogeneous; no significant clinical associations |
| All meRAD51C patient tumors | HRD sum score ≥42 (HRD positive by scarHRD) |
| AOCS-106 (pretreated patient) | Heterozygous meRAD51C (~60% in neoplasm, adjusted); elevated RAD51C expression; HRR-proficient score — consistent with treatment-induced methylation loss from initially homozygous meRAD51C |

## Related Papers

- **Kondrashova et al. (2018)** *Nat Commun* — Zygosity of meBRCA1 determines PARPi and platinum response in HGSC PDX; foundational parallel that established the haplo-sufficiency resistance model this study extends to meRAD51C
- **Kondrashova et al. (2017)** *Cancer Discov* — Secondary somatic mutations restoring BRCA1 and RAD51C associated with rucaparib resistance in HGSC; genetic complement to this epigenetic resistance study
- **Cunningham et al. (2014)** *Sci Rep* — Clinical characteristics of ovarian cancer by BRCA1/BRCA2/RAD51C status; provides meRAD51C prevalence (~2% HGSC) context
- **Bernards et al. (2018)** *Gynecol Oncol* — Clinical outcomes in BRCA1 or RAD51C methylated ovarian carcinoma; clinical context for meRAD51C patients
- **Min et al. (2013)** *Mol Cancer Ther* — RAD51C-deficient cells highly sensitive to olaparib; validates RAD51C as PARPi target
- **Meindl et al. (2010)** *Nat Genet* — Germline RAD51C mutations establish RAD51C as HGSC susceptibility gene
- **Pettitt et al. (2018)** *Nat Commun* — CRISPR-Cas9 screens identify PARP1 point mutations causing PARPi resistance; genetic resistance mechanism comparison
- **Jaspers et al. (2013)** *Cancer Discov* — 53BP1 loss restores HRR in BRCA1-deficient mammary tumors, causing PARPi resistance; parallel in vivo resistance model
- **Mikeska & Candiloro (2010)** *Epigenomics* — Implications of heterogeneous DNA methylation for quantification; conceptual basis for interpreting heterogeneous meRAD51C patterns
- **Candiloro et al. (2008)** *Epigenetics Chromatin* — Heterogeneous methylation at CDKN2B (p15) still causes silencing; precedent for heterogeneous promoter methylation functional threshold
- **Patch et al. (2015)** *Nature* — Whole-genome characterization of chemoresistant ovarian cancer (AOCS cohort); provides genomic context for patient samples used in this study
