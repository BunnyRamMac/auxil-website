import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrackedLink } from "../components/tracked-link";
import { consultingServices, pageMetadata, serviceSchema } from "../site-data";

const serviceCopy: Record<string, string> = {
  "US Staffing":
    "Flexible technology staffing support for contract, contract-to-hire, direct hire, and recruitment delivery needs.",
  "Recruitment Process Outsourcing":
    "Structured hiring operations that support sourcing, screening, coordination, reporting, and delivery management.",
  "Executive Search":
    "Focused leadership search support for senior technology, product, delivery, and business roles.",
  "AI Consulting":
    "Practical advisory for identifying AI opportunities, defining product workflows, and planning responsible implementation.",
  "Product Engineering":
    "Design and engineering support for SaaS, workflow products, internal platforms, and AI-enabled software.",
  "Enterprise Software":
    "Dependable web and application development for business operations, automation, and digital transformation.",
  "Dedicated Teams":
    "Longer-term delivery pods that combine product, engineering, quality, and operational support.",
  "Recruitment Technology":
    "Technology support for hiring workflows, recruiter enablement, automation, reporting, and candidate experience.",
};

export const metadata: Metadata = pageMetadata(
  "/consulting",
  "Consulting & Enterprise Solutions | Auxil IT Solutions",
  "Auxil supports businesses with US staffing, RPO, executive search, AI consulting, product engineering, and enterprise software services.",
);

const structuredData = {
  ...serviceSchema({
    name: "AI consulting, product engineering, and recruitment services",
    path: "/consulting",
    description:
      "Auxil supports AI consulting, product engineering, enterprise software, US staffing, RPO, and technical recruitment needs.",
    serviceType: consultingServices,
    areaServed: ["India", "United States"],
  }),
};

export default function ConsultingPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Services</p>
          <h1>Enterprise support for technology, talent, and AI delivery.</h1>
          <p>
            Auxil helps organisations strengthen hiring operations, modernise
            software workflows, and evaluate AI opportunities with practical
            execution support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            {consultingServices.map((service) => (
              <article className="content-card" key={service}>
                <p className="card-kicker">Capability</p>
                <h2>{service}</h2>
                <p>{serviceCopy[service]}</p>
              </article>
            ))}
          </div>
          <div className="page-cta">
            <h2>Need a dependable partner for a complex business requirement?</h2>
            <TrackedLink
              className="button button-primary"
              href="/contact"
              eventName="service_cta_click"
              eventPayload={{ page: "/consulting", service: "Consulting and Enterprise Solutions" }}
            >
              Start a Conversation
            </TrackedLink>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
