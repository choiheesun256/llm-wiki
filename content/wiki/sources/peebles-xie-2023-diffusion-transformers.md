---
title: "Scalable Diffusion Models with Transformers"
authors: "William Peebles, Saining Xie"
year: 2023
doi: "10.48550/arXiv.2212.09748"
url: "https://arxiv.org/abs/2212.09748"
category: "AI-modeling"
source_collection: "web-review-2026-05-07"
tags: [dit, diffusion-transformer, adaln-zero, generative-models]
---

# Scalable Diffusion Models with Transformers

## Summary

The DiT paper replaces the usual diffusion U-Net backbone with a Vision Transformer operating on latent patches. Its most relevant contribution for AdaLN is the block-design study comparing in-context conditioning, cross-attention, vanilla AdaLN, and AdaLN-Zero.

AdaLN-Zero became one of the practical defaults for diffusion transformers because it was compute-efficient, stable, and stronger than the other conditioning strategies tested in the paper.

## Method

- Uses a latent diffusion setup with a VAE-compressed image representation.
- Patchifies the latent feature map into a token sequence.
- Processes the sequence with transformer blocks.
- Injects diffusion timestep and class label conditions through several alternative block designs.
- Finds that model forward-pass compute scales strongly with sample quality.

## AdaLN-specific findings

- AdaLN regresses LayerNorm scale and shift from the sum of timestep and class embeddings.
- Compared with cross-attention, AdaLN adds little extra compute.
- AdaLN-Zero additionally predicts residual scaling gates and initializes the modulation MLP to zero.
- The identity-like initialization makes each block initially behave close to a residual pass-through.
- In the paper's DiT-XL/2 comparison, AdaLN-Zero outperformed in-context and cross-attention conditioning while being compute-efficient.

## Project relevance

For biology-oriented generative models, this is a useful design pattern when the condition is compact:

- perturbation or drug token
- time, dose, and cell type metadata
- tissue or cancer-type condition
- assay or batch metadata that should modulate hidden features

Structured conditions such as long text, gene sets, pathway graphs, or image regions may still need cross-attention or graph attention. AdaLN is strongest when the condition can be summarized as a vector.

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[chen-2023-pixart-alpha]]
- [[zhu-2025-unveiling-adaln-zero]]
- [[single-cell-foundation-models]]
- [[spatial-ai-for-cancer]]
