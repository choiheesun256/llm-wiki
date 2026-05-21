---
title: "Day 8: Hallmarks, TME & 컴퓨팅 접근"
draft: false
---

# Day 8: Hallmarks, TME & 컴퓨팅 접근

## 1. 암의 Hallmarks — 2022 업데이트와 새로운 차원들

2000년 Hanahan과 Weinberg가 처음 제안한 "암의 특징(hallmarks of cancer)" 프레임워크는 암 생물학을 개념화하는 데 가장 영향력 있는 지적 틀 중 하나로 자리 잡았다. 6개의 핵심 특징(성장 신호 자급, 항성장 신호 무감각, 세포사멸 회피, 무한 증식 능력, 혈관신생 유도, 침윤과 전이)으로 시작된 이 프레임워크는 2011년 업데이트에서 에너지 대사 재프로그래밍과 면역 파괴 회피를 추가했다. 그리고 2022년, [[hanahan-2022-hallmarks-cancer-new-dimensions|Hanahan 2022]]는 다시 한번 이 프레임워크를 갱신하여 네 가지 새로운 차원을 제안했다.

첫 번째 새로운 차원은 **표현형 가소성의 해제(unlocking phenotypic plasticity)**다. 정상 세포는 발달 과정에서 분화 상태를 고정하며, 고도로 분화된 세포는 다른 세포 유형으로 전환하는 능력을 잃는다. 암세포는 이 제약을 해제하여 다양한 분화 상태 사이를 전환할 수 있게 된다. 가장 잘 연구된 형태는 EMT(Epithelial-Mesenchymal Transition)로, 상피 세포가 간엽 표현형을 획득하여 침윤성, 전이 능력, 약물 내성을 강화한다. 그러나 표현형 가소성은 EMT에 국한되지 않는다. 선암에서 소세포폐암으로의 lineage switching, 호르몬 수용체 양성 유방암에서 삼중음성 유방암 유사 표현형으로의 전환 등 광범위한 형태가 알려져 있으며, 이 모두가 치료 내성의 중요한 기전이다. 이 개념은 Day 8에서 다루는 여러 연구와 직접 연결된다.

두 번째 차원은 **비돌연변이적 후성유전 재프로그래밍(non-mutational epigenetic reprogramming)**이다. 새로운 DNA 변이 없이 크로마틴 구조, DNA 메틸화 패턴, 히스톤 변형의 변화만으로도 암 표현형이 유지될 수 있다. 이 기전은 표현형 가소성과 밀접하게 연결되며, 특히 치료 압력 하에서 암세포가 빠르게 표현형을 전환하는 데 핵심 역할을 한다. 새로운 변이를 획득하는 것은 수 세대의 세포 분열을 필요로 하지만, 후성유전적 변화는 한 세대 내에 일어날 수 있어 적응 속도가 훨씬 빠르다.

세 번째 차원은 **다형성 미생물총(polymorphic microbiome)**이다. 장내 미생물총뿐만 아니라 종양 내부에도 미생물이 존재하며(intratumoral microbiome), 이들이 면역 반응, 약물 대사, 염증 신호에 영향을 미친다는 증거가 축적되고 있다.

네 번째 차원은 **노화 세포(senescent cells)**다. 세포 노화는 초기에는 종양 억제 기전으로 작용하지만, 만성적으로 노화된 세포가 축적되면 SASP(Senescence-Associated Secretory Phenotype)를 통해 염증성 TME를 조성하고 오히려 종양 진행을 촉진한다.

이 업데이트된 프레임워크에서 표현형 가소성은 특히 중요하다. 이것은 단순히 하나의 새로운 hallmark가 아니라, 다른 hallmark들을 획득하고 유지하는 **메타-기전(meta-mechanism)**으로 기능하기 때문이다. EGFR 억제제 내성, KRAS 변이 종양의 치료 저항, 면역 체크포인트 억제제에 대한 획득 내성이 모두 부분적으로 표현형 가소성에 의해 매개된다.

## 2. 표현형 가소성 — 약물 내성의 통합 기전

표현형 가소성이 약물 내성의 통합 기전으로 작용한다는 원칙은 여러 내성 연구에서 반복적으로 확인된다.

ESR1 변이는 호르몬 수용체 양성 유방암에서 내분비 치료 내성의 주요 기전이다. [[kingston-2024-esr1-f404-mutations-acquired-resistance|Kingston 2024]]는 ESR1의 F404 위치 변이(F404L/I/V)가 최초의 fulvestrant 특이적 내성 기전임을 규명했다. 이 변이들은 비방향족 아미노산 치환으로 fulvestrant의 스테로이드 코어와의 π-stacking 상호작용을 파괴한다. 주목할 점은 이 변이들이 새로운 경구 SERD(Selective Estrogen Receptor Degrader)인 elacestrant, camizestrant, giredestrant와 tamoxifen에 대해서는 교차 내성이 없다는 것이다. 이는 특정 약물-단백질 상호작용의 물리화학적 특성이 내성 변이의 범위를 결정한다는 원칙, 즉 내성이 약물 결합에 특이적일 수 있음을 보여준다.

EMT가 면역치료 내성을 구동하는 경로는 [[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]에서 분자 수준으로 해석되었다. 이 연구는 췌장 도관 선암(PDAC)에서 EMT가 ZEB1과 SNAIL이라는 EMT 전사인자를 통해 IRF6(Interferon Regulatory Factor 6)의 후성유전적 침묵을 유발한다는 것을 발견했다. IRF6는 세포를 TNF-α 유도 세포사멸에 감수화하는 인자인데, IRF6가 소실된 암세포는 면역 세포가 분비하는 TNF-α에 저항성을 갖게 된다. 결과적으로 이 세포들은 T 세포의 면역 살상을 피해갈 수 있다. Birinapant(cIAP 억제제)가 이 감수성을 복원할 수 있음을 보여준 것은 치료적으로 중요한 발견이다.

이 연구는 [[hanahan-2022-hallmarks-cancer-new-dimensions|Hanahan 2022]]의 "표현형 가소성" hallmark가 면역치료 맥락에서 직접 구현된 사례이며, 동시에 EMT를 단순한 전이 기전이 아니라 면역 회피의 핵심 경로로 재정의한다.

[[du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating|Du 2025]]는 또 다른 형태의 표현형 재프로그래밍을 보여준다. DNA-PK → c-Abl → OTULIN(pTyr56) → β-catenin 안정화라는 신호 축에서, DNA 손상 응답 신호가 비정규적인(non-canonical) Wnt 경로를 활성화하여 gemcitabine 내성을 유도한다. 이 축에서 c-Abl 억제제 imatinib이 삼중음성 유방암(TNBC)에서 항암제 감수성을 복원한다는 발견은, DNA 손상 신호와 Wnt 경로의 크로스토크가 치료 가능한 표적임을 시사한다.

## 3. 염색체외 원형 DNA (ecDNA) — 비멘델적 종양유전자 증폭

종양유전자 증폭(oncogene amplification)은 암 게놈에서 매우 흔한 사건이다. 고전적으로 이 증폭은 염색체 내의 homogeneously staining region(HSR) 또는 세포 분열 시 딸세포로 동등하게 전달되는 염색체 구조 내에서 일어난다고 생각되었다. 그러나 염색체외 원형 DNA(extrachromosomal circular DNA, ecDNA)는 이 패러다임을 뒤집는다.

ecDNA는 주염색체에서 분리된 원형 DNA 구조로, 종양유전자를 포함한 수백 킬로베이스에서 수 메가베이스 크기의 서열을 담을 수 있다. 염색체에 통합되지 않은 ecDNA는 세포 분열 시 무작위적으로 딸세포에 분배된다. 이 비멘델적 유전 양식은 몇 가지 중요한 결과를 낳는다. 첫째, ecDNA는 세포 집단 내에서 copy number가 매우 빠르게 변화할 수 있다. 치료 압력이 없을 때는 ecDNA를 많이 가진 세포가 빠른 성장 우위를 가지며, 치료 중에는 ecDNA를 적게 가진 세포가 생존 우위를 가진다. 이 동적인 copy number 변화 능력이 치료 내성의 기전이 된다. 둘째, ecDNA 위의 종양유전자는 정상적인 염색체 구조의 topological constraint에서 벗어나 있어, chromatin accessibility가 높고 전사가 활발하게 일어난다.

[[gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas|Gonzalez 2023]]는 단일 암세포에서 ecDNA와 mRNA를 동시에 시퀀싱하는 최초의 방법인 scEC&T-seq을 개발했다. 이 기술로 발암 ecDNA(MYCN, CDK4, MDM2)가 클론적으로 전파되며, MYCN을 담은 ecDNA의 copy number와 MYCN mRNA 발현 사이에 강한 상관관계(R=0.86)가 있음을 단일 세포 수준에서 직접 확인했다. 또한 CTCF 결합 부위가 ecDNA breakpoint에 풍부하게 분포한다는 발견은 ecDNA 생성 기전에 대한 중요한 단서를 제공한다.

ecDNA는 종양유전자 증폭을 가능하게 하는 기전으로서 [[hanahan-2022-hallmarks-cancer-new-dimensions|Hanahan 2022]]의 비돌연변이적 후성유전 재프로그래밍과 맞닿아 있다. ecDNA의 비멘델적 유전 양식은 암 세포 집단이 표현형을 빠르게 전환하는 능력에 기여한다.

## 4. 종양 미세환경의 공간 생물학 — Spatial Ecotype과 Liquid Biopsy

종양은 암세포 단독으로 구성되지 않는다. 암세포를 둘러싼 종양 미세환경(Tumor Microenvironment, TME)은 면역 세포(T 세포, NK 세포, 대식세포, 수지상세포), 기질 세포(fibroblast, pericyte, endothelial cell), 세포외기질, 사이토카인, 성장인자로 구성된 복잡한 생태계다. 이 생태계의 구성이 면역치료 반응을 비롯한 치료 결과에 결정적인 영향을 미친다는 것은 잘 알려져 있다.

그러나 TME의 구성은 종양 전체에서 균일하지 않다. 공간 전사체학(spatial transcriptomics)의 발전으로 종양 내 각 위치에서 세포의 정체성과 상호작용을 지도화할 수 있게 되었다. [[zhang-2026-non-invasive-profiling-of-the-tumour|Zhang 2026]]은 이 공간 정보를 혈액 기반 진단으로 연결하는 혁신적인 방법론을 제시했다.

이 연구의 첫 번째 기여는 Spatial EcoTyper로, 공간 전사체 데이터에서 9개의 보존된 범암 TME 공간 ecotype(SE1–SE9)을 정의한 것이다. 각 SE는 특정 세포 유형의 조합과 공간적 배열을 특징으로 하며, 암종을 가로질러 재현된다. 흑색종에서 SE7과 SE8은 면역 체크포인트 억제제(ICI) 치료 후 양호한 결과와 연관되는 반면, SE4는 불량한 결과를 예측했다. 이 공간 ecotype 정보가 면역치료 반응을 예측하는 새로운 바이오마커 체계를 제공한다는 것이 이 연구의 핵심 메시지다.

그러나 공간 전사체 분석은 종양 조직 생검을 필요로 한다. 침습적이고 비용이 높으며 반복 측정이 어렵다. 이 문제를 해결하기 위해 이 연구의 두 번째 기여인 **Liquid EcoTyper**가 개발되었다. Liquid EcoTyper는 혈장 cell-free DNA(cfDNA)의 메틸화 패턴에서 공간 ecotype 정보를 역추론(deconvolution)하는 방법이다. cfDNA는 종양에서 사멸한 세포의 DNA 단편이 혈액으로 방출된 것으로, 메틸화 패턴이 세포 유형에 따라 다르다는 원리를 이용한다. 이를 통해 단순한 혈액 채취만으로 환자의 종양 TME 공간 구조를 비침습적으로 추론할 수 있다. 조직 수준의 공간 생물학 정보를 혈액 기반 액체 생검으로 접근 가능하게 만든 이 연구는 TME 기반 정밀 의학의 임상 적용 가능성을 크게 높였다.

## 5. T 세포 공학의 최전선 — 프라이밍 타이머, CAR-T TF 공학

면역 항암 치료의 효능을 높이기 위해서는 T 세포의 활성화, 증식, 지속성을 제어하는 기본 생물학을 더 깊이 이해해야 한다. 최근 두 연구는 T 세포 공학의 새로운 방향을 열었다.

[[altenburger-2026-lymphoid-chemokine-cd8-t-cell|Altenburger 2026]]은 T 세포 활성화 지속 시간을 제한하는 내재적 생물학적 타이머를 발견했다. 수지상세포와 T 세포가 면역 시냅스를 형성하여 TCR(T Cell Receptor) 신호를 전달할 때, 림프절 케모카인인 CCL19와 CCL21이 DOCK2 단백질의 재배치를 통해 활성화된 CD8+ T 세포를 수지상세포로부터 분리한다. 이 분리 신호가 작동하지 않아 T 세포가 수지상세포와 지나치게 오래 접촉하는 경우, 해당 T 세포는 PD-1과 LAG-3이 높은 기능 장애(dysfunction) 표현형을 획득한다.

이 발견의 임상적 함의는 CAR-T 세포 치료에 있다. CAR-T 세포는 환자의 T 세포를 체외에서 키메라 항원 수용체(CAR) 유전자를 도입하여 활성화, 증식시킨 후 환자에게 재주입하는 방법이다. 이때 체외 자극(ex vivo stimulation) 기간이 너무 길면 T 세포가 이미 탈진 경향이 있는 상태로 제조될 수 있다. CCR7 리간드의 생물학적 타이머 기전은, **더 짧은 ex vivo 자극**이 품질이 더 높은 effector CAR-T 세포를 생산할 수 있다는 가설을 지지한다.

[[savage-2026-t-cell-state-tf-cooperative|Savage 2026]]은 T 세포 탈진(exhaustion)을 전사인자(transcription factor, TF) 수준에서 역전시키는 새로운 접근법을 제시했다. T 세포 탈진은 만성 항원 자극 하에서 T 세포가 점진적으로 effector 기능을 잃어가는 현상으로, 종양 내 T 세포의 주요 제약이다. 기존의 면역 체크포인트 억제(PD-1/CTLA-4 차단)가 표면 수용체 수준의 개입이라면, 이 연구는 전사 조절 회로 자체를 재프로그래밍하는 접근이다.

Pooled TF 과발현 스크린에서 KLF2가 CAR-T 탈진 감소의 최상위 hit으로 선발되었고, TOX 유전자 좌위(탈진 마스터 조절인자)에서 RUNX:KLF composite motif가 발견되었다. 개별 TF를 따로 발현시키는 것보다, AlphaFold3 구조 예측으로 가이드된 RUNX2-KLF2 융합(tethered) 구조체가 탈진을 더 강력하게 억제하고 memory-like 상태를 더 효과적으로 촉진했다. 이는 단일 TF가 아닌 **협력적 TF 모티프(cooperative motif)**를 표적으로 하는 유전자 공학이 더 강력한 CAR-T 설계 전략임을 보여준다.

## 6. EMT와 면역치료 내성 — IRF6 침묵과 표현형 가소성

[[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]의 발견을 더 깊이 살펴보면, 표현형 가소성이 면역 회피를 구동하는 분자 회로의 구체적인 작동 원리가 드러난다.

EMT는 단순한 형태적 변화가 아니다. ZEB1, SNAIL, TWIST 등의 EMT 전사인자는 수백 개의 유전자 발현을 재프로그래밍하며, 이 과정에서 암세포는 상피 특성(세포 접착, 극성 유지)을 잃고 간엽 특성(이동성, 침습성, 줄기세포 유사성)을 획득한다. Kim 2024가 발견한 것은 이 광범위한 재프로그래밍의 일부로 IRF6 유전자가 후성유전적으로 침묵화된다는 것이다.

IRF6는 interferon regulatory factor 계열의 전사인자로, 세포를 TNF-α 유도 아폽토시스에 민감하게 만드는 역할을 한다. 종양 침윤 면역 세포, 특히 T 세포와 NK 세포는 TNF-α를 분비하여 암세포를 직접 살상하는 기전을 사용한다. IRF6가 침묵화된 EMT 상태의 암세포는 이 면역 살상 기전에 저항성을 갖게 되므로, 면역 체크포인트 차단 요법의 효과가 감소한다. 이는 EMT가 단순한 전이 촉진이 아니라 암세포가 면역 감시를 피하는 능동적인 표현형 전환임을 보여준다.

birinapant(IAP 억제제)로 이 감수성을 부분적으로 복원할 수 있다는 발견은, EMT-IRF6 축이 면역 감작(immune sensitization) 전략의 표적이 될 수 있음을 시사한다. 면역치료 단독으로 효과가 부족한 환자에서 IAP 억제제와의 병용이 시너지를 낼 수 있다는 가설이 이 연구에서 도출된다.

## 7. AI가 바꾸는 암 연구 — 가상 스크리닝, 약물 반응 예측, 네트워크 의학

암 생물학의 발전이 multi-omics 데이터의 폭발적 증가를 낳은 동시에, 이 방대한 데이터를 인간이 수동으로 분석하는 것은 점점 더 불가능해지고 있다. AI/기계학습은 이 간극을 메우는 핵심 도구로 부상했다.

**신약 발굴의 속도 혁명.** [[jia-2026-drugclip-contrastive-learning-genome-scale|Jia 2026 (DrugCLIP)]]은 대조 학습(contrastive learning) 기반의 단백질-리간드 임베딩 검색 방법으로, 전통적인 구조 기반 도킹(docking) 대비 약 1,000만 배의 속도 향상을 달성했다. 구체적으로는 약 10,000개의 인간 단백질 AlphaFold 구조와 5억 개의 화합물을 24시간 이내에 스크리닝할 수 있다. 5-HT2A 수용체, norepinephrine transporter(NET), TRIP12 등에 대한 신규 hit들이 실험적으로 검증되었다. 이는 표적 발굴 이후 lead compound 확보까지의 시간을 획기적으로 단축할 수 있음을 의미한다.

**다중 모드 약물 반응 예측.** [[tong-2026-multimodal-dl-lincs-l1000-hdac|Tong 2026]]은 이중 스트림 Graph Convolutional Network(GCN)와 Transformer를 cross-modal attention으로 결합하여 LINCS L1000 전사 signature를 예측하는 방법을 개발했다. 22개 TCGA 암종에서 일관되게 뇌 투과성 Class I HDAC 억제제를 우선순위 약물로 식별했는데, 이는 뇌 전이 또는 중추신경계 악성 종양 치료에 잠재적으로 유용한 발견이다.

**네트워크 의학 기반 약물 재배치.** 단일 표적 억제보다 질병 관련 단백질 상호작용 네트워크 전체의 모듈을 표적으로 하는 네트워크 의학 접근법이 약물 재배치(drug repurposing) 분야에서 주목받고 있다. [[kersting-2025-nf-core-nextflow-disease-module|Kersting 2025]]는 nf-core/Nextflow 기반 disease module pipeline을 개발하여, 네트워크 입력 데이터의 선택이 알고리즘 선택보다 분석 결과를 더 크게 좌우한다는 방법론적으로 중요한 교훈을 제시했다. 즉, 좋은 도구보다 좋은 데이터가 먼저다. [[hartung-2022-caddie-cancer-driver-drug-interaction|Hartung 2022]]의 CADDIE 웹 플랫폼은 컴퓨팅 전문성 없이도 네트워크 의학 기반 암 드라이버 유전자와 약물 상호작용을 탐색할 수 있는 접근성 높은 도구다.

**TWAS-CMap 약물 우선순위화.** [[chauquet-2026-twas-signature-matching-for-drug|Chauquet 2026]]은 Transcriptome-Wide Association Study(TWAS)에서 도출된 유전자 발현 signature를 Connectivity Map(CMap) 약물 라이브러리와 매칭하여 약물을 우선순위화하는 방법론의 최초 체계적 벤치마크를 수행했다. 이 벤치마크에서 CMap에 사용할 세포주의 선택이 단일 파라미터 중 가장 큰 영향을 미치는 요인으로 확인되었다. 방법론적 표준화가 부족했던 이 분야에 중요한 가이드라인을 제시한다.

**단백질 foundation model과 병리 AI.** [[zhang-2026-proteinaligner-tri-modal-contrastive-learning|Zhang 2026 (ProteinAligner)]]는 서열, 구조, 텍스트 세 가지 modality를 정렬하는 867M 파라미터의 단백질 foundation model로, 단백질 기능 예측, 약물 결합 예측 등 다양한 하위 과제에 적용 가능하다. [[zhang-2026-multi-embed-pathology-wsi-multimodal|Zhang 2026 (Multi-Embed)]]는 병리 슬라이드 이미지(Whole Slide Image, WSI)를 전사체, 메틸화, 단백질체, 공간 omics 데이터와 통합하는 멀티모달 임베딩 방법으로, 병리 이미지에서 분자 프로파일을 예측하는 가능성을 보여준다.

**인간 중심 신약 개발 패러다임.** [[wu-2026-reimagining-human-centric-drug-development|Wu 2026]]은 전통적인 동물 모델이 인간 임상 결과를 예측하는 데 한계가 있음을 지적하며, NAMs(New Approach Methodologies) triad—인간 세포 기반 모델(iPSC 유래 organoid 등) + MPS(Microphysiological Systems, organ-on-chip) + AI—를 통해 동물 모델을 점진적으로 대체할 것을 제안한다. 이는 신약 개발 전체 패러다임을 인간 생물학에 더 직접적으로 기반한 방향으로 전환하는 큰 그림을 제시한다.

## 8. 8일 전체를 관통하는 통합 메시지

8일간의 암 생물학 여정을 돌아보면, 세 가지 수렴하는 주제가 명확히 드러난다.

**첫째, 단층 분석의 시대는 끝났다.** Day 7의 CPTAC 연구들이 보여주듯, 유전체만으로는 충분하지 않다. 전사체, 단백질체, 인산화단백질체, 대사체, 공간 정보가 통합될 때만 종양의 실제 생물학이 보인다. 유전체 변이는 단백질 기능으로 CNA buffering을 거쳐 왜곡되며, 인산화 수준의 신호전달 상태는 유전형(genotype)으로 예측할 수 없다. 이것은 기술적 도전이기 이전에 생물학적 현실이다.

**둘째, 표현형 가소성이 내성의 통합 기전이다.** EMT 매개 IRF6 침묵([[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]), lineage 전환에 의한 치료 내성, ecDNA의 비멘델적 종양유전자 증폭([[gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas|Gonzalez 2023]]), fulvestrant 특이적 ESR1 변이([[kingston-2024-esr1-f404-mutations-acquired-resistance|Kingston 2024]])는 모두 암세포가 단일 분자 표적 억제에 어떻게 적응하는지를 보여주는 사례들이다. 이 적응의 공통분모는 암세포가 현재의 표현형을 버리고 새로운 표현형으로 전환하는 능력이다. 따라서 단일 표적을 완벽하게 차단하는 것만으로는 부족하며, 표현형 전환 능력 자체를 억제하거나 여러 표현형 상태에 동시에 작동하는 치료 전략이 필요하다.

**셋째, AI와 multi-omics의 결합이 새로운 발견의 속도를 결정한다.** DrugCLIP의 1,000만 배 가상 스크리닝 가속, Spatial/Liquid EcoTyper의 TME 비침습 프로파일링, ProteinAligner의 다중 modality 단백질 이해, Multi-Embed의 병리-omics 연결은 모두 AI가 단순한 데이터 처리 도구가 아니라 새로운 가설을 생성하는 발견 엔진으로 기능하고 있음을 보여준다. 이 기술들이 성숙해지고 임상 데이터와 통합될수록, 암 연구의 발견 사이클은 더욱 가속화될 것이다.

결론적으로, 미래의 암 의학은 **통합적(multi-omics), 공간적(spatially resolved), AI 증강(AI-augmented)**이 될 것이다. 각 레이어가 제공하는 정보는 독립적으로 불완전하지만, 통합될 때 비로소 종양의 진정한 복잡성과 취약점이 드러난다. 이 위키의 8일간 논문들은 그 미래가 이미 시작되었음을 보여준다.

## 9. 참고문헌

- [[hanahan-2022-hallmarks-cancer-new-dimensions|Hanahan 2022]] — Hallmarks of Cancer 2022 업데이트, 표현형 가소성·후성유전 재프로그래밍·미생물총·노화 세포 추가
- [[gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas|Gonzalez 2023]] — scEC&T-seq으로 단일 세포 ecDNA + mRNA 동시 시퀀싱, MYCN ecDNA copy number-발현 상관
- [[zhang-2026-non-invasive-profiling-of-the-tumour|Zhang 2026]] — Spatial EcoTyper로 범암 TME 공간 ecotype 정의, Liquid EcoTyper로 cfDNA 기반 비침습 복원
- [[altenburger-2026-lymphoid-chemokine-cd8-t-cell|Altenburger 2026]] — CCR7 리간드-DOCK2 T 세포 프라이밍 타이머, CAR-T ex vivo 자극 최적화 함의
- [[savage-2026-t-cell-state-tf-cooperative|Savage 2026]] — KLF2/RUNX2 협력 TF 공학으로 CAR-T 탈진 억제, AlphaFold3 가이드 tethered 구조체
- [[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]] — PDAC에서 EMT-ZEB1/SNAIL-IRF6 후성유전 침묵이 ICI 내성 구동, birinapant으로 복원
- [[du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating|Du 2025]] — DNA-PK→c-Abl→OTULIN→β-catenin 축, genotoxic 비정규 Wnt 활성화와 내성
- [[kingston-2024-esr1-f404-mutations-acquired-resistance|Kingston 2024]] — ESR1 F404 변이, fulvestrant 특이적 내성 기전과 새로운 SERD 교차 감수성
- [[jia-2026-drugclip-contrastive-learning-genome-scale|Jia 2026 (DrugCLIP)]] — 대조 학습 기반 단백질-리간드 임베딩 검색, 도킹 대비 ~1000만 배 속도 향상
- [[tong-2026-multimodal-dl-lincs-l1000-hdac|Tong 2026]] — 이중 스트림 GCN+Transformer로 LINCS L1000 전사 signature 예측, 뇌 투과성 HDAC 억제제 식별
- [[kersting-2025-nf-core-nextflow-disease-module|Kersting 2025]] — nf-core disease module pipeline, 네트워크 입력 선택이 알고리즘보다 중요
- [[hartung-2022-caddie-cancer-driver-drug-interaction|Hartung 2022]] — CADDIE 웹 플랫폼, 접근성 높은 네트워크 의학 기반 약물 재배치 탐색기
- [[chauquet-2026-twas-signature-matching-for-drug|Chauquet 2026]] — TWAS-CMap 약물 우선순위화 체계적 벤치마크, 세포주 선택이 핵심 파라미터
- [[zhang-2026-proteinaligner-tri-modal-contrastive-learning|Zhang 2026 (ProteinAligner)]] — 서열·구조·텍스트 3-modal 단백질 foundation model 867M 파라미터
- [[zhang-2026-multi-embed-pathology-wsi-multimodal|Zhang 2026 (Multi-Embed)]] — 병리 WSI와 전사체·메틸화·단백질체·공간 omics 멀티모달 통합
- [[wu-2026-reimagining-human-centric-drug-development|Wu 2026]] — NAMs triad(인간 세포 모델 + MPS + AI)를 통한 인간 중심 신약 개발 패러다임
