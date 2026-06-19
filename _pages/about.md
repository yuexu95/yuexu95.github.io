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
  margin: 1rem 0 1rem 0;
  min-height: 180px;
  display: flex;
  align-items: stretch;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/assets/img/cm_building.jpg');
  background-size: cover;
  background-position: center 30%;
  filter: brightness(1);
}
.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.5rem 2rem 1.6rem;
  background: linear-gradient(to top, rgba(5,15,30,0.85) 0%, rgba(5,15,30,0.2) 80%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hero-logo {
  height: 48px;
  margin-bottom: 1.2rem;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}
.hero-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}
.hero-subtitle {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.hero-tagline {
  font-size: 1.05rem;
  color: #f0f8ff;
  max-width: 680px;
  line-height: 1.7;
  margin-bottom: 0;
  font-style: italic;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.hero-buttons {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  margin: 0.6rem 0 1.2rem;
}
.btn-hp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.22s ease;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color, #ddd);
  color: var(--global-text-color);
  letter-spacing: 0.02em;
}
.btn-hp i { font-size: 1.15rem; color: #4da6ff; }
.btn-hp:hover {
  background: #4da6ff;
  border-color: #4da6ff;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(77,166,255,0.4);
}
.btn-hp:hover i { color: #fff; }

/* ── Stats bar ────────────────────────────────── */
.stats-bar {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  background: linear-gradient(135deg, #0a2a4a, #154360);
  border-radius: 10px;
  padding: 1.4rem 1rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;
}
.stat-item { flex: 1; min-width: 100px; }
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #4da6ff;
  line-height: 1;
  margin-bottom: 0.2rem;
}
.stat-label {
  font-size: 0.78rem;
  color: #a9cce3;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── Section title ────────────────────────────── */
.sec-title,
.post article > h2 {
  font-size: 1.55rem !important;
  font-weight: 700 !important;
  margin-bottom: 1.4rem !important;
  margin-top: 0 !important;
  padding-bottom: 0.45rem !important;
  border-bottom: 3px solid #4da6ff !important;
  display: inline-block !important;
}
.post article > h2 a {
  text-decoration: none !important;
  color: inherit !important;
}
.post article > h2 small {
  font-size: 0.55em !important;
  font-weight: 400 !important;
  color: var(--global-text-color-light, #888) !important;
}

/* ── Research cards ───────────────────────────── */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.2rem;
  margin-bottom: 3rem;
}
.research-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.6rem 1.3rem 1.4rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  background: var(--global-bg-color);
}
.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.12);
  border-color: #4da6ff;
}
.research-card .rc-icon {
  font-size: 2rem;
  color: #4da6ff;
  margin-bottom: 0.85rem;
  display: block;
}
.research-card h5 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.research-card p {
  font-size: 0.86rem;
  color: var(--global-text-color-light, #666);
  line-height: 1.55;
  margin: 0 0 0.6rem;
}
.research-card .rc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.6rem;
}
.rc-tag {
  font-size: 0.72rem;
  padding: 0.15rem 0.55rem;
  border-radius: 20px;
  background: rgba(77,166,255,0.12);
  color: #1a7fff;
  font-weight: 600;
}

/* ── Affiliation logo strip ───────────────────── */
.affil-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding: 1.2rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 10px;
}
.affil-strip img {
  height: 45px;
  object-fit: contain;
  opacity: 0.85;
  transition: opacity 0.2s;
}
.affil-strip img:hover { opacity: 1; }

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
</style>

<!-- ── HERO ─────────────────────────────────────── -->
<div class="hero-wrap">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="hero-title">Yue Xu, Ph.D.</div>
    <div class="hero-subtitle">Division of Molecular Oncology & Cellular Therapeutics &nbsp;·&nbsp; Department of Pediatrics</div>
    <div class="hero-subtitle">Children's Mercy Research Institute, Kansas City, MO</div>
    <div class="hero-tagline">
      Engineering AI-driven platforms and ionizable lipid nanoparticles to transform nucleic acid delivery into precision medicine for pediatric cancer and genetic diseases.
    </div>
  </div>
</div>

<!-- ── NAV BUTTONS ────────────────────────────────── -->
<div class="hero-buttons">
  <a href="/research/" class="btn-hp"><i class="ti ti-flask"></i> Research</a>
  <a href="/publications/" class="btn-hp"><i class="ti ti-file-text"></i> Publications</a>
  <a href="/members/" class="btn-hp"><i class="ti ti-users"></i> Team</a>
  <a href="/news/" class="btn-hp"><i class="ti ti-news"></i> News</a>
  <a href="/resources/" class="btn-hp"><i class="ti ti-tool"></i> Resources</a>
  <a href="/join/" class="btn-hp"><i class="ti ti-user-plus"></i> Join Us</a>
</div>

<!-- ── RESEARCH ───────────────────────────────────── -->
<div class="sec-title">Research Focus</div>

<div class="research-grid">

  <div class="research-card">
    <i class="rc-icon ti ti-brain"></i>
    <h5>AI for Drug Delivery</h5>
    <p>Foundation model-powered and deep learning platforms — including LUMI-lab and AGILE — that autonomously close the loop between computational prediction and experimental validation to accelerate ionizable lipid discovery.</p>
    <div class="rc-tags">
      <span class="rc-tag">Deep Learning</span>
      <span class="rc-tag">Self-Driving Lab</span>
      <span class="rc-tag">Foundation Model</span>
    </div>
  </div>

  <div class="research-card">
    <i class="rc-icon ti ti-dna"></i>
    <h5>Cancer Immunotherapy & Gene Therapy</h5>
    <p>Nucleic acid delivery systems operating on two fronts: reprogramming the immune system to eradicate pediatric tumors (IL-12 circRNA, ICD), and correcting disease-causing mutations in rare genetic diseases (base editing, genome editing).</p>
    <div class="rc-tags">
      <span class="rc-tag">Cancer Immunotherapy</span>
      <span class="rc-tag">Gene Editing</span>
      <span class="rc-tag">Rare Disease</span>
    </div>
  </div>

  <div class="research-card">
    <i class="rc-icon ti ti-flask"></i>
    <h5>Lipid Nanoparticle Engineering</h5>
    <p>Rational design and high-throughput combinatorial chemistry to build structurally diverse ionizable lipids — including biodegradable variants via Passerini reaction — for organ-selective nucleic acid delivery.</p>
    <div class="rc-tags">
      <span class="rc-tag">Combinatorial Chemistry</span>
      <span class="rc-tag">Biodegradable LNP</span>
      <span class="rc-tag">Tissue Selectivity</span>
    </div>
  </div>



</div>
