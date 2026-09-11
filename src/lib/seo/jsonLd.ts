import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { pricingItems } from "@/config/pricing";
import { absoluteUrl } from "@/lib/seo/buildMetadata";
import type { Locale } from "@/types";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: [...siteConfig.locales],
  };
}

export function automotiveBusinessJsonLd(locale: Locale, description: string) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.name,
    description,
    url: absoluteUrl(locale, "/"),
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.region}, ${siteConfig.country}`,
    },
    priceRange: `€${Math.min(...pricingItems.map((p) => p.fromAmount))}+`,
  };

  if (contactConfig.phoneTel) {
    data.telephone = contactConfig.phoneTel;
  }
  if (contactConfig.email) {
    data.email = contactConfig.email;
  }

  return data;
}

export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: "/" | "/services" | "/pricing" | "/service-area" | "/about" | "/contact" | "/faq" | "/blog" }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function faqPageJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function servicesJsonLd(
  locale: Locale,
  services: { name: string; description: string }[],
) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
      url: absoluteUrl(locale, "/"),
    },
    areaServed: `${siteConfig.region}, ${siteConfig.country}`,
  }));
}
