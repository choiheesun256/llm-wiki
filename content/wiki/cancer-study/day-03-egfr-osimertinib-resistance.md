---
title: "Day 3: EGFR & Osimertinib 내성"
draft: false
---

# Day 3: EGFR & Osimertinib 내성

## Big Picture

EGFR 변이 비소세포폐암(NSCLC)은 표적치료의 교과서적 모델이다. 3세대에 걸친 EGFR TKI가 개발됐으며, 각 세대가 이전 세대의 내성을 극복하지만 동시에 새로운 내성을 만들어낸다. 내성 지형은 유전적 변이, 유전자 증폭, 조직학적 전환, 종양 미세환경 리모델링까지 매우 다양하다.

## 핵심 개념

**EGFR-TKI 세대** — 1세대(erlotinib, gefitinib) → T790M gatekeeper 변이로 내성 → 3세대 osimertinib이 T790M 표적 → 다시 새로운 내성(C797S, MET amp, lineage 전환)

**조직학적 전환** — TKI 압력 하에 NSCLC가 소세포폐암(SCLC)으로 전환할 수 있다. EGFR 의존성 자체를 잃는 lineage plasticity의 한 형태다.

**TME 리모델링** — 내성은 종양 세포 내재적일 뿐 아니라, 내성 세포-대식세포 간 exosome 매개 소통이 면역억제적 피드포워드 루프를 만든다.

## 논문별 정리

### Sequist 2011 — 내성 지도 (atlas)
→ [[drug-resistance/sequist-2011-genotypic-histological-evolution-egfr-resistance]]

최초의 체계적 serial re-biopsy 연구 (37명, 97 검체). EGFR-TKI 내성 지형을 확립:
- **T790M gatekeeper 변이**: 49%
- **MET 증폭**: 13%
- **SCLC 전환**: 14%
- **EMT**: ~5%

Serial biopsy를 임상 패러다임으로 확립했고, osimertinib 개발의 과학적 근거를 제공한 논문이다.

### Offin 2019 — TMB가 음성 바이오마커
→ [[drug-resistance/offin-2019-tumor-mutation-burden-egfr-tki-efficacy]]

반직관적 발견: 높은 TMB가 EGFR-TKI 효능의 **음성** 예측자 (중앙 TTD 9.6 vs. 16.7개월). 내성 획득 시 TMB도 상승(3.42 → 6.56 mut/Mb). 높은 TMB는 TP53/SMARCA4 공변이와 연관되고 T790M 획득은 오히려 감소. "높은 TMB = 치료 반응 양호"라는 일반화가 EGFR-TKI 맥락에서는 틀렸다.

### Han 2023 — Exosome 매개 TME 리모델링
→ [[drug-resistance/han-2023-tumour-microenvironment-changes-osimertinib-resistance]]

Osimertinib 내성 시 CD8+ T 세포 감소, M0/M2 대식세포 증가. 기전: 내성 세포 유래 **exosome**(용해성 인자가 아닌)이 miR-1258-3p, miR-17-5p를 통해 대식세포를 M2로 분극화. ECM/TGF-beta/PI3K-AKT 관련 단백질이 내성 exosome에서 상향조절. 비세포자율적(non-cell-autonomous) 내성 기전을 확립했다.

### Ibusuki 2025 — IFITM3-MET-AKT 축
→ [[drug-resistance/ibusuki-2025-ifitm3-met-interaction-drives-osimertinib-resistance]]

Osimertinib 단기 PFS vs. 장기 PFS 환자에서 유일하게 유의미하게 상향조절된 유전자가 IFITM3. IFITM3는 lipid raft에서 MET과 물리적으로 결합하여 PI3K-AKT를 활성화한다. TME 사이토카인(TNF-α, IL-6, IFN-γ)이 IFITM3를 상향조절하는 피드포워드 루프. Osimertinib + capmatinib(MET 억제제)로 in vivo 내성 극복. 선천면역 유전자(IFITM3는 인터페론 자극 유전자)가 RTK 내성 경로로 전용된 사례다.

## EGFR 내성 진화도

```
EGFR activating mutation (L858R, del19)
    │
    ├── 1/2세대 TKI (erlotinib, afatinib)
    │       │
    │       ├── T790M (49%) → Osimertinib
    │       │       │
    │       │       ├── C797S (공유결합 부위)
    │       │       ├── MET 증폭 → capmatinib
    │       │       ├── IFITM3-MET 축 (TME 매개)
    │       │       └── TME 리모델링 (exosome 매개)
    │       │
    │       ├── MET 증폭 (13%)
    │       ├── SCLC 전환 (14%)
    │       └── EMT (~5%)
    │
    └── 높은 TMB = TKI 반응 악화 (Offin 2019)
```

## Day 간 연결

- **Day 4**: KRAS G12C 내성도 빠른 적응 내성과 TME 관여를 공유
- **Day 6**: Phosphoproteomics가 RTK 경로 rewiring을 검출 가능
- **Day 7**: CPTAC LUAD 데이터에서 EGFR vs. KRAS 변이 종양의 PTPN11/SOS1 phospho-signature 차이 확인

## 핵심 메시지

EGFR-TKI 내성은 다층적 문제다. 유전적 내성(T790M, C797S, MET amp)은 새 약물로 대응 가능하지만, 조직학적 전환(SCLC)과 TME 리모델링은 더 나은 kinase 억제제만으로는 해결할 수 없는 근본적으로 다른 생물학적 탈출이다. IFITM3 사례는 특히 교훈적이다: 인터페론 자극 유전자가 TME 사이토카인에 의해 RTK bypass 경로로 전용 — 면역과 발암 신호전달의 경계가 흐려지는 지점이다.
