# Automatiza360 · Landing page

Landing en React + Vite orientada a conseguir reservas de llamada.

## Levantarla en local

Necesitas Node.js 18 o superior (https://nodejs.org).

```bash
npm install
npm run dev
```

Se abrirá en http://localhost:5173. Cada cambio que guardes se ve al instante en el navegador.

Para generar la versión de producción: `npm run build` (sale en la carpeta `dist/`).

## Dónde cambiar cada cosa

| Quiero cambiar…                         | Archivo                              |
|-----------------------------------------|--------------------------------------|
| Textos, métricas, testimonios, FAQ      | `src/data/content.js`                |
| Enlace del botón "Reserva una llamada"  | `brand.bookingUrl` en `src/data/content.js` |
| Colores, tipografías, espaciados, radios| `src/styles/variables.css`           |
| Botones, tarjetas, rejillas comunes     | `src/styles/global.css`              |
| Orden de las secciones                  | `src/App.jsx`                        |
| Diseño de una sección concreta          | `src/components/<Seccion>.jsx` y su `.css` |
| Panel visual del hero                   | `src/components/HeroVisual.jsx` y `Hero.css` |

## Estructura

```
src/
  main.jsx            punto de entrada
  App.jsx             orden de secciones
  useReveal.js        animación suave al hacer scroll (clase "reveal")
  data/content.js     todos los textos
  styles/             variables de diseño y estilos globales
  components/         una sección por componente (+ su CSS)
```

Nota: las métricas y testimonios son de ejemplo; sustitúyelos por datos reales antes de publicar.
