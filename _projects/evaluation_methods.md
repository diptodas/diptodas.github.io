---
layout: page
published: false # merged into another project page; safe to delete
title: Community-Grounded Evaluation and Repair
description: Building datasets, tools, and methods that let affected communities shape how AI is evaluated and how its harms are repaired.
img: assets/img/project_banners/online_safety.png
importance: 4
category: research
related_publications: false
selected_work:
  - label: COMPASS 2026
    pdf: COMPASS26_modguide.pdf
  - label: AIES 2026
    pdf: AIES26_human.pdf
  - label: EACL-C3NLP 2023
    pdf: EACL23-C3NLP_bibed.pdf
---

<p class="project-back"><a href="{{ '/projects/' | relative_url }}">← All research projects</a></p>

> **Research Summary**
>
> Evaluating AI fairly requires more than better metrics. It requires data that reflects the people affected, methods that can capture real-world harm, and ways for communities to shape both the problem and its repair. This research builds culturally grounded datasets and corpora for under-resourced languages, designs tools such as Mod-Guide that bring minority perspectives into LLM-based moderation, and examines which kinds of evidence the AI safety and ethics community accepts as valid.

---

## Why this research?

Many evaluation resources exist only for English or for a handful of well-resourced languages, and most are built without the communities they describe. At the same time, AI safety and ethics research increasingly favors benchmarks and LLM simulations over studying people directly, even though empirical human research is often what grounds claims about real-world harm.

Questions guiding this work include:

- What does it take to build evaluation data with, rather than about, marginalized communities?
- How can community knowledge be built into AI systems to repair the harms they cause?
- Which kinds of evidence count when evaluating AI risks, and why?
- How can human-centered research stay trustworthy as AI changes how data is produced?

---

## Research Approach

- Community-informed dataset curation and co-created corpora
- Retrieval-augmented generation (RAG) to ground LLM outputs in lived experience
- Mixed-method evaluations with both minority and majority participants
- Expert surveys and interviews on research practice

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_banners/online_safety.png" title="Mod-Guide interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Research Outcomes and Contributions

- **Mod-Guide:** With Bangladesh's Hindu and Chakma communities, we co-created a culturally grounded corpus of insensitive speech and used it to ground LLM-based moderation feedback through RAG. Evaluations with minority and majority participants show the responses are more contextually accurate and are perceived differently across ethnic lines, bringing restorative justice and hermeneutical inclusion into moderation design. (See [COMPASS 26](/assets/pdf/COMPASS26_modguide.pdf))

- **Language resources for under-resourced contexts:** We introduced cultural bias evaluation datasets for Bengali gender, religious, and national identity, and BTPD, a hand-curated multilingual dataset of Bengali transnational political discourse collected from three online communities through community-informed retrieval. (See [EACL-C3NLP 23](/assets/pdf/EACL23-C3NLP_bibed.pdf), [CSCW 25](/assets/pdf/CSCW25_BTPD.pdf))

- **The epistemic fit of human research in AI safety:** Through an expert survey (n = 93) and interviews (n = 17), we show that although researchers agree human research is valuable evidence for AI safety and ethics, its adoption is constrained by perceived validity issues, resource barriers, methodological preferences, and infrastructural constraints. (See [AIES 26](/assets/pdf/AIES26_human.pdf))

- **Research integrity in the age of AI:** I co-organize work on AI-enabled fraudulent participation in human-subjects research and have developed strategies for democratizing trace data collection while limiting bias. (See [CSCW 26 Workshop](/assets/pdf/CSCW26_fraudulent.pdf), [COMPASS 22](/assets/pdf/COMPASS22_sociomaterial.pdf))

---

## Current Directions

- Participatory benchmarks for low-resource languages
- Community-grounded repair in LLM-based moderation
- Methodological standards for human research in AI evaluation
