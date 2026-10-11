---
layout: page
title: research
permalink: /projects/
description: Thematic research projects on AI, institutions, and social life.
nav: true
nav_order: 1
---

I study how AI systems and online platforms shape decision-making, public discourse, identity, and access to information. My projects follow these technologies through the institutions that govern them, the methods used to evaluate them, and the communities that live with them, with a particular focus on South Asia and its diasporas. Each project page describes the questions, methods, and findings, with links to papers.

<div class="research-projects">
  <h2 class="project-group">current projects</h2>
  {% assign current_projects = site.projects | where: "category", "research" | sort: "importance" %}
  {% for project in current_projects %}
    {% include research_project.liquid %}
  {% endfor %}

  {% assign earlier_projects = site.projects | where: "category", "earlier" | sort: "importance" %}
  {% if earlier_projects.size > 0 %}
    <h2 class="project-group">earlier work</h2>
    {% for project in earlier_projects %}
      {% include research_project.liquid %}
    {% endfor %}
  {% endif %}
</div>

<p><a href="{{ '/publications/' | relative_url }}">View all publications →</a></p>
