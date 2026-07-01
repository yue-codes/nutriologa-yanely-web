import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Colección del blog. Para publicar una entrada nueva, agrega un archivo
 * .md en src/content/blog/ con este frontmatter — no se toca ningún
 * componente ni página, el listado y la página de cada post se generan solos.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    categoria: z.enum(["Consejos", "Salud", "Hábitos", "Motivación", "Mi libro"]),
    // URL de imagen (puede ser local en /public o externa). Las entradas
    // de ejemplo usan imágenes en línea como referencia visual temporal.
    imagen: z.string(),
    imagenAlt: z.string(),
    // CTA opcional: si se define, la página del post muestra un botón de
    // WhatsApp al final (lo usa la entrada del libro, no los posts normales).
    ctaTexto: z.string().optional(),
    ctaWhatsappMensaje: z.string().optional()
  })
});

export const collections = { blog };
