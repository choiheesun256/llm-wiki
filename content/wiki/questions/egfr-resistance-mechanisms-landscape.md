---
title: "EGFR TKI (특히 osimertinib) 내성 메커니즘의 전체 landscape는?"
type: question
status: active
category: [drug-resistance, NSCLC, EGFR, targeted-therapy]
source_files:
  - ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance.md
  - han-2023-tumour-microenvironment-changes-osimertinib-resistance.md
  - sequist-2011-genotypic-histological-evolution-egfr-resistance.md
  - offin-2019-tumor-mutation-burden-egfr-tki-efficacy.md
  - xie-2026-adaptive-regulation-dntp-homeostasis-confers.md
  - wu-2021-intercellular-transfer-exosomal-wild-type.md
  - tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging.md
  - tumbrink-2021-next-tier-egfr-resistance-mutations.md
updated: 2026-05-19
---

# EGFR TKI (특히 osimertinib) 내성 메커니즘의 전체 landscape는?

## 짧은 답변

EGFR TKI 내성은 크게 **on-target 돌연변이**(EGFR 자체의 2차 변이), **off-target bypass**(MET, HER2 등 대체 경로), **조직학적 전환**(SCLC transformation, EMT)의 세 범주로 분류된다. 3세대 TKI인 osimertinib이 1/2세대 내성의 핵심인 T790M을 극복했지만, 이번에는 C797S 돌연변이, MET amplification, 비유전적(non-genetic) 메커니즘(IFITM3-MET 축, exosomal wtEGFR, circRNA) 등 새로운 내성 기전들이 부상하고 있다.

## 상세 답변

### 1. EGFR TKI 내성 연구의 역사적 맥락

[[sequist-2011-genotypic-histological-evolution-egfr-resistance]]는 1/2세대 TKI(erlotinib, gefitinib)에 대한 내성을 최초로 체계적으로 분류한 연구이다. 37명의 환자를 대상으로 serial re-biopsy를 시행한 결과, **T790M**(49%), MET amplification(13%), SCLC 전환(14%), EMT(~5%), PIK3CA 돌연변이(~5%) 등이 확인되었다. 이 연구는 단일 생검만으로는 전체 내성 landscape를 포착할 수 없음을 처음으로 입증했고, T790M 표적 3세대 TKI(osimertinib)의 개발을 위한 직접적인 근거를 제공했다.

---

### 2. On-target 내성: EGFR 자체의 변이

#### 2.1 C797S: osimertinib 시대의 핵심 on-target 내성

Osimertinib은 T790M에 공유결합(covalent bond)하여 1/2세대 내성을 극복했지만, **C797S** 변이가 osimertinib의 결합 부위인 C797 잔기를 변경하여 공유결합을 불가능하게 만든다. [[tumbrink-2021-next-tier-egfr-resistance-mutations]]에 따르면:

- **C797S**가 가장 빈번한 on-target 내성 돌연변이
- C797S와 T790M의 *cis* vs. *trans* 관계가 임상적으로 중요: *trans* 배치일 경우 1세대 + 3세대 TKI 병용 가능
- **L718Q/V**: 주로 3차 치료 후 출현; exon 19 deletion 환자에서 G724S와 함께 선호
- **1차 osimertinib** 사용 시 on-target 돌연변이는 내성 메커니즘의 ~10%에 불과 — off-target bypass가 지배적

#### 2.2 고차 복합 EGFR 돌연변이

임상적으로 compound EGFR mutation(예: T790M + C797S)의 빈도가 증가하고 있으며, 이는 4세대 TKI 개발의 동력이 되고 있다.

---

### 3. Off-target 내성: bypass signaling

#### 3.1 MET amplification (가장 확립된 off-target 경로)

[[sequist-2011-genotypic-histological-evolution-egfr-resistance]]에서 MET amplification의 13% 유병률이 최초 확인되었으며, 단일 환자 내에서도 T790M과 MET amp가 서로 다른 병변에 공존할 수 있음이 밝혀졌다. EGFR 억제와 무관하게 PI3K-AKT-ERK 경로를 활성화하는 이 메커니즘은 EGFR + MET 이중 억제를 필요로 한다.

#### 3.2 IFITM3-MET 축: 새로운 비유전적 내성 메커니즘 (2025)

[[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]]는 유전적 변이 없이 발생하는 내성의 ~50%를 설명할 수 있는 새로운 기전을 발견했다:

- 127명 환자 RNA-seq에서 **IFITM3**만이 short-PFS vs. long-PFS 집단에서 유일하게 유의미하게 upregulate
- 메커니즘: Tumor microenvironment(TME)의 면역/기질 세포가 osimertinib 치료 반응으로 **TNF-α, IL-6, IFN-γ**를 분비 → EGFR 돌연변이 종양 세포에서 IFITM3 발현 유도 → IFITM3가 lipid raft에 위치하여 **MET의 scaffold** 역할 수행 → MET 인산화 → PI3K-AKT 활성화 → EGFR 억제에도 불구하고 생존 신호 유지
- IHC 검증(n=95): IFITM3 양성군 mPFS 18.4개월 vs. 음성군 24.8개월 (HR 1.87)
- 치료 전략: osimertinib + capmatinib(MET 억제제) 병용이 in vivo에서 효과 확인; 이미 승인된 EGFR/MET 이중특이 항체 amivantamab과의 관련성

#### 3.3 기타 off-target bypass 경로

| 경로 | 주요 변이/이벤트 | 임상적 맥락 |
|------|----------------|------------|
| HER2 amplification | HER2 copy number 증가 | 1차 osimertinib 내성 |
| KRAS mutation | KRAS G12X | 드물지만 존재 |
| PIK3CA mutation | T790M 동반 | 1/2세대 TKI 내성 (~5%) |
| RET/ALK/NTRK fusion | 구조적 재배열 | 드문 off-target 메커니즘 |

---

### 4. 조직학적 전환: lineage plasticity

#### 4.1 SCLC transformation

[[sequist-2011-genotypic-histological-evolution-egfr-resistance]]에서 1/2세대 TKI 내성의 **14%**가 SCLC 전환으로 보고되었다. 핵심 특징:

- 전환된 SCLC는 원래의 sensitizing EGFR 돌연변이를 **반드시** 유지
- **RB1 + TP53** 동시 소실이 메커니즘적 드라이버(후속 연구에서 확인)
- etoposide/platinum 화학요법에 반응: 5명 중 4명에서 반응 확인

#### 4.2 EMT (Epithelial-to-Mesenchymal Transition)

1/2세대 TKI 내성의 ~5%에서 발생. E-cadherin 소실, vimentin 증가가 특징이며 종종 다른 내성 메커니즘과 공존한다.

---

### 5. 새로운 비유전적 / 비게놈적 메커니즘

#### 5.1 Exosomal wild-type EGFR 전달 (Wu 2021)

[[wu-2021-intercellular-transfer-exosomal-wild-type]]은 내성 세포에서 분비된 exosome이 **wild-type EGFR(wtEGFR)**을 포함하여 감수성 세포로 전달되며, 이 exosomal wtEGFR이 ERK/AKT를 재활성화하여 돌연변이 없이도 내성을 부여한다는 것을 보여주었다. GW4869(exosome 분비 억제제)가 내성을 역전시킬 수 있음을 확인했다.

#### 5.2 Tumor-derived exosome에 의한 TME 면역억제 (Han 2023)

[[han-2023-tumour-microenvironment-changes-osimertinib-resistance]]는 osimertinib 내성 시 TME의 면역억제적 재편을 분석했다:

- 내성 시 CD8+ T세포 침윤 감소, M0/M2 대식세포 증가
- H1975OR 내성 세포의 **tumor-derived exosome(TDE)**이 M0 대식세포를 M2로 분극화 (conditioned medium이 아닌 exosome이 핵심)
- R-EXO에 upregulate된 miRNA: **miR-1258-3p, miR-17-5p**; 단백질: COL6A1, ACLY, TLN1
- Pre-activated PBMC가 내성 세포를 더 효과적으로 사멸 → 면역활성화 전략의 가능성

#### 5.3 circRNA-매개 내성: circPPAPDC1A (Tang 2024)

[[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]]은 matched pre/post-resistance 조직 쌍(n=5)의 circRNA microarray에서 **circ_PPAPDC1A**가 osimertinib 내성 조직에서 현저히 upregulate됨을 발견했다:

- 메커니즘: circ_PPAPDC1A → **miR-30a-3p sponge** → IGF1R 발현 탈억제 → PI3K/AKT/mTOR bypass 활성화
- IGF1R 구동 bypass signaling이 EGFR와 독립적으로 작동
- circ_PPAPDC1A 침묵화가 in vitro/in vivo에서 내성 부분 역전

#### 5.4 dNTP 대사 항상성의 적응적 재조절 (Xie 2026)

[[xie-2026-adaptive-regulation-dntp-homeostasis-confers]]는 완전히 새로운 대사적 내성 메커니즘을 제시했다:

- 내성 세포에서 **RRM2(ribonucleotide reductase)** upregulation, **SAMHD1(dNTP hydrolase)** downregulation
- 이를 통해 dNTP pool을 확장하여 EGFR 억제 하에서도 증식 지속
- 신호 경로 재활성화가 아닌 대사 bypass를 통한 내성
- RRM2 억제제와 osimertinib 병용이 내성 종양을 재감작시킬 수 있음

---

### 6. TMB와 내성의 관계 (Offin 2019)

[[offin-2019-tumor-mutation-burden-egfr-tki-efficacy]]는 TMB가 EGFR-TKI에 대해 **역방향 예측 인자**임을 입증했다:

- High TMB(>4.85 mut/Mb): mTTD 9.6개월, mOS 20.6개월 vs. Low TMB: mTTD 16.7개월, mOS 40.6개월
- 내성 획득 시 TMB 유의미한 증가(3.42 → 6.56 mut/Mb)
- High TMB 환자에서 T790M 획득 비율이 낮은 경향 → 대체 내성 경로가 지배적
- TP53, SMARCA4 공존 변이가 high TMB와 연관

---

### 7. 다음 세대 극복 전략

#### 7.1 4세대 TKI 개발

C797S + T790M 이중 변이에 대응하는 **allosteric EGFR inhibitor** 개발 중. 기존 ATP-결합 부위가 아닌 allosteric pocket을 표적으로 한다.

#### 7.2 병용 요법

| 내성 메커니즘 | 병용 전략 | 임상 근거 |
|-------------|---------|---------|
| MET amplification / IFITM3-MET | Osimertinib + capmatinib/savolitinib | In vivo 효과 확인 ([[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]]) |
| EGFR/MET | Amivantamab + lazertinib | PAPILLON/MARIPOSA Phase III |
| Bypass pathway | Osimertinib + MEK inhibitor | 임상시험 진행 중 |
| Exosomal resistance | GW4869 등 exosome 억제 | 전임상 단계 |
| dNTP 대사 | Osimertinib + RRM2 inhibitor | 전임상 단계 ([[xie-2026-adaptive-regulation-dntp-homeostasis-confers]]) |

#### 7.3 4세대 방향: bispecific antibody

EGFR/MET 이중특이 항체 **amivantamab**이 이미 승인되었으며([[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]] 참조), IFITM3-MET 축을 통한 비유전적 내성에도 효과적일 가능성이 있다.

---

## 핵심 비교표

| 내성 범주 | 세부 메커니즘 | TKI 세대 | 빈도 | 주요 전략 |
|----------|------------|--------|------|---------|
| **On-target** | T790M | 1/2세대 | ~49% | 3세대(osimertinib) |
| **On-target** | C797S | 3세대 | ~10-15% | 4세대 allosteric TKI |
| **On-target** | L718Q, G724S | 3세대 | 드묾 | 구조 기반 신약 |
| **Off-target bypass** | MET amplification | 1/2/3세대 | ~13-20% | EGFR + MET 병용 |
| **Off-target bypass** | IFITM3-MET (비유전적) | 3세대 | ~비유전적 내성의 다수 | Amivantamab, capmatinib |
| **Off-target bypass** | HER2 amplification | 3세대 | ~5% | EGFR + HER2 병용 |
| **조직학적 전환** | SCLC transformation | 1/2/3세대 | ~14% | Etoposide/platinum |
| **조직학적 전환** | EMT | 1/2/3세대 | ~5% | 표적 미확립 |
| **비유전적** | Exosomal wtEGFR | 3세대 | 불명확 | Exosome 억제 |
| **비유전적** | circRNA(circ_PPAPDC1A) | 3세대 | 불명확 | IGF1R 억제 |
| **대사적** | dNTP homeostasis (RRM2↑/SAMHD1↓) | 3세대 | 전임상 | RRM2 억제제 |

---

## 관련 논문

- [[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]] — IFITM3-MET 물리적 상호작용이 PI3K-AKT 활성화를 통해 비유전적 osimertinib 내성을 유발함; TME 사이토카인 loop 포함
- [[han-2023-tumour-microenvironment-changes-osimertinib-resistance]] — Osimertinib 내성 시 종양 유래 exosome이 M2 대식세포 분극화를 유도하여 면역억제적 TME 재편을 야기
- [[sequist-2011-genotypic-histological-evolution-egfr-resistance]] — 1/2세대 TKI 내성의 최초 체계적 분류; T790M(49%), MET amp(13%), SCLC 전환(14%) 확인
- [[offin-2019-tumor-mutation-burden-egfr-tki-efficacy]] — TMB가 EGFR-TKI 효능의 역방향 바이오마커임을 입증; 내성 획득 시 TMB 증가
- [[xie-2026-adaptive-regulation-dntp-homeostasis-confers]] — RRM2 상향/SAMHD1 하향을 통한 dNTP pool 확장으로 osimertinib 내성을 부여하는 새로운 대사적 메커니즘
- [[wu-2021-intercellular-transfer-exosomal-wild-type]] — Exosomal wild-type EGFR의 세포간 전달이 비유전적 내성을 부여; GW4869로 역전 가능
- [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] — circ_PPAPDC1A가 miR-30a-3p를 sponge하여 IGF1R 발현을 통한 PI3K bypass를 활성화
- [[tumbrink-2021-next-tier-egfr-resistance-mutations]] — C797S, L718Q, G724S 등 osimertinib 이후 on-target 내성 돌연변이의 구조적 분류 및 임상적 맥락 제공

## Related pages

- [[drug-resistance]]
- [[EGFR]]
- [[NSCLC]]
- [[osimertinib]]
- [[MET]]
- [[tumor-microenvironment]]
- [[lineage-plasticity]]
- [[exosome]]
