"use client";

import { useState } from "react";
import {
  AlertTriangle,
  AirVent,
  CarFront,
  CircleAlert,
  Gauge,
  ShieldAlert,
} from "lucide-react";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { cn } from "@/lib/utils";

const icons = [CircleAlert, ShieldAlert, AirVent, Gauge, AlertTriangle, CarFront];

type Props = {
  h2: string;
  items: readonly string[];
  closing: string;
  whatsappLabel: string;
};

export function ProblemTiles({ h2, items, closing, whatsappLabel }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold md:text-4xl">{h2}</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const selected = index === active;
          const Icon = icons[index % icons.length];
          return (
            <button
              key={item}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "group flex items-start gap-3 rounded-2xl border px-4 py-4 text-left text-sm transition-all",
                selected
                  ? "border-primary bg-primary/10 text-foreground shadow-[0_0_0_1px_var(--primary)]"
                  : "border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
              aria-pressed={selected}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border",
                  selected
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border bg-background/40 text-muted-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="pt-1.5">{item}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">{items[active]}</p>
          <p className="mt-2 text-sm text-muted-foreground">{closing}</p>
        </div>
        <WhatsAppButton
          label={whatsappLabel}
          place="home-problem-tile"
          message={`${items[active]}. ${closing}`}
          variant="outline"
          className="shrink-0"
        />
      </div>
    </div>
  );
}
