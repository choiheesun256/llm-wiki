---
title: "mTOR Signaling"
type: concept
updated: 2026-05-19
---

# mTOR 신호 경로 (mTOR Signaling)

## 정의

mTOR(mechanistic target of rapamycin)은 세린/트레오닌 키나아제로, 세포의 영양 상태, 에너지, 산소, 성장 인자 신호를 통합하여 단백질 합성, 지질 합성, 자가소화(autophagy), 세포 주기 등을 조절하는 중앙 신호 허브이다. mTOR은 두 개의 기능적으로 구별되는 복합체를 형성한다: mTORC1(mTOR + RAPTOR + mLST8 등)은 라파마이신(rapamycin)에 감수성이 있으며 단백질 합성(S6K1, 4E-BP1 인산화)과 autophagy 억제를 조절한다. mTORC2(mTOR + RICTOR + mLST8 등)는 라파마이신에 상대적으로 내성이 있으며 AKT Ser473 인산화와 세포골격 재편을 담당한다.

암에서 mTOR 신호는 PI3K-AKT 경로 활성화, PTEN 소실, TSC1/TSC2 돌연변이, 성장 인자 수용체 과활성화 등 다양한 기전으로 구성적(constitutive) 활성화 상태가 되며, 세포 증식과 생존, 약물 내성에 기여한다. 또한 TP53 소실은 mTORC1의 지속적 활성화와 autophagy 억제를 통해 면역 억제적 TME를 조성한다. 임상에서 mTOR 억제제(rapalogs: everolimus, temsirolimus)는 신장암, 유방암(HR+), 신경내분비종양 등에서 승인되어 사용된다.

## 핵심 원리

- **mTORC1 기질**: S6K1(S6 kinase 1)과 4E-BP1이 대표 기질; S6K1 활성화는 단백질 합성 촉진, 4E-BP1 인산화는 eIF4E 해방 → cap-의존 번역 증가
- **mTORC2 기질**: AKT Ser473 인산화(완전 활성화); SGK1, PKC-α 활성화; 세포 생존 및 대사 조절
- **AMPK-mTOR 길항**: 에너지 고갈 → AMPK 활성화 → TSC2 인산화 → RHEB GDP 결합 → mTORC1 억제; 저혈당, 저산소증, metformin 등이 이 경로를 통해 mTOR 억제
- **라파마이신 피드백**: 라파마이신(allosteric mTORC1 억제제)으로 S6K1 억제 시 IRS-1에 대한 부정적 피드백이 해제 → PI3K/AKT 활성화(피드백 루프); mTORC2 억제는 제한적
- **rapalogs (everolimus, temsirolimus)**: mTORC1의 allosteric 억제제; 신장암, 유방암(HR+), NET에서 임상 사용
- **이중 mTOR 억제제**: ATP 경쟁적으로 mTORC1과 mTORC2 동시 억제; 피드백 루프 차단 효과
- **Chr 7q 증폭-mTOR 축**: 신장암에서 7번 염색체 장완 증폭 → mTOR 기질 인산화 증가 → sunitinib 내성 기전
- **TP53-mTOR-autophagy 삼자 연결**: TP53 소실 → mTORC1 지속 활성화 → autophagy 억제 → 면역 억제(immune-cold) TME; mTOR 억제제 + ICI 병용 전략의 근거

## 위키 내 관련 논문

### mTOR와 약물 내성
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — 신장암 sunitinib 내성에서 Chr 7q 증폭 → mTOR 기질 인산화 기전; multi-omics ROC-AUC 0.98 분류기
- [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] — IGF1R/PI3K/AKT/mTOR 우회 경로에 의한 osimertinib 내성

### mTOR 억제제 임상 응용
- [[ji-2023-pharmaco-proteogenomic-characterization-liver-cancer]] — 간암 mTOR 활성 아형에서 temsirolimus + lenvatinib 시너지; 오가노이드 pharmaco-proteogenomics

### mTOR-autophagy-면역 축
- [[lee-2026-tp53-loss-mtorc1-immune-cold-colorectal-cancer]] — TP53 소실 → mTORC1 과활성 → autophagy 억제 → MSS 대장암 immune-cold TME; mTOR 억제 + ICI 조합 제안
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]] — mTOR/AMPK/ULK1/Beclin-1 조절과 오토파지-면역 회피 연계 종합 리뷰

## 관련 개념

- [[autophagy]]
- [[kinase-signaling]]
- [[EGFR]]
- [[KRAS]]
- [[drug-resistance]]
- [[precision-oncology]]
- [[immune-evasion]]
- [[phosphoproteomics]]
