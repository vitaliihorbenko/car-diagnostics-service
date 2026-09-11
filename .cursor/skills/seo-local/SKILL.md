---
name: seo-local
description: >-
  Implements local SEO for the Car Diagnostics MVP: metadata, hreflang, sitemap,
  robots, and JSON-LD. Use when adding generateMetadata, structured data, sitemap,
  robots, Open Graph, Search Console prep, or local SEO copy/titles.
---

# Local SEO & Structured Data

## Goals

Local + service SEO for Alto Minho / Vila Praia de Âncora. Lead gen site — not doorway farms or thin content.

## Metadata (every indexable page)

Use `src/lib/seo/buildMetadata.ts` (or equivalent) from each page’s `generateMetadata`:

- Unique `title` + `description` per **locale × page**
- `alternates.canonical` → current locale URL
- `alternates.languages`: `pt`, `uk`, `en`, and `x-default` → **pt** sibling
- Open Graph title/description; static OG image from config/`public` until dynamic OG exists
- `lang` on `[locale]` layout

### Path rule

Sibling alternates share the **same path segment** after locale:

`/pt/services` ↔ `/uk/services` ↔ `/en/services`

### Title themes (refine in content; do not stuff)

- PT: local service + area (Alto Minho / Âncora / nearby towns as natural)  
- UK: Portugal / Alto Minho framing  
- EN: Northern Portugal / mobile diagnostics  

Keyword themes live in the project brief — guide titles/H1s; never densify body copy.

## Sitemap & robots

- `src/app/sitemap.ts`: all locale × page URLs; no query params or duplicates  
- `src/app/robots.ts`: allow public pages; disallow internals if any appear later  

## JSON-LD (`src/lib/seo/jsonLd.ts` + `<JsonLd />`)

Emit **only real config fields**:

| Type | Where |
|---|---|
| `WebSite` | sitewide |
| `AutomotiveBusiness` or `LocalBusiness` | sitewide (choose at implement time) |
| `Service` | from `config/services` — no invented offers |
| `BreadcrumbList` | inner pages |
| `FAQPage` | prefer **canonical on `/faq`** only (avoid duplicate FAQPage on home) |

### Never emit

- `AggregateRating`, review counts  
- Fake address, hours, geo, certifications, customer counts, “years of experience”  

If a field is still a placeholder in config, omit it from JSON-LD until launch data is real.

## On-page SEO

- One clear `h1` per page  
- Natural mentions of Âncora, Alto Minho, Viana, Caminha, etc.  
- Internal links: Home ↔ Services ↔ Pricing ↔ Service area ↔ Contact  
- **No** per-city microsites  
- **No** translated URL slugs in MVP  

## Checklist before shipping SEO work

- [ ] View-source: canonical + full hreflang set including x-default  
- [ ] Sitemap lists 3 locales × core pages  
- [ ] JSON-LD validates mentally against real config only  
- [ ] No keyword stuffing or capability overclaim in titles/descriptions  
