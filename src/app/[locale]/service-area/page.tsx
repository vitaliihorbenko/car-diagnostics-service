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
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/service-area", getContent(raw).serviceArea.meta);
}

export default async function ServiceAreaPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { serviceArea, common } = getContent(locale);

  return (
    <TrackView event="service_area_view">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.serviceArea, path: "/service-area" },
        ])}
      />
      <Section>
        <Heading as="h1">{serviceArea.h1}</Heading>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{serviceArea.lead}</p>
        <p className="mt-4 max-w-3xl text-muted-foreground">{serviceArea.body}</p>
        <h2 className="mt-10 font-heading text-xl font-semibold">
          {serviceArea.townsLabel}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {serviceArea.towns.map((town) => (
            <li
              key={town}
              className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm"
            >
              {town}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{serviceArea.caveat}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            {serviceArea.primaryCta}
          </Link>
          <WhatsAppButton
            label={serviceArea.secondaryCta}
            place="service-area"
            size="lg"
          />
        </div>
      </Section>
    </TrackView>
  );
}
