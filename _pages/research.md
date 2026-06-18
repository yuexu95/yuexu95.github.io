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
.area-highlights li {
  font-size: 0.88rem;
  padding: 0.35rem 0 0.35rem 1.3rem;
  position: relative;
  color: var(--global-text-color-light, #555);
  line-height: 1.5;
}
.area-highlights li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #4da6ff;
  font-size: 0.8rem;
  top: 0.4rem;
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
    <h3>AI-Driven LNP Discovery</h3>
    <p>We develop foundation model-powered and deep learning platforms that close the loop between computational prediction and experimental validation, enabling autonomous discovery of ionizable lipids for mRNA delivery at unprecedented speed and scale.</p>
    <ul class="area-highlights">
      <li><strong>LUMI-lab</strong> — a foundation model-driven self-driving laboratory that autonomously designs, synthesizes, and screens new ionizable lipid structures (<em>Cell</em>, 2026)</li>
      <li><strong>AGILE Platform</strong> — active machine learning approach using deep neural networks to accelerate LNP formulation optimization (<em>Nature Communications</em>, 2024)</li>
      <li><strong>Multi-objective AI</strong> — reinforcement learning framework for simultaneous optimization of potency, selectivity, and tolerability (<em>Nature Biotechnology</em>, 2026)</li>
    </ul>
    <div class="pub-pills">
      <span class="pub-pill">Cell 2026</span>
      <span class="pub-pill">Nature Communications 2024</span>
      <span class="pub-pill">Nature Biotechnology 2026</span>
    </div>
  </div>
</div>

<!-- Area 2 -->
<div class="area-section">
  <div class="area-icon-wrap">
    <i class="ti ti-flask"></i>
  </div>
  <div class="area-body">
    <h3>Ionizable Lipid Engineering</h3>
    <p>We apply rational design principles and high-throughput combinatorial chemistry to synthesize structurally diverse ionizable lipids with tunable organ tropism, biodegradability, and endosomal escape efficiency.</p>
    <ul class="area-highlights">
      <li><strong>Passerini reaction</strong> — modular, one-pot multicomponent synthesis of biodegradable ionizable lipids for mRNA delivery (<em>PNAS</em>, 2025)</li>
      <li><strong>Combinatorial chemistry</strong> — high-throughput synthesis libraries enabling rapid SAR exploration across lipid tail, head group, and linker space (<em>PNAS</em>, 2023; <em>J. Mater. Chem. B</em>, 2023)</li>
      <li><strong>Tissue-selective delivery</strong> — engineering LNPs for organ-specific targeting including liver, lung, muscle, and brain</li>
    </ul>
    <div class="pub-pills">
      <span class="pub-pill">PNAS 2025</span>
      <span class="pub-pill">PNAS 2023</span>
      <span class="pub-pill">J. Mater. Chem. B 2023</span>
    </div>
  </div>
</div>

<!-- Area 3 -->
<div class="area-section">
  <div class="area-icon-wrap">
    <i class="ti ti-dna"></i>
  </div>
  <div class="area-body">
    <h3>Nucleic Acid-based Cancer Therapeutics</h3>
    <p>We engineer LNP delivery systems tailored to diverse nucleic acid payloads — mRNA, siRNA, circular RNA, and gene editing components — and apply them to treat cancer and genetic diseases across multiple tissues and routes of administration.</p>
    <ul class="area-highlights">
      <li><strong>IL-12 circular RNA immunotherapy</strong> — tumor-tailored LNPs enabling IL-12 circRNA delivery for enhanced lung cancer immunotherapy (<em>Advanced Materials</em>, 2024)</li>
      <li><strong>Inhaled base editing</strong> — amino acid-derived ionizable lipids for inhaled delivery of base editors to correct disease-causing mutations in the lung (<em>Nature Materials</em>, 2026)</li>
      <li><strong>Brain genome editing</strong> — biodegradable LNPs for intrathecal delivery of gene editing tools targeting neurological diseases (<em>Materials Today</em>, 2025)</li>
      <li><strong>mRNA vaccines</strong> — adjuvanting ionizable lipids and mRNA to enhance immunogenicity of LNP-based vaccines (<em>Nature Biomedical Engineering</em>, 2023)</li>
    </ul>
    <div class="pub-pills">
      <span class="pub-pill">Nature Materials 2026</span>
      <span class="pub-pill">Advanced Materials 2024</span>
      <span class="pub-pill">Nat. Biomed. Eng. 2023</span>
      <span class="pub-pill">Materials Today 2025</span>
    </div>
  </div>
</div>
