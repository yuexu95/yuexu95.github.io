---
layout: page
permalink: /members/
title: Members
nav: true
nav_order: 4
navbar_social: true
---

<style>
.post-title { display: none; }
.post-header { display: none; }
.post > article { margin-top: 0 !important; padding-top: 0 !important; }

.members-hero {
  background: linear-gradient(135deg, #0a2a4a 0%, #154360 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2rem 2rem 1.8rem;
  margin-bottom: 3rem;
  text-align: center;
}
.members-hero h2 {
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.4rem;
}
.members-hero p {
  color: #a9cce3;
  font-size: 0.95rem;
  margin: 0;
}

.sec-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
}

/* ── PI card ── */
.pi-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
  align-items: start;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 14px;
  padding: 2rem;
  margin-bottom: 3rem;
  transition: box-shadow 0.2s ease;
}
.pi-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.08); }
.pi-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-areas:
    "photo bio"
    "links links";
  gap: 1.5rem 2rem;
}
.pi-left { grid-area: photo; }
.pi-info { grid-area: bio; }
.pi-links { grid-area: links; }
.pi-photo {
  width: 100%;
  border-radius: 10px;
  display: block;
  object-fit: cover;
}
.pi-info h3 {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
}
.pi-role {
  font-size: 0.88rem;
  font-weight: 600;
  color: #4da6ff;
  margin-bottom: 1rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.pi-bio {
  font-size: 0.91rem;
  line-height: 1.75;
  color: var(--global-text-color-light, #555);
  margin-bottom: 0;
}
.pi-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pi-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--global-divider-color, #ddd);
  color: var(--global-text-color, #333);
  text-decoration: none;
  transition: all 0.2s ease;
}
.pi-link:hover {
  border-color: #4da6ff;
  color: #1a7fff;
  background: rgba(77,166,255,0.06);
}
.pi-link i { font-size: 0.85rem; color: #4da6ff; }

/* ── Lab members grid ── */
.lab-coming {
  border: 2px dashed var(--global-divider-color, #ddd);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  color: var(--global-text-color-light, #888);
}
.lab-coming i {
  font-size: 2.5rem;
  color: #4da6ff;
  opacity: 0.5;
  margin-bottom: 0.8rem;
  display: block;
}
.lab-coming p { font-size: 0.95rem; margin: 0; }
.lab-coming a {
  color: #1a7fff;
  text-decoration: none;
  font-weight: 600;
}
.lab-coming a:hover { text-decoration: underline; }

@media (max-width: 580px) {
  .pi-card { grid-template-columns: 1fr; }
  .pi-photo { width: 140px; }
}
</style>

<div class="sec-title">Principal Investigator</div>

<div class="pi-card">
  <div class="pi-left">
    <img class="pi-photo" src="/assets/img/prof_pic.jpg" alt="Yue Xu">
  </div>
  <div class="pi-info">
    <p class="pi-bio">
      Dr. Yue Xu has joined the <a href="https://www.childrensmercy.org/childrens-mercy-research-institute/"><strong>Children's Mercy Research Institute</strong></a> as a principal investigator. He also completed junior faculty training at <a href="https://www.bcm.edu/"><strong>Baylor College of Medicine</strong></a>. He previously completed his <a href="https://prime.utoronto.ca/"><strong>UHN-PRiME postdoctoral fellowship</strong></a> in <a href="https://www.li-bowen.com/"><strong>Bowen Li's lab</strong></a> at the <a href="https://www.utoronto.ca/"><strong>Leslie Dan Faculty of Pharmacy, University of Toronto</strong></a>. He was trained in medicinal chemistry, earning a Ph.D. from <a href="https://en.cpu.edu.cn/"><strong>China Pharmaceutical University</strong></a>.
    </p>
  </div>
  <div class="pi-links">
    <a class="pi-link" href="mailto:yxu@cmh.edu"><i class="fa-solid fa-envelope"></i> Email</a>
    <a class="pi-link" href="https://scholar.google.com/citations?user=xJDpDu4AAAAJ&hl" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    <a class="pi-link" href="https://orcid.org/0000-0001-7672-9170" target="_blank" rel="noopener"><i class="ai ai-orcid"></i> ORCID</a>
    <a class="pi-link" href="https://github.com/yuexu95" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
    <a class="pi-link" href="https://www.linkedin.com/in/yuexu1995" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
  </div>
</div>

<div class="sec-title">Lab Members</div>

<div class="lab-coming">
  <i class="ti ti-users"></i>
  <p>We are actively recruiting! Interested in joining the Xu Lab? <a href="/join/">See open positions →</a></p>
</div>


[def]: ttps://www.linkedin.com/in/yuexu199