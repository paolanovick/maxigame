# Hub Travel · Maxi Games

Landing de alto impacto visual para los premios de viaje de Maxi Games.
Seis destinos seleccionados a lo largo de Argentina con scroll horizontal,
panel "te lleva..." con cambio de imagen al hover, soporte ES/EN y
diseño totalmente responsive.

## Stack

- **React 19 + Vite** — frontend
- **Framer Motion** — animaciones
- **GSAP + Lenis** — disponibles para scroll suave
- **CSS Modules** — estilos por componente
- **i18n custom** — Context + localStorage para ES/EN

## Estructura

```
src/
├── App.jsx                      Composición raíz, scroll horizontal
├── data/destinos.js             Contenido de los 6 destinos (multilingüe)
├── i18n/
│   ├── LanguageContext.jsx      Provider y hook useLang
│   └── translations.js          Strings ES/EN
├── hooks/
│   └── useHorizontalScroll.js   Scroll horizontal con lerp
└── components/
    ├── BrandLogo.jsx            Logo Hub Travel + Maxi Games (morphing)
    ├── Loader.jsx               Pantalla de carga inicial
    ├── SideNav.jsx              Nav lateral + drawer mobile
    ├── HeroPanel.jsx            Sección de intro
    ├── DestinoPanel.jsx         Panel de cada destino con hover
    └── OutroPanel.jsx           Cierre con CTA
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Output en `dist/`.

## Reemplazar imágenes de los destinos

1. Subí los archivos a `public/images/destinos/`
2. Editá `src/data/destinos.js` y cambiá los campos `imagen`
3. Specs recomendadas: 2400×1350 (16:9) o 2400×1600 (3:2), WebP o JPG, 200–450 KB

## Deploy

Deploy automático en Vercel con push a `main`.
