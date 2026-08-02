import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const CONTACT_EMAIL = "hello@auxilitsolutions.com";

const products = [
  {
    name: "PoojaPath",
    category: "Spiritual Technology",
    status: "Private Testing",
    icon: "ritual",
    description:
      "A digital spiritual companion for daily pooja, Panchang guidance, Japa, festivals, and traditional practice.",
  },
  {
    name: "2DO AI",
    category: "Personal Intelligence",
    status: "In Development",
    icon: "flow",
    description:
      "A personal productivity system for tasks, priorities, schedules, energy, and follow-ups.",
  },
  {
    name: "CareerSignal Global",
    category: "Career Technology",
    status: "In Development",
    icon: "signal",
    description:
      "A career intelligence product for opportunity discovery, eligibility signals, applications, and job-search flow.",
  },
];

const technologyCapabilities = [
  "AI product strategy",
  "Product discovery",
  "SaaS product engineering",
  "Web and mobile applications",
  "AI integrations",
  "Workflow automation",
];

const enterpriseServices = [
  {
    title: "US Staffing & Global Talent Solutions",
    description:
      "US IT staffing, direct hire, contract hiring and recruitment delivery.",
  },
  {
    title: "Recruitment Solutions",
    description:
      "Permanent hiring, technical recruitment, leadership search and RPO support.",
  },
  {
    title: "Payroll & Workforce",
    description:
      "Payroll processing, employee administration, onboarding and workforce operations.",
  },
];

const principles = [
  {
    title: "Problem First",
    description: "We begin with genuine user needs, not technology trends.",
  },
  {
    title: "AI With Purpose",
    description: "We use AI only where it creates meaningful value.",
  },
  {
    title: "Human-Centred",
    description: "Technology should adapt to people, not the other way around.",
  },
  {
    title: "Built for Trust",
    description: "Privacy, reliability, and transparency guide our products.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Auxil IT Solutions",
  url: "https://auxilitsolutions.com",
  foundingDate: "2022-03",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  description:
    "Auxil IT Solutions is an AI-first technology company building intelligent software across productivity, careers, and spirituality while providing selected technology consulting and talent solutions.",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <section className="hero section" id="top">
        <div className="hero-canvas" aria-hidden="true">
          <span className="aurora aurora-one" />
          <span className="aurora aurora-two" />
          <span className="aurora aurora-three" />
          <span className="mesh-line mesh-line-one" />
          <span className="mesh-line mesh-line-two" />
          <span className="mesh-line mesh-line-three" />
          <span className="particle particle-one" />
          <span className="particle particle-two" />
          <span className="particle particle-three" />
          <span className="particle particle-four" />
          <span className="particle particle-five" />
        </div>
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI-first technology company</p>
            <h1>Building intelligent products for real life.</h1>
            <p className="hero-text">
              Auxil turns recurring problems in work, careers, and daily
              practice into focused AI products people can trust.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                Explore Products
              </a>
              <a className="button button-secondary" href="#solutions">
                Work With Auxil
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="ecosystem-orbit">
              <span className="ecosystem-ring ecosystem-ring-one" />
              <span className="ecosystem-ring ecosystem-ring-two" />
              <span className="ecosystem-line ecosystem-line-one" />
              <span className="ecosystem-line ecosystem-line-two" />
              <span className="ecosystem-line ecosystem-line-three" />
              <span className="ecosystem-line ecosystem-line-four" />
              <div className="ecosystem-core">
                <Image
                  src="/logo/auxil-logo.png"
                  alt=""
                  width={1536}
                  height={1024}
                  sizes="180px"
                />
              </div>
              <div className="ecosystem-node ecosystem-node-one">
                <span>CareerSignal Global</span>
              </div>
              <div className="ecosystem-node ecosystem-node-two">
                <span>PoojaPath</span>
              </div>
              <div className="ecosystem-node ecosystem-node-three">
                <span>2DO AI</span>
              </div>
              <div className="ecosystem-node ecosystem-node-four">
                <span>Enterprise Solutions</span>
              </div>
            </div>
            <div className="hero-signal-card">
              <span>Product intelligence</span>
              <strong>Purposeful systems</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Building at Auxil</p>
              <h2>Products shaped around real human routines.</h2>
            </div>
            <p>
              Each product starts with a repeated problem, then earns its place
              through research, private learning, and careful execution.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="card-topline">
                  <span className={`product-icon ${product.icon}`} />
                  <span className="status-pill">{product.status}</span>
                </div>
                <div>
                  <p className="card-kicker">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="section-note">
            Product names, capabilities, and launch plans may evolve during
            development. No product is presented as publicly launched.
          </p>
        </div>
      </section>

      <section className="section technology-section" id="technology">
        <div className="section-inner">
          <div className="technology-heading">
            <p className="eyebrow">From product idea to intelligent software</p>
            <h2>
              We research, design and engineer AI-powered products that combine
              useful intelligence with dependable user experiences.
            </h2>
          </div>
          <ul className="technology-list" aria-label="Technology capabilities">
            {technologyCapabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="enterprise-band" id="solutions">
        <div className="section-inner enterprise-grid">
          <div className="enterprise-intro">
            <p className="eyebrow">Enterprise Services</p>
            <p>
              Auxil also supports businesses through specialised talent and
              workforce solutions built on years of recruitment and delivery
              experience.
            </p>
          </div>
          <div className="enterprise-services">
            {enterpriseServices.map((service) => (
              <article className="enterprise-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <a className="enterprise-link" href="/enterprise-services">
            Explore Enterprise Services
          </a>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-inner about-grid">
          <div className="section-heading compact">
            <p className="eyebrow">About Auxil</p>
            <h2>From consulting to product innovation.</h2>
          </div>
          <div className="about-content">
            <p className="about-copy">
              Auxil began in March 2022 by supporting businesses through
              consulting and talent solutions. That experience exposed recurring
              challenges across productivity, hiring and digital workflows,
              inspiring our evolution into an AI-first product company focused
              on building intelligent software.
            </p>
            <div className="about-facts" aria-label="Company facts">
              <span>Founded in March 2022</span>
              <span>Headquartered in Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Principles</p>
              <h2>Calm systems for real human needs.</h2>
            </div>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.title}>
                <span className="principle-icon" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-inner contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you want to build—or solve.</h2>
          <p>
            Connect with Auxil about our products, technology initiatives, US
            staffing, recruitment partnerships or workforce requirements.
          </p>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
