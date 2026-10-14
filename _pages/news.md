---
layout: page
permalink: /news/
title: News
nav: true
nav_order: 5
navbar_social: true
_styles: >
  .post-header { display: none; }
  .post > article { margin-top: 0 !important; padding-top: 0 !important; }
---

<style>
.sec-title {
  font-size: 1.55rem;
  font-weight: 700;
  padding-bottom: 0.45rem;
  border-bottom: 3px solid #4da6ff;
  display: inline-block;
  margin-bottom: 1.2rem;
}
/* larger news text, still below the section title size */
.news .news-item {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>

<div class="sec-title">News</div>

{% include news.liquid limit=false %}
