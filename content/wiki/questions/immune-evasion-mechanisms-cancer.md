---
title: "암세포의 면역 회피 메커니즘에는 어떤 것들이 있고, 이를 타겟하는 전략은?"
type: question
status: active
category: [immune-evasion, cancer-biology, immunotherapy]
source_files: [yang-2022-enhancing-pd-l1-degradation-itch-during, xu-2021-pd-l2-glycosylation-promotes-immune-evasion, yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation, yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic, zhang-2021-kdm5b-promotes-immune-evasion-recruiting, jung-2019-dna-methylation-loss-promotes-immune, voli-2020-intratumoral-copper-modulates-pd-l1-expression, li-2021-metastasis-immune-evasion-cgamp-enpp1, ikeda-2025-immune-evasion-through-mitochondrial-transfer, mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion, skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance, tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge, wang-2025-autophagy-tumor-immune-escape-immunotherapy, soula-2024-glycosphingolipid-synthesis-mediates-immune-evasion, tauriello-2018-tgf-drives-immune-evasion-genetically, meng-2025-reversal-tumour-immune-evasion-enhanced]
updated: 2026-05-19
---

# 암세포의 면역 회피 메커니즘에는 어떤 것들이 있고, 이를 타겟하는 전략은?

## 짧은 답변

암세포의 면역 회피는 checkpoint 분자의 번역 후 변형(glycosylation, ubiquitination, palmitoylation)에 의한 안정화, autophagy·후성유전학을 통한 MHC-I 발현 감소, cGAS-STING 경로 억제, 미토콘드리아 전달을 통한 T cell 기능 손상, EMT에 의한 TME 면역억제 등 다층적 메커니즘으로 구성된다. 각 메커니즘은 별개의 치료 표적이 되며, KEAP1/STK11 돌연변이처럼 특정 유전적 배경이 면역항암제 저항성을 규정하는 경우 dual ICB가 돌파구가 될 수 있다.

## 상세 답변

### 1. Checkpoint 단백질의 번역 후 변형(PTM)에 의한 안정화

#### PD-L1 Ubiquitination — ITCH (Yang 2022)

[[yang-2022-enhancing-pd-l1-degradation-itch-during]]은 E3 ubiquitin ligase **ITCH**가 PD-L1을 ubiquitin화하여 proteasomal 분해를 유도함을 보였다. MAPK 억제제(MAPKi) 치료 시 PD-L1이 축적되어 T cell을 억압하고 획득 저항성을 유발하는데, ITCH activator 소분자가 MAPKi와 병용 시 흑색종 및 KRAS 돌연변이 모델에서 항종양 반응을 지속시켰다. 이는 항체가 아닌 소분자로 PD-L1을 표적하는 새로운 전략이다.

#### PD-L2 Glycosylation (Xu 2021)

[[xu-2021-pd-l2-glycosylation-promotes-immune-evasion]]은 PD-L2의 **N-glycosylation**이 단백질을 안정화하고 PD-1 결합을 강화함을 HNSCC에서 밝혔다. Glycosylated PD-L2는 분해에 저항하며, 표면 발현을 유지하여 anti-PD-1 치료에 대한 저항성에 기여한다. Glycosylation 타겟팅으로 T cell 세포독성이 회복된다. PD-L1 위주의 면역항암제가 PD-L2도 함께 고려해야 함을 시사한다.

#### B7-H4 Palmitoylation — ZDHHC3 (Yan 2025)

[[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation]]은 **ZDHHC3**가 B7-H4의 Cys130을 palmitoylation하여 lysosomal 분해를 방지하는 새 메커니즘을 보였다. CDK4/6 억제제 **abemaciclib**은 세포 주기와 무관하게 lysosome을 활성화하여 B7-H4를 분해하고, T cell 활성화를 회복시킨다. CDK4/6 억제제의 면역 조절 역할을 처음 실증한 사례로, B7-H4 발현 종양(특히 유방암)에서의 약물 재배치 가능성을 제시한다.

#### 구리(Copper)에 의한 PD-L1 조절 (Voli 2020)

[[voli-2020-intratumoral-copper-modulates-pd-l1-expression]]은 구리 수송체 **CTR-1(SLC31A1)**의 발현이 TCGA pan-cancer에서 PD-L1과 양의 상관을 가짐을 보였다. 구리 보충이 STAT3/EGFR 인산화를 통해 PD-L1을 전사 상향조절하는 반면, 구리 chelator(disulfiram, TEPA)는 pSTAT3·pEGFR를 억제하여 ubiquitin 매개 PD-L1 분해를 유도하고 CD8+ T cell·NK cell 침윤을 증가시킨다. 소아 신경모세포종/뇌종양 180명 IHC 코호트에서 임상 연관성도 확인했다.

---

### 2. MHC-I 발현 감소에 의한 항원 제시 억압

#### Autophagy에 의한 MHC-I 분해 (Yamamoto 2020)

[[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]]은 췌장암(PDAC)에서 autophagy cargo receptor **NBR1**이 MHC-I를 선택적으로 lysosome으로 운반하여 분해시킴을 Nature에 보고했다. Chloroquine으로 autophagy를 억제하면 MHC-I 표면 발현이 회복되고 CD8+ T cell 반응이 강화된다. Dual ICB(anti-PD1 + anti-CTLA4)와의 시너지가 PDAC 마우스 모델에서 확인되었다. [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]]은 이 autophagy–MHC-I–PD-L1 축을 리뷰하며, mTOR/AMPK/ULK1/Beclin-1 경로 조절 및 chloroquine/hydroxychloroquine + ICB 병용 전략을 정리한다.

#### PCSK9에 의한 MHC-I 분해 — HCC (Meng 2025)

[[meng-2025-reversal-tumour-immune-evasion-enhanced]]은 간세포암(HCC)에서 **PCSK9**가 핵심 MHC-I 분해 매개자임을 밝히고, PCSK9 표적 siRNA와 종양 항원 mRNA를 결합한 dual-functional RNA LNP 시스템을 개발했다. PCSK9 knockdown으로 MHC-I 표면 발현이 ~6배 증가하고, TME가 CD8+ T cell·NK cell 침윤 증가, M2 macrophage 감소로 재프로그래밍된다.

#### 후성유전학적 MHC-I 억압

**KDM5B/SETDB1** [[zhang-2021-kdm5b-promotes-immune-evasion-recruiting]]: H3K4 demethylase KDM5B가 SETDB1(H3K9 methyltransferase)을 내재성 레트로트랜스포존(MMVL30 등)으로 모집하여 침묵시킨다. KDM5B 결핍 시 레트로트랜스포존 발현 억제가 해제되어 cytosolic RNA/DNA sensing(RIG-I, cGAS)이 활성화되고, type I IFN 반응이 종양 거부를 유도한다. 흑색종에서 ICB 반응도 강화된다. (Nature 2021)

**DNA methylation loss** [[jung-2019-dna-methylation-loss-promotes-immune]]: Pan-cancer TCGA 분석에서 전반적인 DNA methylation 감소가 면역조절 유전자를 포함한 late-replicating domain의 CGI hypermethylation과 동반됨을 보였다. Global methylation 감소는 TMB나 이수성보다 ICI 저항성의 더 강한 예측 인자로, 폐암(n=60), 흑색종(n=40)에서 검증되었다.

---

### 3. cGAS-STING 경로 봉쇄 — ENPP1 (Li 2021)

[[li-2021-metastasis-immune-evasion-cgamp-enpp1]]은 염색체 불안정성(CIN) 종양에서 세포 밖으로 방출된 cGAMP가 항종양 면역을 자극하는 반면, 종양이 **ENPP1** 외핵산분해효소를 통해 cGAMP를 면역억제성 **adenosine**으로 가수분해하여 면역 회피와 전이를 촉진함을 보였다. ENPP1 소실 시 면역 세포 침윤이 회복되고 anti-PD-1 반응이 향상된다. ENPP1은 CIN 종양에서의 면역항암제 병용 표적으로 주목받는다.

---

### 4. 미토콘드리아 전달에 의한 T cell 기능 손상 (Ikeda 2025)

[[ikeda-2025-immune-evasion-through-mitochondrial-transfer]]는 암세포가 **tunneling nanotube(TNT)와 세포외 소포(EV)**를 통해 mtDNA 돌연변이를 가진 미토콘드리아를 종양 침윤 T cell(TIL)에 전달함을 보였다. 전달된 미토콘드리아는 mitophagy를 회피하고 T cell 내에서 동형질(homoplasmic) 대체를 달성하여, T cell의 대사 이상·노화(senescence)·effector/memory 기능 소실을 유발한다. 환자 12명 중 5명에서 TIL과 암세포 간 동일한 mtDNA 돌연변이가 확인되었으며, 종양 내 mtDNA 돌연변이 존재가 흑색종·NSCLC에서 ICI 반응 불량 예측 인자로 기능한다. 이는 PD-L1·TMB와 독립적인 새로운 ICI 저항성 메커니즘이다.

---

### 5. EMT-면역 회피 연계 (Mullins 2022)

[[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]]은 epithelial-mesenchymal plasticity(EMP)가 이진 스위치가 아닌 hybrid E/M 스펙트럼임을 강조하며, hybrid E/M 세포가 여러 면역 회피 기전을 동시 활성화함을 리뷰한다:
- Checkpoint 분자(PD-L1, CD47 등) 발현 증가
- 항원 제시 결핍
- MDSC·TAM·Treg 모집을 통한 TME 억압
- CTC cluster가 면역억제적 이점을 이용한 순환
EMT 상태 자체가 ICB 저항성의 독립적 예측 인자로 작용한다.

#### TGF-β에 의한 T cell 배제 (Tauriello 2018)

[[tauriello-2018-tgf-drives-immune-evasion-genetically]]는 전이성 대장암(CRC) 마우스 모델(LAKTP)에서 **TGF-β**가 T cell 배제와 TH1 effector 억압의 핵심 드라이버임을 보였다. Anti-PD-1 단독은 효과가 없으나, TGFBR1 억제제 **galunisertib**가 전이를 예방하고 anti-PD-1을 감작한다. 이 고TGF-β 면역 배제 표현형은 인간 CMS4(mesenchymal) CRC에 해당한다.

---

### 6. 대사 경로에 의한 면역 억제

**Glycosphingolipid(GSL) 합성** [[soula-2024-glycosphingolipid-synthesis-mediates-immune-evasion]]: KRAS 활성화가 GSL 합성 효소(UGCG, B4GALT5)를 상향조절하여 종양 세포 표면에 GSL을 축적시키고, NK cell 및 T cell의 인식을 차단한다. UGCG 억제가 항종양 면역을 회복시키고 ICB와 시너지를 나타낸다. 췌장암·폐암·대장암 KRAS 돌연변이 모델에서 검증되었다.

[[tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge]]는 면역 회피의 네 기둥을 정리한다: (1) 면역억제, (2) checkpoint 조절, (3) TME 변환, (4) 항원 제시 억압. 새로운 checkpoint 표적(LAG-3, TIGIT, VISTA)과 이중특이적 항체(bispecific antibody), 온코리틱 바이러스, 나노면역치료 플랫폼을 다룬다.

---

### 7. KEAP1/STK11 돌연변이와 dual ICB 전략 (Skoulidis 2024)

[[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]]는 NSCLC에서 **KEAP1 돌연변이**가 PD-(L)1 억제제 저항성의 가장 강력한 유전체 예측 인자임을 보였다. 871명 후향 코호트와 POSEIDON 3상 임상시험(1,013명) 분석에서, **tremelimumab(anti-CTLA4) + durvalumab(anti-PD-L1)** 병용이 STK11/KEAP1 돌연변이 하위군에서 전체 생존을 두 배 연장시켰다. 이는 골수세포의 iNOS+ 항종양 표현형으로의 재프로그래밍을 통해 이루어진다. KEAP1/STK11 돌연변이 NSCLC에서 dual ICB가 표준적 고려 사항이 되고 있다.

---

## 핵심 비교표

| 메커니즘 | 분자 | 암종 | 치료 전략 | 주요 논문 |
|----------|------|------|----------|----------|
| PD-L1 ubiquitin 분해 억제 | ITCH (E3 ligase) | 흑색종, KRAS | ITCH activator 소분자 | Yang 2022 |
| PD-L2 N-glycosylation 안정화 | — | HNSCC | Glycosylation 억제 | Xu 2021 |
| B7-H4 palmitoylation 안정화 | ZDHHC3 | 유방암 | Abemaciclib (CDK4/6i) | Yan 2025 |
| Cu–STAT3/EGFR PD-L1 유도 | CTR-1, STAT3, EGFR | 신경모세포종 등 | Disulfiram/TEPA (Cu chelator) | Voli 2020 |
| Autophagy–NBR1 MHC-I 분해 | NBR1 | PDAC | Chloroquine + dual ICB | Yamamoto 2020 |
| PCSK9 MHC-I 분해 | PCSK9 | HCC | PCSK9 siRNA + 항원 mRNA LNP | Meng 2025 |
| KDM5B–SETDB1 레트로요소 침묵 | KDM5B, SETDB1 | 흑색종 | KDM5B 억제 | Zhang 2021 |
| DNA methylation 손실 → 면역조절 유전자 억압 | — | Pan-cancer | Methylation 표적 + ICB | Jung 2019 |
| ENPP1 cGAMP→adenosine 전환 | ENPP1 | CIN 종양 | ENPP1 억제제 + anti-PD-1 | Li 2021 |
| 미토콘드리아 전달 T cell 손상 | mtDNA 돌연변이 | 흑색종, NSCLC | TNT/EV 억제, mitophagy 회복 | Ikeda 2025 |
| EMT hybrid E/M 면역억제 | — | Pan-cancer | EMT 역전 + ICB | Mullins 2022 |
| TGF-β T cell 배제 | TGFBR1 | 전이성 CRC | Galunisertib + anti-PD-1 | Tauriello 2018 |
| GSL 합성 NK/T cell 인식 차단 | UGCG, B4GALT5 | KRAS 돌연변이 암 | UGCG 억제 + ICB | Soula 2024 |
| KEAP1/STK11 골수 면역억제 | KEAP1, STK11 | NSCLC | Anti-CTLA4 + anti-PD-L1 | Skoulidis 2024 |

## 관련 논문

- [[yang-2022-enhancing-pd-l1-degradation-itch-during]] — ITCH E3 ligase가 PD-L1을 ubiquitin화; ITCH activator로 MAPKi 저항성 억제 (Cancer Discovery)
- [[xu-2021-pd-l2-glycosylation-promotes-immune-evasion]] — PD-L2 N-glycosylation이 단백질 안정화 및 anti-PD-1 저항성 유도 (JITC)
- [[yan-2025-palmitoylation-prevents-b7-h4-lysosomal-degradation]] — ZDHHC3가 B7-H4 palmitoylation; abemaciclib이 lysosomal 분해 유도 (Nature Communications)
- [[voli-2020-intratumoral-copper-modulates-pd-l1-expression]] — 구리–CTR-1–STAT3/EGFR 축이 PD-L1 조절; chelator가 CD8+ T cell 침윤 증가 (Cancer Research)
- [[yamamoto-2020-autophagy-promotes-immune-evasion-pancreatic]] — PDAC autophagy–NBR1–MHC-I 분해 축; chloroquine + dual ICB 시너지 (Nature)
- [[wang-2025-autophagy-tumor-immune-escape-immunotherapy]] — Autophagy의 MHC-I·PD-L1·TME 조절 역할 종합 리뷰 (Molecular Cancer)
- [[meng-2025-reversal-tumour-immune-evasion-enhanced]] — PCSK9 siRNA + 항원 mRNA LNP로 MHC-I 회복 및 TME 재프로그래밍 (Molecular Cancer)
- [[zhang-2021-kdm5b-promotes-immune-evasion-recruiting]] — KDM5B–SETDB1이 레트로트랜스포존 침묵; 결핍 시 IFN 반응 및 ICB 강화 (Nature)
- [[jung-2019-dna-methylation-loss-promotes-immune]] — 전반적 methylation 감소가 ICI 저항성 예측; TMB·이수성 독립적 (Nature Communications)
- [[li-2021-metastasis-immune-evasion-cgamp-enpp1]] — ENPP1이 cGAMP→adenosine 전환; 소실 시 anti-PD-1 반응 회복 (Cancer Discovery)
- [[ikeda-2025-immune-evasion-through-mitochondrial-transfer]] — 미토콘드리아 전달로 TIL 노화·기능 소실; mtDNA 돌연변이가 ICI 저항성 biomarker (Nature)
- [[mullins-2022-epithelial-mesenchymal-plasticity-tumor-immune-evasion]] — EMP hybrid E/M 상태가 다중 면역 회피 동시 활성화; ICB 저항성 기여 (Cancer Research)
- [[tauriello-2018-tgf-drives-immune-evasion-genetically]] — TGF-β가 전이성 CRC T cell 배제 핵심 드라이버; galunisertib + anti-PD-1 시너지 (Nature)
- [[soula-2024-glycosphingolipid-synthesis-mediates-immune-evasion]] — KRAS 활성화 GSL 합성이 NK/T cell 인식 차단; UGCG 억제 + ICB 시너지 (Nature)
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 돌연변이 NSCLC에서 dual ICB(tremelimumab+durvalumab)가 OS 두 배 연장 (Nature)
- [[tufail-2025-immune-evasion-cancer-mechanisms-cutting-edge]] — 면역 회피 메커니즘 및 차세대 치료 전략 종합 리뷰 (Signal Transduction and Targeted Therapy)

## Related pages

- [[immune-evasion]]
- [[PD-L1]]
- [[MHC-I]]
- [[autophagy]]
- [[ubiquitination]]
- [[glycosylation]]
- [[cGAS-STING]]
- [[EMT]]
- [[tumor-microenvironment]]
- [[immunotherapy-resistance]]
- [[drug-repurposing]]
- [[NSCLC]]
- [[pancreatic-cancer]]
