---
name: content-i18n
description: >-
  Authors and wires localized copy for the Car Diagnostics MVP (pt/uk/en). Use when
  editing marketing text, FAQ, metadata strings, form labels, nav/CTAs, content files
  under src/content, next-intl messages, or translating pages.
---

# Content & i18n

## Source of truth

- Page copy, metadata, FAQ, form labels: `docs/CONTENT.md`
- Routing / loaders: `docs/IMPLEMENTATION.md` §§2, 7
- Map CONTENT into `src/content/{pt,uk,en}/` + shared chrome messages — **never hardcode marketing copy in JSX**

## Locales

| Code | Language rules |
|---|---|
| `pt` | European Portuguese only (not Brazilian) |
| `uk` | Natural Ukrainian |
| `en` | Clear international English for residents/expats in Northern Portugal |

Do not mechanically translate PT→UK/EN. Each file must read as native-quality.

## URL paths

Shared English slugs after locale prefix only:

`/`, `/services`, `/pricing`, `/service-area`, `/about`, `/contact`, `/faq`, `/blog`

Locale switcher: same path, new prefix (`/pt/services` → `/uk/services`).

## Honesty rules (non-negotiable)

- Never claim: “all brands”, “always available”, “guaranteed fix”, “best”, “expert”, “#1”
- Keep the capability disclaimer wherever diagnostic scope is described
- Prefer “from” pricing; include pricing disclaimer near prices
- Do not invent reviews, hours, address, certifications, or equipment inventory

### Shared disclaimers (must match CONTENT.md)

- Capability: functions depend on make, model, year, and diagnostic equipment  
- Pricing: final price may depend on vehicle, location, and complexity  

## CTA keys

| Key | Role |
|---|---|
| `cta.book` | Primary → contact/book flow |
| `cta.whatsapp` | Secondary → WhatsApp deep link |

Sticky bar uses `sticky.book` / `sticky.whatsapp`.

## Content layout

```text
src/content/
  pt|uk|en/
    home.ts
    services.ts
    pricing.ts
    serviceArea.ts
    about.ts
    contact.ts
    faq.ts
    common.ts   # nav, CTAs, disclaimers, footer
```

- Prices/amounts come from `src/config/pricing.ts` — content holds labels/disclaimers only  
- Service ids from `src/config/services.ts`  
- Towns from `src/config/locations.ts`  
- Placeholders (`[WhatsApp]`, brand name) resolve from config at render time  

## When editing copy

1. Update CONTENT.md if the string is still the editorial source, **or** update the TS content module if already migrated — keep them aligned.  
2. Change all three locales together for the same key.  
3. Preserve local entity names naturally (Âncora, Alto Minho, Viana do Castelo, etc.) — no keyword stuffing.  

## Blog

MVP: route stub only. No posts at launch. Do not mass-generate thin SEO articles.
