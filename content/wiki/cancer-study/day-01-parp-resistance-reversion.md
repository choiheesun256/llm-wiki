---
title: "Day 1: PARP Resistance — Reversion Mutations"
draft: false
---

# Day 1: PARP Resistance — Reversion Mutations

## Big Picture

PARP inhibitors (olaparib, rucaparib, niraparib) exploit homologous recombination deficiency (HRD) in BRCA1/2-mutant cancers by trapping PARP1 on DNA, converting single-strand breaks into lethal double-strand breaks. The most clinically prevalent resistance mechanism is **secondary "reversion" mutations** that restore the BRCA1/2 reading frame and re-enable HR repair. Understanding reversion biology is essential for anticipating treatment failure and designing next-line strategies.

## Key Concepts

**Synthetic lethality** — PARP inhibition is only lethal when HR repair is already broken (e.g., BRCA1/2 loss). Restoring HR by any means abolishes synthetic lethality.

**Reversion mutations** — Secondary mutations (deletions, insertions, or point mutations) that occur near the original pathogenic BRCA variant and restore the open reading frame. The protein product regains enough function to repair DNA.

**Cross-resistance** — BRCA reversion confers resistance to both PARP inhibitors and platinum chemotherapy, since both rely on HRD. Taxanes and other non-DNA-damage agents typically remain effective.

## Paper-by-Paper

### Edwards 2008 — The foundational discovery
→ [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]]

The first paper to show that secondary intragenic deletions in BRCA2 can remove the causative frameshift and restore HR. Four deletion classes (458 bp to 58 kb) were found in cisplatin-resistant Capan-1 cells and clinically in ovarian tumors. This established the entire field of reversion-mediated resistance.

### Sakai 2008 — Extending the mechanism
→ [[drug-resistance/sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]]

A companion study showing secondary mutations restore wild-type BRCA2 in 7 of 14 cisplatin-resistant clones. Also characterized splice-site-mediated resistance in HCC1428 cells, demonstrating that reversions are not limited to simple deletions — diverse mutation types can accomplish the same functional restoration.

### Pishvaian 2017 — Beyond ovarian and breast cancer
→ [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]]

First documented BRCA2 reversion in pancreatic ductal adenocarcinoma: a 26-bp somatic deletion upstream of the germline c.6174delT frameshift, detected at 8% MAF after veliparib+FOLFOX treatment. This was important because it proved the reversion mechanism is not cancer-type-specific — it can emerge in any BRCA-mutant malignancy.

### Pettitt 2020 — The reversion landscape at scale
→ [[drug-resistance/pettitt-2020-clinical-brca12-reversion-analysis-identifies]]

A large-scale analysis of >300 clinical BRCA1/2 reversions revealing key patterns:
- **BRCA2 c.750–775** is a reversion hotspot; exon 16 downstream is a reversion "desert"
- 88% of BRCA2 reversions are deletions, with 68% showing microhomology signatures (implicating MMEJ/alt-EJ repair)
- Reversion-specific neopeptides are predicted to be MHC-presentable in ~52% of individuals — opening a potential immunotherapy angle against resistant clones

### Nesic 2024 — BRCA1 splice-site reversions
→ [[drug-resistance/nesic-2024-brca1-secondary-splice-site-mutations-drive]]

An important mechanistic twist: secondary mutations at the BRCA1 exon 11 donor splice site drive exon 11 skipping, producing the BRCA1-Δ11q isoform with partial HR activity. This was ~10-fold enriched in post-PARPi samples from ARIEL2/4 trials. Spliceosome modulators (H3B-8800) are proposed as countermeasures. The key insight is that reversions do not always restore the full-length protein — a partially functional isoform can be sufficient.

### Pettitt 2023 — HUWE1 and the Δ11q connection
→ [[drug-resistance/pettitt-2023-huwe1-defect-causes-parp-inhibitor]]

HUWE1 is the E3 ubiquitin ligase that normally degrades BRCA1-Δ11q. When HUWE1 is lost or mutated, the Δ11q isoform accumulates and partially restores HR — without any BRCA1 reversion. Clinical HUWE1 missense mutations were found post-PARPi in an HGSOC patient. This establishes a non-reversion pathway that converges on the same Δ11q biology as splice-site reversions.

## Connections

- **Day 2** covers non-reversion PARPi resistance mechanisms (53BP1/shieldin, fork protection, PARP1 mutations, drug efflux)
- The CDK12–HRD connection appears in **Day 5** (CDK12 loss creates BRCAness via intronic polyadenylation)
- CPTAC proteogenomics (**Day 7**) reveals that BRCA/HRD status has distinct proteomic and PTM signatures beyond genotype

## Key Takeaway

Reversion mutations are the most common PARPi resistance mechanism because they solve the fundamental problem — restoring HR. They can occur through deletions, insertions, point mutations, or splice-site changes across any BRCA-mutant cancer type. The clinical implication: serial ctDNA monitoring for emergent reversions should guide treatment decisions, and reversion-specific neopeptides may represent a future immunotherapy target.
