/**
 * Ebooks publicados por la nutrióloga. Fuente única de verdad para la
 * sección de libro en Inicio (y para una futura página de libros si hace
 * falta listarlos todos ahí también).
 */

export type Libro = {
  id: string;
  titulo: string;
  autor: string;
  /** Precio de venta, ya formateado (ej. "$329.00") — se muestra como el resumen destacado. */
  precio: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  /** id de la entrada del blog (src/content/blog/) donde se lee más y se pide. */
  blogSlug: string;
};

export const libros: Libro[] = [
  {
    id: "alimentacion-en-el-mundo-fitness",
    titulo: "Alimentación en el mundo fitness",
    autor: "Yanely García",
    precio: "$329.00",
    resumen:
      "Guía práctica para una alimentación completa en ejercicio de fuerza y resistencia.",
    descripcion:
      "Incluye recomendaciones y ejemplos de combinaciones de alimentos (menús) para acompañar tu entrenamiento.",
    imagen: "/libros/alimentacion-en-el-mundo-fitness.png",
    imagenAlt:
      "Portada del ebook Alimentación en el mundo fitness de Yanely García",
    blogSlug: "mi-libro-alimentacion-en-el-mundo-fitness",
  },
  {
    id: "tips-nutricionales-resistencia-a-la-insulina",
    titulo: "Tips nutricionales para resistencia a la insulina",
    autor: "Yanely García",
    precio: "$269.00",
    resumen:
      "Guía práctica sobre la intervención nutricional en diagnósticos con resistencia a la insulina.",
    descripcion:
      "Recomendaciones claras para acompañar tu diagnóstico desde la alimentación diaria.",
    imagen: "/libros/tips-nutricionales-resistencia-a-la-insulina.png",
    imagenAlt:
      "Portada del ebook Tips nutricionales para resistencia a la insulina de Yanely García",
    blogSlug: "mi-libro-tips-nutricionales-resistencia-a-la-insulina",
  },
  {
    id: "recetario-resistencia-a-la-insulina",
    titulo: "Recetario - Resistencia a la insulina",
    autor: "Yanely García",
    precio: "$189.00",
    resumen:
      "Recetario práctico de ideas para mantener tu dieta lo más equilibrada posible.",
    descripcion:
      "Ideas accesibles para seguir tu dieta sin morir en el intento.",
    imagen: "/libros/recetario-resistencia-a-la-insulina.png",
    imagenAlt:
      "Portada del ebook Recetario - Resistencia a la insulina de Yanely García",
    blogSlug: "mi-libro-recetario-resistencia-a-la-insulina",
  },
  {
    id: "recetario-licuados-verdes",
    titulo: 'Recetario - "Licuados verdes"',
    autor: "Yanely García",
    precio: "$189.00",
    resumen: "Más de 10 combinaciones para que no te aburras de lo mismo.",
    descripcion:
      "Incluye una miniguía práctica para que crees tus propios licuados verdes desde cero.",
    imagen: "/libros/recetario-licuados-verdes.png",
    imagenAlt: 'Portada del ebook Recetario "Licuados verdes" de Yanely García',
    blogSlug: "mi-libro-recetario-licuados-verdes",
  },
];
