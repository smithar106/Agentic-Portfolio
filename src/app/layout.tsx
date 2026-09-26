import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AskPortfolio } from "@/components/AskPortfolio";
import { SITE_URL, isTodo } from "@/data/config";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const base = isTodo(SITE_URL) ? undefined : new URL(SITE_URL);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roleLine,
  description: profile.supporting,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  sameAs: [
    profile.github,
    ...(!isTodo(profile.linkedin) ? [profile.linkedin] : []),
  ],
  knowsAbout: [
    "AI Agents",
    "Applied AI",
    "Data Products",
    "Automation",
    "Forward Deployed Engineering",
    "Technical Program Management",
  ],
};

export const metadata: Metadata = {
  metadataBase: base,
  title: {
    default: "Arthur Smith — AI Solutions & Forward Deployed Engineering",
    template: "%s — Arthur Smith",
  },
  description:
    "Arthur Smith builds and deploys AI-powered tools while leading complex technology and data initiatives at global scale. AI solutions, forward deployed engineering, and technical program leadership.",
  keywords: [
    "Arthur Smith",
    "AI Solutions",
    "Forward Deployed Engineer",
    "Applied AI",
    "Technical Program Manager",
    "AI Agents",
    "AI Engineering",
    "Data Products",
    "Automation",
  ],
  openGraph: {
    title: "Arthur Smith — AI Solutions & Forward Deployed Engineering",
    description:
      "I build and deploy AI-powered tools while leading complex technology and data initiatives at global scale.",
    type: "website",
    siteName: "Arthur Smith",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Smith — AI Solutions & Forward Deployed Engineering",
    description:
      "I build and deploy AI-powered tools while leading complex technology and data initiatives at global scale.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <AskPortfolio />
      </body>
    </html>
  );
}
