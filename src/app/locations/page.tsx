import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrackedLink } from "../components/tracked-link";
import { breadcrumbSchema, pageMetadata } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/locations",
  "Locations | Auxil IT Solutions",
  "See Auxil location context for AI product development, technology services, staffing, and recruitment support.",
);

const structuredData = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
]);

export default function LocationsPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Locations</p>
          <h1>Location context for Auxil products and services.</h1>
          <p>
            Auxil publishes location pages only where there is genuine business
            relevance, unique context, and a useful reason for the page to exist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            <article className="content-card">
              <p className="card-kicker">Headquarters</p>
              <h2>Hyderabad, India</h2>
              <p>
                Auxil is headquartered in Hyderabad, where its product direction
                and delivery experience connect AI product development,
                recruitment operations, and technology services.
              </p>
              <TrackedLink
                className="button button-secondary"
                href="/locations/hyderabad"
                eventPayload={{ page: "/locations", location: "Hyderabad" }}
              >
                View Hyderabad
              </TrackedLink>
            </article>
            <article className="content-card">
              <p className="card-kicker">Publishing Standard</p>
              <h2>No thin city pages.</h2>
              <p>
                India and United States market context is covered through
                services and company pages until there is enough unique location
                content to justify dedicated pages.
              </p>
            </article>
          </div>
          <div className="page-cta">
            <h2>Need location-aware support for a product or hiring requirement?</h2>
            <TrackedLink
              className="button button-primary"
              href="/contact"
              eventName="service_cta_click"
              eventPayload={{ page: "/locations", service: "Location enquiry" }}
            >
              Talk to Auxil
            </TrackedLink>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
