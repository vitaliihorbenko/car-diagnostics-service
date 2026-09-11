import type { ContactContent } from "../types";

export const contact = {
  meta: {
    title: "Contact and Booking | Diagnóstico Alto Minho",
    description:
      "Book car diagnostics in Alto Minho via WhatsApp or a short form. Based in Vila Praia de Âncora.",
  },
  h1: "Contact",
  lead:
    "WhatsApp is the main channel. You can also send a request via the form — we open a chat with the vehicle details already filled in.",
  whatsappCard: {
    title: "Contact via WhatsApp",
    body: "Fastest reply for booking time and place.",
    button: "Open WhatsApp",
  },
  form: {
    title: "Diagnostic request",
    intro: "Short fields. After submit, continue on WhatsApp.",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      phone: { label: "WhatsApp / phone", placeholder: "e.g. +351 …" },
      make: { label: "Make", placeholder: "e.g. Kia" },
      model: { label: "Model", placeholder: "e.g. Sportage" },
      year: { label: "Year", placeholder: "e.g. 2019" },
      engine: { label: "Engine (optional)", placeholder: "e.g. 1.6 GDI" },
      problem: {
        label: "Problem / warning light",
        placeholder: "Describe the symptom",
      },
      location: { label: "Location", placeholder: "e.g. Caminha" },
      preferredAt: {
        label: "Preferred date/time (optional)",
        placeholder: "e.g. Saturday morning",
      },
    },
    submit: "Send to WhatsApp",
  },
  validationRequired: "Please fill in the required fields.",
  whatsappMessageTemplate: {
    greeting: "Hello! I would like to book a car diagnostic.",
    labels: {
      name: "Name",
      phone: "Phone",
      vehicle: "Vehicle",
      problem: "Problem",
      location: "Location",
      preferredAt: "Preferred date/time",
    },
  },
} as const satisfies ContactContent;
