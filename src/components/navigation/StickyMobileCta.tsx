"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  bookLabel: string;
  whatsappLabel: string;
};

export function StickyMobileCta({ bookLabel, whatsappLabel }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("form")) setHidden(true);
    };
    const onFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("form")) {
        window.setTimeout(() => {
          if (!document.activeElement?.closest("form")) setHidden(false);
        }, 0);
      }
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      className={cn(
        "animate-sticky-in fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden",
        hidden && "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <WhatsAppButton
          label={whatsappLabel}
          place="sticky"
          className="w-full"
          variant="outline"
        />
        <Link href="/contact" className={cn(buttonVariants(), "w-full")}>
          {bookLabel}
        </Link>
      </div>
    </div>
  );
}
