---
title: InterPLM
type: source
status: draft
source_files:
  - Clippings/InterPLM discovering interpretable features in protein language models via sparse autoencoders - Nature Methods.md
updated: 2026-04-08
---

# InterPLM

> 📄 [Bushuiev et al., *Nature Methods* (2025)](https://doi.org/10.1038/s41592-025-02623-0)

## 요약

InterPLM은 ESM-2의 은닉 표현(hidden representations)에 sparse autoencoder를 학습시켜 단백질 언어 모델(PLM)을 해석하는 프레임워크다. 이 논문은 생물학적으로 의미 있는 개념들이 단일 PLM 뉴런에 명확하게 국재화(localized)되지 않으며, 모티프, 도메인, 결합 부위, 구조적 패턴 등 단백질 특성과 정렬되는 희소 특징(sparse feature)으로 복원될 수 있다고 주장한다.

## 핵심 내용

- 여러 ESM-2 레이어의 아미노산 임베딩에 sparse autoencoder를 학습시켜 수천 개의 희소 latent feature를 추출한다.
- SAE feature가 원시 뉴런보다 훨씬 많은 Swiss-Prot 개념과 정렬됨을 보여, PLM 지식이 중첩(superposition) 방식으로 저장된다는 주장을 뒷받침한다.
- 더 깊은 레이어일수록 더 풍부한 생물학적 개념을 담고 있으며, 더 큰 모델인 ESM-2-650M이 ESM-2-8M보다 넓은 개념 집합을 포착함을 확인했다.
- LLM 기반 자동 주석 파이프라인을 활용해 feature에 텍스트 설명을 생성하고, 해당 설명이 홀드아웃 단백질에서의 활성화를 예측하는지 검증했다.
- 두 가지 실용적 응용을 시연한다:
  - 누락되거나 불완전한 단백질 주석 보완 제안
  - 해석 가능한 feature의 활성화를 조작해 서열 예측을 유도하는 steering
- `InterPLM.ai`에서 탐색 인터페이스를, 공개 코드 저장소에서 학습 및 분석 도구를 제공한다.

## 근거

- SAE를 출력 레이블이 아닌 ESM-2 은닉 상태에서 학습했으므로, 추출된 feature는 태스크 특화 감독이 아닌 내부 표현을 반영한다.
- 뉴런과 비교했을 때 SAE feature는 훨씬 많은 feature-개념 매칭과 광범위한 생물학적 개념을 복원했다.
- 무작위로 초기화된 가중치를 사용한 대조 모델은 아미노산 특이적 feature는 생성했지만 고수준 생물학적 개념 복원에는 실패했으며, 이는 의미 있는 feature가 학습된 PLM 구조에서 비롯됨을 지지한다.
- 주기적 glycine feature에 대한 steering 실험에서 직접 조작된 위치뿐 아니라 인접 위치에도 예측 가능한 방식으로 영향이 나타나, 일부 feature가 모델 동작에 인과적 영향을 미침을 시사한다.

## 한계점

- 대부분의 해석은 상관관계 기반이므로, feature 의미는 완전한 기계론적 증명이 아닌 주석 겹침과 패턴 일관성으로 추론된다.
- 평가가 Swiss-Prot 등 기존 주석 시스템에 크게 의존하기 때문에 새로운 생물학을 놓치거나 알려진 개념 쪽으로 해석이 편향될 수 있다.
- LLM이 생성한 feature 설명은 유용하지만, 확정적인 생물학적 이해가 아닌 그럴듯한 사후 설명이 될 수 있다.
- Steering 결과는 유망하지만 범위가 제한적이며, 복잡한 단백질 설계 목표에 대한 강건한 제어는 아직 입증되지 않았다.

## 관련 페이지

- [[protein-language-models]]
- [[sparse-autoencoders]]
- [[overview]]
