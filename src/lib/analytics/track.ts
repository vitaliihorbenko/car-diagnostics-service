type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
  window.gtag?.("event", event, payload);
}

export const trackWhatsAppClick = (place: string) =>
  track("whatsapp_click", { place });
export const trackPhoneClick = () => track("phone_click");
export const trackContactFormStart = () => track("contact_form_start");
export const trackContactFormSubmit = () => track("contact_form_submit");
export const trackPricingView = () => track("pricing_view");
export const trackServiceAreaView = () => track("service_area_view");
