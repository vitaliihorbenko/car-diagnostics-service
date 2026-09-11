export const contactConfig = {
  /** E.164 without + for wa.me — replace before launch */
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "351900000000",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;
