---
title: "Autophagy"
type: concept
updated: 2026-05-19
---

# 오토파지 (Autophagy)

## 정의

오토파지(autophagy, 자식작용)는 세포 내 손상된 세포소기관, 단백질 응집체, 세포 내 병원체 등을 autophagosome(이중막 소포)으로 포획한 후 lysosome과 융합하여 분해·재활용하는 세포 자정 기전이다. 암에서 오토파지는 이중적 역할을 하는데, 암 발생 초기에는 암 억제(tumor suppressive) 기능을 하지만, 진행된 암에서는 영양 결핍 및 치료 스트레스에 대한 생존 기전으로 전환된다. 최근에는 오토파지가 암의 면역 회피(immune evasion)에 직접 기여한다는 사실이 밝혀져 면역치료와의 병용 전략이 주목받고 있다.

오토파지의 핵심 기전은 ULK1 kinase complex(ATG1 complex)의 활성화에서 시작한다. mTORC1이 활성화되면 ULK1을 인산화·불활성화하여 오토파지를 억제하고, AMPK가 활성화되면 mTORC1을 억제하고 ULK1을 직접 활성화하여 오토파지를 유도한다. Beclin-1(ATG6)은 PI3K class III complex의 핵심 구성요소로 autophagosome 형성 개시에 필수적이다. cargo receptor인 p62(SQSTM1)와 NBR1은 기질을 autophagosome으로 선별적으로 전달한다.

## 핵심 원리

- **mTOR-오토파지 축**: mTORC1 활성화 → ULK1 억제 → 오토파지 억제; mTOR 억제(영양 결핍, 라파마이신) → 오토파지 유도
- **AMPK-ULK1 축**: 에너지 부족 → AMPK 활성화 → ULK1 S317/S777 인산화 → 오토파지 활성화
- **MHC-I 분해**: 췌장암(PDAC)에서 오토파지 cargo receptor NBR1이 MHC class I을 autophagosome으로 전달 → lysosomal 분해 → 암세포 표면의 항원 제시 소실 → CD8+ T 세포 회피
- **chloroquine(CQ)/hydroxychloroquine**: lysosome의 산성화 억제 → autophagosome-lysosome 융합 방해 → MHC-I 복원 → CD8+ T 세포 반응 회복 → ICB와 시너지
- **PD-L1 조절**: 오토파지 플럭스(flux) 상태에 따라 PD-L1 발현이 안정화 또는 분해되는 방향으로 조절; 세포 맥락 의존적
- **TP53-mTOR-오토파지 축**: TP53 소실 → mTORC1 지속 활성화 → 오토파지 억제 → 면역 억제적(immune-cold) TME 형성 (MSS 대장암)
- **T 세포 오토파지**: T 세포 자체에서도 오토파지가 활성화 및 기억 T 세포 형성에 필수적

## 위키 내 관련 논문

### MHC-I 분해 및 면역 회피
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — 오토파지-NBR1-MHC-I 분해 축; chloroquine + 이중 ICB 시너지 (Nature 2020)

### 오토파지-면역 복합 기전 리뷰
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]] — 오토파지의 종양 면역 회피 및 면역치료에서의 역할 종합 리뷰 (Molecular Cancer 2025)

### mTOR-오토파지 연계
- [[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]] — TP53 소실 → mTORC1 과활성 → 오토파지 억제 → 면역 냉각(immune-cold) 대장암 형성

## 관련 개념

- [[mTOR-signaling]]
- [[immune-evasion]]
- [[pancreatic-cancer]]
- [[immunotherapy]]
- [[tumor-microenvironment]]
- [[drug-resistance]]
- [[kinase-signaling]]
