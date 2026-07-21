/**
 * Datos de contacto del negocio. Es la única fuente de verdad: Navbar,
 * Footer, el botón flotante de WhatsApp y la página de Contacto leen de aquí.
 */

export const contacto = {
  whatsapp: "529516117406", // 52 + 10 dígitos, sin "+" ni espacios
  whatsappMensaje: "Hola Yanely, me gustaría agendar una consulta",
  instagram: "https://www.instagram.com/nutriologayanely/",
  facebook: "https://www.facebook.com/Nutriologayanely",
  tiktok: "https://www.tiktok.com/@nutriologayanelyg",
  email: "nutriyanelygm@gmail.com",

  ubicaciones: [
    {
      lugar: "Ocotlán de Morelos, Oaxaca",
      modalidad: "Presencial",
      direccion:
        "1ra Privada Venustiano Carranza 5, Ocotlán de Morelos Centro, 71510 Ocotlán de Morelos, Oax.",
      // Coordenadas exactas de la ficha de Google Maps del negocio (resueltas
      // desde mapsUrl) — el texto de la dirección a veces no geocodifica bien
      // en calles privadas de poblaciones pequeñas, así que el mapa usa el
      // punto exacto en vez de buscar por texto.
      mapsQuery: "16.7908535,-96.6704334",
      // Liga corta real de Google Maps (compartida por el cliente), para el
      // botón "Cómo llegar" — más confiable que armar la ruta desde el texto.
      mapsUrl: "https://maps.app.goo.gl/vaxQBqckd8MRzKK87",
    },
    { lugar: "Cualquier parte del mundo", modalidad: "En línea" },
  ],
};

/** Construye el link de WhatsApp con el mensaje predeterminado ya codificado. */
export function linkWhatsApp(mensaje: string = contacto.whatsappMensaje): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
