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

.tool-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tool-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border: 1px solid #4da6ff;
  border-radius: 20px;
  background: transparent;
  color: var(--global-text-color);
  cursor: pointer;
}
.tool-tab:hover { background: rgba(77,166,255,0.15); }
.tool-tab.active {
  background: #4da6ff;
  color: #fff;
}
.tool-card[hidden] { display: none; }
</style>

<div class="resource-header">
  <h2>Tools & Resources</h2>
  <p>Interactive tools developed by the Xu Lab to support lipid nanoparticle research and nucleic acid delivery.</p>
</div>

<div class="tool-tabs" role="tablist">
  <button class="tool-tab active" role="tab" aria-selected="true" data-target="tool-formulation"><i class="ti ti-calculator"></i> LNP Formulation Calculator</button>
  <button class="tool-tab" role="tab" aria-selected="false" data-target="tool-inventory"><i class="ti ti-package"></i> Lab Inventory</button>
</div>

<div class="tool-card" id="tool-formulation" role="tabpanel">
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

<div class="tool-card" id="tool-inventory" role="tabpanel" hidden>
  <div class="tool-card-header">
    <i class="ti ti-package"></i>
    <div>
      <h3>Lab Inventory</h3>
      <p>Track reagents, lipids, and supplies stocked in the Xu Lab.</p>
    </div>
    <a href="https://lab-inventory-2s9.pages.dev/" target="_blank" rel="noopener">Open in full ↗</a>
  </div>
  <iframe
    class="tool-embed"
    src="https://lab-inventory-2s9.pages.dev/"
    title="Lab Inventory"
    loading="lazy"
  ></iframe>
</div>

<script>
  document.querySelectorAll('.tool-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tool-tab').forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on);
        document.getElementById(t.dataset.target).hidden = !on;
      });
    });
  });
</script>
