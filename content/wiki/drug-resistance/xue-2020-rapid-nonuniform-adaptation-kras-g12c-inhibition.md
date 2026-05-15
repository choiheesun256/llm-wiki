---
title: "Rapid non-uniform adaptation to conformation-specific KRAS(G12C) inhibition"
authors: "Jenny Y. Xue, Yulei Zhao, Jordan Aronowitz, Trang T. Mai, Alberto Vides, Besnik Qeriqi, Dongsung Kim, Chuanchuan Li, Elisa de Stanchina, Linas Mazutis, Davide Risso, Piro Lito"
year: 2020
doi: "10.1038/s41586-019-1884-x"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition.pdf"
pdf_filename: "xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition.pdf"
source_collection: "plus-batch-2026-05"
tags: [KRAS-G12C, drug-resistance, adaptive-resistance, scRNA-seq, quiescence, EGFR, AURKA, HBEGF, KRAS-inhibitor, lung-cancer, non-uniform-adaptation, single-cell, sotorasib, nucleotide-cycling, trajectory-inference, conformation-specific]
---

# Rapid non-uniform adaptation to conformation-specific KRAS(G12C) inhibition

> Xue et al. (2020) *Nature* 577, 421–425. DOI: [10.1038/s41586-019-1884-x](https://doi.org/10.1038/s41586-019-1884-x)
> Source note: [[sources/xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]]

## Summary

Xue et al. (2020) use single-cell RNA sequencing (scRNA-seq) at single-cell resolution to show that KRAS(G12C)-mutant lung cancer cell populations respond non-uniformly to conformation-specific KRAS(G12C) inhibitors (G12Ci). Within 72 hours of treatment — before any genomic mutations can be selected — the population splits into two divergent trajectories: the majority of cells are sequestered into a G0 quiescent state with low KRAS activity (inhibited cells), while a minority (~20%) rapidly reactivate KRAS signaling and resume proliferation (adapting cells).

The core mechanistic insight is that KRAS(G12C) continuously cycles between GDP-bound (inactive, drug-targetable) and GTP-bound (active, drug-insensitive) conformations. The G12Ci can only bind the GDP-bound form. As the drug eliminates the initial pool of active KRAS(G12C), some cells — particularly those receiving upstream growth factor signals — produce new KRAS(G12C) protein that is rapidly converted to the active GTP-bound state before the drug can engage it. This newly synthesized KRAS(G12C) sustains downstream effector signaling and drives escape from drug-induced quiescence.

Two key adaptive signals enable this escape: (1) **HBEGF-EGFR signaling**, which drives nucleotide exchange on KRAS(G12C) and reactivates downstream pathways, and (2) **AURKA**, which forms a complex with KRAS(G12C) and CRAF to maintain active KRAS in a drug-insensitive state. Pharmacological targeting of either EGFR or AURKA in combination with G12Ci suppresses adaptive KRAS reactivation and provides synergistic antitumor effects in vivo. The study establishes non-uniform adaptive fitness as a fundamental barrier to durable responses with first-generation KRAS(G12C) inhibitors and argues this mechanism must be overcome for complete clinical efficacy.

## Key Contributions

1. **Non-uniform, rapid, cell-autonomous adaptation**: Within 72h, KRAS(G12C)-mutant populations diverge into inhibited (path 1) and adapting (path 2) trajectories. This occurs through pre-existing heterogeneity in nucleotide-cycling states and upstream signaling — not through acquired mutations.

2. **New KRAS(G12C) synthesis escapes covalent inhibition**: Drug-induced G12C output score analysis and actinomycin D/siRNA experiments establish that newly synthesized KRAS(G12C) protein escapes covalent binding by rapidly adopting the GTP-bound conformation, providing the pool of active KRAS that sustains adapting cells.

3. **HBEGF-EGFR axis is the primary upstream driver of adaptation**: HBEGF is upregulated in quiescent clusters and secreted to activate EGFR on neighboring cells. EGF stimulation of FACS-sorted quiescent cells reactivates KRAS via EGFR/SHP2-mediated nucleotide exchange. Combined G12Ci + EGFR or SHP2 inhibitor shows in vivo tumor growth suppression significantly beyond G12Ci monotherapy.

4. **AURKA stabilizes active KRAS(G12C) downstream**: AURKA complexes with KRAS(G12C) and CRAF; AURKA inhibition combined with G12Ci displaces both AURKA and CRAF from KRAS, enhancing pCRAF/pERK suppression and producing synergistic in vivo antitumor effects. AURKA is upregulated preferentially in adapting low-p27 cells.

5. **Conformational cycling is mechanistically essential**: KRAS^G12C siRNA (conformation-agnostic suppression) produces uniform quiescence — no bimodal escape — demonstrating that the heterogeneous response is uniquely dependent on the nucleotide-cycling property of KRAS(G12C) that G12Ci exploits.

6. **Non-uniform fitness as a general adaptive mechanism**: The study provides a conceptual framework for how targeted therapies that depend on protein conformational states can be systematically bypassed at the population level, with implications beyond KRAS for other conformation-dependent oncogene inhibitors.

## Methodology

### Experimental System
- Three KRAS(G12C)-mutant lung cancer cell lines: H358, H2122, SW1573; treated with ARS1620 (G12Ci, 10 µM) for 0, 4, 24, 72 h
- Quiescence biosensor: mVenus-p27^K- (CDK-binding defective) for FACS-based isolation of G0 (high-p27) vs. proliferating (low-p27) cells
- Doxycycline-inducible HA-KRAS(G12C) and siRNA-resistant KRAS(G12C) constructs to decouple new synthesis from inhibition
- In vivo: H358/H2122 xenografts; nu/nu athymic mice; ARS1620 200 mg/kg; AURKA inhibitor (alisertib) 30/50 mg/kg; EGFR inhibitor (gefitinib) 100 mg/kg

### Single-Cell Transcriptomics and Trajectory Inference
- 10x Genomics scRNA-seq; 10,177 cells after QC; ZINB-WaVE normalization + t-SNE/diffusion component projection
- Slingshot trajectory inference anchored at 0h cluster; pseudotime ordering along three paths
- KRAS(G12C) output score: average expression of 212 KRAS(G12C)-suppressed genes per cell, used as a KRAS activity proxy

### Functional Validation
- Genome-wide CRISPR-Cas9 screen (Brunello library, 4 sgRNAs/gene, MAGeCK analysis) in H358 cells treated with G12Ci — identified EGFR signaling (EGFR, GRB2, SOS1, SHP2) and AURKA as resistance modulators
- RAS activation assay (GST-RAF1 RBD pull-down) and immunoprecipitation (HA-KRAS(G12C)) for KRAS-GTP measurement and complex analysis
- Immunoblotting (pEGFR, pERK, pCRAF, KRAS-GTP, p21, p27, AURKA, CCNB1, GAPDH)
- Flow cytometry (p27^K- biosensor, propidium iodide cell-cycle), clonogenic assay, Bliss synergy determination
- Actinomycin D transcription block and KRAS-specific siRNA to confirm new synthesis requirement
- RASless MEFs (NRAS^-/-, KRAS^G12C knock-in) for clean genetic dissection

## Results

| Finding | Key Data |
|---|---|
| Bimodal population response to G12Ci | ~80% quiescent (high-p27), ~20% adapting (low-p27) by FACS at 72h |
| Adapting cells have higher KRAS-GTP | Low-p27 cells show higher KRAS-GTP by pull-down despite G12Ci treatment |
| HBEGF secretion increases ~2-fold | ELISA on conditioned medium from G12Ci-treated H358 cells at 48–72h |
| EGF rescues quiescence escape (at 24–48h only) | Flow cytometry shift in p27^K- distribution; timing-dependent |
| G12Ci + gefitinib vs. G12Ci alone in vivo | Significant tumor growth reduction (p=0.004, n=4 mice, H2122 xenograft) |
| G12Ci + alisertib vs. G12Ci alone in vivo | Significant tumor growth reduction (p=0.035, n=4 mice, H358 xenograft) |
| ActD/siKRAS prevents KRAS-GTP rebound | Abolishes adaptive KRAS reactivation seen with G12Ci alone |
| Dox-KRAS(G12C) attenuates G12Ci effect | Inducible KRAS expression phenocopies adaptive escape |
| siRes-G12C without drug: ~30% escape quiescence | Phenocopies G12Ci response; confirms new KRAS synthesis sufficient |
| KRAS^G12C siRNA → uniform quiescence | No bimodal escape; establishes conformational cycling as mechanistic requirement |

The primary in vivo finding is that combined EGFR or AURKA inhibition with G12Ci provides significantly stronger antitumor effects than G12Ci monotherapy, validating the adaptive mechanisms identified by scRNA-seq as therapeutically actionable.

## Related Papers

- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — Resistance through secondary intragenic deletions in BRCA2 restoring HR function; contrasts mutational vs. adaptive (non-mutational) resistance
- [[drug-resistance/antonarakis-2014-ar-v7-resistance-enzalutamide-abiraterone-prostate]] — AR-V7 splice variant as a mechanism of resistance to AR-targeted therapies in prostate cancer; parallels the concept of generating a drug-insensitive protein form
- [[drug-resistance/adua-2022-brain-metastatic-outgrowth-osimertinib-resistance]] — Osimertinib resistance in brain metastases driven by RhoA/SRF; shares the theme of adaptive non-mutational resistance to EGFR/KRAS pathway inhibitors in lung cancer
- [[drug-resistance/chmielecki-2023-acquired-resistance-first-line-osimertinib]] — Acquired resistance mechanisms to first-line osimertinib in EGFR-mutant NSCLC; represents the longer-term resistance landscape that follows the initial adaptive phase characterized by Xue et al.
- [[drug-resistance/dhimolea-2021-pleiotropic-mechanisms-drive-endocrine-resistance]] — Multiple convergent mechanisms driving resistance to endocrine therapy; echoes the pleiotropic adaptive fitness concept
- [[drug-resistance/balbas-2013-overcoming-resistance-antiandrogens-rational-design]] — Rational drug design to overcome antiandrogen resistance; parallels the combinatorial strategy (G12Ci + EGFR/AURKA inhibitor) proposed in Xue et al.
