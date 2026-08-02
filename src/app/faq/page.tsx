import type { Metadata } from "next";
import { FaqList, type FaqItem } from "../components/faq-list";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const faqs: FaqItem[] = [
  {
    category: "Products",
    question: "Are Auxil products publicly launched?",
    answer:
      "Auxil products are in private testing or development. Product availability will expand as each experience is validated with users.",
  },
  {
    category: "Products",
    question: "Which product areas is Auxil building in?",
    answer:
      "Auxil is building across productivity, career intelligence, resume creation, and spiritual technology.",
  },
  {
    category: "Recruitment",
    question: "Does Auxil support US staffing?",
    answer:
      "Yes. Auxil supports US IT staffing, contract staffing, contract-to-hire, direct hire, and recruitment delivery needs.",
  },
  {
    category: "Recruitment",
    question: "Can Auxil support RPO engagements?",
    answer:
      "Auxil can support Recruitment Process Outsourcing through sourcing, screening, coordination, reporting, and delivery management.",
  },
  {
    category: "Consulting",
    question: "What consulting services does Auxil provide?",
    answer:
      "Auxil supports AI consulting, product engineering, enterprise software, dedicated teams, recruitment technology, and related delivery services.",
  },
  {
    category: "Pricing",
    question: "How does pricing work?",
    answer:
      "Pricing depends on the engagement type, scope, duration, and delivery model. Auxil discusses pricing after understanding the requirement.",
  },
  {
    category: "Support",
    question: "How can I contact Auxil?",
    answer:
      "Use the contact page to share your product, technology, staffing, recruitment, or workforce requirement.",
  },
  {
    category: "Support",
    question: "Where is Auxil based?",
    answer:
      "Auxil IT Solutions is headquartered in Hyderabad, India, with ambitions to support global product and enterprise needs.",
  },
];

export const metadata: Metadata = pageMetadata(
  "/faq",
  "FAQ | Auxil IT Solutions",
  "Find answers about Auxil products, recruitment services, consulting, pricing, and support.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${siteUrl}/faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">FAQ</p>
          <h1>Clear answers for products, services, and support.</h1>
          <p>
            Search the most common questions about Auxil’s products, recruitment
            capabilities, consulting services, pricing, and support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <FaqList items={faqs} />
          <div className="page-cta">
            <h2>Have a question that is not covered?</h2>
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
