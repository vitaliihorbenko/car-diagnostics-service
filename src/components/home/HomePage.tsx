import Image from "next/image";
import { MapPin, MessageCircle, Truck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { ProblemTiles } from "@/components/home/ProblemTiles";
import { AltoMinhoMap } from "@/components/brand/AltoMinhoMap";
import { buttonVariants } from "@/components/ui/button";
import {
  formatPriceAmount,
  fromLabel,
  pricingItems,
} from "@/config/pricing";
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

const trustIcons = [Truck, MessageCircle, MapPin];

const scriptNotes: Record<Locale, { hero: string; pricing: string }> = {
  pt: {
    hero: "Diagnóstico moderno. Respostas reais.",
    pricing: "Clareza agora. Menos surpresas depois.",
  },
  uk: {
    hero: "Сучасна діагностика. Реальні відповіді.",
    pricing: "Інвестуйте в ясність.",
  },
  en: {
    hero: "Modern diagnostics. Real answers.",
    pricing: "Invest in clarity. Avoid costly mistakes.",
  },
};

export function HomePage({ locale, content }: Props) {
  const { home, common } = content;
  const notes = scriptNotes[locale];

  return (
    <>
      <Section tone="hero" className="relative pb-10 md:pb-16">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block">
          <Image
            src="/images/hero-car.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[70%_40%] opacity-55"
            sizes="58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {home.hero.brand}
            </p>
            <Heading as="h1" className="text-4xl md:text-5xl lg:text-[3.4rem]">
              {home.hero.h1}
            </Heading>
            <p className="max-w-xl text-lg text-muted-foreground">{home.hero.lead}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
              <span>{home.hero.locationLine}</span>
              <span className="font-mono text-primary">{home.hero.priceLine}</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                {home.hero.primaryCta}
              </Link>
              <WhatsAppButton
                label={home.hero.secondaryCta}
                place="home-hero"
                size="lg"
                variant="outline"
              />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/30 shadow-[0_30px_80px_-40px_oklch(0.8_0.15_170/0.55)] sm:aspect-[5/6]">
              <Image
                src="/images/hero-tablet.jpg"
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <p className="font-script absolute -bottom-2 left-2 max-w-[12rem] text-2xl leading-tight text-foreground md:-left-6 md:text-[1.7rem]">
              {notes.hero}
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-3 border-t border-border/70 pt-8 sm:grid-cols-3">
          {home.hero.trustStrip.map((item, index) => {
            const Icon = trustIcons[index] ?? MapPin;
            return (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/50 px-4 py-3 text-sm backdrop-blur-sm"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-4" aria-hidden />
                </span>
                {item}
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <Heading as="h2">{home.valueProp.h2}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{home.valueProp.body}</p>
      </Section>

      <Section tone="muted">
        <ProblemTiles
          h2={home.commonProblems.h2}
          items={home.commonProblems.items}
          closing={home.commonProblems.closing}
          whatsappLabel={common.cta.whatsapp}
        />
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card/40">
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/diagnostics-wireframe.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/40" />
            </div>
          </div>
          <div>
            <Heading as="h2">{home.servicesTeaser.h2}</Heading>
            <p className="mt-3 text-muted-foreground">{home.servicesTeaser.intro}</p>
            <ul className="mt-6 space-y-3">
              {home.servicesTeaser.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm"
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              {common.disclaimers.capability}
            </p>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "mt-6 inline-flex")}
            >
              {home.servicesTeaser.cta}
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Heading as="h2">{home.howItWorks.h2}</Heading>
            <ol className="mt-8 space-y-6">
              {home.howItWorks.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/alto-minho-road.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
            <div className="grid gap-0 border-t border-border md:grid-cols-2">
              <div className="space-y-3 p-5">
                <h3 className="font-heading text-xl font-semibold">
                  {home.serviceAreaTeaser.h2}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {home.serviceAreaTeaser.body}
                </p>
                <p className="text-sm text-muted-foreground">
                  {home.serviceAreaTeaser.note}
                </p>
                <Link
                  href="/service-area"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "inline-flex",
                  )}
                >
                  {home.serviceAreaTeaser.cta}
                </Link>
              </div>
              <div className="relative flex min-h-48 items-stretch border-t border-border bg-[#0f1a24] md:border-l md:border-t-0">
                <AltoMinhoMap className="min-h-48" />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="pricing">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading as="h2">{home.pricingTeaser.h2}</Heading>
          <p className="font-script text-2xl text-foreground/90">{notes.pricing}</p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {home.pricingTeaser.rows.map((row) => {
            const amount =
              pricingItems.find((p) => p.id === row.id)?.fromAmount ?? 0;
            const popular = row.id === "full";
            return (
              <li
                key={row.id}
                className={cn(
                  "flex flex-col rounded-2xl border bg-card p-5",
                  popular
                    ? "border-primary shadow-[0_0_0_1px_var(--primary)]"
                    : "border-border",
                )}
              >
                {popular ? (
                  <span className="mb-3 w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                    {home.pricingTeaser.popularLabel}
                  </span>
                ) : (
                  <span className="mb-3 h-5" aria-hidden />
                )}
                <h3 className="font-heading text-lg font-semibold">{row.name}</h3>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">
                    {fromLabel(locale)}
                  </span>
                  <span className="font-mono text-2xl font-medium text-primary">
                    {formatPriceAmount(amount)}
                  </span>
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({
                      variant: popular ? "default" : "outline",
                      size: "sm",
                    }),
                    "mt-auto",
                    popular &&
                      "bg-primary text-[oklch(0.14_0.03_230)] hover:bg-primary/80 hover:text-[oklch(0.14_0.03_230)]",
                  )}
                >
                  {home.hero.primaryCta}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">{common.disclaimers.pricing}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }))}>
            {home.pricingTeaser.ctaPricing}
          </Link>
          <WhatsAppButton
            label={home.pricingTeaser.ctaWhatsapp}
            place="home-pricing"
            variant="outline"
          />
        </div>
      </Section>

      <Section tone="muted">
        <Heading as="h2">{home.whyUs.h2}</Heading>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {home.whyUs.points.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-border bg-card/50 px-4 py-3 text-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
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
        <div className="rounded-2xl border border-primary/30 bg-primary px-6 py-10 text-primary-foreground md:px-10">
          <Heading as="h2" className="text-primary-foreground">
            {home.finalCta.h2}
          </Heading>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            {home.finalCta.body}
          </p>
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
              variant="outline"
              className="border-primary-foreground/50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
