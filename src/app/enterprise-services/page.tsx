import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Enterprise Services | Auxil IT Solutions",
  description:
    "Specialised US staffing, recruitment, payroll and workforce services from Auxil IT Solutions.",
  alternates: {
    canonical: "/enterprise-services",
  },
};

export default function EnterpriseServicesPage() {
  return (
    <main className="enterprise-page">
      <section className="enterprise-page-shell">
        <Link className="brand enterprise-page-brand" href="/">
          <Image
            src="/logo/auxil-logo.png"
            alt="Auxil IT Solutions"
            width={1536}
            height={1024}
            priority
          />
        </Link>

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
      </section>
    </main>
  );
}
