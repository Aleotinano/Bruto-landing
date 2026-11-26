# Landing de la agencia (Edit Landing): investigación y propuesta

## Contexto

EditFlow (`D:\mocks\Edicion`) es la herramienta interna de la agencia (admin y editores). Se
necesita una **landing pública, aislada del dashboard** (sin login, sin API, sin compartir
paquetes) en `D:\mocks\edit landing`, para conseguir clientes nuevos, mostrar el trabajo y el
servicio, y llevar al contacto directo.

### Lo que dice la documentación (qué se vende)

- **Propuesta de valor** (`docs/negocio/3 Negocio/Lean Canvas.md`): *"Volumen de video corto, a
  tiempo, con todo el seguimiento en un solo lugar."*
- **Cliente ideal**: marcas y negocios que publican video corto todas las semanas; hoy, tandas de
  20 a 30 videos por cliente.
- **Dos productos** (`Ingresos.md`):
  1. **Multicuenta** (el foco actual): plan mensual, N cuentas de TikTok, M videos por mes,
     mínimo 2 videos por día por editor, 7 días; se mide en visitas.
  2. **Tandas**: N videos de un tipo (Reel, YouTube, Podcast) con descuento por cantidad.
- **Cobro**: 50 % al iniciar, saldo al completar. Precios reales: **a decidir** (los de la doc
  son de ejemplo).
- **Diferenciales reales**: tres editores con experiencia y clientes reales; fecha de entrega por
  video; revisión con comentarios en el segundo exacto (estilo Frame.io); Drive ordenado; avance
  visible. La landing puede contar el proceso sin mostrar la app.
- **Alternativas que compiten** (`Alternativas.md`): freelancer suelto, editor propio, agencias
  por WhatsApp, Fiverr/Workana.
- Marca del dashboard: naranja `#f97316` como acento, grises neutros estilo Geist, fuente Geist,
  voseo rioplatense, verbos en los botones.

## Investigación: cómo lo resuelven los que ya funcionan

| Referente | Qué hace bien | Para copiar |
| --- | --- | --- |
| [Video Husky](https://www.videohusky.com) | Hero con números concretos ("812 creadores, 16.043 videos", "97,5 % en 2 días hábiles"); 3 pasos; grilla de 12 videos; responde objeciones como preguntas ("¿Qué tan ilimitado es ilimitado?") | Números de prueba en el hero; objeciones como titulares |
| [ShortVids](https://shortvids.co) | "Desde $999/mes" en el hero; tabla **equipo propio vs. suscripción**; tarjetas por tipo de cliente; 5 planes; FAQ por categorías; **WhatsApp como contacto principal** | Comparativa de costo; segmentos; WhatsApp |
| [Vidchops](https://www.vidchops.com) | Hero orientado a resultado ("un editor experto en tu equipo en pocos clics"); 2 CTA que se repiten tras cada sección (empezar / agendar llamada); caso con números (20M+ vistas); garantía de 14 días; flujo "Grabás → Editamos → Brillás" | CTA repetido; caso con números; garantía |
| [ManyRequests: 8 landings de servicios productizados](https://www.manyrequests.com/blog/10-examples-of-productized-services-landing-pages) | Tiempos de respuesta visibles, comparativa de opciones, tres planes para elegir sin cotizar, mostrar el proceso paso a paso | Transparencia del proceso |
| Plantillas Framer ([CreatorCut](https://framer.com/templates/creatorcut), [Clipfolio](https://www.framer.com/marketplace/templates/clipfolio/), [Editory](https://www.framer.com/marketplace/templates/editory/)) | Portfolio con **pestañas por formato** (Reels/TikTok vs. largo), carrusel de videos verticales, final CTA, FAQ | Portfolio 9:16 filtrable |
| Lorak Films (vía búsqueda) | Abre con un reel: el estilo se ve antes de leer | Reel en el hero, pero liviano |

**Precios de referencia del mercado** (autodeclarados, no verificados): planes de 15–30 videos
cortos/mes entre US$1.500 y US$3.500; retainers 6–12 videos US$1.000–4.000 ([HireVire](https://hirevire.com/blog/cost-to-hire-tiktok-creators)).
Freelancers argentinos: US$25/h o US$40 por video. No aparecieron agencias argentinas con
planes publicados: **hay espacio** para una landing local clara con planes visibles.

**Rendimiento**: el video arriba del pliegue empeora el LCP; usar poster optimizado, `preload="none"`,
reproducir al entrar en pantalla (IntersectionObserver) y en mobile tocar para reproducir
([VoidPay PR](https://github.com/ignromanov/voidpay/pull/296), [Base44](https://docs.base44.com/Performance-and-SEO/App-performance)).

### Patrones comunes (lo que se repite en todas)

1. Hero = resultado + para quién + prueba numérica + 2 CTA (primario: contacto; secundario: ver trabajos).
2. Prueba social temprana: logos, números, testimonio con nombre y foto.
3. Trabajo real en formato nativo (9:16), filtrable.
4. "Cómo funciona" en 3–4 pasos.
5. Planes con precio o "desde", con lo incluido.
6. Comparativa contra las alternativas (freelancer, editor propio).
7. Objeciones como FAQ; garantía o reducción de riesgo.
8. CTA final + contacto inmediato (WhatsApp / agendar llamada).

## Propuesta de landing (una página, en orden)

1. **Nav fija**: logo · Trabajos · Servicios · Cómo trabajamos · Planes · FAQ · botón "Escribinos".
2. **Hero**: titular de resultado ("Videos cortos todos los días, a tiempo y sin perseguir a
   nadie"), bajada con para quién, CTA "Escribinos por WhatsApp" + "Ver trabajos"; a la derecha,
   2–3 videos verticales en mosaico (poster + play al entrar). Franja de números
   (videos editados, visitas generadas, entregas a tiempo).
3. **Logos / clientes** (Digital Station y los de los socios, si autorizan).
4. **Trabajos**: carrusel/grilla 9:16 con pestañas (TikTok/Reels · YouTube · Podcast), con la
   métrica de cada video (vistas). Abre en un modal.
5. **Servicios**: dos tarjetas grandes: *Multicuenta TikTok* (plan mensual, cuentas, videos por
   día, foco en visitas) y *Tandas de video* (Reels, YouTube, podcast, descuento por cantidad).
6. **Cómo trabajamos** (4 pasos): mandás el material (Drive) → editamos con fecha por video →
   revisás y marcás cambios en el segundo exacto → aprobás y publicamos/entregamos.
7. **Por qué nosotros / comparativa**: Agencia vs. freelancer vs. editor propio (costo, volumen,
   seguimiento, reemplazo si alguien falta).
8. **Caso**: un cliente con antes/después en números (ej. visitas de la multicuenta).
9. **Planes**: 3 columnas (Multicuenta chico, grande, a medida) + tandas "desde"; 50 % para
   arrancar. Valores configurables en un solo archivo de contenido.
10. **Testimonios**.
11. **FAQ** (acordeón): plazos, correcciones, formatos, propiedad de las cuentas, pagos,
    cómo se manda el material.
12. **CTA final + formulario corto** (nombre, marca, qué necesita, volumen) que arma un mensaje
    de WhatsApp o va a mail; botón flotante de WhatsApp en mobile.
13. **Footer**: redes, mail, legales.

## Precios: el dashboard como fuente de verdad

Revisado en el código de EditFlow:

- **Tandas: sí hay datos reales.** `EditType` (nombre, `unitPrice` en pesos, `isActive`,
  `position`), `VolumeDiscount` (`minQty`, `discountPct`) y `PricingSettings.maxBatchSize`, que el
  admin edita desde *Precios*. `GET /api/pricing` (`pricing.service.ts` → `getCatalog`) devuelve
  `{ editTypes, volumeDiscounts, maxBatchSize }`, **pero** pide sesión ADMIN/CLIENT y está apagado
  en la versión 1 (`hiddenInV1` → `404 MODULE_HIDDEN`), así que la landing no lo puede leer hoy.
- **Multicuenta: no hay datos.** `MonthlyPlan`/`ClientPlan` están solo propuestos en `DOMINIO.md`
  §2.6 (fase 4); no existen en `schema.prisma` ni hay endpoint.

Propuesta:

1. **En EditFlow, un endpoint público de solo lectura** `GET /api/public/pricing` (módulo
   `apps/api/src/modules/public/`): sin `authenticate` ni `hiddenInV1`, solo tipos activos
   (`name`, `unitPrice`, `position`; sin ids), escalones y `maxBatchSize`, con
   `Cache-Control: public, max-age=300` y CORS para el dominio de la landing. Reusa `getCatalog("CLIENT")`
   (ya filtra activos). Su schema de respuesta en `@editflow/shared` y su test en el módulo, como
   pide el `CLAUDE.md` del repo. Es lo único que se toca del dashboard; la landing sigue
   aislada (solo hace un `fetch` HTTP).
2. **En la landing, lectura en el build** (Astro estático): `src/lib/pricing.ts` pide
   `PUBLIC_PRICING_URL` al compilar; si falla o no está configurado, usa los valores de
   `src/content/site.ts` (no rompe el build). Precios mostrados como **"desde"**: el tipo más
   barato con el mayor descuento, y la tabla de escalones ("desde 10 videos, −10 %").
   Cuando el admin cambia precios, se re-despliega la landing (deploy hook manual, o uno que
   dispare la API más adelante).
3. **Planes de multicuenta**: por ahora en `site.ts` como "desde" (valores a definir por los
   socios). Cuando exista `MonthlyPlan` (fase 4), se suma al mismo endpoint público sin cambiar la
   landing de forma.

## Implementación (después de aprobar)

- **Stack**: Astro + Tailwind 4 (sitio estático, casi sin JS, ideal para SEO y velocidad;
  islas solo para carrusel, modal de video, FAQ y formulario). Alternativa si se prefiere un solo
  framework en el equipo: Next 16 estático (`output: "export"`). Proyecto independiente, sin
  monorepo ni dependencias de `@editflow/*`.
- **Estructura** en `D:\mocks\edit landing`:
  - `src/pages/index.astro` (la página), `src/components/` (una por sección: `Hero`, `Work`,
    `Services`, `Process`, `Compare`, `Pricing`, `Testimonials`, `Faq`, `ContactCta`, `Footer`,
    `VideoCard`, `WhatsAppButton`).
  - `src/content/site.ts`: **todo el texto, precios, números, videos y FAQ en un archivo**, para
    cambiarlos sin tocar componentes (los precios siguen a decidir).
  - `public/videos/` (mp4 cortos comprimidos + posters webp), `public/og.png`.
  - Tokens en `src/styles/global.css` (`@theme`): reusar la identidad del dashboard (naranja
    `#f97316`, grises Geist, fuente Geist) pero en clave de marketing (oscuro por defecto,
    tipografía grande).
- **Video**: `<video muted playsinline loop preload="none" poster>`; reproducir con
  IntersectionObserver, pausar fuera de pantalla; mobile: tocar para reproducir. Nada de embeds
  de TikTok en la grilla (son pesados): mp4 propio + link "Ver en TikTok".
- **SEO**: title/description, Open Graph, `lang="es-AR"`, schema.org `ProfessionalService`,
  sitemap.
- **Accesibilidad**: foco visible, `prefers-reduced-motion`, botones con nombre, contraste AA.
- **Deploy**: estático (Vercel/Netlify/Cloudflare Pages), dominio propio.
- Entregable adicional: `docs/INVESTIGACION.md` en la carpeta con esta investigación y las fuentes.

## Verificación

- `npm run build` sin errores y `npm run preview`; revisar en el navegador del panel en desktop y
  en mobile (375 px), sin scroll horizontal.
- Lighthouse: Performance ≥ 90 en mobile, LCP < 2,5 s, Accessibility ≥ 95.
- Los videos no se descargan hasta entrar en pantalla (pestaña Network).
- El CTA de WhatsApp abre con el mensaje armado; el formulario valida.
- Precios: con `pnpm dev` de EditFlow corriendo, el build de la landing muestra los tipos y
  escalones del seed; con la API apagada, el build sale igual con los de `site.ts`.
- En EditFlow: `pnpm typecheck && pnpm lint && pnpm build && pnpm test` en verde (test del
  endpoint público: sin sesión responde 200, no incluye tipos inactivos ni ids).
