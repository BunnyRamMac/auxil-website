import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, products, siteUrl } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/products",
  "Products | Auxil IT Solutions",
  "Explore Auxil products across spiritual technology, productivity, career intelligence, and AI-powered resume creation.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Auxil Products",
  url: `${siteUrl}/products`,
  hasPart: products.map((product) => ({
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    description: product.overview,
  })),
};

export default function ProductsPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Products</p>
          <h1>Intelligent products for meaningful everyday systems.</h1>
          <p>
            Auxil is developing focused AI products across productivity, career
            intelligence, resume creation, and spiritual technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="product-showcase-grid">
            {products.map((product) => (
              <article className="content-card product-showcase-card" id={product.id} key={product.name}>
                <div className="card-topline">
                  <p className="card-kicker">Product</p>
                  <span className="status-pill">{product.status}</span>
                </div>
                <h2>{product.name}</h2>
                <p>{product.overview}</p>
                <div>
                  <h3>Key Features</h3>
                  <ul className="dash-list">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Target Audience</h3>
                  <p>{product.audience}</p>
                </div>
                <a className="button button-secondary" href="/contact">
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="section-inner page-cta">
          <h2>Interested in early access or product partnerships?</h2>
          <a className="button button-primary" href="/contact">
            Talk to Auxil
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
