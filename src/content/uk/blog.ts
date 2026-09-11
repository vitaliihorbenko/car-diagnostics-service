import type { BlogContent } from "../types";

export const blog = {
  meta: {
    title: "Блог | Diagnóstico Alto Minho",
    description:
      "Майбутні статті про діагностику авто, індикатори та купівлю вживаних авто в Алту Мінью.",
  },
  h1: "Блог",
  body: "Незабаром: корисні матеріали про діагностику авто та типові проблеми в Алту Мінью. Поки що запишіться на діагностику або перегляньте FAQ.",
  plannedTitles: [
    "Загорівся ABS: що це означає?",
    "Загорівся Check Engine: чи можна їхати?",
    "Діагностика авто перед купівлею в Португалії",
  ],
  primaryCta: "Записатися на діагностику",
  faqCta: "FAQ",
} as const satisfies BlogContent;
