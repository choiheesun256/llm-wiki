---
title: "Day 11: 면역 회피 — 암이 면역계를 속이는 방법"
draft: false
---

## 암 면역 감시와 면역편집

면역계는 끊임없이 비정상적인 세포를 탐지하고 제거한다. 그러나 암은 이 감시 체계를 돌파하거나 무력화하여 살아남는다. 이 과정을 **cancer immunoediting**이라 하며, 세 단계로 구성된다: **제거(elimination)**, **균형(equilibrium)**, **탈출(escape)**. 제거 단계에서는 면역계가 암세포를 성공적으로 파괴한다. 균형 단계에서는 암세포와 면역계 사이에 동적 균형이 유지되며, 암은 존재하지만 증식하지 못한다. 탈출 단계에서 암세포는 면역 인식을 회피하는 능력을 획득하여 임상적으로 검출 가능한 종양으로 성장한다.

**Cancer immunity cycle**은 항암 면역 반응의 연쇄적 과정을 기술한다: (1) 암세포 사멸과 종양 항원 방출, (2) 수지상세포(DC)에 의한 항원 포획과 처리, (3) DC의 림프절 이동과 T 세포 활성화, (4) 활성화된 T 세포의 종양 귀소(homing), (5) T 세포의 종양 침윤, (6) 암세포 인식과 사멸. 암은 이 사이클의 각 단계를 방해하는 다양한 전략을 진화시켰다.

---

## PD-L1/PD-L2 축: 발현 조절의 분자 메커니즘

**PD-L1(CD274, B7-H1)**은 암세포와 면역세포 표면에서 발현되어, T 세포의 PD-1 수용체와 결합함으로써 T 세포 활성을 억제하는 면역 체크포인트 리간드다. PD-L1 발현을 차단하는 항체(atezolizumab, durvalumab)와 PD-1을 차단하는 항체(pembrolizumab, nivolumab)는 이미 여러 암종에서 표준 치료로 자리잡았다. 그러나 이 치료에 반응하는 환자는 여전히 소수다. PD-L1의 발현과 기능을 정밀하게 조절하는 분자 메커니즘을 이해하는 것은 면역치료의 효율을 높이기 위한 핵심 과제다.

### 당화(Glycosylation)에 의한 안정화

PD-L1의 세포외 도메인(extracellular domain)에는 N-연결 당화(N-linked glycosylation) 부위가 여러 개 존재한다. 당화는 PD-L1 단백질의 구조적 안정성을 높이고, PD-1과의 결합 친화도를 증가시키며, 리소솜 분해(lysosomal degradation)로부터 단백질을 보호한다. PD-L2도 유사한 조절을 받으며, [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion|Xu 2021]]은 PD-L2의 당화가 면역 회피를 직접 촉진함을 보였다. 이 연구는 당화 효소(glycosyltransferase) 억제가 PD-L2 기능을 약화시켜 면역 반응을 복원할 수 있음을 시사한다.

### 팔미토일화(Palmitoylation)에 의한 분해 방지

**Palmitoylation**은 단백질의 시스테인 잔기에 팔미트산(palmitic acid, C16)이 공유결합으로 붙는 지질화(lipidation) 수식이다. 이 수식은 단백질의 막 결합을 강화하고, 특정 지질 래프트(lipid raft) 도메인으로의 국소화를 유도하며, 단백질의 안정성에 영향을 미친다.

[[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation|Yan 2025]]는 면역 체크포인트 리간드인 **B7-H4(VTCN1)**의 palmitoylation이 리소솜 분해 경로로부터 단백질을 보호한다는 메커니즘을 규명했다. B7-H4는 PD-L1과 유사하게 T 세포 억제 기능을 갖는 B7 패밀리 분자로, 특히 PD-L1 음성인 종양에서 면역 억제의 대안적 축으로 기능한다. Palmitoylation을 매개하는 효소(DHHC family)의 억제는 B7-H4의 분해를 가속화하여 면역 회피를 차단하는 새로운 치료 전략의 근거가 된다.

### 유비퀴틴화(Ubiquitination)에 의한 분해 촉진

단백질 분해의 반대 방향에서, **E3 ubiquitin ligase**들은 PD-L1에 유비퀴틴을 붙여 프로테아솜(proteasome) 또는 리소솜 분해를 유도한다. [[yang-2022-enhancing-pd-l1-degradation-itch-during|Yang 2022]]는 HECT 도메인 E3 ligase인 **ITCH**가 PD-L1의 K48-linked 다중유비퀴틴화를 매개하여 PD-L1 발현을 억제함을 보였다. ITCH 활성 유지—혹은 ITCH 억제를 해제하는 것—가 종양 내 PD-L1 수준을 조절하는 전략이 될 수 있다.

이처럼 PD-L1/PD-L2의 세포 표면 발현 수준은 단순히 전사 수준에서만 결정되는 것이 아니라, 번역 후 수식의 복잡한 균형—당화에 의한 안정화, palmitoylation에 의한 분해 방지, ubiquitination에 의한 분해 촉진—에 의해 정교하게 조율된다.

---

## Autophagy와 면역 회피

**Autophagy(자가포식)**는 세포 내 손상된 단백질이나 소기관을 리소솜으로 운반하여 분해하는 세포 내 품질 관리 시스템이다. 암에서 autophagy는 맥락에 따라 종양 억제적 역할과 종양 촉진적 역할을 모두 할 수 있으며, 특히 면역 회피와의 관계는 복잡하다.

### MHC-I 분해와 항원 제시 회피

세포독성 T 세포(cytotoxic T lymphocyte, CTL)는 암세포의 **MHC-I(Major Histocompatibility Complex class I)** 분자가 제시하는 종양 항원 펩타이드를 인식함으로써 암세포를 식별한다. 따라서 MHC-I 발현을 낮추거나 상실하는 것은 T 세포 인식을 회피하는 가장 직접적인 전략이다.

[[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic|Yamamoto 2020]]은 췌장암에서 autophagy가 MHC-I 복합체를 선택적으로 lysosome으로 격리하여 분해함으로써 항원 제시를 억제하는 메커니즘을 발견했다. 이 과정에서 selective autophagy receptor인 **NBR1**이 MHC-I를 autophagosome으로 유도하는 데 핵심 역할을 한다. Autophagy 억제(chloroquine, hydroxychloroquine)는 MHC-I 발현을 회복시켜 면역 인식을 강화할 수 있다는 치료적 가능성을 제시했다.

[[wang-2025-autophagy-tumor-immune-escape-immunotherapy|Wang 2025]]는 autophagy가 면역 회피에 기여하는 다양한 메커니즘—MHC-I 분해뿐 아니라 cytokine 분비 조절, 면역세포 기능에 대한 영향, 면역원성 세포사멸(immunogenic cell death) 억제—을 포괄적으로 리뷰하고, autophagy 억제와 면역치료의 병용 전략의 근거를 정리했다.

---

## 후성유전적 면역 회피

후성유전적 기제(epigenetic mechanism)는 DNA 서열을 변경하지 않고 유전자 발현을 조절한다. 암세포는 후성유전적 변화를 통해 면역 인식에 필요한 유전자들—MHC, 항원 처리 관련 유전자(APM gene), 면역 자극 사이토카인—의 발현을 억제한다.

### KDM5B: 히스톤 탈메틸화효소와 면역 억제

**KDM5B(JARID1B)**는 히스톤 H3의 4번 라이신의 트리- 및 다이메틸화(H3K4me3/me2)를 제거하는 히스톤 탈메틸화효소(histone demethylase)다. H3K4me3는 전사 활성 유전자의 프로모터에 풍부하게 존재하는 활성화 마크이므로, KDM5B의 활성은 표적 유전자의 전사를 억제한다.

[[zhang-2021-kdm5b-promotes-immune-evasion-recruiting|Zhang 2021]]은 KDM5B가 인터페론(IFN) 신호 전달 유전자들의 프로모터에 직접 결합하여 H3K4me3를 제거함으로써, IFN-γ에 의한 MHC-I 상향조절을 차단함을 보였다. 즉 KDM5B는 "면역 인식에 필요한 유전자들을 후성유전적으로 침묵시키는" 역할을 한다. KDM5B 억제제는 이 침묵을 해제하여 면역 인식을 회복할 수 있는 잠재적 치료 표적이다.

### SOX17과 초기 암의 면역 탈출

면역 회피는 진행된 암에서만 일어나는 것이 아니다. [[goto-2024-sox17-enables-immune-evasion-early|Goto 2024]]는 전사인자 **SOX17**이 초기 암(early cancer)에서 면역 회피 프로그램을 활성화하는 메커니즘을 연구했다. SOX17은 PD-L1 및 다른 면역 억제 분자들의 전사를 직접 촉진하는 동시에, 면역원성 항원 제시 경로를 억제한다. 이 발견은 면역 회피가 암의 초기 발달 단계부터 이미 진화하기 시작함을 시사하며, 조기 개입의 필요성을 강조한다.

---

## 미량 원소와 PD-L1 조절: 동(Copper)의 역할

생물학적 금속 이온이 암 면역 회피에 기여할 수 있다는 새로운 관점이 등장했다. **Copper(Cu, 동)**는 다양한 효소의 보조인자로 기능하는 필수 미량 원소다. 종양 조직에서 copper 농도는 정상 조직보다 높은 경우가 많으며, 이는 단순한 상관관계가 아니라 기능적 의미를 가진다.

[[voli-2020-intratumoral-copper-modulates-pd-l1-expression|Voli 2020]]은 종양 내 copper 수준이 암세포의 PD-L1 발현을 직접 조절함을 보였다. 메커니즘적으로, copper는 PD-L1 프로모터 영역에서의 전사 인자 활성을 조절하거나, PD-L1 단백질 안정성에 영향을 주는 후성유전적 경로를 통해 작용한다. 흥미롭게도, copper 킬레이터(chelator) 처리는 종양 내 PD-L1 발현을 낮추고 항종양 면역 반응을 증강시켰다. 이는 copper 대사 조절이 면역치료 증강을 위한 병용 전략으로 활용될 수 있는 가능성을 열어준다.

---

## 면역 회피 극복 전략

면역 회피 메커니즘의 다양성은 그에 상응하는 다층적 치료 전략을 요구한다.

**1. Checkpoint Blockade의 확장**: PD-1/PD-L1 외에도 CTLA-4, LAG-3, TIM-3, TIGIT 등 다양한 억제성 체크포인트 수용체들이 존재한다. 이들의 병용 차단은 단독 치료보다 강력한 면역 활성화를 유도할 수 있다.

**2. 후성유전적 조절제와의 병용**: DNA methyltransferase 억제제(5-azacytidine)나 HDAC 억제제는 침묵화된 면역 관련 유전자를 재활성화하여 checkpoint blockade에 대한 반응성을 높일 수 있다. KDM5B 억제제와의 병용도 유망한 방향이다.

**3. Autophagy 억제**: Autophagy 억제는 MHC-I 발현을 회복하고 immunogenic cell death를 증진하여 면역치료의 효과를 강화할 수 있다. 임상적으로 사용 가능한 hydroxychloroquine과의 병용 연구가 진행 중이다.

**4. 번역 후 수식 표적화**: PD-L1의 당화 억제, ITCH-매개 ubiquitination 촉진, 혹은 DHHC 효소 억제를 통한 palmitoylation 차단은 체크포인트 리간드의 발현을 전사 수준을 우회하여 직접 감소시키는 전략이다.

**5. 종양 항원성 회복**: 네오항원(neoantigen)의 발현을 강화하거나 항원 처리 기계(antigen processing machinery, APM)를 회복시키는 전략은 T 세포 인식의 표적을 다시 드러내는 방향이다.

---

## 참고문헌

- [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion|Xu 2021]] — PD-L2 당화에 의한 면역 회피 촉진
- [[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation|Yan 2025]] — B7-H4 palmitoylation과 리소솜 분해 방지
- [[yang-2022-enhancing-pd-l1-degradation-itch-during|Yang 2022]] — ITCH E3 ligase에 의한 PD-L1 유비퀴틴화 분해
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic|Yamamoto 2020]] — 췌장암에서 autophagy-MHC-I 분해 메커니즘
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy|Wang 2025]] — Autophagy와 면역 회피 포괄 리뷰
- [[zhang-2021-kdm5b-promotes-immune-evasion-recruiting|Zhang 2021]] — KDM5B 히스톤 탈메틸화효소와 후성유전적 면역 억제
- [[goto-2024-sox17-enables-immune-evasion-early|Goto 2024]] — SOX17과 초기 암의 면역 탈출
- [[voli-2020-intratumoral-copper-modulates-pd-l1-expression|Voli 2020]] — 종양 내 copper와 PD-L1 발현 조절
