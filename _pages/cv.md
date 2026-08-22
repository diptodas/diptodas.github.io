---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
description: View or download Dipto Das's curriculum vitae.
_styles: |
  .cv-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .cv-viewer {
    width: 100%;
    height: min(82vh, 70rem);
    min-height: 36rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.25rem;
    background: var(--global-card-bg-color);
  }

  .cv-viewer-fallback {
    padding: 2rem;
    text-align: center;
  }

  @media (max-width: 576px) {
    .cv-viewer {
      height: 70vh;
      min-height: 28rem;
    }
  }
---

{% assign cv_pdf = '/assets/pdf/CV.pdf' | relative_url %}

<div class="cv-actions" aria-label="CV document actions">
  <!-- <a class="btn btn-sm btn-outline-primary" href="{{ cv_pdf }}" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
    Open in a new tab
  </a> -->
  <a class="btn btn-sm btn-outline-primary" href="{{ cv_pdf }}" download>
    <i class="fa-solid fa-download" aria-hidden="true"></i>
    Download as PDF
  </a>
</div>

<object
  class="cv-viewer"
  data="{{ cv_pdf }}#view=FitH"
  type="application/pdf"
  aria-label="Dipto Das's curriculum vitae"
>
  <div class="cv-viewer-fallback">
    <p>Your browser cannot display the PDF viewer.</p>
    <a href="{{ cv_pdf }}">Open the CV PDF</a>.
  </div>
</object>
