---
title: "Heterogeneity and Clonal Evolution of Acquired PARP Inhibitor Resistance in TP53- and BRCA1-Deficient Cells"
authors: "Farkkila et al."
year: 2021
doi: "10.1158/0008-5472.CAN-20-2912"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/frkkil-2021-heterogeneity-clonal-evolution-acquired-parp.pdf"
pdf_filename: "frkkil-2021-heterogeneity-clonal-evolution-acquired-parp.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - PARPi-resistance
  - clonal-evolution
  - tumor-heterogeneity
  - BRCA1
  - TP53
  - homologous-recombination
  - 53BP1
  - replication-fork-stabilization
  - NHEJ
  - ovarian-cancer
  - HGSC
  - genomic-instability
  - single-cell-clones
  - niraparib
  - olaparib
  - clonal-selection
  - synthetic-lethality
  - ATR-inhibitor
  - CHK1-inhibitor
  - CDK4-6-inhibitor
---

## Summary

Farkkila et al. (2021) demonstrate that acquired PARPi resistance in BRCA1-deficient cancers is driven by **clonal selection of pre-existing drug-tolerant subclones** rather than de novo mutational acquisition. Using a CRISPR-engineered TP53-/- BRCA1-/- epithelial cell line (B40), they isolated seven single-cell resistant clones that exhibit diverse and functionally heterogeneous resistance mechanisms — multiple mechanisms can coexist in a single clone. Clonal evolutionary analysis reveals that resistance arose from a subclone already present in the sensitive parental population. Critically, despite this heterogeneity, individual clones show **mechanism-dependent therapeutic vulnerabilities** to targeted agents (ATRi, CHK1i, CDK4/6i, HDACi), but no single drug can target all resistant clones simultaneously. These findings are corroborated by sequencing of a clinical BRCA1-mutated HGSC patient with acquired PARPi resistance, where seven spatially heterogeneous resistant subclones were identified across metastatic sites.

## Key Findings

**1. Seven PARPi-resistant clones show diverse, simultaneously active resistance mechanisms:**
- All clones are cross-resistant to niraparib, olaparib, and talazoparib; most are cross-resistant to cisplatin (exceptions: NA4, NB1).
- All clones show stabilized DNA replication forks (DNA fiber assay), even those without full RAD51 restoration.
- NA1: REV7/MAD2L2 downregulation -> NHEJ suppression -> HR restoration.
- NA2, NA3, NA5: 53BP1 reduction -> NHEJ suppression -> HR restoration; NA5 additionally upregulates HR/chromatin remodeling genes.
- NA4: PARP1 downregulation -> avoidance of PARP trapping; maintains diploid karyotype; unique evolutionary origin (not from the dominant drug-tolerant subclone).
- NB1: No RAD51 restoration; instead, elevated pChk1 and fork protection via Chk1 pathway activation; downregulates G2-M checkpoint and E2F target genes.
- OA5 (olaparib-resistant): HR-restored; distinct transcriptomic profile from niraparib-resistant clones.

**2. Resistance arises from clonal selection, not de novo mutation:**
- Evolutionary tracing (PyClone + ClonEvol on WES data) identified three subclones pre-existing in B40 prior to PARPi exposure.
- A drug-tolerant subclone (cluster 5, marked by chromosome 21q loss) was enriched under PARPi selection and gave rise to 6 of 7 resistant clones.
- Experimental validation: 10 single-cell clones from B40 exposed to niraparib confirmed that 2 of 10 (B40_C9, B40_C5) pre-had increased niraparib IC50, and B40_C9 carried 21q loss consistent with cluster 5 identity.
- BRCA1-deficiency produces chromosomal instability that generates intrinsic clonal heterogeneity, providing substrate for Darwinian selection.

**3. Genomic instability increases, mutational burden decreases upon resistance:**
- Resistant clones have fewer SNVs than B40 on average (PARPi resistance is not associated with increased mutational events).
- Resistant clones are predominantly triploid (3n) or polyploid (>5n); NA4 is an exception (diploid, distinct mechanism).
- LOH scores are significantly higher in all resistant clones and NAPool vs. B40.
- Mutational Sig3 (HR-deficiency) fraction is reduced in 5/7 resistant clones — consistent with partial HR restoration.
- No BRCA1 reversion mutations were detected by WES in any resistant clone or patient biopsy.

**4. Transcriptomic heterogeneity: common and unique gene expression programs:**
- All resistant clones share EMT pathway enrichment (vs. RPE^TP53-/-), and downregulation of mTORC1, MYC, TNFa pathways.
- NA5 uniquely upregulates HR DNA repair and chromatin assembly pathways (GSEA) — suggests HR restoration via chromatin remodeling and gene expression changes rather than mutation reversion.
- NB1 uniquely downregulates G2-M checkpoint and E2F targets — consistent with Chk1-dependent replication stress management.

**5. Mechanism-dependent vulnerabilities enable targeted but not universal combination strategies:**

| Agent | Sensitive clones | Mechanism basis |
|-------|-----------------|-----------------|
| ATRi (berzosertib) | NA1, NA2, NA3 | NHEJ suppression; HR-restored; ATR-dependent fork protection |
| Chk1/2i (prexasertib) | NA1, NA2, NA3 | Same; Chk1 needed for fork protection in HR-restored cells |
| WEE1i (adavosertib) | NA1, NA2, NA3 | Same |
| CDK4/6i (abemaciclib) | B40 + 5/7 clones (not NA5) | G1 arrest induction; NA5 CDK4/6i-resistant |
| HDACi (belonostat) | NA5 | Chromatin remodeling pathway dependence |
| All agents tested | NB1 resistant | Unique Chk1-pathway mechanism; no agent targets this |

- ATRi response significantly correlated with S-phase proportion changes across cell lines (r^2 = 0.71).
- Chk1/2i response correlated with S-phase changes (r^2 = 0.76).
- No single drug was effective across all 7 resistant clones.

**6. Clinical validation — BRCA1-mutated HGSC patient:**
- Seven distinct PARPi-resistant subclones identified in four metastatic biopsies (diaphragm, supracolic omentum, rectosigmoid, transcolonic).
- Clonal evolution modeling: all seven subclones emerged from subclone 3 (rectosigmoid), paralleling the cellular model's cluster 5 origin.
- Clinical resistant tumors: triploid karyotypes (3 of 4), lower LOH scores in 3 of 4 vs. sensitive ovarian tumor, variable Sig3 positivity — consistent with spatial heterogeneity of HR restoration.
- No BRCA1 reversion mutations detected in clinical samples.

## Context and Significance

PARPi resistance is emerging as a dominant clinical challenge as niraparib, olaparib, and rucaparib enter widespread maintenance therapy for HGSC and other HR-deficient cancers. Prior studies primarily used commercially derived drug-resistant cell lines and focused on single resistance mechanisms. This study uniquely:

1. Uses an isogenic CRISPR-engineered model without prior drug exposure history to study resistance emergence from scratch.
2. Shows that functional heterogeneity (multiple mechanisms from one cell line) is intrinsic to BRCA1-deficient biology due to chromosomal instability-driven clonal variation.
3. Links the cellular evolutionary model directly to a clinical patient case with spatially resolved metastatic biopsies.
4. Establishes that combination therapy will likely need to be mechanism-stratified — knowing which resistance mechanism(s) are present in a given patient's tumor determines which targeted agent to combine with PARPi.

The absence of BRCA1 reversion mutations in all contexts studied suggests that non-reversion mechanisms (fork stabilization, NHEJ suppression, PARP1 downregulation, chromatin remodeling) dominate in at least some clinical settings, and that LOH and Sig3 are imperfect but useful biomarkers of residual HR deficiency.

## Related Papers

- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — replication fork stabilization as standalone PARPi resistance mechanism; ATRi/CHK1i/WEE1i combinations reviewed
- [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss as PARPi resistance mechanism (key reference for NA2/3/5 mechanism)
- [[drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — SHIELDIN/REV7 complex mediating 53BP1-dependent end protection
- [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — genome-wide CRISPR screen identifying PARP1 mutations as resistance mechanism (relevant to NA4)
- [[drug-resistance/sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]] — secondary BRCA2 mutations; reversion mechanism context
- [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]] — BRCA2 secondary mutation and platinum resistance
- [[drug-resistance/sequist-2011-genotypic-histological-evolution-egfr-resistance]] — clonal evolution framework for acquired drug resistance (EGFR; conceptually parallel)
- [[drug-resistance/vaidyanathan-2016-abcb1-mdr1-induction-defines-common]] — MDR1/efflux as alternative resistance mechanism
