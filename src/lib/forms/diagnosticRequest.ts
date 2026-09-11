import { z } from "zod";
import { createWhatsAppLink } from "@/lib/whatsapp/createWhatsAppLink";

export const diagnosticRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(5).max(40),
  make: z.string().trim().min(1).max(80),
  model: z.string().trim().min(1).max(80),
  year: z.string().trim().min(2).max(10),
  engine: z.string().trim().max(80).optional(),
  problem: z.string().trim().min(1).max(1000),
  location: z.string().trim().min(1).max(120),
  preferredAt: z.string().trim().max(120).optional(),
  website: z.string().max(0).optional(),
});

export type DiagnosticRequest = z.infer<typeof diagnosticRequestSchema>;

export type SubmitDiagnosticResult =
  | { ok: true; whatsappUrl: string }
  | { ok: false; error: "validation" | "spam" };

type MessageTemplate = {
  greeting: string;
  labels: {
    name: string;
    phone: string;
    vehicle: string;
    problem: string;
    location: string;
    preferredAt: string;
  };
};

export function buildWhatsAppMessage(
  data: DiagnosticRequest,
  template: MessageTemplate,
): string {
  const engine = data.engine?.trim() ? ` ${data.engine.trim()}` : "";
  const lines = [
    template.greeting,
    `${template.labels.name}: ${data.name}`,
    `${template.labels.phone}: ${data.phone}`,
    `${template.labels.vehicle}: ${data.make} ${data.model} ${data.year}${engine}`,
    `${template.labels.problem}: ${data.problem}`,
    `${template.labels.location}: ${data.location}`,
  ];
  if (data.preferredAt?.trim()) {
    lines.push(`${template.labels.preferredAt}: ${data.preferredAt.trim()}`);
  }
  return lines.join("\n");
}

/**
 * MVP: validate + open WhatsApp. Swap internals later for email/API without UI rewrite.
 */
export function submitDiagnosticRequest(
  raw: unknown,
  template: MessageTemplate,
): SubmitDiagnosticResult {
  const parsed = diagnosticRequestSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "validation" };
  if (parsed.data.website) return { ok: false, error: "spam" };

  const message = buildWhatsAppMessage(parsed.data, template);
  return { ok: true, whatsappUrl: createWhatsAppLink(message) };
}
