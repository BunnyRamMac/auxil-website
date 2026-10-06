import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrackedLink } from "../components/tracked-link";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/services",
  "Technology & Talent Services | Auxil IT Solutions",
  "Auxil combines AI, software engineering and talent solutions to help businesses build, transform and grow.",
);

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  serviceSchema({
    name: "Technology and talent services",
    path: "/services",
    description:
      "Auxil works through two connected engines — Technology Solutions and Talent Solutions — helping businesses build software, automate work, and hire the people to scale.",
    serviceType: ["Technology Solutions", "Talent Solutions"],
    areaServed: ["India", "United States"],
  }),
];

const families = [
  {
    kicker: "Technology Solutions",
    title: "Build and automate with confidence.",
    body: "AI & automation, software and product engineering, and digital transformation — designed, built and operated with you.",
    href: "/services/technology",
    cta: "Explore Technology Solutions",
  },
  {
    kicker: "Talent Solutions",
    title: "Hire and scale with dependable delivery.",
    body: "Recruitment, RPO, contract staffing, executive search and US staffing — dependable delivery across 40+ industries.",
    href: "/services/talent",
    cta: "Explore Talent Solutions",
  },
];

export default function ServicesPage() {
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
          <h1>Services built to help you grow.</h1>
          <p>
            Auxil works through two connected engines — Technology Solutions and
            Talent Solutions — so you can build software, automate work, and hire
            the people to scale it, with one accountable partner.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="content-grid two">
            {families.map((family) => (
              <article className="content-card feature-card" key={family.href}>
                <p className="card-kicker">{family.kicker}</p>
                <h2>{family.title}</h2>
                <p>{family.body}</p>
                <TrackedLink
                  className="text-link"
                  href={family.href}
                  eventName="service_cta_click"
                  eventPayload={{ page: "/services", service: family.kicker }}
                >
                  {family.cta}
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">How engagement works</p>
          <h2>One partner, two clear delivery models.</h2>
          <div className="content-grid two">
            <article className="content-card">
              <p className="card-kicker">Technology</p>
              <h3>Discover → Design → Build → Integrate → Operate</h3>
              <p>
                We start from the business problem, design the right solution,
                build and integrate it with your systems, and operate it reliably.
              </p>
            </article>
            <article className="content-card">
              <p className="card-kicker">Talent</p>
              <h3>Need → Map → Source → Assess → Hire → Support</h3>
              <p>
                We map the market for your role, source and assess candidates with
                rigour, and support hiring through joining and beyond.
              </p>
            </article>
          </div>
          <div className="page-cta">
            <h2>Not sure which engine you need? Start with a conversation.</h2>
            <TrackedLink
              className="button button-primary"
              href="/contact"
              eventName="service_cta_click"
              eventPayload={{ page: "/services", service: "Services overview" }}
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
