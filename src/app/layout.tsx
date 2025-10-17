import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pallyflo - Global Agro-Commodities Trading | Trusted Partner",
  description: "Pallyflo is a leading Canadian multinational agro-commodities exporter trading across 9+ countries with 50+ clients. Your trusted partner in global agricultural trade.",
  keywords: "agro-commodities, agricultural trade, global trading, pulses, grains, oil seeds, Canadian exporter",
  authors: [{ name: "Pallyflo" }],
  openGraph: {
    title: "Pallyflo - Global Agro-Commodities Trading",
    description: "Leading Canadian multinational agro-commodities exporter. Your trusted partner in global agricultural trade.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
