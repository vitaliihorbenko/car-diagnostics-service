import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import { formatFromPrice, pricingItems } from "@/config/pricing";
import type { LocaleContent } from "@/content/types";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  locale: Locale;
  content: LocaleContent;
};

export function HomePage({ locale, content }: Props) {
  const { home, common } = content;

  return (
    <>
      <Section tone="grid" className="overflow-hidden pt-16 md:pt-24">
        <div className="animate-fade-up max-w-3xl space-y-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {home.hero.brand}
          </p>
          <Heading as="h1">{home.hero.h1}</Heading>
          <p className="max-w-2xl text-lg text-muted-foreground">{home.hero.lead}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <span>{home.hero.locationLine}</span>
            <span className="font-mono text-primary">{home.hero.priceLine}</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              {home.hero.primaryCta}
            </Link>
            <WhatsAppButton
              label={home.hero.secondaryCta}
              place="home-hero"
              size="lg"
              className="bg-signal text-signal-foreground hover:bg-signal/90 border-transparent"
              variant="default"
            />
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2">{home.valueProp.h2}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{home.valueProp.body}</p>
      </Section>

      <Section tone="muted">
        <Heading as="h2">{home.servicesTeaser.h2}</Heading>
        <p className="mt-3 max-w-3xl text-muted-foreground">{home.servicesTeaser.intro}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {home.servicesTeaser.items.map((item) => (
            <li key={item} className="border-l-2 border-primary/40 pl-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">{common.disclaimers.capability}</p>
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: "outline" }), "mt-6 inline-flex")}
        >
          {home.servicesTeaser.cta}
        </Link>
      </Section>

      <Section>
        <Heading as="h2">{home.commonProblems.h2}</Heading>
        <ul className="mt-6 space-y-3">
          {home.commonProblems.items.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          {home.commonProblems.closing}
        </p>
      </Section>

      <Section tone="muted">
        <Heading as="h2">{home.howItWorks.h2}</Heading>
        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {home.howItWorks.steps.map((step, index) => (
            <li key={step.title} className="space-y-2">
              <p className="font-mono text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <Heading as="h2">{home.serviceAreaTeaser.h2}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{home.serviceAreaTeaser.body}</p>
        <p className="mt-3 text-sm text-muted-foreground">{home.serviceAreaTeaser.note}</p>
        <Link
          href="/service-area"
          className={cn(buttonVariants({ variant: "outline" }), "mt-6 inline-flex")}
        >
          {home.serviceAreaTeaser.cta}
        </Link>
      </Section>

      <Section id="pricing" tone="muted">
        <Heading as="h2">{home.pricingTeaser.h2}</Heading>
        <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
          {home.pricingTeaser.rows.map((row) => {
            const amount = pricingItems.find((p) => p.id === row.id)?.fromAmount ?? 0;
            return (
              <li
                key={row.id}
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm sm:px-5"
              >
                <span>{row.name}</span>
                <span className="font-mono font-medium text-primary">
                  {formatFromPrice(amount, locale)}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">{common.disclaimers.pricing}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }))}>
            {home.pricingTeaser.ctaPricing}
          </Link>
          <WhatsAppButton
            label={home.pricingTeaser.ctaWhatsapp}
            place="home-pricing"
          />
        </div>
      </Section>

      <Section>
        <Heading as="h2">{home.whyUs.h2}</Heading>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {home.whyUs.points.map((point) => (
            <li key={point} className="rounded-lg border border-border/80 bg-card/50 px-4 py-3 text-sm">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading as="h2">{home.faqTeaser.h2}</Heading>
          <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
            {home.faqTeaser.cta}
          </Link>
        </div>
        <Accordion className="mt-6 w-full">
          {home.faqTeaser.items.map((item, index) => (
            <AccordionItem key={item.question} value={`home-faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section>
        <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground md:px-10">
          <Heading as="h2" className="text-primary-foreground">
            {home.finalCta.h2}
          </Heading>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">{home.finalCta.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "bg-background text-foreground hover:bg-background/90",
              )}
            >
              {home.finalCta.primaryCta}
            </Link>
            <WhatsAppButton
              label={home.finalCta.secondaryCta}
              place="home-final"
              size="lg"
              className="bg-signal text-signal-foreground hover:bg-signal/90 border-transparent"
              variant="default"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
