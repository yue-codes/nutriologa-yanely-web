/**
 * Testimonios mostrados en Inicio y Servicios.
 *
 * Estos son GENÉRICOS / de ejemplo (autorizado así mientras se recopilan
 * los reales). Para reemplazarlos: cambia "nombre" y "comentario" por
 * testimonios reales de pacientes. El "avatar" usa las fotos genéricas
 * en /public/reviews/ — está bien repetir la misma imagen en varios
 * testimonios, como ya se hace aquí.
 */

export type Testimonio = {
  nombre: string;
  comentario: string;
  avatar: string;
};

export const testimonios: Testimonio[] = [
  {
    nombre: "Mariana R.",
    comentario:
      "Por primera vez sentí que un plan de alimentación se adaptaba a mí, y no yo al plan. Aprendí a comer sin culpa y con disfrute.",
    avatar: "/reviews/review1.webp"
  },
  {
    nombre: "Carlos H.",
    comentario:
      "Llegué buscando bajar de peso y terminé entendiendo mis hábitos. El acompañamiento fue cercano y muy profesional.",
    avatar: "/reviews/review3.webp"
  },
  {
    nombre: "Familia Pérez",
    comentario:
      "Nos ayudó a cambiar la alimentación de toda la familia poco a poco, sin presión y respetando nuestra economía y costumbres.",
    avatar: "/reviews/review2.webp"
  },
  {
    nombre: "Lupita M.",
    comentario:
      "El seguimiento en línea fue tan completo como si fuera presencial. Me sentí escuchada en cada cita.",
    avatar: "/reviews/review4.webp"
  },
  {
    nombre: "Jorge A.",
    comentario:
      "Tenía resistencia a la insulina y nunca me habían explicado tan bien cómo comer sin sentir que me estaba castigando.",
    avatar: "/reviews/review1.webp"
  },
  {
    nombre: "Daniela S.",
    comentario:
      "Lo que más valoro es que se enfocó en mis hábitos y no solo en una báscula. Hoy me siento con más energía.",
    avatar: "/reviews/review2.webp"
  }
];
