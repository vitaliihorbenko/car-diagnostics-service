"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  labels: Record<Locale, string>;
};

export function LocaleSwitcher({ locale, labels }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          className={cn(
            "rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            loc === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
          aria-current={loc === locale ? "true" : undefined}
          onClick={() => router.replace(pathname, { locale: loc })}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
