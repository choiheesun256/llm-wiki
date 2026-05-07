---
title: Sparse Autoencoders
type: concept
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# Sparse Autoencoders

## Summary

Sparse autoencoders (SAEs) are dictionary-learning models used to decompose dense neural activations into a larger set of sparse latent features. In interpretability work, they are used to recover more coherent features from representations where individual neurons are polysemantic.

## Key points

- SAEs reconstruct a model activation vector as a sparse combination of learned feature directions.
- They are useful when single neurons mix multiple unrelated concepts in superposition.
- In InterPLM, SAEs exposed protein-related features such as motifs, domains, binding sites, structural patterns, and residue-level periodic signals.
- SAEs can support both descriptive interpretation and intervention-based tests, such as feature steering.

## Evidence

- InterPLM reports substantially better biological concept alignment for SAE features than for raw ESM-2 neurons.
- Larger PLMs still benefited from SAE decomposition, suggesting that increasing model size alone does not eliminate superposition.

## Limitations

- Good reconstruction or sparsity does not guarantee human-interpretable features.
- Feature descriptions often still require external annotations, expert review, or causal experiments.

## Related pages

- [[InterPLM]]
- [[protein-language-models]]
- [[overview]]
