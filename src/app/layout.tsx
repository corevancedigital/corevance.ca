import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Corevance | Commercial FRP Wall Panel Installation & Supply",
  description:
    "Corevance delivers expert FRP fiberglass wall panel installation and supply for commercial kitchens, food facilities, and industrial spaces. CFIA-accepted, Class C rated. Request a free consultation.",
  keywords:
    "FRP wall panel installation, fiberglass reinforced panel contractor, commercial FRP panels, FRP supply, CFIA installation, Class C FRP panels, commercial kitchen wall panels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
