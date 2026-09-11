import type { FaqContent } from "../types";

export const faq = {
  meta: {
    title: "FAQ — Car Diagnostics | Diagnóstico Alto Minho",
    description:
      "Answers about computer diagnostics, ABS, airbag, pricing, mobile visits and pre-purchase checks in Alto Minho.",
  },
  h1: "Frequently asked questions",
  lead:
    "Direct answers — without promising functions that depend on the vehicle and equipment.",
  items: [
    {
      question: "What is computer car diagnostics?",
      answer:
        "It means connecting diagnostic equipment to the vehicle to read fault codes and electronic system data. It helps explain why a light came on or why the car behaves oddly — it is not, by itself, the repair.",
    },
    {
      question: "What problems can you diagnose?",
      answer:
        "Typically dashboard warnings, engine codes, ABS, airbag, module communication and some electrical symptoms. The exact scope depends on the vehicle and equipment. Purely mechanical issues (for example suspension noise with no code) may need a different specialty.",
    },
    {
      question: "Can you diagnose ABS?",
      answer:
        "On many vehicles yes — when the ABS/ESP module is accessible with the available equipment. Not every model exposes the same information.",
    },
    {
      question: "Can you diagnose Airbag / SRS?",
      answer:
        "In many cases the airbag system can be read when access is available. SRS codes need care: clearing warnings without fixing the cause is not good practice.",
    },
    {
      question: "Can you diagnose automatic transmissions?",
      answer:
        "When protocol and equipment allow, yes — reading transmission-module codes and data. Access depth varies by model.",
    },
    {
      question: "Can you come to my location?",
      answer:
        "Yes, across Alto Minho when schedule and distance allow. Mobile diagnostics are guided from €50.",
    },
    {
      question: "How much does diagnostics cost?",
      answer:
        "Guide prices: basic from €30, full from €45, mobile from €50, pre-purchase from €70. The final amount depends on vehicle, location and complexity.",
    },
    {
      question: "Do I need to bring the car to a workshop?",
      answer:
        "Not always. In many cases diagnostics can be done where the car is. If deeper mechanical or electrical repair is needed, I can explain that the next step is a specialised workshop.",
    },
    {
      question: "Can you clear diagnostic errors?",
      answer:
        "In some cases codes can be cleared after reading them. That only makes sense when the cause is understood or when testing whether the warning returns. Clearing codes without diagnosis does not fix the issue and can hide useful information.",
    },
    {
      question: "Can you diagnose a car before purchase?",
      answer:
        "Yes — it is one of the listed services (from €70). It helps reveal active warnings and electronic codes before you decide. It does not replace a full mechanical inspection or guarantee the car’s future condition.",
    },
    {
      question: "Which car brands do you support?",
      answer:
        "Access varies by make, model, year and equipment. Universal support is not claimed. Send the vehicle details and symptom — I will say honestly what is realistic to check.",
    },
  ],
} as const satisfies FaqContent;
