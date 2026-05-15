---
title: "Day 3: EGFR & Osimertinib Resistance"
draft: false
---

# Day 3: EGFR & Osimertinib Resistance

## Big Picture

EGFR-mutant non-small cell lung cancer (NSCLC) is the paradigm for targeted therapy. Three generations of EGFR tyrosine kinase inhibitors (TKIs) have been developed, each overcoming the previous generation's resistance mechanism — but each generating new ones. The resistance landscape is remarkably diverse, spanning genetic mutations, gene amplification, histologic transformation, and tumor microenvironment remodeling.

## Key Concepts

**EGFR-TKI generations** — 1st-gen (erlotinib, gefitinib) → resistance via T790M gatekeeper mutation → 3rd-gen osimertinib targets T790M → new resistance mechanisms emerge (C797S, MET amp, lineage transformation).

**Histologic transformation** — NSCLC can transform to small cell lung cancer (SCLC) under TKI pressure, losing EGFR dependency entirely. This is a form of lineage plasticity, not a new mutation.

**TME remodeling** — Resistance is not only tumor cell-intrinsic. Exosome-mediated communication between resistant tumor cells and macrophages creates a feed-forward immunosuppressive loop.

## Paper-by-Paper

### Sequist 2011 — The resistance atlas
→ [[drug-resistance/sequist-2011-genotypic-histological-evolution-egfr-resistance]]

The foundational serial re-biopsy study (37 patients, 97 specimens) that mapped the EGFR-TKI resistance landscape:
- **T790M gatekeeper mutation**: 49% of cases
- **MET amplification**: 13%
- **SCLC transformation**: 14%
- **EMT**: ~5%

This study established serial biopsy as the clinical paradigm for understanding resistance evolution and directly motivated the development of osimertinib (targeting T790M).

### Offin 2019 — TMB as a negative biomarker
→ [[drug-resistance/offin-2019-tumor-mutation-burden-egfr-tki-efficacy]]

A counterintuitive finding: high tumor mutation burden (TMB) is a **negative** predictor for EGFR-TKI efficacy (median time to treatment discontinuation 9.6 vs. 16.7 months). TMB also escalates upon acquired resistance (3.42 → 6.56 mut/Mb). High TMB was enriched for TP53/SMARCA4 co-mutations and associated with reduced T790M acquisition. This challenges the blanket assumption that high TMB predicts therapy benefit — context matters.

### Han 2023 — Exosome-mediated TME remodeling
→ [[drug-resistance/han-2023-tumour-microenvironment-changes-osimertinib-resistance]]

Osimertinib resistance drives decreased CD8+ T cells and increased M0/M2 macrophages. The mechanism: resistant cell-derived **exosomes** (not soluble factors) polarize macrophages toward M2 via miR-1258-3p and miR-17-5p. ECM/TGF-beta/PI3K-AKT proteins are upregulated in resistant exosomes. This identifies a non-cell-autonomous resistance mechanism where the TME actively supports tumor survival.

### Ibusuki 2025 — IFITM3-MET-AKT axis
→ [[drug-resistance/ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]]

IFITM3 was the only gene significantly upregulated in short-PFS vs. long-PFS osimertinib patients. The mechanism: IFITM3 physically interacts with MET in lipid rafts, activating PI3K-AKT. TME cytokines (TNF-α, IL-6, IFN-γ) upregulate IFITM3 in a feed-forward loop. Osimertinib + capmatinib (MET inhibitor) overcame resistance in vivo. This connects innate immunity (IFITM3 is an interferon-stimulated gene) to RTK resistance — a non-genetic, TME-driven mechanism.

## The EGFR Resistance Evolution

```
EGFR activating mutation (L858R, del19)
    │
    ├── 1st/2nd-gen TKI (erlotinib, afatinib)
    │       │
    │       ├── T790M (49%) → Osimertinib
    │       │       │
    │       │       ├── C797S (covalent binding site)
    │       │       ├── MET amplification → capmatinib
    │       │       ├── IFITM3-MET axis (TME-driven)
    │       │       └── TME remodeling (exosome-mediated)
    │       │
    │       ├── MET amplification (13%)
    │       ├── SCLC transformation (14%)
    │       └── EMT (~5%)
    │
    └── High TMB = worse TKI response (Offin 2019)
```

## Connections

- **Day 4** covers KRAS G12C resistance, which shares the theme of rapid adaptive resistance and TME involvement
- The EMT theme connects to **Day 4** (KRAS) and the immunotherapy resistance paper (Kim 2024, IRF6/EMT in PDAC)
- Phosphoproteomics (**Day 6**) can detect RTK pathway rewiring that drives resistance
- CPTAC LUAD data (**Day 7**) reveals PTPN11/SOS1 phospho-signatures specific to EGFR- vs. KRAS-mutant tumors

## Key Takeaway

EGFR-TKI resistance is a multi-layered problem. Genetic resistance (T790M, C797S, MET amp) is the most tractable — new drugs can target new mutations. But histologic transformation (SCLC) and TME remodeling represent fundamentally different biological escapes that cannot be addressed by better kinase inhibitors alone. The IFITM3 story is particularly instructive: an interferon-stimulated gene hijacked by TME cytokines to activate an RTK bypass pathway — blurring the line between immunity and oncogenic signaling.
