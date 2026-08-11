import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrackedLink } from "../components/tracked-link";
import { pageMetadata, products } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/products",
  "Products | Auxil IT Solutions",
  "Explore Auxil products across spiritual technology, productivity, and career intelligence.",
);

export default function ProductsPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Products</p>
          <h1>Intelligent products for work, careers, and daily practice.</h1>
          <p>
            Auxil is developing products where AI can reduce friction, improve
            decisions, and support routines that already matter to people.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="product-showcase-grid">
            {products.map((product) => (
              <article className="content-card product-showcase-card" id={product.id} key={product.name}>
                <div className="card-topline">
                  <p className="card-kicker">Product Story</p>
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
                <TrackedLink
                  className="button button-secondary"
                  href="/contact"
                  eventName="product_cta_click"
                  eventPayload={{ page: "/products", product: product.name }}
                >
                  Learn More
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="section-inner page-cta">
          <h2>Interested in early access or product partnerships?</h2>
          <TrackedLink
            className="button button-primary"
            href="/contact"
            eventName="product_cta_click"
            eventPayload={{ page: "/products", product: "Product partnerships" }}
          >
            Talk to Auxil
          </TrackedLink>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
