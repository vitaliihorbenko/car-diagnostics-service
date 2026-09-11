import type { PricingItemId } from "@/types";

export type PricingItem = {
  id: PricingItemId;
  fromAmount: number;
  currency: "EUR";
};

export const pricingItems: PricingItem[] = [
  { id: "basic", fromAmount: 30, currency: "EUR" },
  { id: "full", fromAmount: 45, currency: "EUR" },
  { id: "mobile", fromAmount: 50, currency: "EUR" },
  { id: "prePurchase", fromAmount: 70, currency: "EUR" },
];

export function formatFromPrice(amount: number, locale: string): string {
  const formatted = new Intl.NumberFormat(locale === "uk" ? "uk-UA" : locale === "pt" ? "pt-PT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);

  if (locale === "pt") return `desde ${formatted}`;
  if (locale === "uk") return `від ${formatted}`;
  return `from ${formatted}`;
}

export function getLowestPrice(): number {
  return Math.min(...pricingItems.map((item) => item.fromAmount));
}
