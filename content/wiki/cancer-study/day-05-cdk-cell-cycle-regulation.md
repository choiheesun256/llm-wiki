---
title: "Day 5: CDK & 세포주기 조절"
draft: false
---

# Day 5: CDK & 세포주기 조절

## Big Picture

Cyclin-dependent kinase(CDK)는 세포 분열의 엔진이다. CDK4/6 표적 치료는 암 치료에서 가장 성공적인 전략 중 하나가 됐다. 그러나 CDK는 증식만 조절하는 것이 아니다: CDK12는 DNA 수리 유전자 발현을 조절하고, CDK1은 세포사멸부터 골지체 역학까지 ~200개 기질을 제어하며, CDK4/6 억제는 면역원성 노화를 유도한다. 이러한 비정규(non-canonical) 기능의 이해가 새로운 병용 전략을 열어준다.

## 핵심 개념

**G1/S checkpoint** — CDK4/6-cyclin D가 Rb를 인산화하여 E2F 전사인자를 방출, S기 진입을 유도한다. CDK4/6 억제제(palbociclib, ribociclib, abemaciclib)는 세포를 G1에 정지시킨다.

**G2/M checkpoint** — WEE1과 PKMYT1이 각각 CDK1-Tyr15, CDK1-Thr14를 인산화하여 DNA 손상 수리 완료까지 CDK1을 비활성화. TP53 변이 암은 G1 checkpoint이 이미 손상되어 있어 이 G2/M checkpoint에 의존한다.

**BRCAness** — BRCA 변이 없이 BRCA 결핍을 모사하는 표현형. CDK12 소실은 DNA 수리 유전자 mRNA를 절단하여 BRCAness를 만든다.

## 논문별 정리

### Fassl 2022 — CDK4/6: 기초과학에서 치료까지
→ [[cancer/fassl-2022-cdk4-cdk6-kinases-basic-science]]

CDK4/6 생물학과 3개 FDA 승인 억제제의 포괄적 리뷰. 세포주기 정지를 넘어선 비정규 효과:
- **ERV 유도** — 내인성 레트로바이러스 재활성화로 선천면역 신호 촉발
- **PD-L1 하향조절** — cyclin D-CDK4의 SPOP 인산화를 통해
- **Treg 고갈** — CDK6 의존적 NFκB 신호를 통한 선택적 고갈

이러한 면역 효과가 CDK4/6i + 면역치료 병용의 생물학적 근거를 제공한다.

### Lee 2024 — CDK4/6i 노화는 면역원성이 있다
→ [[cancer/lee-2024-cdk46-senescence-immunogenic-properties]]

CDK4/6i 유도 therapy-induced senescence(TIS)는 DNA 손상제 TIS보다 질적으로 우수한 면역원성 프로그램을 생성:
- **유지**: 항원 제시(HLA-B/C/F, B2M, TAP1/2), T세포 chemokine(CXCL9/10/11)
- **결핍**: 염증성(IL-6, CXCL8, TNFα) 및 혈관신생(VEGFA, PDGF) SASP 인자
- **기전**: NF-κB가 아닌 STAT3가 지배적 신호 드라이버

CDK4/6i 유도 노화가 항암제 유도 노화보다 치료적으로 유용할 수 있는 이유를 설명한다.

### Ghelli Luserna di Rorà 2020 — WEE1 치료 표적
→ [[cancer/ghelli-2020-wee1-family-business-regulation-mitosis]]

WEE1과 PKMYT1은 "위조-종양유전자"다 — 정상 세포에서는 종양 억제자(게놈 무결성 유지)이지만, TP53 변이 암에서는 G2/M checkpoint 의존성을 만들어 치료 표적이 된다. WEE1 억제제(adavosertib)는 TP53 변이 난소암에서 가장 효과적. 중요한 구분: WEE1은 CDK1-Y15를, PKMYT1은 CDK1-T14를 표적 — 중복이 아니다.

### Massacci 2023 — CDK1은 세포주기 이상의 것
→ [[cancer/massacci-2023-cyclin-dependent-kinase-1-more-than]]

CDK1은 유전자 발현, 세포사멸, 미토콘드리아 역학, 세포내 수송까지 ~200개 기질을 제어한다. 범암(pan-cancer) 역설: 대부분의 암에서 CDK1 단백질 발현은 높지만 활성은 억제됨(WEE1/MYT1에 의한 Tyr15 과인산화). 예외는 BRCA 관련 암으로, CDK1이 높은 발현과 높은 활성을 동시에 보인다. CDK1은 단순한 유사분열 트리거가 아니라 세포 운명의 master coordinator다.

### Dubbury 2018 — CDK12와 DNA 수리
→ [[cancer/dubbury-2018-cdk12-regulates-dna-repair-genes]]

CDK12 소실은 genome-wide intronic polyadenylation(IPA)을 증가시켜 HR 수리 유전자 mRNA(ATM, BRCA1, BRCA2, FANCI, FANCD2)를 선택적으로 절단한다. BRCA 변이 없이 기능적 HRD(BRCAness)를 생성하며, 전립선암과 난소암에서 검증됐다. 임상적 함의: CDK12 소실 종양이 PARP 억제제에 반응할 수 있다 — 세포주기 생물학이 DNA 수리 표적치료와 직접 연결되는 지점이다 (**Day 1–2**).

## CDK 네트워크

```
                    CDK4/6 — G1/S checkpoint
                   /        (palbociclib, ribociclib, abemaciclib)
Cyclin D ────────
                   \
                    CDK2 — S기 진입
                           (CDK4/6i 보상 기전)

CDK1 ─── G2/M checkpoint
  │       WEE1 (Y15), PKMYT1 (T14)에 의해 조절
  │       (adavosertib = WEE1 표적)
  │
  └── ~200개 비정규 기질
      (세포사멸, 골지체, 미토콘드리아)

CDK12 ─── RNA Pol II elongation
           소실 → intronic polyadenylation
           → DNA 수리 유전자 절단
           → BRCAness → PARPi 감수성
```

## Day 간 연결

- **Day 1–2**: CDK12 소실이 BRCAness를 만들어 PARPi 감수성 부여
- **Day 2**: Färkkilä 2021에서 일부 PARPi 내성 클론이 CDK4/6i에 취약
- **Day 6**: Phosphoproteomics로 CDK1-Y15 인산화를 WEE1 의존성 기능적 바이오마커로 측정 가능
- **Day 7**: CPTAC 연구에서 phospho-Rb를 CDK4/6i 반응 바이오마커로 활용(Krug 2020, Satpathy 2021)

## 핵심 메시지

CDK는 단순한 세포주기 엔진이 아니라 면역, DNA 수리, 대사 기능을 가진 네트워크 허브다. CDK4/6 억제제는 성장 정지뿐 아니라 면역원성 노화를 통해서도 작용하고, CDK12 소실은 BRCAness를 만들어 PARP 치료와 연결되며, WEE1 억제는 TP53 소실과 합성치사 관계다. 임상 최전선은 이러한 비정규 기능을 활용한 합리적 병용 전략이다.
