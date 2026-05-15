---
title: "A WEE1 family business: regulation of mitosis, cancer progression, and therapeutic target"
authors: "Andrea Ghelli Luserna di Rorà, Claudio Cerchione, Giovanni Martinelli, Giorgia Simonetti"
year: 2020
doi: "10.1186/s13045-020-00959-2"
source: "ghelli-2020-wee1-family-business-regulation-mitosis.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/ghelli-2020-wee1-family-business-regulation-mitosis.pdf"
pdf_filename: "ghelli-2020-wee1-family-business-regulation-mitosis.pdf"
source_collection: "plus-batch-2026-05"
tags: [WEE1, PKMYT1, cell-cycle, mitosis, checkpoint-kinase, DDR, adavosertib, cancer-therapeutics, replication-stress, synthetic-lethality]
---

## Summary

This 2020 review in the *Journal of Hematology & Oncology* provides a comprehensive account of the WEE1 kinase family — comprising WEE1, PKMYT1, and WEE1B — and their roles in normal cell cycle regulation, DNA damage response (DDR), and cancer biology. The central thesis is that WEE1 and PKMYT1 act as tumor suppressors in normal somatic cells (by restraining CDK1/CDK2 activity and preventing premature mitotic entry) but function as pseudo-oncogenes in cancer cells, where their overexpression is co-opted to sustain high proliferation rates, tolerate replication stress, and manage intrinsic genomic instability. The review synthesizes molecular mechanisms, pan-cancer genomic alteration data from TCGA, preclinical data on 36 standard-of-care agents, preclinical studies with WEE1/PKMYT1 inhibitors (particularly adavosertib/AZD-1775), and emerging clinical trial results, concluding with a discussion of resistance mechanisms and predictive biomarkers.

## Key Contributions

1. **Dual-role framework**: WEE1/PKMYT1 are tumor suppressors in non-malignant cells and pseudo-oncogenes in cancer cells; this duality explains the context-dependent therapeutic window of WEE1 inhibition.

2. **Mechanistic scope**: WEE1 controls not only the canonical G2/M checkpoint (via CDK1 phospho-Tyr15) but also the intra-S phase checkpoint (via CDK2 phospho-Tyr15), replication fork protection (via suppression of MUS81-EME1/2 endonuclease activity), and mitosis exit (via APC/C regulation and FCP1-mediated re-phosphorylation of CDK1).

3. **Pan-cancer genomic landscape**: WEE1 is predominantly lost (CN loss ~23.7%) and rarely mutated (1.2%), while PKMYT1 is predominantly gained (CN gain ~15.9%), consistent with their distinct oncogenic versus suppressor roles. Mutations in WEE1 cluster in the kinase domain (gain-of-function potential); PKMYT1 mutations are scattered.

4. **Broad overexpression in cancer**: WEE1 is overexpressed and essential for viability in hematological malignancies (ALL, AML, MM, CML, CLL, DLBCL) and multiple solid tumors (GC, GBM, NSCLC, OC, HCC, neuroblastoma). PKMYT1 is overexpressed in ALL (relapsed), MM, HC, CC, GLB, NSCLC, neuroblastoma, and esophageal cancer.

5. **Adavosertib combinatorial landscape**: Extensive preclinical evidence supports adavosertib synergy with a wide range of agents — chemotherapy (gemcitabine, cytarabine, doxorubicin, cisplatin, etc.) and targeted therapy (ATR-i, CHK1-i, PARP1-i, CDK4/6-i, HDAC-i, BCR-ABL1-i, BET-i, mTOR-i, proteasome-i, AURORA A-i).

6. **Clinical proof-of-concept**: Phase I/II trials confirm adavosertib tolerability and activity, especially in TP53-mutant ovarian cancer with platinum-based chemotherapy.

## Methodology and Architecture

This is a narrative review without primary experimental data. It integrates:

- **TCGA pan-cancer data** (cBioPortal, GDC) for mutation frequency and CNA landscapes across all major cancer types
- **Literature synthesis** of in vitro and in vivo studies on WEE1/PKMYT1 inhibitors
- **Mechanistic framework** structured around the cell cycle: G2/M checkpoint, intra-S checkpoint, replication fork biology, and mitosis exit

**Core molecular circuit:**
- WEE1 phosphorylates CDK1 at Tyr15 (inhibitory); PKMYT1 phosphorylates CDK1 at both Tyr15 and Thr14 (dual inhibitory)
- CDK-activating kinase (CAK = CDK7/Cyclin H1/MAT1) and CDC25 phosphatase reverse the inhibitory phosphorylation to activate CDK1-Cyclin B1 (MPF) and drive mitotic entry
- WEE1 additionally phosphorylates CDK2 at Tyr15, controlling the intra-S checkpoint and suppressing premature MUS81 activation, preventing chromosome pulverization during S phase
- At mitosis exit, FCP1 dephosphorylates and activates WEE1, which re-inhibits CDK1 and enables APC/C activation (CDC20, CDH1, CDC27) and proper chromosome segregation
- WEE1 degradation: CDK1-mediated phospho-Ser123 creates a PLK1/CK2 docking site; CK2 phosphorylates Ser53/Ser121 as degrons recognized by SCFβ-TrCP for proteasomal degradation

**Why cancer cells depend on WEE1/PKMYT1 (three mechanisms):**
1. Oncogene-driven high proliferation requires a robust G2/M checkpoint (G2 being the only functional checkpoint when p53/G1 checkpoint is lost)
2. Cancer cells frequently inactivate p53, making G2/M checkpoint the sole cell cycle quality control
3. Intrinsic genomic instability in cancer cells requires sustained DDR kinase activity (including WEE1) to maintain tolerable levels of genetic instability

## Results

**Genomic alterations (TCGA):**
- WEE1 mutations: 0–7.6% across cancers; highest in UCEC (7.6%) and GI tumors; missense mutations cluster in kinase domain
- PKMYT1 mutations: 0.1–3.6%; highest in UCEC and GI tract (stomach, colon adenocarcinoma)
- WEE1 CN loss > gain (23.7% vs 7.8%); PKMYT1 CN gain > loss (15.9% vs 12.0%)
- Highest CNA recurrence cancer types: OV, LUSC, UCS, BLCA, ESCA (for PKMYT1); OV, LUSC, UCS, AML (for WEE1)

**Hematological malignancies:**
- WEE1 highly expressed in ALL cell lines and primary cells; ALL cells are functionally WEE1-dependent for survival and proliferation
- PKMYT1 upregulated in relapsed ALL; high PKMYT1 may reduce sensitivity to adavosertib (compensatory effect)
- WEE1 and PKMYT1 discriminate FLT3-ITD, FLT3-TKD, and NRAS-mutated AML; WEE1 inhibition + HDAC-i is synergistic in FLT3-ITD AML
- WEE1 essential in MM, CML, CLL; PKMYT1 downregulation reduces MM cell viability

**Solid tumors:**
- WEE1 overexpression in GC, NSCLC, GBM, OC, melanoma, HCC, neuroblastoma associates with poor prognosis, lymph node involvement, elevated Ki67/CCND1/CCNA1, and treatment resistance
- PKMYT1 overexpression drives EMT (via beta-catenin/TCF signaling) in HCC and CRC; regulates Notch in NSCLC; stabilizes MYCN in neuroblastoma; activates AKT/mTOR in ESCC

**Inhibitor preclinical data (Table 3 summary):**
- Adavosertib monotherapy: active in MM, ALL, AML TNBC, DLBCL, MCL via G2/M checkpoint override, forced mitotic entry, replicative catastrophe
- Adavosertib + radiotherapy: increased DNA damage, apoptosis, mitotic catastrophe across CC, LC, BC, PC, OC, DLBCL, ES
- Adavosertib + chemotherapy: S or G2/M checkpoint override, increased DNA damage, apoptosis across AML, ALL, MM, BC, CC, GC, DLBCL
- Adavosertib + ATR-i: replication stress, replicative catastrophe, inhibition of DNA repair (AML, DLBCL, MCL, BC)
- Adavosertib + PARP1-i: G2/M checkpoint override, replication stress, increased DNA damage (NSCLC, AML, ALL)
- Adavosertib + CHK1-i: replication stress, increased DNA damage, replicative catastrophe (MCL, DLBCL, ALL, AML)

**Clinical trials (adavosertib):**
- Phase I MTD: 150–225 mg orally twice daily, 2.5 days per 2 weeks; main toxicities: fatigue, nausea, vomiting, diarrhea, hematologic events
- In vivo confirmation of mechanism: decreased phospho-CDK1 (Tyr15) and increased phospho-γH2AX in tumor biopsies
- Phase II: adavosertib + carboplatin active in TP53-mutant ovarian cancer (refractory/resistant to platinum-based therapy); also active in platinum-resistant primary OC with multiple chemotherapy partners

**Predictive biomarkers (proposed, not validated):**
- Cyclin E level: high cyclin E associates with chromosomal instability and increased adavosertib response in BC
- WEE1 expression (low in BC, paradoxically correlates with grade 2 tumors suggesting CDK1 de-repression)
- High PKMYT1 expression: associated with reduced adavosertib sensitivity (compensatory CDK1 inhibition)
- AKT/mTOR activation: associated with primary resistance in NSCLC and OC
- HDAC activity: elevated in adavosertib-resistant AML cell lines (MYC regulated via KDM5A/HDAC)
- TP53 status: controversial; mutant TP53 may increase sensitivity but not consistently across studies

## Related Papers

- Adavosertib (AZD-1775) pharmacology: Refs [35, 99, 119–122] in original paper
- MUS81 replication fork biology: Refs [27–29]
- WEE1 and replication catastrophe: Refs [12, 17–20]
- FLT3-ITD AML and WEE1: Refs [40–42]
- WEE1 in ALL: Refs [35, 54]
- WEE1 degradation (SCFβ-TrCP): Refs [13–16]
- APC/C regulation at mitosis exit: Refs [21–26]
- CHK1 inhibitors in combination: Refs [103, 140–142]
- ATR inhibitors in combination: Refs [132–135]
- PARP inhibitors in combination: Refs [126, 144–146]
- Clinical trials summary (Table 4 in original paper): Refs [156–165]
- Cyclin E as predictive biomarker: Ref [89]
- HDAC-dependent resistance in AML: Refs [41, 130, 131, 167]
