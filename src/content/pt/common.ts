import type { CommonContent } from "../types";

export const common = {
  nav: {
    home: "Início",
    services: "Serviços",
    pricing: "Preços",
    serviceArea: "Área de serviço",
    about: "Sobre",
    contact: "Contacto",
    faq: "FAQ",
    blog: "Blog",
  },
  cta: {
    book: "Marcar diagnóstico",
    whatsapp: "WhatsApp",
    seePricing: "Ver preços",
    seeServices: "Ver serviços",
    contactUs: "Falar connosco",
  },
  sticky: {
    book: "Marcar",
    whatsapp: "WhatsApp",
  },
  footer: {
    blurb:
      "Diagnóstico automóvel móvel no Alto Minho. Base em Vila Praia de Âncora. Atendimento em português, ucraniano e inglês.",
    areaLine:
      "Vila Praia de Âncora, Caminha, Viana do Castelo e arredores.",
    rights: "© {year} Diagnóstico Alto Minho",
  },
  disclaimers: {
    capability:
      "As funções disponíveis dependem da marca, modelo, ano do veículo e do equipamento de diagnóstico.",
    pricing:
      "O preço final pode depender do veículo, da localização e da complexidade do diagnóstico.",
  },
  localeLabels: {
    pt: "PT",
    uk: "UK",
    en: "EN",
  },
} as const satisfies CommonContent;
