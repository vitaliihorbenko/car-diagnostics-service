import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import type { CommonContent } from "@/content/types";

type Props = {
  common: CommonContent;
};

export function Footer({ common }: Props) {
  const year = new Date().getFullYear();
  const rights = common.footer.rights.replace("{year}", String(year));

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold text-primary">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            {common.footer.blurb}
          </p>
          <p className="text-sm text-muted-foreground">{common.footer.areaLine}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
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
        <p className="text-xs text-muted-foreground md:col-span-2">{rights}</p>
      </Container>
    </footer>
  );
}
