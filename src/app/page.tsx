import { ContactForm } from "./components/contact-form";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TrackedLink } from "./components/tracked-link";
import { EvolutionTimeline } from "./components/motion/evolution-timeline";
import { FlowSvg } from "./components/motion/flow-svg";
import { HeroSystem } from "./components/motion/hero-system";
import { Reveal } from "./components/motion/reveal";
import { products } from "./site-data";

const problems = [
  {
    title: "AI initiatives stall in execution",
    body: "Teams see the opportunity in AI but struggle to turn pilots into production systems that survive contact with real operations.",
  },
  {
    title: "Software delivery can't keep pace",
    body: "Roadmaps slip while the business waits — discovery is thin, engineering is stretched, and systems don't talk to each other.",
  },
  {
    title: "Hiring bottlenecks slow growth",
    body: "Open roles stay open for months, recruitment operations are improvised, and workforce administration eats leadership time.",
  },
];

const technologyCards = [
  {
    title: "AI & Automation",
    body: "Apply AI where it creates genuine value — from opportunity assessment to workflow automation and intelligent integrations.",
    href: "/services/technology#ai-automation",
  },
  {
    title: "Software & Product Engineering",
    body: "Design and engineering for SaaS, workflow products, internal platforms, and AI-enabled software.",
    href: "/services/technology#software-engineering",
  },
  {
    title: "Digital / Enterprise Transformation",
    body: "Modernise workflows and systems, integrate AI and automation, and operate the result reliably.",
    href: "/services/technology#enterprise-transformation",
  },
];

const talentItems = [
  { title: "Recruitment & Talent Acquisition", href: "/services/talent#recruitment" },
  { title: "RPO & GCC Hiring", href: "/services/talent#rpo-gcc" },
  { title: "Contract Staffing & Payroll", href: "/services/talent#contract-payroll" },
  { title: "Executive Search", href: "/services/talent#executive-search" },
  { title: "US Staffing", href: "/services/talent#us-staffing" },
];

const productNarrative: Record<string, { problem: string; nextStep: string }> = {
  PoojaPath: {
    problem:
      "Daily spiritual routines — pooja, Panchang, Japa, festivals — are hard to keep together when guidance is scattered.",
    nextStep: "In private testing — request early access.",
  },
  "2DO AI": {
    problem:
      "Tasks, priorities, schedules and follow-ups scatter across tools, and busy professionals lose the thread.",
    nextStep: "In development — get notified at early access.",
  },
  "CareerSignal Global": {
    problem:
      "Discovering the right opportunities and presenting your fit clearly is harder than it should be.",
    nextStep: "In development — get notified at early access.",
  },
};

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

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* 1 — Hero */}
      <section className="hero section" id="top">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Technology & talent solutions</p>
            <h1>Build smarter technology. Automate work. Hire the people to scale it.</h1>
            <p className="hero-text">
              Auxil IT Solutions combines AI, software engineering and talent
              solutions to help businesses build, transform and grow.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button button-primary"
                href="/services/technology"
                eventPayload={{ page: "/", section: "hero" }}
              >
                Explore Technology Solutions
              </TrackedLink>
              <TrackedLink
                className="button button-secondary"
                href="/services/talent"
                eventPayload={{ page: "/", section: "hero" }}
              >
                Explore Talent Solutions
              </TrackedLink>
            </div>
          </div>
          <div className="hero-visual">
            <HeroSystem />
          </div>
        </div>
      </section>

      {/* 2 — Business problems */}
      <section className="section" id="problems">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">The problems we solve</p>
              <h2>Recurring problems, solved properly.</h2>
            </div>
          </Reveal>
          <div className="content-grid three">
            {problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 120}>
                <article className="content-card">
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Technology */}
      <section className="section" id="technology-home">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Technology Solutions</p>
                <h2>Build and automate with confidence.</h2>
              </div>
              <p>
                From AI opportunity assessment to production software — practical
                engineering that serves the business.
              </p>
            </div>
          </Reveal>
          <div className="content-grid three">
            {technologyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <article className="content-card feature-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <TrackedLink
                    className="text-link"
                    href={card.href}
                    eventName="service_cta_click"
                    eventPayload={{ page: "/", service: card.title }}
                  >
                    Learn more
                  </TrackedLink>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Talent */}
      <section className="section" id="talent-home">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Talent Solutions</p>
                <h2>Hire and scale with dependable delivery.</h2>
              </div>
              <p>
                Recruitment, RPO, contract staffing, executive search and US
                staffing — across 40+ industries, for IT and non-IT roles.
              </p>
            </div>
          </Reveal>
          <ul className="talent-list" aria-label="Talent solution areas">
            {talentItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <li>
                  <TrackedLink
                    href={item.href}
                    eventName="service_cta_click"
                    eventPayload={{ page: "/", service: item.title }}
                  >
                    {item.title}
                    <span aria-hidden="true"> →</span>
                  </TrackedLink>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Products (secondary engine) */}
      <section className="section products-section" id="products">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Emerging products</p>
                <h2>What we&apos;re building.</h2>
              </div>
              <p>
                Products are Auxil&apos;s second engine: focused AI systems growing
                out of the problems we see in real delivery work.
              </p>
            </div>
          </Reveal>
          <div className="product-grid">
            {products.map((product, i) => {
              const narrative = productNarrative[product.name];
              return (
                <Reveal key={product.name} delay={i * 120}>
                  <article className="product-card">
                    <div className="card-topline">
                      <span className="status-pill">{product.status}</span>
                    </div>
                    <div>
                      <h3>{product.name}</h3>
                      <dl className="product-facts">
                        <div>
                          <dt>Problem</dt>
                          <dd>{narrative?.problem}</dd>
                        </div>
                        <div>
                          <dt>Concept</dt>
                          <dd>{product.overview}</dd>
                        </div>
                        <div>
                          <dt>Intended user</dt>
                          <dd>{product.audience}</dd>
                        </div>
                        <div>
                          <dt>Next step</dt>
                          <dd>{narrative?.nextStep}</dd>
                        </div>
                      </dl>
                      <TrackedLink
                        className="text-link"
                        href="/contact"
                        eventName="product_cta_click"
                        eventPayload={{ page: "/", product: product.name }}
                      >
                        Request early access
                      </TrackedLink>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="section-note">
            Product names, capabilities, and launch plans may evolve during
            development. No product is presented as publicly launched.
          </p>
        </div>
      </section>

      {/* 6 — Why Auxil */}
      <section className="section" id="why-auxil">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Why Auxil</p>
                <h2>An operating model built from real delivery work.</h2>
              </div>
              <p>
                Founded in Hyderabad in 2022, Auxil grew from technology and
                talent services into an AI-first company — and that delivery
                experience still shapes everything we build.
              </p>
            </div>
          </Reveal>
          <div className="principle-grid">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 100}>
                <article className="principle-card">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <EvolutionTimeline />
          </Reveal>
          <Reveal>
            <p className="section-note">
              <TrackedLink
                className="text-link"
                href="/company"
                eventPayload={{ page: "/", section: "why-auxil" }}
              >
                More about Auxil →
              </TrackedLink>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 — How we work */}
      <section className="section" id="how-we-work">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">How we work</p>
              <h2>Clear engagement, from first call to operation.</h2>
            </div>
          </Reveal>
          <div className="content-grid two">
            <Reveal>
              <article className="content-card">
                <p className="card-kicker">Technology</p>
                <FlowSvg
                  label="Technology engagement flow: Discover, Design, Build, Integrate, Operate."
                  steps={[
                    { label: "Discover" },
                    { label: "Design" },
                    { label: "Build" },
                    { label: "Integrate" },
                    { label: "Operate" },
                  ]}
                />
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article className="content-card">
                <p className="card-kicker">Talent</p>
                <FlowSvg
                  label="Talent engagement flow: Need, Map, Source, Assess, Hire, Support."
                  steps={[
                    { label: "Need" },
                    { label: "Map" },
                    { label: "Source" },
                    { label: "Assess" },
                    { label: "Hire" },
                    { label: "Support" },
                  ]}
                />
              </article>
            </Reveal>
          </div>
          <Reveal>
            <div className="page-cta">
              <h2>Start with a conversation about your requirement.</h2>
              <TrackedLink
                className="button button-primary"
                href="/contact"
                eventPayload={{ page: "/", section: "how-we-work" }}
              >
                Start a Conversation
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 — Contact (preserved form) */}
      <section className="section contact-section" id="contact">
        <div className="section-inner contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you want to build—or solve.</h2>
          <p>
            Connect with Auxil about our products, technology initiatives, US
            staffing, recruitment partnerships or workforce requirements.
          </p>
          <ContactForm source={{ page: "/", service: "General enquiry" }} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
