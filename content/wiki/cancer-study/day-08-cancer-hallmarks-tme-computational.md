---
title: "Day 8: Hallmarks, TME & 컴퓨팅 접근"
draft: false
---

# Day 8: Hallmarks, TME & 컴퓨팅 접근

## Big Picture

마지막 Day는 세 가지 연결된 주제를 다룬다: 암 생물학의 새로운 차원(hallmarks 업데이트, ecDNA), 치료 최전선으로서의 종양 미세환경(TME), 그리고 암 연구 방식을 재편하고 있는 AI/컴퓨팅 접근법.

## Part 1: Cancer Hallmarks — 새로운 차원

### Hanahan 2022 — Hallmarks of Cancer 업데이트
→ [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]

2022년 hallmarks 프레임워크 업데이트, 4가지 새로운 차원 제안:
1. **표현형 가소성 해제** (9번째 hallmark) — 암세포가 분화 상태 간 전환, 약물 내성·면역 회피·전이를 가능하게 함
2. **비돌연변이적 후성유전 재프로그래밍** — 새 변이 없이 크로마틴/메틸화 변화
3. **다형성 미생물총** — 장내·종양 관련 미생물이 면역과 대사에 영향
4. **노화 세포** — TME에서 이중 역할 (초기 종양 억제, 후기 종양 촉진)

가소성 hallmark은 EGFR(Day 3), KRAS(Day 4), 면역치료(Kim 2024) 내성에서의 EMT 매개 전환과 직접 연결된다.

### Gonzalez 2023 — 염색체외 원형 DNA (ecDNA)
→ [[cancer/gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas]]

scEC&T-seq: 단일 암세포에서 ecDNA + mRNA를 동시에 시퀀싱하는 최초의 방법. 발암 ecDNA(MYCN, CDK4, MDM2)는 클론으로 전파되며 복제수가 종양유전자 발현을 직접 구동(MYCN R=0.86). CTCF 결합 부위가 ecDNA breakpoint에 풍부. ecDNA는 멘델 유전 법칙을 벗어나는 비염색체적 종양유전자 증폭 기전이다.

## Part 2: 종양 미세환경 (TME)

### Zhang 2026 — 공간 ecotype과 liquid biopsy
→ [[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]]

Spatial EcoTyper가 공간 전사체학에서 9개 보존된 범암 TME 공간 ecotype(SE1–SE9)을 정의. **Liquid EcoTyper**가 혈장 cfDNA 메틸화로부터 비침습적으로 복원. 흑색종에서 SE7/SE8은 ICI 양호 결과, SE4는 불량 결과 예측. 조직 수준 공간 생물학을 혈액 기반 진단에 연결하는 최초의 방법.

### Altenburger 2026 — T 세포 프라이밍 타이머
→ [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]]

CCR7 리간드(CCL19/CCL21)가 면역 시냅스에서 DOCK2 재배치를 통해 활성화된 CD8+ T 세포를 수지상세포로부터 분리. 분리 실패 세포는 기능장애 표현형(PD-1/LAG-3 high) 획득. TCR 자극 기간을 제한하는 생물학적 타이머. CAR-T에 대한 함의: 더 짧은 ex vivo 자극이 effector 품질을 개선할 수 있다.

### Savage 2026 — 전사인자 협력을 통한 CAR-T 설계
→ [[cancer/savage-2026-t-cell-state-tf-cooperative]]

Pooled TF 과발현 스크린에서 KLF2가 CAR-T 탈진 감소 최상위 hit. TOX 좌위의 RUNX:KLF composite motif 발견. AlphaFold3 가이드 tethered RUNX2-KLF2 구조체가 개별 TF보다 탈진을 더 강력하게 감소시키고 memory-like 상태 촉진. 단일 인자를 넘어 cooperative motif 표적화로 TF 공학을 확장.

### Kim 2024 — EMT가 면역치료 내성을 구동
→ [[drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired]]

PDAC에서 EMT가 ZEB1/SNAIL 매개 IRF6 후성유전적 침묵을 통해 checkpoint blockade 내성 구동. IRF6는 세포를 TNF-α 유도 세포사멸에 감수화하고, 소실 시 면역 살상에 보이지 않게 된다. Birinapant(cIAP 억제제)가 감수성 복원. Hanahan의 "표현형 가소성" hallmark이 면역치료 맥락에서 직접 구현된 사례.

### Du 2025 — ABL1-OTULIN-Wnt 항암제 내성
→ [[drug-resistance/du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating]]

DNA-PK → c-Abl → OTULIN(pTyr56) → β-catenin 안정화: 리간드 비의존적 genotoxic Wnt 활성화 축. Imatinib(c-Abl 억제제)이 TNBC에서 항암제 감수화. DNA 손상 신호가 비정규 Wnt 경로를 가로채는 사례.

### Kingston 2024 — ESR1 fulvestrant 특이적 내성
→ [[drug-resistance/kingston-2024-esr1-f404-mutations-acquired-resistance]]

F404L/I/V 변이가 최초의 fulvestrant 특이적 ESR1 내성 기전. 비방향족 치환이 fulvestrant 스테로이드 코어와의 π-stacking을 파괴. 새로운 경구 SERD(elacestrant, camizestrant, giredestrant)와 tamoxifen은 활성 유지. **약물 결합만 특이적으로 표적하는** 변이 클래스를 정의.

## Part 3: AI/컴퓨팅 접근

### DrugCLIP — Genome 규모 가상 스크리닝
→ [[cancer/jia-2026-drugclip-contrastive-learning-genome-scale]]

대조 학습 기반 단백질-리간드 임베딩 검색으로 전통적 도킹 대비 ~10M배 속도 향상. ~10K 인간 AlphaFold 구조 × 500M 화합물을 24시간 내 스크리닝. 5HT2AR, NET, TRIP12에 대한 신규 hit 실험 검증.

### 다중 모드 약물 반응 예측
→ [[cancer/tong-2026-multimodal-dl-lincs-l1000-hdac]]

이중 스트림 GCN + Transformer에 cross-modal attention으로 LINCS L1000 전사 signature 예측. 22개 TCGA 암종에서 뇌 투과성 Class I HDAC 억제제를 일관되게 식별.

### 네트워크 의학 도구
→ [[cancer/kersting-2025-nf-core-nextflow-disease-module]] 및 [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]]

nf-core disease module pipeline: 네트워크 입력 선택이 알고리즘 선택보다 결과를 지배. CADDIE: 컴퓨팅 전문성 없이 네트워크 의학 기반 약물 재배치를 위한 웹 기반 탐색기.

### TWAS-CMap 모범 사례
→ [[cancer/chauquet-2026-twas-signature-matching-for-drug]]

TWAS-CMap 약물 우선순위화의 최초 체계적 벤치마크. CMap 세포주 선택이 가장 영향력 있는 단일 파라미터.

### 추가 AI 도구
→ [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]]: 서열·구조·텍스트를 정렬하는 867M 파라미터 단백질 foundation model.
→ [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]: Multi-Embed가 병리 WSI를 전사체, 메틸화, 단백질체, 공간 omics와 정렬.
→ [[cancer/wu-2026-reimagining-human-centric-drug-development]]: NAMs triad(인간 세포 모델 + MPS + AI)로 동물 모델 대체 제안.

## 8일 전체를 관통하는 연결

| 테마 | Day | 흐름 |
|------|-----|------|
| 표현형 가소성 / EMT | 3, 4, 8 | EGFR → KRAS → ICB 내성에서 lineage 전환 |
| CDK/Rb 축 | 5, 7 | CDK 생물학 → CPTAC phospho-Rb 바이오마커 |
| Kinase 신호전달 | 5, 6, 7 | CDK12 → phosphoproteomics 방법론 → CPTAC 데이터 |
| DNA 수리 | 1, 2, 5 | BRCA 리버전 → 비리버전 내성 → CDK12/BRCAness |
| TME | 3, 4, 8 | Exosome 리모델링 → TGF-beta → 공간 ecotype |
| AI/컴퓨팅 | 6, 8 | Kinase 추론 → 약물 발견 → 가상 스크리닝 |

## 핵심 메시지

암 생물학은 세 가지 최전선으로 수렴하고 있다: (1) 통합적 내성 기전으로서의 **표현형 가소성**, (2) 치료의 장벽이자 기회로서의 **종양 미세환경**, (3) multi-omics 데이터를 대규모로 통합하는 **AI/컴퓨팅 도구**. 이 위키의 논문들은 총체적으로 단일 레이어 분석이 불충분하며, 미래는 **통합적, 다중 모드, AI 증강 암 생물학**에 있음을 보여준다.
