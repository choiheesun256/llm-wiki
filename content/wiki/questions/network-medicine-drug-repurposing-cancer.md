---
title: "Network medicine 기반 암 약물 재배치의 원리와 최신 접근법은?"
type: question
status: active
category: [network-medicine, drug-repurposing, proteogenomics]
source_files:
  - kersting-2025-inferring-evaluating-network-medicine-disease-modules.md
  - kersting-2025-nf-core-nextflow-disease-module.md
  - hartung-2022-caddie-cancer-driver-drug-interaction.md
  - savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic.md
  - shi-2025-functional-network-human-cancer-proteogenomics.md
  - wang-2023-cprosite-web-based-interactive-platform.md
  - zou-2024-iprophos-web-based-interactive-platform-integrated.md
  - yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4.md
  - tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor.md
  - xing-2026-gps-transcriptomic-reversal.md
  - chauquet-2026-twas-signature-matching-for-drug.md
  - guo-2026-larger-models-scaling-benchmark-drug-discovery.md
  - tsepilov-2026-gentropy-pleiotropy-target-safety.md
  - ohlan-2025-molgene-e-inverse-molecular-design-transcriptomic-reversal.md
updated: 2026-05-19
---

# Network medicine 기반 암 약물 재배치(drug repurposing)의 원리와 최신 접근법은?

## 짧은 답변

Network medicine 기반 drug repurposing은 질병을 단일 유전자가 아닌 분자 상호작용 네트워크(interactome) 내의 perturbation으로 이해하고, disease module을 탐색하여 기존 약물이 작용할 수 있는 새로운 표적을 체계적으로 발굴하는 접근이다. 최신 연구에서는 CPTAC 기반 proteogenomics, Mendelian randomization(MR), AI 기반 transcriptomic reversal 등 다중 방법론이 결합되어 인과성이 검증된 약물 후보를 식별하는 방향으로 발전하고 있다.

## 상세 답변

### Network medicine의 이론적 기반

Network medicine은 Harald Schmidt의 Systems Medicine 프레임워크에서 제시하듯, 현대 의학의 한계를 극복하기 위해 질병을 분자 상호작용 네트워크(interactome)의 perturbation으로 재정의하는 패러다임이다. 핵심 개념은 다음과 같다.

- **Disease module**: 질병 관련 유전자/단백질이 interactome 내에서 형성하는 국소적 클러스터. Seed gene에서 출발하여 DOMINO, DIAMOnD, ROBUST, RWR(Random Walk with Restart) 등의 알고리즘으로 확장된다.
- **Network proximity**: 약물의 표적 집합과 disease module이 interactome 상에서 얼마나 가까운지를 측정하여 재배치 가능성을 예측한다.
- **Module sharing**: 서로 다른 질병이 disease module을 공유하면, 한 질병에 효과적인 약물이 다른 질병에도 적용 가능하다는 원리이다.

Drug repurposing에서 network medicine은 직접 표적이 불가능한 유전자도 네트워크 이웃을 통해 간접 공략할 수 있다는 이점을 제공한다.

### Disease module 탐지 알고리즘과 평가

[[kersting-2025-nf-core-nextflow-disease-module]]과 [[kersting-2025-inferring-evaluating-network-medicine-disease-modules]]는 List/Baumbach lab의 시스템으로, 6종의 module detection 알고리즘(DOMINO, DIAMOnD, ROBUST, ROBUST bias-aware, 1st Neighbors, RWR)을 Nextflow 파이프라인으로 통합하여 50개 이상의 질병-네트워크 조합에서 체계적으로 벤치마킹했다. 핵심 발견은 다음과 같다.

- 단일 최우수 알고리즘이 존재하지 않으며, 결과는 입력 PPI 네트워크 선택에 크게 좌우된다.
- DOMINO는 소형 모듈을, RWR/1st Neighbors는 대형 모듈을 반환하며, ROBUST bias-aware가 가장 탐색적이다.
- Drug prioritisation은 NeDRexDB 기반 degree centrality, harmonic centrality, TrustRank로 수행된다.

[[hartung-2022-caddie-cancer-driver-drug-interaction]]의 CADDIE는 이 그룹의 웹 플랫폼 전신으로, COSMIC/NCG6/IntOGen에서 암 driver 유전자를 시작점으로 16,761개 유전자 + 6,840개 약물로 구성된 interactome을 네트워크 traversal하여 repurposing 후보를 제시한다. 육종(sarcoma) 검증에서 imatinib, sorafenib, sunitinib을 재발견하고 AT-7519, lapatinib 등 신규 후보를 식별했다.

### Proteogenomics 기반 표적 발굴

단순 유전체 데이터만으로는 포착되지 않는 단백질 수준의 발현 이상이 drug target으로서 핵심적이다.

**Savage 2024 - CPTAC pan-cancer 치료 표적 지형도**: [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]]은 Cell 2024에서 CPTAC 1,043개 종양, 10개 암종을 통합하여 2,863개 druggable 단백질을 5-tier 분류 체계로 분류했다. mRNA-protein correlation 중앙값이 0.48로 전사체만으로는 단백질 수준 표적을 놓칠 수 있음을 정량화하였으며, 합성 치사(synthetic lethality) 표적과 KRAS 돌연변이 neoantigen도 제시했다.

**Shi 2025 - FunMap 기능 네트워크**: [[shi-2025-functional-network-human-cancer-proteogenomics]]는 Nature Cancer에서 1,194명, 11개 CPTAC 암종의 proteomics와 RNA-seq 데이터를 XGBoost로 학습하여 10,525개 유전자, 196,800개 엣지의 pan-cancer 기능 네트워크 FunMap을 구축했다. Protein coexpression이 mRNA보다 유전자 co-functionality의 더 강력한 예측자임을 증명하고, GNN을 적용하여 저빈도 암 driver를 발굴했다. 인터랙티브 웹 도구(funmap.linkedomics.org)로 공개되었다.

**pan-cancer 면역 표적**: [[petralia-2024-pan-cancer-proteogenomics-characterization-tumor-immunity]]는 1,056개 CPTAC 종양에서 7개 pan-cancer 면역 아형을 정의하고, phosphoproteomics 기반 kinase activity 분석으로 아형별 면역치료 표적을 제시했다.

### 탐색 도구: cProSite와 iProPhos

- **cProSite** ([[wang-2023-cprosite-web-based-interactive-platform]]): NCI의 웹 플랫폼으로 12개 CPTAC 암종의 단백질/인산화 사이트 발현, mRNA-protein correlation, cross-cancer 비교를 코딩 없이 검색할 수 있다. cprosite.ccr.cancer.gov에서 무료 접근 가능하다.
- **iProPhos** ([[zou-2024-iprophos-web-based-interactive-platform-integrated]]): 12개 CPTAC 암종(1,444 종양 + 746 정상) 기반으로 단백질 차등 발현, 생존 분석, kinase-substrate 농축, PPI 네트워크 분석 및 사용자 데이터 업로드를 지원하는 R Shiny 기반 플랫폼이다(longlab.zju.cn/iProPhos). TCPA, CPPA, UALCAN, LinkedOmics 대비 kinase-substrate correlation 분석 기능이 강점이다.

두 플랫폼 모두 drug repurposing 후보 단백질의 pan-cancer 발현 검증에 즉시 활용 가능하다.

### Mendelian Randomization: 인과적 표적 검증

관찰 연구나 상관 분석만으로는 인과성을 확립하기 어렵다. MR은 유전적 도구 변수를 활용하여 무작위 대조 시험에 가까운 인과 추론을 제공한다.

[[yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4]]는 JNCI 2025에서 cis-MR, colocalization, 관찰 연구를 삼각 검증(triangulation)하여 지질 조절 약물 표적(ANGPTL3, ANGPTL4, APOC3, CETP, PCSK9)의 암 위험 영향을 평가했다. 유전적으로 proxied된 ANGPTL4 억제가 대장암 위험을 감소시킴(OR 0.76)을 발견했으며, EPIC 코호트와 UK Biobank 단백질 데이터로 사전 진단적 검증을 수행했다. 이 프레임워크는 기존 지질 강하 약물(예: ANGPTL4 저해제)을 암 예방에 재배치하는 근거를 제공한다.

### AI 기반 transcriptomic reversal

Transcriptomic reversal 패러다임은 암의 유전자 발현 패턴을 정상으로 되돌리는 화합물을 탐색하는 표적 비의존적(target-agnostic) drug repurposing 접근이다.

- **GPS (Xing 2026)** [[xing-2026-gps-transcriptomic-reversal]]: Cell 2026에서 화합물 구조로부터 LINCS L1000 landmark gene 발현 레이블(up/down/no-effect)을 예측하고, Z-RGES로 질병 서명 역전을 점수화한다. MolSearch(Monte Carlo tree search)를 통한 hit-to-lead analog 설계까지 제공하며, HCC 및 IPF에서 실험 검증을 수행했다.

- **Tong 2026 - 멀티모달 딥러닝** [[tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor]]: 2D 분자 그래프 GCN + ECFP4 Morgan fingerprint Transformer의 이중 스트림 프레임워크를 LINCS L1000 55,695개 서명으로 훈련하여 28,000개+ 소분자를 스크리닝했다. Class I HDAC inhibitors(TC-H-106, RG2833, Tianeptinaline)가 22개 TCGA 암종에 걸친 pan-cancer 후보로 도출됐다.

- **MolGene-E (Ohlan 2025)** [[ohlan-2025-molgene-e-inverse-molecular-design-transcriptomic-reversal]]: 단세포 전사체로부터 역방향 분자 설계를 수행하는 최초 프레임워크로, bulk-single cell cross-modal 도메인 적응과 대조 학습 기반 분자 생성을 결합했다.

- **TWAS-CMap 파이프라인 (Chauquet 2026)** [[chauquet-2026-twas-signature-matching-for-drug]]: GWAS → TWAS → CMap 연결 파이프라인을 체계적으로 벤치마킹하여, CMap 세포주 선택이 약물 우선순위에 가장 큰 영향을 미침을 발견했다. 결과의 파라미터 민감도가 매우 높다는 경고를 제공한다.

### Target safety: 표적의 안전성 평가

[[tsepilov-2026-gentropy-pleiotropy-target-safety]]는 100,526개 GWAS에서 유전자 수준 및 변이 수준 pleiotropy 지도를 구축하여 치료 표적의 안전성 리스크를 사전 평가하는 프레임워크를 제공한다. 고 pleiotropy 유전자는 면역, 염증, 종양유전 경로에 농축되며, 세포주 생존 스크린(DepMap/FUSIL)이 포착하지 못하는 생체 수준(organism-level) 독성 리스크를 식별한다. Drug repurposing 후보의 안전성 필터링에 직접 활용 가능하다.

### AI 기반 분자 설계: 스케일링의 한계

[[guo-2026-larger-models-scaling-benchmark-drug-discovery]]는 22개 분자 특성 엔드포인트에서 classical ML(RF/ExtraTrees + ECFP/RDKit)이 10개 지표에서 1위를 차지하고, GNN이 9개, LLM-SAR는 0개임을 보였다. 모델 크기 자체보다 분자 표현, 귀납적 편향, 데이터 양, 엔드포인트 특성의 정합이 더 중요하며, LLM은 SAR 해석에서 강점을 보이지만 직접 예측에서는 우수하지 않다.

### 임상 전환의 과제

1. **인과성 vs 상관성**: 네트워크 proximity나 발현 상관은 인과성을 보증하지 않는다. MR(Yarmolinsky 2025)이나 기능 실험이 반드시 필요하다.
2. **네트워크 편향**: PPI 데이터베이스는 잘 연구된 유전자에 편향되어 있어, 저빈도 driver나 novel target은 놓칠 수 있다(Kersting 2025 지적).
3. **In vitro → in vivo 간극**: LINCS L1000 기반 예측은 978개 landmark gene에 한정되며, 세포주 조건이 환자 종양을 충분히 반영하지 않는다.
4. **단일 암종 vs pan-cancer**: 동일 유전자의 역할이 암종마다 달라(Zhang 2025 UBD 사례), context-specific 검증이 필수다.
5. **Combination therapy**: 다중 표적 접근이 단일 표적보다 내성 발생을 줄일 수 있으나, 독성 예측이 어렵다.

## 핵심 비교표

| 접근법 | 대표 방법/도구 | 핵심 원리 | 강점 | 한계 |
|---|---|---|---|---|
| Disease module detection | CADDIE, nf-core pipeline | PPI network proximity | 표적 비의존적 탐색, 간접 표적 가능 | 네트워크 완결성 의존, 인과성 미검증 |
| Proteogenomics 표적 발굴 | Savage 2024 (CPTAC), FunMap | mRNA-protein discordance 활용 | 단백질 수준 발현 직접 반영 | 치료 나이브 샘플만, 정적 네트워크 |
| Mendelian Randomization | Yarmolinsky 2025 | cis-MR로 인과성 추론 | 강력한 인과 증거, 교란 최소화 | 유럽계 편향, 예방 초점 |
| Transcriptomic reversal | GPS, Tong 2026, TWAS-CMap | LINCS L1000 서명 역전 | 표적 비의존적, 대규모 스크리닝 | 978 landmark gene 한계, 파라미터 민감성 |
| AI 분자 설계 | MolGene-E, GPS MolSearch | 표현형에서 역방향 분자 설계 | 신규 화학 공간 탐색 | 실험 검증 없음, 독성 미평가 |
| Target safety | Gentropy (Tsepilov 2026) | GWAS pleiotropy map | 생체 수준 안전성 평가 | 기전 증명 미포함 |

## 관련 논문

- [[kersting-2025-nf-core-nextflow-disease-module]] — 6개 disease module 알고리즘 + 10개 PPI 네트워크 체계 벤치마킹; drug prioritisation 포함 Nextflow 파이프라인
- [[kersting-2025-inferring-evaluating-network-medicine-disease-modules]] — 동일 파이프라인 preprint; DOMINO/DIAMOnD/ROBUST/RWR 비교 및 약물 농축 평가
- [[hartung-2022-caddie-cancer-driver-drug-interaction]] — 암 driver 유전자 기반 drug repurposing 웹 플랫폼; sarcoma 검증 사례 포함
- [[savage-2024-pan-cancer-proteogenomics-expands-landscape-therapeutic]] — CPTAC 1,043 종양, 2,863 druggable 단백질 5-tier 분류; pan-cancer 치료 표적 지형도
- [[shi-2025-functional-network-human-cancer-proteogenomics]] — FunMap: 11개 CPTAC 암종 기반 ML 기능 네트워크; GNN 기반 저빈도 driver 발굴
- [[wang-2023-cprosite-web-based-interactive-platform]] — CPTAC 12개 암종 proteomics/phosphoproteomics 웹 탐색 도구; mRNA-protein correlation 시각화
- [[zou-2024-iprophos-web-based-interactive-platform-integrated]] — CPTAC 기반 단백질·인산화 통합 분석 플랫폼; kinase activity inference, 사용자 데이터 업로드 지원
- [[yarmolinsky-2025-proteogenomic-observational-evidence-implicate-angptl4]] — cis-MR로 ANGPTL4 억제가 대장암 위험 감소(OR 0.76) 인과 검증; 지질 표적의 cancer prevention 재배치
- [[tong-2026-multimodal-lincs-pan-cancer-hdac-inhibitor]] — GCN+Transformer 이중 스트림으로 LINCS L1000 스크리닝; class I HDAC inhibitor를 pan-cancer 후보로 발굴
- [[xing-2026-gps-transcriptomic-reversal]] — GPS: 화합물 구조로부터 전사체 역전 예측 + hit-to-lead 설계; HCC/IPF 실험 검증
- [[chauquet-2026-twas-signature-matching-for-drug]] — TWAS-CMap 파이프라인 체계 벤치마킹; CMap 세포주 선택이 가장 중요한 파라미터
- [[guo-2026-larger-models-scaling-benchmark-drug-discovery]] — 22개 엔드포인트 AI 모델 스케일링 벤치마크; classical ML이 GNN, LLM을 능가하는 경우 多
- [[tsepilov-2026-gentropy-pleiotropy-target-safety]] — GWAS 10만 건 기반 pleiotropy 안전성 지도; 생체 수준 독성 리스크 사전 평가
- [[ohlan-2025-molgene-e-inverse-molecular-design-transcriptomic-reversal]] — 단세포 전사체 기반 역방향 분자 설계; LINCS-scRNA 도메인 적응

## Related pages

- [[network-medicine]]
- [[drug-repurposing]]
- [[proteogenomics]]
- [[CPTAC]]
- [[virtual-screening]]
- [[pan-cancer]]
