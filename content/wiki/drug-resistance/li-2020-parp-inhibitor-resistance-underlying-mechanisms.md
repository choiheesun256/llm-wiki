---
title: "PARP inhibitor resistance: the underlying mechanisms and clinical implications"
authors: ["He Li", "Zhao-Yi Liu", "Nayiyuan Wu", "Yong-Chang Chen", "Quan Cheng", "Jing Wang"]
year: 2020
doi: "10.1186/s12943-020-01227-0"
category: "drug-resistance"
pdf_path: "llm-wiki/papers/plus/li-2020-parp-inhibitor-resistance-underlying-mechanisms.pdf"
pdf_filename: "li-2020-parp-inhibitor-resistance-underlying-mechanisms.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - PARPi-resistance
  - BRCA1
  - BRCA2
  - homologous-recombination
  - synthetic-lethality
  - DNA-damage-response
  - drug-resistance
  - ovarian-cancer
  - breast-cancer
  - reversion-mutations
  - replication-fork-protection
  - review
---

## Summary

PARP inhibitors (PARPi) exploit synthetic lethality in BRCA1/2-deficient tumours: blocking PARP1-mediated single-strand break repair forces reliance on the already-defective homologous recombination (HR) pathway, leading to cell death. Despite clinical approvals of olaparib, niraparib, and rucaparib for ovarian and breast cancers, resistance is ubiquitous — over 40% of BRCA1/2-deficient patients fail to respond initially, and acquired resistance develops with prolonged treatment.

This 2020 review by Li et al. in *Molecular Cancer* catalogues all major PARPi resistance mechanisms and organises them into five categories: (1) restoration of HR via changes in DNA end resection regulators, (2) reversion mutations in BRCA1/2 that restore protein function, (3) protection of stalled DNA replication forks independent of HR, (4) epigenetic alterations and restoration of PARylation, and (5) pharmacological changes such as P-gp-mediated drug efflux. The review also summarises combination strategies in clinical trials aimed at re-sensitising resistant tumours.

## Key Contributions

- **Unified taxonomy of resistance**: Organises disparate resistance reports into a coherent framework spanning HR restoration, reversion mutations, fork protection, and epigenetic/pharmacological mechanisms.
- **Fork protection as an independent resistance axis**: Argues that replication fork protection — not HR restoration — is sufficient for PARPi resistance in BRCA2-deficient contexts, challenging the HR-centric view of synthetic lethality.
- **Reversion mutation catalogue**: Tables BRCA1/2 secondary mutations detected by liquid biopsy (cfDNA) across HGSOC, TNBC, breast, and prostate cancers, with variant allele fractions.
- **Clinical trial landscape**: Comprehensively lists ongoing combination trials (PARPi + WEE1i, ATRi, CDKi, anti-PD-L1, HDACi, IR) with NCT numbers and patient populations.
- **RAD51 assay as biomarker**: Highlights RAD51 foci formation in biopsy samples as a potential functional biomarker of HR competence, superior to BRCA mutation status or genomic scar scores.

## Methodology and Architecture

This is a narrative literature review with no primary experimental data. Resistance mechanisms are reviewed across the HR pathway at the level of three sub-processes:

**1. DNA end resection (HR entry point)**
- 53BP1 blocks CtIP-mediated end resection; loss of 53BP1 restores resection and HR → PARPi resistance.
- Shieldin complex (SHLD1/2/3 + REV7) is recruited by 53BP1 to DSB sites to counteract end resection; Shieldin loss → PARPi resistance.
- CDK12 and CDK18 promote HR via ATR-Rad9/ATR-ETAA1 and ATM-dependent phosphorylation of MRN/CtIP; CDK12 LOF sensitises; CDK18 promotes resistance.
- CDK4/6 inhibitors enhance PARPi efficacy in BRCA-mutated ER-positive breast cancer (case report + preclinical data).

**2. RAD51 filament formation and D-loop**
- EMI1 constitutively targets RAD51 for degradation; EMI1 downregulation enhances RAD51 accumulation → restored HR and PARPi resistance in BRCA1-deficient TNBC.
- DDB2 mediates RAD51 polyubiquitination and degradation; DDB2 inhibition restores HR → resistance in TNBC.
- TOPBP1 required for RAD51 phosphorylation at Ser14 and chromatin loading; TOPBP1 loss sensitises to olaparib.
- BRD4 inhibition (JQ1, INCB054329) recruits RAD51 without ATM/ATR activation → restored HR → resistance.
- HORMAD1 high expression promotes RAD51 filament formation → PARPi resistance in LUAD.
- APRIN and PALB2 bind D-loop structures and stimulate HR strand invasion; their deletion induces BRCAness and sensitises.

**3. Reversion mutations**
- Secondary somatic mutations that restore BRCA1/2 reading frame are the most clinically validated resistance mechanism.
- Detected in plasma cfDNA and tumour biopsies; reported frequencies: ~40% in platinum/PARP-exposed mCRPC gBRCAm cohort; 8.2% before rucaparib, 10.3% post-progression in HGSOC.
- Reversion mutations also found in RAD51C and RAD51D.
- CRISPR-Cas9 "tad-mutate-enrich" screens identified PARP1 point mutations (p.R591C, p.848delY) conferring resistance.

**4. DNA replication fork protection**
- BRCA1/2 protect nascent DNA at stalled forks from MRE11/DNA2/MUS81-dependent degradation.
- EZH2 (low): prevents MUS81 recruitment via H3K27 methylation; promotes fork stability and PARPi resistance specifically in BRCA2-deficient cells.
- PTIP/MELL3/4 (low): prevents MRE11 recruitment; protects forks; confers BRCA2-deficient cell resistance.
- FANCD2 (high): suppresses MRE11-mediated fork degradation on nucleoprotein filaments; overexpressed in BRCA1/2-mutated breast, ovarian, and uterine cancers.
- SMARCAL1 (low): can reverse FANCD2-induced nascent DNA degradation; deletion promotes resistance and cisplatin resistance.
- RADX (low): promotes RAD51 at forks, restoring fork protection without HR; confers resistance in BRCA2-mutant cells.

**5. Epigenetic, PARylation, and pharmacological mechanisms**
- BRCA1 promoter methylation (treatment-induced) rescues BRCA1 expression → resistance.
- miR-622 and miR-493-5p suppress NHEJ pathways, impacting genome stability.
- USP15 deubiquitinates BARD1 BRCT domain → BRCA1 retention at DSBs → resistance.
- m6A modification (FZD10) and Wnt/β-catenin upregulation (FZD10) contribute to resistance.
- c-Met phosphorylates PARP1 at Tyr907 → increased enzymatic activity → reduced PARPi binding → resistance.
- PARG loss restores PARylation → resistance; low PARP1 expression or LOF mutations → resistance.
- MDR1/P-gp (ABCB1) overexpression mediates drug efflux; reversible by P-gp inhibitors or ABCB1 genetic inactivation.

## Results

| Mechanism | Key Regulators | Cancer Context | Resistance Direction |
|---|---|---|---|
| 53BP1 loss | 53BP1, RIF1, PTIP | Breast, glioblastoma, ovarian | Sensitisation reversed → resistance |
| Shieldin loss | SHLD1/2/3, REV7 | Multiple | HR restored → resistance |
| CDK12 LOF | CDK12 | Ovarian, TNBC | Sensitisation to PARPi |
| RAD51 degradation blocked | EMI1 down, DDB2 inhibited | BRCA1-deficient TNBC | HR restored → resistance |
| BRCA reversion mutations | BRCA1/2, RAD51C/D | HGSOC, TNBC, mCRPC, pancreatic | Resistance |
| Fork protection (EZH2 low) | EZH2, MUS81 | BRCA2-deficient | Resistance (not BRCA1-deficient) |
| Fork protection (FANCD2 high) | FANCD2, MRE11 | Breast, ovarian, uterine | Resistance |
| SMARCAL1 loss | SMARCAL1, SNF2 | BRCA1/2-mutated | Resistance |
| RADX loss | RADX, RAD51 | BRCA2-mutant | Resistance |
| P-gp overexpression | ABCB1/MDR1 | Ovarian | Resistance; reversed by P-gp inhibitor |
| c-Met / PARP1 Tyr907 phosphorylation | c-Met, PARP1 | Ovarian | Reduced PARPi binding → resistance |
| PARG loss | PARG | Breast (mouse model) | PARylation restored → resistance |
| BRCA1 promoter methylation (lost) | BRCA1 | Multiple | BRCA1 re-expressed → resistance |
| BRD4 inhibition | BRD4, RAD51 | Multiple | HR-independent RAD51 → resistance |

**Clinical combination strategies under evaluation (Table 2 summary):**
- PARPi + IR: multiple completed/ongoing trials (veliparib combinations in NSCLC, breast cancer, rectal cancer)
- PARPi + CDKi: dinaciclib resensitises TNBC to niraparib; CDK12i reverses acquired resistance
- PARPi + anti-PD-L1: olaparib + durvalumab (NCT02734004), rucaparib + nivolumab (NCT03824704), olaparib + atezolizumab (NCT02849496)
- PARPi + WEE1i (AZD1775): multiple Phase I/II trials recruiting
- PARPi + ATRi (AZD6738): multiple Phase II trials across gynaecological, prostate, renal, IDH1/2-mutant cancers

## Related Papers

- [[jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss and PARPi resistance in Brca1-mutated mouse mammary tumours
- [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — Shieldin as 53BP1 effector in NHEJ and PARPi resistance
- [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — CRISPR screens identifying genetic determinants of PARPi resistance
- [[edwards-2008-resistance-therapy-caused-intragenic-deletion]] — BRCA2 reversion mutations as the first described PARPi resistance mechanism
- [[haynes-2018-restored-replication-fork-stabilization-mechanism]] — Fork protection as a mechanism of PARPi resistance independent of HR
