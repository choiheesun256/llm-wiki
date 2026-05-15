---
title: "Day 7: CPTAC Proteogenomics"
draft: false
---

# Day 7: CPTAC Proteogenomics

## Big Picture

Clinical Proteomic Tumor Analysis Consortium(CPTAC)은 genomics, transcriptomics, proteomics, phosphoproteomics, acetylomics, ubiquitylomics, metabolomics를 수천 개 종양과 14개 암종에 걸쳐 통합한, 현재까지 가장 포괄적인 종양 multi-omics 특성화를 수행했다. 모든 연구를 관통하는 핵심 발견: **단백질 수준의 생물학은 유전체/전사체 예측과 자주 괴리되며**, DNA/RNA 분석만으로는 보이지 않는 치료 표적과 취약점을 드러낸다.

## 핵심 개념

**CNA buffering** — 복제수 증폭/결실이 단백질 수준으로 선형 전달되지 않는 경우가 많다. Ubiquitin-proteasome 시스템이 과잉 단백질을 분해하고, 번역 조절이 mRNA 변화를 완충한다. 일부 암종에서는 유전자의 32%만이 유의미한 mRNA-단백질 상관을 보인다.

**Proteogenomic 아형** — 단백질체 NMF 클러스터링은 전사체로는 보이지 않는 아형을 자주 드러낸다: 새로운 EMT/불량 예후 클러스터, 기존 아형 내 숨겨진 이질성.

**Phospho-signature** — 인산화 단백질 수준의 기능적 판독이 실행 가능한 경로 활성화를 식별한다. 유전체만으로는 예측 불가.

## 논문별 정리 (시간순)

### Zhang 2014 — 대장직장암 (기초)
→ [[cancer/zhang-2014-proteogenomic-characterization-colon-rectal-cancer]]

최초의 CPTAC 연구 (95개 CRC 종양). 유전자의 32%만 유의미한 mRNA-단백질 상관. 5개 proteomic 아형 식별, 전사체에 선례 없는 EMT/불량예후 클러스터(C) 포함. **대규모 mRNA-단백질 불일치의 원칙**을 확립한 논문.

### Mertins 2016 — 유방암 (기초)
→ [[cancer/mertins-2016-proteogenomics-connects-somatic-mutations-signalling]]

77개 TCGA 유방 종양. CNA trans-effect가 단백질 수준에서 크게 완충(13% 유의미 vs. mRNA 68%). PIK3CA, TP53 phospho-signature 최초 식별. CDK12, PAK1, TLK2, RIPK2가 amplicon 구동 실행 가능 kinase 표적으로 등장.

### Zhang 2016 — 난소암 (HGSOC)
→ [[cancer/zhang-2016-integrated-proteogenomic-characterization-human-high-grade]]

174개 HGSOC 종양. Histone H4 K12/K16 이중 아세틸화가 HRD 종양을 표시. PDGFRβ/RhoA phospho-경로가 나쁜 생존과 연관 — 전사체에서는 보이지 않는 신호.

### Gillette 2019 — 유방암 (Oslo2 코호트)
→ [[cancer/gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape]]

45개 유방 종양, HiRIEF-LC-MS. 단백질체 수준에서 PAM50 아형 최초 재현. 388개 신규 비-코딩 펩타이드 식별, 116개가 MHC class I neoantigen 후보.

### Vasaikar 2019 — 대장암 (전향적)
→ [[cancer/vasaikar-2019-proteogenomic-analysis-human-colon-cancer]]

110명 전향적 대장 코호트. RB1 증폭 역설: CDK2 구동 Rb 과인산화가 종양 억제가 아닌 발암 드라이버로 작용. MSI-H 종양의 당분해 상향조절이 CD8+ T 세포 침윤과 음의 상관. CNA 복제수만으로는 기능적 생물학을 잘못 표현한다.

### Krug 2020 — 유방암 (전향적 CPTAC)
→ [[cancer/krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis]]

122개 전향적 종양. PAM50 LumA 내 숨겨진 생물학을 발견. 단백질체가 모호한 IHC/FISH 사례에서 ERBB2 진단 상태를 교정. Rb 단백질 수준이 RB1 유전형을 넘어 CDK4/6i 반응을 예측.

### Gillette 2020 — 폐선암
→ [[cancer/gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities]]

110개 LUAD 종양. 핵심 phosphoproteomic 발견:
- PTPN11 Y62가 EGFR 변이 종양에서만 과인산화
- SOS1 S1161이 KRAS 변이 종양에서만 과인산화
- STK11 immune-cold 표현형이 호중구 탈과립에 의해 구동 (단백질 수준 전용 신호)

### Wang 2021 — 교모세포종
→ [[cancer/wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma]]

99개 GBM 종양, snRNA-seq + lipidome/metabolome 포함 10개 modality. PTPN11/PLCG1 인산화가 수렴적 RTK 신호 허브. Mesenchymal GBM에서 종양 고유 EMT와 ferroptosis 관련 지질 종 풍부. 가장 데이터 밀도가 높은 CPTAC 연구.

### Satpathy 2021 — 폐편평세포암
→ [[cancer/satpathy-2021-proteogenomic-portrait-lung-squamous-cell]]

108개 LSCC 종양. 8p11.23 좌위의 진정한 드라이버가 FGFR1이 아닌 **NSD3**임을 multi-omics로 식별. Phospho-Rb가 RB1 유전형보다 우수한 CDK4/6i 반응 바이오마커. LSCC 최초의 대규모 ubiquitylome 및 acetylome.

### Zhang 2022 — 범암 대규모 자원
→ [[cancer/zhang-2022-proteogenomic-characterization-2002-human-cancers]]

14개 암종 2,002개 종양 — 최대 CPTAC 자원. 11개 범암 proteome 아형. 12개 비정규 MYC 경로 활성화자(ARID1A, PTEN, RB1 등)가 직접적 MYC 증폭 없이 작동. 정규 TP53 표적 signature가 전사체에서는 검출되지만 **단백질체에서는 검출 불가**.

### Li 2023 — 범암 발암 드라이버
→ [[cancer/li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers]]

10개 암종 1,064개 종양. KEAP1/NFE2L2 변이가 암종 간 가장 보존된 trans-effect. EGFR/STK11이 가장 divergent (합성치사 후보). RB1 변이가 CDK4/6이 아닌 **CDK2 의존성**을 함의 — CDK 억제제 선택에 정보를 제공.

## CPTAC 원칙

```
Genomics        → "어떤 변이가 있는가?"
Transcriptomics → "어떤 유전자가 발현되는가?"
    ↕ (자주 불일치 — CNA buffering, 번역후 조절)
Proteomics      → "어떤 단백질이 실제로 존재하는가?"
Phosphoproteomics → "어떤 신호 경로가 실제로 활성인가?"
```

**레이어 간 간극은 잡음이 아니라 생물학이다.**

## 교차 연구 테마

| 테마 | 연구 | 발견 |
|------|------|------|
| CNA buffering | 전체 | mRNA-단백질 불일치가 만연 |
| Phospho-Rb 바이오마커 | Krug 2020, Satpathy 2021, Vasaikar 2019 | RB1 유전형보다 CDK4/6i 반응 예측 우수 |
| PTPN11 RTK 허브 | Gillette 2020, Wang 2021 | EGFR 변이 폐, GBM에서 수렴적 신호 |
| 신규 proteomic 아형 | Zhang 2014, Krug 2020, Wang 2021 | 전사체만으로는 보이지 않는 아형 |
| TP53 단백질 수준 단절 | Zhang 2022 | TP53 전사 signature가 proteome에 반영 안 됨 |

## Day 간 연결

- **Day 5**: CDK4/6과 phospho-Rb 바이오마커가 CDK 생물학과 연결
- **Day 6**: Phosphoproteomics 방법론이 CPTAC 데이터에 적용되는 분석 도구
- **Day 3**: EGFR 변이 종양의 PTPN11 Y62가 EGFR 구동 신호전달의 phospho 수준 이해를 제공
- **Day 1**: HGSOC proteogenomics에서 HRD signature가 BRCA/PARP 생물학과 연결

## 핵심 메시지

CPTAC은 genomics와 transcriptomics가 필요하지만 충분하지 않음을 보여준다. 단백질 수준 측정이 CNA buffering, 숨겨진 아형, 기능적 phospho-바이오마커, DNA/RNA에서 보이지 않는 약물 표적을 드러낸다. 임상시험은 proteomics를 통합해야 하고, 전임상 연구는 유전체 발견을 단백질 수준에서 검증해야 한다.
