---
title: "Gastric Cancer"
type: concept
updated: 2026-05-19
---

# 위암 (Gastric Cancer, GC)

## 정의

위암(gastric cancer, GC)은 전 세계적으로 암 관련 사망 원인 3위에 해당하는 악성 종양으로, 동아시아(한국, 일본, 중국)에서 특히 높은 발생률을 보인다. 조직학적으로는 장형(intestinal type)과 미만형(diffuse type)으로 구분되며, 분자 수준에서 TCGA는 EBV 양성, MSI(microsatellite instability) 고도, CIN(chromosomal instability), GS(genomically stable) 4개 아형을 제시한다. Helicobacter pylori 감염은 장형 위암의 가장 중요한 환경 위험 인자이며, 전 세계 위암의 약 80%에 기여한다.

조기 발병 위암(early-onset gastric cancer)은 젊은 환자에서 발생하며, 주로 미만형이고 CDH1(E-cadherin) 돌연변이 또는 후성유전학적 소실과 연관된다. 프로테오제노믹스 분석은 유전체·전사체 데이터를 넘어 N-glycoproteomics와 phosphoproteomics를 통합하여 미만형 위암의 4개 분자 아형(증식형, 면역반응형, 대사형, 침윤형)을 식별하고 mRNA-단백질 발현 불일치에서 예후 마커를 발굴하였다. 또한 그래프 pangenome 기반 분석은 표준 참조 게놈(GRCh38)으로는 놓쳤던 구조 변이(SV) 및 추가 드라이버 유전자를 발굴할 수 있음을 보여주었다.

## 핵심 원리

- **TCGA 분자 아형**: EBV(PIK3CA 돌연변이, PD-L1 고발현), MSI(면역원성 고도), CIN(RTK-RAS 활성화, TP53 돌연변이), GS(CDH1/RHOA 돌연변이)
- **H. pylori 발암 기전**: CagA 단백질 주입 → SRC/ABL 신호 교란, 만성 염증 → DNA 손상 축적
- **HER2 표적 치료**: HER2 과발현(약 15-20% GC)에서 trastuzumab + 화학요법이 표준 1차 치료; T-DXd(trastuzumab deruxtecan)는 HER2+ GC에서 cGAS-STING 경로를 통한 면역 활성화 기전도 보유
- **조기 발병 위암의 프로테오제노믹스**: 5층위 오믹스(엑솜+RNA+단백체+인산화+N-글리코실화) 통합으로 mRNA만으로는 구분 불가한 4개 아형 식별
- **구조 변이(SV)**: 위암 특이적 graph pangenome(GGCPan)으로 65% 더 많은 SV 검출; PI3K-AKT 및 focal adhesion 경로 유전자 농축
- **발달 분자와 암**: 마우스 위 발달 atlas에서 확인된 발달 조절 단백질이 미만형 위암에서 재발현
- **DNA 손상 + 면역 활성화**: T-DXd의 토포이소머라아제 I 억제 → 이중가닥 DNA 손상 → cGAS-STING 활성화 → 타입 I IFN 반응

## 위키 내 관련 논문

### 프로테오제노믹스
- [[mun-2019-proteogenomic-characterization-human-early-onset-gastric]] — 조기 발병 미만형 위암 5층위 오믹스 통합; 4개 분자 아형 식별 (Cell Cancer Cell 2019)

### 유전체 및 pangenome
- [[jiao-2025-gastric-cancer-reference-human-pangenomes]] — GGCPan: 위암 특이적 graph pangenome; 65% 더 많은 SV 검출

### 발달 multi-omics
- [[li-2018-time-resolved-multi-omic-atlas-mouse-stomach]] — 마우스 위 발달 15시점 시계열 멀티오믹스 atlas; 미만형 위암 연관 단백질 발굴

### 약물 기전 및 면역
- [[oh-2024-tdxd-cgas-sting-gastric-cancer]] — T-DXd의 cGAS-STING 활성화를 통한 HER2+ 위암 면역 강화 기전

## 관련 개념

- [[proteogenomics]]
- [[molecular-subtype]]
- [[multi-omics]]
- [[precision-oncology]]
- [[immune-evasion]]
- [[drug-resistance]]
- [[pan-cancer]]
