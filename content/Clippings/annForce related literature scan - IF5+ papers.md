---
title: "annForce related literature scan - IF5+ papers"
source: "Manual web literature scan across official journal pages and PubMed"
created: 2026-04-27
description: "A curated set of 30 papers related to annForce, focused on single-cell perturbation prediction, combinatorial generalization, cell-state dynamics, trajectory inference, and Perturb-seq platforms. Selection was limited to journals with impact factor/JIF above 5 and excludes preprints."
tags:
  - "clippings"
  - "annforce"
  - "single-cell"
  - "perturbation"
---
## Summary

This note collects 30 papers that are directly or indirectly relevant to `annForce: Object-Conditioned Force Dynamics for Single-Cell Perturbation Prediction`.

Selection rule:

- Journal impact factor / JIF above 5
- Peer-reviewed venue only
- Focus on at least one of:
  - single-cell perturbation prediction
  - combinatorial perturbation generalization
  - cellular dynamics, fate mapping, or trajectory inference
  - Perturb-seq experimental platforms and benchmark datasets
  - probabilistic foundations used by modern single-cell generative models

## Most relevant themes

- Additive and compositional perturbation models
- Distribution transport and state transition models
- Time, fate, and trajectory modeling in single-cell systems
- Perturb-seq data generation and combinatorial screening

## Papers

### Reviews, benchmarks, and framing

1. [Interpretation, extrapolation and perturbation of single cells](https://www.nature.com/articles/s41576-025-00920-4)  
   Nature Reviews Genetics, 2026  
   Why it matters: up-to-date review of causal, mechanistic, and generative single-cell perturbation modeling.

2. [Benchmarking algorithms for generalizable single-cell perturbation response prediction](https://www.nature.com/articles/s41592-025-02980-0)  
   Nature Methods, 2026  
   Why it matters: direct benchmark paper for the exact task annForce targets.

3. [Causal machine learning for single-cell genomics](https://www.nature.com/articles/s41588-025-02124-2)  
   Nature Genetics, 2025  
   Why it matters: clarifies which causal claims are justified versus associative.

4. [Revealing gene function with statistical inference at single-cell resolution](https://www.nature.com/articles/s41576-024-00750-w)  
   Nature Reviews Genetics, 2024  
   Why it matters: broad review of how perturbation and lineage readouts support gene-function inference.

5. [Single-cell and multivariate approaches in genetic perturbation screens](https://www.nature.com/articles/nrg3768)  
   Nature Reviews Genetics, 2015  
   Why it matters: older but still useful conceptual framing for high-content perturbation screens.

### Core perturbation prediction methods

6. [scGen predicts single-cell perturbation responses](https://www.nature.com/articles/s41592-019-0494-8)  
   Nature Methods, 2019  
   Why it matters: landmark latent-space perturbation prediction method.

7. [Predicting cellular responses to complex perturbations in high-throughput screens](https://www.embopress.org/doi/10.15252/msb.202211517)  
   Molecular Systems Biology, 2023  
   Why it matters: CPA formalizes additive composition in latent space, making it one of the closest conceptual neighbors to annForce.

8. [Learning single-cell perturbation responses using neural optimal transport](https://www.nature.com/articles/s41592-023-01969-x)  
   Nature Methods, 2023  
   Why it matters: CellOT models state transitions as transport maps between control and perturbed populations.

9. [Predicting transcriptional outcomes of novel multigene perturbations with GEARS](https://www.nature.com/articles/s41587-023-01905-6)  
   Nature Biotechnology, 2024  
   Why it matters: strong baseline for novel and combinatorial perturbation generalization.

10. [GPerturb: Gaussian process modelling of single-cell perturbation data](https://www.nature.com/articles/s41467-025-61165-7)  
    Nature Communications, 2025  
    Why it matters: interpretable, uncertainty-aware alternative to neural generative models.

11. [Isolating salient variations of interest in single-cell data with contrastiveVI](https://www.nature.com/articles/s41592-023-01955-3)  
    Nature Methods, 2023  
    Why it matters: separates perturbation-specific variation from shared background structure.

12. [Disentanglement of single-cell data with biolord](https://www.nature.com/articles/s41587-023-02079-x)  
    Nature Biotechnology, 2024  
    Why it matters: strong representation-learning approach for shifting cells across perturbational or temporal states.

13. [Decoding heterogeneous single-cell perturbation responses](https://www.nature.com/articles/s41556-025-01626-9)  
    Nature Cell Biology, 2025  
    Why it matters: focuses on per-cell heterogeneity rather than only mean perturbation effects.

14. [Predicting and interpreting cell-type-specific drug responses in the small-data regime using inductive priors](https://www.nature.com/articles/s42256-026-01202-2)  
    Nature Machine Intelligence, 2026  
    Why it matters: relevant if annForce is applied to sparse cell-type-specific drug perturbation settings.

### Perturb-seq platforms and benchmark data

15. [Perturb-Seq: Dissecting Molecular Circuits with Scalable Single-Cell RNA Profiling of Pooled Genetic Screens](https://www.sciencedirect.com/science/article/pii/S0092867416316105)  
    Cell, 2016  
    Why it matters: foundational pooled CRISPR plus scRNA-seq platform.

16. [A Multiplexed Single-Cell CRISPR Screening Platform Enables Systematic Dissection of the Unfolded Protein Response](https://pubmed.ncbi.nlm.nih.gov/27984733/)  
    Cell, 2016  
    Why it matters: early Perturb-seq paper with single and combinatorial perturbations.

17. [Pooled CRISPR screening with single-cell transcriptome readout](https://www.nature.com/articles/nmeth.4177)  
    Nature Methods, 2017  
    Why it matters: CROP-seq greatly simplified Perturb-seq-style screening.

18. [Combinatorial single-cell CRISPR screens by direct guide RNA capture and targeted sequencing](https://www.nature.com/articles/s41587-020-0470-y)  
    Nature Biotechnology, 2020  
    Why it matters: direct-capture Perturb-seq improved combinatorial screen scalability.

19. [Lineage tracing on transcriptional landscapes links state to fate during differentiation](https://pubmed.ncbi.nlm.nih.gov/31974159/)  
    Science, 2020  
    Why it matters: the LARRY benchmark used in annForce-style fate prediction work.

20. [Mapping information-rich genotype-phenotype landscapes with genome-scale Perturb-seq](https://pubmed.ncbi.nlm.nih.gov/35688146/)  
    Cell, 2022  
    Why it matters: large Perturb-seq benchmark and phenotype atlas.

21. [Systematic reconstruction of molecular pathway signatures using scalable single-cell perturbation screens](https://www.nature.com/articles/s41556-025-01622-z)  
    Nature Cell Biology, 2025  
    Why it matters: large recent Perturb-seq study across signaling contexts with improved analysis.

22. [Scalable genetic screening for regulatory circuits using compressed Perturb-seq](https://www.nature.com/articles/s41587-023-01964-9)  
    Nature Biotechnology, 2024  
    Why it matters: expands perturbational scale and combinatorial coverage at lower cost.

### Dynamics, trajectories, and fate modeling

23. [Fundamental limits on dynamic inference from single-cell snapshots](https://pubmed.ncbi.nlm.nih.gov/29463712/)  
    Proceedings of the National Academy of Sciences, 2018  
    Why it matters: key cautionary paper for any method claiming dynamics from snapshot data.

24. [RNA velocity of single cells](https://www.nature.com/articles/s41586-018-0414-6)  
    Nature, 2018  
    Why it matters: introduced directionality estimation from spliced/unspliced RNA.

25. [Generalizing RNA velocity to transient cell states through dynamical modeling](https://www.nature.com/articles/s41587-020-0591-3)  
    Nature Biotechnology, 2020  
    Why it matters: scVelo made velocity-based dynamics substantially more practical.

26. [CellRank for directed single-cell fate mapping](https://www.nature.com/articles/s41592-021-01346-6)  
    Nature Methods, 2022  
    Why it matters: probabilistic fate mapping and terminal-state inference are central reference points for annForce benchmarking.

27. [Optimal-transport analysis of single-cell gene expression identifies developmental trajectories in reprogramming](https://pmc.ncbi.nlm.nih.gov/articles/PMC6402800/)  
    Cell, 2019  
    Why it matters: Waddington-OT is a major precursor for transport-based cell-state transition models.

28. [CellRank 2: unified fate mapping in multiview single-cell data](https://www.nature.com/articles/s41592-024-02303-9)  
    Nature Methods, 2024  
    Why it matters: extends fate mapping beyond velocity-only settings and integrates multiple views.

### Probabilistic single-cell modeling foundations

29. [Deep generative modeling for single-cell transcriptomics](https://www.nature.com/articles/s41592-018-0229-2)  
    Nature Methods, 2018  
    Why it matters: scVI underlies a large fraction of later perturbation prediction models.

30. [Joint probabilistic modeling of single-cell multi-omic data with totalVI](https://www.nature.com/articles/s41592-020-01050-x)  
    Nature Methods, 2021  
    Why it matters: relevant if annForce expands toward multimodal conditioning or protein-aware state modeling.

## Working interpretation for annForce

annForce appears to sit at the intersection of four lines of work:

- compositional perturbation modeling (`scGen`, `CPA`, `GEARS`, `GPerturb`)
- distribution or state transport (`CellOT`, `Waddington-OT`)
- explicit cell-state dynamics and fate probabilities (`RNA velocity`, `scVelo`, `CellRank`)
- high-content Perturb-seq datasets that make combinatorial generalization measurable

The most direct comparators are likely:

- `CPA` for additive composition
- `GEARS` for novel combinatorial perturbation prediction
- `CellOT` for distribution transport
- `CellRank` for fate-aware dynamics
- `GPerturb` for interpretable additive effects

## Related pages

- [[annForce]]
- [[annForce literature scan]]
- [[single-cell-perturbation-prediction]]
- [[cell-state-dynamics-and-fate-mapping]]
- [[annForce-related-methods]]
