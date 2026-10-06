export const siteUrl = "https://auxilitsolutions.com";
export const contactEmail = "hello@auxilitsolutions.com";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: "Products", href: "/products" },
  {
    label: "Technology",
    href: "/services/technology",
    children: [
      { label: "AI & Automation", href: "/services/technology#ai-automation" },
      {
        label: "Software & Product Engineering",
        href: "/services/technology#software-engineering",
      },
      {
        label: "Digital / Enterprise Transformation",
        href: "/services/technology#enterprise-transformation",
      },
    ],
  },
  {
    label: "Talent",
    href: "/services/talent",
    children: [
      {
        label: "Recruitment & Talent Acquisition",
        href: "/services/talent#recruitment",
      },
      { label: "RPO & GCC Hiring", href: "/services/talent#rpo-gcc" },
      {
        label: "Contract Staffing & Payroll",
        href: "/services/talent#contract-payroll",
      },
      { label: "Executive Search", href: "/services/talent#executive-search" },
      { label: "US Staffing", href: "/services/talent#us-staffing" },
    ],
  },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Technology Solutions", href: "/services/technology" },
      { label: "Talent Solutions", href: "/services/talent" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Locations", href: "/locations" },
      { label: "Partners", href: "/partners" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [{ label: "Products", href: "/products" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
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
      "A career intelligence platform for discovering opportunities, improving applications and resumes, and managing the job-search process.",
    features: [
      "Opportunity discovery",
      "Eligibility and fit signals",
      "Resume and application clarity",
      "Application workflow support",
      "Career progress intelligence",
    ],
    audience: "Job seekers, early-career professionals, and experienced candidates navigating global opportunities.",
    status: "In Development",
  },
];

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auxil IT Solutions",
    url: siteUrl,
    foundingDate: "2022-03",
    email: contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    description:
      "Auxil IT Solutions is an AI-first technology company building intelligent software while supporting selected technology, staffing, and recruitment needs.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Auxil IT Solutions",
    url: siteUrl,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  path,
  description,
  serviceType,
  areaServed,
}: {
  name: string;
  path: string;
  description: string;
  serviceType: string | string[];
  areaServed?: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: absoluteUrl(path),
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Auxil IT Solutions",
      url: siteUrl,
    },
    ...(areaServed ? { areaServed } : {}),
  };
}
