---
title: "Clinical approaches to overcome PARP inhibitor resistance"
authors: "Yutian Zou, Hanqi Zhang, Pangzhou Chen, Jiayi Tang, Siwei Yang, Christophe Nicot, Ziyun Guan, Xing Li, Hailin Tang"
year: 2025
doi: "10.1186/s12943-025-02355-1"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/zou-2025-clinical-approaches-overcome-parp-inhibitor.pdf"
pdf_filename: "zou-2025-clinical-approaches-overcome-parp-inhibitor.pdf"
source_collection: "plus-batch-2026-05"
tags:
  - PARP-inhibitor
  - PARPi-resistance
  - homologous-recombination
  - BRCA1
  - BRCA2
  - synthetic-lethality
  - HR-deficiency
  - drug-resistance
  - combination-therapy
  - immune-checkpoint-inhibitor
  - epigenetic-drugs
  - DNA-damage-response
  - ovarian-cancer
  - breast-cancer
  - prostate-cancer
  - replication-fork-stabilization
  - drug-efflux
  - PARP-trapping
  - review
---

## Summary

PARP inhibitors (PARPi) exploit synthetic lethality in tumors with homologous recombination (HR) deficiency — particularly BRCA1/2 mutations — and are approved for ovarian, breast, pancreatic, and prostate cancers. However, 40–70% of ovarian cancer patients and 50% of BRCA-mutant breast cancer patients develop resistance, representing a critical clinical problem. This 2025 comprehensive review from Sun Yat-sen University Cancer Center and collaborators systematically maps the molecular basis of PARPi resistance across four mechanistic pillars — HR restoration, decreased PARP trapping, increased drug efflux, and replication fork stabilization — and extends the framework to include metabolic reprogramming, ncRNA regulation, and tumor microenvironment (TME)-mediated resistance. The review then surveys clinical combination strategies across three principal categories: PARPi + immune checkpoint inhibitors (ICI), PARPi + DNA damage response (DDR) inhibitors, and PARPi + epigenetic drugs, cataloging ongoing Phase III trials and pointing to future directions including liquid biopsy monitoring, nanoparticle delivery, and AI-guided drug design.

## Key Contributions

- Integrates PARP1's newly described role in resolving transcription-replication conflicts (TRCs) via TIMELESS into the synthetic lethality model, explaining why PARPi cytotoxicity extends beyond simple PARP trapping at SSB sites.
- Catalogs four primary acquired resistance mechanisms with molecular detail: (1) HR restoration via BRCA1/2 reversion mutations, 53BP1-RIF1-REV7-shieldin pathway disruption, and epigenetic demethylation; (2) decreased PARP trapping from PARP1 downregulation/mutation and PARG loss; (3) increased drug efflux through ABC transporter (ABCB1, ABCC1, ABCG2) overexpression driven by Nrf2 and DOT1L-PLCG2 signaling; (4) replication fork stabilization restoration via chromatin remodeler depletion (SMARCAL1, ZRANB3, HLTF, CHD4), EZH2-MUS81 axis, and SLFN11/E2F7 cell cycle checkpoint control.
- Adds metabolic reprogramming (glycolysis upregulation, OXPHOS dependency, lipid FAO/lipogenesis, IDH oncometabolites producing D-2HG) and ncRNA networks (miR-181a suppressing STING; miR-622 impairing NHEJ; HOTAIR, MALAT1, PANDAR lncRNAs; circ-ARID1A sponging miR-370-3p) as resistance axes.
- Maps TME-mediated resistance through JAK2-STAT3-CCL axis driving M2 macrophage polarization and PARPi-induced PD-L1/CSF-1R upregulation creating immunosuppressive signaling.
- Identifies clinical combination strategies with mechanistic rationale: PARPi + ICI (leveraging cGAS-STING activation and TMB increase), PARPi + ATR/CHK1/WEE1/CDK/DNA-polθ inhibitors, PARPi + BET/DNMT/HDAC/EZH2 inhibitors, PARPi + VEGFR/PI3K inhibitors, and PARPi + androgen receptor signaling inhibitors (ARSI) in mCRPC.
- Highlights AI-driven opportunities: AlphaFold2/Rosetta-designed PARPi-binding proteins restoring sensitivity in resistant cells and cutting required drug dose by 78% in preclinical tests.

## Methodology and Architecture

This is a narrative review synthesizing preclinical mechanistic studies, clinical trial data, and translational biomarker evidence across ovarian, breast, prostate, pancreatic, and hematological malignancies.

**Synthetic lethality basis:** PARPi block PARP1's enzymatic activity and trap PARP1 at DNA damage sites, converting transient SSBs into replication-associated DSBs. Additionally, PARPi disrupt PARP1's role in resolving TRCs (via TIMELESS/TIM), exacerbating replication stress specifically in HRD cells. In HR-proficient cells, DSBs are repaired by BRCA1/2-mediated HR; in HRD cells, error-prone NHEJ accumulates genomic instability, triggering cell death.

**Four resistance mechanism pillars (Fig. 2):**

| Pillar | Key molecular players |
|--------|----------------------|
| HR restoration | BRCA1/2 reversion mutations; BRCA1 promoter demethylation; 53BP1/RIF1/REV7/shieldin loss; HELB, DYNLL1, ERCC6L2 modulation; hypomorphic PARP1 variants |
| Decreased PARP trapping | PARP1 downregulation/mutation (DNA-binding domain); PARG loss (hyper-PARylation accelerates PARP1 degradation) |
| Increased drug efflux | ABCB1 (P-gp), ABCC1 (MRP1), ABCG2 (BCRP) overexpression; Nrf2 transcriptional activation; DOT1L-PLCG2/ABCB1 H3K79 methylation axis |
| Fork stabilization restoration | SMARCAL1, ZRANB3, HLTF, CHD4 depletion; PTIP/MLL3/MLL4-MRE11 disruption; EZH2-mediated MUS81 suppression; RADX stabilization; SLFN11/E2F7 checkpoint modulation |

**Additional resistance axes:**
- Metabolic: Warburg effect (increased lactate, NAD+ competition); OXPHOS (metformin/IACS-10759 as sensitizers); lipid metabolism (FAO via CPT1, lipogenesis via FASN); IDH mutations generating D-2HG that impairs HR.
- ncRNAs: miR-181a (downregulates STING, drives PARPi resistance in TNBC/ovarian cancer); miR-622 (Ku70/Ku80 interaction, impairs NHEJ); HOTAIR, MALAT1 (modulate HR gene expression); lncRNA PANDAR (associated with DDR); circ-ARID1A (sponges miR-370-3p, upregulates ARID1A, regulates DNA repair).
- TME: JAK2-STAT3 signaling → CCL2, CX3CL1, CCL20, CXCL1 → M2 macrophage polarization → PARPi resistance; PARPi-induced phenotypic changes in macrophages → PD-L1 + CSF-1R upregulation → immunosuppressive signaling.

**Clinical combination strategies:**
- PARPi + ICI: cGAS-STING-IFN-I axis → increased TMB → neoantigen presentation → PD-L1 upregulation (creates ICI target); Phase III ATHENA (NCT03522246; Niraparib + Dostarlimab) and FIRST (NCT03602859; Rucaparib + Nivolumab) in advanced ovarian cancer.
- PARPi + DDR inhibitors: ATRi (VE-821 reverses SLFN11-negative resistance); CHK1i SRA737 (sensitizes PARPi-resistant ovarian cancer via RRM2 downmodulation); WEE1i (RRM2 downmodulation; synthetic lethality in BRCA1/2-wt TNBC); CDK4/6i Palbociclib + Talazoparib (G0/G1 + G2 arrest synergism; RB as biomarker); DNA polθi ART558 (suppresses DSB MMEJ repair in HRR-deficient cancer); ATMi (sensitivity in ATM-deficient gastric cancer); AXL inhibitor Bemcentinib (prevents RPA2/CHK1-mediated HR, augments PARPi Olaparib sensitivity).
- PARPi + epigenetic drugs: BETi (synthetic lethality; disrupts BRD4-mediated HR gene transcription); DNMTi Guadecitabine + Talazoparib (alters HR repair dynamics); HDACi SAHA (enhances anti-tumor effects of Olaparib in TNBC; PTEN as response biomarker); EZH2i (downregulation releases MUS81 recruitment, promotes fork stabilization resistance — caution: context-dependent).
- PARPi + VEGFR/PI3K: Cediranib + Olaparib Phase IIb (missed ORR 20% target; further biomarker work needed); Alpelisib + Olaparib Phase III (NCT04729387; platinum-resistant/refractory HGS ovarian cancer).
- PARPi + ARSI: Talazoparib + Enzalutamide HR 0.447 vs. Enzalutamide monotherapy in mCRPC (NCT03395197).
- PARPi + IR: Olaparib as radiosensitizer in pancreatic ductal adenocarcinoma (DDB2 as biomarker); Niraparib BMN673 unique radiosensitizing mechanism via DSB repair pathway modulation.

## Results

- BRCA reversion mutations detected in 39% of mCRPC patients after Rucaparib progression; 60% of PARPi-resistant breast cancer patients carry BRCA1/2 reversion mutations (longitudinal ctDNA).
- ABCB1 mRNA 20-fold higher in PARPi-resistant versus treatment-sensitive BRCA1/2-deficient murine mammary tumors; SLC25 A40-ABCB1 genomic fusions in 15.7% of high-grade serous ovarian carcinoma and 30% of metastatic/end-stage breast cancer cases.
- SLFN11 deficiency in 30–40% of ovarian and small cell lung cancers confers intrinsic PARPi resistance.
- Nanoparticle-delivered PARPi: 8-fold improvement in tumor accumulation in BRCA-deficient cancers; nanoparticles co-delivering PARPi + ICI boosted tumor penetration 3.7-fold via hyaluronidase-mediated matrix remodeling and PD-L1 suppression.
- AI-designed PARPi-binding proteins (AlphaFold2 + Rosetta COMBS): restored PARPi sensitivity in resistant cells; reduced required drug dose by 78%; AI systems forecast resistance development with 85% accuracy from single-cell profiles and treatment histories.
- Talazoparib + Enzalutamide: HR 0.447 (NCT03395197) vs. Enzalutamide + placebo in mCRPC; second trial ongoing (NCT04821622, estimated completion August 2027).
- OlympiA Phase III: Adjuvant olaparib significantly enhanced invasive disease-free survival in HER2-negative early breast cancer with BRCA1/2 mutations.

## Related Papers

- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — replication fork stabilization as a standalone PARPi resistance mechanism; ATR/CHK1/WEE1 inhibitors as combination partners
- [[drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — 53BP1-RIF1-REV7-shieldin pathway protecting DNA ends and suppressing HR; loss confers PARPi resistance
- [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss restoring HR in BRCA1-deficient cells and conferring PARPi resistance
- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — intragenic deletion as mechanism of resistance to platinum and PARP inhibitor therapy
- [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]] — BRCA2 secondary reversion mutations mediating resistance
- [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — genome-wide CRISPR screens identifying resistance determinants
