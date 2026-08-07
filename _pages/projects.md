---
layout: page
title: research
permalink: /projects/
description: Three connected questions about AI, institutions, knowledge, and public life.
nav: true
nav_order: 1
---

<article class="research-program">
  <header class="research-intro">
    <p class="research-kicker">Technology, power, and public life</p>
    <p class="research-deck">
      Artificial intelligence and digital platforms do more than automate tasks or mediate communication. They shape what
      institutions can see, how people are classified, whose knowledge becomes authoritative, and what possibilities people
      have to question decisions made about them.
    </p>
    <p class="research-intro-copy">
      I study these transformations through three connected lenses. <em>Governing</em> asks how institutions make AI
      accountable. <em>Evaluating</em> asks who gets to define what counts as a fair or capable system. <em>Situating</em>
      asks how technologies acquire meaning in communities already shaped by history, identity, and unequal power.
    </p>

    <nav class="research-lenses" aria-label="Research areas">
      <a href="#governing"><span>01</span><strong>Governing</strong><small>Institutions and infrastructures</small></a>
      <a href="#evaluating"><span>02</span><strong>Evaluating</strong><small>Models and benchmarks</small></a>
      <a href="#situating"><span>03</span><strong>Situating</strong><small>Communities and publics</small></a>
    </nav>
  </header>

  <section id="governing" class="research-theme">
    <header class="research-theme-header">
      <p class="research-eyebrow">01 / Governing accountable AI</p>
      <h2>When transparency is not enough</h2>
      <p class="research-thesis">
        Making an algorithm visible does not necessarily make the institution using it accountable.
      </p>
    </header>

    <figure class="research-visual">
      <img src="{{ '/assets/img/project_banners/public_sector.png' | relative_url }}" alt="A visual study of public-sector AI systems and their distribution" loading="lazy">
    </figure>

    <div class="research-prose">
      <p>
        Governments are rapidly incorporating AI into decisions about immigration, social services, education, and other
        public goods. In response, transparency tools such as AI registers, impact assessments, and procurement rules are
        becoming part of a new accountability infrastructure. Yet disclosure alone cannot answer whether people can
        understand a decision, challenge it, or obtain meaningful remedy.
      </p>
      <p>
        My research follows AI through the institutions that authorize, document, and operate it. Studies of Canada's
        federal AI register examine what governments choose to reveal and what remains difficult to see. Work on visa
        triage, homelessness services, and higher education then traces what formal policies become at the frontline, where
        workers and affected communities encounter automated decisions in practice.
      </p>
      <p>
        Together, these projects develop an account of <em>contestable AI</em>: governance designed not only to make systems
        legible, but also to give people the standing and practical means to question the institutions behind them.
      </p>
    </div>

    <div class="research-stories">
      <a class="research-story" href="{% link _projects/public_ai.md %}">
        <span>AI registers</span>
        <h3>What do governments choose to disclose?</h3>
        <p>Examining public inventories as both transparency mechanisms and institutional claims about accountability.</p>
      </a>
      <a class="research-story" href="{% link _projects/public_sector.md %}">
        <span>Frontline systems</span>
        <h3>Where do formal rules meet people's lives?</h3>
        <p>Following public-sector AI into immigration, social services, and education.</p>
      </a>
      <a class="research-story" href="{% link _projects/public_ai.md %}">
        <span>Contestability</span>
        <h3>What would meaningful challenge require?</h3>
        <p>Moving from disclosure toward institutions that can hear objections and provide remedy.</p>
      </a>
    </div>

    <p class="research-selected">
      <span>Selected work</span>
      <a href="{{ '/assets/pdf/FACCT26_AIregister.pdf' | relative_url }}">Federal AI registers</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/COMPASS26_ircc.pdf' | relative_url }}">AI in immigration</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/CHI25_homelessness.pdf' | relative_url }}">Homelessness services</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/publications/' | relative_url }}">See all publications →</a>
    </p>
  </section>

  <section id="evaluating" class="research-theme">
    <header class="research-theme-header">
      <p class="research-eyebrow">02 / Evaluating and repairing AI</p>
      <h2>Who gets to decide what “good AI” means?</h2>
      <p class="research-thesis">
        A model can score well while the categories it uses still misrecognize the people it claims to represent.
      </p>
    </header>

    <figure class="research-visual research-visual-contain">
      <img src="{{ '/assets/img/project_banners/ai_fairness.png' | relative_url }}" alt="A conceptual diagram of identity data moving through a machine-learning model" loading="lazy">
    </figure>

    <div class="research-prose">
      <p>
        Benchmarks appear to offer neutral ways of measuring progress. But every dataset and evaluation scheme carries
        assumptions about language, identity, harm, and whose judgments matter. These assumptions become especially visible
        in low-resource languages and in systems that generate representations of socially marginalized groups.
      </p>
      <p>
        My work audits how Bengali language models encode political and social identity, and how generative AI represents
        religion, nationality, gender, sexuality, and caste. Rather than treating bias as only an error rate, I study its
        discursive form: the associations, absences, and hierarchies through which systems make some identities seem normal
        and others suspect.
      </p>
      <p>
        This line of research also asks how evaluation can be repaired. Community-grounded projects such as Mod-Guide shift
        epistemic authority toward people who experience online harm, making evaluation a process of defining harm and
        remedy together—not simply applying a benchmark from elsewhere.
      </p>
    </div>

    <div class="research-stories">
      <a class="research-story" href="{% link _projects/AI_fairness.md %}">
        <span>Bengali NLP</span>
        <h3>How does bias emerge in a low-resource language?</h3>
        <p>Auditing the political and cultural assumptions embedded in datasets and language models.</p>
      </a>
      <a class="research-story" href="{% link _projects/AI_fairness.md %}">
        <span>Generative AI</span>
        <h3>How are social hierarchies represented?</h3>
        <p>Studying caste, gender, religion, nationality, and sexuality beyond aggregate accuracy.</p>
      </a>
      <a class="research-story" href="{% link _projects/minority.md %}">
        <span>Community moderation</span>
        <h3>Who should define harm and repair?</h3>
        <p>Building evaluation practices around the knowledge of communities most affected.</p>
      </a>
    </div>

    <p class="research-selected">
      <span>Selected work</span>
      <a href="{{ '/assets/pdf/CHI24_audit.pdf' | relative_url }}">Auditing identity bias</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/FACCT26_T2Icaste.pdf' | relative_url }}">Caste in text-to-image models</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/EACL23-C3NLP_bibed.pdf' | relative_url }}">Bengali language models</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/publications/' | relative_url }}">See all publications →</a>
    </p>
  </section>

  <section id="situating" class="research-theme">
    <header class="research-theme-header">
      <p class="research-eyebrow">03 / Situating technology in social life</p>
      <h2>Platforms do not arrive in an empty world</h2>
      <p class="research-thesis">
        Technologies acquire meaning inside histories, relationships, borders, and inequalities that already exist.
      </p>
    </header>

    <figure class="research-visual research-visual-contain">
      <img src="{{ '/assets/img/project_banners/decolonization.png' | relative_url }}" alt="A layered map connecting Bengal, Bangladesh, and the Indian subcontinent" loading="lazy">
    </figure>

    <div class="research-prose">
      <p>
        Accounts of digital technology often begin with a platform or device. I begin instead with the social worlds into
        which it enters: multilingual communities, religious minorities, migrant networks, creative economies, and publics
        shaped by colonial and national histories. From this view, people are not merely users adapting to a system; they
        actively negotiate what the system becomes.
      </p>
      <p>
        My research traces these negotiations across South Asia and its diasporas—from Bengali identity work on social
        platforms and the governance of online creators, to the safety practices of religious and Indigenous minorities.
        Related studies follow how migrants use digital remittances and how immigrant-serving nonprofits interpret and
        adopt AI under conditions of limited resources and institutional pressure.
      </p>
      <p>
        These projects show technology as a site where belonging, authority, and agency are continually remade. Situating a
        system is therefore not contextual decoration; it is necessary to understand what that system is and what it does.
      </p>
    </div>

    <div class="research-stories">
      <a class="research-story" href="{% link _projects/decolonial.md %}">
        <span>Online identity</span>
        <h3>How do communities negotiate belonging?</h3>
        <p>Studying identity and platform governance across Bengali and South Asian publics.</p>
      </a>
      <a class="research-story" href="{% link _projects/minority.md %}">
        <span>Online safety</span>
        <h3>How do marginalized communities protect one another?</h3>
        <p>Centering situated practices of safety, moderation, and collective care.</p>
      </a>
      <a class="research-story" href="{% link _projects/immigrants.md %}">
        <span>Diaspora and migration</span>
        <h3>How does technology redistribute agency?</h3>
        <p>Following remittances, migration, and AI adoption through transnational institutions.</p>
      </a>
    </div>

    <p class="research-selected">
      <span>Selected work</span>
      <a href="{{ '/assets/pdf/CSCW24_transnational.pdf' | relative_url }}">Transnational publics</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/CHI26_remittance.pdf' | relative_url }}">Digital remittances</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/assets/pdf/CSCW24_minority.pdf' | relative_url }}">Minority online safety</a>
      <i aria-hidden="true">·</i>
      <a href="{{ '/publications/' | relative_url }}">See all publications →</a>
    </p>
  </section>
</article>
