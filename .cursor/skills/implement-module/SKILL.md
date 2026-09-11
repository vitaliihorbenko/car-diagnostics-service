---
name: implement-module
description: >-
  Implements Car Diagnostics MVP features module-by-module per docs/IMPLEMENTATION.md.
  Use when scaffolding, building pages, adding config/lib modules, advancing the build
  sequence, or when the user asks to implement the next module or continue MVP work.
---

# Implement Module (Car Diagnostics MVP)

## Source of truth

1. Read `docs/IMPLEMENTATION.md` for architecture, modules, file tree, and sequence.
2. Read `docs/CONTENT.md` before any marketing/UI copy.
3. Read `AGENTS.md` / Next.js docs under `node_modules/next/dist/docs/` before Next APIs.

Do not invent scope beyond those docs.

## Workflow

Implement **one module at a time**. Do not skip ahead while the app is broken.

```
Progress:
- [ ] Implement only the current module’s files
- [ ] No hardcoded business facts or marketing copy in JSX
- [ ] lint + tsc + build pass
- [ ] Spot-check affected locale routes (`/pt`, `/uk`, `/en` + path)
- [ ] Only then advance
```

### Gates (every major module)

```bash
npm run lint
npx tsc --noEmit
npm run build
```

### Sequence (section 12)

1. Foundation + Tailwind + config skeleton  
2. i18n + layout shell  
3. Design tokens + UI primitives  
4. Home (full sections)  
5. Services → Pricing → Service area → About → FAQ → Contact  
6. SEO + JSON-LD + sitemap/robots  
7. Analytics + sticky CTA polish  
8. A11y/perf + Lighthouse  
9. Vercel deploy + env + launch checklist  

## Locked stack

- Next.js App Router, TypeScript, Tailwind, `next-intl`, shadcn/ui, Zod
- Server Components by default; Client only for locale switcher, sticky CTA, form, analytics hooks
- No DB, auth, CMS, admin, payments, booking calendar, map/chatbot SDKs, translated URL path maps

## Routing (locked)

- Locales: `pt` (default) | `uk` | `en` with `localePrefix: 'always'`
- **Shared English path segments** after locale (e.g. `/pt/services`, `/uk/services`)
- Multilingual SEO via `hreflang` / `alternates.languages`, not translated slugs

## Architecture rules

| Concern | Location |
|---|---|
| Business facts | `src/config/*` |
| Marketing copy | `src/content/{pt,uk,en}/*` |
| Chrome strings | i18n messages / `common` content |
| WhatsApp URLs | `src/lib/whatsapp/createWhatsAppLink.ts` |
| Form submit | `src/lib/forms/diagnosticRequest.ts` → WhatsApp for MVP |
| SEO helpers | `src/lib/seo/*` |
| Analytics | `src/lib/analytics/*` via `track()` |

Components receive strings/props — never hardcode € amounts, phones, or page copy.

## Before coding a page

1. Confirm module number and allowed files from IMPLEMENTATION.md.  
2. Pull copy from CONTENT.md into the matching content module.  
3. Wire config ids (services, pricing, locations) — do not duplicate amounts in content.  
4. Add `generateMetadata` when the page is indexable.

## Out of scope during implementation

If asked mid-build for auth, DB, CRM, per-city doorway pages, thin blog posts, ECU catalogs, or AI chat — refuse and point to `mvp-scope` / IMPLEMENTATION §11. Keep extension seams only (`submitDiagnosticRequest`, `config/services.ts`, blog stub).
