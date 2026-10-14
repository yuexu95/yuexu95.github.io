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

/* ── People grid (three fixed-width cards per row, left-aligned; photo on top) ── */
.people-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  justify-content: start;
  gap: 1rem;
  margin-bottom: 3rem;
}
.pi-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
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
/* text, then icons; previous positions open beneath the icons */
.pi-body {
  flex: 1;
  align-self: stretch;
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 0.8rem;
}
.pi-info { display: contents; }
.pi-prev-list { grid-column: 1 / -1; }
.pi-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.pi-name {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
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
.pi-affil {
  font-size: 0.82rem;
  color: var(--global-text-color, #333);
  margin: 0.3rem 0 0;
  line-height: 1.45;
}
.pi-prev-list {
  list-style: none;
  padding: 0;
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--global-text-color-light, #888);
}
.pi-prev-list li { margin: 0.2rem 0; }
.pi-prev-toggle {
  background: none;
  cursor: pointer;
}
.pi-prev-toggle i { transition: transform 0.2s ease; }
.pi-prev-toggle[aria-expanded="true"] i { transform: rotate(180deg); }
.pi-links {
  display: flex;
  flex-wrap: wrap;
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

/* ── Join Us card ── */
.join-card {
  flex-direction: column;
  gap: 0;
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

@media (max-width: 760px) {
  .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 480px) {
  .people-grid { grid-template-columns: 1fr; }
}
</style>

<div class="sec-title">People</div>

<div class="people-grid">
  <div class="pi-card">
    <img class="pi-photo" src="/assets/img/prof_pic.jpg" alt="Yue Xu">
    <div class="pi-body">
    <div class="pi-left">
      <h3 class="pi-name">Yue Xu, Ph.D.</h3>
      <p class="pi-role">Principal Investigator</p>
      <p class="pi-affil">Children's Mercy Research Institute</p>
      <p class="pi-affil">Assistant Professor, UMKC School of Medicine &amp; School of Pharmacy</p>
    </div>
    <div class="pi-info">
      <div class="pi-links">
        <button type="button" class="pi-link pi-link-icon pi-prev-toggle" aria-expanded="false" aria-label="Previous positions" title="Previous positions"><i class="fa-solid fa-chevron-down"></i></button>
        <a class="pi-link pi-link-icon" href="mailto:yxu@cmh.edu"><i class="fa-solid fa-envelope"></i></a>
        <a class="pi-link pi-link-icon" href="https://scholar.google.com/citations?user=xJDpDu4AAAAJ&hl" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i></a>
        <a class="pi-link pi-link-icon" href="https://orcid.org/0000-0001-7672-9170" target="_blank" rel="noopener"><i class="ai ai-orcid"></i></a>
        <a class="pi-link pi-link-icon" href="https://github.com/yuexu95" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/yuexu1995" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <a class="pi-link pi-link-icon" href="https://x.com/Yuexulab" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
      <ul class="pi-prev-list" hidden>
        <li>Instructor, Baylor College of Medicine</li>
        <li>Postdoctoral Fellow, PRiME–UHN, University of Toronto</li>
        <li>Ph.D., China Pharmaceutical University</li>
      </ul>
    </div>
    </div>
  </div>

  <div class="pi-card">
    <img class="pi-photo" src="/assets/img/Qi Miao.jpg" alt="Qi Miao">
    <div class="pi-body">
    <div class="pi-left">
      <h3 class="pi-name">Qi Miao, Ph.D.</h3>
      <p class="pi-role">Senior Research Associate</p>
      <p class="pi-affil">Children's Mercy Research Institute</p>
    </div>
    <div class="pi-info">
      <div class="pi-links">
        <button type="button" class="pi-link pi-link-icon pi-prev-toggle" aria-expanded="false" aria-label="Previous positions" title="Previous positions"><i class="fa-solid fa-chevron-down"></i></button>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-solid fa-envelope"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-google-scholar"></i></span>
        <a class="pi-link pi-link-icon" href="https://orcid.org/0000-0003-4250-2239" target="_blank" rel="noopener"><i class="ai ai-orcid"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-github"></i></span>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/qi-miao-175556259/" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-x-twitter"></i></span>
      </div>
      <ul class="pi-prev-list" hidden>
        <li>Postdoc, Baylor College of Medicine</li>
        <li>Ph.D., China Pharmaceutical University</li>
      </ul>
    </div>
    </div>
  </div>

  <div class="pi-card">
    <img class="pi-photo" src="/assets/img/Yukuan.jpg" alt="Yu-Kuan Pan">
    <div class="pi-body">
    <div class="pi-left">
      <h3 class="pi-name">Yu-Kuan (Andy) Pan, M.S.</h3>
      <p class="pi-role">Bioinformatics Scientist</p>
      <p class="pi-affil">Children's Mercy Research Institute</p>
    </div>
    <div class="pi-info">
      <div class="pi-links">
        <button type="button" class="pi-link pi-link-icon pi-prev-toggle" aria-expanded="false" aria-label="Previous positions" title="Previous positions"><i class="fa-solid fa-chevron-down"></i></button>
        <a class="pi-link pi-link-icon" href="mailto:andypan0214@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-google-scholar"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="ai ai-orcid"></i></span>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-github"></i></span>
        <a class="pi-link pi-link-icon" href="https://www.linkedin.com/in/yukuanpan0214" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
        <span class="pi-link pi-link-icon pi-link-disabled"><i class="fa-brands fa-x-twitter"></i></span>
      </div>
      <ul class="pi-prev-list" hidden>
        <li>M.S., UTHealth Houston</li>
        <li>B.S., University of Maryland</li>
      </ul>
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

<script>
  document.querySelectorAll(".pi-prev-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var list = btn.closest(".pi-info").querySelector(".pi-prev-list");
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      list.hidden = open;
    });
  });
</script>

[def]: ttps://www.linkedin.com/in/yuexu199