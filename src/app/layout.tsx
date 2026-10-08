import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/analytics";
import { Chatbot } from "./components/chatbot/chatbot";
import { organizationSchema, websiteSchema } from "./site-data";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auxilitsolutions.com"),
  title: "Auxil IT Solutions | AI Products, Technology & Enterprise Services",
  description:
    "Auxil builds AI-powered software products while helping organisations through technology development, US staffing, recruitment solutions and workforce services.",
  keywords: [
    "AI Products",
    "Artificial Intelligence",
    "Technology Company",
    "Software Development",
    "SaaS",
    "US Staffing",
    "Recruitment",
    "Payroll",
    "Enterprise Services",
    "India",
    "Auxil IT Solutions",
  ],
  authors: [{ name: "Auxil IT Solutions" }],
  creator: "Auxil IT Solutions",
  publisher: "Auxil IT Solutions",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Auxil IT Solutions | AI Products, Technology & Enterprise Services",
    description:
      "Auxil builds AI-powered software products while helping organisations through technology development, US staffing, recruitment solutions and workforce services.",
    url: "https://auxilitsolutions.com",
    siteName: "Auxil IT Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auxil IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxil IT Solutions | AI Products, Technology & Enterprise Services",
    description:
      "Auxil builds AI-powered software products while helping organisations through technology development, US staffing, recruitment solutions and workforce services.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://auxilitsolutions.com",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
          ? {
              "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
            }
          : undefined,
      }
    : process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  return (
    <html lang="en" className={`h-full antialiased ${displayFont.variable}`}>
      <body className="min-h-full flex flex-col">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {children}
        <Chatbot />
        <Analytics
          gtmId={gtmId}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
          gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  );
}
