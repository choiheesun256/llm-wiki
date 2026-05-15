---
title: "Clinical BRCA1/2 Reversion Analysis Identifies Hotspot Mutations and Predicted Neoantigens Associated with Therapy Resistance"
authors:
  - Stephen J. Pettitt
  - Christopher J. Lord
year: 2020
doi: 10.1158/2159-8290.CD-19-1485
journal: Cancer Discovery
category: drug-resistance
pdf_path: llm-wiki/papers/plus/pettitt-2020-clinical-brca12-reversion-analysis-identifies.pdf
pdf_filename: pettitt-2020-clinical-brca12-reversion-analysis-identifies.pdf
source_collection: plus-batch-2026-05
tags:
  - BRCA1
  - BRCA2
  - reversion-mutation
  - PARP-inhibitor
  - platinum-resistance
  - drug-resistance
  - homologous-recombination
  - neoantigen
  - microhomology
  - HR-deficiency
  - hotspot
  - neopeptide
---

# BRCA1/2 Reversion Mutations: Hotspots, Mechanisms, and Neoantigen Potential

> Source: [[sources/pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt et al. 2020, Cancer Discovery]]

## 1. Core Concept

Reversion mutations in *BRCA1* or *BRCA2* restore the native reading frame of a pathogenic truncating mutation, re-establishing homologous recombination (HR) proficiency and conferring resistance to PARP inhibitors (PARPi) and platinum-based chemotherapy. This paper is the first large-scale systematic analysis of >300 clinical HR-gene reversions, revealing rules governing which mutations revert, how they revert mechanistically, and that revertant proteins encode exploitable neoantigens.

## 2. Reversion Mutation Landscape

### Position Dependence in BRCA2 (Not BRCA1)
- **Hotspot:** BRCA2 c.750–775 (N-terminal region) — enriched for reversions, likely because the surrounding sequence favors secondary deletion events and/or the region is dispensable for HR
- **Desert:** BRCA2 exon 16 onward (CDS ≥7617, C-terminus encoding OB-folds, NLS, TR2 domain) — severely depleted for reversions (P < 0.015); C-terminal mutations appear functionally constrained and are rarely productively reverted
- BRCA1 reversion positions are not significantly different from the incidence distribution

### Mutation Type Constraints
| Pathogenic Mutation Type | Reversion Likelihood |
|---|---|
| Frameshift (insertion/deletion) | Common — majority of revertants |
| Nonsense | Common |
| Missense | Very rare (1 patient vs. ~4.7% in incidence data) |
| Splice-site | Absent in reversion dataset (P = 0.001) |

Missense and splice-site mutations are mechanistically resistant to reversion by deletion because deletions cannot easily restore reading frame while preserving function at these sites.

### Reversion Uniqueness
- 75% of patients had unique pathogenic mutations
- Reversion mutations are also mostly unique — even patients sharing a founder pathogenic mutation generate distinct reversion events
- Exception: true wild-type reversions recurred for BRCA1:c.68_69delAG and BRCA2:c.5946delT

## 3. Mechanisms of Reversion

### Microhomology Use
- **BRCA2:** 88% of reversions are deletions; 68% of those show flanking microhomology
- **BRCA1:** 71% of reversions are deletions; 67% of those show flanking microhomology
- Microhomology use is frequent but NOT universal (~32–33% of deletion reversions lack it)
- BRCA2 uses longer microhomology (mode ~2 bp) vs. BRCA1 (mode ~1 bp)
- Implicated repair pathways: microhomology-mediated end joining (MMEJ), single-strand annealing (SSA), and non-microhomology processes (e.g., canonical NHEJ)

### Deletion Characteristics
- Clinical reversions: predominantly small deletions (<100 bp, within a single exon)
- Cell line/PDX models: large multi-exon deletions (>50 kb) — not recapitulated clinically
- Clinical fitness advantage likely selects for near-full-length reverted proteins

### Implication
Multiple mechanistically distinct DNA-repair pathways can drive reversion, making it difficult to prevent reversion via a single therapeutic intervention.

## 4. Neoantigen Opportunity from Revertant Alleles

Second-site reversion mutations introduce short stretches of novel out-of-frame amino acid sequence (2–30 aa) at the junction of the reversion. These sequences are:
- Not present in wild-type protein
- Not encoded by the pathogenic allele
- Potentially invisible to central immune tolerance

**NetMHCpan-4.0 predictions:**
- Median 52% of individuals predicted to present at least one neopeptide from revertant sequences
- Neopeptides from the out-of-frame pathogenic allele (shared between pathogenic and revertant proteins) predicted for up to 99% of individuals (BRCA2:c.5946delT)
- Shared neopeptide RENLSRYQMLHYKTQ (from BRCA2:c.5946delT reversions) predicted presentable in 96% of individuals

**Therapeutic implications:**
- Checkpoint inhibitors may relieve immune suppression against subclones carrying revertant alleles
- TCR-T cell or CAR-T therapies targeting reversion-specific neoepitopes
- Neoantigen vaccines against predicted neopeptides, potentially administered before or during primary therapy to prevent/delay emergence of resistant disease

## 5. Clinical Implications and Drug Resistance Management

| Finding | Clinical Implication |
|---|---|
| BRCA2 c.750–775 hotspot | Patients with mutations in this region may be at higher reversion risk; monitor closely for platinum/PARPi resistance |
| BRCA2 C-terminal desert | Mutations in exon 16+ (OB-fold region) may be at lower reversion risk via this mechanism |
| Missense/splice-site mutations | Lower reversion risk; these patients may benefit from PARPi/platinum without the same reversion concern |
| Multiple repair mechanisms | Simple microhomology-blocking strategies may not fully prevent reversion |
| Neopeptides in revertant alleles | Immunotherapy strategies may be feasible to target resistant subclones |

**Database resource:** http://reversions.icr.ac.uk — freely accessible, community-contributed clinical reversion database.

## Related Notes

- [[wiki/drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify|Pettitt 2018]] — CRISPR screens identifying PARPi resistance mechanisms
- [[wiki/drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion|Edwards 2008]] — Early clinical reversion case reports
- [[wiki/drug-resistance/sakai-2008-secondary-mutations-mechanism-cisplatin-resistance|Sakai 2008]] — Cisplatin resistance via secondary mutations
- [[wiki/drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum|Pishvaian 2017]] — BRCA2 secondary mutations in platinum resistance
- [[wiki/drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism|Haynes 2018]] — Replication fork stabilization in resistance
- [[wiki/drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor|Jaspers 2013]] — 53BP1 loss and PARPi resistance
- [[wiki/drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna|Noordermeer 2018]] — Shieldin complex and resistance
