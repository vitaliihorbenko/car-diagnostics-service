"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "@/components/navigation/LocaleSwitcher";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import type { Locale } from "@/types";
import type { CommonContent } from "@/content/types";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/services" as const, key: "services" as const },
  { href: "/pricing" as const, key: "pricing" as const },
  { href: "/service-area" as const, key: "serviceArea" as const },
  { href: "/about" as const, key: "about" as const },
  { href: "/faq" as const, key: "faq" as const },
  { href: "/contact" as const, key: "contact" as const },
];

type Props = {
  locale: Locale;
  common: CommonContent;
};

export function Header({ locale, common }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg font-semibold text-primary">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {common.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher locale={locale} labels={common.localeLabels} />
          <WhatsAppButton
            label={common.cta.whatsapp}
            place="header"
            size="sm"
            className="border-signal/40"
          />
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            {common.cta.book}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher locale={locale} labels={common.localeLabels} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label="Menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-3 px-4" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    {common.nav[item.key]}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={cn(buttonVariants(), "mt-2")}
                  onClick={() => setOpen(false)}
                >
                  {common.cta.book}
                </Link>
                <WhatsAppButton
                  label={common.cta.whatsapp}
                  place="mobile-nav"
                  className="w-full"
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
