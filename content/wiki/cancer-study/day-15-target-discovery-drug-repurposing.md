---
title: "Day 15: 표적 발굴과 약물 재배치"
draft: false
---

## 약물 표적 발굴의 전통적 접근 vs 현대적 접근

신약 개발의 첫 번째 관문은 질병의 병인에 핵심적으로 관여하는 단백질 표적(drug target)을 찾는 것이다. 전통적인 표적 발굴은 특정 유전자의 기능을 유전학적·생화학적 방법으로 연구하고, 그 단백질이 질병 표현형에 인과적으로 기여함을 반복 실험으로 검증하는 과정이었다. 이 방식은 통찰력 있는 발견을 이끌어낼 수 있지만, 탐색 공간이 좁고 시간과 비용이 막대하다는 한계가 있다.

현대적 접근은 대규모 유전체, 전사체, 단백질체 데이터를 계산적 방법으로 통합하여 후보 표적을 체계적으로 우선순위화한다. 특히 인간 유전 데이터(GWAS, rare variant 분석)를 활용하면 표적의 임상적 관련성을 조기에 검증할 수 있다. 유전적 증거로 뒷받침되는 표적은 임상 시험 성공률이 약 2배 높다는 분석 결과가 있으며, 이는 표적 발굴 단계에서 유전 정보를 통합하는 것의 중요성을 강조한다.

**약물 재배치(drug repurposing)**는 이미 승인된 약물이나 임상 단계 화합물을 새로운 적응증에 적용하는 전략이다. 기존 약물은 안전성과 약동학(pharmacokinetics) 프로파일이 이미 확립되어 있어, 전임상-임상 1상 단계를 건너뛰거나 단축할 수 있다. 따라서 새로운 적응증 발견에서 임상 적용까지의 시간과 비용을 크게 줄일 수 있다.

---

## Network Medicine — 질병 모듈과 근접성 기반 표적 발굴

인간 세포는 수만 개의 단백질이 상호작용하는 고도로 복잡한 네트워크로 이루어져 있다. **Network medicine**은 이 단백질 상호작용 네트워크(PPI network, interactome) 위에서 질병과 약물의 특성을 분석하는 패러다임이다.

### 질병 모듈(Disease Module)

네트워크 의학의 핵심 가설은, 특정 질병에 관여하는 유전자들이 무작위로 분산되어 있는 것이 아니라 상호작용 네트워크 내의 특정 위상학적 영역에 집중되어 있다는 것이다. 이를 **질병 모듈(disease module)**이라 한다. 질병 모듈을 정의하면 개별 유전자 수준을 넘어 병인 경로의 전체 구조를 파악할 수 있고, 같은 모듈에 속하는 유전자들은 기능적으로 연관될 가능성이 높다.

[[kersting-2025-nf-core-nextflow-disease-module|Kersting et al. (2025)]]는 질병 모듈 분석을 표준화하기 위해 **nf-core** 프레임워크 기반의 Nextflow 파이프라인을 개발했다. 이 파이프라인은 GWAS 데이터에서 후보 유전자를 추출하고, 다양한 모듈 검출 알고리즘(DIAMOnD, DOMINO 등)을 체계적으로 적용하여 재현 가능한 질병 모듈 분석을 수행할 수 있게 한다.

### 근접성(Proximity) 기반 표적 발굴

약물 표적과 질병 단백질 사이의 **네트워크 근접성(network proximity)**은 약물의 잠재적 효능을 예측하는 강력한 지표이다. 두 단백질 집합 사이의 평균 최단 거리가 무작위 기대치보다 유의미하게 작을 때, 이 약물은 해당 질병에 효과적일 가능성이 높다. 이 개념은 단순히 약물 표적이 질병 유전자와 직접 결합해야 한다는 제약을 넘어, 신호 전달 경로를 통해 간접적으로 질병을 조절하는 약물도 포착할 수 있다.

[[hartung-2022-caddie-cancer-driver-drug-interaction|Hartung et al. (2022)]]의 **CADDIE(Cancer Driver Drug Interaction Explorer)**는 이 근접성 개념을 암에 적용한 웹 기반 도구이다. CADDIE는 암 드라이버 유전자 데이터베이스와 인간 PPI 네트워크를 통합하여, 사용자가 입력한 암 드라이버 유전자 집합에 대해 네트워크 근접성 기반으로 잠재적 약물 후보를 우선순위화하고, 기존 승인 약물과의 연결성을 시각적으로 탐색할 수 있게 한다.

---

## TWAS-CMap 파이프라인 — 유전 연관에서 전사 시그니처를 거쳐 약물 매칭으로

**TWAS(Transcriptome-Wide Association Study)**는 유전자 발현을 매개 변수로 사용하여 유전 변이와 질병 표현형 사이의 연관성을 분석하는 방법이다. TWAS는 GWAS의 연관 신호가 어떤 유전자의 발현 변화를 통해 질병에 영향을 미치는지를 추론할 수 있게 해준다.

이렇게 동정된 질병 관련 유전자들의 **전사 시그니처(transcriptomic signature)**, 즉 발현 방향과 크기 정보를, **CMap(Connectivity Map)**의 약물 처리 시그니처와 매칭하는 것이 TWAS-CMap 파이프라인의 핵심이다. CMap은 수천 가지 화합물을 세포주에 처리했을 때의 전사 반응을 수집한 데이터베이스로, 질병에서 올라간 유전자 발현을 반대로 낮추는 약물(reversal 전략)을 찾거나 질병 시그니처를 모방하는 화합물을 발견하는 데 사용된다.

[[chauquet-2026-twas-signature-matching-for-drug|Chauquet et al. (2026)]]는 TWAS-CMap 접근법의 체계적 벤치마킹을 수행했다. 이 연구는 다양한 TWAS 방법, 시그니처 구성 방식, 매칭 알고리즘의 조합을 평가하여, 재배치 후보 예측의 정확도를 최대화하는 최적 파이프라인을 제안했다.

[[xing-2026-gps-transcriptomic-reversal|Xing et al. (2026)]]의 **GPS(Genomic-Pharmacological Signature)** 프레임워크는 전사체 반전(transcriptomic reversal) 전략을 더욱 발전시켰다. 이 방법은 질병 특이적 유전자 발현 변화를 가장 효과적으로 역전시키는 약물 조합을 체계적으로 탐색하며, 특히 암의 이질성을 고려하여 환자 하위 그룹별로 최적 약물을 제안하는 개인화된 접근을 가능하게 한다. [[shen-2022-ursodeoxycholic-acid-reduces-antitumor-immunosuppression|Shen et al. (2022)]]은 이 전략의 실제 적용 사례로, 담즙산 유도체인 **ursodeoxycholic acid(UDCA)**가 항종양 면역 억제를 감소시키는 기전을 밝히고 재배치 가능성을 검증했다.

---

## Antibody CDR Fitness Mapping — 항체 공학의 새 패러다임

단클론 항체(monoclonal antibody)는 현재 가장 중요한 표적 항암 치료제 중 하나이다. 항체의 항원 결합 부위는 **CDR(Complementarity-Determining Region)**이라 불리는 초가변 루프 6개로 구성되며, CDR의 아미노산 서열이 결합 특이성(specificity)과 친화도(affinity)를 결정한다. 전통적인 항체 최적화는 phage display나 오류 빈발 PCR(error-prone PCR)을 통한 무작위 돌연변이 유발과 선별로 수행되어 왔다.

[[chun-2026-antibody-cdr-fitness-mapping|Chun et al. (2026)]]은 **CDR fitness mapping**이라는 새로운 접근법을 제시했다. 이는 딥 돌연변이 스캐닝(deep mutational scanning, DMS)과 고처리량 서열분석을 결합하여, CDR 내 가능한 모든 아미노산 치환에 대한 기능적 영향(결합 친화도, 발현 수준, 열 안정성)을 체계적으로 지도화하는 방법이다. 이렇게 구축된 **fitness landscape**는 항체 공학자에게 최적화 방향을 명시적으로 알려주며, 단순한 결합력 향상을 넘어 면역원성(immunogenicity) 감소나 생산성 향상을 동시에 고려한 설계가 가능해진다.

이러한 접근법은 [[oh-2024-tdxd-cgas-sting-gastric-cancer|Oh et al. (2024)]]가 연구한 **T-DXd(trastuzumab deruxtecan)**와 같은 항체-약물 접합체(ADC)의 개발과도 연결된다. 이 연구는 T-DXd가 위암에서 cGAS-STING 경로를 활성화하여 항종양 면역을 촉진하는 기전을 밝혔는데, 항체 성분의 정밀 공학이 ADC의 내재화(internalization)와 세포 내 약물 방출 효율에 직접 영향을 준다는 점에서 CDR 최적화는 ADC 개발에도 중요한 역할을 한다.

---

## Protein Flexibility와 Druggability

단백질의 **3차원 구조(3D structure)**는 약물 표적 발굴의 핵심 정보이지만, 전통적인 구조 기반 약물 설계(structure-based drug design)는 단백질을 정적 구조로 간주하는 경향이 있다. 그러나 실제 단백질은 생리적 조건에서 지속적으로 구조적 역동성(conformational dynamics)을 보이며, 이러한 유연성(flexibility)은 druggability에 결정적인 영향을 미친다.

[[piochi-2026-proteus-protein-flexibility|Piochi et al. (2026)]]의 **PROTEUS** 도구는 단백질의 구조적 유연성을 체계적으로 분석하여 druggability를 예측한다. 분자 동역학(molecular dynamics, MD) 시뮬레이션에서 얻은 단백질 구조 앙상블을 분석하여, 특정 구조 상태(conformational state)에서만 나타나는 **allosteric pocket**이나 cryptic binding site를 찾아낼 수 있다. 이러한 숨겨진 결합 부위는 정적 결정 구조(crystal structure)에서는 보이지 않기 때문에, 전통적으로 "undruggable"로 분류되었던 표적에 대한 새로운 약물 개발 가능성을 열어준다.

---

## 안전성 평가 — Pleiotropy와 Target Safety

표적의 효능 가능성이 확인되더라도, 임상 개발 실패의 주요 원인 중 하나는 예상치 못한 독성과 부작용이다. **표적 안전성(target safety)** 평가는 표적 발굴 단계에서 조기에 수행되어야 한다.

**Pleiotropy(다면 발현성)**는 하나의 유전자 또는 단백질이 여러 생물학적 과정에 동시에 관여하는 현상으로, 약물 개발에서 off-target toxicity의 주요 원인이 된다. 표적 단백질이 암 진행에 관여하는 동시에 정상 조직의 필수 기능을 수행한다면, 그 표적을 억제하는 약물은 심각한 부작용을 유발할 수 있다.

[[tsepilov-2026-gentropy-pleiotropy-target-safety|Tsepilov et al. (2026)]]의 **GenTropy**는 유전 데이터를 활용하여 표적 후보의 pleiotropy를 정량화하고 안전성을 사전 평가하는 도구이다. GWAS 및 pheWAS(phenome-wide association study) 데이터를 통합하여, 특정 유전자 변이가 다양한 표현형에 미치는 영향을 체계적으로 평가함으로써 의도치 않은 부작용 위험이 높은 표적을 조기에 걸러낼 수 있다.

---

## 동물 모델을 넘어 — NAMs (New Approach Methodologies)

전임상 단계의 약물 안전성 및 효능 평가는 전통적으로 동물 실험에 의존해 왔다. 그러나 동물 모델의 인간 질병에 대한 예측력 한계, 윤리적 문제, 그리고 비용과 시간의 제약으로 인해 대안적 접근법에 대한 필요성이 증가하고 있다.

[[wu-2026-reimagining-human-centric-drug-development-nams|Wu et al. (2026)]]은 **NAMs(New Approach Methodologies)**가 동물 실험을 대체하거나 보완할 수 있는 잠재력을 가진 인간 중심 약물 개발 패러다임으로 제시했다. NAMs에는 organoid, organ-on-a-chip, 3D cell culture 시스템, 인간 iPSC(induced pluripotent stem cell) 유래 세포 모델 등이 포함된다. 이러한 시스템은 인간 생리를 보다 충실히 재현하며, 특히 인간 특이적 독성이나 효능 메커니즘을 탐지하는 데 있어 설치류 모델보다 우수한 예측력을 보일 수 있다.

암 연구에서의 NAMs는 환자 유래 tumor organoid를 중심으로 발전하고 있다. 환자의 암 조직에서 배양된 organoid는 원래 종양의 유전적·분자적 특성을 유지하면서 다양한 약물에 대한 반응성을 생체 외(ex vivo)에서 평가할 수 있게 한다. 이는 개인화 의료(personalized medicine)의 관점에서, 각 환자에게 가장 효과적인 약물을 임상 투여 전에 예측하는 데 활용될 수 있다.

---

## 참고문헌

- [[kersting-2025-nf-core-nextflow-disease-module|Kersting S et al. (2025)]] — nf-core/disease-module: a Nextflow pipeline for systematic disease module identification. *Bioinformatics* 41(2):btaf032.
- [[hartung-2022-caddie-cancer-driver-drug-interaction|Hartung M et al. (2022)]] — CADDIE: a cancer driver drug interaction explorer. *NPJ Syst Biol Appl* 8:15.
- [[chauquet-2026-twas-signature-matching-for-drug|Chauquet S et al. (2026)]] — TWAS-based transcriptomic signature matching for drug repurposing: a comprehensive benchmarking study. *PLOS Comput Biol* 22(1):e1011923.
- [[xing-2026-gps-transcriptomic-reversal|Xing H et al. (2026)]] — GPS: a genomic-pharmacological signature framework for transcriptomic reversal-based drug repurposing. *Nat Commun* 17:1104.
- [[chun-2026-antibody-cdr-fitness-mapping|Chun JH et al. (2026)]] — Comprehensive CDR fitness mapping for antibody engineering. *Nat Biotechnol* 44(3):312–323.
- [[piochi-2026-proteus-protein-flexibility|Piochi LF et al. (2026)]] — PROTEUS: a tool for protein flexibility analysis to predict druggability. *J Chem Inf Model* 66(4):1567–1579.
- [[tsepilov-2026-gentropy-pleiotropy-target-safety|Tsepilov YA et al. (2026)]] — GenTropy: quantifying pleiotropy for target safety assessment using human genetic data. *Cell Genom* 6(1):100491.
- [[shen-2022-ursodeoxycholic-acid-reduces-antitumor-immunosuppression|Shen Y et al. (2022)]] — Ursodeoxycholic acid reduces antitumor immunosuppression by inducing CHIP-mediated TGF-β degradation. *Nat Cell Biol* 24(10):1502–1515.
- [[wu-2026-reimagining-human-centric-drug-development-nams|Wu F et al. (2026)]] — Reimagining human-centric drug development with New Approach Methodologies. *Nat Rev Drug Discov* 25(2):89–108.
- [[oh-2024-tdxd-cgas-sting-gastric-cancer|Oh SC et al. (2024)]] — Trastuzumab deruxtecan activates cGAS-STING pathway and enhances antitumor immunity in HER2-positive gastric cancer. *Cancer Cell* 42(3):401–415.
