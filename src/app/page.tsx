const CONTACT_EMAIL = "hello@auxilitsolutions.com";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    name: "PoojaPath",
    category: "Spiritual Technology",
    status: "Private Testing",
    icon: "ritual",
    description:
      "A multilingual digital spiritual companion for daily pooja, Panchang guidance, Japa, festivals, and traditional practices.",
  },
  {
    name: "AI Productivity Platform",
    category: "Personal Intelligence",
    status: "In Development",
    icon: "flow",
    description:
      "An intelligent platform designed to help people manage tasks, schedules, priorities, energy, and follow-ups.",
  },
  {
    name: "AI Career Intelligence Platform",
    category: "Career Technology",
    status: "In Development",
    icon: "signal",
    description:
      "A career platform designed to help professionals discover opportunities, assess eligibility, improve applications, and manage their search.",
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
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Auxil home">
            <span>Auxil</span>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

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
              AI products for focus, opportunity, and daily meaning, built with
              the calm discipline real life deserves.
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
            <span className="glass-panel glass-panel-one" />
            <span className="glass-panel glass-panel-two" />
            <span className="glass-panel glass-panel-three" />
            <div className="intelligence-map">
              <span className="node node-one" />
              <span className="node node-two" />
              <span className="node node-three" />
              <span className="node node-four" />
              <span className="node node-five" />
              <span className="path path-one" />
              <span className="path path-two" />
              <span className="path path-three" />
              <span className="path path-four" />
              <span className="core-mark" />
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
              <h2>Three products. Three meaningful problems.</h2>
            </div>
            <p>
              Each product is being developed carefully, with launch plans and
              capabilities evolving through private learning and user feedback.
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
          <div className="contact-selector">
            <label htmlFor="enquiry-type">Enquiry type</label>
            <select id="enquiry-type" name="enquiry-type" required defaultValue="">
              <option value="" disabled>
                Select enquiry type
              </option>
              <option value="product-partnership">Product partnership</option>
              <option value="technology-development">
                Technology development
              </option>
              <option value="us-staffing">US staffing</option>
              <option value="recruitment-solutions">
                Recruitment solutions
              </option>
              <option value="payroll-and-workforce">
                Payroll and workforce
              </option>
              <option value="early-product-access">
                Early product access
              </option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="hero-actions contact-actions">
            <a className="button button-primary" href={`mailto:${CONTACT_EMAIL}`}>
              Start a Conversation
            </a>
            <a className="button button-secondary" href={`mailto:${CONTACT_EMAIL}`}>
              Email Auxil
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-inner footer-grid">
          <div>
            <a className="footer-brand" href="#top">
              Auxil IT Solutions
            </a>
            <p>Building intelligent products for real life.</p>
            <p>Founded in March 2022</p>
            <p>Headquartered in Hyderabad, India</p>
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
