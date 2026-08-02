import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const timeline = [
  ["March 2022", "Auxil begins with consulting and talent solutions."],
  ["2023", "Recruitment delivery experience reveals repeatable workflow challenges."],
  ["2024", "Product research expands across productivity, careers, and digital operations."],
  ["2025", "Auxil sharpens its direction as an AI-first product company."],
  ["Now", "The company is building intelligent software while supporting selected enterprise needs."],
];

const values = [
  "Usefulness before novelty",
  "Trust through clear execution",
  "Calm product thinking",
  "Respect for real user context",
  "Long-term systems over short-term noise",
  "Global ambition with operational discipline",
];

export const metadata: Metadata = pageMetadata(
  "/company",
  "Company | Auxil IT Solutions",
  "Learn about Auxil IT Solutions, an AI-first technology company evolving from services experience into intelligent software products.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Auxil IT Solutions",
  url: `${siteUrl}/company`,
  description: metadata.description,
};

export default function CompanyPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">About Auxil</p>
          <h1>An AI-first company shaped by real delivery experience.</h1>
          <p>
            Auxil IT Solutions began by helping businesses solve operating and
            talent challenges. That foundation now informs a product company
            building practical intelligence for work, careers, and daily life.
          </p>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="section-inner editorial-grid">
          <article>
            <p className="eyebrow">Mission</p>
            <h2>Build intelligent products that make complex human workflows simpler.</h2>
            <p>
              Auxil focuses on software that helps people make better decisions,
              reduce friction, and move through meaningful routines with more
              clarity.
            </p>
          </article>
          <article>
            <p className="eyebrow">Vision</p>
            <h2>Become a global AI product company trusted for useful intelligence.</h2>
            <p>
              Our ambition is to create product systems that feel dependable,
              humane, and quietly powerful across productivity, career
              intelligence, and spiritual technology.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Core Values</p>
            <h2>Principles that guide how Auxil builds.</h2>
          </div>
          <div className="content-grid three">
            {values.map((value) => (
              <article className="content-card" key={value}>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="section-inner editorial-grid">
          <article>
            <p className="eyebrow">Leadership Philosophy</p>
            <h2>Clear judgement, high ownership, and patient product craft.</h2>
          </article>
          <article>
            <p>
              Auxil values leaders who can combine ambition with restraint:
              people who understand users, respect operations, make careful
              technical decisions, and build teams around accountability.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Why Auxil</p>
            <h2>We understand both product ambition and enterprise reality.</h2>
          </div>
          <div className="content-grid two">
            <article className="content-card">
              <h3>Product direction grounded in operations</h3>
              <p>
                Auxil’s services background gives the company a close view of
                how teams hire, manage work, and adopt technology.
              </p>
            </article>
            <article className="content-card">
              <h3>AI used where it improves real outcomes</h3>
              <p>
                The company builds with a bias toward clarity, trust, and
                measurable usefulness rather than surface-level automation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Timeline</p>
            <h2>A measured evolution toward intelligent software.</h2>
          </div>
          <ol className="timeline-list">
            {timeline.map(([date, event]) => (
              <li key={date}>
                <strong>{date}</strong>
                <span>{event}</span>
              </li>
            ))}
          </ol>
          <div className="page-cta">
            <h2>Build with a company that values depth.</h2>
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
