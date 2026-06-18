---
layout: page
permalink: /resources/
title: Resources
nav: true
nav_order: 6
navbar_social: true
---

<style>
.post-title { display: none; }
.post-header { display: none; }
.post > article { margin-top: 0 !important; padding-top: 0 !important; }

.resource-header {
  margin-bottom: 2rem;
}
.resource-header h2 {
  font-size: 1.55rem;
  font-weight: 700;
  padding-bottom: 0.45rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
  margin-bottom: 0.6rem;
}
.resource-header p {
  font-size: 0.95rem;
  color: var(--global-text-color-light, #666);
}

.tool-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2.5rem;
}
.tool-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #0a2a4a, #154360);
  color: #fff;
}
.tool-card-header i {
  font-size: 1.6rem;
  color: #4da6ff;
}
.tool-card-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.15rem;
  color: #fff;
}
.tool-card-header p {
  font-size: 0.82rem;
  color: #a9cce3;
  margin: 0;
}
.tool-card-header a {
  margin-left: auto;
  font-size: 0.8rem;
  color: #4da6ff;
  text-decoration: none;
  border: 1px solid #4da6ff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}
.tool-card-header a:hover { background: rgba(77,166,255,0.15); }
.tool-embed {
  width: 100%;
  height: 700px;
  border: none;
  display: block;
}
</style>

<div class="resource-header">
  <h2>Tools & Resources</h2>
  <p>Interactive tools developed by the Xu Lab to support lipid nanoparticle research and nucleic acid delivery.</p>
</div>

<div class="tool-card">
  <div class="tool-card-header">
    <i class="ti ti-calculator"></i>
    <div>
      <h3>LNP Formulation Calculator</h3>
      <p>Calculate molar ratios, component masses, and formulation parameters for lipid nanoparticle preparation.</p>
    </div>
    <a href="https://huggingface.co/spaces/YUEXU95/formulation" target="_blank" rel="noopener">Open in full ↗</a>
  </div>
  <iframe
    class="tool-embed"
    src="https://yuexu95-formulation.hf.space"
    title="LNP Formulation Calculator"
    allow="accelerometer; camera; microphone"
  ></iframe>
</div>
