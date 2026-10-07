import Image from "next/image";
import Link from "next/link";
import { footerGroups, socialLinks } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="section-inner footer-grid footer-grid-expanded">
        <div className="footer-company">
          <Link className="footer-brand" href="/">
            <Image
              src="/logo/auxil-logo.png"
              alt="Auxil IT Solutions"
              width={1536}
              height={1024}
            />
          </Link>
          <p>Building intelligent products for real life.</p>
          <p>Founded in Hyderabad, March 2022</p>
        </div>

        <div className="footer-directory" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-column" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="section-inner footer-bottom">
        <p>© {new Date().getFullYear()} Auxil IT Solutions. All rights reserved.</p>
        {socialLinks.length > 0 && (
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
