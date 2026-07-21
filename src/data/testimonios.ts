/**
 * Testimonios mostrados en Inicio y Servicios.
 *
 * Reseñas reales de pacientes, tomadas de Google y Facebook (ver "fuente").
 * "avatar" es la ruta a la foto de perfil en /public/reviews/, o `null`
 * cuando la reseña no tiene foto (se muestra un avatar con la inicial del
 * nombre en su lugar, como hace Google con reseñas sin foto).
 */

export type Testimonio = {
  nombre: string;
  comentario: string;
  avatar: string | null;
  fuente: "google" | "facebook";
};

export const testimonios: Testimonio[] = [
  {
    nombre: "Karin Arrazola",
    comentario:
      "Excelente atención, seguimiento y explicación, algo que a veces es difícil sentir con el personal de salud es comodidad y con ella es muy fácil sentirse seguro.",
    avatar: null,
    fuente: "google",
  },
  {
    nombre: "Lupitha RamVel",
    comentario: "Su atención y empeño hacia los pacientes es fantástico.",
    avatar: "/reviews/lupita.jpg",
    fuente: "facebook",
  },
  {
    nombre: "Gabriela Arellano",
    comentario:
      "¡Súper recomendable y muy profesional! La Nutri siempre está atenta y responde todas las dudas que tengas de tu plan de alimentación o fuera de él, además de que te explica a detalle el porqué de cada comida y te apoya para ir trabajando en equipo.",
    avatar: "/reviews/GabrielaArellano.jpg",
    fuente: "facebook",
  },
  {
    nombre: "Harumi Cruz",
    comentario:
      "Más que el querer bajar de peso, una dieta o una imposición a como lo ve todo mundo, es un estilo de vida que adoptas con entusiasmo, porque día a día vas viendo los cambios, con Yanely aprendes a quererte a ti mismo y a cuidarte desde una mejor perspectiva.",
    avatar: "/reviews/HarumiCruz.jpg",
    fuente: "facebook",
  },
];
