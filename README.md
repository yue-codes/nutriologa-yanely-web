# Nutrióloga Yanely García — Sitio web

Sitio web para **LN. Ed. Yanely García**, nutrióloga (Céd. Prof. 11856808), con consultas
presenciales en Ocotlán de Morelos y Santa Lucía del Camino (Oaxaca), y consultas en línea
para cualquier parte del mundo.

Construido con [Astro](https://astro.build), [Preact](https://preactjs.com) y
[Tailwind CSS v4](https://tailwindcss.com), pensado para ser rápido y fácil de mantener sin
tener que tocar el diseño cada vez que se actualiza un texto.

## Stack

- **Astro 6** — generación de sitio estático, ruteo basado en archivos
- **Preact** — integración para componentes interactivos (el sitio actualmente no requiere JS de cliente)
- **Tailwind CSS v4** — sistema de diseño basado en tokens CSS (`src/styles/global.css`)
- **Content Collections de Astro** — para el blog (`src/content/blog/`)
- **pnpm** — gestor de paquetes

## Requisitos

- Node.js `>= 22.12.0`
- pnpm

## Comandos

| Comando            | Acción                                       |
| ------------------ | --------------------------------------------- |
| `pnpm install`      | Instala dependencias                          |
| `pnpm dev`          | Servidor de desarrollo en `localhost:4321`    |
| `pnpm build`        | Build de producción en `./dist/`              |
| `pnpm preview`      | Sirve el build de producción localmente       |
| `pnpm astro check`  | Revisa tipos en archivos `.astro`             |

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/         # Chrome global: Navbar, Footer, Logo, WhatsAppButton
│   ├── ui/              # Bloques genéricos: Button, QuoteBlock, SectionHeading, Section, PageHeader
│   ├── cards/           # Tarjetas de datos: BlogCard, ServiceCategoryCard, TestimonialCard
│   └── home/            # Secciones exclusivas de Inicio (Hero, ServiciosPreview, etc.)
├── content/blog/       # Posts del blog (Markdown)
├── content.config.ts   # Esquema de la colección "blog"
├── data/                # Contenido editable: servicios.ts, testimonios.ts, contacto.ts
├── icons/                # Set de íconos SVG propios (marca + redes + UI)
├── layouts/Layout.astro  # Navbar + Footer + botón de WhatsApp, comunes a todas las páginas
├── pages/                # Rutas del sitio (basadas en archivos)
└── styles/global.css     # Tokens de diseño: colores y tipografía
```

## Editar contenido

Ver [`docs/GUIA-DE-CONTENIDO.md`](docs/GUIA-DE-CONTENIDO.md) para instrucciones paso a paso
sobre cómo agregar/editar servicios y testimonios, publicar una entrada de blog, cambiar datos
de contacto, o ajustar la paleta de colores y la tipografía.

## Sistema de diseño

- **Colores**: definidos como variables en `src/styles/global.css` dentro de `@theme`
  (`--color-primary`, `--color-secondary`, `--color-accent`, `--color-love`, `--color-cream`,
  `--color-ink`). Cambiar estos valores actualiza todo el sitio.
- **Tipografía**: Fraunces (títulos), Nunito Sans (cuerpo), Caveat (frases destacadas), vía
  [Fontsource](https://fontsource.org/).

## Alias de rutas

Configurados en `tsconfig.json`:

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@icons/*` → `src/icons/*`
- `@data/*` → `src/data/*`

## Propuesta del proyecto

Ver [`docs/PROPUESTA.md`](docs/PROPUESTA.md).
