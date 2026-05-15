---
title: "TEAD Inhibition Overcomes YAP1/TAZ-Driven Primary and Acquired Resistance to KRAS^G12C^ Inhibitors"
authors:
  - A. Cole Edwards
  - Channing J. Der
  - Adrienne D. Cox
year: 2023
doi: 10.1158/0008-5472.CAN-23-2994
category: drug-resistance
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary.pdf"
pdf_filename: "edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - KRAS-G12C
  - drug-resistance
  - TEAD-inhibition
  - YAP1
  - TAZ
  - Hippo-pathway
  - CRISPR-screen
  - adagrasib
  - sotorasib
  - pancreatic-cancer
  - NSCLC
  - acquired-resistance
  - primary-resistance
  - combination-therapy
  - PI3K-AKT-mTOR
source: "[[sources/edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]]"
---

# TEAD Inhibition Overcomes YAP1/TAZ-Driven Primary and Acquired Resistance to KRAS^G12C^ Inhibitors

> Edwards et al., *Cancer Research* 83(24): 4112–4129, 2023. DOI: [10.1158/0008-5472.CAN-23-2994](https://doi.org/10.1158/0008-5472.CAN-23-2994)

---

## 1. Core Claim

YAP1/TAZ activation — driven by loss of Hippo tumor suppressor pathway components — is a major cause of both primary (intrinsic) and treatment-induced acquired resistance to KRAS^G12C^ inhibitors (G12Ci). YAP1/TAZ act through TEAD transcription factors via two mechanisms that reconstitute KRAS effector signaling in a KRAS-independent manner. Pharmacologic TEAD inhibition synergistically enhances G12Ci antitumor activity in vitro and delays tumor regrowth in vivo.

---

## 2. Biological Context

KRAS^G12C^-selective inhibitors sotorasib and adagrasib were approved in 2021–2022 for KRAS^G12C^-mutant NSCLC. Despite being a landmark advance, their clinical efficacy is limited:

- Overall response rate: ~34–43% in NSCLC
- Progression-free survival: ~6.5–8.0 months
- ~50% of patients who relapse show no genomic DNA alterations, indicating non-genomic resistance mechanisms

The Hippo tumor suppressor pathway negatively regulates YAP1/TAZ by phosphorylating them (via LATS1/2 kinases), sequestering them in the cytoplasm and targeting them for degradation. When Hippo pathway components are lost, YAP1/TAZ translocate to the nucleus and drive transcription via TEAD1–4 transcription factors, promoting oncogenic gene expression programs.

---

## 3. Key Findings and Evidence

### 3.1 CRISPR Screen: Hippo Pathway Loss Drives G12Ci Resistance

An unbiased druggable-genome CRISPR-Cas9 loss-of-function screen in KRAS^G12C^ PDAC cells (MIA PaCa-2) treated with G12Ci identified the following Hippo pathway components as top resistance mediators: **NF2, LATS1/2, TAOK1/2, STK3/4 (MST1/2)**. Known resistance genes (PTEN, NF1, KEAP1, RB1) were also recovered.

### 3.2 YAP1 and TAZ Both Drive Resistance — via TEAD

| Evidence | Finding |
|----------|---------|
| YAP1 overexpression (MIA PaCa-2) | GI50 shift: 4.2 → 38.3 nM (2D), 13.6 → 191.2 nM (3D) |
| YAP1 overexpression effect on apoptosis | Near-complete prevention of G12Ci-induced apoptosis |
| TAZ^S89/311A^ (active mutant) | Near-complete G12Ci resistance in H358 NSCLC |
| YAP1/TAZ siRNA knockdown | Sensitized all 6 tested KRAS^G12C^ cell lines to G12Ci |
| TEAD-binding-deficient mutants | Lost all resistance-driving ability |
| TEAD dominant-negative (TEAD-DN) | Sensitized resistant cells to G12Ci; suppressed all YAP1/TAZ targets |

### 3.3 Two TEAD-Dependent Resistance Mechanisms

**Mechanism 1 — ERK-independent transcription of KRAS-ERK target genes:**

YAP1/TAZ-TEAD drives expression of genes normally regulated by ERK downstream of KRAS:
- BIRC5 (Survivin), CDC20, ECT2, FOSL1 (FRA1), MYC

This maintains cell cycle progression (via Survivin, CDC20, ECT2) and transcription factor activity (MYC, FRA1) independent of KRAS. A 40-gene KRAS/YAP1 co-regulated gene set was identified by overlapping shKRAS-downregulated genes with YAP1/TAZ transcriptional signatures.

**Mechanism 2 — PI3K-AKT-mTOR activation:**

YAP1/TAZ-TEAD activates PI3K-AKT-mTOR signaling independently of KRAS:
- Concurrent PI3K or mTORC1 inhibition partially reversed YAP1-driven resistance (~40–50%)
- PI3K + mTOR co-inhibition with G12Ci restored apoptotic response
- This is consistent with YAP1 being a known activator of PI3K through multiple mechanisms

### 3.4 YAP1/TAZ Transcriptional Signature as Primary Resistance Biomarker

- Cordenonsi YAP Conserved Signature was the most enriched of 189 MSigDB C6 oncogenic signatures in G12Ci-resistant KRAS^G12C^ cell lines (GSEA NES = 2.22, P = 1.29 × 10^-6^)
- ssGSEA across 26 KRAS^G12C^-mutant cell lines: YAP1/TAZ signatures consistently enriched in resistant lines
- YAP/TAZ1 Chronos gene dependency (DepMap) correlated with YAP1/TAZ signature enrichment, supporting functional dependence

### 3.5 YAP1/TAZ Drives Acquired Resistance to Adagrasib

- Adagrasib-resistant H358 and MIA PaCa-2 cells showed: increased nuclear YAP1/TAZ, elevated AXL and CYR61, F-actin cytoskeletal reorganization
- YAP1/TAZ knockdown selectively inhibited resistant (not parental) cell growth
- YAP1/TAZ knockdown induced ~3-fold more apoptosis in resistant vs. parental cells
- Resistant lines were more sensitive to TEAD inhibition than parental lines

### 3.6 TEAD Inhibition Enhances G12Ci Efficacy In Vivo

| Model | Treatment | Key Result |
|-------|-----------|------------|
| SW837 CDX (NOD-SCID) | Adagrasib ± VT-104 (pan-TEADi) | Combination delayed tumor regrowth ~9 days beyond adagrasib alone |
| CR6243 PDX (BALB/c) | Adagrasib ± VT-3989 (clinical-stage TEADi) | Combination significantly delayed tumor regrowth (P < 0.0001) |

Pan-TEAD inhibitors (VT-107, VT-104) and TEAD1-selective inhibitor (VT-103) all showed synergy with G12Ci in vitro (Bliss synergy scores > 0 across 8+ KRAS^G12C^ cell lines from PDAC, NSCLC, CRC, bladder).

---

## 4. Clinical Implications

**Biomarker:** YAP1/TAZ transcriptional signature enrichment may identify patients with primary G12Ci resistance who could benefit from upfront TEAD inhibitor combination.

**Therapeutic strategy:** Concurrent TEAD inhibition with G12Ci (adagrasib, sotorasib, or next-generation KRAS inhibitors) is supported as a rational combination to:
- Increase initial response rate beyond the current ~40% ceiling
- Delay or prevent acquired resistance

**Clinical-stage TEADi:** VT-3989 (Vivace Therapeutics) is in Phase 1 trials for NF2-deficient mesothelioma. Extension to KRAS^G12C^ cancers in combination with G12Ci is the logical clinical translation.

**Clinical validation:** Tsai et al. (2022) reported upregulation of YAP1-associated transcription (without genomic YAP1 amplification) in a patient with acquired sotorasib resistance, directly supporting clinical relevance of this mechanism.

**Concurrent validation:** Four independent studies published around the same time (Hagenbeek et al. 2023, Adachi et al. 2023, Tammaccaro et al. 2023, Mukhopadhyay et al. 2023) validated the YAP1/TAZ-TEAD-KRAS synthetic lethality using orthogonal approaches.

---

## 5. Limitations and Open Questions

- TEADi has no single-agent antitumor activity in vivo; value is purely as combination partner
- ~50% of G12Ci-relapse patients lack detectable genomic alterations; YAP1/TAZ/TEAD is one major mechanism, but additional non-genomic resistance mechanisms remain to be discovered
- Relative importance of YAP1 vs. TAZ varies by tumor type (e.g., YAP1-dominant in SW1573/SW837; TAZ-dominant in UM53); optimal biomarker cutoffs for clinical stratification are undefined
- Long-term in vivo combination treatment delayed but did not fully prevent tumor regrowth
- Studies used immune-deficient mouse models; immune microenvironment interactions with TEADi are unexplored
- On-target normal tissue effects of combining G12Ci + TEADi at clinical doses require evaluation

---

## Related Pages

- [[KRAS-G12C-inhibitor]]
- [[YAP-TAZ-signaling]]
- [[Hippo-pathway]]
- [[drug-resistance]]
- [[combination-therapy]]
- [[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]]
