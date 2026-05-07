---
title: Diffusion Transformers
type: concept
status: active
updated: 2026-05-07
source_collection: web-review-2026-05-07
tags: [dit, diffusion-transformer, transformer, adaln]
---

# Diffusion Transformers

## 한 줄 결론

Diffusion Transformer는 [[diffusion-models|diffusion model]]의 denoising network로 U-Net 대신 Transformer를 쓰는 계열이다. 대표 사례인 DiT는 latent image patch를 token으로 보고 transformer block을 반복하며, timestep과 class 조건을 [[adaptive-layer-normalization-adaln|AdaLN]] 또는 AdaLN-Zero로 주입한다.

## U-Net diffusion과의 차이

초기 이미지 diffusion model에서는 U-Net backbone이 널리 쓰였다. U-Net은 convolution 기반 구조라 local image pattern과 multi-scale feature를 다루기 좋다.

Diffusion Transformer는 이미지를 patch token sequence로 바꾸고 self-attention으로 처리한다. 이 방식은 Vision Transformer와 비슷하다. Attention은 멀리 떨어진 patch 사이의 관계를 직접 볼 수 있어 scale-up에 유리하다.

## DiT의 기본 흐름

DiT는 보통 latent diffusion 설정에서 동작한다.

```text
image -> VAE encoder -> latent feature map
latent feature map -> patch tokens
patch tokens -> transformer blocks
transformer output -> denoised latent prediction
```

이미지를 직접 pixel 공간에서 처리하기보다 VAE latent 공간에서 처리하면 계산량을 줄일 수 있다.

## 조건 주입이 핵심인 이유

Diffusion denoising network는 timestep을 반드시 알아야 한다. Class-conditional generation이면 class label도 알아야 한다. Text-to-image라면 text condition도 필요하다.

Transformer에서는 이 조건을 여러 방식으로 넣을 수 있다.

- 조건 token을 input sequence에 추가한다.
- [[cross-attention]]으로 condition token을 읽는다.
- [[adaptive-layer-normalization-adaln|AdaLN]]으로 LayerNorm scale/shift를 조건화한다.
- AdaLN-Zero처럼 [[residual-connections|residual branch]] gate까지 조건화한다.

DiT 논문에서는 AdaLN-Zero가 강한 선택지로 보고되었다.

## AdaLN-Zero가 DiT에서 하는 일

Transformer block은 attention branch와 MLP branch를 가진다. AdaLN-Zero는 각 branch에 들어가기 전의 LayerNorm 출력을 조건별로 조절하고, residual update의 크기도 gate로 조절한다.

이 설계는 학습 초기에 block이 identity에 가깝게 시작하도록 도와준다. 큰 transformer diffusion model에서는 작은 초기 불안정성이 전체 sampling 품질에 영향을 줄 수 있으므로, 초기화와 residual gate가 중요하다.

## PixArt 계열에서의 확장

Text-to-image 모델에서는 text condition이 길고 구조적이다. 그래서 text는 cross-attention으로 넣고, timestep은 AdaLN 또는 AdaLN-single로 넣는 hybrid 설계가 자연스럽다. [[chen-2023-pixart-alpha|PixArt-alpha]]는 이런 방향의 대표 사례다.

## 생물학 모델에서의 시사점

Spatial transcriptomics, histology, regulatory DNA, protein, single-cell expression을 diffusion model로 생성하려면 backbone 선택과 conditioning 설계가 같이 중요하다.

- Token 구조가 명확하면 transformer backbone이 유리할 수 있다.
- Compact metadata는 AdaLN으로 주입할 수 있다.
- Gene set, graph, image patch처럼 구조적인 조건은 cross-attention이나 graph attention이 더 적합할 수 있다.

## 관련 페이지

- [[diffusion-models]]
- [[transformer-blocks]]
- [[adaptive-layer-normalization-adaln]]
- [[timestep-embeddings]]
- [[peebles-xie-2023-diffusion-transformers]]
