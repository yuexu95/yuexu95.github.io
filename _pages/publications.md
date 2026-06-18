---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 3
navbar_social: true
_styles: >
  .post-header { display: none; }
  .post > article { margin-top: 0 !important; padding-top: 0 !important; }
---

<style>
.pub-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}
.pub-header-left {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.pub-main-title {
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  padding-bottom: 0.45rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
}
.pub-desc {
  font-size: 0.85rem;
  color: var(--global-text-color-light, #888);
  margin: 0;
}
</style>

<div class="pub-header-row">
  <div class="pub-header-left">
    <span class="pub-main-title">Publications</span>
    <span class="pub-desc"><em>(<sup>*</sup> Co-first author; <sup>#</sup> Corresponding author)</em></span>
  </div>
  <select id="year-filter" class="form-select" style="width: auto;">
    <option value="all">All Years</option>
    <option value="2026">2026</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
    <option value="2023">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
  </select>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year-filter").addEventListener("change", function () {
    var selected = this.value;
    document.querySelectorAll("h2.bibliography").forEach(function (h2) {
      var year = h2.textContent.trim();
      var ol = h2.nextElementSibling;
      if (selected === "all" || year === selected) {
        h2.style.display = "";
        if (ol) ol.style.display = "";
      } else {
        h2.style.display = "none";
        if (ol) ol.style.display = "none";
      }
    });
  });
});
</script>

<div class="publications">

{% bibliography %}

</div>
