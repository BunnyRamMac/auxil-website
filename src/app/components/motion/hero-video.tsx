"use client";

import { usePrefersReducedMotion } from "./use-motion-prefs";

/**
 * Full-bleed cinematic hero: the brand film plays behind the headline,
 * on desktop and mobile alike. Static poster only when reduced motion is
 * preferred; the video is muted, loops, and never autoplays with sound.
 */
export function HeroVideo() {
  const reduced = usePrefersReducedMotion();
  const staticMode = reduced;

  return (
    <div className="hero-video-bg" aria-hidden="true">
      {staticMode ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/hero/auxil-hero-poster.jpg" alt="" />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero/auxil-hero-poster.jpg"
          src="/hero/auxil-hero.mp4"
        />
      )}
      <span className="hero-video-shade" />
      {!staticMode && (
        <div className="hero-kinetic" aria-hidden="true">
          <span>BUILD.</span>
          <span>AUTOMATE.</span>
          <span>HIRE.</span>
        </div>
      )}
    </div>
  );
}
