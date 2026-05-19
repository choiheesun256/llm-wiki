---
title: "D3: Discrete Diffusion for Tunable Regulatory DNA Design"
authors: "Anirban Sarkar, Alejandra Duran, Yiyang Yu, Da-Wei Lin, Yijie Kang, Peter K. Koo, et al."
year: 2026
doi: "10.1101/2024.05.23.595630"
category: "AI-modeling"
notion_source: "https://www.notion.so/354302d9c598813bb3a4e855c05c3d2f"
source_collection: "notion-review-2026-05-07"
tags: [dna-diffusion, regulatory-dna, enhancer-design, mpra, deep-learning]
---

# D3 regulatory DNA diffusion

## Summary

D3 is a discrete diffusion model for tunable regulatory DNA design. It operates directly on the DNA alphabet and conditions generation on target regulatory activity, preserving motif organization better than continuous-relaxation baselines.

## Method

- Forward process corrupts DNA by nucleotide substitutions.
- Reverse model denoises in DNA token space.
- Conditioning targets cell-type-specific accessibility or regulatory activity.
- Designed sequences are validated with lentiMPRA in K562.

## Project relevance

- Useful example of generative regulatory genomics where variant effect prediction becomes controlled sequence design.
- Connects machine learning to experimental closed-loop validation through MPRA.
- Relevant to disease-context reporter design and regulatory variant interpretation.

## Caveats

- K562 validation does not imply transfer to neuronal, immune, liver, or tumour primary contexts.
- Cell-context-specific retraining or calibration is likely required.

## Related pages

- [[single-cell-foundation-models]]
- [[vital-digital-cell]]
