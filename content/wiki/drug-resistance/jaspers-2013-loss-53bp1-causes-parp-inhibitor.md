---
title: "Loss of 53BP1 Causes PARP Inhibitor Resistance in Brca1-Mutated Mouse Mammary Tumors"
authors: "Janneke E. Jaspers, Ariena Kersbergen, Ute Boon, Wendy Sol, Liesbeth van Deemter, Serge A. Zander, Rinske Drost, Ellen Wientjens, Jiuping Ji, Amal Aly, James H. Doroshow, Aaron Cranston, Niall M.B. Martin, Alan Lau, Mark J. O'Connor, Shridar Ganesan, Piet Borst, Jos Jonkers, Sven Rottenberg"
year: 2013
doi: "10.1158/2159-8290.CD-12-0049"
source: "jaspers-2013-loss-53bp1-causes-parp-inhibitor.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/jaspers-2013-loss-53bp1-causes-parp-inhibitor.pdf"
pdf_filename: "jaspers-2013-loss-53bp1-causes-parp-inhibitor.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - drug-resistance
  - 53BP1
  - BRCA1
  - homologous-recombination
  - olaparib
  - AZD2461
  - synthetic-lethality
  - breast-cancer
  - mouse-model
  - DNA-repair
  - P-glycoprotein
---

## Summary

This study establishes somatic loss of 53BP1 as a novel in vivo mechanism of acquired PARP inhibitor (PARPi) resistance in BRCA1-deficient mammary tumors. Using the K14cre;Brca1^F/F;p53^F/F (KB1P) mouse model, the authors show that: (1) eliminating Pgp-mediated drug efflux (KB1PM mice) prolongs olaparib response, but tumors still develop resistance; (2) a fraction of olaparib-resistant tumors harbor somatic Trp53bp1 inactivating mutations that abolish 53BP1 protein expression; (3) 53BP1 loss partially restores homologous recombination (HR), enabling tumor cells to repair PARP-inhibition-induced DNA damage; and (4) long-term treatment with the next-generation PARPi AZD2461 — which has low Pgp affinity — suppresses the emergence of resistant clones and doubles relapse-free survival compared to standard 28-day dosing. The work identifies 53BP1 as both a resistance effector and potential biomarker for PARPi response in BRCA1-deficient cancers.

## Key Contributions

- **53BP1 loss as a resistance mechanism:** 3/11 olaparib-resistant KB1PM tumors showed partial or complete loss of 53BP1 protein. Somatic Trp53bp1 mutations (exon duplication causing frameshift, truncating Q626* point mutation) were identified as the molecular basis.
- **Causal relationship established:** shRNA knockdown of Trp53bp1 in drug-naive KB1P cells conferred olaparib resistance in vitro and in vivo; reconstitution of 53BP1 in resistant cells restored olaparib sensitivity.
- **HR restoration as mechanism:** 53BP1-deficient resistant cells formed RAD51 IRIFs after ionizing radiation, a functional marker of active HR, unlike sensitive BRCA1-null cells. HR restoration was partial, explaining incomplete cross-resistance to cisplatin.
- **Cross-resistance profile:** 53BP1-loss tumors were cross-resistant to topotecan (topoisomerase I inhibitor) but retained sensitivity to cisplatin and doxorubicin, consistent with partial HR restoration.
- **AZD2461 superiority:** AZD2461 (low Pgp affinity) bypassed Pgp-mediated resistance. Long-term (100-day) AZD2461 treatment suppressed resistant clone outgrowth, with 8/9 mice remaining relapse-free for 300 days vs. 6/7 olaparib-treated mice developing resistance.
- **53BP1 as biomarker:** 53BP1 loss was observed in topotecan-resistant tumors as well, suggesting a general HR-restoration resistance mechanism applicable beyond PARPi.

## Methodology and Architecture

**Experimental System:**
- Mouse models: KB1P (K14cre;Brca1^F/F;p53^F/F) and KB1PM (KB1P with Mdr1a/b knockout, Pgp-deficient) mammary tumor models
- Orthotopic transplantation of individual tumors into syngeneic FVB/N mice
- Resistance acquired by in vivo treatment and tumor regrowth

**Key Assays:**
- **In vivo drug response:** olaparib (50 mg/kg i.p., 28 days), AZD2461 (100 mg/kg p.o., 28 or 100 days), topotecan, cisplatin, doxorubicin
- **PAR ELISA:** pharmacodynamic confirmation that PARP activity remains inhibited in resistant tumors (ruling out target alteration as resistance mechanism)
- **IHC:** 53BP1 protein detection in FFPE tumor sections; intratumoral heterogeneity assessed
- **RAD51/γH2AX IRIF:** confocal microscopy after 10 Gy IR; functional readout of HR capacity
- **Trp53bp1 sequencing:** cDNA and genomic sequencing to identify somatic inactivating mutations
- **aCGH:** copy number profiling to confirm cell line identity and detect genomic alterations
- **shRNA knockdown and reconstitution:** lentiviral delivery of two independent shRNAs against Trp53bp1; pCMH6K-Trp53bp1-HA reconstitution in 53BP1-null resistant line
- **Clonogenic assays:** olaparib dose-response curves in tumor cell lines (IC50 determination)
- **Survival analysis:** Kaplan-Meier curves, Gehan-Breslow-Wilcoxon test

**53BP1 Biology Exploited:**
- 53BP1 normally blocks DNA end resection at DSBs, maintaining NHEJ dominance and suppressing HR
- In BRCA1-deficient cells, 53BP1 loss allows RAD51-mediated HR to partially compensate for BRCA1 absence
- This partial HR restoration reduces dependence on PARP-mediated SSB repair

## Results

| Experiment | Key Finding |
|---|---|
| KB1P vs. KB1PM olaparib survival | Pgp elimination significantly prolonged survival (P = 0.0392); all tumors still became resistant |
| 53BP1 IHC in resistant tumors | 3/11 olaparib-resistant KB1PM tumors lost 53BP1; intratumoral heterogeneity present |
| Trp53bp1 mutation analysis | Exon 25-26 duplication (frameshift), Q626* truncation identified in resistant tumors |
| RAD51 IRIF in KB1PM5 cell lines | Olaparib-resistant (53BP1-negative) cells formed RAD51 IRIFs; sensitive (53BP1-positive) cells did not |
| shRNA Trp53bp1 knockdown in vitro | IC50 shift: B11 shNT 11 nmol/L → sh53BP1 32 nmol/L; G3 shNT 8 nmol/L → sh53BP1 78–155 nmol/L |
| Trp53bp1 reconstitution | Resistant KB1P-3.12 IC50 reduced from 10 to 4 nmol/L upon 53BP1 restoration |
| shRNA in vivo (KB1P-B11) | sh53BP1 tumors completely non-responsive to olaparib (P < 0.0001) |
| Cross-resistance: topotecan | Resistant tumors cross-resistant (P = 0.003); 3/20 topotecan-resistant tumors also lost 53BP1 |
| Cross-resistance: cisplatin/doxorubicin | Partial cross-resistance (P = 0.0167 and P = 0.0172 respectively) |
| AZD2461 28-day treatment | Improved survival vs. olaparib (P = 0.0061); resistance still developed; 3/12 resistant tumors lost 53BP1 |
| AZD2461 100-day treatment | 8/9 mice relapse-free for 300 days; median relapse-free survival doubled (64 to 132 days, P < 0.0001) |

## Related Papers

- **Bunting et al. (2010)** *Nat Struct Mol Biol* — 53BP1 loss rescues BRCA1 deficiency and blocks end resection; foundational mechanistic basis for this study's resistance model
- **Bouwman et al. (2010)** *Nat Struct Mol Biol* — 53BP1 loss associated with triple-negative and BRCA-mutated breast cancers in vitro
- **Rottenberg et al. (2008)** *Proc Natl Acad Sci* — Original KB1P mouse model; established Pgp-mediated PARPi resistance; AZD2461 rationale
- **Edwards et al. (2008)** *Nature* — Intragenic BRCA2 deletion as cisplatin resistance mechanism (precedent for somatic reversion)
- **Sakai et al. (2008)** *Nature* — Secondary BRCA2 mutations restore function and cause PARPi/cisplatin resistance
- **Drost et al. (2011)** *Cancer Cell* — BRCA1 RING function dispensable for therapy resistance in the KB1P model
- **Zander et al. (2010)** *Cancer Res* — KB1P tumor sensitivity/resistance to topotecan; cross-resistance context
- **Patel et al. (2011)** *Proc Natl Acad Sci* — NHEJ drives PARPi lethality in HR-deficient cells; mechanistic context for 53BP1/NHEJ role
- **Huertas & Jackson (2009)** *J Biol Chem* — CtIP-mediated DNA end resection and HR regulation; mechanistic basis for 53BP1 end-resection blocking
