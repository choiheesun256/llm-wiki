---
title: "Tahoe-x1: Scaling Perturbation-Trained Single-Cell Foundation Models to 3 Billion Parameters"
authors: "Gandhi et al."
year: 2025
doi: "10.1101/2025.10.23.683759"
category: "single-cell"
notion_source: "https://www.notion.so/351302d9c59881f48c0be0954c53fda7"
source_collection: "notion-review-2026-05-07"
tags: [single-cell-foundation-model, drug-token, cancer-cell-line, perturbation]
---

# Tahoe-x1

## Summary

Tahoe-x1 is a compound-aware perturbation-trained single-cell foundation model. It uses a large cancer cell-line drug perturbation corpus and drug tokens, making it directly relevant to virtual-cell models that need to reason over compounds, cell state, and disease context.

## Key points

- Tahoe-100M contains more than 100M single-cell profiles across 50 cancer cell lines and more than 1,100 small-molecule perturbations.
- Model size scales up to 3B parameters.
- Drug tokens are explicit inputs, not just metadata labels.
- Reported tasks include gene essentiality, cancer hallmark recovery, cell-type classification, and perturbation response prediction.

## Project relevance

- Good reference for benchmark splits around held-out drugs and held-out cell lines.
- Motivates a metadata schema with separate drug, dose, time, cell line, disease context, and assay tokens.
- For VITAL, Tahoe-x1 is most useful as a chemical perturbation baseline rather than a complete model for normal-cell multiomics.

## Caveats

- Primarily cancer cell-line and drug-perturbation focused.
- Transfer to primary immune, liver, autoimmune, or MASLD contexts should be treated as empirical, not assumed.

## Related pages

- [[single-cell-foundation-models]]
- [[vital-digital-cell]]
- [[wenkel-tu-2026-txpert-knowledge-graphs]]
