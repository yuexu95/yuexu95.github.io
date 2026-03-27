// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-received-the-scba-toronto-chapter-2024-paper-award",
          title: 'Received the SCBA Toronto Chapter 2024 Paper Award.',
          description: "",
          section: "News",},{id: "news-joined-baylor-college-of-medicine-as-an-instructor",
          title: 'Joined Baylor College of Medicine as an Instructor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1.html";
            },},{id: "news-awarded-the-nci-cap-it-2026-summit-scholarship-for-early-stage-investigators",
          title: 'Awarded the NCI CAP-IT 2026 Summit Scholarship for Early-Stage Investigators.',
          description: "",
          section: "News",},{id: "news-selected-for-an-invited-oral-talk-at-the-american-association-for-cancer-research-aacr-annual-meeting-2026",
          title: 'Selected for an invited oral talk at the American Association for Cancer Research...',
          description: "",
          section: "News",},{id: "news-invited-to-present-at-the-section-of-epidemiology-amp-amp-population-sciences-grand-rounds-baylor-college-of-medicine-houston-tx-on-ai-closed-loop-self-driving-lab-for-gene-delivery",
          title: 'Invited to present at the Section of Epidemiology &amp;amp;amp; Population Sciences Grand Rounds,...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-nih-nci-md-usa-on-ai-closed-loop-self-driving-lab-for-gene-delivery",
          title: 'Gave an invited talk at NIH NCI, MD, USA on “AI-Closed Loop Self-driving...',
          description: "",
          section: "News",},{id: "news-incoming-pi-and-assistant-professor-positions-at-children-39-s-mercy-and-umkc-kumc",
          title: 'Incoming PI and Assistant Professor positions at Children&amp;#39;s Mercy and UMKC/KUMC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%70%75%78%75%79%75%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuexu95", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuexu1995", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7672-9170", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xJDpDu4AAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/YueXu1995", "_blank");
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
