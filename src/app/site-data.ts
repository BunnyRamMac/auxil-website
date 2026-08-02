export const siteUrl = "https://auxilitsolutions.com";
export const contactEmail = "hello@auxilitsolutions.com";

export const primaryNav = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/consulting" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "Products", href: "/products" },
      { label: "Technology", href: "/#technology" },
      { label: "Enterprise Services", href: "/enterprise-services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Consulting", href: "/consulting" },
      { label: "Partners", href: "/partners" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy", href: "/privacy" }],
  },
];

export const socialLinks: { label: string; href: string }[] = [];

export const products = [
  {
    id: "poojapath",
    name: "PoojaPath",
    overview:
      "A multilingual spiritual technology product for daily pooja, Panchang guidance, Japa, festivals, and traditional practice support.",
    features: [
      "Daily spiritual guidance",
      "Festival and Panchang experiences",
      "Multilingual devotional workflows",
      "Private testing with real user learning",
    ],
    audience: "Individuals and families seeking a practical digital companion for spiritual routines.",
    status: "Private Testing",
  },
  {
    id: "2do-ai",
    name: "2DO AI",
    overview:
      "An AI productivity product designed to help people manage tasks, follow-ups, priorities, schedules, and personal operating rhythm.",
    features: [
      "Task and priority intelligence",
      "Follow-up support",
      "Personal workflow organisation",
      "AI-assisted planning patterns",
    ],
    audience: "Professionals, founders, students, and teams managing busy personal and work systems.",
    status: "In Development",
  },
  {
    id: "careersignal-global",
    name: "CareerSignal Global",
    overview:
      "A career intelligence platform for discovering opportunities, improving applications, and managing the job-search process.",
    features: [
      "Opportunity discovery",
      "Eligibility and fit signals",
      "Application workflow support",
      "Career progress intelligence",
    ],
    audience: "Job seekers, early-career professionals, and experienced candidates navigating global opportunities.",
    status: "In Development",
  },
  {
    id: "ai-resume-builder",
    name: "AI Resume Builder",
    overview:
      "A focused product experience for creating clearer, stronger, and more role-aligned resumes with AI-assisted structure.",
    features: [
      "Resume structure guidance",
      "Role-aligned content support",
      "ATS-aware clarity",
      "Career document refinement",
    ],
    audience: "Candidates who need professional resume support for competitive technology and business roles.",
    status: "In Development",
  },
];

export const consultingServices = [
  "US Staffing",
  "Recruitment Process Outsourcing",
  "Executive Search",
  "AI Consulting",
  "Product Engineering",
  "Enterprise Software",
  "Dedicated Teams",
  "Recruitment Technology",
];

export function pageMetadata(path: string, title: string, description: string) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "Auxil IT Solutions",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
