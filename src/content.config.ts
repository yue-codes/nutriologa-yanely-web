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
    categoria: z.enum(["Consejos", "Salud", "Hábitos", "Motivación"]),
    // URL de imagen (puede ser local en /public o externa). Las entradas
    // de ejemplo usan imágenes en línea como referencia visual temporal.
    imagen: z.string(),
    imagenAlt: z.string()
  })
});

export const collections = { blog };
