import type { Locale, PricingItemId, SeoMeta, ServiceId } from "@/types";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FormFieldCopy = {
  label: string;
  placeholder: string;
};

export type CommonContent = {
  nav: {
    home: string;
    services: string;
    pricing: string;
    serviceArea: string;
    about: string;
    contact: string;
    faq: string;
    blog: string;
  };
  cta: {
    book: string;
    whatsapp: string;
    seePricing: string;
    seeServices: string;
    contactUs: string;
  };
  sticky: {
    book: string;
    whatsapp: string;
  };
  footer: {
    blurb: string;
    areaLine: string;
    rights: string;
  };
  disclaimers: {
    capability: string;
    pricing: string;
  };
  localeLabels: {
    pt: string;
    uk: string;
    en: string;
  };
};

export type HomeContent = {
  meta: SeoMeta;
  hero: {
    brand: string;
    h1: string;
    lead: string;
    locationLine: string;
    priceLine: string;
    primaryCta: string;
    secondaryCta: string;
    trustStrip: readonly string[];
  };
  valueProp: {
    h2: string;
    body: string;
  };
  servicesTeaser: {
    h2: string;
    intro: string;
    items: readonly string[];
    cta: string;
  };
  commonProblems: {
    h2: string;
    items: readonly string[];
    closing: string;
  };
  howItWorks: {
    h2: string;
    steps: readonly { title: string; body: string }[];
  };
  serviceAreaTeaser: {
    h2: string;
    body: string;
    note: string;
    cta: string;
  };
  pricingTeaser: {
    h2: string;
    rows: readonly { id: PricingItemId; name: string }[];
    popularLabel: string;
    ctaPricing: string;
    ctaWhatsapp: string;
  };
  whyUs: {
    h2: string;
    points: readonly string[];
  };
  faqTeaser: {
    h2: string;
    items: readonly FaqItem[];
    cta: string;
  };
  finalCta: {
    h2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type ServiceItemContent = {
  id: ServiceId;
  name: string;
  description: string;
};

export type ServicesContent = {
  meta: SeoMeta;
  h1: string;
  intro: string;
  items: readonly ServiceItemContent[];
  closing: string;
  primaryCta: string;
  secondaryCta: string;
};

export type PricingTierContent = {
  name: string;
  description: string;
};

export type PricingContent = {
  meta: SeoMeta;
  h1: string;
  intro: string;
  note: string;
  popularLabel: string;
  tiers: Record<PricingItemId, PricingTierContent>;
  primaryCta: string;
  secondaryCta: string;
};

export type ServiceAreaContent = {
  meta: SeoMeta;
  h1: string;
  lead: string;
  body: string;
  townsLabel: string;
  towns: readonly string[];
  caveat: string;
  primaryCta: string;
  secondaryCta: string;
};

export type AboutContent = {
  meta: SeoMeta;
  h1: string;
  paragraphs: readonly string[];
  valuesHeading: string;
  values: readonly string[];
  primaryCta: string;
  secondaryCta: string;
};

export type ContactFormFields = {
  name: FormFieldCopy;
  phone: FormFieldCopy;
  make: FormFieldCopy;
  model: FormFieldCopy;
  year: FormFieldCopy;
  engine: FormFieldCopy;
  problem: FormFieldCopy;
  location: FormFieldCopy;
  preferredAt: FormFieldCopy;
};

export type WhatsAppMessageTemplate = {
  greeting: string;
  labels: {
    name: string;
    phone: string;
    vehicle: string;
    problem: string;
    location: string;
    preferredAt: string;
  };
};

export type ContactContent = {
  meta: SeoMeta;
  h1: string;
  lead: string;
  whatsappCard: {
    title: string;
    body: string;
    button: string;
  };
  form: {
    title: string;
    intro: string;
    fields: ContactFormFields;
    submit: string;
  };
  validationRequired: string;
  whatsappMessageTemplate: WhatsAppMessageTemplate;
};

export type FaqContent = {
  meta: SeoMeta;
  h1: string;
  lead: string;
  items: readonly FaqItem[];
};

export type BlogContent = {
  meta: SeoMeta;
  h1: string;
  body: string;
  plannedTitles: readonly string[];
  primaryCta: string;
  faqCta: string;
};

export type LocaleContent = {
  locale: Locale;
  common: CommonContent;
  home: HomeContent;
  services: ServicesContent;
  pricing: PricingContent;
  serviceArea: ServiceAreaContent;
  about: AboutContent;
  contact: ContactContent;
  faq: FaqContent;
  blog: BlogContent;
};
