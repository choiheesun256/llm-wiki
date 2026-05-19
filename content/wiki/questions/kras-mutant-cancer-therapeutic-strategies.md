---
title: "KRAS 변이 암에서의 치료 전략과 내성 극복 방안은?"
type: question
status: active
category: [drug-resistance, targeted-therapy, KRAS, NSCLC, immunotherapy]
source_files:
  - yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr.md
  - skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance.md
  - thatikonda-2024-co-targeting-sos1-enhances-antitumor-effects.md
  - tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition.md
  - xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition.md
  - odintsov-2022-cic-mediated-modulation-mapk-signaling-opposes.md
  - edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary.md
  - wagner-2020-senescence-therapeutically-relevant-cdk46.md
updated: 2026-05-19
---

# KRAS 변이 암에서의 치료 전략과 내성 극복 방안은?

## 짧은 답변

KRAS G12C 공유결합 억제제(sotorasib, adagrasib)는 40년간 "undruggable"이었던 KRAS를 처음으로 직접 표적화했으나, 임상 반응은 ~40% ORR, ~6-8개월 PFS로 제한적이다. 내성은 **세 시간 범주**에 걸쳐 발생한다: 수일 내 비균일 적응(Xue 2020: HBEGF-EGFR, AURKA 피드백), 수주에 걸친 YAP1/TAZ-TEAD bypass(Edwards 2023), 수개월 후 subclonal 유전체 변이 축적(Yaeger 2023: KRAS G12C amplification 등). 이를 극복하기 위한 병용 전략으로는 SOS1 co-targeting(Thatikonda 2024), YAP1/TAZ-TEAD 억제, dual ICB(면역항암제)가 유망하다. KEAP1/STK11 co-mutation은 면역치료 저항성의 핵심 유전체 예측 인자로, anti-CTLA4 추가(Skoulidis 2024)가 돌파구가 된다. KRAS G12C 이외의 변이(G12D, G12V 등)에는 비공유결합(non-covalent) pan-KRAS 억제제, SOS1i, MRTX1133 등이 개발 중이다.

## 상세 답변

### 1. KRAS G12C 억제제: sotorasib과 adagrasib

KRAS G12C는 전체 KRAS 변이의 약 13%(NSCLC의 경우 ~44%)를 차지하며, Cys12 잔기의 특이성 덕분에 공유결합 표적화가 가능하다. 억제제는 KRAS가 GDP-결합(비활성) 상태일 때만 결합한다는 근본적 제약이 있다.

| 약물 | 임상 승인 | ORR (NSCLC) | mPFS | 기전 |
|------|---------|------------|------|------|
| Sotorasib (AMG510) | 2021 FDA | ~37% (CodeBreaK100) | ~6.8개월 | KRAS G12C-GDP 공유결합 |
| Adagrasib (MRTX849) | 2022 FDA | ~43% (KRYSTAL-1) | ~6.5개월 | KRAS G12C-GDP 공유결합 |

**공유결합 기전의 내재적 취약점**: [[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]](Nature 2020)이 단일세포 수준에서 밝혔듯, 새로 합성된 KRAS(G12C) 단백질은 약물과 결합하기 전에 GTP-결합(활성) 상태를 취할 수 있다. 이 "conformational cycling"이 선천적 탈출 창구를 만든다.

---

### 2. 획득 내성 메커니즘

#### 2.1 빠른 비균일 적응 (Xue 2020): 수일 내 비유전적 내성

[[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]]은 G12Ci 처리 72시간 이내에 세포 집단이 두 경로로 분기됨을 scRNA-seq으로 보였다:

- **~80% 세포**: G0 quiescence에 진입 (억제)
- **~20% 세포**: KRAS 신호를 재활성화하고 증식 계속 (적응)

두 가지 적응 기전:
1. **HBEGF-EGFR 축**: Quiescent 세포에서 분비된 HBEGF가 EGFR을 활성화 → SHP2/GRB2/SOS1 경유 KRAS nucleotide exchange 촉진 → 새 KRAS(G12C)를 활성 GTP 상태로 유지
2. **AURKA 안정화**: AURKA가 KRAS(G12C)-CRAF 복합체에서 활성 KRAS를 약물-비감수성 상태로 안정화

**치료 함의**: G12Ci + EGFR 억제제(gefitinib) 또는 G12Ci + AURKA 억제제(alisertib)가 in vivo에서 유의미한 시너지.

#### 2.2 CRC에서의 획득 내성 landscape (Yaeger 2023)

[[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]](Cancer Discovery 2023)는 CRC에서 KRAS G12C + EGFR 억제제 병용에 대한 획득 내성을 분석했다:

- **KRAS G12C amplification**: 가장 빈번한 clonal 내성 기전 (subclonal 변이들을 압도)
- **대부분 변이는 subclonal**: ctDNA로 저 VAF에서 검출; ERK 재활성화 방지가 공통 주제
- **기타 내성 기전**: BRAF/MEK 돌연변이, RTK 활성화 (모두 ERK 재활성화)
- **치료 중단 후 oncogene-induced senescence**: 내성 세포가 약물 철회 후 senescence에 취약 → senolytic 병용 전략의 근거

**NSCLC와의 차이**: CRC에서는 EGFR 피드백 재활성화가 더 지배적이어서 KRAS G12C 단독 억제가 효과가 없고, EGFR 병용이 필수적이다.

#### 2.3 공간적으로 이질적인 임상 내성 (Tsai 2022)

[[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]](J. Clin. Invest. 2022)는 sotorasib 치료 후 급속 진행한 1명의 KRAS G12C NSCLC 환자의 rapid-autopsy(17개 샘플)에서:

- **이차 KRAS 변이 없음**: KRAS G12C mutant allele frequency 오히려 감소 (copy number loss) — 약물 표적 자체에 대한 negative selection
- **KRAS 독립적 MAPK/AKT/mTOR 재활성화**: 이차 변이 없이 상위 RTK(EGFR, HER2, c-MET) 신호에 의한 bypass
- **TGF-beta가 master upstream regulator**: IPA에서 TGF-beta가 EMT, 면역냉각, 혈관신생, complement 활성화를 동시 조율
- **공간적 이질성**: 인접 전이 병변들이 서로 다른 독립적 내성 기전 — 단일 생검으로는 전체 landscape 파악 불가
- **면역냉각(immune-cold) TME**: T/B cell 시그니처 감소, neoantigen burden 감소 (immune editing)

#### 2.4 YAP1/TAZ-TEAD bypass (Edwards 2023)

[[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]](Cancer Research 2023)는 Hippo 경로 소실이 G12Ci 내성의 주요 비유전체 드라이버임을 CRISPR 스크린으로 확인했다:

- **Hippo 소실 유전자**: NF2, LATS1/2, STK3/4(MST1/2), TAOK1/2
- **YAP1/TAZ → TEAD 활성화를 통해 두 가지 KRAS-독립적 생존 경로**:
  1. KRAS 하류 표적 유전자의 ERK-독립적 발현 (BIRC5, CDC20, ECT2, FOSL1, MYC)
  2. PI3K-AKT-mTOR 활성화
- **획득 내성 adagrasib 세포에서 YAP1/TAZ 핵 전위 증가**
- **TEAD 억제제(VT-3989) + adagrasib**: CDX/PDX 모델에서 종양 재성장 유의미하게 지연
- **임상 검증**: ~50% G12Ci 재발 환자에서 검출 가능한 유전체 변이 없음 → YAP1/TAZ가 비유전체 내성의 주요 기전

---

### 3. KEAP1/STK11 co-mutation과 면역치료 저항성 (Skoulidis 2024)

[[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]](Nature 2024)는 KRAS 변이 NSCLC에서 co-mutation의 면역치료 영향을 대규모로 분석했다:

**KEAP1/STK11 변이의 역학**:
- KRAS 변이 NSCLC의 ~20%에서 STK11(LKB1) 또는 KEAP1 co-mutation 존재
- **KEAP1 변이**: PD-(L)1 억제제 저항성의 가장 강력한 단일 유전체 예측 인자
- **STK11 변이**: KEAP1과 유사한 방향이지만 효과 크기가 다소 작음

**저항성 기전**:
- KEAP1 소실 → NRF2 활성화 → 대사 재프로그래밍 → 산화적 스트레스 저항
- 면역억제 골수세포(myeloid cell) 축적, iNOS+ tumoricidal 표현형 억제

**Dual ICB로 극복**:
871명 후향 코호트 + POSEIDON Phase III 임상시험(1,013명):
- Tremelimumab(anti-CTLA4) + durvalumab(anti-PD-L1) 병용
- STK11/KEAP1 변이 하위군에서 **전체 생존(OS) 두 배 연장**
- 기전: CTLA4 차단이 골수세포를 iNOS+ 항종양 표현형으로 재프로그래밍

**임상적 함의**: KRAS 변이 NSCLC 환자에서 KEAP1/STK11 동반 변이를 반드시 검사하고, 변이가 있는 경우 dual ICB(anti-CTLA4 + anti-PD-L1)를 우선 고려해야 한다.

---

### 4. 병용 전략: SOS1 co-targeting (Thatikonda 2024)

[[thatikonda-2024-co-targeting-sos1-enhances-antitumor-effects]](Nature Cancer 2024)는 14개 KRAS G12C 세포주(NSCLC + CRC), CDX, PDX 모델을 이용한 체계적 병용 스크린을 수행했다:

**핵심 발견**:
- **BI-3406(SOS1i) + adagrasib**: RAS-MAPK 신호를 완전히 억제 (SHP2i, EGFRi 병용보다 우수)
- 179개 화합물 고처리 스크린에서 SOS1i가 최상위 시너지 파트너로 도출
- 내성 발생이 지연되고, adagrasib-resistant 모델에서도 효능 유지
- In vivo 효능: NCI-H2122, SW837, F3008, B8032 CDX + PDX 모델에서 확인

**MRAS: 새로운 내성 노드**:
- KRAS G12C 억제 압력 하에서 **MRAS 상향조절**이 새로운 획득 내성 기전으로 확인
- SOS1i와 SHP2i 모두 MRAS 활성 억제 가능
- MRAS는 drug repurposing 및 네트워크 의학 기반 표적 탐색의 새로운 후보

**SOS1 표적 합리성**: SOS1은 RAS superfamily의 guanine nucleotide exchange factor(GEF)로, KRAS G12C inhibitor 치료 후 피드백 재활성화로 상위에서 KRAS nucleotide exchange를 촉진한다. SOS1 억제로 이 피드백 루프를 차단.

---

### 5. CIC-MAPK 축 (Odintsov 2022)

[[odintsov-2022-cic-mediated-modulation-mapk-signaling-opposes]](Cancer Research 2022)는 KRAS G12C에 직접 관련되지는 않지만, RAS 경로 하류 내성에 중요한 CIC(Capicua) 종양 억제인자 기전을 규명했다:

- **CIC 소실 → MAPK/ERK 신호 활성화**: RET 억제제(selpercatinib) 내성 유발
- **MEK 억제제로 극복**: CIC 소실-매개 RET 억제제 내성을 MEK 억제가 회복
- **일반 원리**: 종양 억제인자 소실 → MAPK bypass가 다양한 표적 치료 내성의 공통 메커니즘

KRAS 신호 하류에서 유사한 tumor suppressor loss-MAPK bypass 축이 KRAS G12C 억제제 내성에도 작동할 수 있다.

---

### 6. KRAS G12C 너머: 다른 KRAS 변이에 대한 접근법

KRAS G12C 이외의 변이(G12D, G12V, G13D 등)는 Cys 잔기가 없어 현재 승인된 공유결합 억제제로 표적화할 수 없다.

**현재 개발 중인 접근법**:

| 전략 | 약물 예시 | 표적 변이 | 단계 |
|------|---------|---------|------|
| G12D-selective 공유결합 억제제 | MRTX1133 | KRAS G12D | 전임상/Phase I |
| Pan-KRAS SOS1i | BI-3406, BI-1701963 | G12C, G12D 등 | Phase I/II |
| SHP2 억제제 | TNO155, RMC-4630 | RAS 활성화 종양 | Phase I/II |
| KRAS-SOS1 PPI 억제 | — | Pan-KRAS | 개발 중 |
| Tri-complex 억제제 | RMC-6236(pan-RAS) | Multiple KRAS | Phase I |

**PDAC (췌장암)에서 KRAS G12D**: NSCLC에 비해 KRAS G12D 빈도가 높아(~40%), MRTX1133 등 G12D 선택적 억제제 개발이 활발하다.

---

### 7. KRAS G12C 내성의 시간축 요약

| 시간 범위 | 기전 유형 | 대표 사례 | 극복 전략 |
|----------|---------|---------|---------|
| 수시간-수일 | 비균일 적응 (비유전체) | Xue 2020: HBEGF-EGFR, AURKA | G12Ci + EGFR/AURKA 억제 |
| 수주 | Bypass 경로 활성화 (비유전체) | Edwards 2023: YAP1/TAZ-TEAD | G12Ci + TEAD 억제제(VT-3989) |
| 수개월 | Subclonal 유전체 변이 선택 | Yaeger 2023: KRAS amplification, BRAF/MEK | 변이 기반 차세대 억제제, senolytic |
| 수개월 (공간적) | TGF-beta 매개 TME 재편 | Tsai 2022: 면역냉각, EMT | TGF-beta 차단, 면역치료 강화 |

---

## 핵심 비교표

| 내성 기전 | 발생 시기 | 유전체/비유전체 | 빈도 (CRC vs NSCLC) | 극복 전략 |
|---------|---------|------------|------------------|---------|
| HBEGF-EGFR 피드백 | 수일 | 비유전체 | NSCLC > CRC | G12Ci + EGFRi/SHP2i |
| AURKA 활성화 | 수일 | 비유전체 | — | G12Ci + ALK/AURKA 억제 |
| YAP1/TAZ-TEAD | 수주 | 비유전체 | Pan-cancer | G12Ci + TEADi(VT-3989) |
| KRAS G12C amplification | 수개월 | 유전체 (clonal) | CRC 지배적 | Senolytic, 고용량 G12Ci |
| BRAF/MEK 변이 | 수개월 | 유전체 (subclonal) | CRC | G12Ci + MEKi 또는 BRAFi |
| RTK 활성화 (EGFR 등) | 수개월 | 유전체/비유전체 | 혼재 | G12Ci + EGFRi (아미반타맙) |
| MRAS 상향 | 수개월 | 비유전체 | 확인 중 | G12Ci + SOS1i |
| TGF-beta TME 재편 | 수개월 | 비유전체 | 임상 1례 | TGF-beta 차단, EMT 역전 |
| KEAP1/STK11 (면역) | 일차 저항성 | 유전체 | ~20% NSCLC | Anti-CTLA4 + anti-PD-L1 |

---

## 관련 논문

- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] — CRC에서 KRAS G12C + EGFR 억제제 내성: KRAS G12C amplification이 clonal 기전; 약물 철회 후 senolytic 취약성 (Cancer Discovery)
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 변이 NSCLC에서 dual ICB(tremelimumab + durvalumab)가 OS 두 배 연장; KEAP1가 PD-(L)1i 저항성 최강 예측 인자 (Nature)
- [[thatikonda-2024-co-targeting-sos1-enhances-antitumor-effects]] — BI-3406(SOS1i) + adagrasib 조합이 RAS-MAPK 완전 억제; MRAS 상향이 새로운 내성 기전 확인 (Nature Cancer)
- [[tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]] — Sotorasib 내성의 rapid-autopsy 조직 분석: 이차 KRAS 변이 없는 공간적으로 이질적 내성; TGF-beta master coordinator (J. Clin. Invest.)
- [[xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]] — G12Ci 처리 72시간 내 scRNA-seq으로 bimodal 적응 내성 발견; HBEGF-EGFR, AURKA 피드백 기전 규명 (Nature)
- [[odintsov-2022-cic-mediated-modulation-mapk-signaling-opposes]] — CIC 종양 억제인자 소실이 MAPK/ERK bypass를 통한 RET 억제제 내성 유발; MEK 억제로 극복 (Cancer Research)
- [[edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]] — Hippo 경로 소실/YAP1-TAZ-TEAD가 G12Ci 1차 및 획득 내성 주도; TEAD 억제제 VT-3989 + adagrasib 시너지 (Cancer Research)
- [[wagner-2020-senescence-therapeutically-relevant-cdk46]] — CDK4/6i 내성 기전 종합(RB1 소실, SASP, CCNE2 등); SASP 매개 EMT 유도와 senolytic 차단 전략 제공 (Oncogene review)

## Related pages

- [[emt-drug-resistance-immune-evasion]]
- [[drug-resistance]]
- [[NSCLC]]
- [[immunotherapy-resistance]]
- [[immune-evasion-mechanisms-cancer]]
- [[KRAS]]
- [[SOS1]]
- [[KEAP1]]
- [[STK11]]
- [[combination-therapy]]
- [[tumor-microenvironment]]
