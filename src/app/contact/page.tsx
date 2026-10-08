import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SmartIntake } from "../components/smart-intake";
import { pageMetadata } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact | Auxil IT Solutions",
  "Contact Auxil IT Solutions about AI products, technology initiatives, US staffing, recruitment, and workforce requirements.",
);

export default function ContactPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you want to build—or solve.</h1>
          <p>
            Connect with Auxil about our products, technology initiatives, US
            staffing, recruitment partnerships or workforce requirements.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-inner contact-panel">
          <SmartIntake />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
