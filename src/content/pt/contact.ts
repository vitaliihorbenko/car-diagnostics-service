import type { ContactContent } from "../types";

export const contact = {
  meta: {
    title: "Contacto e Marcação | Diagnóstico Alto Minho",
    description:
      "Marque um diagnóstico automóvel no Alto Minho por WhatsApp ou pelo formulário rápido. Base em Vila Praia de Âncora.",
  },
  h1: "Contacto",
  lead:
    "O canal principal é o WhatsApp. Também pode enviar um pedido pelo formulário — abrimos uma conversa com os dados do veículo já preenchidos.",
  whatsappCard: {
    title: "Contactar por WhatsApp",
    body: "Resposta mais rápida para marcar horário e local.",
    button: "Abrir WhatsApp",
  },
  form: {
    title: "Pedido de diagnóstico",
    intro: "Campos curtos. Depois do envio, continua no WhatsApp.",
    fields: {
      name: { label: "Nome", placeholder: "O seu nome" },
      phone: { label: "WhatsApp / telefone", placeholder: "Ex.: +351 …" },
      make: { label: "Marca", placeholder: "Ex.: Kia" },
      model: { label: "Modelo", placeholder: "Ex.: Sportage" },
      year: { label: "Ano", placeholder: "Ex.: 2019" },
      engine: { label: "Motor (opcional)", placeholder: "Ex.: 1.6 GDI" },
      problem: {
        label: "Problema / luz de aviso",
        placeholder: "Descreva o sintoma",
      },
      location: { label: "Localização", placeholder: "Ex.: Caminha" },
      preferredAt: {
        label: "Data/hora preferida (opcional)",
        placeholder: "Ex.: sábado de manhã",
      },
    },
    submit: "Enviar para WhatsApp",
  },
  validationRequired: "Preencha os campos obrigatórios.",
  whatsappMessageTemplate: {
    greeting: "Olá! Gostaria de marcar um diagnóstico automóvel.",
    labels: {
      name: "Nome",
      phone: "Telefone",
      vehicle: "Veículo",
      problem: "Problema",
      location: "Localização",
      preferredAt: "Data/hora preferida",
    },
  },
} as const satisfies ContactContent;
