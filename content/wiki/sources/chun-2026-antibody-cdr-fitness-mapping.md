---
title: "Landscape-scale antibody CDR fitness mapping with AlphaFold3 and ProteinMPNN rescue"
authors: "Changju Chun, Byeong-Kwon Sohn, Heesoo Ki, Ji Hye Jo, Junho Chung, Minkyung Baek, Tae-Young Yoon, et al."
year: 2026
doi: "10.1101/2026.04.21.719857"
category: "target-discovery"
notion_source: "https://www.notion.so/351302d9c59881ba87b6f35ee1c7c54a"
source_collection: "notion-review-2026-05-07"
tags: [antibody, cdr, alphafold3, proteinmpnn, binder-design, productivity]
---

# Landscape-scale antibody CDR fitness mapping

## Summary

This preprint uses SPID single-molecule measurements to map antibody CDR variants across affinity, productivity, and thermal stability. It then uses AlphaFold3 and ProteinMPNN to rescue high-affinity but low-productivity clones.

## Key points

- Measures more than 17,000 CDR variants with single-molecule protein interaction detection.
- Shows affinity and productivity are largely orthogonal optimization axes.
- ProteinMPNN compatibility correlates with mammalian productivity.
- AlphaFold3 plus ProteinMPNN proposes substitutions that rescue high-affinity low-productivity clones.
- Adalimumab variants show large dose reduction in an IMQ psoriasis mouse model with extended complex lifetime.

## Project relevance

- Binder design should include productivity and stability QC, not affinity alone.
- AF3/ProteinMPNN rescue is a practical lead-optimization pattern for antibodies, binders, or degrader-adjacent discovery.
- Complex lifetime may be more relevant than K_D for some in vivo effects.

## Caveats

- bioRxiv preprint at the time of Notion review.
- Translation from antibody systems to degrader binders or other scaffolds needs empirical calibration.

## Related pages

- [[nrl-target-discovery]]
- [[piochi-2026-proteus-protein-flexibility]]
- [[protein-language-models]]
