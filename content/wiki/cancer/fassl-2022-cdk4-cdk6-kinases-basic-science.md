---
title: "CDK4 and CDK6 kinases: From basic science to cancer therapy"
authors: "Anne Fassl, Yan Geng, Piotr Sicinski"
year: 2022
doi: "10.1126/science.abc1495"
source: "fassl-2022-cdk4-cdk6-kinases-basic-science.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/fassl-2022-cdk4-cdk6-kinases-basic-science.pdf"
pdf_filename: "fassl-2022-cdk4-cdk6-kinases-basic-science.pdf"
source_collection: "plus-batch-2026-05"
tags: [CDK4, CDK6, cell-cycle, kinase, RB1, cyclin-D, breast-cancer, CDK-inhibitor, palbociclib, ribociclib, abemaciclib, senescence, antitumor-immunity, drug-resistance]
---

## Summary

CDK4 and CDK6 are cyclin-dependent kinases activated by D-type cyclins (cyclin D1, D2, D3). Their primary canonical function is phosphorylation of the retinoblastoma protein RB1, releasing E2F transcription factors to drive G1-to-S phase transition. In many cancers, cyclin D–CDK4/6 is constitutively activated through CCND1 amplification, CDK6 overexpression, or loss of INK4 inhibitors such as p16INK4A, driving uncontrolled proliferation.

Three small-molecule CDK4/6 inhibitors — palbociclib, ribociclib, and abemaciclib — have been FDA-approved for treatment of HR+/HER2− breast cancer in combination with endocrine therapy. These drugs substantially extend progression-free and overall survival. The field has expanded to recognize that CDK4/6 regulate functions far beyond the cell cycle, including tumor cell metabolism, lysosome biogenesis, and antitumor immunity. Resistance to CDK4/6 inhibitors is nearly universal over time and involves multiple mechanisms including RB1 loss, cyclin E–CDK2 activation, lysosomal drug sequestration, and CDK6 amplification.

## Key Contributions

1. **Canonical CDK4/6 biology synthesized:** D-cyclin–CDK4/6 complexes are the primary effectors linking mitogenic signaling to cell cycle entry. RB1 phosphorylation by CDK4/6 is rate-limiting for G1 progression in cells with intact RB1.

2. **Clinical validation in breast cancer:** All three approved CDK4/6 inhibitors extend median PFS by approximately 10 months and improve overall survival in HR+/HER2− advanced breast cancer when added to endocrine therapy.

3. **Tumor metabolism:** Cyclin D3–CDK6 phosphorylates and inactivates glycolytic enzymes PFKP and PKM2, redirecting carbon flux to the pentose phosphate pathway and serine synthesis. CDK4/6 also regulates mTORC1 via TSC2 and controls lysosome biogenesis via TFEB phosphorylation.

4. **Antitumor immunity:** CDK4/6 inhibition de-represses endogenous retroviral elements (ERVs) via DNMT reduction, generating dsRNA and type III interferon responses. CDK4/6 inhibition also reduces PD-L1 (via RB1/NF-κB axis), depletes immunosuppressive Tregs, and enhances effector T cell function. CDK4/6 inhibitors synergize with PD-1/PD-L1 checkpoint blockade in preclinical models.

5. **Resistance taxonomy:** RB1 loss is the best-documented mechanism. Others include CycE–CDK2 bypass, CDK6 amplification, lysosomal drug sequestration, and upstream pathway reactivation (FGFR, MAPK, PI3K/AKT).

6. **Future therapeutics:** Dual CDK4/6+CDK2 inhibitors, CDK4-selective compounds, and D-cyclin degraders are under development. Clinical trials of CDK4/6 inhibitors span more than 50 tumor types and over 300 trials.

## Methodology and Architecture

This is a comprehensive review article. Key conceptual frameworks:

### CDK4/6 Regulation

```
Mitogenic signals
       ↓
  Cyclin D synthesis (labile, t½ < 30 min)
       ↓
CycD–CDK4/6 complex formation
  (assisted by KIP/CIP proteins as assembly factors: p21CIP1, p27KIP1)
       ↓
  INK4 proteins (p16, p15, p18, p19) compete and inhibit
       ↓
  CAK phosphorylates CDK4 T-loop → activates kinase
       ↓
  RB1 phosphorylation (partial) → CycE–CDK2 completes
  hyperphosphorylation → E2F release → S-phase entry
```

**Cyclin D1 degradation pathway:**
- GSK3β phosphorylates Thr286 at G1/S boundary
- Nuclear export via CRM1
- Polyubiquitination by F-box proteins (FBXO4, FBXW8, SKP2, CRL4/AMBRA1)
- Proteasomal degradation

### Inhibitor Profiles

| Inhibitor | D1-CDK4 IC50 | D3-CDK6 IC50 | Notable off-targets | FDA status |
|---|---|---|---|---|
| Palbociclib | 11 nM | 9 nM | None major | Approved 2015 (HR+/HER2−) |
| Ribociclib | 10 nM | 39 nM | None major | Approved 2017 |
| Abemaciclib | 0.6–2 nM | 8 nM | CDK9, PIM1, HIPK2, CAMK2s | Approved 2017 (also monotherapy) |
| Trilaciclib | 1 nM | 4 nM | — | Approved (SCLC myelopreservation) |

### Non-canonical CDK4/6 Substrates

- **FOXM1** — pro-proliferative TF; phosphorylation promotes cell cycle and suppresses senescence
- **SMAD3** — TGF-β mediator; CDK4 phosphorylation blocks TGF-β-induced cell cycle arrest
- **TSC2** — mTORC1 negative regulator; CDK4/6-mediated inactivation activates mTORC1
- **PFKP / PKM2** — glycolytic enzymes inhibited by cyclin D3–CDK6; affects ROS via PPP/serine pathway
- **TFEB** — master regulator of lysosome biogenesis; inactivated by CDK4/6
- **PRMT5** — arginine methyltransferase; activation by CycD1–CDK4/6 affects CUL4, p53 target gene regulation

### Antitumor Immunity Mechanisms

- **ERV activation:** CDK4/6 inhibition → reduced DNMT → de-methylation of ERV loci → dsRNA production → type III IFN → increased MHC-I on tumor cells → enhanced T cell killing.
- **PD-L1 reduction:** CycD–CDK4 phosphorylates SPOP → SPOP promotes PD-L1 polyubiquitination; CDK4/6 inhibition → SPOP activity lost → RB1/NF-κB pathway reduces PD-L1 expression (CycD–CDK4-mediated RB1 S249/T252 phosphorylation promotes RB1 binding to NF-κB p65, repressing PD-L1 transcription).
- **Treg depletion:** Cyclin D3–CDK6 is required for Treg proliferation; CDK4/6 inhibition preferentially depletes Tregs while sparing CD8+ T cells.
- **T cell activation:** Cyclin D3–CDK6 phosphorylates NFAT in effector T cells, sequestering it; CDK4/6 inhibition → NFAT nuclear translocation → IL-2 and IFN-γ secretion.

## Results

### Pivotal Clinical Trial Summary

| Trial | Drug | Setting | PFS (control vs drug) | OS benefit |
|---|---|---|---|---|
| PALOMA-1 | Palbociclib + letrozole | 1L postmenopausal HR+/HER2− | 10.2 → 20.2 mo | — |
| PALOMA-2 | Palbociclib + letrozole | 1L postmenopausal HR+/HER2− | 14.5 → 24.8 mo | — |
| PALOMA-3 | Palbociclib + fulvestrant | Prior ET, HR+/HER2− | — | 28.0 → 34.9 mo |
| MONALEESA-2 | Ribociclib + letrozole | 1L postmenopausal HR+/HER2− | 42.2% vs 63.0% at 18mo | — |
| MONALEESA-3 | Ribociclib + fulvestrant | Advanced HR+/HER2− | 12.8 → 20.5 mo | 45.9% → 57.8% at 42 mo |
| MONALEESA-7 | Ribociclib + ET | Pre/perimenopausal HR+/HER2− | 13.0 → 22.8 mo | 46.0% → 70.2% at 42 mo |
| MONARCH 2 | Abemaciclib + fulvestrant | Prior ET, HR+/HER2− | 9.3 → 16.4 mo | 37.3 → 46.7 mo |
| MONARCH 3 | Abemaciclib + AI | 1L advanced HR+/HER2− | 14.8 → 28.2 mo | — |
| MonarchE | Abemaciclib + ET | Early-stage, high-risk HR+/HER2− | Reduced recurrence risk | Ongoing |

### Resistance Mechanisms (Fig. 3 framework)

| Mechanism | Evidence | Potential override |
|---|---|---|
| RB1 loss | ctDNA, PDX, tumor biopsies; 5–10% acquired, ~40–50% TNBC intrinsic | None (RB1 required for response) |
| CycE–CDK2 activation | CCNE1/CCNE2 amplification; multiple upstream activators | CDK2 inhibitors (PF-07104091, BLU0298) |
| CDK6 amplification/overexpression | Found in abemaciclib-resistant ER+ cells and ctDNA | — |
| Lysosomal sequestration | Expanded lysosomal compartment in TNBC sequesters basic drugs | Chloroquine, azithromycin, siramesine |
| Upstream pathway (FGFR, MAPK, PI3K) | Autocrine FGF loops in KRAS-mutant NSCLC; FGFR1/2 amplification in ER+ | FGFR, MEK, PI3K inhibitors in combination |
| Noncanonical CycD1–CDK2 | AMBRA1 depletion promotes CycD1–CDK2 complex | Investigational |
| Hippo pathway/FAT1 loss | FAT1 loss → TAZ/YAP → CDK6 up-regulation | — |

### Combination Synergies (preclinical, Table 2 highlights)

- CDK4/6i + PI3K inhibitors (PIK3CA mutant TNBC, ER+ breast cancer)
- CDK4/6i + MEK inhibitors (KRAS mutant colorectal, BRAF-V600E melanoma)
- CDK4/6i + EGFR inhibitors (TNBC, EGFR-mutant NSCLC)
- CDK4/6i + HER2 inhibitors (HER2+ breast cancer)
- CDK4/6i + mTOR inhibitors (multiple tumor types)
- CDK4/6i + PARP inhibitors (ovarian cancer, TNBC)
- CDK4/6i + immune checkpoint blockade (most tumor types)
- CDK4/6i prior to chemotherapy (synergy via E2F-dependent DNA damage repair gene suppression)

## Related Papers

- **Fry et al. (2004)** — Original preclinical characterization of palbociclib (PD-0332991) showing selective CDK4/6 inhibition and antitumor activity.
- **Finn et al. (2009)** — Identification of luminal ER+ breast cancer as most sensitive to palbociclib; established RB1 as key response biomarker.
- **Goel et al. (2017)** — CDK4/6 inhibition enhances antitumor immunity via T cell stimulation and immune checkpoint sensitization.
- **Deng et al. (2018)** — CDK4/6 inhibition augments antitumor immunity by enhancing T cell activation via NFAT signaling.
- **Schaer et al. (2018)** — Abemaciclib induces T cell-inflamed tumor microenvironment and enhances efficacy of PD-L1 checkpoint blockade.
- **Franco et al. (2016)** — Metabolic reprogramming of pancreatic cancer cells by CDK4/6 inhibition.
- **Wang et al. (2017)** — Cyclin D3–CDK6 phosphorylates and inhibits PFKP and PKM2, redirecting metabolic flux.
- **Fassl et al. (2020)** — Lysosomal biomass increase causes resistance of TNBC to CDK4/6 inhibitors.
- **Martinez-Carreres et al. (2019)** — CDK4/6 regulate lysosomal function and mTORC1 activity to promote cancer cell survival.
- **Narasimha et al. (2014)** — Cyclin D activates RB1 as a tumor suppressor via mono-phosphorylation (challenges canonical hyperphosphorylation model).
- **Knudsen et al. (2019)** — Convergent evolution of resistance pathways to CDK inhibitors and endocrine therapy in breast cancer.
