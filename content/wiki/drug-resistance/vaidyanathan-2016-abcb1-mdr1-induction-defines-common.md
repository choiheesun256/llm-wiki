---
title: "ABCB1 (MDR1) induction defines a common resistance mechanism in paclitaxel- and olaparib-resistant ovarian cancer cells"
authors: "Aparajitha Vaidyanathan, Lynne Sawers, Anne-Louise Gannon, Probir Chakravarty, Alison L Scott, Susan E Bray, Michelle J Ferguson, Gillian Smith"
year: 2016
doi: "10.1038/bjc.2016.203"
source: "vaidyanathan-2016-abcb1-mdr1-induction-defines-common.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/vaidyanathan-2016-abcb1-mdr1-induction-defines-common.pdf"
pdf_filename: "vaidyanathan-2016-abcb1-mdr1-induction-defines-common.pdf"
source_collection: "plus-batch-2026-05"
tags: [ABCB1, MDR1, P-glycoprotein, drug-resistance, ovarian-cancer, paclitaxel, olaparib, PARP-inhibitor, multidrug-resistance, drug-efflux, AZD2461, rucaparib, verapamil, elacridar, taxane, cross-resistance, gene-amplification]
---

## Summary

Vaidyanathan et al. (2016) identify ABCB1 (MDR1)-encoded P-glycoprotein as a shared resistance mechanism in both paclitaxel- and olaparib-resistant ovarian cancer. Starting from the drug-sensitive A2780 ovarian cancer cell line, the authors generated two novel resistant sublines — A2780pacR (7.49-fold paclitaxel-resistant) and A2780olapR (36.54-fold olaparib-resistant) — by continuous incremental drug selection at concentrations mirroring clinical plasma levels. Whole-genome microarray, qRT-PCR, copy number analysis, western blotting, and immunohistochemistry consistently showed ABCB1 as the top upregulated drug transporter in both lines. A2780pacR additionally acquired ABCB1 gene amplification (4 copies vs. 2 in parental), producing higher P-glycoprotein expression than A2780olapR.

Functionally, both resistant lines showed reduced intracellular CalceinAM accumulation (6.18-fold and 4.49-fold respectively), confirming active P-glycoprotein efflux. P-glycoprotein-Glo ATPase assays confirmed paclitaxel, olaparib, doxorubicin, and rucaparib as direct P-glycoprotein substrates, whereas veliparib and AZD2461 were not. Cross-resistance accordingly extended to doxorubicin and rucaparib but not to veliparib, AZD2461, cisplatin, or carboplatin. Full resistance reversal was achieved with the ABCB1 inhibitors verapamil and elacridar, and by transient siRNA ABCB1 knockdown. PARP1 expression was unchanged in resistant cells, ruling out target modulation.

The key clinical implication is that first-line paclitaxel may induce ABCB1-mediated resistance that subsequently compromises olaparib and rucaparib efficacy, whereas PARPi that are poor P-glycoprotein substrates (AZD2461, veliparib) may retain activity in paclitaxel-pretreated patients.

## Key Contributions

1. **Common ABCB1-mediated resistance to paclitaxel and olaparib**: This study is the first to demonstrate that ABCB1 overexpression constitutes a resistance mechanism shared between a taxane chemotherapy and a PARP inhibitor in ovarian cancer, establishing a clinically important cross-resistance axis.

2. **Functional substrate classification of PARP inhibitors**: Using both CalceinAM efflux and P-glycoprotein-Glo ATPase assays, the authors confirm that olaparib and rucaparib are P-glycoprotein substrates, while veliparib and AZD2461 are not — providing a functional basis for differential clinical activity in drug-resistant patients.

3. **Reversibility of resistance by ABCB1 inhibition**: Complete reversal of both paclitaxel and olaparib resistance by elacridar (5–10 µM) and substantial reversal by verapamil demonstrates that the resistance is pharmacologically tractable, motivating clinical evaluation of ABCB1 inhibitor co-treatment strategies.

4. **ABCB1 gene amplification as a resistance mechanism in paclitaxel-resistant cells**: A2780pacR cells carry 4 ABCB1 gene copies (vs. 2 in parental), demonstrating that chromosome 7q amplification — a well-described event in paclitaxel-resistant ovarian cancers — drives P-glycoprotein overexpression in this model.

5. **PARP1 expression unaltered in resistant cells**: Neither mRNA nor protein level of PARP1 changes in resistant lines, ruling out target downregulation as a resistance mechanism and focusing attention on drug delivery failure via efflux.

## Methodology

**Cell line generation**: A2780pacR and A2780olapR derived from A2780 by continuous incremental exposure to paclitaxel (up to 2 µM) and olaparib (up to 20 µM), respectively, targeting clinical steady-state plasma concentrations. Additional lines A1847 (paclitaxel-resistant) and PE-01 (BRCA2-deficient) used for cross-validation.

**Drug sensitivity**: MTT assay (72 h, 96-well), IC50 from log dose–response curves (GraphPad Prism 6). Drug panel: paclitaxel, olaparib, doxorubicin, rucaparib, veliparib, AZD2461, cisplatin, carboplatin, verapamil, elacridar. Concentrations designed to mimic 0–200% of clinical peak plasma levels.

**ABCB1 expression profiling**:
- qRT-PCR (Taqman Hs00184500_m1); loading control 18S rRNA; SDS 2.3 software.
- Copy number: Taqman assay Hs04962504_cn; CopyCaller Software; healthy volunteer blood controls.
- Western blot: SC-55510 antibody (1:1000); ECL detection.
- IHC: DAKO EnVision FLEX system; formalin-fixed paraffin-embedded cell pellets; SC-55510 at 1:2000.
- Whole-genome microarray: Illumina HT-12 BeadChip; Bioconductor/Limma pipeline; FDR q < 0.05 threshold.

**Efflux assays**:
- Vybrant CalceinAM (Vybrant Multidrug Resistance Assay): 0.25 µM calceinAM, 15 min, 37°C; fluorescence at 494/517 nm. Reduced fluorescence = higher efflux activity.
- P-glycoprotein-Glo: recombinant P-gp membranes; ATPase-coupled luciferase; 200 µM verapamil as positive control; substrate status assigned if dose-dependent luminescence increase observed.

**siRNA knockdown**: SMARTpool ON-TARGETplus ABCB1 siRNA (25 nM), Lipofectamine RNAiMAX; knockdown confirmed by qRT-PCR at 24–72 h; chemosensitivity assessed after knockdown.

## Results

| Cell line | IC50 paclitaxel (µM) | IC50 olaparib (µM) | IC50 doxorubicin (µM) | IC50 rucaparib (µM) | IC50 AZD2461 (µM) | IC50 veliparib (µM) |
|-----------|---------------------|-------------------|----------------------|--------------------|--------------------|---------------------|
| A2780 | 0.75 | 0.59 | 0.05 | ~2.3–2.6 | ~2.4 | ~6.2 |
| A2780pacR | 5.63 (7.5×) | 21.80 (37×) | 2.69 (54×) | 11.68 (5.1×) | 1.35 (1.09×, NS) | 20.09 (3.25×, NS) |
| A2780olapR | 0.58 (0.77×, NS) | 21.56 (36.5×) | 0.17 (3.4×) | 16.49 (6.4×) | 2.56 (1.05×, NS) | 5.86 (0.95×, NS) |

**ABCB1 expression**: ABCB1 mRNA was the most highly upregulated drug transporter in both resistant lines by microarray. qRT-PCR confirmed high ABCB1 in A2780pacR and A2780olapR; absent in A2780. ABCB1 copy number 4 in A2780pacR vs. 2 in all others. Protein and IHC confirmed P-glycoprotein upregulation; higher in A2780pacR than A2780olapR, consistent with gene amplification.

**Efflux**: CalceinAM intracellular fluorescence reduced 6.18-fold (A2780pacR, P = 0.005) and 4.49-fold (A2780olapR, P = 0.03). Verapamil dose-dependently restored calcein retention only in resistant (ABCB1-expressing) cells. P-glycoprotein-Glo confirmed paclitaxel, olaparib, doxorubicin, and rucaparib as P-gp substrates; veliparib and AZD2461 showed no ATPase activation.

**Reversal**: Verapamil (10 µM) completely reversed paclitaxel resistance in A2780pacR and achieved >80% olaparib re-sensitisation in A2780olapR. Elacridar (10 µM) completely reversed both paclitaxel and olaparib resistance in both lines. siRNA ABCB1 knockdown also re-sensitised cells.

**PARP1**: No change in PARP1 mRNA (microarray and qRT-PCR) or protein (western blot) in resistant lines.

**ABCC1/MRP1**: No differential expression detected; resistance mechanism is ABCB1-specific.

## Related Papers

- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — Intragenic BRCA2 deletions as an alternative, HR-restoration-based PARPi resistance mechanism; contrasts with efflux-based resistance described here.
- [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss as a PARPi resistance mechanism; AZD2461 proposed to circumvent this, consistent with AZD2461 being a non-P-gp substrate.
- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — Replication fork stabilisation as another mechanistic axis of PARPi resistance; non-efflux pathway.
- [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]] — Secondary BRCA2 reversion mutations in platinum-resistant ovarian cancer; mechanistically distinct from ABCB1-mediated resistance.
