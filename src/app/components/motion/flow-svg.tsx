"use client";

import { usePrefersReducedMotion } from "./use-motion-prefs";

export type FlowStep = {
  label: string;
  /** optional sub-nodes that branch off and reconverge (e.g. AI tasks/agents) */
  sub?: string[];
};

type FlowSvgProps = {
  steps: FlowStep[];
  /** visual variant — varied per section so flows don't all look alike */
  layout?: "horizontal" | "vertical" | "loop";
  /** accessible name for the diagram */
  label: string;
  className?: string;
};

const NODE_R = 22;
const BLUE = "#2257ff";

/**
 * Animated process-flow diagram. Steps highlight in sequence; connectors carry
 * a moving dash flow. Static (no animation) when reduced motion is preferred.
 */
export function FlowSvg({ steps, layout = "horizontal", label, className = "" }: FlowSvgProps) {
  const reduced = usePrefersReducedMotion();
  const animated = !reduced;

  const stepList = (
    <ul className="sr-only">
      {steps.map((s) => (
        <li key={s.label}>
          {s.label}
          {s.sub ? ` (${s.sub.join(", ")})` : ""}
        </li>
      ))}
    </ul>
  );

  if (layout === "vertical") {
    const gap = 92;
    const h = steps.length * gap + 40;
    const cx = 120;
    return (
      <figure className={`flow-svg${className ? ` ${className}` : ""}`}>
        <svg
          viewBox={`0 0 340 ${h}`}
          role="img"
          aria-label={label}
          className={animated ? "is-animated" : ""}
        >
          {steps.map((step, i) => {
            const y = 40 + i * gap;
            return (
              <g key={step.label}>
                {i < steps.length - 1 && (
                  <line
                    x1={cx}
                    y1={y + NODE_R}
                    x2={cx}
                    y2={y + gap - NODE_R}
                    className="flow-dash"
                    stroke={BLUE}
                    strokeWidth="2"
                  />
                )}
                <circle
                  cx={cx}
                  cy={y}
                  r={NODE_R}
                  className="flow-node"
                  style={{ animationDelay: `${i * 0.55}s` }}
                />
                <text x={cx} y={y + 5} textAnchor="middle" className="flow-index">
                  {i + 1}
                </text>
                <text x={cx + 40} y={y - 2} className="flow-label">
                  {step.label}
                </text>
              </g>
            );
          })}
        </svg>
        {stepList}
      </figure>
    );
  }

  if (layout === "loop") {
    const w = 360;
    const h = 220;
    const cx = w / 2;
    const cy = h / 2;
    const rx = 128;
    const ry = 66;
    const ellipsePath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;
    return (
      <figure className={`flow-svg${className ? ` ${className}` : ""}`}>
        <svg
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={label}
          className={animated ? "is-animated" : ""}
        >
          <path d={ellipsePath} fill="none" stroke={BLUE} strokeWidth="2" opacity="0.35" />
          <path d={ellipsePath} fill="none" stroke={BLUE} strokeWidth="2" className="flow-dash" />
          {steps.map((step, i) => {
            const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + rx * Math.cos(a);
            const y = cy + ry * Math.sin(a);
            return (
              <g key={step.label}>
                <circle
                  cx={x}
                  cy={y}
                  r={15}
                  className="flow-node"
                  style={{ animationDelay: `${i * 0.55}s` }}
                />
                <text x={x} y={y + 4} textAnchor="middle" className="flow-index flow-index-sm">
                  {i + 1}
                </text>
                <text
                  x={x}
                  y={y + (y > cy ? 32 : -22)}
                  textAnchor="middle"
                  className="flow-label flow-label-sm"
                >
                  {step.label}
                </text>
              </g>
            );
          })}
          {animated && (
            <circle r="5" fill={BLUE} className="flow-traveler">
              <animateMotion dur="9s" repeatCount="indefinite" path={ellipsePath} />
            </circle>
          )}
        </svg>
        {stepList}
      </figure>
    );
  }

  // horizontal (default)
  const gap = 168;
  const w = steps.length * gap + 40;
  const y = 46;
  const hasBranch = steps.some((s) => s.sub);
  const topPad = hasBranch ? 84 : 0;
  return (
    <figure className={`flow-svg${className ? ` ${className}` : ""}`}>
      <svg
        viewBox={`0 ${-topPad} ${w} ${118 + topPad}`}
        role="img"
        aria-label={label}
        className={animated ? "is-animated" : ""}
      >
        {steps.map((step, i) => {
          const x = 60 + i * gap;
          return (
            <g key={step.label}>
              {i < steps.length - 1 && (
                <line
                  x1={x + NODE_R + 6}
                  y1={y}
                  x2={x + gap - NODE_R - 6}
                  y2={y}
                  className="flow-dash"
                  stroke={BLUE}
                  strokeWidth="2"
                />
              )}
              {step.sub && (
                <g className="flow-branch">
                  {step.sub.map((s, si) => {
                    const bx = x + (si === 0 ? -42 : 42);
                    const by = y + (si === 0 ? -42 : 42);
                    const above = si === 0;
                    return (
                      <g key={s}>
                        <line x1={x} y1={y} x2={bx} y2={by} stroke={BLUE} strokeWidth="1.5" opacity="0.5" />
                        <circle cx={bx} cy={by} r={9} className="flow-node flow-node-sm" />
                        <text
                          x={bx}
                          y={above ? by - 16 : by + 24}
                          textAnchor="middle"
                          className="flow-label flow-label-sm"
                        >
                          {s}
                        </text>
                      </g>
                    );
                  })}
                </g>
              )}
              <circle
                cx={x}
                cy={y}
                r={NODE_R}
                className="flow-node"
                style={{ animationDelay: `${i * 0.55}s` }}
              />
              <text x={x} y={y + 5} textAnchor="middle" className="flow-index">
                {i + 1}
              </text>
              <text x={x} y={y + 44} textAnchor="middle" className="flow-label">
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>
      {stepList}
    </figure>
  );
}
