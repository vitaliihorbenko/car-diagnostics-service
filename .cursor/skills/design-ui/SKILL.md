---
name: design-ui
description: >-
  Applies the Car Diagnostics MVP design system: brand tokens, shadcn/ui usage,
  typography, hero/layout rules, and motion budget. Use when styling pages,
  adding UI components, theming globals.css, or building marketing sections.
---

# Design System (UI)

## Visual direction

Modern dark automotive UI for a trustworthy €30–70 mobile diagnostic — deep navy charcoal, mint/teal neon CTAs. Credible and local — not racing chrome, not fake “AI startup” glow spam, not invented social proof.

### Locked look

| Token | Direction |
|---|---|
| Mode | Dark navy charcoal (sitewide) |
| Neutrals | Near-black navy background, elevated dark cards, subtle borders |
| Primary / CTA | Mint/teal neon (~`#2dd4a8`) with dark text on solid buttons |
| Secondary | Outline on dark for WhatsApp / secondary actions |
| Type | **Sora** (headings) + **Manrope** (body) + **Caveat** (script notes) via `next/font`; mono sparingly for prices |
| Atmosphere | Soft radial / vignette (`.hero-glow`); real photos in `public/images/` (hero car/tablet, wireframe, coastal road, footer road); SVG mark + map in `public/brand/` |

### Avoid

Purple-on-white / purple–indigo gradients; cream + terracotta serif; broadsheet dense columns; multi-layer neon glow; racing aesthetics; emoji clutter; fake testimonials or star ratings; claims like “dealer-level” / “all brands” / “expert/best”.

## shadcn/ui

- Theme CSS variables in `globals.css` to project tokens — do not ship default light shadcn look  
- Prefer shadcn for interactive/form/a11y UI: button, input, label, textarea, select, accordion, sheet/nav, separator  
- Cards sparingly — use for pricing tiers, problem tiles, area summary when interaction or comparison needs a container  
- Custom layout primitives: `Container`, `Section`, `Heading`

## Composition rules

- First viewport = one composition (not a dashboard)  
- Brand-forward hero: brand/eyebrow, one headline, one short support line, one CTA group, one dominant visual plane  
- Hero answers: what / where / from-price / how to contact  
- No fake badges, review chips, or floating stickers  
- Short honest trust strip (3 items) is OK if copy is real  
- One job per section: one purpose, one headline, usually one short supporting sentence  

## Motion

2–3 intentional effects only (e.g. hero fade/slide, CTA hover, sticky bar entrance). No heavy animation libraries beyond shadcn needs.

## Accessibility & performance

- Focus rings; text/CTA contrast ≥ WCAG AA (green on dark, dark text on green)  
- Semantic landmarks; one `h1` per page; labeled inputs; keyboard-usable mobile nav  
- RSC default; `next/image`; font subsetting; minimal client JS  
- Targets: Lighthouse Perf ≥90, SEO ≥95, A11y ≥90 (mobile)  

## Config-driven UI

Never hardcode € amounts or phone numbers in components — read `src/config/pricing.ts` / `contact.ts`. Copy from `src/content/*`.
