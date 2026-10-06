import type { Metadata } from "next";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { TrackedLink } from "../../components/tracked-link";
import { FlowSvg } from "../../components/motion/flow-svg";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "../../site-data";

export const metadata: Metadata = pageMetadata(
  "/services/talent",
  "Talent Solutions | Auxil IT Solutions",
  "US staffing, RPO, contract staffing, executive search and payroll services from Auxil IT Solutions.",
);

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Talent Solutions", path: "/services/talent" },
  ]),
  serviceSchema({
    name: "Talent solutions",
    path: "/services/talent",
    description:
      "US staffing, RPO, contract staffing, executive search and payroll services from Auxil IT Solutions.",
    serviceType: [
      "Recruitment & Talent Acquisition",
      "RPO & GCC Hiring",
      "Contract Staffing & Payroll",
      "Executive Search",
      "US Staffing",
    ],
    areaServed: ["India", "United States"],
  }),
];

const sections = [
  {
    id: "recruitment",
    kicker: "Recruitment & Talent Acquisition",
    title: "Hire the right people, with rigour.",
    body: "We support organisations across the recruitment lifecycle — from role discovery and sourcing to assessment coordination, stakeholder management and successful joining.",
    capabilities: [
      "IT and Non-IT recruitment",
      "Technical hiring",
      "Product and engineering hiring",
      "Leadership hiring",
      "Volume recruitment",
      "Talent advisory",
    ],
  },
  {
    id: "rpo-gcc",
    kicker: "RPO & GCC Hiring",
    title: "Hiring operations that scale with you.",
    body: "Structured hiring operations that support sourcing, screening, coordination, reporting, and delivery management — including support for GCC hiring needs.",
    capabilities: [
      "Recruitment Process Outsourcing (RPO)",
      "Recruitment delivery management",
      "GCC hiring",
      "Recruiter training and process improvement",
    ],
  },
  {
    id: "contract-payroll",
    kicker: "Contract Staffing & Payroll",
    title: "Flexible workforce, simplified administration.",
    body: "Auxil helps businesses simplify workforce administration through organised staffing and payroll processes — from contract engagement to employee support.",
    capabilities: [
      "Contract staffing",
      "Contract-to-hire",
      "Payroll processing",
      "Employee onboarding",
      "Attendance and input coordination",
      "Statutory-compliance coordination",
      "Employee documentation",
      "HR administration",
      "Contractor workforce support",
      "Payroll reporting",
    ],
  },
  {
    id: "executive-search",
    kicker: "Executive Search",
    title: "Leadership search, handled with focus.",
    body: "Focused leadership search support for senior technology, product, delivery, and business roles.",
    capabilities: ["Executive and leadership search", "Leadership hiring"],
  },
  {
    id: "us-staffing",
    kicker: "US Staffing",
    title: "US talent, accessed with experience.",
    body: "With deep experience in US recruitment and staffing operations, Auxil helps companies access qualified technology and professional talent through flexible hiring models.",
    capabilities: [
      "US IT staffing",
      "Direct hire and permanent placement",
      "W2 recruitment",
    ],
  },
];

export default function TalentServicesPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Talent Solutions</p>
          <h1>Talent and workforce solutions built for dependable delivery.</h1>
          <p>
            Auxil helps organisations identify, engage and manage talent through
            specialised staffing, recruitment and payroll services — across 40+
            industries, for IT and non-IT roles, with delivery locations in India
            and the USA.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">How talent delivery works</p>
          <h2>A lifecycle, not a handoff.</h2>
          <FlowSvg
            layout="loop"
            label="Talent delivery lifecycle: Need, Map, Source, Assess, Hire, Support."
            steps={[
              { label: "Need" },
              { label: "Map" },
              { label: "Source" },
              { label: "Assess" },
              { label: "Hire" },
              { label: "Support" },
            ]}
          />
          <p>
            We map the market for your role, source and assess candidates with
            rigour, and support hiring through joining and beyond.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section className="section" id={section.id} key={section.id}>
          <div className="section-inner">
            <p className="eyebrow">{section.kicker}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <ul className="dash-list">
              {section.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <div className="page-cta">
              <TrackedLink
                className="button button-primary"
                href="/contact"
                eventName="service_cta_click"
                eventPayload={{ page: "/services/talent", service: section.kicker }}
              >
                Discuss your hiring needs
              </TrackedLink>
            </div>
          </div>
        </section>
      ))}
      <SiteFooter />
    </main>
  );
}
