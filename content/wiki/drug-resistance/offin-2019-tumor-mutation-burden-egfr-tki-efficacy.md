---
title: "Tumor Mutation Burden and Efficacy of EGFR-Tyrosine Kinase Inhibitors in Patients with EGFR-Mutant Lung Cancers"
authors: ["Michael Offin", "Hira Rizvi", "Matthew D. Hellmann"]
year: 2019
doi: "10.1158/1078-0432.CCR-18-1102"
category: "drug-resistance"
pdf_path: "llm-wiki/papers/plus/offin-2019-tumor-mutation-burden-egfr-tki-efficacy.pdf"
pdf_filename: "offin-2019-tumor-mutation-burden-egfr-tki-efficacy.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - EGFR
  - NSCLC
  - TKI
  - tumor-mutation-burden
  - TMB
  - drug-resistance
  - acquired-resistance
  - T790M
  - TP53
  - SMARCA4
  - lung-cancer
  - targeted-therapy
  - MSK-IMPACT
  - biomarker
  - erlotinib
  - gefitinib
  - afatinib
---

## Summary

Offin et al. (2019) demonstrate that high tumor mutation burden (TMB) is **negatively associated** with benefit from first/second-generation EGFR-TKIs in patients with EGFR-mutant NSCLC — a paradox relative to the positive predictive value of TMB in immunotherapy. Using MSK-IMPACT sequencing data from 153 patients, tumors with high TMB (>4.85 mut/Mb) had a median time to treatment discontinuation of 9.6 months and median OS of 20.6 months, compared to 16.7 months TTD and 40.6 months OS in the low-TMB group. TMB further increased at acquired resistance (3.42 → 6.56 mut/Mb in paired samples), and was enriched with TP53 and SMARCA4 co-alterations. The findings suggest that elevated TMB reflects a broader landscape of pre-existing or rapidly emerging resistance drivers, not confined to canonical T790M.

## Key Contributions

- Established TMB as a **negative biomarker** for EGFR-TKI efficacy in EGFR-mutant NSCLC — the first study to systematically characterize this inverse relationship.
- Showed EGFR-mutant tumors have significantly **lower baseline TMB** than EGFR wild-type NSCLC (3.77 vs. 6.12 mut/Mb; p<0.0001), consistent with their enrichment in never-smokers.
- Demonstrated **TMB escalation at acquired resistance**: median 3.42 mut/Mb pre-treatment vs. 6.56 mut/Mb post-resistance (p=0.008, n=30 paired samples).
- Linked high TMB to enrichment of **TP53 co-mutations** (71% vs. 52%; p=0.037) and **SMARCA4 alterations** (14% vs. 3%; p=0.016), both of which are associated with worse prognosis and non-T790M resistance mechanisms.
- High-TMB patients showed a trend toward **lower T790M acquisition** (p=0.057), suggesting they develop resistance through alternative pathways.

## Methodology and Architecture

**Design:** Retrospective cohort, Memorial Sloan Kettering Cancer Center.

**Cohort:** 153 metastatic EGFR-mutant NSCLC patients (exon 19del or L858R) treated with first/second-generation EGFR-TKIs; comparison to 1,849 EGFR wild-type controls.

**Sequencing:** MSK-IMPACT panel NGS (341–468 genes; 0.98–1.22 Mb coding region). TMB = somatic non-synonymous mutations/Mb, excluding known driver hotspot mutations and germline variants.

**TMB tertiles:**
- Low: ≤2.83 mut/Mb
- Intermediate: 2.84–4.85 mut/Mb
- High: >4.85 mut/Mb

**Endpoints:** Time to treatment discontinuation (TTD; PFS surrogate), overall survival (OS).

**Statistics:** Log-rank tests; univariate and multivariate Cox proportional hazards regression (covariates: EGFR mutation subtype, sex, smoking history, TP53/SMARCA4 co-alterations).

**Resistance analysis:** Paired pre/post-TKI biopsies (n=30) for longitudinal TMB; T790M status assessed in 84 post-progression tissue samples.

## Results

| Metric | Low TMB | Intermediate TMB | High TMB |
|---|---|---|---|
| Median TTD | 16.7 mo | 16.0 mo | 9.6 mo |
| Median OS | 40.6 mo | 37.3 mo | 20.6 mo |
| TTD HR (vs. low/int) | — | — | 0.46 (p=0.0008) |
| OS HR (vs. low/int) | — | — | 0.40 (p=0.006) |

**Multivariate (adjusted):** TTD HR=0.57 (p=0.01); OS HR=0.50 (p=0.02) — TMB remains independently significant.

**T790M:** 54% overall T790M acquisition; high-TMB patients trended toward less T790M (3.77 vs. 4.72 mut/Mb pre-treatment; p=0.057), suggesting alternative resistance mechanisms dominate.

**Longitudinal TMB:** Significant increase from pre-treatment to post-resistance in paired samples (p=0.008), indicating genomic evolution under TKI selection pressure.

**TP53 co-mutation:** Independent predictor of worse outcomes in multivariate model; enriched in high-TMB group.

## Related Papers

- [[drug-resistance/chmielecki-2023-acquired-resistance-first-line-osimertinib]] — acquired resistance mechanisms to osimertinib (third-generation EGFR-TKI), extending the resistance landscape beyond T790M
- [[drug-resistance/adua-2022-brain-metastatic-outgrowth-osimertinib-resistance]] — osimertinib resistance in brain metastatic NSCLC
- [[drug-resistance/cheong-2024-mechanistic-patterns-clinical-implications-oncogenic]] — mechanistic patterns of oncogenic resistance in NSCLC
- [[cancer/chen-2020-proteogenomics-non-smoking-lung-cancer-east]] — proteogenomic characterization of non-smoking lung cancer, relevant to low-TMB EGFR-mutant tumors
- [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]] — proteogenomic vulnerabilities in lung adenocarcinoma
