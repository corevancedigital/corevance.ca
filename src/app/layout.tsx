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
  image: `${SITE_URL}/corevance-logo-full.png`,
  description:
    "Commercial FRP fiberglass wall panel installation and supply. CFIA-accepted, Class C rated panels for commercial kitchens, food facilities, and industrial spaces.",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "ON",
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "North York" },
    { "@type": "City", name: "Scarborough" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "FRP Wall Panel Products & Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "FRP Wall Panel Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Kitchen Wall Panel Supply" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom FRP Panel Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Consultation & Quotes" } },
    ],
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://share.google/BeTDV46PAjKJ0mmCC",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does FRP panel installation cost in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FRP panel installation in Toronto typically costs between $8 and $18 per square foot installed, depending on project scope, wall condition, and accessibility. Corevance provides free on-site consultations and detailed quotes within 24 hours. Call 437-849-3781 for a custom estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Is FRP better than tile for commercial kitchens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FRP panels outperform ceramic tile in commercial kitchens. FRP has no grout lines where bacteria accumulate, is seamless and easier to sanitize, installs faster at lower cost, resists moisture and impact, and is CFIA-accepted for food facilities. FRP panels meet health code standards without the ongoing maintenance burden of grouted tile.",
      },
    },
    {
      "@type": "Question",
      name: "What are FRP wall panels used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FRP (Fiberglass Reinforced Panels) are used in commercial kitchens, food processing facilities, restaurants, healthcare facilities, car washes, and industrial spaces. They provide a hygienic, moisture-resistant, and durable wall surface that meets CFIA, health code, and building code requirements—ideal anywhere hygiene and durability are critical.",
      },
    },
    {
      "@type": "Question",
      name: "How long does commercial FRP installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical commercial FRP installation takes 1 to 3 days depending on square footage and wall condition. Corevance offers same-day material delivery across the GTA and experienced crews that minimize disruption to your operations.",
      },
    },
    {
      "@type": "Question",
      name: "Are FRP panels CFIA approved for food facilities in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Class C FRP panels installed with proper PVC moldings, nylon rivets, and food-safe adhesives are CFIA (Canadian Food Inspection Agency) accepted for food processing and food service facilities. Corevance installs complete FRP systems that meet all CFIA and provincial health code requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What FRP panel sizes does Corevance supply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corevance stocks FRP panels in 8′ × 4′ and 10′ × 4′ sizes in pebbled and smooth finishes, with 2mm thickness and Class C fire rating. Custom sizes up to 12′ × 5′ are available on special order. Available colours include Almond, Ivory, Beige, Light Gray, Silver, and Black.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
