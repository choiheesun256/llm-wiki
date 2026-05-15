---
title: "BRCA1 secondary splice-site mutations drive exon-skipping and PARP inhibitor resistance"
authors: "Ksenija Nesic, John J. Krais, Yifan Wang, Cassandra J. Vandenberg, Pooja Patel, Kathy Q. Cai, Tanya Kwan, Elizabeth Lieschke, Gwo-Yaw Ho, Holly E. Barker, Justin Bedo, Silvia Casadei, Andrew Farrell, Marc Radke, Kristy Shield-Artin, Jocelyn S. Penington, Franziska Geissler, Elizabeth Kyran, Robert Betsch, Lijun Xu, Fan Zhang, Alexander Dobrovic, Inger Olesen, Rebecca Kristeleit, Amit Oza, Iain McNeish, Gayanie Ratnayake, Nadia Traficante, Australian Ovarian Cancer Study, Anna DeFazio, David D. L. Bowtell, Thomas C. Harding, Kevin Lin, Elizabeth M. Swisher, Olga Kondrashova, Clare L. Scott, Neil Johnson, Matthew J. Wakefield"
year: 2024
doi: "10.1186/s12943-024-02048-1"
source: "nesic-2024-brca1-secondary-splice-site-mutations-drive.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/nesic-2024-brca1-secondary-splice-site-mutations-drive.pdf"
pdf_filename: "nesic-2024-brca1-secondary-splice-site-mutations-drive.pdf"
source_collection: "plus-batch-2026-05"
tags: [BRCA1, PARPi-resistance, splice-site-mutation, exon-skipping, HGSOC, TNBC, alternative-splicing, HRR, PDX, liquid-biopsy, drug-resistance, rucaparib, ovarian-cancer, ARIEL2, ARIEL4]
---

## Summary

Nesic, Krais et al. (2024) demonstrate that secondary splice-site mutations (SSMs) at the BRCA1 exon 11 donor splice junction drive exon 11 skipping and overexpression of the partially functional BRCA1-Δ11q (and Δ11) isoforms, conferring resistance to PARP inhibitors (PARPi) in high-grade serous ovarian carcinoma (HGSOC) and triple-negative breast cancer (TNBC). Using nine ovarian and breast cancer patient-derived xenograft (PDX) models carrying BRCA1 exon 11 frameshift mutations — including a matched pair from one patient before and after chemotherapy/PARPi — the authors show that PARPi-resistant tumors display elevated Δ11q expression. Two independent PDX models acquired secondary SSMs predicted in silico and confirmed by qRT-PCR, RNAseq, immunoblotting, and minigene assays to disrupt canonical splicing and enhance exon 11 skipping. CRISPR/Cas9-mediated introduction of SSMs into BRCA1-mutant cell lines (UWB1.289, SUM149) directly elevated Δ11q protein, increased HR activity (RAD51 foci), and conferred PARPi resistance; siRNA silencing of Δ11q re-sensitized resistant cells to rucaparib. In clinical datasets, SSMs enriched from 1% (1/115) pre-PARPi to 10% (6/63) post-PARPi in ARIEL2 and ARIEL4 trial patients. SSMs are detectable in ctDNA liquid biopsies and co-occur with frame-restoring reversion mutations in the same patients, reflecting parallel selection of resistance clones. The mechanism extends beyond BRCA1 exon 11, with SSMs affecting BRCA1 exon 20 and a BRCA2 exon 8 SSM also identified, establishing exon-skipping by SSMs as a generalizable PARPi resistance pathway.

## Key Contributions

1. **SSMs as a novel acquired PARPi resistance mechanism**: Secondary somatic mutations at the BRCA1 exon 11 donor splice site hijack splicing to skip the mutation-containing exon, producing BRCA1-Δ11/Δ11q isoforms with partial HRR activity sufficient to escape PARPi cytotoxicity — a mechanism distinct from frame-restoring reversion mutations.

2. **Independent PDX evidence and causal validation**: Two independently generated PARPi-resistant PDX models (HGSOC PDX #56PP post-PARPi and HGSOC PDX #049) harbored distinct SSMs absent in matched archival material; causal role confirmed by CRISPR SSM knock-in (resistance gain) and siRNA Δ11q knockdown (resistance reversal).

3. **Clinical enrichment of SSMs post-PARPi**: ~10-fold enrichment of SSMs (1% → 10%) in BRCA1 exon 11 mutated patients from ARIEL2/ARIEL4 clinical trials after rucaparib treatment, establishing clinical relevance and selection under therapy.

4. **Liquid biopsy detectability**: SSMs are detectable in ctDNA plasma samples, enabling non-invasive monitoring of this resistance mechanism across spatially heterogeneous tumors — a practical advantage over tissue biopsy.

5. **Generalizability beyond BRCA1 exon 11**: SSMs affecting BRCA1 exon 20 (4 ARIEL4 patients) and a BRCA2 exon 8 SSM predicted to remove a pathogenic variant-containing exon suggest the exon-skipping resistance mechanism operates across multiple HRR pathway genes.

6. **Therapeutic implication**: Spliceosome modulators (e.g., SF3B1-modulator H3B-8800) may reduce Δ11q expression and overcome this resistance avenue, warranting investigation in patients with Δ11q-driven PARPi resistance.

## Methodology and Architecture

**Model systems**
- Nine HGSOC, TNBC, and OCS PDX models with BRCA1 exon 11 frameshift mutations (WEHI and FCCC cohorts); one matched PDX pair (PDX #56 chemo-naive/sensitive vs. PDX #56PP post-chemotherapy/PARPi-refractory).
- Cell lines: COV362 (BRCA1-mutant HGSOC, intermediate Δ11q, PARPi-intermediate), UWB1.289 (BRCA1 exon 11 frameshift, TNBC), SUM149 (BRCA1 exon 11 frameshift, TNBC); MDA-MB-231 (WT BRCA1 control), UWB1.289 (U), COV362 (C) as reference panel.

**In vivo treatment and isoform profiling**
- PDX treated with cisplatin (4 mg/kg) and rucaparib (450 mg/kg) in vivo; treatment response classified by site-specific criteria.
- qRT-PCR: exon 14-targeted primers (total BRCA1); Δ11/Δ11q-specific primers; results normalized per site; Δ11q/total BRCA1 ratio used as primary metric.
- RNAseq corroborated qRT-PCR isoform ratios; immunoblotting assessed FL, Δ11q, and Δ11 protein levels with tubulin loading control.

**SSM identification and in silico prediction**
- DNA panel sequencing (BROCA) of PDX and cell lines; in silico splice site disruption prediction for all candidate SSMs.
- SSM absence confirmed in matched archival pre-treatment material (Supplementary Fig. S6).
- All PDX models confirmed HRD by genomic scar signatures (Supplementary Fig. S7–S8).

**Minigene and functional splicing assay**
- BRCA1 minigene construct (containing relevant exons/introns) used to test each SSM; c.1127delVal as primary mutation positive control.
- Bicistronic blasticidin resistance gene co-expressed to normalize for transfection efficiency.
- Output: Δ11q/total BRCA1 band ratio by gel densitometry.

**CRISPR/Cas9 SSM introduction**
- sgRNA targeting exon 11 donor site (sgSS) vs. sgRosa (non-targeting control) introduced into UWB1.289 and SUM149 cells.
- Readouts: BRCA1-Δ11q protein by immunoblot; colony-forming assay ± 1 µM rucaparib; RAD51 foci after 10 Gy irradiation (% nuclei with >5 foci).

**siRNA silencing of Δ11q**
- Broad exon 9-targeting siRNA depletes BRCA1-Δ11q (and Δ11) in COV362; scrambled siRNA as control.
- Readouts: colony-forming assay ± 1 µM rucaparib; RAD51 foci.

**Clinical sample analysis**
- ARIEL2 (NCT01891344) and ARIEL4 (NCT02855944): tumor biopsies and ctDNA plasma before and after rucaparib treatment.
- DNA sequencing for SSMs at the BRCA1 c.4096 exon 11 donor region; all identified SSMs modeled by in silico tools and confirmed by minigene.
- Co-occurrence of SSMs with frame-restoring reversion mutations documented per patient.

## Results

| Readout | Pre-PARPi / Control | Post-PARPi / SSM condition | Significance |
|---------|--------------------|-----------------------------|--------------|
| Δ11q expression in responsive vs. resistant PDX | Lower (< 2 prior platinum lines) | Higher (≥ 2 prior platinum + PARPi) | P = 0.0007 |
| Δ11 expression PDX #56PP vs. #56 | Baseline | Elevated | P = 0.0079 |
| SSM frequency (ARIEL2/4, exon 11) | 1% (1/115) pre-PARPi | 10% (6/63) post-PARPi | ~10-fold enrichment |
| Colony formation (sgSS vs. sgRosa + rucaparib) | Fewer (sgRosa) | More (sgSS) | P < 0.01 |
| RAD51 foci (sgSS vs. sgRosa, SUM149) | Baseline | Elevated | P = 0.02 |
| Colony formation (siΔ11q + rucaparib in COV362) | More (scrambled) | Fewer (siΔ11q) | P < 0.01 |

**Isoform-resistance correlation**: Δ11q expression (qRT-PCR and RNAseq) correlated with PARPi and platinum resistance across the PDX cohort, though not always with protein levels, implicating post-translational regulation.

**Minigene results**: All PDX-derived SSMs (PDX #56PP, #049, COV362) and all 6 post-PARPi patient SSMs confirmed to drive Δ11q exon skipping; mutations with reduced minigene transfection efficiency (measured by BSD gene expression) were flagged as potentially driving lower Δ11q induction.

**In vivo causality (TNBC PDX)**: Ectopic Δ11q expression in BRCA1-null TNBC PDX #1126 (PARPi/platinum-sensitive) induced platinum and PARPi resistance in vivo, confirming causal sufficiency of Δ11q overexpression.

**Multiple SSMs per patient**: Several ARIEL2/4 patients harbored multiple SSMs and/or concurrent reversion mutations post-PARPi (Patients 2, 3, 4 in Fig. 2), reflecting high genomic instability and polyclonal resistance evolution.

## Related Papers

- **Wang et al. (2016) Cancer Res.** — Original description of BRCA1-Δ11q isoform bypassing germline mutations and mediating PARPi/cisplatin resistance; foundational work directly extended by this study.
- **Kondrashova et al. (2018) Nat. Commun.** — Methylation of all BRCA1 copies predicts rucaparib response in ovarian carcinoma; establishes isoform-level BRCA1 expression as a clinical response determinant.
- **Kondrashova et al. (2017) Cancer Discov.** — Secondary somatic mutations restoring RAD51C and RAD51D in acquired rucaparib resistance in HGSOC; parallel clinical resistance evidence.
- **Pettitt et al. (2023) Nat. Commun.** — Genome-wide CRISPR screens identify PARP1 point mutations causing PARPi resistance; defines the broader resistance landscape.
- **Pettitt et al. (2023) Oncogene** — HUWE1 defect causes PARPi resistance by modulating BRCA1-Δ11q; parallel non-SSM driver of Δ11q-mediated resistance.
- **Johnson et al. (2016) Cell Rep.** — CDK12 inhibition reverses acquired PARPi resistance in TNBC, including BRCA1 wild-type models.
- **Cong et al. (2021) Mol. Cell** — Replication gaps as a key determinant of PARPi synthetic lethality with BRCA deficiency; mechanistic context for partial HRR activity of Δ11q.
- **Edwards et al. (2008) Nature** — ORF-restoring intragenic deletions in BRCA2 as the first described secondary mutation resistance mechanism; conceptual parallel to SSM-driven splicing resistance.
- **Sakai et al. (2008) Cancer Res.** — Secondary BRCA2 mutations as a mechanism of cisplatin resistance in ovarian carcinoma; establishes reversion mutation paradigm.
- **Steensma et al. (2021) Leukemia** — Phase I study of SF3B1-modulator H3B-8800 in myeloid neoplasms; candidate therapeutic approach for Δ11q-driven PARPi resistance.
- **Fraile-Bethencourt et al. (2019) J. Pathol.** — Mis-splicing in breast cancer; identification of pathogenic BRCA2 variants by systematic minigene assays; methodological parallel.
- **Tammaro et al. (2012) Biochem. Soc. Trans.** — BRCA1 exon 11 alternative splicing and cancer association; background on Δ11/Δ11q biology.
