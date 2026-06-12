# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static single-page organizational chart for **CAP Vighi** (Centro de Anatomía Patológica - Dra. Susana Vighi). No build step, no framework, no dependencies — open `index.html` directly in a browser.

## Running the app

Open `index.html` in a browser. There is no dev server, bundler, or package manager.

## Architecture

Three files, each with a clear responsibility:

- **`index.html`** — DOM structure. Each org-chart node is a `<div class="node">` positioned via CSS Grid (`grid-row` / `grid-column` inline styles). Node metadata (`data-role`, `data-name`, `data-icon`) drives the modal. The SVG `#connectors` element is empty on load and filled by JS.

- **`script.js`** — Two concerns:
  - **`NODE_DATA`** object: keyed by node `id`, holds `description` (optional) and `items[]` shown in the modal.
  - **`drawConnectors()`**: reads live `getBoundingClientRect()` of nodes after layout and draws SVG paths. Three helper functions: `lineWithArrow` (vertical), `sideBranch` (horizontal same-row), `fanOut` (parent → multiple children with a distribution bar). Called on `DOMContentLoaded` and debounced on `resize`.

- **`styles.css`** — CSS custom properties at `:root` define the color palette (`--indigo`, `--magenta`, `--dark-1`, `--dark-2`, etc.). Grid is 19 columns (1 sidebar + 18 content columns). Node variants: `.node--dark` (gradient, white text), `.node--light` (light purple bg), `.node--small` (smaller padding for Level 3).

## Adding or modifying nodes

1. Add a `<div class="node">` in `index.html` with a unique `id`, `grid-row`/`grid-column` placement, `data-role`, `data-name`, and `data-icon`.
2. Add a matching entry in `NODE_DATA` in `script.js` with `items[]` and optionally `description`.
3. Wire it into `drawConnectors()` using one of the existing helpers (`lineWithArrow`, `sideBranch`, `fanOut`).
4. Assign an icon name from the `ICONS` object (user, bulb, gear, briefcase, chart, users, heart, flask, truck, doc) or add a new SVG inline to `ICONS`.

## Grid layout reference

Column 1 is reserved for level badges (130px wide). Content columns 2–19 span 18 equal fractional units. Nodes span multiple columns via `grid-column: start / end`. Current level-to-row mapping:

| Level | Rows |
|-------|------|
| NIVEL 1 – Estratégico | 1–2 |
| NIVEL 2 – Táctico | 3 |
| NIVEL 3 – Operativo | 4 |
