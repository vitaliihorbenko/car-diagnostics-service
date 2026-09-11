import type { PricingContent } from "../types";

export const pricing = {
  meta: {
    title: "Preços de Diagnóstico Automóvel | Diagnóstico Alto Minho",
    description:
      "Preços orientativos: básico desde €30, completo desde €45, móvel desde €50, pré-compra desde €70. Alto Minho.",
  },
  h1: "Preços",
  intro:
    "Valores orientativos para planear o serviço. Confirme sempre o valor final ao marcar.",
  note: "Em deslocações mais longas ou casos mais complexos, o valor pode ser ajustado antes de confirmar.",
  tiers: {
    basic: {
      name: "Diagnóstico básico",
      description:
        "Leitura essencial de códigos e verificação inicial da luz de aviso / sintoma principal.",
    },
    full: {
      name: "Diagnóstico completo",
      description:
        "Análise mais alargada dos sistemas acessíveis, códigos e dados relevantes.",
    },
    mobile: {
      name: "Diagnóstico móvel",
      description:
        "Deslocação ao local do veículo no Alto Minho (pode somar-se ao tipo de diagnóstico).",
    },
    prePurchase: {
      name: "Diagnóstico pré-compra",
      description:
        "Sessão orientada à compra de um usado, com foco em avisos e códigos electrónicos.",
    },
  },
  primaryCta: "Marcar diagnóstico",
  secondaryCta: "WhatsApp",
} as const satisfies PricingContent;
