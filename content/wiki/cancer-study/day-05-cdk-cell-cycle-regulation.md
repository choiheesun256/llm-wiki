---
title: "Day 5: CDK & Cell Cycle Regulation"
draft: false
---

# Day 5: CDK & Cell Cycle Regulation

## Big Picture

Cyclin-dependent kinases (CDKs) are the engines of cell division. Targeting CDKs — particularly CDK4/6 — has become one of the most successful cancer therapeutic strategies. But CDKs do far more than drive proliferation: CDK12 regulates DNA repair gene expression, CDK1 controls ~200 substrates spanning apoptosis to Golgi dynamics, and CDK4/6 inhibition triggers immunogenic senescence. Understanding these non-canonical functions opens new combination strategies.

## Key Concepts

**G1/S checkpoint** — CDK4/6-cyclin D phosphorylates Rb, releasing E2F transcription factors that drive S-phase entry. CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) arrest cells in G1.

**G2/M checkpoint** — WEE1 and PKMYT1 phosphorylate CDK1 on Tyr15 and Thr14 respectively, keeping CDK1 inactive until DNA damage is repaired. TP53-mutant cancers depend on this checkpoint since G1 is already compromised.

**BRCAness** — A phenocopy of BRCA deficiency caused by non-BRCA mechanisms. CDK12 loss creates BRCAness by truncating DNA repair gene mRNAs.

## Paper-by-Paper

### Fassl 2022 — CDK4/6: From basic science to therapy
→ [[cancer/fassl-2022-cdk4-cdk6-kinases-basic-science]]

Comprehensive review of CDK4/6 biology and the three FDA-approved inhibitors. Beyond cell cycle arrest, CDK4/6 inhibitors have non-canonical effects:
- **ERV induction** — reactivation of endogenous retroviruses triggers innate immune signaling
- **PD-L1 downregulation** — via cyclin D-CDK4 phosphorylation of SPOP
- **Treg depletion** — selective depletion via CDK6-dependent NFκB signaling
These immune effects provide the biological rationale for CDK4/6i + immunotherapy combinations.

### Lee 2024 — CDK4/6i senescence is immunogenic
→ [[cancer/lee-2024-cdk46-senescence-immunogenic-properties]]

CDK4/6i-induced therapy-induced senescence (TIS) produces a qualitatively superior immunogenic program compared to DNA-damaging agent TIS:
- **Retains**: antigen presentation (HLA-B/C/F, B2M, TAP1/2), T-cell chemokines (CXCL9/10/11)
- **Lacks**: pro-inflammatory (IL-6, CXCL8, TNFα) and pro-angiogenic (VEGFA, PDGF) SASP factors
- **Mechanism**: STAT3 (not NF-κB) is the dominant signaling driver

This explains why CDK4/6i-induced senescence may be more therapeutically useful than chemotherapy-induced senescence.

### Ghelli Luserna di Rorà 2020 — WEE1 as a therapeutic target
→ [[cancer/ghelli-2020-wee1-family-business-regulation-mitosis]]

WEE1 and PKMYT1 are "pseudo-oncogenes" — they are tumor suppressors in normal cells (maintaining genome integrity) but become dependencies in TP53-mutant cancers that rely on the G2/M checkpoint for survival. WEE1 inhibitor (adavosertib) is most effective in TP53-mutant ovarian cancer. Important distinction: WEE1 targets CDK1-Y15, while PKMYT1 targets CDK1-T14 — they are not redundant.

### Massacci 2023 — CDK1 beyond cell cycle
→ [[cancer/massacci-2023-cyclin-dependent-kinase-1-more-than]]

CDK1 controls ~200 substrates spanning gene expression, apoptosis, mitochondrial dynamics, and intracellular transport. A pan-cancer paradox: most cancers show high CDK1 protein expression but suppressed CDK1 activity (via Tyr15 hyperphosphorylation by WEE1/MYT1). The exception is BRCA cancers, where CDK1 is both highly expressed and highly active. CDK1 is a master coordinator of cell fate, not merely a mitosis trigger.

### Dubbury 2018 — CDK12 and DNA repair
→ [[cancer/dubbury-2018-cdk12-regulates-dna-repair-genes]]

CDK12 loss increases intronic polyadenylation (IPA) genome-wide, disproportionately truncating HR repair gene mRNAs (ATM, BRCA1, BRCA2, FANCI, FANCD2). This creates a functional HRD state (BRCAness) without BRCA mutations, validated in prostate and ovarian cancers. The clinical implication: CDK12-loss tumors may respond to PARP inhibitors — connecting cell cycle biology directly to DNA repair-targeted therapy (**Day 1–2**).

## CDK Network in Cancer

```
                    CDK4/6 — G1/S checkpoint
                   /        (palbociclib, ribociclib, abemaciclib)
Cyclin D ────────
                   \
                    CDK2 — S-phase entry
                           (often compensates for CDK4/6i)

CDK1 ─── G2/M checkpoint
  │       Regulated by WEE1 (Y15) and PKMYT1 (T14)
  │       (adavosertib targets WEE1)
  │
  └── ~200 non-canonical substrates
      (apoptosis, Golgi, mitochondria)

CDK12 ─── RNA Pol II elongation
           Loss → intronic polyadenylation
           → truncated DNA repair genes
           → BRCAness → PARPi sensitivity
```

## Connections

- **Day 1–2**: CDK12 loss creates BRCAness, making tumors PARPi-sensitive
- **Day 2**: CDK4/6i appeared as a vulnerability in some PARPi-resistant clones (Färkkilä 2021)
- **Day 6**: Phosphoproteomics can measure CDK1-Y15 phosphorylation as a functional biomarker for WEE1 dependency
- **Day 7**: CPTAC studies use phospho-Rb as a CDK4/6i response biomarker (Krug 2020, Satpathy 2021)

## Key Takeaway

CDKs are not just cell cycle engines — they are network hubs with immune, DNA repair, and metabolic functions. CDK4/6 inhibitors work partly through immunogenic senescence (not just growth arrest), CDK12 loss creates BRCAness (connecting to PARP therapy), and WEE1 inhibition is synthetically lethal with TP53 loss. The clinical frontier is rational combinations that exploit these non-canonical functions.
