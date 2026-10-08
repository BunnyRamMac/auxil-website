import type { Metadata } from "next";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { TrackedLink } from "../../components/tracked-link";
import { FlowSvg, type FlowStep } from "../../components/motion/flow-svg";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "../../site-data";

export const metadata: Metadata = pageMetadata(
  "/services/technology",
  "Technology Solutions | Auxil IT Solutions",
  "AI & automation, software and product engineering, and digital transformation services from Auxil IT Solutions.",
);

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technology Solutions", path: "/services/technology" },
  ]),
  serviceSchema({
    name: "Technology solutions",
    path: "/services/technology",
    description:
      "AI & automation, software and product engineering, and digital transformation services from Auxil IT Solutions.",
    serviceType: ["AI & Automation", "Software & Product Engineering", "Digital Transformation"],
    areaServed: ["India", "United States"],
  }),
];

const sections: {
  id: string;
  kicker: string;
  title: string;
  steps: FlowStep[];
  layout: "horizontal" | "vertical";
  body: string;
  offerings: string[];
}[] = [
  {
    id: "agentic-ai",
    kicker: "Agentic AI",
    title: "AI agents that do real work — with humans at the decision points.",
    steps: [
      { label: "Discover" },
      { label: "Reason" },
      { label: "Act" },
      { label: "Validate" },
      { label: "Human handoff" },
    ],
    layout: "horizontal",
    body: "Auxil designs AI agent systems that operate inside your real workflows — gathering information, drafting outputs, and moving routine work forward — while people stay at every consequential decision. We start from the work your team already does, connect agents to your existing tools and data, and keep every agent action observable, reviewable, and reversible.",
    offerings: [
      "Recruiting workflow agents",
      "Internal knowledge assistants",
      "Document-processing agents",
      "Research agents",
      "Customer-support agents",
      "Approval and workflow orchestration",
      "Human-in-the-loop automation",
    ],
  },
  {
    id: "ai-automation",
    kicker: "AI & Automation",
    title: "Apply AI where it creates genuine value.",
    steps: [
      { label: "Manual process" },
      { label: "AI orchestration", sub: ["Intelligent tasks", "Agents"] },
      { label: "Human decision" },
      { label: "Business outcome" },
    ],
    layout: "horizontal",
    body: "Practical advisory and implementation for identifying AI opportunities, defining product workflows, and planning responsible adoption — automation that serves the business, not the other way round.",
    offerings: [
      "AI opportunity assessment",
      "Workflow automation",
      "AI integrations for existing software",
      "AI product development support",
    ],
  },
  {
    id: "software-engineering",
    kicker: "Software & Product Engineering",
    title: "Design and engineering support for software that lasts.",
    steps: [
      { label: "Discover" },
      { label: "Design" },
      { label: "Build" },
      { label: "Integrate" },
      { label: "Operate" },
    ],
    layout: "vertical",
    body: "Design and engineering support for SaaS, workflow products, internal platforms, and AI-enabled software — from first discovery through dependable operation.",
    offerings: [
      "Product discovery",
      "SaaS product engineering",
      "Web and mobile applications",
      "Dedicated product teams",
    ],
  },
  {
    id: "enterprise-transformation",
    kicker: "Digital / Enterprise Transformation",
    title: "Modernise how work gets done.",
    steps: [
      { label: "Assess" },
      { label: "Modernise" },
      { label: "Integrate" },
      { label: "Operate" },
    ],
    layout: "horizontal",
    body: "Dependable development and modernisation for business operations: we assess current workflows and systems, apply AI and automation where they create genuine value, and operate the result reliably.",
    offerings: [
      "Workflow and systems assessment",
      "Application modernisation",
      "AI and automation integration",
      "Ongoing operation and support",
    ],
  },
];

export default function TechnologyServicesPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Technology Solutions</p>
          <h1>Design, build, and automate with Auxil.</h1>
          <p>
            From AI opportunity assessment to production software — we help you
            build smarter technology and automate work that slows you down.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section className="section" id={section.id} key={section.id}>
          <div className="section-inner">
            <p className="eyebrow">{section.kicker}</p>
            <h2>{section.title}</h2>
            <FlowSvg
              steps={section.steps}
              layout={section.layout}
              label={`${section.kicker} flow: ${section.steps.map((s) => s.label).join(", ")}.`}
            />
            <p>{section.body}</p>
            <ul className="dash-list">
              {section.offerings.map((offering) => (
                <li key={offering}>{offering}</li>
              ))}
            </ul>
            <div className="page-cta">
              <TrackedLink
                className="button button-primary"
                href="/contact"
                eventName="service_cta_click"
                eventPayload={{ page: "/services/technology", service: section.kicker }}
              >
                Discuss your technology needs
              </TrackedLink>
              {section.id === "ai-automation" && (
                <TrackedLink
                  className="button button-secondary"
                  href="/ai-opportunity-assessment"
                  eventName="service_cta_click"
                  eventPayload={{ page: "/services/technology", service: "AI opportunity assessment" }}
                >
                  Try the AI opportunity assessment
                </TrackedLink>
              )}
            </div>
          </div>
        </section>
      ))}
      <SiteFooter />
    </main>
  );
}
