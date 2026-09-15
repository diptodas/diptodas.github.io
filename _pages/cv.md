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

  .cv-actions .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    text-align: center;
  }

  .cv-document-tabs {
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
{% assign resume_pdf = site.data.contact.resume_pdf | relative_url %}

<ul class="nav nav-tabs cv-document-tabs" id="document-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="cv-tab"
      data-toggle="tab"
      href="#cv-document"
      role="tab"
      aria-controls="cv-document"
      aria-selected="true"
      >CV</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="resume-tab"
      data-toggle="tab"
      href="#resume-document"
      role="tab"
      aria-controls="resume-document"
      aria-selected="false"
      >Résumé</a
    >
  </li>
</ul>

<div class="cv-actions" aria-label="CV document actions">
  <a class="btn btn-sm btn-outline-primary" href="{{ cv_pdf }}" download>
    <i class="fa-solid fa-download" aria-hidden="true"></i>
    Download CV
  </a>
  <a class="btn btn-sm btn-outline-primary" href="{{ resume_pdf }}" download>
    <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
    Download Résumé
  </a>
</div>

<div class="tab-content" id="document-tab-content">
  <div class="tab-pane fade show active" id="cv-document" role="tabpanel" aria-labelledby="cv-tab">
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
  </div>
  <div class="tab-pane fade" id="resume-document" role="tabpanel" aria-labelledby="resume-tab">
    <object
      class="cv-viewer"
      data="{{ resume_pdf }}#view=FitH"
      type="application/pdf"
      aria-label="Dipto Das's résumé"
    >
      <div class="cv-viewer-fallback">
        <p>Your browser cannot display the PDF viewer.</p>
        <a href="{{ resume_pdf }}">Open the résumé PDF</a>.
      </div>
    </object>
  </div>
</div>
