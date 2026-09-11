import type { ServiceAreaContent } from "../types";

export const serviceArea = {
  meta: {
    title: "Área de Serviço — Alto Minho | Diagnóstico Alto Minho",
    description:
      "Diagnóstico automóvel móvel em Vila Praia de Âncora, Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e arredores.",
  },
  h1: "Área de serviço",
  lead:
    "O serviço está baseado em Vila Praia de Âncora e cobre o Alto Minho com diagnóstico móvel.",
  body: "Atendo pedidos em Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e localidades próximas. O objectivo é facilitar o diagnóstico sem precisar de deixar o carro numa oficina só para uma leitura inicial.",
  townsLabel: "Localidades principais",
  towns: [
    "Vila Praia de Âncora",
    "Caminha",
    "Viana do Castelo",
    "Vila Nova de Cerveira",
    "Valença",
    "Ponte de Lima",
    "outras zonas do Alto Minho",
  ],
  caveat:
    "A disponibilidade ao domicílio depende da distância e da agenda do dia. Em caso de dúvida, pergunte por WhatsApp antes de marcar.",
  primaryCta: "Marcar diagnóstico",
  secondaryCta: "WhatsApp",
} as const satisfies ServiceAreaContent;
