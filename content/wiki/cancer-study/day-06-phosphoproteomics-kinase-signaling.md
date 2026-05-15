---
title: "Day 6: Phosphoproteomics & Kinase Signaling"
draft: false
---

# Day 6: Phosphoproteomics & Kinase Signaling

## Big Picture

Kinase signaling drives virtually every cancer hallmark — proliferation, survival, metabolism, migration, immune evasion. But measuring kinase activity is not straightforward: protein levels do not reflect activation state, and transcriptomics cannot capture post-translational regulation. **Phosphoproteomics** — mass spectrometry-based measurement of phosphorylation sites — provides a direct readout of kinase activity and enables network-level understanding of signaling in tumors.

## Key Concepts

**Kinase activity inference** — Kinases cannot be measured directly by abundance. Instead, the phosphorylation state of their downstream substrates is used to infer activity. Multiple statistical methods exist, and the choice of substrate annotation database matters enormously.

**The dark phosphoproteome** — Only ~10% of detected phosphosites have known upstream kinases. The remaining ~90% constitute the "dark phosphoproteome" — a vast space of unexplored signaling biology.

**PTM vs. protein abundance** — A phosphosite can change because the kinase is more active or because there is simply more protein. Separating these two effects is a statistical challenge (addressed by MSstatsPTM).

## Paper-by-Paper

### Hijazi 2020 — Reconstructing kinase networks from phosphoproteomics
→ [[cancer/hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]]

Introduces the EBDT algorithm and ChemPhoPro database (>6,000 phosphorylation-drug-target relationships, 103 kinases). Instead of relying on curated kinase-substrate databases, EBDT uses inhibitor selectivity profiles to assign phosphosites to upstream kinases. Key finding: PI3K-MAPK anti-correlation in breast cancer reveals network rewiring that explains limited single-agent PI3Ki efficacy. This is a drug-centric approach to kinase network reconstruction.

### Müller-Dott 2025 — benchmarKIN: Best practices for kinase activity scoring
→ [[cancer/muller-dott-2025-phosphoproteomic-kinase-activity-inference]]

Systematic benchmark (benchmarKIN R package) comparing kinase activity inference methods. Key findings:
- **z-score normalization** with a curated combination library (PhosphoSitePlus + PTMsigDB + GPS gold) consistently outperforms other approaches
- Kinase activity scores predict drug response **better than protein levels**
- Both site-centric and activity-centric evaluation frameworks are needed

This is the reference paper for anyone running kinase activity analysis from phosphoproteomics data.

### Jiang 2025 — The dark cancer phosphoproteome
→ [[cancer/jiang-2025-dark-cancer-phosphoproteome-coregulation]]

CoPheeMap: an XGBoost-based co-regulation network of 26,280 phosphosites from 1,195 CPTAC tumors (AUROC 0.78). CoPheeKSA: a kinase-substrate predictor (AUROC 0.95) covering 26 understudied kinases from the dark phosphoproteome. CDK12 was identified as a therapeutically relevant understudied kinase — connecting back to the CDK12/BRCAness story (**Day 5**). First machine-learning approach to systematically map the dark phosphoproteome.

### Köhler 2023 — MSstatsPTM: Separating PTM from protein abundance
→ [[cancer/kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational]]

R/Bioconductor package that solves a fundamental problem: is a phosphosite changing because the kinase is more active, or because there is more total protein? Uses linear mixed effects models to compute adjusted log2FC = Δ_PTM − Δ_protein. Reduces false positive rate from 20.88% to 1.84% in spike-in benchmarks. Essential for any proteogenomic analysis that includes phosphoproteomics.

### Manning 2017 — AKT/PKB signaling network
→ [[cancer/manning-2017-aktpkb-signaling-navigating-network]]

Comprehensive review of AKT as a network hub: dual-membrane activation (PIP3/PI3,4P2), key effector nodes (GSK3, FoxO, TSC-mTORC1), negative feedback loops (S6K → IRS1/GRB10), and AGC kinase redundancy with SGK and S6K. The main insight: AKT is not a linear relay but a context-dependent network hub whose outputs depend on which isoform is active and which feedbacks are engaged. Essential background for understanding PI3K-AKT pathway targeting failures.

### Steinberg 2023 — AMPK: Context-dependent cancer roles
→ [[cancer/steinberg-2023-new-insights-activation-function-ampk]]

AMPK is activated by diverse non-canonical pathways: glucose/aldolase/v-ATPase sensing, DNA damage/CaMKK2, lysosomal damage/GAL9-TAK1. The cancer paradox: AMPK is tumor suppressive during cancer prevention (metabolic checkpoint) but tumor-promoting in established tumors under metabolic stress (supporting survival). This context-dependence complicates therapeutic targeting.

### Kudaravalli 2022 — p38 MAPK and cancer stem cells
→ [[cancer/kudaravalli-2022-role-p38-map-kinase-cancer]]

p38 MAPK is a convergence point for cancer stem cell (CSC) maintenance via the p38α-FOXC2(Ser367)-ZEB1 axis. Context-dependent: p38γ promotes CSCs (via Nanog/SOX2/OCT3/4) while p38γ/δ loss activates SOX2 degradation (anti-CSC). p38 inhibitors combined with chemotherapy can eliminate residual CSCs by blocking ABCB1 efflux and quiescence mechanisms.

## Methods Landscape

| Tool | What it does | Key advantage |
|------|-------------|---------------|
| EBDT/ChemPhoPro | Drug-centric kinase assignment | No kinase-substrate database needed |
| benchmarKIN | Benchmark kinase activity scoring | Best-practice recommendations |
| CoPheeMap/CoPheeKSA | Dark phosphoproteome mapping | Covers understudied kinases |
| MSstatsPTM | PTM vs. protein correction | Eliminates abundance confounding |

## Connections

- **Day 5**: CDK12 appears in the dark phosphoproteome (Jiang 2025) — its activity can be inferred from substrate co-regulation
- **Day 7**: CPTAC studies provide the phosphoproteomics data that these methods analyze
- **Day 3–4**: Kinase network rewiring underlies EGFR and KRAS resistance — phosphoproteomics is the measurement layer
- **Day 2**: PARPi resistance via fork stabilization involves ATR/CHK1 kinase cascades detectable by phosphoproteomics

## Key Takeaway

Phosphoproteomics transforms cancer biology from a gene-centric to a signaling-centric view. Kinase activity — not protein abundance — predicts drug response. The dark phosphoproteome (~90% of detected sites) is a frontier for discovering new therapeutic targets and resistance mechanisms. Proper statistical correction (MSstatsPTM) is essential to avoid false positives. The practical message: if you are doing cancer proteogenomics, phosphoproteomics with kinase activity inference should be a standard layer.
