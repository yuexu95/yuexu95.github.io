module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    pattern: /^(ti|ti-|ai|ai-|fa|fa-|fas|far|fab|scholar-)/,
    greedy: true,
  },
};
