---
title: "Proteogenomic Landscape of Breast Cancer Tumorigenesis and Targeted Therapy"
authors: "Krug et al."
year: 2020
doi: "10.1016/j.cell.2020.10.036"
category: cancer
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis.pdf"
pdf_filename: "krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - breast-cancer
  - proteogenomics
  - CPTAC
  - multi-omics
  - phosphoproteomics
  - acetylproteomics
  - ERBB2
  - CDK4-6
  - Rb-pathway
  - tumor-immunology
  - NMF-clustering
  - PAM50
  - cancer-metabolism
  - precision-medicine
source: "[[sources/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]"
---

# Proteogenomic Landscape of Breast Cancer Tumorigenesis and Targeted Therapy

> Krug et al., *Cell* 183:1436–1456 (2020) | DOI: [10.1016/j.cell.2020.10.036](https://doi.org/10.1016/j.cell.2020.10.036)
> CPTAC | Prospective 122-tumor breast cancer cohort | TMT proteomics + phospho + acetyl + WES + RNA-seq

## 1. What is this paper about?

This paper delivers the largest prospective proteogenomic (PG) resource for breast cancer (BRCA) as of 2020. The Clinical Proteomic Tumor Analysis Consortium (CPTAC) collected 122 treatment-naive primary tumors with controlled ischemia time, then profiled them across five data layers: whole-exome sequencing, RNA-seq, mass spectrometry proteomics, phosphoproteomics, and acetylproteomics (all TMT-based). The integration of these layers reveals biology invisible to genomics alone — including post-translational modifications (PTMs), metabolic rewiring, immune microenvironment features, and protein-level drug target status — and produces testable therapeutic hypotheses across subtypes.

The central argument: standard genomic and transcriptomic profiling (including PAM50) is insufficient for precision oncology in BRCA, and proteogenomics provides essential complementary information for clinical decision-making.

## 2. Key Findings

### Multi-omics NMF Subtyping Reveals Hidden Biology in PAM50 LumA

Non-negative matrix factorization (NMF) integrating all five omics layers produced four consensus clusters (NMF Basal-I, Her2-I, LumA-I, LumB-I). The most clinically important discovery: PAM50 LumA patients split into two biologically and prognostically distinct NMF clusters:

- **NMF LumA-I**: ER/PR positive, wild-type TP53, high stromal infiltration, enriched for estrogen response, glycosaminoglycan metabolism
- **NMF LumB-I**: worse survival (p < 0.0001 vs LumA-I), fewer PIK3CA mutations, lower stromal infiltration, enriched for proliferation and E2F targets — more "LumB-like" despite PAM50 LumA call

This finding suggests that a clinically significant portion of patients classified as "low-risk" LumA by current standard may actually harbor higher-risk biology better captured by multi-omics NMF classification.

NMF Her2-I was the most heterogeneous cluster, incorporating tumors from all five PAM50 subtypes. Its defining features include endoplasmic reticulum (ER) function, cholesterol/sterol biosynthesis, and elevated immune checkpoint expression (PD1, PD-L1 at RNA and phosphoprotein levels).

### Phosphoproteomics Maps Targetable Kinases Per Subtype

BlackSheep outlier analysis of phosphoproteomics identified subtype-enriched hyperphosphorylated kinases as candidate therapeutic targets:

| NMF Subtype | Outlier kinases |
|---|---|
| Basal-I | PRKDC, MAP4K4, SPEG |
| Her2-I | ERBB2, CDK12 |
| LumA-I | CAMK1, MAST3, ITPKB |

Notably, somatic mutations in tumor suppressor genes were linked to specific kinase phosphorylation outliers — e.g., RIPK3 upregulation in MAP3K1-mutant tumors, TNIK in ARID1A-mutant tumors, MAST4/DCLK1 in GATA3-mutant tumors — suggesting non-obvious downstream signaling consequences of each driver mutation.

### Acetylproteomics Highlights Subtype-Specific Metabolism

The first comprehensive acetylproteome analysis in a large BRCA cohort found:

- **NMF Basal-I**: glycolysis upregulated at the protein level (HK3, PFKP, GAPDH, ENO1, LDHB) but *hypoacetylated* at the post-translational level — suggesting active glycolysis with a specific PTM regulatory pattern. Serine synthesis pathway (PHGDH, PSAT1) also upregulated.
- **Cytoplasmic vs. mitochondrial Ac compartmentalization**: two-thirds of DE mitochondrial Ac sites were upregulated in Basal-I; cytoplasmic Ac sites were downregulated compared to LumB-I — implying compartment-specific Ac regulation.
- **SIRT3**: mitochondrial deacetylase protein levels negatively correlated with mitochondrial Ac — SIRT3 may broadly regulate non-enzymatic mitochondrial acetylation in BRCA.
- **Nuclear acetylation**: two Basal-I subgroups (N-Ac C1 vs C3) differ in DNA damage repair pathway acetylation (BER, NER, DSBR, SSBR, HR, FA) without protein-level differences — purely PTM-based distinction. C1 shows elevated CREBBP-K1591/K1592 activation loop acetylation explaining the hyperacetylation pattern.

### Proteogenomics Corrects ERBB2 Diagnostic Status

A critical clinical implication: proteomics can override genomic ERBB2 classification.

- **Pseudo-ERBB2+**: 2 of 17 prospective and 1 of 16 retrospective ERBB2-amplified tumors had ERBB2 protein levels within the distribution of non-amplified tumors. These are "ERBB2-amplified but protein-negative" cases where anti-ERBB2 therapy (e.g., trastuzumab) may be ineffective.
- Some pseudo-ERBB2+ cases showed TOP2A amplification as the alternative 17q amplicon driver.
- HER2E by PAM50 and ERBB2 PG+ were discordant in 7 of 15 cases — PAM50 is an imperfect surrogate.
- PG-identified HER2E/ERBB2 PG− samples compensate via elevated phosphorylation of other ERBB family members and MAPK signaling, suggesting they may respond to pan-ERBB or MEK inhibitors rather than ERBB2-specific agents.

### Immune Microenvironment Profiling Identifies Immunotherapy Candidates in Luminal Tumors

Conventional wisdom holds that immune checkpoint therapy (ICT) is mainly useful in TNBC/basal BRCA. This study challenges that:

- A significant fraction of LumB tumors had active I-TME with high CIBERSORT immune scores, elevated PD-L1 and PD1 at RNA and phosphoprotein level, and validated CD3+ tumor infiltration by IHC.
- **APOBEC-driven mutagenesis** (APOBEC3G/3B proteins) was positively correlated with PD-L1 in both luminal and basal tumors; six APOBEC-enriched cases identified (1 Her2, 3 LumA, 2 LumB).
- **Loss of SSBR/NER proteins** (mismatch repair, nucleotide excision repair) was negatively correlated with PD-L1 specifically in luminal tumors — immune checkpoint upregulation may be triggered by unrepaired DNA damage in ER+ disease, linking endocrine therapy resistance to immunogenicity.
- Combined: APOBEC mutagenesis or SSBR/NER loss in luminal tumors defines two distinct routes to I-TME activation that could rationalize ICT in non-TNBC breast cancer.

### Rb Protein Levels Enable CDK4/6 Inhibitor Response Prediction Beyond RB1 Genotype

- Rb protein levels in HR+/ERBB2− tumors positively correlated with proliferation (MGPS), consistent with Rb's role as a proliferation facilitator when phosphorylated.
- Rb protein levels in TNBC negatively correlated with proliferation — Rb-low TNBC is highly proliferative; Rb-high TNBC has LAR (luminal androgen receptor) phenotype.
- In GDSC cell line data, Rb protein levels negatively correlated with palbociclib AUC across all HER2− BRCA lines (Spearman rho = −0.61, p = 0.022) — regardless of RB1 genomic status.
- Some RB1 wild-type cell lines with low Rb protein were also CDK4/6i-resistant, suggesting that post-genomic Rb quantification provides added predictive value beyond RB1 mutation/deletion status alone.
- CDK4 and CDK6 kinase activity positively correlated with MGPS in HR+/ERBB2− but not in TNBC — subtype-specific CDK activity-proliferation coupling.

## 3. Technical Approach

```
134 prospective tumors (controlled ischemia)
         |
         v
   Cryopulverization → single homogeneous aliquot
         |
    _____|_____________________________
   |         |         |              |
  DNA       RNA      Protein        PTM
 (WES)   (RNA-seq)  (TMT-MS)    (TMT-MS)
22,692    23,121     10,107    Phospho: 38,968
  CNA     mRNA               Acetyl:   9,869
         |___________________________|
                    |
             NMF integration
             (4 clusters)
                    |
          BlackSheep / PTM-SEA / GSEA
          Immune deconvolution
          ERBB2 / Rb / metabolic analyses
```

Key methodological advances over prior BRCA proteogenomics (Mertins et al. 2016):
1. Prospective collection with ischemia control (vs. residual TCGA material)
2. Acetylproteomics added as a new data layer
3. Larger cohort (122 vs. ~77 analyzable in prior study)
4. Multi-cohort validation (prospective + retrospective TCGA + DP1 ERBB2+ biopsies)

## 4. Significance and Context

This paper is a landmark resource paper — its primary contribution is the dataset and the multi-angle analyses it enables, rather than a single mechanistic discovery. Within the CPTAC program, it sits alongside studies of lung adenocarcinoma (Gillette et al. 2020), colon/rectal cancer (Zhang et al. 2014), and endometrial cancer (Dou et al. 2020) that collectively establish proteogenomics as a distinct analytical paradigm.

The clinical implications are most immediate for three scenarios:
1. **ERBB2 status disambiguation**: PG can correct false-positive ERBB2 amplification calls and identify pseudo-ERBB2+ patients unlikely to benefit from HER2-targeted therapy.
2. **CDK4/6 inhibitor candidate identification in TNBC**: Rb protein quantification by proteomics could select a subset of TNBC (Rb-high, non-BL1) that might respond to palbociclib despite lacking the canonical HR+/ERBB2− indication.
3. **Immunotherapy in luminal BRCA**: APOBEC mutagenesis and SSBR/NER loss define actionable I-TME-active subsets within LumA/LumB tumors.

## 5. Limitations and Open Questions

- Bulk tumor analysis loses cellular/spatial resolution of I-TME — single-cell and spatial proteomics needed
- Population not optimized for demographic diversity
- All findings are correlational; therapeutic interventions require prospective trials
- SIRT3's dual role (tumor suppressor and oncogene) makes its therapeutic potential uncertain
- Whether NMF LumB-I reclassification of PAM50 LumA patients would change treatment decisions requires clinical validation
- Microscaled PG workflows (Satpathy et al. 2020) needed for routine clinical implementation from core needle biopsies
