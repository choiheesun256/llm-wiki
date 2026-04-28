---
title: Sparse Autoencoders
type: concept
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# Sparse Autoencoders

## 요약

Sparse autoencoders (SAEs)는 밀집된 신경망 활성화(dense neural activations)를 더 큰 규모의 sparse latent feature 집합으로 분해하는 dictionary learning 모델이다. 해석 가능성(interpretability) 연구에서는 개별 뉴런이 여러 개념을 혼합하는 polysemantic 표현에서 더 일관된 특징을 복원하는 데 활용된다.

## 핵심 내용

- SAE는 모델의 활성화 벡터를 학습된 feature 방향들의 sparse 조합으로 재구성한다.
- 단일 뉴런이 여러 무관한 개념을 superposition으로 혼합할 때 특히 유용하다.
- InterPLM에서 SAE는 motif, domain, binding site, 구조적 패턴, 잔기 수준의 주기적 신호 등 protein 관련 특징들을 드러냈다.
- SAE는 기술적 해석(descriptive interpretation)과 feature steering 같은 개입 기반 실험 모두를 지원할 수 있다.

## 근거

- InterPLM은 SAE 특징이 raw ESM-2 뉴런보다 생물학적 개념과 훨씬 더 잘 정렬됨을 보고한다.
- 더 큰 PLM에서도 SAE 분해가 유용했는데, 이는 모델 크기를 늘리는 것만으로는 superposition 문제가 해결되지 않음을 시사한다.

## 한계

- 좋은 재구성 성능이나 sparsity가 인간이 해석 가능한 특징을 보장하지는 않는다.
- 특징 설명에는 여전히 외부 어노테이션, 전문가 검토, 또는 인과 실험이 필요한 경우가 많다.

## 관련 페이지

- [[InterPLM]]
- [[protein-language-models]]
- [[overview]]
