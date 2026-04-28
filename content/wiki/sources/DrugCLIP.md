---
title: DrugCLIP
type: source
status: active
source_files:
  - Clippings/Deep contrastive learning enables genome-wide virtual screening.md
updated: 2026-04-28
---

# DrugCLIP

> 📄 [Jia et al., *Science* (2026)](https://doi.org/10.1126/science.ads9530)

## 요약

`DrugCLIP`은 contrastive learning으로 protein pocket과 small molecule을 공유 latent space에 임베딩하여 기존 docking 대비 최대 1000만 배 빠른 virtual screening을 가능하게 한 프레임워크다.

## 핵심 내용

- DUD-E, LIT-PCBA 벤치마크에서 기존 docking 및 딥러닝 baseline을 속도와 정확도 모두에서 능가
- AlphaFold2 예측 구조만으로도 작동하며, GenPack 모듈로 pocket 정밀도를 향상
- ~10,000개 인간 단백질 × 5억 화합물 = 10조 쌍 이상의 genome-wide 스크리닝을 GPU 8대로 24시간 내 수행
- Wet-lab 실험으로 5HT2A receptor agonist, NET inhibitor, TRIP12 inhibitor를 검증

## Drug repurposing과의 관련성

- Genome 규모의 virtual screening이 현실화되면서 기존 약물의 새로운 타겟 발견이 체계적으로 가능
- Disease module에서 식별된 타겟에 대해 빠르게 약물 후보를 탐색하는 데 활용 가능
- GenomeScreenDB를 공개하여 커뮤니티 차원의 drug repurposing 연구를 지원

## 한계점

- Binding affinity 예측이 실제 약리 활성(in vivo efficacy)을 보장하지 않음
- 현재는 small molecule에 초점이 맞춰져 있으며, 생물학적 제제(biologics)는 다루지 않음

## 관련 페이지

- [[drug-repurposing]]
- [[virtual-screening]]
