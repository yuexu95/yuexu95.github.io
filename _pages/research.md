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

.research-hero {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2.5rem;
  align-items: center;
  background: linear-gradient(135deg, #0a2a4a 0%, #154360 100%);
  border-radius: 14px;
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
}
.research-hero::after {
  content: "";
  position: absolute;
  right: -60px; top: -60px;
  width: 220px; height: 220px;
  border-radius: 50%;
  background: rgba(77,166,255,0.07);
}
.research-hero-label {
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.15);
  padding-right: 2.5rem;
}
.research-hero-label i {
  font-size: 3rem;
  color: #4da6ff;
  display: block;
  margin-bottom: 0.8rem;
}
.research-hero-label span {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a9cce3;
  line-height: 1.4;
}
.research-hero-text h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.8rem;
  margin-top: 0;
}
.research-hero-text p {
  color: #c5dff5;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
}
@media (max-width: 600px) {
  .research-hero { grid-template-columns: 1fr; }
  .research-hero-label { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); padding-right: 0; padding-bottom: 1.5rem; }
}

.area-section {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--global-divider-color, #e8e8e8);
}
.area-section:last-of-type { border-bottom: none; }
.area-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0a2a4a, #1a5276);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.area-icon-wrap i {
  font-size: 2rem;
  color: #4da6ff;
}
.area-body h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--global-text-color);
}
.area-body p {
  font-size: 0.93rem;
  line-height: 1.7;
  color: var(--global-text-color-light, #555);
  margin-bottom: 1rem;
}
.area-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
.area-highlights li { margin-bottom: 0.3rem; }
.area-highlights details {
  padding-left: 0;
}
.area-highlights summary {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--global-text-color);
  cursor: pointer;
  padding: 0.3rem 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  user-select: none;
}
.area-highlights summary::before {
  content: "▸";
  color: #4da6ff;
  font-size: 0.75rem;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.area-highlights details[open] summary::before { transform: rotate(90deg); }
.area-highlights summary::-webkit-details-marker { display: none; }
.area-highlights .detail-text {
  font-size: 0.85rem;
  color: var(--global-text-color-light, #666);
  line-height: 1.6;
  padding: 0.4rem 0 0.5rem;
}
.pub-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pub-pill {
  font-size: 0.75rem;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  border: 1px solid #4da6ff;
  color: #1a7fff;
  font-weight: 600;
  background: rgba(77,166,255,0.06);
  text-decoration: none;
  transition: all 0.2s ease;
}
a.pub-pill:hover {
  background: #4da6ff;
  color: #fff;
  text-decoration: none;
}

.sec-title {
  font-size: 1.55rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  padding-bottom: 0.45rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
}

@media (max-width: 600px) {
  .area-section { grid-template-columns: 1fr; }
  .area-icon-wrap { width: 56px; height: 56px; }
}
</style>

<div class="research-hero">
  <div class="research-hero-label">
    <i class="ti ti-dna-2"></i>
    <span>Our Research<br>Vision</span>
  </div>
  <div class="research-hero-text">
    <h2>Precision Gene Medicine for Children</h2>
    <p style="text-align: justify;">Children with cancer and life-threatening genetic diseases deserve better therapies, ones that are precise, safe, and designed for them from the start. At the Xu Lab, we engineer AI-driven lipid nanoparticle platforms to deliver nucleic acid medicines, plasmid DNA, mRNA, siRNA, circular RNA, and gene editors, directly to pediatric tumors and diseased tissues. By uniting rational chemistry, machine learning, and high-throughput biology, we aim to accelerate the translation of next-generation gene therapies into treatments that give children and families real hope.</p>
  </div>
</div>

<div class="sec-title">Research Areas</div>

<!-- Area 1 -->
<div class="area-section">
  <div class="area-icon-wrap">
    <i class="ti ti-brain"></i>
  </div>
  <div class="area-body">
    <h3>AI for Drug Delivery</h3>
    <p>We build foundation model-powered and deep learning platforms that autonomously close the loop between computational prediction and experimental validation — dramatically accelerating the discovery of ionizable lipids for nucleic acid delivery.</p>
    <ul class="area-highlights">
      <li><details><summary>LUMI-lab</summary><div class="detail-text">A foundation model-driven self-driving laboratory that autonomously designs, synthesizes, and evaluates new ionizable lipid structures for mRNA delivery. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://doi.org/10.1016/j.cell.2026.01.012" target="_blank" rel="noopener">Cell 2026</a></div></div></details></li>
      <li><details><summary>AGILE Platform</summary><div class="detail-text">Active machine learning approach using deep neural networks to accelerate LNP formulation optimization. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://doi.org/10.1038/s41467-024-50619-z" target="_blank" rel="noopener">Nature Communications 2024</a></div></div></details></li>
      <li><details><summary>Multi-objective AI</summary><div class="detail-text">Reinforcement learning framework for simultaneous optimization of potency, tissue selectivity, and tolerability. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://www.nature.com/articles/s41587-026-03109-0" target="_blank" rel="noopener">Nature Biotechnology 2026</a></div></div></details></li>
    </ul>
  </div>
</div>

<!-- Area 2 -->
<div class="area-section">
  <div class="area-icon-wrap">
    <i class="ti ti-dna"></i>
  </div>
  <div class="area-body">
    <h3>Cancer Immunotherapy & Gene Therapy</h3>
    <p>We engineer nucleic acid delivery systems operating on two fronts: reprogramming the immune system to eradicate pediatric tumors, and correcting disease-causing mutations in children with rare genetic diseases.</p>
    <ul class="area-highlights">
      <li><details><summary>Cancer immunotherapy</summary><div class="detail-text">Tumor-tailored LNPs for IL-12 circular RNA delivery to activate anti-tumor immunity, and a modular mRNA platform for programmable induction of tumour-specific immunogenic cell death. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://doi.org/10.1002/adma.202400307" target="_blank" rel="noopener">Advanced Materials 2024</a><a class="pub-pill" href="https://www.nature.com/articles/s41565-025-02045-5" target="_blank" rel="noopener">Nature Nanotechnology 2025</a></div></div></details></li>
      <li><details><summary>Gene editing for rare disease</summary><div class="detail-text">Inhaled LNPs delivering base editors to correct lung mutations, and biodegradable LNPs for intrathecal genome editing targeting neurological diseases. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://www.nature.com/articles/s41563-026-02555-0" target="_blank" rel="noopener">Nature Materials 2026</a><a class="pub-pill" href="https://doi.org/10.1016/j.mattod.2025.11.032" target="_blank" rel="noopener">Materials Today 2025</a></div></div></details></li>
    </ul>
  </div>
</div>

<!-- Area 3 -->
<div class="area-section">
  <div class="area-icon-wrap">
    <i class="ti ti-flask"></i>
  </div>
  <div class="area-body">
    <h3>Lipid Nanoparticle Engineering</h3>
    <p>We apply rational design principles and high-throughput combinatorial chemistry to synthesize structurally diverse ionizable lipids with tunable organ tropism, biodegradability, and endosomal escape efficiency.</p>
    <ul class="area-highlights">
      <li><details><summary>Passerini-3CR reaction</summary><div class="detail-text">Modular, one-pot multicomponent synthesis of biodegradable ionizable lipids for mRNA delivery. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://doi.org/10.1073/pnas.2409572122" target="_blank" rel="noopener">PNAS 2025</a></div></div></details></li>
      <li><details><summary>Ugi-3CR</summary><div class="detail-text">High-throughput synthesis libraries enabling rapid SAR exploration across lipid tail, head group, and linker space. <div class="pub-pills" style="margin-top:0.4rem;"><a class="pub-pill" href="https://doi.org/10.1073/pnas.2309472120" target="_blank" rel="noopener">PNAS 2023</a></div></div></details></li>
    </ul>
  </div>
</div>
