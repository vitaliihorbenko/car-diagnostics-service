import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getContent, isLocale } from "@/content";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { HomePage } from "@/components/home/HomePage";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/", getContent(raw).home.meta);
}

export default async function Page({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const content = getContent(locale);
  return <HomePage locale={locale} content={content} />;
}
