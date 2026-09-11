import type { BlogContent } from "../types";

export const blog = {
  meta: {
    title: "Blog | Diagnóstico Alto Minho",
    description:
      "Future articles on car diagnostics, warning lights and buying used cars in Alto Minho.",
  },
  h1: "Blog",
  body: "Coming soon: practical guides on car diagnostics and common issues in Alto Minho. Meanwhile, book a diagnostic or read the FAQ.",
  plannedTitles: [
    "ABS light on: what does it mean?",
    "Check Engine light on: can I keep driving?",
    "Car diagnostics before buying a used car in Portugal",
  ],
  primaryCta: "Book a diagnostic",
  faqCta: "FAQ",
} as const satisfies BlogContent;
