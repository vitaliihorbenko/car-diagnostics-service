"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

type Props = {
  event: "pricing_view" | "service_area_view";
  children: ReactNode;
};

export function TrackView({ event, children }: Props) {
  useEffect(() => {
    void import("@/lib/analytics/track").then((mod) => {
      if (event === "pricing_view") mod.trackPricingView();
      if (event === "service_area_view") mod.trackServiceAreaView();
    });
  }, [event]);

  return <>{children}</>;
}
