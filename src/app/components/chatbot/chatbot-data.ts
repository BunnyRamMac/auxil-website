// Curated Q&A set for the Auxil site chatbot.
// Every answer is drafted from existing site content (FAQ page, services pages,
// products data, careers page). Ram reviews/approves this file.
// Rule: never add clients, metrics, testimonials, offices, or contact details
// that are not already published on the site.

export type ChatEntry = {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const chatEntries: ChatEntry[] = [
  {
    id: "what-is-auxil",
    category: "Company",
    keywords: ["auxil", "company", "who", "what do you do", "business", "firm"],
    question: "What does Auxil IT Solutions do?",
    answer:
      "Auxil IT Solutions is an AI-first technology, product, and talent-solutions company founded in Hyderabad in 2022. It runs on two engines: technology that builds (AI, software, and enterprise transformation) and talent that scales (recruitment, staffing, and workforce services).",
    link: { label: "Explore services", href: "/services" },
  },
  {
    id: "all-services",
    category: "Services",
    keywords: [
      "services",
      "service",
      "services do you offer",
      "what services",
      "what do you offer",
      "offerings",
    ],
    question: "What services does Auxil offer?",
    answer:
      "Auxil offers technology services (AI & Automation, Software & Product Engineering, Digital / Enterprise Transformation) and talent services (Recruitment & Talent Acquisition, RPO & GCC Hiring, Contract Staffing & Payroll, Executive Search, US Staffing).",
    link: { label: "All services", href: "/services" },
  },
  {
    id: "technology-services",
    category: "Services",
    keywords: ["technology", "tech", "software", "engineering", "ai", "automation", "digital", "transformation", "development"],
    question: "What technology services does Auxil offer?",
    answer:
      "Auxil's technology services cover AI & Automation (opportunity assessment, workflow automation, AI integrations), Software & Product Engineering (SaaS, web and mobile apps, dedicated product teams), and Digital / Enterprise Transformation (systems assessment, application modernisation, ongoing operation).",
    link: { label: "Technology services", href: "/services/technology" },
  },
  {
    id: "talent-services",
    category: "Services",
    keywords: ["talent", "recruitment", "hiring", "staffing", "payroll", "workforce", "executive search", "contract"],
    question: "What talent services does Auxil offer?",
    answer:
      "Auxil's talent services cover Recruitment & Talent Acquisition, RPO & GCC Hiring, Contract Staffing & Payroll, Executive Search, and US Staffing — for both Indian and US delivery needs.",
    link: { label: "Talent solutions", href: "/services/talent" },
  },
  {
    id: "us-staffing",
    category: "Talent",
    keywords: ["us staffing", "united states", "america", "us it", "states staffing"],
    question: "Does Auxil support US staffing?",
    answer:
      "Yes. Auxil supports US IT staffing, contract staffing, contract-to-hire, direct hire, and recruitment delivery needs.",
    link: { label: "US staffing", href: "/services/talent#us-staffing" },
  },
  {
    id: "rpo",
    category: "Talent",
    keywords: ["rpo", "recruitment process outsourcing", "outsourcing", "gcc"],
    question: "Can Auxil support RPO engagements?",
    answer:
      "Auxil can support Recruitment Process Outsourcing through sourcing, screening, coordination, reporting, and delivery management — including RPO and GCC hiring.",
    link: { label: "RPO & GCC hiring", href: "/services/talent#rpo-gcc" },
  },
  {
    id: "poojapath",
    category: "Products",
    keywords: ["poojapath", "pooja", "spiritual"],
    question: "What is PoojaPath?",
    answer:
      "PoojaPath is Auxil's spiritual technology product — a multilingual companion for daily pooja, Panchang guidance, Japa, festivals, and traditional practice support. It is currently in private testing.",
    link: { label: "See products", href: "/products" },
  },
  {
    id: "products",
    category: "Products",
    keywords: ["product", "products", "what products", "poojapath", "2do", "careersignal", "app", "apps", "launch"],
    question: "What products is Auxil building?",
    answer:
      "Auxil is building three products: PoojaPath (spiritual technology — Private Testing), 2DO AI (AI productivity — In Development), and CareerSignal Global (career intelligence — In Development). Products are in private testing or development and availability will expand as each experience is validated.",
    link: { label: "See products", href: "/products" },
  },
  {
    id: "auxil-labs",
    category: "Products",
    keywords: ["labs", "auxil labs", "what are you building", "r&d", "experiments", "thesis"],
    question: "What is Auxil Labs?",
    answer:
      "Auxil Labs is where Auxil builds its own products: PoojaPath (Private Testing), 2DO AI (In Development), and CareerSignal Global (In Development). Each starts from a real problem and a clear product thesis — nothing is presented as launched, and you can request early access for any of them.",
    link: { label: "What we're building", href: "/#products" },
  },
  {
    id: "pricing",
    category: "Pricing",
    keywords: ["pricing", "price", "cost", "quote", "rates", "charge", "fees"],
    question: "How does pricing work?",
    answer:
      "Pricing depends on the engagement type, scope, duration, and delivery model. Auxil discusses pricing after understanding the requirement — share yours on the contact page.",
    link: { label: "Contact Auxil", href: "/contact" },
  },
  {
    id: "contact",
    category: "Support",
    keywords: ["contact", "how can i contact", "contact auxil", "get in touch", "email", "phone", "reach", "talk", "speak", "call", "message", "enquire", "inquire"],
    question: "How can I contact Auxil?",
    answer:
      "Use the contact page to share your product, technology, staffing, recruitment, or workforce requirement, and the Auxil team will get back to you.",
    link: { label: "Contact page", href: "/contact" },
  },
  {
    id: "location",
    category: "Company",
    keywords: ["where", "based", "location", "office", "hyderabad", "india", "founded"],
    question: "Where is Auxil based?",
    answer:
      "Auxil IT Solutions was founded in Hyderabad, India in 2022, with ambitions to support global product and enterprise needs.",
    link: { label: "About Auxil", href: "/company" },
  },
  {
    id: "careers",
    category: "Company",
    keywords: ["career", "careers", "job", "jobs", "hiring at auxil", "work at auxil", "join", "vacancy", "opening"],
    question: "Are there open roles at Auxil?",
    answer:
      "No open roles are listed right now. You can still reach out through the careers page if you want to build the next stage of Auxil with the team.",
    link: { label: "Careers", href: "/careers" },
  },
  {
    id: "ai-automation",
    category: "Services",
    keywords: ["ai automation", "ai and automation", "ai consulting", "machine learning", "ml", "agents", "intelligent"],
    question: "What does Auxil do in AI and automation?",
    answer:
      "Auxil offers practical AI advisory and implementation: AI opportunity assessment, workflow automation, AI integrations for existing software, and AI product development support — automation that serves the business, not the other way round.",
    link: { label: "AI & Automation", href: "/services/technology#ai-automation" },
  },
  {
    id: "ai-assessment",
    category: "Services",
    keywords: ["assessment", "opportunity assessment", "automation opportunity", "assess my automation", "automate my process", "automation potential", "should i automate", "ai assessment"],
    question: "Can Auxil assess my automation opportunity?",
    answer:
      "Yes — the AI opportunity assessment asks five quick questions about one workflow and gives you an honest, indicative read on its automation potential, plus what a sensible next step looks like.",
    link: { label: "Start the assessment", href: "/ai-opportunity-assessment" },
  },
  {
    id: "agentic-ai",
    category: "Services",
    keywords: ["ai agents", "agents", "agentic", "agentic ai", "intelligent automation", "autonomous workflows", "agent system"],
    question: "Does Auxil build AI agents?",
    answer:
      "Yes — Auxil designs AI agent systems that work inside real workflows: recruiting, internal knowledge, document processing, research, customer support, and approval orchestration. Agents discover, reason, act, and validate — with humans kept at every consequential decision.",
    link: { label: "Agentic AI", href: "/services/technology#agentic-ai" },
  },
];

export const chatGreeting =
  "Hello! I'm the Auxil assistant. Ask me about our services, products, talent solutions, or how to get in touch.";

export const chatFallback =
  "I can help with questions about Auxil's services, products, talent solutions, pricing, and contact. Could you rephrase, or pick a topic below?";

export const chatSuggestions = [
  "What services do you offer?",
  "Tell me about your products",
  "Do you support US staffing?",
  "How can I contact Auxil?",
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function scoreEntry(input: string, entry: ChatEntry): number {
  // Score = longest matched keyword phrase wins; an exact input === keyword
  // match gets a strong bonus. Max (not sum) so general entries with many
  // single-word keywords don't drown out specific entries.
  let best = 0;
  for (const keyword of entry.keywords) {
    const normKeyword = normalize(keyword);
    if (!normKeyword || !input.includes(normKeyword)) continue;
    const words = normKeyword.split(" ").length;
    const score = words * 2 + (input === normKeyword ? 10 : 0);
    if (score > best) best = score;
  }
  return best;
}

export function findAnswer(rawInput: string): ChatEntry | null {
  const input = normalize(rawInput);
  if (!input) return null;

  let best: ChatEntry | null = null;
  let bestScore = 0;
  for (const entry of chatEntries) {
    const score = scoreEntry(input, entry);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore > 0 ? best : null;
}

export function isGreeting(rawInput: string): boolean {
  const input = normalize(rawInput);
  return /^(hi|hello|hey|namaste|good morning|good afternoon|good evening)\b/.test(input);
}

export function isThanks(rawInput: string): boolean {
  const input = normalize(rawInput);
  return /\b(thank|thanks|thankyou|dhanyavad)\b/.test(input);
}
