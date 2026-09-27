# SPEC 01 — Feed estático como home (/)

> **Status:** Aprobado
> **Depends on:** ninguna
> **Date:** 2026-09-27
> **Objective:** Recrear `references/pantallas/feed.dc.html` como página home (`/`) con datos mock estáticos y fidelidad visual al mockup, sin auth ni base de datos.

## Scope

**In:**

- Reemplazo del boilerplate de `app/page.tsx` por el feed del mockup.
- `app/layout.tsx`: fuentes Fredoka + Nunito vía `next/font/google`, `lang="es"`, metadatos "OpenDayCare".
- `app/globals.css`: paleta cálida como tokens en `@theme` (Tailwind v4), scrollbar personalizada, sin dark mode.
- `components/icons.tsx`: iconos SVG inline del mockup (sol, home, niños, campana, usuario, cámara, corazón, mensaje, logout, megáfono, foto).
- `components/sidebar.tsx`: aside de 248px (logo, botón "Nueva publicación", nav con Feed activo, footer de usuario) con enlaces visuales inertes.
- `components/post-card.tsx`: tarjeta de post (avatar, autor, hora, badge de tipo, audiencia, texto, placeholder de foto opcional, likes, comentarios, "Editar").
- `lib/mock-data.ts`: tipos (`Post`, `PostType`) y los 3 posts del mockup.
- Verificación visual lado a lado contra el `.dc.html`.

**Out of scope (for future specs):**

- Auth, base de datos, persistencia.
- Rutas de Niños, Avisos, Mi cuenta, crear/detalle publicación y logout (enlaces inertes).
- Interactividad de likes/comentarios/editar (todo visual).
- Responsive móvil/tablet.
- Fecha dinámica (texto fijo del mockup).

## Data model

`lib/mock-data.ts`:

```ts
export type PostType = "achievement" | "activity" | "announcement";

export type Post = {
  id: string;
  author: string;          // "Mateo" | "Anuncio general"
  avatar: { kind: "initial"; bg: string; fg: string; text: string }
        | { kind: "icon" }; // megáfono del anuncio
  time: string;            // "14:20"
  publishedBy: string;      // "publicado por vos"
  audience: string;        // "Para: familia de Mateo" | "Para: toda la sala"
  type: PostType;
  text: string;
  photoCaption?: string;   // solo actividad: "Foto · pintando con témperas"
  likes: number;           // 3 | 5 | 8
  comments: number;        // 1 | 2 | 0
};

export const user = { name: "Caro Giménez", role: "Maestra · Soles", initial: "C" };
export const classroom = { name: "Sala Soles", childrenCount: 12, dateLabel: "martes 17 jun" };
export const posts: Post[] = [/* los 3 posts del mockup */];
```

## Implementation plan

1. Leer `node_modules/next/dist/docs/` (fonts, layout, App Router): Next 16.3.6 tiene breaking changes frente a versiones conocidas (aviso de AGENTS.md).
2. `app/globals.css`: eliminar theme/dark-mode por defecto; tokens `@theme` con la paleta exacta (#F6ECDF fondo, #FFFDF9 tarjetas, #ECE0D0 bordes, #3F362E texto, coral #D9583C/#EE8164, badges); `--font-sans`/`--font-display` vía `@theme inline` (patrón ya existente); scrollbar webkit. El sistema sigue funcionando.
3. `app/layout.tsx`: Nunito + Fredoka con `next/font/google` (`--font-nunito`/`--font-fredoka`), `lang="es"`, `metadata` con título "OpenDayCare", body con fondo crema y `font-sans`. Manual: `npm run dev`, `/` carga con tipografías nuevas.
4. `lib/mock-data.ts`: tipos + datos de los 3 posts, usuario y sala.
5. `components/icons.tsx`: iconos SVG copiados del mockup con props mínimas de tamaño.
6. `components/sidebar.tsx`: aside sticky de 248px; enlaces `<a>` sin `href` (inertes). Manual: nada navega.
7. `components/post-card.tsx`: tarjeta completa, badge por `type` con colores exactos, bloque de foto si `photoCaption` existe.
8. `app/page.tsx`: shell (flex + sidebar + main `h-screen overflow-y-auto` con contenido `max-w-[760px]` centrado), saludo, composer rápido, divisor "PUBLICADO HOY", `posts.map(PostCard)`.
9. Verificación: `/` vs `references/pantallas/feed.dc.html` lado a lado; `npm run lint`; `npx tsc --noEmit`.

## Acceptance criteria

- [ ] `/` renderiza sin errores de consola con `npm run dev`.
- [ ] Fondo general #F6ECDF; el modo oscuro por defecto de create-next-app fue eliminado.
- [ ] `<html>` declara `lang="es"` y las fuentes activas son Nunito (cuerpo) y Fredoka (títulos) servidas por next/font.
- [ ] El sidebar replica el mockup: logo OpenDayCare · Sala Soles, botón "Nueva publicación", Feed activo (#FBE3D8/#D9583C), Niños/Avisos/Mi cuenta inactivos, footer "Caro Giménez · Maestra · Soles" + logout.
- [ ] Ningún enlace navega; no existen rutas nuevas más allá de `/`.
- [ ] El encabezado muestra exactamente "GUARDERÍA · SALA SOLES", "Buenas, Caro" y "12 niños · martes 17 jun".
- [ ] Los 3 posts provienen de `lib/mock-data.ts`: badges LOGRO (#CFEBD8/#3E9B6C), ACTIVIDAD (#C7E7F1/#2E89A6), ANUNCIO (#CCD8F4/#4E72C8); likes 3/5/8 y comentarios 1/2/0.
- [ ] El post de ACTIVIDAD muestra el placeholder punteado "Foto · pintando con témperas".
- [ ] Ningún archivo del feature declara `"use client"`.
- [ ] `npm run lint` y `npx tsc --noEmit` pasan sin errores.
- [ ] Todos los identificadores del código están en inglés y todos los textos visibles están en español.
- [ ] Comparación visual lado a lado contra el mockup sin diferencias evidentes (espaciados, sombras, radios, gradientes).

## Decisions

- **Sí:** Tailwind v4 con tokens en `@theme` de `globals.css`. Coherente con el setup CSS-first del proyecto.
- **No:** inline styles literales o CSS modules. Ajenos al stack y difíciles de mantener.
- **Sí:** `next/font/google` para Fredoka + Nunito (reemplazan a Geist). Sin `<link>` externos ni FOUT.
- **Sí:** iconos SVG inline como componentes. Sin dependencia nueva (lucide-react descartado: el mockup define sus propios SVG).
- **Sí:** enlaces del sidebar inertes. Las rutas reales llegan con la spec de cada pantalla.
- **Sí:** 100% server components. Suficiente para un mock estático.
- **Sí:** fecha y contadores estáticos tal cual el mockup.
- **No:** dark mode. El mockup es solo light.
- **No:** responsive móvil. Sin mockup de referencia; otra spec.
- **No:** rutas stub. El alcance queda en `/`.
- **Sí:** identificadores (tipos, variables, funciones, componentes) en inglés; textos de UI y datos mock en español. Regla de AGENTS.md.

## Risks

| Riesgo | Mitigación |
| --- | --- |
| Next 16.3.6 con breaking changes frente a versiones conocidas | Paso 1: leer `node_modules/next/dist/docs/` antes de tocar `layout.tsx`. |
| Pérdida de fidelidad al traducir inline styles a Tailwind (sombras, gradientes, letter-spacing) | Arbitrary values exactos del mockup; verificación final lado a lado. |
| `@theme` con variables de fuentes de next/font | Mantener el patrón `@theme inline` ya presente en `globals.css`. |

## What is **not** in this spec

- Auth, base de datos o persistencia.
- Pantallas Niños, Avisos, Mi cuenta, crear/detalle publicación y logout.
- Interactividad de likes/comentarios/editar.
- Responsive móvil/tablet y fecha dinámica.
