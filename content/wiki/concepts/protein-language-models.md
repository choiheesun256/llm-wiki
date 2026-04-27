---
title: Protein Language Models
type: concept
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# Protein Language Models

## Summary

Protein language models (PLMs) treat amino-acid sequences as tokens and learn sequence representations through self-supervised training. These representations support tasks such as structure prediction, function inference, annotation transfer, and sequence generation or completion.

## Key points

- PLMs are typically transformer models trained on large protein corpora.
- Hidden states can encode structural motifs, functional regions, coevolutionary signals, and sequence context.
- A central interpretability question is whether PLMs learn reusable biological concepts or mostly memorize sequence regularities.
- InterPLM suggests that many biologically meaningful concepts are present in PLMs but are distributed across neurons and more cleanly exposed through sparse feature dictionaries.

## Evidence

- Prior probing and attention analyses have linked PLM internals to structure, contacts, and active sites.
- InterPLM extends this line of work by analyzing hidden representations with sparse autoencoders instead of relying only on probes or single-neuron inspection.

## Limitations

- Strong downstream performance does not automatically imply mechanistic understanding.
- Interpretable internal features may still reflect coevolutionary statistics more than explicit physical reasoning.

## Related pages

- [[InterPLM]]
- [[sparse-autoencoders]]
- [[overview]]
