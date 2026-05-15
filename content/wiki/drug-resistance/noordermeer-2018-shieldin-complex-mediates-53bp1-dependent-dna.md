---
title: "The shieldin complex mediates 53BP1-dependent DNA repair"
authors: "Sylvie M. Noordermeer, Salomé Adam, Dheva Setiaputra, et al."
year: 2018
doi: "10.1038/s41586-018-0340-7"
source: "noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna.pdf"
pdf_filename: "noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna.pdf"
source_collection: "plus-batch-2026-05"
tags: [53BP1, shieldin, NHEJ, homologous-recombination, BRCA1, PARPi-resistance, DNA-damage-response, DSB-repair, end-resection, ssDNA-binding, drug-resistance, CRISPR-screen]
---

## Summary

Noordermeer et al. (2018, *Nature*) identify **shieldin**, a four-subunit protein complex that acts as the direct downstream effector of 53BP1 in determining DNA double-strand break (DSB) repair pathway choice. The complex consists of SHLD1 (C20orf196), SHLD2 (FAM35A), SHLD3 (CTC-534A2.2), and REV7 (MAD2L2). Shieldin accumulates at DSBs in a 53BP1- and RIF1-dependent manner and physically protects DNA ends from nucleolytic resection by binding single-stranded DNA (ssDNA) through OB-fold domains on SHLD2, thereby favoring NHEJ over homologous recombination (HR). Loss of any shieldin subunit restores HR in BRCA1-deficient cells, causing resistance to PARP inhibitors (PARPi) — establishing shieldin alterations as a clinically relevant mechanism of PARPi resistance in BRCA1-mutated cancers.

## Key Contributions

1. **Shieldin complex discovery:** Three independent CRISPR-Cas9 olaparib/talazoparib resistance screens in BRCA1-deficient cells (RPE1 BRCA1^KO, SUM149PT) converged on C20orf196 (SHLD1), FAM35A (SHLD2), and CTC-534A2.2 (SHLD3) as top hits alongside known pathway components (53BP1, RIF1, REV7). IP-MS and sequential affinity purification confirmed these four proteins form a single complex, named shieldin.

2. **53BP1 pathway effector:** Shieldin acts downstream of 53BP1-RIF1. SHLD3 is the most apical subunit and physically interacts with RIF1. SHLD3-REV7 forms a 53BP1-recruitment module that binds the SHLD2 N-terminus (residues 1–50), while the SHLD2 C-terminus (residues 421–904, termed SHLD2-C) provides OB-fold domains that bind ssDNA at DSB ends with Kd ~11 nM. SHLD1 stabilizes this interaction.

3. **Mechanism — ssDNA protection and resection antagonism:** SHLD2-C preferentially binds ssDNA over dsDNA (EMSA). Artificially tethering SHLD2 to DSBs (FHA-SHLD2-C fusion to RNF8) suppresses RAD51 foci independently of upstream 53BP1, demonstrating direct effector function. SHLD2 OB-fold mutants defective in ssDNA binding fail to suppress HR, confirming the mechanistic centrality of DNA end protection.

4. **Biological consequences of shieldin loss:**
   - Elevated pRPA32 (S4/S8) indicating hyper-resection
   - Increased RAD51 foci and gene conversion (traffic light reporter) — HR restoration in BRCA1^KO cells
   - Impaired immunoglobulin class switch recombination (CSR) in CH12F3-2 cells; epistatic with 53bp1
   - Impaired random plasmid integration (NHEJ surrogate) to levels similar to 53BP1-deficient cells

5. **PARPi resistance mechanism:** SHLD1 or SHLD2 knockout in RPE1 BRCA1^KO cells restores olaparib sensitivity. Shld1/Shld2-mutant KB1P murine mammary tumours show only partial olaparib response in vivo, with most mice succumbing by day 60 vs. sustained responses in the control arm. Shieldin is epistatic with 53BP1 for talazoparib sensitivity in SUM149PT cells. Shieldin therefore defines a molecular node where loss converts BRCA1-deficient tumours from PARPi-sensitive to PARPi-resistant.

## Methodology and Architecture

### Genetic Approach
- Three genome-wide CRISPR-Cas9 dropout screens in BRCA1-deficient human cancer cell lines (RPE1 and SUM149PT) with olaparib or talazoparib at near-lethal doses; analyzed by MAGeCK.
- Competitive growth assays to validate screen hits; clonogenic survival assays.
- Ionizing radiation sensitivity screen (TKOv2 library) in RPE1-hTERT TP53^-/- cells.

### Complex Identification and Architecture
- IP-MS of REV7 to expand the protein interaction network; discovery of FAM35A and C20orf196 as novel interactors.
- Sequential affinity purification (Strep-HA-FAM35A + GFP-Trap on Flag-C20orf196/VS-CTC-534A2.2 + GFP-REV7) from 293T lysates.
- Deletion mapping of SHLD2 binding sites for SHLD3 and REV7 using N-terminal truncations.
- VS-SHLD3 co-IP with endogenous 53BP1 and RIF1 from 293T cells.

### Localization and DSB Recruitment
- GFP-tagged SHLD1/2/3 immunofluorescence at ionizing radiation-induced foci (IRIF) and laser microirradiation sites in RPE1-hTERT TP53^-/- cells.
- U2OS-FokI inducible chromatin recruitment assay using mCherry-LacR-RIF1(1-967); shieldin recruitment to LacO arrays assessed.
- siRNA knockdown panel (53BP1, RIF1, REV7, SHLD1, SHLD2, SHLD3) to determine epistatic order of DSB recruitment.

### Functional Assays
- RAD51 focus formation (ionizing radiation) as HR activity readout
- Traffic light reporter assay for gene conversion quantification
- pRPA32 S4/S8 immunoblotting for end-resection measurement
- CSR (class switch recombination) assay in CH12F3-2 murine B lymphoma cells
- Plasmid integration assay (NHEJ efficiency)
- Clonogenic survival and competitive growth assays with olaparib, talazoparib, cisplatin
- In vivo KB1P tumour organoid transplant in NMRI nude mice; olaparib 100 mg/kg i.p. for 80 days

### Biochemistry
- EMSA with purified SHLD2-C–SHLD1 complexes and ^32P-labeled ssDNA probe; competitor oligonucleotides to assess ssDNA vs. dsDNA selectivity
- Kd determination by saturation binding EMSA
- SHLD2 OB-fold structural modelling on RPA1 crystal structure (PDB: 4GNX)
- Structure-function analysis of OB-fold point mutants (m1–m4) and splice variant SHLD2(S)

## Results

| Outcome | Finding |
|---|---|
| Shieldin complex composition | SHLD1, SHLD2, SHLD3, REV7; confirmed by sequential AP-MS |
| Shieldin DSB localization | All four subunits accumulate at DSBs; dependent on 53BP1 and RIF1 |
| Complex architecture | SHLD3 (apical) — REV7 — SHLD2-N — SHLD2-C (ssDNA binding); SHLD1 stabilizes SHLD2-C |
| ssDNA binding | SHLD2-C–SHLD1 binds ssDNA with Kd ~11 nM; preference over dsDNA |
| OB-fold mutant m1 | Completely defective in ssDNA binding (EMSA) and HR suppression (RAD51 foci) |
| Shieldin loss — HR | Restores RAD51 foci and gene conversion in BRCA1^KO cells; epistatic with 53BP1 |
| Shieldin loss — resection | Elevated pRPA32 S4/S8 after ionizing radiation |
| Shieldin loss — NHEJ | Impairs CSR in CH12F3-2 cells and random plasmid integration |
| PARPi resistance (cell) | SHLD1/SHLD2 KO confers olaparib/talazoparib resistance in BRCA1^KO cells |
| PARPi resistance (in vivo) | Shld1/Shld2-mutant KB1P tumours partially resist olaparib; reduced survival benefit |
| Epistasis | Shieldin and 53BP1 are in the same genetic pathway for HR and PARPi sensitivity |

## Related Papers

- **Mirman et al. (2018) Nature** — Companion paper showing 53BP1-shieldin-dependent DSB resection through CST- and Polα-dependent fill-in. DOI: 10.1038/s41586-018-0324-7
- **Boersma et al. (2015) Nature** — MAD2L2/REV7 controls DSB repair by inhibiting 5' end resection; earliest evidence for REV7 role in 53BP1 pathway.
- **Zimmermann et al. (2013) Science** — 53BP1 regulates DSB repair via RIF1 to control 5' end resection; established RIF1 as upstream of shieldin.
- **Jaspers et al. (2013) Nat. Struct. Mol. Biol.** — Loss of 53BP1 causes PARPi resistance in BRCA1-mutated mouse mammary tumours; set the clinical context.
- **Bunting et al. (2010) Cell** — 53BP1 inhibits HR in Brca1-deficient cells; foundational paper for the 53BP1/BRCA1 antagonism concept.
- **Barazas et al. (2018) Cell Rep.** — CST complex mediates end protection at DSBs and promotes PARPi sensitivity; related end-protection mechanism.
- **Lord & Ashworth (2017) Science** — Review of PARPi synthetic lethality in the clinic; broader context.
- **Feng et al. (2013) J. Biol. Chem.** — RIF1 counteracts BRCA1-mediated resection during DNA repair.
