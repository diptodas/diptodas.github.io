---
layout: page
title: Identity Bias and Community-Grounded AI Evaluation
description: Auditing language technologies and generative AI for identity-based biases in low-resource contexts, and building datasets and tools that let affected communities shape evaluation and repair.
img: assets/img/project_banners/ai_fairness.png
importance: 2
category: research
related_publications: false
selected_work:
  - label: CHI 2024
    pdf: CHI24_audit.pdf
  - label: FAccT 2026
    pdf: FACCT26_T2Icaste.pdf
  - label: TOCHI 2025
    pdf: TOCHI25_transphobia.pdf
  - label: COMPASS 2026
    pdf: COMPASS26_modguide.pdf
---

<p class="project-back"><a href="{{ '/projects/' | relative_url }}">← All research projects</a></p>

> **Research Summary**
>
> Language technologies and generative AI are increasingly used by communities whose languages, identities, and histories were barely considered when these systems were built and benchmarked. This project audits how sentiment analysis tools, large language models, and text-to-image models treat gender, religion, nationality, caste, sexuality, and political identity, especially in Bengali and other low-resource contexts. It also builds the datasets, community-grounded corpora, and tools that let affected communities help define both the problem and its repair.

---

## Why this research?

Bias evaluations often rely on categories, benchmarks, and moral assumptions developed in Western, English-language settings. When those assumptions travel, they can miss the forms of identity and discrimination that matter most locally, such as caste, religious majority–minority relations, or the ways people signal identity through names and dialect. A model can score well while the categories it uses still misrecognize the people it claims to represent. Meanwhile, evaluation resources rarely exist for under-resourced languages, and are seldom built with the communities they describe.

Questions guiding this work include:

- How do language technologies treat different identities, and different ways of expressing the same identity?
- Do recommended fixes, such as language-specific or multilingual models, actually reduce bias in low-resource settings?
- How do generative models reproduce social hierarchies that are relational rather than categorical?
- How can community knowledge be built into AI systems to evaluate and repair the harms they cause?

---

## Research Approach

We design large-scale algorithmic audits and quasi-experimental studies that vary _explicit and implicit identity signals_ (e.g., names, dialects) and construct _linguistic personas_ across **gender, sexuality, religion, nationality, caste, ethnicity, political leaning, and their intersections**. We analyze outputs quantitatively and through critical discourse analysis and reflexive analysis grounded in the situated knowledge of affected communities. We also co-create culturally grounded corpora and use retrieval-augmented generation (RAG) to bring that knowledge into AI systems.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_banners/CHI24_audit.png" title="Auditing Bengali sentiment analysis tools" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Research Outcomes and Contributions

#### Auditing identity bias

- **The "colonial impulse" of NLP:** An audit of every Bengali sentiment analysis tool available on PyPI and GitHub shows inconsistent outputs and bias across gender, religious, and national identities, including different responses to different ways of expressing identity. (See [CHI 24](/assets/pdf/CHI24_audit.pdf))

- **Datasets, developers, and models in a low-resource language:** Fine-tuning mBERT and BanglaBERT on every available Bengali sentiment dataset, we show that commonly recommended fixes do not remove identity-based bias. (See [COMPASS 26](/assets/pdf/COMPASS26_BSAdatasets.pdf))

- **Political bias in LLM text generation:** Using sociocultural and demographic personas, we find left-leaning political bias in GPT-4's Bengali text generation and a significant association with Muslim sociocultural identity. (See [IJCNLP-AACL BHASHA 25](/assets/pdf/IJCNLP_AACL25-BHASHA_political.pdf))

- **An anti-caste lens on generative AI:** Treating caste as a relation rather than a category, we combine an algorithmic audit with critical discourse analysis to show how text-to-image models perpetuate Brahminical normativity. (See [FAccT 26](/assets/pdf/FACCT26_T2Icaste.pdf))

- **Trans-centered perspectives on LLMs:** Overtly pro-trans LLM responses can coexist with subtle anti-trans sentiment that only a positional understanding of trans experience can detect, which "value-neutral" evaluation approaches overlook. (See [TOCHI 25](/assets/pdf/TOCHI25_transphobia.pdf))

#### Community-grounded evaluation and repair

- **Mod-Guide:** With Bangladesh's Hindu and Chakma communities, we co-created a culturally grounded corpus of insensitive speech and used it to ground LLM-based moderation feedback through RAG, producing responses that are more contextually accurate and perceived differently across ethnic lines. (See [COMPASS 26](/assets/pdf/COMPASS26_modguide.pdf))

- **Language resources:** We introduced cultural bias evaluation datasets for Bengali gender, religious, and national identity, and BTPD, a hand-curated multilingual dataset of Bengali transnational political discourse. (See [EACL-C3NLP 23](/assets/pdf/EACL23-C3NLP_bibed.pdf), [CSCW 25](/assets/pdf/CSCW25_BTPD.pdf))

- **Human research in AI safety and ethics:** Through an expert survey (n = 93) and interviews (n = 17), we show that although researchers value human research as evidence of real-world harm, its adoption is constrained by perceived validity issues, resource barriers, and infrastructural constraints. (See [AIES 26](/assets/pdf/AIES26_human.pdf))

---

## Current Directions

- Context-aware alignment that draws on historically and culturally situated knowledge
- Relational approaches to bias in multimodal generative AI
- Participatory benchmarks for low-resource languages
- Methodological standards for human research in AI evaluation
