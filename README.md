# Clínica Meridiano — Sitio web

Sitio web para clínica privada construido con Next.js 15 (App Router), TypeScript,
Tailwind CSS y Framer Motion. Enfocado en generar citas médicas mediante
formulario y WhatsApp.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
```

Edita `.env.local` con tus propios datos (ver sección de variables de entorno).

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Desplegar en Netlify

El proyecto ya está listo para Netlify (`netlify.toml` incluido con el
plugin oficial `@netlify/plugin-nextjs`, que soporta App Router, rutas
dinámicas como `/especialidades/[slug]` y el endpoint `/api/contact` como
función serverless).

**Opción A — Netlify CLI (recomendada para probar antes de conectar Git):**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build
```

Cuando el resultado se vea bien, publica a producción:

```bash
netlify deploy --build --prod
```

**Opción B — Desde el dashboard de Netlify:**

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. En Netlify: **Add new site → Import an existing project** y selecciona
   el repositorio.
3. Netlify detecta automáticamente `netlify.toml` — no necesitas cambiar el
   build command ni el publish directory.
4. En **Site settings → Environment variables**, agrega las mismas
   variables de `.env.example` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
   `SMTP_PASS`, `CONTACT_TO_EMAIL`, y opcionalmente `NEXT_PUBLIC_GA_ID` /
   `NEXT_PUBLIC_META_PIXEL_ID`).
5. Despliega.

**Notas:**
- No cambies el `publish` de `netlify.toml` ni agregues `output: "export"`
  en `next.config.ts` — el sitio necesita renderizado en servidor para el
  endpoint `/api/contact`, y el plugin de Netlify ya se encarga de
  convertirlo en funciones serverless.
- El dominio `.netlify.app` que te asignen funciona igual para probar;
  puedes conectar tu propio dominio después desde **Domain settings**.

## Variables de entorno

| Variable | Descripción | Obligatoria |
|---|---|---|
| `SMTP_HOST` | Servidor SMTP para enviar los correos del formulario de citas | Para envío de correo |
| `SMTP_PORT` | Puerto SMTP (587 o 465) | Para envío de correo |
| `SMTP_USER` | Usuario SMTP | Para envío de correo |
| `SMTP_PASS` | Contraseña o app password SMTP | Para envío de correo |
| `CONTACT_TO_EMAIL` | Correo que recibe las solicitudes de cita | Para envío de correo |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics (formato `G-XXXXXXXXXX`) | Opcional |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID de Meta Pixel | Opcional |

Si no configuras las variables SMTP, el endpoint `/api/contact` seguirá
funcionando y registrará la solicitud en los logs del servidor en lugar de
enviar el correo, para que puedas probar el formulario sin credenciales.

## Estructura del proyecto

```
src/
  app/
    layout.tsx        Layout raíz, fuentes, SEO, Analytics
    page.tsx           Ensambla las secciones de la página principal
    globals.css         Tokens de diseño y estilos base
    api/contact/route.ts  Endpoint que procesa el formulario de citas
  components/
    Navbar.tsx           Menú fijo
    Hero.tsx              Sección principal
    Specialties.tsx        Especialidades médicas
    UrgencyBanner.tsx        Banner de urgencias con llamada rápida
    ContactSection.tsx        Formulario + información + Google Maps
    FAQ.tsx                     Preguntas frecuentes (acordeón)
    WhatsAppButton.tsx            Botón flotante de WhatsApp
    Footer.tsx
    Analytics.tsx                  Google Analytics + Meta Pixel
    VitalLine.tsx                   Elemento visual de firma (línea animada)
  lib/
    site-data.ts                     Datos del sitio: contacto, especialidades, FAQ
```

## Imágenes de especialidades

Cada especialidad tiene una imagen en tres lugares del sitio: la tarjeta de
vista previa en el home, la tarjeta en `/especialidades` y la imagen grande
en la página de detalle. Por ahora incluí una imagen de marcador de posición
(SVG con el nombre de la especialidad) para que el sitio se vea completo
desde el primer momento.

**Para poner tus propias fotos:**

1. Coloca tu imagen dentro de `public/images/especialidades/`. Puede ser
   `.jpg`, `.png` o `.webp`. Ejemplo: `public/images/especialidades/cardiologia.jpg`.
2. Abre `src/lib/site-data.ts` y actualiza el campo `image` de esa
   especialidad con la ruta nueva:

   ```ts
   {
     id: "cardiologia",
     image: "/images/especialidades/cardiologia.jpg",
     ...
   }
   ```

3. Guarda. Si el proyecto está corriendo con `npm run dev`, la imagen se
   actualiza sola.

Recomendaciones:
- Usa fotos horizontales, idealmente de al menos 1200×900 px, para que se
  vean nítidas tanto en las tarjetas como en la imagen grande de cada página.
- Si el archivo no existe o el nombre no coincide, el sitio no se rompe:
  automáticamente muestra las iniciales de la especialidad sobre un fondo de
  color mientras corriges la ruta.
- Si terminas usando solo JPG/PNG/WEBP (ninguna imagen SVG), puedes quitar el
  bloque `dangerouslyAllowSVG` de `next.config.ts`; ese ajuste solo existe
  para permitir los marcadores de posición SVG incluidos por defecto.

## Personalización de contenido

Todos los datos de contacto, especialidades y preguntas frecuentes están
centralizados en `src/lib/site-data.ts`. Edita ese archivo para actualizar:

- Teléfono, WhatsApp, correo, dirección y horarios
- El enlace embebido de Google Maps (`mapsEmbedSrc`)
- La lista de especialidades médicas
- Las preguntas frecuentes

## Notas sobre el diseño

- Paleta: papel cálido (`#FAF9F5`), tinta azul-marino (`#12283D`), verde pino
  (`#2F6F62`) como acento principal y ámbar (`#E8A33D`) reservado para
  urgencias y llamados a la acción de alta prioridad.
- Tipografía: Fraunces (display) + Public Sans (texto) + IBM Plex Mono
  (etiquetas/eyebrows), cargadas vía `next/font/google`.
- Elemento de firma: una línea de "signos vitales" (`VitalLine.tsx`) que se
  dibuja una sola vez al entrar en el viewport, usada con moderación como
  divisor entre secciones clave.
