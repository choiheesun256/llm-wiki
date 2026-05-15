---
title: "Day 4: KRAS G12C 적응 내성"
draft: false
---

# Day 4: KRAS G12C 적응 내성

## Big Picture

KRAS는 40년간 "약물 불가능(undruggable)"했으나, 공유결합 G12C 억제제(sotorasib, adagrasib)가 개발되어 KRAS를 비활성 GDP 결합 상태로 잠근다. 하지만 임상 반응은 대부분 단명한다. EGFR(Day 3)과 달리, KRAS G12C 내성은 수개월이 아닌 **수일 내에** 비유전적 적응을 통해 발생하며, 공간적으로 이질적인 기전이 단일 생검으로는 파악 불가능한 복잡성을 보인다.

## 핵심 개념

**KRAS G12C 공유결합 억제** — 이 약물은 KRAS가 GDP 결합(비활성) 상태일 때만 Cys12에 비가역적으로 결합한다. 새로 합성된 KRAS(G12C)는 약물과 만나기 전에 GTP 결합(활성) 상태를 취할 수 있어, 본질적인 탈출 창이 존재한다.

**적응 내성** — 돌연변이가 아닌, 전사적/번역후 변화를 통한 수시간~수일 단위의 신호전달 네트워크 재배선. 선택에 의한 획득 내성(수주~수개월)과 근본적으로 다르다.

**우회 신호전달(bypass signaling)** — YAP/TAZ-TEAD, PI3K-AKT 등 대안 경로가 KRAS와 독립적으로 하류 effector를 활성화하여, KRAS 억제만으로는 불충분해진다.

## 논문별 정리

### Xue 2020 — 빠른 비균일 적응
→ [[drug-resistance/xue-2020-rapid-nonuniform-adaptation-kras-g12c-inhibition]]

G12C 억제제 처리 72시간 이내의 scRNA-seq로 이중 모드 반응을 발견:
- ~80% 세포는 quiescence에 진입
- ~20%는 적응하여 계속 증식

기전: 새로 합성된 KRAS(G12C)가 약물 결합 전에 GTP 결합 상태를 취해 탈출. HBEGF-EGFR 신호가 RTK feedback으로 적응 탈출을 주도하고, AURKA가 활성 KRAS를 안정화. **G12Ci + EGFR 억제제** 또는 **G12Ci + AURKA 억제제** 시너지가 in vivo에서 검증됐다. 단일세포 수준에서 KRAS 적응 내성의 속도와 이질성을 처음 특성화한 연구다.

### Tsai 2022 — 임상에서의 특이(idiosyncratic) 내성
→ [[drug-resistance/tsai-2022-idiosyncratic-resistance-kras-g12c-inhibition]]

Sotorasib 치료 환자 1명의 rapid autopsy (17개 조직 샘플, 다수 전이 부위):
- 이차 KRAS 변이 **없이** KRAS 독립적 MAPK/AKT/mTOR 재활성화
- TGF-beta가 master upstream coordinator로 면역 냉각(immune-cold) TME 형성
- 공간적 이질성: 전이 부위마다 내성 기전이 다름
- 치료 전 림프절 전이로부터의 clonal seeding

단일 생검 내성 프로파일링이 부적절하며, 비유전적 기전이 공간적으로 이질적인 내성을 주도함을 보여준다.

### Edwards 2023 — YAP1/TAZ-TEAD 우회 경로
→ [[drug-resistance/edwards-2023-tead-inhibition-overcomes-yap1taz-driven-primary]]

KRAS G12C PDAC에서 genome-wide CRISPR 스크린 수행, Hippo 경로 소실(NF2, LATS1/2, STK3/4)이 최상위 내성 드라이버. YAP1/TAZ가 TEAD 전사인자를 활성화하여:
1. ERK 독립적으로 KRAS 표적 유전자 발현 유도
2. 동시에 PI3K-AKT-mTOR 활성화

TEAD 억제제 VT-3989 + adagrasib 병용이 종양 재성장을 유의미하게 지연. TEAD 억제제가 현재 임상 개발 중이므로 약리학적으로 실행 가능한 병용 전략이다.

## KRAS G12C 내성: 시간 vs. 기전

| 시간 범위 | 기전 | 사례 |
|-----------|------|------|
| 시간~수일 | 비균일 적응 재배선 | Xue 2020: EGFR/AURKA feedback |
| 수주 | 우회 경로 활성화 | Edwards 2023: YAP/TAZ-TEAD |
| 수개월 | TME 조율 면역 회피 | Tsai 2022: TGF-beta master regulator |

## Day 간 연결

- **Day 3**: EGFR 내성도 RTK feedback 주제를 공유 — KRAS와 EGFR 내성 모두 상위 수용체 재활성화 관여
- **Day 6**: Phosphoproteomics가 적응 내성의 기저인 kinase 네트워크 재배선을 검출 가능
- **Day 7**: CPTAC에서 EGFR과 KRAS 변이 종양의 phospho-signature가 다름 — 내성 경로 차이 이해에 관련
- **Day 8**: EMT/phenotypic plasticity 주제가 Kim 2024(PDAC ICB 내성)와 연결

## 핵심 메시지

KRAS G12C 내성은 속도와 이질성으로 정의된다. 공유결합 억제 기전 자체에 본질적 취약점이 있고(새 KRAS 합성 → 약물 결합 전 탈출), 적응 내성은 수일 내 단일세포 수준에서 발생하며, 우회 경로(YAP/TAZ-TEAD)가 KRAS 독립적 생존을 제공하고, 공간적 이질성은 전이 부위마다 다른 내성 기전을 만든다. 임상적 함의: **순차적 단독요법이 아닌 선행적 병용요법**(G12Ci + EGFR/AURKA/TEAD 억제제)이 필요하다.
