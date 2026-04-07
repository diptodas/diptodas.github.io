---
layout: page
title: AI Fairness, Algorithmic Bias, and Ethics
description: We conduct large-scale algorithmic audits to uncover systemic identity-based biases in AI systems, revealing how those perpetuate sociocultural hierarchies, stereotypes, and prejudices.
img: assets/img/project_banners/ai_fairness.png
importance: 3
category: research
---

## Outcome

[CHI 24](/assets/pdf/CHI24_audit.pdf), [FAccT 26](/assets/pdf/FACCT26_T2Icaste.pdf), [DIS 26](/assets/pdf/DIS26_nonprofit.pdf), [EACL-C3NLP](/assets/pdf/EACL23-C3NLP_bibed.pdf), [IJCNLP/AACL-BHASHA](/assets/pdf/IJCNLP_AACL25-BHASHA_political.pdf), and [Submitted](/assets/pdf/BSAdatasets.pdf)

## Overview
This theme focuses on auditing AI and language technologies to uncover systemic biases that marginalize specific social identities, particularly within Global South contexts. We critique the "colonial impulse" inherent in state-of-the-art NLP tools, datasets, generative AI (e.g., LLM) and text-to-image models, which often misinterpret or exclude linguistically and culturally diverse populations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_banners/CHI24_audit.png" title="context" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Approach

Our research utilizes large-scale algorithmic audits and quasi-experimental designs to probe model behavior. We design datasets capturing _explicit and implicit identity signals_ (e.g., names, dialects) and construct _linguistic personas_ with varying identity attributes in model inputs, across identity dimensions such as **gender, sexuality, religion, nationality, caste, ethnicity, political leaning, and their intersections**. We analyze the AI systems' responses through quantitative and qualitative approaches: measure shifts in the outputs using embedding-based analysis as well as adopting a relational approach to bias. Our interpretation is guided by sociotechnical and critical perspectives, shifting away from simple categories to better capture deep-seated social hierarchies.

## Key Findings and Contributions

We have provided empirical evidence of pervasive religious, national, and gender-based biases in **computational linguistics in low-resource language contexts**, revealing how these models reanimate colonial prejudices. Our work on generative AI introduced an **anti-caste lens**, demonstrating how text-to-image models perpetuate Brahmanical normativity through relational biases in visual representation. Additionally, we have identified subtle forms of heteronormativity that **"value-neutral"** Western-centric frameworks in LLM evaluations frequently overlook. These findings inform the development of context-aware alignment strategies that incorporate historically and culturally situated knowledge rather than assuming universal moral priors.


---