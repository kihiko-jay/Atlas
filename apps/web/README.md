# @atlas/web

Next.js 16 frontend for the Atlas platform.

## Stack

| Concern | Library |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first) |
| Components | shadcn/ui pattern (Radix UI + CVA) |
| Icons | Lucide React |
| Font | Geist (Sans + Mono) |
| Theme | next-themes (light / dark / system) |
| Testing | Jest 30 + Testing Library |

## Development

```bash
pnpm dev         # start dev server (port 3000)
pnpm build       # production build
pnpm typecheck   # type-check without emit
pnpm test        # run unit tests
```

## Structure

```
src/
  app/               # Next.js App Router
    (shell)/         # Shell layout — Header + Sidebar + Footer
      app/
      workspace/
      settings/
    auth/
    layout.tsx        # Root layout (fonts, theme provider)
    page.tsx          # Landing page
  components/
    layout/           # ThemeProvider, Header, Sidebar, Footer
    ui/               # Base UI primitives (Button, …)
    forms/
    navigation/
    feedback/
  lib/
    utils.ts          # cn() helper
  styles/
    globals.css       # Tailwind v4 + CSS variable tokens
```

## Sprint

Sprint 0.3 — Frontend Foundation. No business logic, no auth, no API calls.
