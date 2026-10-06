"use client";

import { useEffect, useRef } from "react";
import { useIsCoarseOrSmall, usePrefersReducedMotion } from "./use-motion-prefs";

type OrbitNode = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
};

type Stream = {
  t: number;
  speed: number;
  size: number;
  lane: number; // -1 | 0 | 1 lateral offset
  fromTech: boolean;
};

const TECH = "#5b8cff";
const TALENT = "#3ddc97";
const INK = "#eef2ff";

/**
 * Living "Technology ⇄ Talent → Business Growth" system.
 * Canvas on capable devices; static SVG fallback on small screens,
 * reduced-motion preferences, or when canvas is unavailable.
 */
export function HeroSystem({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const small = useIsCoarseOrSmall();
  const staticMode = reduced || small;

  useEffect(() => {
    if (staticMode) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0.5, y: 0.5 };

    const techNodes: OrbitNode[] = Array.from({ length: 7 }, (_, i) => ({
      angle: (i / 7) * Math.PI * 2,
      radius: 46 + (i % 3) * 22,
      speed: 0.12 + (i % 3) * 0.05,
      size: 2.5 + (i % 2) * 1.5,
    }));
    const talentNodes: OrbitNode[] = Array.from({ length: 7 }, (_, i) => ({
      angle: (i / 7) * Math.PI * 2 + 0.4,
      radius: 46 + ((i + 1) % 3) * 22,
      speed: 0.1 + ((i + 1) % 3) * 0.05,
      size: 2.5 + ((i + 1) % 2) * 1.5,
    }));
    const streams: Stream[] = Array.from({ length: 26 }, (_, i) => ({
      t: Math.random(),
      speed: 0.0035 + Math.random() * 0.004,
      size: 1.5 + Math.random() * 2,
      lane: [-1, 0, 1][i % 3],
      fromTech: i % 2 === 0,
    }));

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = Math.max(280, rect.width);
      h = Math.max(300, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onPointer = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
    };
    wrap.addEventListener("pointermove", onPointer);

    const quad = (
      x0: number, y0: number, cx: number, cy: number, x1: number, y1: number, t: number,
    ) => {
      const u = 1 - t;
      return {
        x: u * u * x0 + 2 * u * t * cx + t * t * x1,
        y: u * u * y0 + 2 * u * t * cy + t * t * y1,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Pointer parallax (subtle, per-layer depth).
      const px = (pointer.x - 0.5) * 18;
      const py = (pointer.y - 0.5) * 12;

      const tech = { x: w * 0.27 + px * 0.6, y: h * 0.4 + py * 0.6 };
      const talent = { x: w * 0.73 - px * 0.6, y: h * 0.4 - py * 0.6 };
      const outcome = { x: w * 0.5 + px * 0.25, y: h * 0.8 + py * 0.25 };

      const cluster = (
        c: { x: number; y: number },
        nodes: OrbitNode[],
        color: string,
        label: string,
      ) => {
        // soft glow
        const g = ctx.createRadialGradient(c.x, c.y, 4, c.x, c.y, 110);
        g.addColorStop(0, color + "2e");
        g.addColorStop(1, color + "00");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 110, 0, Math.PI * 2);
        ctx.fill();
        // core
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = INK;
        ctx.font = "600 13px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(label, c.x, c.y - 22);
        // orbiters
        for (const n of nodes) {
          n.angle += n.speed * 0.016;
          const x = c.x + Math.cos(n.angle) * n.radius;
          const y = c.y + Math.sin(n.angle) * n.radius * 0.72;
          ctx.globalAlpha = 0.85;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, n.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      };

      cluster(tech, techNodes, TECH, "Technology");
      cluster(talent, talentNodes, TALENT, "Talent");

      // data streams converging on the outcome
      for (const s of streams) {
        s.t += s.speed;
        if (s.t > 1) s.t = 0;
        const from = s.fromTech ? tech : talent;
        const cx = (from.x + outcome.x) / 2 + s.lane * 26;
        const cy = (from.y + outcome.y) / 2 - 34;
        const p = quad(from.x, from.y, cx, cy, outcome.x, outcome.y, s.t);
        const fade = Math.sin(s.t * Math.PI);
        ctx.globalAlpha = 0.25 + fade * 0.65;
        ctx.fillStyle = s.fromTech ? TECH : TALENT;
        ctx.beginPath();
        ctx.arc(p.x, p.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // outcome node
      const og = ctx.createRadialGradient(outcome.x, outcome.y, 2, outcome.x, outcome.y, 60);
      og.addColorStop(0, "#ffd97a33");
      og.addColorStop(1, "#ffd97a00");
      ctx.fillStyle = og;
      ctx.beginPath();
      ctx.arc(outcome.x, outcome.y, 60, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffd97a";
      ctx.beginPath();
      ctx.arc(outcome.x, outcome.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = INK;
      ctx.font = "600 13px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Business Growth", outcome.x, outcome.y + 26);

      // emerging products beneath the system
      const products = ["PoojaPath", "2DO AI", "CareerSignal Global"];
      ctx.font = "500 11px system-ui, sans-serif";
      products.forEach((name, i) => {
        const x = w * (0.3 + i * 0.2) + px * 0.15;
        const y = h * 0.94;
        ctx.fillStyle = "rgba(238,242,255,0.55)";
        ctx.beginPath();
        ctx.arc(x - 42, y - 3.5, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.textAlign = "left";
        ctx.fillText(name, x - 34, y);
      });

      if (running) raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !running) {
            running = true;
            raf = requestAnimationFrame(draw);
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        }
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("pointermove", onPointer);
    };
  }, [staticMode]);

  return (
    <div ref={wrapRef} className={`hero-system${className ? ` ${className}` : ""}`}>
      {staticMode ? (
        <svg
          viewBox="0 0 400 340"
          role="img"
          aria-label="Diagram: Technology and Talent systems converging into Business Growth, with PoojaPath, 2DO AI and CareerSignal Global emerging beneath."
        >
          <g fontFamily="system-ui, sans-serif" textAnchor="middle">
            <circle cx="110" cy="130" r="46" fill="none" stroke="#5b8cff" strokeWidth="2" opacity="0.8" />
            <circle cx="110" cy="130" r="7" fill="#5b8cff" />
            <text x="110" y="80" fill="#eef2ff" fontSize="13" fontWeight="600">Technology</text>
            <circle cx="290" cy="130" r="46" fill="none" stroke="#3ddc97" strokeWidth="2" opacity="0.8" />
            <circle cx="290" cy="130" r="7" fill="#3ddc97" />
            <text x="290" y="80" fill="#eef2ff" fontSize="13" fontWeight="600">Talent</text>
            <line x1="140" y1="160" x2="185" y2="240" stroke="#5b8cff" strokeWidth="2" opacity="0.6" />
            <line x1="260" y1="160" x2="215" y2="240" stroke="#3ddc97" strokeWidth="2" opacity="0.6" />
            <circle cx="200" cy="258" r="7" fill="#ffd97a" />
            <text x="200" y="288" fill="#eef2ff" fontSize="13" fontWeight="600">Business Growth</text>
            <g fill="#eef2ff" opacity="0.6" fontSize="11">
              <text x="110" y="322">PoojaPath</text>
              <text x="200" y="322">2DO AI</text>
              <text x="300" y="322">CareerSignal Global</text>
            </g>
          </g>
        </svg>
      ) : (
        <canvas ref={canvasRef} aria-hidden="true" />
      )}
      <p className="sr-only">
        Technology and Talent operate as two connected systems whose work converges
        into business growth, with PoojaPath, 2DO AI and CareerSignal Global emerging
        as products beneath.
      </p>
    </div>
  );
}
