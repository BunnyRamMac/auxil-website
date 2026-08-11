import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrackedLink } from "../components/tracked-link";
import { pageMetadata, serviceSchema } from "../site-data";

const enterpriseSections = [
  {
    heading: "US Staffing & Global Talent Solutions",
    body: "With deep experience in US recruitment and staffing operations, Auxil helps companies access qualified technology and professional talent through flexible hiring models.",
    capabilities: [
      "US IT staffing",
      "Contract staffing",
      "Contract-to-hire",
      "Direct hire and permanent placement",
      "W2 recruitment",
      "Recruitment Process Outsourcing (RPO)",
      "Executive and leadership search",
      "Recruitment delivery management",
    ],
  },
  {
    heading: "Recruitment Solutions",
    body: "We support organisations across the recruitment lifecycle—from role discovery and sourcing to assessment coordination, stakeholder management and successful joining.",
    capabilities: [
      "IT and Non-IT recruitment",
      "Technical hiring",
      "Product and engineering hiring",
      "Leadership hiring",
      "Volume recruitment",
      "GCC hiring",
      "Talent advisory",
      "Recruiter training and process improvement",
    ],
  },
  {
    heading: "Payroll & Workforce Management",
    body: "Auxil helps businesses simplify workforce administration through organised payroll and employee-support processes.",
    capabilities: [
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
];

export const metadata: Metadata = pageMetadata(
  "/enterprise-services",
  "US Staffing, Recruitment & Workforce Services | Auxil IT Solutions",
  "Explore Auxil services for US IT staffing, technical recruitment, RPO, payroll coordination, and workforce operations.",
);

const structuredData = serviceSchema({
  name: "US staffing, recruitment, and workforce services",
  path: "/enterprise-services",
  description: metadata.description || "",
  serviceType: [
    "US IT staffing",
    "Recruitment Process Outsourcing",
    "Technical recruitment",
    "Payroll and workforce management",
  ],
  areaServed: "United States",
});

export default function EnterpriseServicesPage() {
  return (
    <main className="enterprise-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="enterprise-page-shell">
        <header className="enterprise-page-hero">
          <p className="eyebrow">Enterprise Services</p>
          <h1>Talent and workforce solutions built for dependable delivery.</h1>
          <p>
            Auxil helps organisations identify, engage and manage talent through
            specialised US staffing, recruitment and payroll services.
          </p>
        </header>

        <div className="enterprise-page-sections">
          {enterpriseSections.map((section) => (
            <section className="enterprise-editorial-section" key={section.heading}>
              <div className="enterprise-editorial-copy">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
              <ul className="enterprise-capability-list">
                {section.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <TrackedLink
          className="button button-primary"
          href="/contact"
          eventName="service_cta_click"
          eventPayload={{ page: "/enterprise-services", service: "US staffing and recruitment" }}
        >
          Discuss Staffing Needs
        </TrackedLink>
      </section>
      <SiteFooter />
    </main>
  );
}
