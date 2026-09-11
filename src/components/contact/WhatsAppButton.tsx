"use client";

import { createWhatsAppLink } from "@/lib/whatsapp/createWhatsAppLink";
import { trackWhatsAppClick } from "@/lib/analytics/track";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type Props = {
  label: string;
  message?: string;
  place: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
};

export function WhatsAppButton({
  label,
  message,
  place,
  variant = "outline",
  size = "default",
  className,
}: Props) {
  const href = createWhatsAppLink(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={() => trackWhatsAppClick(place)}
    >
      {label}
    </a>
  );
}
