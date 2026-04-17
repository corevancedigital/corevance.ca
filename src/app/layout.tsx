import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://corevance.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Corevance | Commercial FRP Wall Panel Installation & Supply",
    template: "%s | Corevance",
  },
  description:
    "Corevance delivers expert FRP fiberglass wall panel installation and supply for commercial kitchens, food facilities, and industrial spaces. CFIA-accepted, Class C rated. Request a free consultation.",
  keywords: [
    "FRP wall panel installation",
    "fiberglass reinforced panel contractor",
    "commercial FRP panels",
    "FRP supply Canada",
    "CFIA installation",
    "Class C FRP panels",
    "commercial kitchen wall panels",
    "FRP contractor Ontario",
  ],
  authors: [{ name: "Corevance", url: SITE_URL }],
  creator: "Corevance",
  publisher: "Corevance",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Corevance",
    title: "Corevance | Commercial FRP Wall Panel Installation & Supply",
    description:
      "Expert FRP fiberglass wall panel installation and supply for commercial kitchens, food facilities, and industrial spaces. CFIA-accepted, Class C rated.",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "Corevance – Commercial FRP Wall Panel Installation & Supply",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corevance | Commercial FRP Wall Panel Installation & Supply",
    description:
      "Expert FRP fiberglass wall panel installation and supply for commercial kitchens and food facilities. CFIA-accepted, Class C rated.",
    images: ["/corevance-logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corevance",
  url: SITE_URL,
  logo: `${SITE_URL}/corevance-logo-symbol.png`,
  description:
    "Commercial FRP fiberglass wall panel installation and supply. CFIA-accepted, Class C rated panels for commercial kitchens, food facilities, and industrial spaces.",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "ON",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  serviceType: [
    "FRP Wall Panel Installation",
    "Fiberglass Reinforced Panel Supply",
    "Commercial Kitchen Wall Panels",
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
