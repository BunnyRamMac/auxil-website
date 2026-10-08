import type { Metadata } from "next";
import { AiAssessment } from "../components/ai-assessment";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { pageMetadata } from "../site-data";

export const metadata: Metadata = pageMetadata(
  "/ai-opportunity-assessment",
  "AI Opportunity Assessment | Auxil IT Solutions",
  "Answer five quick questions about your workflow and get an indicative assessment of its AI and automation potential from Auxil IT Solutions.",
);

export default function AiOpportunityAssessmentPage() {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="section corporate-hero">
        <div className="section-inner">
          <p className="eyebrow">AI Opportunity Assessment</p>
          <h1>Where could AI actually help your business?</h1>
          <p>
            Answer five quick questions about one workflow. You will get an
            honest, indicative read on its automation potential — and what a
            sensible next step looks like.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <AiAssessment />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
