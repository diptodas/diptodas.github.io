---
layout: page
permalink: /personal/
title: personal
description: Art, music, and stories.
nav: true
nav_order: 6
durga_series:
  - file: durga-2019.jpg
    caption: "2019"
    alt: A pencil and color drawing of Durga, with a woman's face above the face of a Durga idol.
  - file: durga-2020.jpg
    caption: "2020"
    alt: A painting of Durga's face under an orange veil.
  - file: durga-2021.jpg
    caption: "2021"
    alt: An acrylic painting of Durga with her many arms and a crown.
  - file: durga-2022.jpg
    caption: "2022"
    alt: A watercolor painting of Durga as a mother holding a child.
  - file: durga-2023.jpg
    caption: "2023"
    alt: A watercolor painting of Durga's face above a young girl sitting among flowers and garlands.
sketches:
  - file: krishna-2017.jpg
    caption: Krishna (2017)
    alt: A pencil drawing of Krishna playing the flute, with a peacock feather in his hair.
  - file: krishna-2018.jpg
    caption: Baby Krishna (2018)
    alt: A pencil sketch of baby Krishna beside a broken butter pot, with birds and a butterfly.
  - file: shiva-2018.jpg
    caption: Shiva (2018)
    alt: A pencil drawing of Shiva meditating, with a crescent moon and a snake.
  - file: krishna-2019.jpg
    caption: Baby Krishna (2019)
    alt: A pencil drawing of baby Krishna sitting on the ground.
  - file: radha-krishna-2020.jpg
    caption: Radha and Krishna (2020)
    alt: A pencil and color drawing of Krishna playing the flute behind Radha.
  - file: zeus.jpg
    caption: Zeus
    alt: A pencil drawing of Zeus holding a lightning bolt.
  - file: messi-ronaldo.jpg
    caption: Messi and Ronaldo
    alt: A pencil drawing of footballers Lionel Messi and Cristiano Ronaldo standing together.
_styles: |
  .art-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    margin: 0.5rem 0 2rem;
  }

  .art-strip figure {
    display: table;
    margin: 0;
  }

  .art-strip img {
    height: 210px;
    width: auto;
    max-width: none;
  }

  .art-strip figcaption {
    display: table-caption;
    caption-side: bottom;
    text-align: center;
    font-size: 0.85rem;
    padding-top: 0.35rem;
  }

  @media (max-width: 576px) {
    .art-strip img {
      height: 150px;
    }
  }

  .sketch-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: start;
    margin: 0.5rem 0 2rem;
  }

  .sketch-grid figure {
    margin: 0;
  }

  .sketch-grid img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
  }

  .sketch-grid figcaption {
    text-align: center;
    font-size: 0.85rem;
    padding-top: 0.35rem;
  }

  .art-zoomable {
    cursor: zoom-in;
  }

  .art-lightbox {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--global-bg-color);
    cursor: zoom-out;
  }

  .art-lightbox[hidden] {
    display: none;
  }

  .art-lightbox img {
    max-width: 90vw;
    max-height: 85vh;
    width: auto;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
  }

  .personal-epigraph {
    margin: 1.5rem 0;
    font-style: italic;
  }

  .personal-epigraph span {
    display: block;
    font-style: normal;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
---

## art

Plain old pencil sketching is my go-to medium, but I also paint with acrylic and watercolor, depending on the subject. Many of my drawings feature deities and icons. However, I approach them less as objects of faith and more as cultural figures: they show how people imagine power, care, and belonging in their own image.

<h5 class="mt-4">Durga</h5>

During grad school, I worked on one painting each fall, around Durga Puja. The series is grounded in how Bengal imagines the goddess: not only as a fierce, many-armed protector, but also as a mother, a daughter, and a woman much like the ones around us.

<div class="art-strip">
  {% for art in page.durga_series %}
    {% assign art_path = 'assets/img/personal/' | append: art.file %}
    {% include figure.liquid path=art_path class="rounded z-depth-1" alt=art.alt caption=art.caption zoomable=true %}
  {% endfor %}
</div>

<div class="row mt-4">
  <div class="col-md-6 order-md-2">
    <h5>Gods, old and new</h5>
    <blockquote class="personal-epigraph">
      "...the gods are the dreams of men."
      <span>Carl Sagan, <em>Cosmos</em></span>
    </blockquote>
    <p>
      My sketches play with this idea. Some of the figures come from scripture and myth: Krishna as a mischievous child and a flute-playing cowherd, Shiva in meditation, and Zeus with his thunderbolt. Others come from epics written not in scripture but on sports fields: Messi and Ronaldo, revered, argued over, and celebrated by millions of fans with something close to devotion. The line between the sacred and the popular is thinner than it seems.
    </p>
  </div>
  <div class="col-md-6 order-md-1">
    <div class="sketch-grid">
      {% for art in page.sketches %}
        {% assign art_path = 'assets/img/personal/' | append: art.file %}
        {% include figure.liquid path=art_path class="img-fluid rounded z-depth-1" alt=art.alt caption=art.caption zoomable=true %}
      {% endfor %}
    </div>
  </div>
</div>

## music and stories

<div class="row">
  <div class="col-md-7">
    <p>
      Wherever I go, I am usually humming my favorite classical Bengali or American country songs. You can listen to some of them on my
      <a href="https://soundcloud.com/dipto-das-575115499">SoundCloud profile</a>.
    </p>
    <p>
      With an interested group, I also enjoy telling and listening to stories. Of what kind? The time I was stuck in an airport for three days straight,
      or the time I sneaked out of the house in middle school! Maybe you can taste some of my recipes as we share those stories.
    </p>
  </div>
  <div class="col-md-5">
    {% include figure.liquid path="assets/img/personal/singing.jpg" class="img-fluid rounded z-depth-1" alt="Dipto singing with friends, one of them playing a guitar." zoomable=true %}
  </div>
</div>

<div class="art-lightbox" id="art-lightbox" hidden>
  <img alt="" />
</div>

<script>
  // Open images on this page in a full-size overlay instead of stretching the thumbnail, so they stay sharp in every browser.
  window.addEventListener("load", function () {
    var box = document.getElementById("art-lightbox");
    var big = box.querySelector("img");
    var imgs = document.querySelectorAll("img[data-zoomable]");
    if (typeof medium_zoom !== "undefined") medium_zoom.detach(imgs);
    function close() {
      box.hidden = true;
      big.removeAttribute("src");
    }
    imgs.forEach(function (img) {
      img.classList.add("art-zoomable");
      img.addEventListener("click", function () {
        big.src = img.getAttribute("src");
        big.alt = img.alt;
        box.hidden = false;
      });
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !box.hidden) close();
    });
  });
</script>
