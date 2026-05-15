---
title: "ESR1 F404 Mutations and Acquired Resistance to Fulvestrant in ESR1-Mutant Breast Cancer"
authors:
  - Belinda Kingston
  - Alex Pearson
  - Nicholas C. Turner
year: 2024
doi: 10.1158/2159-8290.CD-22-1387
journal: Cancer Discovery
category: drug-resistance
pdf_path: "llm-wiki/papers/plus/kingston-2024-esr1-f404-mutations-acquired-resistance.pdf"
pdf_filename: "kingston-2024-esr1-f404-mutations-acquired-resistance.pdf"
source_collection: "plus-batch-2026-05"
source_note: "[[kingston-2024-esr1-f404-mutations-acquired-resistance]]"
tags:
  - ESR1
  - fulvestrant
  - acquired-resistance
  - breast-cancer
  - ctDNA
  - plasmaMATCH
  - SERD
  - estrogen-receptor
  - F404
  - ligand-binding-domain
  - pi-stacking
  - CRISPR
  - drug-resistance
  - endocrine-therapy
---

## Summary

This study identifies *ESR1* F404 mutations as the first mechanism of acquired resistance specific to fulvestrant in ER+ advanced breast cancer. Using paired ctDNA sequencing from the plasmaMATCH clinical trial, the authors found that 3/69 (4%) patients acquired novel F404 mutations (F404L, F404I, F404V) during fulvestrant treatment — always in cis with preexisting activating *ESR1* mutations. Structural modeling shows F404's aromatic ring forms a pi-stacking bond critical for fulvestrant binding to ERα; non-aromatic substitutions disrupt this bond and confer resistance. CRISPR compound-mutant MCF7 models confirm profound fulvestrant resistance, while novel oral SERDs (elacestrant, camizestrant, giredestrant) and tamoxifen remain active, providing a clear clinical escape strategy.

## Background & Context

- **ER+ breast cancer**: ~75% of breast cancers; hormonal therapy is the backbone of treatment
- **Fulvestrant**: A selective ER degrader (SERD) licensed for first- and second-line advanced breast cancer (ABC); competes with estradiol for ERα binding, prevents dimerization and nuclear localization, and promotes ER degradation
- **Activating ESR1 mutations**: Acquired during prior aromatase inhibitor (AI) therapy in 15-40% of metastatic ER+ patients; cluster in the LBD (Y537S, D538G, E380Q, Y537C, L536R, etc.); cause ligand-independent ER activation
- **plasmaMATCH trial** (NCT03182634): Multi-cohort ctDNA-directed platform trial; Cohort A enrolled ER+ ABC patients with activating *ESR1* mutations for extended-dose fulvestrant (500 mg every 2 weeks); median PFS was 2.2 months
- **Knowledge gap**: Few studies have investigated acquired resistance mechanisms to fulvestrant specifically; prior known mechanisms (e.g., NF1 inactivation, ARID1A mutations) are not fulvestrant-specific

## Key Findings

### 1. Baseline ESR1 Variants Predict Fulvestrant Response

| ESR1 Mutation | n (%) | Median PFS | HR vs. others |
|---|---|---|---|
| Y537C | 11 (13.9%) | 5.6 months | 2.8 (better) |
| Y537S | 34 (43.0%) | 1.8 months | 0.53 (worse) |
| D538G | 44 (55.7%) | — | NS |
| E380Q | 22 (27.9%) | — | NS |

- Y537C associated with significantly longer PFS (HR 2.8, P = 0.035); Y537S with shorter PFS (HR 0.53, P = 0.032)
- In vitro ERE-luciferase screen: Y537S showed high constitutive ER activity and high fulvestrant resistance; Y537C was more fulvestrant-sensitive

### 2. ESR1 F404: A Fulvestrant-Specific Acquired Mutation

- 3/69 (4%) patients acquired F404 mutations (F404L, F404I, F404V) at progression
- All cases: in cis with preexisting activating *ESR1* mutation (E380Q or D538G)
- Extremely rare before fulvestrant exposure: 1/800 (0.1%) plasmaMATCH screening samples; 1/214 (1%) in SERENA-1 (both with prior fulvestrant)
- F404 locus encodes phenylalanine (aromatic ring); all substitutions replace it with non-aromatic residues (Ile, Val, Leu)

### 3. Structural Mechanism: Loss of Pi-Stacking Bond

- In silico modeling: F404 aromatic ring forms a **pi-stacking bond** with the A-ring of both estradiol and fulvestrant within the ERα LBD
- F404 non-aromatic substitutions disrupt this bond, reducing binding affinity for fulvestrant (and estradiol)
- Explains why F404 mutations only arise and confer growth advantage in the context of other activating *ESR1* mutations (which maintain ligand-independent ER activity even when estrogen/fulvestrant binding is impaired)

### 4. CRISPR Models Confirm Compound Mutation Resistance

- **F404L single mutant (F404L_D10)**: Modest reduction in fulvestrant sensitivity; maintained estrogen dependence
- **D538G single mutant (D538G_D6C)**: Estrogen-independent growth; increased ERE activity
- **Compound D538G + F404L (538_404 EF clones)**: Profound fulvestrant resistance (EC50 ~209 nmol/L vs ~30 nmol/L WT; some clones unstable/unmeasurable IC50); maintained PgR, TFF1, ERα expression under 1 μmol/L fulvestrant
- **Transcriptomic analysis (RNA-seq + GSEA)**: Under fulvestrant treatment, compound mutants showed significant upregulation of E2F targets, early/late estrogen response, MYC targets, and proliferation pathways (FDR-adjusted q < 0.05)

### 5. Novel SERDs Overcome F404-Mediated Resistance

All tested alternative agents were active against compound F404 mutant models:

| Drug | Mechanism | Active vs. D538G+F404L? |
|---|---|---|
| Elacestrant | Oral SERD | Yes |
| Camizestrant | Oral SERD | Yes |
| Giredestrant | Oral SERD | Yes |
| 4OH-Tamoxifen | SERM | Yes (partial ERE suppression ~10-20% residual) |

- In silico: Novel SERD binding energies were unaffected by or promoted by F404 mutations
- ERE-luciferase assays confirmed full suppression by SERDs in compound mutant transfection models

## Mechanistic Model

```
Prior AI therapy
     |
     v
Activating ESR1 mutation (Y537S, D538G, E380Q, etc.)
     |
     v
Fulvestrant treatment (plasmaMATCH Cohort A)
     |
     v
Clonal selection of F404 mutation (in cis)
     |
     +---> Loss of pi-stacking bond at F404
     |     --> Reduced fulvestrant binding to ERα LBD
     |     --> ER signaling maintained under fulvestrant
     |
     v
Acquired fulvestrant resistance (compound ESR1 mutant)
     |
     v
Alternative SERDs (elacestrant, camizestrant, giredestrant)
     --> Binding unaffected by F404; overcome resistance
```

## Clinical & Translational Significance

1. **First fulvestrant-specific resistance mechanism**: Unlike Y537S/D538G (acquired during AI therapy), F404 mutations arise specifically during fulvestrant exposure and require fulvestrant as selective pressure
2. **Implications for ctDNA monitoring**: F404 mutations are a rationale for serial ctDNA testing during fulvestrant treatment to detect emerging resistance
3. **Treatment sequencing**: F404 compound mutations remain sensitive to novel oral SERDs — supporting the clinical rationale for sequencing fulvestrant before or after oral SERDs based on ctDNA profiling
4. **Rechallenge potential**: F404 mutations may reduce ERα activity in the absence of fulvestrant (growth cost); fulvestrant rechallenge after a treatment break may be feasible (analogous to EGFR T790M rechallenging after drug withdrawal)
5. **Drug-specific resistance broader implications**: The existence of fulvestrant-specific compound mutations emphasizes that different SERDs may have distinct resistance mutation profiles, relevant to sequencing strategies with elacestrant, camizestrant, and giredestrant in development

## Connections

- Related resistance mechanisms: [[edwards-2008-resistance-therapy-caused-intragenic-deletion]], [[sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]]
- ESR1 mutation biology: activating LBD mutations, ligand-independent ER activation
- Oral SERD development: elacestrant (RAD1901), camizestrant (AZD9833), giredestrant (GDC-9545)
- plasmaMATCH trial context: ctDNA-directed therapy selection in advanced breast cancer
- Drug-specific vs. class-wide resistance: compound mutations in driver oncogenes (cf. PIK3CA double mutants under PI3K inhibitor pressure)
