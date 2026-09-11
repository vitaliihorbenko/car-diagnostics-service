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
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/about", getContent(raw).about.meta);
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { about, common } = getContent(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.about, path: "/about" },
        ])}
      />
      <Section>
        <Heading as="h1">{about.h1}</Heading>
        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <h2 className="mt-10 font-heading text-2xl font-semibold">
          {about.valuesHeading}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {about.values.map((value) => (
            <li
              key={value}
              className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm"
            >
              {value}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            {about.primaryCta}
          </Link>
          <WhatsAppButton
            label={about.secondaryCta}
            place="about"
            size="lg"
            variant="outline"
          />
        </div>
      </Section>
    </>
  );
}
