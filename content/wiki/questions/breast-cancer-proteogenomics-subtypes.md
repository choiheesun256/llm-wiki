---
title: "유방암의 proteogenomic 분자 아형별 특성과 치료 전략은?"
type: question
status: active
category: [breast-cancer, proteogenomics, endocrine-resistance, drug-resistance, multi-omics]
source_files:
  - lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc.md
  - jaehnig-2025-proteogenomic-landscape-her2-positive-breast.md
  - rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer.md
  - robinson-2013-activating-esr1-mutations.md
  - schiavon-2015-analysis-esr1-mutation-circulating-tumor.md
  - toy-2013-esr1-ligand-binding-domain-mutations-breast.md
  - hu-2025-map3k1map2k4-mutations-drive-breast-cancer.md
  - yu-2023-lncrna-agpg-confers-endocrine-resistance.md
  - jiang-2024-integrated-multi-omic-characterization-chinese-breast.md
  - mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer.md
  - li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer.md
  - mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp.md
  - ji-2025-reversal-tamoxifen-resistance-breast-cancer.md
  - tacconi-2019-chlorambucil-targets-brca12-deficient-tumours-counteracts.md
  - jiang-2026-3disogalaxy-breast-cancer-isoform-foldome.md
updated: 2026-05-19
---

# 유방암의 proteogenomic 분자 아형별 특성과 치료 전략은?

## 짧은 답변

유방암은 ER+/HER2-/TNBC 세 주요 임상 아형을 넘어, proteogenomics 기반으로 면역 풍부형·EMT형·내분비 내성형 등 세분화된 분자 아형으로 구분된다. **TNBC**에서는 면역 풍부 아형이 가장 높은 항암제 반응률(pCR)을 보이고, AURKB 경로 활성화가 잔여 종양에서 내성 메커니즘을 주도한다([[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]]). **HER2+**에서는 단백질체 기반 아형 분류가 PAM50보다 pCR 예측력이 우수하며 GPRC5A/TPBG가 저항성 바이오마커로 부상한다([[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]]). **ER+ 내분비 내성**의 핵심 분자 기전은 ESR1 LBD 돌연변이(Y537S, D538G), lncRNA AGPG-E2F1 축, MAP3K1/MAP2K4 소실, N6AMT1-PI3K 축으로 다층적이다. 아시아 코호트([[jiang-2024-integrated-multi-omic-characterization-chinese-breast]])는 AKT1 E17K 돌연변이 농축과 basal-like에서의 ferroptosis 취약성 등 서양 코호트와 다른 특성을 추가로 제시한다.

## 상세 답변

### 1. TNBC: proteogenomic 아형과 항암제 내성 메커니즘

#### 1.1 5개 proteogenomic 아형과 pCR 예측 (Lee 2026)

[[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]]는 50명 TNBC 환자에게 신보조 anthracycline-taxane 항암 요법을 시행하고 기저·잔여 종양을 WES + RNA-seq + TMT 단백질체/인산화단백질체로 분석했다. NMF 군집화로 5개 아형을 도출했다:

| 아형 | 특징 | pCR 률 |
|------|------|--------|
| 면역 풍부형(Immune-enriched) | CD8+ T세포, 면역 활성 경로 | 55.6% |
| 기저형(Basal-like) | TP53 돌연변이, BRCA1/2 관련 | 중간 |
| 지질대사형(Lipid metabolism) | 지방산 산화 경로 활성 | 낮음 |
| EMT형 | 간엽 전환, 간엽 마커 | 0% |
| Xenobiotic 대사형 | 약물 대사효소 과발현 | 0% |

단백질 기반 예측 모델이 RNA 기반 모델보다 우수한 pCR 예측력을 보였다. 잔여 종양(pCR 미달)에서는 **AURKB 경로**가 현저히 활성화되어 있어, paclitaxel + Aurora 키나아제 억제제 병용이 내성 극복 전략으로 제안된다.

#### 1.2 BRCA1 결손 TNBC에서 면역 TME 매개 PARPi 내성

[[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]]는 BRCA1 관련 TNBC에서 대식세포가 지배적 면역세포임을 CyCIF 단일세포 이미징으로 확인했다:

- PARPi가 친종양·항종양 대식세포 특성을 동시에 강화
- **SREBF1** 경로가 대식세포 대사 재프로그래밍을 주도
- PARPi + **anti-CSF1R** 병용: 대식세포 재프로그래밍, CD8+ T세포 반응 강화, 생존 연장

[[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]]는 scRNA-seq으로 PARPi 내성 유방암에서 **TAM_C3(C5aR1-high)** 클러스터가 농축됨을 발견했다. C5aR1 억제가 TAM을 재프로그래밍하여 PARPi 감수성을 회복시킨다.

[[tacconi-2019-chlorambucil-targets-brca12-deficient-tumours-counteracts]]는 1,280개 FDA 승인 약물 스크리닝으로 클로람부실(chlorambucil)이 BRCA1/2 결손 세포에 선택적으로 독성이며, PARPi/cisplatin 내성 BRCA1/2 결손 종양에도 효과적임을 PDX 모델에서 확인했다.

---

### 2. HER2+ 유방암: 단백질체 아형과 치료 내성

#### 2.1 CALGB 40601 코호트 proteogenomic 분석 (Jaehnig 2025)

[[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]]는 HER2+ 유방암 신보조 trastuzumab ± lapatinib 치료(CALGB 40601 임상시험) 코호트를 단백질체·인산화단백질체로 분석했다:

- **단백질체 기반 아형**이 PAM50 전사체 분류보다 pCR 예측력 우수
- **GPRC5A, TPBG** 고발현 → HER2 표적 치료 내성과 연관
- 인산화단백질체 분석에서 비반응군은 비HER2 bypass 키나아제 경로 활성화 확인
- 면역 풍부 단백질체 아형이 가장 높은 pCR률

bypass 키나아제 경로 파악은 HER2+ 내성 환자에서 합리적 병용 요법 설계의 근거를 제공한다.

---

### 3. Difficult-to-Treat Breast Cancer (DTBC): laser microdissection 기반 proteogenomics

[[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]]는 117개 원발 유방 종양을 **LMD(레이저 미세절제)**로 종양세포를 농축한 뒤 WGS, RNA-seq, 단백질체, 인산화단백질체를 동시 추출하여 통합 분석했다:

- DTBC 특이적 돌연변이: **TP53, PLXNB3**, CNV: 1q21 증폭
- 인산화단백질체 군집이 basal-like 종양에서 재발 위험을 고위험/저위험으로 구별
- LMD가 기질 오염을 최소화하여 종양 세포 특이적 신호를 정밀하게 포착
- Luminal A 대비 DTBC는 kinase 활성 프로파일에서 현저한 차이

---

### 4. ER+ 유방암 내분비 내성: 다층적 분자 기전

#### 4.1 ESR1 LBD 돌연변이: 내분비 내성의 핵심 (Robinson 2013, Toy 2013, Schiavon 2015)

[[toy-2013-esr1-ligand-binding-domain-mutations-breast]]와 [[robinson-2013-activating-esr1-mutations]]는 2013년 동시에 전이성 ER+ 유방암에서 ESR1 LBD 돌연변이(Y537S, D538G)를 발견했다:

- **Y537S, D538G**: ER을 리간드 독립적 agonist 입체구조로 고정 → 에스트로겐 없이도 전사 활성화
- 1차 종양에서는 <1%; 전이성 병변에서 ~18%로 농축 → 내분비 치료 선택압에 의한 클론 선택
- 아로마타아제 억제제(AI) 및 tamoxifen에 내성; fulvestrant에 일부 감수성 유지
- **분자적 함의**: SERD(selective estrogen receptor degrader; elacestrant 등) 개발의 이론적 근거

[[schiavon-2015-analysis-esr1-mutation-circulating-tumor]]는 ctDNA 디지털 PCR로 171명 진행성 ER+ 유방암 환자를 분석:

- ESR1 변이 빈도: 10.5%(전체); 전이성 AI 투여군 36.4% vs. AI 미투여군 5.8%
- ctDNA-종양 생검 97% 일치율
- ESR1 변이 → 이후 AI 치료에서 PFS 현저 단축(HR=3.1)
- **액체 생검 기반 내성 모니터링**의 임상적 기반 확립

#### 4.2 MAP3K1/MAP2K4 소실: TP53 결손 보상 기전 (Hu 2025)

[[hu-2025-map3k1map2k4-mutations-drive-breast-cancer]]는 ER+ 유방암에서 MAP3K1/MAP2K4 기능 소실 돌연변이가 JNK2-p53-FOSL1 축을 억제하여 TP53 결손을 기능적으로 보상함을 규명했다:

- **MAP3K1/MAP2K4** 소실 → JNK2 인산화 감소 → p53 활성화 억제 → **FOSL1/FRA1** 상향 → 증식·전이 촉진
- TCGA·METABRIC에서 TP53 변이와 **상호 배타성** 확인
- 치료 전략: JNK 경로 활성화제 또는 **FOSL1 억제제** 잠재적 표적
- CPTAC 인산화단백질체 공개 데이터로 pan-cancer 수준 검증

#### 4.3 lncRNA AGPG: E2F1 경로를 통한 내분비 내성 (Yu 2023)

[[yu-2023-lncrna-agpg-confers-endocrine-resistance]]는 ERα+ 유방암에서 lncRNA AGPG가 내분비 내성을 유발하는 epigenomic 기전을 밝혔다:

- AGPG가 **PURα에 결합** → E2F1 방출 → E2F1 표적 유전자 활성화 → tamoxifen 내성
- 내성 세포에서 AGPG의 **에피게놈 활성화** (히스톤 개방)
- AGPG siRNA + tamoxifen 병용: 이종이식 모델에서 내성 종양 성장 억제
- **Luminal B** 아형에서 AGPG 농축
- CDK4/6 억제제 내성 세포에서도 AGPG 증가 → 병용 내성의 공통 경로

#### 4.4 N6AMT1-NEDD4L-p110α 축: PI3K 활성화 기반 내성 (Ji 2025)

[[ji-2025-reversal-tamoxifen-resistance-breast-cancer]]는 N6AMT1 소실이 tamoxifen 내성을 PI3K 과활성화를 통해 유발함을 밝혔다:

- **FOXA1 → N6AMT1 → NEDD4L → p110α ubiquitination/분해** 축
- N6AMT1 소실 → NEDD4L 소실 → p110α 단백질 안정화 → **PI3K/AKT 과활성화**
- N6AMT1 복원 또는 PI3K 억제제가 tamoxifen 내성 역전
- 저발현 N6AMT1 → ER+ 유방암 불량 예후와 상관

---

### 5. 중국 유방암 코호트(CBCGA): 아시아 특이적 분자 landscape (Jiang 2024)

[[jiang-2024-integrated-multi-omic-characterization-chinese-breast]]는 773명 중국 유방암 환자에서 6개 오믹스 레이어(유전체, 전사체, 단백질체, 대사체, 방사선, 디지털 병리)를 통합한 가장 포괄적인 아시아 유방암 멀티오믹스 아틀라스다:

- **AKT1 E17K** 돌연변이: 중국 코호트에서 서양 코호트 대비 농축 → PI3K/AKT 표적 치료 선택에 중요
- Basal-like 아형: **GPX4 의존적 ferroptosis** 취약성 → ferroptosis 유도 전략 가능
- 대사체 아형이 표준 분류와 독립적인 예후 정보 제공
- 방사선·디지털 병리 통합으로 비침습적 바이오마커 후보 발굴

---

### 6. CPTAC 유방암 proteogenomics: 돌연변이-신호 연결 (Mertins 2016)

[[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]]는 105개 TCGA 유방암 시료에서 12,553개 단백질과 33,239개 인산화 사이트를 iTRAQ으로 정량하여 체세포 돌연변이와 하위 신호 변화를 직접 연결한 랜드마크 연구다:

- **5q 결실 trans-effect**: CETN3/SKP1 소실 → EGFR/SRC 활성화 (전사체로는 불가시)
- 단백질 수준 GPCR 신호 클러스터: RNA에서 불검출
- 증폭자 연관 키나아제: **CDK12, PAK1, PTK2** → 표적 가능 키나아제 발굴
- 단백질체 기반 분류가 임상 아형을 재규정하는 proof-of-concept

---

### 7. 단백질 isoform 수준 분석: 3DisoGalaxy (Jiang 2026)

[[jiang-2026-3disogalaxy-breast-cancer-isoform-foldome]]는 PacBio Iso-Seq + 짧은 읽기 RNA-seq + Ribo-seq을 통합하여 유방암 isoform-resolved 지식 기반을 구축했다:

- 123,395개 전사체 변이체, 73,715개 ORF, 46,601개 AlphaFold 예측 단백질 구조
- **KRAS4A** 선택적 모티프 소실, **AKT1** 비정준 isoform의 TNBC 편향 발현
- 유전자 수준 분석이 놓치는 isoform 특이적 기능 변화와 약물 표적 가능성 제시

---

## 핵심 비교표

| 아형 | 핵심 분자 특성 | 내성/취약점 기전 | 치료 전략 | 주요 연구 |
|------|------------|--------------|---------|---------|
| **TNBC 면역 풍부** | CD8+ T세포, 면역 활성 | 높은 pCR; 잔여 종양 AURKB 활성 | 항암제 + Aurora 억제제 | [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] |
| **TNBC EMT/Xenobiotic** | 간엽 전환, 약물 대사효소 | 0% pCR; 내성 최고 | 표적 미확립; EMT 역전 | [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] |
| **TNBC BRCA1 결손** | BRCA1 소실, TAM | TME 대식세포 PARPi 내성 | PARPi + CSF1R/C5aR1 억제 | [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]], [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] |
| **HER2+ 면역 풍부** | 면역 활성, 높은 TIL | 최고 pCR; GPRC5A/TPBG 저발현 | trastuzumab + lapatinib | [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] |
| **HER2+ 내성** | GPRC5A/TPBG 고발현 | bypass 키나아제 활성 | 키나아제 bypass 표적 병용 | [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] |
| **DTBC (basal-like 고위험)** | TP53, PLXNB3, 1q21 | 인산화단백질체 고위험 클러스터 | 키나아제 표적 (개별화) | [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] |
| **ER+ ESR1 변이** | Y537S/D538G LBD 돌연변이 | AI/tamoxifen 내성; 리간드 독립 ER 활성 | SERD (elacestrant) | [[toy-2013-esr1-ligand-binding-domain-mutations-breast]], [[robinson-2013-activating-esr1-mutations]] |
| **ER+ AGPG 과발현** | lncRNA AGPG-PURα-E2F1 | tamoxifen/CDK4/6i 내성 | AGPG 침묵 + 내분비 요법 | [[yu-2023-lncrna-agpg-confers-endocrine-resistance]] |
| **ER+ MAP3K1/MAP2K4 소실** | JNK2-p53-FOSL1 억제 | TP53 결손 보상, 전이 촉진 | FOSL1 억제제, JNK 활성화 | [[hu-2025-map3k1map2k4-mutations-drive-breast-cancer]] |
| **ER+ N6AMT1 소실** | PI3K/AKT 과활성 | tamoxifen 내성 | tamoxifen + PI3Ki 병용 | [[ji-2025-reversal-tamoxifen-resistance-breast-cancer]] |
| **바sal-like (아시아)** | AKT1 E17K, GPX4 의존성 | ferroptosis 취약 | GPX4 억제제, ferroptosis 유도 | [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] |

---

## 관련 논문

- [[lee-2026-proteogenomic-decoding-chemotherapy-resistance-tnbc]] — 50명 TNBC neoadjuvant 코호트; NMF 5 아형; AURKB 활성화가 화학요법 내성 잔여 종양을 특징지음; 단백질 기반 pCR 예측 우위
- [[jaehnig-2025-proteogenomic-landscape-her2-positive-breast]] — CALGB 40601 HER2+ 시험; GPRC5A/TPBG 내성 바이오마커; bypass 키나아제; 단백질체 아형이 PAM50 초과
- [[rajkumar-2024-proteogenomic-characterization-difficult-to-treat-breast-cancer]] — 117 DTBC LMD 기반 멀티오믹스; 인산화단백질체 클러스터로 basal-like 재발 위험 층화; TP53/PLXNB3 특이 돌연변이
- [[robinson-2013-activating-esr1-mutations]] — ESR1 LBD 돌연변이(Y537S/D538G) 전이성 ER+ 유방암에서 최초 발견; ~20% 빈도; AI 내성 기전; SERD 개발 근거
- [[toy-2013-esr1-ligand-binding-domain-mutations-breast]] — MSKCC/BOLERO-2 코호트; 18% 전이성 ESR1 변이 vs. <1% 1차 종양; 리간드 독립 agonist 입체구조; HSP90 독립적 안정성
- [[schiavon-2015-analysis-esr1-mutation-circulating-tumor]] — ctDNA 디지털 PCR; ESR1 변이 10.5%; AI 노출에 의한 클론 선택(36.4% vs. 5.8%); PFS 예측력(HR=3.1)
- [[hu-2025-map3k1map2k4-mutations-drive-breast-cancer]] — MAP3K1/MAP2K4 소실이 JNK2-p53-FOSL1을 억제하여 TP53 결손을 기능적으로 보상; ER+ 유방암 전이 촉진; FOSL1 표적 치료 가능성
- [[yu-2023-lncrna-agpg-confers-endocrine-resistance]] — lncRNA AGPG가 PURα 격리로 E2F1 활성화; Luminal B에서 epigenomic 상향; AGPG siRNA + tamoxifen 병용 이종이식 억제
- [[jiang-2024-integrated-multi-omic-characterization-chinese-breast]] — CBCGA 773명 6개 오믹스 레이어; AKT1 E17K 아시아 농축; basal-like GPX4 ferroptosis 취약성; 대사체 독립 예후 정보
- [[mertins-2016-proteogenomics-somatic-mutations-signalling-breast-cancer]] — CPTAC 랜드마크; 105개 TCGA 유방암 12,553단백질/33,239인산화; 5q 결실 trans-EGFR/SRC 활성화; CDK12/PAK1/PTK2 증폭자 키나아제
- [[li-2024-c5ar1-tam-parp-inhibitor-resistance-breast-cancer]] — scRNA-seq; TAM_C3 C5aR1-high 클러스터 PARPi 내성 매개; C5aR1 억제로 감수성 회복; TME 전달 내성
- [[mehta-2021-targeting-immunosuppressive-macrophages-overcomes-parp]] — BRCA1 TNBC 대식세포 SREBF1 대사 재프로그래밍; PARPi + anti-CSF1R 병용으로 내성 극복
- [[ji-2025-reversal-tamoxifen-resistance-breast-cancer]] — FOXA1→N6AMT1→NEDD4L→p110α 분해 축; N6AMT1 소실 시 PI3K/AKT 과활성; N6AMT1 복원 또는 PI3Ki로 tamoxifen 내성 역전
- [[tacconi-2019-chlorambucil-targets-brca12-deficient-tumours-counteracts]] — FDA 승인 약물 1,280개 스크리닝; chlorambucil이 BRCA1/2 결손에 선택적 독성; PARPi/cisplatin 내성에도 유효
- [[jiang-2026-3disogalaxy-breast-cancer-isoform-foldome]] — 유방암 isoform-resolved foldome; 123,395 전사체 변이체; KRAS4A 모티프 소실; TNBC-편향 AKT1 비정준 isoform

## Related pages

- [[breast-cancer]]
- [[proteogenomics]]
- [[endocrine-resistance]]
- [[drug-resistance-mechanisms]]
- [[TNBC]]
- [[HER2]]
- [[ESR1]]
- [[PARP-inhibitor]]
- [[multi-omics]]
- [[CPTAC]]
