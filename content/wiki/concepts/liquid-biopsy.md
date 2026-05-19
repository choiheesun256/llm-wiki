---
title: "Liquid Biopsy"
type: concept
updated: 2026-05-19
---

# Liquid Biopsy (액체 생검)

## 정의

액체 생검(liquid biopsy)은 혈액, 소변, 뇌척수액 등 체액에서 종양 유래 물질을 분석하여 암을 진단하거나 치료 반응, 내성, 재발을 모니터링하는 비침습적 접근법이다. 대표적인 분석 대상으로는 circulating tumor DNA (ctDNA), cell-free DNA (cfDNA), 순환 종양 세포(circulating tumor cells, CTC), 엑소좀(exosome), 순환 단백질 및 대사체 등이 있다.

전통적인 조직 생검은 단일 시점, 단일 부위의 정보만 제공하는 한계가 있는 반면, 액체 생검은 반복 채혈로 종양의 시간적 진화를 추적하고, 공간적 이질성을 일부 반영할 수 있다. 최근에는 cfDNA methylation 정보를 활용하여 종양 미세환경(TME)의 조성이나 공간적 ecotype까지 비침습적으로 추론하는 방향으로 기술이 확장되고 있다.

## 핵심 원리

- **ctDNA / cfDNA**: 종양 세포가 괴사·아폽토시스로 사멸할 때 혈중으로 유리되는 DNA 단편. ctDNA는 cfDNA 중 종양 유래 분획. 체세포 변이, copy number variation (CNV), methylation pattern을 담고 있음
- **검출 기술**: 초민감 digital PCR(ddPCR)은 알려진 변이를 낮은 allele fraction에서 정량화. Next-generation sequencing (NGS) 기반 panel 또는 whole-genome sequencing (WGS)으로 미지 변이 및 CNV를 탐색. EM-seq/bisulfite sequencing으로 methylation landscape 해석
- **임상 적용 영역**:
  - *조기 진단*: 증상 발현 전 종양 신호 탐지 (다중암 조기 진단 패널)
  - *치료 반응 모니터링*: ctDNA variant allele fraction (VAF) 감소로 치료 효과 조기 평가
  - *내성 추적*: 내성 돌연변이(예: EGFR T790M, C797S; ESR1 변이)가 혈중에서 먼저 나타남
  - *최소잔류질환(MRD) 감지*: 치료 완료 후 재발 예측
- **cfDNA methylation으로 TME 추론**: 종양 세포뿐 아니라 TME 구성 세포들의 methylation signature가 혈장 cfDNA에 섞여 있음. Deep learning 모델로 이를 디코딩하면 공간적 TME ecotype 조성을 비침습적으로 추정 가능 (Liquid EcoTyper)
- **ecDNA의 액체 생검 적용**: ecDNA를 보유한 종양 세포에서 유래한 cfDNA는 독특한 구조적 특징(nucleosome footprint)을 가짐. SCLC에서 cfDNA nucleosome profiling으로 ecDNA 존재를 비침습적으로 감지하는 방법이 제안됨
- **순환 단백질**: 혈장 단백질체(Olink, SomaScan 등) 분석으로 암 관련 신호 및 치료 독성(예: 심장독성) 예측 가능. ctDNA보다 기능적 상태를 직접 반영하는 장점
- **한계**: 낮은 종양 분획(tumor fraction)에서의 민감도 저하, 다발성 전이에서의 신호 평균화, 정상 세포 유래 cfDNA의 배경 노이즈, 플랫폼 표준화 문제 등

## 위키 내 관련 논문

- [[zhang-2026-non-invasive-tumour-microenvironment-spatial-ecotypes]] — pan-cancer 9개 spatial ecotype을 cfDNA methylation deep learning(Liquid EcoTyper)으로 비침습적 추론; 흑색종 78례 혈장 코호트에서 ICI 반응 예측 (Nature 2026)
- [[schiavon-2015-analysis-esr1-mutation-circulating-tumor]] — 디지털 PCR로 171례 진행성 유방암에서 ctDNA ESR1 변이 검출; 아로마타제 억제제 내성 예측 (HR=3.1)
- [[pongor-2023-extrachromosomal-dna-amplification-contributes-small]] — SCLC 18.8%에서 ecDNA 확인; cfDNA nucleosome profiling으로 ecDNA를 비침습적 감지
- [[tumbrink-2021-next-tier-egfr-resistance-mutations]] — cfDNA 기반 EGFR 내성 변이(C797S, L718Q 등) 추적 방법론 리뷰; 1세대~3세대 TKI 내성 landscape
- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] — ctDNA로 KRAS G12C + EGFR 억제제 내성 진화를 실시간 추적; 클론성 내성 기전(KRAS 증폭) 규명
- [[lal-2025-plasma-proteins-metabolites-cardiac-dysfunction-cancer]] — Olink 혈장 단백질체 + 대사체로 암 치료 관련 좌심실 기능 이상 예측; ML 분류 모델 개발

## 관련 개념

- [[molecular-subtype]]
- [[lung-cancer]]
- [[prostate-cancer]]
- [[tumor-microenvironment]]
- [[drug-resistance]]
- [[PARP-inhibitor]]
