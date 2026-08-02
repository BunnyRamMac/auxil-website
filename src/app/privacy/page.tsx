import type { Metadata } from "next";
import Link from "next/link";

const CONTACT_EMAIL = "hello@auxilitsolutions.com";

export const metadata: Metadata = {
  title: "Privacy | Auxil IT Solutions",
  description:
    "A concise privacy notice for Auxil IT Solutions website visitors and business contacts.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <Link className="brand legal-brand" href="/">
          <span>Auxil</span>
        </Link>
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: August 2, 2026</p>

        <div className="legal-content">
          <section>
            <h2>Overview</h2>
            <p>
              Auxil IT Solutions respects your privacy. This page explains how
              we handle information shared through this website and direct
              business communication.
            </p>
          </section>

          <section>
            <h2>Information We Receive</h2>
            <p>
              If you contact Auxil, we may receive your name, email address,
              organisation details, and the message or context you choose to
              share with us.
            </p>
          </section>

          <section>
            <h2>How We Use Information</h2>
            <p>
              We use contact information to respond to enquiries, discuss
              consulting or partnership opportunities, manage early product
              access interest, and improve our communication.
            </p>
          </section>

          <section>
            <h2>Product Status</h2>
            <p>
              Auxil products are in private testing or development. Any
              product-specific privacy notices will be provided when those
              products become available to relevant users.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For privacy questions, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
