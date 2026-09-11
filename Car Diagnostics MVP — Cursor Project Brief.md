# Car Diagnostics Service — MVP Project Brief

## 1. Project Overview

Build a modern, fast, SEO-friendly website for a local mobile car diagnostics service in Northern Portugal.

The business will initially focus on computer diagnostics and automotive electronic diagnostics, with the possibility of expanding later into auto electrical services and mechanical repairs.

The initial target area is Alto Minho / Northern Portugal, with the main base in Vila Praia de Âncora.

The website must support three languages:

- Portuguese (primary SEO/business language)
- Ukrainian (important target audience)
- English (secondary international/expat audience)

The primary goal of the MVP is **lead generation and demand validation**, not building a large corporate website.

The website should encourage visitors to contact the business via WhatsApp or submit a short diagnostic request form.

---

# 2. Important Business Context

The service is initially operated by one person.

The owner is a Full-Stack Developer and automotive enthusiast who will provide mobile/on-site diagnostic services.

The initial business model:

- Basic diagnostic: from €30
- Full diagnostic: approximately €40–50
- Mobile/on-site diagnostic: from approximately €50
- Pre-purchase vehicle diagnostics: potentially €70+

Exact pricing should be configurable and easy to change later.

Do NOT hard-code pricing deeply into components.

The diagnostic equipment may initially be purchased only after the first validated customer demand.

Therefore, the website must be designed to generate leads even before the business has a large installed equipment base.

Do not make claims about specific diagnostic capabilities that cannot be guaranteed for every vehicle.

Use wording such as:

"Available functions depend on vehicle make, model, year and equipment."

---

# 3. MVP Goals

The MVP must:

1. Establish a professional local presence.
2. Generate WhatsApp inquiries.
3. Generate diagnostic booking requests.
4. Target Portuguese-speaking customers.
5. Target Ukrainian customers living in Northern Portugal.
6. Be optimized for local SEO.
7. Be extremely fast on mobile.
8. Be easy to expand later.
9. Provide a clean foundation for Google Search Console and Analytics.
10. Allow future expansion into auto electrical diagnostics and mechanical services.

The MVP should NOT become over-engineered.

Avoid unnecessary backend infrastructure unless it is clearly justified.

---

# 4. Recommended Technology Stack

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- next-intl or another well-maintained internationalization solution
- React
- Server Components by default
- Client Components only when necessary
- Metadata API
- JSON-LD structured data
- sitemap.xml
- robots.txt

Prefer static/server-rendered pages wherever possible.

The site should be deployable to Vercel.

Do not introduce a database for the MVP unless there is a strong technical reason.

---

# 5. Internationalization

Supported locales:

```text
pt
uk
en
```

Portuguese should be the default locale.

Recommended URL structure:

```text
/pt/
/uk/
/en/
```

Example:

```text
/pt/servicos/
/uk/poslugy/
/en/services/
```

Use proper `hreflang` relationships between translated pages.

Each translated page must have:

- correct `lang`
- canonical URL
- alternate language URLs
- localized metadata
- localized Open Graph metadata where appropriate

Do not simply translate Portuguese content mechanically.

Each language should sound natural to a native speaker.

Portuguese should be European Portuguese, NOT Brazilian Portuguese.

---

# 6. Website Information Architecture

Keep the MVP relatively small.

## Core pages

### Home

```text
/[locale]/
```

Main landing page and primary conversion page.

Sections:

1. Hero
2. Main value proposition
3. Diagnostic services
4. Common problems
5. How the service works
6. Service area
7. Pricing
8. Why choose this service
9. FAQ
10. Final CTA
11. Footer

---

### Services

```text
/[locale]/services/
```

Localized equivalents:

```text
/pt/servicos/
/uk/poslugy/
/en/services/
```

Services to cover:

- Computer diagnostics
- Engine / Check Engine diagnostics
- ABS diagnostics
- Airbag / SRS diagnostics
- Transmission diagnostics
- Automotive electrical diagnostics
- Live data analysis
- Fault code analysis
- Pre-purchase vehicle diagnostics
- Mobile/on-site diagnostics

Do not claim that every function is available on every vehicle.

Clearly explain that capabilities depend on vehicle model and diagnostic equipment.

---

### Pricing

```text
/[locale]/pricing/
```

Localized equivalents.

Pricing should be displayed clearly but with "from" pricing where appropriate.

Example:

```text
Basic Diagnostics — from €30
Full Diagnostics — from €45
Mobile Diagnostics — from €50
Pre-Purchase Diagnostics — from €70
```

Add a note:

"Final price may depend on vehicle, location and diagnostic complexity."

Pricing must be stored in a central configuration/data structure rather than duplicated throughout components.

---

### Service Area

```text
/[locale]/service-area/
```

Do NOT create a separate SEO page for every city.

The main service area page should cover:

- Vila Praia de Âncora
- Caminha
- Viana do Castelo
- Vila Nova de Cerveira
- Valença
- Ponte de Lima
- surrounding Alto Minho areas

Explain that mobile/on-site availability depends on distance and appointment schedule.

The content should naturally mention the service area without keyword stuffing.

---

### About

```text
/[locale]/about/
```

Explain:

- who provides the service
- based in Vila Praia de Âncora
- automotive interest and practical experience
- technical background
- focus on transparent diagnostics
- communication in Portuguese, Ukrainian and English

The page should build trust.

Avoid exaggerated claims such as "expert", "best", "number one", etc. unless supported by evidence.

---

### Contact

```text
/[locale]/contact/
```

Primary contact method:

WhatsApp.

Also include a short diagnostic request form.

Form fields:

- Name
- WhatsApp / phone
- Vehicle make
- Vehicle model
- Year
- Engine (optional)
- Problem / warning light
- Location
- Preferred date/time (optional)

The MVP does not necessarily need a database.

Possible implementation:

- WhatsApp CTA
- mailto/email submission
- or a lightweight form service

Keep the architecture easy to replace with a real backend later.

---

### FAQ

FAQ can initially be a section on the Home page.

Optionally create:

```text
/[locale]/faq/
```

if it provides real SEO/user value.

Questions should include:

- What is computer car diagnostics?
- What problems can you diagnose?
- Can you diagnose ABS?
- Can you diagnose Airbag/SRS?
- Can you diagnose automatic transmissions?
- Can you come to my location?
- How much does diagnostics cost?
- Do I need to bring the car to a workshop?
- Can you clear diagnostic errors?
- Can you diagnose a car before purchase?
- Which car brands do you support?

Answers must avoid promising unsupported functionality.

---

# 7. Blog / SEO Content

Blog should NOT be required for the initial MVP launch.

However, the architecture must support it.

Recommended future structure:

```text
/[locale]/blog/
/[locale]/blog/[slug]
```

Initial article ideas:

### Portuguese

- Luz ABS acesa: o que significa?
- Luz do motor acesa: posso continuar a conduzir?
- O que é um diagnóstico automóvel?
- Quando fazer um diagnóstico ao carro?
- Diagnóstico automóvel antes de comprar um carro usado
- Erros OBD2: o que significam?
- Sensor ABS avariado: sintomas e diagnóstico

### Ukrainian

- Загорівся ABS: що це означає?
- Загорівся Check Engine: чи можна їхати?
- Що таке комп'ютерна діагностика автомобіля?
- Діагностика авто перед купівлею в Португалії
- Як зрозуміти помилки OBD2?

### English

Equivalent topics written naturally for English-speaking users.

Do not create large amounts of thin AI-generated SEO content.

Prioritize useful, original, locally relevant content.

---

# 8. SEO Strategy

The primary SEO strategy should be local + service-based.

Important keyword themes:

Portuguese:

- diagnóstico automóvel
- diagnóstico carro
- diagnóstico automóvel Viana do Castelo
- diagnóstico automóvel Caminha
- diagnóstico automóvel Vila Praia de Âncora
- diagnóstico automóvel Alto Minho
- diagnóstico automóvel ao domicílio
- diagnóstico OBD2
- diagnóstico ABS
- diagnóstico carro antes de comprar

Ukrainian:

- комп'ютерна діагностика авто Португалія
- діагностика авто Португалія
- діагностика автомобіля Viana do Castelo
- діагностика авто Caminha
- діагностика авто Vila Praia de Âncora

English:

- car diagnostics Northern Portugal
- car diagnostics Viana do Castelo
- mobile car diagnostics Portugal
- car diagnostic service Portugal
- car diagnostics near me

Do not keyword-stuff pages.

Search intent and useful content are more important than keyword density.

---

# 9. Local SEO

Prepare the website for Google Business Profile.

Implement appropriate structured data.

Potential structured data:

- LocalBusiness
- AutomotiveBusiness if appropriate
- Service
- FAQPage where appropriate
- BreadcrumbList
- WebSite

Do not invent:

- reviews
- ratings
- number of customers
- years of experience
- certifications
- addresses
- opening hours

Only use real information.

The exact business category should be evaluated before implementation.

---

# 10. Conversion Strategy

The primary CTA should be:

```text
Book a diagnostic
```

or localized equivalents.

Secondary CTA:

```text
Contact via WhatsApp
```

WhatsApp should be visible:

- Hero
- Pricing
- final CTA
- mobile sticky CTA if UX remains good

Avoid excessive popups.

The website should feel trustworthy and local, not like an aggressive lead-generation landing page.

---

# 11. Hero Section

The Hero should immediately answer:

1. What is the service?
2. Where is it available?
3. How much does it cost?
4. How can I contact you?

Example Portuguese positioning:

"Diagnóstico Automóvel no Alto Minho"

"Diagnóstico computorizado para identificar falhas no motor, ABS, Airbag, transmissão e sistemas eletrónicos."

"Vila Praia de Âncora e arredores"

"Desde €30"

CTA:

"Marcar diagnóstico"

Secondary:

"WhatsApp"

Do not copy this text literally. Improve it where appropriate.

---

# 12. Design Direction

The design should communicate:

- automotive
- technical
- trustworthy
- modern
- local
- professional

Avoid:

- overly aggressive racing aesthetics
- excessive gradients
- generic stock-car imagery
- fake dashboards
- excessive animations
- "AI startup" visual style

Prefer:

- clean typography
- strong contrast
- generous spacing
- subtle automotive visual references
- technical details
- real photos later

The website must look credible on a €30–70 local service.

---

# 13. Mobile UX

Mobile is extremely important because traffic from Facebook/Instagram advertising will likely be mobile-heavy.

Requirements:

- fast loading
- large CTA buttons
- WhatsApp CTA easy to access
- no intrusive modal
- short forms
- readable typography
- no horizontal scrolling
- good Core Web Vitals

Consider a subtle fixed mobile bottom CTA:

```text
WhatsApp | Book Diagnostics
```

---

# 14. Analytics

Prepare:

- Google Analytics 4
- Google Search Console
- conversion event tracking

Track at least:

```text
whatsapp_click
contact_form_start
contact_form_submit
phone_click
pricing_view
service_area_view
```

Use a small analytics abstraction rather than scattering tracking code throughout the application.

Analytics IDs must come from environment variables.

---

# 15. Configuration

Create a central configuration structure.

For example:

```text
src/config/
  site.ts
  services.ts
  pricing.ts
  locations.ts
  contact.ts
  seo.ts
```

The goal is to make it easy to change:

- business name
- phone number
- WhatsApp number
- pricing
- service areas
- social links
- business description
- coordinates
- opening hours

without editing many components.

---

# 16. Suggested Project Structure

Use a clean scalable architecture.

Example:

```text
src/
├── app/
│   └── [locale]/
│       ├── page.tsx
│       ├── services/
│       │   └── page.tsx
│       ├── pricing/
│       │   └── page.tsx
│       ├── service-area/
│       │   └── page.tsx
│       ├── about/
│       │   └── page.tsx
│       ├── contact/
│       │   └── page.tsx
│       └── blog/
│           ├── page.tsx
│           └── [slug]/
│               └── page.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── services/
│   ├── pricing/
│   ├── service-area/
│   ├── faq/
│   ├── contact/
│   ├── blog/
│   └── ui/
│
├── config/
│   ├── site.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── locations.ts
│   ├── contact.ts
│   └── seo.ts
│
├── content/
│   ├── pt/
│   ├── uk/
│   └── en/
│
├── i18n/
│
├── lib/
│   ├── analytics/
│   ├── seo/
│   └── whatsapp/
│
└── types/
```

This is an example, not a strict requirement. Adapt it to the existing project if one exists.

---

# 17. Content Architecture

Separate content from UI wherever practical.

Avoid:

```tsx
<h1>Hardcoded text...</h1>
```

throughout components.

Use localized dictionaries/content structures.

However, do not over-engineer the content system.

For a small MVP, a simple structured TypeScript/content setup is acceptable.

---

# 18. WhatsApp Integration

Create a reusable helper:

```text
createWhatsAppLink(message)
```

The message should be prefilled.

Example:

"Olá! Gostaria de marcar um diagnóstico automóvel. O meu carro é um Kia Sportage 2019 1.6 GDI e tenho uma luz ABS acesa."

The actual implementation should generate a URL dynamically.

Do not hard-code WhatsApp URLs across multiple components.

---

# 19. SEO Metadata

Every indexable page must have:

- unique title
- unique meta description
- canonical URL
- Open Graph title
- Open Graph description
- appropriate robots settings

Generate metadata based on locale and page.

Example:

Portuguese:

```text
Diagnóstico Automóvel no Alto Minho | [Business Name]
```

Ukrainian:

```text
Комп'ютерна діагностика авто в Португалії | [Business Name]
```

English:

```text
Car Diagnostics in Northern Portugal | [Business Name]
```

These are examples only. Improve them based on actual SEO research.

---

# 20. Sitemap

Generate a dynamic sitemap containing all indexable localized pages.

Do not include:

- duplicate URLs
- query parameters
- non-indexable pages

Include alternate locale URLs if appropriate through the chosen implementation.

---

# 21. Robots

Create a proper robots configuration.

Allow public pages.

Do not expose internal/private routes.

---

# 22. Accessibility

Follow good accessibility practices:

- semantic HTML
- correct heading hierarchy
- labels for inputs
- keyboard navigation
- visible focus states
- sufficient contrast
- alt text for meaningful images
- decorative images appropriately marked

---

# 23. Performance

Target:

- Lighthouse Performance: 90+
- Lighthouse SEO: 95+
- Lighthouse Accessibility: 90+

Avoid unnecessary JavaScript.

Use Server Components by default.

Optimize images.

Avoid loading large libraries for simple UI elements.

---

# 24. Security / Forms

Do not expose secrets in client-side code.

Validate form input.

Sanitize user-controlled values where appropriate.

Add basic anti-spam protection if a server-side form is implemented.

Do not create a database just to store contact forms unless necessary.

---

# 25. Future Expansion

The architecture should make these future features possible:

### Services

- Auto electrical diagnostics
- Battery testing
- Charging system testing
- Sensor replacement
- DPF diagnostics
- AdBlue diagnostics
- ECU coding
- Vehicle maintenance
- Minor mechanical repairs

### Business

- online booking
- customer database
- invoices
- diagnostic reports
- PDF reports
- customer history
- payments
- CRM integration

Do NOT implement these in the MVP.

Only make the architecture reasonably extensible.

---

# 26. What NOT to Build

Do not build:

- authentication
- admin dashboard
- database
- customer accounts
- online payments
- complex booking calendar
- CRM
- vehicle database
- AI chatbot
- multilingual CMS
- elaborate animations
- dozens of location pages
- dozens of thin SEO pages

unless there is a clear MVP reason.

---

# 27. Business Validation

This website is primarily an experiment to validate demand.

The first version should therefore optimize for:

```text
Traffic
↓
Landing page
↓
Trust
↓
WhatsApp / Form
↓
Lead
↓
Paid diagnostic
```

The website should make it easy to determine:

- how many people visit
- which language they use
- which locations generate demand
- which services generate interest
- which vehicle brands appear most often
- how much advertising is required to generate a customer
- average customer acquisition cost

This data will later influence equipment purchases and service expansion.

---

# 28. Development Process

IMPORTANT:

Do NOT immediately start implementing the entire application.

First:

## Phase 1 — Analyze

Analyze this brief and identify:

- ambiguities
- missing business information
- technical risks
- SEO risks
- UX risks
- unnecessary complexity

Do not ask questions for information that can reasonably be represented as configuration/TODO values.

---

## Phase 2 — Create Implementation Plan

Produce a detailed implementation plan divided into logical modules.

For every module specify:

- objective
- files to create/change
- dependencies
- implementation details
- SEO considerations
- testing requirements

Recommended modules:

1. Project foundation
2. Internationalization
3. Design system
4. Layout/navigation
5. Home page
6. Services
7. Pricing
8. Service area
9. About
10. Contact/lead generation
11. FAQ
12. SEO
13. Structured data
14. Analytics
15. Performance
16. Accessibility
17. Testing
18. Deployment

---

## Phase 3 — Wait for Approval

After generating the plan, STOP.

Do not implement until the plan has been reviewed and approved.

---

## Phase 4 — Implementation

After approval, implement module by module.

After each major module:

- run TypeScript checks
- run lint
- run tests where applicable
- verify build
- verify localized routes
- verify metadata
- verify mobile layout

Do not move forward while the application is broken.

---

# 29. Definition of Done

The MVP is complete when:

- all three locales work
- localized URLs work
- navigation works
- all core pages exist
- responsive design works
- WhatsApp CTA works
- contact form works or has a clear submission mechanism
- SEO metadata is implemented
- canonical URLs work
- hreflang works
- sitemap works
- robots works
- JSON-LD is implemented appropriately
- analytics events are prepared
- no TypeScript errors
- no lint errors
- production build succeeds
- Lighthouse results are acceptable
- no obvious mobile UX issues exist

---

# 30. First Task for Cursor

Your first task is NOT to write the application.

Read this entire brief and inspect the existing repository.

Then produce:

1. Current project assessment
2. Recommended architecture
3. Detailed implementation plan
4. File-by-file change list
5. Dependencies to add/remove
6. SEO implementation plan
7. Internationalization plan
8. Analytics plan
9. Testing plan
10. Deployment plan
11. Risks and open questions
12. MVP vs future features separation

Clearly mark anything that requires a business decision.

Do not implement anything yet.

Wait for approval before writing code.