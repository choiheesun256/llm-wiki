---
title: "DrugCLIP: Contrastive Protein-Ligand Learning for Genome-Scale Virtual Screening"
authors: "Jia et al."
year: 2026
doi: "10.1126/science.ads9530"
source: "jia-2026-drugclip-contrastive-learning-genome-scale.md"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/jia-2026-drugclip-contrastive-learning-genome-scale.pdf"
pdf_filename: "jia-2026-drugclip-contrastive-learning-genome-scale.pdf"
source_collection: "notion-handoff-2026-05"
tags: [virtual-screening, contrastive-learning, genome-scale, drug-discovery, alphafold]
---

## Summary

DrugCLIP reformulates virtual screening as contrastive embedding retrieval instead of docking, achieving up to 10 million x speedup. Screens ~10,000 human AlphaFold protein structures against 500M compounds on 8 GPUs in 24 hours, producing GenomeScreenDB with 2M+ candidates for 20,000+ pockets. Experimentally validates hits: 5HT2AR agonist (EC50 <100 nM), NET inhibitor (cryo-EM confirmed), TRIP12 inhibitor from AlphaFold-only structure (SPR hit rate 17.5%).

## Key Contributions

- Contrastive retrieval paradigm replaces docking for virtual screening at genome scale
- GenomeScreenDB: publicly released database of screening results across the human proteome
- GenPack: pocket localization for apo/AlphaFold-only structures
- Experimental validation across 3 diverse targets including an AlphaFold-only target

## Methodology and Architecture

Pocket encoder + molecule encoder trained with contrastive loss. Pretrained on ProFSA synthetic pairs, fine-tuned on experimental complexes. Inference: pre-embed all compounds, cosine similarity lookup per target pocket.

## Results

| Target | Result |
|--------|--------|
| 5HT2AR | Agonist EC50 < 100 nM |
| NET | 2 cryo-EM complexes confirmed |
| TRIP12 (AlphaFold-only) | SPR hit rate 17.5% |
| DUD-E, LIT-PCBA | Outperforms docking + NN baselines |
| Scale | 8 GPU x 24h for 10K proteins x 500M compounds |

## Related Papers

- [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]]
- [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]]
