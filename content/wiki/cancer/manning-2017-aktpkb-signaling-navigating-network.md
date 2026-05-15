---
title: "AKT/PKB Signaling: Navigating the Network"
authors: "Brendan D. Manning, Alex Toker"
year: 2017
doi: "10.1016/j.cell.2017.04.001"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/manning-2017-aktpkb-signaling-navigating-network.pdf"
pdf_filename: "manning-2017-aktpkb-signaling-navigating-network.pdf"
source_collection: "plus-batch-2026-05"
tags: [AKT, PKB, PI3K, mTOR, mTORC1, mTORC2, GSK3, FoxO, TSC, PTEN, kinase, cancer, signaling-network, drug-resistance, therapeutic-targeting, insulin-signaling, metabolism]
---

## Summary

AKT (also known as PKB) is a Ser/Thr kinase that functions as the central effector downstream of class I PI3K. Activated by growth factor stimulation of RTKs or GPCRs, PI3K generates PIP3 at the plasma membrane and PI3,4P2 at endomembranes, both of which recruit AKT via its pleckstrin homology (PH) domain. Full AKT activation requires two phosphorylation events: T308 by PDK1 and S473 by mTORC2. Signal termination is executed by the lipid phosphatase PTEN (which degrades PIP3) and by the protein phosphatases PP2A (T308) and PHLPP1/2 (S473).

From this hub, AKT propagates signals through over 100 substrates across a branching, feedback-laden network. Three downstream signaling nodes are central: (1) **GSK3**, which AKT inhibits by phosphorylating N-terminal serines, stabilizing pro-survival substrates including MCL1 and c-MYC; (2) **FoxO transcription factors** (FOXO1/3/4/6), which AKT sequesters in the cytosol via 14-3-3 binding to suppress pro-apoptotic and cell-cycle arrest gene programs; and (3) the **TSC complex/mTORC1 axis**, through which AKT promotes anabolic metabolism and cell growth by phosphorylating TSC2 to activate Rheb and mTORC1. The mTORC1 arm also drives potent negative feedback on AKT through IRS1/2 degradation and GRB10 stabilization, creating switch-like pathway dynamics.

The network is further shaped by extensive cross-talk with the RAS-ERK and AMPK pathways, redundancy among AGC kinase family members (SGK, RSK, PKC, S6K) that co-regulate AKT substrates, and the integration of growth signals with nutrient and energy status at the lysosomal surface. Mouse genetics and human genomics have established that AKT isoforms (AKT1/2/3) have overlapping and isoform-specific roles across nearly every organ system. Dysregulation of the PI3K-AKT network — through PIK3CA mutations, PTEN loss, AKT1 E17K gain-of-function, or upstream RTK amplification — is one of the most prevalent oncogenic events in human cancer and also underlies overgrowth syndromes, insulin resistance, cardiovascular disease, and neurological disorders. Despite substantial investment in PI3K, AKT, and mTOR small molecule inhibitors, clinical efficacy has been limited by feedback reactivation, lack of patient stratification, and pathway redundancy through alternative AGC kinases.

## Key Contributions

- Establishes AKT signaling as a dynamically looping and branching network rather than a simple linear cascade, with feedback and cross-talk as essential architectural features
- Provides molecular detail on a dual-membrane model of AKT activation: PIP3 at the plasma membrane (canonical, PDK1/mTORC2) and PI3,4P2 at endomembranes (SHIP-generated, mTORC2-regulated), with distinct substrate pools at each compartment
- Defines GSK3, FoxO, and TSC/mTORC1 as the three primary multifunctional signaling nodes downstream of AKT, each integrating AKT output with additional regulatory inputs and controlling broad cellular programs
- Systematically characterizes negative feedback mechanisms intrinsic to the network — mTORC1 → S6K → IRS1/2, GRB10 stabilization, S6K1-mediated Rictor phosphorylation — explaining why mTOR inhibitors often rebound-activate AKT in tumors
- Documents tissue- and isoform-specific AKT functions through extensive mouse genetic evidence: AKT1 in general growth, AKT2 in insulin/glucose metabolism, AKT3 in brain size; isoform-specific substrates (e.g., AKT1 in breast cancer migration suppression vs. AKT2 in metastatic dissemination)
- Critically surveys the clinical landscape of PI3K-AKT-mTOR inhibitors, documenting mechanisms of resistance (SGK upregulation, ERK/RSK bypass, FoxO-driven RTK re-expression) and identifying the AKT1 E17K mutation as a potential predictive biomarker for allosteric AKT inhibitor response

## Methodology and Architecture

This is a comprehensive narrative review updating Manning and Cantley (2007). The authors synthesize findings from:

- **Mouse genetics**: Akt1/2/3 single and compound knockouts; tissue-specific conditional knockouts (liver, muscle, adipose, pancreatic islet, brain, vascular); knockin phosphorylation-site mutants (GSK3α S21A/β S9A; Rictor T1135A)
- **Phosphoproteomics**: Global phosphoproteomic datasets identifying AKT consensus motif substrates; PhosphoSite database annotation of AKT phosphorylation sites and PTMs
- **Structural biology**: Crystal structures of AKT PH domain bound to PI3,4P2 and PIP3; GSK3 kinase domain with phosphate-binding pocket; AKT PH-kinase domain interface for allosteric inhibitor mechanism
- **Cell biology**: Intracellular compartment-specific reporter assays for mTORC2 activity; INPP4B/SHIP phosphatase studies for endomembrane PI3,4P2 regulation
- **Clinical trial data**: Phase I/II results for GDC0068 (Ipatasertib), AZD5363, MK2206, ARQ092; patient selection analyses including PIK3CA and AKT1 mutation status
- **Key network features analyzed**:
  - Feedback topology: mTORC1 → IRS1/GRB10 → PI3K; S6K → mTORC2 (Rictor T1135); FoxO → IGF1R/IRS2/HER3 transcriptional re-expression
  - Substrate redundancy map: SGK/RSK/PKC/S6K co-phosphorylation of GSK3, FOXO3a, TSC2, and other AKT substrates (Figure 6B)
  - Cross-talk with RAS-ERK: RSK-mediated GSK3β-S9, FOXO3a T32, TSC2 S939 phosphorylation independent of AKT; ERK/RSK bypass of AKT for mTORC1 activation in PI3Ki-resistant cancers
  - Cross-talk with AMPK: opposing functions on TBC1D1/4 for GLUT4 vesicle trafficking; mutual regulation of mTORC1; AMPK inhibition by AKT via AMPKα1-S487 phosphorylation

## Results

- **Cancer prevalence**: >50% of human tumors show AKT hyperactivation; activating mutations in PIK3CA (most common), PTEN loss, PDK1/HER2/EGFR/RTK amplification, and AKT somatic mutations all converge on this pathway
- **AKT1 E17K**: Low-frequency (1.5–9%) but recurring mutation in breast cancer; constitutive plasma membrane localization; present in luminal/ER+ subtypes; associated with partial response to AZD5363 in stratified trials
- **AKT isoform phenotypes in mice**: Akt1−/− — growth retardation and perinatal lethality; Akt2−/− — insulin resistance, glucose intolerance, type 2 diabetes; Akt3−/− — reduced brain size; all three single KOs viable; compound KOs lethal with severe defects
- **Hepatic AKT-FoxO axis**: Liver-specific Akt1/Akt2 double knockout reversed by Foxo1 co-deletion, demonstrating that FoxO1 is the essential mediator of AKT in suppressing gluconeogenesis; AKT-FoxO1 dispensable for basal glucose control in the fasted state
- **mTORC1 feedback**: Short-term mTOR inhibitor (rapamycin) treatment enhances RTK responsiveness by stabilizing IRS1/2 and increasing PI3K-AKT activation — mechanism of limited rapalog efficacy as single agents in cancer
- **Overgrowth syndromes**: Proteus syndrome (AKT1 E17K germline/mosaic), PROS (PIK3CA somatic), Cowden syndrome (PTEN germline), TSC (TSC1/2 germline) all clinically improve with mTORC1 inhibitors, confirming TSC-mTORC1 as the key downstream disease branch
- **Immunology**: mTORC1 promotes CD8+ cytotoxic T cell (CTL) differentiation while suppressing memory CD8+ T cell and regulatory T cell (Treg) development; AKT-FoxO axis controls Rag1/Rag2 expression and B cell class switching
- **Insulin resistance**: Chronic activation of mTORC1/S6K feedback suppresses IRS1/2, creating the molecular basis for PI3K-AKT pathway attenuation in type 2 diabetes; metformin (via AMPK) partially restores AKT signaling by inhibiting mTORC1
- **Clinical inhibitors**: No allosteric AKT inhibitor (MK2206, ARQ092) has shown significant single-agent efficacy in unselected patients; ATP-competitive inhibitors (GDC0068 phase I) also showed limited activity without stratification; combination strategies and biomarker-driven patient selection remain critical unmet needs

## Related Papers

- [[cancer/manning-cantley-2007-akt-pkb-signaling]] — preceding companion review establishing linear AKT pathway framework
- [[cancer/vanhaesebroeck-2010-pi3k-signaling]] — class I PI3K biology and disease
- [[cancer/saxton-sabatini-2017-mtor-signaling]] — mTOR complex structure, regulation, and function
- [[cancer/kaidanovich-beilin-woodgett-2011-gsk3-biology]] — GSK3 substrates and disease roles
- [[cancer/webb-brunet-2014-foxo-transcription-factors]] — FoxO family functions in cancer and aging
- [[cancer/mayer-arteaga-2016-pi3k-akt-inhibitors-clinical]] — clinical PI3K-AKT pathway inhibitor development
- [[cancer/carpten-2007-akt1-e17k-breast-cancer]] — discovery of AKT1 E17K somatic mutation
- [[cancer/hawkins-stephens-2016-pi3-4p2-signaling]] — PI3,4P2 functions in PI3K signaling
