---
title: "Parallel sequencing of extrachromosomal circular DNAs and transcriptomes in single cancer cells"
authors: "Rocío Chamorro González, Thomas Conrad, Maja C. Stöber, Robin Xu, Mădălina Giurgiu, Elias Rodriguez-Fos, Katharina Kasack, Lotte Brückner, Eric van Leen, Konstantin Helmsauer, Heathcliff Dorado Garcia, Maria E. Stefanova, King L. Hung, Yi Bei, Karin Schmelz, Marco Lodrini, Stefan Mundlos, Howard Y. Chang, Hedwig E. Deubzer, Sascha Sauer, Angelika Eggert, Johannes H. Schulte, Roland F. Schwarz, Kerstin Haase, Richard P. Koche, Anton G. Henssen"
year: 2023
doi: "10.1038/s41588-023-01386-y"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas.pdf"
pdf_filename: "gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas.pdf"
source_collection: "plus-batch-2026-05"
tags: [ecDNA, extrachromosomal-DNA, single-cell, scEC&T-seq, neuroblastoma, MYCN, CDK4, MDM2, circular-DNA, intratumor-heterogeneity, oncogene-amplification, structural-variation, transcriptomics, rolling-circle-amplification, CTCF, chromatin]
---

## Summary

Gonzalez et al. introduce **scEC&T-seq**, the first method to simultaneously sequence all circular DNA types and full-length mRNA from the same individual cancer cells. Applying the method to neuroblastoma cell lines (CHP-212, TR14) and primary patient tumors, the study establishes that large oncogene-containing ecDNAs (MYCN, CDK4, MDM2) are **clonally propagated** across most cells and their copy number directly drives intercellular oncogene expression differences. In contrast, small circular DNAs (<100 kb) are predominantly **cell-exclusive**, suggesting they lack a strong clonal selective advantage. Intercellular structural variation in ecDNA within single patient nuclei reveals **subclonal ecDNA evolution** by sequential structural variant acquisition. Small circular DNA breakpoints are enriched at CTCF-binding sites, implicating CTCF-mediated chromatin loop extrusion in their biogenesis. The platform is applicable to primary snap-frozen tumor nuclei and enables parallel measurement of DNA content and transcriptional output in the same cell.

## Key Contributions

- **scEC&T-seq method**: Plate-based protocol that separates mRNA (via Oligo dT magnetic beads) from DNA within the same cell lysate; DNA undergoes exonuclease digestion (linear DNA removal) and rolling circle amplification (circular DNA enrichment); mRNA processed by Smart-seq2; both libraries sequenced by Illumina or Nanopore
- **Oncogenic ecDNA is clonal**: ecDNAs harboring MYCN (CHP-212 and TR14), CDK4, and MDM2 (TR14) detected recurrently across most cells; ecDNA copy number positively correlated with oncogene mRNA expression at the single-cell level (MYCN R = 0.86 in CHP-212; CDK4 R = 0.55, MDM2 R = 0.59 in TR14)
- **Small circular DNAs are cell-exclusive**: The vast majority of small circular DNAs are found in individual cells only, indicating low clonal propagation; cells with high small circular DNA content show enrichment of DNA repair and DNA damage response gene signatures by GSEA
- **ecDNA structural evolution inferred in single cells**: In primary neuroblastoma patient 2, three ecDNA structural variants (variant 1: intact; variant 2: + 6-kb deletion; variant 3: + 6-kb deletion + additional SVs) were identified across individual nuclei, reconstructing a sequential evolutionary history of ecDNA structure with subclone-level resolution
- **CTCF as a breakpoint hotspot**: Small circular DNA breakpoints are significantly enriched at CTCF ChIP-seq peaks and depleted from ATAC-seq-accessible chromatin; data are consistent with a model in which DNA loop extrusion at CTCF sites renders chromatin susceptible to breakage and circularization
- **Enhancer co-amplification**: One MYCN enhancer element co-amplified on ecDNA in >82.7% of neuroblastoma single cells; the predominant ecDNA subclone variant (no. 3) has a 6:1 enhancer-to-oncogene ratio, potentially enabling more efficient transcriptional activation

## Methodology and Architecture

**Experimental workflow:**

| Step | Details |
|------|---------|
| Cell isolation | FACS (PI viability; DAPI for nuclei); 96-well plate format |
| mRNA capture | Biotin-SMARTer Oligo dT-VN primer on streptavidin beads; Smart-seq2 |
| DNA enrichment | Exonuclease digestion (Plasmid-Safe DNase, 1 or 5 days); rolling circle amplification (phi29, REPLIg kit) |
| DNA sequencing | Illumina HiSeq 4000 PE150 or Oxford Nanopore MinION (R9.4.1) |
| RNA sequencing | Illumina HiSeq 4000 PE75; rsem quantification; Seurat clustering |

**Computational analysis:**
- Circular DNA detection: outward-facing read pairs + Homer v4.11 variable-width peak calling; threshold calibrated from positive control circular regions; minimum 2 supporting reads per circle
- SV calling: lumpy-sv v0.2.14, SvABA v1.1.0 (short-read); Sniffles v1.0.12 (Nanopore long-read)
- ecDNA amplicon reconstruction: gGnome v0.1 from bulk WGS SV calls; in silico validation by PBSIM2
- Recurrence classification: circular DNA bins categorized as ecDNA (overlap with WGS amplicon), chrM, or other; recurrence plotted as fraction of cells with detected signal per category
- Relative copy number: amplicon gene coverage normalized to winsorized mean of non-amplicon genes; log2-transformed; correlated with scRNA-seq read counts (Pearson)
- CTCF enrichment: 1,000 permutation-based empirical P-value using regioneR v1.24.0; CPM signal from H3K4me1, H3K27ac, H3K27me3 ChIP-seq and ATAC-seq at circle edge positions vs. genome background
- SNV calling: GATK4/Mutect2 v4.1.9.0 (genomic); Mutserve v2.0.0-rc12 + alleleCount v4.0.2 (mitochondrial heteroplasmy)
- Fusion gene detection: STAR v2.7.9a + Arriba v2.1.0 (≥50x total coverage, ≥30% split/discordant reads)

## Results

**ecDNA detection and validation:**
- Fraction of reads mapping to circular DNA significantly increases after 5-day exonuclease treatment (P < 2.2 × 10^-16) and is specifically depleted by PmeI pre-digestion (P < 2.2 × 10^-16), confirming circular DNA specificity
- Illumina and Nanopore detection are concordant (R = 0.95, P < 2.2 × 10^-16), demonstrating platform robustness
- 97–1,939 circular DNA regions per cell (median 702) in CHP-212; size distribution (min 30 bp, max 1.2 Mb, median 21,483 kb) matches bulk populations

**Oncogenic ecDNA clonality and expression:**
- MYCN, CDK4, MDM2 ecDNAs recurrently detected across most TR14 cells (21/25 cells contained all three); a small subset of cells lacked specific ecDNA types, consistent with unequal mitotic segregation
- ecDNA copy number strongly predicts oncogene expression: MYCN R = 0.86 (n = 150 CHP-212 cells); CDK4 R = 0.55, MDM2 R = 0.59 (n = 25 TR14 cells)
- Genes flanking MYCN on ecDNA (LPIN1, TRIB2) also show ecDNA-dependent expression differences

**Small circular DNA biology:**
- Small circular DNAs are predominantly non-recurrent (cell-exclusive); their fraction does not vary with cell cycle phase, suggesting they are not simply apoptotic products
- Cells in the top 40% of small circular DNA relative content (<3 kb) are enriched for DNA repair (adjusted P = 0.0415) and cellular response to DNA damage (P = 0.0008) pathways; nucleotide excision repair and telomere maintenance also enriched

**Primary tumor application:**
- Tumor nuclei have significantly more circular DNAs per million reads than matched patient T cells (P < 2.2 × 10^-16); MYCN ecDNA present in cancer cells, absent in T cells
- Patient 2: three ecDNA structural subclones identified, with SV no. 1 (founding variant) present in all cells; SVs 2–4 present in subsets, allowing reconstruction of sequential structural evolution and clonal dynamics

## Limitations

- Low throughput (96-well plate); per-cell costs limit scalability for large cohorts
- Long exonuclease digestion (up to 5 days) may selectively degrade large ecDNAs; ecDNA stability in single cells under these conditions not fully characterized
- No dedicated single-cell SV caller exists; bulk tools (lumpy-sv, SvABA) applied to merged data; rare SVs in individual cells may be missed
- CTCF-mediated loop extrusion as a breakage mechanism is correlative; direct experimental validation (e.g., depletion of CTCF) not performed
- Functional impact of individual cell-exclusive small circular DNA elements on gene expression remains uncharacterized
- Primary tumor analysis uses snap-frozen nuclei; cell lines may not fully recapitulate in vivo ecDNA selective dynamics

## Related Papers

- [[cancer/aguilera-2023-atrx-guardian-chromatin]] — ATRX loss and chromatin instability; relevant to ecDNA chromatin context
- [[cancer/dharanipragada-2023-blocking-genomic-instability-prevents-acquired]] — genomic instability and acquired resistance mechanisms
- [[cancer/dubbury-2018-cdk12-regulates-dna-repair-genes]] — DNA repair gene regulation; context for DNA damage response findings in small circular DNA cells
- [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]] — ecDNA and oncogene amplification as cancer hallmarks
