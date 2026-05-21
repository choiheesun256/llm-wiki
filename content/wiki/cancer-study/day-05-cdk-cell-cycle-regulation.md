---
title: "Day 5: CDK & 세포주기 조절"
draft: false
---

# Day 5: CDK & 세포주기 조절

세포 분열은 생명 유지의 필수 과정이지만, 동시에 암 발생의 핵심 취약점이기도 하다. Cyclin-dependent kinase(CDK)는 세포주기의 각 단계를 순서대로 추진하는 분자 엔진이며, 지난 수십 년간 종양생물학의 가장 중요한 연구 대상 중 하나였다. CDK4/6 억제제는 유방암 치료를 혁신했고, WEE1 억제제는 TP53 변이 암의 아킬레스건을 겨냥한다. 그러나 CDK의 역할은 세포주기 조절을 훨씬 넘어선다. 이 장에서는 세포주기의 분자적 원리부터 시작하여, CDK-Cyclin 복합체의 작동 방식, 임상에서 검증된 억제 전략, 그리고 최근 드러나고 있는 CDK의 다면적 비정규(non-canonical) 기능까지 체계적으로 살펴본다.

## 1. 세포주기의 기본 원리 — G1/S/G2/M과 Checkpoint

세포주기는 크게 네 단계로 구성된다. **G1기(Gap 1)**는 세포가 성장하고 다음 분열을 준비하는 단계이며, **S기(Synthesis)**에서는 DNA가 복제된다. **G2기(Gap 2)**는 복제된 DNA를 검사하고 분열을 준비하는 단계이고, **M기(Mitosis)**에서 실제로 염색체가 분리되어 두 딸세포가 만들어진다.

각 단계 사이에는 세포가 다음 단계로 진입할 준비가 됐는지를 감시하는 **checkpoint** 기제가 작동한다. Checkpoint는 단순히 속도를 늦추는 것이 아니라, DNA 손상이나 복제 오류가 발생했을 때 세포주기를 완전히 정지시켜 수리할 시간을 확보한다. 만약 수리가 불가능하다면 세포는 세포사멸(apoptosis) 경로로 유도된다. 이 감시 체계가 무너지는 것이 바로 암 발생의 중심 사건이다.

G1/S checkpoint는 세포가 S기에 진입할 자격이 있는지를 결정하는 가장 중요한 관문이다. 이 checkpoint는 **retinoblastoma protein(Rb)**을 중심으로 작동한다. 비인산화 상태의 Rb는 E2F 전사인자에 결합하여 S기에 필요한 유전자들의 발현을 억제한다. 성장 신호가 충분하면 Cyclin D가 합성되고, CDK4/6-Cyclin D 복합체가 형성되어 Rb를 인산화한다. 인산화된 Rb는 E2F로부터 분리되고, E2F는 cyclin E, CDK2 등 S기 진입에 필요한 유전자들을 전사시킨다. 이 과정이 G1/S 전환의 핵심이다 ([[fassl-2022-cdk4-cdk6-kinases-basic-science|Fassl 2022]]).

## 2. CDK-Cyclin 복합체의 작동 방식 — Rb 인산화와 E2F 전사 프로그램

CDK가 활성을 갖기 위해서는 반드시 Cyclin 단백질과 복합체를 이뤄야 한다. Cyclin은 세포주기의 각 단계에 따라 합성과 분해가 반복되는 조절 서브유닛으로, CDK의 특이성과 활성을 결정한다. 예를 들어, Cyclin D는 G1기에 축적되어 CDK4 또는 CDK6과 결합하고, Cyclin E는 G1 후기에 CDK2와, Cyclin B는 M기에 CDK1과 짝을 이룬다.

CDK4/6-Cyclin D 복합체에 의한 Rb 인산화는 단순한 이진 스위치가 아니라 순차적인 과정이다. Rb는 먼저 CDK4/6에 의해 단인산화되고, 이후 CDK2-Cyclin E에 의해 과인산화(hyperphosphorylation)되어 완전히 비활성화된다. 이처럼 두 kinase가 협력하여 G1/S 전환을 완결시키는 구조는 중요한 치료적 함의를 갖는다 — CDK4/6 억제제가 CDK2 활성화에 의해 우회(bypass)될 수 있기 때문이다.

E2F 전사인자가 방출되면 어떤 일이 일어나는가? E2F는 DNA 복제 개시에 필요한 수십 개의 유전자를 한꺼번에 활성화한다. 이에는 cyclin E, CDK2, PCNA, 그리고 thymidine kinase 등 뉴클레오티드 합성 효소들이 포함된다. 이 전사 프로그램이 일단 시작되면 세포는 S기로 진입하는 방향으로 강하게 편향된다. 이 비가역적 전환점을 **restriction point**라고 부르며, 이 시점 이후로는 외부 성장 신호가 없어도 세포가 분열을 완료한다.

## 3. CDK4/6 억제제의 임상 성공과 비정규 효과

CDK4/6 억제제의 임상 성공은 종양생물학이 직접 치료로 이어진 가장 설득력 있는 사례 중 하나다. 현재 FDA 승인을 받은 세 가지 CDK4/6 억제제 — palbociclib, ribociclib, abemaciclib — 는 모두 HR+/HER2- 전이성 유방암의 표준 치료로 자리 잡았으며, 무진행 생존율을 극적으로 개선했다.

이 약물들의 기본 작동 원리는 앞서 설명한 G1/S checkpoint 기전에 직접 개입하는 것이다. CDK4/6를 억제하면 Rb 인산화가 차단되고, E2F가 억제된 채로 유지되어 세포는 G1에 정지한다. 그러나 최근 연구들은 이 약물들이 단순한 세포주기 정지 이상의 효과를 갖는다는 사실을 밝혀냈다.

**내인성 레트로바이러스(ERV) 유도와 선천면역 활성화**: CDK4/6 억제 시 DNMT1 수준이 저하되어 게놈 내 ERV 서열이 발현된다. 이 ERV RNA는 이중가닥 구조를 형성하여 세포질 내 바이러스 감지 센서(MDA5, RIG-I)를 활성화하고 I형 인터페론 반응을 유발한다. 암세포가 바이러스에 감염된 것처럼 면역계에 신호를 보내는 것이다.

**PD-L1 하향조절**: Cyclin D-CDK4 복합체는 SPOP E3 ligase를 인산화하여 PD-L1 분해를 억제한다. 즉, CDK4/6 활성이 높을수록 PD-L1이 안정화되어 면역 회피에 기여한다. CDK4/6 억제제는 이 경로를 차단하여 PD-L1 발현을 낮추고 항종양 면역을 회복시킨다 ([[fassl-2022-cdk4-cdk6-kinases-basic-science|Fassl 2022]]).

**Treg 선택적 고갈**: CDK6은 NFκB 신호를 통해 regulatory T cell(Treg)의 생존을 지원한다. CDK6 억제는 다른 T세포 부분집단보다 Treg를 선택적으로 감소시켜 종양 미세환경 내 면역 억제를 완화한다.

이러한 면역 효과들이 CDK4/6 억제제와 면역관문억제제(immune checkpoint inhibitor) 병용의 강력한 생물학적 근거를 제공한다.

## 4. 면역원성 노화 — CDK4/6i 유도 Senescence의 질적 차이

세포주기를 장기간 정지시키면 세포는 **therapy-induced senescence(TIS)**, 즉 치료 유도 노화 상태에 진입할 수 있다. 노화 세포는 분열을 멈추지만 죽지 않으며, **senescence-associated secretory phenotype(SASP)**이라는 분비 표현형을 통해 주변 조직에 신호를 보낸다.

그런데 모든 TIS가 동등하지 않다. [[lee-2024-cdk46-senescence-immunogenic-properties|Lee 2024]]의 연구는 CDK4/6i가 유도하는 TIS가 DNA 손상제(doxorubicin 등)가 유도하는 TIS와 질적으로 다른 면역 환경을 만든다는 것을 보여준다.

CDK4/6i 유도 노화 세포는 **항원 제시 분자(HLA-B/C/F, B2M, TAP1/2)**와 **T세포 유인 케모카인(CXCL9, CXCL10, CXCL11)**의 발현이 유지된다. 이는 세포독성 T세포가 노화 암세포를 인식하고 제거하기 유리한 조건이다.

반면 DNA 손상제 유도 노화에서 흔히 나타나는 **염증성 SASP 인자(IL-6, CXCL8, TNFα)**와 **혈관신생 인자(VEGFA, PDGF)**는 CDK4/6i 유도 노화에서 현저히 낮다. 이 차이는 신호 경로의 차이에서 비롯된다 — 전자는 NF-κB가 아닌 **STAT3**가 지배적인 드라이버로 작동하기 때문이다.

임상적으로, 이 결과는 CDK4/6i 유도 노화가 면역치료와 시너지를 낼 수 있는 특별히 유리한 조건을 만든다는 것을 의미한다. 염증성 SASP 없이 면역 인식을 증가시키는 "면역원성 노화"라는 개념은 병용 전략 설계에 중요한 지침을 제공한다.

## 5. G2/M Checkpoint — WEE1/PKMYT1과 TP53 결핍 암의 취약점

G1/S checkpoint를 담당하는 핵심 분자가 Rb라면, G2/M checkpoint의 핵심은 **CDK1-Cyclin B 복합체의 활성 조절**이다. CDK1은 유사분열 진입의 방아쇠를 당기는 kinase지만, DNA 손상이 존재하는 상황에서 이를 무분별하게 활성화하면 치명적인 오류가 일어난다. 따라서 G2기에서는 두 kinase — **WEE1**과 **PKMYT1** — 가 CDK1을 억제 인산화하여 안전핀 역할을 한다.

WEE1은 CDK1의 **Tyr15**를 인산화하여 비활성화하고, PKMYT1은 **Thr14**를 인산화한다. 이 두 부위의 동시 인산화가 CDK1을 완전히 억제한다. DNA 수리가 완료되면 CDC25 phosphatase가 이 억제 인산화를 제거하여 CDK1을 활성화하고 유사분열이 시작된다. 두 kinase는 표적 부위가 다르기 때문에 기능적으로 중복되지 않으며, 이는 치료 전략 설계 시 중요한 고려 사항이다 ([[ghelli-2020-wee1-family-business-regulation-mitosis|Ghelli Luserna di Rorà 2020]]).

여기서 TP53의 역할이 결정적이다. 정상 세포는 두 개의 주요 checkpoint를 갖는다 — p53 의존적 G1 checkpoint와 WEE1/PKMYT1 의존적 G2/M checkpoint. TP53 변이 암세포는 G1 checkpoint가 이미 손상된 상태이므로, DNA 손상이 발생해도 G1에서 수리할 기회를 갖지 못하고 G2/M checkpoint에만 의존한다. 이것이 **합성 치사(synthetic lethality)**의 논리다 — TP53 소실 상태에서 WEE1을 추가로 억제하면 암세포는 두 가지 checkpoint를 모두 잃게 되어 손상된 DNA를 가진 채로 유사분열에 진입하고 파국적 분열 실패로 죽는다.

WEE1 억제제 adavosertib은 TP53 변이 난소암에서 가장 뚜렷한 효과를 보였으며, 이는 이 합성 치사 원리를 임상에서 검증한 것이다.

## 6. CDK1의 다면적 역할 — 세포주기를 훨씬 넘어서는 ~200개 기질

CDK1은 오랫동안 유사분열 진입의 마스터 kinase로만 인식됐다. 그러나 실제로 CDK1의 기질 목록은 훨씬 광범위하다. [[massacci-2023-cyclin-dependent-kinase-1-more-than|Massacci 2023]]은 CDK1이 세포주기 조절 이상으로 약 200개의 기질을 인산화하며, 이를 통해 유전자 발현, 세포사멸, 미토콘드리아 역학, 세포내 물질 수송(vesicular trafficking), 골지체(Golgi) 구조 등 다양한 세포 기능을 제어한다는 것을 보여주었다.

암에서 CDK1의 발현과 활성 패턴은 흥미로운 역설을 드러낸다. 대부분의 암 유형에서 CDK1 단백질은 높게 발현되지만, 동시에 WEE1과 MYT1에 의한 Tyr15 과인산화로 인해 활성은 오히려 억제되어 있다. 이는 암세포가 CDK1을 잠재적으로 과활성화할 수 있는 분자적 장전(priming) 상태에 있음을 시사한다.

주목할만한 예외가 BRCA 관련 암이다. 이 암 유형에서는 CDK1이 높은 발현과 높은 활성을 동시에 보인다. 이는 BRCA 변이로 인한 DNA 수리 결함이 CDK1 조절 방식을 변화시키거나, 혹은 CDK1 과활성이 BRCA 결핍 세포에서 특별한 적응적 이점을 제공하기 때문일 수 있다. CDK1을 단순한 유사분열 트리거가 아닌 세포 운명의 master coordinator로 이해하는 것이 중요하다.

## 7. CDK12와 BRCAness — RNA Processing과 DNA 수리의 연결

CDK12는 다른 CDK와 달리 주로 전사(transcription) 과정을 조절한다. CDK12는 RNA polymerase II의 C-terminal domain(CTD)를 인산화하여 전사 신장(elongation)을 촉진한다. 이 활성이 특히 **긴 유전자, 여러 개의 intron을 가진 유전자**의 발현에 중요하다. 그런데 핵심 DNA 수리 유전자들 — ATM, BRCA1, BRCA2, FANCI, FANCD2 — 이 바로 이 범주에 속한다.

[[dubbury-2018-cdk12-regulates-dna-repair-genes|Dubbury 2018]]은 CDK12가 소실됐을 때 어떤 일이 일어나는지 분자 수준에서 밝혔다. CDK12 없이는 RNA Pol II 전사 신장이 감소하고, 그 결과 genome-wide **intronic polyadenylation(IPA)**이 증가한다. IPA란 정상적인 3' 말단 대신 intron 내부에 위치한 cryptic polyadenylation signal에서 RNA가 조기 종결되는 현상이다. 이렇게 만들어진 절단된 mRNA는 기능적 단백질을 만들지 못한다.

DNA 수리 유전자들이 선택적으로 영향을 받는 이유는 이들이 특히 길고 많은 intron을 가지고 있어 IPA의 영향을 더 크게 받기 때문이다. 결과적으로 CDK12 소실은 BRCA 유전자 자체에 변이가 없더라도 HR 수리를 기능적으로 손상시켜 **BRCAness** 표현형을 만든다.

이것이 갖는 임상적 함의는 중요하다. BRCAness를 가진 종양은 **PARP 억제제**에 감수성이 높다 — PARP 억제제는 단일가닥 절단 수리를 막아 이중가닥 절단을 유발하고, HR 수리가 손상된 세포에서 이것이 치명적이 된다는 원리다. 실제로 CDK12 소실은 전립선암과 난소암에서 검증됐으며, CDK12 소실 종양 환자가 PARP 억제제 치료에 반응한 사례들이 보고되고 있다. 세포주기 생물학이 DNA 수리 표적치료와 직접 연결되는 지점이다.

## 8. CDK 네트워크의 구조적 이해

CDK들의 기능적 관계를 이해하면 왜 CDK4/6 억제제 단독으로 내성이 생기는지, 그리고 어떤 병용이 합리적인지가 명확해진다.

CDK4/6 억제 시 가장 흔한 내성 기전은 **CDK2를 통한 Rb 우회**다. Cyclin E1/E2가 증폭되거나 CDK4/6에 의한 Rb 인산화 없이도 CDK2가 활성화되면 E2F가 방출되어 세포주기가 재개된다. 이 때문에 CDK4/6 억제제에 내성이 생긴 종양에서 CDK2 억제 전략이 주목받고 있다.

또한 G2/M checkpoint의 이해는 CDK4/6i와 WEE1i의 병용 가능성을 시사한다. CDK4/6i로 G1 정지를 유도한 후 WEE1i를 투여하면, G1에서 풀려난 세포들이 G2/M에서 또 다른 장벽에 부딪히게 하는 순차 전략이다. 물론 이런 병용의 독성 관리는 중요한 임상적 도전이다.

## 9. 임상적 함의 — CDK 억제제를 활용한 합리적 병용 전략

지금까지 살펴본 CDK 생물학의 다층적 기능은 다음과 같은 병용 전략의 과학적 근거를 제공한다.

**CDK4/6i + 면역관문억제제**: ERV 유도, PD-L1 하향조절, Treg 고갈, 면역원성 노화 유도 등 CDK4/6i의 면역 효과가 면역치료와의 시너지를 지지한다. 현재 여러 임상시험이 진행 중이다.

**WEE1i + DNA 손상제**: WEE1 억제로 G2/M checkpoint를 무력화하면 DNA 손상제에 의해 유발된 손상이 수리되지 못하고 치명적이 된다. 특히 TP53 변이 종양에서 효과적이다.

**CDK12 소실 + PARP 억제제**: BRCAness 표현형을 통한 합성 치사 전략이다. CDK12 소실의 분자적 진단이 치료 반응 예측에 활용될 수 있다.

**CDK4/6i + CDK2i**: CDK4/6i 내성 기전인 Cyclin E1 증폭이나 CDK2 과활성을 표적으로 하는 순차 또는 병용 전략이다.

이러한 합리적 병용 전략들은 CDK를 단순한 세포주기 엔진이 아닌, 면역·DNA 수리·전사 조절의 허브로 이해할 때 비로소 그 논리가 완성된다.

## 참고문헌

- [[fassl-2022-cdk4-cdk6-kinases-basic-science|Fassl 2022]] — CDK4/6: 기초과학에서 임상 치료까지. CDK4/6 생물학과 FDA 승인 억제제의 포괄적 리뷰. ERV 유도, PD-L1 하향조절, Treg 고갈 등 비정규 면역 효과 기술.
- [[lee-2024-cdk46-senescence-immunogenic-properties|Lee 2024]] — CDK4/6i 유도 therapy-induced senescence의 면역원성 특성. DNA 손상제 TIS 대비 우수한 면역 프로파일 — STAT3 의존적 기전으로 항원 제시 유지, 염증성 SASP 최소화.
- [[ghelli-2020-wee1-family-business-regulation-mitosis|Ghelli Luserna di Rorà 2020]] — WEE1 family의 유사분열 조절 기전. WEE1(CDK1-Y15)과 PKMYT1(CDK1-T14)의 기능적 구분 및 TP53 변이 암에서의 치료 표적으로서의 가치.
- [[massacci-2023-cyclin-dependent-kinase-1-more-than|Massacci 2023]] — CDK1의 세포주기 이상 기능. 약 200개 기질을 통한 유전자 발현, 세포사멸, 미토콘드리아 역학 조절. 암에서의 역설적 발현-활성 패턴.
- [[dubbury-2018-cdk12-regulates-dna-repair-genes|Dubbury 2018]] — CDK12의 DNA 수리 유전자 조절. Intronic polyadenylation을 통한 HR 수리 유전자 선택적 절단과 BRCAness 생성 기전.
