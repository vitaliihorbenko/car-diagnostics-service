import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import type { Locale, PagePath, SeoMeta } from "@/types";

export function localePath(locale: Locale, path: PagePath = "/"): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function absoluteUrl(locale: Locale, path: PagePath = "/"): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return `${base}${localePath(locale, path)}`;
}

export function buildMetadata(
  locale: Locale,
  path: PagePath,
  meta: SeoMeta,
): Metadata {
  const canonical = absoluteUrl(locale, path);
  const languages: Record<string, string> = {};
  for (const loc of siteConfig.locales) {
    languages[loc] = absoluteUrl(loc, path);
  }
  languages["x-default"] = absoluteUrl(siteConfig.defaultLocale, path);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [{ url: seoConfig.defaultOgImage }],
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: meta.title,
      description: meta.description,
      images: [seoConfig.defaultOgImage],
    },
  };
}
