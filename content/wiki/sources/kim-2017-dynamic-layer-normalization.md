---
title: "Dynamic Layer Normalization for Adaptive Neural Acoustic Modeling in Speech Recognition"
authors: "Taesup Kim, Inchul Song, Yoshua Bengio"
year: 2017
doi: "10.48550/arXiv.1707.06065"
url: "https://arxiv.org/abs/1707.06065"
category: "normalization"
source_collection: "web-review-2026-05-07"
tags: [dynamic-layer-normalization, layer-normalization, speech-recognition, adaln-background]
---

# Dynamic Layer Normalization

## Summary

Dynamic Layer Normalization (DLN) adapts LayerNorm by dynamically generating the scaling and shifting parameters. The original application was acoustic modeling, where the model has to adapt to speaker, channel, noise, and environment variability.

This is an important AdaLN precursor because it explicitly uses generated LayerNorm affine parameters as an adaptation mechanism.

## Method

- Uses a separate network to produce LayerNorm scale and shift.
- Applies the dynamic normalization inside deep bidirectional LSTM acoustic models.
- Does not require additional speaker adaptation data or i-vectors.
- Keeps model size fixed while generating adaptation parameters dynamically.

## AdaLN relevance

The paper establishes the same pattern later used widely in transformers:

```text
context -> modulation network -> LayerNorm scale and shift
```

In DiT, the context becomes timestep and class/text condition. In biological models, the context could be perturbation, cell type, donor, assay platform, or tissue region.

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[ba-2016-layer-normalization]]
- [[peebles-xie-2023-diffusion-transformers]]
