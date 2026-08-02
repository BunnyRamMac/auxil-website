import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const resourceGroups = [
  {
    id: "whitepapers",
    title: "Whitepapers",
    resources: [
      "Practical AI product strategy for early-stage teams",
      "Designing dependable user experiences for intelligent software",
    ],
  },
  {
    id: "guides",
    title: "Guides",
    resources: [
      "AI workflow discovery checklist",
      "Recruitment delivery readiness guide",
      "Product engineering engagement planner",
    ],
  },
  {
    id: "downloads",
    title: "Downloads",
    resources: [
      "Product discovery worksheet",
      "Hiring workflow audit template",
      "Enterprise software planning checklist",
    ],
  },
  {
    id: "recruitment-reports",
    title: "Recruitment Reports",
    resources: [
      "Technology hiring operations report",
      "Recruitment process improvement brief",
    ],
  },
  {
    id: "ai-reports",
    title: "AI Reports",
    resources: [
      "AI adoption opportunities in business workflows",
      "Useful intelligence patterns for SaaS products",
    ],
  },
];

export const metadata: Metadata = pageMetadata(
  "/resources",
  "Resources | Auxil IT Solutions",
  "Explore Auxil resources including AI reports, recruitment reports, guides, whitepapers, and downloads.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Auxil Resources",
  url: `${siteUrl}/resources`,
  description: metadata.description,
};

export default function ResourcesPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
                <ul className="dash-list">
                  {group.resources.map((resource) => (
                    <li key={resource}>{resource}</li>
                  ))}
                </ul>
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
