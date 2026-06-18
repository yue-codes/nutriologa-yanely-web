/**
 * Servicios que ofrece la nutrióloga, agrupados por categoría.
 * Esta es la única fuente de verdad para la página de Servicios:
 * para agregar, quitar o renombrar un padecimiento, edita este archivo
 * (no es necesario tocar ningún componente ni la página).
 *
 * "icono" debe ser uno de los íconos definidos en src/icons/.
 */

export type CategoriaServicio = {
  id: string;
  icono: "cerebro" | "maiz" | "hoja" | "corazon";
  titulo: string;
  descripcion: string;
  items: string[];
};

export const categoriasServicios: CategoriaServicio[] = [
  {
    id: "metabolico-hormonal",
    icono: "cerebro",
    titulo: "Metabólico y hormonal",
    descripcion:
      "Acompañamiento nutricional para condiciones metabólicas y hormonales, con un plan adaptado a tu cuerpo y tu ritmo de vida.",
    items: [
      "Resistencia a la insulina",
      "Diabetes tipo 1, tipo 2 y gestacional",
      "Síndrome de ovario poliquístico (SOP)",
      "Síndrome metabólico",
      "Dislipidemias (colesterol y triglicéridos altos)"
    ]
  },
  {
    id: "higado-corazon",
    icono: "corazon",
    titulo: "Hígado y corazón",
    descripcion:
      "Planes enfocados en proteger tu hígado y tu sistema cardiovascular a través de la alimentación diaria.",
    items: ["Esteatosis hepática (hígado graso)", "Hipertensión arterial"]
  },
  {
    id: "sistema-digestivo",
    icono: "maiz",
    titulo: "Sistema digestivo",
    descripcion:
      "Nutrición pensada para aliviar molestias digestivas y mejorar tu relación con la comida día a día.",
    items: ["Pancreatitis", "Gastritis", "Reflujo gastroesofágico (ERGE)"]
  },
  {
    id: "habitos-composicion",
    icono: "hoja",
    titulo: "Hábitos y composición corporal",
    descripcion:
      "Para quienes buscan un cambio de hábitos real y sostenible, más allá de una dieta restrictiva.",
    items: ["Entrenamiento nutricional", "Cambio de hábitos", "Recomposición corporal"]
  }
];
