---
title: "DrugCLIP: Contrastive Protein-Ligand Learning for Genome-Scale Virtual Screening"
authors: "Jia et al."
year: 2026
doi: "10.1126/science.ads9530"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/jia-2026-drugclip-contrastive-learning-genome-scale.pdf"
pdf_filename: "jia-2026-drugclip-contrastive-learning-genome-scale.pdf"
source_collection: "notion-handoff-2026-05"
---

DrugCLIP redefines protein pocket-compound virtual screening as a contrastive embedding retrieval problem, enabling genome-scale screening of ~10,000 human proteins x 500M compounds in 24 hours on 8 GPUs, with experimental validation of hits for 5HT2AR, NET, and TRIP12.

## 1. Document Information

- **Journal**: Science (2026)
- **DOI**: [10.1126/science.ads9530](https://doi.org/10.1126/science.ads9530)

## 2. Key Contributions

1. **Contrastive retrieval vs docking**: reformulates virtual screening as embedding similarity, achieving up to 10 million x speedup over traditional docking.
2. **Genome-scale screen**: ~10,000 human AlphaFold structures x 500M compounds → GenomeScreenDB (2M+ candidates for 20,000+ pockets), publicly released.
3. **GenPack**: pocket localization for apo/AlphaFold-only structures without holo crystal data.
4. **Experimental validation**: 5HT2AR agonist (EC50 < 100 nM), NET inhibitor (cryo-EM confirmed), TRIP12 inhibitor (AlphaFold-only target, SPR hit rate 17.5%).

## 3. Methodology and Architecture

- **Pocket encoder**: protein pocket → embedding.
- **Molecule encoder**: SMILES/3D conformer → embedding.
- **Pretraining**: ProFSA-generated synthetic pseudo pocket-ligand pairs.
- **Fine-tuning**: experimental protein-ligand complexes + RDKit conformers.
- **Inference**: pre-embed all compounds, then cosine similarity lookup per target pocket.

## 4. Key Results and Benchmarks

| Benchmark | Result |
|-----------|--------|
| DUD-E, LIT-PCBA | Outperforms docking and NN baselines |
| Scaffold removal, protein-family holdout | Robust |
| 5HT2AR agonist | EC50 < 100 nM |
| NET inhibitor | 2 cryo-EM complexes confirmed |
| TRIP12 (AlphaFold-only) | SPR hit rate 17.5% |
| Genome-scale | 8 GPU x 24h for ~10K proteins x 500M compounds |

## 5. Limitations and Future Work

- Contrastive retrieval is similarity-based; selectivity and off-target effects need separate assessment.
- Pocket detection failures (including GenPack) propagate downstream.
- Experimental hit validation limited to a small number of targets.

## 6. Related Work

- [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]] (ProteinAligner protein representation)
- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]] (CADDIE network-based repurposing)

## 7. Glossary

- **GenomeScreenDB**: Public database of DrugCLIP screening results across ~10K human proteins.
- **GenPack**: Pocket localization method for structures without holo crystal data.
- **ProFSA**: Protein Fragment-Surrogate Assignment for synthetic pretraining pairs.
