import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getContent, isLocale } from "@/content";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { DiagnosticRequestForm } from "@/components/contact/DiagnosticRequestForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/contact", getContent(raw).contact.meta);
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { contact, common } = getContent(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.contact, path: "/contact" },
        ])}
      />
      <Section>
        <Heading as="h1">{contact.h1}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{contact.lead}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-semibold">
              {contact.whatsappCard.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {contact.whatsappCard.body}
            </p>
            <div className="mt-4">
              <WhatsAppButton
                label={contact.whatsappCard.button}
                place="contact-card"
                variant="default"
                size="lg"
              />
            </div>
          </aside>
          <DiagnosticRequestForm content={contact} />
        </div>
      </Section>
    </>
  );
}
