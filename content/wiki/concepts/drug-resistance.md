---
title: "Drug Resistance"
type: concept
updated: 2026-05-19
---

# Drug Resistance (약물 내성)

## 정의

Drug resistance는 종양이 처음에는 치료에 반응하다가 점진적으로 그 효과에서 벗어나는 현상, 또는 처음부터 치료에 반응하지 않는 현상을 포괄한다. 전자를 acquired resistance(획득 내성), 후자를 primary/intrinsic resistance(일차/내재 내성)라 한다. 내성은 단일 유전자 돌연변이로 설명되는 경우도 있지만, 실제 임상에서는 다양한 세포 자율적(cell-autonomous) 기전과 TME에 의한 비세포 자율적(non-cell-autonomous) 기전이 복합적으로 작용한다.

약물 내성의 기본 원리는 다윈식 진화(Darwinian evolution)다. 치료약은 선택압으로 작용하여 기존에 소수로 존재하던 내성 아집단(subclone)을 선택적으로 증식시키거나, 드물게 de novo 돌연변이를 유도한다. Farkkila(2021) 연구는 PARP 억제제 내성이 새로운 돌연변이 획득보다는 이미 존재하던 약물 내성 아집단의 선택에 의해 주도됨을 CRISPR-engineered 모델에서 직접 증명했다. 이러한 아집단 이질성이 존재하기 때문에 단일 저항 기전을 타겟하는 단일 병합 전략으로는 모든 내성 클론을 극복할 수 없다.

## 핵심 원리

**On-target 내성 (표적 경로 내 변화)**
- 표적 단백질 자체의 이차 돌연변이(secondary mutation): 약물이 결합하는 부위(binding site)를 변형시켜 약물 친화도를 감소
  - EGFR T790M → osimertinib 개발의 직접 계기 (Sequist 2011)
  - BRCA1/2 reversion mutations: ORF 복구로 HR 기능 회복 → PARPi 내성 (Li 2020)
  - ESR1 LBD mutations: 리간드 결합 도메인 변이로 tamoxifen 결합 무력화
- 표적 유전자 증폭: KRAS G12C amplification이 sotorasib/adagrasib 내성의 우성 클론 기전 (Yaeger 2023)

**Off-target 내성 (우회 경로 활성화)**
- 대체 생존 경로의 활성화: MET 증폭 → EGFR TKI 내성; 동일 환자의 다른 부위에서 다른 기전 공존 가능
- 신호전달 하위 경로 활성화: BRAF/MEK 돌연변이가 KRAS G12C 억제제를 우회
- 대사 우회: EGFR 억제 하에 RRM2 상향/SAMHD1 하향으로 dNTP pool 확장 → osimertinib 내성 (Xie 2026)
- ABCB1/MDR1 과발현: P-gp 매개 약물 유출

**Epigenetic 및 전사 수준 내성**
- PARP1-DOT1L 축: PARPi에 의한 PARP1 trapping이 역설적으로 DOT1L을 활성화 → H3K79me2-PLCG2/ABCB1 축 → 약물 유출 및 stemness 증가 (Liu 2024)
- NASP 히스톤 샤페론: PARPi 유도 히스톤 방출을 안정화 → 내성; HR 상태와 무관 (Moser 2025)
- 후성유전적 BRCA1 프로모터 메틸화 소실로 BRCA1 재발현 → PARPi 내성
- HUWE1 결함, CDK12 기능 소실 등 epigenetic regulator 변화

**Lineage plasticity(계통 가소성)에 의한 내성**
- Histological transformation: EGFR 감작 돌연변이를 보유한 채 SCLC로 전환 (Sequist 2011); RB1/TP53 손실이 기전
- Neuroendocrine transition(NEPC): 안드로겐 차단 치료 압력 하에 전립선 선암이 신경내분비 표현형으로 전환; ASCL1이 지속적으로 필요하며 ASCL1 제거 시 가역적 (Romero 2024)
- Kim 2024: 계통 가소성에 의한 IRF6 억제로 PARPi 내성

**TME 매개 내성 (non-cell-autonomous)**
- CSF1R 억제 → CAF의 CXCL1/2/5 분비 증가 → PMN-MDSC 모집 보상 → TAM 고갈 전략 실패 (Kumar 2017)
- C5aR1+ TAM 아형이 PARPi 내성 종양에서 풍부; C5aR1 억제로 TAM 재프로그래밍 → 감수성 회복 (Li 2024)
- 대식세포의 SREBF1 매개 대사 재프로그래밍 → BRCA1 TNBC에서 PARPi 내성 (Mehta 2021)
- Osimertinib 내성 종양 세포의 exosome(TDE): miR-1258-3p/miR-17-5p 탑재 → 대식세포 M2 극성화 (Han 2023)

**Clonal heterogeneity와 진화**
- 공간적 이질성: 서로 다른 내성 기전이 동일 환자의 다른 전이 병소에 공존 (Sequist 2011, Farkkila 2021)
- 시간적 이질성: 치료 후 내성 아집단이 교대하며 우세; 약물 중단 시 감수성 아집단이 다시 우세
- ctDNA 기반 내성 동태 모니터링이 실시간 내성 진화 추적의 새로운 표준

## 위키 내 관련 논문

### 개별 내성 기전 연구 (wiki/sources/)
- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] — CRC KRAS G12C/EGFR 억제제 내성; KRAS 증폭이 주요 클론 기전; 내성 세포 노화 취약성
- [[memon-2024-clinical-molecular-features-acquired-resistance]] — NSCLC 면역치료 내성; IFNγ 역설적 상향; 항원 제시 돌연변이
- [[skoulidis-2024-ctla4-abrogates-keap1-stk11-resistance]] — KEAP1/STK11 ICI 내성; 이중 ICB로 극복
- [[liu-2024-parp1-dot1l-transcription-axis-drives-acquired]] — PARP1-DOT1L-H3K79me2-ABCB1 축; 난소암 PARPi 내성
- [[moser-2025-nasp-modulates-histone-turnover-drive]] — NASP 히스톤 샤페론; HR 독립적 PARPi 내성 축
- [[xie-2026-adaptive-regulation-dntp-homeostasis-confers]] — RRM2↑/SAMHD1↓ dNTP pool 확장; osimertinib 대사 내성
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — C5aR1+ TAM; TME 매개 PARPi 내성
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — 대식세포 SREBF1; BRCA1 TNBC PARPi 내성
- [[kumar-2017-cancer-associated-fibroblasts-neutralize-csf1r]] — CAF-PMN-MDSC 축; CSF1R 억제제 내성
- [[han-2023-tumour-microenvironment-changes-osimertinib-resistance]] — TDE miRNA; M2 극성화; osimertinib TME 내성
- [[romero-2024-neuroendocrine-transition-prostate]] — ASCL1 의존적 역동적 신경내분비 전환; 가역성 증명
- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — TNBC 화학요법 내성 proteogenomics; 5개 아형; AURKB 표적
- [[zhang-2023-proteogenomics-clear-cell-renal-response-tyrosine-kinase-inhibitor]] — ccRCC sunitinib 내성; 7q 증폭-mTOR 축
- [[zhang-2025-stress-response-kinase-mk2-induces]] — MK2 kinase와 치료 스트레스 반응
- [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] — circRNA 스펀징; osimertinib 내성

### PARPi 내성 (wiki/drug-resistance/ 폴더)
- [[drug-resistance/li-2020-parp-inhibitor-resistance-underlying-mechanisms]] — PARPi 내성 5대 분류 체계; HR 복구, reversion 돌연변이, fork protection, epigenetic, 약리적
- [[drug-resistance/frkkil-2021-heterogeneity-clonal-evolution-acquired-parp]] — 아집단 선택에 의한 PARPi 내성; 7개 내성 클론의 기전 이질성; 임상 HGSC 검증
- [[drug-resistance/jaspers-2013-loss-53bp1-causes-parp-inhibitor]] — 53BP1 손실과 PARPi 내성
- [[drug-resistance/noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna]] — Shieldin 복합체; 53BP1 의존 DNA 말단 보호
- [[drug-resistance/pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify]] — 게놈 전체 CRISPR 스크린; PARPi 내성 유전자 결정인자
- [[drug-resistance/pettitt-2020-clinical-brca12-reversion-analysis-identifies]] — 임상 BRCA1/2 reversion 분석
- [[drug-resistance/pettitt-2023-huwe1-defect-causes-parp-inhibitor]] — HUWE1 결함 PARPi 내성
- [[drug-resistance/haynes-2018-restored-replication-fork-stabilization-mechanism]] — Replication fork 안정화 내성 기전
- [[drug-resistance/sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]] — BRCA2 이차 돌연변이; cisplatin 내성
- [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]] — BRCA2 이차 돌연변이; platinum 내성
- [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]] — 유전자 내 결실로 인한 내성
- [[drug-resistance/nesic-2024-brca1-secondary-splice-site-mutations-drive]] — BRCA1 이차 스플라이스 부위 돌연변이
- [[drug-resistance/nesic-2021-acquired-rad51c-promoter-methylation-loss]] — RAD51C 프로모터 메틸화 소실
- [[drug-resistance/vaidyanathan-2016-abcb1-mdr1-induction-defines-common]] — ABCB1/MDR1 유도; 공통 내성 경로
- [[drug-resistance/zou-2025-clinical-approaches-overcome-parp-inhibitor]] — 임상적 PARPi 내성 극복 접근
- [[drug-resistance/du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating]] — circRNA gemcitabine 내성

### EGFR/TKI 내성 (wiki/drug-resistance/ 폴더)
- [[drug-resistance/sequist-2011-genotypic-histological-evolution-egfr-resistance]] — EGFR TKI 내성 체계적 재생검 연구; T790M 49%, SCLC 전환 14%, MET 증폭 13%
- [[drug-resistance/tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]] — KRAS G12C 억제 이질적 내성
- [[drug-resistance/xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]] — KRAS G12C 억제제 빠른 비균일 적응
- [[drug-resistance/offin-2019-tumor-mutation-burden-egfr-tki-efficacy]] — TMB와 EGFR TKI 효능
- [[drug-resistance/ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]] — IFITM3-MET 상호작용; osimertinib 내성

### 호르몬/기타 내성
- [[drug-resistance/edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]] — YAP1/TAZ 구동 일차 내성; TEAD 억제
- [[drug-resistance/kingston-2024-esr1-f404-mutations-acquired-resistance]] — ESR1 F404 돌연변이; 획득 내성
- [[drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired]] — 계통 가소성 유도 IRF6 억제
- [[drug-resistance/han-2023-tumour-microenvironment-changes-osimertinib-resistance]] — osimertinib 내성 TME 변화

## 관련 개념

- [[tumor-microenvironment]] — TME 매개 비세포 자율적 내성의 무대
- [[proteogenomics]] — 내성 기전을 단백질/인산화 수준에서 정밀하게 규명
- [[phosphoproteomics]] — 내성 시 kinase 활성 변화 추적
- [[spatial-transcriptomics]] — 내성 아집단의 공간적 분포와 니치 분석
