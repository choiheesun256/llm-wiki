---
title: "Day 4: KRAS G12C Adaptive Resistance"
draft: false
---

# Day 4: KRAS G12C Adaptive Resistance

## Big Picture

KRAS was considered "undruggable" for 40 years until covalent G12C inhibitors (sotorasib, adagrasib) were developed, locking KRAS in its inactive GDP-bound state. But clinical responses are often short-lived. Unlike EGFR (Day 3), KRAS G12C resistance frequently arises through rapid non-genetic adaptation — within days, not months — and through spatially heterogeneous mechanisms that defy single-biopsy characterization.

## Key Concepts

**Covalent inhibition of KRAS G12C** — These drugs bind irreversibly to Cys12 only when KRAS is GDP-bound (inactive). Newly synthesized KRAS can adopt the GTP-bound (active) state before the drug engages, creating an inherent escape window.

**Adaptive resistance** — Not mutation-driven. Cells rewire signaling networks in hours to days via transcriptional and post-translational changes. This is fundamentally different from acquired resistance (which requires weeks to months of selection).

**Bypass signaling** — Alternative pathways (YAP/TAZ-TEAD, PI3K-AKT) activate downstream effectors independently of KRAS, rendering KRAS inhibition insufficient.

## Paper-by-Paper

### Xue 2020 — Rapid non-uniform adaptation
→ [[drug-resistance/xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]]

Single-cell RNA-seq within 72 hours of G12C inhibitor treatment revealed a bimodal population response:
- ~80% of cells enter quiescence
- ~20% adapt and continue proliferating

The mechanism: newly synthesized KRAS(G12C) escapes covalent inhibition by adopting the GTP-bound state before drug engagement. HBEGF-EGFR signaling drives adaptive escape via RTK feedback, and AURKA stabilizes active KRAS. **G12Ci + EGFR inhibitor** or **G12Ci + AURKA inhibitor** synergy was validated in vivo. This was the first single-cell characterization of the speed and heterogeneity of KRAS adaptive resistance.

### Tsai 2022 — Idiosyncratic clinical resistance
→ [[drug-resistance/tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]]

A rapid-autopsy study of a single sotorasib-treated patient (17 tissue samples from multiple metastatic sites) revealed:
- KRAS-independent MAPK/AKT/mTOR reactivation **without secondary KRAS mutations**
- TGF-beta as a master upstream coordinator creating an immune-cold TME
- Spatial heterogeneity: different metastatic sites had different resistance mechanisms
- Clonal seeding from a pretreatment lymph node metastasis

This demonstrates that single-biopsy resistance profiling is inadequate — resistance is spatially heterogeneous and driven by non-genetic mechanisms.

### Edwards 2023 — YAP1/TAZ-TEAD bypass pathway
→ [[drug-resistance/edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]]

A genome-wide CRISPR screen in KRAS G12C PDAC identified Hippo pathway loss (NF2, LATS1/2, STK3/4) as the top resistance driver. The mechanism: YAP1/TAZ activate TEAD transcription factors to:
1. Drive ERK-independent KRAS target gene expression
2. Simultaneously activate PI3K-AKT-mTOR

The TEAD inhibitor VT-3989 + adagrasib significantly delayed tumor regrowth. This is important because TEAD inhibitors are now in clinical development, providing a pharmacologically actionable combination strategy.

## KRAS G12C Resistance: Speed vs. Mechanism

| Timescale | Mechanism | Example |
|-----------|-----------|---------|
| Hours–Days | Non-uniform adaptive rewiring | Xue 2020: EGFR/AURKA feedback |
| Weeks | Bypass pathway activation | Edwards 2023: YAP/TAZ-TEAD |
| Months | TME-coordinated immune evasion | Tsai 2022: TGF-beta master regulator |

## Connections

- **Day 3** (EGFR resistance) shares the RTK feedback theme — both KRAS and EGFR resistance involve upstream receptor reactivation
- The EMT/phenotypic plasticity theme connects to Kim 2024 (IRF6 in PDAC immunotherapy resistance, covered in **Day 8**)
- **Day 6** (phosphoproteomics) covers tools that can detect the kinase network rewiring underlying adaptive resistance
- CPTAC (**Day 7**) shows that EGFR and KRAS mutant tumors have distinct phospho-signatures (PTPN11 vs. SOS1), relevant for understanding why resistance pathways differ

## Key Takeaway

KRAS G12C resistance is defined by speed and heterogeneity. The covalent inhibition mechanism has an inherent vulnerability — newly synthesized KRAS escapes before drug binding. Adaptive resistance emerges within days at single-cell resolution, bypass pathways (YAP/TAZ-TEAD) provide KRAS-independent survival, and spatial heterogeneity means different metastatic sites resist through different mechanisms. The clinical implication: upfront combination therapy (G12Ci + EGFR/AURKA/TEAD inhibitors) is likely necessary rather than sequential monotherapy.
