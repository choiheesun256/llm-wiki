---
title: "Plasticity-induced repression of Irf6 underlies acquired resistance to cancer immunotherapy in pancreatic ductal adenocarcinoma"
authors:
  - Il-Kyu Kim
  - Mark S. Diamond
  - Salina Yuan
  - Samantha B. Kemp
  - Benjamin M. Kahn
  - Qinglan Li
  - Jeffrey H. Lin
  - Jinyang Li
  - Robert J. Norgard
  - Stacy K. Thomas
  - Maria Merolle
  - Takeshi Katsuda
  - John W. Tobias
  - Timour Baslan
  - Katerina Politi
  - Robert H. Vonderheide
  - Ben Z. Stanger
year: 2024
doi: 10.1038/s41467-024-46048-7
category: drug-resistance
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/kim-2024-plasticity-induced-repression-irf6-underlies-acquired.pdf"
pdf_filename: "kim-2024-plasticity-induced-repression-irf6-underlies-acquired.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - drug-resistance
  - immunotherapy
  - PDAC
  - pancreatic-cancer
  - EMT
  - IRF6
  - acquired-resistance
  - immune-checkpoint-blockade
  - T-cell-killing
  - epigenetics
  - ZEB1
  - SNAIL
  - TNF-alpha
  - apoptosis
  - tumor-microenvironment
---

## Summary

This paper addresses a central question in cancer immunotherapy: why do tumors that initially respond to immune checkpoint blockade (ICB) eventually relapse? Using a mouse model of pancreatic ductal adenocarcinoma (PDAC), Kim et al. find that acquired immunotherapy resistance is reproducibly associated with epithelial-to-mesenchymal transition (EMT). Crucially, the resistance mechanism is not immunosuppressive remodeling of the tumor microenvironment (TME) — in fact, Escape (Esc) tumors paradoxically show more immune-favorable TMEs with increased CD8+ T cells and reduced gMDSCs. Instead, EMT confers a tumor cell-intrinsic defect in susceptibility to T cell killing.

The molecular link is *Irf6* (interferon regulatory factor 6): EMT transcription factors ZEB1 and SNAIL epigenetically silence *Irf6* by reducing chromatin accessibility at its promoter and directly binding it. Loss of IRF6 renders tumor cells resistant to TNF-alpha-induced apoptosis, the key cytotoxic mechanism deployed by effector T cells. Restoring *Irf6* expression in resistant cells re-sensitizes them to T cell killing in vitro and partially rescues immunotherapy response in vivo. The translational relevance is supported by paired pre/post-ICB transcriptomic data from NSCLC patients, where acquired resistance correlates with decreased IRF6 expression and concurrent EMT signatures.

## Key Contributions

- **EMT as a reproducible driver of acquired resistance**: Esc tumors derived from mice that relapsed after CR/near-CR are uniformly enriched for Hallmark EMT signatures; ZEB1 and SNAIL overexpression in parental tumors phenocopies resistance, while their deletion in Esc tumors rescues sensitivity.
- **Cell-intrinsic, not TME-mediated resistance**: Esc tumors have a paradoxically immune-hot TME; resistance is a direct defect in tumor cell susceptibility to cytotoxic T cells, independent of antigen presentation or co-inhibitory molecule changes.
- **IRF6 as the epigenetic bridge**: ATAC-seq and RNA-seq cross-dataset integration identifies *Irf6* as the single gene whose silencing by ZEB1/SNAIL connects EMT to T cell killing resistance.
- **Mechanism — TNF-alpha/TRADD-FADD-CASP8 apoptosis axis**: IRF6 sensitizes cells to TNF-alpha-mediated extrinsic apoptosis; loss of *Tradd*, *Fadd*, or *Casp8* ablates the benefit of Irf6 re-expression; birinapant (cIAP1/2 inhibitor) can pharmacologically restore sensitivity.
- **Clinical validation**: In NSCLC patients with acquired ICB resistance, IRF6 is decreased in ~50% of cases, and those patients show concurrent EMT signature enrichment.

## Methodology and Architecture

### Mouse Model and Cell Lines
The study uses the 4662 murine PDAC cell line (derived from the KPC model: *Kras^LSL-G12D/+*; *Trp53^LSL-R172H/+*; *Pdx1-Cre*) implanted subcutaneously or orthotopically in C57BL/6 mice. Combination chemoimmunotherapy (GAFCP: gemcitabine + nab-paclitaxel + anti-CD40 + anti-CTLA-4 + anti-PD-1) produces heterogeneous outcomes — non-responders (EP lines), complete responders, and relapsers (Esc lines). Esc lines are the central experimental system for studying acquired resistance.

### Genetic Engineering
- Lentiviral overexpression of *Zeb1* and *Snail* in parental cells (gain-of-function).
- CRISPR-Cas9 double knockout of *Zeb1/Snail* in Esc cells (loss-of-function).
- Ectopic re-expression of *Irf6* in Esc cells; *Irf6* knockout in parental cells.
- Knockout of *Tradd*, *Fadd*, and *Casp8* to dissect the apoptotic pathway.

### Multi-Omic Profiling
- **Bulk RNA-seq** at steady state and post OT-I co-culture for transcriptomic characterization.
- **ATAC-seq** to map chromatin accessibility changes upon EMT induction (EV vs. Zeb1/Snail OE), identifying *Irf6* as differentially accessible.
- **ChIP-qPCR** confirming direct ZEB1 and SNAIL binding at the *Irf6* promoter.
- **scRNA-seq** of published human PDAC datasets confirming IRF6 is epithelial cell-restricted.

### Functional Assays
- OT-I (OVA-specific CD8+ T cell) co-culture killing assays in vitro and in NOD/SCID mice.
- TNF-alpha + cycloheximide viability curves; caspase-3 activity; Z-VAD rescue.
- Birinapant sensitization assays (cIAP1/2 inhibitor).
- Flow cytometry TME profiling (gMDSCs, CD103+ DCs, T cells, NK cells, TAMs).

### Human Data
Paired pre/post-ICB transcriptomes from an NSCLC cohort (anti-PD-1/PD-L1 + anti-CTLA-4; dbGaP: phs001464.v1.p1). IRF6 TPM and Irf6/EMT GSEA scores compared between pre-ICB and immunotherapy-recurrent (IR) samples.

## Results

| Finding | Key Evidence |
|---|---|
| Esc tumors are EMT-high | Hallmark EMT NES > 2.5, FDR = 0; loss of E-cadherin, gain of Vimentin/Twist |
| ZEB1/SNAIL drive resistance | Parental Zeb1/Snail OE → poor GAFCP response; Esc Zeb1/Snail KO → rescued response |
| Resistance is T cell-dependent | Anti-CD4/8 depletion abolishes durable CRs; anti-NK1.1 has minimal effect |
| Esc TME is immune-favorable | Decreased gMDSCs, increased CD103+ DCs and CD8+ T cells vs. parental |
| Esc cells resist T cell killing intrinsically | OT-I killing: parental ~25% death at 1:10 T:E ratio; Esc ~5%; NOD/SCID confirms in vivo |
| Irf6 is epigenetically silenced by EMT | Reduced ATAC-seq signal at Irf6 promoter; ZEB1/SNAIL ChIP-qPCR enrichment; Irf6 mRNA/IRF6 protein lost in Esc |
| Irf6 re-expression rescues T cell killing | Esc Irf6 cells: ~15% death at 1:10 T:E (vs. ~5% for Esc EV); in vivo: some durable CRs restored |
| Irf6 KO in parental → resistance | 0/8 durable CRs vs. 2/8 for parental EV; worse survival |
| IRF6 acts via TNF-alpha/apoptosis | Esc IC50 for TNF-alpha ~0.65 ug/ml vs. parental ~0.03 ug/ml; Irf6 re-expression restores sensitivity; Z-VAD blocks it |
| Death receptor pathway required | Tradd/Fadd/Casp8 KO abrogates benefit of Irf6 re-expression in OT-I killing |
| Birinapant sensitizes resistant cells | Significant increase in T cell killing of Esc cells; Casp8 KO tumor resistance to GAFCP |
| Human validation (NSCLC) | IRF6 decreased in ~50% acquired-resistant patients; EMT signatures inversely correlated with IRF6 |

## Related Papers

- [[edwards-2008-resistance-therapy-caused-intragenic-deletion]] — intragenic deletion as resistance mechanism
- [[jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss and acquired PARP inhibitor resistance
- [[haynes-2018-restored-replication-fork-stabilization-mechanism]] — fork stabilization as resistance mechanism
- [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — Shieldin and 53BP1-dependent resistance
- [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — CRISPR screens identifying resistance genes

**Key external references (not yet in wiki):**
- Dongre & Weinberg (2019) *Nat. Rev. Mol. Cell Biol.* — EMT mechanisms in cancer
- Kearney et al. (2018) *Sci. Immunol.* — TNF sensitivity loss in immune evasion
- Vredevoogd et al. (2019) *Cell* — TNF cytotoxicity threshold and immunotherapy
- Roehle et al. (2021) *Sci. Transl. Med.* — cIAP1/2 antagonism and immune killing
- Gettinger et al. (2017) *Cancer Discov.* — HLA I loss as acquired ICB resistance
