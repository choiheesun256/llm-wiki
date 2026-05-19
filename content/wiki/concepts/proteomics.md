---
title: "Proteomics"
type: concept
updated: 2026-05-19
---

# 프로테오믹스 (Proteomics)

## 정의

프로테오믹스는 세포, 조직, 또는 생체 시료에서 발현되는 단백질 전체(proteome)를 대규모로 분석하는 학문 분야이다. 유전체(genome)가 고정된 정보를 담는 데 반해, 프로테옴은 세포 상태, 환경 자극, 질병 여부에 따라 동적으로 변한다. 이 때문에 프로테오믹스는 암 생물학에서 유전체·전사체 분석만으로는 포착할 수 없는 단백질 수준의 기능적 변화를 직접 측정하는 핵심 도구로 자리잡았다.

현대 프로테오믹스는 주로 mass spectrometry(MS) 기반 워크플로우를 사용한다. 단백질을 트립신(trypsin)으로 소화해 펩타이드 혼합물을 만든 후, LC(liquid chromatography)로 분리하고 MS/MS로 펩타이드를 동정·정량한다. 정량 방식은 크게 TMT(tandem mass tag) 등의 isobaric labeling을 이용한 multiplexed 접근과, label-free quantification(LFQ)으로 나뉜다. 또한 데이터 수집 전략에 따라 DDA(data-dependent acquisition)와 DIA(data-independent acquisition)로 구분되며, DIA는 재현성이 높고 더 깊은 커버리지를 제공한다.

## 핵심 원리

- **TMT 정량**: 샘플을 isobaric chemical tag으로 표지한 후 멀티플렉싱하여 동시에 최대 18채널까지 정량 가능. 배치 효과 최소화에 유리.
- **LFQ (Label-Free Quantification)**: 라벨링 없이 MS1 이온 강도로 정량. 샘플 수 제한 없으나 배치 간 재현성 관리가 중요.
- **DDA vs DIA**: DDA는 가장 풍부한 이온을 선택 단편화(precursor-dependent); DIA는 정해진 m/z 범위를 모두 단편화하여 높은 재현성 및 깊은 프로테옴 커버리지 달성.
- **FFPE 호환성**: 포르말린 고정 파라핀 포매(FFPE) 조직에서도 LFQ 프로테오믹스 적용 가능; TIC normalization으로 샘플 로딩 변동성 보정.
- **LC-FAIMS-MS/MS**: Field asymmetric ion mobility spectrometry(FAIMS) 필터를 추가하여 이온 복잡도 감소 및 신호 대 잡음비 개선.
- **mRNA-단백질 상관관계**: 전사체와 프로테옴의 풍부도 상관계수(r)는 암에서 평균 약 0.48 수준으로, 전사체만으로는 상당수 단백질 변화를 놓친다.
- **post-translational modification(PTM) 분석**: phosphoproteomics, glycoproteomics 등을 통해 단백질 활성 상태를 직접 측정.

## 위키 내 관련 논문

### 기술 및 워크플로우
- [[tshaus-2025-towards-routine-proteome-profiling-ffpe]] — FFPE 1,220 케이스 pan-cancer LFQ proteomics; TIC normalization
- [[lancaster-2024-fast-deep-phosphoproteome-orbitrap-astral]] — Orbitrap Astral + DIA로 30분 내 ~30,000 phosphosites
- [[satpathy-2020-microscaled-proteogenomic-methods-precision-oncology]] — 핵심 생검에서 BioTExt/MiProt 미소규모 프로테오믹스

### 암 프로테오믹스 응용
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — CPTAC 유방암 iTRAQ 프로테오제노믹스 랜드마크 연구
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]] — 229명 한국 NSCLC TMT 프로테오믹스; 5개 분자 아형
- [[kim-2024-proteogenomic-characterization-egfr-alk-wt-never-smoker-luad]] — EGFR/ALK WT 비흡연 폐암 TMT 기반 4개 아형

### 도구 및 데이터베이스
- [[wang-2023-cprosite-web-based-interactive-platform]] — CPTAC 12개 암종 단백질·인산화 데이터 웹 플랫폼
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]] — 인산화프로테오믹스 생물정보학 도구 종합 가이드
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — CPTAC 10개 암종 2,863개 약물가능 단백질 목록

## 관련 개념

- [[proteogenomics]]
- [[phosphoproteomics]]
- [[multi-omics]]
- [[CPTAC]]
- [[precision-oncology]]
- [[bioinformatics-tool]]
