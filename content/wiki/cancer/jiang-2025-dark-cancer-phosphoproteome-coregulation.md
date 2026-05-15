---
title: "Deciphering the dark cancer phosphoproteome using machine-learned co-regulation of phosphosites"
authors:
  - Wen Jiang
  - Eric J. Jaehnig
  - Yuxing Liao
  - Zhiao Shi
  - Tomer M. Yaron-Barir
  - Jared L. Johnson
  - Lewis C. Cantley
  - Bing Zhang
year: 2025
doi: 10.1038/s41467-025-57993-2
journal: Nature Communications
category: cancer
pdf_path: /Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/jiang-2025-dark-cancer-phosphoproteome-coregulation.pdf
pdf_filename: jiang-2025-dark-cancer-phosphoproteome-coregulation.pdf
source_collection: plus-batch-2026-05
tags:
  - phosphoproteomics
  - phosphosite
  - kinase-substrate
  - machine-learning
  - XGBoost
  - co-regulation
  - dark-phosphoproteome
  - cancer
  - CPTAC
  - pan-cancer
  - network-biology
  - CoPheeMap
  - CoPheeKSA
  - kinase-activity
  - signaling
---

# Deciphering the dark cancer phosphoproteome using machine-learned co-regulation of phosphosites

> Jiang et al., *Nature Communications* 16:2766 (2025) | [DOI](https://doi.org/10.1038/s41467-025-57993-2) | [[jiang-2025-dark-cancer-phosphoproteome-coregulation|Source Note]]

## Core Idea

The vast majority of cancer phosphosites are functionally uncharacterized — the "dark phosphoproteome." This paper addresses this gap by building two complementary machine learning tools:

1. **CoPheeMap**: a co-regulation network of 26,280 phosphosites with 764,049 edges, constructed via XGBoost trained on pan-cancer CPTAC phosphoproteomics from 1,195 tumors across 11 cancer types.
2. **CoPheeKSA**: a network-based kinase-substrate association (KSA) predictor (AUROC 0.95) that leverages CoPheeMap embeddings alongside kinase network embeddings and dynamic proteomics features to predict 24,015 KSAs connecting 9,399 phosphosites to 104 serine/threonine kinases — including 26 understudied kinases.

Together, these tools systematically illuminate dark phosphosites and identify understudied kinases as therapeutic targets in cancer.

## Key Concepts

### Dark Phosphoproteome

Less than 5% of human phosphosites have a known upstream kinase; even fewer have functional annotation. Standard KSA prediction tools rely on sequence motifs (PSSMs) and are kinase-specific, failing for understudied kinases that regulate most unannotated sites.

### Phosphosite Co-regulation as a Predictive Signal

Co-phosphorylation (analogous to transcript co-expression) reflects shared regulatory biology. Phosphosites regulated by the same kinase show:
- Higher peptide sequence similarity
- Higher kinase interaction profile similarity (shared STRING PPI neighbors)
- Higher abundance correlations across cancer cohorts

These three feature types form the basis of the CoPheeMap XGBoost classifier (AUROC 0.78).

### CoPheeMap Architecture

| Property | Value |
|---|---|
| Phosphosite nodes | 26,280 |
| Co-regulation edges | 764,049 |
| Edges involving unannotated sites | 98.6% |
| Network topology | Scale-free (most nodes degree ~3.2; hubs >1,000) |
| Embedding | Node2Vec, 16 dimensions |

Functionally related phosphosites (e.g., those regulating cell proliferation, apoptosis, RNA processing) are significantly closer in CoPheeMap than random site pairs (KS test p = 2.2×10⁻¹⁶). Known substrates of the same kinase are also closer in network distance.

### CoPheeKSA Architecture

CoPheeKSA concatenates:
- CoPheeMap embedding of the phosphosite (16-dim)
- KMap (kinase co-expression/PPI network) embedding of the kinase (16-dim)
- 22 dynamic features: Spearman correlations between kinase protein abundance/inferred activity and phosphosite abundance across CPTAC cohorts
- 1 PSSM motif score

XGBoost is trained on 2,353 positive and 114,530 negative KSAs; prediction threshold LLR > 0.76 yields 244× enrichment over background. The full CoPheeKSA output covers 5× more KSAs than the curated ground truth.

## Results Summary

### Illuminating Dark Functional Phosphosites

Applied to phosphosites with high machine learning-predicted functional scores (Ochoa et al. 2020) but no known upstream kinase:

| Phosphosite | Host protein | Predicted kinase | Supporting evidence |
|---|---|---|---|
| CD74_S8 | CD74 (oncogene/immune receptor) | AKT3, SGK3 | AKT can activate CD74 upon immune stimulation |
| PRKCA_T497 | Protein Kinase C alpha (activation loop) | PDK1 | PDK1 reported to phosphorylate Thr497 on PRKCA |
| HSP90AB1_S226 | Heat shock protein 90 alpha B1 | CSNK2A1 (CK2) | Top KL prediction also CK2 |
| VIM_S25 | Vimentin | (via CoPheeMap) | Connected to PRKACA/PRKCA/PRKD1 substrates in network |

### Cancer-Associated Phosphosite Analysis

Pan-cancer tumor vs. normal comparison (8 CPTAC cancer types, meta-p via sumz) identified the 50 most significantly upregulated phosphosites. CoPheeKSA and CoPheeMap provided kinase information for all 50:

- **NCL_S67** (Nucleolin) and **ESF1_S153**: predicted regulated by CDK2 (consistent with Kinase Library top kinase).
- CDK hyperactivation is pervasive in cancer; CoPheeKSA expanded CDK substrate sets to reveal CDK12, CDK9, CDK7, CDK8, CDK5 activity — invisible without CoPheeKSA-expanded KSA database.
- Additional hyperactivated kinases uniquely identified via CoPheeKSA: SRPK1, TAF1, RAF1, MKNK1, DYRK1A, and several MAPKs.

### Therapeutic Implications

**CDK12** emerges as an understudied but therapeutically relevant kinase: it regulates MYC expression, Wnt/beta-catenin signaling, RNA splicing, and ErbB-PI3K-AKT signaling. CDK12 inhibitors have been shown to suppress cancer cell transcription, growth, and enhance drug susceptibility, but it has been largely overlooked in phosphoproteomic analyses without CoPheeKSA-expanded annotations.

## Methods at a Glance

| Step | Tool/Algorithm |
|---|---|
| Co-regulation classifier | XGBoost (14 features: 11 PCC values + sequence similarity + kinase interaction profile + S/T label) |
| KSA classifier | XGBoost (55 features: 16 CoPheeMap emb + 16 KMap emb + 22 dynamic + 1 motif) |
| Network embedding | Node2Vec (dim=16, window=1, min_count=1, batch_words=4) |
| Dimensionality reduction | t-SNE (multi-scale, for visualization) |
| KSA validation | Kinase Library (KL) percentile scores; IDPpub literature mining; STRING functional scores |
| Kinase activity inference | ssGSEA using expanded KSA database |
| Differential expression | Unpaired Wilcoxon Rank Sum; meta-p via sumz (metap R package) |
| Gene set enrichment | WebGestalt |

## Comparison to Prior Methods

| Method | Approach | Limitation vs. CoPheeKSA |
|---|---|---|
| NetworkKIN | Motif + PPI network | Lower KL scores for both well-studied and understudied kinases |
| LinkPhinder | Missing link prediction in bipartite KSA graph | Lower regulatory site coverage; fewer understudied kinases |
| PDT (EBDT) | Kinase inhibitor profiles + computational analysis | Restricted to ~103 kinases; indirect KSA inference; poor KL alignment |
| PSSM alone | Sequence motif scoring | Kinase-specific; cannot generalize to unstudied kinases |

CoPheeKSA uniquely integrates dynamic in vivo tumor data (phosphosite and kinase protein abundance correlations) with network context, enabling it to prioritize KSAs that are more likely to be biologically active in tumor tissue.

## Limitations & Future Directions

- **Tyrosine kinomes**: CoPheeMap covers only ~300 tyrosine sites; tyrosine-enriched datasets needed to expand coverage to this therapeutically important class.
- **Phosphatases**: Co-phosphorylation signal cannot distinguish direct kinase phosphorylation from indirect effects through phosphatase regulation; future models could incorporate phosphatase interaction profile similarity.
- **Training bias**: Ground-truth KSAs over-represent well-studied kinases; Kinase Library unbiased data may help address this.
- **Cancer-type specificity**: Pan-cancer CoPheeMap can be extended to cancer-type-specific networks as single-cohort data grows.
- **Beyond cancer**: The framework is applicable to other diseases with phosphoproteomic data.

## Links

- Source note: [[jiang-2025-dark-cancer-phosphoproteome-coregulation]]
- Code: [github.com/bzhanglab/CoPheeMap](https://github.com/bzhanglab/CoPheeMap)
- Data: [zenodo.org/records/14947153](https://zenodo.org/records/14947153)
- Related: [[hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]], [[asuzu-2025-phosphoproteomic-dysregulation-drives-tumor-proliferation]], [[casado-2013-kinase-substrate-enrichment-analysis-provides-insights]]
