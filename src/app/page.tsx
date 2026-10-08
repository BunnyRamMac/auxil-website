import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TrackedLink } from "./components/tracked-link";
import { EvolutionTimeline } from "./components/motion/evolution-timeline";
import { FlowSvg } from "./components/motion/flow-svg";
import { HeroVideo } from "./components/motion/hero-video";
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

const productNarrative: Record<string, { problem: string; thesis: string; nextStep: string }> = {
  PoojaPath: {
    problem:
      "Daily spiritual routines — pooja, Panchang, Japa, festivals — are hard to keep together when guidance is scattered.",
    thesis:
      "Daily spiritual practice deserves technology built with the same care the practice itself demands.",
    nextStep: "In private testing — request early access.",
  },
  "2DO AI": {
    problem:
      "Tasks, priorities, schedules and follow-ups scatter across tools, and busy professionals lose the thread.",
    thesis:
      "Productivity breaks down at follow-through — AI should close that gap, not add another list to manage.",
    nextStep: "In development — get notified at early access.",
  },
  "CareerSignal Global": {
    problem:
      "Discovering the right opportunities and presenting your fit clearly is harder than it should be.",
    thesis:
      "Job seekers make better moves when they can see clear signals about fit and readiness.",
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

      {/* 1 — Hero: full-bleed cinematic brand film */}
      <section className="hero hero-cinematic section" id="top">
        <HeroVideo />
        <div className="section-inner hero-centered">
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
        </div>
        <span className="scroll-cue" aria-hidden="true">
          Scroll
        </span>
      </section>

      {/* 1b — Why collaborate with Auxil */}
      <section className="section why-collaborate" id="why-collaborate">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Why Auxil</p>
                <h2>Two engines. One outcome.</h2>
              </div>
              <p>
                Technology that builds. Talent that scales. One partner for
                both.
              </p>
            </div>
          </Reveal>
          <div className="why-collaborate-grid">
            <Reveal>
              <div className="why-collaborate-visual">
                <Image
                  src="/images/why-auxil-visual.webp"
                  alt="Two luminous systems — technology and talent — intertwining into one outcome"
                  width={1280}
                  height={720}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <div className="why-collaborate-blocks">
              {[
                {
                  title: "What we do",
                  body: "Auxil runs on two connected engines. Technology — AI & automation, software and product engineering, enterprise and digital transformation. Talent — recruitment, RPO, GCC hiring, contract and US staffing, executive search. We build the system, and we staff the team that runs it.",
                },
                {
                  title: "Why collaborate with us",
                  body: "Building and scaling shouldn't mean juggling vendors. Our service experience helps us understand the recurring problems businesses face; our product thinking helps us design more scalable solutions. One partner — from first build to the team that operates it.",
                },
                {
                  title: "What makes us different",
                  body: "Most firms sell you technology or people. Our engines are designed to work as one. And we're builders ourselves: our own product IP — PoojaPath (private testing), 2DO AI and CareerSignal Global (in development) — keeps us honest about what shipping real software takes.",
                },
                {
                  title: "What our clients get",
                  body: "Outcomes, not activity: smarter technology, automated work, and the people to scale it. Founded in Hyderabad in 2022 and AI-first in direction — built for businesses that want to build, transform, and grow.",
                },
              ].map((block, i) => (
                <Reveal key={block.title} delay={i * 100}>
                  <div className="why-collaborate-block">
                    <h3>{block.title}</h3>
                    <p>{block.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
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

      {/* 5 — Auxil Labs */}
      <section className="section products-section" id="products">
        <div className="section-inner">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Auxil Labs</p>
                <h2>What we&apos;re building.</h2>
              </div>
              <p>
                Products are Auxil&apos;s second engine: focused AI systems growing
                out of the problems we see in real delivery work. Each lab
                project starts from a real problem and a clear thesis — nothing
                here is presented as launched.
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
                          <dt>Thesis</dt>
                          <dd>{narrative?.thesis}</dd>
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
                        href={`/products#${product.id}`}
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
              <p className="eyebrow">How Auxil works</p>
              <h2>Two engines. One operating system.</h2>
              <p>
                Technology and talent run as parallel delivery flows — the same
                discipline, the same accountability, whether we are building
                software or building your team.
              </p>
            </div>
          </Reveal>
          <div className="content-grid two">
            <Reveal>
              <article className="content-card">
                <p className="card-kicker">Technology</p>
                <FlowSvg
                  label="Technology delivery flow: Discover, Design, Build, Automate, Integrate, Measure."
                  steps={[
                    { label: "Discover" },
                    { label: "Design" },
                    { label: "Build" },
                    { label: "Automate" },
                    { label: "Integrate" },
                    { label: "Measure" },
                  ]}
                />
                <ol className="flow-detail-list">
                  <li><strong>Discover</strong> — understand the problem, the users, and what success looks like.</li>
                  <li><strong>Design</strong> — define the solution, the architecture, and the plan.</li>
                  <li><strong>Build</strong> — engineer it in small, reviewable increments.</li>
                  <li><strong>Automate</strong> — apply AI and automation where they create genuine value.</li>
                  <li><strong>Integrate</strong> — connect with your existing systems, data, and teams.</li>
                  <li><strong>Measure</strong> — track outcomes and keep improving.</li>
                </ol>
                <TrackedLink
                  className="text-link"
                  href="/services/technology"
                  eventName="service_cta_click"
                  eventPayload={{ page: "/", service: "Technology flow" }}
                >
                  Explore technology services
                </TrackedLink>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article className="content-card">
                <p className="card-kicker">Talent</p>
                <FlowSvg
                  label="Talent delivery flow: Understand, Map, Source, Assess, Hire, Improve."
                  steps={[
                    { label: "Understand" },
                    { label: "Map" },
                    { label: "Source" },
                    { label: "Assess" },
                    { label: "Hire" },
                    { label: "Improve" },
                  ]}
                />
                <ol className="flow-detail-list">
                  <li><strong>Understand</strong> — learn the role, the team, and what good looks like.</li>
                  <li><strong>Map</strong> — map the market for the skills you need.</li>
                  <li><strong>Source</strong> — reach and engage the right candidates.</li>
                  <li><strong>Assess</strong> — evaluate capability and fit rigorously.</li>
                  <li><strong>Hire</strong> — support selection, offer, and onboarding.</li>
                  <li><strong>Improve</strong> — review hiring outcomes and refine the pipeline.</li>
                </ol>
                <TrackedLink
                  className="text-link"
                  href="/services/talent"
                  eventName="service_cta_click"
                  eventPayload={{ page: "/", service: "Talent flow" }}
                >
                  Explore talent solutions
                </TrackedLink>
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
