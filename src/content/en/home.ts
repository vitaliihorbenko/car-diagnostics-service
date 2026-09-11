import type { HomeContent } from "../types";

export const home = {
  meta: {
    title: "Car Diagnostics in Northern Portugal | Diagnóstico Alto Minho",
    description:
      "Mobile computer diagnostics in Vila Praia de Âncora and Alto Minho. Engine, ABS, airbag and electronics. From €30. Book via WhatsApp.",
  },
  hero: {
    brand: "Diagnóstico Alto Minho",
    h1: "Car diagnostics in Alto Minho",
    lead: "Computer diagnostics to help identify issues in the engine, ABS, airbag, transmission and electronic systems — on-site, with a clear explanation.",
    locationLine: "Vila Praia de Âncora and surrounding areas",
    priceLine: "From €30",
    primaryCta: "Book a diagnostic",
    secondaryCta: "WhatsApp",
    trustStrip: [
      "We come to you",
      "Clear explanation",
      "Alto Minho coverage",
    ],
  },
  valueProp: {
    h2: "Understand the problem before spending on parts",
    body: "A warning light or unusual behaviour does not automatically mean an expensive repair. Diagnostics help you decide with clearer information — fault codes, live data and an honest explanation of what can (and cannot) be checked on your vehicle.",
  },
  servicesTeaser: {
    h2: "What we can diagnose",
    intro:
      "Initial focus on computer diagnostics and electronic systems. Capabilities vary by vehicle and equipment.",
    items: [
      "Computer / OBD diagnostics",
      "Check Engine light",
      "ABS and airbag / SRS",
      "Transmission and auto electrical",
      "Fault code and live data analysis",
      "Pre-purchase diagnostics",
      "Mobile / on-site diagnostics",
    ],
    cta: "See services",
  },
  commonProblems: {
    h2: "Common situations",
    items: [
      "Check Engine light on",
      "ABS or airbag warning light",
      "Loss of power or unusual fuel use",
      "Intermittent faults that are hard to reproduce",
      "Used car — you want a second opinion before buying",
    ],
    closing:
      "If you are unsure whether diagnostics can help, send a message with the make, model, year and symptom.",
  },
  howItWorks: {
    h2: "How it works",
    steps: [
      {
        title: "Get in touch",
        body: "Describe the issue on WhatsApp or via the form.",
      },
      {
        title: "Schedule",
        body: "We agree on place and time (home, work or where the car is).",
      },
      {
        title: "Diagnostics",
        body: "Read available systems, codes and relevant data.",
      },
      {
        title: "Explanation",
        body: "A clear summary of findings and possible next steps (no pressure for repairs we do not offer yet).",
      },
    ],
  },
  serviceAreaTeaser: {
    h2: "Service area",
    body: "Based in Vila Praia de Âncora, covering Alto Minho — including Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby areas.",
    note: "On-site availability depends on distance and schedule.",
    cta: "See service area",
  },
  pricingTeaser: {
    h2: "Guide prices",
    rows: [
      { id: "basic", name: "Basic diagnostics" },
      { id: "full", name: "Full diagnostics" },
      { id: "mobile", name: "Mobile diagnostics" },
      { id: "prePurchase", name: "Pre-purchase diagnostics" },
    ],
    popularLabel: "Most popular",
    ctaPricing: "See pricing",
    ctaWhatsapp: "WhatsApp",
  },
  whyUs: {
    h2: "Why book with us",
    points: [
      "Clear explanation in plain language",
      "Communication in Portuguese, Ukrainian and English",
      "Mobile service across Alto Minho",
      "Transparent approach: what was read, and what could not be checked",
      "No exaggerated promises about repairs or “miracle fixes”",
    ],
  },
  faqTeaser: {
    h2: "Frequently asked questions",
    items: [
      {
        question: "What is computer car diagnostics?",
        answer:
          "It is reading the vehicle’s electronic systems to identify fault codes and data that help explain a fault or warning light.",
      },
      {
        question: "Can you come to my location?",
        answer:
          "Yes, when distance and schedule allow. Mobile diagnostics start from €50.",
      },
      {
        question: "Can you diagnose ABS and airbag systems?",
        answer:
          "On many vehicles those modules can be accessed. Availability depends on make, model, year and equipment.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Guide prices start from €30. The final amount may vary with vehicle, location and complexity.",
      },
    ],
    cta: "See all FAQs",
  },
  finalCta: {
    h2: "Ready to book a diagnostic?",
    body: "Describe the vehicle and the issue. We will reply on WhatsApp to agree the next step.",
    primaryCta: "Book a diagnostic",
    secondaryCta: "WhatsApp",
  },
} as const satisfies HomeContent;
