---
title: "New insights into activation and function of the AMPK"
authors:
  - Gregory R. Steinberg
  - D. Grahame Hardie
year: 2023
doi: 10.1038/s41580-022-00547-x
journal: Nature Reviews Molecular Cell Biology
category: cancer
pdf_path: llm-wiki/papers/plus/steinberg-2023-new-insights-activation-function-ampk.pdf
pdf_filename: steinberg-2023-new-insights-activation-function-ampk.pdf
source_collection: plus-batch-2026-05
tags:
  - AMPK
  - energy-sensing
  - kinase
  - cancer-metabolism
  - mTORC1
  - LKB1
  - metformin
  - autophagy
  - lysosome
  - mitochondria
  - drug-target
  - tumour-suppressor
  - NASH
  - diabetes
  - obesity
---

# AMPK: Activation and Function — New Insights (Steinberg & Hardie, 2023)

> **Source**: [[steinberg-2023-new-insights-activation-function-ampk|Steinberg & Hardie 2023]]
> *Nature Reviews Molecular Cell Biology* 24: 255–272. DOI: [10.1038/s41580-022-00547-x](https://doi.org/10.1038/s41580-022-00547-x)

## Overview

AMP-activated protein kinase (AMPK) is a central sensor of cellular energy status and metabolic stress. This 2023 review updates the canonical picture — AMP/ADP-dependent activation through LKB1 and Thr172 phosphorylation — with a comprehensive account of newly characterised **non-canonical activation pathways** (glucose, fatty acid, glycogen, lysosomal damage, DNA damage, Ca²⁺) and expands on AMPK's downstream functions in autophagy, mitochondrial quality control, DNA repair, and immune regulation. The review also resolves the apparent contradiction of AMPK acting as both a **tumour suppressor and tumour promoter**, and discusses therapeutic targeting across cancer, diabetes, obesity, and NASH.

## 1. AMPK Structure and Canonical Activation

AMPK is an obligate **αβγ heterotrimer**. Mammals encode 2α, 2β, and 3γ isoforms producing up to 12 distinct complexes with tissue-specific distribution and distinct biology.

### Subunit architecture

| Subunit | Key Domains | Function |
|---|---|---|
| α (catalytic) | α-KD, α-AID, α-linker, α-CTD, ST loop, NES | Kinase activity; Thr172 activation site |
| β (regulatory scaffold) | β-CBM, β-linker, β-CTR | Glycogen binding (β-CBM Trp100); ADaM site ligand binding |
| γ (regulatory) | 4× CBS repeats (CBS1–4) | Adenine nucleotide binding (CBS2 unused; CBS3 key regulatory site) |

### Canonical activation mechanism

1. Energy stress → AMP:ATP and ADP:ATP ratios rise
2. AMP binding to **CBS3** of γ-subunit: (a) allosteric activation, (b) promotes LKB1-mediated Thr172 phosphorylation, (c) inhibits Thr172 dephosphorylation
3. **LKB1** (in STRADα/β·MO25α/β complex) is the primary upstream kinase — constitutively active, regulated by expression and localisation
4. Cryo-EM structures show AMP binding triggers ~180° rotation and ~100 Å translation of the catalytic module, burying pThr172 and protecting it from phosphatases

Key inhibitory phosphorylation sites on α-subunits: **Ser345** (mTORC1, reduces lysosomal localisation), **Ser491/496** (AKT/PKA — strongly inhibitory), **Thr485/490** (CDK1 — mitotic regulation).

## 2. Non-Canonical Activation Pathways

A major theme of this review is the AMP/ADP-independent mechanisms that broaden AMPK's sensory repertoire:

### Calcium / CaMKK2 pathway
- Hormones (ghrelin, VEGF) → inositol-1,4,5-trisphosphate → Ca²⁺ release → **CaMKK2β** phosphorylates Thr172
- Important in hypothalamus (appetite regulation) and DNA damage response in the nucleus
- Feedback: AMPK phosphorylates STIM1, limiting store-operated Ca²⁺ entry

### DNA damage
- Etoposide, hydroxyurea, ionising radiation → AMPK activation restricted to **α1-containing complexes** in the nucleus
- α1 contains nuclear export signal (NES); caspase 3 cleaves α1 at Asp529 (removing NES) → nuclear accumulation
- Activated by CaMKK2 (triggered by Ca²⁺ released from nuclear envelope) and by ATM/ATR→CHK2 cascade
- AMPK phosphorylates **EXO1 Ser746** (homologous recombination) and **53BP1 Ser1317** (NHEJ) → supports DNA repair
- Radiosensitisation: AMPK inhibitors enhance cytotoxic effects of etoposide/hydroxyurea → cancer therapy relevance

### Lysosomal damage and TAK1
- Lysosomal membrane damage (e.g., *Mycobacterium tuberculosis*) exposes luminal glycans → **galectin 9 (GAL9)** recruitment
- GAL9 recruits AMPK + **TAK1** to lysosome surface; USP9X displacement → K63-polyubiquitin accumulation → TAK1 activation → AMPK Thr172 phosphorylation
- AMPK then promotes **lysophagy** (ULK1?) and **lysosomal biogenesis** (TFEB/TFE3 via USP9X)
- Explains why TRAIL activates AMPK but TNF does not: only TRAIL triggers lysosomal damage

### Glucose sensing (fructose-1,6-bisphosphate / aldolase pathway)
- Glucose deprivation → fructose-1,6-bisphosphate (FBP) ↓ → **aldolase** senses absence of FBP
- Aldolase inhibits lysosomal **v-ATPase** → Ragulator complex recruits LKB1 (with AXIN1/AXIN2) to lysosome → LKB1 phosphorylates AMPK at lysosomal surface
- Metformin activates AMPK through a related mechanism (direct v-ATPase subunit PEN2 binding)
- Refinement: FBP absence may inhibit v-ATPase indirectly via TRPV channel-mediated Ca²⁺ inhibition at ER

### Glycogen sensing
- High glycogen → β-CBM **Trp100** inserts into α-1,6-branch points → AMPK sequestered to glycogen particles → reduced activity
- Mutations abolishing glycogen binding (AMPKβ1 W100A or AMPKβ2 W98A) increase adiposity, glucose intolerance, reduced voluntary activity in mice
- Low glycogen (e.g., during exercise) releases AMPK → promotes catabolic pathways

### Fatty acid sensing (ADaM site)
- Long-chain fatty acyl-CoA esters (**LCFA-CoA**, C12–C24) are natural ligands for the **allosteric drug and metabolite (ADaM) site** on β1-containing complexes
- ADaM site: cleft between β-CBM and α-KD N-lobe; Ser108 phosphorylation (cis-autophosphorylation on β1) stabilises this site
- Key for stimulating whole-body fatty acid oxidation during fasting, ketogenic diet, caloric restriction
- Explains how interventions that activate AMPK without lowering cellular ATP (exercise, fasting, caloric restriction) work

### Microbial metabolites
- **Butyrate** (from gut microbiome) → mitochondrial uncoupling → canonical AMP:ATP activation
- **Imidazole propionate** (from type 2 diabetes-associated gut bacteria) → AKT activation → AMPK Ser496 phosphorylation → **suppresses** AMPK
- Lipopolysaccharide (LPS) from Gram-negative bacteria → inhibits AMPK in macrophages

## 3. Downstream Functions

AMPK phosphorylates **>100 substrates on >130 sites** (consensus motif: β-Φ(β,β)-X-X-**S**-X-X-X-Φ-X-X, with basic residues at −4, −3 preferred). Key functional domains:

### Metabolic regulation
- **Fatty acid synthesis OFF**: ACC1 (Ser79) and ACC2 (Ser221) phosphorylation → reduces malonyl-CoA → relieves CPT1 inhibition → fatty acid oxidation ON
- **Cholesterol synthesis OFF**: HMGCR phosphorylation; SREBP1c regulation (indirect)
- **Glucose uptake**: mTORC1 inhibition; TBC1D1/TBC1D4 phosphorylation → GLUT4 membrane insertion
- **Protein synthesis OFF**: mTORC1 inhibition (Raptor Ser792, TSC2); EEF2K activation → elongation factor 2 inhibition

### Autophagy and lysosomal homeostasis
- ULK1, VPS34, BECN1, ATG9A, RACK1 phosphorylation → autophagy initiation
- **TFEB/TFE3** activation → lysosomal biogenesis genes
- mTORC1 inhibition releases the major brake on autophagy
- FOXO3, BRD4 regulation (transcriptional control of autophagy genes)

### Mitochondrial quality control
- **Fission**: MFF, ARMC10 phosphorylation → DRP1 recruitment → fission (prerequisite for mitophagy)
- **Mitophagy**: ULK1 → Parkin activation → mitophagy; a pool of AMPK translocates to mitochondria upon activation
- **Biogenesis**: PGC1α, p53, sirtuins, HDAC5 → mitochondrial biogenesis; coordinates fission, mitophagy, and biogenesis for respiratory capacity maintenance

### Immune regulation and tumour immunogenicity
- **PDL1 degradation**: AMPK phosphorylates PDL1 at Ser195 and Ser238 → promotes degradation → reduces immune checkpoint suppression
- **Antigen presentation**: EZH2 Thr311 phosphorylation → reduces H3K27me3 → derepresses MHC-related genes
- Enhanced tumour-infiltrating lymphocytes with metformin + ketogenic diets (AMPKβ1-dependent)

## 4. AMPK in Cancer

### AMPK as a tumour suppressor

Evidence:
- Downstream of **LKB1** (one of the most commonly mutated tumour suppressors)
- Inhibits anabolic biosynthesis (lipogenesis, protein synthesis) and mTORC1 (promotes cell growth)
- ACC1/ACC2 phosphorylation restricts de novo lipogenesis → protects against hepatocellular carcinoma (HCC); ACC inhibitors reduce lung cancer and HCC in mouse models
- *Prkaa1*-knockout mice: increased B cell lymphoma, T cell lymphoma, prostate cancer incidence
- T-ALL model: T cell–specific *Prkaa1* knockout + *Pten* loss → accelerated T-ALL; phenformin (cell-autonomous AMPK activator) significantly delayed lymphoma onset
- Metformin associated with ~30% reduced cancer risk in diabetic patients (epidemiological)

### AMPK as a tumour promoter

Evidence:
- Established tumours under metabolic stress (rapid growth, hypoxia) rely on AMPK for survival against energetic challenges
- T-ALL haematopoietic stem cell model: *Prkaa1* knockout after T-ALL established → reduced disease
- AMPK promotes ferroptosis resistance via beclin 1 phosphorylation
- In Kras^G12D NSCLC mouse models: conflicting results — *Prkaa1* or *Prkaa2* knockout modestly decreased tumours in one study, but increased tumours (with better free survival) in another

### Reconciling the contradiction

| Phase | AMPK role | Rationale |
|---|---|---|
| Pre-cancer / early | Tumour suppressor | Inhibits lipogenesis, mTORC1, cell proliferation; promotes immune recognition |
| Established tumour | Tumour promoter | Protects rapidly proliferating cells from energetic/metabolic stress |

**Implication**: AMPK **activators** (e.g., metformin, phenformin, A-769662) are more relevant for **cancer prevention**; AMPK **inhibitors** may be appropriate for **treatment of established cancers**.

### Clinical angles
- AMPK + immunotherapy combinations: multiple clinical trials (metformin + anti-PD1/CTLA4; NCT03048500, NCT03800602, NCT03994744)
- AMPKβ1 activator A-769662 + CTLA4 inhibitor: synergistic in syngeneic lung tumour models (requires AMPKβ1)
- Radiosensitisation by AMPK inhibitors: etoposide/hydroxyurea cytotoxicity enhanced

## 5. Therapeutic Landscape and Future Directions

| Target | Agent | Indication | Status |
|---|---|---|---|
| Indirect AMPK activation | Metformin, phenformin | Cancer prevention, T2D, NASH | Approved (T2D); trials for cancer |
| AMPK β1 (ADaM site) | A-769662, MK-8722, PF-739, salicylate | NASH, T2D, obesity | Preclinical / phase 2 |
| Direct pan-AMPK | O304 | T2D, cardiovascular | Phase 2 (avoids cardiac hypertrophy in NHP) |
| ACC inhibition | Bempedoic acid | CVD, atherosclerosis | FDA approved; cancer trials |
| Liver-specific β1 | PXL770 | NASH | Phase 2a (positive: reduced lipids, steatosis, inflammation) |
| AMPK γ3-subunit | (in development) | T2D (skeletal muscle) | Avoids cardiac β2 hypertrophy risk |

**Key open questions:**
1. How to achieve isoform- and tissue-specific AMPK activation without unintended effects (cardiac hypertrophy from β2 activation)
2. Non-canonical glucose-sensing mechanism — exact role of TRPV channels and CaMKK2 remains unclear
3. Which cancer types benefit from AMPK activation vs. inhibition — need biomarker-stratified trials
4. Natural ligands for the ADaM site in β2-containing complexes (predominant in skeletal/cardiac muscle) remain unknown
5. Chronic vs. transient AMPK activation: daily exercise analogue (transient) may be preferable to continuous pharmacological activation

---

*Related concepts*: [[LKB1]] | [[mTORC1]] | [[Metformin]] | [[Autophagy]] | [[Drug Repurposing]] | [[Cancer Metabolism]] | [[PDL1]] | [[Ferroptosis]]
