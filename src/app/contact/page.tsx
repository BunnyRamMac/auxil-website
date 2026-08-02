import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact | Auxil IT Solutions",
  "Contact Auxil IT Solutions about AI products, technology initiatives, US staffing, recruitment, and workforce requirements.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Auxil IT Solutions",
  url: `${siteUrl}/contact`,
  description: metadata.description,
};

export default function ContactPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
