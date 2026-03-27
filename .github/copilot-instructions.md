<!-- Copilot instructions for the al-folio-based personal website -->
# Copilot / AI agent quick-start (yuexu95.github.io)

Goal: be productive editing and building this site (an al-folio Jekyll theme fork) with minimal back-and-forth.

- Big picture
  - This repository is an al-folio Jekyll site (see `README.md`). The site is built with Ruby/Jekyll and enhanced by many Jekyll plugins (see `_config.yml` and `Gemfile`).
  - Content lives under: `_pages`, `_posts`, `_projects` (collections), `_data` (site data like `cv.yml`, `repositories.yml`), and `_bibliography` (BibTeX files).
  - Templates are in `_layouts` and reusable fragments in `_includes`. Styles live in `_sass` and compiled by Jekyll.

- Quick dev & build commands (exact/verified)
  - Build (production): `bundle exec jekyll build` (also run by `bin/cibuild`).
  - Deploy to GitHub Pages: use the `bin/deploy` script; it:
    - requires a clean git working tree (will abort if uncommitted/untracked files exist),
    - checks out a fresh `gh-pages` branch, sets `JEKYLL_ENV=production`, runs `bundle exec jekyll build`, runs `purgecss -c purgecss.config.js`, then force-pushes `gh-pages`.
  - Docker: `docker-compose up` will run a prebuilt `amirpourmand/al-folio` image and serve the site on host port `8080` (see `docker-compose.yml` and `Dockerfile`).
  - Formatting: Prettier is configured for Liquid via `@shopify/prettier-plugin-liquid` (see `package.json` / devDependencies).

- Important files to edit for common tasks
  - Change site-wide settings: `_config.yml` (title, analytics, collections, plugins).
  - Add/modify pages: `_pages/*.md` or create collection items under `_news`, `_projects`, etc.
  - Publications: edit `_bibliography/papers.bib` (Jekyll Scholar reads from `/ _bibliography/`).
  - CV: two supported sources:
    - `assets/json/resume.json` (programmatic JSON resume) — preferred if configured in `_config.yml`;
    - fallback: `_data/cv.yml` (human-editable YAML).
  - Images: put originals in `assets/img/`. ImageMagick must be installed for responsive WebP generation (see `_config.yml` imagemagick section).

- Key conventions & implementation notes (project-specific)
  - Plugins: many features depend on the plugin list in `_config.yml` (e.g., `jekyll-imagemagick`, `jekyll-jupyter-notebook`, `jekyll-scholar`, `jekyll-terser`). If you add files or change behavior, check `_config.yml` and `Gemfile` for plugin implications.
  - CSS pruning: `bin/deploy` runs `purgecss -c purgecss.config.js` after building. Keep `purgecss.config.js` in sync when adding CSS classes used only in templates or JS.
  - Excluded files: `_config.yml` contains `exclude:` entries (e.g., `bin/`, `Gemfile`, `README.md`). The build ignores these — editing them won't change site output unless referenced elsewhere.
  - Kramdown + Rouge: Markdown uses `kramdown` and syntax highlighting `rouge` (see `_config.yml`). Use standard kramdown/GFM features accordingly.

- Dependencies & troubleshooting
  - Required locally: Ruby, Bundler, Node.js (for some tooling), ImageMagick, npm tools like `purgecss` if running deploy locally.
  - To reproduce CI/container build, either run `bundle install` then `bundle exec jekyll build`, or use Docker via `docker-compose up` (image already prepared).
  - Common failure modes:
    - Missing ImageMagick: responsive images disabled or build errors—install `imagemagick`.
    - Missing gems/plugins: run `bundle install` and check `Gemfile` for plugin sources (some are git gems).
    - Permission errors inside Docker: `Dockerfile` and `docker-compose.yml` contain notes about UID/GID args — check those if you see `.jekyll-cache` permission issues.

- Examples (where to look)
  - Site settings and plugin list: `_config.yml` (top-level, large file).
  - Templates: `_layouts/default.liquid`, `_includes/header.liquid`, `_includes/footer.liquid` (modify layout/structure here).
  - Deploy flow & scripts: `bin/deploy` (full deploy flow) and `bin/cibuild` (build wrapper).
  - Formatting: `package.json` shows Prettier config and plugin.

- When to ask for clarification
  - If a change touches the deploy pipeline (CSS pruning, gh-pages flow), confirm whether you should update `purgecss.config.js` or the `bin/deploy` script.
  - If adding a new Jekyll plugin, confirm whether maintainers want it in `Gemfile` or as a gem from git (some plugins here are from git).

If anything in these instructions is unclear or you want me to include additional examples (for instance, a small checklist for adding a new publication or a new collection), tell me which area to expand and I will update this file.
