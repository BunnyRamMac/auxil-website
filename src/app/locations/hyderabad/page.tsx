import type { Metadata } from "next";
import { ContactForm } from "../../components/contact-form";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { TrackedLink } from "../../components/tracked-link";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "../../site-data";

const faqs = [
  {
    question: "Why does Auxil publish a Hyderabad location page?",
    answer:
      "Auxil is headquartered in Hyderabad, so this page reflects the company's real operating context rather than a generic city landing page.",
  },
  {
    question: "Which services are relevant from Hyderabad?",
    answer:
      "Auxil's Hyderabad context supports AI product development, product engineering, AI consulting, recruitment operations, and selected US staffing delivery work.",
  },
  {
    question: "Does Auxil serve clients outside Hyderabad?",
    answer:
      "Yes. Auxil's work includes India-based product and delivery context along with services connected to United States staffing and recruitment needs.",
  },
];

export const metadata: Metadata = pageMetadata(
  "/locations/hyderabad",
  "AI Product Development & Recruitment Services in Hyderabad | Auxil",
  "Learn how Auxil's Hyderabad headquarters supports AI product development, product engineering, AI consulting, and recruitment delivery.",
);

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: "Hyderabad", path: "/locations/hyderabad" },
  ]),
  serviceSchema({
    name: "AI product development and recruitment services in Hyderabad",
    path: "/locations/hyderabad",
    description: metadata.description || "",
    serviceType: [
      "AI product development",
      "AI consulting",
      "SaaS product engineering",
      "Technical recruitment",
      "US IT staffing support",
    ],
    areaServed: "Hyderabad",
  }),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function HyderabadLocationPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Hyderabad</p>
          <h1>AI product development and recruitment services in Hyderabad.</h1>
          <p>
            Auxil is headquartered in Hyderabad, where product thinking,
            engineering execution, and recruitment delivery experience inform
            the company&apos;s AI-first direction.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner content-stack">
          <div className="editorial-grid">
            <article>
              <p className="eyebrow">Local Context</p>
              <h2>Built from a real operating base, not a doorway page.</h2>
              <p>
                Hyderabad matters to Auxil because it is the company&apos;s stated
                headquarters and a practical base for product research,
                software delivery, and recruiting operations. The page focuses
                on that actual connection rather than generic city claims.
              </p>
            </article>
            <article>
              <p className="eyebrow">Relevant Work</p>
              <ul className="dash-list">
                <li>AI product strategy and product discovery</li>
                <li>SaaS and workflow product engineering</li>
                <li>AI consulting for practical business workflows</li>
                <li>Technical recruitment and RPO delivery support</li>
                <li>US IT staffing support connected to recruitment operations</li>
              </ul>
            </article>
          </div>

          <div className="content-grid two">
            <article className="content-card">
              <p className="card-kicker">Products</p>
              <h2>AI products shaped by real user routines.</h2>
              <p>
                Auxil&apos;s product work across CareerSignal Global, 2DO AI, and
                PoojaPath connects daily workflows, career decisions, and
                practice-oriented software with careful AI product thinking.
              </p>
              <TrackedLink
                className="text-link"
                href="/products"
                eventName="product_cta_click"
                eventPayload={{ page: "/locations/hyderabad", location: "Hyderabad" }}
              >
                Explore products
              </TrackedLink>
            </article>
            <article className="content-card">
              <p className="card-kicker">Services</p>
              <h2>Technology and hiring support with delivery discipline.</h2>
              <p>
                Auxil&apos;s services remain focused: AI consulting, product
                engineering, enterprise software, recruitment operations, RPO,
                and US staffing support where the requirement is concrete.
              </p>
              <TrackedLink
                className="text-link"
                href="/services"
                eventName="service_cta_click"
                eventPayload={{ page: "/locations/hyderabad", location: "Hyderabad" }}
              >
                View services
              </TrackedLink>
            </article>
          </div>

          <div className="content-grid three">
            {faqs.map((item) => (
              <article className="content-card" key={item.question}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Discuss a Hyderabad-connected product or hiring requirement.</h2>
            <p>
              Share the business context, service need, or product direction.
              Auxil will respond without adding unnecessary intake steps.
            </p>
            <ContactForm
              source={{
                page: "/locations/hyderabad",
                service: "Location enquiry",
                location: "Hyderabad",
              }}
              submitLabel="Send Hyderabad Enquiry"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
