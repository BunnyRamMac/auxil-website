import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const partnerTypes = [
  {
    title: "Technology Partners",
    body: "Platform, infrastructure, AI, and software partners that help Auxil build dependable product ecosystems.",
  },
  {
    title: "Recruitment Partners",
    body: "Specialised hiring and delivery partners supporting US staffing, recruitment operations, and global talent access.",
  },
  {
    title: "Implementation Partners",
    body: "Delivery partners that help organisations adopt technology, automate workflows, and launch business systems.",
  },
  {
    title: "Global Expansion Partners",
    body: "Regional and strategic partners who can support Auxil’s product and services growth across new markets.",
  },
];

export const metadata: Metadata = pageMetadata(
  "/partners",
  "Partners | Auxil IT Solutions",
  "Partner with Auxil across technology, recruitment, implementation, and global expansion initiatives.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Auxil Partners",
  url: `${siteUrl}/partners`,
  description: metadata.description,
};

export default function PartnersPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Partners</p>
          <h1>Partnerships for products, talent, and global execution.</h1>
          <p>
            Auxil works with aligned partners who strengthen product capability,
            enterprise delivery, hiring reach, and responsible market expansion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            {partnerTypes.map((partner) => (
              <article className="content-card" key={partner.title}>
                <p className="card-kicker">Partner Type</p>
                <h2>{partner.title}</h2>
                <p>{partner.body}</p>
              </article>
            ))}
          </div>
          <div className="page-cta">
            <h2>Explore a partnership with Auxil.</h2>
            <a className="button button-primary" href="/contact">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
