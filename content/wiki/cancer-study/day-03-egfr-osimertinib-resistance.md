---
title: "Day 3: EGFR & Osimertinib 내성"
draft: false
---

# Day 3: EGFR & Osimertinib 내성

## 1. EGFR 신호전달의 기본

Epidermal Growth Factor Receptor(EGFR, HER1, ErbB1)는 세포막을 관통하는 receptor tyrosine kinase(RTK)로, 정상 상피세포의 증식·분화·생존을 조절하는 핵심 신호 허브다. 리간드(EGF, TGF-α 등)가 세포외 도메인에 결합하면 EGFR 단량체 두 개가 이합체화(dimerization)되고, 세포질 쪽 kinase 도메인이 서로를 trans-인산화한다. 이 활성화된 EGFR의 세포질 꼬리에는 복수의 tyrosine 인산화 부위(Y1068, Y1086 등)가 생성되어 adaptor 단백질(GRB2, SHC)의 SH2 도메인이 결합하는 플랫폼이 된다.

GRB2에 구성적으로 연결된 guanine nucleotide exchange factor SOS는 이 복합체를 통해 세포막으로 이동하여 RAS 단백질의 GDP를 GTP로 치환한다. GTP 결합 상태의 RAS(활성형)는 RAF kinase를 모집·활성화하고, RAF-MEK-ERK로 이어지는 **MAPK cascade**가 작동한다. 활성 ERK는 핵으로 이동하여 ELK1, c-FOS 등 전사인자를 인산화함으로써 증식 유전자 발현을 유도한다. 동시에 EGFR은 PI3K의 p85 조절 소단위를 직접 인산화하거나 RAS를 통해 PI3K-catalytic 소단위를 활성화한다. PI3K가 생산하는 PIP3는 AKT를 세포막으로 불러 PDK1이 활성화시키고, AKT는 mTORC1 활성화 및 BAD 불활성화를 통해 세포 생존을 보장한다. 이 두 경로(MAPK, PI3K-AKT-mTOR)는 종양 세포에서 가장 빈번하게 활성화되는 발암 신호전달계다.

## 2. EGFR 변이 폐암의 역사 — 1세대부터 3세대 TKI까지

2004년 두 연구팀이 동시에 보고한 획기적인 발견은, NSCLC(non-small cell lung cancer) 환자 일부에서 EGFR kinase 도메인의 activating mutation — 주로 exon 19 결실(del19) 또는 exon 21의 L858R 점변이 — 이 존재하며, 이 변이를 가진 종양이 1세대 EGFR-TKI(tyrosine kinase inhibitor)인 gefitinib과 erlotinib에 극적으로 반응한다는 것이었다. 이 변이들은 EGFR kinase를 리간드 없이도 구성적으로 활성화하여 종양 세포가 EGFR 신호에 oncogene addiction 상태로 빠지게 만든다. 따라서 EGFR을 억제하면 이 의존성이 무너지며 세포자멸사가 유도된다.

그러나 1세대 TKI에 대한 반응은 평균 10–12개월 뒤 내성 획득으로 끝났다. 가장 주요한 내성 기전은 **T790M gatekeeper 변이**로, 최초의 체계적 serial re-biopsy 연구에서 내성 환자의 약 49%에서 확인됐다 ([[sequist-2011-genotypic-histological-evolution-egfr-resistance|Sequist 2011]]). 동일 연구에서 MET 증폭이 13%, 소세포폐암(SCLC) 조직학적 전환이 14%, EMT(epithelial-to-mesenchymal transition)가 약 5%에서 발견됐다. 37명 환자로부터 97개의 serial 검체를 분석한 이 연구는 EGFR-TKI 내성의 지형도를 처음으로 체계화했고, serial re-biopsy를 임상 연구 패러다임으로 정착시켰다.

T790M 변이에 대응하기 위해 2세대 TKI(afatinib, dacomitinib)가 개발됐으나, 이들은 T790M에 대한 선택성이 낮아 야생형 EGFR도 강하게 억제함으로써 피부독성·설사 등 심각한 부작용이 제한 요인이 됐다. 3세대 TKI **osimertinib**은 이 문제를 우아하게 해결했다. Osimertinib은 EGFR의 Cys797 잔기에 공유결합하는 irreversible inhibitor로, T790M이 있든 없든 활성화 변이 EGFR을 선택적으로 억제하면서 야생형 EGFR은 상대적으로 보존한다. 임상 시험에서 osimertinib은 T790M 양성 내성 환자(2차 치료)뿐 아니라 치료 경험이 없는 EGFR 변이 환자(1차 치료)에서도 1세대 TKI를 뛰어넘는 PFS를 보이며 현재 1차 표준치료로 자리 잡았다.

## 3. T790M Gatekeeper 변이와 Osimertinib의 탄생

EGFR kinase 도메인의 T790 위치는 ATP 결합 포켓 입구에 자리한 gatekeeper residue다. 야생형에서 T790의 작은 threonine은 erlotinib·gefitinib 같은 소분자 억제제가 결합 포켓 깊숙이 접근할 수 있게 허용한다. T790M 변이에서 threonine이 더 큰 methionine으로 치환되면 결합 포켓이 입체적으로 좁아지고, 동시에 ATP에 대한 친화도가 상승하여 1세대 TKI의 경쟁적 억제 능력이 크게 떨어진다. 이는 단순히 물리적 차단이 아니라, EGFR이 ATP와 더욱 효율적으로 결합하게 됨으로써 약물이 자리를 빼앗기 어려워지는 기전이다.

Osimertinib의 설계 전략은 이 gatekeeper 문제를 우회하는 것이었다. 결합 포켓 내 ATP 경쟁을 포기하고, 대신 kinase 도메인에 있는 Cys797에 acrylamide 작용기를 통해 공유결합을 형성한다. 공유결합은 비가역적이므로 ATP 농도와 무관하게 억제 효과가 유지된다. 또한 T790M이 있어도 공유결합 부위(Cys797)는 그대로 보존되어 있으므로, osimertinib은 T790M 변이를 가진 EGFR을 오히려 선호하는 선택성을 갖게 됐다. 이 설계는 단순한 차세대 억제제가 아닌, 내성 기전의 구조생물학을 역이용한 합리적 약물 설계(structure-based drug design)의 모범 사례다.

## 4. Osimertinib 이후의 내성 지형

Osimertinib이 1차 치료로 정착했지만, 환자의 상당수는 결국 내성을 획득한다. 내성 지형은 크게 **유전적 내성**, **조직학적 전환**, 그리고 **비세포자율적 내성**으로 구분된다.

### 유전적 내성

가장 잘 특성화된 유전적 내성 기전은 **C797S 변이**다. Osimertinib이 공유결합하는 바로 그 Cys797 잔기가 serine으로 치환되면 공유결합 형성이 불가능해진다. C797S 변이는 단독으로 발생할 수도 있고, T790M과 함께 발생하기도 한다. T790M이 유지되면서 C797S가 생기는 경우에는 1세대 TKI(T790M에는 반응하지 않지만 C797S에는 결합 가능)와 osimertinib을 병용하는 allosteric 전략이 논의된다.

**MET 증폭**은 osimertinib 이후에도 1세대 TKI 내성 당시와 유사하게 발생하는 우회 기전이다. MET receptor tyrosine kinase가 과발현·증폭되면 EGFR을 거치지 않고 RAS-MAPK 및 PI3K-AKT 경로를 직접 활성화할 수 있다. MET 증폭이 확인된 내성 환자에서 MET 억제제 capmatinib 또는 tepotinib과 osimertinib의 병용이 임상적으로 검증되고 있다.

### 조직학적 전환 — Lineage Plasticity

1세대 TKI 내성 연구 ([[sequist-2011-genotypic-histological-evolution-egfr-resistance|Sequist 2011]])에서 처음 보고된 이후 osimertinib 내성에서도 확인되는 현상으로, NSCLC 종양 세포가 SCLC의 형태학적·분자적 표현형으로 전환하는 **histological transformation**이 있다. 전환된 세포는 EGFR 의존성 자체를 잃기 때문에 EGFR TKI가 완전히 무용지물이 된다. 이는 단순한 돌연변이가 아니라 전사 프로그램 전체의 재편 — 즉 lineage plasticity — 이며, Notch 경로 억제 및 TP53/RB1 동시 소실이 선행 조건으로 알려져 있다. 이 전환은 새로운 약물로 대응하기 어려운 근본적으로 다른 생물학적 탈출 경로다.

## 5. TMB의 역설 — 왜 높은 TMB가 TKI에서는 나쁜가

면역관문억제제(immune checkpoint inhibitor, ICI) 분야에서 tumor mutational burden(TMB)이 높을수록 치료 반응이 좋다는 개념이 확립되어 있다. 높은 TMB는 더 많은 neoantigenic peptide를 생성하여 T 세포 매개 항종양 면역을 강화하기 때문이다. 그러나 EGFR TKI의 맥락에서 TMB는 정반대의 의미를 갖는다.

대규모 후향적 코호트 분석에서 고TMB(high TMB) 그룹은 저TMB 그룹에 비해 EGFR TKI의 치료 지속 기간(time-to-discontinuation)이 유의미하게 짧았다 — 중앙값 9.6개월 대 16.7개월 ([[offin-2019-tumor-mutation-burden-egfr-tki-efficacy|Offin 2019]]). 또한 TKI 치료 후 내성을 획득한 종양에서 TMB가 더욱 상승하는 경향(3.42 → 6.56 mut/Mb)이 관찰됐고, 고TMB는 TP53 및 SMARCA4 공변이(co-mutation)와 강하게 연관됐다. 흥미롭게도, T790M 획득 내성은 저TMB 환자에서 더 빈번히 나타났는데, 이는 고TMB 환자에서는 T790M이 아닌 다른 경로로 내성이 발생한다는 것을 시사한다.

왜 높은 TMB가 TKI 반응에 불리한가? 이는 여러 추론이 가능하다. 첫째, 높은 TMB는 종양의 유전적 불안정성이 높음을 반영하며, 불안정한 게놈은 TKI 선택압 하에서 더 빠르게 다양한 내성 기전을 진화시킬 가능성이 크다. 둘째, 고TMB와 연관된 TP53·SMARCA4 공변이는 그 자체로 EGFR 의존성을 낮추고 대안적 생존 경로를 활성화하는 독립적 발암 드라이버다. 이 발견은 "높은 TMB = 치료 반응 양호"라는 단순화된 관점을 경계하게 하며, 치료 문맥에 따라 바이오마커의 의미가 근본적으로 달라질 수 있음을 보여준다.

## 6. 비세포자율적 내성 — Exosome과 TME 리모델링

전통적으로 약물 내성 연구는 종양 세포 내재적(cell-intrinsic) 변화에 집중했다. 그러나 tumor microenvironment(TME)가 내성 획득에 능동적으로 기여한다는 인식이 점차 커지고 있다. Osimertinib 내성 종양의 TME를 분석한 연구는 내성 획득 시 CD8+ cytotoxic T 세포가 유의미하게 감소하고 M0/M2 표현형의 종양연관 대식세포(tumor-associated macrophage, TAM)가 증가함을 보여줬다 ([[han-2023-tumour-microenvironment-changes-osimertinib-resistance|Han 2023]]).

이 면역억제적 TME 재편의 핵심 매개체로 **exosome**이 지목됐다. 내성 종양 세포가 분비하는 exosome에는 miR-1258-3p, miR-17-5p 등 특이적 microRNA가 풍부하며, 이들이 대식세포로 전달되어 M1→M2 분극화를 유도한다. 용해성 사이토카인(soluble factor)이 아닌 exosome이 핵심 전달 매개체라는 점은 특징적이다. 또한 내성 세포 유래 exosome의 단백질체 분석에서 ECM(extracellular matrix) 재형성, TGF-β 신호전달, PI3K-AKT와 관련된 단백질들이 공통적으로 상향조절됐다.

이 발견이 중요한 이유는 **non-cell-autonomous resistance** — 즉 종양 세포가 아닌 주변 환경이 내성을 지지하는 기전 — 을 확립했기 때문이다. M2 대식세포는 다시 면역억제 사이토카인을 분비하고 항종양 T 세포 반응을 억제하는 피드포워드 루프를 형성한다. 이 피드포워드 루프는 EGFR TKI 단독으로는 차단이 불가능하다.

## 7. IFITM3-MET 축 — 선천면역 유전자의 RTK 내성 전용

Osimertinib에 대한 단기 PFS 환자와 장기 PFS 환자를 비교한 연구에서 **IFITM3(interferon-induced transmembrane protein 3)**가 단기 PFS 환자 종양에서 유일하게 유의미하게 상향조절된 유전자로 확인됐다 ([[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance|Ibusuki 2025]]). IFITM3는 본래 인터페론 자극 유전자(interferon-stimulated gene, ISG)로, 바이러스 감염 시 선천면역 반응의 일환으로 발현이 유도되며 세포막 완전성을 유지하는 역할을 한다. 이 유전자가 TKI 내성의 핵심 매개자로 등장한 것은 처음에는 예상 밖의 발견이었다.

기전 연구에서 IFITM3는 세포막의 **lipid raft** 미세도메인에서 MET receptor tyrosine kinase와 직접 물리적으로 결합(protein-protein interaction)하는 것이 밝혀졌다. IFITM3-MET 복합체는 MET의 인산화·활성화를 촉진하고, 이를 통해 PI3K-AKT 신호를 EGFR 우회적으로 활성화한다. EGFR이 osimertinib에 의해 억제되더라도 IFITM3-MET-AKT 축이 세포 생존 신호를 유지하는 것이다.

더 중요한 것은 이 루프의 TME 의존성이다. 종양 미세환경의 사이토카인, 특히 TNF-α, IL-6, IFN-γ가 IFITM3를 전사 수준에서 강하게 상향조절한다. TME 염증 신호 → IFITM3 발현 증가 → MET-AKT 활성화 → EGFR TKI 내성이라는 피드포워드 루프가 형성되는 것이다. 이 루프는 종양 세포 고유의 돌연변이로는 설명되지 않는 TME-driven resistance의 구체적 분자 기전이다. In vivo 실험에서 osimertinib과 MET 억제제 capmatinib의 병용이 IFITM3 발현 종양의 내성을 효과적으로 극복했다.

이 발견은 암 생물학적으로 깊은 함의를 지닌다. IFITM3는 선천면역 감시의 구성 요소이지만, 만성적인 염증이 만연한 TME에서는 그 발현이 항종양 면역이 아닌 TKI 내성을 강화하는 방향으로 전용(co-opt)된다. 면역과 발암 신호전달의 경계가 흐려지는 이 현상은, 면역억제 단독 또는 TKI 단독의 전략이 불충분할 수 있음을 시사하며, TME를 표적으로 포함하는 복합 전략의 필요성을 보여준다.

## 8. EGFR 내성 진화의 종합적 조망

EGFR 변이 NSCLC의 TKI 내성 역사는, 각 세대의 약물이 이전 세대의 한계를 극복하면서도 새로운 내성 지형을 만들어가는 공진화(co-evolution)의 역사다. 1세대 TKI → T790M → osimertinib이라는 선형 흐름 뒤에는 C797S, MET 증폭, SCLC 전환, exosome 매개 TME 리모델링, IFITM3-MET 축이라는 훨씬 복잡한 내성 네트워크가 존재한다.

특히 주목할 점은 내성 기전의 이질성과 비세포자율성이다. 동일 환자 내에서도 원발 종양과 전이 부위가 다른 내성 기전을 보일 수 있으며, TME 성분이 능동적으로 내성을 지지한다. 이는 단일 re-biopsy에 기반한 내성 기전 파악의 한계를 의미하며, liquid biopsy 및 다부위 생검 전략의 중요성을 부각한다. 또한 조직학적 전환(SCLC)과 TME 리모델링은 더 나은 EGFR 억제제로는 극복할 수 없으므로, 이들을 대상으로 하는 병용 전략(TKI + MET 억제제, TKI + 면역관문억제제, TKI + 항체-약물 접합체 등)의 개발이 현재 집중적으로 진행되고 있다.

---

## 참고문헌

- [[sequist-2011-genotypic-histological-evolution-egfr-resistance|Sequist et al. (2011)]] — Genotypic and histological evolution of lung cancers acquiring resistance to EGFR inhibitors. *Science Translational Medicine*
- [[offin-2019-tumor-mutation-burden-egfr-tki-efficacy|Offin et al. (2019)]] — Tumor mutation burden and efficacy of EGFR-tyrosine kinase inhibitors in patients with EGFR-mutant lung cancers. *Clinical Cancer Research*
- [[han-2023-tumour-microenvironment-changes-osimertinib-resistance|Han et al. (2023)]] — Tumour microenvironment changes following osimertinib treatment and mechanisms of resistance. *npj Precision Oncology*
- [[ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance|Ibusuki et al. (2025)]] — IFITM3-MET interaction drives osimertinib resistance in EGFR-mutant non-small cell lung cancer. *Cancer Research*
