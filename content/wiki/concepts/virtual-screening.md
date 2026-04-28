---
title: Virtual Screening
type: concept
status: active
source_files:
  - Clippings/Deep contrastive learning enables genome-wide virtual screening.md
updated: 2026-04-28
---

# Virtual Screening

## 요약

대규모 화합물 라이브러리에서 특정 단백질 타겟에 결합할 가능성이 높은 분자를 computational하게 탐색하는 방법이다. Drug discovery와 drug repurposing 모두에서 핵심적인 단계다.

## 주요 접근법

- **Molecular docking** (AutoDock Vina, Glide 등): 물리 기반 scoring으로 결합 자세와 친화도를 예측. 정확하지만 느림
- **Pharmacophore modeling**: 약물 활성에 필요한 3D 특징 패턴을 매칭
- **Ligand-based screening**: 알려진 활성 분자와의 유사성으로 탐색
- **Deep learning 기반** (DrugCLIP 등): Contrastive learning으로 protein pocket과 molecule을 공유 공간에 임베딩하여 초고속 탐색

## 최근 동향

- AlphaFold 구조 예측의 발전으로 실험 구조 없이도 virtual screening이 가능해짐
- DrugCLIP은 10조 쌍 이상의 genome-wide 스크리닝을 24시간 내 수행
- GenomeScreenDB 같은 공개 데이터베이스로 커뮤니티 차원의 탐색 지원

## Drug repurposing에서의 역할

- Disease module에서 식별된 타겟에 대해 기존 승인 약물의 결합 가능성을 빠르게 평가
- 기존 약물이 원래 타겟 외에 다른 단백질에도 결합할 수 있는지 체계적으로 탐색

## 한계점

- In silico 결합 예측과 실제 약리 활성 사이에 큰 gap이 존재
- False positive가 많아 실험적 검증이 필수
- 단백질 유연성과 세포 내 환경을 충분히 반영하기 어려움

## 관련 페이지

- [[drug-repurposing]]
- [[DrugCLIP]]
- [[network-medicine]]
