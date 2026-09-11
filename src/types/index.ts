export type Locale = "pt" | "uk" | "en";

export type PagePath =
  | "/"
  | "/services"
  | "/pricing"
  | "/service-area"
  | "/about"
  | "/contact"
  | "/faq"
  | "/blog";

export type PricingItemId =
  | "basic"
  | "full"
  | "mobile"
  | "prePurchase";

export type ServiceId =
  | "computer"
  | "engine"
  | "abs"
  | "airbag"
  | "transmission"
  | "electrical"
  | "liveData"
  | "faultCodes"
  | "prePurchase"
  | "mobile";

export type SeoMeta = {
  title: string;
  description: string;
};

export type NavKey =
  | "home"
  | "services"
  | "pricing"
  | "serviceArea"
  | "about"
  | "contact"
  | "faq"
  | "blog";
