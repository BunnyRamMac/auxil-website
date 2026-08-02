import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const caseStudies = [
  {
    title: "Recruitment delivery operating model",
    industry: "Technology Staffing",
    problem:
      "A growing delivery team needed clearer coordination across sourcing, screening, stakeholder updates, and joining follow-through.",
    solution:
      "Auxil structured a recruitment workflow with defined ownership, reporting cadence, candidate tracking, and delivery checkpoints.",
    results:
      "Improved visibility, cleaner handoffs, and more dependable recruitment delivery across active roles.",
    technologies: ["Workflow design", "Recruitment operations", "Reporting systems"],
  },
  {
    title: "AI product discovery for workflow automation",
    industry: "Enterprise Software",
    problem:
      "A business workflow had repeated manual steps but unclear requirements for where AI would create durable value.",
    solution:
      "Auxil mapped user tasks, decision points, risks, and automation opportunities before defining the product architecture.",
    results:
      "A clearer roadmap for AI-assisted workflows, implementation priorities, and experience design.",
    technologies: ["Product discovery", "AI strategy", "SaaS architecture"],
  },
  {
    title: "Candidate experience and resume intelligence",
    industry: "Career Technology",
    problem:
      "Candidates needed stronger resume structure and more confidence aligning applications with role expectations.",
    solution:
      "Auxil researched resume patterns, hiring signals, and guidance flows for an AI-assisted career document experience.",
    results:
      "A focused product direction for resume clarity, role fit, and application readiness.",
    technologies: ["Career intelligence", "AI-assisted writing", "UX research"],
  },
];

export const metadata: Metadata = pageMetadata(
  "/case-studies",
  "Case Studies | Auxil IT Solutions",
  "Explore Auxil case studies across recruitment delivery, AI product discovery, and career technology.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Auxil Case Studies",
  url: `${siteUrl}/case-studies`,
  description: metadata.description,
};

export default function CaseStudiesPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Case Studies</p>
          <h1>Practical work across delivery, products, and intelligent systems.</h1>
          <p>
            Selected examples of how Auxil thinks through operational problems,
            product direction, and technology execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner case-study-list">
          {caseStudies.map((study) => (
            <article className="case-study-card" key={study.title}>
              <div>
                <p className="card-kicker">{study.industry}</p>
                <h2>{study.title}</h2>
              </div>
              <div className="case-study-grid">
                <section>
                  <h3>Problem</h3>
                  <p>{study.problem}</p>
                </section>
                <section>
                  <h3>Solution</h3>
                  <p>{study.solution}</p>
                </section>
                <section>
                  <h3>Results</h3>
                  <p>{study.results}</p>
                </section>
                <section>
                  <h3>Technologies</h3>
                  <ul className="dash-list">
                    {study.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <a className="button button-secondary" href="/contact">
                Discuss a Similar Problem
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
