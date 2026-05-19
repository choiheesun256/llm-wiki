---
title: "PARP inhibitor 내성의 분자적 메커니즘과 이를 극복하기 위한 전략은?"
type: question
status: active
category: [drug-resistance, BRCA, DNA-repair, ovarian-cancer, breast-cancer]
source_files:
  - li-2020-parp-inhibitor-resistance-underlying-mechanisms.md
  - jaspers-2013-loss-53bp1-causes-parp-inhibitor.md
  - noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna.md
  - zou-2025-clinical-approaches-overcome-parp-inhibitor.md
  - pettitt-2020-clinical-brca12-reversion-analysis-identifies.md
  - frkkil-2021-heterogeneity-clonal-evolution-acquired-parp.md
  - pettitt-2023-huwe1-defect-causes-parp-inhibitor.md
  - vaidyanathan-2016-abcb1-mdr1-induction-defines-common.md
  - li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer.md
  - mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp.md
  - zatreanu-2021-pol-inhibitors-elicit-brca-gene-synthetic.md
  - xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous.md
  - haynes-2018-restored-replication-fork-stabilization-mechanism.md
  - nesic-2024-brca1-secondary-splice-site-mutations-drive.md
  - pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify.md
  - liu-2024-parp1-dot1l-transcription-axis-drives-acquired.md
  - macdonald-2026-identification-novel-drug-specific-parp-inhibitor.md
updated: 2026-05-19
---

# PARP inhibitor 내성의 분자적 메커니즘과 이를 극복하기 위한 전략은?

## 짧은 답변

PARP inhibitor(PARPi) 내성은 크게 네 가지 축으로 분류된다: (1) **HR 복원**(BRCA reversion mutation, 53BP1/shieldin 소실, splice variant 축적), (2) **replication fork 보호 복원**(RADX, EZH2, SMARCAL1 관련), (3) **약물 efflux**(ABCB1/MDR1, ABCG2/BCRP), (4) **면역 억제성 TME**(TAM C5aR1, 대식세포 CSF1R). 각 메커니즘은 서로 다른 취약점을 노출하며, 이를 표적으로 하는 Polθ 억제제, ATR/CHK1/WEE1 억제제, 면역 병용 요법 등이 내성 극복 전략으로 개발되고 있다.

## 상세 답변

### 1. PARPi 작용 기전과 합성치사(synthetic lethality)

[[li-2020-parp-inhibitor-resistance-underlying-mechanisms]]와 [[zou-2025-clinical-approaches-overcome-parp-inhibitor]]는 PARPi 내성의 기본 맥락을 설명한다. PARPi는 두 가지 방식으로 작용한다:
1. **촉매 억제**: PARP1의 NAD+ 경쟁적 억제로 단일가닥 절단(SSB) 복구를 차단
2. **PARP trapping**: PARP1을 DNA 손상 부위에 포획하여 독성 있는 PARP-DNA 복합체 형성

BRCA1/2가 결손된 세포에서는 상동재조합(HR) 복구가 이미 결여되어 있으므로, PARPi가 야기하는 이중가닥 절단(DSB)이 수복되지 못해 세포사멸이 유발된다. 그러나 BRCA1/2 결손 환자의 40%이상이 초기 비반응자이며, 지속 치료 시 내성이 보편적으로 발생한다.

---

### 2. HR 복원 메커니즘

#### 2.1 BRCA1/2 reversion mutation: 가장 임상적으로 검증된 메커니즘

[[pettitt-2020-clinical-brca12-reversion-analysis-identifies]]는 300건 이상의 임상 HR 유전자 reversion을 체계적으로 분석한 최초의 대규모 연구다:

- **Reversion mutation**: 병원성 truncating mutation의 reading frame을 회복하는 2차 소마틱 돌연변이 → HR 기능 복원 → PARPi 및 platinum 내성
- **빈도**: mCRPC에서 rucaparib 투여 후 진행 환자의 **39%**, platinum/PARPi 노출 mCRPC의 **~40%**, PARPi 내성 유방암 환자의 **60%**에서 검출(longitudinal ctDNA)
- **Hotspot**: BRCA2 c.750-775 영역(N-말단)은 reversion이 농축; BRCA2 exon 16 이후(OB-fold 영역)는 reversion 결핍 지대
- **메커니즘**: MMEJ(microhomology-mediated end joining), SSA, NHEJ 등 여러 수복 경로가 reversion을 유발할 수 있어 단일 경로 차단으로 예방 어려움
- **Neoantigen 기회**: Reversion 접합부의 새로운 아미노산 서열이 neopeptide를 형성 → 면역요법 병용 가능성

#### 2.2 BRCA1 secondary splice-site mutation (SSM): 새로운 reversion 없는 HR 복원 (2024)

[[nesic-2024-brca1-secondary-splice-site-mutations-drive]]는 frame-restoring reversion이 없어도 HR이 복원될 수 있는 새로운 메커니즘을 밝혔다:

- 2차 splice-site mutation이 BRCA1 exon 11을 skipping → **BRCA1-Δ11q** isoform 과발현 → 부분적 HR 기능 복원
- ARIEL2/ARIEL4 임상시험에서 PARPi 치료 전 1%(1/115) → 치료 후 **10%(6/63)**로 ~10배 농축
- ctDNA로 non-invasive 모니터링 가능
- BRCA2 exon 8 SSM도 확인 → 여러 HR 유전자로 일반화 가능한 저항 경로
- **HUWE1 결함과의 연결**: [[pettitt-2023-huwe1-defect-causes-parp-inhibitor]] — E3 ubiquitin ligase HUWE1이 결함을 가지면 BRCA1-Δ11q를 분해하지 못해 축적 → HR 부분 복원. HGSOC 환자에서 PARPi 치료 후 HUWE1 HECT 도메인 돌연변이(p.G4253A; p.I4257T) 획득 확인

#### 2.3 53BP1 소실: NHEJ 억제를 통한 HR 복원

[[jaspers-2013-loss-53bp1-causes-parp-inhibitor]]는 **53BP1 소실**이 BRCA1 결손 맥락에서 PARPi 내성을 유발함을 in vivo로 최초 입증했다:

- 정상적으로 53BP1은 DSB에서 CtIP 매개 말단 절제(end resection)를 차단하여 NHEJ를 유도
- **53BP1 소실** → 말단 절제 허용 → RAD51 매개 HR 부분 복원
- KB1P 마우스 모델에서 olaparib 내성 종양의 3/11에서 somatic Trp53bp1 불활성화 돌연변이 확인
- Cross-resistance: 토포이소머라제 I 억제제(topotecan); 시스플라틴에는 부분적 교차 내성
- 임상 전략: AZD2461(P-gp 친화성 낮은 차세대 PARPi)로 100일 장기 치료 시 내성 clone 출현 억제

#### 2.4 Shieldin 복합체 소실: 53BP1 downstream effector

[[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]]는 53BP1의 직접적 하위 effector인 **shieldin 복합체(SHLD1, SHLD2, SHLD3, REV7)**를 발견했다:

- Shieldin은 DSB에서 SHLD2의 OB-fold 도메인이 ssDNA에 결합(Kd ~11 nM)하여 물리적으로 말단 절제를 차단
- 복합체 구조: SHLD3(가장 상위) → REV7 → SHLD2-N → SHLD2-C(ssDNA 결합); SHLD1이 SHLD2-C를 안정화
- **SHLD1/SHLD2 KO** → olaparib/talazoparib 내성; 53BP1과 동일한 genetic pathway
- 임상 근거: Shld1/Shld2 돌연변이 KB1P 종양이 olaparib에 부분 반응만 보임
- **REV7(MAD2L2) 소실**도 shieldin의 effector이므로 [[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]]에서 내성 clone NA1이 REV7 downregulation으로 HR 복원

---

### 3. Replication fork 보호 복원

[[haynes-2018-restored-replication-fork-stabilization-mechanism]]은 HR 복원과 독립적인 내성 축을 정의했다:

- BRCA1/2는 정지(stalled) replication fork에서 MRE11/DNA2에 의한 신생 DNA 분해를 차단
- **Fork 보호 복원** → PARP trapping에 의한 DSB로부터 생존
- 핵심 인자들:

| 인자 | 방향 | 메커니즘 | 내성 선택성 |
|------|------|---------|----------|
| RADX 소실 | 감소 | RAD51을 fork로 모집 → fork 보호; HR 없이 내성 | BRCA2 결손 |
| EZH2 감소 | 감소 | H3K27me로 MUS81 모집 차단 → fork 안정 | BRCA2 결손 (BRCA1 아님) |
| SMARCAL1 소실 | 감소 | FANCD2 매개 신생 DNA 분해 역전; 삭제 시 내성 및 cisplatin 내성 | BRCA1/2 |
| FANCD2 과발현 | 증가 | MRE11 매개 fork 분해 억제 | 유방/난소/자궁 |
| PTIP/MLL3/MLL4 감소 | 감소 | MRE11 모집 차단; fork 보호 | BRCA2 결손 |

#### 3.1 세포주기 checkpoint 억제제로 fork 보호 극복

[[haynes-2018-restored-replication-fork-stabilization-mechanism]]에 따르면 ATR, CHK1, WEE1 억제제는 각각 독립적이고 비중복적 방식으로 fork 보호를 파괴한다:

- **ATRi**: 직접적 fork 불안정화; PARP trapping DSB 강화
- **CHK1i**: 과도한 origin firing; nucleotide pool 고갈; G2 arrest 해제
- **WEE1i**: CDK1/2 조기 활성화; 강제 유사분열 진입; HR 복구 억제

---

### 4. 약물 efflux

#### 4.1 ABCB1/MDR1 (P-glycoprotein): 화학요법과 공유하는 내성 축

[[vaidyanathan-2016-abcb1-mdr1-induction-defines-common]]은 ABCB1 과발현이 paclitaxel과 olaparib 내성의 **공유된** 메커니즘임을 최초로 입증했다:

- A2780olapR 세포: 36.5배 olaparib 내성; ABCB1 mRNA 가장 현저히 상향
- **PARPi P-gp 기질 여부**: olaparib, rucaparib → P-gp 기질 (교차 내성); veliparib, AZD2461 → P-gp 비기질 (교차 내성 없음)
- 임상 함의: 1차 paclitaxel 투여 후 ABCB1 유도 → 이후 PARPi maintenance 효능 저해 가능
- **역전 전략**: verapamil, elacridar (ABCB1 억제제); siRNA ABCB1 knockdown

#### 4.2 ABCG2/BCRP: niraparib 특이적 내성 (Macdonald 2026)

[[macdonald-2026-identification-novel-drug-specific-parp-inhibitor]]는 PARPi 간에도 efflux transporter 특이성이 있음을 밝혔다:

- **ABCG2(BCRP)** 과발현 → niraparib 특이적 내성
- **ABCB1(P-gp)** 과발현 → olaparib 내성
- 치료 순서 최적화에 중요한 임상적 함의

#### 4.3 PARP1-DOT1L 에피게놈 축에 의한 ABCB1 유도 (Liu 2024)

[[liu-2024-parp1-dot1l-transcription-axis-drives-acquired]]는 PARPi에 의한 PARP1 trapping이 역설적으로 DOT1L을 활성화하여 내성 유전자를 유도함을 발견했다:

- PARPi 처리 → PARP1 trapping → DOT1L 프로모터 결합 → DOT1L 발현 증가 → H3K79me2 매개 **PLCG2, ABCB1** 전사 활성화
- Non-BRCA-mutated 난소암에서 특히 두드러짐
- DOT1L 억제제 SGC0946 + PARPi 시너지 확인

---

### 5. PARP1 자체의 변이: trapping 회피

[[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]]는 genome-wide CRISPR 스크린을 통해 PARP1 점돌연변이가 내성을 부여함을 체계적으로 규명했다:

- **ZnF 도메인** 돌연변이(p.43delM, p.119_120delKS 등): PARP1의 DNA 결합을 차단 → trapping 불가
- **WGR 도메인** (N329Q, R591C): inter-domain allosteric communication 방해
- **HD/CAT 도메인** 돌연변이도 내성 부여
- 임상 확인: olaparib 내성 난소암 환자에서 PARP1 **R591C** 돌연변이 검출
- 주목할 특징: PARP1 돌연변이 내성 세포는 topoisomerase I 억제제(camptothecin)에 감수성 증가; cisplatin 교차 내성 없음

#### 5.1 PARG 소실

PARG(poly-ADP-ribose glycohydrolase) 소실 시 PARylation이 회복되어 PARPi 결합을 저해한다([[li-2020-parp-inhibitor-resistance-underlying-mechanisms]]).

---

### 6. 면역 미세환경 매개 내성

#### 6.1 TAM C5aR1 축 (Li 2024)

[[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]]는 scRNA-seq으로 PARPi 내성 종양에서 **TAM_C3(C5aR1-high)** 클러스터가 농축됨을 발견했다:

- C5aR1(complement receptor) 고발현 TAM이 친종양적 상태를 유지하며 PARPi 내성을 매개
- C5aR1 억제가 TAM을 재프로그래밍하여 마우스 동계 모델에서 PARPi 감수성 회복
- 내성은 TME 상호작용을 통해 전달 가능

#### 6.2 대식세포 CSF1R 및 SREBF1 대사 재프로그래밍 (Mehta 2021)

[[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]]는 BRCA1 관련 TNBC에서 대식세포가 지배적 면역세포임을 CyCIF 단일세포 이미징(~200,000세포/검체)으로 확인했다:

- PARPi가 항종양 및 친종양 대식세포 특성을 동시에 강화
- **SREBF1** 경로가 대식세포 대사 재프로그래밍을 주도
- PARPi + **anti-CSF1R** 항체 병용: 대식세포 재프로그래밍, 선천면역 및 CD8+ T세포 반응 강화, BRCA1 결손 마우스에서 생존 연장

---

### 7. 클론 진화와 이질성: 내성의 Darwinian 선택 (Farkkila 2021)

[[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]]는 CRISPR 조작된 TP53-/- BRCA1-/- 상피 세포주(B40)에서 7개의 단일세포 내성 클론을 분리하여 PARPi 내성이 de novo 돌연변이 획득이 아닌 **기존 drug-tolerant 서브클론의 선택**에서 비롯됨을 입증했다:

| 내성 클론 | 핵심 메커니즘 |
|----------|------------|
| NA1 | REV7 downregulation → NHEJ 억제 → HR 복원 |
| NA2, NA3, NA5 | 53BP1 감소 → HR 복원; NA5는 추가적으로 chromatin remodeling 변화 |
| NA4 | PARP1 downregulation → trapping 회피; 이배체 유지 |
| NB1 | RAD51 복원 없음; elevated pChk1 → fork 보호 via Chk1 경로 |
| OA5 | HR 복원; niraparib 내성 클론과 별도 전사체 프로파일 |

- BRCA1 reversion mutation은 7개 클론 중 어느 것에서도 검출되지 않음
- 임상 HGSOC 환자의 4개 전이 부위에서 7개의 공간적으로 이질적인 내성 서브클론 확인
- **단일 약물로는 모든 내성 클론 표적화 불가** → mechanism-stratified 병용 요법 필요

---

### 8. 새로운 내성 메커니즘

#### 8.1 STK39 과발현 (Xu 2024)

[[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous]]는 STK39 kinase가 ATM 인산화를 통해 γH2AX를 증폭하고 MRN 복합체를 모집하여 HR을 강화함을 보여주었다:

- PAAD(췌장선암)에서 STK39 과발현이 PARPi 내성과 상관
- BRCA 상태와 무관하게 HR 복구 강화
- STK39i + PARPi 시너지 확인 (전임상)

---

### 9. 극복 전략

#### 9.1 Polθ(POLQ) 억제제: PARPi 내성 표적의 신약 (Zatreanu 2021)

[[zatreanu-2021-pol-inhibitors-elicit-brca-gene-synthetic]]는 **ART558**(최초의 강력한 Polθ 억제제)을 통해 새로운 합성치사 조합을 입증했다:

- Polθ(POLQ)는 theta-mediated end joining(TMEJ)을 매개: BRCA 결손 세포의 생존에 필수
- ART558이 BRCA1/2 돌연변이와 합성치사
- 핵심: **53BP1/shieldin 결손 세포(PARPi 내성)**에도 효과적 → PARPi 내성 극복
- PARPi와의 시너지도 확인
- 임상 개발: novobiocin 계열 Polθ 억제제 (임상시험 진행 중)

#### 9.2 HR 복원 메커니즘 극복을 위한 DDR 억제제 병용

| 병용 전략 | 표적 내성 메커니즘 | 임상/전임상 근거 |
|---------|---------------|--------------|
| PARPi + ATRi | Fork 보호, HR 복원 클론 | GSCAR 등 임상시험 |
| PARPi + CHK1i | Fork 보호, G2 arrest 의존 클론 | prexasertib 병용 |
| PARPi + WEE1i | Fork 보호, CDK2 의존 클론 | adavosertib 임상시험 |
| PARPi + Polθi | 53BP1/Shieldin 소실에 의한 HR 복원 | ART558, [[zatreanu-2021-pol-inhibitors-elicit-brca-gene-synthetic]] |
| PARPi + DOT1Li | ABCB1/PLCG2 유도 내성 | SGC0946 전임상 |
| PARPi + ICI | cGAS-STING 활성화, TMB 증가 | ATHENA Phase III (niraparib + dostarlimab) |
| PARPi + anti-CSF1R | 대식세포 매개 내성 | KB1P 마우스 모델 ([[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]]) |
| PARPi + C5aR1i | TAM_C3 매개 내성 | 동계 마우스 모델 ([[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]]) |
| PARPi + spliceosome modulator | SSM 매개 BRCA1-Δ11q 내성 | SF3B1-modulator H3B-8800 전임상 |

#### 9.3 치료 순서 최적화

- Paclitaxel → PARPi 순서 시 ABCB1 유도로 olaparib/rucaparib 효능 저해 가능; veliparib이나 AZD2461(비-P-gp 기질)이 유리
- niraparib 내성은 ABCG2가 주도, olaparib 내성은 ABCB1이 주도: 약물별 내성 프로파일 차이 고려 필요

---

## 핵심 비교표

| 내성 범주 | 세부 메커니즘 | 주요 인자 | 암종 | 극복 전략 |
|----------|------------|--------|------|---------|
| **HR 복원** | BRCA1/2 reversion mutation | BRCA1/2 secondary mutation | HGSOC, TNBC, mCRPC | Neoantigen 면역요법 |
| **HR 복원** | BRCA1 SSM → Δ11q | Splice-site mutation | HGSOC, TNBC | Spliceosome modulator |
| **HR 복원** | HUWE1 결함 | HUWE1 E3 ligase 돌연변이 | HGSOC | HUWE1 바이오마커 활용 |
| **HR 복원** | 53BP1 소실 | TP53BP1 돌연변이 | 유방암 | ATRi, 장기 PARPi 치료 |
| **HR 복원** | Shieldin 소실 | SHLD1/2/3, REV7 | 유방암, 난소암 | Polθi (ART558) |
| **Fork 보호** | RADX 소실 | RADX | BRCA2 결손 | ATRi, CHK1i |
| **Fork 보호** | EZH2 감소 | EZH2-MUS81 축 | BRCA2 결손 | CHK1i, WEE1i |
| **Fork 보호** | SMARCAL1 소실 | SMARCAL1 | BRCA1/2 | ATRi |
| **약물 efflux** | ABCB1/P-gp | ABCB1 증폭 | 난소암 | Elacridar, verapamil |
| **약물 efflux** | ABCG2/BCRP | ABCG2 과발현 | 난소암 | ABCG2 억제제 |
| **약물 efflux** | DOT1L-ABCB1 축 | PARP1-DOT1L-PLCG2 | 난소암 | DOT1Li (SGC0946) |
| **PARP1 변이** | PARP1 ZnF/WGR 돌연변이 | R591C, ZnF mutations | 난소암 | Topoisomerase I 억제제 |
| **면역 TME** | TAM C5aR1 | TAM_C3 서브타입 | 유방암 | C5aR1 억제 |
| **면역 TME** | 대식세포 CSF1R | SREBF1 대사 재프로그래밍 | BRCA1 TNBC | Anti-CSF1R |
| **신규** | STK39-γH2AX | STK39 과발현 | 췌장암 | STK39i 병용 |

---

## 관련 논문

- [[li-2020-parp-inhibitor-resistance-underlying-mechanisms]] — PARPi 내성의 5범주 포괄 리뷰: HR 복원, reversion mutation, fork 보호, 에피게놈/PARylation, 약물 efflux
- [[jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 소실이 BRCA1 결손 마우스 유방암에서 in vivo PARPi 내성을 부여함을 최초 입증; AZD2461 장기 치료 전략 제시
- [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — SHLD1/2/3 + REV7로 구성된 shieldin 복합체를 발견; SHLD2의 OB-fold ssDNA 결합이 HR 억제의 분자적 기반
- [[zou-2025-clinical-approaches-overcome-parp-inhibitor]] — 2025년 포괄적 리뷰; 대사 재프로그래밍, ncRNA, TME 축을 포함한 최신 내성 landscape 및 임상 병용 전략
- [[pettitt-2020-clinical-brca12-reversion-analysis-identifies]] — 300+ clinical reversion 분석; BRCA2 hotspot/desert, microhomology 메커니즘, reversion neopeptide의 면역요법 가능성
- [[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]] — BRCA1 결손에서 내성의 클론 선택 기원 입증; 7가지 이질적 내성 클론 및 mechanism-stratified 병용 필요성
- [[pettitt-2023-huwe1-defect-causes-parp-inhibitor]] — HUWE1 결함이 BRCA1-Δ11q 축적으로 HR을 부분 복원; HGSOC 환자에서 임상 확인
- [[vaidyanathan-2016-abcb1-mdr1-induction-defines-common]] — ABCB1 과발현이 paclitaxel과 olaparib의 공유된 내성 메커니즘; PARPi별 P-gp 기질 특성 분류
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — C5aR1-high TAM 서브타입이 PARPi 내성을 매개; C5aR1 억제로 감수성 회복
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — BRCA1 TNBC에서 대식세포가 지배적; CSF1R 표적으로 면역 재활성화 및 PARPi 감수성 회복
- [[zatreanu-2021-pol-inhibitors-elicit-brca-gene-synthetic]] — ART558 Polθ 억제제가 BRCA 합성치사 및 53BP1/Shieldin 결손에 의한 PARPi 내성 극복
- [[xu-2024-stk39-mediated-amplification--h2ax-promotes-homologous]] — STK39가 ATM-MRN 경로로 γH2AX 증폭 → HR 강화 → PARPi 내성; 췌장암에서 특히 중요
- [[haynes-2018-restored-replication-fork-stabilization-mechanism]] — Fork 보호 복원이 HR 복원과 독립적인 내성 축; ATRi/CHK1i/WEE1i가 각각 비중복적 방식으로 극복
- [[nesic-2024-brca1-secondary-splice-site-mutations-drive]] — BRCA1 2차 splice-site mutation이 exon 11 skipping으로 Δ11q 과발현 → PARPi 내성; ARIEL2/4에서 10배 농축
- [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — CRISPR 스크린으로 PARP1 ZnF/WGR/CAT 도메인 점돌연변이가 trapping 회피를 통해 내성 부여; R591C 임상 검증
- [[liu-2024-parp1-dot1l-transcription-axis-drives-acquired]] — PARP1 trapping이 DOT1L 활성화 → H3K79me2-PLCG2/ABCB1 유도; DOT1Li 병용 전략
- [[macdonald-2026-identification-novel-drug-specific-parp-inhibitor]] — ABCG2가 niraparib 특이적 내성 구동; paclitaxel 전처치의 PARPi 효능 저해 함의

## Related pages

- [[drug-resistance]]
- [[BRCA]]
- [[PARP-inhibitor]]
- [[homologous-recombination]]
- [[synthetic-lethality]]
- [[ovarian-cancer]]
- [[TNBC]]
- [[tumor-microenvironment]]
- [[replication-fork]]
- [[DNA-damage-response]]
