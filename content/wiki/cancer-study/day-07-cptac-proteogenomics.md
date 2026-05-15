---
title: "Day 7: CPTAC Proteogenomics"
draft: false
---

# Day 7: CPTAC Proteogenomics

## Big Picture

The Clinical Proteomic Tumor Analysis Consortium (CPTAC) has produced the most comprehensive multi-omics characterization of human tumors to date — integrating genomics, transcriptomics, proteomics, phosphoproteomics, acetylomics, ubiquitylomics, and metabolomics across thousands of tumors and 14 cancer types. The central finding across all studies: **protein-level biology frequently diverges from genomic/transcriptomic predictions**, revealing therapeutic vulnerabilities invisible to DNA/RNA analysis alone.

## Key Concepts

**CNA buffering** — Copy number amplifications/deletions often do not propagate linearly to protein levels. The ubiquitin-proteasome system degrades excess protein, and translational regulation buffers mRNA changes. Only ~32% of genes show significant mRNA-protein correlation in some cancer types.

**Proteogenomic subtypes** — NMF clustering of proteomic data frequently reveals subtypes invisible to transcriptomics: novel EMT/poor-prognosis clusters, hidden heterogeneity within established subtypes (e.g., PAM50 LumA subdivisions).

**Phospho-signatures** — Functional readouts at the phosphoprotein level identify actionable pathway activations (e.g., PTPN11 Y62 in EGFR-mutant lung cancer) that genomics alone cannot predict.

## Paper-by-Paper (Chronological)

### Zhang 2014 — Colorectal cancer (foundational)
→ [[cancer/zhang-2014-proteogenomic-characterization-colon-rectal-cancer]]

The first CPTAC study (95 CRC tumors). Key findings: only 32% of genes show significant mRNA-protein correlation; 5 proteomic subtypes were identified, including a novel EMT/poor-prognosis cluster (C) without transcriptomic precedent. HNF4A, TOMM34, SRC were identified as candidate 20q amplicon drivers. This paper established the foundational principle of mRNA-protein discordance at scale.

### Mertins 2016 — Breast cancer (foundational)
→ [[cancer/mertins-2016-proteogenomics-connects-somatic-mutations-signalling]]

77 TCGA breast tumors. CNA trans-effects are heavily buffered at protein level (13% significant vs. 68% at mRNA). PIK3CA and TP53 phospho-signatures identified for the first time. CDK12, PAK1, TLK2, RIPK2 emerged as amplicon-driven actionable kinase targets. This paper connected somatic mutations to functional signaling consequences at protein level.

### Zhang 2016 — Ovarian cancer (HGSOC)
→ [[cancer/zhang-2016-integrated-proteogenomic-characterization-human-high-grade]]

174 HGSOC tumors. CNA trans-effects converge on invasion and immunity programs. Histone H4 K12/K16 dual acetylation marks HRD tumors. PDGFRβ/RhoA phospho-pathways associated with poor survival — invisible at transcriptomics level. First CPTAC cancer type beyond breast cancer.

### Gillette 2019 — Breast cancer (Oslo2 cohort)
→ [[cancer/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape]]

45 breast tumors using HiRIEF-LC-MS. First proteome-level recapitulation of PAM50 subtypes. 388 novel non-coding peptides identified, with 116 as MHC class I neoantigen candidates. Complements CPTAC BRCA with European population data and demonstrates proteogenomic neoantigen discovery.

### Vasaikar 2019 — Colon cancer (prospective)
→ [[cancer/vasaikar-2019-proteogenomic-analysis-human-colon-cancer]]

110 prospective colon tumors. The RB1 amplification paradox: CDK2-driven Rb hyperphosphorylation acts as an oncogenic driver (not a tumor suppressor gain). MSI-H tumors show glycolysis upregulation that negatively correlates with CD8+ T cell infiltration. Cancer-testis antigen IGF2BP3 expressed in 78% of all tumors. CNA copy number alone misrepresents functional biology.

### Krug 2020 — Breast cancer (prospective CPTAC)
→ [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]

122 prospective tumors (proteome + phosphoproteome + acetylome). NMF clustering reveals hidden biology within PAM50 LumA. Proteomics corrects ERBB2 diagnostic status in ambiguous IHC/FISH cases. Rb protein levels predict CDK4/6i response beyond RB1 genotype. Acetylome identifies subtype-specific pathway activations in TNBC and HER2+.

### Gillette 2020 — Lung adenocarcinoma
→ [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]]

110 LUAD tumors. Key phosphoproteomic findings:
- PTPN11 Y62 hyperphosphorylated exclusively in EGFR-mutant tumors
- SOS1 S1161 hyperphosphorylated in KRAS-mutant tumors
- STK11 immune-cold phenotype driven by neutrophil degranulation (protein-level-only signal)
Four NMF multi-omics clusters with distinct biology; drug targets invisible to genomics/transcriptomics alone.

### Wang 2021 — Glioblastoma
→ [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]]

99 GBM tumors with 10 modalities including snRNA-seq + lipidome/metabolome. PTPN11/PLCG1 phosphorylation is a convergent RTK signaling hub downstream of EGFR/PDGFRA. Tumor-intrinsic EMT in mesenchymal GBM confirmed by snRNA-seq. Mesenchymal GBMs enriched in ferroptosis-related lipid species. Most data-rich CPTAC study to date.

### Satpathy 2021 — Lung squamous cell carcinoma
→ [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]]

108 LSCC tumors (9 data types). NSD3 (not FGFR1) identified as the true driver of the commonly amplified 8p11.23 locus by multi-omics evidence. Phospho-Rb identified as a functional CDK4/6i response biomarker superior to RB1 genotype. First large-scale ubiquitylome and acetylome in LSCC.

### Zhang 2022 — Pan-cancer compendium
→ [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]]

2,002 tumors across 14 cancer types — the largest CPTAC resource. 11 pan-cancer proteome subtypes. 12 noncanonical MYC pathway activators (ARID1A, PTEN, RB1, SMARCA4, etc.) without direct MYC amplification. Striking finding: the canonical TP53 target signature is detectable at transcriptomic but not proteomic level — highlighting the limits of transcript-based pathway analysis.

### Li 2023 — Pan-cancer oncogenic drivers
→ [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]

1,064 tumors across 10 types. 265 pan-cancer cis-events. KEAP1/NFE2L2 mutations have the most conserved trans-effects across cancers. EGFR/STK11 are the most divergent (potential synthetic lethal candidates). PLOD2 as a pan-cancer prognostic biomarker. RB1 alterations imply CDK2 (not CDK4/6) dependency — informing CDK inhibitor selection.

## The CPTAC Principle

```
Genomics        → "What mutations are present?"
Transcriptomics → "What genes are expressed?"
    ↕ (often discordant — CNA buffering, post-transcriptional regulation)
Proteomics      → "What proteins are actually there?"
Phosphoproteomics → "Which signaling pathways are actually active?"
```

**The gap between layers is not noise — it is biology.**

## Cross-Study Themes

| Theme | Studies | Finding |
|-------|---------|---------|
| CNA buffering | All | mRNA-protein discordance is pervasive (13–68% genes buffered) |
| Phospho-Rb as biomarker | Krug 2020, Satpathy 2021, Vasaikar 2019 | Protein Rb/phospho-Rb predicts CDK4/6i response better than RB1 genotype |
| PTPN11 as RTK hub | Gillette 2020, Wang 2021 | Convergent phospho-signal in EGFR-mutant lung and GBM |
| Novel proteomic subtypes | Zhang 2014, Krug 2020, Wang 2021 | Subtypes invisible to transcriptomics alone |
| TP53 protein-level disconnect | Zhang 2022 | TP53 transcriptional signature not reflected in proteome |

## Connections

- **Day 5**: CDK4/6 and phospho-Rb biomarkers in CPTAC studies connect CDK biology to clinical proteogenomics
- **Day 6**: Phosphoproteomics methods (benchmarKIN, MSstatsPTM, CoPheeMap) are the analytical tools applied to CPTAC data
- **Day 3**: PTPN11 Y62 in EGFR-mutant tumors provides a phospho-level understanding of EGFR-driven signaling
- **Day 1**: HRD signatures (histone acetylation marks) in HGSOC proteogenomics connect to BRCA/PARP biology

## Key Takeaway

CPTAC demonstrates that genomics and transcriptomics are necessary but insufficient for understanding cancer biology. Protein-level measurements reveal CNA buffering, hidden subtypes, functional phospho-biomarkers, and drug targets invisible to DNA/RNA. The practical implications: clinical trials should integrate proteomics for biomarker-driven patient stratification, and preclinical research should validate genomic findings at protein level before pursuing therapeutic strategies.
