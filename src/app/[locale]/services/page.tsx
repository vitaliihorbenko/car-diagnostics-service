import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getContent, isLocale } from "@/content";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/seo/jsonLd";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/services", getContent(raw).services.meta);
}

export default async function ServicesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { services, common } = getContent(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.services, path: "/services" },
        ])}
      />
      <JsonLd
        data={servicesJsonLd(
          locale,
          services.items.map((item) => ({
            name: item.name,
            description: item.description,
          })),
        )}
      />
      <Section>
        <Heading as="h1">{services.h1}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{services.intro}</p>
        <p className="mt-4 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-muted-foreground">
          {common.disclaimers.capability}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card/60 p-5"
            >
              <h2 className="font-heading text-xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted-foreground">{services.closing}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            {services.primaryCta}
          </Link>
          <WhatsAppButton
            label={services.secondaryCta}
            place="services"
            size="lg"
            variant="outline"
          />
        </div>
      </Section>
    </>
  );
}
