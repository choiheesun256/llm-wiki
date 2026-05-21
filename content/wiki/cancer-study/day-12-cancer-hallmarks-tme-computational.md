---
title: "Day 12: Hallmarks, TME & 컴퓨팅 접근"
draft: false
---

# Day 12: Hallmarks, TME & 컴퓨팅 접근

## 1. 암의 Hallmarks — 2022 업데이트와 새로운 차원들

[[hanahan-2022-hallmarks-cancer-new-dimensions|Hanahan 2022]]는 2000년·2011년 프레임워크를 갱신하여 네 가지 새로운 차원을 추가했다.

**표현형 가소성의 해제(unlocking phenotypic plasticity).** 암세포는 분화 상태 고정이라는 제약을 풀고 다양한 표현형 사이를 전환한다. EMT가 대표적이지만, 선암에서 소세포폐암으로의 lineage switching, HR+ 유방암에서 TNBC 유사 표현형으로의 전환 등 광범위한 형태가 치료 내성을 구동한다. 표현형 가소성은 단순히 하나의 new hallmark가 아니라 다른 hallmark들을 획득·유지하는 **메타-기전(meta-mechanism)**으로 기능한다.

**비돌연변이적 후성유전 재프로그래밍(non-mutational epigenetic reprogramming).** 새로운 DNA 변이 없이 크로마틴 구조·DNA 메틸화·히스톤 변형의 변화만으로 암 표현형이 유지되며, 한 세대 내에 일어날 수 있어 변이 획득보다 적응 속도가 훨씬 빠르다.

**다형성 미생물총(polymorphic microbiome).** 종양 내부에도 미생물이 존재하며(intratumoral microbiome) 면역 반응·약물 대사·염증 신호에 영향을 미친다.

**노화 세포(senescent cells).** 초기에는 종양 억제 기전이지만, 축적된 노화 세포는 SASP(Senescence-Associated Secretory Phenotype)를 통해 염증성 TME를 조성하고 종양 진행을 촉진한다.

## 2. 표현형 가소성 — 약물 내성의 통합 기전

**ESR1 F404 변이와 fulvestrant 특이적 내성.** [[kingston-2024-esr1-f404-mutations-acquired-resistance|Kingston 2024]]는 ESR1 F404L/I/V 변이가 최초의 fulvestrant 특이적 내성 기전임을 규명했다. 비방향족 아미노산 치환이 fulvestrant 스테로이드 코어와의 π-stacking 상호작용을 파괴하지만, elacestrant·camizestrant·giredestrant에는 교차 내성이 없다. 약물-단백질 상호작용의 물리화학적 특성이 내성 변이의 범위를 결정한다는 원칙을 잘 보여준다.

**EMT-IRF6 축과 면역치료 내성.** [[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]는 PDAC에서 EMT 전사인자 ZEB1·SNAIL이 IRF6를 후성유전적으로 침묵시킴을 발견했다. IRF6는 세포를 TNF-α 유도 아폽토시스에 감수화하는 인자인데, 이 침묵으로 암세포는 면역 세포의 TNF-α 기반 살상을 피하고 ICI 효과가 감소한다. Birinapant(cIAP 억제제)가 이 감수성을 복원할 수 있음을 보였다. EMT가 전이 촉진을 넘어 면역 회피의 능동적 경로임을 보여준 사례다.

**DNA 손상-Wnt 크로스토크와 gemcitabine 내성.** [[du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating|Du 2025]]는 DNA-PK → c-Abl → OTULIN(pTyr56) → β-catenin 안정화라는 신호 축에서, DNA 손상 응답 신호가 비정규 Wnt 경로를 활성화하여 내성을 유도함을 보였다. c-Abl 억제제 imatinib이 TNBC에서 gemcitabine 감수성을 복원한다는 발견은 이 크로스토크가 치료 가능한 표적임을 시사한다.

## 3. 염색체외 원형 DNA (ecDNA) — 비멘델적 종양유전자 증폭

ecDNA는 주염색체에서 분리된 원형 DNA 구조로 수백 kb~수 Mb 크기의 종양유전자를 담을 수 있다. 세포 분열 시 무작위로 딸세포에 분배되는 비멘델적 유전 양식은 두 가지 중요한 결과를 낳는다. 첫째, 세포 집단 내 copy number가 매우 빠르게 변화하여 치료 압력에 따른 동적 내성이 가능하다. 둘째, 염색체 구조의 topological constraint에서 벗어나 chromatin accessibility가 높고 전사가 활발하다.

[[gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas|Gonzalez 2023]]은 단일 암세포에서 ecDNA와 mRNA를 동시에 시퀀싱하는 scEC&T-seq을 개발했다. MYCN ecDNA copy number와 MYCN mRNA 발현 사이에 강한 상관관계(R=0.86)를 단일 세포 수준에서 직접 확인했고, CTCF 결합 부위가 ecDNA breakpoint에 풍부함을 발견하여 생성 기전의 단서를 제공했다.

## 4. 종양 미세환경의 공간 생물학 — Spatial Ecotype과 Liquid Biopsy

[[zhang-2026-non-invasive-profiling-of-the-tumour|Zhang 2026]]은 TME 공간 정보를 혈액 기반 진단으로 연결하는 두 가지 방법론을 제시했다.

첫째, **Spatial EcoTyper**는 공간 전사체 데이터에서 9개의 보존된 범암 TME 공간 ecotype(SE1–SE9)을 정의했다. 흑색종에서 SE7·SE8은 ICI 치료 후 양호한 결과와, SE4는 불량한 결과와 연관되며, 공간 ecotype이 면역치료 반응 예측의 새로운 바이오마커 체계를 제공한다.

둘째, **Liquid EcoTyper**는 혈장 cfDNA의 메틸화 패턴에서 공간 ecotype 정보를 역추론(deconvolution)한다. 메틸화 패턴이 세포 유형마다 다르다는 원리를 이용하여 단순한 혈액 채취만으로 종양 TME 공간 구조를 비침습적으로 추론한다. 조직 생검 없이 TME 정보를 얻는 이 방법론은 TME 기반 정밀 의학의 임상 적용 가능성을 크게 높였다.

## 5. T 세포 공학의 최전선 — 프라이밍 타이머, CAR-T TF 공학

[[altenburger-2026-lymphoid-chemokine-cd8-t-cell|Altenburger 2026]]은 T 세포 활성화 지속 시간을 제한하는 내재적 생물학적 타이머를 발견했다. 림프절 케모카인 CCL19·CCL21이 DOCK2 재배치를 통해 활성화된 CD8+ T 세포를 수지상세포로부터 분리하며, 이 분리 신호가 없어 접촉이 지나치게 오래 지속되면 PD-1·LAG-3이 높은 기능 장애 표현형이 형성된다. 이 타이머 기전은 **더 짧은 ex vivo 자극**이 품질 높은 CAR-T 세포를 생산할 수 있다는 가설을 지지한다.

[[savage-2026-t-cell-state-tf-cooperative|Savage 2026]]은 T 세포 탈진을 전사인자(TF) 수준에서 역전시키는 접근법을 제시했다. Pooled TF 과발현 스크린에서 KLF2가 최상위 hit으로 선발되었고, TOX 유전자 좌위에서 RUNX:KLF composite motif가 발견되었다. AlphaFold3 가이드로 설계된 RUNX2-KLF2 융합(tethered) 구조체는 개별 TF 단독 발현보다 탈진을 강력하게 억제하고 memory-like 상태를 더 효과적으로 촉진했다. **협력적 TF 모티프(cooperative motif)**를 표적으로 한 유전자 공학이 더 강력한 CAR-T 설계 전략임을 보여준다.

## 6. EMT와 면역치료 내성 — IRF6 침묵과 표현형 가소성

[[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]의 분자 회로를 더 살펴보면, EMT는 단순한 형태적 변화가 아니라 ZEB1·SNAIL 등이 수백 개 유전자를 재프로그래밍하는 과정에서 IRF6를 후성유전적으로 침묵시킨다. IRF6는 세포를 TNF-α 유도 아폽토시스에 민감하게 만드는 전사인자로, 이 침묵으로 종양 침윤 T 세포·NK 세포의 TNF-α 기반 살상을 회피하게 된다. Birinapant(IAP 억제제)로 이 감수성을 부분 복원할 수 있어, 면역치료 효과가 부족한 환자에서 병용 전략의 가능성을 제시한다.

## 7. AI가 바꾸는 암 연구 — 가상 스크리닝, 약물 반응 예측, 네트워크 의학

**신약 발굴 속도 혁명.** [[jia-2026-drugclip-contrastive-learning-genome-scale|Jia 2026 (DrugCLIP)]]은 대조 학습 기반 단백질-리간드 임베딩 검색으로 전통적 docking 대비 ~1,000만 배 속도를 달성했다. 10,000개 AlphaFold 구조와 5억 개 화합물을 24시간 내 스크리닝 가능하며, 5-HT2A 수용체·NET·TRIP12 등에 대한 신규 hit이 실험 검증되었다.

**다중 모드 약물 반응 예측.** [[tong-2026-multimodal-dl-lincs-l1000-hdac|Tong 2026]]은 이중 스트림 GCN+Transformer로 LINCS L1000 전사 signature를 예측하여 22개 TCGA 암종에서 뇌 투과성 Class I HDAC 억제제를 우선순위 약물로 일관되게 식별했다.

**네트워크 의학 기반 약물 재배치.** [[kersting-2025-nf-core-nextflow-disease-module|Kersting 2025]]의 nf-core disease module pipeline은 네트워크 입력 데이터 선택이 알고리즘 선택보다 결과에 더 큰 영향을 미친다는 방법론적 교훈을 제공했다. [[hartung-2022-caddie-cancer-driver-drug-interaction|Hartung 2022]]의 CADDIE 플랫폼은 컴퓨팅 전문성 없이도 네트워크 의학 기반 탐색을 가능하게 하는 접근성 높은 도구다. [[chauquet-2026-twas-signature-matching-for-drug|Chauquet 2026]]은 TWAS-CMap 약물 우선순위화의 체계적 벤치마크에서 세포주 선택이 가장 중요한 파라미터임을 확인했다.

**단백질 foundation model과 병리 AI.** [[zhang-2026-proteinaligner-tri-modal-contrastive-learning|Zhang 2026 (ProteinAligner)]]는 서열·구조·텍스트 3개 modality를 정렬하는 867M 파라미터 단백질 foundation model이다. [[zhang-2026-multi-embed-pathology-wsi-multimodal|Zhang 2026 (Multi-Embed)]]는 병리 WSI를 전사체·메틸화·단백질체·공간 omics와 통합하는 멀티모달 임베딩으로 병리 이미지에서 분자 프로파일을 예측한다. [[wu-2026-reimagining-human-centric-drug-development|Wu 2026]]은 NAMs triad—iPSC 유래 organoid + MPS(organ-on-chip) + AI—를 통한 인간 중심 신약 개발 패러다임 전환을 제안한다.

## 8. 15일 전체를 관통하는 통합 메시지

15일간의 암 생물학 여정을 돌아보면 세 가지 수렴하는 주제가 명확히 드러난다.

**단층 분석의 시대는 끝났다.** Day 7의 CPTAC 연구들이 보여주듯, 유전체만으로는 충분하지 않다. CNA buffering으로 DNA 변이는 단백질 기능으로 왜곡되며, 인산화 수준의 신호전달 상태는 유전형으로 예측할 수 없다. 전사체·단백질체·인산화단백질체·공간 정보가 통합될 때만 종양의 실제 생물학이 드러난다.

**표현형 가소성이 내성의 통합 기전이다.** EMT-IRF6 침묵([[kim-2024-plasticity-induced-repression-irf6-underlies-acquired|Kim 2024]]), ecDNA의 비멘델적 증폭([[gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas|Gonzalez 2023]]), ESR1 F404 변이([[kingston-2024-esr1-f404-mutations-acquired-resistance|Kingston 2024]])는 모두 암세포가 단일 표적 억제에 표현형 전환으로 적응하는 사례다. 단일 표적 차단만으로는 부족하며, 표현형 전환 능력 자체를 억제하거나 여러 표현형 상태에 동시에 작동하는 전략이 필요하다.

**AI와 multi-omics의 결합이 발견의 속도를 결정한다.** DrugCLIP의 1,000만 배 가상 스크리닝 가속, Spatial/Liquid EcoTyper의 비침습 TME 프로파일링, ProteinAligner와 Multi-Embed의 다중 modality 통합은 AI가 단순한 데이터 처리 도구가 아니라 새로운 가설을 생성하는 발견 엔진으로 기능하고 있음을 보여준다. 미래의 암 의학은 **통합적(multi-omics), 공간적(spatially resolved), AI 증강(AI-augmented)**이 될 것이다.

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

---

## Q&A

*학습 중 나온 질문과 답변을 여기에 정리합니다.*
