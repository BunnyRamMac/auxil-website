"use client";

import { useSyncExternalStore } from "react";

function subscribeToQuery(query: string) {
  return (onChange: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  };
}

/** True when the user prefers reduced motion (server snapshot: false). */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToQuery("(prefers-reduced-motion: reduce)"),
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/** True on small viewports — used to swap heavy motion for static fallbacks. */
export function useIsCoarseOrSmall() {
  return useSyncExternalStore(
    subscribeToQuery("(max-width: 719px)"),
    () => window.matchMedia("(max-width: 719px)").matches,
    () => false,
  );
}
