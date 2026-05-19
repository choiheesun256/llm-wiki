---
title: "Molecular Subtype"
type: concept
updated: 2026-05-19
---

# Molecular Subtype (분자 아형)

## 정의

분자 아형(molecular subtype)이란 유전체, 전사체, 단백체, 후성유전체 등 분자 수준의 데이터를 기반으로 동일한 조직학적 진단 내에서 생물학적으로 이질적인 하위 그룹을 정의한 것이다. 기존의 조직병리 분류나 임상 병기(staging)만으로는 동일 진단을 받은 환자들의 다양한 치료 반응과 예후를 충분히 설명하지 못하기 때문에, 분자 아형은 정밀 의학(precision medicine)의 핵심 개념으로 자리 잡았다.

Proteogenomics 시대에 들어서면서 분자 아형 정의는 DNA/RNA 수준을 넘어 단백질 발현과 인산화 상태까지 통합하게 되었다. RNA 수준의 아형이 반드시 단백질 수준에서 재현되지 않는 경우가 많아, 단백체 기반 아형이 임상 결과를 더 잘 예측하는 사례가 보고되고 있다. 대규모 CPTAC(Clinical Proteomic Tumor Analysis Consortium) 연구들이 여러 암종에서 proteogenomic 분자 아형을 체계적으로 정의하고 있다.

## 핵심 원리

- **Consensus clustering**: 여러 omic 레이어(단백체, 전사체, 인산화 단백체 등)에서 독립적으로 clustering한 뒤 통합하거나, 각 레이어를 직접 통합하여 공통 아형을 도출. NMF(Non-negative Matrix Factorization), iCluster, MOFA 등이 자주 사용됨
- **단백질 vs RNA 아형의 불일치**: post-transcriptional 조절, 번역 효율, 단백질 안정성 차이로 인해 RNA 발현과 단백질 발현이 불일치하는 경우가 많음. 단백체 기반 아형이 생존 예측 등 임상 지표와 더 강하게 연관되는 경우 보고됨
- **인산화 단백체(phosphoproteomics) 기반 아형**: kinase activity profile로 아형을 정의하면 기능적 신호 경로 상태를 반영하여 치료 표적 발굴에 유리
- **Pan-cancer 아형**: 여러 암종을 통합 분석하면 조직 유형을 가로지르는 공통 면역 아형, EMT 아형, 대사 아형 등이 발견됨. CPTAC 1,056례 분석에서 7개 pan-cancer 면역 아형이 정의됨
- **임상적 적용**: 아형 분류가 치료 반응 예측, 예후 층화, 표적 치료 선택에 직접 연결되어야 임상 가치가 있음. DIA 기반 MS 분류기처럼 임상 검체에 적용 가능한 형태로 개발되는 추세
- **공간적 이질성**: 동일 종양 내에서도 공간적 위치에 따라 분자 상태가 다름. Spatial transcriptomics로 종양 내 구역별 아형 조성을 파악하는 연구가 진행 중
- **아형 안정성**: 치료 후 아형이 변하는지, 아형 내 이질성이 얼마나 되는지는 중요한 임상 문제. 일부 연구는 치료 후 아형 전환 또는 subtype-specific 내성 발생을 보고함

## 위키 내 관련 논문

- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] — 한국 NSCLC 229명; 5개 단백체 아형(metabolic, alveolar-like, proliferative, hypoxic, immunogenic)과 치료 반응 연관성 확인
- [[lehti-2021-proteogenomics-nsclc-subtypes-therapeutic-targets]] — NSCLC 141례; 14,000개 단백질로 6개 아형 정의, DIA 기반 임상 classifier를 독립 208+84례에서 검증
- [[ou-2025-integrated-proteogenomic-characterization-localized-prostate]] — 국소 전립선암 145명; AR 신호 이질성 기반 분자 아형과 치료 stratification
- [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]] — CPTAC 1,056례 10개 암종; 7개 pan-cancer 면역 아형, phosphoproteomics 기반 kinase activity로 아형별 표적 제안
- [[soltis-2022-proteogenomic-analysis-lung-adenocarcinoma-reveals]] — LUAD 87례; 흡연 기반 3개 유전체 아형, 단백질 발현이 RNA보다 생존 예측에 우수함을 실증
- [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] — 비흡연 EGFR/ALK 야생형 LUAD 99명; 4개 proteogenomic 아형별 치료 취약점(CDK inhibitor, 항혈관생성, 면역치료, 대사 표적)
- [[holt-2025-proteogenomic-characterization-unveils-biomarkers-associated]] — 방광암 MIBC; multi-omics clustering이 기존 분자 아형을 재현하면서 화학요법 감수성 아형을 추가 정의

## 관련 개념

- [[proteogenomics]]
- [[prostate-cancer]]
- [[lung-cancer]]
- [[liquid-biopsy]]
- [[tumor-microenvironment]]
- [[pan-cancer]]
