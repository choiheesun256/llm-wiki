---
title: "Day 8: Hallmarks, TME & Computational Approaches"
draft: false
---

# Day 8: Hallmarks, TME & Computational Approaches

## Big Picture

This final day covers three interconnected themes: new dimensions of cancer biology (hallmarks update, ecDNA), the tumor microenvironment as a therapeutic frontier, and computational/AI approaches that are reshaping how we study cancer. Together, they represent the cutting edge where biology meets technology.

## Part 1: Cancer Hallmarks — New Dimensions

### Hanahan 2022 — Hallmarks of Cancer update
→ [[cancer/hanahan-2022-hallmarks-cancer-new-dimensions]]

The 2022 update to the seminal hallmarks framework proposes four new dimensions:
1. **Unlocking phenotypic plasticity** (9th hallmark) — cancer cells can switch between differentiation states, enabling drug resistance, immune evasion, and metastasis
2. **Nonmutational epigenetic reprogramming** — chromatin/methylation changes that do not require new mutations
3. **Polymorphic microbiomes** — gut and tumor-associated microbiota influence immunity and metabolism
4. **Senescent cells** — dual role in TME (tumor-suppressive early, tumor-promoting late)

The plasticity hallmark is particularly relevant: it connects to EMT-driven resistance in EGFR (Day 3), KRAS (Day 4), and immunotherapy (Kim 2024 below).

### Gonzalez 2023 — Extrachromosomal circular DNA
→ [[cancer/gonzalez-2023-parallel-sequencing-extrachromosomal-circular-dnas]]

scEC&T-seq: the first method for simultaneous ecDNA + mRNA sequencing from single cancer cells. Oncogenic ecDNAs (MYCN, CDK4, MDM2) are clonally propagated with copy number directly driving oncogene expression (MYCN R=0.86 at single-cell level). CTCF binding sites are enriched at ecDNA breakpoints, implicating chromatin loop extrusion in ecDNA biogenesis. ecDNA represents a non-chromosomal mechanism for oncogene amplification and tumor heterogeneity that escapes Mendelian inheritance rules.

## Part 2: Tumor Microenvironment

### Zhang 2026 — Spatial ecotypes and liquid biopsy
→ [[cancer/zhang-2026-non-invasive-profiling-of-the-tumour]]

Spatial EcoTyper defines 9 conserved pan-cancer TME spatial ecotypes (SE1–SE9) from spatial transcriptomics. **Liquid EcoTyper** recovers these ecotypes non-invasively from plasma cfDNA methylation. SE7/SE8 predict favorable ICI outcomes; SE4 predicts adverse outcomes in melanoma. First cfDNA-based TME ecotype inference method — connecting tissue-level spatial biology to blood-based diagnostics.

### Altenburger 2026 — T cell priming timer
→ [[cancer/altenburger-2026-lymphoid-chemokine-cd8-t-cell]]

CCR7 ligands (CCL19/CCL21) drive activated CD8+ T cell detachment from dendritic cells via DOCK2 relocalization at the immune synapse. Cells that fail to detach acquire a dysfunctional PD-1/LAG-3-high phenotype. This acts as a biological timer limiting TCR stimulation duration. Implication for CAR-T: shorter ex vivo stimulation may improve effector quality.

### Savage 2026 — CAR-T engineering via TF cooperativity
→ [[cancer/savage-2026-t-cell-state-tf-cooperative]]

Pooled TF overexpression screens identify KLF2 as a top hit for reducing CAR-T exhaustion. Discovery of a RUNX:KLF composite motif at the TOX locus. AlphaFold3-guided tethered RUNX2-KLF2 construct reduces exhaustion more potently than individual TFs and promotes memory-like state. Extends TF engineering beyond single-factor approaches.

### Kim 2024 — EMT drives immunotherapy resistance
→ [[drug-resistance/kim-2024-plasticity-induced-repression-irf6-underlies-acquired]]

EMT drives acquired checkpoint blockade resistance in PDAC via ZEB1/SNAIL-mediated silencing of IRF6. The resistance is tumor cell-intrinsic: IRF6 sensitizes cells to TNF-α-induced apoptosis, and its loss makes cells invisible to immune killing. Birinapant (cIAP inhibitor) restores apoptotic sensitivity. This directly illustrates Hanahan's "phenotypic plasticity" hallmark in an immunotherapy context.

### Du 2025 — ABL1-OTULIN-Wnt chemoresistance
→ [[drug-resistance/du-2025-hsacirc0125356-promotes-gemcitabine-resistance-modulating]]

DNA-PK → c-Abl → OTULIN(pTyr56) → β-catenin stabilization: a ligand-independent genotoxic Wnt activation axis. OTULIN removes M1-linked ubiquitin from β-catenin Lys133, preventing K48-linked degradation. Imatinib (c-Abl inhibitor) sensitizes TNBC to chemotherapy. A non-canonical Wnt pathway hijacked by DNA damage signaling.

### Kingston 2024 — ESR1 fulvestrant-specific resistance
→ [[drug-resistance/kingston-2024-esr1-f404-mutations-acquired-resistance]]

F404L/I/V mutations are the first fulvestrant-specific ESR1 resistance mechanism, disrupting pi-stacking with fulvestrant's steroid core. Novel oral SERDs (elacestrant, camizestrant, giredestrant) and tamoxifen retain activity. Defines a class of mutation that specifically targets drug binding rather than constitutive receptor activation.

## Part 3: Computational & AI Approaches

### DrugCLIP — Genome-scale virtual screening
→ [[cancer/jia-2026-drugclip-contrastive-learning-genome-scale]]

Contrastive protein-ligand learning enables ~10M× speedup over traditional docking: screening ~10K human AlphaFold structures against 500M compounds in 24 hours. Novel hits validated for 5HT2AR, NET, and TRIP12. Reformulates virtual screening from per-pair scoring to embedding-based retrieval.

### Multimodal drug response prediction
→ [[cancer/tong-2026-multimodal-dl-lincs-l1000-hdac]]

Dual-stream GCN + Transformer with cross-modal attention predicts LINCS L1000 transcriptional signatures. Consistently identifies brain-penetrant Class I HDAC inhibitors across 22 cancer types. First pan-cancer cross-modal drug response model validated with experimental hits.

### Network medicine tools
→ [[cancer/kersting-2025-nf-core-nextflow-disease-module]] and [[cancer/hartung-2022-caddie-cancer-driver-drug-interaction]]

nf-core disease module pipeline: network input choice dominates over algorithm choice in determining results. CADDIE: web-based cancer driver drug interaction explorer for network medicine-based drug repurposing without computational expertise.

### TWAS-CMap best practices
→ [[cancer/chauquet-2026-twas-signature-matching-for-drug]]

First systematic benchmark of TWAS-CMap drug prioritization: CMap cell line selection is the single most impactful parameter. Provides evidence-based best-practice recommendations for transcriptomic drug repurposing pipelines.

### Additional AI tools
→ [[cancer/zhang-2026-proteinaligner-tri-modal-contrastive-learning]]: 867M-parameter protein foundation model aligning sequence, structure, and text. Outperforms ESM-2 on variant pathogenicity prediction.
→ [[cancer/zhang-2026-multi-embed-pathology-wsi-multimodal]]: Multi-Embed aligns pathology WSI with transcriptomics, methylation, proteomics, and spatial omics.
→ [[cancer/wu-2026-reimagining-human-centric-drug-development]]: NAMs triad (human cell models + MPS + AI) to replace animal models.

## Connections Across All 8 Days

| Theme | Days | Thread |
|-------|------|--------|
| Phenotypic plasticity / EMT | 3, 4, 8 | EGFR → KRAS → ICB resistance via lineage switching |
| CDK/Rb axis | 5, 7 | CDK biology → CPTAC phospho-Rb biomarkers |
| Kinase signaling | 5, 6, 7 | CDK12 → phosphoproteomics methods → CPTAC data |
| DNA repair | 1, 2, 5 | BRCA reversions → non-reversion resistance → CDK12/BRCAness |
| TME | 3, 4, 8 | Exosome remodeling → TGF-beta → spatial ecotypes |
| AI/Computational | 6, 8 | Kinase inference → drug discovery → virtual screening |

## Key Takeaway

Cancer biology is converging on three frontiers: (1) phenotypic plasticity as a unifying resistance mechanism, (2) the TME as both a barrier and an opportunity for therapy, and (3) AI/computational tools that can integrate multi-omics data at scale to find new therapeutic strategies. The papers in this wiki collectively demonstrate that single-layer analysis (genomics alone, transcriptomics alone) is insufficient — and that the future lies in integrative, multi-modal, AI-augmented cancer biology.
