---
title: "Day 2: PARP 내성 — 리버전 이외 메커니즘"
draft: false
---

# Day 2: PARP 내성 — 리버전 이외 메커니즘

## Big Picture

리버전(Day 1)은 가장 흔한 PARPi 내성 기전이지만, 리버전이 불가능한 종양이나 다른 선택압이 작용하는 경우가 있다. Checkpoint 소실, fork protection, 약물 유출, PARP1 표적 변이 등 다양한 비-리버전 내성 기전이 존재하며, 각 기전마다 치료적 취약점이 다르다. 따라서 **내성 기전 진단이 차선 치료 선택의 핵심**이다.

## 핵심 개념

**53BP1/Shieldin 경로** — 53BP1은 DNA 이중가닥 절단 말단의 end resection을 차단한다. BRCA1 결핍 세포에서 53BP1이나 하류의 shieldin 복합체(SHLD1/2/3, REV7)가 소실되면 end resection이 복원되어 HR이 부분적으로 되살아난다.

**복제 포크 보호** — BRCA1/2는 정상적으로 정지된 복제 포크를 안정화한다. PARPi는 이 포크를 불안정화시켜 세포를 죽인다. 대안적 포크 안정화 경로(RADX, BOD1L, HLTF)가 활성화되면 HR 복원 없이도 PARPi에서 살아남는다.

**약리학적 내성** — 약물이 표적에 도달하지 못하는 경우. ABCB1/P-glycoprotein 유출 펌프가 olaparib, rucaparib을 세포 밖으로 내보낸다.

## 논문별 정리

### Jaspers 2013 — 53BP1 소실 (in vivo)
→ [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]]

Olaparib-resistant 마우스 유방 종양 11개 중 3개에서 Trp53bp1 체세포 변이 발견. 53BP1 소실은 BRCA1 결핍 세포에서 end resection을 허용하여 HR을 부분 복원한다. 실용적 발견: non-P-gp-substrate PARPi인 AZD2461은 100일 투여 후에도 내성 클론 성장을 억제 — 약물 설계 시 P-gp 기질 여부가 중요하다.

### Noordermeer 2018 — Shieldin 복합체 발견
→ [[drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]]

53BP1의 직접적 하류 effector인 shieldin 복합체(SHLD1, SHLD2, SHLD3, REV7)를 발견. SHLD2의 OB-fold domain이 ssDNA에 결합(Kd ~11 nM)하여 DNA 말단을 물리적으로 보호한다. Shieldin 소실은 BRCA1 결핍 세포에서 HR을 복원하고 PARPi 내성을 유발한다. 53BP1과 end resection 사이의 기전적 빈칸을 채운 논문이다.

### Pettitt 2018 — PARP1 표적 변이
→ [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]]

CRISPR 스크린으로 PARP trapping을 없애되 촉매 활성은 유지하는 PARP1 점변이를 발견. 임상에서 R591C 변이가 확인됐다. 중요한 점: 이 세포들은 **topoisomerase I 억제제에는 여전히 감수성**을 보여 대안적 치료가 가능하다.

### Vaidyanathan 2016 — P-glycoprotein 유출
→ [[drug-resistance/vaidyanathan-2016-abcb1-mdr1-induction-defines-common]]

ABCB1/P-gp 과발현이 paclitaxel과 olaparib 모두에 공통된 내성 기전으로 작용. PARPi의 P-gp 기질 여부:
- **기질** (유출 감수성): olaparib, rucaparib
- **비기질** (활성 유지): veliparib, AZD2461

P-gp 억제제(elacridar, verapamil)로 내성 완전 역전 가능. P-gp 상태가 약리학적으로 실행 가능한 바이오마커다.

### Haynes 2018 — 복제 포크 안정화 복원
→ [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]]

Fork stabilization 복원이 HR 복원과 독립적인 PARPi 내성 기전임을 정립한 리뷰. ATR 억제제, CHK1 억제제, WEE1 억제제 각각이 서로 다른 kinase 경로를 통해 fork stabilization을 파괴할 수 있다. 임상적으로 중요한 점: fork protection 내성은 **표준 HR 바이오마커(RAD51 foci, HRD score)로는 검출 불가**하다.

### Nesic 2021 — RAD51C 후성유전적 내성
→ [[drug-resistance/nesic-2021-acquired-rad51c-promoter-methylation-loss]]

RAD51C promoter methylation으로 HRD가 유도되었던 종양에서, LOH 후 남은 단일 unmethylated copy만으로 HR 복원 및 PARPi 내성 발생. 유전적 리버전이 아닌 **후성유전적 HRD 역전**이며, 두 개의 독립 PDX 계통에서 독립적으로 발생해 반복적 기전임을 시사한다. Methylation zygosity가 핵심 임상 바이오마커다.

### Färkkilä 2021 — 내성의 클론 이질성
→ [[drug-resistance/frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]]

하나의 BRCA1/TP53-null 세포주에서 유래한 7개 single-cell resistant clone이 서로 다른 내성 기전을 보유: 53BP1/REV7 소실, PARP1 하향조절, CHK1 의존적 fork protection. 각 클론은 ATRi, CHK1i, CDK4/6i, HDACi에 대해 **기전 의존적 취약점**을 가졌지만, 모든 클론을 커버하는 단일 약물은 없었다. HGSOC 환자에서 검증. 내성은 다클론적이며 병용 전략이 필수적이다.

### Li 2020 — 포괄적 리뷰
→ [[drug-resistance/li-2020-parp-inhibitor-resistance-underlying-mechanisms]]

PARPi 내성을 5가지 축으로 정리: HR 복원(end-resection 조절자, RAD51), 리버전 돌연변이, fork protection, 후성유전/PARylation 변화, 약리학적 기전(P-gp 유출). RAD51 foci assay가 BRCA 유전형보다 우수한 기능적 바이오마커임을 강조.

### Zou 2025 — 내성 극복 임상 전략
→ [[drug-resistance/zou-2025-clinical-approaches-overcome-parp-inhibitor]]

가장 최신의 포괄적 리뷰. 대사 재프로그래밍, ncRNA 조절, TME 매개 내성을 새로운 축으로 추가. 병용 전략: PARPi + ICI(cGAS-STING 경로), DDR 억제제(ATRi, WEE1i), 후성유전 약물, VEGFR/PI3K/ARSI 병용. AI 설계 PARPi-binding protein이 유효 용량을 78% 감소시킨다는 내용도 포함.

## 내성 기전 맵

| 기전 | HR 복원? | 검출 방법 | 치료 대응 |
|------|---------|----------|----------|
| BRCA 리버전 | O | ctDNA sequencing | Platinum 재시도 어려움 |
| 53BP1/Shieldin 소실 | 부분적 | IHC, sequencing | ATRi, CHK1i |
| PARP1 변이 | X (trapping 소실) | Sequencing | Topoisomerase I 억제제 |
| Fork stabilization | X | 기능적 assay | ATRi, CHK1i, WEE1i |
| P-gp 유출 | X | ABCB1 발현 | Non-substrate PARPi, P-gp 억제제 |
| RAD51C 탈메틸화 | O | Methylation assay | Platinum 재시도 어려움 |

## Day 간 연결

- **Day 1**: 리버전 돌연변이 상세
- **Day 5**: WEE1 억제제와 CDK4/6i 취약점 연결
- **Day 6**: Phosphoproteomics로 kinase 수준 내성 시그니처 검출

## 핵심 메시지

PARPi 내성은 하나의 기전이 아니라 **다클론적 지형**이다. 하나의 종양 안에 여러 기전이 공존하며, 단일 바이오마커로는 모든 경로를 포착할 수 없다. 기능적 assay(RAD51 foci), 유전자 검사(BRCA 리버전, PARP1 변이), 후성유전 프로파일링(methylation), 약리학적 프로파일링(P-gp 상태)이 모두 필요하다. **순차적 단독요법이 아닌 합리적 병용 전략**이 내성 이질성에 대응하는 유일한 방법이다.
