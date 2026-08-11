import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata } from "../site-data";

const resourceGroups = [
  {
    id: "whitepapers",
    title: "Whitepapers",
    description: "Long-form research and product strategy documents will be added as they are prepared for publication.",
  },
  {
    id: "guides",
    title: "Guides",
    description: "Practical guides will focus on AI workflow discovery, product planning, and recruitment operations.",
  },
  {
    id: "downloads",
    title: "Downloads",
    description: "Downloadable worksheets and planning assets will be published only when they are ready to use.",
  },
  {
    id: "recruitment-reports",
    title: "Recruitment Reports",
    description: "Recruitment reports will cover staffing operations, process quality, and delivery patterns.",
  },
  {
    id: "ai-reports",
    title: "AI Reports",
    description: "AI reports will examine practical adoption opportunities and product patterns.",
  },
];

export const metadata: Metadata = pageMetadata(
  "/resources",
  "Resources | Auxil IT Solutions",
  "Explore Auxil resources including AI reports, recruitment reports, guides, whitepapers, and downloads.",
);

export default function ResourcesPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Resources</p>
          <h1>Research, guides, and practical tools from Auxil.</h1>
          <p>
            A growing resource library for AI product strategy, software
            planning, recruitment operations, and workforce delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            {resourceGroups.map((group) => (
              <article className="content-card" id={group.id} key={group.title}>
                <p className="card-kicker">Resource Type</p>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <a className="text-link" href="/contact">
                  Request access
                </a>
              </article>
            ))}
          </div>
          <div className="page-cta">
            <h2>Looking for a specific report or planning asset?</h2>
            <a className="button button-primary" href="/contact">
              Contact Auxil
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
