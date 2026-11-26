// Todo el texto, los números y los precios de la página, en un solo lugar.
// Regla: nada inventado. Lo marcado con TODO falta completarlo con datos reales; mientras esté
// vacío, la sección o el dato no se muestra.

export type WorkItem = {
  title: string;
  /** Vacío = sin marca (si todavía no se puede nombrar al cliente). */
  client?: string;
  views?: string;
  /** mp4 vertical en public/videos (720p, menos de 3 MB); sin video se ve una tarjeta con el título. */
  src?: string;
  poster?: string;
  link?: string;
  /** El que va en el inicio mientras no esté el video propio (hero.video). */
  featured?: boolean;
  /** Cuánta gente lo mira hasta el final ("68 %"); vacío no se muestra. */
  retention?: string;
};

/** Un capítulo del video del inicio: su nombre en la tira y el segundo en que empieza. */
export type Chapter = { label: string; at: number };

export const site = {
  name: "Bruto",
  url: "https://bruto.omise.com.ar", // TODO: dominio de la página de venta (va aparte de Bruto Studio)
  description:
    "Agencia de edición de video corto. Editamos tus TikToks, Reels y Shorts todos los días, con un abono mensual.",
  // TODO: número real, con código de país y sin signos (54 9 11 …).
  whatsapp: "5491100000000",
  whatsappMessage: "Hola, vi la página de Bruto y quiero saber más sobre la edición de videos.",
  email: "", // TODO
  instagram: "", // TODO
  tiktok: "", // TODO
};


export const hero = {
  eyebrow: "Edición de video corto · TikTok · Reels · Shorts",
  title: "Mandanos el bruto.",
  highlight: "Nosotros lo hacemos pegar.",
  lead: "Videos editados todos los días, con fecha de entrega y cambios hasta que quede bien.",
  cta: "Escribinos por WhatsApp",
  ctaPrices: "Ver precios",
  // Va después del precio por video más bajo de los packs (lo calcula Hero.astro).
  trial: "Primer video de prueba gratis",
  priceFrom: "Desde",
  priceNote: "por video",
  // El video propio del inicio: vertical (9:16), 30 a 60 s, con subtítulos quemados, que explica
  // cómo trabajamos, muestra el crudo contra el editado y los resultados de TikTok (sin mostrar a
  // Mateo ni la marca del cliente). TODO: mp4 720p liviano en public/videos/ + poster .webp, y el
  // segundo en que empieza cada capítulo. Mientras src esté vacío, el inicio muestra el trabajo
  // destacado de `work` y la tira hace la animación del logo.
  video: {
    src: "",
    poster: "",
    chapters: [
      { label: "El bruto", at: 0 },
      { label: "Corte", at: 0 },
      { label: "Gancho", at: 0 },
      { label: "Subtítulos", at: 0 },
      { label: "Resultados", at: 0 },
    ] as Chapter[],
  },
};

// Los 6 a 8 videos de arriba. TODO: los reales (mp4 + poster .webp) con sus visitas.
// Digital Station: se puede mostrar el trabajo; si se nombra o no, está a decidir (client vacío = sin marca).
// PORTADAS DE PRUEBA: fotos de Unsplash (licencia libre) enlazadas, solo para ver cómo queda la
// grilla. No son trabajo nuestro: reemplazarlas por los videos y posters reales antes de publicar.
// Las de dibujo (public/videos/demo/cover-*.svg) quedan como alternativa.
const demoPhoto = (id: string) => `https://images.unsplash.com/photo-${id}?w=540&h=960&fit=crop&q=70`;
export const work: WorkItem[] = [
  { title: "3 errores al abrir tu local", poster: demoPhoto("1664277497095-424e085175e8"), featured: true },
  { title: "POV: llega tu pedido mayorista", poster: demoPhoto("1760273380806-ebf70b968d3a") },
  { title: "Lo que nadie te cuenta del delivery", poster: demoPhoto("1694813646506-135688fc24e4") },
  { title: "Probé esto por 7 días", poster: demoPhoto("1621184078811-1120e2f1fc9e") },
  { title: "¿Vale la pena en 2026?", poster: demoPhoto("1773332611612-ffdaa753afb1") },
  { title: "Así armamos 500 pedidos", poster: demoPhoto("1772442088907-463f166cf1f2") },
];

// Resultados reales: una cuenta de la multicuenta, nueva (arrancó de cero), en su primer mes con
// nosotros: del 28/10 (el primer día con videos nuestros) al 22/11/2026, 26 días. Fuente: el CSV
// "Overview" de las estadísticas de TikTok. El 92 % de Para ti es del panel (60 días; TikTok no lo
// da por día). No se nombra la marca ni a quien sale en los videos (es una figura pública).
// Una métrica con value vacío no se muestra.
export const results = {
  title: "De cero a 153 mil visitas en su primer mes",
  lead: "Una cuenta nueva de TikTok, en sus primeras cuatro semanas con la multicuenta. Sin seguidores al empezar: casi todo el alcance llegó por Para ti.",
  metrics: [
    { value: "153 mil", label: "visitas en el primer mes" },
    { value: "92 %", label: "de las visitas llegó por Para ti" },
    { value: "3.260", label: "me gusta" },
    { value: "164", label: "veces compartido" },
  ],
  // Visitas por día del CSV de TikTok, del 20/10 al 22/11: la semana de antes muestra que estaba en cero.
  chart: {
    start: "2026-10-20",
    views: [
      21, 13, 15, 11, 12, 15, 11, 14, 3872, 6631, 1965, 10094, 9623, 10908, 19012, 31635, 23173, 7108,
      3142, 5660, 3749, 4772, 2962, 1567, 756, 1797, 886, 780, 654, 545, 378, 328, 463, 985,
    ],
    note: "Visitas por día · estadísticas de TikTok",
  },
};

// Antes y después: el crudo y el editado del mismo video. TODO: si hay material; sin pares, la
// sección no aparece.
export const beforeAfter: { title: string; before: WorkItem; after: WorkItem }[] = [];

// "Resultados" solo aparece en el menú cuando hay al menos una métrica real. Packs no va en el
// menú: el botón "Ver precios" del inicio lleva ahí.
export const nav = [
  { href: "#trabajos", label: "Trabajos" },
  ...(results.metrics.some((m) => m.value) ? [{ href: "#resultados", label: "Resultados" }] : []),
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#faq", label: "Preguntas" },
];

export const services = [
  {
    title: "Multicuenta de TikTok",
    lead: "Varias cuentas publicando todos los días para llevar tu marca a más gente. Editamos y subimos; vos mirás cómo crecen las visitas.",
    points: [
      "2 videos por día, los 7 días",
      "Cuentas nuevas o las tuyas",
      "Visitas y seguidores de cada cuenta, cada semana",
    ],
  },
  {
    title: "Videos para tus redes",
    lead: "Un volumen fijo de videos por mes para tu TikTok, Reels o Shorts, editados con tu material.",
    points: [
      "Gancho en los primeros segundos, ritmo y subtítulos",
      "Fecha de entrega para cada video",
      "Cambios hasta que quede como lo pediste",
    ],
  },
];

export const process = [
  { title: "Nos escribís", text: "Por WhatsApp nos contás qué publicás hoy y cuántos videos querés por mes." },
  { title: "Nos mandás el material", text: "Grabás como siempre y lo subís a una carpeta de Drive que armamos para vos." },
  { title: "Editamos con fecha", text: "Cada video tiene su día de entrega. Pedís cambios hasta que quede bien." },
  { title: "Se publica", text: "Lo subís vos o, en la multicuenta, lo subimos nosotros." },
];

// Packs mensuales en USD (también apuntamos a España, México y EE.UU.).
// TODO: PROPUESTA, no decidido. Sale del objetivo de 15–20 USD por video; el pago al editor va aparte.
export const currency = "USD";
export const packs = [
  {
    name: "Arranque",
    videos: 15,
    price: 300,
    points: ["15 videos por mes", "1 red: TikTok, Reels o Shorts", "Cambios incluidos"],
  },
  {
    name: "Constante",
    videos: 30,
    price: 540,
    featured: true,
    points: ["30 videos por mes, 1 por día", "Hasta 2 redes", "Cambios incluidos", "Editor fijo"],
  },
  {
    name: "Multicuenta",
    videos: 60,
    price: 900,
    points: ["60 videos por mes, 2 por día", "Publicamos nosotros en tus cuentas de TikTok", "Reporte semanal de visitas", "Editor fijo"],
  },
];
// Video de prueba: uno solo y gratis, no una semana.
export const packsNote =
  "Abono mensual, sin permanencia. Antes de elegir un pack, pedinos un video de prueba gratis con tu material. ¿Necesitás otro volumen? Lo armamos a medida.";

export const faq = [
  {
    q: "¿Puedo probar antes de contratar?",
    a: "Sí. Editamos un video de prueba gratis con tu material, así ves cómo trabajamos antes de elegir un pack.",
  },
  {
    q: "¿Cuánto tardan en entregar?",
    a: "Cada video tiene su fecha, repartida en el mes según cuándo nos mandás el material. En la multicuenta se publican 2 videos por día.",
  },
  {
    q: "¿Cuántas correcciones incluye?",
    a: "Las que haga falta para que el video quede como lo pediste. Una corrección no consume otro video del pack.",
  },
  {
    q: "¿Cómo les mando el material?",
    a: "Te armamos una carpeta de Drive. Subís ahí lo que grabaste y nos avisás.",
  },
  {
    q: "¿Trabajan con clientes de otros países?",
    a: "Sí. Trabajamos todo a distancia y los packs están en dólares.",
  },
  {
    q: "¿De quién son las cuentas de la multicuenta?",
    a: "Lo acordamos al empezar: podemos trabajar sobre tus cuentas o crear cuentas nuevas para tu marca.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. El abono se renueva mes a mes; un cambio de pack vale desde el mes siguiente.",
  },
];

export const contact = {
  title: "Contanos qué publicás",
  lead: "Te respondemos por WhatsApp con una propuesta y los tiempos. Podés empezar con un video de prueba gratis.",
};
