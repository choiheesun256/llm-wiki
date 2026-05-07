---
title: Drug Repurposing
type: project
status: active
source_files:
  - Clippings/Cancer driver drug interaction explorer.md
  - Clippings/Deep contrastive learning enables genome-wide virtual screening.md
  - Clippings/Inferring and Evaluating Network Medicine-Based Disease Modules with Nextflow.md
  - Clippings/nf-corediseasemodulediscovery A pipeline for network-based disease module identification..md
  - Clippings/The end of medicine as we know it - and why your health has a future.md
updated: 2026-05-07
---

# Drug Repurposing

## 요약

기존 승인 약물을 암 환자에게 재배치(repurposing)하기 위한 computational 접근을 정리하는 프로젝트다. Network medicine을 기반으로 disease module을 발견하고, virtual screening으로 약물 후보를 탐색하는 흐름이 핵심이다.

## 핵심 아이디어

- 질병을 단일 유전자가 아닌 **disease module** (상호작용 네트워크 내 서브그래프)로 이해
- Disease module 내 유전자를 타겟으로 기존 약물을 재배치
- Virtual screening으로 대규모 화합물 라이브러리에서 후보 약물을 빠르게 탐색
- 암 driver gene과 약물 간 상호작용을 네트워크 관점에서 분석

## 왜 흥미로운가

기존 drug discovery는 비용과 시간이 막대하다. Drug repurposing은:

- 이미 안전성이 검증된 약물을 활용하므로 임상 진입이 빠름
- Network medicine 관점에서 직접 타겟이 불가능한 유전자도 간접적으로 공략 가능
- Computational 방법의 발전으로 genome 규모의 스크리닝이 현실화됨
- Transcriptomic reversal과 genetic safety evidence를 함께 쓰면 단순 hit 탐색보다 기능적 우선순위가 좋아질 수 있음

## 문헌 지도

현재 클리핑된 자료는 세 축으로 나뉜다:

1. **Network medicine & disease module** — 질병의 네트워크 구조를 이해하고 module을 발견
2. **Virtual screening** — 대규모 약물-타겟 상호작용 탐색
3. **Drug repurposing in oncology** — 암 특화 약물 재배치 도구
4. **Functional reversal and target safety** — 질병 시그니처 반전과 pleiotropy 기반 안전성 평가

## 주요 비교 대상

- [[CADDIE]] — 암 driver gene 기반 drug repurposing 웹 도구
- [[DrugCLIP]] — Contrastive learning 기반 초고속 virtual screening
- [[Disease Module Discovery]] — Network medicine 기반 disease module 파이프라인 평가
- [[nf-core-diseasemodulediscovery]] — 실제 Nextflow 파이프라인
- [[Systems Medicine]] — Network medicine 패러다임 개론
- [[xing-2026-gps-transcriptomic-reversal]] — 질병 transcriptomic state reversal 기반 de novo therapeutic design
- [[tsepilov-2026-gentropy-pleiotropy-target-safety]] — target safety and pleiotropy evidence layer

## 핵심 질문들

- Disease module 기반 접근이 단일 타겟 접근보다 실제로 더 나은 repurposing 후보를 찾는가?
- Virtual screening의 hit rate가 실제 임상적 유효성과 얼마나 상관되는가?
- 암종별로 disease module의 구조가 얼마나 다르며, 이것이 약물 선택에 어떤 영향을 미치는가?
- Network 기반 간접 타겟팅이 직접 타겟팅 대비 어떤 장단점이 있는가?

## 읽기 순서

- [[Systems Medicine]]
- [[network-medicine]]
- [[Disease Module Discovery]]
- [[CADDIE]]
- [[DrugCLIP]]
- [[virtual-screening]]

## 관련 페이지

- [[network-medicine]]
- [[virtual-screening]]
- [[nrl-target-discovery]]
