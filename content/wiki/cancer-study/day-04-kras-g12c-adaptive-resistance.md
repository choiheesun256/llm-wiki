---
title: "Day 4: KRAS G12C 적응 내성"
draft: false
---

# Day 4: KRAS G12C 적응 내성

## 1. KRAS의 생물학 — Molecular Switch

KRAS(Kirsten RAS)는 RAS 단백질 패밀리의 일원으로, 세포 증식·분화·생존을 조절하는 신호전달 네트워크의 핵심 GTPase다. 21 kDa 크기의 이 작은 단백질은 GDP 또는 GTP 결합 상태에 따라 구조가 달라지는 분자 스위치(molecular switch)로 기능한다. GDP 결합 시(비활성 상태) KRAS의 switch I 및 switch II loop가 닫힌 구조를 취하여 effector 단백질과의 결합면이 형성되지 않는다. GTP 결합 시(활성 상태)에는 이 loop들이 열린 구조로 전환되어 RAF, PI3K, RALGDS 등 downstream effector의 RAS-binding domain과 결합할 수 있게 된다.

정상 세포에서 이 스위치의 온/오프는 엄격하게 조절된다. 세포 표면 RTK의 활성화가 GEF(guanine nucleotide exchange factor, 주로 SOS1/2)를 모집하면 GEF가 GDP를 방출시켜 세포질의 풍부한 GTP가 결합, KRAS가 활성화된다. 반대로 내재적 GTPase 활성에 의해 GTP가 가수분해되어 GDP로 전환되면 스위치가 꺼진다. KRAS의 자체 GTPase 활성은 느리기 때문에, GTPase activating protein(GAP, 주로 NF1)이 이 가수분해를 수백 배 가속화하여 신호를 신속하게 종결하는 데 필수적이다.

KRAS는 인간 고형암 전체에서 가장 빈번하게 돌연변이가 발생하는 발암유전자로, 췌장암(~90%), 대장암(~45%), 비소세포폐암(~30%)에서 특히 높은 빈도로 발견된다. 가장 흔한 변이 위치는 codon 12, 13, 61이며, 이 위치의 아미노산 치환은 KRAS의 내재적 GTPase 활성을 직접적으로 손상시키거나 GAP에 의한 가수분해 가속화를 방해함으로써 KRAS를 영구적인 GTP 결합(활성) 상태로 고정한다. 그 결과 KRAS 하류 신호(MAPK, PI3K-AKT-mTOR, RAL-GDS)가 상위 RTK의 리간드 자극 없이도 구성적으로 활성화되어, 세포 증식의 브레이크가 풀린 상태가 된다.

## 2. 왜 40년간 Undruggable이었나 — 구조적 문제

KRAS가 발암유전자로 확인된 것은 1982년이다. 그러나 이후 약 40년간 KRAS 자체를 직접 표적으로 하는 승인된 치료제가 존재하지 않았고, KRAS는 암 연구의 가장 오래된 미해결 과제 중 하나로 남아 있었다. 이 "undruggable" 딱지가 붙은 데는 명확한 구조적·생화학적 이유가 있다.

첫째, KRAS의 GTP 결합 포켓은 ATP와 달리 약물이 경쟁적으로 치환하기에 적합하지 않다. ATP는 세포 내 농도가 상대적으로 낮고(수백 μM), kinase의 ATP 결합 포켓은 크고 친수성이어서 다양한 소분자가 경쟁할 여지가 있다. 반면 GTP는 세포 내 농도가 극히 높고(수백 μM~mM 수준), KRAS와의 결합 친화도(pM 수준)가 GEF의 도움 없이도 매우 높아 소분자 경쟁 억제제가 이를 치환하기 사실상 불가능하다.

둘째, KRAS 단백질 표면은 구조적으로 매우 매끄럽다(smooth). 약물이 결합할 수 있는 깊은 소수성 포켓(hydrophobic pocket)이 GTP 결합 부위 이외에는 마땅히 없다. 소분자 약물은 일반적으로 단백질 표면의 groove나 cavity에 결합하는데, KRAS는 effector와의 상호작용면이 비교적 평평하여 소분자 억제제 개발이 어렵다.

셋째, RAS를 간접 억제하는 전략 — 예를 들어 farnesyl transferase 억제를 통한 RAS 막 부착 저해, 또는 RAF·MEK 억제 — 도 장기적으로 한계가 있음이 드러났다. 특히 KRAS는 대안적인 막 부착 경로(geranylgeranylation)를 이용하여 farnesyl transferase 억제를 우회할 수 있었다. MEK/ERK 억제는 역설적으로 RAS-GTP의 부하를 오히려 상승시키는 피드백 루프를 촉발하기도 한다.

## 3. G12C 공유결합 억제제의 혁신 — Sotorasib과 Adagrasib

2013년 발표된 구조생물학 연구가 이 교착 상태를 타개할 실마리를 제공했다. KRAS G12C 변이에서 12번 위치의 cysteine은 GDP 결합 상태(비활성)의 KRAS switch II loop 인근에 형성되는 작은 소수성 포켓(S-IIP, switch II pocket)에 노출된다. 이 cysteine의 thiol기는 적절한 electrophile을 가진 소분자와 공유결합(covalent bond)을 형성할 수 있다. 이 발견을 기반으로, GDP 결합 상태의 KRAS G12C에만 선택적으로 결합하는 **allosteric covalent inhibitor**라는 완전히 새로운 약물 개념이 탄생했다.

Sotorasib(AMG 510)과 adagrasib(MRTX849)은 이 전략으로 개발된 1세대 KRASG12C 억제제다. 두 약물 모두 Cys12의 thiol기에 acrylamide 작용기를 통해 Michael addition 반응으로 비가역적 공유결합을 형성한다. 결합 후 KRAS는 GDP 결합 비활성 상태로 잠기고, GEF에 의한 GDP→GTP 교환이 차단되어 KRAS는 다시 활성화될 수 없다. Sotorasib은 2021년 KRAS G12C 변이 NSCLC 2차 치료에 FDA 최초 승인됐으며, adagrasib은 2022년 뒤를 이었다.

그러나 임상 반응의 지속 기간은 대부분 짧다. Sotorasib에서 objective response rate(ORR)는 약 37%, 중앙 PFS는 약 6개월에 불과했다. 이 빠른 내성의 이유를 이해하기 위해서는 이 약물의 작동 기전에 내재된 취약점을 먼저 파악해야 한다.

## 4. 적응 내성의 속도 — 수일 내 비유전적 재배선

KRAS G12C 억제제의 결정적 약점은 **오직 GDP 결합(비활성) 상태의 KRAS에만 결합**한다는 것이다. 세포 내에서 KRAS 단백질은 지속적으로 합성되고 분해된다. 새로 번역된 KRAS(G12C) 단백질은 처음에는 GTP가 없는 상태지만, GEF 활성이 있는 세포에서는 빠르게 GTP를 결합하여 활성 상태로 전환될 수 있다. 약물이 이 새 단백질을 GDP 상태에서 잡기 전에 KRAS가 GTP 결합 상태로 전환되면, 그 분자는 억제를 피해 활성 신호를 전달한다. 즉, 세포의 단백질 합성과 약물 결합 사이의 **시간적 경쟁**이 본질적으로 탈출 창(escape window)을 만든다.

단일세포 RNA sequencing(scRNA-seq)을 이용한 선구적 연구는 KRASG12C 억제제 처리 72시간 이내라는 매우 이른 시점에 이미 세포 집단이 두 가지 모드로 분리됨을 보였다 ([[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition|Xue 2020]]). 약 80%의 세포는 세포 주기를 정지하고 quiescence 상태로 진입한 반면, 약 20%는 지속적으로 증식하며 약물에 적응했다. 이 적응 세포들에서는 새로 합성된 KRAS(G12C)가 약물 결합 전에 GTP와 결합하여 활성 상태를 취하는 것이 주요 탈출 기전으로 확인됐다.

이 빠른 적응을 매개하는 분자들도 밝혀졌다. **HBEGF(heparin-binding EGF-like growth factor)**가 상향조절되어 EGFR을 활성화하고, EGFR은 다시 SOS GEF를 모집하여 새로 합성된 KRAS(G12C)를 빠르게 GTP 결합 상태로 전환한다. 이는 EGFR이 KRAS G12C 억제제에 대한 RTK feedback loop의 핵심 orchestrator임을 의미한다. 또한 **AURKA(Aurora kinase A)**가 활성 KRAS와 단백질 복합체를 형성하여 그 안정성을 높이는 것도 확인됐다. In vivo 실험에서 G12C 억제제와 EGFR 억제제의 병용, 또는 G12C 억제제와 AURKA 억제제의 병용이 단독요법 대비 유의미하게 향상된 종양 억제를 보였다 ([[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition|Xue 2020]]).

이 연구의 핵심 교훈은, KRAS G12C 억제에 대한 내성이 유전적 돌연변이 없이 **전사적·번역후 수준의 신호 재배선**만으로도 수일 내에 발생할 수 있다는 것이다. 이는 단순히 내성 세포가 선택적으로 증식하는 Darwinian 모델이 아닌, 세포 집단 전체가 환경 변화에 실시간으로 반응하여 표현형을 재조정하는 Lamarckian 적응에 가깝다.

## 5. 우회 경로 — YAP/TAZ-TEAD가 KRAS를 우회하는 방법

KRAS G12C 억제에 대한 또 다른 중요한 내성 기전은 Hippo 신호전달 경로의 탈조절을 통한 **YAP/TAZ-TEAD 축**의 활성화다. Hippo 경로는 정상 상태에서 세포 증식을 억제하는 종양억제 경로로, LATS1/2 kinase가 전사 보조활성인자 YAP(Yes-associated protein)과 TAZ(transcriptional co-activator with PDZ-binding motif)를 인산화하여 세포질에 격리시키거나 분해를 촉진한다. Hippo가 비활성화되면 YAP/TAZ가 핵으로 이동하여 TEAD 전사인자와 결합, 세포 증식·생존·항암제 내성 관련 유전자들을 활성화한다.

KRAS G12C 변이 췌장암(PDAC) 세포를 대상으로 한 genome-wide CRISPR loss-of-function 스크린에서, G12C 억제제 내성의 최상위 드라이버로 Hippo 경로 구성 요소들의 소실이 확인됐다 ([[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary|Edwards 2023]]). 특히 NF2(merlin), LATS1, LATS2, STK3, STK4의 loss-of-function이 강력한 내성 부여 인자로 나타났다. 이 유전자들은 모두 YAP/TAZ를 억제하는 Hippo 경로 상위 조절자들이다.

기전적으로 YAP1/TAZ는 두 가지 경로를 통해 KRAS 억제를 우회한다. 첫째, TEAD를 통해 CCND1(cyclin D1), CYR61 등 KRAS 표적 유전자들을 ERK 신호와 **독립적으로** 전사 활성화한다. 둘째, PI3K-AKT-mTOR 경로를 독립적으로 활성화하여 세포 생존 신호를 유지한다. 즉 YAP/TAZ는 KRAS가 차단된 상황에서도 MAPK와 PI3K 두 주요 하류 effector를 모두 활성화할 수 있는 강력한 우회 허브다.

임상적으로 중요한 것은 TEAD 억제제가 현재 개발 중이라는 사실이다. TEAD 억제제 VT-3989와 adagrasib의 병용은 KRAS G12C 내성 모델에서 종양 재성장을 단독요법 대비 유의미하게 지연시켰다 ([[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary|Edwards 2023]]). 이 조합은 KRAS 신호와 YAP/TAZ-TEAD 우회 경로를 동시에 차단하는 합리적 병용 전략이며, 임상 1/2상 시험이 진행 중이다.

## 6. 공간적 이질성 — 전이 부위마다 다른 내성 기전

내성의 복잡성은 단일 종양 내 이질성에만 국한되지 않는다. 다발성 전이 병변을 가진 환자에서 서로 다른 전이 부위가 완전히 다른 내성 기전을 보유할 수 있다. 이 공간적 이질성(spatial heterogeneity)은 단일 부위 생검에 기반한 내성 기전 파악을 근본적으로 한계짓는다.

이를 가장 극적으로 보여준 것은 sotorasib으로 치료받은 KRAS G12C 변이 NSCLC 환자 1명의 rapid autopsy(신속 부검) 연구로, 사후 17개 조직 부위에서 종양 샘플을 수집하여 분자적 특성을 비교했다 ([[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition|Tsai 2022]]). 분석 결과는 매우 놀라웠다. 이차적 KRAS 변이는 어느 부위에서도 검출되지 않았음에도, 각 전이 부위는 서로 다른 비유전적 기전을 통해 MAPK, AKT, mTOR 경로의 재활성화를 보였다. 즉, KRAS-independent pathway reactivation이 다양한 경로를 통해 공간적으로 각기 다른 방식으로 일어났다.

이 연구에서 또 하나의 중요한 발견은 **TGF-β**가 master upstream coordinator 역할을 하며, 면역세포 침윤이 거의 없는 immune-cold TME 형성에 중심적으로 기여한다는 것이었다. TGF-β는 항종양 T 세포 반응을 억제하고 종양 세포의 EMT를 촉진하며, 복수의 내성 경로와 교차함으로써 단일 표적으로는 대응하기 어려운 복잡한 내성 상태를 만들었다. 더불어 치료 전 림프절 전이로부터의 clonal seeding이 확인되어, 일부 전이 병변은 약물 치료 이전부터 독립적인 클론 역사를 가지고 있었음이 드러났다.

이 연구의 임상적 함의는 명확하다. 단일 생검에서 나온 내성 기전 프로파일이 전신의 내성 지형을 대표할 수 없으며, liquid biopsy나 다부위 생검 전략 없이는 적절한 내성 기전 파악 및 이에 기반한 후속 치료 결정이 어렵다.

## 7. 선행적 병용 전략의 필요성

KRAS G12C 내성의 세 가지 핵심 특징 — 속도(수일 내), 이질성(단일세포 수준), 공간성(전이 부위별 상이) — 을 종합하면, 내성이 발생한 후 순차적으로 다른 약물을 투여하는 전통적인 "내성 획득 후 전환(sequential therapy)" 전략이 KRAS G12C 억제에서는 특히 비효율적임을 알 수 있다.

수일 내에 비유전적 적응이 완성된다면, 치료를 시작하고 내성을 확인한 후 다음 약물을 선택하는 동안 이미 내성 세포 집단이 공고화된다. EGFR-HBEGF feedback이 수일 내 작동하고, YAP/TAZ 우회 경로가 수주 내 확립되며, TGF-β 매개 immune-cold TME가 수개월에 걸쳐 형성된다면, 이들을 각각 순차적으로 억제하는 전략은 항상 한 발 늦게 된다.

이 논리는 **선행적 병용요법(upfront combination therapy)**의 과학적 근거가 된다. G12C 억제제와 EGFR 억제제를 처음부터 병용하면 EGFR feedback loop을 초기 단계에서 차단할 수 있다 ([[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition|Xue 2020]]). G12C 억제제와 TEAD 억제제의 병용은 YAP/TAZ 우회 경로를 예방적으로 차단한다 ([[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary|Edwards 2023]]). TGF-β 억제제나 면역관문억제제를 추가함으로써 immune-cold TME 형성을 예방하는 전략도 검토되고 있다 ([[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition|Tsai 2022]]).

물론 병용요법은 독성 관리의 어려움을 수반한다. 각 약물의 최적 용량과 스케줄, 바이오마커에 기반한 환자 선택이 병용 전략 성공의 핵심 과제다. 예를 들어, TEAD 억제제가 필요한 환자는 Hippo 경로 소실(NF2, LATS1/2 변이) 또는 YAP/TAZ 핵 국소화가 확인된 경우로 선별될 수 있다. 이렇듯 분자적 사전 선별(molecular pre-selection)과 선행적 병용이라는 두 원칙이 결합될 때 KRAS G12C 내성 문제에 대한 실질적 접근이 가능해진다.

## 8. KRAS G12C 내성의 종합적 조망

KRAS G12C 억제제는 40년간의 undruggable 역사를 넘어선 획기적 발전이었다. 그러나 임상 반응의 짧은 지속성은 이 접근법의 근본적 취약점을 노출했다. 약물 기전 자체에 내재된 GDP-상태 의존성은 새로 합성된 KRAS의 탈출을 허용하고, 빠른 비유전적 적응이 수일 내에 일어나며(Xue 2020), YAP/TAZ-TEAD 같은 강력한 우회 경로가 KRAS와 독립적으로 하류 effector를 지속 활성화한다(Edwards 2023). 전이 환자에서는 각 병변이 고유한 내성 기전을 발전시켜 단일 부위 생검으로는 전체 그림을 파악하기 어렵다(Tsai 2022).

이러한 복잡성은 KRAS G12C 내성을 단일 분자 이벤트가 아닌 **다층적 생물학적 현상**으로 이해해야 함을 의미한다. 내성을 예방 혹은 지연하기 위해서는 종양 세포 내재적 feedback(EGFR, AURKA), 전사적 우회(YAP/TAZ-TEAD), TME 리모델링(TGF-β, 면역 회피)을 모두 고려하는 포괄적이고 선행적인 병용 전략이 요구된다.

---

## 참고문헌

- [[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition|Xue et al. (2020)]] — Rapid non-uniform adaptation to conformation-specific KRASG12C inhibition. *Nature*
- [[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition|Tsai et al. (2022)]] — Tumour heterogeneity and resistance to KRASG12C inhibition. *Nature Medicine*
- [[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary|Edwards et al. (2023)]] — TEAD inhibition overcomes YAP1/TAZ-driven primary and acquired resistance to KRASG12C inhibition. *Cancer Discovery*
