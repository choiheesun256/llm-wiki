---
title: "X-Cell: Scaling Causal Perturbation Prediction Across Diverse Cellular Contexts via Diffusion Language Models"
source: "https://www.biorxiv.org/content/10.64898/2026.03.18.712807v1"
author:
  - "[[Chloe Wang]]"
  - "[[Mehran Karimzadeh]]"
  - "[[Neal G. Ravindra]]"
  - "[[Lexi R. Bounds]]"
  - "[[Nader Alerasool]]"
  - "[[Ann C. Huang]]"
  - "[[Shihao Ma]]"
  - "[[Daniel R. Gulbranson]]"
  - "[[Haotian Cui]]"
  - "[[Yongju Lee]]"
  - "[[Anusuya Arjavalingam]]"
  - "[[Elliot J. MacKrell]]"
  - "[[Matthew S. Wilken]]"
  - "[[Jieming Chen]]"
  - "[[Benjamin W. Herken]]"
  - "[[Jesse A. Weber]]"
  - "[[Massimo M. Onesto]]"
  - "[[Barbara Gonzalez-Teran]]"
  - "[[Nicole F. Leung]]"
  - "[[Sally Yu Shi]]"
  - "[[Byron J. Smith]]"
  - "[[Sharon K. Lam]]"
  - "[[Adam Barner]]"
  - "[[Philip Wright]]"
  - "[[Elizabeth M. Rumsey]]"
  - "[[Soohong Kim]]"
  - "[[Rene V. Sit]]"
  - "[[Adam J. Litterman]]"
  - "[[Ci Chu]]"
  - "[[Bo Wang]]"
published: 2026-03-18
created: 2026-04-08
description: "bioRxiv - the preprint server for biology, operated by openRxiv, a nonprofit organization dedicated to advancing scientific communication"
tags:
  - "clippings"
---
New Results Follow this preprint

[View ORCID Profile](http://orcid.org/0009-0009-5193-9601) Chloe Wang, [View ORCID Profile](http://orcid.org/0000-0002-7324-6074) Mehran Karimzadeh, [View ORCID Profile](http://orcid.org/0000-0001-5558-3758) Neal G. Ravindra, [View ORCID Profile](http://orcid.org/0000-0002-4734-3743) Lexi R. Bounds, [View ORCID Profile](http://orcid.org/0000-0002-8991-2473) Nader Alerasool, [View ORCID Profile](http://orcid.org/0000-0003-0241-9852) Ann C. Huang, [View ORCID Profile](http://orcid.org/0009-0005-3279-257X) Shihao Ma, Daniel R. Gulbranson, [View ORCID Profile](http://orcid.org/0000-0001-8119-9485) Haotian Cui, [View ORCID Profile](http://orcid.org/0000-0002-9958-221X) Yongju Lee, Anusuya Arjavalingam, Elliot J. MacKrell, Matthew S. Wilken, Jieming Chen, Benjamin W. Herken, Jesse A. Weber, Massimo M. Onesto, Barbara Gonzalez-Teran, Nicole F. Leung, Sally Yu Shi, Byron J. Smith, Sharon K. Lam, Adam Barner, Philip Wright, Elizabeth M. Rumsey, Soohong Kim, Rene V. Sit, Adam J. Litterman, [View ORCID Profile](http://orcid.org/0009-0000-9488-0034) Ci Chu, [View ORCID Profile](http://orcid.org/0000-0002-9620-3413) Bo Wang

doi: https://doi.org/10.64898/2026.03.18.712807

This article is a preprint and has not been certified by peer review \[[what does this mean?](https://www.biorxiv.org/about/FAQ#unrefereed)\].

## Abstract

Causal models of cellular systems hold the promise to empower broad biological discovery, including the systematic identification of novel targets for drug discovery. Predicting how genetic and pathway perturbations reshape gene expression across diverse cellular contexts is a prerequisite for building generalizable cellular foundation models. However, current methods typically fail to extrapolate beyond their training distributions because they rely predominantly on observational expression atlases rather than interventional perturbation data. We present X-Atlas/Pisces, the largest genome-wide CRISPRi Perturb-seq compendium to date, comprising 25.6 million perturbed single-cell transcriptomes across 16 biologically diverse contexts, including widely used cell lines, induced pluripotent stem cells (iPSCs), resting and CD3/CD28 activated Jurkat T lymphoma cells, and multi-lineage differentiating iPSCs. Leveraging this resource, we develop X-Cell, a diffusion language model that predicts perturbation responses by iteratively refining control-to-perturbed state transitions through cross-attention to multi-modal biological priors derived from natural language, protein language models, interaction networks, genetic dependency maps, and morphological profiles. X-Cell outperforms existing state-of-the-art models by up to five-fold on key metrics such as Pearson **Δ** (correlation between predicted and observed perturbation-induced log-fold changes), and demonstrates zero-shot prediction of T cell inactivating perturbations in stimulated Jurkat cells. We scale X-Cell to 4.9 billion parameters (X-Cell-Ultra), the largest causal perturbation model to date. We demonstrate for the first time that perturbation prediction follows power-law scaling with an exponent matching large language models. X-Cell-Ultra demonstrates zero-shot generalization to novel biological contexts, including unseen iPSC-derived melanocyte progenitors and primary human CD4 <sup>+</sup> T cells from multiple donors, and outperforms all baselines after self-supervised test-time adaptation. These results demonstrate that coordinated scaling of causal perturbation data and model capacity yields foundation models capable of generalizable perturbation prediction across cellular contexts, with potential applications for improving computational target identification, validation, and context-specific therapeutic prioritization.

### Competing Interest Statement

All authors are employees of Xaira Therapeutics and may hold company equity.

Copyright

The copyright holder for this preprint is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under a [CC-BY-NC 4.0 International license](http://creativecommons.org/licenses/by-nc/4.0/).

bioRxiv and medRxiv thank the following for their generous financial support:

> The Chan Zuckerberg Initiative, Cold Spring Harbor Laboratory, the Sergey Brin Family Foundation, California Institute of Technology, Centre National de la Recherche Scientifique, Fred Hutchinson Cancer Center, Imperial College London, Massachusetts Institute of Technology, Stanford University, The University of Edinburgh, University of Washington, and Vrije Universiteit Amsterdam.

[Back to top](#page)

[Previous](https://www.biorxiv.org/content/10.1101/2025.11.09.687447v2 "CASPULE: A computational tool to study sticker spacer polymer condensates") [Next](https://www.biorxiv.org/content/10.64898/2026.03.16.711958v2 "ChiMER: Integrating chromatin architecture into splicing graphs for chimeric enhancer RNAs detection")

Posted March 20, 2026.

[Email](https://www.biorxiv.org/ "Email this Article")

[Share](https://www.biorxiv.org/)

X-Cell: Scaling Causal Perturbation Prediction Across Diverse Cellular Contexts via Diffusion Language Models

Chloe Wang, Mehran Karimzadeh, Neal G. Ravindra, Lexi R. Bounds, Nader Alerasool, Ann C. Huang, Shihao Ma, Daniel R. Gulbranson, Haotian Cui, Yongju Lee, Anusuya Arjavalingam, Elliot J. MacKrell, Matthew S. Wilken, Jieming Chen, Benjamin W. Herken, Jesse A. Weber, Massimo M. Onesto, Barbara Gonzalez-Teran, Nicole F. Leung, Sally Yu Shi, Byron J. Smith, Sharon K. Lam, Adam Barner, Philip Wright, Elizabeth M. Rumsey, Soohong Kim, Rene V. Sit, Adam J. Litterman, Ci Chu, Bo Wang

bioRxiv 2026.03.18.712807; doi: https://doi.org/10.64898/2026.03.18.712807

This article is a preprint and has not been certified by peer review \[[what does this mean?](https://www.biorxiv.org/about/FAQ#unrefereed)\].

[![Twitter logo](https://www.biorxiv.org/sites/all/modules/highwire/highwire/images/twitter.png)](https://www.biorxiv.org/highwire_log/share/twitter?link=http%3A%2F%2Ftwitter.com%2Fshare%3Furl%3Dhttps%253A%2F%2Fwww.biorxiv.org%2Fcontent%2F10.64898%2F2026.03.18.712807v1%26text%3DX-Cell%253A%2520Scaling%2520Causal%2520Perturbation%2520Prediction%2520Across%2520Diverse%2520Cellular%2520Contexts%2520via%2520Diffusion%2520Language%2520Models "Share this on Twitter") [![Facebook logo](https://www.biorxiv.org/sites/all/modules/highwire/highwire/images/fb-blue.png)](https://www.biorxiv.org/highwire_log/share/facebook?link=http%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%2F%2Fwww.biorxiv.org%2Fcontent%2F10.64898%2F2026.03.18.712807v1%26t%3DX-Cell%253A%2520Scaling%2520Causal%2520Perturbation%2520Prediction%2520Across%2520Diverse%2520Cellular%2520Contexts%2520via%2520Diffusion%2520Language%2520Models "Share on Facebook") [![LinkedIn logo](https://www.biorxiv.org/sites/all/modules/highwire/highwire/images/linkedin-32px.png)](https://www.biorxiv.org/highwire_log/share/linkedin?link=http%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%2F%2Fwww.biorxiv.org%2Fcontent%2F10.64898%2F2026.03.18.712807v1%26title%3DX-Cell%253A%2520Scaling%2520Causal%2520Perturbation%2520Prediction%2520Across%2520Diverse%2520Cellular%2520Contexts%2520via%2520Diffusion%2520Language%2520Models%26summary%3D%26source%3DbioRxiv "Publish this post to LinkedIn") [![Mendeley logo](https://www.biorxiv.org/sites/all/modules/highwire/highwire/images/mendeley.png)](https://www.biorxiv.org/highwire_log/share/mendeley?link=http%3A%2F%2Fwww.mendeley.com%2Fimport%2F%3Furl%3Dhttps%253A%2F%2Fwww.biorxiv.org%2Fcontent%2F10.64898%2F2026.03.18.712807v1%26title%3DX-Cell%253A%2520Scaling%2520Causal%2520Perturbation%2520Prediction%2520Across%2520Diverse%2520Cellular%2520Contexts%2520via%2520Diffusion%2520Language%2520Models "Share on Mendeley")

[Citation Tools](https://www.biorxiv.org/ "Citation Tools")

[Get QR code](https://connect.biorxiv.org/qr/2026.03.18.712807)

## Subject Area

- ```html
	Systems Biology
	```

Reviews and Context
