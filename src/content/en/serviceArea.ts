import type { ServiceAreaContent } from "../types";

export const serviceArea = {
  meta: {
    title: "Service Area — Alto Minho | Diagnóstico Alto Minho",
    description:
      "Mobile car diagnostics in Vila Praia de Âncora, Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby areas.",
  },
  h1: "Service area",
  lead:
    "The service is based in Vila Praia de Âncora and covers Alto Minho with mobile diagnostics.",
  body: "Requests are welcome from Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby places. The aim is to make an initial diagnostic easier without needing a workshop visit only for a code read.",
  townsLabel: "Main locations",
  towns: [
    "Vila Praia de Âncora",
    "Caminha",
    "Viana do Castelo",
    "Vila Nova de Cerveira",
    "Valença",
    "Ponte de Lima",
    "other Alto Minho areas",
  ],
  caveat:
    "On-site availability depends on distance and the day’s schedule. If unsure, ask on WhatsApp before booking.",
  primaryCta: "Book a diagnostic",
  secondaryCta: "WhatsApp",
} as const satisfies ServiceAreaContent;
