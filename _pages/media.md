---
layout: page
permalink: /media/
title: media
description: Media coverage of my research and interviews.
nav: true
nav_order: 4
_styles: |
  .press-list {
    list-style: none;
    padding-left: 0;
  }

  .press-list li {
    margin-bottom: 1.25rem;
  }

  .press-outlet {
    font-weight: 600;
  }

  .press-date,
  .press-translation,
  .press-note {
    color: var(--global-text-color-light);
  }

  .press-note {
    display: block;
    font-size: 0.95rem;
  }
---

{% assign press_items = site.data.media | sort: "date" | reverse %}
{% assign press_years = press_items | group_by_exp: "item", "item.date | date: '%Y'" %}

{% for year in press_years %}

<h2 class="year">{{ year.name }}</h2>
<ul class="press-list">
  {% for item in year.items %}
    <li>
      <span class="press-outlet">{{ item.outlet }}</span>
      <span class="press-date">· {% if item.when %}{{ item.when }}{% else %}{{ item.date | date: '%B %-d, %Y' }}{% endif %}</span><br>
      <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
      {%- if item.translation %} <span class="press-translation">({{ item.translation }})</span>{% endif %}
      {% if item.note %}
        <span class="press-note">
          {{- item.note -}}
          {% if item.paper %}
            <a href="{{ item.paper | relative_url }}">[paper]</a>
          {% endif %}
        </span>
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% endfor %}
