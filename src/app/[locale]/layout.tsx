import { notFound } from "next/navigation";
import { Caveat, Manrope, Sora, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/navigation/StickyMobileCta";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { getContent, isLocale } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  automotiveBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/seo/jsonLd";
import "../globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();

  const locale = await getLocale();
  if (!isLocale(locale)) notFound();

  const messages = await getMessages();
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      className={`${sora.variable} ${manrope.variable} ${geistMono.variable} ${caveat.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-full flex-1 flex-col">
            <JsonLd data={websiteJsonLd()} />
            <JsonLd
              data={automotiveBusinessJsonLd(
                locale,
                content.home.meta.description,
              )}
            />
            <AnalyticsProvider />
            <Header locale={locale} common={content.common} />
            <main className="flex-1 pb-24 md:pb-0">{children}</main>
            <Footer locale={locale} common={content.common} />
            <StickyMobileCta
              locale={locale}
              bookLabel={content.common.sticky.book}
              whatsappLabel={content.common.sticky.whatsapp}
            />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
