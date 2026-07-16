export const SITE = {
  name: "Clínica Meridiano",
  tagline: "Medicina privada, atención humana",
  phone: "+52 55 1234 5678",
  phoneHref: "tel:+525512345678",
  whatsapp: "+52 55 8765 4321",
  whatsappHref: "https://wa.me/525587654321",
  email: "contacto@clinicameridiano.mx",
  address: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.664!2d-99.1710!3d19.3809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIyJzUxLjIiTiA5OcKwMTAnMTUuNiJX!5e0!3m2!1ses!2smx!4v1700000000000",
  hours: [
    { day: "Lunes a viernes", time: "8:00 – 20:00" },
    { day: "Sábado", time: "9:00 – 15:00" },
    { day: "Domingo", time: "Urgencias únicamente" },
  ],
};

export interface Specialty {
  id: string;
  name: string;
  description: string;
  intro: string;
  image: string;
  conditions: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "medicina-interna",
    image: "/images/especialidades/medicina-interna.svg",
    name: "Medicina interna",
    description: "Diagnóstico y seguimiento integral de enfermedades del adulto.",
    intro:
      "Nuestro equipo de medicina interna se encarga del diagnóstico, tratamiento y seguimiento continuo de enfermedades del adulto, coordinando con otras especialidades cuando es necesario para ofrecer una visión completa de tu salud.",
    conditions: [
      "Hipertensión arterial",
      "Diabetes tipo 2",
      "Enfermedades tiroideas",
      "Chequeos generales de salud",
      "Manejo de enfermedades crónicas",
    ],
    services: [
      "Consulta y valoración integral",
      "Estudios de laboratorio",
      "Seguimiento de padecimientos crónicos",
      "Certificados médicos",
    ],
    faqs: [
      {
        question: "¿Cuándo debo acudir a medicina interna?",
        answer:
          "Es un buen punto de partida cuando no sabes con qué especialista empezar, para chequeos generales o para el seguimiento de una enfermedad crónica.",
      },
      {
        question: "¿Necesito estudios previos?",
        answer:
          "No es obligatorio. Si ya cuentas con estudios recientes, tráelos a tu cita para agilizar la valoración.",
      },
    ],
  },
  {
    id: "cardiologia",
    image: "/images/especialidades/cardiologia.svg",
    name: "Cardiología",
    description: "Evaluación cardiovascular, electrocardiogramas y ecocardiogramas.",
    intro:
      "Evaluamos y damos seguimiento a la salud de tu corazón con tecnología diagnóstica dentro de la clínica, evitando traslados innecesarios a otros centros para tus estudios.",
    conditions: [
      "Hipertensión y riesgo cardiovascular",
      "Arritmias",
      "Dolor en el pecho",
      "Insuficiencia cardiaca",
      "Chequeo cardiovascular preventivo",
    ],
    services: [
      "Electrocardiograma",
      "Ecocardiograma",
      "Prueba de esfuerzo",
      "Monitoreo ambulatorio de presión arterial",
    ],
    faqs: [
      {
        question: "¿Cuánto dura un ecocardiograma?",
        answer:
          "El estudio toma entre 20 y 30 minutos y los resultados se revisan contigo el mismo día.",
      },
      {
        question: "¿Debo ir en ayunas?",
        answer:
          "No es necesario para la consulta ni para el electrocardiograma. Si tu médico solicita estudios de laboratorio, te indicará si requieren ayuno.",
      },
    ],
  },
  {
    id: "pediatria",
    image: "/images/especialidades/pediatria.svg",
    name: "Pediatría",
    description: "Cuidado y desarrollo infantil desde el nacimiento hasta la adolescencia.",
    intro:
      "Acompañamos el crecimiento y desarrollo de tus hijos desde el nacimiento hasta la adolescencia, con un enfoque preventivo y cercano tanto para los niños como para los padres.",
    conditions: [
      "Control de niño sano",
      "Esquema de vacunación",
      "Enfermedades respiratorias comunes",
      "Alergias infantiles",
      "Seguimiento de desarrollo y crecimiento",
    ],
    services: [
      "Consulta pediátrica",
      "Aplicación de vacunas",
      "Valoración de desarrollo",
      "Orientación nutricional infantil",
    ],
    faqs: [
      {
        question: "¿Desde qué edad atienden?",
        answer:
          "Damos seguimiento desde recién nacidos hasta los 17 años.",
      },
      {
        question: "¿Puedo llevar la cartilla de vacunación?",
        answer:
          "Sí, tráela a cada cita para mantener el esquema actualizado y evitar duplicar dosis.",
      },
    ],
  },
  {
    id: "ginecologia",
    image: "/images/especialidades/ginecologia.svg",
    name: "Ginecología",
    description: "Salud femenina integral en cada etapa de la vida.",
    intro:
      "Ofrecemos atención ginecológica integral en un espacio privado y cómodo, acompañándote en cada etapa: desde la adolescencia hasta la menopausia.",
    conditions: [
      "Control ginecológico anual",
      "Planificación familiar",
      "Seguimiento de embarazo",
      "Trastornos menstruales",
      "Climaterio y menopausia",
    ],
    services: [
      "Papanicolaou y colposcopía",
      "Ultrasonido pélvico",
      "Consulta prenatal",
      "Orientación en anticoncepción",
    ],
    faqs: [
      {
        question: "¿Cada cuánto debo hacerme un Papanicolaou?",
        answer:
          "Generalmente se recomienda cada uno a tres años según tu edad y antecedentes; tu ginecólogo te indicará la frecuencia adecuada para ti.",
      },
      {
        question: "¿Atienden control prenatal completo?",
        answer:
          "Sí, damos seguimiento a tu embarazo con consultas periódicas y ultrasonidos dentro de la clínica.",
      },
    ],
  },
  {
    id: "dermatologia",
    image: "/images/especialidades/dermatologia.svg",
    name: "Dermatología",
    description: "Diagnóstico y tratamiento de piel, cabello y uñas.",
    intro:
      "Diagnosticamos y tratamos afecciones de piel, cabello y uñas, así como procedimientos estéticos y preventivos como la revisión de lunares.",
    conditions: [
      "Acné",
      "Dermatitis y eccema",
      "Caída de cabello",
      "Revisión de lunares",
      "Manchas en la piel",
    ],
    services: [
      "Consulta dermatológica",
      "Dermatoscopía",
      "Crioterapia",
      "Biopsias de piel",
    ],
    faqs: [
      {
        question: "¿Cada cuánto debo revisarme los lunares?",
        answer:
          "Se recomienda una revisión anual, o antes si notas cambios en tamaño, color o forma.",
      },
      {
        question: "¿Tratan la caída de cabello?",
        answer:
          "Sí, evaluamos las causas y ofrecemos tratamientos personalizados según el diagnóstico.",
      },
    ],
  },
  {
    id: "traumatologia",
    image: "/images/especialidades/traumatologia.svg",
    name: "Traumatología",
    description: "Atención de lesiones musculoesqueléticas y rehabilitación.",
    intro:
      "Diagnosticamos y tratamos lesiones de huesos, articulaciones y músculos, acompañándote desde la valoración inicial hasta la recuperación completa.",
    conditions: [
      "Esguinces y fracturas",
      "Dolor articular",
      "Lesiones deportivas",
      "Dolor lumbar y cervical",
      "Rehabilitación post-quirúrgica",
    ],
    services: [
      "Consulta traumatológica",
      "Interpretación de radiografías",
      "Infiltraciones",
      "Plan de rehabilitación",
    ],
    faqs: [
      {
        question: "¿Necesito traer radiografías previas?",
        answer:
          "Si ya cuentas con ellas, tráelas a tu cita; si no, tu médico indicará qué estudios se requieren.",
      },
      {
        question: "¿Atienden lesiones deportivas de urgencia?",
        answer:
          "Las lesiones agudas pueden atenderse por nuestra línea de urgencias; para seguimiento y rehabilitación, agenda una cita.",
      },
    ],
  },
];

export const FAQS = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes agendar completando el formulario de esta página, escribiéndonos por WhatsApp o llamando directamente a la clínica. Confirmamos disponibilidad en menos de 24 horas hábiles.",
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer:
      "Trabajamos con las principales aseguradoras del país. Escríbenos con el nombre de tu póliza y con gusto confirmamos la cobertura antes de tu cita.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjeta de débito y crédito, transferencia electrónica y pagos con seguro médico previamente validado.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Atendemos de lunes a viernes de 8:00 a 20:00 y sábados de 9:00 a 15:00. Domingos únicamente para urgencias.",
  },
  {
    question: "¿Cómo puedo cancelar una cita?",
    answer:
      "Puedes cancelar o reagendar escribiéndonos por WhatsApp o llamando a la clínica con al menos 4 horas de anticipación, sin costo alguno.",
  },
];
