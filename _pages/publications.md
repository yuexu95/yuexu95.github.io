---
layout: page
permalink: /publications/
title: Publications
description: "(<em><sup>*</sup> Co-first author; <sup>#</sup> Corresponding author</em>)"
nav: true
nav_order: 2
navbar_social: true
_styles: >
  .post-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
  .post-header-left { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; }
  .post-description { margin: 0 !important; font-weight: normal; color: inherit; }
---

<!-- _pages/publications.md -->

<!-- Year Filter Dropdown -->

<div class="year-filter-container" style="margin-bottom: 1rem;">
  <select id="year-filter" class="form-select" style="width: auto; display: inline-block;">
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
  // Move year filter into the post-header, aligned right
  var header = document.querySelector(".post-header");
  var filterContainer = document.querySelector(".year-filter-container");
  if (header && filterContainer) {
    // Wrap existing title + description in a left group
    var left = document.createElement("div");
    left.className = "post-header-left";
    var title = header.querySelector(".post-title");
    var desc = header.querySelector(".post-description");
    if (title) left.appendChild(title);
    if (desc) {
      left.appendChild(desc);
      desc.style.fontSize = window.getComputedStyle(title).fontSize;
    }
    header.appendChild(left);
    // Move filter to the right
    filterContainer.style.marginBottom = "0";
    header.appendChild(filterContainer);
  }

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
