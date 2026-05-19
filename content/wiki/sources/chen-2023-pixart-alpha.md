---
title: "PixArt-alpha: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis"
authors: "Junsong Chen, Jincheng Yu, Chongjian Ge, Lewei Yao, Enze Xie, Yue Wu, Zhongdao Wang, James Kwok, Ping Luo, Huchuan Lu, Zhenguo Li"
year: 2023
doi: "10.48550/arXiv.2310.00426"
url: "https://arxiv.org/abs/2310.00426"
category: "AI-modeling"
source_collection: "web-review-2026-05-07"
tags: [pixart-alpha, diffusion-transformer, adaln-single, text-to-image]
---

# PixArt-alpha

## Summary

PixArt-alpha is a transformer-based text-to-image diffusion model focused on reducing training cost while maintaining competitive generation quality. It is relevant to AdaLN because it introduces AdaLN-single, a more parameter-efficient modulation design for timestep conditioning in DiT-style blocks.

## Method

- Starts from a DiT-style transformer backbone.
- Adds cross-attention modules to inject text conditions.
- Uses high-information-density captions to improve text-image alignment.
- Decomposes training into stages for pixel dependency, text-image alignment, and aesthetic quality.
- Uses AdaLN-single for efficient timestep modulation.

## AdaLN-single

In standard DiT-style AdaLN, each block can have its own modulation MLP. PixArt-alpha observes that those projections account for a large parameter share and are less useful when class conditioning is removed.

AdaLN-single instead computes a global set of shifts and scales from the timestep in the first block, shares that modulation across blocks, and adjusts it with layer-specific trainable embeddings. This keeps compatibility with pretrained DiT weights while reducing parameter and memory cost.

## Project relevance

PixArt-alpha is useful when thinking about practical conditional generative models:

- use cross-attention for long, structured text conditions
- use AdaLN-style modulation for compact conditions such as time or scalar metadata
- reduce parameters by sharing modulation when the condition has low complexity

For spatial biology or histology-to-omics generation, this suggests a hybrid design: cross-attention over image or region tokens, plus AdaLN for batch, tissue, disease, or timestep-like scalar context.

## Related pages

- [[adaptive-layer-normalization-adaln]]
- [[peebles-xie-2023-diffusion-transformers]]
- [[zhu-2025-unveiling-adaln-zero]]
- [[spatial-ai-for-cancer]]
