// /* =====================================================================
//    DR. JUSTIN ZHAN — CONTENT FILE
//    Edit ONLY this file to update any content on the site.
//    Layout and styling live in the HTML pages and js/main.js.

//    ---------------------------------------------------------------------
//    QUICK HOW-TO
//    ---------------------------------------------------------------------
//    ADD A NEWS ITEM  →  copy one block inside `news`, paste at the TOP
//      { date: "2026-10-12", tag: "Award", title: "...", body: "...", link: "" },

//    ADD A PUBLICATION  →  copy one block inside `publications`
//      { year: 2026, title: "...", authors: "...", venue: "...", link: "https://doi.org/...", type: "Journal" },

//    ADD A PATENT  →  copy one block inside `patents`
//      { number: "US XX,XXX,XXX", title: "...", inventors: "...", issued: "2026", link: "" },

//    ADD A COURSE  →  copy one line inside `teaching`
//      { term: "Spring 2027", code: "CS 6000", title: "...", level: "Graduate" },

//    ADD OR CHANGE A LINK  →  replace "#TODO" with the real URL
//      scholar: { label: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXX" },

//    RULES
//      - Comma after every entry except the last one in a list.
//      - Text inside double quotes. Use \" for a quote inside text.
//      - Save → browser auto-refreshes with Live Server.
//    ===================================================================== */

// window.SITE_DATA = {

//   // -------------------------------------------------------------------
//   // PERSON
//   // -------------------------------------------------------------------
//   person: {
//     name: "Dr. Justin Zhan",
//     title: "Professor and Department Head",
//     chair: "Fred A. & Juliet Esselborn Geier Chair Professor",
//     department: "Department of Computer Science",
//     college: "College of Engineering and Applied Science",
//     university: "University of Cincinnati",
//     office: "Digital Futures 1, Room 520C · 3080 Exploration Avenue · Cincinnati, OH 45221",
//     email: "justin.zhan@uc.edu",
//     phone: "(513) 556-7616",
//     headshot: "Dr. Zhan.jpeg",
//     bio: [
//       "Dr. Justin Zhan is the Fred A. & Juliet Esselborn Geier Chair Professor and Head of the Department of Computer Science in the College of Engineering and Applied Science at the University of Cincinnati. His research spans data science, artificial intelligence, blockchain technologies, biomedical informatics, information assurance, and social computing.",
//       "He has published more than 250 articles in peer-reviewed journals and conferences, delivered over 30 keynote and invited talks, and served as PI or Co-PI on more than 60 funded projects from the National Science Foundation, Department of Defense, and National Institutes of Health.",
//       "Dr. Zhan has served as steering chair of IEEE SocialCom, IEEE PASSAT, and IEEE BioMedCom, and as Editor-in-Chief of the International Journal of Privacy, Security and Integrity and the International Journal of Social Computing and Cyber-Physical Systems. He leads the <a href=\"https://cincysi.si\" class=\"text-uc-red hover:underline font-medium\" target=\"_blank\" rel=\"noopener\">CincySI (Super Intelligence) Lab</a> at the University of Cincinnati."
//     ]
//   },

//   // -------------------------------------------------------------------
//   // IMPACT STATS: shown as a quick-read banner on the home page
//   // -------------------------------------------------------------------
//   stats: [
//     { value: "250+", label: "Peer-reviewed publications" },
//     { value: "60+",  label: "Funded research projects" },
//     { value: "30+",  label: "Keynote & invited talks" },
//     { value: "30",   label: "Journals served" }
//   ],

//   // -------------------------------------------------------------------
//   // LINKS: footer icons. Replace "#TODO" with real URLs.
//   // -------------------------------------------------------------------
//   links: {
//     scholar:  { label: "Google Scholar", url: "#TODO" },
//     orcid:    { label: "ORCID",          url: "#TODO" },
//     linkedin: { label: "LinkedIn",       url: "#TODO" },
//     cincysi:  { label: "CincySI Lab",    url: "https://cincysi.si" }
//   },

//   // -------------------------------------------------------------------
//   // NAVIGATION
//   // -------------------------------------------------------------------
//   nav: [
//     { label: "Home",         href: "index.html" },
//     { label: "Research",     href: "research.html" },
//     { label: "Publications", href: "publications.html" },
//     { label: "Teaching",     href: "teaching.html" }
//   ],

//   // -------------------------------------------------------------------
//   // NEWS & ANNOUNCEMENTS (newest first)
//   // PLACEHOLDERS — replace with real items
//   // -------------------------------------------------------------------
//   news: [
//     {
//       date: "2026-10-01",
//       tag: "Grant",
//       title: "NSF Award: Experiential Learning Pathway in AI ($1M)",
//       body: "Dr. Zhan has been named PI on a new National Science Foundation award establishing an experiential learning pathway in artificial intelligence.",
//       link: ""
//     },
//     {
//       date: "2026-08-15",
//       tag: "Service",
//       title: "Appointed Department Head, Computer Science at UC",
//       body: "Dr. Zhan has been appointed Head of the Department of Computer Science, College of Engineering and Applied Science.",
//       link: ""
//     },
//     {
//       date: "2026-06-10",
//       tag: "Grant",
//       title: "NSF S-STEM Award: Southwest Ohio Scholars ($2.46M)",
//       body: "A multi-investigator NSF S-STEM grant focused on redefining academic belonging for computer science students and families.",
//       link: ""
//     }
//   ],

//   // -------------------------------------------------------------------
//   // SELECTED PUBLICATIONS (shown on home page; full list on publications.html)
//   // Source: UC Research Directory. Add DOI links when available.
//   // -------------------------------------------------------------------
//   publications: [
//     {
//       year: 2022,
//       title: "Classification of Twitter Vaping Discourse Using BERTTweet: Comparative Deep Learning Study",
//       authors: "Baker W., Colditz J.B., Dobbs P.D., Mai H., Visweswaran S., Zhan J., Primack B.A.",
//       venue: "Journal of Medical Internet Research Medical Informatics, 10(7):e33678",
//       link: "https://medinform.jmir.org/2022/7/e33678",
//       type: "Journal"
//     },
//     {
//       year: 2021,
//       title: "Modeling Cell Communication with Time-Dependent Signaling Hypergraphs",
//       authors: "Schwob M., Zhan J., Dempsey A.",
//       venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics, 18(3):1151–1163",
//       link: "",
//       type: "Journal"
//     },
//     {
//       year: 2021,
//       title: "MitoCellPhe Reveals Mitochondrial Morphologies in Single Fibroblasts and Clustered Stem Cells",
//       authors: "Bakare A., Meshrkey F., Lowe B., Molder C., Rao R., Zhan J., Iyer S.",
//       venue: "American Journal of Physiology Cell Physiology, 321:C735–C748",
//       link: "",
//       type: "Journal"
//     },
//     {
//       year: 2019,
//       title: "An Evolutionary Approach to Compact DAG Neural Network Optimization",
//       authors: "Chiu C., Zhan J.",
//       venue: "IEEE Access, vol. 7",
//       link: "",
//       type: "Journal"
//     },
//     {
//       year: 2017,
//       title: "Towards A Framework for Community Detection in Large Networks using Game-Theoretic Modeling",
//       authors: "Chopade P., Zhan J.",
//       venue: "IEEE Transactions on Big Data, 3(3)",
//       link: "",
//       type: "Journal"
//     }
//   ],

//   // -------------------------------------------------------------------
//   // PATENTS
//   // PLACEHOLDERS — add real patent numbers and titles
//   // -------------------------------------------------------------------
//   patents: [
//     {
//       number: "US XX,XXX,XXX",
//       title: "Patent title placeholder — add real patent information here",
//       inventors: "Zhan J., et al.",
//       issued: "20XX",
//       link: ""
//     }
//   ],

//   // -------------------------------------------------------------------
//   // RESEARCH AREAS
//   // -------------------------------------------------------------------
//   researchAreas: [
//     {
//       title: "Data Science",
//       description: "Methods for extracting knowledge from large, heterogeneous datasets, with a focus on scalable analytics and social and network data.",
//       keywords: ["Big data", "Network analysis", "Analytics"]
//     },
//     {
//       title: "Artificial Intelligence",
//       description: "Machine learning and deep learning systems, including AI for experiential learning and the evaluation of trustworthy AI in industrial settings.",
//       keywords: ["Machine learning", "Deep learning", "Trustworthy AI"]
//     },
//     {
//       title: "Blockchain Technologies",
//       description: "Decentralized architectures, trust, and privacy-preserving applications of distributed ledgers.",
//       keywords: ["Distributed ledgers", "Smart contracts", "Decentralized systems"]
//     },
//     {
//       title: "Biomedical Informatics",
//       description: "Computational methods for health data, including biomedical knowledge graphs and analytics frameworks for clinical research.",
//       keywords: ["Knowledge graphs", "Health analytics", "Clinical data"]
//     },
//     {
//       title: "Cyber Security & Information Assurance",
//       description: "Privacy, security, and risk for information systems, including mental health and behavioral prediction research.",
//       keywords: ["Information assurance", "Privacy", "Risk and trust"]
//     },
//     {
//       title: "Social Computing",
//       description: "Modeling of social behavior, online communities, and the interaction between people and computational systems.",
//       keywords: ["Social networks", "Community detection", "Online behavior"]
//     }
//   ],

//   // -------------------------------------------------------------------
//   // TEACHING (newest term first)
//   // PLACEHOLDERS — replace with real courses
//   // -------------------------------------------------------------------
//   teaching: [
//     { term: "Fall 2026",   code: "CS XXXX", title: "Course title (placeholder)", level: "Graduate" },
//     { term: "Spring 2026", code: "CS XXXX", title: "Course title (placeholder)", level: "Undergraduate" },
//     { term: "Fall 2025",   code: "CS XXXX", title: "Course title (placeholder)", level: "Graduate" }
//   ]
// };



/* =====================================================================
   DR. JUSTIN ZHAN — CONTENT FILE
   Edit ONLY this file to update any content on the site.
   Layout and styling live in the HTML pages and js/main.js.

   ---------------------------------------------------------------------
   QUICK HOW-TO
   ---------------------------------------------------------------------
   ADD A NEWS ITEM  →  copy one block inside `news`, paste at the TOP
     { date: "2026-10-12", tag: "Award", title: "...", body: "...", link: "" },

   ADD A PUBLICATION  →  copy one block inside `publications`
     { year: 2026, title: "...", authors: "...", venue: "...", link: "https://doi.org/...", type: "Journal" },

   ADD A PATENT  →  copy one block inside `patents`
     { number: "US XX,XXX,XXX", title: "...", inventors: "...", issued: "2026", link: "" },

   ADD A COURSE  →  copy one line inside `teaching`
     { term: "Spring 2027", code: "CS 6000", title: "...", level: "Graduate" },

   ADD OR CHANGE A LINK  →  replace "#TODO" with the real URL
     scholar: { label: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXX" },

   RULES
     - Comma after every entry except the last one in a list.
     - Text inside double quotes. Use \" for a quote inside text.
     - Save → browser auto-refreshes with Live Server.
   ===================================================================== */

window.SITE_DATA = {

  // -------------------------------------------------------------------
  // PERSON
  // -------------------------------------------------------------------
  person: {
    name: "Dr. Justin Zhan",
    title: "Professor and Department Head",
    chair: "Fred A. & Juliet Esselborn Geier Chair Professor",
    department: "Department of Computer Science",
    college: "College of Engineering and Applied Science",
    university: "University of Cincinnati",
    office: "Digital Futures 1, Room 520C · 3080 Exploration Avenue · Cincinnati, OH 45221",
    email: "justin.zhan@uc.edu",
    phone: "(513) 556-7616",
    headshot: "Dr. Zhan.jpeg",
    bio: [
      "Dr. Justin Zhan is the Fred A. & Juliet Esselborn Geier Chair Professor and Head of the Department of Computer Science in the College of Engineering and Applied Science at the University of Cincinnati. His research spans data science, artificial intelligence, blockchain technologies, biomedical informatics, information assurance, and social computing.",
      "He has published more than 250 articles in peer-reviewed journals and conferences, delivered over 30 keynote and invited talks, and served as PI or Co-PI on more than 60 funded projects from the National Science Foundation, Department of Defense, and National Institutes of Health.",
      "Dr. Zhan has served as steering chair of IEEE SocialCom, IEEE PASSAT, and IEEE BioMedCom, and as Editor-in-Chief of the International Journal of Privacy, Security and Integrity and the International Journal of Social Computing and Cyber-Physical Systems. He leads the <a href=\"https://cincysi.si\" class=\"text-uc-red hover:underline font-medium\" target=\"_blank\" rel=\"noopener\">CincySI (Super Intelligence) Lab</a> at the University of Cincinnati."
    ]
  },

  // -------------------------------------------------------------------
  // IMPACT STATS
  // -------------------------------------------------------------------
  stats: [
    { value: "250+", label: "Peer-reviewed publications" },
    { value: "60+",  label: "Funded research projects" },
    { value: "30+",  label: "Keynote & invited talks" },
    { value: "30",   label: "Journals served" }
  ],

  // -------------------------------------------------------------------
  // LINKS: footer icons
  // -------------------------------------------------------------------
  links: {
    scholar:  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=3klqaJMAAAAJ&hl=en" },
    orcid:    { label: "ORCID",          url: "https://orcid.org/0000-0001-5458-8282" },
    linkedin: { label: "LinkedIn",       url: "https://www.linkedin.com/in/justin-zhan-366981256" },
    cincysi:  { label: "CincySI Lab",    url: "https://cincysi.si" }
  },

  // -------------------------------------------------------------------
  // NAVIGATION
  // -------------------------------------------------------------------
  nav: [
    { label: "Home",         href: "index.html" },
    { label: "Research",     href: "research.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Teaching",     href: "teaching.html" },
    { label: "Grants",       href: "grants.html" }
  ],

  // -------------------------------------------------------------------
  // NEWS & ANNOUNCEMENTS (newest first)
  // -------------------------------------------------------------------
  news: [
    {
      date: "2026-10-01",
      tag: "Grant",
      title: "NSF Award: Experiential Learning Pathway in AI ($1M)",
      body: "Dr. Zhan has been named PI on a new National Science Foundation award establishing an experiential learning pathway in artificial intelligence.",
      link: ""
    },
    {
      date: "2026-08-15",
      tag: "Service",
      title: "Appointed Department Head, Computer Science at UC",
      body: "Dr. Zhan has been appointed Head of the Department of Computer Science, College of Engineering and Applied Science.",
      link: ""
    },
    {
      date: "2026-06-10",
      tag: "Grant",
      title: "NSF S-STEM Award: Southwest Ohio Scholars ($2.46M)",
      body: "A multi-investigator NSF S-STEM grant focused on redefining academic belonging for computer science students and families.",
      link: ""
    }
  ],

  // -------------------------------------------------------------------
  // SELECTED PUBLICATIONS
  // -------------------------------------------------------------------
  publications: [
    {
      year: 2022,
      title: "Classification of Twitter Vaping Discourse Using BERTTweet: Comparative Deep Learning Study",
      authors: "Baker W., Colditz J.B., Dobbs P.D., Mai H., Visweswaran S., Zhan J., Primack B.A.",
      venue: "Journal of Medical Internet Research Medical Informatics, 10(7):e33678",
      link: "https://medinform.jmir.org/2022/7/e33678",
      type: "Journal"
    },
    {
      year: 2021,
      title: "Modeling Cell Communication with Time-Dependent Signaling Hypergraphs",
      authors: "Schwob M., Zhan J., Dempsey A.",
      venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics, 18(3):1151–1163",
      link: "",
      type: "Journal"
    },
    {
      year: 2021,
      title: "MitoCellPhe Reveals Mitochondrial Morphologies in Single Fibroblasts and Clustered Stem Cells",
      authors: "Bakare A., Meshrkey F., Lowe B., Molder C., Rao R., Zhan J., Iyer S.",
      venue: "American Journal of Physiology Cell Physiology, 321:C735–C748",
      link: "",
      type: "Journal"
    },
    {
      year: 2019,
      title: "An Evolutionary Approach to Compact DAG Neural Network Optimization",
      authors: "Chiu C., Zhan J.",
      venue: "IEEE Access, vol. 7",
      link: "",
      type: "Journal"
    },
    {
      year: 2017,
      title: "Towards A Framework for Community Detection in Large Networks using Game-Theoretic Modeling",
      authors: "Chopade P., Zhan J.",
      venue: "IEEE Transactions on Big Data, 3(3)",
      link: "",
      type: "Journal"
    }
  ],

  // -------------------------------------------------------------------
  // PATENTS
  // -------------------------------------------------------------------
  patents: [
    {
      number: "US XX,XXX,XXX",
      title: "Patent title placeholder — add real patent information here",
      inventors: "Zhan J., et al.",
      issued: "20XX",
      link: ""
    }
  ],

  // -------------------------------------------------------------------
  // RESEARCH AREAS
  // -------------------------------------------------------------------
  researchAreas: [
    {
      title: "Data Science",
      description: "Methods for extracting knowledge from large, heterogeneous datasets, with a focus on scalable analytics and social and network data.",
      keywords: ["Big data", "Network analysis", "Analytics"]
    },
    {
      title: "Artificial Intelligence",
      description: "Machine learning and deep learning systems, including AI for experiential learning and the evaluation of trustworthy AI in industrial settings.",
      keywords: ["Machine learning", "Deep learning", "Trustworthy AI"]
    },
    {
      title: "Blockchain Technologies",
      description: "Decentralized architectures, trust, and privacy-preserving applications of distributed ledgers.",
      keywords: ["Distributed ledgers", "Smart contracts", "Decentralized systems"]
    },
    {
      title: "Biomedical Informatics",
      description: "Computational methods for health data, including biomedical knowledge graphs and analytics frameworks for clinical research.",
      keywords: ["Knowledge graphs", "Health analytics", "Clinical data"]
    },
    {
      title: "Cyber Security & Information Assurance",
      description: "Privacy, security, and risk for information systems, including mental health and behavioral prediction research.",
      keywords: ["Information assurance", "Privacy", "Risk and trust"]
    },
    {
      title: "Social Computing",
      description: "Modeling of social behavior, online communities, and the interaction between people and computational systems.",
      keywords: ["Social networks", "Community detection", "Online behavior"]
    }
  ],

  // -------------------------------------------------------------------
  // TEACHING
  // -------------------------------------------------------------------
  teaching: [
    { term: "Current", code: "CS 5001", title: "Senior Design I",                  level: "Undergraduate" },
    { term: "Current", code: "CS 5002", title: "Senior Design II",                 level: "Undergraduate" },
    { term: "Current", code: "CS 7001", title: "Computer Science Seminar I",       level: "Graduate" },
    { term: "Current", code: "CS 7002", title: "Computer Science Seminar II",      level: "Graduate" },
    { term: "Current", code: "CS 7063", title: "Advanced Machine Learning",        level: "Graduate" },
    { term: "Current", code: "CS 7064", title: "Trustworthy Machine Learning",     level: "Graduate" },
    { term: "Past",    code: "—",       title: "Artificial Intelligence",          level: "Graduate" },
    { term: "Past",    code: "—",       title: "Information Security and Privacy", level: "Graduate" },
    { term: "Past",    code: "—",       title: "Blockchain Technologies",          level: "Graduate" },
    { term: "Past",    code: "—",       title: "Foundational Programming",         level: "Undergraduate" }
  ],

  // -------------------------------------------------------------------
  // GRANTS & FUNDED PROJECTS
  // -------------------------------------------------------------------
  grants: [
    {
      title: "Establishing an Experiential Learning Pathway in Artificial Intelligence",
      agency: "National Science Foundation",
      amount: "$1,000,000",
      period: "07/2024 – 06/2028",
      role: "PI",
      status: "Active"
    },
    {
      title: "Redefining Academic Belonging for Computer Science Students and Families",
      agency: "National Science Foundation",
      amount: "$2,462,801",
      period: "10/2023 – 09/2029",
      role: "PI",
      status: "Active"
    },
    {
      title: "The Water-Energy Nexus Open Knowledge Network",
      agency: "National Science Foundation",
      amount: "$1,472,016",
      period: "10/2023 – 09/2027",
      role: "Co-PI",
      status: "Active"
    },
    {
      title: "Automated Mental Health to Predict Inward and Outward Destructive Behaviors along with Mental Health Role",
      agency: "Department of Defense",
      amount: "$1,999,998",
      period: "04/2023 – 03/2027",
      role: "Co-PI",
      status: "Active"
    },
    {
      title: "Using AI and Natural Language Processing for Mental Health Children's Data Analysis",
      agency: "Cincinnati Children's Hospital Medical Center",
      amount: "$88,000",
      period: "10/2023 – 09/2025",
      role: "PI",
      status: "Active"
    },
    {
      title: "Develop a Biomedical Knowledge Graph of Nature's Language",
      agency: "National Institutes of Health / CCHMC",
      amount: "$346,148",
      period: "07/2024 – 06/2029",
      role: "UC PI",
      status: "Active"
    },
    {
      title: "Non-invasive Automated Wound Analysis via Deep Learning Neural Networks",
      agency: "National Institutes of Health",
      amount: "$1,600,000",
      period: "09/2021 – 08/2026",
      role: "Co-I",
      status: "Active"
    },
    {
      title: "Arkansas Integrative Metabolic Research Center",
      agency: "National Institutes of Health",
      amount: "$11,182,832",
      period: "04/2021 – 03/2026",
      role: "PI, Data Science Core",
      status: "Active"
    },
    {
      title: "A Novel Machine Learning Approach for Multimodal Sensing and Multilevel Fusion Data Analytics",
      agency: "Department of Defense",
      amount: "$1,250,000",
      period: "09/2020 – 01/2024",
      role: "PI",
      status: "Concluded"
    },
    {
      title: "Cloud-based Artificial Intelligence Learning Modules for Biomedical Research",
      agency: "National Institutes of Health",
      amount: "$140,135",
      period: "05/2022 – 04/2023",
      role: "UA PI",
      status: "Concluded"
    },
    {
      title: "A Novel Artificial Intelligence Approach for Maternal Health and Lifestyle during Pregnancy and Newborn Brain Development",
      agency: "National Institutes of Health",
      amount: "$129,285",
      period: "10/2020 – 09/2022",
      role: "UA PI",
      status: "Concluded"
    },
    {
      title: "A Novel Artificial Intelligence Approach for Newborn Brain Development",
      agency: "Arkansas Research Alliance",
      amount: "$75,000",
      period: "02/2021 – 12/2022",
      role: "UA PI",
      status: "Concluded"
    },
    {
      title: "Using AI and Natural Language Processing for Mental Health Children's Data Analysis",
      agency: "Cincinnati Children's Hospital Medical Center",
      amount: "$86,531",
      period: "10/2023 – 09/2024",
      role: "PI",
      status: "Concluded"
    }
  ],

  // -------------------------------------------------------------------
  // AWARDS & HONORS
  // -------------------------------------------------------------------
  awards: [
    { year: "2021", title: "FDA Faculty Research Fellow in Bioinformatics", body: "U.S. Food and Drug Administration's National Center for Toxicological Research" },
    { year: "2020", title: "Air Force Research Laboratory Faculty Fellow",  body: "Air Force Research Laboratory" },
    { year: "2020", title: "FDA Faculty Research Fellow in Bioinformatics", body: "U.S. Food and Drug Administration's National Center for Toxicological Research" },
    { year: "2019", title: "Arkansas Research Alliance Scholar",             body: "Arkansas Research Alliance" },
    { year: "2019", title: "Faculty Fellow",                                 body: "Air Force Research Laboratory" },
    { year: "2018", title: "United States Army Mentorship Award",           body: "Research & Engineering Apprenticeship Program" },
    { year: "2018", title: "Faculty Fellow",                                 body: "Air Force Research Laboratory" },
    { year: "2017", title: "Congressional Recognition Award",               body: "US Congresswoman Jack Rosen, Third District, Nevada" }
  ]
};