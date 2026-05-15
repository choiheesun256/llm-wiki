---
title: "Restored replication fork stabilization, a mechanism of PARP inhibitor resistance, can be overcome by cell cycle checkpoint inhibition"
authors: "Brittany Haynes, Junko Murai, Jung-Min Lee"
year: 2018
doi: "10.1016/j.ctrv.2018.09.003"
source: "haynes-2018-restored-replication-fork-stabilization-mechanism.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/haynes-2018-restored-replication-fork-stabilization-mechanism.pdf"
pdf_filename: "haynes-2018-restored-replication-fork-stabilization-mechanism.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - PARPi-resistance
  - replication-fork-stabilization
  - cell-cycle-checkpoint
  - ATR-inhibitor
  - CHK1-inhibitor
  - WEE1-inhibitor
  - BRCA
  - ovarian-cancer
  - synthetic-lethality
  - HR-deficiency
  - combination-therapy
  - review
---

## Summary

PARP inhibitors (PARPis) exploit synthetic lethality in tumors with homologous recombination (HR) defects — particularly BRCA1/2 mutations — and are FDA-approved for BRCA-mutated ovarian cancer. However, acquired resistance is a major clinical obstacle. This 2018 review from the NCI identifies **restoration of replication fork stabilization** as a PARPi resistance mechanism that operates independently of HR restoration, and argues that combining PARPis with cell cycle checkpoint inhibitors (ATRi, CHK1i, WEE1i) can overcome both resistance pathways. Each checkpoint kinase has distinct, non-redundant roles in fork stabilization, providing mechanistically differentiated combination strategies.

## Key Contributions

- Frames **replication fork stabilization restoration** as a standalone PARPi resistance mechanism: in BRCA-deficient cells, stalled fork nascent DNA is degraded by MRE11; resistance arises when fork protection is restored even without HR restoration.
- Establishes that **ATR, CHK1, and WEE1 inhibitors each disrupt fork stabilization through distinct mechanisms**, making them non-interchangeable in combination design.
- Argues that PARPi + checkpoint inhibitor combinations can simultaneously overcome both HR-mediated and fork-stabilization-mediated resistance.
- Warns that tumors harboring both resistance mechanisms concurrently may escape single checkpoint inhibitor strategies.
- Reviews the approved PARPi landscape (olaparib, rucaparib, niraparib) and ongoing trials (talazoparib, veliparib) in ovarian cancer at time of publication.

## Methodology and Architecture

This is a narrative review; no primary experimental data are generated. The paper synthesizes preclinical mechanistic studies and clinical trial results.

**PARP mechanism of action:**
PARP1 senses DNA damage, undergoes conformational change, and adds poly(ADP-ribose) (PAR) chains to recruit repair factors. PARPis act via (1) catalytic inhibition (NAD+ competition) and (2) PARP-DNA trapping, which generates lethal double-strand breaks (DSBs) in HR-deficient cells.

**Two classes of PARPi resistance:**

| Mechanism | Description |
|-----------|-------------|
| HR restoration | BRCA reversion mutations; loss of 53BP1/RIF1/REV7 restoring end resection; CDK1 dysregulation |
| Replication fork stabilization restoration | Fork protection re-established independently of HR; prevents MRE11-mediated nascent strand degradation |

**Checkpoint kinase roles in fork stabilization:**

| Kinase | Normal function | Role in fork stabilization | Effect of inhibition |
|--------|----------------|--------------------------|----------------------|
| ATR | Senses ssDNA/replication stress; activates CHK1 | Directly stabilizes stalled forks | Destabilizes forks; potentiates PARP-trapping DSBs |
| CHK1 | ATR effector; inhibits CDK via CDC25 | Controls origin firing and fork progression | Excessive origin firing; nucleotide pool depletion; abrogates G2 arrest |
| WEE1 | Inhibitory phosphorylation of CDK1/2 | Suppresses origin firing via CDK2; maintains G2/M checkpoint | Premature CDK2/CDK1 activation; forced mitotic entry; excess replication stress |

## Results

- ~40% of high-grade serous ovarian cancers (HGSOC) carry HR gene mutations.
- FDA-approved PARPis (olaparib, rucaparib, niraparib) cover both germline and somatic BRCA-mutated advanced ovarian cancer, and all three are approved as maintenance therapy post-platinum chemotherapy.
- Preclinical evidence: ATR, CHK1, and WEE1 inhibitors each abrogate G2 arrest and suppress HR-mediated repair in PARPi-treated cells.
- ATRi + PARPi: synergy via direct fork destabilization and enhanced PARP-trapping lethality.
- CHK1i + PARPi: synergy via origin firing overload, nucleotide depletion, and G2 checkpoint abrogation.
- WEE1i + PARPi: synergy via premature mitotic entry and G2 arrest abrogation, preventing HR repair.
- Combination strategies that do not address both HR restoration and fork stabilization restoration simultaneously may fail to prevent re-emergence of resistance.

## Related Papers

- [[drug-resistance/cadzow-2024-usp1-inhibitor-ksq-4279-overcomes-parp]] — USP1 inhibitor overcoming PARPi resistance
- [[drug-resistance/dharanipragada-2023-blocking-genomic-instability-prevents-acquired]] — preventing acquired resistance by blocking genomic instability
- [[drug-resistance/bajrami-2014-genome-wide-profiling-genetic-synthetic-lethality]] — genome-wide synthetic lethality profiling relevant to PARPi
- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — intragenic deletion as resistance mechanism
- [[drug-resistance/boudadi-2018-ipilimumab-plus-nivolumab-dna-repair-defects]] — immunotherapy in DNA repair-deficient tumors
- [[drug-resistance/frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]] — clonal evolution in acquired PARPi resistance
- [[drug-resistance/dubbury-2018-cdk12-regulates-dna-repair-genes]] — CDK12 regulation of DNA repair genes, related to HR deficiency context
