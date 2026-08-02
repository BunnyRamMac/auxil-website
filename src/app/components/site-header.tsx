"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "../site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Auxil home" onClick={closeDrawer}>
          <Image
            src="/logo/auxil-logo.png"
            alt="Auxil IT Solutions"
            width={1536}
            height={1024}
            sizes="96px"
            priority
          />
        </Link>

        <div className="nav-links">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="nav-cta" href="/contact">
          Let&apos;s Talk
        </Link>

        <button
          className="nav-menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div className="mobile-nav" id="mobile-navigation" data-open={isOpen}>
        {isOpen && (
          <div className="section-inner mobile-nav-inner">
            {primaryNav.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeDrawer}>
                {link.label}
              </Link>
            ))}
            <Link className="mobile-nav-cta" href="/contact" onClick={closeDrawer}>
              Let&apos;s Talk
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
