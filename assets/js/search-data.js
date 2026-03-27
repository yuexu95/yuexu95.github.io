// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
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
        },{id: "news-scba-toronto-chapter-2025-paper-award",
          title: 'SCBA Toronto Chapter 2025 Paper Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/scba-award/";
            },},{id: "news-joined-baylor-college-of-medicine-as-an-instructor",
          title: 'Joined Baylor College of Medicine as an Instructor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1.html";
            },},{id: "news-grand-rounds-talk-at-bcm-section-of-epidemiology-amp-population-sciences",
          title: 'Grand Rounds talk at BCM Section of Epidemiology &amp;amp; Population Sciences',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/bcm-grand-rounds/";
            },},{id: "news-incoming-pi-and-assistant-professor-positions-at-children-39-s-mercy-and-umkc-kumc",
          title: 'Incoming PI and Assistant Professor positions at Children&amp;#39;s Mercy and UMKC/KUMC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-invited-talk-at-nih-nci-as-2026-cap-it-early-career-investigator",
          title: 'Invited talk at NIH NCI as 2026 CAP-IT early career investigator',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-selected-for-aacr-2026-invited-oral-talk",
          title: 'Selected for AACR 2026 Invited Oral Talk',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5.html";
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
