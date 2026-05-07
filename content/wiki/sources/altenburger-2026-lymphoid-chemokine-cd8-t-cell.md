---
title: "Lymphoid chemokine limits CD8+ T cell priming time to preserve effector function"
authors: "Lukas M. Altenburger, Daniela Claudino Carvoeiro et al."
year: 2026
doi: "10.1126/science.adq2080"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/altenburger-2026-lymphoid-chemokine-cd8-t-cell.pdf"
pdf_filename: "altenburger-2026-lymphoid-chemokine-cd8-t-cell.pdf"
source_collection: "notion-handoff-2026-05"
---

Defines a chemokine "off-switch" mechanism where lymph node stromal CCR7 ligands (CCL19/CCL21) actively drive DC detachment of activated CD8+ T cells via DOCK2 relocalization. Non-detached T cells acquire PD-1/LAG-3 high, GzmB low dysfunctional phenotype with impaired cytotoxicity and memory recall.

## 1. Document Information

- **Journal**: Science 392, eadq2080 (2026)
- **Affiliations**: Stein lab, University of Fribourg
- **DOI**: [10.1126/science.adq2080](https://doi.org/10.1126/science.adq2080)

## 2. Key Contributions

1. **CCR7-driven detachment**: CCL19/CCL21 restore T cell chemotaxis 10-24h post-TCR activation, triggering DOCK2 relocalization away from the immunological synapse.
2. **DOCK2 as the effector**: 76% of detachment events preceded by DOCK2 relocalization; Dock2-/- T cells show prolonged attachment (49 vs 17 min median).
3. **Dysfunctional "non-detached" phenotype**: Nr4a1/2/3, Bhlhe40, PD-1, LAG-3, CD200 upregulated; GzmA/B, Ccr2, Ccr5 decreased; in vivo bacterial control ~10x worse.
4. **Chronic infection model**: LCMV cl.13 causes stromal CCL19/CCL21 loss → prolonged T-DC engagement (73 vs 32 min). Local CCL19 restores detachment within 1 hour.
5. **Memory impairment**: Non-detached T cells show reduced CX3CR1+/KLRG1+ LLEC frequency and weakened recall protection at day 30.

## 3. Methodology and Architecture

- OT-I/Nur77GFP intravital imaging
- DOCK2-GFP microfluidic chamber assays
- Bulk RNA-seq + quantitative proteomics (6,578 proteins) on CD/ND cohorts
- LCMV-OVA / Lm-OVA in vivo cytotoxicity (Prf1-/- host)
- Chronic LCMV cl.13 model for stromal chemokine loss

## 4. Key Results and Benchmarks

| Measurement | Control (CD) | Non-Detached (ND) |
|-------------|-------------|-------------------|
| In vivo DC contact (median) | 17 min | 49 min |
| Transwell detachment | 87% | 32% |
| In vivo bacterial control | baseline | ~10x worse |
| PD-1, LAG-3, CD200 | low | high |
| GzmA/B | high | low |

## 5. Limitations and Future Work

- DOCK2 inhibitor showed limited in vivo potency → degrader/PROTAC approaches may be needed.
- Mechanism characterized primarily in viral infection models; direct tumor-specific validation needed.
- Stromal chemokine loss in tumor-draining LN as driver of exhaustion-like phenotype is a hypothesis requiring further testing.

## 6. Related Work

- [[cancer/savage-2026-t-cell-state-tf-cooperative]] (complementary: TF engineering for memory-like CAR-T)

## 7. Glossary

- **DOCK2**: Dedicator of Cytokinesis 2 — hematopoietic-restricted Rac-GEF mediating cytoskeletal remodeling.
- **CCR7**: C-C Chemokine Receptor Type 7 — directs lymphocyte migration to lymph nodes.
- **Immunological synapse**: Structured interface between T cell and antigen-presenting cell.
- **LLEC**: Long-Lived Effector Cell — CX3CR1+/KLRG1+ memory subset.
