# The eLearning Company

Custom eLearning development in 3 weeks. Transparent pricing. Based in Australia.

Built with [Astro](https://astro.build/).

## Getting started

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/`.

## Build

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── components/
│   └── layout/
│       └── Layout.astro          # Site shell — header, footer, fonts, locations strip
├── content/
│   ├── config.ts                 # Content collection schemas
│   ├── blog/                     # Blog posts (.md)
│   └── training-categories/      # 25 category markdown files
├── pages/
│   ├── index.astro               # Homepage
│   ├── pricing.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── thank-you.astro
│   ├── blog/
│   │   ├── index.astro           # Blog listing
│   │   └── [...slug].astro       # Individual post template
│   ├── training/
│   │   ├── index.astro           # Categories overview
│   │   └── [slug].astro          # Category page template (renders all 25)
│   ├── locations/
│   │   └── [city].astro          # Per-city landing page (Melbourne, Sydney, etc.)
│   └── tools/
│       ├── index.astro           # Authoring tools listing
│       └── [tool].astro          # Per-tool page template
└── styles/
    └── global.css                # Design system: tokens, primitives, shared components
```

## Design system

Colours, typography, spacing, and component primitives live in `src/styles/global.css`.

**Brand colours** (use the CSS variables, not hex values):
- `--c-lilac` — heroes, marketing moments
- `--c-yellow` — pricing, value moments
- `--c-turquoise` — process, how-it-works sections
- `--c-navy` — proof, dark sections, CTAs
- `--c-paper` / `--c-paper-deep` — body backgrounds

**Fonts** (loaded from Google Fonts in `Layout.astro`):
- Archivo Black — display headlines (uppercase)
- Inter — body and UI
- JetBrains Mono — meta labels only

**Section pattern**: every section uses `<section class="section section--{colour}">` with a `<div class="container">` inside.

## Adding a new training category

1. Create a new `.md` file in `src/content/training-categories/` matching the schema in `config.ts`.
2. Add a `mockupBySlug` entry in `src/pages/training/[slug].astro` (frontmatter section) for category-specific check-in content. Skip this and the page falls back to an auto-generated mockup using `topics[0]`.
3. The category will appear automatically on `/training` and at `/training/{slug}`.

## Forms

The contact form (`contact.astro`) uses Netlify Forms (`data-netlify="true"`). Submission redirects to `/thank-you`.

The blog newsletter form is **decorative** — wire to your email provider before launch.

## Locations

Seven Australian city pages: Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart. Listed in the footer locations strip in `Layout.astro` and generated from the `getStaticPaths` array in `src/pages/locations/[city].astro`.

## Not included

- `/portfolio` route — referenced nowhere now; build later if needed.
- Newsletter backend.
- LMS demo embedding (the browser mockup on category pages is visual only).
