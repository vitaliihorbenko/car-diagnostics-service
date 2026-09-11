"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
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
import { BrandLogo } from "@/components/brand/BrandLogo";
import type { Locale } from "@/types";
import type { CommonContent } from "@/content/types";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/" as const, key: "home" as const },
  { href: "/services" as const, key: "services" as const },
  { href: "/pricing" as const, key: "pricing" as const },
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
    <header className="sticky top-0 z-30 border-b border-border/50 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink">
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
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
          <Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>
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
            <SheetContent side="right" className="w-[min(100%,20rem)] border-border bg-card">
              <SheetHeader>
                <SheetTitle>
                  <BrandLogo />
                </SheetTitle>
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
                  href="/service-area"
                  className="rounded-md px-2 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {common.nav.serviceArea}
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-2 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {common.nav.about}
                </Link>
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
                  variant="outline"
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
