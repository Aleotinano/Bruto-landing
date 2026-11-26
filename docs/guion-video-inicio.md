# Guion: video del inicio de la página

El video protagonista del inicio de la página de venta (`hero.video` en `src/content/site.ts`).
También se publica tal cual como primer video de Bruto en TikTok e Instagram.

- **Formato:** vertical 9:16, 1080×1920, 30 fps. Duración total: 30 a 60 s.
- **Sin sonido tiene que entenderse:** en la página arranca muteado. Todo lo que se dice va también
  en pantalla, palabra por palabra.
- **Área segura (1080×1920):** 220 px arriba, 120 a los costados, 480 abajo
  (`D:\edicion\digital\claude\ESTILO_TEXTO.md`). Máximo 2 renglones por bloque de texto.
- **Letras:** Poppins ExtraBold en mayúsculas para los textos grandes, con la palabra clave en
  bloque naranja `#F4845F` (como el titular de la página). Subtítulos en Poppins.
- **No se muestra material de clientes:** ni caras, ni nombres de carpetas o archivos, ni marcas,
  ni la cuenta de TikTok (avatar, nombre, "Consultas de búsqueda"). Se tapa con desenfoque o se usa
  una carpeta de muestra con nombres genéricos.
- **Capítulos** (los nombres de la tira de la página; anotar el segundo en que empieza cada uno).
  Con esta estructura conviene cambiarlos en `site.ts` por: El bruto · Edición · Resultados.

**Idea principal:** "¿Querés que tus videos se vean así?". Hook con tu cara (zoom, golpe de sonido),
y después el recorrido del celular al editor, mostrando cómo avanza la edición.

Referencias: [Jen Nouri, raw vs edited](https://www.tiktok.com/@itsjennoura/video/7704630110665706760)
(capas con línea de tiempo), [Stugym, +47 videos](https://www.tiktok.com/@stugym/video/7637953522826349844)
(mostrar el proceso con las carpetas).

## Qué tiene que lograr el video

Le habla al **dueño de un local o una marca** que llega desde TikTok o Instagram y no sabe de
edición. En 30 a 60 s tiene que pensar: *"yo grabo con el celular, ellos lo convierten en algo que la
gente mira, es fácil y funciona"*. El video lo cuenta el dueño de Bruto a cámara: la cara de la marca
es la nuestra, no la de un cliente.

---

## 1. Hook · capítulo "El bruto" (0 a ~4 s)

Vos a cámara. El texto acompaña lo que decís, palabra por palabra, en el tercio de arriba (el hook va
como título, sin subtítulos abajo: regla 4 de ESTILO_TEXTO.md). **La edición de este plano es la
muestra:** "así" es este mismo video.

| Tiempo | Cámara | Voz | Texto en pantalla | Edición |
|---|---|---|---|---|
| 0,0 – 2,0 s | Vos a cámara, plano medio, bien iluminado. | "¿Querés que tus videos se vean así?" | ¿QUERÉS QUE TUS VIDEOS / SE VEAN [ASÍ]? | En "así": zoom de golpe (*punch-in*), golpe de sonido y, por medio segundo, 3 cortes rápidos de videos editados (propios o con permiso). |
| 2,0 – 4,0 s | Vuelve el plano, un poco más cerrado. | "Te muestro cómo trabajamos en Bruto." | TE MUESTRO CÓMO / TRABAJAMOS EN [BRUTO] | Abajo aparece la tira de clips de la marca con el cabezal: anuncia que empieza el recorrido. |

- `[ ]` = bloque naranja. Cada frase en un bloque de 2 renglones como máximo.
- **Primer cuadro:** vos ya hablando y "¿QUERÉS QUE TUS VIDEOS" en pantalla, sin fundido desde
  negro. Es la portada en TikTok y el poster de la página.
- El "así" tiene que sentirse: es el único momento del hook con efecto fuerte.

---

## 2. Del celu al editor · capítulo "Edición" (~4 a ~25 s)

Un solo recorrido, sin cortar a otra cosa: el bruto sale del celular, cae en el editor y se ve cómo
avanza la edición hasta quedar terminado. Voz tuya en off.

**El bruto es el propio hook.** Lo que se edita en pantalla es la toma cruda de los primeros 4
segundos (vos hablando, sin texto, sin zoom, con el "eh" del principio). Así el que mira ve el antes
y el después del mismo plano que acaba de ver, y no hace falta material de ningún cliente.

| Tiempo | Se ve | Voz (idea) | Rótulo / progreso |
|---|---|---|---|
| ~4 – 7 s | El celular en tu mano (o grabación de pantalla del celu) con la toma cruda del hook en la galería. Le das play: se ve plana, con silencios. | "Vos grabás con el celu, como te salga." | `EL BRUTO` · progreso **0 %** |
| ~7 – 9 s | Transición: zoom hacia la pantalla del celu y el clip "cae" en la línea de tiempo de Premiere (match cut sobre el mismo cuadro). | "Nos lo mandás…" | La tira de clips de la marca aparece arriba como barra de progreso. |
| ~9 – 21 s | Premiere acelerado, mismo plano, las capas se suman una por una. Cada capa avanza el cabezal de la tira y pinta un clip de naranja: **corte** (se van los silencios, la línea de tiempo se achica) → **gancho** (texto arriba) → **zoom y ritmo** → **subtítulos** → **música y sonido**. | "…y nosotros hacemos el resto: cortamos, armamos el gancho, subtítulos, música." | Un rótulo chico por capa (`CORTE`, `GANCHO`, `SUBTÍTULOS`, `MÚSICA`) y el progreso subiendo: 20 % → 40 % → 60 % → 80 %. |
| ~21 – 25 s | El video terminado a pantalla completa, con sonido: es el hook tal como se vio al principio. | "Y queda así." | `EDITADO` · **100 %**: el cabezal llega al final de la tira. |

- **El progreso es la tira del logo:** 4 o 5 clips de tinta con el cabezal, el clip en curso en
  naranja. Es lo mismo que hay debajo del video en la página, así video y página se ven iguales.
- Premiere: ocultá el nombre del proyecto y el panel de archivos si muestran otros clientes (o usá
  un proyecto limpio solo para esto).
- "Y queda así" cierra el círculo con el "¿Querés que tus videos se vean así?" del hook.
- Opcional, si sobra tiempo (~3 s): un pantallazo de Bruto Studio con datos de prueba, "y lo revisás
  desde la app". Si el video pasa de 45 s, se saca.

## 3. Resultados · capítulo "Resultados" (pendiente)

Idea: el gráfico de TikTok Studio de la cuenta nueva (153 mil visitas en el primer mes), recortado
sin avatar, sin nombre y sin "Consultas de búsqueda".

## 4. Cierre (pendiente)

Idea: vos a cámara, "Mandanos el bruto". En pantalla: primer video de prueba gratis + WhatsApp.
