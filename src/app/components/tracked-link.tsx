"use client";

import type React from "react";
import type { AnalyticsEventName } from "./analytics";
import { trackEvent } from "./analytics";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventName?: AnalyticsEventName;
  eventPayload?: Record<string, string>;
};

export function TrackedLink({
  href,
  className,
  children,
  eventName = "cta_click",
  eventPayload = {},
}: TrackedLinkProps) {
  return (
    <a
      className={className}
      href={href}
      onClick={() =>
        trackEvent(eventName, {
          link_url: href,
          link_text: typeof children === "string" ? children : undefined,
          ...eventPayload,
        })
      }
    >
      {children}
    </a>
  );
}
