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
  const currency = "€";

  if (locale === "pt") return `desde ${currency}${amount}`;
  if (locale === "uk") return `від ${currency}${amount}`;
  return `from ${currency}${amount}`;
}

export function formatPriceAmount(amount: number): string {
  return `€${amount}`;
}

export function fromLabel(locale: string): string {
  if (locale === "pt") return "desde";
  if (locale === "uk") return "від";
  return "from";
}

export function getLowestPrice(): number {
  return Math.min(...pricingItems.map((item) => item.fromAmount));
}
