---
title: "Day 1: PARP 내성 — 리버전 돌연변이"
draft: false
---

# Day 1: PARP 내성 — 리버전 돌연변이

## Big Picture

PARP inhibitor(olaparib, rucaparib, niraparib)는 BRCA1/2 변이 암에서 homologous recombination(HR) 결핍을 이용해 합성치사를 유도한다. 가장 흔한 내성 기전은 **이차(secondary) 리버전 돌연변이**로, BRCA1/2 reading frame을 복원해 HR 기능을 되살리는 것이다. 리버전 생물학의 이해는 치료 실패 예측과 차선 전략 설계에 핵심이다.

## 핵심 개념

**Synthetic lethality (합성치사)** — HR이 이미 망가진 상태에서만 PARP 억제가 치명적이다. HR이 어떤 방식으로든 복원되면 합성치사는 깨진다.

**리버전 돌연변이** — 원래의 pathogenic BRCA 변이 근처에 이차 돌연변이(결실, 삽입, 점돌연변이)가 생겨 reading frame이 복원되는 현상. 부분적으로라도 기능하는 단백질이 만들어지면 DNA 수리가 가능해진다.

**교차 내성** — BRCA 리버전은 PARP inhibitor와 platinum 항암제 모두에 내성을 부여한다. 둘 다 HRD에 의존하기 때문이다. Taxane 같은 비-DNA 손상 약물은 보통 효과를 유지한다.

## 논문별 정리

### Edwards 2008 — 최초의 리버전 발견
→ [[drug-resistance/edwards-2008-resistance-therapy-caused-intragenic-deletion]]

BRCA2 내부 이차 결실(458 bp~58 kb)이 원래의 frameshift를 제거하고 HR을 복원한다는 것을 처음 보여준 논문. Cisplatin-resistant Capan-1 세포주와 임상 난소암 검체에서 확인했다. 리버전 매개 내성 분야 전체의 출발점이다.

### Sakai 2008 — 메커니즘 확장
→ [[drug-resistance/sakai-2008-secondary-mutations-mechanism-cisplatin-resistance]]

Cisplatin-resistant clone 14개 중 7개에서 이차 돌연변이가 BRCA2 wild-type reading frame을 복원. HCC1428에서는 splice-site 변이를 통한 내성도 확인했다. 리버전이 단순 결실에 국한되지 않고 다양한 변이 유형으로 가능함을 보여줬다.

### Pishvaian 2017 — 췌장암까지 확장
→ [[drug-resistance/pishvaian-2017-brca2-secondary-mutation-mediated-resistance-platinum]]

췌장관선암(PDAC)에서 최초로 문서화된 BRCA2 리버전 사례. Germline c.6174delT 상류에 26-bp 결실이 발생해 reading frame 복원, veliparib+FOLFOX 치료 후 약 15개월 PFS 이후 검출(MAF 8%). 리버전은 난소/유방암에 국한되지 않으며 **모든 BRCA 변이 암종에서 발생 가능**하다.

### Pettitt 2020 — 대규모 리버전 지형
→ [[drug-resistance/pettitt-2020-clinical-brca12-reversion-analysis-identifies]]

300건 이상의 임상 BRCA1/2 리버전을 분석한 대규모 연구:
- **BRCA2 c.750–775**가 리버전 hotspot, exon 16 하류는 리버전 "사막"
- BRCA2 리버전의 88%가 결실이며, 68%에서 microhomology 서열 확인 → MMEJ/alt-EJ 수리 경로 관여
- 리버전 특이적 neopeptide가 약 52%의 개인에서 MHC 제시 가능 → 면역치료 타겟 가능성

### Nesic 2024 — BRCA1 splice-site 리버전
→ [[drug-resistance/nesic-2024-brca1-secondary-splice-site-mutations-drive]]

BRCA1 exon 11 donor splice site의 이차 변이가 exon 11 skipping을 유도하여 부분적 HR 기능을 가진 BRCA1-Δ11q isoform을 과발현. ARIEL2/4 임상시험에서 PARPi 후 약 10배 enrichment. 핵심 통찰: 리버전이 항상 full-length 단백질을 복원하는 것이 아니라, **부분 기능 isoform만으로도 충분**할 수 있다. Spliceosome 조절제(H3B-8800)가 대응 전략으로 제안됐다.

### Pettitt 2023 — HUWE1과 Δ11q 축
→ [[drug-resistance/pettitt-2023-huwe1-defect-causes-parp-inhibitor]]

HUWE1은 BRCA1-Δ11q를 분해하는 E3 ubiquitin ligase다. HUWE1이 소실/변이되면 Δ11q가 축적되어 HR을 부분 복원 — BRCA1 리버전 없이도 내성이 발생한다. HGSOC 환자에서 PARPi 후 HUWE1 missense 변이가 임상적으로 확인됐다. Splice-site 리버전(Nesic 2024)과 같은 Δ11q 생물학에 수렴하는 비-리버전 경로다.

## Day 간 연결

- **Day 2**: 53BP1/shieldin, fork protection, PARP1 변이, 약물 유출 등 리버전 이외의 PARPi 내성 메커니즘
- **Day 5**: CDK12 소실이 intronic polyadenylation을 통해 BRCAness를 만드는 경로
- **Day 7**: CPTAC proteogenomics에서 HRD 종양의 히스톤 아세틸화 마커 확인

## 핵심 메시지

리버전 돌연변이는 가장 흔한 PARPi 내성 기전이다. 결실, 삽입, 점변이, splice-site 변화 등 다양한 형태로 발생하며, 모든 BRCA 변이 암종에서 가능하다. 임상적으로는 **ctDNA 모니터링으로 리버전 조기 검출**이 치료 결정에 중요하고, 리버전 특이적 neopeptide는 면역치료 타겟 후보가 될 수 있다.
