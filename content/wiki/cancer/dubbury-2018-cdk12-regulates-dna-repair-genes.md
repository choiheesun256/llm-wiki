---
title: "CDK12 regulates DNA repair genes by suppressing intronic polyadenylation"
authors: "Sara J. Dubbury, Paul L. Boutz, Phillip A. Sharp"
year: 2018
doi: "10.1038/s41586-018-0758-y"
source: "dubbury-2018-cdk12-regulates-dna-repair-genes.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/dubbury-2018-cdk12-regulates-dna-repair-genes.pdf"
pdf_filename: "dubbury-2018-cdk12-regulates-dna-repair-genes.pdf"
source_collection: "plus-batch-2026-05"
tags: [CDK12, DNA-repair, kinase, intronic-polyadenylation, BRCAness, PARP-inhibitor, RNAPII, homologous-recombination]
---

## Summary

CDK12 is an RNAPII CTD Ser2 kinase whose depletion globally increases intronic polyadenylation (IPA) — the premature termination of transcripts within introns — across the mouse embryonic stem cell genome. HR DNA repair genes (the BRCAness gene set including ATM, BRCA1, BRCA2, FANCI, FANCD2, WRN, ATR) are particularly enriched in IPA sites per gene, making their full-length isoform output cumulatively and disproportionately sensitive to CDK12 loss. This mechanism explains the functional HR deficiency (BRCAness phenotype) observed in CDK12 loss-of-function tumours. TCGA prostate and ovarian cancer cohorts confirm that CDK12 LOF mutations increase IPA at HR gene loci in human tumours. These findings position CDK12 mutational status and IPA usage as biomarkers for HR deficiency and potential PARP inhibitor sensitivity.

## Key Contributions

- CDK12 globally suppresses IPA genome-wide; its loss increases IPA in 91% of affected isoforms (1,824 of 2,009), redirecting transcription termination from distal to intronic poly(A) sites
- HR/BRCAness genes are uniquely enriched for IPA sites per gene, so their cumulative full-length expression loss upon CDK12 depletion exceeds that of other gene classes
- CDK12 LOF alters RNAPII elongation dynamics: decreased Ser2p RNAPII and reduced 5′-end RNAPII density with accumulation toward 3′ ends, consistent with altered elongation that favors IPA
- TCGA validation in prostate adenocarcinoma and ovarian serous cystadenocarcinoma demonstrates that CDK12 LOF tumours upregulate IPA at ATM, FANCD2, and WRN loci
- CDK12 inhibitor THZ531 phenocopies CDK12 genetic LOF for IPA increases in human cancer cell lines (22RV1, PC-3, OVCAR4), suggesting CDK12 inhibitors may sensitize HR-competent tumours to PARP inhibitors

## Methodology and Architecture

- **Cdk12∆ mES cell system**: Dox-inducible CRISPR-Cas9 conditional knockout of Cdk12 (exon 4 deletion); CDK12 depleted by 48 h of Dox withdrawal; reversible by Dox re-addition; 2 independent clones per experiment
- **3′-end sequencing + RNA-seq**: Genome-wide identification of 33,115 IPA sites in 13,594 expressed genes; isoform-level quantification of IPA vs. distal poly(A) usage by DEXseq; differential expression by DESeq/EBSeq
- **CDK12 sensitivity index**: Log2 ratio of CDK12-annotated first to last exon read counts per gene across conditions; captures cumulative IPA effect on full-length gene output
- **ChIP-seq**: Metagene analysis of total RNAPII (8WG16, Rpb3) and Ser2p RNAPII (H5, 3E10) density from TSS to distal poly(A) site; 4 independent ChIPs per antibody; Kolmogorov-Smirnov test for bin-wise significance
- **TCGA analysis**: CDK12 LOF defined by truncating/missense driver mutations or deep deletion + mRNA downregulation; IPA quantified from STAR-aligned BAM files; Mann-Whitney U test for group comparisons
- **Pharmacological validation**: THZ531 (CDK12/CDK13 inhibitor) in 22RV1, PC-3, OVCAR4; RT-qPCR for isoform-specific expression; Western blot for ATR, FANCD2 protein levels
- **Functional assays**: Neutral comet assay for DSBs, FACS-based cell cycle and apoptosis profiling, EdU incorporation for S-phase progression

## Results

- CDK12 depletion affects IPA isoform usage in ~22% of expressed genes (2,948 genes); 91% of significantly changing IPA isoforms increase upon CDK12 loss
- RNAPII metagene: CDK12 loss decreases RNAPII density at 5′ gene ends and increases it toward 3′ ends; consistent with a barrier to productive elongation at the first stable nucleosome being overcome, allowing RNAPII to accumulate downstream and use IPA sites
- Ser2p RNAPII density decreases across entire gene bodies upon CDK12 loss, confirming its Ser2 kinase role
- HR genes show the highest CDK12 sensitivity index values; sensitivity correlates with IPA site count per gene; 13/22 BRCAness genes significantly upregulate IPA (P = 1.59 × 10−4)
- ATM, FANCD2, WRN protein levels decrease upon CDK12 loss in mES cells; ATR and FANCD2 protein also decrease
- TCGA: CDK12 LOF tumours show significantly increased IPA at ATM IPA#1, ATM IPA#2 (P < 0.0001), FANCD2 IPA (P < 0.0001), WRN IPA (P = 0.0023) vs. wild-type/amplified CDK12 tumours
- CDK12(K975E) missense variant (minimal kinase activity effect) does not increase ATM IPA, confirming LOF specificity
- THZ531 treatment in human prostate/ovarian lines increases IPA at HR gene loci, phenocopying genetic CDK12 LOF

## Related Papers

- [[cancer/bajrami-2014-genome-wide-profiling-genetic-synthetic-lethality]] — CDK12 synthetic lethality with PARP1/2 inhibition
- [[cancer/boudadi-2018-ipilimumab-plus-nivolumab-dna-repair-defects]] — DNA repair defects and immunotherapy
- [[cancer/dharanipragada-2023-blocking-genomic-instability-prevents-acquired]] — genomic instability and acquired resistance
- [[cancer/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — intragenic deletion and therapy resistance
- [[cancer/haynes-2018-restored-replication-fork-stabilization-mechanism]] — replication fork and HR repair
