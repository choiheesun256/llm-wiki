---
title: "EGFR"
type: concept
updated: 2026-05-19
---

# EGFR (Epidermal Growth Factor Receptor)

## 정의

EGFR(Epidermal Growth Factor Receptor, HER1/ErbB1)은 ErbB 수용체 타이로신 키나아제(RTK) 계열에 속하는 막 단백질로, EGF 등의 리간드가 결합하면 동종이합체(homodimer) 또는 이종이합체(heterodimer)를 형성하여 자기인산화(autophosphorylation)가 활성화되고, 하류의 RAS-MAPK, PI3K-AKT-mTOR, STAT 경로를 통해 세포 증식·생존·이동을 촉진한다. 비소세포폐암(NSCLC), 두경부암, 대장암 등 다양한 암에서 과발현되거나 활성화 돌연변이를 보이며, 표적 치료(targeted therapy)의 핵심 분자 중 하나이다.

EGFR 돌연변이는 폐암에서 임상적으로 가장 중요하며, exon 19 deletion(del19)과 exon 21 L858R 치환이 전체 감수성 돌연변이의 약 90%를 차지한다. 이 돌연변이들은 1세대 TKI(erlotinib, gefitinib)에 반응하지만, 치료 후 약 1년 내에 exon 20 T790M gatekeeper 돌연변이가 출현하여 내성이 발생한다. 이에 대응해 T790M을 표적으로 하는 3세대 TKI osimertinib이 개발되었고, 현재 1차 치료제로 널리 사용된다.

## 핵심 원리

- **1세대 TKI**: erlotinib, gefitinib — EGFR ATP 결합 부위에 가역적 경쟁 억제; del19/L858R에 효과적
- **2세대 TKI**: afatinib, dacomitinib — 비가역적 pan-ErbB 억제; HER2 교차 억제 포함
- **3세대 TKI**: osimertinib — T790M 선택적 불가역 억제; 1차 및 T790M+ 2차 치료 승인
- **T790M 내성 기전**: 3세대 TKI 이후 on-target 내성으로 C797S, L718Q, G724S 돌연변이 출현; C797S는 가장 흔한 3차 내성 돌연변이
- **off-target 내성**: EGFR 1차 투여 시 내성의 ~90%는 off-target bypass(MET 증폭, ERBB2 증폭, RAS/BRAF/MEK 변이, EMT, SCLC 전환 등)에 기인
- **ceRNA 매개 내성**: circ_PPAPDC1A 등 circRNA가 miR-30a-3p를 스펀지하여 IGF1R/PI3K-AKT-mTOR 우회 경로 활성화
- **exon 20 삽입 돌연변이**: amivantamab 등 이중특이항체/TKI 개발 중

## 위키 내 관련 논문

### EGFR 내성 기전
- [[tumbrink-2021-next-tier-egfr-resistance-mutations]] — C797S, L718Q, G724S 등 3세대 TKI 이후 on-target 내성 돌연변이 리뷰
- [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] — circ_PPAPDC1A-miR-30a-3p-IGF1R ceRNA 축에 의한 osimertinib 내성

### TKI 전반
- [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]] — FDA 승인 TKI 20+ 목록 및 내성 기전 종합 리뷰

### EGFR 돌연변이 폐암 프로테오제노믹스
- [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] — EGFR/ALK WT 비흡연 LUAD 4개 프로테오제노믹 아형
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] — 한국 NSCLC 229명; 동아시아 높은 EGFR 돌연변이 빈도

### KRAS-EGFR 상호작용
- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] — KRAS G12C + EGFR 병용 억제 내성에서 EGFR 역할

## 관련 개념

- [[drug-resistance]]
- [[NSCLC]]
- [[lung-cancer]]
- [[kinase-signaling]]
- [[KRAS]]
- [[mTOR-signaling]]
- [[precision-oncology]]
