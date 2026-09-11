import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export function Heading({ as: Tag = "h2", children, className }: HeadingProps) {
  return (
    <Tag
      className={cn(
        Tag === "h1" && "text-4xl font-semibold md:text-5xl",
        Tag === "h2" && "text-3xl font-semibold md:text-4xl",
        Tag === "h3" && "text-xl font-semibold md:text-2xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
