import type { AboutContent } from "../types";

export const about = {
  meta: {
    title: "About the Service | Diagnóstico Alto Minho",
    description:
      "Mobile car diagnostics based in Vila Praia de Âncora. Communication in Portuguese, Ukrainian and English, with transparent explanations.",
  },
  h1: "About",
  paragraphs: [
    "Diagnóstico Alto Minho is a local mobile car diagnostics service run by one person, based in Vila Praia de Âncora.",
    "I combine a practical interest in cars with a technical background in software development. This MVP exists to validate real demand: clear diagnostics, direct communication and travel across Alto Minho.",
    "This is not positioned as a full workshop. At this stage the focus is computer diagnostics and electronic systems — with honesty about equipment limits and each vehicle’s constraints.",
    "I communicate in Portuguese, Ukrainian and English, which helps residents and local communities explain the issue without a language barrier.",
  ],
  valuesHeading: "How I work",
  values: [
    "Transparency about what could be checked",
    "Plain language, without unnecessary jargon",
    "No pressure for services I do not offer yet",
  ],
  primaryCta: "Contact us",
  secondaryCta: "WhatsApp",
} as const satisfies AboutContent;
