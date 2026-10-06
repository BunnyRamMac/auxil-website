{/*
  DRAFT — REQUIRES OWNER APPROVAL BEFORE PUBLIC LINKING.
  This is a minimal, non-committal skeleton. It intentionally states NO governing
  law, NO SLAs, NO refund policy, NO warranties, NO certifications, and NO data
  practices. Every substantive clause below needs owner/legal review before this
  page is linked publicly. Recommend attorney review.
*/}
import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { breadcrumbSchema, pageMetadata } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/terms",
  "Terms of Service | Auxil IT Solutions",
  "Terms of service for the Auxil IT Solutions website.",
);

const structuredData = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
]);

export default function TermsPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>
            These terms govern your use of the Auxil IT Solutions website at
            auxilitsolutions.com. By using this website, you agree to these terms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner legal-shell">
          <h2>Use of the website</h2>
          <p>
            You agree to use this website lawfully and not to misuse it or its
            forms — including submitting false enquiries or attempting to disrupt
            the service.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content of this website is owned by Auxil IT Solutions unless
            stated otherwise. You may not reproduce it without permission.
          </p>

          <h2>Third-party links</h2>
          <p>
            This website may link to third-party websites. Auxil IT Solutions is
            not responsible for the content of external sites.
          </p>

          <h2>Products in development</h2>
          <p>
            References on this website to products in development or private
            testing describe current initiatives only and do not constitute an
            offer, commitment, or guarantee of availability, features, or timelines.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent through our{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
