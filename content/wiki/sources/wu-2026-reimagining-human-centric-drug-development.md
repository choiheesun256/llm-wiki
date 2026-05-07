---
title: "Reimagining human-centric drug development with New Approach Methodologies"
authors: "Xuekun Wu, Matthew A. Wu, James Zou, Nicole Kleinstreuer, Joseph C. Wu"
year: 2026
doi: "10.1126/science.aeb0045"
category: "cancer"
pdf_path: "/Users/heesun/Documents/Obsidian Vault/llm-wiki/papers/wu-2026-reimagining-human-centric-drug-development.pdf"
pdf_filename: "wu-2026-reimagining-human-centric-drug-development.pdf"
source_collection: "notion-handoff-2026-05"
---

Science Review arguing that drug development must shift from animal models to a human-centric paradigm built on human-derived cells, microphysiological systems (MPS), and AI as the three pillars of New Approach Methodologies (NAMs).

## 1. Document Information

- **Journal**: Science (2026)
- **Affiliations**: Stanford CVI, Stanford Biomedical Data Science, NIH
- **DOI**: [10.1126/science.aeb0045](https://doi.org/10.1126/science.aeb0045)
- **References**: 148

## 2. Key Contributions

1. Systematic diagnosis: >90% of preclinical candidates fail in clinical trials; newer modalities (ASO, ADC, PROTAC) target non-existent animal targets, widening the gap.
2. **NAMs triad**: human-derived cells + MPS (organoids, organ-on-chip) + AI (generative design, active learning, foundation models, agentic AI).
3. **4-step integration roadmap**: Lab-in-a-loop → Organs-on-chips → Clinical trial-in-a-dish → Digital-experimental twins.
4. Regulatory landmarks: FDA Modernization Act 2.0/3.0, FDA ISTAND Liver-Chip qualification, iPSC-CM CiPA.

## 3. Methodology and Architecture

Review paper — no original experiments. Synthesizes evidence across:
- Patient-derived tumor organoid (PDTO) biobanks (colorectal, liver, lung, pediatric kidney)
- Organ-on-chip platforms (kidney + PBMC, breast cancer + CAR-T)
- AI frameworks: Virtual Lab (agentic LLM orchestrating AlphaFold + ESM + Rosetta), PROTAC generative design, CLY-124 DrugReflector, TITAN/BiomedCLIP multimodal foundation models

## 4. Key Results and Benchmarks

| Platform | Application | Key Finding |
|----------|-------------|-------------|
| PDTO biobank | Chemo-sensitivity | In vitro response correlates with clinical outcome |
| MCLA-158 | EGFR x LGR5 bispecific Ab | Discovered in CRC organoids, now in clinical trial |
| Esophageal on-chip | Neoadjuvant response | ~12 days prediction, more accurate than static organoids |
| Virtual Lab | Nanobody design | 92 designed → 2 experimentally validated |
| CLY-124 | Transcriptomic perturbation RL | 17x hit rate vs random, Phase 1 |
| TNIK inhibitor | AI-discovered IPF drug | Discovery to Phase 2a in 18 months |

## 5. Limitations and Future Work

- Review paper; no original experimental data.
- NAMs standardization, reproducibility, and regulatory qualification still in progress.
- Cost and scalability challenges unresolved.
- Cross-organ MPS integration remains technically challenging.

## 6. Related Work

- [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]] (TITAN-related multimodal pathology)
- [[cancer/jia-2026-drugclip-contrastive-learning-genome-scale]] (DrugCLIP virtual screening)

## 7. Glossary

- **NAMs**: New Approach Methodologies — umbrella term for human-centric alternatives to animal testing.
- **MPS**: Microphysiological Systems — organ-on-chip and organoid-based platforms.
- **PDTO**: Patient-Derived Tumor Organoid.
- **CiPA**: Comprehensive In Vitro Proarrhythmia Assay.
- **ISTAND**: Innovative Science and Technology Approaches for New Drugs.
