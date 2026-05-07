---
title: "T cell state TF cooperative engineering: KLF2 x RUNX2 memory-like CAR-T design"
authors: "Savage et al."
year: 2026
doi: "10.64898/2026.04.20.718569"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/savage-2026-t-cell-state-tf-cooperative.pdf"
pdf_filename: "savage-2026-t-cell-state-tf-cooperative.pdf"
source_collection: "notion-handoff-2026-05"
---

Identifies KLF2 as a key memory-like program regulator in CD8 T cells through pooled TF overexpression screens and perturb-SHARE-seq, then engineers a RUNX2-KLF2 tethered construct guided by AlphaFold3 to reduce precursor-exhaustion signatures for CAR-T design.

## 1. Document Information

- **Journal**: bioRxiv preprint (2026)
- **Affiliations**: Buenrostro lab (Harvard), Gersbach lab (Duke)
- **DOI**: [10.64898/2026.04.20.718569](https://doi.org/10.64898/2026.04.20.718569)

## 2. Key Contributions

1. **KLF2 = memory-like regulator**: pooled MORF screen identifies KLF2 as the strongest modulator of TOX-linked exhaustion programs.
2. **RUNX:KLF composite motif grammar**: genome-wide rare but enriched at key loci (TOX); composite motif perturbation effect far exceeds single motif.
3. **AlphaFold3-guided TF cooperativity**: structural hypothesis for RUNX2-KLF2 interaction validated with engineered constructs.
4. **Engineered tethered RUNX2-KLF2 construct**: reduces precursor-exhaustion signature more precisely than monomer sum.
5. **Clinical link**: KLF2/memory program signature matches CAR-T response signatures.

## 3. Methodology and Architecture

- Pooled MORF (thousands of TF/isoform) overexpression + TOX sorting
- Perturb-SHARE-seq: single-cell RNA + ATAC perturbation profiling
- Motif grammar inference from multiome data
- CRISPRi enhancer tiling at key loci
- AlphaFold3-guided TF-TF cooperativity hypothesis
- Engineered TF constructs (mutant + tethered) validation

## 4. Key Results and Benchmarks

- KLF2 overexpression strongly increases memory-like + effector-associated features while reducing exhaustion program.
- RUNX:KLF composite motif at TOX locus: perturbation effect >> single motif perturbation.
- Tethered RUNX2-KLF2 construct outperforms individual TF constructs in reducing precursor-exhaustion signatures.
- KLF2/memory signature correlates with clinical CAR-T treatment response.

## 5. Limitations and Future Work

- AlphaFold3 interaction predictions have confidence limits; some TF complexes may not be well predicted.
- Pooled screen sensitivity depends on TF isoform and expression level.
- In vivo persistence and tumor control not yet evaluated (follow-up needed).
- Preprint; not peer-reviewed.

## 6. Related Work

- [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]] (complementary T cell priming mechanism)

## 7. Glossary

- **MORF**: Multiplexed ORF overexpression screen.
- **Perturb-SHARE-seq**: Single-cell multiome (RNA + ATAC) perturbation profiling.
- **TOX**: Thymocyte selection-associated HMG box — master regulator of T cell exhaustion.
- **KLF2**: Kruppel-Like Factor 2 — identified here as memory-like program regulator.
