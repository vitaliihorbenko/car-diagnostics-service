import type { Locale } from "@/types";
import type { LocaleContent } from "./types";

import { common as commonPt } from "./pt/common";
import { home as homePt } from "./pt/home";
import { services as servicesPt } from "./pt/services";
import { pricing as pricingPt } from "./pt/pricing";
import { serviceArea as serviceAreaPt } from "./pt/serviceArea";
import { about as aboutPt } from "./pt/about";
import { contact as contactPt } from "./pt/contact";
import { faq as faqPt } from "./pt/faq";
import { blog as blogPt } from "./pt/blog";

import { common as commonUk } from "./uk/common";
import { home as homeUk } from "./uk/home";
import { services as servicesUk } from "./uk/services";
import { pricing as pricingUk } from "./uk/pricing";
import { serviceArea as serviceAreaUk } from "./uk/serviceArea";
import { about as aboutUk } from "./uk/about";
import { contact as contactUk } from "./uk/contact";
import { faq as faqUk } from "./uk/faq";
import { blog as blogUk } from "./uk/blog";

import { common as commonEn } from "./en/common";
import { home as homeEn } from "./en/home";
import { services as servicesEn } from "./en/services";
import { pricing as pricingEn } from "./en/pricing";
import { serviceArea as serviceAreaEn } from "./en/serviceArea";
import { about as aboutEn } from "./en/about";
import { contact as contactEn } from "./en/contact";
import { faq as faqEn } from "./en/faq";
import { blog as blogEn } from "./en/blog";

const contentByLocale: Record<Locale, LocaleContent> = {
  pt: {
    locale: "pt",
    common: commonPt,
    home: homePt,
    services: servicesPt,
    pricing: pricingPt,
    serviceArea: serviceAreaPt,
    about: aboutPt,
    contact: contactPt,
    faq: faqPt,
    blog: blogPt,
  },
  uk: {
    locale: "uk",
    common: commonUk,
    home: homeUk,
    services: servicesUk,
    pricing: pricingUk,
    serviceArea: serviceAreaUk,
    about: aboutUk,
    contact: contactUk,
    faq: faqUk,
    blog: blogUk,
  },
  en: {
    locale: "en",
    common: commonEn,
    home: homeEn,
    services: servicesEn,
    pricing: pricingEn,
    serviceArea: serviceAreaEn,
    about: aboutEn,
    contact: contactEn,
    faq: faqEn,
    blog: blogEn,
  },
};

export function getContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "pt" || value === "uk" || value === "en";
}
