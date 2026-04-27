# Personal Website

Li Yan's personal site — a single-page portfolio styled as a retro CRT terminal (amber phosphor, scanlines, typewriter boot sequence).

## Stack

React 18 + TypeScript, Vite + SWC, Tailwind CSS, Framer Motion, React Router v6.

## Development

```bash
npm install
npm run dev        # localhost:8080
npm run build      # production bundle in dist/
npm run preview    # preview built bundle
```

## Structure

```
personal-site/
├── index.html
├── public/                          # static assets (resume PDF, etc.)
├── src/
│   ├── main.tsx                     # entry
│   ├── App.tsx                      # router
│   ├── index.css                    # CRT theme + tailwind
│   ├── lib/utils.ts                 # cn() helper
│   ├── components/
│   │   ├── TerminalWindow.tsx       # title bar + tabs container
│   │   ├── TerminalPrompt.tsx       # ❯ prompt line
│   │   └── TypewriterText.tsx       # char-by-char animation
│   └── pages/
│       ├── Index.tsx                # main portfolio page
│       └── NotFound.tsx             # 404 fallback
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

Path alias: `@/` → `src/`.

## Editing content

All page content lives in `src/pages/Index.tsx` — the `CONTENT` map drives the
about / skills / projects / contact tabs.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` build with
Vite and publish `dist/` (with a `404.html` SPA fallback) to Pages.
