---
title: "Day 6: Phosphoproteomics & Kinase 신호전달"
draft: false
---

# Day 6: Phosphoproteomics & Kinase 신호전달

## Big Picture

Kinase 신호전달은 사실상 모든 암 hallmark — 증식, 생존, 대사, 이동, 면역 회피 — 을 구동한다. 그러나 kinase 활성 측정은 간단하지 않다: 단백질 양은 활성 상태를 반영하지 않고, 전사체는 번역후 조절을 포착할 수 없다. **Phosphoproteomics** — 질량분석 기반 인산화 부위 측정 — 는 kinase 활성의 직접적 판독을 제공하며 종양 내 신호전달 네트워크 수준의 이해를 가능하게 한다.

## 핵심 개념

**Kinase 활성 추론** — Kinase 자체의 양으로는 활성을 알 수 없다. 대신 하류 기질의 인산화 상태로 활성을 추론한다. 다양한 통계 방법이 있으며, 기질 주석 데이터베이스의 선택이 결과에 크게 영향을 미친다.

**Dark phosphoproteome** — 검출된 인산화 부위의 ~10%만 상류 kinase가 알려져 있다. 나머지 ~90%가 "dark phosphoproteome"으로, 탐사되지 않은 방대한 신호전달 생물학 공간이다.

**PTM vs. 단백질 양** — 인산화 부위 변화가 kinase 활성 증가 때문인지, 단순히 단백질 총량이 늘었기 때문인지 구분하는 것이 통계적 과제다(MSstatsPTM이 해결).

## 논문별 정리

### Hijazi 2020 — Phosphoproteomics에서 kinase 네트워크 재구성
→ [[cancer/hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics]]

EBDT 알고리즘과 ChemPhoPro 데이터베이스(>6,000 인산화-약물-표적 관계, 103개 kinase) 도입. 큐레이션된 kinase-기질 데이터베이스에 의존하지 않고, 억제제 선택성 프로파일로 인산화 부위를 상류 kinase에 할당한다. 핵심 발견: 유방암에서 PI3K-MAPK 역상관이 네트워크 재배선을 보여주며, 단일제 PI3Ki의 제한적 효능을 설명한다.

### Muller-Dott 2025 — benchmarKIN: Kinase 활성 추론 모범 사례
→ [[cancer/muller-dott-2025-phosphoproteomic-kinase-activity-inference]]

benchmarKIN R 패키지로 kinase 활성 추론 방법론을 체계적으로 벤치마크:
- **z-score normalization** + 큐레이션된 조합 라이브러리(PhosphoSitePlus + PTMsigDB + GPS gold)가 일관되게 최고 성능
- Kinase 활성 점수가 **단백질 양보다 약물 반응을 더 잘 예측**
- Site-centric과 activity-centric 평가 프레임워크 모두 필요

Phosphoproteomics에서 kinase 활성 분석을 수행하는 누구에게나 참조 논문이다.

### Jiang 2025 — Dark cancer phosphoproteome
→ [[cancer/jiang-2025-dark-cancer-phosphoproteome-coregulation]]

CoPheeMap: 1,195개 CPTAC 종양의 26,280 인산화 부위에 대한 XGBoost 기반 공조절 네트워크(AUROC 0.78). CoPheeKSA: dark phosphoproteome의 26개 미연구 kinase를 커버하는 kinase-기질 예측기(AUROC 0.95). CDK12가 치료적으로 관련된 미연구 kinase로 식별 — **Day 5**의 CDK12/BRCAness 이야기와 연결된다. Dark phosphoproteome을 체계적으로 매핑한 최초의 기계학습 접근이다.

### Kohler 2023 — MSstatsPTM: PTM과 단백질 양 분리
→ [[cancer/kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational]]

인산화 부위 변화가 kinase 활성 증가 때문인지 단백질 총량 증가 때문인지를 구분하는 근본적 문제를 해결하는 R/Bioconductor 패키지. 선형 혼합 효과 모델로 보정된 log2FC = Δ_PTM − Δ_protein 계산. Spike-in 벤치마크에서 위양성률을 20.88%에서 1.84%로 감소. Phosphoproteomics를 포함하는 모든 proteogenomic 분석에 필수적이다.

### Manning 2017 — AKT/PKB 신호전달 네트워크
→ [[cancer/manning-2017-aktpkb-signaling-navigating-network]]

AKT를 네트워크 허브로 다룬 포괄적 리뷰: 이중 막 활성화(PIP3/PI3,4P2), 핵심 effector 노드(GSK3, FoxO, TSC-mTORC1), 음성 피드백 루프(S6K → IRS1/GRB10), SGK·S6K와의 AGC kinase 중복성. 핵심 통찰: AKT는 선형 relay가 아니라 **어떤 isoform이 활성이고 어떤 feedback이 작동하느냐에 따라** 출력이 달라지는 맥락 의존적 네트워크 허브다.

### Steinberg 2023 — AMPK: 맥락 의존적 암 역할
→ [[cancer/steinberg-2023-new-insights-activation-function-ampk]]

AMPK는 다양한 비정규 경로로 활성화: 포도당/aldolase/v-ATPase 감지, DNA 손상/CaMKK2, 리소좀 손상/GAL9-TAK1. 암에서의 역설: 암 예방 단계에서는 종양 억제적(대사 checkpoint)이지만, 이미 형성된 종양에서 대사 스트레스 하에서는 종양 촉진적(생존 지원). 이 맥락 의존성이 치료적 표적화를 복잡하게 만든다.

### Kudaravalli 2022 — p38 MAPK와 암 줄기세포
→ [[cancer/kudaravalli-2022-role-p38-map-kinase-cancer]]

p38 MAPK(4개 isoform: α/β/γ/δ)는 p38α-FOXC2(Ser367)-ZEB1 축을 통한 cancer stem cell(CSC) 유지의 수렴점. 맥락 의존적: p38γ는 Nanog/SOX2/OCT3/4을 통해 CSC를 촉진하고, p38γ/δ 소실은 SOX2 분해를 활성화(anti-CSC). p38 억제제 + 항암제 병용이 잔여 CSC를 제거할 수 있다.

## 방법론 지형

| 도구 | 기능 | 핵심 장점 |
|------|------|----------|
| EBDT/ChemPhoPro | 약물 중심 kinase 할당 | Kinase-기질 DB 불필요 |
| benchmarKIN | Kinase 활성 추론 벤치마크 | 모범 사례 권고 |
| CoPheeMap/CoPheeKSA | Dark phosphoproteome 매핑 | 미연구 kinase 커버 |
| MSstatsPTM | PTM vs. 단백질 양 보정 | 양 혼동 제거 |

## Day 간 연결

- **Day 5**: CDK12가 dark phosphoproteome에 등장 — 기질 공조절로 활성 추론 가능
- **Day 7**: CPTAC 연구가 이 방법론들이 분석하는 phosphoproteomics 데이터를 제공
- **Day 3–4**: EGFR, KRAS 내성의 기저인 kinase 네트워크 재배선을 측정하는 레이어
- **Day 2**: Fork stabilization PARPi 내성에 ATR/CHK1 kinase cascade가 관여

## 핵심 메시지

Phosphoproteomics는 암 생물학을 유전자 중심에서 **신호전달 중심** 관점으로 전환한다. Kinase 활성이 약물 반응을 예측하고, dark phosphoproteome이 새로운 치료 표적의 최전선이며, MSstatsPTM 같은 통계 보정이 위양성 방지에 필수적이다. 암 proteogenomics를 한다면 **kinase 활성 추론을 동반한 phosphoproteomics가 표준 레이어**가 되어야 한다.
