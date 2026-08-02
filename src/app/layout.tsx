import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "./components/analytics";

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
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
          gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  );
}
