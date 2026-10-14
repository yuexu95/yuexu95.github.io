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
.pub-num {
  /* follows the body text: dark on a light background, light on a dark one */
  color: var(--global-text-color);
  font-weight: 400;
  margin-right: 0.35rem;
}
/* journal names (Science, Nature, …) bold and italic; the year stays regular.
   The <strong> needs naming directly: `.post article strong` sets it to normal
   weight, and a rule on the element beats one inherited from .periodical. */
.publications .periodical {
  font-weight: 400;
}
.publications .periodical strong {
  font-weight: 700;
}
.publications .periodical em {
  font-style: italic;
}
/* no year headings; the year filter at the top right is the only grouping control */
.publications h2.bibliography {
  display: none;
}
/* the headings used to separate the groups, so keep the gap between them */
.publications ol.bibliography {
  margin-bottom: 0;
}
.publications ol.bibliography + h2.bibliography + ol.bibliography {
  margin-top: 0;
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
  // number every paper, newest first: the newest gets the highest number
  var entries = document.querySelectorAll(".publications ol.bibliography > li");
  entries.forEach(function (li, i) {
    var title = li.querySelector(".title");
    if (!title) return;
    var num = document.createElement("span");
    num.className = "pub-num";
    num.textContent = entries.length - i + ".";
    title.insertBefore(num, title.firstChild);
  });

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
