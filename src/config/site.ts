import type { Locale, PagePath } from "@/types";

export const siteConfig = {
  name: "Diagnóstico Alto Minho",
  defaultLocale: "pt" as Locale,
  locales: ["pt", "uk", "en"] as const satisfies readonly Locale[],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  baseCity: "Vila Praia de Âncora",
  region: "Alto Minho",
  country: "Portugal",
} as const;

export const pagePaths: PagePath[] = [
  "/",
  "/services",
  "/pricing",
  "/service-area",
  "/about",
  "/contact",
  "/faq",
  "/blog",
];
