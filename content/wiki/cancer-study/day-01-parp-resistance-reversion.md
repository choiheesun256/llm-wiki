---
title: "Day 1: PARP 내성 — 리버전 돌연변이"
draft: false
---

# Day 1: PARP 내성 — 리버전 돌연변이

## 1. DNA 이중가닥 절단 수리의 두 경로

세포는 DNA 이중가닥 절단(double-strand break, DSB)에 맞닥뜨렸을 때 두 가지 주요 수리 경로 중 하나를 선택한다. 첫 번째는 **homologous recombination(HR)**으로, 자매 염색분체(sister chromatid)를 주형으로 삼아 절단 부위를 정확하게 복원하는 고충실도(high-fidelity) 경로이다. HR은 세포 주기의 S기와 G2기에만 작동하며, 여기에는 BRCA1, BRCA2, RAD51, PALB2 등의 단백질이 필수적으로 관여한다. 두 번째는 **non-homologous end joining(NHEJ)**으로, 절단된 DNA 말단을 직접 연결하는 경로이다. NHEJ는 세포 주기 전 단계에서 작동하지만 오류 발생률이 높고, 결과적으로 삽입/결실(indel)이 남는 경우가 많다.

HR과 NHEJ 사이의 균형은 단순히 경쟁적인 것이 아니라 적극적으로 조절된다. DNA 말단의 **end resection**, 즉 5' 말단을 절삭하여 단일가닥 DNA(ssDNA)를 노출시키는 과정이 이 선택의 분기점이다. End resection이 진행되면 HR 경로로 진입하고, 차단되면 NHEJ로 귀결된다. BRCA1은 end resection을 촉진하는 방향으로 작용하며, 반대로 53BP1은 이를 억제한다. 이 두 단백질의 길항 관계는 Day 2에서 다루는 53BP1/Shieldin 내성 기전의 핵심 배경이 된다.

## 2. BRCA1/2의 역할과 합성치사 원리

BRCA1과 BRCA2는 HR의 서로 다른 단계를 담당한다. BRCA1은 초기 DNA 손상 인식 및 end resection 촉진에 관여하고, BRCA2는 RAD51 recombinase를 ssDNA 말단에 불러와 가닥 침입(strand invasion)을 매개한다. 두 단백질 중 하나라도 기능을 잃으면 세포는 HR 능력이 현저히 저하된 상태, 즉 **homologous recombination deficiency(HRD)** 상태가 된다.

HRD 세포는 단일가닥 절단(single-strand break, SSB)이나 복제 포크 정지(replication fork stalling)를 처리하는 능력도 함께 손상된다. 이때 PARP 단백질이 중요해진다. PARP1과 PARP2는 SSB를 감지하고 poly(ADP-ribose)(PAR) 사슬을 합성하여 DNA 수리 단백질을 모집한다. PARP의 도움 없이 처리되지 못한 SSB는 복제 포크와 충돌하여 DSB로 전환된다. 정상 세포라면 이 DSB를 HR로 수리하지만, BRCA1/2가 결핍된 세포는 이를 정확히 수리하지 못하고 결국 세포사멸에 이른다.

이것이 **합성치사(synthetic lethality)**의 원리이다. BRCA 변이 하나만으로는 세포가 살아갈 수 있지만, PARP 억제라는 두 번째 타격이 가해지면 두 결핍이 조합되어 세포에 치명적이 된다. 이 원리는 BRCA1/2 변이 난소암, 유방암, 췌장암, 전립선암 환자에게 PARPi를 처방하는 임상적 근거이다.

## 3. PARP Inhibitor의 작용 기전

PARPi의 작용 방식은 단순한 촉매 억제(catalytic inhibition) 이상이다. 현재 승인된 PARPi(olaparib, rucaparib, niraparib, talazoparib)는 두 가지 기전을 통해 세포 독성을 발휘한다.

**촉매 억제(catalytic inhibition)**는 PARP1이 PAR 사슬을 합성하지 못하게 막는 것으로, SSB 수리가 지연되고 복제 포크 붕괴가 유발된다. 그러나 이것만으로는 설명이 부족하다. 실제 세포 독성은 주로 **PARP trapping**에서 비롯된다. 정상적인 PARP1은 SSB를 인식하여 PAR 사슬을 합성한 뒤 chromatin에서 해리된다. PARPi가 결합하면 이 해리 과정이 차단되고, PARP1이 DNA에 비정상적으로 강하게 포획(trapped)된다. Trapped PARP1 단백질-DNA 복합체는 복제 포크가 접근할 때 물리적 장애물로 작용하며, 이로 인한 replication fork collapse가 세포 독성의 주된 원인이다.

PARPi 간에도 trapping 효력에는 차이가 있다. Talazoparib이 가장 강력한 PARP trapping 능력을 보이며, veliparib은 상대적으로 약하다. 이 차이는 PARPi의 임상적 효능과 내성 기전 선택에 모두 영향을 미친다. 특히 trapping이 약한 약물은 trapping 의존적 내성(예: PARP1 변이에 의한 trapping 소실)의 영향을 덜 받는다.

## 4. 리버전 돌연변이란 무엇인가

PARP inhibitor에 대한 내성이 발생하는 여러 경로 중 가장 잘 이해된 것이 **이차(secondary) 리버전 돌연변이(reversion mutation)**이다. 리버전 돌연변이란 원래의 BRCA1/2 병원성 변이 근처에 추가적인 체세포 돌연변이가 생겨, 손상된 reading frame을 복원하는 현상이다. 복원된 BRCA 단백질이 부분적으로라도 기능하면 HR이 되살아나고, 합성치사의 전제 조건이 사라진다.

리버전 돌연변이의 개념은 2008년 cisplatin 내성 세포주 연구에서 처음 확립됐다. [[edwards-2008-resistance-therapy-caused-intragenic-deletion|Edwards 2008]]은 BRCA2가 불활성화된 Capan-1 세포주와 cisplatin 내성 임상 난소암 검체에서, 원래의 frameshift 변이를 제거하는 수백 bp에서 수십 kb에 이르는 BRCA2 내부 결실을 발견했다. 이 결실들은 reading frame을 복원하여 기능적 BRCA2 단백질의 재발현을 가능케 했다. 이 논문은 리버전 매개 내성 분야 전체의 출발점이 되었다.

같은 해 [[sakai-2008-secondary-mutations-mechanism-cisplatin-resistance|Sakai 2008]]은 cisplatin 내성 클론 14개 중 7개에서 이차 돌연변이가 wild-type BRCA2 reading frame을 복원함을 확인했다. 더 중요한 점은, 리버전이 결실에만 국한되지 않는다는 것이다. 이 연구에서 HCC1428 세포주에서는 **splice-site 변이**가 exon을 우회하는 방식으로 reading frame을 복원하는 사례가 확인되었다. 이로써 리버전은 결실, 삽입, 점돌연변이, splice-site 변화 등 다양한 유형으로 발생할 수 있는 일반적인 현상임이 밝혀졌다.

### 다양한 리버전의 유형

리버전 돌연변이는 크게 세 가지 범주로 나눌 수 있다.

**결실(deletion)**이 가장 흔한 유형이다. 원래 frameshift를 유발했던 삽입/결실 돌연변이를 포함하는 영역이 통째로 제거되면서 reading frame이 복원된다. [[pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt 2020]]의 대규모 분석에서 BRCA2 리버전의 88%가 결실로 이루어졌으며, 68%에서 **microhomology** 서열이 결실 경계에서 확인되었다. 이는 microhomology-mediated end joining(MMEJ) 또는 alternative end joining(alt-EJ) 경로가 리버전 생성에 관여함을 시사한다.

**삽입(insertion)**은 frameshift를 상쇄하는 방향으로 염기가 추가되는 경우이다. 예를 들어 1 bp 결실에 의한 frameshift는 2 bp 삽입이 추가되면 reading frame이 복원될 수 있다.

**Splice-site 변이**는 보다 정교한 유형이다. [[nesic-2024-brca1-secondary-splice-site-mutations-drive|Nesic 2024]]는 BRCA1 exon 11 donor splice site에 이차 변이가 생겨 exon 11 skipping을 유도하는 사례를 보고했다. 이로 인해 생성된 **BRCA1-Δ11q isoform**은 full-length BRCA1은 아니지만, HR을 부분적으로 수행하기에 충분한 기능을 가진다. ARIEL2/4 임상시험 코호트에서 PARPi 치료 후 이 isoform이 약 10배 enrichment되어 임상적 내성과의 연관성이 명확히 입증되었다. 이는 **부분 기능만으로도 합성치사를 탈피하기에 충분**하다는 중요한 원칙을 제시한다.

### 리버전의 임상적 분포

[[pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt 2020]]의 300건 이상의 임상 리버전 분석은 리버전의 지형(landscape)을 체계적으로 그렸다. BRCA2 c.750–775 영역이 리버전 hotspot으로 동정되었으며, exon 16 하류는 리버전이 거의 발생하지 않는 "사막(desert)" 구역임이 확인되었다. 이러한 분포는 hotspot 지역에 위치한 원래 병원성 변이를 가진 환자에서 리버전 내성이 더 일찍, 더 빈번하게 나타날 수 있음을 시사한다.

리버전 돌연변이는 처음에는 난소암과 유방암의 현상으로 여겨졌으나, [[pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum|Pishvaian 2017]]은 췌장관선암(pancreatic ductal adenocarcinoma, PDAC)에서도 BRCA2 리버전이 발생함을 처음으로 보고했다. 이 환자는 germline c.6174delT 변이를 보유하고 있었으며, veliparib + FOLFOX 치료 약 15개월의 무진행 생존 후 진행 시점에 mutation allele frequency(MAF) 8%로 리버전 변이가 ctDNA에서 검출되었다. 이는 리버전이 BRCA 변이를 가진 **모든 암종에서 잠재적으로 발생 가능**한 보편적 내성 기전임을 의미한다.

## 5. 리버전 이외의 BRCA1 관련 내성: HUWE1과 Δ11q 축

리버전 돌연변이는 BRCA 단백질의 직접적인 복원을 전제로 한다. 그러나 리버전 없이도 BRCA1 결핍 세포가 PARPi에 내성을 획득하는 경로가 있다. [[pettitt-2023-huwe1-defect-causes-parp-inhibitor|Pettitt 2023]]은 이를 HUWE1이라는 E3 ubiquitin ligase를 통해 설명했다. HUWE1은 정상적으로 BRCA1-Δ11q isoform을 ubiquitin 의존적으로 분해하는 역할을 한다. HUWE1이 체세포 missense 변이 또는 결실로 소실되면, Δ11q isoform이 세포 내에 축적되고, 이 부분 기능 BRCA1이 충분한 HR을 복원하여 PARPi 내성을 유발한다.

이 경로는 Nesic 2024의 splice-site 리버전 사례와 같은 Δ11q 생물학에 수렴한다는 점에서 중요하다. 두 경로 모두 결국 BRCA1-Δ11q isoform의 기능적 축적으로 귀결되지만, 전자는 DNA 수준의 splice-site 변이로, 후자는 단백질 분해 경로의 소실로 발생한다. HGSOC(high-grade serous ovarian cancer) 환자에서 PARPi 치료 후 HUWE1 missense 변이가 임상적으로 확인됐으며, 이 기전이 실제 환자에서 선택적으로 작동함이 입증되었다. 이에 대한 대응 전략으로는 Δ11q isoform을 타겟으로 하는 spliceosome 조절제(H3B-8800)가 제안되고 있다.

## 6. 리버전의 임상적 의미

### ctDNA 모니터링

리버전 돌연변이는 종양 조직보다 혈중 순환 종양 DNA(circulating tumor DNA, ctDNA)에서 먼저 또는 더 쉽게 검출될 수 있다. 이는 임상적으로 큰 의미를 갖는다. 종양 조직 생검은 침습적이고 공간적 편향(spatial bias)이 있는 반면, ctDNA는 종양의 전신적 부담을 반영한다. [[pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum|Pishvaian 2017]]에서 확인된 리버전 변이도 ctDNA에서 MAF 8%로 검출된 사례였다. [[pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt 2020]]의 대규모 분석 역시 상당 부분 ctDNA 기반 sequencing 데이터에 의존했다.

임상 실무에서 PARPi 치료 중 또는 치료 후 진행 시점에 ctDNA로 리버전을 모니터링하는 것은 차선 치료 전략 결정에 중요한 정보를 제공한다. 리버전이 확인된 환자는 PARP inhibitor에 다시 반응하기 어려우며, HR 복원이 동반되는 platinum 기반 항암제에 대한 반응도 저하된다. 반면 리버전이 확인되지 않은 경우에는 다른 내성 기전(53BP1/Shieldin 경로, fork protection, P-gp 유출 등)을 탐색하는 방향으로 전략을 전환할 수 있다.

### 리버전과 교차 내성

BRCA 리버전은 단순히 PARPi에 대한 내성만을 의미하지 않는다. HR이 복원되면 동일하게 HRD에 의존하는 **platinum 기반 항암제(cisplatin, carboplatin, oxaliplatin)에 대해서도 교차 내성(cross-resistance)**이 발생한다. 이는 [[edwards-2008-resistance-therapy-caused-intragenic-deletion|Edwards 2008]]과 [[sakai-2008-secondary-mutations-mechanism-cisplatin-resistance|Sakai 2008]] 모두 cisplatin 내성 세포주에서 리버전을 발견했다는 사실과도 일치한다. 반면 taxane계 약물처럼 DNA 손상이 아닌 미세소관(microtubule)을 표적으로 하는 항암제는 HR 복원의 영향을 받지 않으므로 교차 내성이 발생하지 않는다.

### 면역치료 가능성

리버전 돌연변이는 새로운 amino acid 서열, 즉 **neopeptide**를 생성한다. [[pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt 2020]]의 분석에서 리버전 특이적 neopeptide가 약 52%의 환자에서 MHC 분자를 통한 제시가 가능할 것으로 예측되었다. 이는 리버전 돌연변이가 면역원성(immunogenicity)을 가질 수 있으며, 이론적으로 종양 특이적 면역 반응의 타겟이 될 수 있음을 시사한다. 아직 전임상 단계이지만, 리버전 neopeptide를 이용한 neoantigen 기반 면역치료가 PARPi 내성 이후의 대안적 접근으로 탐색되고 있다.

## 참고문헌

- [[edwards-2008-resistance-therapy-caused-intragenic-deletion|Edwards 2008]] — BRCA2 내부 결실에 의한 HR 복원 및 cisplatin 내성의 최초 보고; Capan-1 세포주 및 임상 난소암 검체
- [[sakai-2008-secondary-mutations-mechanism-cisplatin-resistance|Sakai 2008]] — 다양한 이차 돌연변이 유형(결실, splice-site)에 의한 BRCA2 reading frame 복원 및 cisplatin 내성
- [[pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum|Pishvaian 2017]] — 췌장관선암에서 최초 보고된 BRCA2 리버전; ctDNA에서 MAF 8%로 검출
- [[pettitt-2020-clinical-brca12-reversion-analysis-identifies|Pettitt 2020]] — 300건 이상의 임상 BRCA1/2 리버전 대규모 분석; hotspot, microhomology, neopeptide MHC 제시 예측
- [[nesic-2024-brca1-secondary-splice-site-mutations-drive|Nesic 2024]] — BRCA1 exon 11 splice-site 이차 변이에 의한 Δ11q isoform 생성 및 PARPi 내성; ARIEL2/4 임상 코호트
- [[pettitt-2023-huwe1-defect-causes-parp-inhibitor|Pettitt 2023]] — HUWE1 소실에 의한 BRCA1-Δ11q 축적과 비-리버전 PARPi 내성; HGSOC 임상 확인
