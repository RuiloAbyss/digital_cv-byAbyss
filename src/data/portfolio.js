const universityData = 
  {
    date: "Agosto 2021 - Presente",
    institution: "Instituto Tecnológico de Tepic",
    degree: "Estudiante de Ingeniería en Sistemas Computacionales",
    description: "Actualmente, estoy cursando el último semestre de la carrera, con especialidad en desarrollo web."
  };

const topExperience = [
  {
    date: "Septiembre 2025 - Diciembre 2025",
    company: "Electronic Store Project",
    tag: "proyect",
    role: "Desarrollador Web",
    description: `
      Optimicé los procesos de facturación, pagos y notificaciones mediante la integración 
      de APIs como PayPal, SendGrid y FacturAPI, implementé una base de datos escalable en 
      Firebase para la gestión en tiempo real y gestioné el despliegue CI/CD en Vercel, 
      asegurando una transición a producción estable.
      `
  },
  {
    date: "Junio 2025 - Agosto 2025",
    company: "Agrosoft - Investigación Académica",
    tag: "proyect",
    role: "Diseñador UX/UI",
    description: `
      Diseñe un prototipo de alta fidelidad de una app de monitoreo agrícola, 
      aplicando estándares de Google UX/UI en la visualización de datos científicos complejos.
      `
  },
  {
    date: "Enero 2025 - Junio 2025",
    company: "Mila Project",
    tag: "proyect",
    role: "Desarrollador Web",
    description: `
      Aporté identidad y diseño a la marca, mediante el uso de framworks modernos como 
      React y TailwindCSS, logrando una experiencia de usuario atractiva y funcional.
      Siguiendo la metodología ágil SCRUM.
      `
  },
];

const learningData = [
  {
    date: "Cursando 2025",
    company: "Google / Coursera",
    tag: "formative",
    role: "Certificación en UX/UI Design",
    description: `
      Desarrollando la capacidad de estandarizar interfaces complejas, 
      con el fin de reducir la deuda técnica visual en el desarrollo Frontend, 
      mediante la creación de sistemas de diseño y prototipos de alta fidelidad.
    `
  },
];

const socialData = {
    name: "Abisai Ruiz López",
    linkedin: "https://www.linkedin.com/in/abisai-ruiz/",
    github: "https://github.com/RuiloAbyss/",
    cv: "/Abisai Ruiz - CV.pdf",
    email: "ruilo.abisai@gmail.com",
    phone: "523891050431"
};

const aboutMeData = [
  {
    title: "Fotografía",
    imglink: "/fotografia.jpeg", 
    content: "Capturar momentos y detalles que a menudo pasan desapercibidos.",
    technologies: [],
    theme: "sunset"
  },
  {
    title: "Leer y Escribir Historias",
    imglink: "/leer.jpeg", 
    content: "Crear narrativas y mundos ficticios me ayuda a mejorar mi storytelling en productos digitales.",
    technologies: [],
    theme: "cosmic"
  },
  {
    title: "Senderismo",
    imglink: "/senderismo.jpeg", 
    content: "La conexión con la naturaleza recarga mi energía y creatividad para nuevos proyectos.",
    technologies: [], // Array vacío porque son hobbies
    theme: "cosmic"
  },
  {
    title: "Visitar Lugares de Interés",
    imglink: "/interes.jpeg", 
    content: "Apreciar el trabajo de los demás me permite mejorar constantemente y encontrar inspiración.",
    technologies: [], // Array vacío porque son hobbies
    theme: "sunset"
  },
  {
    title: "Dibujo",
    imglink: "/dibujar.jpeg", 
    content: "Plasmar ideas visualmente es parte fundamental de mi proceso creativo y de abstracción.",
    technologies: [],
    theme: "cosmic"
  }
];

  const aboutMeDescription = `
  Me considero un programador con alma de artista. Mi enfoque va más allá de líneas de código; 
  busco conectar la lógica estructurada de los sistemas con la sensibilidad emocional del diseño. 
  Ya sea explorando nuevos senderos o prototipando una interfaz, siempre persigo el equilibrio entre 
  la funcionalidad robusta y una estética inspiradora.
  `;

// IMPORTANTE: Los `id` en `menuTabs` deben coincidir con el valor `category` en el frontmatter
// de los archivos Markdown ubicados en `src/pages/goals/`.
// Por ejemplo, para marcar un item como proyecto destacado usa `category: 'proyect'` en el .md,
// y asegúrate de tener una entrada con `id: 'proyect'` en `menuTabs` si deseas mostrar esa categoría en la pestaña.
const menuTabs = [
  {id: 'hs', label: 'Tecnologías'},
  {id: 'ss', label: 'Cualidades'},
  {id: 'learn', label: 'Certificados'},
];

export { universityData, topExperience, learningData, socialData, menuTabs, aboutMeData, aboutMeDescription };