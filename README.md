# Bruto — página de venta

La página de venta de la agencia Bruto: arriba los videos, después los resultados, el antes y
después, los packs con precio y un solo llamado a la acción, WhatsApp. No tiene "Iniciar sesión":
el acceso a Bruto Studio (el dashboard, `D:\mocks\Edicion`) va aparte y se despliega separado. No
comparte código ni sesión con él.

La investigación que le dio forma está en [docs/INVESTIGACION.md](docs/INVESTIGACION.md).

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # sitio estático en dist/
npm run preview
npx astro check   # tipos
```

## Dónde se cambia cada cosa

- **Textos, videos, métricas, packs, FAQ, WhatsApp:** `src/content/site.ts`. Nada inventado: lo
  marcado con `TODO` falta completarlo. Una métrica sin valor no se muestra, y sin pares de antes y
  después esa sección no aparece.
- **Videos:** mp4 vertical en `public/videos/` (720p, menos de 3 MB) con su poster `.webp`, y en
  `work` de `site.ts` el `src` y el `poster`. Se bajan y reproducen solo al entrar en pantalla.
- **Estilo:** `src/styles/global.css` (grises Geist; el naranja solo de acento).
- **Secciones:** una por archivo en `src/components/`, en el orden de `src/pages/index.astro`.

## Precios

Packs mensuales en USD en `packs` de `site.ts`. Ya no se leen del dashboard: el endpoint
`GET /api/public/pricing` de Bruto Studio quedó sin uso desde esta página.

## Deploy

Sitio estático: Vercel, Netlify o Cloudflare Pages con `npm run build` y la carpeta `dist/`.
No necesita variables de entorno.
