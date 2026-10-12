---
layout: about
title: Home
permalink: /
nav: true
nav_order: 1
selected_papers: true
no_top_margin: true
---

<style>
.post-header { display: none; }
.post > article { margin-top: 0 !important; padding-top: 0 !important; }
.container.mt-5 { margin-top: 0 !important; }

/* ── Hero ─────────────────────────────────────── */
.hero-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin: 1rem 0 2.6rem;
  min-height: 300px;
  display: flex;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/assets/img/cm_building.jpg');
  background-size: cover;
  background-position: center 30%;
}
.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2rem 2.2rem 1.8rem;
  background: linear-gradient(to top, rgba(5,15,30,0.9) 0%, rgba(5,15,30,0.55) 55%, rgba(5,15,30,0.1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}
.hero-subtitle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: #dbe9f6;
  margin-bottom: 0.15rem;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.hero-subtitle i { color: #4da6ff; font-size: 1rem; }
.hero-tagline {
  font-size: 1.05rem;
  color: #f0f8ff;
  max-width: 680px;
  line-height: 1.65;
  margin: 0.9rem 0 1.3rem;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.btn-hp {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
  border: 1px solid rgba(255,255,255,0.45);
  color: #fff !important;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(4px);
}
.btn-hp i { font-size: 1.05rem; }
.btn-hp:hover {
  background: rgba(255,255,255,0.2);
  border-color: #fff;
  transform: translateY(-2px);
}

/* ── Section title ────────────────────────────── */
.sec-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}
.sec-more {
  font-size: 0.85rem;
  font-weight: 600;
  color: #1a7fff !important;
  text-decoration: none !important;
  white-space: nowrap;
}
.sec-more:hover { text-decoration: underline !important; }
.sec-title,
.sec-head h2,
.post article > h2 {
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  margin-top: 0 !important;
  padding-bottom: 0.45rem !important;
  border-bottom: 3px solid #4da6ff !important;
  display: inline-block !important;
}
.sec-head-pubs { margin-top: 2.6rem; }
.sec-head h2 a,
.post article > h2 a {
  text-decoration: none !important;
  color: inherit !important;
}

/* ── Research focus cards ─────────────────────── */
.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.research-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.2rem 1.2rem 1rem;
  background: var(--global-bg-color);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.1);
  border-color: #4da6ff;
}
.rc-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0a2a4a, #1a5276);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
}
.rc-icon-wrap i { font-size: 1.4rem; color: #4da6ff; }
.research-card h5 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  color: var(--global-text-color);
}
.research-card p {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--global-text-color-light, #666);
  margin: 0 0 0.8rem;
}
.rc-more {
  margin-top: auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a7fff;
}
.research-card:hover .rc-more { text-decoration: underline; }

@media (max-width: 760px) {
  .research-grid { grid-template-columns: 1fr; }
  .research-card { flex-direction: row; gap: 0.9rem; align-items: flex-start; }
  .rc-icon-wrap { flex-shrink: 0; margin-bottom: 0; }
  .rc-more { display: none; }
  .research-card p { margin: 0; }
}
@media (max-width: 600px) {
  .hero-wrap { min-height: 260px; }
  .hero-content { padding: 1.4rem 1.3rem; }
  .hero-title { font-size: 1.7rem; }
  .hero-tagline { font-size: 0.95rem; }
}

/* ── Abbr badges (Cell, Nat. Biotechnol., etc.) ─ */
.publications abbr.badge {
  background: transparent !important;
  color: #1a7fff !important;
  border: 1.5px solid #4da6ff !important;
  font-size: 0.72rem !important;
  font-weight: 600 !important;
  border-radius: 6px !important;
  padding: 0.2rem 0.45rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

/* ── Publication buttons ──────────────────────── */
.publications .btn.btn-sm.z-depth-0 {
  font-size: 0.72rem !important;
  padding: 0.15rem 0.55rem !important;
  border-radius: 20px !important;
  background: var(--global-bg-color) !important;
  color: var(--global-text-color) !important;
  font-weight: 600 !important;
  border: 1.5px solid #4da6ff !important;
  box-shadow: none !important;
  line-height: 1.6 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}
.publications .btn.btn-sm.z-depth-0:hover {
  background: #4da6ff !important;
  color: #fff !important;
}

/* ── Selected Publications (homepage): cover + journal only, one row of 5, Cell first ── */
.selected-compact {
  margin-top: 0 !important;
}
.selected-compact ol.bibliography {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.2rem;
  row-gap: 0;
  list-style: none;
  padding: 0;
}
.selected-compact ol.bibliography li {
  margin-bottom: 0;
}
/* Show only one row: the pinned Cell cover plus (columns - 1) others */
.selected-compact ol.bibliography li:nth-child(n+5 of :not(:has(.pin-first))) {
  display: none;
}
.selected-compact ol.bibliography li:has(.pin-first) {
  order: -1;
}
.compact-pub-card {
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  transition: transform 0.2s ease;
}
.compact-pub-card:hover {
  transform: translateY(-4px);
}
.compact-pub-card .preview {
  width: 100%;
  /* uniform journal-cover box; cover crops the few % of mismatch so every cover is the same size */
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: top center;
  background: var(--global-bg-color);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.compact-pub-journal {
  font-size: 1.0rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  color: var(--global-text-color);
  margin-top: 0.01rem;
  line-height: 1.3;
}
.compact-pub-card:hover .compact-pub-journal {
  color: #1a7fff;
}
.compact-pub-year {
  font-style: normal;
  color: var(--global-text-color-light, #888);
}
@media (max-width: 900px) {
  .selected-compact ol.bibliography { grid-template-columns: repeat(3, 1fr); }
  .selected-compact ol.bibliography li:nth-child(n+3 of :not(:has(.pin-first))) { display: none; }
}
@media (max-width: 460px) {
  .selected-compact ol.bibliography { grid-template-columns: repeat(2, 1fr); }
  .selected-compact ol.bibliography li:nth-child(n+2 of :not(:has(.pin-first))) { display: none; }
}
</style>

<!-- ── HERO ─────────────────────────────────────── -->
<div class="hero-wrap">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="hero-title">Xu Lab</div>
    <div class="hero-subtitle"><i class="ti ti-building-hospital"></i>Center for Molecular Oncology and Cellular Therapeutics (MOCT)</div>
    <div class="hero-subtitle"><i class="ti ti-map-pin"></i>Children's Mercy Research Institute, Kansas City, MO</div>
    <div class="hero-tagline">
      Engineering AI-driven platforms and ionizable lipid nanoparticles to transform nucleic acid delivery into precision medicine for pediatric cancer and genetic diseases.
    </div>
    <div class="hero-buttons">
      <a class="btn-hp" href="/news/"><i class="ti ti-news"></i>News</a>
      <a class="btn-hp" href="/members/"><i class="ti ti-users"></i>Members</a>
      <a class="btn-hp" href="/join/"><i class="ti ti-user-plus"></i>Join Us</a>
    </div>
  </div>
</div>

<!-- ── RESEARCH ───────────────────────────────────── -->
<div class="sec-head">
  <div class="sec-title">Research Focus</div>
  <a class="sec-more" href="/research/">All research →</a>
</div>

<div class="research-grid">
  <a class="research-card" href="/research/#ai-delivery">
    <div class="rc-icon-wrap"><i class="ti ti-brain"></i></div>
    <h5>AI for Drug Delivery</h5>
    <p>Foundation models and self-driving labs that accelerate the discovery of ionizable lipids.</p>
    <span class="rc-more">Learn more →</span>
  </a>
  <a class="research-card" href="/research/#immunotherapy">
    <div class="rc-icon-wrap"><i class="ti ti-dna"></i></div>
    <h5>Cancer Immunotherapy &amp; Gene Therapy</h5>
    <p>Nucleic acid medicines that reprogram immunity against pediatric tumors and correct disease-causing mutations.</p>
    <span class="rc-more">Learn more →</span>
  </a>
  <a class="research-card" href="/research/#lnp-engineering">
    <div class="rc-icon-wrap"><i class="ti ti-flask"></i></div>
    <h5>Lipid Nanoparticle Engineering</h5>
    <p>Combinatorial chemistry for biodegradable lipids with tunable organ tropism.</p>
    <span class="rc-more">Learn more →</span>
  </a>
</div>
