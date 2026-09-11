import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getContent, isLocale } from "@/content";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildMetadata(raw, "/blog", getContent(raw).blog.meta);
}

export default async function BlogStubPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw) || !isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { blog, common } = getContent(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: common.nav.home, path: "/" },
          { name: common.nav.blog, path: "/blog" },
        ])}
      />
      <Section>
        <Heading as="h1">{blog.h1}</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{blog.body}</p>
        <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
          {blog.plannedTitles.map((title) => (
            <li key={title}>— {title}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            {blog.primaryCta}
          </Link>
          <Link
            href="/faq"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            {blog.faqCta}
          </Link>
        </div>
      </Section>
    </>
  );
}
