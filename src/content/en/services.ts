import type { ServicesContent } from "../types";

export const services = {
  meta: {
    title: "Car Diagnostic Services | Diagnóstico Alto Minho",
    description:
      "Computer diagnostics, ABS, airbag, transmission, electrical and pre-purchase checks in Alto Minho. Capabilities depend on vehicle and equipment.",
  },
  h1: "Diagnostic services",
  intro:
    "I help identify electronic faults and error codes with computer diagnostics. This is a mobile, clarity-first service — it does not replace a full mechanical workshop.",
  items: [
    {
      id: "computer",
      name: "Computer diagnostics",
      description:
        "Connect to the vehicle to read supported systems and get an overview of electronic status.",
    },
    {
      id: "engine",
      name: "Engine / Check Engine",
      description:
        "Analyse the Check Engine light and related powertrain codes when access is available.",
    },
    {
      id: "abs",
      name: "ABS diagnostics",
      description:
        "Read the ABS/ESP module (when supported) to understand warnings and related codes.",
    },
    {
      id: "airbag",
      name: "Airbag / SRS",
      description:
        "Query the restraint system (when accessible) for codes and warning-light status.",
    },
    {
      id: "transmission",
      name: "Transmission",
      description:
        "Diagnose automatic/robotised gearboxes when protocol and equipment allow.",
    },
    {
      id: "electrical",
      name: "Automotive electrical",
      description:
        "Help identify issues related to sensors, module communication and electrical warnings (diagnostic scope, not full repair).",
    },
    {
      id: "liveData",
      name: "Live data analysis",
      description:
        "Watch relevant parameters with the engine running to put codes or symptoms in context.",
    },
    {
      id: "faultCodes",
      name: "Fault code analysis",
      description:
        "Interpret stored codes and separate useful leads from incomplete information.",
    },
    {
      id: "prePurchase",
      name: "Pre-purchase diagnostics",
      description:
        "A focused check before buying a used car: active warnings, codes and electronic attention points.",
    },
    {
      id: "mobile",
      name: "Mobile / on-site diagnostics",
      description:
        "Travel to the vehicle in Alto Minho, subject to schedule and distance.",
    },
  ],
  closing:
    "Not sure if your case fits? Message on WhatsApp with make, model, year and symptom.",
  primaryCta: "Book a diagnostic",
  secondaryCta: "WhatsApp",
} as const satisfies ServicesContent;
