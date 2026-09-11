---
name: lead-conversion
description: >-
  Builds WhatsApp CTAs, diagnostic request form, sticky mobile CTA, and GA4
  conversion events for the Car Diagnostics MVP. Use when working on contact page,
  forms, wa.me links, tracking events, or conversion UX.
---

# Lead Conversion (WhatsApp + Form + Analytics)

## Funnel

```text
Traffic → Landing → Trust → WhatsApp / Form → Lead → Paid diagnostic (offline)
```

Primary CTA: book/contact flow. Secondary: WhatsApp. No popups/modals for CTAs.

## WhatsApp

- Single helper: `src/lib/whatsapp/createWhatsAppLink.ts` (prefilled message)
- Phone from `src/config/contact.ts` (E.164) — never hardcode `wa.me` URLs in components
- Visible on: hero, pricing, final CTA, sticky mobile bar (if CLS/UX stay healthy)

Prefill should include locale-appropriate greeting + vehicle/problem context when coming from the form.

## Diagnostic request form

- Component: `src/components/contact/DiagnosticRequestForm.tsx` (client)
- Schema + submit: `src/lib/forms/diagnosticRequest.ts` (Zod)
- MVP submit: validate → `submitDiagnosticRequest` → WhatsApp URL (no DB/email required)
- Keep `submitDiagnosticRequest` swappable later (Resend/API) without rewriting UI

### Fields

name, phone/WhatsApp, make, model, year, engine (optional), problem, location, preferred datetime (optional), **honeypot** for basic spam deterrence

### UX

- Short form, large tap targets, labeled inputs  
- Sticky dual CTA must not cover focused form fields (hide sticky while form focused if needed)  
- No intrusive modals  

## Sticky mobile CTA

`StickyMobileCta`: WhatsApp | Book — client component; respect performance/CLS.

## Analytics

Central `src/lib/analytics/` with `track(event, payload)`. GA4 loader only if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set; otherwise no-op.

### Required events

| Event | When |
|---|---|
| `whatsapp_click` | Any WhatsApp CTA |
| `contact_form_start` | User begins the form |
| `contact_form_submit` | Successful submit / WA handoff |
| `phone_click` | Tel link click |
| `pricing_view` | Pricing section/page view |
| `service_area_view` | Service area page/section view |

Components call named helpers (`trackWhatsAppClick`, etc.) — do not scatter raw `gtag` calls.

## Config

Business phone/WhatsApp/email/site URL live in `src/config/*` or env (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`). Never put secrets in client bundles beyond intentional public IDs.
