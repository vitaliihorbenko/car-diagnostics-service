import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "grid";
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
        tone === "muted" && "bg-muted/60",
        tone === "grid" && "tech-grid",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
