---
title: "Kinase Activity Inference Method Comparison"
type: comparison
updated: 2026-05-19
---

# Kinase Activity Inference 방법론 비교

## 개요

Phosphoproteomics 데이터에서 kinase 활성도를 추론하는 것은 암의 신호전달 이상을 이해하고 치료 표적을 발굴하는 데 핵심적인 분석 과정이다. 단순한 phosphosite 발현량 측정과 달리, kinase activity inference는 kinase-substrate 관계를 통해 상위 kinase의 활성 상태를 역추적한다. KSEA(2017), RoKAI(2021), CoPheeKSA(2025)가 wiki에 직접 수록된 방법이며, PTM-SEA와 INKA는 분야에서 널리 쓰이는 비교 대상이다.

## 비교표

| 방법 | 연도 | 원리 | 입력 데이터 | 알고리즘 핵심 | 비주석 kinase 처리 | 도구 접근성 | 주요 한계 | Wiki 수록 |
|------|------|------|-------------|--------------|-------------------|-------------|-----------|-----------|
| **KSEA** (Kinase-Substrate Enrichment Analysis) | 2017 | Kinase의 substrate set 인산화 변화 평균이 전체 배경 대비 유의하게 다른지 Z-score로 계산 | Phosphosite fold change (paired or group comparison) | 기대값 대비 substrate 집합의 평균 FC; Z-score = (평균 FC − 배경 평균) / (배경 SD / √n) | 미흡 — PhosphoSitePlus/NetworKIN에 등록된 kinase만 분석 가능 | KSEA App (Shiny 웹), KSEAapp R 패키지; casecpb.shinyapps.io/ksea/ | 단순 통계; 네트워크 구조 미고려; 잘 알려진 kinase 편향; substrate 수가 적은 kinase 저평가 | [[wiredja-2017-ksea-app-web-based-tool-kinase]] |
| **RoKAI** (Robust Kinase Activity Inference) | 2021 | KS 주석 + 공진화 + 구조적 거리 + PPI 네트워크 4종 통합; 네트워크 전파로 인접 kinase 정보 활용 | Phosphosite abundance/FC; 4개 네트워크 레이어 | Network propagation (random walk 기반); 기존 KSEA/PTM-SEA 위에 전처리 레이어로 작동 가능 | 핵심 강점 — 주석 희소 kinase도 네트워크 이웃 정보로 보완 | rokai.io 웹 도구; 모든 기존 kinase activity 방법과 호환 | 네트워크 품질에 의존; 계산적 프레임워크 (새로운 실험 데이터 없음); 제한적 perturbation 벤치마킹 | [[ylmaz-2021-robust-inference-kinase-activity-using]] |
| **CoPheeKSA** | 2025 | 1,195 CPTAC 종양의 phosphosite co-regulation 패턴(CoPheeMap)으로 학습된 네트워크 임베딩 → kinase-substrate 예측 | CPTAC pan-cancer phosphoproteomics (26,280 phosphosites); XGBoost | CoPheeMap(XGBoost 기반 phosphosite 공조절 네트워크) → 네트워크 임베딩 → KSA 예측 | 핵심 강점 — 기존 주석 없는 'dark phosphoproteome' (95%+) 커버; 104 S/T kinase × 9,399 phosphosites | 공개 예정 / Jiang 2025 보충 데이터 | S/T kinase만; tyrosine kinase 별도 분석 필요; CPTAC 외 플랫폼 재현성 미확인; 예측 실험 검증 제한적 | [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]] |
| **PTM-SEA** (Post-Translational Modification Set Enrichment Analysis) | 2019 | GSEA 원리를 PTM(인산화) 데이터에 적용; PhosphoSitePlus kinase-substrate sets 사용 | Phosphosite-level 정량 데이터 (paired comparison 불필요; continuous enrichment) | GSEA 알고리즘: phosphosite를 fold change로 랭킹 후 kinase substrate set enrichment score 계산 | KSEA보다 약간 나음 — continuous score로 다양한 substrate 커버; 그러나 여전히 주석 의존 | PTM-SEA R/Bioconductor 패키지; ssGSEA 기반 | GSEA 전제 조건 (랭킹에 의존); 소규모 substrate set 신뢰도 낮음; 이진 유의성보다 연속 점수 해석 필요 | 미직접 수록 (KSEA 대안으로 언급) |
| **INKA** (Integrative Inferred Kinase Activity) | 2019 | 4가지 증거 통합: ① 인산화된 kinase 자체, ② kinase activation loop 인산화, ③ substrate 인산화, ④ phosphorylation motif 기반 예측 | Phosphosite abundance (단일 샘플 또는 복수 샘플) | 4-evidence 통합 점수; 단일 샘플에서도 작동 (cohort 불필요) | 보통 — 4개 증거 중 substrate 증거가 포함되나 여전히 잘 알려진 kinase 편향 | R 스크립트 (GitHub); 단일 샘플 적용 가능 | 4가지 증거의 가중치 경험적 설정; 계산 소요 시간이 김; 네트워크 구조 활용 없음 | 미직접 수록 (분야 표준 방법으로 배경 설명) |

## 방법 선택 가이드

| 시나리오 | 권장 방법 |
|---------|----------|
| 빠른 탐색, 잘 알려진 kinase 중심 | KSEA |
| 비주석 / 비주류 kinase 분석 | RoKAI (KSEA/PTM-SEA 위에 적용) |
| Pan-cancer dark phosphoproteome 탐색 | CoPheeKSA |
| 단일 환자 샘플 분석 | INKA |
| 연속적 cohort 분석 (ranking 기반) | PTM-SEA |
| 최고 정확도를 위한 통합 파이프라인 | RoKAI 전처리 + KSEA/PTM-SEA 통합 |

## 핵심 차이점

- **KSEA vs. PTM-SEA**: 둘 다 kinase-substrate 주석에 의존하지만 KSEA는 Z-score 기반 그룹 비교에, PTM-SEA는 GSEA 방식의 연속적 enrichment에 적합하다. KSEA가 더 직관적이고 사용이 간편하다.
- **RoKAI의 차별점**: 기존 방법들(KSEA, PTM-SEA 등)의 '전처리 레이어'로 작동하여 모든 방법의 정확도를 향상시킨다. 특히 주석이 희박한 kinase에서 10x 이상의 성능 개선을 보고했다.
- **CoPheeKSA의 혁신**: ML(XGBoost) 기반으로 CPTAC 1,195 종양 데이터에서 학습된 co-regulation 패턴을 이용하여 기존 주석 DB에 없는 24,015개의 신규 kinase-substrate 관계를 예측한다. "Dark phosphoproteome" 문제를 정면으로 다룬 최초의 대규모 방법이다.
- **단일 샘플 vs. 코호트**: INKA는 단일 샘플에서도 작동하여 임상 정밀의학에 유리하다. KSEA/PTM-SEA/RoKAI는 복수 샘플 비교에서 통계적 검정력이 향상된다.
- **S/T vs. 티로신 kinase**: CoPheeKSA는 S/T kinase에 집중하며, 티로신 kinase(EGFR, SRC 등)는 별도 분석이 필요하다. 이는 phosphoproteomics에서 S/T 인산화가 전체의 ~98%를 차지하기 때문이기도 하다.

## 관련 논문

- [[wiredja-2017-ksea-app-web-based-tool-kinase]]
- [[ylmaz-2021-robust-inference-kinase-activity-using]]
- [[jiang-2025-deciphering-dark-cancer-phosphoproteome-using]]
- [[savage-2020-phosphoproteomics-bioinformatics-comprehensive-guide]]
- [[needham-2022-personalized-phosphoproteomics-identifies-functional-signaling]]
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]]
- [[oh-2020-integrated-pharmaco-proteogenomics-defines-two-subgroups]]

## 관련 개념

- [[kinase-activity-inference]]
- [[phosphoproteomics]]
- [[kinase-substrate]]
- [[network-propagation]]
- [[CPTAC]]
- [[dark-phosphoproteome]]
- [[drug-target-discovery]]
