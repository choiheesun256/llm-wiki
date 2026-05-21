---
title: "Day 6: Phosphoproteomics & Kinase 신호전달"
draft: false
---

# Day 6: Phosphoproteomics & Kinase 신호전달

암은 본질적으로 신호전달의 질병이다. 세포 증식, 생존, 대사, 이동, 면역 회피라는 암의 핵심 특성들은 모두 비정상적인 kinase 신호에 의해 구동된다. 따라서 kinase 신호전달 네트워크를 어떻게 측정하고 해석하느냐는 암 연구의 중심 과제 중 하나다. 그런데 한 가지 근본적인 문제가 있다 — kinase의 발현량은 활성 상태를 알려주지 않는다는 것이다. 이 장에서는 kinase 신호를 직접 측정하는 기술인 **phosphoproteomics**의 원리와 한계, 그리고 이를 통해 암 생물학에서 얻을 수 있는 교훈들을 체계적으로 살펴본다.

## 1. 왜 인산화가 중요한가 — 세포 신호전달의 화폐

인산화(phosphorylation)는 세포 신호전달에서 가장 광범위하게 사용되는 번역후 변형(post-translational modification, PTM)이다. 인간 proteome에는 약 20,000개의 단백질이 있고, 이 중 약 540개가 kinase다. 인간 세린/트레오닌/티로신 인산화 부위의 총 수는 수십만 개에 달하는 것으로 추산된다.

인산화가 신호전달의 "화폐"인 이유는 그 속도와 가역성 때문이다. Kinase가 기질을 인산화하는 데는 밀리초 수준의 시간이 걸리고, phosphatase가 인산기를 제거하는 것도 마찬가지다. 이 빠른 켜고 끄기가 세포로 하여금 외부 신호에 거의 즉각적으로 반응할 수 있게 한다. 또한 인산화는 단백질의 입체구조를 바꾸어 활성을 변경하거나, 특정 단백질 도메인(SH2, 14-3-3 등)에 대한 결합 부위를 만들거나, 단백질의 분해를 촉진하거나 억제하는 등 다양한 방식으로 세포 운명을 조절한다.

암에서 kinase 신호는 여러 층위에서 비정상적으로 활성화된다. 유전자 증폭(예: ERBB2), 활성화 변이(예: KRAS G12D, BRAF V600E), 종양 억제 단백질 소실(예: PTEN 소실로 인한 PI3K 과활성화), 그리고 수용체의 과발현이 그 예다. 이 모든 사건들은 결국 kinase 신호 네트워크의 재배선(rewiring)으로 이어지며, 특정 경로의 만성적 과활성화가 암 세포의 특성을 만든다.

## 2. Phosphoproteomics란 — 질량분석 기반 인산화 측정의 원리

Phosphoproteomics는 특정 시점에 세포나 조직 내의 모든 인산화 부위를 망라적으로 측정하는 기술이다. 이를 통해 수천 개의 인산화 부위를 동시에 정량화하여 신호전달 네트워크의 전체 지형을 파악할 수 있다.

실험적 워크플로우를 간략히 살펴보면 다음과 같다. 먼저 세포 또는 조직에서 단백질을 추출하고 트립신으로 펩타이드로 분해한다. 인산화 펩타이드는 전체 펩타이드의 매우 작은 비율(~1–5%)을 차지하므로, 측정 감도를 높이기 위해 **TiO2**, **Fe³⁺-IMAC**, 또는 **Ti⁴⁺-IMAC** 같은 금속 친화성 크로마토그래피로 인산화 펩타이드를 농축한다. 농축된 펩타이드를 액체 크로마토그래피-질량분석(LC-MS/MS)으로 분리·측정하고, 데이터베이스 검색을 통해 각 펩타이드의 서열과 인산화 부위를 동정한다.

현대의 mass spectrometry는 단일 실험에서 수천에서 수만 개의 인산화 부위를 측정할 수 있다. CPTAC(Clinical Proteomic Tumor Analysis Consortium) 같은 대규모 proteogenomics 프로젝트는 수백 개의 종양 샘플에 걸친 phosphoproteome 데이터를 생성하여 암 특이적 신호 패턴을 분석하는 데 활용된다.

그러나 phosphoproteomics 데이터를 해석하는 것은 단순히 어느 부위가 인산화되었는지 아는 것 이상을 요구한다. 핵심 질문은 "어느 kinase가 이 인산화를 일으켰는가?"이며, 이것이 다음 절에서 다룰 kinase 활성 추론의 문제다.

## 3. Kinase 활성 추론 — 기질 인산화로 Kinase 활성을 읽는 방법

Kinase의 활성을 직접 측정하기는 어렵다. 단백질 양은 활성을 반영하지 않는다 — kinase는 인산화, 단백질 상호작용, 세포 내 위치 등에 따라 같은 발현 수준에서도 완전히 다른 활성을 가질 수 있다. 따라서 연구자들은 **하류 기질의 인산화 상태**로부터 kinase 활성을 역추론(reverse inference)하는 방법을 사용한다.

이 접근법의 논리는 다음과 같다: 특정 kinase가 알려진 기질들(예: AKT의 기질 RPS6KB1, GSK3, FOXO1)의 인산화가 동시에 증가해 있다면, 그것은 AKT 자체가 활성화되어 있다는 증거다. 기질들의 집합적 인산화 변화를 통계적으로 요약하면 kinase 활성 점수를 얻을 수 있다.

그런데 이 방법에는 중요한 실용적 선택지가 있다 — 어떤 kinase-기질 데이터베이스를 사용하는가? [[hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics|Hijazi 2020]]은 기존의 큐레이션된 kinase-기질 데이터베이스에 의존하는 대신 전혀 다른 접근법을 제안했다. 이들은 **EBDT(Empirical Bayesian Differential analysis of Triple factor) 알고리즘**과 **ChemPhoPro 데이터베이스**(6,000개 이상의 인산화-약물-표적 관계, 103개 kinase 포괄)를 결합했다. 핵심 아이디어는 화학적 kinase 억제제의 선택성 프로파일을 이용하여 인산화 부위를 상류 kinase에 할당하는 것이다. 약물 처리 후 어느 인산화 부위가 감소했는지를 보면 그 약물의 표적 kinase가 어떤 부위를 인산화하는지 알 수 있다는 논리다.

이 방법을 유방암에 적용했을 때 흥미로운 발견이 나왔다. PI3K 경로와 MAPK 경로의 활성이 역상관(inverse correlation)을 보이는 종양 부분집단이 있었다 — 한 경로가 높으면 다른 경로가 낮은 패턴이다. 이는 종양 내에서 두 경로가 서로 보상적으로 작동하는 **네트워크 재배선**을 시사하며, 단일 PI3K 억제제가 왜 충분하지 않은지를 설명한다.

[[muller-dott-2025-phosphoproteomic-kinase-activity-inference|Müller-Dott 2025]]는 이 문제를 더 체계적으로 다루었다. 이들은 **benchmarKIN** R 패키지를 개발하여 다양한 kinase 활성 추론 방법론을 표준화된 벤치마크로 비교했다. 결론은 명확했다: **z-score 정규화** 방법에 **PhosphoSitePlus + PTMsigDB + GPS gold**의 조합 라이브러리를 사용하는 것이 일관되게 최고의 성능을 보였다. 그리고 결정적으로, kinase 활성 점수는 단백질 발현량보다 **약물 반응을 더 잘 예측**했다. 이는 proteomics 데이터를 활용한 정밀 종양학에서 phosphoproteomics가 단순한 proteomics를 보완하는 것을 넘어 필수 레이어임을 의미한다.

## 4. Dark Phosphoproteome — 90%의 미지 영역과 기계학습 접근

Phosphoproteomics의 가장 도전적인 현실은 우리가 측정하는 인산화 부위의 대다수를 이해하지 못한다는 것이다. 현재 검출되는 인산화 부위 중 상류 kinase가 알려진 것은 약 **10%**에 불과하다. 나머지 90%가 **dark phosphoproteome** — 거대하고 탐사되지 않은 신호전달 생물학의 영역이다.

Dark phosphoproteome이 존재하는 이유는 여러 가지다. 실험적 kinase-기질 검증은 노동집약적이고 시간이 많이 걸린다. 또한 kinase-기질 관계는 세포 유형, 발달 단계, 맥락에 따라 달라지므로 단일 실험 조건에서 얻은 데이터가 일반화되지 않을 수 있다. 결과적으로 모델 생물에서 잘 연구된 일부 kinase(AKT, ERK, CDK 등)에 대한 지식은 풍부한 반면, 대부분의 kinase는 기질이 거의 알려져 있지 않다.

[[jiang-2025-dark-cancer-phosphoproteome-coregulation|Jiang 2025]]는 이 문제를 기계학습으로 접근하는 두 개의 도구를 제시했다. 첫째, **CoPheeMap**은 1,195개 CPTAC 종양 샘플에서 측정된 26,280개의 인산화 부위 간의 공조절(coregulation) 패턴을 XGBoost로 학습한 네트워크다(AUROC 0.78). 서로 같은 kinase에 의해 조절되는 부위들은 비슷한 패턴으로 오르내릴 것이라는 논리다. 둘째, **CoPheeKSA**는 이 공조절 패턴을 기반으로 dark phosphoproteome의 26개 미연구 kinase를 포함한 kinase-기질 관계를 예측한다(AUROC 0.95).

이 분석에서 특히 주목할 만한 발견이 있다. **CDK12**가 치료적으로 관련된 미연구 kinase로 식별됐다. CDK12는 기존에 RNA Pol II CTD kinase로 알려져 있었지만, 이 기계학습 분석은 CDK12가 예측 가능한 기질 공조절 네트워크를 가진다는 것을 보여주었다. 이는 앞 장에서 살펴본 CDK12/BRCAness 이야기와 직접 연결된다 — CDK12 활성을 phosphoproteomics로 추론하면 BRCAness 상태를 기능적으로 측정하는 바이오마커가 될 수 있다.

## 5. 통계적 과제 — PTM 변화 vs. 단백질 총량 (MSstatsPTM)

Phosphoproteomics 데이터를 해석할 때 반드시 직면하게 되는 근본적인 통계 문제가 있다. 특정 단백질의 인산화 수준이 증가했을 때, 이것이 **kinase 활성이 높아졌기 때문인가**, 아니면 단순히 **그 단백질의 총 발현량이 늘었기 때문인가**? 이 두 가지는 전혀 다른 생물학적 의미를 갖지만, 인산화 데이터만 보면 구분할 수 없다.

예를 들어, 어떤 종양에서 AKT의 Ser473 인산화가 2배 증가했다고 하자. 이것이 PI3K-AKT 신호가 실제로 강해진 것을 의미할 수도 있지만, AKT 단백질 자체가 2배 더 발현됐기 때문일 수도 있다. 전자는 kinase 활성 변화이고 후자는 단백질 발현 변화다. 임상적으로 이 둘은 완전히 다른 치료 전략을 시사한다.

[[kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational|Kohler 2023]]은 이 문제를 해결하기 위한 **MSstatsPTM** R/Bioconductor 패키지를 개발했다. 방법론적 핵심은 선형 혼합 효과 모델(linear mixed-effects model)을 사용하여 인산화 변화에서 단백질 총량 변화를 보정하는 것이다. 수식으로 표현하면:

**보정된 log2FC = Δ_PTM − Δ_protein**

이 보정의 효과는 극적이다. Spike-in 벤치마크 실험에서 보정 전 위양성률이 20.88%였던 것이 보정 후 1.84%로 감소했다. 즉, 보정 없이는 다섯 개 중 하나가 가짜 양성 신호다. Phosphoproteomics를 포함하는 모든 proteogenomics 분석에서 이 보정 단계는 선택이 아니라 필수다.

MSstatsPTM이 중요한 또 다른 이유는 CPTAC 같은 대규모 proteogenomics 연구들이 기본적으로 전체 proteome과 phosphoproteome 데이터를 함께 생성하기 때문에, 이 두 층위의 데이터를 올바르게 통합하는 통계 프레임워크가 필요하다는 것이다.

## 6. 주요 Kinase 경로들 — AKT, AMPK, p38 MAPK의 맥락 의존성

Phosphoproteomics로 측정할 수 있는 kinase 경로들 중 암 치료에서 가장 중요한 세 가지를 살펴보자. 세 경로 모두 단순한 "켜짐/꺼짐" 스위치가 아니라 맥락에 따라 전혀 다른 방향으로 작동하는 복잡한 네트워크다.

### AKT/PKB — 암의 가장 흔한 과활성 kinase

AKT는 가장 많은 암에서 과활성화된 kinase다. PTEN 소실, PIK3CA 변이, 수용체 tyrosine kinase 과활성화 등 다양한 상류 사건들이 PI3K-AKT 경로를 만성적으로 켜놓는다. [[manning-2017-aktpkb-signaling-navigating-network|Manning 2017]]은 AKT를 단선적 relay 경로가 아닌 **맥락 의존적 네트워크 허브**로 다시 이해해야 한다고 강조한다.

AKT 활성화는 두 단계를 거친다. 먼저 PI3K가 생성한 PIP3가 AKT를 세포막으로 모집하고, Thr308(PDK1에 의해)과 Ser473(mTORC2에 의해)이 인산화되어야 완전히 활성화된다. 두 부위 중 하나만 인산화된 AKT는 부분적으로만 활성이며, 기질 특이성도 달라진다.

AKT의 핵심 하류 표적들 — GSK3 억제, FoxO 핵외 수송, TSC1/2를 통한 mTORC1 활성화 — 을 통해 세포 성장, 생존, 대사가 촉진된다. 그러나 중요한 음성 피드백 루프가 있다: mTORC1이 활성화되면 S6K가 IRS1과 GRB10을 인산화하여 PI3K 활성화를 억제한다. 이 피드백이 PI3K 억제제 단독 치료의 한계를 설명한다 — 피드백이 해제되어 AKT 경로가 오히려 반동적으로 활성화되는 현상이 나타날 수 있다.

또한 AKT와 유사한 기질 특이성을 갖는 **SGK**(serum/glucocorticoid-regulated kinase)나 **S6K**가 AKT가 억제됐을 때 일부 기능을 대체할 수 있다. 이 AGC kinase 간의 중복성이 AKT 억제제 내성의 또 다른 기전이다.

### AMPK — 예방에서 촉진으로, 암 단계에 따른 역할 반전

**AMPK(AMP-activated protein kinase)**는 세포의 에너지 감지 센서다. ATP/AMP 비율이 낮아지면 AMPK가 활성화되어 에너지 소비를 줄이고(지방 합성, 단백질 합성 억제) 에너지 생산을 늘린다(지방산 산화, 당 흡수 촉진).

[[steinberg-2023-new-insights-activation-function-ampk|Steinberg 2023]]은 AMPK 활성화 기전이 단순한 에너지 감지를 넘어 다양한 비정규 경로를 포함함을 보여주었다. 포도당 수준이 낮으면 aldolase가 직접 AMPK를 활성화하고, DNA 손상은 CaMKK2를 통해, 리소좀 손상은 GAL9-TAK1 경로를 통해 AMPK를 켠다.

암에서 AMPK의 역할은 역설적이다. **암 발생 이전 단계**에서 AMPK는 종양 억제자로 작동한다. 비정상적인 세포 증식은 에너지를 많이 소비하므로 AMPK가 mTORC1을 억제하고 p53을 활성화하여 과도한 증식을 억제한다. 실제로 제2형 당뇨 치료제 metformin이 AMPK를 활성화하여 암 발생 위험을 낮춘다는 역학적 증거가 있다. 그러나 **이미 형성된 종양**에서 AMPK는 저산소, 저당분 등 대사 스트레스 환경에서 암세포의 생존을 지원하는 종양 촉진 역할로 전환될 수 있다. 이 단계 의존성이 AMPK를 치료 표적으로 사용하는 전략을 복잡하게 만든다.

### p38 MAPK — Cancer Stem Cell 유지의 수렴점

**p38 MAPK**는 스트레스 반응 kinase로 잘 알려져 있으며, 4개의 isoform(α/β/γ/δ)이 존재한다. 이들은 세포사멸, 분화, 염증, 세포 노화에 모두 관여한다. [[kudaravalli-2022-role-p38-map-kinase-cancer|Kudaravalli 2022]]는 p38 MAPK가 **cancer stem cell(CSC)** 유지에 핵심적인 역할을 한다는 것을 밝혔다.

p38α는 FOXC2를 Ser367에서 인산화하고, 이것이 ZEB1 발현을 유도하여 상피-간엽 전환(EMT)과 CSC 특성을 촉진한다. 반면 p38γ는 Nanog, SOX2, OCT3/4 등 만능성 전사인자를 통해 CSC 상태를 유지한다. 흥미롭게도 p38γ/δ isoform이 소실되면 SOX2 단백질의 분해가 촉진되어 오히려 줄기세포성이 감소한다. 이 isoform 특이적 역할의 차이는 치료 전략 설계에서 p38 억제제의 선택이 중요하다는 것을 시사한다.

임상적으로, p38 억제제를 항암제와 병용하면 기존 치료 후 남은 CSC 잔류 집단을 제거할 수 있다는 가설이 탐구되고 있다. 이는 재발의 근원이 되는 CSC를 타겟으로 한다는 점에서 치료 저항성 극복의 중요한 전략이다.

## 7. Phosphoproteomics가 암 치료에 주는 교훈

Phosphoproteomics가 암 치료 전략에 주는 실용적 교훈을 정리하면 다음과 같다.

**단백질 발현보다 kinase 활성이 치료 반응을 예측한다**: [[muller-dott-2025-phosphoproteomic-kinase-activity-inference|Müller-Dott 2025]]에서 명확히 입증됐듯, 약물 감수성의 예측에서 kinase 활성 점수는 단백질 발현량을 일관되게 능가한다. 임상에서 바이오마커 선택 시 이 원칙이 적용되어야 한다.

**네트워크 재배선이 내성의 근거다**: AKT 경로와 MAPK 경로 간의 역상관에서 보듯, 암세포는 하나의 경로가 억제되면 다른 경로를 통해 보상한다. Phosphoproteomics로 이 재배선 패턴을 측정하면 효과적인 병용 전략을 선택하는 데 직접 활용할 수 있다.

**Dark phosphoproteome이 새로운 표적의 최전선이다**: CoPheeKSA 같은 기계학습 도구가 미지의 kinase-기질 관계를 밝혀내면서, 기존에 "drug undruggable"하다고 여겨지거나 연구되지 않은 kinase들이 새로운 치료 표적 후보로 떠오르고 있다.

**통계 보정 없이 phosphoproteomics 데이터는 신뢰하기 어렵다**: MSstatsPTM 같은 보정 도구의 사용은 연구 설계 단계에서부터 고려되어야 하며, 발표된 phosphoproteomics 결과를 해석할 때도 이 보정이 적절히 수행됐는지 확인해야 한다.

**맥락 의존성을 이해하지 못하면 치료는 역효과를 낼 수 있다**: AMPK의 예에서 보듯, 같은 kinase라도 암 발생 단계와 종양 미세환경에 따라 역할이 완전히 반전될 수 있다. 단순히 kinase가 "활성화됐다"는 사실만으로 그것을 억제하는 것이 옳다는 결론을 내리면 안 된다.

## 참고문헌

- [[hijazi-2020-reconstructing-kinase-network-topologies-phosphoproteomics|Hijazi 2020]] — EBDT 알고리즘과 ChemPhoPro 데이터베이스를 이용한 phosphoproteomics 기반 kinase 네트워크 재구성. 유방암에서 PI3K-MAPK 역상관을 통한 네트워크 재배선 발견.
- [[muller-dott-2025-phosphoproteomic-kinase-activity-inference|Müller-Dott 2025]] — benchmarKIN R 패키지. kinase 활성 추론 방법론의 체계적 벤치마크. z-score 정규화 + 조합 라이브러리가 최고 성능. kinase 활성 점수가 단백질 발현보다 약물 반응을 더 잘 예측함을 입증.
- [[jiang-2025-dark-cancer-phosphoproteome-coregulation|Jiang 2025]] — CoPheeMap/CoPheeKSA: 1,195개 CPTAC 종양의 dark phosphoproteome 기계학습 매핑. 26개 미연구 kinase 커버, CDK12 치료적 관련성 확인.
- [[kohler-2023-msstatsptm-statistical-relative-quantification-posttranslational|Kohler 2023]] — MSstatsPTM R/Bioconductor 패키지. 선형 혼합 효과 모델로 PTM 변화와 단백질 총량 변화를 분리. 위양성률 20.88% → 1.84% 감소.
- [[manning-2017-aktpkb-signaling-navigating-network|Manning 2017]] — AKT/PKB 신호전달 네트워크의 포괄적 리뷰. 이중 막 활성화, AGC kinase 중복성, 음성 피드백 루프를 포함한 맥락 의존적 네트워크 허브로서의 AKT.
- [[steinberg-2023-new-insights-activation-function-ampk|Steinberg 2023]] — AMPK 활성화 기전의 새로운 통찰 및 암에서의 역설적 역할. 암 발생 억제 단계와 기형성 종양에서의 생존 지원 기능의 맥락 의존성.
- [[kudaravalli-2022-role-p38-map-kinase-cancer|Kudaravalli 2022]] — p38 MAPK의 isoform별 역할과 cancer stem cell 유지 기전. p38α-FOXC2-ZEB1 축과 p38γ의 만능성 전사인자 조절.
