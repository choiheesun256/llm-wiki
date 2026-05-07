---
title: InterPLM
type: source
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# InterPLM

## Summary

InterPLM is a framework for interpreting protein language models by training sparse autoencoders on hidden representations from ESM-2. The paper argues that biologically meaningful concepts are not cleanly localized in single PLM neurons, but can be recovered as sparse features that align with motifs, domains, binding sites, structural patterns, and other protein properties.

## Key points

- Trains sparse autoencoders on amino-acid embeddings from multiple ESM-2 layers to extract thousands of sparse latent features.
- Shows SAE features align with far more Swiss-Prot concepts than raw neurons, supporting the claim that PLM knowledge is stored in superposition.
- Finds that deeper layers contain richer biological concepts, and that the larger ESM-2-650M model captures a broader concept set than ESM-2-8M.
- Uses an LLM-assisted annotation pipeline to generate textual descriptions of features and validate whether those descriptions predict activation on held-out proteins.
- Demonstrates two practical applications:
  - suggesting missing or incomplete protein annotations
  - steering sequence predictions through targeted activation of interpretable features
- Provides an exploration interface at `InterPLM.ai` and a public code repository for training and analysis.

## Evidence

- SAEs were trained on ESM-2 hidden states rather than output labels, so the extracted features reflect internal representations rather than task-specific supervision.
- Compared with neurons, SAE features recovered many more feature-concept matches and a much wider range of biological concepts.
- Randomized-weight control models still produced amino-acid-specific features but failed to recover higher-level biological concepts, which supports the claim that meaningful features come from learned PLM structure.
- Steering experiments on periodic glycine features affected both directly manipulated positions and nearby positions in predictable ways, suggesting some features have causal influence on model behavior.

## Limitations

- Most interpretation is correlation-based, so feature meaning is inferred from annotation overlap and pattern consistency rather than fully established mechanistic proof.
- Evaluation depends heavily on existing annotation systems such as Swiss-Prot, which may miss novel biology or bias interpretation toward known concepts.
- LLM-generated feature descriptions are useful but can still produce plausible post hoc explanations rather than definitive biological understanding.
- Steering results are promising but narrow; the paper does not yet show robust control for complex protein design objectives.

## Related pages

- [[protein-language-models]]
- [[sparse-autoencoders]]
- [[overview]]
