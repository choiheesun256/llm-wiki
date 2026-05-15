---
title: "CDK1: More Than a Cell Cycle Regulator"
authors:
  - Giorgia Massacci
  - Livia Perfetto
  - Francesca Sacco
year: 2023
doi: 10.1038/s41416-023-02468-8
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/massacci-2023-cyclin-dependent-kinase-1-more-than.pdf
pdf_filename: massacci-2023-cyclin-dependent-kinase-1-more-than.pdf
source_collection: plus-batch-2026-05
tags:
  - CDK1
  - cyclin-B1
  - cell-cycle
  - kinase
  - phosphorylation
  - cancer
  - drug-resistance
  - mitosis
  - apoptosis
  - signaling
  - pan-cancer
  - therapeutic-target
---

# CDK1: More Than a Cell Cycle Regulator

> Massacci et al. (2023), *British Journal of Cancer* 129:1707–1716
> DOI: [10.1038/s41416-023-02468-8](https://doi.org/10.1038/s41416-023-02468-8)
> Source note: [[sources/massacci-2023-cyclin-dependent-kinase-1-more-than]]

---

## 1. Core Argument

CDK1 (Cyclin-dependent kinase 1) is a serine/threonine kinase originally identified as a master cell cycle regulator, but accumulating evidence shows it controls a wide range of cell cycle-independent biological processes. This perspective systematically catalogues CDK1's ~200 direct substrates and upstream regulators, revealing its roles in gene expression, apoptosis, signal transduction, mitochondrial dynamics, Golgi remodelling, and transport. In cancer, CDK1 is widely overexpressed but its activity is paradoxically often suppressed by phosphorylation — and its deregulation contributes to cancer progression and drug resistance.

---

## 2. CDK1 Regulation: The Upstream Kinome

CDK1 activity is tightly regulated by phosphorylation at key residues:

| Site | Type | Upstream regulator(s) |
|---|---|---|
| Tyr15 | Inhibitory | WEE1, ERBB2 (in breast cancer) |
| Thr14 | Inhibitory | MYT1 (PKMYT1) |
| Thr161 | Activatory | CDK7 (cyclin H-CDK7 complex) |
| Thr14/Tyr15 | Dephosphorylation (activation) | CDC25A, CDC25B, CDC25C |

**Cell cycle activation logic:**
- G2: cyclin B1 accumulates → cyclin B1-CDK1 complex (pre-MPF) held inactive in cytoplasm via WEE1/MYT1
- G2/M transition: ATM/ATR checkpoint passes → CDC25B/C dephosphorylate Thr14/Tyr15 + CDK7 phosphorylates Thr161 → full CDK1 activation

**Novel predicted upstream kinases** (from human kinome atlas, Johnson et al. 2023): MYO3A, GSK3A, GRK6 — expression profiles are highly correlated with CDK1 and established modulators across cancer types. ERBB2 is also correlated and shown to phosphorylate Tyr15 in breast cancer cells.

---

## 3. Non-canonical CDK1 Functions

CDK1 controls at least six major cell cycle-independent biological processes:

### Gene Expression Regulation
- Controls ~8,000 mitosis-specific genes via transcription factor phosphorylation
- Key substrates: RUNX2, SIRT1/2, NPM1, SREBF1 — stabilised and activated by CDK1
- Downstream effects: proliferation, apoptosis, differentiation, metabolic reprogramming

### Signal Transduction
- Phosphorylates MAPK6, ERK3, MAP2K2 → activates MAPKs cascade → promotes proliferation
- Phosphorylates RPTOR and RPS6KB1 → regulates mTORC1 activity

### Apoptosis (dual/context-dependent role)
- **Anti-apoptotic:** phosphorylates Caspase-9 (CASP9) and BIRC5 → inhibits apoptosis
- **Pro-apoptotic:** phosphorylates BAD (Ser128) → impairs BAD-14-3-3 interaction → BAD translocates to mitochondria → promotes apoptosis; also inhibits BCL2L1, BCL2, MCL1
- Clinical implication: the contradictory role is context- and condition-dependent; understanding this duality is key to new therapeutic strategies

### Mitochondrial Processes
- Phosphorylates Drp-1 (Ser585) → mitochondrial translocation → fission
- Phosphorylates MnSOD (Ser106) → enhanced antioxidant activity; maintains mitochondrial redox balance
- Phosphorylates SIRT3 (Thr150, Ser159) → upregulates oxidative phosphorylation and ATP production

### Golgi Remodelling
- Phosphorylates GRASP65, GM130, RAB1 → Golgi network disassembly during mitosis
- Phosphorylates MAN1 (Ser12) → inhibits N-glycosylation → limits aberrant glycosylation in mitotic cells

### Transport
- Regulates endocytosis via Rab5B phosphorylation (early endosome dynamics) and EPN1 (clathrin-mediated endocytosis)
- Regulates nucleocytoplasmic transport via importin/exportin phosphorylation (RANBP2, NUP50)

### Intermediate-Filament Organisation
- Phosphorylates VIM (vimentin), LMNA (lamin A/C), KRT8 (keratin 8)
- Influences cell morphology, structural integrity, and cell migration during immune responses and metastasis

---

## 4. CDK1 in Cancer

### Expression Pattern
- CDK1 mRNA and protein are broadly upregulated in tumours vs. normal tissues (TCGA, CPTAC)
- Overexpression correlated with inferior survival and poor clinical outcome across multiple cancer types
- Highest mutation frequency: UCEC, COAD, SKCM (mostly SNPs, 0.74% of patients overall)

### Paradox: High Protein, Suppressed Activity
Pan-cancer phosphoproteomic analysis (CPTAC) reveals a key paradox:
- CDK1 protein: elevated in most cancer types
- Thr14/Tyr15 (inhibitory): hyper-phosphorylated in most cancers → activity suppressed
- Thr161 (activatory): hypo-phosphorylated in most cancers
- **Exception: BRCA** — both inhibitory sites are hypo-phosphorylated and Thr161 is hypo-phosphorylated in some analyses, suggesting CDK1 is fully active specifically in breast cancer tissue

### Tyr15 Phosphorylation and Drug Resistance
Despite being an inhibitory site, increased Tyr15 phosphorylation is paradoxically observed in several cancer types and linked to drug resistance:
- ERBB2-mediated Tyr15 phosphorylation → BAD inactivation → resistance to taxol-induced apoptosis → mitotic slippage → microtubule-targeting drug resistance
- Increased phospho-Tyr15 CDK1 correlates with resistance to FLT3-ITD inhibitors in AML

### Therapeutic Targeting
| Generation | Examples | Limitation |
|---|---|---|
| 1st-gen pan-CDK inhibitors | Flavopiridol, roscovitine | Low specificity, high toxicity |
| 2nd-gen selective inhibitors | RO-3306, NU6102 | Limited preclinical/clinical data |

**Combination strategy rationale:**
- CDK1 inhibition → G2/M arrest → cells maximally vulnerable to radiation-induced DNA damage and DNA repair dysfunction → enhances susceptibility to DNA-damaging agents
- Combination therapy considered the most promising clinical approach

---

## 5. Key Takeaways and Open Questions

**Established:**
- CDK1 substratome spans gene expression, apoptosis, mitochondrial biology, Golgi remodelling, transport, and cytoskeletal organisation
- CDK1 translocates to mitochondria and Golgi — not exclusively nuclear/cytosolic
- CDK1 protein is upregulated but activity is paradoxically suppressed in most cancers (except BRCA)
- CDK1-mediated Tyr15 phosphorylation paradoxically promotes drug resistance

**Open questions:**
- What determines whether CDK1 acts pro- or anti-apoptotically in specific contexts?
- What are the functional consequences of the 12 dark kinase CDK1 modulators?
- How do upstream modulators MYO3A, GSK3A, GRK6 coordinate CDK1 activity in cancer?
- Can CDK1 phosphorylation status serve as a reliable clinical biomarker for activity?
- What is the full repertoire of cyclin B1-independent CDK1 functions?

**Drug repurposing relevance:**
CDK1's role in apoptosis regulation (BAD, BCL2 family), mTORC1 signalling (RPTOR, RPS6KB1), and drug resistance mechanisms makes it a compelling node for network medicine-based drug repurposing strategies. The context-dependence of CDK1 function across cancer types underscores the need for patient-stratified approaches.
