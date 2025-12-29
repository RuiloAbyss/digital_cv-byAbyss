# Funny Curry — Portafolio Personal (Astro)

**Descripción rápida**

Sitio personal construido con Astro, TailwindCSS y componentes personalizados. Muestra perfil, educación, experiencia, proyectos y una malla tipo "bento" para destacar objetivos / skills desde archivos Markdown.

---

## 🚀 Comandos útiles

- `npm install` — Instala dependencias
- `npm run dev` — Levanta el servidor de desarrollo (por defecto en `http://localhost:4321`)
- `npm run build` — Genera la build para producción
- `npm run preview` — Previsualiza la build generada

---

## 🗂 Estructura del proyecto (resumen)

- `public/` — Archivos estáticos (imágenes, fuentes, PDFs, p. ej. `/goals_img/`)
- `src/`
  - `components/` — Componentes reutilizables (ej. `BentoGrid.astro`, `Card.astro`, `ProjectCard.astro`)
  - `data/` — Datos JS consumidos por las páginas (ej. `portfolio.js`)
  - `layouts/` — Layouts (ej. `Layout.astro`)
  - `pages/` — Rutas y contenido. Los markdown de `pages/goals/*.md` se usan para crear cards dinámicamente
  - `styles/` — CSS global

---

## 🔧 Modificar datos del portafolio

Los datos principales del sitio se encuentran en `src/data/portfolio.js`. Ahí encontrarás objetos exportados que controlan contenido clave:

- `universityData` — Datos de educación (institución, fecha, descripción)
- `topExperience` — Array con experiencia / proyectos importantes
- `learningData` — Formación y certificaciones
- `socialData` — Nombre, `linkedin`, `github`, `cv`, `email`, `phone`
- `menuTabs` — Pestañas de la sección de Formación / Habilidades

Ejemplo (editar `socialData`):

```js
// src/data/portfolio.js
const socialData = {
  name: "Tu Nombre",
  linkedin: "https://...",
  github: "https://...",
  cv: "/CV_Tu_Nombre.pdf",
  email: "tu.email@ejemplo.com",
  phone: "521234567890"
};
```

Para añadir una nueva experiencia, agrega un objeto al array `topExperience` con las propiedades `date`, `company`, `role`, `description` y opcionalmente `tag`.

---

## 📝 Cómo crear una Card desde Markdown (`src/pages/goals/`)

Los archivos Markdown dentro de `src/pages/goals/*.md` tienen Frontmatter que se mapea automáticamente en la página `index.astro` con `import.meta.glob('./goals/*.md', { eager: true })`.

Campos de Frontmatter soportados (más comunes):

- `title` (string) — Título que aparece en la card
- `category` (string) — Categoría que se usa para filtrar (ej.: `proyect`, `ss`, `hs`, `learn`)
- `image` (string) — Ruta a la imagen dentro de `public/` (ej.: `/goals_img/miimagen.webp`)
- `description` (string) — Texto que aparece al hacer hover o en la vista ampliada
- `tags` (array) — Tecnologías / etiquetas mostradas en la card
- `href` (string) — Enlace externo o interno para la card (opcional)
- `theme` (`sunset` | `cosmic`) — Variantes de color para la card
- `span` (number) — Controla el tamaño de la card en la malla (1 o 2)

Ejemplo de un archivo Markdown:

```md
---
title: "Proyecto Ejemplo"
category: "proyect"
image: "/goals_img/proyecto.webp"
description: "Pequeña descripción del proyecto."
tags: ["React", "Tailwind"]
href: "https://example.com"
theme: "cosmic"
span: 2
---

Contenido en Markdown (opcional si quieres página dedicada)
```

**Nota:** El valor `category` en el frontmatter debe coincidir exactamente con el `id` de alguna entrada en `menuTabs` (definida en `src/data/portfolio.js`). En particular, los proyectos destacados deben usar `category: 'proyect'` para ser detectados como proyectos.

Al guardar el archivo, `index.astro` lo importará automáticamente y lo mostrará en la sección correspondiente.

---

## 📐 Spans y cómo afectan al BentoGrid

- El componente `BentoGrid` mapea el valor `span` de las cards a clases Tailwind (ver: `src/components/BentoGrid.astro`).

  - `span: 1` → `col-span-1 row-span-1` (tamaño por defecto)
  - `span: 2` → `col-span-1 sm:col-span-2 sm:row-span-2` (ocupa un bloque 2x2 en pantallas pequeñas/medianas)

- En `Card.astro`, el `span` también afecta la clase de tamaño de texto:
  - `span === 1` → textos más pequeños (`text-sm sm:text-xs`)
  - `span === 2` → textos un poco más grandes (`text-md sm:text-sm`)

Consejo rápido: usa `span: 2` para destacar proyectos importantes o aquellos con más contenido; ten en cuenta que el comportamiento responsive hace que en pantallas pequeñas las cards grandes ocupen más espacio en la malla.

---

## 📁 Imágenes y assets

Coloca las imágenes referenciadas por los markdown en `public/goals_img/` y usa rutas relativas desde la raíz, por ejemplo: `/goals_img/miimagen.webp`.

---

## 🧰 Temas y estilos

- `theme` en frontmatter admite al menos `sunset` y `cosmic` (ver `src/components/Card.astro`).
- Los estilos principales están en `src/styles/global.css` y muchas utilidades se aplican vía Tailwind.

---

## 🤝 Contribuye

- Crea/edita Markdown en `src/pages/goals/` para añadir nuevos items.
- Modifica `src/data/portfolio.js` para actualizar datos globales.
- Levanta el servidor con `npm run dev` para verificar cambios en caliente.

---

cualquier duda o sugerencia contactame c;
*ruilo.abisai@gmail.com*