import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getContent, isLocale } from "@/content";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { TrackView } from "@/components/analytics/TrackView";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { formatFromPrice, pricingItems } from "@/config/pricing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale, PricingItemId } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/pricing", getContent(raw).pricing.meta);
}

export default async function PricingPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { pricing, common } = getContent(locale);
  const order: PricingItemId[] = ["basic", "full", "mobile", "prePurchase"];

  return (
    <TrackView event="pricing_view">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.pricing, path: "/pricing" },
        ])}
      />
      <Section>
        <Heading as="h1">{pricing.h1}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{pricing.intro}</p>
        <ul className="mt-10 space-y-4">
          {order.map((id) => {
            const tier = pricing.tiers[id];
            const amount = pricingItems.find((p) => p.id === id)?.fromAmount ?? 0;
            return (
              <li
                key={id}
                className="rounded-xl border border-border bg-card px-5 py-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-heading text-xl font-semibold">{tier.name}</h2>
                  <p className="font-mono text-lg font-medium text-primary">
                    {formatFromPrice(amount, locale)}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">{common.disclaimers.pricing}</p>
        <p className="mt-2 text-sm text-muted-foreground">{pricing.note}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            {pricing.primaryCta}
          </Link>
          <WhatsAppButton label={pricing.secondaryCta} place="pricing" size="lg" />
        </div>
      </Section>
    </TrackView>
  );
}
