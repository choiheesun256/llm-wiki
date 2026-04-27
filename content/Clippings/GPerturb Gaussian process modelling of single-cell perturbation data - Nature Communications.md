---
title: "GPerturb: Gaussian process modelling of single-cell perturbation data - Nature Communications"
source: "https://www.nature.com/articles/s41467-025-61165-7"
author:
  - "[[Hanwen Xing]]"
  - "[[Christopher Yau]]"
published: 2025-07-01
created: 2026-04-07
description: "Single-cell RNA sequencing and CRISPR screening enable high-throughput analysis of genetic perturbations at single-cell resolution. Understanding combinatorial perturbation effects is essential but challenging due to data sparsity and complex biological mechanisms. We present GPerturb, a Gaussian process-based sparse perturbation regression model designed to estimate gene-level perturbation effects. GPerturb employs an additive structure to separate signal from noise and captures sparse, interpretable effects from both discrete and continuous responses. It also provides uncertainty estimates for the presence and strength of perturbation effects on individual genes. We demonstrate the use GPerturb on both simulated and real-world datasets, characterising its competitive performance with current state-of-the-art methods. Furthermore, the model reveals meaningful gene-perturbation interactions and identifies effects consistent with known biology. GPerturb offers a novel approach for uncovering complex dependencies between gene expression and perturbations and advancing our understanding of gene regulation at the single-cell level. Single-cell CRISPR screens enable high-throughput analysis of how genetic changes affect individual cells. Here, authors present GPerturb, a method that accurately detects and quantifies gene-level effects of perturbations, with uncertainty estimates, revealing complex biological interactions."
tags:
  - "clippings"
---
## Abstract

Single-cell RNA sequencing and CRISPR screening enable high-throughput analysis of genetic perturbations at single-cell resolution. Understanding combinatorial perturbation effects is essential but challenging due to data sparsity and complex biological mechanisms. We present GPerturb, a Gaussian process-based sparse perturbation regression model designed to estimate gene-level perturbation effects. GPerturb employs an additive structure to separate signal from noise and captures sparse, interpretable effects from both discrete and continuous responses. It also provides uncertainty estimates for the presence and strength of perturbation effects on individual genes. We demonstrate the use GPerturb on both simulated and real-world datasets, characterising its competitive performance with current state-of-the-art methods. Furthermore, the model reveals meaningful gene-perturbation interactions and identifies effects consistent with known biology. GPerturb offers a novel approach for uncovering complex dependencies between gene expression and perturbations and advancing our understanding of gene regulation at the single-cell level.

## Introduction

Developments in Single-cell RNA sequencing (scRNA-seq) and Clustered Regularly Interspaced Short Palindromic Repeats (CRISPR) screening accelerate the discovery of association between genes and various biological processes such as immune responses, cell proliferation and drug resistance [^1] [^2] [^3] [^4] [^5] [^6]. In particular, technologies such as CROP sequencing (CROP-seq) [^7] and Perturb sequencing [^1] (Perturb-seq) have made high-throughput, large scale cellular perturbation screens possible. Such cellular perturbation screens allow practitioners to investigate complex biological mechanisms such as regulatory dependencies and drug responses on a single-cell level using the comprehensive, fine-grained readouts of the target perturbations within single cells, and have found applications in studies such as combinatorial therapy [^8] [^9], drug discovery [^10] and regulatory elements [^11] [^12].

The growing granularity of measurements provided by single-cell CRISPR screening technologies motivates the need for novel computational methods to help extracting interpretable biological insights from generated data particularly in relation to the perturbation effects. However, it is a challenging task due to the high dimensionality, complex structure and sparse nature of the single-cell screening measurements. Analytically, the problem is to produce a prediction model that can be used to provide an estimate of the effect of a perturbation on expression for any particular cell type or cell. The model can be developed using a training dataset that consists of a series of expression measurements on single cells, in which each cell belongs to one of a finite number of cell types and has been subject to one of a finite number of perturbations (including unperturbed controls).

A common approach has been to apply deep learning-based techniques to learn the relationships between cell type, perturbation and expression output flexibly from sufficiently large datasets. To do this, expression data and cell type information are typically transformed into *embeddings* via deep neural networks (DNNs), which are learnt low-dimensional projections of the original measurements, and then the effects of the perturbations are described in this embedding space. Perturbed embeddings can then be remapped back to expression measurements. If there are a large number of perturbations, embeddings may also be formed for the perturbations themselves. Models are trained against an objective which seeks to minimise the discrepancy between the observed perturbation effect and that predicted via the model. A bottlenecking effect in the design of the model architectures, which perform the various embedding and output transformations, leads to the creation of compressed representations that are optimised towards the maximal retention of information.

The Compositional Perturbation Autoencoder [^13] (CPA) is an example of such an approach. Given the measured unperturbed and perturbed expression of a cell, CPA predicts the counterfactual distribution of the expression of that cell had it been subjected to a different perturbation. CPA adopts an autoencoder learning framework and uses additive latent embedding of the cell and perturbation states. SAMS-VAE [^14] using a sparse additive mechanism shift variational autoencoder to characterise perturbation effects as sparse latent representations. In SAMS-VAE, the latent representation of a perturbed expression vector is obtained by adding a sparse representation of the perturbation to a dense perturbation-independent basal state, and the decoder is trained to reconstruct the perturbed expression vectors from latent representations. Other approaches have sought to embed additional external information about the expression features to improve predictions. GEARS [^15] uses a knowledge graph of gene-gene relationships to inform the prediction, allowing it to simulate the outcomes of perturbing unseen single genes or combinations of genes. Although not deep learning-based, CellOT [^16] leverages DNNs for function estimation in a neural optimal transport framework [^17] to map between unperturbed and perturbed single-cell responses.

More recently, single cell foundation models [^18] [^19] [^20] [^21] have emerged, which promise to provide a multi-functional basis for many analytical applications [^22]. However, the benefits of current foundation model approaches are not yet clear [^23] [^24] [^25] [^26] and fair evaluation is complicated by emerging applications that integrate direct empirical data with knowledge extracted from scientific literature or pre-trained foundation models [^25] [^27].

Non-deep learning approaches have also been developed. Guided Sparse Factor Analysis [^28] (GSFA) models continuous observations and adopts a linearity assumption in its multivariate latent factor regression approach.[^12] uses a variant of the “factorize-recover" algorithm to infer perturbation effects from composite sample phenotypes from compressed Perturb-seq experimental data using combination of sparse principal components analysis and LASSO regression. The attractiveness of such approaches is their comparative simplicity due to the use of linearity assumptions.

The plethora of computational perturbation modelling methods [^29] [^30] disguises many practical issues that are only apparent at usage time. For instance, assumptions in experimental setup and data preprocessing can be implicitly built into models. CPA assumes categorical cell-level information and continuous gene expression inputs but SAMS-VAE is not able to incorporate additional cell-level information, such as batch information or cell type, and can only handle binary perturbation and count-based expression inputs. GSFA utilises its own particular approach to input data transformation and normalisation. While CPA is able to process continuous perturbation levels (e.g., dosage), GEARS applies only to discrete perturbations as it uses perturbation embeddings and relational graphs between perturbations. Foundation models often require their own specific approaches for tokenisation and input data embedding. These model design differences, on a practical level, mean direct and intuitive comparisons between methods may not be possible both in terms of their predictions but also in terms of the explanations underlying those.

In this work, we propose a more conceptually classical approach for perturbation modelling, called **GPerturb**, which utilises hierarchical Bayesian modelling [^31] and Gaussian Process regression [^32]. We demonstrate that **GPerturb** can achieve high levels of predictive performance that is comparable to current state of the art perturbation models even using a sparse, additive modelling structure and without the use of latent embeddings or external information. Further, the modularity of the hierarchical construction allows us to examine the effect of swapping an observational data model based on count-based expression data for one which uses continuous transformed values instead. Despite the abundance of perturbation modelling methods available, **GPerturb** offers a novel and scalable generative modelling approach with classical features which make prediction output and their interpretation more readily understandable compared to methods based on black box learning.

## Results

### Overview

We first provide an overview of **GPerturb** (a more detailed mathematical description is provided in “ **Methods** ”), which is a generative model that aims to directly identify and estimate sparse, interpretable gene-level perturbation effects, for analysing single-cell CRISPR screening data. In **GPerturb**, we assume that each expression feature measured for each cell can be explained as a sample from a distribution. In the case where expression data is continuous, a normal distribution is used (zero-inflated Poisson for count-based data), where the mean expression level is given by the combination of two components. The first is a feature-specific basal expression level which is determined by the cell-specific parameters (e.g., cell type or cell-specific sequencing information). The second component is a feature-specific perturbation effect which depends on the type of perturbation applied to the cell (which can be null). To make it explicit that some perturbations will only affect certain features, the perturbation component for each feature is controlled by a binary on/off switch. The relationships that map cell-specific parameters and perturbation type to the observed expression levels are governed by nonlinear Gaussian processes.

**GPerturb** adopts a supervised learning approach to learn and disentangle the basal (unperturbed) expression distribution associated with a given cell type and the additive effect of perturbations given observed gene expression measurements (Fig. [1A](https://www.nature.com/articles/s41467-025-61165-7#Fig1)). Gaussian processes [^32] are used to model expression functions, and sparsity constraints aim to regularise the model and improve generalisation and robustness. The generative properties of **GPerturb** allow perturbed expression levels to be predicted (Fig. [1B](https://www.nature.com/articles/s41467-025-61165-7#Fig1)), and the sparsity in perturbation effects facilitate users in identifying details about complex perturbation-gene dependencies.

![Fig. 1: Overview of GPerturb.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig1_HTML.png?as=webp)

Fig. 1: Overview of GPerturb.

Compared with existing methods, **GPerturb** does not require a latent variable construction and incorporates uncertainty propagation in an intuitive way due to the Bayesian framework. It can be applied to either raw count (**GPerturb** -ZIP, for zero-inflated Poisson) or continuous transformed expression measurements (**GPerturb** -Gaussian). Further and detailed information about the model development and relationships to existing methods can be found in “ **Methods** ”.

### Single-gene perturbation analysis

We first compared the predictive performance of GPerturb, CPA, GEARS and SAMS-VAE on a subset of the genome-wide CRISPR interference Perturb-seq dataset.[^33] For all methods, the recommended settings are used. Since SAMS-VAE takes count-based data as inputs while CPA and GEARS require continuous expression inputs, we compare SAMS-VAE against **GPerturb** -ZIP and CPA and GEARS against **GPerturb** -Gaussian, respectively. Similar to previous studies, we randomly select 20% of the dataset as the test set, and use the rest to train GPerturb.

We compared the *averaged* predictions and *averaged* observations for each of the unique perturbations. For CPA, SAMS-VAE and GEARS, we computed and store the *average* of 1000 samples of reconstructed/predicted expressions drawn from the fitted model for each of the unique perturbations. Similarly, for **GPerturb**, we compute and store the *averaged* predicted mean expressions for each of the unique perturbations (i.e., averaged over all samples associated with a common perturbation). Table [1](https://www.nature.com/articles/s41467-025-61165-7#Tab1) shows the Pearson correlations between the predicted and observed expression levels for the perturbations which are illustrated in Fig. [2A, C](https://www.nature.com/articles/s41467-025-61165-7#Fig2). We see **GPerturb** -ZIP attains better correlation than SAMS-VAE (*r* <sub>GPerturb</sub>  = 0.972, *r* <sub>SAMS-VAE</sub>  = 0.944) for count-based inputs, while CPA-mlp achieved the best performance ahead of **GPerturb** -Gaussian and GEARS on continuous inputs (*r* <sub>CPA-mlp</sub>  = 0.984, *r* <sub>GPerturb</sub>  = 0.981, *r* <sub>GEARS</sub>  = 0.977).

**Table 1 Comparison of predictive performance**

![Fig. 2: Single-gene perturbation analysis.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig2_HTML.png?as=webp)

Fig. 2: Single-gene perturbation analysis.

While the overall correlation between predicted and observed expression was high, Fig. [2B, D](https://www.nature.com/articles/s41467-025-61165-7#Fig2) shows that the directionality of the perturbation effects given by different models did not always agree, with instances where one method might report that a perturbation gives increased gene expression while another method indicates that the perturbation leads to decreased expression. We quantified this observation in Table [2](https://www.nature.com/articles/s41467-025-61165-7#Tab2) by examining the directionality agreement over all gene-perturbation pairs. Figure [3A](https://www.nature.com/articles/s41467-025-61165-7#Fig3) shows the discrepancies in the exosome-related perturbation effects between **GPerturb** -Gaussian, CPA and GEARS for continuous expression input. In contrast, using count-based expression input, **GPerturb** -ZIP and SAMS-VAE showed greater consistency suggesting that the choice of pre-processing could have a considerable impact on perturbation modelling (Fig. [3B](https://www.nature.com/articles/s41467-025-61165-7#Fig3)). In order to further examine this, we were able to compare the outputs of **GPerturb** -Gaussian and **GPerturb** -ZIP on 345 perturbations grouped by pathways (Fig. [4](https://www.nature.com/articles/s41467-025-61165-7#Fig4)). This showed that given the same data set, the conversion from count-based to continuous-based expression (and the necessary changes in likelihood model in **GPerturb**) considerably changes the predicted perturbation effects.

**Table 2 Proportion of gene-perturbation pairs with agreement on directionality between methods**

![Fig. 3: Differences in exosome-related perturbation effects associated with model and pre-processing selection.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig3_HTML.png?as=webp)

Fig. 3: Differences in exosome-related perturbation effects associated with model and pre-processing selection.

![Fig. 4: Perturbations by pathway annotations.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig4_HTML.png?as=webp)

Fig. 4: Perturbations by pathway annotations.

### Multi-gene perturbation analysis

We next considered a Perturb-seq dataset [^34] consisting of 89,357 cells and 5045 genes and containing 131 two-gene perturbations. We compute the averaged predicted responses each method for each of the two-gene perturbations and compared to the corresponding averaged observations which are shown in Table [1](https://www.nature.com/articles/s41467-025-61165-7#Tab1) and Fig. [5A, C](https://www.nature.com/articles/s41467-025-61165-7#Fig5). Note that unlike the other methods, GEARS is able to predict perturbation outcomes of previously unseen multi-gene perturbations by using biological knowledge encoded in its knowledge graph. Although **GPerturb** does not use additional prior information as in GEARS, it attains comparable correlation on predictions for two-gene perturbations and outperforms CPA and SAMS-VAE (Table [1](https://www.nature.com/articles/s41467-025-61165-7#Tab1)). Interestingly, as in the previous experiments, the directionality of the perturbation effects between methods was not always consistent as illustrated in Fig. [5B, D](https://www.nature.com/articles/s41467-025-61165-7#Fig5) and quantified in Table [2](https://www.nature.com/articles/s41467-025-61165-7#Tab2).

![Fig. 5: Multi-gene perturbation analysis.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig5_HTML.png?as=webp)

Fig. 5: Multi-gene perturbation analysis.

We further compare GEARS and **GPerturb** using a highly multiplexed Perturb-seq dataset [^12] under the same setup. CPA and SAMS-VAE could not be applied to this data set due to the large number perturbations. We report the averaged predictions against the corresponding averaged observations for both methods in Fig. [5E](https://www.nature.com/articles/s41467-025-61165-7#Fig5). We see **GPerturb** and GEARS attain comparable predictions (*r* <sub>GPerturb</sub>  = 0.798, *r* <sub>GEARS</sub>  = 0.802), but predictions had high variance. Consequently, estimated perturbation effects for each perturbation-gene pair given by **GPerturb** and GEARS in Fig. [5F](https://www.nature.com/articles/s41467-025-61165-7#Fig5) showed weak correlation only. Unlike the previous examples, we see that even though the two methods have similar prediction accuracy, the scale of estimated perturbation effects given by GEARS is much smaller than **GPerturb**. The much more conservative perturbation estimations given by GEARS are likely due to the fact that less than 30% of the genetic perturbations is present in the Gene-Ontology (GO) knowledge graph in the current implementation of GEARS.[^12]

### Dosage-based perturbations

We next considered the SciPlex2 dataset [^2], where we examined a subset of A549 cells treated with one of the four compounds: dexamethasone (Dex), Nutlin-3a (Nutlin), BMS-345541 (BMS), or vorinostat (SAHA) across seven different doses. As a benchmark we conducted an analysis using CPA [^13], which requires four inputs for each prediction: the cell property, a perturbation type, the expression profile of the cell corresponding to that perturbation and the perturbation type for which we want to predict the expression profile. We recorded the averaged counterfactual predictions of the negative control samples (no perturbation) under each of the 28 unique perturbations (4 compounds × 7 dosages) as counterfactual treatments. For **GPerturb** we recorded the averaged predictions (i.e., prediction values averaged over all cells associated with a common perturbation) for each of the 28 unique perturbations. We then compare the averaged predictions associated with all unique perturbations to the averaged observations in Table [1](https://www.nature.com/articles/s41467-025-61165-7#Tab1) and found **GPerturb** outperformed two variants of CPA: CPA-mlp and CPA-logsig. The latter enforces monotonicity of the dose-response relationship in its latent space. In the case of **GPerturb**, the superior performance was achieved in the absence of requiring a basal expression profile as input as needed in CPA. Note that comparison with GEARS and SAMS-VAE was not possible since neither account for non-binary perturbations. We then further investigated the ability of **GPerturb** to model the dosage relationships. Figure [6](https://www.nature.com/articles/s41467-025-61165-7#Fig6) illustrates that the predicted dosage-dependent expression levels given by **GPerturb** are more aligned to the measured expression values than both CPA variants particularly for non-monotonic dependencies between drug doses and expression levels. In particular, for PDE4D, CDKN1A and MDM2, expression varies non-monotonically for BMS, which is not captured by the monotonicity constrained CPA-logsig.

![Fig. 6: Analysis of continuous dosage-based perturbations.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig6_HTML.png?as=webp)

Fig. 6: Analysis of continuous dosage-based perturbations.

A feature of the semiparametric model specification of **GPerturb** is that it can be used to identify distinct dosage response patterns by examining the gradient information of the estimated perturbation effects. We computed the integrated squared derivatives of the perturbation effects with respect to the dosage level exactly and efficiently using automatic differentiation within **GPerturb**. Large values of this metric allows us to identify genes that are the most sensitive to the dosage of perturbation while low values show no response at all. Examples are illustrated in Fig. [7A](https://www.nature.com/articles/s41467-025-61165-7#Fig7). Note that this derivative-based metric captures both monotonic and non-monotonic dosage dependent behaviours. Figure [7B](https://www.nature.com/articles/s41467-025-61165-7#Fig7) shows the distribution of the derivative metric for each drug on the log scale. In Fig. [7B](https://www.nature.com/articles/s41467-025-61165-7#Fig7), only a fraction of genes show high sensitivity to each drug, making it a useful metric for discovery. Figure [7C](https://www.nature.com/articles/s41467-025-61165-7#Fig7) illustrates example genes which exhibited sensitivity to multiple drugs.

![Fig. 7: Sensitivity to perturbations.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig7_HTML.png?as=webp)

Fig. 7: Sensitivity to perturbations.

### Comparisons to linear models

In this section, we apply **GPerturb** to a LUHMES neural progenitor cell CROP-seq dataset [^28], and compare its performance to GSFA. This study targets 14 neurodevelopmental genes, including 13 autism risk genes, in LUHMES human neural progenitor cells. The resulting dataset consisting of *N*  = 8708 samples and *P*  = 6000 selected genes. The perturbations were encoded as one-hot vectors of length 14, each element corresponding to one of the 14 targeted neurodevelopmental genes (i.e., 14 distinct perturbations). The cell information is a real vector of length 4 (lib\_size: number of total UMI counts, n\_features: number of genes with non-zero UMI readings, mt\_percent: percentage of mitochondrial gene expression and batch: batch ID). In addition to the one-hot perturbations, the dataset also consists of negative control gRNAs whose perturbations are encoded as zeros. For our proposed method, we randomly select 20% of the dataset as the test set, and use the rest to train **GPerturb**. For GSFA, the results are obtained based on the recommended settings [^28].

We further note that in the original study [^28], the authors first removed cell level information from the continuous expression inputs by regressing the expression data on the cell information and then apply GSFA to the corresponding standardized residual matrix. In contrast, **GPerturb** disentangles and estimates cell-level and perturbation-induced variations simultaneously, and does not require any additional standardisation. We provided input into **GPerturb** with and without this standardisation but note that the analysis is more interpretable on the original form as additional transformations can affect prediction power and quality.

Figure [8A](https://www.nature.com/articles/s41467-025-61165-7#Fig8) illustrates the predictions with **GPerturb** on the original data scale and after standardisation. While **GPerturb** shows good predictive performance without the GSFA standardisation applied to the data, it achieves similar correlative performance to GSFA when the data standardisation is used (Pearson correlation *r* <sub>GPerturb</sub>  = 0.248, *r* <sub>GSFA</sub>  = 0.182).

![Fig. 8: Comparison to GSFA.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41467-025-61165-7/MediaObjects/41467_2025_61165_Fig8_HTML.png?as=webp)

Fig. 8: Comparison to GSFA.

We also applied **GPerturb** -Gaussian to a primary human CD8+ T cells dataset [^28] in a similar fashion. This study targets 20 genes associated with the T cell response, in both stimulated and unstimulated T cells. The processed dataset consists of *N*  = 24,955 samples and *P*  = 6000 genes. The perturbations were encoded as one-hot vectors of length 20, which correspond to the 20 targeted genes in the study, and cell information was provided as a real vector of length 5 (lib\_size: number of total UMI counts, n\_features: number of genes with non-zero UMI readings, mt\_percent: percentage of mitochondrial gene expression, donor: T Cell donor ID and stimulated: whether or not the T Cell is stimulated).

In GSFA a modification is used to capture differences in perturbation effects between stimulated and unstimulated cells. We replicated the modification in **GPerturb** model to accommodate potentially different perturbation effects for stimulated and unsimulated T Cells. Similar to the previous example, we randomly select 20% of the dataset as the test set, and use the rest to train GPerturb. We report the fitted results in Fig. [8D](https://www.nature.com/articles/s41467-025-61165-7#Fig8). When comparing the predictive performance, GSFA showed greater correlation than **GPerturb** on the standardised data (*r* <sub>GPerturb</sub>  = 0.271, *r* <sub>GSFA</sub>  = 0.335). However, Fig. [8C](https://www.nature.com/articles/s41467-025-61165-7#Fig8) shows that the standardisation applied by GSFA was likely to be disadvantageous and unnecessary with **GPerturb** since it can be applied without the initial cell information regression step.

## Discussion

There are a number of state-of-the-art single-cell perturbation modelling methods currently available (including many not directly considered here), but a detailed analysis of the pre-processing, training and inference requirements of each method highlights significant differences in the approach and requirements associated with each method. While there has been considerable interest in deep learning based approaches, **GPerturb** adopts a more classical non-linear regression based modelling strategy, which provides a non-deep learning approach to support model training and prediction by focusing on directly modelling individual genes rather than via the use of latent representations in many other recent methods. Our analysis shows that **GPerturb** is capable of attaining state of the art performance despite these significant design differences and is highly versatile and computationally efficient (see Supplementary Table [1](https://www.nature.com/articles/s41467-025-61165-7#MOESM1)). A feature showed in our experimental results (Table [1](https://www.nature.com/articles/s41467-025-61165-7#Tab1)) is that **GPerturb** in both forms could be applied to all four examples, while other methods could only be used for a subset of these. This highlights the versatility of **GPerturb** as it is able to handle single, multi-gene, categorical and continuous perturbation inputs. While predictive performance derived from retrospective analysis of existing data sets is an extremely important metric, it is important to note that validation on independent experiments is vital.

Our experiments show that direct performance comparisons between methods must be interpreted carefully and may not always be applicable. For example, comparisons between GSFA and other methods were not shown since GSFA operates and returns results in terms of standardised input data residuals. In addition, we also tried to compare the estimated sparse perturbation effects given by **GPerturb** with SAMS-VAE and CPA, but found no straightforward way to do so due to the fact that **GPerturb** directly estimates sparse perturbation effects on the gene level, while CPA and SAMS-VAE focus on finding sparse low-dimensional embeddings of them. Furthermore, since our proposed **GPerturb** framework allows handling of both continuous normalised and count-based data using Gaussian and zero-inflated Poisson based likelihoods, we have observed that while the alternate versions of **GPerturb** attain comparable prediction accuracy with methods using comparable input data, the perturbation effects captured by the Gaussian and ZIP versions of **GPerturb** could be different. This highlights that variations in data processing and modelling could affect the conclusions drawn from the same raw data and adds a further source of uncertainty on the true validity of any biological insights drawn from perturbation prediction methods.

Our experiments are consistent with other recent more extensive evaluation studies [^25] [^26] [^35], which have also found that prediction performance is highly context-dependent and that no single method excels across all scenarios. These evaluations include recently developed single-cell foundation models, which can also be applied for perturbation effect prediction. In some cases, performance of these foundation models may be no better than simple linear models [^26]. The scalable Gaussian Process regression models we have introduced in **GPerturb** provide a highly-effective and complementary approach for single-cell perturbation modelling. These models can be of utility for direct prediction tasks or as a methodologically distinct benchmark for the development of new methods. Future work could examine extensions of this Gaussian Process framework as a credible non-deep learning based approach for handling multi-omics or spatially resolved molecular data.

## Methods

### GPerturb-Gaussian

We first discuss the model with **X** being a matrix of pre-processed continuous responses. We will give a counting data version of the model alongside with a schematic illustration of the additive modelling structure later.

Let \\({k}\_{{\\nu }\_{\\mu }},{k}\_{{\\nu }\_{\\gamma }},{k}\_{{\\nu }\_{\\eta }}:{{\\mathbb{R}}}^{L}\\times {{\\mathbb{R}}}^{L}\\to {\\mathbb{R}}\\) be Gaussian process kernels governed by kernel parameters *ν* <sub><i>μ</i></sub>, *ν* <sub><i>γ</i></sub>, *ν* <sub><i>η</i></sub>, respectively. Let \\({g}\_{\\mu },{g}\_{\\gamma },{g}\_{\\eta }:{{\\mathbb{R}}}^{L}\\to {\\mathbb{R}}\\) be the mean functions of the corresponding Gaussian processes.

We first define the gene-level additive perturbation model as follows:

$${m}\_{p}:{{\\mathbb{R}}}^{D}\\to {\\mathbb{R}};\\quad {\\lambda }\_{p}\\in {\\mathbb{R}};$$

(1)

$${\\mu }\_{p} \\sim {{\\mathcal{GP}}}({g}\_{\\mu },{k}\_{{\\nu }\_{\\mu }});\\quad {\\gamma }\_{p} \\sim {{\\mathcal{GP}}}({g}\_{\\gamma },{k}\_{{\\nu }\_{\\gamma }});$$

(2)

$${\\eta }\_{p} \\sim {{\\mathcal{GP}}}({g}\_{\\eta },{k}\_{{\\nu }\_{\\eta }});\\quad {z}\_{ip} \\sim {{\\rm{Bernoulli}}}\\left(\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right);$$

(3)

$${X}\_{ip} \\sim {{\\mathcal{N}}}\\left({m}\_{p}({{{\\bf{K}}}}\_{i})+{z}\_{ip}{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),\\log (\\exp ({\\lambda }\_{p}+{z}\_{ip}{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}))+1)\\right),$$

(4)

where \\(\\sigma (x)=\\frac{1}{1+\\exp (-x)}\\). In this model setup, *m* <sub><i>p</i></sub> is a fixed but unknown function that takes the cell-level information vector **K** <sub><i>i</i></sub> associated with the *i* th sample as input, and returns *m* <sub><i>p</i></sub> (**K** <sub><i>i</i></sub>) as the expected basal expression level of the *p* th gene in the *i* th sample. *λ* <sub><i>p</i></sub> is the basal variability parameter of the expression level of the *p* th gene shared across all samples *i*  = 1, …, *N*. *z* <sub><i>i</i> <i>p</i></sub> is a binary toggle controlling whether or not the expression level of the *p* th gene in the *i* th sample is perturbed by the perturbation vector **C** <sub><i>i</i></sub>. The success probability of *z* <sub><i>i</i> <i>p</i></sub> depends on **C** <sub><i>i</i></sub> through *η* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>), a random function *η* <sub><i>p</i></sub> evaluated at **C** <sub><i>i</i></sub> (Note that under our additive modelling setup, the binary toggles *z* <sub><i>i</i> <i>p</i></sub> are the same for all cells receiving the same perturbation). *μ* <sub><i>p</i></sub>, *γ* <sub><i>p</i></sub> are also random functions that take **C** <sub><i>i</i></sub> associated with the *i* th sample as input, and return *μ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>), *γ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>) as the potential mean- and variability-level perturbation effects on the expression level of the *p* th gene in the *i* th sample. Schematic illustration and graphical representation of the Gaussian model is given in Supplementary Fig. [1](https://www.nature.com/articles/s41467-025-61165-7#MOESM1).

We then assume the observed perturbed expression level *X* <sub><i>i</i> <i>p</i></sub> associated with perturbation **C** <sub><i>i</i></sub> and cell-level information **K** <sub><i>i</i></sub> follows a Gaussian distribution with mean being the sum of basal mean *m* <sub><i>p</i></sub> (**K** <sub><i>i</i></sub>) and mean-level perturbation effect *z* <sub><i>i</i> <i>p</i></sub> *μ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>), and variance being a positive function of the sum between the common basal variability *λ* <sub><i>p</i></sub> and a variability-level perturbation *z* <sub><i>i</i> <i>p</i></sub> *γ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>). We choose to use the function \\(\\log (\\exp (\\cdot )+1)\\) to map the unconstrained variability parameters to the positive real variance parameters since it is approximately linear when the magnitude of input is large, and therefore would partially retain the additive structure between the basal states and perturbation effects in a similar fashion to the mean parameters in comparison with e.g., \\(\\exp (\\cdot )\\).

Under our modelling setup, the parameters naturally partition into two groups: the random perturbation-specific parameters \\({\\{{\\mu }\_{p},{\\gamma }\_{p},{\\eta }\_{p},{\\{{z}\_{ip}\\}}\_{i=1}^{N}\\}}\_{p=1}^{P}\\), and the unknown but fixed basal level parameters \\({\\{{m}\_{p},{\\lambda }\_{p}\\}}\_{p=1}^{P}\\). We do not treat the basal level parameters as random variables since the primary objective of the model is to learn how the gene expression levels *X* <sub><i>i</i> <i>p</i></sub> respond to different perturbations. In the proposed model, the basal states only play the role of “intercept" or “offset", and is not of primary interest to us. In addition, treating the basal level parameters as unknown but fixed model parameters also simplifies the inference procedure and reduces the computational cost of the proposed model.

### GPerturb-ZIP

We now discuss the model for expression count data. Similar to the continuous model, we define the count data based gene-level additive perturbation model using a zero-inflated Poisson likelihood as follows

$${m}\_{p}:{{\\mathbb{R}}}^{D}\\to {\\mathbb{R}};\\quad {\\mu }\_{p} \\sim {{\\mathcal{GP}}}({g}\_{\\mu },{k}\_{{\\nu }\_{\\mu }});\\quad {\\eta }\_{p} \\sim {{\\mathcal{GP}}}({g}\_{\\gamma },{k}\_{{\\nu }\_{\\gamma }});$$

(5)

$${\\pi }\_{p}\\in (0,1);\\quad {z}\_{ip} \\sim {{\\rm{Bernoulli}}}\\left(\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right);$$

(6)

$${X}\_{ip} \\sim {{\\rm{ZIP}}}\\left(\\log (\\exp ({m}\_{p}({{{\\bf{K}}}}\_{i})+{z}\_{ip}{\\mu }\_{p}({{{\\bf{C}}}}\_{i}))+1),{\\pi }\_{p}\\right),$$

(7)

where *μ* <sub><i>p</i></sub>, *m* <sub><i>p</i></sub>, *η* <sub><i>p</i></sub>, *z* <sub><i>i</i> <i>p</i></sub> have the same interpretation as in the deviance-based model, *π* <sub><i>p</i></sub> is the proportion of excessive zeros on the *p* th gene shared across all samples *i*  = 1, …, *N*, and ZIP(*μ*, *π*) denotes a zero-inflated Poisson distribution with expected Poisson rate *μ* and probability of excessive zeros *π*. Note that our ZIP model does not aim to estimate the pattern of excessive zeros of the dataset. Hence the quantity *z* <sub><i>i</i> <i>p</i></sub> *μ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>)) should be interpreted as “the conditional perturbation effect given that the corresponding observation *X* <sub><i>i</i> <i>p</i></sub> is not an excessive zero". Schematic illustration and graphical representation of the Zero-inflated Poisson model is given in Supplementary Fig. [2](https://www.nature.com/articles/s41467-025-61165-7#MOESM1).

We also considered handling potential over-dispersion by modelling **X** using a zero-inflated Gamma-Poisson likelihood (a different parameterisation of Negative Binomial). However, we find the Gamma-Poisson model and Poisson model achieved similar level of prediction performance on real datasets, and the majority of estimated dispersion parameters are far less than 1, showing no strong sign of over-dispersion. Hence we focus on the Poisson model in this section for sake of simplicity. The details of the zero-inflated Gamma-Poisson model can be found in [Supplementary Information](https://www.nature.com/articles/s41467-025-61165-7#MOESM1).

For both the deviance-based Gaussian and the Zero-inflated Poisson model, we recommend setting *k* <sub><i>μ</i></sub>, *k* <sub><i>γ</i></sub>, *k* <sub><i>η</i></sub> to be RBF kernels \\(k({x}\_{1},{x}\_{2})={\\nu }^{(1)}\\exp (-{\\nu }^{(2)}| | {x}\_{1}-{x}\_{2}| {| }\_{2}^{2})\\) governed by kernel parameters \\({\\nu }\_{\\mu }^{(1)},{\\nu }\_{\\gamma }^{(1)},{\\nu }\_{\\eta }^{(1)}=1\\), \\({\\nu }\_{\\mu }^{(2)},{\\nu }\_{\\gamma }^{(2)},{\\nu }\_{\\eta }^{(2)}=0.1\\), *g* <sub><i>μ</i></sub>  =  *g* <sub><i>γ</i></sub>  = 0 and *g* <sub><i>η</i></sub>  = −3 as these prior specifications give satisfactory results in all of our numerical experiments. These choices of priors reflect our belief that all *μ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>) and *γ* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>) have the same marginal prior \\({{\\mathcal{N}}}(0,1)\\), and the prior on *σ* (*η* <sub><i>p</i></sub> (**C** <sub><i>i</i></sub>))), the inclusion probability of perturbation effect of **C** <sub><i>i</i></sub> on the *p* th gene, is concentrated at around 0.05. Alternative choices are also discussed in the following sections.

### Posterior inference

In this section, we discuss the posterior inference strategy of the proposed models. We first give the posterior inference procedure of the deviance-based model. Let \\({{\\boldsymbol{\\lambda }}}={\\{{\\lambda }\_{p}\\}}\_{p=1}^{P}\\). Let \\(p\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)\\) be the prior of the associated perturbation-specific parameters. Let

$$ p\\left({{\\bf{X}}}| {{\\bf{C}}},{{\\bf{K}}},{\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip},{m}\_{p}({{{\\bf{K}}}}\_{i})\\}}\_{i,p=1}^{N,P},{{\\boldsymbol{\\lambda }}}\\right)\\\\ ={\\prod }\_{i,p=1}^{N,P}{{\\mathcal{N}}}\\left({X}\_{ip};{m}\_{p}({{{\\bf{K}}}}\_{i})+{z}\_{ip}{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),\\log (\\exp ({\\lambda }\_{p}+{z}\_{ip}{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}))+1)\\right)$$

(8)

be the likelihood of the observed gene-expression level matrix **X** given the perturbation matrix **C**, the cell-level information matrix **K**, and all model parameters. Since the number of samples *N* and the number of genes *P* are usually large, jointly estimating the posterior \\(p\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}| {{\\bf{X}}},{{\\bf{C}}},{{\\bf{K}}},{\\{{m}\_{p}({K}\_{i})\\}}\_{i,p=1}^{N,P},{{\\boldsymbol{\\lambda }}}\\right)\\) is computationally infeasible. We therefore use amortised variational inference [^36] to address this issue: Let \\({f}\_{{{\\boldsymbol{\\xi }}}}:{{\\mathbb{R}}}^{L}\\to {{\\mathbb{R}}}^{6P}\\) be a neural network parameterized by a real vector ***ξ***. We approximate the full posterior \\(p\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}| {{\\bf{X}}},{{\\bf{C}}},{{\\bf{K}}},{\\{{m}\_{p}({K}\_{i})\\}}\_{i,p=1}^{N,P},{{\\boldsymbol{\\lambda }}}\\right)\\) using the following variational posterior:

$${q}\_{{{\\boldsymbol{\\xi }}}}\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)= {\\prod }\_{i,p=1}^{N,P}\\left({{\\mathcal{N}}}\\left({\\mu }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\xi }}}}^{(p)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+P)}({{{\\bf{C}}}}\_{i}))\\right)\\right.\\\\ \\times {{\\mathcal{N}}}\\left({\\gamma }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\xi }}}}^{(p+2P)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+3P)}({{{\\bf{C}}}}\_{i}))\\right) \\\\ \\times {{\\mathcal{N}}}\\left({\\eta }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\xi }}}}^{(p+4P)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+5P)}({{{\\bf{C}}}}\_{i}))\\right)\\\\ \\left.\\times {{\\rm{Bernoulli}}}\\left({z}\_{ip};\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right)\\right),$$

(9)

where \\({f}\_{{{\\boldsymbol{\\xi }}}}^{(p)}({{{\\bf{C}}}}\_{i})\\) denotes the *p* th entry of *f* <sub><b><i>ξ</i></b></sub> (**C** <sub><i>i</i></sub>), \\({{\\mathcal{N}}}(\\cdot;\\mu,{s}^{2})\\) denotes a Gaussian p.d.f. with mean *μ* and variance *s* <sup>2</sup>, and Bernoulli( ⋅; *π*) denotes a Bernoulli p.m.f. with success probability *π*. Similarly, for the fixed but unknown basal level functions \\({\\{{m}\_{p}\\}}\_{p=1}^{P}\\), we let \\({f}\_{{{\\boldsymbol{\\phi }}}}:{{\\mathbb{R}}}^{D}\\to {{\\mathbb{R}}}^{P}\\) be a neural network parameterized by a real vector ***ϕ***, and use \\({f}\_{{{\\boldsymbol{\\phi }}}}^{(p)}({{{\\bf{K}}}}\_{i})\\) to parameterize *m* <sub><i>p</i></sub> (**K** <sub><i>i</i></sub>) for all *i*  = 1, …, *N* and *p*  = 1, …, *P*. The evidence lower bound (ELBO) of the deviance-based model then takes the form

$${{{\\rm{ELBO}}}}\_{G}({{\\boldsymbol{\\xi }}},{{\\boldsymbol{\\phi }}},{{\\boldsymbol{\\lambda }}};{{\\bf{X}}},{{\\bf{C}}},{{\\bf{K}}})= {E}\_{{q}\_{{{\\boldsymbol{\\xi }}}}}\\left(\\log p({{\\bf{X}}}| {{\\bf{C}}},{{\\bf{K}}},{\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip},{f}\_{{{\\boldsymbol{\\phi }}}}^{(p)}({K}\_{i})\\}}\_{i,p=1}^{N,P},{{\\boldsymbol{\\lambda }}})\\right)\\\\ -KL\\left({q}\_{{{\\boldsymbol{\\xi }}}}\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right), \\right.\\\\ \\left. p\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)\\right),$$

(10)

where \\({E}\_{{q}\_{{{\\boldsymbol{\\xi }}}}}\\) denotes expectation with respect to the variational posterior *q* <sub><b><i>ξ</i></b></sub>. We estimate the variational posterior *q* <sub><b><i>ξ</i></b></sub> and all other model parameters by maximizing (an empirical version of) ELBO <sub><i>G</i></sub> (***ξ***, ***ϕ***, ***λ***; **X**, **C**, **K**). The Bernoulli random variables in Eq. ([9](https://www.nature.com/articles/s41467-025-61165-7#Equ9)) is approximated using Gumbel softmax [^37].

Let \\(\\{{{{\\boldsymbol{\\xi }}}}^{\*},{{{\\boldsymbol{\\phi }}}}^{\*},{{{\\boldsymbol{\\lambda }}}}^{\*}\\}=\\arg {\\max }\_{{{\\boldsymbol{\\xi }}},{{\\boldsymbol{\\phi }}},{{\\boldsymbol{\\lambda }}}}{{{\\rm{ELBO}}}}\_{G}({{\\boldsymbol{\\xi }}},{{\\boldsymbol{\\phi }}},{{\\boldsymbol{\\lambda }}};{{\\bf{X}}},{{\\bf{C}}},{{\\bf{K}}})\\). Once the model has been fitted, we can then construct both approximate point and interval estimates of parameters of our interest. For example, let \\({{{\\bf{C}}}}^{{\\prime} }\\) be a generic perturbation vector. One can form approximate point or interval estimates of the posterior inclusion probability \\(\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}^{{\\prime} }))\\), which controls if the expression level of the *p* th gene is perturbed by \\({{{\\bf{C}}}}^{{\\prime} }\\), using the variational posterior \\({q}\_{{{{\\boldsymbol{\\xi }}}}^{\*}}({\\eta }\_{p}({{{\\bf{C}}}}^{{\\prime} }))={{\\mathcal{N}}}\\left({f}\_{{{{\\boldsymbol{\\xi }}}}^{\*}}^{(p+4P)}({{{\\bf{C}}}}^{{\\prime} }),\\exp ({f}\_{{{{\\boldsymbol{\\xi }}}}^{\*}}^{(p+5P)}({{{\\bf{C}}}}^{{\\prime} }))\\right)\\). Compared with LFSR [^38] used in GSFR [^28], identifying perturbation effects using posterior inclusion probability is more intuitive and interpretable thanks to the full Bayesian framework of the proposed model.

We now discuss the posterior inference of the Zero-inflated Poisson model. It can be parameterised and estimated in a similar fashion to the deviance-based model: Let \\({{\\boldsymbol{\\pi }}}={\\{{\\pi }\_{p}\\}}\_{p=1}^{P}\\). Let \\(p\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)\\) be the prior of the associated perturbation-specific parameters in the Zero-inflated Poisson model. Let

$$\\begin{array}{rcl}&&p\\left({{\\bf{X}}}| {{\\bf{C}}},{{\\bf{K}}},{\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip},{m}\_{p}({{{\\bf{K}}}}\_{i})\\}}\_{i,p=1}^{N,P},{{\\boldsymbol{\\pi }}}\\right)\\\\ &&=\\mathop{\\prod }\_{i,p=1}^{N,P}{{\\rm{ZIP}}}\\left({X}\_{ip};\\log (\\exp ({m}\_{p}({{{\\bf{K}}}}\_{i})+{z}\_{ip}{\\mu }\_{p}({{{\\bf{C}}}}\_{i}))+1),{\\pi }\_{p}\\right)\\end{array}$$

(11)

be the likelihood of the raw counting data **X**, where ZIP( ⋅; *μ*, *π*) is the p.m.f. of a Zero-Inflated Poisson distribution with Poisson rate *μ* and probability of excessive zeros *π*. Similar to the deviance-based model, let \\({f}\_{{{\\boldsymbol{\\theta }}}}:{{\\mathbb{R}}}^{L}\\to {{\\mathbb{R}}}^{4P}\\) be a neural network parameterised by a real vector ***θ***. Let

$${q}\_{{{\\boldsymbol{\\theta }}}}\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)= {\\prod }\_{i,p=1}^{N,P}\\left({{\\mathcal{N}}}\\left({\\mu }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\theta }}}}^{(p)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\theta }}}}^{(p+P)}({{{\\bf{C}}}}\_{i}))\\right)\\right.\\\\ \\left.\\times {{\\mathcal{N}}}\\left({\\eta }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\theta }}}}^{(p+2P)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\theta }}}}^{(p+3P)}({{{\\bf{C}}}}\_{i}))\\right) \\right. \\\\ \\left. \\times {{\\rm{Bernoulli}}}\\left({z}\_{ip};\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right)\\right),$$

(12)

be the variational posterior of the perturbation-specific parameters \\({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\). As in the deviance-based model, we use *f* <sub><b><i>ϕ</i></b></sub> (*K* <sub><i>i</i></sub>) to parameterize the basal level parameter *m* <sub><i>p</i></sub> (*K* <sub><i>i</i></sub>) for all *i*  = 1, …, *N* and *p*  = 1, …, *P*. Then the ELBO of the Zero-inflated Poisson model ELBO <sub><i>P</i></sub> (***θ***, ***ϕ***, ***π***; **X**, **C**, **K**) is defined in a similar fashion to Eq. ([10](https://www.nature.com/articles/s41467-025-61165-7#Equ10)), and the model parameters are estimated by maximizing (an empirical version of) ELBO <sub><i>P</i></sub> (***θ***, ***ϕ***, ***π***; **X**, **C**, **K**) with respect to { ***θ***, ***ϕ***, ***π*** }.

### Magnitudes of perturbation vectors

In our proposed methods, the perturbation vector **C** <sub><i>i</i></sub> can either be binary (indicating the presence of a perturbation) or continuous (representing e.g., dosage). When **C** <sub><i>i</i></sub> represents the continuous dosage of a perturbation, we expect that the potential perturbation effects is positively correlated to the dosage (at least in a sensible range before some ceiling effects). Similarly, when **C** <sub><i>i</i></sub>  =  **0** (i.e., no perturbation at all), we expect there is no potential perturbation effects. To impose these physical constraints, we recommend modifying the model and inference procedure as follows (Here we focus on the deviance based model. The zero-inflated Poisson model can be modified in a similar fashion): We first replace the standard RBF kernels on *ν* <sub><i>μ</i></sub>, *ν* <sub><i>γ</i></sub> by a modified “zero-passing" RBF kernel [^39]. This modification ensures that samples \\({\\{{\\mu }\_{p},{\\gamma }\_{p}\\}}\_{p=1}^{P}\\) drawn from the modified Gaussian process prior would satisfy \\({\\{{\\mu }\_{p}({{\\bf{0}}})={\\gamma }\_{p}({{\\bf{0}}})=0\\}}\_{p=1}^{P}\\). We also replace the generative process of *z* <sub><i>i</i> <i>p</i></sub> with \\({z}\_{ip} \\sim {{\\rm{Bernoulli}}}\\left({\\mathbb{1}}(| | {{{\\bf{C}}}}\_{i}| {| }\_{2}^{2}\\ne 0)\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right)\\), which ensures that no *z* <sub><i>i</i> <i>p</i></sub> would be triggered when the input **C** <sub><i>i</i></sub>  =  **0**. This choice also reflects our prior belief that even though the potential effects of a perturbation **C** <sub><i>i</i></sub> depends on its magnitude, whether or not a gene is perturbed only depends on the presence of the perturbation (i.e., \\(| | {{{\\bf{C}}}}\_{i}| {| }\_{2}^{2}\\ne 0\\)), but not the scale of it. Similar constraints have also been used previously [^13] [^14].

In addition to the generative process, we also adjust the inference procedure accordingly. We modify the variational posterior in Eqn. ([9](https://www.nature.com/articles/s41467-025-61165-7#Equ9)) as follows:

$$ {q}\_{{{\\boldsymbol{\\xi }}}}^{{\\prime} }\\left({\\{{\\mu }\_{p}({{{\\bf{C}}}}\_{i}),{\\gamma }\_{p}({{{\\bf{C}}}}\_{i}),{\\eta }\_{p}({{{\\bf{C}}}}\_{i}),{z}\_{ip}\\}}\_{i,p=1}^{N,P}\\right)={\\prod }\_{i,p=1}^{N,P}\\left({{\\mathcal{N}}}\\left({\\mu }\_{p}({{{\\bf{C}}}}\_{i});| | {{{\\bf{C}}}}\_{i}| {| }\_{2}{f}\_{{{\\boldsymbol{\\xi }}}}^{(p)}({{{\\bf{C}}}}\_{i}),| | {{{\\bf{C}}}}\_{i}| {| }\_{2}^{2}\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+P)}({{{\\bf{C}}}}\_{i}))\\right)\\right.\\\\ \\times {{\\mathcal{N}}}\\left({\\gamma }\_{p}({{{\\bf{C}}}}\_{i});| | {{{\\bf{C}}}}\_{i}| {| }\_{2}{f}\_{{{\\boldsymbol{\\xi }}}}^{(p+2P)}({{{\\bf{C}}}}\_{i}),| | {{{\\bf{C}}}}\_{i}| {| }\_{2}^{2}\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+3P)}({{{\\bf{C}}}}\_{i}))\\right)\\times {{\\mathcal{N}}}\\left({\\eta }\_{p}({{{\\bf{C}}}}\_{i});{f}\_{{{\\boldsymbol{\\xi }}}}^{(p+4P)}({{{\\bf{C}}}}\_{i}),\\exp ({f}\_{{{\\boldsymbol{\\xi }}}}^{(p+5P)}({{{\\bf{C}}}}\_{i}))\\right)\\\\ \\left.\\times {{\\rm{Bernoulli}}}\\left({z}\_{ip};{\\mathbb{1}}(| | {{{\\bf{C}}}}\_{i}| {| }\_{2}^{2}\\ne 0)\\sigma ({\\eta }\_{p}({{{\\bf{C}}}}\_{i}))\\right)\\right).$$

(13)

Here we rescale the variational posterior of the mean- and viability-level perturbation by a factor ∣∣ **C** <sub><i>i</i></sub> ∣∣ <sub>2</sub>. This ensures that both terms would be zero when there is no perturbation, and would explicitly depend on the size of **C** <sub><i>i</i></sub> otherwise. We also modify the variational distribution of *z* <sub><i>i</i> <i>p</i></sub> in the same way as in the generative process. These modification ensures that both generative process and posterior inference are inline with the physical constraints discussed above. We use this modified generative process and inference procedure as our default model setup for the rest of the paper.

### Single gene perturbation

The Perturb-Seq dataset [^33] was pre-processed and filtered using the previously described pre-processing steps [^14] [^40]. The resulting dataset \\({{\\bf{X}}}\\in {{\\mathbb{N}}}^{N\\times P}\\) consists of counting data of *N*  = 118, 461 cells and *P*  = 1187 genes. For *i*  = 1, …, *N*, the perturbation \\({{{\\bf{C}}}}\_{i}\\in {{\\mathbb{R}}}^{L}\\) is either a length *L*  = 722 one-hot vector, representing one of the 722 unique CRISPR guides (perturbations), or a zero vector, representing the perturbation associated with negative controls (non-targeting CRISPR guides). The non-targeting negative controls are treated as the baseline level. The cell information \\({{{\\bf{K}}}}\_{i}\\in {{\\mathbb{R}}}^{D}\\) is a length *D*  = 4 real vector (lib\_size: total number of UMI counts, n\_features: number of genes with non-zero UMI readings, mt\_percent: percentage of mitochondrial gene expression, scale\_factor: core scale factor).

### Multigene perturbation prediction

We compared GPerturb’s performance on predicting multi-gene perturbation outcomes with the knowledge-graph informed GEARS using the Perturb-seq dataset [^15] [^34]. We followed a previously described data-preprocessing process.[^15] The resulting dataset \\({{\\bf{X}}}\\in {{\\mathbb{R}}}^{N\\times P}\\) consists of *N*  = 89, 357 cells and *P*  = 5045 genes. For *i*  = 1, …, *N*, the perturbation \\({{{\\bf{C}}}}\_{i}\\in {{\\mathbb{R}}}^{L}\\) is a length *L*  = 103 binary vector where the positions of ones encode the perturbed genes. (The dataset consists of 131 two-gene perturbations.) The cell information \\({{{\\bf{K}}}}\_{i}\\in {{\\mathbb{R}}}^{D}\\) is a length *D*  = 2 real vector (lib\_size: total number of UMI counts, n\_features: number of genes with non-zero UMI readings). We randomly select 20% of the dataset as the test set, and use the rest as training set. For both our GPerturb and GEARS, the recommended settings are used to fit the models.

We further compared GPerturb with GEARS using the multiplexed Perturb-seq dataset [^12] using the same procedure described above. We follow the data-preprocessing process given by the authors. The resulting dataset \\({{\\bf{X}}}\\in {{\\mathbb{R}}}^{N\\times P}\\) consists of *N*  = 24,192 cells and *P*  = 15,668 genes. For *i*  = 1, …, *N*, the perturbation \\({{{\\bf{C}}}}\_{i}\\in {{\\mathbb{R}}}^{L}\\) is a length *L*  = 600 binary vector where the positions of ones encode the perturbed genes. The cell information \\({{{\\bf{K}}}}\_{i}\\in {{\\mathbb{R}}}^{D}\\) is a length *D* = 3 real vector (lib\_size: total number of UMI counts, n\_features: number of genes with non-zero UMI readings and mt\_percent: percentage of mitochondrial gene expression). We compare the performance of GEARS and GPerturb under the same setting described above.

### SciPlex2

The SciPlex2 dataset [^2] ([GSM4150377](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM4150377)) consists of A549 cells treated with one of the four compounds: dexamethasone (Dex), Nutlin-3a (Nutlin), BMS-345541 (BMS), or vorinostat (SAHA) across seven different doses. We follow previously described data pre-processing steps.[^13] The resulting dataset \\({{\\bf{X}}}\\in {{\\mathbb{R}}}^{N\\times P}\\) consists of *N*  = 20,643 cells and *P*  = 5000 genes. For *i*  = 1, …, *N*, the perturbation \\({{{\\bf{C}}}}\_{i}\\in {{\\mathbb{R}}}^{L}\\) is a length *L*  = 4 vector with only one non-zero entry whose position and value encode the compound type and dosage, respectively. Similar to the previous sections, the perturbation associated with negative controls are encoded as **C** <sub><i>i</i></sub>  =  ***0*** and treated as the baseline level. The cell information \\({{{\\bf{K}}}}\_{i}\\in {{\\mathbb{R}}}^{D}\\) is a length *D*  = 2 real vector (lib\_size: total number of UMI counts, n\_features: number of genes with non-zero UMI readings). We randomly select 20% of the dataset as the test set, and use the rest to train GPerturb. For both Gaussian GPerturb and CPA, the recommended settings are used to fit the models.

### Derivative metrics for identification of dosage patterns

We denote \\({\\hat{D}}\_{i,j}(x)\\) as the estimated perturbation effect of perturbation *j* on gene *i* at dosage level *x*. Due to the semiparametric specification of GPerturb, we can compute \\(\\frac{d}{dx}{\\hat{D}}\_{i,j}(x)\\), the derivative of the perturbation effects with respect to the dosage level *x*, exactly and efficiently (thanks to automatic differentiation) and use the derivative information to capture interesting perturbation patterns.

We identify genes that are the most sensitive to the dosage of perturbation *j* by investigating the integral of the squared derivative \\({\\hat{D}}\_{i}^{j}=\\int\_{{A}\_{\\min }^{j}}^{{A}\_{\\max }^{j}}{\\left(\\frac{d}{dx}{\\hat{D}}\_{i,j}(x)\\right)}^{2}dx\\) for each gene *i* in the data set, where \\({A}\_{\\min }^{j},{A}\_{\\max }^{j}\\) are the minimum and maximum dosage of perturbation *j* respectively.

We choose the integral of the squared derivative as a measure of sensitivity since this quantity equals zero if and only if \\({\\hat{D}}\_{i,j}(x)\\) equals some constant, indicating that the perturbation effect does not depend on dosage at all, and is large only if the magnitude of rate of change in the perturbation effect is large over the interval \\(\[{A}\_{\\min }^{j},{A}\_{\\max }^{j}\]\\).

### Reporting summary

Further information on research design is available in the [Nature Portfolio Reporting Summary](https://www.nature.com/articles/s41467-025-61165-7#MOESM2) linked to this article.

## Data availability

The Sciplex2 dataset with associated metadata were obtained from [https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM4150377](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM4150377). The raw Perturb-Seq dataset from Replogle et al.[^33] was obtained from [https://gwps.wi.mit.edu](https://gwps.wi.mit.edu/). The raw Perturb-Seq dataset from Norman et al.[^34] was obtained from [https://dataverse.harvard.edu/api/access/datafile/6154020](https://dataverse.harvard.edu/api/access/datafile/6154020). The raw Perturb-Seq dataset from Yao et al.[^12] was obtained from [https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE221321](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE221321). All processed data, count matrices and results (including pre-trained models and visualisation) are available at [https://figshare.com/articles/dataset/GPerturb\_Gaussian\_process\_modelling\_of\_single-cell\_perturbation\_data/26491588](https://figshare.com/articles/dataset/GPerturb_Gaussian_process_modelling_of_single-cell_perturbation_data/26491588). Attribution to elements in Fig. [1A](https://www.nature.com/articles/s41467-025-61165-7#Fig1): [Red blood cells icon](https://www.flaticon.com/free-icons/red-blood-cells), [Gene icon](https://www.flaticon.com/free-icons/gene-therapy). [Source data](https://www.nature.com/articles/s41467-025-61165-7#Sec20) are provided with this paper.

## Code availability

The code used to develop the model, perform the analyses and generate results in this study is publicly available and has been deposited in Github repository **GPerturb** at [https://github.com/hwxing3259/GPerturb](https://github.com/hwxing3259/GPerturb), under MIT license. The specific version of the code associated with this publication is archived in Zenodo and is accessible via [https://doi.org/10.5281/zenodo.15305114](https://doi.org/10.5281/zenodo.15305114).

## References

## Acknowledgements

The authors are supported by an EPSRC Turing AI Acceleration Fellowship (Grant Ref: EP/V023233/1).

## Ethics declarations

### Competing interests

The authors declare no competing interests.

## Peer review

### Peer review information

*Nature Communications* thanks the anonymous reviewer(s) for their contribution to the peer review of this work. A peer review file is available.

## Additional information

**Publisher’s note** Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Source data

### Source Data (download ZIP )

## Rights and permissions

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit [http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/).

[^1]: Dixit, A. et al. Perturb-seq: dissecting molecular circuits with scalable single-cell RNA profiling of pooled genetic screens. *Cell* **167**, 1853–1866 (2016).

[Article](https://doi.org/10.1016%2Fj.cell.2016.11.038) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC28XitFWlsrvI) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27984732) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5181115) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Perturb-seq%3A%20dissecting%20molecular%20circuits%20with%20scalable%20single-cell%20RNA%20profiling%20of%20pooled%20genetic%20screens&journal=Cell&doi=10.1016%2Fj.cell.2016.11.038&volume=167&pages=1853-1866&publication_year=2016&author=Dixit%2CA)

[^2]: Srivatsan, S. R. et al. Massively multiplex chemical transcriptomics at single-cell resolution. *Science* **367**, 45–51 (2020).

[Article](https://doi.org/10.1126%2Fscience.aax6234) [ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2020Sci...367...45S) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3cXmvFemsg%3D%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=31806696) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Massively%20multiplex%20chemical%20transcriptomics%20at%20single-cell%20resolution&journal=Science&doi=10.1126%2Fscience.aax6234&volume=367&pages=45-51&publication_year=2020&author=Srivatsan%2CSR)

[^3]: Buquicchio, F. A. & Satpathy, A. T. Interrogating immune cells and cancer with CRISPR-Cas9. *Trends Immunol.* **42**, 432–446 (2021).

[Article](https://doi.org/10.1016%2Fj.it.2021.03.003) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3MXntVygs7w%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=33812776) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9345562) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Interrogating%20immune%20cells%20and%20cancer%20with%20CRISPR-Cas9&journal=Trends%20Immunol.&doi=10.1016%2Fj.it.2021.03.003&volume=42&pages=432-446&publication_year=2021&author=Buquicchio%2CFA&author=Satpathy%2CAT)

[^4]: Shalem, O. et al. Genome-scale CRISPR-Cas9 knockout screening in human cells. *Science* **343**, 84–87 (2014).

[Article](https://doi.org/10.1126%2Fscience.1247005) [ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2014Sci...343...84S) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2cXkslyj) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=24336571) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genome-scale%20CRISPR-Cas9%20knockout%20screening%20in%20human%20cells&journal=Science&doi=10.1126%2Fscience.1247005&volume=343&pages=84-87&publication_year=2014&author=Shalem%2CO)

[^5]: Rosati, D. & Giordano, A. Single-cell RNA sequencing and bioinformatics as tools to decipher cancer heterogenicity and mechanisms of drug resistance. *Biochem. Pharmacol.* **195**, 114811 (2022).

[Article](https://doi.org/10.1016%2Fj.bcp.2021.114811) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3MXisFCgt7bM) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=34673017) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Single-cell%20RNA%20sequencing%20and%20bioinformatics%20as%20tools%20to%20decipher%20cancer%20heterogenicity%20and%20mechanisms%20of%20drug%20resistance&journal=Biochem.%20Pharmacol.&doi=10.1016%2Fj.bcp.2021.114811&volume=195&publication_year=2022&author=Rosati%2CD&author=Giordano%2CA)

[^6]: Bock, C. et al. High-content CRISPR screening. *Nat. Rev. Methods Prim.* **2**, 1–23 (2022).

[ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2022NIMPB.530....1B) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=High-content%20CRISPR%20screening&journal=Nat.%20Rev.%20Methods%20Prim.&volume=2&pages=1-23&publication_year=2022&author=Bock%2CC)

[^7]: Datlinger, P. et al. Pooled CRISPR screening with single-cell transcriptome readout. *Nat. Methods* **14**, 297–301 (2017).

[Article](https://doi.org/10.1038%2Fnmeth.4177) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXhtlKjsrk%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=28099430) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5334791) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Pooled%20CRISPR%20screening%20with%20single-cell%20transcriptome%20readout&journal=Nat.%20Methods&doi=10.1038%2Fnmeth.4177&volume=14&pages=297-301&publication_year=2017&author=Datlinger%2CP)

[^8]: Al-Lazikani, B., Banerji, U. & Workman, P. Combinatorial drug therapy for cancer in the post-genomic era. *Nat. Biotechnol.* **30**, 679–692 (2012).

[Article](https://doi.org/10.1038%2Fnbt.2284) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC38XpvFGmtLg%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=22781697) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Combinatorial%20drug%20therapy%20for%20cancer%20in%20the%20post-genomic%20era&journal=Nat.%20Biotechnol.&doi=10.1038%2Fnbt.2284&volume=30&pages=679-692&publication_year=2012&author=Al-Lazikani%2CB&author=Banerji%2CU&author=Workman%2CP)

[^9]: Aissa, A. F. et al. Single-cell transcriptional changes associated with drug tolerance and response to combination therapies in cancer. *Nat. Commun.* **12**, 1628 (2021).

[Article](https://doi.org/10.1038%2Fs41467-021-21884-z) [ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2021NatCo..12.1628A) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3MXmslKju7c%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=33712615) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7955121) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Single-cell%20transcriptional%20changes%20associated%20with%20drug%20tolerance%20and%20response%20to%20combination%20therapies%20in%20cancer&journal=Nat.%20Commun.&doi=10.1038%2Fs41467-021-21884-z&volume=12&publication_year=2021&author=Aissa%2CAF)

[^10]: Van de Sande, B. et al. Applications of single-cell RNA sequencing in drug discovery and development. *Nat. Rev. Drug Discov.* **22**, 1–25 (2023).

[^11]: Jin, X. et al. In vivo perturb-seq reveals neuronal and glial abnormalities associated with autism risk genes. *Science* **370**, eaaz6063 (2020).

[Article](https://doi.org/10.1126%2Fscience.aaz6063) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3cXisVOmu7nP) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=33243861) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7985844) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=In%20vivo%20perturb-seq%20reveals%20neuronal%20and%20glial%20abnormalities%20associated%20with%20autism%20risk%20genes&journal=Science&doi=10.1126%2Fscience.aaz6063&volume=370&publication_year=2020&author=Jin%2CX)

[^12]: Yao, D. et al. Scalable genetic screening for regulatory circuits using compressed perturb-seq. *Nat. Biotechnol.* **42**, 1–14 (2023).

[^13]: Lotfollahi, M. et al. Predicting cellular responses to complex perturbations in high-throughput screens. *Mol. Syst. Biol.* **19**, e11517 (2023).

[^14]: Bereket, M. & Karaletsos, T. Modelling cellular perturbations with the sparse additive mechanism shift variational autoencoder. In *Thirty-seventh Conference on Neural Information Processing Systems* (eds Oh, A. et al.) (Curran Associates Inc., 2023).

[^15]: Roohani, Y., Huang, K. & Leskovec, J. Predicting transcriptional outcomes of novel multigene perturbations with gears. *Nat. Biotechnol.* **42**, 1–9 (2023).

[^16]: Bunne, C. et al. Learning single-cell perturbation responses using neural optimal transport. *Nat. Methods* **20**, 1759–1768 (2023).

[Article](https://doi.org/10.1038%2Fs41592-023-01969-x) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3sXitVaqsrfI) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37770709) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10630137) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Learning%20single-cell%20perturbation%20responses%20using%20neural%20optimal%20transport&journal=Nat.%20Methods&doi=10.1038%2Fs41592-023-01969-x&volume=20&pages=1759-1768&publication_year=2023&author=Bunne%2CC)

[^17]: Korotin, A., Selikhanovych, D. & Burnaev, E. Neural optimal transport. *The Eleventh International Conference on Learning Representations, {ICLR} 2023, Kigali, Rwanda, May 1-5, 2023*. (eds Hofmann, K., Liu, Y. & Mohamed, S.) (OpenReview.net, 2023).

[^18]: Theodoris, C. V. et al. Transfer learning enables predictions in network biology. *Nature* **618**, 616–624 (2023).

[Article](https://doi.org/10.1038%2Fs41586-023-06139-9) [ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2023Natur.618..616T) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3sXhtFaqtrbL) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37258680) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10949956) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Transfer%20learning%20enables%20predictions%20in%20network%20biology&journal=Nature&doi=10.1038%2Fs41586-023-06139-9&volume=618&pages=616-624&publication_year=2023&author=Theodoris%2CCV)

[^19]: Hao, M. et al. Large-scale foundation model on single-cell transcriptomics. *Nat. Methods* **21**, 1–11 (2024).

[^20]: Cui, H. et al. scgpt: toward building a foundation model for single-cell multi-omics using generative AI. *Nat. Methods* **21**, 1–11 (2024).

[^21]: Chen, Y. & Zou, J. Genept: a simple but effective foundation model for genes and cells built from ChatGPT. Preprint at *bioRxiv* 2023–10 (2024).

[^22]: Ma, Q., Jiang, Y., Cheng, H. & Xu, D. Harnessing the deep learning power of foundation models in single-cell omics. *Nat. Rev. Mol. Cell Biol.* **25**, 593–594 (2024).

[Article](https://doi.org/10.1038%2Fs41580-024-00756-6) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB2cXhsVakurbJ) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=38926531) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Harnessing%20the%20deep%20learning%20power%20of%20foundation%20models%20in%20single-cell%20omics&journal=Nat.%20Rev.%20Mol.%20Cell%20Biol.&doi=10.1038%2Fs41580-024-00756-6&volume=25&pages=593-594&publication_year=2024&author=Ma%2CQ&author=Jiang%2CY&author=Cheng%2CH&author=Xu%2CD)

[^23]: Kedzierska, K. Z., Crawford, L., Amini, A. P. & Lu, A. X. Assessing the limits of zero-shot foundation models in single-cell biology. Preprint at *bioRxiv* 2023–10 (2023).

[^24]: Wenteler, A. et al. Perteval-scfm: benchmarking single-cell foundation models for perturbation effect prediction. Preprint at *bioRxiv* 2024–10 (2024).

[^25]: Li, C. et al. Benchmarking AI models for in silico gene perturbation of cells. Preprint at *bioRxiv* 2024–12 (2024).

[^26]: Ahlmann-Eltze, C., Huber, W. & Anders, S. Deep learning-based predictions of gene perturbation effects do not yet outperform simple linear methods. Preprint at *bioRxiv* 2024–09 (2024).

[^27]: Istrate, A.-M., Li, D. & Karaletsos, T. scgenept: is language all you need for modeling single-cell perturbations? Preprint at *bioRxiv* 2024–10 (2024).

[^28]: Zhou, Y., Luo, K., Liang, L., Chen, M. & He, X. A new Bayesian factor analysis method improves detection of genes and biological processes affected by perturbations in single-cell crispr screening. *Nat. Methods* **20**, 1693–1703 (2023).

[Article](https://doi.org/10.1038%2Fs41592-023-02017-4) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3sXitVaqs7jK) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37770710) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10630124) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20new%20Bayesian%20factor%20analysis%20method%20improves%20detection%20of%20genes%20and%20biological%20processes%20affected%20by%20perturbations%20in%20single-cell%20crispr%20screening&journal=Nat.%20Methods&doi=10.1038%2Fs41592-023-02017-4&volume=20&pages=1693-1703&publication_year=2023&author=Zhou%2CY&author=Luo%2CK&author=Liang%2CL&author=Chen%2CM&author=He%2CX)

[^29]: Gavriilidis, G. I., Vasileiou, V., Orfanou, A., Ishaque, N. & Psomopoulos, F. A mini-review on perturbation modelling across single-cell omic modalities. *Comput. Struct. Biotechnol. J.* (2024).

[^30]: Rood, J. E., Hupalowska, A. & Regev, A. Toward a foundation model of causal cell and tissue biology with a perturbation cell and tissue atlas. *Cell* **187**, 4520–4545 (2024).

[Article](https://doi.org/10.1016%2Fj.cell.2024.07.035) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB2cXhvVais7vL) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=39178831) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Toward%20a%20foundation%20model%20of%20causal%20cell%20and%20tissue%20biology%20with%20a%20perturbation%20cell%20and%20tissue%20atlas&journal=Cell&doi=10.1016%2Fj.cell.2024.07.035&volume=187&pages=4520-4545&publication_year=2024&author=Rood%2CJE&author=Hupalowska%2CA&author=Regev%2CA)

[^31]: van de Schoot, R. et al. Bayesian statistics and modelling. *Nat. Rev. Methods Prim.* **1**, 1 (2021).

[Article](https://doi.org/10.1038%2Fs43586-020-00001-2) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Bayesian%20statistics%20and%20modelling&journal=Nat.%20Rev.%20Methods%20Prim.&doi=10.1038%2Fs43586-020-00001-2&volume=1&publication_year=2021&author=Schoot%2CR)

[^32]: Williams, C. & Rasmussen, C. Gaussian processes for regression. *Adv. Neural Inf. Process. Syst.* **8**, 514–520 (1995).

[^33]: Replogle, J. M. et al. Mapping information-rich genotype-phenotype landscapes with genome-scale perturb-seq. *Cell* **185**, 2559–2575 (2022).

[Article](https://doi.org/10.1016%2Fj.cell.2022.05.013) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB38XhsFWgsLrP) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=35688146) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9380471) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Mapping%20information-rich%20genotype-phenotype%20landscapes%20with%20genome-scale%20perturb-seq&journal=Cell&doi=10.1016%2Fj.cell.2022.05.013&volume=185&pages=2559-2575&publication_year=2022&author=Replogle%2CJM)

[^34]: Norman, T. M. et al. Exploring genetic interaction manifolds constructed from rich single-cell phenotypes. *Science* **365**, 786–793 (2019).

[Article](https://doi.org/10.1126%2Fscience.aax4438) [ADS](http://adsabs.harvard.edu/cgi-bin/nph-data_query?link_type=ABSTRACT&bibcode=2019Sci...365..786N) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC1MXhs1CjtbzJ) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=31395745) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6746554) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Exploring%20genetic%20interaction%20manifolds%20constructed%20from%20rich%20single-cell%20phenotypes&journal=Science&doi=10.1126%2Fscience.aax4438&volume=365&pages=786-793&publication_year=2019&author=Norman%2CTM)

[^35]: Li, L. et al. A systematic comparison of single-cell perturbation response prediction models. Preprint at *bioRxiv* 2024–12 (2024).

[^36]: Ganguly, A., Jain, S. & Watchareeruetai, U. Amortized variational inference: a systematic review. *J. Artif. Intell. Res.* **78**, 167–215 (2023).

[Article](https://doi.org/10.1613%2Fjair.1.14258) [MathSciNet](http://www.ams.org/mathscinet-getitem?mr=4656309) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Amortized%20variational%20inference%3A%20a%20systematic%20review&journal=J.%20Artif.%20Intell.%20Res.&doi=10.1613%2Fjair.1.14258&volume=78&pages=167-215&publication_year=2023&author=Ganguly%2CA&author=Jain%2CS&author=Watchareeruetai%2CU)

[^37]: Jang, E., Gu, S. & Poole, B. Categorical reparameterization with Gumbel-softmax. *5th International Conference on Learning Representations, {ICLR} 2017, Toulon, France, April 24-26, 2017, Conference Track Proceedings* (eds Larochelle, H., Vinyals, O. & Sainath, T.) (OpenReview.net, 2017).

[^38]: Stephens, M. False discovery rates: a new deal. *Biostatistics* **18**, 275–294 (2017).

[MathSciNet](http://www.ams.org/mathscinet-getitem?mr=3824755) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27756721) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=False%20discovery%20rates%3A%20a%20new%20deal&journal=Biostatistics&volume=18&pages=275-294&publication_year=2017&author=Stephens%2CM)

[^39]: Xing, H. & Yau, C. Bayesian inference for identifying tumour-specific cancer dependencies through integration of ex-vivo drug response assays and drug-protein profiling. *BMC Bioinforma.* **25**, 104 (2024).

[Article](https://link.springer.com/doi/10.1186/s12859-024-05682-0) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Bayesian%20inference%20for%20identifying%20tumour-specific%20cancer%20dependencies%20through%20integration%20of%20ex-vivo%20drug%20response%20assays%20and%20drug-protein%20profiling&journal=BMC%20Bioinforma.&doi=10.1186%2Fs12859-024-05682-0&volume=25&publication_year=2024&author=Xing%2CH&author=Yau%2CC)

[^40]: Lopez, R. et al. Learning causal representations of single cells via sparse mechanism shift modeling. In *Conference on Causal Learning and Reasoning*, (eds van der Schaar, M., Zhang, C. & Janzing, D.) 662–691 (PMLR, 2023).