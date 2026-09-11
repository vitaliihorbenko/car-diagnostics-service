import type { PricingContent } from "../types";

export const pricing = {
  meta: {
    title: "Car Diagnostics Pricing | Diagnóstico Alto Minho",
    description:
      "Guide prices: basic from €30, full from €45, mobile from €50, pre-purchase from €70. Alto Minho, Northern Portugal.",
  },
  h1: "Pricing",
  intro:
    "Guide amounts to help you plan. We always confirm the final price when booking.",
  note: "For longer travel or more complex cases, the amount may be adjusted before confirmation.",
  popularLabel: "Most popular",
  tiers: {
    basic: {
      name: "Basic diagnostics",
      description:
        "Essential code reading and an initial check of the main warning light / symptom.",
    },
    full: {
      name: "Full diagnostics",
      description:
        "Broader analysis of accessible systems, codes and relevant data.",
    },
    mobile: {
      name: "Mobile diagnostics",
      description:
        "Travel to the vehicle in Alto Minho (may be added to the diagnostic type).",
    },
    prePurchase: {
      name: "Pre-purchase diagnostics",
      description:
        "A used-car focused session centred on warnings and electronic codes.",
    },
  },
  primaryCta: "Book a diagnostic",
  secondaryCta: "WhatsApp",
} as const satisfies PricingContent;
