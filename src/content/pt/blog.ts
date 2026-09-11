import type { BlogContent } from "../types";

export const blog = {
  meta: {
    title: "Blog | Diagnóstico Alto Minho",
    description:
      "Artigos futuros sobre diagnóstico automóvel, luzes de aviso e compra de usados no Alto Minho.",
  },
  h1: "Blog",
  body: "Em breve: guias úteis sobre diagnóstico automóvel e problemas frequentes no Alto Minho. Entretanto, marque um diagnóstico ou consulte as perguntas frequentes.",
  plannedTitles: [
    "Luz ABS acesa: o que significa?",
    "Luz do motor acesa: posso continuar a conduzir?",
    "Diagnóstico automóvel antes de comprar um carro usado",
  ],
  primaryCta: "Marcar diagnóstico",
  faqCta: "FAQ",
} as const satisfies BlogContent;
