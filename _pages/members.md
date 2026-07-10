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
  min-height: 0;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 16px;
  padding: 1.4rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: box-shadow 0.25s ease;
  overflow-y: auto;
}
.pi-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.09); }
.pi-left { text-align: center; margin-bottom: 1rem; }
.pi-info { width: 100%; display: flex; flex-direction: column; gap: 0.6rem; }
.pi-photo {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.pi-name {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0.8rem 0 0.2rem;
}
.pi-role {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4da6ff;
  margin: 0;
  letter-spacing: 0.02em;
}
.pi-edu {
  font-size: 0.8rem;
  color: var(--global-text-color-light, #888);
  margin: 0.3rem 0 0;
}
.pi-links {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.4rem;
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
.pi-link-icon {
  width: 1.9rem;
  height: 1.9rem;
  flex-shrink: 0;
  padding: 0;
  justify-content: center;
  border-radius: 50%;
}
.pi-link-disabled {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}

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
    <p class="pi-edu">Instructor, Baylor College of Medicine</p>
    <p class="pi-edu">Postdoc Fellowship, University of Toronto</p>

    </div>
    <div class="pi-info">
      <div class="pi-links">
        <a class="pi-link pi-link-icon" href="mailto:yxu@cmh.edu"><i class="fa-solid fa-envelope"></i></a>
        <a class="pi-link pi-link-icon" href="https://scholar.google.com/citations?user=xJDpDu4AAAAJ&hl" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i></a>
        <a class="pi-link pi-link-icon" href="https://orcid.org/0000-0001-7672-9170" target="_blank" rel="noopener"><i class="ai ai-orcid"></i></a>
        <a class="pi-link pi-link-icon" href="https://github.com/yuexu95" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/yuexu1995" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <a class="pi-link pi-link-icon" href="https://x.com/YueXu1995" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
    </div>
  </div>

  <div class="pi-card">
    <div class="pi-left">
      <img class="pi-photo" src="/assets/img/Qi Miao.jpg" alt="Qi Miao">
      <h3 class="pi-name">Qi Miao, Ph.D.</h3>
      <p class="pi-role">Senior Research Associate</p>
      <p class="pi-edu">Postdoc, Baylor College of Medicine</p>
      <p class="pi-edu">Ph.D., China Pharmaceutical University</p>

    </div>
    <div class="pi-info">
      <div class="pi-links">
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-solid fa-envelope"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-google-scholar"></i></span>
        <a class="pi-link pi-link-icon" href="https://orcid.org/0000-0003-4250-2239" target="_blank" rel="noopener"><i class="ai ai-orcid"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-github"></i></span>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/qi-miao-175556259/" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-x-twitter"></i></span>
      </div>
    </div>
  </div>

  <div class="pi-card">
    <div class="pi-left">
      <img class="pi-photo" src="/assets/img/Yukuan.jpg" alt="Yu-Kuan Pan">
      <h3 class="pi-name">Yu-Kuan (Andy) Pan, M.S.</h3>
      <p class="pi-role">Bioinformatics Scientist</p>
      <p class="pi-edu">M.S., UTHealth Houston</p>
      <p class="pi-edu">B.S., University of Maryland</p>
    </div>
    <div class="pi-info">
      <div class="pi-links">
        <a class="pi-link pi-link-icon" href="mailto:andypan0214@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-google-scholar"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-orcid"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-github"></i></span>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/yukuanpan0214" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-x-twitter"></i></span>
      </div>
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