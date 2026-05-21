---
title: "Day 2: PARP 내성 — 리버전 이외 메커니즘"
draft: false
---

# Day 2: PARP 내성 — 리버전 이외 메커니즘

## 1. 리버전 이외의 내성이 왜 중요한가

Day 1에서 살펴본 리버전 돌연변이는 PARPi 내성의 가장 잘 특성화된 기전이지만, 임상에서 내성을 획득한 모든 환자를 설명하지는 못한다. 실제로 PARPi 치료 후 진행한 종양의 상당 비율에서 리버전 돌연변이가 검출되지 않는다. 이는 **리버전 이외의 경로**가 독립적으로 또는 리버전과 병존하며 내성을 유발함을 의미한다.

리버전 이외의 내성 기전은 크게 네 가지 범주로 구분된다. 첫째, HR을 간접적으로 복원하는 경로(53BP1/Shieldin 소실, end resection 조절). 둘째, HR 복원 없이 복제 포크 안정화를 통해 생존하는 경로. 셋째, PARP1 단백질 자체의 변이로 trapping을 회피하는 경로. 넷째, 약물이 표적에 도달하지 못하게 하는 약리학적 기전(P-glycoprotein 유출) 및 후성유전적 HRD 역전이다. 이 다양성은 임상적으로 중요한 함의를 갖는다. 어떤 내성 기전이 작동 중인지에 따라 차선 치료의 선택이 달라지기 때문이다.

## 2. DNA 말단 보호와 53BP1/Shieldin 경로

HR이 가능하려면 DSB 말단에서 end resection이 일어나야 한다. End resection은 5' 말단의 핵산을 절삭하여 3' ssDNA overhang을 만들고, 이것이 RAD51에 의해 코팅되어 자매 염색분체에 대한 가닥 침입을 준비한다. 이 과정에서 **53BP1**과 **BRCA1**은 길항 관계에 있다. BRCA1은 end resection을 촉진하고, 53BP1은 이를 억제한다. BRCA1이 결핍된 세포에서는 53BP1의 억제 효과가 우세해지기 때문에 end resection이 차단되고 HR이 불가능해진다. 이것이 PARPi 감수성의 전제가 된다.

따라서 BRCA1 결핍 세포에서 **53BP1 자체가 소실**되면 어떻게 될까? End resection을 억제하는 단백질이 제거되므로 HR이 부분적으로 복원된다. 이는 BRCA1 변이를 보유한 BRCA1-null 세포에서 PARPi 내성으로 이어진다. [[jaspers-2013-loss-53bp1-causes-parp-inhibitor|Jaspers 2013]]은 olaparib 내성 마우스 유방 종양 11개 중 3개에서 Trp53bp1 체세포 변이를 발견함으로써 이 기전이 in vivo에서 실제로 선택된다는 것을 최초로 보여주었다. 이 발견은 BRCA1 결핍 세포에서 53BP1 소실이 충분한 HR 복원을 일으켜 세포 생존이 가능해진다는 이론적 예측을 임상 전 증거로 뒷받침했다.

### Shieldin 복합체: 53BP1의 분자적 팔

53BP1이 end resection을 억제한다는 것은 오래전부터 알려졌으나, 그 구체적인 분자 기전은 오랫동안 불분명했다. [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna|Noordermeer 2018]]은 이 빈칸을 채우는 핵심 발견을 했다. 53BP1의 하류 effector로 작용하는 **shieldin 복합체**를 발견한 것이다. Shieldin은 SHLD1, SHLD2, SHLD3, REV7의 네 단백질로 구성된다. 이 중 SHLD2의 OB-fold 도메인이 ssDNA에 약 11 nM의 Kd로 직접 결합하여 노출된 DNA 말단을 물리적으로 덮어 추가적인 절삭을 막는다.

Shieldin의 어느 구성 요소가 소실되더라도 53BP1 소실과 같은 방식으로 end resection이 복원되고, BRCA1 결핍 세포에서 HR이 부분적으로 살아난다. 임상 데이터에서도 shieldin 구성 요소(특히 REV7/MAD2L2)의 소실이 PARPi 내성 BRCA1 돌연변이 난소암에서 보고된 바 있다. 53BP1-shieldin 축의 발견은 HR과 NHEJ 선택의 분자적 회로를 완성했고, 동시에 새로운 내성 기전의 지형을 열었다.

### 임상적 함의: 53BP1/Shieldin 소실 시 어떤 약물을 선택할 것인가

흥미롭게도 [[jaspers-2013-loss-53bp1-causes-parp-inhibitor|Jaspers 2013]]은 실용적인 발견을 함께 제시했다. P-glycoprotein(P-gp)의 기질이 아닌 PARPi인 **AZD2461**은 53BP1 소실에 의한 내성 클론에서도 100일간 종양 성장을 억제했다. 이는 53BP1 소실에 의한 내성이 P-gp를 통한 약물 유출 기전과 복합적으로 작용할 가능성을 시사하며, 약물 선택 시 P-gp 기질 여부가 중요한 고려 사항임을 보여준다.

## 3. 복제 포크 안정화와 내성

PARPi의 세포 독성은 SSB 처리 지연 및 replication fork collapse에서 비롯된다. BRCA1/2는 DSB 수리 외에도 **정지된 복제 포크(stalled replication fork)를 안정화하는 기능**을 가진다. MRE11과 같은 뉴클레아제가 정지된 포크를 공격하여 절삭하는 것을 BRCA2가 RAD51을 통해 방어하는 구조이다. BRCA2가 결핍되면 이 방어가 무너지고 포크가 분해되어 세포 독성이 발생한다.

그렇다면 BRCA1/2 결핍 상태에서도 복제 포크를 안정화할 수 있는 **대안적 경로**가 활성화된다면 어떻게 될까? HR 자체가 복원되지 않더라도 포크가 안정화되면 PARPi에 의한 세포 독성을 회피할 수 있다. [[haynes-2018-restored-replication-fork-stabilization-mechanism|Haynes 2018]]은 이 fork stabilization 복원 경로를 독립적인 PARPi 내성 기전으로 체계화했다. RADX, BOD1L, HLTF, FANCJ 등의 단백질이 BRCA1/2와 독립적으로 복제 포크를 안정화할 수 있으며, 이 경로들이 upregulation되면 HR 없이도 포크 보호가 이루어진다.

이 내성 기전은 임상적으로 탐지하기 까다롭다. HR이 실제로 복원되지 않았기 때문에 **표준적인 HR 기능 바이오마커인 RAD51 foci assay나 HRD genomic score로는 이 내성을 감지할 수 없다**. 포크 안정화 복원에 의한 내성을 극복하기 위해서는 복제 포크 응답 경로를 겨냥하는 약물이 필요하다. ATR 억제제, CHK1 억제제, WEE1 억제제가 서로 다른 kinase 경로를 통해 포크 안정화를 방해함으로써 이 내성을 재감작시킬 수 있다는 근거가 제시되었다.

## 4. PARP1 자체의 변이 — Trapping 없는 내성

Day 1에서 설명한 PARPi의 핵심 세포 독성 원리는 **PARP trapping**이다. 만약 PARP1 단백질 자체가 변이를 가져 약물이 결합하더라도 trapping이 일어나지 않는다면 어떻게 될까? 이것이 PARP1 표적 변이에 의한 내성이다.

[[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify|Pettitt 2018]]은 genome-wide CRISPR-Cas9 스크린을 통해 이 기전을 발견했다. PARP1의 특정 점변이들이 촉매 활성은 유지하면서도 PARPi에 의한 DNA trapping을 해제시키는 것으로 나타났다. 즉, PARP1이 여전히 SSB 감지 및 PAR 합성을 수행하지만, PARPi가 결합해도 PARP1이 DNA에 고착되지 않고 정상적으로 해리된다. 이 변이는 임상 샘플에서도 확인되었는데, R591C 변이가 PARP inhibitor 치료 후 내성 종양에서 발견된 임상적 사례가 보고되었다.

PARP1 변이에 의한 내성의 중요한 특성은, HR이 복원되지 않았다는 점이다. 따라서 이 세포들은 DNA 손상을 부정확하게 수리하는 취약성을 여전히 보유한다. 실제로 [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify|Pettitt 2018]]은 PARP1 변이 세포가 **topoisomerase I 억제제(irinotecan, topotecan)에 대한 감수성을 유지**함을 보여주었다. Topoisomerase I 억제제는 PARP trapping 의존적이 아닌 독립적인 기전으로 세포 독성을 유발하기 때문이다. 이는 PARP1 변이에 의한 PARPi 내성이 확인된 환자에서 topoisomerase I 억제제로의 전환이 합리적인 대안임을 시사한다.

## 5. 약물 유출 펌프 — P-Glycoprotein

앞서 설명한 기전들은 모두 DNA 수리 경로나 PARP1 자체의 변화에 관한 것이었다. 그러나 PARPi 내성은 이와 전혀 다른 축, 즉 **약리학적 기전**을 통해서도 발생한다. 약물이 아무리 좋아도 세포 안에 충분한 농도로 도달하지 못하면 효과를 낼 수 없다.

**ABCB1(ATP-binding cassette transporter B1)**, 흔히 P-glycoprotein(P-gp) 또는 MDR1으로 불리는 유출 펌프가 PARPi를 세포 밖으로 능동 수송한다. [[vaidyanathan-2016-abcb1-mdr1-induction-defines-common|Vaidyanathan 2016]]은 ABCB1 과발현이 paclitaxel과 olaparib 모두에 대한 공통 내성 기전으로 작용함을 규명했다. 흥미롭게도 이 기전은 PARPi마다 다르게 적용된다. Olaparib과 rucaparib은 P-gp의 기질이어서 유출의 영향을 받지만, **veliparib과 AZD2461은 P-gp 비기질**로서 과발현 상태에서도 세포 내 농도가 유지된다. P-gp 억제제인 elacridar와 verapamil을 사용하면 olaparib에 대한 내성이 완전히 역전됨이 확인되었다.

임상적으로 P-gp 내성은 탐지 가능하고 극복 가능한 기전이다. ABCB1 발현 수준이 바이오마커로 활용될 수 있으며, P-gp를 우회하는 PARPi를 선택하거나 P-gp 억제제를 병용하는 전략이 가능하다. 그러나 P-gp 억제제의 임상 적용은 독성 우려로 제한적이었으며, P-gp 비기질 PARPi의 개발이 보다 현실적인 방향으로 여겨지고 있다.

## 6. 후성유전적 내성 — RAD51C 메틸화 소실

모든 내성 기전이 DNA 서열의 변화(돌연변이)에서 비롯되는 것은 아니다. **후성유전적(epigenetic)** 변화만으로도 HRD 상태가 역전될 수 있다. RAD51C는 RAD51 paralogue 중 하나로, HR에서 RAD51 필라멘트 형성을 돕는 단백질이다. 일부 BRCA1/2 wild-type 난소암에서 RAD51C 프로모터의 **CpG methylation**이 유전자 발현을 억제하여 HRD 표현형을 유발하고 PARPi 감수성을 부여한다.

[[nesic-2021-acquired-rad51c-promoter-methylation-loss|Nesic 2021]]은 이러한 methylation 기반 HRD 종양에서 메틸화 소실에 의한 내성 획득 기전을 규명했다. 핵심 발견은 다음과 같다. PARPi 치료에 의한 선택압 하에서 RAD51C의 두 allele 중 하나가 methylation을 소실하고, 나머지 allele은 loss of heterozygosity(LOH)에 의해 제거된다. 결과적으로 세포는 methylation이 없는 단일 RAD51C allele만을 보유하게 되며, 이것만으로도 충분한 RAD51C 발현을 회복하여 HR을 복원한다. 이 기전은 유전자 서열은 변하지 않지만 epigenome의 변화만으로 HR 기능이 복원되는 사례이다.

두 개의 독립적인 patient-derived xenograft(PDX) 계통에서 이 기전이 독립적으로 재현됨으로써, RAD51C methylation 소실이 반복적이고 선택적인 내성 경로임이 확인되었다. 임상적으로 중요한 점은, 이 내성은 **DNA sequencing으로는 검출할 수 없고 methylation assay가 필요**하다는 것이다. RAD51C allele의 methylation zygosity, 즉 두 allele 모두 methylation되어 있는지 하나만인지를 확인하는 것이 핵심 바이오마커가 된다.

## 7. 내성의 클론 이질성 — 왜 단일 약물로는 부족한가

지금까지 살펴본 내성 기전들은 마치 서로 배타적인 것처럼 기술되었다. 그러나 실제 종양은 훨씬 복잡하다. 하나의 종양 안에 다양한 내성 기전을 보유한 여러 클론(clone)이 공존할 수 있으며, 치료는 각 클론에 서로 다른 선택압을 가한다.

[[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp|Färkkilä 2021]]은 이 클론 이질성(clonal heterogeneity)의 문제를 직접적으로 다루었다. 단일 BRCA1/TP53-null 세포주에서 유래한 7개의 single-cell resistant clone을 개별적으로 분석한 결과, 각 클론은 서로 다른 내성 기전을 보유하고 있었다. 일부 클론은 53BP1 또는 REV7 소실에 의존했고, 다른 클론은 PARP1 하향조절, 또 다른 클론은 CHK1 의존적 fork protection을 통해 생존했다. 기원이 같은 세포에서 이렇게 다양한 내성 기전이 독립적으로 출현한다는 것은 PARPi 치료가 종양 진화에 강력한 다방향적 선택압을 가한다는 것을 의미한다.

각 클론은 해당 내성 기전에 따른 **기전 특이적 취약점(mechanism-specific vulnerability)**을 가졌다. 53BP1/REV7 소실 클론은 ATR 억제제에 감수적이었고, CHK1 의존적 포크 안정화 클론은 CHK1 억제제에 감수적이었다. CDK4/6 억제제와 HDAC 억제제도 클론에 따라 차별적인 효과를 보였다. 그러나 **모든 내성 클론을 동시에 억제하는 단일 약물은 존재하지 않았다**. HGSOC 환자 코호트에서도 이 클론 이질성이 임상 수준에서 확인되었다.

[[li-2020-parp-inhibitor-resistance-underlying-mechanisms|Li 2020]]은 이러한 다양한 PARPi 내성 기전을 다섯 가지 축으로 체계화했다: HR 복원(end-resection 조절자 및 RAD51 수준), 리버전 돌연변이, fork protection, 후성유전적 변화 및 PARylation 변화, 약리학적 기전(P-gp 유출). 이 분류는 내성 진단 접근법을 구조화하는 데 유용하다. 특히 RAD51 foci assay가 BRCA 유전형보다 HR 기능을 더 직접적으로 반영하는 **기능적 바이오마커**로서 우수함을 강조했다.

[[zou-2025-clinical-approaches-overcome-parp-inhibitor|Zou 2025]]는 이 분야의 가장 최신 포괄적 리뷰로, 기존에 알려진 내성 기전에 더해 대사 재프로그래밍(metabolic reprogramming), non-coding RNA 조절, 종양 미세환경(tumor microenvironment, TME) 매개 내성을 새로운 축으로 추가했다. 또한 내성 극복을 위한 병용 전략으로 PARPi + immune checkpoint inhibitor(ICI, cGAS-STING 경로 통해), DDR 억제제(ATR 억제제, WEE1 억제제), 후성유전 약물, VEGFR/PI3K 억제제 병용을 제시했다. AI를 이용하여 설계된 PARP1-binding protein이 유효 약물 용량을 78%까지 감소시킬 수 있다는 보고도 포함되어, 미래의 내성 극복 방향을 제시한다.

### 내성 기전별 진단 및 치료 전략 요약

| 내성 기전 | HR 복원 여부 | 검출 방법 | 치료 대응 |
|----------|------------|---------|---------|
| BRCA 리버전 | O | ctDNA sequencing | Platinum 재도전 불가; topoisomerase 억제제, taxane |
| 53BP1/Shieldin 소실 | 부분적 | IHC, WES | ATR 억제제, CHK1 억제제; P-gp 비기질 PARPi |
| PARP1 trapping 변이 | X | WES (R591C 등) | Topoisomerase I 억제제 |
| Fork stabilization 복원 | X | 기능적 fork assay | ATR 억제제, CHK1 억제제, WEE1 억제제 |
| P-gp 유출 (ABCB1) | X | ABCB1 발현, IHC | P-gp 비기질 PARPi (veliparib, AZD2461); P-gp 억제제 |
| RAD51C 탈메틸화 | O | Methylation assay | Platinum 재도전 어려움; 병용 전략 탐색 |
| 클론 이질성 | 기전 혼재 | 단일세포 분석 | 합리적 병용 요법 필수 |

## 참고문헌

- [[jaspers-2013-loss-53bp1-causes-parp-inhibitor|Jaspers 2013]] — in vivo 마우스 유방 종양에서 53BP1 체세포 변이가 PARPi 내성을 유발; P-gp 비기질 AZD2461의 내성 억제 확인
- [[noordermeer-2018-shieldin-complex-mediates-53bp1-dependent-dna|Noordermeer 2018]] — 53BP1 하류 effector인 shieldin 복합체(SHLD1/2/3, REV7) 발견; SHLD2 OB-fold의 ssDNA 결합(Kd ~11 nM)
- [[pettitt-2018-genome-wide-high-density-crispr-cas9-screens-identify|Pettitt 2018]] — CRISPR 스크린으로 PARP trapping을 소실시키는 PARP1 점변이 발견; topoisomerase I 억제제 감수성 유지 확인
- [[vaidyanathan-2016-abcb1-mdr1-induction-defines-common|Vaidyanathan 2016]] — ABCB1/P-gp 과발현이 olaparib/rucaparib에 대한 공통 내성 기전; P-gp 비기질 PARPi로 내성 극복
- [[haynes-2018-restored-replication-fork-stabilization-mechanism|Haynes 2018]] — fork stabilization 복원을 독립적 PARPi 내성 기전으로 규명; ATRi/CHK1i/WEE1i 대응 전략
- [[nesic-2021-acquired-rad51c-promoter-methylation-loss|Nesic 2021]] — RAD51C 프로모터 탈메틸화에 의한 후성유전적 HRD 역전 및 PARPi 내성; PDX 모델에서 재현
- [[frkkil-2021-heterogeneity-clonal-evolution-acquired-parp|Färkkilä 2021]] — 단일 세포주 유래 7개 내성 클론이 서로 다른 기전을 보유; 클론 이질성과 기전 특이적 취약점 규명
- [[li-2020-parp-inhibitor-resistance-underlying-mechanisms|Li 2020]] — PARPi 내성의 5축 분류 체계; RAD51 foci assay의 기능적 바이오마커로서의 우수성
- [[zou-2025-clinical-approaches-overcome-parp-inhibitor|Zou 2025]] — 대사/ncRNA/TME 축 추가; PARPi + ICI, DDR 억제제, 후성유전 약물 병용 전략; AI 설계 PARP1-binding protein
