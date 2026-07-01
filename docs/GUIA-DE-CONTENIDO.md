# Guía de contenido — cómo editar el sitio sin tocar el diseño

Esta guía explica cómo actualizar el contenido más común del sitio. No hace falta saber
programar para seguir estos pasos: solo edita el texto entre comillas y guarda el archivo.

## Editar o agregar un servicio

Archivo: `src/data/servicios.ts`

Cada categoría tiene un título, una descripción y una lista (`items`) de padecimientos. Para
agregar uno nuevo, copia una línea dentro de `items` y cambia el texto:

```ts
items: [
  "Resistencia a la insulina",
  "Diabetes tipo 1, tipo 2 y gestacional"
  // agrega aquí tu nueva línea, entre comillas y con coma antes
];
```

## Editar o agregar un testimonio

Archivo: `src/data/testimonios.ts`

Cada testimonio tiene `nombre`, `comentario` y `avatar` (la foto). Copia un bloque `{ ... }`
para agregar uno nuevo:

```ts
{
  nombre: "Nombre del paciente",
  comentario: "Lo que dijo el paciente sobre su experiencia.",
  avatar: "/reviews/review1.webp" // o sube una foto nueva a public/reviews/
}
```

## Publicar una entrada de blog

Crea un archivo nuevo en `src/content/blog/` con extensión `.md` (por ejemplo
`mi-nuevo-post.md`) con este formato exacto al inicio del archivo:

```md
---
titulo: "Título del post"
resumen: "Un resumen de 1-2 líneas; aparece en las tarjetas del blog."
fecha: 2026-06-01
categoria: "Consejos" # debe ser exactamente: Consejos, Salud, Hábitos, Motivación o Mi libro
imagen: "/blog/mi-imagen.jpg" # sube la foto a public/blog/ y usa esa misma ruta (o pega una URL https://... si todavía no tienes foto)
imagenAlt: "Descripción corta de la imagen"
---

Aquí escribes el contenido del post, en Markdown normal.
```

El post aparece solo en `/blog`, ordenado por fecha — no hay que tocar ninguna otra página.

Si quieres que el post termine con un botón de WhatsApp (por ejemplo, para vender algo desde
esa entrada), agrega estas dos líneas más al frontmatter — si las omites, el post se ve normal,
sin botón:

```md
ctaTexto: "Pídelo por WhatsApp"
ctaWhatsappMensaje: "Hola Yanely, me interesa..."
```

## Editar o agregar un libro

Archivo: `src/data/libros.ts` — es lo que alimenta la tarjeta del libro en Inicio (imagen,
autor, resumen, descripción y a qué entrada del blog manda el botón "Más información").

El botón de compra real ("Pídelo por WhatsApp") vive en la entrada del blog a la que apunta
`blogSlug`, no en esta tarjeta — para cambiar el mensaje de WhatsApp del libro, edita
`ctaWhatsappMensaje` en esa entrada (ver sección anterior).

Para agregar un segundo libro en el futuro, agrega otro bloque `{ ... }` al arreglo `libros` y
su entrada de blog correspondiente; hoy solo se muestra el primero (`libros[0]`) en Inicio.

## Cambiar datos de contacto

Archivo: `src/data/contacto.ts` — número de WhatsApp, mensaje predeterminado, Instagram,
Facebook, correo y ubicaciones. Todas las páginas (Navbar, Footer, botón flotante, Contacto)
leen de aquí.

## Cambiar el logo o las fotos

- **Logo**: cuando tengas el logo en alta calidad, reemplaza el contenido de
  `src/components/layout/Logo.astro` por una etiqueta `<img>` que apunte al archivo (colócalo en
  `public/`).
- **Fotos**: sustituye los archivos en `public/` (`nutri.webp`, `nutri2.jpg`, `nutri3.jpg`) por
  las versiones finales manteniendo el mismo nombre, o actualiza la ruta en la página
  correspondiente si usas un nombre distinto.

## Cambiar colores o tipografía

Archivo: `src/styles/global.css`, dentro del bloque `@theme`. Cambiar un valor de color (por
ejemplo `--color-primary`) actualiza ese color en todo el sitio automáticamente — no es
necesario tocar ningún componente.
