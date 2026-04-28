---
title: Protein Language Models
type: concept
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# Protein Language Models

## 요약

Protein language models (PLMs)는 아미노산 서열을 토큰으로 처리하고, self-supervised training을 통해 서열 표현을 학습한다. 이렇게 학습된 표현은 구조 예측, 기능 추론, 어노테이션 전이, 서열 생성 및 완성 등 다양한 태스크에 활용된다.

## 핵심 내용

- PLM은 일반적으로 대규모 protein 코퍼스로 학습된 transformer 모델이다.
- 숨겨진 상태(hidden states)는 구조적 모티프, 기능 영역, 공진화 신호, 서열 문맥 등을 인코딩할 수 있다.
- 해석 가능성의 핵심 질문은 PLM이 재사용 가능한 생물학적 개념을 학습하는지, 아니면 단순히 서열 규칙성을 암기하는지에 관한 것이다.
- InterPLM은 생물학적으로 의미 있는 개념들이 PLM 내에 존재하지만 여러 뉴런에 분산되어 있으며, sparse feature dictionary를 통해 더 명확하게 드러남을 보여준다.

## 근거

- 기존의 probing 및 attention 분석 연구들은 PLM 내부 표현을 구조, 접촉 잔기, 활성 부위 등과 연결시켰다.
- InterPLM은 probe나 단일 뉴런 검사에만 의존하지 않고 sparse autoencoder로 숨겨진 표현을 분석함으로써 이 연구 방향을 확장한다.

## 한계

- 높은 downstream 성능이 메커니즘적 이해를 자동으로 보장하지는 않는다.
- 해석 가능한 내부 특징이 명시적인 물리적 추론보다 공진화 통계를 반영하는 데 그칠 수 있다.

## 관련 페이지

- [[InterPLM]]
- [[sparse-autoencoders]]
- [[overview]]
