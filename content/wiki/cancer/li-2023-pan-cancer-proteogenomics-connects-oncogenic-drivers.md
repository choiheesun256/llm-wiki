---
title: "Pan-cancer proteogenomics connects oncogenic drivers to functional states"
authors:
  - Yize Li
  - Eduard Porta-Pardo
  - Collin Tokheim
  - Matthew H. Bailey
  - Tomer M. Yaron
  - Lewis C. Cantley
  - Gad Getz
  - Li Ding
  - "Clinical Proteomic Tumor Analysis Consortium (CPTAC)"
year: 2023
doi: "10.1016/j.cell.2023.07.014"
journal: Cell
category: cancer
tags:
  - proteogenomics
  - pan-cancer
  - CPTAC
  - oncogenic-drivers
  - cis-effects
  - trans-effects
  - protein-protein-interactions
  - kinase-activity
  - cancer-hallmarks
  - multi-omics
  - phosphoproteomics
  - tumor-microenvironment
  - immunogenicity
  - drug-repurposing
  - copy-number-alterations
  - somatic-mutations
pdf_path: "llm-wiki/papers/plus/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers.pdf"
pdf_filename: "li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers.pdf"
source_collection: "plus-batch-2026-05"
source_note: "[[sources/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]"
---

# Pan-cancer proteogenomics connects oncogenic drivers to functional states

> Li et al., *Cell* 2023 — CPTAC pan-cancer proteogenomics study linking somatic driver alterations to functional molecular states across 1,064 tumors from 10 cancer types.

---

## 1. Core Question and Contribution

**What is the question?** How do cancer driver mutations and copy-number alterations mechanistically propagate their effects through the proteome and phosphoproteome to shape functional cellular states?

**Why proteogenomics?** Genomics and transcriptomics cannot capture the full functional output of genetic alterations. Protein abundance, post-translational modifications (PTMs), and protein-protein interactions (PPIs) are direct readouts of oncogenic activity. CPTAC's mass-spectrometry platform quantifies ~15,699 proteins and ~110,274 phosphosites — far exceeding TCGA's RPPA-based 128 proteins.

**Core contribution:** The first pan-cancer proteogenomic map that systematically characterizes *cis*-effects, *trans*-effects, PPI rewiring, kinase activity shifts, and hallmark patterns driven by 5,453 putative driver alterations — providing a protein-level functional atlas of oncogenic drivers.

---

## 2. Study Design: Pan-cancer CPTAC Cohort

| Feature | Detail |
|---|---|
| Total samples | 1,064 tumors |
| Cancer types | BRCA, ccRCC, COAD, GBM, HGSC, HNSCC, LSCC, LUAD, PDAC, UCEC |
| Multi-omic layers | WES/WGS (somatic mutations, CNA, SV), DNA methylation, RNA-seq, global proteome, phosphoproteome, clinical/histopathology |
| Proteins quantified | 15,699 |
| Phosphosites quantified | 110,274 |
| Normal-adjacent tissue (NAT) | N=556 (8 cohorts) |

The study analyzed **six aspects** of cancer drivers: (1) pan-cancer genomic/epigenomic driver frequencies; (2) impact on RNA, protein, and PTMs; (3) effects on protein complexes; (4) protein/phosphorylation changes in oncogenic pathways; (5) links to tumor microenvironment (TME); (6) somatic driver effects on cancer hallmarks.

---

## 3. Four Pan-cancer Multi-omic Clusters

Bayesian NMF + hierarchical clustering on RNA, protein, and phosphoproteome resolved four clusters reflecting shared oncogenic states:

| Cluster | Enriched Cancer Types | Key Molecular Features | Enriched Pathways |
|---|---|---|---|
| A | BRCA, COAD | MSI-high, immune-cold; better ccRCC prognosis | Estrogen-dependent gene expression, DNA repair |
| B | HNSCC, LSCC, LUAD | High CDKN2A alterations; KRAS/TP53 mutations | DNA replication, innate immunity, cell cycle |
| C | LUAD, PDAC | Smooth muscle, ECM; KRAS enriched | ECM organization, VEGFA-VEGFR2 signaling |
| D | GBM, BRCA | High EMT; immune-warm; poor survival when EMT-high | Tyrosine metabolism, MAPK1/MAPK3 signaling |

Key insight: Some oncogenic alterations preferentially occur in specific clusters (KRAS in C/D; CDKN2A/TP53 in B), suggesting that the multi-omic cluster partly reflects the functional consequences of particular driver combinations rather than tissue-of-origin alone.

---

## 4. Cis-effects: From Mutation to Protein

*Cis*-effects are the direct effects of a driver alteration on the RNA, protein, or phosphorylation levels of the mutated gene itself.

**Scale:** 265 significant pan-cancer cis-events in 59 cancer genes; 349 additional cohort-specific cis-events.

**TSGs are downregulated** at protein/RNA level upon mutation (ARID1A, MSH6, RB1, STK11, PTEN).

**Notable observations:**

- **ARID1A:** Tumors with ARID1A mutations have lower ARID1A protein; matched NATs from these patients show even higher ARID1A than NATs from mutation-negative patients — suggesting pre-existing elevated expression selects for ARID1A loss.
- **STK11 (LUAD):** WT STK11 tumors have lower STK11 protein than NATs, implying that downregulation of STK11 is a broader phenomenon in lung cancer beyond somatic mutation.
- **TP53:** Missense mutations → higher protein (stable mutant p53 accumulates); frameshift/nonsense → lower protein. Oncogenic PTEN missense mutations prefer buried residues (low solvent accessibility), consistent with structural destabilization.
- **Oncogenic missense mutations in TSGs** (STK11, PBRM1, PTEN): unexpectedly associated with lower protein abundance — a proteomics-specific finding missed by RNA analysis.

---

## 5. Protein-Protein Interaction Rewiring

**Approach:** Protein co-variation across CPTAC tumor samples serves as a proxy for physical PPIs (known PPIs show higher Pearson r than non-interacting pairs). Interaction term regression identifies mutations that significantly alter co-variation between a driver and its partners.

**Conserved core PPIs across all cancer types:** MSH2/MSH6, CTNNA1/CTNNB1, RAD21/STAG1

**Tissue-specific PPIs:**
- mTOR/RICTOR: correlated in ccRCC but not GBM
- CTNNB1/CDH1: correlated in BRCA and UCEC, not in ccRCC or HGSC

**CNA-driven trans-effects on PPIs:**
- SMAD4 deletion → reduced SMAD2 protein levels
- CCNE1 amplification → increased CDK2 protein (66% of MPI trans-effects mediated via driver protein abundance)
- RICTOR amplification → increased MAPKAP1 protein (trans), increased RICTOR protein (cis)

**Mutation-altered PPI interfaces (51 significant pan-cancer events):**

| Driver | Mutation | PPI Effect |
|---|---|---|
| CTNNB1 | Oncogenic | Increased correlation with LEF1 (WNT/β-catenin activation) |
| SMAD4 | Oncogenic | Reduced correlation with SMAD2 (loss of physical contact) |
| PPP2R1A | Oncogenic | Abrogated correlation with PPP2R2A, PPP2R5E, PPP2R5B |
| PBRM1 | Oncogenic | Abrogated correlation with ARID2 |
| EGFR | T693 phosphorylation | Reduced correlation with EGFR-binding partners (affects dimer formation) |

---

## 6. Trans-effects: Driver Molecular Fingerprints

*Trans*-effects are the distal effects of a driver mutation on the broader proteome and phosphoproteome (not the driver gene itself). Aggregating all trans-effects of a driver gene produces its "molecular fingerprint."

**Fingerprint similarity across cancer genes:**
- Most driver pairs show positive correlations (convergent oncogenic states)
- **Most similar pair: KEAP1 / NFE2L2** (r > 0.63, p < 1e-15) — both mutations result in NFE2L2 protein stabilization and upregulation of NFE2L2 targets (AKR1C2, AKR1C3, SRXN1, AKR1B10). Also: KMT2B and CREBBP show similar fingerprints.
- **Most negatively correlated pair: EGFR / STK11** (r < −0.54, p < 1e-15) — these mutations push cells toward divergently incompatible oncogenic states. EGFR and STK11 mutations are mutually exclusive in lung cancer; their divergent trans-effects may represent synthetic lethality opportunities.

**Opposing phosphorylation signatures (EGFR vs. STK11 in LUAD):**
- High in STK11-mutant: TP53BP2 S704, IRS2 S1100
- High in EGFR-mutant: WIPF S155, PTPN11 Y62

**Kinase activity (Kinase Library):**
- ACVR2A/TP53: activate cell cycle and splicing kinases
- PIK3CA: strongly activates PI3K/AKT members (S6Ks, RSKs, PDK1, SGK3)
- KRAS: activates ERK1/2/5/7; inhibits CAMK2
- EGFR-mutant LUAD: activates CAMK and AGC family kinases
- STK11/KRAS-mutant LUAD: inhibits CMGC family kinases

---

## 7. Tumor vs. Normal-Adjacent Tissue

- **6,517 DEPs** elevated in tumors; **7,030 DEPs** elevated in NATs (pan-cancer)
- **Pan-cancer upregulated proteins in all 8 cancer types:** PLOD2, UBE2C, MARCKSL1
- **PLOD2** (collagen crosslinking enzyme): high abundance associates with significantly worse overall survival in ccRCC, LUAD, PDAC — potential pan-cancer prognostic biomarker
- **Cell-cycle ssGSEA scores:** significantly elevated in tumors vs. NATs in 7/8 cancer types; 27 upregulated cell-cycle pathway proteins in multiple cancer types
- **Splicing kinases (CLK/SRPK):** consistently activated in tumors; MSI-high COAD shows especially high NMD activator levels
- **KRAS signaling in PDAC:** upregulation of KRAS signaling at phospho level but reduced ERK activity — a feedback mechanism possibly explaining reduced clinical efficacy of KRAS pathway inhibitors in pancreatic cancer

---

## 8. Immunogenicity and Drug Sensitivity

### Neoantigen burden and T cell infiltration
- Predicted neoantigen burden positively correlates with CTL score (p=4e-4) and tumor mutation burden
- MSI-high samples have higher per-mutation neoantigen burden due to frameshift indels
- **Key finding:** Neoantigen burden in highly expressed proteins (protein abundance > 1) shows improved correlation with CTL infiltration vs. all transcripts — proteomics advantage for immunogenicity assessment
- Oncogenic alterations in 7 drivers (including KRAS) alter the neoantigen-CTL correlation relationship

### Druggability via CMAP connectivity
- Proteomic signatures of driver alterations connect to CDK inhibitor (CDKi) sensitivity
- **CDKN2A deletion:** strongest CDK4/6i biomarker; clinical and experimental support for palbociclib sensitivity
- **RB1 oncogenic alterations:** CDK2 upregulated (RNA and protein); DepMap CRISPR screens confirm RB1-altered cells are more dependent on CDK2 than CDK4/6; CDK2-selective inhibitors may be more effective in RB1-altered tumors
- Basket trial design: CDK activation is a common downstream consequence of multiple diverse driver alterations, suggesting CDKi as a potential pan-cancer therapeutic strategy

---

## 9. Cancer Hallmarks: C3PO Framework

**C3PO (polygenic protein abundance prediction):** Aggregates cis-effect sizes of CNA and mutation events via NeSTed protein systems to produce polygenic hallmark scores for each sample — analogous to polygenic risk scores.

**Performance:** Somatic variants account for 7.2%–27.5% of protein abundance variability across ten cancer types (predictive ceiling; remainder from cellular plasticity, TME, and transcriptional fluctuations).

**Hallmark patterns:**
- **LUAD:** Uniform DNA repair and cell cycle hallmarks (smoking-driven chromatin modification enrichment; p=3.8e-7)
- **UCEC:** Highest hallmark heterogeneity — diverse patterns including NOTCH, DNA repair; reflects molecularly distinct subtypes
- **ssGSEA** (protein-based): Identifies additional subgroups with high EMT/ECM activity independent of known driver events
  - LUAD (n=19): VPS13A, FSTL1, TMEM30B highly expressed
  - UCEC (n=21): SLPI, TSPAN1, CALD1 highly expressed
  - These may reflect microenvironmental interactions or undiscovered drivers

---

## 5-Section Summary

| Aspect | Key Finding |
|---|---|
| Multi-omic clusters | Four pan-cancer proteogenomic clusters reveal shared oncogenic states across disparate cancer types; clusters partially explained by driver enrichments (KRAS, CDKN2A, TP53) |
| Cis-effects | 265 pan-cancer + 349 cohort-specific significant events; oncogenic missense mutations in TSGs reduce protein stability — a proteomics-specific insight |
| PPI rewiring | 51 significant mutation-altered co-variation events; tissue-specific PPIs detected; 66% of CNA trans-effects mediated through driver protein abundance |
| Trans-effects and kinases | KEAP1/NFE2L2 converge; EGFR/STK11 diverge (synthetic lethal candidate); driver-specific kinase signatures inform drug repurposing |
| Hallmarks and clinical utility | PLOD2 as pan-cancer prognostic biomarker; RB1 alterations implicate CDK2 (not CDK4/6) dependency; protein-level neoantigen burden improves immunogenicity prediction |

---

## Related Work

- [[chen-2019-pan-cancer-molecular-subtypes-proteomic-characterization]] — Earlier CPTAC pan-cancer proteome subtypes
- [[cao-2021-proteogenomic-characterization-pancreatic-ductal-adenocarcinoma]] — CPTAC PDAC cohort flagship
- [[clark-2019-integrated-proteogenomic-characterization-clear-cell]] — CPTAC ccRCC cohort flagship
- [[dou-2020-proteogenomic-characterization-endometrial-carcinoma]] — CPTAC UCEC cohort flagship
- [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — CPTAC LUAD cohort flagship
- [[hanahan-2022-hallmarks-cancer-new-dimensions]] — Cancer hallmarks framework
- [[hornbeck-2015-phosphositeplus]] — PhosphoSitePlus / Kinase Library resource
- [[chakraborty-2024-pan-cancer-proteogenomics-vulnerabilities-opportunities]] — Related pan-cancer proteogenomics perspective
