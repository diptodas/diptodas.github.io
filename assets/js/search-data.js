// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Collection of my research, pedagogical, and personal projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Like other branches of Computer Science, top venues in HCI include extensively peer-reviewed conferences (e.g., CHI and CSCW). These extremely selective conferences, based on double-blinded peer review and intended for archival papers, are more prestigious compared to journals in terms of visibility and impact.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials and schedules for classes I am teaching and have taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-the-atlantic-has-recently-quoted-me-in-an-article-about-quora",
          title: 'The Atlantic has recently quoted me in an article about Quora.',
          description: "",
          section: "News",},{id: "news-paper-on-identity-bias-and-coloniality-in-nlp-tools-got-accepted-at-chi-2024",
          title: 'Paper on identity bias and coloniality in NLP tools got accepted at CHI...',
          description: "",
          section: "News",},{id: "news-the-prothom-alo-bangladesh-s-most-circulated-daily-has-featured-me-in-an-article",
          title: 'The Prothom Alo (Bangladesh’s most circulated daily) has featured me in an article....',
          description: "",
          section: "News",},{id: "news-got-a-travel-grant-from-cu-boulder-gpsg",
          title: 'Got a travel grant from CU Boulder GPSG.',
          description: "",
          section: "News",},{id: "news-papers-on-religious-minority-communities-experiences-with-fear-on-social-media-got-accepted-at-cscw-2024",
          title: 'Papers on religious minority communities’ experiences with fear on social media got accepted...',
          description: "",
          section: "News",},{id: "news-got-excellence-awards-for-teaching-and-contributions-to-diversity-equity-and-inclusion-from-cu-boulder-gpsg",
          title: 'Got Excellence Awards for Teaching and Contributions to Diversity, Equity, and Inclusion from...',
          description: "",
          section: "News",},{id: "news-got-award-of-excellence-for-outstanding-research-from-cu-boulder-info",
          title: 'Got Award of Excellence for Outstanding Research from CU Boulder INFO!',
          description: "",
          section: "News",},{id: "news-freshly-minted-dr-dipto-das-here-i-ve-successfully-defended-my-phd-dissertation",
          title: 'Freshly minted Dr. Dipto Das here — I’ve successfully defended my PhD dissertation!...',
          description: "",
          section: "News",},{id: "news-papers-on-transnational-decolonial-discourse-related-to-nationalism-on-youtube-got-accepted-at-cscw-2024",
          title: 'Papers on transnational decolonial discourse related to nationalism on YouTube got accepted at...',
          description: "",
          section: "News",},{id: "news-i-ve-started-working-as-a-postdoctoral-fellow-at-the-university-of-toronto",
          title: 'I’ve started working as a postdoctoral fellow at the University of Toronto!',
          description: "",
          section: "News",},{id: "news-papers-on-a-civic-oriented-approach-to-moderating-hate-speech-against-indigenous-communities-got-accepted-at-ictd-2024",
          title: 'Papers on a civic-oriented approach to moderating hate speech against Indigenous communities got...',
          description: "",
          section: "News",},{id: "news-two-papers-on-datafication-of-care-and-critique-of-academic-writing-standards-accepted-at-chi-2025",
          title: 'Two papers, on datafication of care and critique of academic writing standards, accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-on-datafication-of-care-got-a-best-paper-honorable-mention-at-chi-2025",
          title: 'Our paper on datafication of care got a Best Paper Honorable Mention at...',
          description: "",
          section: "News",},{id: "news-received-postdoctoral-fellowship-from-institute-for-pandemics-at-the-university-of-toronto",
          title: 'Received postdoctoral fellowship from Institute for Pandemics at the University of Toronto!',
          description: "",
          section: "News",},{id: "news-paper-on-diasporic-communities-remittance-practices-has-been-accepted-to-chi-2026",
          title: 'Paper on diasporic communities’ remittance practices has been accepted to CHI 2026!',
          description: "",
          section: "News",},{id: "news-paper-on-caste-bias-in-text-to-image-generative-ai-models-has-been-accepted-to-facct-2026",
          title: 'Paper on caste bias in text-to-image Generative AI models has been accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-diasporic-communities-remittance-practices-got-an-honorable-mention-chi-2026",
          title: 'Our paper on diasporic communities’ remittance practices got an honorable mention CHI 2026!...',
          description: "",
          section: "News",},{id: "news-paper-on-immigrant-non-profit-organizations-ai-practices-has-been-accepted-to-dis-2026",
          title: 'Paper on immigrant non-profit organizations’ AI practices has been accepted to DIS 2026!...',
          description: "",
          section: "News",},{id: "news-paper-on-accountability-in-government-of-canada-s-ai-register-has-been-accepted-to-facct-2026",
          title: 'Paper on Accountability in Government of Canada’s AI Register has been accepted to...',
          description: "",
          section: "News",},{id: "news-three-papers-on-audit-of-bengali-nlp-datasets-and-foundational-models-accountability-in-canada-s-algorithmic-visa-triage-system-and-rag-based-content-moderation-feedback-system-have-been-accepted-to-compass-2026",
          title: 'Three papers on Audit of Bengali NLP datasets and foundational models, Accountability in...',
          description: "",
          section: "News",},{id: "news-our-paper-on-immigrant-non-profit-organizations-ai-practices-got-an-honorable-mention-dis-2026",
          title: 'Our paper on immigrant non-profit organizations’ AI practices got an honorable mention DIS...',
          description: "",
          section: "News",},{id: "news-our-paper-on-diffused-surveillance-during-political-movement-got-accepted-at-usenix-sec-2026",
          title: 'Our paper on Diffused Surveillance During Political Movement got accepted at USENIX Sec...',
          description: "",
          section: "News",},{id: "news-our-paper-on-inclusive-and-accountable-ai-for-immigrant-nonprofits-got-accepted-at-group-2027",
          title: 'Our paper on Inclusive and Accountable AI for Immigrant Nonprofits got accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-on-epistemic-fit-barriers-of-human-research-in-ai-safety-and-ethics-got-accepted-at-aies-2026",
          title: 'Our paper on Epistemic Fit/Barriers of Human Research in AI Safety and Ethics...',
          description: "",
          section: "News",},{id: "projects-ai-fairness-algorithmic-bias-and-ethics",
          title: 'AI Fairness, Algorithmic Bias, and Ethics',
          description: "Conducting large-scale algorithmic audits to uncover systemic identity-based biases in AI systems, revealing how those perpetuate sociocultural hierarchies, stereotypes, and prejudices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AI_fairness.html";
            },},{id: "projects-identity-and-platform-governance",
          title: 'Identity and Platform Governance',
          description: "Examining how digital platforms shape identity, language, belonging, and participation among historically marginalized communities through decolonial and sociotechnical perspectives.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/decolonial.html";
            },},{id: "projects-immigrants-and-transnational-computing-practices",
          title: 'Immigrants and Transnational Computing Practices',
          description: "Exploring how immigrants leverage digital technologies to exercise political agency, maintain cultural ties, and resist systemic exclusion across transnational borders.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/immigrants.html";
            },},{id: "projects-platform-governance-and-online-safety",
          title: 'Platform Governance and Online Safety',
          description: "Developing pluralistic governance frameworks and technical tools, centering hermeneutic and restorative justice for the online safety concerns of minority and vulnerable populations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minority.html";
            },},{id: "projects-multimodal-affective-and-social-interaction",
          title: 'Multimodal Affective and Social Interaction',
          description: "Building machine learning models to detect contextual human communication while examining how users manage digital personas and seek information through interactive social platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/online_platforms.html";
            },},{id: "projects-ai-accountability-in-public-institutions",
          title: 'AI Accountability in Public Institutions',
          description: "Investigating how governments design, document, and govern AI systems, with a focus on transparency, human discretion, accountability, and contestability in public-sector decision-making.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/public_ai.html";
            },},{id: "projects-high-stakes-public-ai-and-institutional-accountability",
          title: 'High-Stakes Public AI and Institutional Accountability',
          description: "Auditing public-sector AI systems to identify asymmetries in accountability, ensuring institutional transparency aligns with the lived experiences of those subject to algorithmic decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/public_sector.html";
            },},{id: "teachings-quantitative-reasoning",
          title: 'Quantitative Reasoning',
          description: "This course introduces foundational concepts in discrete mathematics, probability, and predictive modeling, along with computational tools for analyzing data.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/fa24-quant_reasoning.html";
            },},{id: "teachings-statistics-for-information-science",
          title: 'Statistics for Information Science',
          description: "This course introduces foundational statistical concepts for information science, including data organization, descriptive and inferential statistics, and practical data analysis using Excel.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/fa24-stats_for_infosci.html";
            },},{id: "teachings-user-centered-design",
          title: 'User-Centered Design',
          description: "This course surveys the theoretical and practical foundations of human-computer interaction and user-centered design, including user research, prototyping, and evaluation.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/fa25-user_centered_design.html";
            },},{id: "teachings-statistics-for-information-science",
          title: 'Statistics for Information Science',
          description: "This course introduces foundational statistical concepts for information science, including data organization, descriptive and inferential statistics, and practical data analysis using Excel.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/sp23-stats_for_infosci.html";
            },},{id: "teachings-user-centered-design",
          title: 'User-Centered Design',
          description: "This course introduces the theoretical and practical foundations of human-computer interaction and user-centered design, including user research, prototyping, and evaluation.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/sp24-user_centered_design.html";
            },},{id: "teachings-quantitative-reasoning",
          title: 'Quantitative Reasoning',
          description: "This course introduces foundational concepts in discrete mathematics, probability, and predictive modeling, along with computational tools for analyzing data.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/sp25-quant_reasoning.html";
            },},{id: "teachings-statistics-for-information-science",
          title: 'Statistics for Information Science',
          description: "This course introduces foundational statistical concepts for information science, including data organization, descriptive and inferential statistics, and practical data analysis using Excel.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/sp25-stats_for_infosci.html";
            },},{id: "teachings-computers-and-society",
          title: 'Computers and Society',
          description: "This course examines the relationship between computing technologies and society, focusing on ethics, power, data, and social impacts of computing systems.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/wi26-computers_and_society.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%64%37%34%39@%63%6F%72%6E%65%6C%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yRHRA4QAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/diptodas", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/192/2609", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5704-8804", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://calendar.google.com/calendar/embed?src=dipto.cs.uoft%40gmail.com&ctz=Canada%2FToronto", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
