/**
 * Datos de contacto del negocio. Es la única fuente de verdad: Navbar,
 * Footer, el botón flotante de WhatsApp y la página de Contacto leen de aquí.
 *
 * ⚠️ "whatsapp" y "email" son GENÉRICOS/placeholder por ahora — reemplaza
 * estos dos valores con los reales en cuanto los tengas. El usuario de
 * Instagram sí es el real (tomado de su Linktree).
 */

export const contacto = {
  whatsapp: "5215555555555", // TODO: número real, formato 52 + 10 dígitos, sin "+" ni espacios
  whatsappMensaje: "Hola Yanely, me gustaría agendar una consulta",
  instagram: "https://www.instagram.com/nutriyanelygarcia",
  facebook: "https://www.facebook.com/nutriyanelygarcia",
  email: "contacto@nutriologayanely.com", // TODO: correo real

  ubicaciones: [
    { lugar: "Ocotlán de Morelos, Oaxaca", modalidad: "Presencial" },
    { lugar: "Santa Lucía del Camino, Oaxaca", modalidad: "Presencial" },
    { lugar: "Cualquier parte del mundo", modalidad: "En línea" }
  ]
};

/** Construye el link de WhatsApp con el mensaje predeterminado ya codificado. */
export function linkWhatsApp(mensaje: string = contacto.whatsappMensaje): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
