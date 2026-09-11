import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/brand/BrandLogo";
import type { CommonContent } from "@/content/types";
import type { Locale } from "@/types";

type Props = {
  locale: Locale;
  common: CommonContent;
};

const closingNote: Record<Locale, string> = {
  pt: "Mantemo-lo na estrada.",
  uk: "Тримаємо вас на дорозі.",
  en: "Keeping you on the road.",
};

export function Footer({ locale, common }: Props) {
  const year = new Date().getFullYear();
  const rights = common.footer.rights.replace("{year}", String(year));

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <Image
        src="/images/footer-road.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/88" />
      <Container className="relative grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <BrandLogo />
          <p className="max-w-md text-sm text-muted-foreground">
            {common.footer.blurb}
          </p>
          <p className="text-sm text-muted-foreground">{common.footer.areaLine}</p>
          <p className="font-script text-2xl text-foreground/90">
            {closingNote[locale]}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">{common.nav.home}</p>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary">
              {common.nav.services}
            </Link>
            <Link href="/pricing" className="hover:text-primary">
              {common.nav.pricing}
            </Link>
            <Link href="/service-area" className="hover:text-primary">
              {common.nav.serviceArea}
            </Link>
            <Link href="/about" className="hover:text-primary">
              {common.nav.about}
            </Link>
            <Link href="/faq" className="hover:text-primary">
              {common.nav.faq}
            </Link>
            <Link href="/contact" className="hover:text-primary">
              {common.nav.contact}
            </Link>
            <Link href="/blog" className="hover:text-primary">
              {common.nav.blog}
            </Link>
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{common.nav.contact}</p>
          {contactConfig.phoneDisplay ? (
            <p>{contactConfig.phoneDisplay}</p>
          ) : null}
          {contactConfig.email ? <p>{contactConfig.email}</p> : null}
          <p>{siteConfig.baseCity}</p>
          <p>
            {siteConfig.region}, {siteConfig.country}
          </p>
        </div>
        <p className="text-xs text-muted-foreground md:col-span-3">{rights}</p>
      </Container>
    </footer>
  );
}
