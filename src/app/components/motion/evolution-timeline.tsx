"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./use-motion-prefs";

const milestones = [
  {
    year: "2022",
    title: "Services foundation",
    text: "Technology & talent services begin in Hyderabad.",
  },
  {
    year: "Then",
    title: "Recurring problems observed",
    text: "Delivery work surfaces repeated business and workforce problems.",
  },
  {
    year: "Next",
    title: "AI & automation expansion",
    text: "AI and automation capabilities expand to address them.",
  },
  {
    year: "Now",
    title: "Product initiatives",
    text: "PoojaPath enters private testing; 2DO AI and CareerSignal Global take shape.",
  },
  {
    year: "Direction",
    title: "AI-first company",
    text: "Long-term direction: an AI-first technology, talent and product company.",
  },
];

/** Scroll-driven evolution timeline — nodes activate progressively. */
export function EvolutionTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(-1);
  // Under reduced motion every milestone is shown statically.
  const shown = reduced ? milestones.length - 1 : active;

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            milestones.forEach((_, i) => {
              timers.push(setTimeout(() => setActive(i), 350 + i * 420));
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  return (
    <div ref={ref} className="evolution-timeline" role="img"
      aria-label="Auxil evolution: 2022 services foundation, recurring problems observed, AI and automation expansion, product initiatives, AI-first direction.">
      <div className="evolution-track" aria-hidden="true">
        <span
          className="evolution-progress"
          style={{ width: `${(Math.max(shown, 0) / (milestones.length - 1)) * 100}%` }}
        />
      </div>
      <ol>
        {milestones.map((m, i) => (
          <li key={m.title} className={i <= shown ? "is-active" : ""} aria-hidden="true">
            <span className="evolution-dot" />
            <span className="evolution-year">{m.year}</span>
            <span className="evolution-title">{m.title}</span>
            <span className="evolution-text">{m.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
