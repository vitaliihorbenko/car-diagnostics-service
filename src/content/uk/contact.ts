import type { ContactContent } from "../types";

export const contact = {
  meta: {
    title: "Контакт і запис | Diagnóstico Alto Minho",
    description:
      "Запишіться на діагностику авто в Алту Мінью через WhatsApp або коротку форму. База — Віла Прая де Анкора.",
  },
  h1: "Контакт",
  lead:
    "Основний канал — WhatsApp. Також можна надіслати заявку через форму — відкриємо розмову з уже заповненими даними авто.",
  whatsappCard: {
    title: "Зв’язатися через WhatsApp",
    body: "Найшвидша відповідь, щоб узгодити час і місце.",
    button: "Відкрити WhatsApp",
  },
  form: {
    title: "Заявка на діагностику",
    intro: "Короткі поля. Після надсилання продовження в WhatsApp.",
    fields: {
      name: { label: "Ім’я", placeholder: "Ваше ім’я" },
      phone: { label: "WhatsApp / телефон", placeholder: "Напр.: +351 …" },
      make: { label: "Марка", placeholder: "Напр.: Kia" },
      model: { label: "Модель", placeholder: "Напр.: Sportage" },
      year: { label: "Рік", placeholder: "Напр.: 2019" },
      engine: {
        label: "Двигун (необов’язково)",
        placeholder: "Напр.: 1.6 GDI",
      },
      problem: {
        label: "Проблема / індикатор",
        placeholder: "Опишіть симптом",
      },
      location: { label: "Локація", placeholder: "Напр.: Камінья" },
      preferredAt: {
        label: "Бажані дата/час (необов’язково)",
        placeholder: "Напр.: субота вранці",
      },
    },
    submit: "Надіслати в WhatsApp",
  },
  validationRequired: "Заповніть обов’язкові поля.",
  whatsappMessageTemplate: {
    greeting: "Вітаю! Хочу записатися на діагностику авто.",
    labels: {
      name: "Ім’я",
      phone: "Телефон",
      vehicle: "Авто",
      problem: "Проблема",
      location: "Локація",
      preferredAt: "Бажані дата/час",
    },
  },
} as const satisfies ContactContent;
