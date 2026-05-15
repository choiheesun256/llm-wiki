---
title: "A HUWE1 defect causes PARP inhibitor resistance by modulating the BRCA1-Delta11q splice variant"
authors:
  - Stephen J. Pettitt
  - Nan Shao
  - Diana Zatreanu
  - Jessica Frankum
  - Ilirjana Bajrami
  - Rachel Brough
  - Dragomir B. Krastev
  - Theodoros I. Roumeliotis
  - Jyoti S. Choudhary
  - Sonja Lorenz
  - Alistair Rust
  - Johann S. de Bono
  - Timothy A. Yap
  - Andrew N. J. Tutt
  - Christopher J. Lord
year: 2023
doi: "10.1038/s41388-023-02782-8"
journal: "Oncogene"
category: drug-resistance
tags:
  - PARP-inhibitor
  - drug-resistance
  - HUWE1
  - BRCA1
  - splice-variant
  - homologous-recombination
  - ovarian-cancer
  - ubiquitin-ligase
  - PARPi-resistance-mechanism
pdf_path: "llm-wiki/papers/plus/pettitt-2023-huwe1-defect-causes-parp-inhibitor.pdf"
pdf_filename: "pettitt-2023-huwe1-defect-causes-parp-inhibitor.pdf"
source_collection: "plus-batch-2026-05"
---

## Summary

PARP inhibitors (PARPi) are standard-of-care for cancers with homologous recombination (HR) defects, including BRCA1/2 mutant tumours. However, de novo and acquired resistance are major clinical challenges. A well-known resistance mechanism is BRCA1/2 reversion mutation, but many resistant tumours have no identified mechanism.

This study identifies **HUWE1** — an E3 ubiquitin ligase that normally ubiquitylates and degrades BRCA1 — as a novel mediator of PARPi resistance. When HUWE1 is lost or functionally impaired, the BRCA1-Delta11q splice variant (which lacks most of exon 11 but retains partial function) accumulates. This elevated BRCA1-Delta11q partially restores HR activity and confers resistance to talazoparib and olaparib. Critically, this mechanism is highly context-specific: it only operates in cells that carry BRCA1 exon 11 mutations of a type that still allow BRCA1-Delta11q expression. Cells with BRCA2 mutations, BRCA1 knockout, or BRCA1 exon 22 mutations (which abrogate Delta11q expression) do not show resistance upon HUWE1 loss.

A clinical case of a BRCA1 exon 11 mutant high-grade serous ovarian cancer patient with acquired PARPi resistance revealed two somatic HUWE1 missense mutations (p.G4253A; p.I4257T) in the HECT catalytic domain emerging after PARPi treatment, with no BRCA1 reversion, supporting clinical relevance of HUWE1 mutations as a resistance mechanism.

## Key Contributions

1. **HUWE1 controls BRCA1-Delta11q stability.** HUWE1 normally ubiquitylates BRCA1-Delta11q, targeting it for proteasomal degradation. HUWE1 silencing (siRNA, CRISPRi) or inhibition (BI8626) stabilizes BRCA1-Delta11q protein, as shown by cycloheximide chase assays.

2. **HUWE1 loss confers PARPi resistance in a mutation-context-specific manner.** Resistance is observed only in BRCA1 exon 11 mutant cells capable of expressing BRCA1-Delta11q (SUM149-sgGFP, UWB1.289), not in BRCA2 mutant (Capan1), BRCA1/2 wild-type (CAL51), or BRCA1 knockout (RPE1) cells.

3. **BRCA1-Delta11q partially restores HR.** HUWE1 silencing significantly increases the frequency of IR-induced RAD51 nuclear foci in BRCA1 exon 11 mutant cells, indicating functional HR rescue (p < 0.0001).

4. **Clinical validation in a single patient.** Somatic HUWE1 HECT-domain mutations (p.G4253A; p.I4257T) were identified exclusively in the post-PARPi biopsy of a HGSOC patient without BRCA1 reversion, supporting a causal role in acquired resistance.

5. **HUWE1 as a candidate biomarker.** The study identifies HUWE1 mutational status and BRCA1-Delta11q expression as candidate biomarkers for PARPi resistance evaluation in clinical trials for patients with BRCA1 exon 11 mutations.

## Methodology and Architecture

### Experimental system
The study uses an isogenic SUM149 cell line panel derived from a BRCA1 exon 11 frameshift mutant (BRCA1:c.2169delT) triple-negative breast cancer. Four derivatives with distinct BRCA1 expression states were used:

| Cell line | BRCA1 status | BRCA1-Delta11q expression | PARPi sensitivity |
|-----------|-------------|--------------------------|-------------------|
| SUM149-Ex22 | Exon 11 + exon 22 truncation | Absent | Highly sensitive |
| SUM149-sgGFP | Exon 11 frameshift (control) | Low/normal | Intermediate |
| SUM149-Ex11#2C2 | Exon 11 reversion | Full-length BRCA1 | Resistant |
| SUM149-Ex22+Delta11q | Exon 11 + exon 22 + Delta11q transgene | High (ectopic) | Resistant |

Additional lines: UWB1.289 (BRCA1 exon 11 mutant HGSOC), CAL51 (BRCA1/2 wt), Capan1 (BRCA2 mutant), RPE1 BRCA1-/-.

### HUWE1 perturbations
- siRNA knockdown (siHUWE1 vs. Allstar non-targeting control)
- CRISPRi with dCas9-KRAB + sgRNA2/3 targeting HUWE1 (doxycycline-inducible system)
- Small molecule inhibition with BI8626 (A-toolbox compound)

### Readouts
- **PARPi dose-response:** CellTiter-Glo viability assay, 5-day exposure to talazoparib or olaparib, 384-well plates
- **Protein stability:** Cycloheximide (150 ug/ml) chase over 0-6 hours; Western blot for BRCA1-Delta11q, HUWE1, Lamin B, c-Myc
- **HR function:** IR-induced RAD51 and gamma-H2AX nuclear foci by immunofluorescence (10 Gy X-ray, 4 h recovery); automated quantification with CellProfiler
- **Proteomics:** Mass spectrometry of HUWE1 knockdown cells; ProteomeXchange PXD040430
- **Clinical sequencing:** WES from serial FFPE biopsies, BWA/GRCh37, MuTect 1.1.4 + GATK, manual IGV inspection; ctDNA from CompAKT trial

## Results

### HUWE1 silencing stabilizes BRCA1-Delta11q and causes PARPi resistance

In SUM149-sgGFP cells (which express BRCA1-Delta11q at low baseline levels), siHUWE1 increases steady-state BRCA1-Delta11q. CHX chase confirms that BRCA1-Delta11q protein persists for >2 hours post-CHX in siHUWE1 cells, while it rapidly declines in control cells. The resistance phenotype matches that of a BRCA1 reversion (SUM149-Ex11#2C2): cells become profoundly PARPi resistant. The effect is specific — SUM149-Ex22 cells (which cannot express Delta11q) show only modest PARPi sensitivity change upon HUWE1 silencing.

The HUWE1 inhibitor BI8626 (2.5-5 uM) combined with 1 nM talazoparib also reduces confluence relative to talazoparib alone, demonstrating the effect is on-target.

### BRCA1 exon 11 mutation context is required

HUWE1 silencing causes significant PARPi resistance (ANOVA p < 0.0001) in two independent BRCA1 exon 11 mutant cell lines (SUM149, UWB1.289 for both talazoparib and olaparib). No significant resistance is seen in:
- CAL51 (BRCA1/2 wt) — slight sensitization to PARPi upon HUWE1 silencing
- Capan1 (BRCA2 mutant) — no change
- RPE1 BRCA1-/- — no change
- RPE1 parental — no change

This demonstrates that the mechanism is strictly dependent on the ability to express BRCA1-Delta11q.

### HUWE1 loss partially rescues HR

Immunofluorescence in SUM149-sgGFP cells: siHUWE1 significantly increases the number of cells forming RAD51 foci after IR (p < 0.0001). The rescue is partial (not to wild-type levels), consistent with BRCA1-Delta11q providing incomplete HR restoration. This is analogous to the partial HR restoration seen with other non-reversion resistance mechanisms.

### Clinical HUWE1 mutations in PARPi-resistant HGSOC

A 54-year-old patient with germline BRCA1:c.3190delCTTG (exon 11 frameshift) HGSOC had 11 months partial response to talazoparib, then progressed. Serial biopsies showed no BRCA1 reversion mutations at any timepoint (germline deletion VAF ~1, consistent with maintained LOH). In the post-PARPi biopsy (biopsy 4), two linked somatic HUWE1 missense mutations in cis were identified: c.[12758G>C; 12770T>C] encoding p.[G4253A; I4257T]. These mutations affect the HECT domain near (but not at) the catalytic cysteine C4341. They were absent from pre-PARPi and first-recurrence biopsies, suggesting they emerged under PARPi selection pressure.

## Related Papers

- [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — prior genome-wide CRISPR screen identifying PARP1 mutations as PARPi resistance mechanism
- [[jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss as PARPi resistance mechanism in Brca1-mutant mammary tumours
- [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — Shieldin complex mediates 53BP1-dependent DNA repair and PARPi sensitivity
- [[edwards-2008-resistance-therapy-caused-intragenic-deletion]] — intragenic deletion causing drug resistance
- [[sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]] — secondary/reversion mutations as cisplatin resistance mechanism
- [[li-2020-parp-inhibitor-resistance-underlying-mechanisms]] — review of PARPi resistance mechanisms
- [[cadzow-2024-usp1-inhibitor-ksq-4279-overcomes-parp]] — USP1 inhibitor to overcome PARPi resistance
- [[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]] — clonal evolution in acquired PARPi resistance
