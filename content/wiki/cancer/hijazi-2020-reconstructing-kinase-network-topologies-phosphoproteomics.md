---
title: "Reconstructing kinase network topologies from phosphoproteomics data reveals cancer-associated rewiring"
authors:
  - Maruan Hijazi
  - Ryan Smith
  - Vinothini Rajeeve
  - Conrad Bessant
  - Pedro R. Cutillas
year: 2020
doi: 10.1038/s41587-019-0391-9
journal: Nature Biotechnology
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics.pdf
pdf_filename: hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics.pdf
source_collection: plus-batch-2026-05
tags:
  - phosphoproteomics
  - kinase-network
  - signaling
  - AML
  - breast-cancer
  - PIK3CA
  - MAPK
  - PI3K
  - drug-resistance
  - network-topology
  - mass-spectrometry
  - EBDT
  - PDT
---

# Reconstructing kinase network topologies from phosphoproteomics — Hijazi et al. 2020

> Hijazi M, Smith R, Rajeeve V, Bessant C, Cutillas PR. **Reconstructing kinase network topologies from phosphoproteomics data reveals cancer-associated rewiring.** *Nature Biotechnology* 38, 493–502 (2020). https://doi.org/10.1038/s41587-019-0391-9

---

## 1. Core Contribution

This paper introduces a **chemical phosphoproteomics approach** to systematically reconstruct kinase-signaling network topologies from phosphoproteomics data, without relying on literature-mined networks. The central tool is the **EBDT (Expectancy of Being Downstream Target) algorithm**, which uses kinase inhibitor selectivity profiles to assign phosphorylation sites to their upstream kinases. From these assignments — called **PDTs (Putative Downstream Targets)** — kinase–kinase networks can be reconstructed and compared across tumors, cell lines, and genetic backgrounds.

**Key deliverables:**
- Identification of >6,000 protein phosphorylation sites usable to infer >1,500 kinase–kinase interactions
- ChemPhoPro database: http://chemphopro.org
- EBDT code: https://github.com/CutillasLab/ebdt
- Mass spectrometry data: PRIDE/PXD015943

---

## 2. EBDT Algorithm and PDT Framework

### How EBDT works
1. Profile kinase inhibitor selectivity in vitro (DiscoverX platform: 20 inhibitors × 408 kinases, supplemented with literature for 42 more inhibitors)
2. Treat cell lines with the same inhibitors; measure phosphoproteome by LC-MS/MS
3. Match in vitro kinase inhibition fingerprints to their effect on cellular phosphosites
4. Sites inhibited in cells with the same pattern as a kinase's in vitro fingerprint are assigned as PDTs (downstream of that kinase)

### Scale
- 3 cell lines profiled: HL60, MCF7, NTERA2
- 60 inhibitor treatments, 794 LC-MS/MS runs
- 23,181 unique phosphorylation sites quantified
- 6,206 unique PDTs for 103 kinases
- >19,410 total K–P relationships

### PDTs vs. existing databases

| Resource | Unique phosphosites | Kinase activity groups | Sites per kinase (avg) |
|----------|--------------------|-----------------------|------------------------|
| PDTs (this study) | 1,746 | 82 | 70.23 |
| pSitePlus | 403 | 58 | 10.50 |
| Signor | 228 | 51 | 7.65 |

5,575 PDT sites were not present in either Signor or PhosphoSitePlus.

### Network construction
- Kinase nodes (103 kinases) are connected by edges whose weight = number of shared PDTs
- Mean edge weight: 24 phosphorylation sites
- 1,508 edges with weight ≥ 5 sites
- Degree distributions follow a power law (consistent with biological networks)

---

## 3. Cancer-Associated Kinase Network Topologies

### Cell-line-specific circuitries
Comparative network analysis across HL60 (AML), MCF7 (breast cancer), and NTERA2 (embryonal carcinoma) revealed distinct kinase topologies:

- **MCF7**: PI3K pathway nodes (AKT1/2, mTOR, PIK3CA) show high centrality → more sensitive to GDC-0941 (PI3Ki)
- **NTERA2**: MAPK1–MAPK3 (ERK) nodes show higher centrality → more sensitive to trametinib (MEKi)
- **HL60**: PAK4, CAMK2D, PHKG2 are central; TTK identified as important in NRAS-associated AML

This correctly predicted differential drug sensitivity across the three cell lines, validated experimentally.

### AML primary tumors (n = 36)
- PLS regression models using kinase network edge enrichment predicted drug response to 4 kinase inhibitors with 20–45% accuracy (R²)
- Top predictive network edges for each drug:
  - Trametinib (MEK1/2i): PDGFRB.TTK, MAP2K1.PDGFRB, MAP2K1.MAPK14
  - Midostaurin: CAMK2D.CAMK2G, AKT1.MAPK1.3, CDK9.TNK2
  - Silmitasertib: KIT.RPS6KA2, CDK9.MAPK1.3, KIT.MAPK4.5
- *NRAS* G12D positive cases enriched MAPK-pathway kinases (MAP2K1, PAK1, PIK3CA, AKT1)
- TTK identified as important; CFI-402257 (TTK inhibitor) had greater impact on cell death in 6 AML models than current clinical agents

### Breast cancer (n = 83 biopsies + isogenic CRC lines)
- *PIK3CA* helical-domain (HD) mutations: enriched CDK2/CDK9/CSNK1E (cell cycle) and ARAF/PDGFRB (oncogenic transformation) axes
- *PIK3CA* kinase-domain (KD) mutations: enriched PIK3CA–AKT1–mTOR axes
- HD mutations had greater impact on PI3K and AKT centrality than KD mutations
- Anti-correlation between PI3K and MAPK signaling across 86 breast cancer cases
  - Wild-type *PIK3CA* cells adopt MAPK-dependent circuitries
  - Validated in PIK3CA-isogenic CRC lines (DLD1 E545K HD; HCT116 H1047R KD):
    - PIK3CA mutant cells: more sensitive to PI3K inhibition (GDC-0941)
    - Wild-type PIK3CA cells: preferentially killed by trametinib (MEKi)

---

## 4. Kinase Expression, Phosphorylation, and Activity

A key finding is that **phosphokinase expression** (total phosphorylation on a kinase) correlates better with estimated kinase activity than total protein expression or individual phosphosites.

- 92% (73/79) of PAK1 phosphosite intensities positively associated with PAK1 activity across 69 ovarian cancers
- Edge weight enrichment more strongly correlated with phosphokinase expression than protein expression (P < 2.2×10⁻¹⁶, Wilcoxon)
- Consistent across AML, breast, and ovarian cancer datasets
- Suggests: global phosphorylation is an understudied mechanism for regulation of kinase activity

---

## 5. Biological and Clinical Implications

**PI3K–MAPK pathway crosstalk in breast cancer:**
The anticorrelation between PI3K and MAPK network edges across primary breast cancer biopsies provides a mechanistic explanation for why single-agent PI3K inhibitors show limited efficacy in breast cancer — inhibiting PI3K signaling may activate MAPK pathways as a compensatory mechanism.

**Kinase network topology as a pharmacogenomic feature:**
- Network topology encodes information on drug responses that cannot be captured by kinase pathway activity scores alone
- Phosphoproteomics-based network signatures can identify kinase topologies associated with both phenotypes (drug resistance) and genotypes (specific mutations such as *PIK3CA* or *NRAS* mutations) of cancer cells

**TTK in AML:**
- TTK showed high centrality in NRAS-positive AML networks
- Pharmacological validation with CFI-402257 confirmed TTK as a functional node in AML biology
- Represents a novel kinase network topology associated with a specific genetic mutation

**Resource for the community:**
- ChemPhoPro provides unprecedented depth of K–P relationships
- PDTs are readily measurable by mass spectrometry across experimental conditions
- Enables monitoring of kinase network topology in primary patient samples
