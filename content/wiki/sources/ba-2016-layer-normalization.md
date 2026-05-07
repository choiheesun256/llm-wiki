---
title: "Layer Normalization"
authors: "Jimmy Lei Ba, Jamie Ryan Kiros, Geoffrey E. Hinton"
year: 2016
doi: "10.48550/arXiv.1607.06450"
url: "https://arxiv.org/abs/1607.06450"
category: "normalization"
source_collection: "web-review-2026-05-07"
tags: [layer-normalization, normalization, recurrent-networks, adaln-background]
---

# Layer Normalization

## Summary

Layer Normalization normalizes neural activations within each training example rather than across a mini-batch. It was introduced as a way to stabilize and accelerate training, especially for recurrent networks where batch normalization is less straightforward.

For AdaLN, this paper is the base mechanism: AdaLN keeps LayerNorm's per-example normalization but replaces fixed learned affine parameters with condition-generated scale and shift.

## Key points

- Computes normalization statistics from all summed inputs to neurons in a layer for a single example.
- Performs the same computation at training and test time, unlike batch normalization.
- Adds learned adaptive gain and bias after normalization.
- Helps stabilize hidden-state dynamics in recurrent networks.

## AdaLN relevance

LayerNorm gives the normalized representation:

```text
normalize(x)
```

AdaLN changes only the affine part:

```text
gamma, beta -> gamma(condition), beta(condition)
```

This makes AdaLN best understood as conditional LayerNorm rather than a new model architecture.

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[perez-2018-film-conditioning-layer]]
- [[peebles-xie-2023-diffusion-transformers]]
