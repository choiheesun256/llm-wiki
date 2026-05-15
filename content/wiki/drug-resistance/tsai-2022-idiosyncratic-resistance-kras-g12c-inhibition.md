---
title: "Rapid idiosyncratic mechanisms of clinical resistance to KRAS G12C inhibition"
authors: "Yihsuan S. Tsai, Mark G. Woodcock, Salma H. Azam, Leigh B. Thorne, Krishna L. Kanchi, Joel S. Parker, Benjamin G. Vincent, Chad V. Pecot"
year: 2022
doi: "10.1172/JCI155523"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition.pdf"
pdf_filename: "tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition.pdf"
source_collection: "plus-batch-2026-05"
tags: [KRAS, KRAS-G12C, sotorasib, AMG510, drug-resistance, acquired-resistance, NSCLC, lung-adenocarcinoma, MAPK, TGF-beta, tumor-microenvironment, EMT, rapid-autopsy, RNA-seq, whole-exome-sequencing, clonal-evolution, neoantigen, immunoevasion, angiogenesis, complement-activation]
---

# Rapid idiosyncratic mechanisms of clinical resistance to KRAS G12C inhibition

**Tsai et al., J. Clin. Invest., 2022 | DOI: 10.1172/JCI155523**

## Summary

Tsai et al. (2022) present the first comprehensive tissue-based molecular analysis of acquired resistance to the covalent KRAS G12C inhibitor sotorasib (AMG510), leveraging a rapid-autopsy protocol to profile 4 pretreatment and 13 posttreatment tumor samples from a single KRAS G12C-mutant lung adenocarcinoma patient. The patient initially achieved a 35% tumor reduction by week 7 but progressed rapidly by week 13, and died 6 weeks after treatment discontinuation. Using deep RNA-seq and whole-exome sequencing (200x), the authors characterize a highly idiosyncratic, spatially heterogeneous landscape of resistance mechanisms: KRAS-independent MAPK/AKT/mTOR reactivation, TGF-beta-driven tumor microenvironment (TME) remodeling, complement activation, enhanced angiogenesis, EMT, and a striking immune-cold shift with reduced T/B cell populations and lower neoantigen burden. Critically, no secondary KRAS mutations or downstream effector mutations (BRAF, MAP2K1) were found, distinguishing this tissue-level picture from prior liquid biopsy studies. Clonal analysis reveals that a pretreatment submental lymph node metastasis seeded at least 6 posttreatment distant sites, and adjacent lesions showed divergent resistance programs — underscoring the polyclonal and spatially idiosyncratic nature of escape from KRAS G12C inhibition.

## Key Contributions

1. **Multi-lesion rapid-autopsy platform for resistance characterization**: First tissue-based multi-site analysis of KRAS G12C inhibitor resistance; 17 samples (4 pre, 13 post) profiled by RNA-seq and WES, enabling intra-patient spatial comparison impossible with standard serial biopsy.

2. **KRAS-independent MAPK reactivation without secondary mutations**: MAPK, AKT, and mTOR pathway signatures robustly upregulated despite absence of new KRAS, BRAF, or MAP2K1 mutations — pointing to upstream RTK signaling (EGFR, HER2, c-MET) or TME-derived factors (TGF-beta) as reactivation sources.

3. **Decreased KRAS G12C mutant allele frequency**: Copy number loss of the KRAS G12C allele in resistant tumors indicates negative selection against the drug target itself, a mechanism mechanistically distinct from bypass signaling or secondary mutation.

4. **TGF-beta as master upstream resistance coordinator**: Ingenuity Pathway Analysis identified TGF-beta as the single most significant upstream mediator driving the diverse posttreatment transcriptional programs, including EMT, immunosuppression, angiogenesis, and complement/coagulation upregulation.

5. **Immune-cold resistant TME contradicts preclinical predictions**: Preclinical AMG510 models predicted increased CD8+ T cell infiltration; clinical resistant tumors instead became immunologically cold, with reduced adaptive immune signatures, lower neoantigen burden (consistent with immune editing), and BCR repertoire focusing.

6. **Clonal seeding and spatial heterogeneity of resistance**: PyClone-VI phylogenetics traced 6+ posttreatment metastases to a common pretreatment lymph node ancestor; adjacent posttreatment lesions harbored divergent resistance programs, indicating parallel independent evolution of escape mechanisms.

## Methodology

**Study design**: Single-patient rapid-autopsy case study. Patient: 77-year-old male, metastatic KRAS G12C-mutant lung adenocarcinoma, high PD-L1. Prior therapies: chemotherapy and immunotherapy. Enrolled on sotorasib clinical trial; rapid autopsy at death.

**Samples**: 4 pretreatment tumor biopsies, 13 posttreatment tumor samples (from autopsy), 8 nonadjacent normal tissue controls. Pathologic confirmation of tumor content per sample.

**Sequencing**: RNA-seq (150-bp paired-end, Illumina NovaSeq 6000; STAR alignment) and WES (200x coverage, Agilent SureSelectXT2; variant calling: Strelka2, Cadabra, Mutect2).

**Key analytical tools**:
- Differential expression: DESeq2 (|FC| > 1.5, adjusted P < 0.05)
- Pathway scoring: GSVA (MSigDB oncogenic + Hallmark gene sets), GSEA
- Upstream regulator inference: Ingenuity Pathway Analysis (IPA)
- Copy number and tumor purity: Sequenza
- Clonal analysis: PyClone-VI
- Neoantigen prediction: NeoPredPipe + OptiType (HLA typing) + netMHCpan
- Immune repertoire: MiXCR (BCR/TCR inference from bulk RNA-seq)

## Results

**Transcriptome**: 950 differentially expressed genes (709 up, 241 down posttreatment). 38 oncogenic signatures significantly activated; upregulated Hallmark pathways include EMT, Hedgehog, NOTCH, WNT/beta-catenin, MAPK, AKT, mTOR. IPA upstream analysis: TGF-beta ranked as the most significant mediator.

**Genome**: KRAS G12C mutant allele frequency decreased in most posttreatment samples; copy number loss confirmed by Sequenza. Zero secondary KRAS mutations; no BRAF/MAP2K1 mutations. >2,000 tumor SNVs in pretreatment vs. fewer posttreatment (immune editing signal).

**TME remodeling**: Complement activation, coagulation cascade, and tumor angiogenesis upregulated. Fatty acid metabolism and xenobiotic metabolism increased. Mast cell infiltration elevated. T cell and B cell functional signatures significantly reduced.

**Immunogenomics**: Neoantigen burden higher pretreatment than posttreatment (immune editing). BCR repertoire more clonally focused posttreatment. TCR diversity reduced.

**Clonal evolution**: Pretreatment submental lymph node = seeding ancestor for 6+ posttreatment distant metastases. Adjacent posttreatment lesions showed spatially divergent resistance programs, consistent with independent parallel evolution of escape mechanisms.

## Related Papers

- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — Intragenic BRCA2 deletions restore ORF and HR competence to confer PARP inhibitor resistance; exemplifies genetic target-restoration as a resistance mechanism (contrast with KRAS copy number loss here).
- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — Fork stabilization as an alternative PARP inhibitor resistance mechanism; illustrates non-mutational resistance routes analogous to TME-mediated bypass here.
- [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]] — Secondary BRCA2 mutation-mediated resistance to platinum; shows how reversion events at the drug target gene itself drive resistance (parallel to KRAS G12C allele loss).
- [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 loss as a resistance mechanism to PARP inhibitors in BRCA1-deficient tumors; highlights how TME-independent, epigenetic/non-mutational mechanisms drive resistance.
- [[drug-resistance/adua-2022-brain-metastatic-outgrowth-osimertinib-resistance]] — TME-driven osimertinib resistance in EGFR-mutant NSCLC brain metastases via RhoA/SRF; strong parallel to KRAS G12C resistance through TME remodeling rather than direct drug-target mutation.
