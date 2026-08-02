import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const caseStudyFramework = [
  "Problem context",
  "Product or delivery approach",
  "Implementation model",
  "Technologies used",
  "Measured results",
];

export const metadata: Metadata = pageMetadata(
  "/case-studies",
  "Case Studies | Auxil IT Solutions",
  "Learn how Auxil will publish real case studies across recruitment delivery, AI product discovery, and career technology.",
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
            Future case studies will document real projects with clear context,
            constraints, implementation decisions, and outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner case-study-list">
          <article className="case-study-card">
            <div>
              <p className="card-kicker">Case Studies</p>
              <h2>Real case studies will be published only when they can be shared accurately.</h2>
            </div>
            <div className="case-study-grid">
              <section>
                <h3>Problem</h3>
                <p>Each future story will begin with the actual business or product problem.</p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>The approach will explain the design, engineering, or delivery model used.</p>
              </section>
              <section>
                <h3>Results</h3>
                <p>Outcomes will be shared only when they are factual and approved for publication.</p>
              </section>
              <section>
                <h3>Technologies</h3>
                <ul className="dash-list">
                  {caseStudyFramework.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
            <a className="button button-secondary" href="/contact">
              Discuss a Similar Problem
            </a>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
