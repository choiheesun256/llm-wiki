---
title: "Role of p38 MAP kinase in cancer stem cells and metastasis"
authors: ["Sriya Kudaravalli", "Petra den Hollander", "Sendurai A. Mani"]
year: 2022
doi: "10.1038/s41388-022-02329-3"
journal: "Oncogene"
category: cancer
pdf_path: "llm-wiki/papers/plus/kudaravalli-2022-role-p38-map-kinase-cancer.pdf"
pdf_filename: "kudaravalli-2022-role-p38-map-kinase-cancer.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - p38-MAPK
  - cancer-stem-cells
  - metastasis
  - chemoresistance
  - EMT
  - kinase
  - drug-target
  - review
---

## Summary

p38 MAPK is a context-dependent regulator of cancer stem cells (CSCs) and metastasis. This 2022 review by Kudaravalli et al. synthesizes evidence that p38 acts downstream of multiple CSC-specific pathways to promote EMT, stemness maintenance, and chemoresistance — and argues that p38 inhibitors combined with standard chemotherapy can eliminate CSCs and prevent metastatic progression.

**Source:** [[sources/kudaravalli-2022-role-p38-map-kinase-cancer|Kudaravalli 2022 (source note)]]

---

## 1. p38 MAPK Biology

**Four isoforms** encoded by distinct genes:

| Isoform | Gene | Expression |
|---|---|---|
| p38α | MAPK14 | Ubiquitous |
| p38β | MAPK11 | Ubiquitous |
| p38γ | MAPK12 | Skeletal muscle |
| p38δ | MAPK13 | Pancreas, kidney, small intestine, testis, lungs |

- Activated by: DNA damage, inflammatory cytokines, osmolarity changes, oxidative stress, heat shock.
- Serine/threonine kinases with a Thr-Gly-Tyr dual phosphorylation motif.
- p38α and p38β share 75% sequence identity; p38γ and p38δ share 70% homology with each other (62% and 61% with p38α, respectively).
- Can be **tumor-suppressive or tumor-promoting** depending on cellular context and isoform.

---

## 2. p38 and Cancer Stem Cells

### The p38-FOXC2 Axis (Pro-CSC)

The central mechanism by which p38α drives stemness and metastasis:

```
MAP3K → p38α → phospho-FOXC2 (Ser367) → ZEB1 → EMT → mesenchymal/CSC state
```

- p38α phosphorylates FOXC2 at Ser367, stabilizing it and activating ZEB1.
- This promotes EMT, confers stem-cell attributes in vitro, and enables metastatic competence in vivo.
- p38 inhibition reverses this axis: FOXC2 inhibition restores epithelial phenotype, blocks metastatic growth.
- Inhibition of p38α also blocks sphere-forming potential and the CD44hi/CD24lo CSC marker profile.

### Isoform-Specific CSC Regulation

**p38γ (pro-CSC in multiple breast cancer subtypes):**
- Overexpression in luminal A MCF7 cells increases CSC populations and tumorsphere formation.
- Knockdown reduces CSC frequency and tumorsphere formation in MCF7-ErbB2 and BT47 (HER2+) cells, and in TNBC lines MDA-MB 231 and MDA-MB 468.
- Mechanism: directly stimulates Nanog expression via c-Jun binding to the AP1 site of the *Nanog* promoter → Nanog induces SOX2 and OCT3/4 → CSC expansion.

**p38 in other cancer types:**
- Head and neck SCC (SCC-131): p38 inhibition reduces SOX2, OCT4, KLF4, c-MYC, CD44.
- Colorectal CSCs: p38 pathway activation enhances survival under hypoxia and serum depletion.
- Osteosarcoma: KLF4 activates p38, inducing osteosphere formation and stem-cell-associated genes (CD133, ALDH1A1, ABCG2).
- Ovarian cancer: IL-17 activates p38, stimulating self-renewal of CD133+ CSCs.

### Tumor-Initiating vs. Metastatic CSCs

- **tiCSCs** generate heterogeneous primary tumor cell lineages.
- **mCSCs** have migratory/invasive capabilities and survive in circulation; characterized by CXCR4 expression, which activates p38.
- p38 promotes metastasis specifically through mCSCs, not primary tumor growth through tiCSCs.
- p38 inhibition impedes breast cancer metastasis but not primary tumor growth — a key distinction for therapeutic strategy.

### Opposing (CSC-Suppressive) Roles of p38

- **p38/NF-κB/Snail axis** in HaCaT cells: caffeic acid activates p38, which reduces NF-κB binding to *Snail* promoter → decreases CSC-like properties.
- **HS06** (heparan sulfate hexasaccharide): activates p38α and p38β to inhibit CSC self-renewal in breast, colorectal, and pancreatic CSCs.
- **p38γ/δ** inactivation in NSCLC: paradoxically abolishes CSC properties via MK2-mediated phosphorylation of Hsp27 → proteasomal degradation of SOX2, OCT4, Nanog, KLF4, c-MYC.
- WIP1 (p38 phosphatase) overexpressed in cancer: promotes CSC properties by inhibiting p38 MAPK in NSCLC.

---

## 3. Mechanisms of p38-Mediated Chemoresistance

### Drug Efflux
- p38 promotes ABC transporter expression: ABCB1 (MDR1), ABCC1, ABCG2.
- These pumps export paclitaxel, doxorubicin, etoposide, vinblastine, colchicine, and other agents from CSCs.
- BIRB796 (p38 inhibitor) reverses MDR1-mediated multidrug resistance via ATPase/transport function inhibition.
- SB202190 reduces MDR1 levels in gastric cancer cells, sensitizing to vincristine.

### ALDH Activity
- Cytosolic ALDHs oxidize intracellular aldehydes from chemotherapy agents, rendering them inactive.
- p38 regulates ALDH expression; TGF-β1-mediated p38 activation induces ALDH2 in AML.
- Cyclophosphamide detoxification: cyclophosphamide → 4-hydroxy-cyclophosphamide → aldophosphamide → detoxified by ALDHs in CSC subpopulation.
- ALDH-positive lung cancer cell lines are resistant to multiple chemotherapy agents.

### Quiescence and Dormancy
- p38 signaling (BMP7-dependent) promotes dormancy in prostate cancer CSCs.
- TGF-β2 drives disseminated tumor cell dormancy via p38α/β signaling.
- Low ERK/p38 ratio → tumor growth arrest; high ERK/p38 → tumor growth.
- p38 activates CDC42, induces p21/p27, represses cyclin D1 → G2 checkpoint arrest → slow-cycling CSCs evade chemotherapy targeting rapidly dividing cells.

### DNA Repair Enhancement
- p38α activates the G2 checkpoint in tumor cells treated with temozolomide.
- Maintains genomic stability via ATR-Chk1 signaling axis.
- Directly phosphorylates CtIP for DNA double-strand break resection.
- Activated p38 MAPK increases BRD4 and 53BP1 (promotes nonhomologous end joining).
- p38 inhibition → increased DNA damage accumulation → apoptosis in CSCs.

### Aberrant Signaling Pathways
- **WNT/β-catenin:** p38β phosphorylates LRP6, required for stem and CSC self-renewal; contributes to chemoresistance.
- **Notch:** Notch1 stimulates p38 → enriches CD133+ CSC population.
- **NF-κB:** p38 enhances NF-κB activity → chemoresistance and pro-survival signaling.
- **BCL-2:** p38 phosphorylates BCL-2 → promotes apoptosis (context-dependent; can be anti-CSC).

---

## 4. p38 Combination Therapy to Overcome Chemoresistance

### Rationale

p38 inhibition:
1. Decreases expression of stemness factors (FOXC2, Nanog, SOX2, OCT4).
2. Compromises intravasation, distant colonization, and survival of circulating tumor cells.
3. Pushes mCSCs toward MET (mesenchymal-to-epithelial transition) → chemosensitive epithelial state.
4. Allows dose reduction of toxic chemotherapy drugs.

### Key Combination Evidence

| Cancer | p38 Inhibitor | Partner Drug | Key Effect |
|---|---|---|---|
| Neuroblastoma | SB203580 | Etoposide | Dramatically reduces dose needed; eliminates neurospheres |
| Lymphoma | SB203580 | Etoposide | Increases sensitivity |
| Glioma | LY479754 | Temozolomide | Heightens vulnerability |
| Head and neck SCC | SB203580 | Cisplatin | Increases sensitivity |
| Gastric cancer | SB203580 | Doxorubicin | Reduces cell viability, increases death; increases Bax, decreases BCL-2 |
| Colorectal cancer | SB203580 | 5-FU | Increases sensitivity, increases Bax expression |
| Colorectal cancer | SB203580 | Irinotecan | Increases sensitivity |
| TNBC | LY2228820 / VX-702 / PH-797804 | Gemcitabine or epirubicin | Greater reduction in proliferation than either alone |
| Breast cancer (mouse) | (p38i) | Cisplatin | Smaller tumors, less advanced stage; increased reactive oxygen species, JNK-dependent apoptosis |
| Ovarian cancer (clinical) | Ralimetinib | Gemcitabine + carboplatin | Modest improvement in PFS (randomized phase Ib/2 trial) |
| Ovarian cancer (cisplatin-resistant) | (p38i) | Metformin + cisplatin | Improves cisplatin sensitivity |

### Treatment Schedule Considerations

- **Pre-treatment** with p38 inhibitor followed by chemotherapy may prevent CSC enrichment that chemotherapy alone induces.
- **Co-treatment** directly decreases cell viability and tumorigenicity.
- Important caveat: some chemotherapy drugs (e.g., doxorubicin) can activate p38 in certain cell lines, potentially enhancing CSC properties and chemoresistance — correct sequence matters.

---

## 5. Key Takeaways and Open Questions

**Core conclusions:**
- p38 is a convergence point for CSC maintenance, EMT, and chemoresistance across multiple cancer types.
- The p38-FOXC2-ZEB1 axis is the central mechanism linking p38 activity to stemness and metastasis.
- p38 inhibitors combined with chemotherapy can eliminate residual CSCs, prevent recurrence, and may allow lower chemotherapy doses.
- Systemic p38 inhibition has minimal side effects, making it a viable combination partner.

**Open questions / caveats:**
- Opposing roles of different p38 isoforms complicate therapeutic strategy; targeting one isoform may not affect (or may paradoxically enhance) another's pro-CSC activity.
- Cancer-type and isoform-specific characterization is needed before clinical translation.
- Need to determine whether pre-treatment or co-treatment schedules are more effective.
- p38 inhibition may not induce chemosensitivity in CSCs with extreme mesenchymal phenotypes (very low FOXC2 levels).

**Related concepts:** [[EMT]], [[cancer stem cells]], [[chemoresistance]], [[FOXC2]], [[p38 MAPK]], [[drug efflux]], [[ALDH]], [[tumor dormancy]]
