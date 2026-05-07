---
title: "Deep-learning-based de novo discovery and design of therapeutics that reverse disease-associated transcriptional phenotypes"
authors: "Xing et al."
year: 2026
doi: "10.1016/j.cell.2026.02.016"
category: "target-discovery"
notion_source: "https://www.notion.so/355302d9c59881638b7cd7698da5a4c2"
source_collection: "notion-review-2026-05-07"
tags: [transcriptomic-reversal, drug-discovery, lincs, deep-learning, hit-to-lead]
---

# GPS transcriptomic reversal

## Summary

GPS predicts compound-induced transcriptomic signatures from chemical structure and searches for compounds that reverse disease-associated transcriptional phenotypes. It is best read as target-agnostic functional therapeutic discovery rather than direct target identification.

## Key points

- Predicts landmark-gene up, down, or no-effect labels from compound structural features and gene information.
- Uses robust collaborative learning to handle noisy LINCS labels.
- Scores disease signature reversal with Z-RGES.
- Uses MolSearch with Monte Carlo tree search for hit-to-lead analog design.
- Demonstrates HCC and IPF applications with experimental follow-up.

## Project relevance

- Adds a phenotype-reversal score next to target-first evidence.
- Helps prioritize compounds or degrader/binder candidates by disease-relevant transcriptional effect, not just binding score.
- Can be combined with target safety maps such as [[tsepilov-2026-gentropy-pleiotropy-target-safety]].

## Caveats

- Does not identify direct ligand-protein binding.
- LINCS context coverage may not match the disease cell state of interest.
- Transcriptomic reversal does not replace toxicity, PK/PD, delivery, or off-target validation.

## Related pages

- [[nrl-target-discovery]]
- [[drug-repurposing]]
- [[virtual-screening]]
