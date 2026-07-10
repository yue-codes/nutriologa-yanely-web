import type { APIRoute } from "astro";

// Generado como ruta (no archivo estático en public/) para que la URL del
// sitemap siempre apunte al dominio configurado en `site` (astro.config.mjs),
// sin quedar desincronizada cuando ese dominio cambie.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
