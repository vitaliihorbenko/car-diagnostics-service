import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function BrandLogo({ className, showWordmark = true, compact = false }: Props) {
  const size = compact ? 34 : 40;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        className="shrink-0 text-primary"
        aria-hidden
      >
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.75" opacity="0.7" />
        <circle cx="32" cy="32" r="23.5" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <path
          d="M14 34 H22 L26.5 18 L33 46 L38.5 26 L43 34 H50"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="2.25" fill="currentColor" />
      </svg>
      {showWordmark ? (
        <span className="min-w-0 truncate font-heading text-sm font-semibold tracking-tight text-foreground sm:text-[15px]">
          {siteConfig.name}
        </span>
      ) : null}
    </span>
  );
}
