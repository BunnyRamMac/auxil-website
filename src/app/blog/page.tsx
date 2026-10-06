import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata } from "../site-data";

const editorialTracks = [
  "AI Products",
  "Recruitment",
  "Technology",
  "Career Intelligence",
];

export const metadata: Metadata = {
  ...pageMetadata(
    "/blog",
    "Blog | Auxil IT Solutions",
    "Read Auxil perspectives on AI products, recruitment operations, product engineering, and career intelligence.",
  ),
  // Phase 1: kept as a route but excluded from indexing until substantive posts exist.
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Blog</p>
          <h1>Ideas on AI products, hiring systems, and useful software.</h1>
          <p>
            Notes from Auxil on product direction, recruitment intelligence,
            software delivery, and the practical side of building with AI.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            <article className="content-card feature-card">
              <p className="card-kicker">Editorial Direction</p>
              <h2>Publishing will begin when there is something useful to say.</h2>
              <p>
                Auxil is preparing concise, practical writing on AI product
                decisions, recruitment operations, software delivery, and career
                intelligence. The library is intentionally empty until each piece
                is ready for publication.
              </p>
            </article>
            <article className="content-card">
              <p className="card-kicker">Planned Categories</p>
              <ul className="dash-list">
                {editorialTracks.map((track) => (
                  <li key={track}>{track}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="page-cta">
            <h2>Want a deeper discussion on AI product strategy?</h2>
            <a className="button button-primary" href="/contact">
              Talk to Auxil
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
