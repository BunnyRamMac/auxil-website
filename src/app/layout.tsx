import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://auxilitsolutions.com"),
  title: "Auxil IT Solutions | Intelligent Products for Real Life",
  description:
    "Auxil IT Solutions is an AI-first technology company building intelligent software across productivity, careers, and spirituality.",
  keywords: [
    "Auxil IT Solutions",
    "AI products",
    "technology consulting",
    "product engineering",
    "talent solutions",
    "Hyderabad",
  ],
  openGraph: {
    title: "Auxil IT Solutions | Intelligent Products for Real Life",
    description:
      "AI-powered products across productivity, careers, and spirituality, with selected technology consulting and talent solutions.",
    url: "https://auxilitsolutions.com",
    siteName: "Auxil IT Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxil IT Solutions | Intelligent Products for Real Life",
    description:
      "An AI-first technology company building intelligent software for real life.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
