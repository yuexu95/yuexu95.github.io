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
          description: "(* Co-first author; # Corresponding author)",
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
        },{id: "news-yue-xu-received-the-scba-toronto-chapter-2025-paper-award",
          title: 'Yue Xu received the SCBA Toronto Chapter 2025 Paper Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/scba-award/";
            },},{id: "news-yue-xu-joined-baylor-college-of-medicine-as-an-instructor",
          title: 'Yue Xu joined Baylor College of Medicine as an Instructor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1.html";
            },},{id: "news-yue-xu-delivered-a-grand-rounds-talk-at-bcm-epidemiology-and-population-sciences",
          title: 'Yue Xu delivered a Grand Rounds Talk at BCM Epidemiology and Population Sciences...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/bcm-grand-rounds/";
            },},{id: "news-yue-xu-will-join-children-39-s-mercy-and-umkc-kumc-as-pi-and-assistant-professor",
          title: 'Yue Xu will join Children&amp;#39;s Mercy and UMKC/KUMC as PI and Assistant Professor...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-yue-xu-was-invited-to-speak-at-nih-nci-as-a-2026-cap-it-early-career-investigator",
          title: 'Yue Xu was invited to Speak at NIH NCI as a 2026 CAP-IT...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-yue-xu-was-selected-for-an-invited-oral-presentation-at-aacr-2026",
          title: 'Yue Xu was selected for an Invited Oral Presentation at AACR 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5.html";
            },},{id: "news-yue-xu-attended-the-2026-asgct-annual-meeting-in-boston-ma-usa",
          title: 'Yue Xu attended the 2026 ASGCT Annual Meeting in Boston, MA, USA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7.html";
            },},{id: "news-yue-xu-joined-the-children-s-mercy-research-institute-as-a-principal-investigator",
          title: 'Yue Xu joined the Children’s Mercy Research Institute as a principal investigator',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8.html";
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
