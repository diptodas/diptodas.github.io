---
layout: page
permalink: /bio/
title: bio
description: Short and long bios for introductions, programs, and event listings.
nav: false
_styles: |
  .bio-block {
    position: relative;
    margin-bottom: 2rem;
    padding: 1rem 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
  }
  .bio-block h5 {
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  .bio-block p {
    margin-bottom: 0;
  }
  .bio-copy {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
---

<div class="bio-block">
  <h5>Short bio</h5>
  <button type="button" class="btn btn-sm btn-outline-primary bio-copy" data-target="bio-short">Copy</button>
  <p id="bio-short">{{ site.data.bio.short }}</p>
</div>

<div class="bio-block">
  <h5>Long bio</h5>
  <button type="button" class="btn btn-sm btn-outline-primary bio-copy" data-target="bio-long">Copy</button>
  <p id="bio-long">{{ site.data.bio.long }}</p>
</div>

<script>
  document.querySelectorAll(".bio-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = document.getElementById(btn.dataset.target).textContent.trim().replace(/\s+/g, " ");
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () {
          btn.textContent = "Copy";
        }, 1500);
      });
    });
  });
</script>
