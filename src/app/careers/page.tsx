import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const culture = [
  "Work on useful AI products with practical customer context.",
  "Value clarity, ownership, and thoughtful execution.",
  "Build across product, engineering, talent, and operations.",
];

const benefits = [
  "Meaningful ownership",
  "Learning-oriented environment",
  "Exposure to product and enterprise work",
  "Flexible collaboration rhythms",
  "Career growth through real responsibility",
];

const hiringSteps = [
  "Application review",
  "Introductory conversation",
  "Role-focused assessment or portfolio discussion",
  "Final leadership conversation",
  "Offer and onboarding",
];

const openPositions = [
  "Product Designer",
  "Frontend Engineer",
  "AI Product Engineer",
  "Technical Recruiter",
  "Recruitment Delivery Lead",
];

export const metadata: Metadata = pageMetadata(
  "/careers",
  "Careers | Auxil IT Solutions",
  "Explore careers at Auxil IT Solutions and join a team building AI products and enterprise technology capabilities.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CareersPage",
  name: "Careers at Auxil IT Solutions",
  url: `${siteUrl}/careers`,
  description: metadata.description,
};

export default function CareersPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Careers</p>
          <h1>Join a company building practical AI for real work.</h1>
          <p>
            Auxil is for people who want to combine product ambition with
            operational maturity, clear thinking, and high ownership.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner content-stack">
          <div className="section-heading">
            <p className="eyebrow">Why Join Auxil</p>
            <h2>Work close to problems that matter.</h2>
          </div>
          <div className="content-grid three">
            {culture.map((item) => (
              <article className="content-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="editorial-grid">
            <article>
              <p className="eyebrow">Culture</p>
              <h2>Quiet intensity, clear ownership, useful outcomes.</h2>
              <p>
                We value people who can think from first principles, communicate
                clearly, and turn ambiguity into dependable progress.
              </p>
            </article>
            <article>
              <p className="eyebrow">Benefits</p>
              <ul className="dash-list">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="content-grid two">
            <article className="content-card">
              <p className="eyebrow">Hiring Process</p>
              <ol className="number-list">
                {hiringSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
            <article className="content-card">
              <p className="eyebrow">Open Positions</p>
              <ul className="dash-list">
                {openPositions.map((position) => (
                  <li key={position}>{position}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="page-cta">
            <h2>Want to build the next stage of Auxil?</h2>
            <a className="button button-primary" href="/contact">
              Apply Now
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
