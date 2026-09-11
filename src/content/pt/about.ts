import type { AboutContent } from "../types";

export const about = {
  meta: {
    title: "Sobre o Serviço | Diagnóstico Alto Minho",
    description:
      "Serviço de diagnóstico automóvel móvel em Vila Praia de Âncora. Atendimento em português, ucraniano e inglês, com explicações transparentes.",
  },
  h1: "Sobre",
  paragraphs: [
    "Diagnóstico Alto Minho é um serviço local de diagnóstico automóvel móvel, operado por uma pessoa, com base em Vila Praia de Âncora.",
    "Combino interesse prático por automóveis com formação técnica em desenvolvimento de software. O objectivo do MVP é validar procura real: diagnósticos claros, comunicação directa e deslocação no Alto Minho.",
    "Não apresento o serviço como uma oficina completa. Nesta fase o foco é diagnóstico por computador e sistemas electrónicos — com honestidade sobre limites de equipamento e de cada veículo.",
    "Posso comunicar em português, ucraniano e inglês, o que ajuda residentes e comunidades locais a explicar o problema sem barreira de idioma.",
  ],
  valuesHeading: "Como trabalho",
  values: [
    "Transparência sobre o que foi possível verificar",
    "Linguagem simples, sem jargão desnecessário",
    "Sem pressão para serviços que ainda não ofereço",
  ],
  primaryCta: "Falar connosco",
  secondaryCta: "WhatsApp",
} as const satisfies AboutContent;
