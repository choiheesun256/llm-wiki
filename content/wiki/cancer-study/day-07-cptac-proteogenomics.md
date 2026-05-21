---
title: "Day 7: CPTAC Proteogenomics"
draft: false
---

# Day 7: CPTAC Proteogenomics

## 1. 왜 유전체만으로는 부족한가 — Central Dogma의 빈칸

분자생물학의 central dogma 위에서 TCGA 같은 대규모 시퀀싱 프로젝트는 수백 종의 암 드라이버 유전자를 카탈로그화하고 targeted therapy 시대를 열었다. 그러나 세포의 실제 기능 단위는 단백질이며, DNA 변화가 단백질 수준으로 얼마나 충실하게 전달되는지는 결코 자명하지 않다. 번역(translation)에는 microRNA, RNA-binding protein, ribosome 가용성이 개입하고, 번역 이후에는 인산화(phosphorylation), 유비퀴틴화(ubiquitylation), 아세틸화(acetylation) 같은 PTM이 단백질 활성·국재화·수명을 결정한다. 임상에서도 KRAS 변이가 있다고 해서 신호 경로가 항상 동등하게 활성화된 것은 아니며, RB1이 정상이라도 Rb가 이미 과인산화되어 기능을 상실했다면 그 종양은 사실상 RB1 소실과 동일한 생물학을 갖는다. 이 빈칸을 채우기 위해 등장한 것이 proteogenomics다.

## 2. Proteogenomics란 — Multi-Omics 통합의 원리

Proteogenomics는 유전체, 전사체, 단백질체, 인산화단백질체를 동일한 종양 시료에서 통합 분석하는 접근법이다. NCI의 CPTAC은 고분해능 mass spectrometry와 TMT 기반 다중화 기술로 단일 시료에서 수만 개 단백질과 수십만 개 인산화 펩타이드를 정량하고, WES·RNA-seq 데이터와 통합한다. 핵심 질문은 세 가지다: (1) CNA가 단백질 수준으로 얼마나 전달되는가, (2) 단백질체 데이터가 전사체와 독립적으로 새로운 아형을 정의하는가, (3) 인산화 패턴이 임상적으로 유용한 바이오마커를 제공하는가.

## 3. CNA Buffering — DNA 복제수가 단백질에 그대로 전달되지 않는 이유

[[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]은 95개 대장직장암에서 유전자 복제수 변화와 단백질 수준 사이에 유의미한 상관관계가 있는 유전자가 **32%에 불과**하다는 것을 처음으로 대규모로 입증했다. 이 현상을 **CNA buffering**이라 한다.

그 기전은 복합적이다. 첫째, ubiquitin-proteasome system(UPS)이 과잉 생산된 단백질, 특히 복합체 파트너 없이 남는 잉여 서브유닛을 빠르게 분해한다. 둘째, mRNA 안정성, codon usage bias 등이 mRNA 풍부도와 번역 속도를 분리한다. 셋째, 단백질 과잉이 자신의 생산을 억제하는 negative feedback loop가 작동한다.

[[mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins 2016]]은 77개 유방암에서 이를 정량화했다. CNA가 mRNA 수준 변화로 전달되는 유전자는 68%였지만, 단백질 수준까지 유의미한 trans-effect를 보이는 경우는 **13%**에 불과했다. 유전자 증폭을 치료 표적으로 설정할 때, 단백질 수준의 기능 확인 없이는 표적 선택이 잘못될 수 있다는 중요한 임상적 함의를 갖는다.

## 4. Proteogenomic 아형 — 전사체에서 보이지 않는 숨겨진 분류

mRNA 기반 분류(유방암 PAM50, 대장암 CMS 등)는 중요한 도구지만, 단백질체 데이터는 이 분류가 불완전함을 반복적으로 보여준다.

[[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]에서 단백질체 클러스터링은 전사체 기반 분류에는 없는 클러스터 C를 식별했다. 이 아형은 EMT 마커를 강하게 발현하고 불량한 예후를 보였는데, mRNA 수준에서는 구별되지 않았다.

[[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]은 PAM50 Luminal A로 분류된 종양 내에도 단백질체 수준에서 이질적인 하위 집단이 존재함을 보였고, IHC/FISH 경계선 사례의 HER2 상태를 단백질체 데이터가 교정할 수 있음을 증명했다.

[[zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Zhang 2016]]의 HGSOC 연구에서는 Histone H4의 K12/K16 이중 아세틸화가 전사체에서 검출되지 않는 PTM 수준 전용 HRD 바이오마커로 등장했다. [[wang-2021-proteogenomic-metabolomic-characterization-human-glioblastoma|Wang 2021]]은 10개 data modality를 통합하여 Mesenchymal GBM에서 ferroptosis 관련 지질 종의 풍부화를 발견하며 단백질체-대사체 통합의 가치를 보여주었다.

## 5. CPTAC의 여정 — 대장암(2014)부터 범암 2,002개(2022)까지

CPTAC의 역사는 단일 암종 개념 증명에서 대규모 범암 자원으로의 체계적 확장이다.

**2014–2016년 (개념 확립).** [[zhang-2014-proteogenomic-characterization-colon-rectal-cancer|Zhang 2014]]로 시작하여 CNA buffering 원칙을 정립했고, [[mertins-2016-proteogenomics-connects-somatic-mutations-signalling|Mertins 2016]]과 [[zhang-2016-integrated-proteogenomic-characterization-human-high-grade|Zhang 2016]]은 각각 유방암과 난소암에서 인산화 데이터 없이는 발견할 수 없었던 신호전달 취약점을 드러냈다. Zhang 2016은 HGSOC에서 PDGFRβ/RhoA 인산화 경로가 불량한 생존과 연관됨을 발견했다.

**2019년 (전향적 코호트 전환).** [[gillette-2019-breast-cancer-quantitative-proteome-proteogenomic-landscape|Gillette 2019]]는 유방암에서 388개의 신규 비코딩 펩타이드를 식별하고 116개가 MHC class I neoantigen 후보임을 보였다. [[vasaikar-2019-proteogenomic-analysis-human-colon-cancer|Vasaikar 2019]]는 RB1 **증폭**이 역설적으로 CDK2 구동 Rb 과인산화를 통해 발암 드라이버로 작용한다는 것을 발견했다—DNA 복제수만 보면 보호적으로 보이지만 실제 단백질 기능은 반대였다.

**2020–2021년 (표적 재식별).** [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]은 phospho-Rb가 CDK4/6 억제제 반응 예측에서 RB1 유전형보다 우월함을 보였다. [[gillette-2020-proteogenomic-characterization-reveals-therapeutic-vulnerabilities|Gillette 2020]]의 LUAD 연구는 PTPN11 Y62가 EGFR 변이 종양에서, SOS1 S1161이 KRAS 변이 종양에서만 과인산화된다는 변이 특이적 신호전달을 발견했다. [[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]]은 LSCC에서 8p11.23 좌위의 드라이버가 오랫동안 지목되어 온 FGFR1이 아닌 **NSD3**(histone methyltransferase)임을 밝혔다—유전체 수준 분석만으로는 치료 표적을 잘못 지목할 수 있음을 직접 보여준 사례다.

**2022–2023년 (범암 통합).** [[zhang-2022-proteogenomic-characterization-2002-human-cancers|Zhang 2022]]는 14개 암종 2,002개 종양의 범암 자원을 구축하고 11개 범암 단백질체 아형을 정의했다. 특히 TP53 전사 표적의 signature가 전사체에서는 뚜렷하게 검출되지만 **단백질체에서는 검출되지 않는다**는 발견은 두 레이어의 독립적 정보 가치를 강조한다. [[li-2023-pan-cancer-proteogenomics-connects-oncogenic-drivers|Li 2023]]은 RB1 변이 종양에서 CDK4/6이 아닌 **CDK2 의존성**이 증가함을 단백질 수준에서 확인하여, RB1 변이 종양에 CDK2 억제제를 우선해야 한다는 임상 함의를 도출했다.

## 6. Phospho-Rb 바이오마커 — CDK4/6 억제제 반응 예측

CDK4/6 억제제(palbociclib, ribociclib, abemaciclib)는 HR+/HER2- 유방암의 표준 치료다. CDK4/6는 Rb를 인산화하여 E2F를 방출하고 세포 주기를 촉진하므로, 억제제의 효과는 기능적인 Rb가 존재할 때만 나타난다.

CPTAC 연구들은 RB1 유전자 상태보다 **phospho-Rb 수준**이 치료 반응을 더 잘 예측한다는 것을 반복적으로 보여주었다. [[krug-2020-proteogenomic-landscape-breast-cancer-tumorigenesis|Krug 2020]]에서 Rb 단백질 수준과 인산화 상태가 RB1 유전형보다 반응을 더 잘 예측했고, [[satpathy-2021-proteogenomic-portrait-lung-squamous-cell|Satpathy 2021]]은 이 원칙을 LSCC에서도 재현하여 범암 원칙임을 시사했다. [[vasaikar-2019-proteogenomic-analysis-human-colon-cancer|Vasaikar 2019]]에서는 RB1 증폭 종양에서도 CDK2에 의해 Rb가 과인산화되어 있어 CDK4/6 억제제보다 CDK2 억제제가 더 적절한 선택일 수 있음을 보여주었다.

이 발견들은 phospho-Rb를 연구 도구에서 임상 의사결정 바이오마커로 개발해야 한다는 강력한 근거를 제공한다.

## 7. 단백질체가 바꾸는 임상 의사결정

**표적 식별 교정.** FGFR1 대신 NSD3가 진정한 드라이버로 식별된 Satpathy 2021의 사례처럼, 단백질체 데이터는 유전체 기반 표적 선택의 오류를 교정할 수 있다.

**진단 불확실성 해소.** IHC/FISH 경계선 사례의 HER2 상태를 단백질 정량이 교정함으로써(Krug 2020), 임상 진단의 보조 도구로 기능할 수 있다.

**신호전달 활성 직접 측정.** 변이 여부 대신 실제 인산화 수준으로 경로 활성화를 측정하면 진정으로 해당 경로에 의존적인 종양을 선별할 수 있다. Gillette 2020의 PTPN11 Y62, SOS1 S1161 인산화 발견은 변이 맥락별 하위 표적 선택에 정보를 제공한다.

**MHC 네오항원 발굴.** Gillette 2019에서 비코딩 영역 유래 116개 펩타이드가 MHC class I 결합 가능성을 보였다. RNA-seq만으로는 실제 번역 여부를 확인할 수 없으므로 단백질체 데이터가 필수적이다.

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

---

## Q&A

*학습 중 나온 질문과 답변을 여기에 정리합니다.*
