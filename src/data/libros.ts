/**
 * Libros publicados por la nutrióloga. Fuente única de verdad para la
 * sección de libro en Inicio (y para una futura página de libros si se
 * agregan más títulos).
 *
 * ⚠️ Todo el contenido de abajo es RELLENO temporal (título, descripción,
 * portada) mientras llega la info real del libro — igual que otros
 * placeholders del proyecto (ver docs/PROPUESTA.md), no lo reemplaces por
 * datos "reales" inventados.
 */

export type Libro = {
  id: string;
  titulo: string;
  autor: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  /** id de la entrada del blog (src/content/blog/) donde se lee más y se pide. */
  blogSlug: string;
};

export const libros: Libro[] = [
  {
    id: "100-recetas-saludables",
    titulo: "100 Recetas Saludables",
    autor: "Yanely García",
    resumen:
      "Un recetario práctico con 100 platillos deliciosos y fáciles de preparar para tu día a día.",
    descripcion:
      "Pensado para acompañar tu cambio de hábitos sin sacrificar el sabor: recetas balanceadas, accesibles y pensadas para comer rico desde casa.",
    imagen: "/libro2.png",
    imagenAlt: "Portada del libro 100 Recetas Saludables de Yanely García",
    blogSlug: "mi-libro-100-recetas-saludables",
  },
];
