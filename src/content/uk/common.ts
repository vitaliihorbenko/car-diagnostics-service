import type { CommonContent } from "../types";

export const common = {
  nav: {
    home: "Головна",
    services: "Послуги",
    pricing: "Ціни",
    serviceArea: "Зона обслуговування",
    about: "Про нас",
    contact: "Контакт",
    faq: "Питання",
    blog: "Блог",
  },
  cta: {
    book: "Записатися на діагностику",
    whatsapp: "WhatsApp",
    seePricing: "Переглянути ціни",
    seeServices: "Переглянути послуги",
    contactUs: "Зв’язатися з нами",
  },
  sticky: {
    book: "Запис",
    whatsapp: "WhatsApp",
  },
  footer: {
    blurb:
      "Мобільна комп’ютерна діагностика авто в регіоні Алту Мінью. База — Віла Прая де Анкора. Спілкуємося португальською, українською та англійською.",
    areaLine:
      "Віла Прая де Анкора, Камінья, Віана-ду-Каштелу та околиці.",
    rights: "© {year} Diagnóstico Alto Minho",
  },
  disclaimers: {
    capability:
      "Доступні функції залежать від марки, моделі, року автомобіля та діагностичного обладнання.",
    pricing:
      "Остаточна ціна може залежати від автомобіля, локації та складності діагностики.",
  },
  localeLabels: {
    pt: "PT",
    uk: "UK",
    en: "EN",
  },
} as const satisfies CommonContent;
