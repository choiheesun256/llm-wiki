---
title: "ABL1-dependent OTULIN phosphorylation promotes genotoxic Wnt/β-catenin activation to enhance drug resistance in breast cancers"
authors: "Wei Wang, Mingqi Li, Suriyan Ponnusamy, Yayun Chi, Jingyan Xue, Beshoy Fahmy, Meiyun Fan, Gustavo A. Miranda-Carboni, Ramesh Narayanan, Jiong Wu, Zhao-Hui Wu"
year: 2020
doi: "10.1038/s41467-020-17770-9"
source: "du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating.pdf"
pdf_filename: "du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating.pdf"
source_collection: "plus-batch-2026-05"
tags: [OTULIN, ABL1, c-Abl, Wnt-signaling, beta-catenin, LUBAC, HOIP, linear-ubiquitination, drug-resistance, chemotherapy-resistance, TNBC, breast-cancer, DNA-damage-response, DNA-PK, genotoxic-stress, doxorubicin, imatinib, ubiquitin-proteasome, beta-TrCP, proteasomal-degradation, xenograft, TCGA]
---

## Summary

Wang et al. (2020) identify a genotoxic stress-activated signaling axis — DNA-PK → c-Abl → OTULIN (pTyr56) → β-catenin stabilisation — that activates Wnt/β-catenin signaling independently of canonical Wnt ligands and FZD/LRP receptor complexes, promoting chemotherapy resistance and metastasis in triple-negative breast cancer (TNBC).

The central mechanistic discovery is that LUBAC, the linear ubiquitin chain assembly complex (HOIP/HOIL-1/Sharpin), catalyses M1-linked (linear) polyubiquitination of β-catenin at Lys133. This linear ubiquitination facilitates subsequent K48-linked ubiquitination by SCF-β-TrCP and proteasomal degradation, thereby maintaining Wnt/β-catenin signaling at an off state. OTULIN, a linear linkage-specific deubiquitinase that normally resides in complex with LUBAC via a HOIP-PIM domain interaction, is activated upon genotoxic treatment by Tyr56 phosphorylation. This phosphorylation — driven by DNA-PK-activated c-Abl — disrupts the OTULIN-HOIP interaction and redirects OTULIN to β-catenin, where it removes linear ubiquitin chains, prevents K48-chain conjugation, and stabilises β-catenin for nuclear Wnt/β-catenin activation.

Functionally, OTULIN overexpression conferred ~7.5-fold doxorubicin (Dox) resistance and ~6.2-fold CPT-11 resistance in mammary epithelial cells; OTULIN deletion sensitised MDA-MB-231 cells ~4.5-fold to Dox. In orthotopic TNBC xenografts, OTULIN deletion combined with Dox treatment dramatically suppressed tumour growth (p = 4.24E-10 tumour weight) and lung metastasis. Clinically, high OTULIN expression associated with shorter OS (P = 0.000, n = 5,222) and DFS (P = 8.263E-9, n = 2,604) in breast cancer, particularly in BL2 and Mesenchymal-like TNBC subtypes. Conversely, high LUBAC subunit HOIP/RNF31 expression correlated with better DFS in TNBC patients receiving chemotherapy, consistent with LUBAC-mediated β-catenin suppression being clinically favourable.

## Key Contributions

1. **Genotoxic Wnt/β-catenin activation is ligand- and receptor-independent**: Dox-induced β-catenin stabilisation and TOPFlash activity were preserved in LRP5/6-DKO and DVL1/2/3-TKO cells, and unaffected by Porcupine inhibitor LGK974. This establishes a pharmacologically distinct Wnt activation pathway triggered by DNA damage.

2. **OTULIN as the essential deubiquitinase mediating genotoxic Wnt activation**: OTULIN-KO suppressed genotoxic Wnt activation, and the mechanism depends on OTULIN catalytic activity (C129S mutant inactive); OTULIN removes M1-linked chains from β-catenin at Lys133, antagonising LUBAC-driven degradation.

3. **DNA-PK → c-Abl → OTULIN pTyr56 → β-catenin: a complete genotoxic signaling cascade**: Tyrosine kinase siRNA screen, genetic ABL1 deletion, kinase-dead rescue, DNA-PK inhibitor (Nu7441), and in vitro kinase assay together establish the full phosphorylation pathway; imatinib (c-Abl inhibitor) pharmacologically blocks this cascade.

4. **Lys133 of β-catenin as the M1-ubiquitination site**: K133R mutation reduces both M1 and K48 ubiquitination, stabilises β-catenin, and reduces β-TrCP interaction, demonstrating that linear ubiquitination primes β-catenin for proteasomal degradation.

5. **OTULIN as a drug resistance determinant and prognostic biomarker in TNBC**: In vivo xenograft data and clinical TCGA/KM-Plotter analyses jointly position OTULIN as both a functional driver of chemotherapy resistance and a clinically actionable prognostic marker in breast cancer.

## Methodology

**Genetic tools**: CRISPR-Cas9 OTULIN-KO, ABL1-KO, LRP5/6-DKO, DVL1/2/3-TKO, HOIP-KO in MDA-MB-231, HEK293A/T cells; lentiviral stable OTULIN-overexpressing lines in PyMT cells; reconstitution with OTULIN-WT, C129S, Y56D/F mutants and β-catenin K133R, K19R, K49R, K19/49R mutants.

**Wnt activity**: Super8X TOPFlash dual-luciferase assay; qRT-PCR of AXIN2 mRNA; β-catenin immunoblot (total and active/non-phospho).

**Ubiquitination analysis**:
- UbiCREST: DUB panel digestion of immunoprecipitated β-catenin to map chain linkage types.
- Co-IP with anti-β-Catenin, anti-OTULIN, anti-Flag; MG132 proteasome inhibitor used to trap ubiquitinated species.
- In vitro ubiquitination: recombinant GST-β-Catenin (aa 1–133) + LUBAC + ubiquitin + E1/E2/ATP.
- Site identification: individual mutagenesis of 17 lysine residues; K133R identified as essential for M1 ubiquitination.

**Phosphorylation**:
- Phospho-specific antibody 4E-S4G (anti-pOTULIN Tyr56); immunofluorescence for subcellular localisation.
- siRNA tyrosine kinase sublibrary screen (88 kinases, n = 3 replicates); volcano plot.
- c-Abl in vitro kinase assay with [γ-32P]ATP; GST-OTULIN-PIM WT vs. Y56F substrates.
- Pharmacological inhibitors: imatinib (c-Abl), dasatinib (c-Abl), Nu7441 (DNA-PK), Ku55933 (ATM), VE-821 (ATR).

**Drug resistance**: Cell viability (CCK8); clonogenic survival; IC50 determination in PyMT and MDA-MB-231 WT/KO cells.

**In vivo**: Orthotopic mammary fat pad injection of MDA-MB-231 LM2 WT or OTULIN-KO cells into NSG mice (n = 5/group); Dox 1.5 mg/kg/week; bioluminescence imaging for lung metastasis; tumour weight and volume at endpoint.

**Clinical**: TCGA-BRCA expression analysis (Firehose Broad GDAC); OS/DFS from TCGA-TARGET-GTEx (n = 5,222); GSE21653 basal DFS; KM-Plotter; TCGA-PanCAN GSEA/Spearman correlation; 4 PDX specimens (HCI-002/010, HBrt1150/1071).

## Results

| Experimental context | Key finding | Metric |
|---|---|---|
| LRP5/6-DKO + Dox | Wnt activity preserved | TOPFlash comparable to WT + Dox |
| DVL1/2/3-TKO + Dox | Wnt activity preserved | TOPFlash comparable to WT + Dox |
| LGK974 (100 nM) + Dox | No reduction in Wnt activity | p = 0.000107 vs. Dox alone (no effect) |
| OTULIN-KO + Dox | Wnt activity suppressed | TOPFlash significantly reduced |
| OTULIN-KO + Wnt3a | Wnt activity suppressed | AXIN2 mRNA reduced by qPCR |
| K133R β-catenin | M1 and K48 ubiquitination reduced | UbiCREST + co-IP data |
| K133R β-catenin | β-TrCP interaction reduced | Co-IP |
| Dox treatment | OTULIN pTyr56 induced (time-dependent) | Detectable at 0.5 h, peak at 2–4 h |
| ABL1-KO + Dox | pOTULIN Tyr56 absent | Rescued by ABL1-WT, not K290R |
| Nu7441 (DNA-PK inhibitor) + Dox | pOTULIN Tyr56 abolished | Not affected by Ku55933 (ATM) |
| OTULIN-Y56D + Dox | Enhanced β-catenin association | Co-IP; stronger Wnt activation |
| PyMT + Flag-OTULIN (stable) | Dox resistance ~7.5×, CPT-11 ~6.2× | IC50 fold-change |
| MDA-MB-231 OTULIN-KO | Dox IC50 4.5× lower | Clonogenic survival |
| ABL1-KO | More sensitive to Dox | Survival curves |
| Imatinib co-treatment | Sensitises MDA-MB-231 to Dox/CBP | IC50 reduction |
| OTULIN-KO LM2 xenograft | Tumour growth suppressed | Volume p = 1.75E-05; weight p2 = 1.07E-09 |
| OTULIN-KO + Dox xenograft | Tumour weight further reduced | p3 = 4.24E-10 |
| OTULIN-KO xenograft | Lung metastasis reduced | Bioluminescence imaging |
| High OTULIN (TCGA, n = 5,222) | Shorter OS | P = 0.000 |
| High OTULIN (n = 2,604) | Shorter DFS | P = 8.263E-9 |
| High HOIP/RNF31 in TNBC chemo patients | Longer DFS | HR = 0.67, P = 0.064 |

## Related Papers

- [[drug-resistance/vaidyanathan-2016-abcb1-mdr1-induction-defines-common]] — ABCB1 (P-glycoprotein) drug efflux as an alternative mechanism of chemotherapy resistance in ovarian cancer; contrasts with intracellular signaling-mediated resistance described here.
- [[drug-resistance/han-2023-tumour-microenvironment-changes-osimertinib-resistance]] — Tumour microenvironment contributions to acquired drug resistance; complementary resistance axis to intrinsic signaling-based resistance.
- [[drug-resistance/tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]] — Non-genetic, adaptive resistance mechanisms; parallel to genotoxic stress-induced Wnt activation as a drug-tolerant state driver.
- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — Replication fork stabilisation as a resistance mechanism; alternative DNA damage response-linked resistance pathway.
- [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — Genome-wide CRISPR screens for drug resistance determinants; complementary functional genomics approach to the siRNA kinase screen used here.
