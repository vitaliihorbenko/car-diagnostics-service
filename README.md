# Car Diagnostics Service

Lead-generation website for a mobile car diagnostics service in Alto Minho (Northern Portugal).

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- `next-intl` (`pt` / `uk` / `en`, shared path slugs)
- shadcn/ui
- Vercel-ready (no database)

## Docs

- [Implementation plan](docs/IMPLEMENTATION.md)
- [Page content (PT/UK/EN)](docs/CONTENT.md)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/pt`).

## Scripts

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (production domain) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (optional) |
| `NEXT_PUBLIC_WHATSAPP_E164` | WhatsApp number digits (E.164 without `+`) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Optional public phone display |
| `NEXT_PUBLIC_PHONE_TEL` | Optional `tel:` value |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional public email |

Business copy and prices live in `src/content/*` and `src/config/*`.

## Deploy (Vercel)

1. Push the repo and import the project in Vercel.
2. Set production env vars (`NEXT_PUBLIC_SITE_URL`, WhatsApp, GA4).
3. Deploy and verify `/pt`, `/uk`, `/en`, `/sitemap.xml`, `/robots.txt`.
4. Confirm a WhatsApp CTA opens with the correct number.
5. Add the property in Google Search Console and submit the sitemap.
6. Create/link Google Business Profile offline (do not invent hours/reviews in JSON-LD).

## Launch checklist

- [ ] Replace provisional brand name if needed
- [ ] Set real WhatsApp E.164
- [ ] Confirm “from” prices in `src/config/pricing.ts`
- [ ] Native review of PT (European) and UK copy
- [ ] Lighthouse mobile pass (Perf ≥90, SEO ≥95, A11y ≥90)
