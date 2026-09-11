"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  submitDiagnosticRequest,
  type DiagnosticRequest,
} from "@/lib/forms/diagnosticRequest";
import {
  trackContactFormStart,
  trackContactFormSubmit,
} from "@/lib/analytics/track";
import type { ContactContent } from "@/content/types";

type Props = {
  content: ContactContent;
};

const fieldOrder: (keyof ContactContent["form"]["fields"])[] = [
  "name",
  "phone",
  "make",
  "model",
  "year",
  "engine",
  "problem",
  "location",
  "preferredAt",
];

export function DiagnosticRequestForm({ content }: Props) {
  const started = useRef(false);
  const [error, setError] = useState<string | null>(null);

  function onFocus() {
    if (!started.current) {
      started.current = true;
      trackContactFormStart();
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const result = submitDiagnosticRequest(data, content.whatsappMessageTemplate);
    if (!result.ok) {
      setError(
        result.error === "spam" ? content.validationRequired : content.validationRequired,
      );
      return;
    }

    trackContactFormSubmit();
    window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onFocus}
      className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm"
      noValidate
    >
      <div>
        <h2 className="font-heading text-xl font-semibold">{content.form.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{content.form.intro}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {fieldOrder.map((key) => {
          const field = content.form.fields[key];
          const required = !["engine", "preferredAt"].includes(key);
          const id = `field-${key}`;
          const isTextarea = key === "problem";

          return (
            <div
              key={key}
              className={key === "problem" || key === "location" ? "sm:col-span-2" : undefined}
            >
              <Label htmlFor={id}>{field.label}</Label>
              {isTextarea ? (
                <Textarea
                  id={id}
                  name={key}
                  placeholder={field.placeholder}
                  required={required}
                  rows={4}
                  className="mt-1.5"
                />
              ) : (
                <Input
                  id={id}
                  name={key}
                  placeholder={field.placeholder}
                  required={required}
                  className="mt-1.5"
                  autoComplete={
                    key === "name" ? "name" : key === "phone" ? "tel" : undefined
                  }
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {content.form.submit}
      </Button>
    </form>
  );
}

// silence unused type import usage for DiagnosticRequest in editors
export type { DiagnosticRequest };
