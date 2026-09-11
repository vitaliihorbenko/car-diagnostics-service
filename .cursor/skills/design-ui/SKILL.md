---
name: design-ui
description: >-
  Applies the Car Diagnostics MVP design system: brand tokens, shadcn/ui usage,
  typography, hero/layout rules, and motion budget. Use when styling pages,
  adding UI components, theming globals.css, or building marketing sections.
---

# Design System (UI)

## Visual direction

Light-first, automotive / technical / trustworthy local service. Credible for a €30–70 mobile diagnostic — not racing chrome, not “AI startup”.

### Locked look

| Token | Direction |
|---|---|
| Mode | Light-first |
| Neutrals | Cool steel |
| Primary | Deep workshop blue |
| Accent | Amber/signal for WhatsApp/CTA emphasis |
| Type | **Sora** (headings) + **Manrope** (body) via `next/font`; mono sparingly for prices/codes |
| Atmosphere | Subtle technical grid or soft radial wash — not flat white; real workshop photo later as full-bleed hero |

### Avoid

Purple-on-white / purple–indigo gradients; cream + terracotta serif; broadsheet dense columns; dark-glow; racing aesthetics; fake dashboards; emoji clutter; rounded-full pill clusters; multi-layer shadows.

## shadcn/ui

- Theme CSS variables in `globals.css` to project tokens — do not ship default shadcn look unchanged  
- Prefer shadcn for interactive/form/a11y UI: button, input, label, textarea, select, accordion, sheet/nav, separator  
- `card` sparingly — marketing sections are custom composition, not a card dashboard  
- Custom layout primitives beside shadcn: `Container`, `Section`, `Heading` under `src/components/ui/` or layout  

## Composition rules

- First viewport = one composition (not a dashboard)  
- Brand-forward hero: brand, one headline, one short support line, one CTA group, one dominant visual plane  
- Hero answers: what / where / from-price / how to contact  
- No hero overlays (badges, chips, floating stickers)  
- No stat strips or fake social proof in the hero  
- One job per section: one purpose, one headline, usually one short supporting sentence  

## Motion

2–3 intentional effects only (e.g. hero fade/slide, CTA hover, sticky bar entrance). No heavy animation libraries beyond shadcn/Radix needs.

## Accessibility & performance

- Focus rings; text/CTA contrast ≥ WCAG AA  
- Semantic landmarks; one `h1` per page; labeled inputs; keyboard-usable mobile nav  
- RSC default; `next/image`; font subsetting; minimal client JS  
- Targets: Lighthouse Perf ≥90, SEO ≥95, A11y ≥90 (mobile)  

## Config-driven UI

Never hardcode € amounts or phone numbers in components — read `src/config/pricing.ts` / `contact.ts`. Copy from `src/content/*`.
