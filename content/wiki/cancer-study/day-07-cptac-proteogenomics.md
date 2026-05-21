---
title: "Day 7: CPTAC Proteogenomics"
draft: false
---

# Day 7: CPTAC Proteogenomics

## 1. 왜 유전체만으로는 부족한가 — Central Dogma의 빈칸

분자생물학의 central dogma는 오랫동안 암 연구의 지적 토대였다. DNA에 변이가 생기면 비정상 RNA가 전사되고, 그 RNA로부터 비정상 단백질이 번역되어 세포 기능이 왜곡된다는 논리는 직관적으로 명쾌하다. 이 논리 위에서 지난 20여 년간의 암 유전체학은 TCGA(The Cancer Genome Atlas)와 같은 대규모 시퀀싱 프로젝트를 통해 수백 종의 암 드라이버 유전자를 카탈로그화했고, 임상에서는 targeted therapy의 시대를 열었다.

그러나 이 명쾌한 도식에는 중요한 빈칸이 있다. 세포의 실제 기능 단위는 단백질이며, DNA와 RNA의 변화가 단백질 수준으로 얼마나 충실하게 전달되는지는 결코 자명하지 않다. 번역(translation)은 단순한 정보 전달 과정이 아니라, microRNA, RNA-binding protein, ribosome 가용성 등 수많은 조절 층위가 개입하는 정교한 과정이다. 번역 이후에는 인산화(phosphorylation), 유비퀴틴화(ubiquitylation), 아세틸화(acetylation) 등의 번역후 변형(post-translational modification, PTM)이 단백질의 활성, 국재화, 수명을 결정한다. 암세포에서는 이 모든 층위가 동시에 교란되어 있다.

임상 현장에서 이 빈칸의 결과는 뚜렷하게 나타난다. 유전체 분석에서 특정 치료 표적이 드라이버로 지목되더라도, 정작 해당 환자의 종양에서 그 단백질이 기능적으로 활성화되어 있는지는 별개의 문제다. KRAS 변이가 있다고 해서 KRAS 신호 경로가 항상 단백질 수준에서 동등하게 활성화되어 있는 것은 아니며, RB1 유전자가 정상이라도 Rb 단백질이 이미 과인산화되어 기능을 상실했다면 그 종양은 사실상 RB1 소실과 유사한 생물학을 갖는다.

바로 이 빈칸을 채우기 위해 등장한 것이 proteogenomics다.

## 2. Proteogenomics란 — Multi-Omics 통합의 원리

Proteogenomics는 유전체(genomics), 전사체(transcriptomics), 단백질체(proteomics), 인산화단백질체(phosphoproteomics)를 동일한 종양 시료에서 측정하고 통합 분석하는 접근법이다. 이 분야를 대규모 임상 연구로 발전시킨 것이 NCI(National Cancer Institute)의 Clinical Proteomic Tumor Analysis Consortium, 즉 CPTAC이다.

CPTAC의 기술적 토대는 고분해능 mass spectrometry(MS)다. 현대적 MS 기반 proteomics는 단일 종양 시료에서 수천~수만 개의 단백질과 수만~수십만 개의 인산화 펩타이드를 정량할 수 있다. 여기에 tandem mass tag(TMT) 기반 다중화 기술을 적용하면 한 번의 실험에서 수십 개 시료를 동시에 비교할 수 있다. CPTAC은 이 기술을 동일한 종양 시료에서 얻은 WES(whole exome sequencing), RNA-seq 데이터와 통합함으로써, DNA 변이 → RNA 발현 → 단백질 존재량 → PTM 상태라는 정보 흐름의 각 단계를 동시에 관찰할 수 있게 했다.

이 통합의 핵심 질문은 세 가지다. 첫째, DNA 수준의 변화(copy number alteration, 점 변이 등)가 단백질 수준으로 얼마나 충실하게 전달되는가? 둘째, 단백질체 데이터가 전사체 데이터와 독립적으로 새로운 생물학적 아형(subtype)을 정의하는가? 셋째, 인산화 패턴으로 대표되는 신호전달 경로의 활성화 상태가 임상적으로 유용한 바이오마커를 제공하는가?

2014년 대장직장암 연구로 시작된 CPTAC의 여정은 이 세 질문 모두에 대해 일관되고 중요한 답을 제공해 왔다.

## 3. CNA Buffering — DNA 복제수가 단백질에 그대로 전달되지 않는 이유

암 유전체에서 copy number alteration(CNA), 즉 특정 염색체 영역의 증폭(amplification)이나 결실(deletion)은 매우 흔한 사건이다. 직관적으로는 유전자 복제수가 2배로 늘면 mRNA가 2배, 단백질도 2배가 되어야 할 것 같다. 그러나 CPTAC의 첫 번째 대장직장암 연구인 [[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]는 이 직관이 틀렸음을 처음으로 대규모로 입증했다. 95개 대장직장암 종양을 분석한 이 연구에서, 유전자 복제수 변화와 단백질 수준 사이에 통계적으로 유의미한 상관관계를 보이는 유전자는 전체의 **32%에 불과**했다. 나머지 68%의 유전자에서 복제수 변화는 단백질 수준으로 충실하게 전달되지 않았다.

이 현상을 **CNA buffering**이라 한다. 그 기전은 복합적이다.

첫째, ubiquitin-proteasome system(UPS)이 중심 역할을 한다. 세포 내 단백질 항상성(proteostasis) 기전은 유전자 복제수 증가로 인해 과잉 생산된 단백질을 빠르게 인식하고 분해한다. 단백질 복합체의 경우 화학량론적(stoichiometric) 균형이 중요한데, 복합체 파트너 없이 남는 잉여 서브유닛은 특히 빠르게 분해된다. 따라서 복잡한 단백질 복합체의 구성 성분을 암호화하는 유전자는 증폭되어도 단백질 수준이 거의 오르지 않는 경우가 많다.

둘째, 번역 조절이 mRNA 수준의 변화를 완충한다. mRNA 안정성, internal ribosome entry site 활용, codon usage bias 등 다양한 기전이 mRNA 풍부도와 번역 속도를 분리시킨다.

셋째, negative feedback loop가 존재한다. 단백질이 과잉 생산되면 그 단백질 자신이 자신의 생산을 억제하는 경우가 많다.

[[mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins 2016]]은 77개 TCGA 유방암 종양에서 이 완충 현상을 더욱 명확히 보여주었다. CNA가 mRNA 수준 변화로 전달되는 경우는 유전자의 68%였지만, 단백질 수준까지 유의미한 trans-effect를 미치는 경우는 13%에 불과했다. 이는 mRNA 발현 데이터만으로 단백질 기능을 추론하는 것이 얼마나 부정확한지를 수량적으로 보여준다.

CNA buffering의 임상적 함의는 중대하다. 유전자 증폭을 치료 표적으로 설정할 때, 실제 단백질 수준이 증가했는지, 그리고 그 단백질이 기능적으로 활성화되어 있는지를 단백질체 수준에서 확인하지 않으면 표적 선택이 잘못될 수 있다.

## 4. Proteogenomic 아형 — 전사체에서 보이지 않는 숨겨진 분류

암의 분자적 아형 분류는 지난 20년간 주로 mRNA 발현 프로파일에 기반해 왔다. 유방암의 PAM50 분류(Luminal A, Luminal B, HER2-enriched, Basal-like), 대장암의 CMS(Consensus Molecular Subtypes) 분류 등이 그 대표적인 예다. 이 분류들은 임상 예후와 치료 반응 예측에 중요한 도구가 되었다. 그러나 단백질체 데이터는 이 mRNA 기반 분류가 불완전하다는 것을 반복적으로 보여주었다.

[[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]에서 NMF(Non-negative Matrix Factorization) 기반 단백질체 클러스터링은 5개의 단백질체 아형을 식별했는데, 그 중 클러스터 C는 전사체 기반 분류에서는 전례가 없는 아형이었다. 클러스터 C는 EMT(Epithelial-Mesenchymal Transition) 마커를 강하게 발현하고 불량한 예후와 연관되었다. 이 아형이 mRNA 수준에서 보이지 않는다는 것은, 번역후 조절 또는 단백질 안정성의 차이가 전사체와 단백질체 사이의 분류 불일치를 만들어낸다는 것을 의미한다.

유방암 연구에서도 유사한 발견이 반복되었다. [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]은 122개 전향적 유방암 종양을 분석하여, PAM50으로 Luminal A로 분류된 종양 내에도 단백질체 수준에서 이질적인 생물학을 가진 하위 집단이 존재함을 보였다. 이 연구는 특히 IHC(immunohistochemistry)와 FISH(fluorescence in situ hybridization) 검사에서 경계선상 결과를 보인 종양에서 단백질체 데이터가 ERBB2(HER2) 발현 상태를 정확히 교정할 수 있음을 보여주었다. 즉, 단백질체 측정이 임상 진단의 불확실성을 해소할 수 있다.

[[zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Zhang 2016]]의 174개 고등급 난소암(HGSOC) 연구에서는 Histone H4의 K12/K16 이중 아세틸화가 HRD(Homologous Recombination Deficiency) 종양을 표시하는 바이오마커로 등장했다. 이 신호는 전사체 수준에서는 검출되지 않았으며, PTM 수준에서만 포착 가능한 생물학적 아형의 전형적인 사례다.

[[wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma|Wang 2021]]의 교모세포종 연구는 단일 핵 RNA-seq, 지질체(lipidome), 대사체(metabolome)를 포함한 10개 데이터 modality를 통합하여, Mesenchymal GBM 아형에서 종양 고유의 EMT와 ferroptosis 관련 지질 종의 풍부화를 발견했다. 이는 단백질체 데이터와 대사체 데이터의 통합이 단백질체 단독 분석보다 더 풍부한 생물학적 통찰을 제공함을 보여주는 사례다.

## 5. CPTAC의 여정 — 대장암(2014)부터 범암 2,002개(2022)까지

CPTAC 연구의 역사는 단일 암종의 개념 증명에서 대규모 범암(pan-cancer) 자원으로의 체계적인 확장 과정이다.

2014년 [[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]로 시작된 첫 번째 물결은 이미 TCGA에서 유전체가 분석된 종양들에 proteomics를 소급 적용하는 방식이었다. 이를 통해 유전체 정보가 풍부한 TCGA 코호트를 단백질체 관점에서 재조명하고, mRNA-단백질 불일치의 규모를 처음으로 정량화했다.

2016년에는 두 개의 중요한 연구가 연달아 발표되었다. [[mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins 2016]]은 유방암에서 somatic mutation과 신호전달 경로의 연결을 phosphoproteomics로 탐구했고, [[zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Zhang 2016]]은 HGSOC에서 PDGFRβ/RhoA 인산화 경로가 불량한 생존과 연관됨을 발견했다. 두 연구 모두 인산화 데이터 없이는 발견할 수 없었던 신호전달 취약점을 드러냈다.

2019년에는 [[gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape|Gillette 2019]]가 HiRIEF-LC-MS를 사용하여 45개 유방암 종양에서 388개의 신규 비코딩 펩타이드를 식별하고, 그 중 116개가 MHC class I neoantigen 후보임을 보였다. 같은 해 [[vasaikar-2019-proteogenomic-analysis-human-colon-cancer|Vasaikar 2019]]는 110명의 전향적 대장암 코호트에서 RB1 증폭이 역설적으로 CDK2 구동 Rb 과인산화를 통해 발암 드라이버로 작용한다는 것을 발견했다. DNA 복제수만 보면 RB1 증폭이 보호적인 것처럼 보이지만, 실제 단백질 수준의 기능은 반대였다.

2020년 [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]과 [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities|Gillette 2020]]은 각각 유방암과 폐선암을 전향적 CPTAC 코호트로 분석했다. Gillette 2020의 110개 LUAD(폐선암) 연구는 특히 주목할 만한 인산화 발견들을 포함했다. PTPN11의 Y62 잔기는 EGFR 변이 종양에서만 과인산화되었고, SOS1의 S1161은 KRAS 변이 종양에서만 과인산화되었다. 이처럼 특정 변이와 연결된 인산화 신호는 유전체 데이터와 인산화 데이터를 통합하지 않으면 발견할 수 없는, 변이 특이적 신호전달의 실질적 증거다. 또한 STK11 변이에 의한 immune-cold 표현형이 호중구 탈과립(neutrophil degranulation) 신호에 의해 구동된다는 것도 단백질 수준 전용 신호로 드러났다.

2021년 [[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]]은 108개 LSCC(폐편평세포암) 연구에서 중요한 표적 재식별을 이루어냈다. 8p11.23 게놈 좌위는 FGFR1 유전자를 포함하여 오랫동안 FGFR1이 이 영역의 드라이버로 지목되어 왔다. 그러나 multi-omics 통합 분석 결과, 이 좌위의 진정한 기능적 드라이버는 FGFR1이 아닌 **NSD3**(histone methyltransferase)였다. 이는 유전체 수준의 증폭 분석만으로는 실제 치료 표적을 잘못 지목할 수 있음을 직접적으로 보여준다.

2022년 [[zhang-2022-proteogenomic-characterization-2002-human-cancers|Zhang 2022]]는 CPTAC의 역사상 가장 대규모인 14개 암종 2,002개 종양의 범암 proteogenomic 자원을 구축했다. 이 연구에서 11개의 범암 단백질체 아형이 정의되었으며, 12개의 비정규 MYC 경로 활성화자—ARID1A, PTEN, RB1 등 전통적인 종양억제인자들—가 직접적인 MYC 증폭 없이도 MYC 경로를 활성화할 수 있음이 밝혀졌다. 더 놀라운 발견은 TP53 전사 표적의 발현 signature가 전사체에서는 뚜렷하게 검출되지만 **단백질체에서는 검출되지 않는다**는 것이었다. 이는 TP53 변이의 기능적 결과가 전사체와 단백질체 사이에서 근본적으로 다른 방식으로 나타남을 의미하며, 두 레이어의 독립적인 정보 가치를 다시 한번 강조한다.

[[li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers|Li 2023]]은 10개 암종 1,064개 종양의 범암 분석에서 KEAP1/NFE2L2 변이가 암종을 가로질러 가장 보존된 trans-effect를 나타내는 변이임을 발견했다. 또한 EGFR과 STK11이 암종 간 가장 divergent한 효과를 보이는 변이로 식별되었는데, 이는 합성치사(synthetic lethality) 표적 발굴에 중요한 정보다. RB1 변이 종양에서는 CDK4/6이 아닌 **CDK2 의존성**이 증가함을 단백질 수준 데이터로 확인했는데, 이는 RB1 변이 종양에 CDK4/6 억제제보다 CDK2 억제제를 선택해야 한다는 임상적 함의를 갖는다.

## 6. Phospho-Rb 바이오마커 — CDK4/6 억제제 반응 예측

CDK4/6 억제제(palbociclib, ribociclib, abemaciclib)는 HR+/HER2- 유방암의 표준 치료로 자리 잡았다. 이 약물들의 주요 표적은 Rb(Retinoblastoma protein)다. CDK4/6는 cyclin D와 복합체를 형성하여 Rb를 인산화(phosphorylation)하고, 과인산화된 Rb는 E2F 전사인자를 방출하여 세포 주기 진입을 촉진한다. CDK4/6 억제제는 이 인산화를 차단함으로써 Rb를 저인산화 상태, 즉 활성 형태로 유지하여 세포 주기를 G1에서 억제한다.

따라서 CDK4/6 억제제가 효과적이려면 기능적인 Rb 단백질이 존재해야 한다. 임상에서는 RB1 유전자의 상태(변이, 결실 유무)가 표준 바이오마커로 고려되지만, CPTAC 연구들은 이것이 불충분함을 반복적으로 보여주었다.

[[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]은 Rb 단백질 수준 자체, 그리고 특히 Rb의 인산화 상태(phospho-Rb)가 RB1 유전형보다 CDK4/6 억제제 반응을 더 잘 예측한다는 것을 보였다. 이는 매우 직관적인 결과다. RB1 유전자가 정상이더라도, 여러 이유로 Rb 단백질 수준이 낮거나 이미 높게 인산화되어 있다면 그 종양은 CDK4/6 억제제에 반응하지 않을 것이다. 반대로 RB1 유전자 발현에 약간의 이상이 있더라도 단백질 수준에서 기능적인 저인산화 Rb가 충분히 존재한다면 CDK4/6 억제제가 효과적일 수 있다.

[[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]]은 LSCC에서 이 원칙을 폐암으로 확장했다. Phospho-Rb가 RB1 유전형보다 우수한 CDK4/6 억제제 반응 바이오마커임을 확인했고, 이는 유방암에서의 발견이 다른 암종에서도 재현되는 범암 원칙임을 시사한다.

[[vasaikar-2019-proteogenomic-analysis-human-colon-cancer|Vasaikar 2019]]에서는 더 흥미로운 역설이 발견되었다. RB1 유전자가 **증폭**(copy number gain)된 종양에서도 Rb 단백질이 CDK2에 의해 과인산화되어 있었다. 이 경우 단순히 RB1 복제수를 보면 Rb 기능이 보존되어 있다고 오해할 수 있지만, 실제 단백질 기능은 CDK2 의존적 인산화에 의해 억압되어 있었다. 이는 CDK4/6 억제제보다 CDK2 억제제가 더 적절한 치료 선택일 수 있음을 함의한다.

이 일련의 발견들은 phospho-Rb를 단순한 연구 도구가 아닌, 임상 의사결정을 위한 실질적 바이오마커로 개발해야 한다는 강력한 근거를 제공한다.

## 7. 단백질체가 바꾸는 임상 의사결정

CPTAC 연구들의 임상적 함의를 구체적으로 정리하면 다음과 같다.

**표적 식별의 재정의.** [[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]]에서 FGFR1 대신 NSD3가 진정한 드라이버로 식별된 사례처럼, 단백질체 데이터는 유전체 기반 표적 선택의 오류를 교정할 수 있다. 이는 임상시험 설계에서 환자 선정 기준을 유전체 바이오마커에서 단백질체 바이오마커로 보완해야 함을 의미한다.

**진단 불확실성 해소.** [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]에서 IHC/FISH 경계선 사례의 HER2 상태를 단백질체 데이터가 교정한 사례는, 단백질 정량이 임상 진단의 보조 도구로 기능할 수 있음을 보여준다.

**신호전달 경로 활성화 상태의 직접 측정.** 변이 여부가 아닌 실제 인산화 수준으로 경로 활성화를 측정함으로써, 진정으로 해당 경로에 의존적인 종양을 선별할 수 있다. [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities|Gillette 2020]]에서 EGFR 변이 종양의 PTPN11 Y62 과인산화, KRAS 변이 종양의 SOS1 S1161 과인산화는 변이 특이적 신호전달의 phospho 수준 증거로, 각 변이 맥락에서 어떤 하위 표적을 억제해야 하는지에 대한 정보를 제공한다.

**MHC 네오항원 발굴.** [[gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape|Gillette 2019]]에서 비코딩 영역 유래 신규 펩타이드 116개가 MHC class I 결합 가능성을 보인 것은, 면역치료 표적으로서의 네오항원 발굴에 단백질체 데이터가 필수적임을 보여준다. RNA-seq만으로는 이 펩타이드들의 실제 번역 여부를 확인할 수 없다.

**IMR(Immune, Metabolic, Ribosomal) 프레임.** [[wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma|Wang 2021]]의 GBM 연구에서 lipidome/metabolome 통합은 ferroptosis 취약성을 가진 Mesenchymal GBM 하위 집단을 식별했다. 이처럼 단백질체와 대사체의 통합은 기존에 치료 표적이 없던 암종에서 새로운 취약점을 드러낼 수 있다.

## 8. 참고문헌

- [[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]] — 대장직장암 최초 CPTAC 연구, mRNA-단백질 불일치 원칙 확립
- [[mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins 2016]] — 유방암 CNA trans-effect의 단백질 수준 완충 정량화
- [[zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Zhang 2016]] — 고등급 난소암 HGSOC, Histone H4 이중 아세틸화 HRD 바이오마커
- [[gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape|Gillette 2019]] — 유방암, 비코딩 유래 MHC class I 네오항원 후보 식별
- [[vasaikar-2019-proteogenomic-analysis-human-colon-cancer|Vasaikar 2019]] — 전향적 대장암, RB1 증폭 역설과 CDK2 구동 Rb 과인산화
- [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]] — 전향적 유방암 CPTAC, phospho-Rb가 CDK4/6i 반응 예측 바이오마커
- [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities|Gillette 2020]] — LUAD 폐선암, 변이 특이적 인산화 신호 발견
- [[wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma|Wang 2021]] — GBM 교모세포종, 10개 modality 통합 최대 데이터 밀도 연구
- [[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]] — LSCC 폐편평세포암, NSD3가 진정한 8p11.23 드라이버
- [[zhang-2022-proteogenomic-characterization-2002-human-cancers|Zhang 2022]] — 14개 암종 2,002개 종양 범암 자원, TP53 signature의 단백질체 소실
- [[li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers|Li 2023]] — 범암 발암 드라이버, RB1 변이와 CDK2 의존성
