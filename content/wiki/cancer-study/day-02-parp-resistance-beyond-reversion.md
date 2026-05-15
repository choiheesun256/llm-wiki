---
title: "Day 2: PARP Resistance — Beyond Reversion"
draft: false
---

# Day 2: PARP Resistance — Beyond Reversion

## Big Picture

Reversion mutations (Day 1) are the most common PARPi resistance mechanism, but they require a BRCA mutation to revert. What happens in tumors where reversion is not possible, or where alternative pressures dominate? A diverse landscape of non-reversion resistance mechanisms exists — from checkpoint loss and fork protection to drug efflux and PARP1 target mutations. Critically, different mechanisms create different therapeutic vulnerabilities, making mechanistic diagnosis essential for next-line treatment selection.

## Key Concepts

**53BP1/Shieldin pathway** — 53BP1 normally blocks DNA end resection at double-strand breaks. In BRCA1-deficient cells, this is beneficial because it prevents inappropriate end processing. But when 53BP1 or its downstream shieldin complex (SHLD1/2/3, REV7) is lost, end resection is restored, partially rescuing HR even without BRCA1.

**Replication fork protection** — BRCA1/2 normally stabilize stalled replication forks. PARPi kills by destabilizing these forks. If alternative fork-stabilizing pathways are activated (via RADX, BOD1L, or HLTF), cells survive PARPi without restoring HR itself.

**Pharmacological resistance** — The drug never reaches its target. ABCB1/P-glycoprotein efflux pumps can export olaparib and rucaparib from cells.

## Paper-by-Paper

### Jaspers 2013 — 53BP1 loss in vivo
→ [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]]

Somatic Trp53bp1 mutations were found in 3 of 11 olaparib-resistant mouse mammary tumors. 53BP1 loss partially restores HR by allowing end resection in BRCA1-deficient cells. A key practical finding: AZD2461, a non-P-gp-substrate PARPi, suppressed resistant clone outgrowth even after 100 days of dosing — suggesting that combining resistance-aware drug design with mechanism knowledge matters.

### Noordermeer 2018 — The shieldin complex
→ [[drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]]

Discovered the shieldin complex (SHLD1, SHLD2, SHLD3, REV7) as the direct 53BP1 effector. SHLD2 OB-fold domains bind ssDNA (Kd ~11 nM) to physically protect DNA ends from resection. Shieldin loss restores HR in BRCA1-deficient cells and causes PARPi resistance. This filled the mechanistic gap between 53BP1 and end resection, and identified new potential drug targets.

### Pettitt 2018 — PARP1 target mutations
→ [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]]

CRISPR screens identified PARP1 point mutations that abolish PARP trapping (the primary cytotoxic mechanism) without eliminating catalytic activity. The clinically validated R591C mutation was found in a patient. The important implication: these cells remain sensitive to topoisomerase I inhibitors, providing an alternative therapeutic avenue.

### Vaidyanathan 2016 — P-glycoprotein efflux
→ [[drug-resistance/vaidyanathan-2016-abcb1-mdr1-induction-defines-common]]

ABCB1/P-gp overexpression is a shared resistance mechanism for both paclitaxel and olaparib. Critically, PARPi differ in P-gp substrate status:
- **Substrates** (susceptible to efflux): olaparib, rucaparib
- **Non-substrates** (retain activity): veliparib, AZD2461

Resistance is fully reversible with P-gp inhibitors (elacridar, verapamil), making P-gp status a pharmacologically actionable biomarker.

### Haynes 2018 — Replication fork stabilization
→ [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]]

Review establishing fork stabilization restoration as a PARPi resistance mechanism independent of HR. ATR inhibitors, CHK1 inhibitors, and WEE1 inhibitors can each disrupt fork stabilization through distinct kinase mechanisms. The clinical relevance: fork protection resistance cannot be detected by standard HR biomarkers (RAD51 foci, HRD score).

### Nesic 2021 — Epigenetic resistance via RAD51C
→ [[drug-resistance/nesic-2021-acquired-rad51c-promoter-methylation-loss]]

RAD51C was silenced by promoter methylation (causing HRD), but a single unmethylated copy after LOH was sufficient to restore HR and confer PARPi resistance. This is an epigenetic reversal of HRD — not a genetic reversion — and it arose independently in two PDX lineages, suggesting it is a recurrent mechanism. Methylation zygosity is the key clinical biomarker.

### Färkkilä 2021 — Clonal heterogeneity of resistance
→ [[drug-resistance/frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]]

Seven single-cell-derived resistant clones from one BRCA1/TP53-null line revealed diverse co-existing mechanisms: 53BP1/REV7 loss, PARP1 downregulation, and CHK1-dependent fork protection — all in the same tumor. Each clone had distinct vulnerabilities (ATRi, CHK1i, CDK4/6i, HDACi), but no single agent covered all clones. Validated in an HGSOC patient, this demonstrates that resistance is polyclonal and combination strategies are essential.

### Li 2020 — Comprehensive review
→ [[drug-resistance/li-2020-parp-inhibitor-resistance-underlying-mechanisms]]

Organizes PARPi resistance into five pillars: HR restoration (end-resection regulators, RAD51), reversion mutations, fork protection, epigenetic/PARylation changes, and pharmacological mechanisms (P-gp efflux). Highlights the RAD51 foci assay as a superior functional biomarker over BRCA genotype for predicting PARPi response.

### Zou 2025 — Clinical strategies to overcome resistance
→ [[drug-resistance/zou-2025-clinical-approaches-overcome-parp-inhibitor]]

The most comprehensive and up-to-date review, adding metabolic reprogramming, ncRNA regulation, and TME-mediated resistance as new pillars. Covers combination strategies: PARPi + immune checkpoint inhibitors (via cGAS-STING pathway activation), DDR inhibitors (ATRi, WEE1i), epigenetic drugs, and VEGFR/PI3K/ARSI combinations. Notably describes AI-designed PARPi-binding proteins that reduce effective dose by 78%.

## The Resistance Mechanism Map

| Mechanism | HR restored? | Detection | Therapeutic counter |
|-----------|-------------|-----------|-------------------|
| BRCA reversion | Yes | ctDNA sequencing | Platinum rechallenge unlikely to work |
| 53BP1/Shieldin loss | Partially | IHC, sequencing | ATRi, CHK1i |
| PARP1 mutations | No (trapping lost) | Sequencing | Topoisomerase I inhibitors |
| Fork stabilization | No | Functional assays | ATRi, CHK1i, WEE1i |
| P-gp efflux | No | ABCB1 expression | Non-substrate PARPi, P-gp inhibitors |
| RAD51C demethylation | Yes | Methylation assay | Platinum rechallenge unlikely to work |

## Connections

- **Day 1** covers reversion mutations specifically
- The WEE1 inhibitor connection appears in **Day 5** (CDK/cell cycle regulation)
- **Day 6** covers phosphoproteomics methods that can identify kinase-level resistance signatures
- The CDK4/6 inhibitor vulnerability in some resistant clones connects to **Day 5**

## Key Takeaway

PARPi resistance is not one mechanism — it is a polyclonal landscape where multiple mechanisms co-exist within a single tumor. No single biomarker captures all pathways. Functional assays (RAD51 foci), genetic testing (BRCA reversions, PARP1 mutations), epigenetic profiling (methylation), and pharmacological profiling (P-gp status) are all needed. The therapeutic implication: rational combination strategies, not sequential monotherapy, are required to address resistance heterogeneity.
