# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Nutrióloga Yanely García** (LN. Ed., Céd. Prof. 11856808), built with Astro. All user-facing content is in Spanish (`lang="es"` in `src/layouts/Layout.astro`) — keep it that way unless told otherwise.

The site is a client-facing build: `docs/PROPUESTA.md` is the pitch document for the client, and `docs/GUIA-DE-CONTENIDO.md` documents how to edit content. Several pieces are intentionally temporary placeholders pending real assets from the client — see the checklist in `docs/PROPUESTA.md` (logo, WhatsApp number, email, testimonials, blog posts). Don't "fix" these by inventing real-looking data; they're flagged on purpose.

## Commands

Package manager is **pnpm** (lockfile is `pnpm-lock.yaml`; do not use npm/yarn).

- `pnpm install` — install dependencies
- `pnpm dev` — start local dev server at `localhost:4321`
- `pnpm build` — build production site to `./dist/`
- `pnpm preview` — preview the production build locally
- `pnpm astro check` — type-check `.astro` files

**The user keeps `pnpm dev` running themselves at all times. Don't start dev/build/preview servers proactively** — verify changes by reading code or, if you need build-level confidence, run a one-off `pnpm build` and check its output rather than leaving a server running.

There is no lint or test script configured. Formatting is via Prettier (`.prettierrc`), with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` — run `pnpm exec prettier --write .` if formatting is needed.

## Architecture

- **Astro 6**, with **Preact** wired in (`@astrojs/preact`) for interactive components, and **Tailwind CSS v4** via the Vite plugin in `astro.config.mjs` (CSS-first config, no `tailwind.config.js`).
- Two Preact islands exist so far, both in `home/` and hydrated with `client:load`/`client:visible`: `MobileNav.tsx` (full-screen mobile menu, replacing an earlier pure-CSS checkbox-hack toggle) and `TestimoniosCarousel.tsx` (swipeable/paged testimonials carousel). Both duplicate small bits of markup/styling from their Astro counterparts (e.g. `Button`) instead of importing them, because Astro components can't be used directly inside framework components — only passed in as pre-rendered children. Default to plain Astro + CSS first; reach for a Preact island only when real client-side state or animation is needed, following this pattern.
- `src/layouts/Layout.astro` renders `<Navbar />` + `<slot />` + `<Footer />` + `<WhatsAppButton />` (floating CTA) around every page — pages should never render their own nav/footer.
- `src/components/` is grouped by role, no loose files at its root:
  - `layout/` — global chrome mounted from `Layout.astro` (`Navbar`, `Footer`, `Logo`, `WhatsAppButton`).
  - `ui/` — generic reusable building blocks (`Button`, `QuoteBlock`, `SectionHeading`, `Section`, `PageHeader`).
  - `cards/` — data-driven card components (`BlogCard`, `ServiceCategoryCard`, `TestimonialCard`).
  - `home/` — single-use composition components for `index.astro` only (see "Pages" below).
- Path aliases (`tsconfig.json`), use these instead of relative imports:
  - `@components/*` → `src/components/*`
  - `@layouts/*` → `src/layouts/*`
  - `@icons/*` → `src/icons/*`
  - `@data/*` → `src/data/*`
  - `@hooks/*` → `src/components/hooks/*` (not created yet; add if a Preact component needs one)

### Design tokens

All colors and fonts are defined once as CSS variables in `src/styles/global.css` inside an `@theme` block (`--color-primary`, `--color-secondary`, `--color-accent`, `--color-love`, `--color-cream`, `--color-ink`; `--font-heading`, `--font-body`, `--font-accent`). Tailwind auto-generates utilities from these (`bg-primary`, `text-love`, `font-heading`, etc.) — never hardcode a hex color or font name in a component, reference the token utility instead. Fonts (Fraunces, Nunito Sans, Caveat) are loaded from Fontsource packages imported at the top of `global.css`.

`--color-title` is a separate green token (currently the same hex as `--color-primary`) used only for section heading titles (`ui/SectionHeading.astro`). It's intentionally decoupled from `--color-primary` — which also drives buttons and icons — so the title color can be tuned later without affecting buttons/icons. Follow this pattern (a dedicated token) rather than reusing `--color-primary`/`--color-accent` directly if a future text color needs to evolve independently of the UI elements that share those tokens. Note `--color-accent` doubles as the maíz icon's color (see `src/icons/`), so changing it affects the logo's 4-symbol color coding, not just text.

`.blog-content` (also in `global.css`) hand-styles rendered Markdown (headings, lists, blockquotes) for blog posts — there's no `@tailwindcss/typography` dependency, this was a deliberate choice to avoid pulling in a plugin for a small, contained need.

### Content model

- `src/data/servicios.ts`, `src/data/testimonios.ts`, `src/data/contacto.ts` are the single source of truth for those lists — pages and components read from them, never hardcode service/testimonial/contact text inline.
- The blog is an Astro Content Collection: schema in `src/content.config.ts` (Astro 6's Content Layer API — `glob()` loader from `astro/loaders`, not the legacy `src/content/config.ts`), entries as Markdown files in `src/content/blog/`. `entry.id` (used for the `/blog/[id]` route) is the filename slug, derived automatically by the loader.
- `src/icons/*.astro` is a small hand-drawn SVG icon set (brand icons mirroring the real logo's 4 symbols — cerebro/maíz/hoja/corazón — plus WhatsApp/Instagram/Facebook/Menu/Close/MapPin). No icon library dependency; add new icons the same way (inline SVG, `class` prop, `currentColor` strokes/fills).
- `src/components/layout/Logo.astro` recreates the real logo's composition (icon row + cursive name + "Nutrióloga") as a placeholder; swap it for an `<img>` once the client provides a high-res logo, per the comment in that file.

### Pages

File-based routing in `src/pages/`: `index.astro`, `sobre-mi.astro`, `servicios.astro`, `blog/index.astro`, `blog/[id].astro`, `contacto.astro`. Inner pages share `ui/PageHeader.astro` for their banner; `index.astro` is a thin composition of section components from `src/components/home/` (`Hero.astro`, `ServiciosPreview.astro`, `TestimoniosPreview.astro`, `BlogPreview.astro`, `CtaFinal.astro`) — each fetches its own data and is single-use, which is why they live apart from the reusable atoms in `ui/`/`cards/`/`layout/`. Four of those sections share `ui/Section.astro`, a generic wrapper that handles the alternating tinted/plain background rhythm and an optional `SectionHeading`; `Hero.astro` doesn't fit that pattern and renders its own `<section>`.

Images are referenced as plain `<img>` tags (not `astro:assets`/`<Image>`) — the real photos live in `public/` rather than `src/assets/`, and blog placeholder images are external URLs, so Astro's build-time optimization doesn't apply cleanly to either; this was a deliberate simplification, not an oversight.
