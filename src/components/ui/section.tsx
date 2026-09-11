import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "hero";
};

export function Section({
  children,
  className,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 md:py-20",
        tone === "muted" && "bg-muted/40",
        tone === "hero" && "hero-glow overflow-hidden pt-16 md:pt-24",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
