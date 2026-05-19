---
title: "EGFR TKI Resistance Mechanism Comparison"
type: comparison
updated: 2026-05-19
---

# EGFR TKI 내성 기전 비교

## 개요

EGFR 돌연변이 비소세포폐암(NSCLC)에서 tyrosine kinase inhibitor(TKI)는 표준 치료이지만, 거의 모든 환자에서 내성이 발생한다. TKI 세대(1세대: erlotinib/gefitinib, 2세대: afatinib, 3세대: osimertinib)가 발전함에 따라 내성 기전의 양상도 변화하고 있다. 내성은 크게 **on-target**(EGFR 자체 돌연변이), **off-target/bypass**(다른 경로 활성화), **phenotype transformation**(세포형 전환), **기타 기전**(표현형 가소성, non-cell autonomous)으로 분류된다.

## 비교표

| 내성 기전 | 유형 | 빈도 (1L osimertinib 기준) | 검출 방법 | 치료 전략 | 주요 근거 논문 |
|-----------|------|--------------------------|-----------|-----------|---------------|
| **T790M 돌연변이** | On-target (gatekeeper) | 1세대/2세대 TKI 후 ~50%; 1세대 osimertinib 후에는 소실 | ctDNA, 종양 생검 | 3세대 osimertinib으로 극복 | 1세대 TKI 임상시험 (AURA, FLAURA) |
| **C797S 돌연변이** | On-target (covalent binding site) | 1L osimertinib 후 ~10% (on-target 내 가장 빈번) | ctDNA; 대립유전자 구조 확인 필요 (cis/trans) | Cis 구성 → 해결 어려움; Trans 구성 → 1세대 + 3세대 조합 | [[tumbrink-2021-next-tier-egfr-resistance-mutations]], [[starrett-2020-drug-sensitivity-allele-specificity-first-line]] |
| **L718Q/V 돌연변이** | On-target | 1L osimertinib 후 드묾; 2~3선 사용 시 증가 | ctDNA, 종양 생검 | L718Q/V → 1세대 TKI (erlotinib)에 재감수; 대립유전자 특이적 | [[tumbrink-2021-next-tier-egfr-resistance-mutations]], [[starrett-2020-drug-sensitivity-allele-specificity-first-line]] |
| **G724S 돌연변이** | On-target | 드묾; exon 19 결실 배경에서 특이적 출현 | ctDNA, 종양 생검 | Afatinib에 감수성 있음 | [[tumbrink-2021-next-tier-egfr-resistance-mutations]] |
| **EGFR amplification / 복합 돌연변이** | On-target | 1L osimertinib 후 compound mutation 증가 추세 | ctDNA (저빈도 검출), WGS | 4세대 allosteric inhibitor (개발 중); EGFR exon 20 표적제 | [[tumbrink-2021-next-tier-egfr-resistance-mutations]], [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] (KRAS 유사 패턴) |
| **MET amplification** | Off-target (bypass RTK) | ~15–20% (1L osimertinib 후 가장 흔한 off-target) | FISH, ctDNA, IHC | Osimertinib + savolitinib (MET inhibitor) 병용; SAVANNAH 임상시험 | [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]] |
| **ERBB2 amplification / 돌연변이** | Off-target (bypass RTK) | ~5–10% | FISH, NGS, IHC | T-DXd (trastuzumab deruxtecan) — 현재 가장 활성 있는 전략 | [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]] |
| **KRAS 돌연변이 / RAS-MAPK pathway 활성화** | Off-target (downstream bypass) | ~5%; BRAF, MEK 변이 포함 시 ~10–15% | ctDNA, 종양 NGS | Osimertinib + MEK 억제제 병용 (임상 연구 중); sotorasib/adagrasib (KRAS G12C 특이적) | [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]] |
| **PIK3CA 돌연변이 / PI3K-AKT-mTOR 활성화** | Off-target (downstream bypass) | ~5–8% | ctDNA, NGS | PI3K 억제제 + osimertinib 병용 | [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] (IGF1R→PI3K 유사 경로) |
| **IGF1R 과발현 / circ-RNA 매개 bypass** | Off-target (ceRNA-mediated) | 드묾; 기전 연구 단계 | 조직 IHC; circRNA microarray | IGF1R 억제제 + osimertinib; circ_PPAPDC1A 침묵화 | [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]] |
| **Small cell transformation** | Phenotype transformation | ~3–14% (3세대 TKI 후, 특히 RB1+TP53 소실 시) | 생검 필수 (영상만으로 구분 어려움); IHC (시냅토피신, CD56) | 소세포폐암 표준 요법 (etoposide + platinum) ± atezolizumab | [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]] |
| **Epithelial-mesenchymal transition (EMT)** | Phenotype transformation | 드묾; 정확한 빈도 불확실 | 생검; N-cadherin/vimentin IHC; ZEB1 발현 | TGF-β 억제제; 면역치료 (EMT 관련 면역 억제 고려) | [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]] |
| **Osimertinib 후 면역 기전 변화 / IFNγ 역설** | Non-cell autonomous | 면역치료 내성으로서 발생; TKI 내성과의 교차 | 종양 생검 + 면역 프로파일링 | 면역치료 재조합; 면역 프로그래밍 전략 | [[memon-2024-clinical-molecular-features-acquired-resistance]] (면역치료 내성 맥락) |

## EGFR TKI 세대별 내성 패턴 요약

| 치료 세대 | 대표 약물 | 주요 내성 기전 | 다음 치료 전략 |
|----------|---------|--------------|--------------|
| 1/2세대 | erlotinib, gefitinib, afatinib | T790M 돌연변이 (~50%) | 3세대 osimertinib |
| 3세대 (1L) | osimertinib | Off-target bypass (MET ~15-20%, ERBB2 ~5-10%) > On-target (C797S ~10%); SCLC transformation | 표적별 병용 요법; 생검 필수 |
| 3세대 (2L, T790M 후) | osimertinib | On-target (C797S + T790M 복합) 증가; 대립유전자 구조 중요 | 대립유전자 구조 기반 치료 선택 |

## 핵심 차이점

- **On-target vs. off-target 비율**: 1L osimertinib 내성에서 off-target bypass(MET amp, ERBB2 등)가 on-target 돌연변이(C797S)보다 더 흔하다(~80% vs ~10%). 이는 이전 세대 TKI 내성에서 T790M이 지배적이었던 것과 대조된다.
- **대립유전자 구조의 중요성**: C797S는 T790M과 cis인지 trans인지에 따라 치료 전략이 완전히 달라진다. Cis 구성에서는 기존 TKI가 모두 무효화되어 새로운 전략이 필요하다.
- **ctDNA 기반 모니터링**: 내성 돌연변이 대부분이 종양 내 이질성으로 서브클론 수준에서 존재하며, ctDNA를 통해 실시간 추적이 가능하다(Yaeger 2023이 KRAS 맥락에서 유사 패턴 기술).
- **표현형 전환**: SCLC transformation은 생검 없이 영상으로 진단 불가능하며, 발생 시 TKI가 완전히 무효화되어 SCLC 표준 요법으로 전환해야 한다. RB1/TP53 동시 소실이 주요 소인이다.
- **비세포 자율적 내성**: 면역 기전 변화(IFNγ 역설, 항원 제시 소실)가 TKI 내성 환경에서도 나타나며, 특히 면역치료와 TKI 병용 시 고려해야 한다.

## 관련 논문

- [[tumbrink-2021-next-tier-egfr-resistance-mutations]]
- [[starrett-2020-drug-sensitivity-allele-specificity-first-line]]
- [[tang-2024-circppapdc1a-promotes-osimertinib-resistance-sponging]]
- [[yaeger-2023-molecular-characterization-acquired-resistance-krasg12c-egfr]]
- [[jiao-2018-advances-studies-tyrosine-kinase-inhibitors]]
- [[memon-2024-clinical-molecular-features-acquired-resistance]]
- [[song-2024-proteogenomic-analysis-reveals-non-small-cell]]
- [[park-2024-proteogenomic-characterization-reveals-estrogen-signaling]]
- [[zhang-2024-proteogenomic-analysis-air-pollution-associated-lung-cancer]]

## 관련 개념

- [[drug-resistance-mechanisms]]
- [[EGFR]]
- [[NSCLC]]
- [[TKI]]
- [[ctDNA]]
- [[precision-oncology]]
- [[kinase-inhibitors]]
- [[bypass-signaling]]
