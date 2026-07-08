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

/* ── People grid (3 cards per row, fixed size) ── */
.people-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}
.pi-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 480px;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 16px;
  padding: 2.2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease;
  overflow-y: auto;
}
.pi-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.09); }
.pi-left { text-align: center; margin-bottom: 1.4rem; }
.pi-info { width: 100%; display: flex; flex-direction: column; gap: 0.9rem; }
.pi-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.pi-name {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 1.1rem 0 0.3rem;
}
.pi-role {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4da6ff;
  margin: 0;
  letter-spacing: 0.02em;
}
.pi-bio {
  font-size: 0.91rem;
  line-height: 1.75;
  color: var(--global-text-color-light, #555);
}

/* ── Accordion (Biography / Contact) ── */
.pi-bio-details {
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
  background: rgba(77,166,255,0.02);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.pi-bio-details:hover { border-color: rgba(77,166,255,0.45); }
.pi-bio-details[open] { background: rgba(77,166,255,0.05); }
.pi-bio-details summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--global-text-color, #222);
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.55rem;
}
.pi-bio-details summary::-webkit-details-marker { display: none; }
.pi-bio-details summary .pi-summary-icon {
  color: #4da6ff;
  width: 1rem;
  text-align: center;
  font-size: 0.85rem;
}
.pi-bio-details summary::after {
  content: "\276F";
  margin-left: auto;
  font-size: 0.7rem;
  color: var(--global-text-color-light, #999);
  transition: transform 0.2s ease;
}
.pi-bio-details[open] summary::after { transform: rotate(90deg); }
.pi-bio-details > *:not(summary) {
  margin-top: 0.9rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--global-divider-color, #e5e5e5);
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

/* ── Join Us card (3rd grid slot) ── */
.join-card {
  justify-content: center;
  text-align: center;
  border-style: dashed;
  color: var(--global-text-color-light, #888);
}
.join-card i {
  font-size: 2.5rem;
  color: #4da6ff;
  opacity: 0.5;
  margin-bottom: 0.8rem;
  display: block;
}
.join-card .pi-name { margin: 0 0 0.6rem; }
.join-card p { font-size: 0.91rem; line-height: 1.75; margin: 0 0 1.2rem; }
.join-card a.pi-link {
  border-color: #4da6ff;
  color: #1a7fff;
  font-weight: 600;
}

@media (max-width: 980px) {
  .people-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 620px) {
  .people-grid { grid-template-columns: 1fr; }
  .pi-card { padding: 1.6rem; min-height: 0; }
}
</style>

<div class="sec-title">People</div>

<div class="people-grid">
  <div class="pi-card">
    <div class="pi-left">
      <img class="pi-photo" src="/assets/img/prof_pic.jpg" alt="Yue Xu">
      <h3 class="pi-name">Yue Xu, Ph.D.</h3>
      <p class="pi-role">Principal Investigator</p>
    </div>
    <div class="pi-info">
      <details class="pi-bio-details">
        <summary><i class="fa-solid fa-user pi-summary-icon"></i> Biography</summary>
        <p class="pi-bio">
          Dr. Yue Xu has joined the <a href="https://www.childrensmercy.org/childrens-mercy-research-institute/"><strong>Children's Mercy Research Institute</strong></a> as a principal investigator. He also completed junior faculty training at <a href="https://www.bcm.edu/"><strong>Baylor College of Medicine</strong></a>. He previously completed his <a href="https://prime.utoronto.ca/"><strong>UHN-PRiME postdoctoral fellowship</strong></a> in <a href="https://www.li-bowen.com/"><strong>Bowen Li's lab</strong></a> at the <a href="https://www.utoronto.ca/"><strong>Leslie Dan Faculty of Pharmacy, University of Toronto</strong></a>.
        </p>
      </details>
      <details class="pi-bio-details">
        <summary><i class="fa-solid fa-address-card pi-summary-icon"></i> Contact</summary>
        <div class="pi-links">
          <a class="pi-link" href="mailto:yxu@cmh.edu"><i class="fa-solid fa-envelope"></i> Email</a>
          <a class="pi-link" href="https://scholar.google.com/citations?user=xJDpDu4AAAAJ&hl" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a>
          <a class="pi-link" href="https://orcid.org/0000-0001-7672-9170" target="_blank" rel="noopener"><i class="ai ai-orcid"></i> ORCID</a>
          <a class="pi-link" href="https://github.com/yuexu95" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
          <a class="pi-link" href="https://www.linkedin.com/in/yuexu1995" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
      </details>
    </div>
  </div>

  <div class="pi-card">
    <div class="pi-left">
      <img class="pi-photo" src="/assets/img/Qi%20Miao.png" alt="Qi Miao">
      <h3 class="pi-name">Qi Miao, Ph.D.</h3>
      <p class="pi-role">Senior Research Associate</p>
    </div>
    <div class="pi-info">
      <details class="pi-bio-details">
        <summary><i class="fa-solid fa-user pi-summary-icon"></i> Biography</summary>
        <p class="pi-bio">
          Dr. Qi Miao is a senior medicinal chemist, specializing in accelerating preclinical drug discovery. He earned his PhD in Medicinal Chemistry from <a href="https://en.cpu.edu.cn/"><strong>China Pharmaceutical University</strong></a>, followed by industry experience as a senior researcher and postdoctoral training in medicinal chemistry at <a href="https://www.bcm.edu/"><strong>Baylor College of Medicine</strong></a>.
        </p>
      </details>
    </div>
  </div>

  <div class="pi-card join-card">
    <i class="ti ti-user-plus"></i>
    <h3 class="pi-name">Join Us</h3>
    <p>We are actively recruiting! Interested in joining the Xu Lab?</p>
    <a href="/join/" class="pi-link">See open positions →</a>
  </div>
</div>

[def]: ttps://www.linkedin.com/in/yuexu199