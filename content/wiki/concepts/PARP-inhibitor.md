---
title: "PARP Inhibitor"
type: concept
updated: 2026-05-19
---

# PARP Inhibitor (PARP 억제제)

## 정의

PARP 억제제(PARP inhibitor, PARPi)는 DNA 단일 가닥 절단(single-strand break, SSB) 수복에 필수적인 효소인 PARP1/2(poly(ADP-ribose) polymerase)를 억제하는 표적 항암제다. PARP 억제 자체보다는 **PARP trapping** — 손상된 DNA에 PARP1이 결합된 채 떨어지지 못하는 현상 — 이 세포독성의 주요 기전으로, 이 trapping된 복합체가 복제 포크와 충돌하여 이중 가닥 절단(double-strand break, DSB)을 유발한다.

핵심 임상 적용 원리는 **합성 치사(synthetic lethality)**다. 정상 세포는 homologous recombination (HR)으로 DSB를 수복할 수 있지만, *BRCA1* 또는 *BRCA2* 기능이 소실된 종양 세포는 HR이 결함되어 있어 PARPi에 의한 DSB 축적을 감당하지 못하고 사멸한다. FDA 승인 약물로는 olaparib(린파자), niraparib(제줄라), rucaparib(루브라카), talazoparib(탈제나) 등이 있으며, BRCA 돌연변이 난소암·유방암·전립선암·췌장암 등에서 승인되었다.

## 핵심 원리

- **PARP trapping 기전**: PARPi가 PARP1/2의 catalytic domain에 결합하여 NAD+ 경쟁적으로 차단함과 동시에 PARP1을 DNA에 물리적으로 고정. Drug마다 trapping potency가 다르며 (talazoparib > olaparib > rucaparib > niraparib), trapping 강도가 세포독성과 비례하는 경향
- **합성 치사 조건**: HR 결함(HRD) 종양에서 선택적 효과. BRCA1/2 돌연변이가 대표적이나, RAD51C/D, PALB2, ATM, CDK12 변이 등도 HRD 표현형 유발 가능. "BRCAness"라는 개념으로 BRCA 야생형이지만 기능적 HR 결함이 있는 종양으로 적용 확대
- **승인 적응증**: BRCA1/2 돌연변이 HGSOC(고등급 장액성 난소암), 유방암, 췌장암, 전립선암 (mCRPC). 유지 요법(maintenance therapy)으로도 사용 (1차 화학요법 이후)
- **내성 기전 분류**:
  - *HR 회복*: BRCA1/2 reversion mutation, Alu element 매개 BRCA1 hypomorphic isoform(BRCA1-I15) 생성
  - *PARP1 소실*: PARP1 자체 변이나 소실로 trapping 불가
  - *DNA 말단 보호 소실*: 53BP1/Shieldin 복합체 기능 소실 → NHEJ에서 HR로 복구 전환
  - *Drug efflux 증가*: ABCB1(P-gp, olaparib 내성), ABCG2/BCRP(niraparib 내성) 과발현
  - *Epigenetic 재프로그래밍*: PARP1 trapping이 DOT1L 활성화 → H3K79me2 → PLCG2/ABCB1 발현 증가
  - *STK39 과발현*: γH2AX 신호 증폭으로 HR 기능 강화, BRCA 상태와 무관한 내성
  - *TME 매개 내성*: TAM의 C5aR1 발현(TAM_C3 군집) 또는 BRCA1 TNBC에서 macrophage SREBF1 대사 재프로그래밍이 PARPi 감수성 저하
- **병용 전략**: PARPi + Polθ 억제제(ART558) → TMEJ 경로 동시 차단으로 53BP1 소실에 의한 내성 극복. PARPi + anti-CSF1R, PARPi + C5aR1 억제제로 TME 매개 내성 극복. PARPi + autophagy inducer로 ARH3 소실 내성 부분 회복
- **내성 후 구조 약물**: 기존 chlorambucil(알킬화제)이 BRCA1/2 결함 세포에 선택적 독성을 유지하며, olaparib 및 cisplatin 내성 BRCA 결함 PDX에서도 효과 확인

## 위키 내 관련 논문

- [[ipsen-2022-genome-wide-crispr-cas9-knockout-screen-identifies]] — CRPC 세포 대상 CRISPR 스크린으로 olaparib 내성 유전자(ARH3, YWHAE, UBR5) 발굴; autophagy 감소가 내성 기전; ARH3 발현이 임상 재발 예측 (126명)
- [[liu-2024-parp1-dot1l-transcription-axis-drives-acquired]] — PARP1 trapping → DOT1L 발현 → H3K79me2 → PLCG2/ABCB1 발현 증가라는 epigenetic 내성 축 규명; DOT1Li + PARPi 시너지
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — scRNA-seq으로 C5aR1-high TAM_C3 군집이 PARPi 내성 유방암에 특이적으로 풍부함을 확인; C5aR1 억제로 감수성 회복
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — BRCA1 TNBC에서 macrophage SREBF1 경로가 면역 억제 + PARPi 내성 구동; PARPi + anti-CSF1R 병용으로 생존 연장
- [[zatreanu-2021-pol-inhibitors-elicit-brca-gene-synthetic]] — Polθ 억제제 ART558: BRCA 합성 치사, 53BP1/Shieldin 결함 내성 세포 재표적화, PARPi와 시너지
- [[wang-2019-brca1-intronic-alu-elements-drive]] — BRCA1 intron 15의 Alu element 재조합으로 BRCT 도메인 없는 hypomorphic BRCA1-I15 생성 → HR 부분 회복 → PARPi 내성
- [[macdonald-2026-identification-novel-drug-specific-parp-inhibitor]] — niraparib은 ABCG2/BCRP, olaparib은 ABCB1/P-gp에 의해 drug-specific 내성 발생; paclitaxel 전처치가 ABCB1 유도로 이후 PARPi 감수성 저하
- [[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous.md]] — STK39 과발현이 ATM-MRN을 통해 γH2AX를 증폭시켜 HR 강화; 췌장암에서 PARPi 내성과 연관; STK39i + PARPi 시너지
- [[tacconi-2019-chlorambucil-targets-brca12-deficient-tumours-counteracts]] — 1,280개 FDA 승인 약물 스크린으로 chlorambucil이 BRCA1/2 결함 세포에 선택적 독성; olaparib + cisplatin 내성 PDX에서도 유효

## 관련 개념

- [[prostate-cancer]]
- [[lung-cancer]]
- [[synthetic-lethality]]
- [[DNA-repair]]
- [[drug-resistance]]
- [[molecular-subtype]]
