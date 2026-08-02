import type { Metadata } from "next";
import { BlogList, type BlogArticle } from "../components/blog-list";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata, siteUrl } from "../site-data";

const articles: BlogArticle[] = [
  {
    title: "Designing AI products around human operating rhythms",
    category: "AI Products",
    readingTime: "5 min read",
    summary:
      "How practical AI products can reduce friction when they begin with the way people already plan, decide, and recover attention.",
  },
  {
    title: "What recruitment operations can teach product teams",
    category: "Recruitment",
    readingTime: "4 min read",
    summary:
      "Hiring workflows reveal lessons about trust, signal quality, coordination, and decision timing that apply directly to software design.",
  },
  {
    title: "From workflow automation to useful intelligence",
    category: "Technology",
    readingTime: "6 min read",
    summary:
      "A product view on when automation is enough, when AI adds value, and where dependable user experience matters most.",
  },
  {
    title: "Building career tools that respect candidate context",
    category: "Career Intelligence",
    readingTime: "5 min read",
    summary:
      "Career technology should help people understand opportunities, improve applications, and move with more clarity.",
  },
];

export const metadata: Metadata = pageMetadata(
  "/blog",
  "Blog | Auxil IT Solutions",
  "Read Auxil perspectives on AI products, recruitment operations, product engineering, and career intelligence.",
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Auxil Blog",
  url: `${siteUrl}/blog`,
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
  })),
};

export default function BlogPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">Blog</p>
          <h1>Ideas on AI products, hiring systems, and useful software.</h1>
          <p>
            Notes from Auxil on product direction, recruitment intelligence,
            software delivery, and the practical side of building with AI.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <BlogList articles={articles} />
          <div className="page-cta">
            <h2>Want a deeper discussion on AI product strategy?</h2>
            <a className="button button-primary" href="/contact">
              Talk to Auxil
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
