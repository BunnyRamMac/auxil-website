"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav, type NavItem } from "../site-data";

function isActive(item: NavItem, pathname: string) {
  if (pathname === item.href) return true;
  return !!item.children?.some((child) => pathname === child.href.split("#")[0]);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeDrawer = () => {
    setIsOpen(false);
    setExpandedMobile(null);
  };

  // Close menus whenever the route changes (render-phase adjustment).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setIsOpen(false);
    setExpandedMobile(null);
  }

  useEffect(() => {
    // Escape closes any open desktop dropdown or the mobile drawer,
    // wherever keyboard focus currently sits.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsOpen(false);
        setExpandedMobile(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const onMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") setOpenMenu(null);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Auxil home" onClick={closeDrawer}>
          <Image
            src="/logo/auxil-logo.png"
            alt="Auxil IT Solutions"
            width={1297}
            height={432}
            sizes="96px"
            priority
          />
        </Link>

        <div className="nav-links">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="nav-dropdown"
                data-open={openMenu === item.label}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                onMouseLeave={scheduleClose}
                onKeyDown={onMenuKeyDown}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item, pathname) ? "page" : undefined}
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  aria-label={`${item.label} submenu`}
                  onClick={() =>
                    setOpenMenu((current) => (current === item.label ? null : item.label))
                  }
                >
                  <span aria-hidden="true" className="nav-chevron" />
                </button>
                <div className="nav-dropdown-menu" role="menu" aria-label={`${item.label} submenu`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
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
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.href} className="mobile-nav-group">
                  <div className="mobile-nav-row">
                    <Link href={item.href} onClick={closeDrawer}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="mobile-nav-expand"
                      aria-expanded={expandedMobile === item.label}
                      aria-label={`Expand ${item.label} submenu`}
                      onClick={() =>
                        setExpandedMobile((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                    >
                      <span aria-hidden="true" className="nav-chevron" />
                    </button>
                  </div>
                  {expandedMobile === item.label && (
                    <div className="mobile-nav-submenu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={closeDrawer}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={closeDrawer}>
                  {item.label}
                </Link>
              ),
            )}
            <Link className="mobile-nav-cta" href="/contact" onClick={closeDrawer}>
              Let&apos;s Talk
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
