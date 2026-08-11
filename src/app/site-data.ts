export const siteUrl = "https://auxilitsolutions.com";
export const contactEmail = "hello@auxilitsolutions.com";

export const primaryNav = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/consulting" },
  { label: "Locations", href: "/locations" },
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
      { label: "Locations", href: "/locations" },
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
