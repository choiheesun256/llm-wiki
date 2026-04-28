---
title: scGen
type: source
status: active
source_files:
  - Clippings/annForce related literature scan - IF5+ papers.md
updated: 2026-04-27
---

# scGen

> 📄 [Lotfollahi et al., *Nature Methods* (2019)](https://doi.org/10.1038/s41592-019-0494-8)

## 요약

`scGen`은 latent space에서 대조군 세포와 처리군 세포 사이의 변환을 학습하는 perturbation 예측 모델로, 이 분야의 기준점이 되는 중요한 연구다.

## 핵심 내용

- Variational autoencoder(VAE)를 기반 구조로 사용한다.
- Perturbation 효과를 latent space에서의 벡터 이동으로 근사한다.
- 세포 유형 간, 연구 간 perturbation 일반화 능력을 입증했다.

## annForce와의 관련성

- Single-cell perturbation 예측 분야에서 표준 baseline으로 활용된다.
- annForce는 정적인 latent 변환 대신 연속적인 dynamics 위의 force field로 perturbation을 모델링한다는 점에서 차별화된다.
- 명시적 dynamics 모델링이 외삽 성능이나 해석 가능성을 실질적으로 향상시키는지 검증하는 비교 대상으로 유용하다.

## 한계점

- Latent arithmetic에 기반한 이동 방식은 비선형적이거나 경로 의존적인 반응을 지나치게 단순화할 수 있다.
- 궤적 중심보다는 최종 상태(endpoint) 중심의 모델이다.

## 관련 페이지

- [[annForce]]
- [[CPA]]
- [[CellOT]]
- [[GEARS]]
