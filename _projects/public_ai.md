---
layout: page
title: AI Accountability in Public Institutions
description: Examining how governments document, deploy, and govern AI in immigration, social services, and education, and how people subject to these systems experience and contest them.
img: assets/img/project_banners/public_sector.png
importance: 1
category: research
related_publications: false
selected_work:
  - label: FAccT 2026
    pdf: FACCT26_AIregister.pdf
  - label: DxConf 2026
    pdf: DxConf26_global.pdf
  - label: COMPASS 2026
    pdf: COMPASS26_ircc.pdf
  - label: CHI 2025
    pdf: CHI25_homelessness.pdf
---

<p class="project-back"><a href="{{ '/projects/' | relative_url }}">← All research projects</a></p>

> **Research Summary**
>
> Governments increasingly use AI in immigration, social services, education, and other public systems, and increasingly promise transparency through AI registers, inventories, and impact assessments. This project examines both sides of that promise: what disclosure mechanisms make visible, obscure, or contestable, and how AI reorganizes frontline judgment, resource allocation, and the experiences of people subject to algorithmic decisions. Across Canada, the United States, and dozens of other countries, I find that making an algorithm visible does not necessarily make the institution using it accountable.

---

## Why this research?

Accountability for public-sector AI is often framed as a property of the model or of the documentation that describes it. But a register is not a neutral mirror of government activity: its schema decides which questions agencies must answer and whether a system looks like reliable tooling or a contestable decision. And in practice, outcomes depend on frontline workers' discretion, the data clients can or will share, post-processing choices, and the resources available to act on a prediction. People affected by these systems often encounter them only as opaque outcomes.

Questions guiding this work include:

- What do AI registers, inventories, and impact assessments make visible, and what do they leave out?
- How are human oversight and discretion described, and how well do those descriptions match practice?
- Where in a deployed pipeline do disparities emerge and compound?
- How do people make sense of, and respond to, opaque algorithmic decisions?

---

## Research Approach

- Large-scale mapping of register and inventory records, with qualitative coding guided by the Algorithmic Decision-Making Adapted for the Public Sector (ADMAPS) framework
- Cross-national comparison of schemas, transparency, and interoperability
- Ethnographic case studies of public-service data practices
- Replica-based fairness audits of deployed institutional ML pipelines
- Mixed-method analyses of institutional documents and public discourse

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_banners/submitted_IRCC.jpeg" title="Canada's algorithmic visa triage system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Research Outcomes and Contributions

#### Disclosure and documentation

- **Registers as ontological design:** Canada's first Federal AI Register covers 409 systems, 86% of which are deployed internally for efficiency. The Register systematically obscures the human discretion, training, and uncertainty management needed to operate them, constructing AI as "reliable tooling" rather than "contestable decision-making," and risks offering visibility without contestability. (See [FAccT 26](/assets/pdf/FACCT26_AIregister.pdf))

- **A global comparison of AI registers:** Comparing 8,368 records from inventories covering 72 countries across 23 harmonized fields, we found that registers share a descriptive core but rarely ask about appeals, risks, legal bases, or external evaluation. We propose a _layered visibility framework_ explaining why interoperability requires shared concepts, clear definitions, and preserved provenance. (See [DxConf 26](/assets/pdf/DxConf26_global.pdf))

- **Fragmented accountability in the U.S. federal inventory:** Across 3,611 use cases reported by 56 federal agencies, procurement and governance details are often incomplete, and impact classifications and claims of human oversight are frequently under-explained. (See [Preprint](/assets/pdf/pUSAI.pdf))

#### Deployment and lived experience

- **Asymmetries in algorithmic visa triage:** Comparing Canada's Algorithmic Impact Assessment for its visa triage system with how applicants discuss it online, we identify epistemic, jurisdictional, and temporal–relational asymmetries that institutional disclosure frameworks do not capture. (See [COMPASS 26](/assets/pdf/COMPASS26_ircc.pdf))

- **The datafication of care:** An ethnographic case study of the City of Toronto's homelessness system shows how standardized data practices coexist with frontline workers' heuristic decision-making under uncertainty and resource constraints, and how the temporality of client data limits the validity of predictive AI models. (See [CHI 25](/assets/pdf/CHI25_homelessness.pdf))

- **Fairness audits of deployed risk models:** A replica-based audit of a college's early warning system finds that younger, male, and international students are disproportionately flagged while older and female students with comparable risk are under-identified, and that post-processing into risk tiers amplifies these disparities. (See [CanadianAI 26](/assets/pdf/CanadianAI26_fairness.pdf))

---

## Current Directions

- Comparative analyses of AI registers across countries
- Governance of generative AI in the public sector
- Human-AI collaboration in administrative decision making
- Contestability and remedy for people subject to public-sector AI
