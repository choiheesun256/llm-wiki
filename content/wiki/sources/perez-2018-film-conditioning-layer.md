---
title: "FiLM: Visual Reasoning with a General Conditioning Layer"
authors: "Ethan Perez, Florian Strub, Harm de Vries, Vincent Dumoulin, Aaron Courville"
year: 2018
doi: "10.48550/arXiv.1709.07871"
url: "https://arxiv.org/abs/1709.07871"
category: "conditioning"
source_collection: "web-review-2026-05-07"
tags: [film, feature-wise-linear-modulation, conditioning, adaln-background]
---

# FiLM

## Summary

FiLM, or Feature-wise Linear Modulation, is a general conditioning layer that applies a feature-wise affine transformation based on external conditioning information. It became a standard way to think about neural conditioning beyond concatenation or attention.

AdaLN can be viewed as a LayerNorm-specific FiLM variant: normalize first, then use condition-derived scale and shift to modulate the normalized features.

## Key points

- Generates feature-wise affine parameters from a condition vector.
- Demonstrated strong performance in visual reasoning tasks.
- Shows that explicit feature modulation can be robust to architecture changes.
- Provides a clean conceptual bridge between conditioning and normalization layers.

## AdaLN relevance

FiLM is broader than AdaLN:

```text
FiLM(h, c) = gamma(c) * h + beta(c)
```

AdaLN applies the same idea after normalization:

```text
AdaLN(h, c) = gamma(c) * LayerNorm(h) + beta(c)
```

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[ba-2016-layer-normalization]]
- [[peebles-xie-2023-diffusion-transformers]]
