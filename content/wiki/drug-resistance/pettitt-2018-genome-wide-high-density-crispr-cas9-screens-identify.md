---
title: "Genome-wide and high-density CRISPR-Cas9 screens identify point mutations in PARP1 causing PARP inhibitor resistance"
authors: "Stephen J. Pettitt, Dragomir B. Krastev, Inger Brandsma, Amy Dréan, Feifei Song, Radoslav Aleksandrov, Maria I. Harrell, Malini Menon, Rachel Brough, James Campbell, Jessica Frankum, Michael Ranes, Helen N. Pemberton, Rumana Rafiq, Kerry Fenwick, Amanda Swain, Sebastian Guettler, Jung-Min Lee, Elizabeth M. Swisher, Stoyno Stoynov, Kosuke Yusa, Alan Ashworth, Christopher J. Lord"
year: 2018
doi: "10.1038/s41467-018-03917-2"
source: "pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify.md"
category: "drug-resistance"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/plus/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify.pdf"
pdf_filename: "pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify.pdf"
source_collection: "plus-batch-2026-05"
tags: [PARP-inhibitor, PARP1, drug-resistance, CRISPR-screen, synthetic-lethality, BRCA1, DNA-repair, homologous-recombination, PARP-trapping, talaparib, olaparib, breast-cancer, ovarian-cancer, in-frame-mutation, zinc-finger-domain, WGR-domain]
---

## Summary

PARP inhibitors (PARPi) treat homologous recombination (HR)-deficient cancers by trapping PARP1 at DNA damage sites, creating cytotoxic protein-DNA complexes. However, acquired drug resistance is common and often mechanistically unclear. This study used two complementary CRISPR-Cas9 approaches — a genome-wide screen in mouse embryonic stem cells and a focused "tag-mutate-enrich" screen combined with a high-density tiling screen in human cancer cells — to systematically identify PARP1 point mutations that cause PARPi resistance. The screens revealed that in-frame mutations within PARP1's DNA-binding zinc-finger (ZnF) domains abolish PARP1 trapping and cause resistance, providing direct genetic evidence for the trapping hypothesis. Critically, mutations outside the ZnF domains — in the WGR and helical/catalytic domains — also caused resistance, pointing to inter-domain allosteric communication as a key determinant of trapping. These PARP1 mutations were found to emerge in BRCA1-mutant tumour cell lines and result in distinct patterns of sensitivity to other chemotherapeutic agents compared to other PARPi resistance mechanisms, suggesting that characterising the molecular basis of resistance could guide subsequent treatment decisions.

## Key Contributions

- **First genome-wide CRISPR screen for PARPi resistance:** Established PARP1 as the primary target mediating talaparib cytotoxicity using 87,897-sgRNA library in mouse ES cells; PARP1 was the only gene with multiple independent sgRNA hits among resistant clones.

- **Tag-mutate-enrich methodology:** Developed a novel focused CRISPR mutagenesis pipeline that selects for in-frame (hypomorphic) mutations rather than null alleles, enabling identification of PARPi resistance-causing missense and small in-frame deletion mutations across the PARP1 protein.

- **Resistance mutations beyond the DNA-binding domain:** Identified resistance-causing mutations in the WGR domain (e.g., N329Q), the helical domain (HD742F), and the catalytic domain (Y848del), in addition to ZnF domain mutations, indicating that inter-domain interactions bridging ZnF1, WGR, HD, and CAT domains regulate PARP1 trapping.

- **Clinical relevance — patient R591C mutation:** A PARP1 R591C mutation identified in an olaparib-resistant ovarian cancer patient impairs PARP1 trapping, validating that screen-identified mechanisms operate in patients.

- **PARP1 mutations in BRCA1-mutant cells:** Demonstrated that PARP1 mutations tolerated in SUM149 (BRCA1-hypomorphic) and COV362 (BRCA1-null) cells confer PARPi resistance in vivo and in vitro, and that residual BRCA1 function is required for cells to survive PARP1 loss/mutation.

- **Mechanism-specific drug sensitivity:** PARP1 mutation-mediated resistance is associated with enhanced topoisomerase I inhibitor sensitivity and no cross-resistance to cisplatin, contrasting with BRCA1 reversion, 53BP1 loss, or REV7 mutation resistance — enabling mechanism-guided treatment sequencing.

## Methodology and Architecture

### Genome-wide Screen (Mouse ES Cells)
- 87,897-sgRNA lentiviral library targeting 19,150 mouse genes transduced into Cas9-expressing ES cells
- 25 nM talaparib selection for 6 days; colony picking; PCR amplification and Sanger sequencing of sgRNA inserts
- Result: PARP1 uniquely represented by multiple distinct sgRNAs across independent resistant clones

### Tag-Mutate-Enrich (HeLa PARP1-GFP)
- HeLa cells with BAC transgene PARP1-GFP; focused 29-guide sgRNA library targeting PARP1
- Six independent lentiviral pools; talaparib selection; FACS isolation of GFP+ (in-frame mutant) cells
- GFP cDNA amplified with pool-specific primers; Ion Torrent PGM sequencing
- Statistical enrichment of in-frame mutations confirmed in 5/6 pools (p < 10^-15, binomial test)

### High-Density Tiling Screen (SUM149 PARP1-GFP)
- 489-guide sgRNA library tiling the full PARP1 coding sequence; two independently tagged SUM149 clones
- Endogenous PARP1 locus tagged with C-terminal GFP using CRISPaint
- Same tag-mutate-enrich workflow; 15-amplicon Ion Torrent sequencing
- Mutation frequency per base (normalised to coverage x1000) mapped to PARP1 protein structure

### Validation
- Western blot / chromatin fractionation (PARP1 trapping assay after MMS treatment)
- UV laser microirradiation with real-time PARP1-GFP recruitment and PAR reporter (PBZ-mRuby2)
- Cell viability (Cell Titre-Glo; clonogenic survival) vs. talaparib/olaparib dose
- In vivo xenograft (SUM149 cells, BALB/c nude mice, oral talaparib gavage)
- Patient tumour sequencing (BROCA-HR panel, NCT02484404)

## Results

| Mutation | Domain | Trapping effect | Resistance |
|---|---|---|---|
| p.43delM / p.44F>I | ZnF1 | Abolished | Yes (in vitro + in vivo) |
| p.119_120delKS | ZnF2 | Abolished (no recruitment) | Yes |
| N329Q | ZnF3 | Abolished | Yes |
| HD742F | Helical domain | Abolished | Yes |
| Y848delY | CAT (catalytic) | Partial reduction | Yes (partial) |
| R591C (patient) | WGR | Impaired (no trapping by talaparib) | Yes (clinical) |

- Dense tiling screen identified mutation hotspots at ZnF-WGR interface (residues 588–591) and WGR-HD interface (residues 743–745), consistent with inter-domain hydrogen-bonding network regulating trapping
- Structural modelling showed resistance mutations cluster at three inter-domain contact zones: (1) ZnF1-WGR axis (D45, R591), (2) HD-CAT interface (H742, D743, G745), (3) CAT region (E688, Y848, N868)
- SUM149-TR2 (PARP1^p.43delMFD) xenografts unresponsive to talaparib (p = 0.98, log-rank); SUM149-Cas9 WT xenografts significantly responsive (p = 0.0086)
- PARP1 mutant SUM149 cells: enhanced sensitivity to camptothecin (topoisomerase I inhibitor), no cross-resistance to cisplatin
- BRCA1/BRCA2 siRNA knockdown synthetically lethal with PARP1 mutation in SUM149-TR2 and COV362 clones, confirming residual BRCA function requirement

## Related Papers

- [[murai-2012-trapping-parp1-parp2-by-parp-inhibitors]] — Original PARP trapping hypothesis; talaparib (BMN673) as highest potency trapper
- [[dawicki-mckenna-2015-parp1-activation-local-unfolding]] — PARP1 activation mechanism via HD unfolding; structural basis for inter-domain regulation
- [[langelier-2012-structural-basis-dna-damage-dependent-parylation]] — Crystal structure of PARP1-DSB complex (PDB: 4OQB); inter-domain contacts
- [[eustermann-2015-structural-basis-parp1-detection-signaling]] — PARP1 structure on single-strand break (PDB: 2N8A); ZnF-WGR contacts
- [[norquist-2011-brca1-brca2-reversion-mutations-chemotherapy-resistance]] — BRCA1/2 secondary somatic mutations restoring HR as PARPi resistance mechanism
- [[xu-2015-rev7-mad2l2-counteracts-double-strand-break-repair]] — REV7/MAD2L2 loss as PARPi resistance mechanism
- [[bouwman-2010-53bp1-loss-brca1-deficiency]] — 53BP1 loss rescues BRCA1 deficiency and confers PARPi resistance
- [[pettitt-2013-piggybac-screen-parp1-olaparib]] — Prior genome-wide transposon screen identifying Parp1 as olaparib toxicity mediator
- [[kondrashova-2017-rad51c-rad51d-parp-inhibitor-resistance]] — Secondary somatic RAD51C/D mutations restoring HR as acquired PARPi resistance mechanism
