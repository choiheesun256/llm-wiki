---
title: "Unveiling the Secret of AdaLN-Zero in Diffusion Transformer"
authors: "Jie Zhu, Mingyu Ding, Boqiang Duan, Leye Wang, Jingdong Wang"
year: 2025
url: "https://openreview.net/forum?id=E4roJSM9RM"
category: "diffusion-transformer"
source_collection: "web-review-2026-05-07"
tags: [adaln-zero, adaln-gaussian, diffusion-transformer, initialization]
---

# Unveiling the Secret of AdaLN-Zero

## Summary

This paper analyzes why AdaLN-Zero works well in diffusion transformers. It studies three candidate explanations: an SE-like modulation structure, zero initialization, and gradual update order. The paper identifies zero initialization as the most influential factor and proposes AdaLN-Gaussian as an alternative initialization scheme.

## Main findings

- AdaLN-Zero performs better than vanilla AdaLN in DiT-style image generation.
- The authors separate several possible reasons for the improvement.
- Zero initialization is found to be the dominant contributor among the tested factors.
- AdaLN-Gaussian initializes condition modulation with Gaussian distributions and is reported to improve stability and performance over AdaLN-Zero in ImageNet DiT experiments.

## Interpretation

The practical lesson is that AdaLN is not just about adding conditional scale and shift. The initialization and residual update strength matter because they control how quickly each transformer block departs from identity behavior during diffusion training.

For new domains, including biological generative modeling, AdaLN should be treated as a trainability-sensitive block design rather than a drop-in normalization swap.

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[peebles-xie-2023-diffusion-transformers]]
- [[chen-2023-pixart-alpha]]
