---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 2
navbar_social: true
no_top_margin: true
---

<style>
.post-title { display: none; }
.post-header { display: none; }
.post > article { margin-top: 0 !important; padding-top: 0 !important; }

/* ── Hero ── */
.research-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a2a4a 0%, #154360 100%);
  border-radius: 14px;
  padding: 2rem 2.2rem;
  margin: 1rem 0 2.5rem;
}
.research-hero::after {
  content: "";
  position: absolute;
  right: -70px; top: -70px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: rgba(77,166,255,0.08);
  pointer-events: none;
}
.research-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a9cce3;
  margin-bottom: 0.7rem;
}
.research-eyebrow i { font-size: 1.15rem; color: #4da6ff; }
.research-hero h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.8rem;
}
.research-hero p {
  color: #c5dff5;
  font-size: 0.97rem;
  line-height: 1.8;
  margin: 0;
  max-width: 68ch;
}

.sec-title {
  font-size: 1.55rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  padding-bottom: 0.45rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
}

/* ── Research areas ── */
.area {
  scroll-margin-top: 80px;
  margin-bottom: 2.4rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid var(--global-divider-color, #e8e8e8);
}
.area:last-of-type { border-bottom: none; padding-bottom: 0; }
.area-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.area-icon {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #0a2a4a, #1a5276);
  display: flex;
  align-items: center;
  justify-content: center;
}
.area-icon i { font-size: 1.6rem; color: #4da6ff; }
.area-num {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #4da6ff;
  margin-bottom: 0.1rem;
}
.area-head h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: var(--global-text-color);
}
.area-desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--global-text-color-light, #555);
  margin: 0 0 1.2rem;
}

/* ── Project cards ── */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
.proj {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-top: 3px solid #4da6ff;
  border-radius: 12px;
  padding: 1rem 1.1rem;
  background: rgba(77,166,255,0.04);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.proj:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.proj h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.45rem;
  color: var(--global-text-color);
}
.proj p {
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--global-text-color-light, #666);
  margin: 0 0 0.9rem;
}
.pub-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}
.pub-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  padding: 0.22rem 0.7rem;
  border-radius: 20px;
  border: 1px solid #4da6ff;
  color: #1a7fff;
  font-weight: 600;
  background: rgba(77,166,255,0.06);
  text-decoration: none;
  transition: all 0.2s ease;
}
.pub-pill i { font-size: 0.85rem; }
a.pub-pill:hover {
  background: #4da6ff;
  color: #fff;
  text-decoration: none;
}

@media (max-width: 600px) {
  .research-hero { padding: 1.5rem 1.3rem; }
  .research-hero h2 { font-size: 1.25rem; }
  .area-icon { width: 44px; height: 44px; }
  .area-icon i { font-size: 1.35rem; }
}
</style>

<div class="research-hero">
  <div class="research-eyebrow"><i class="ti ti-dna-2"></i>Our Research Vision</div>
  <h2>Precision Gene Medicine for Children</h2>
  <p>Children with cancer and life-threatening genetic diseases deserve better therapies, ones that are precise, safe, and designed for them from the start. At the Xu Lab, we engineer AI-driven lipid nanoparticle platforms to deliver nucleic acid medicines, plasmid DNA, mRNA, siRNA, circular RNA, and gene editors, directly to pediatric tumors and diseased tissues. By uniting rational chemistry, machine learning, and high-throughput biology, we aim to accelerate the translation of next-generation gene therapies into treatments that give children and families real hope.</p>
</div>

<div class="sec-title">Research Areas</div>

<!-- Area 1 -->
<section class="area" id="ai-delivery">
  <div class="area-head">
    <div class="area-icon"><i class="ti ti-brain"></i></div>
    <div>
      <span class="area-num">01</span>
      <h3>AI for Drug Delivery</h3>
    </div>
  </div>
  <p class="area-desc">We build foundation model-powered and deep learning platforms that autonomously close the loop between computational prediction and experimental validation, dramatically accelerating the discovery of ionizable lipids for nucleic acid delivery.</p>
  <div class="proj-grid">
    <div class="proj">
      <h4>LUMI-lab</h4>
      <p>A foundation model-driven self-driving laboratory that autonomously designs, synthesizes, and evaluates new ionizable lipid structures for mRNA delivery.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://doi.org/10.1016/j.cell.2026.01.012" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Cell 2026</a></div>
    </div>
    <div class="proj">
      <h4>AGILE Platform</h4>
      <p>Active machine learning approach using deep neural networks to accelerate LNP formulation optimization.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://doi.org/10.1038/s41467-024-50619-z" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Nature Communications 2024</a></div>
    </div>
    <div class="proj">
      <h4>Multi-objective AI</h4>
      <p>Reinforcement learning framework for simultaneous optimization of potency, tissue selectivity, and tolerability.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://www.nature.com/articles/s41587-026-03109-0" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Nature Biotechnology 2026</a></div>
    </div>
  </div>
</section>

<!-- Area 2 -->
<section class="area" id="immunotherapy">
  <div class="area-head">
    <div class="area-icon"><i class="ti ti-dna"></i></div>
    <div>
      <span class="area-num">02</span>
      <h3>Cancer Immunotherapy &amp; Gene Therapy</h3>
    </div>
  </div>
  <p class="area-desc">We engineer nucleic acid delivery systems operating on two fronts: reprogramming the immune system to eradicate pediatric tumors, and correcting disease-causing mutations in children with rare genetic diseases.</p>
  <div class="proj-grid">
    <div class="proj">
      <h4>Cancer immunotherapy</h4>
      <p>Tumor-tailored LNPs for IL-12 circular RNA delivery to activate anti-tumor immunity, and a modular mRNA platform for programmable induction of tumour-specific immunogenic cell death.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://doi.org/10.1002/adma.202400307" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Advanced Materials 2024</a><a class="pub-pill" href="https://www.nature.com/articles/s41565-025-02045-5" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Nature Nanotechnology 2025</a></div>
    </div>
    <div class="proj">
      <h4>Gene editing for rare disease</h4>
      <p>Inhaled LNPs delivering base editors to correct lung mutations, and biodegradable LNPs for intrathecal genome editing targeting neurological diseases.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://www.nature.com/articles/s41563-026-02555-0" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Nature Materials 2026</a><a class="pub-pill" href="https://doi.org/10.1016/j.mattod.2025.11.032" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>Materials Today 2025</a></div>
    </div>
  </div>
</section>

<!-- Area 3 -->
<section class="area" id="lnp-engineering">
  <div class="area-head">
    <div class="area-icon"><i class="ti ti-flask"></i></div>
    <div>
      <span class="area-num">03</span>
      <h3>Lipid Nanoparticle Engineering</h3>
    </div>
  </div>
  <p class="area-desc">We apply rational design principles and high-throughput combinatorial chemistry to synthesize structurally diverse ionizable lipids with tunable organ tropism, biodegradability, and endosomal escape efficiency.</p>
  <div class="proj-grid">
    <div class="proj">
      <h4>Passerini-3CR</h4>
      <p>Modular, one-pot multicomponent synthesis of biodegradable ionizable lipids for mRNA delivery.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://doi.org/10.1073/pnas.2409572122" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>PNAS 2025</a></div>
    </div>
    <div class="proj">
      <h4>Ugi-3CR</h4>
      <p>High-throughput synthesis libraries enabling rapid SAR exploration across lipid tail, head group, and linker space.</p>
      <div class="pub-pills"><a class="pub-pill" href="https://doi.org/10.1073/pnas.2309472120" target="_blank" rel="noopener"><i class="ti ti-file-text"></i>PNAS 2023</a></div>
    </div>
  </div>
</section>
