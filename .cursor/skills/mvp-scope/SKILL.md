---
name: mvp-scope
description: >-
  Enforces Car Diagnostics MVP scope boundaries and extension seams. Use when the
  user asks to add auth, database, CMS, payments, booking, blog posts, per-city SEO
  pages, chatbots, or other features that may be out of MVP scope.
---

# MVP Scope Guardrails

## In scope (MVP)

Lead-generation / demand-validation site for one-person mobile diagnostics (Vila Praia de Âncora / Alto Minho):

- Next.js App Router site, 3 locales (`pt`/`uk`/`en`), shared path slugs  
- Core pages: home, services, pricing, service-area, about, contact, faq  
- Blog **route stub only** (no posts at launch)  
- Config-driven business facts; content dictionaries; WhatsApp-first form  
- SEO metadata, hreflang, sitemap, robots, honest JSON-LD  
- GA4 event abstraction  
- shadcn + brand tokens; sticky mobile CTA  
- Deploy to Vercel  

Full module list: `docs/IMPLEMENTATION.md` §§3, 11–12.

## Explicitly out of scope

Do **not** build unless the user explicitly revises the MVP brief:

- Authentication / admin / customer accounts  
- Database, Prisma, CMS, multilingual CMS  
- Online payments, invoices, CRM  
- Complex booking calendar  
- PDF diagnostic reports / vehicle history  
- AI chatbot  
- Map SDKs, heavy animation frameworks, alternate UI kits (MUI/Chakra)  
- Per-city doorway SEO pages  
- Dozens of thin blog posts  
- ECU coding catalog / full equipment inventory claims  
- Translated URL pathname maps (`pathnames`) for MVP  

## Allowed extension seams (stubs only)

| Seam | Purpose |
|---|---|
| `submitDiagnosticRequest` | Swap WhatsApp redirect for API/email later |
| `src/config/services.ts` | Add services without UI rewrite |
| `blog/` stub + `[slug]` architecture | Real posts later |
| Stable analytics event names | Funnels later |

Implement seams as interfaces/empty routes — not full features.

## Business decisions (config/TODO — not blockers for coding)

Fill before **production launch**, placeholders OK while building:

- Legal/display business name  
- WhatsApp E.164, public phone/email  
- Whether to publish address / geo / hours  
- GA4 ID + Search Console property  
- Final “from” prices  

## Honesty (always)

Equipment may arrive after first validated demand. Copy must stay vehicle/equipment-conditional. SEO must not invent service inventory, reviews, or hours.

## When asked for out-of-scope work

1. State that it is outside MVP per IMPLEMENTATION §11 / brief §26.  
2. Offer the matching extension seam if one exists.  
3. Continue MVP module work unless the user explicitly expands scope.  
