---
title: Timestep Embeddings
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [timestep, embedding, diffusion, conditioning]
---

# Timestep Embeddings

## 한 줄 결론

Timestep embedding은 diffusion model에서 현재 denoising 단계가 어디인지 모델에게 알려주는 벡터다. Diffusion model은 timestep마다 해야 할 일이 다르기 때문에 이 정보가 없으면 제대로 denoising하기 어렵다.

## 왜 timestep이 필요한가

Diffusion sampling에서는 완전한 노이즈에서 시작해 여러 step에 걸쳐 데이터를 복원한다. 초반 step은 노이즈가 많고, 후반 step은 노이즈가 적다.

초반에는 큰 구조를 잡아야 하고, 후반에는 세부를 다듬어야 한다. 따라서 같은 noisy input이라도 timestep에 따라 모델이 수행해야 하는 denoising 함수가 달라진다.

## Embedding으로 바꾸는 이유

Timestep은 숫자 하나지만, neural network는 이 숫자를 그대로 쓰기보다 고차원 벡터로 바꿔 쓰는 경우가 많다.

```text
timestep t -> embedding vector e_t
```

이 embedding은 sinusoidal embedding, learned embedding, 또는 MLP를 통과한 vector일 수 있다. 중요한 것은 모델의 hidden dimension과 잘 맞는 조건 벡터로 timestep을 변환하는 것이다.

## 모델에 넣는 방법

Timestep embedding은 여러 방식으로 모델에 주입될 수 있다.

- input feature에 더하기
- condition token으로 넣기
- MLP feature에 bias처럼 더하기
- [[adaptive-layer-normalization-adaln|AdaLN]]의 condition vector로 사용하기
- residual gate나 modulation parameter를 만들기

DiT 계열에서는 timestep embedding과 class embedding을 합쳐 AdaLN-Zero parameter를 생성하는 방식이 쓰였다.

## 생물학 모델에서의 비유

Diffusion timestep은 생성 과정의 "현재 복원 단계"를 나타내는 인공적인 시간이다. 생물학의 실제 time point와는 다르다.

하지만 모델 설계 관점에서는 dose, perturbation duration, differentiation time, disease progression score 같은 연속 조건도 embedding으로 바꿔 conditioning에 사용할 수 있다. 이때 timestep embedding 설계가 참고가 될 수 있다.

## 주의점

Diffusion timestep을 실제 생물학적 시간으로 해석하면 안 된다. Sampling 과정의 step index일 뿐이다. 실제 time-series single-cell 데이터의 시간축을 모델링하려면 별도의 biological time representation과 validation이 필요하다.

## 관련 페이지

- [[diffusion-models]]
- [[diffusion-transformers]]
- [[conditioning-mechanisms]]
- [[adaptive-layer-normalization-adaln]]
- [[zero-initialization]]
