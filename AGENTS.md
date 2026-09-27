<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

- Next.js 16.3.6 App Router + React 19 + TypeScript (strict). All app code is in `app/` — still mostly create-next-app boilerplate.
- Package manager: **npm** (`package-lock.json`; no yarn/pnpm/bun lockfile).
- Path alias `@/*` → repo root.
- Tailwind CSS v4 is CSS-first: configured in `app/globals.css` (`@import "tailwindcss"`, `@theme`) via `postcss.config.mjs`. There is **no** `tailwind.config.js`.
- `CLAUDE.md` is just `@AGENTS.md` — this file is the single source of instructions.

## Commands

- `npm run dev` — dev server. It (re)writes the Next.js block above; commit it with your changes to keep the tree clean.
- `npm run lint` — ESLint flat config (`eslint.config.mjs`, `eslint-config-next`).
- `npx tsc --noEmit` — typecheck (no npm script; `next build` also typechecks).
- **There is no test suite and no test runner installed.** Verify with lint + typecheck; don't go looking for tests.

## UI work

- Design source of truth: `references/pantallas/*.dc.html` — static mockups (login, feed, crear-publicación, niños, avisos, …). Open them in a browser; rendered versions in `references/screenshots/`.
- Styling should follow the mockups (Fredoka/Nunito, warm palette), not Next.js/Tailwind defaults.

## MCPs / tooling

- Playwright Screenshots y cualquier cosa relacionada a este MCP tiene que estar en la carpeta .playwright-mcp
- context7 para traer la documentacion actualizada del framework
- For large features, use the installed `spec` skill before writing code.

## Spect Driven Development - Skills
- /spec usaremos esta habilidad para crear las especificaciones
- /spec-impl usaremos esta skill para hacer las implementaciones


## Reglas del codigo
- Usar codigo limpio, 
- nombre de variables, funciones, etc en ingles