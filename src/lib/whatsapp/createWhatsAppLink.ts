import { contactConfig } from "@/config/contact";

export function createWhatsAppLink(message?: string): string {
  const phone = contactConfig.whatsappE164.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
