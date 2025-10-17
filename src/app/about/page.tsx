import { Button } from "@/components/ui/button"
import { Award, Globe, Users, Target, Heart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Pallyflo - Global Agro-Commodities Trading | Trusted Partner",
  description: "Learn about Pallyflo's mission, vision, and values as a leading Canadian multinational agro-commodities exporter trading across 9+ countries with 50+ clients.",
  keywords: "about pallyflo, company mission, vision, values, agro-commodities, agricultural trade",
  openGraph: {
    title: "About Pallyflo - Global Agro-Commodities Trading",
    description: "Learn about Pallyflo's mission, vision, and values as a leading Canadian multinational agro-commodities exporter.",
    type: "website",
  },
}

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pallyflo",
    "description": "Leading Canadian multinational agro-commodities exporter trading across 9+ countries with 50+ clients",
    "url": "https://pallyflo.netlify.app",
    "logo": "https://pallyflo.netlify.app/assets/logo.svg",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Bay Street",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5J 2Z1",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-647-123-4567",
      "contactType": "customer service",
      "email": "info@pallyflo.com"
    },
    "sameAs": [
      "https://linkedin.com/company/pallyflo",
      "https://instagram.com/pallyflo",
      "https://twitter.com/pallyflo",
      "https://facebook.com/pallyflo"
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-images/about-hero.jpg"
            alt="About Pallyflo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                About Pallyflo
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              ABOUT US
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              Learn about our mission, vision, and values as a leading global agro-commodities trading company
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Our Foundation
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Built on a foundation of trust, quality, and global excellence in agricultural trade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Our Mission</h3>
              <p className="text-body text-brand-gray">
                To bridge the gap between agricultural producers and global markets, ensuring quality products reach consumers worldwide while fostering sustainable growth in the agricultural sector.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Our Vision</h3>
              <p className="text-body text-brand-gray">
                To be the world&apos;s most trusted and innovative agro-commodities trading partner, connecting continents through sustainable agricultural excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Our Values</h3>
              <p className="text-body text-brand-gray">
                Integrity, transparency, and commitment to excellence guide every transaction, ensuring long-term partnerships and sustainable agricultural development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              What Drives Us
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Our core values shape every decision and relationship in our global trading network.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Quality Excellence</h3>
              <p className="text-body text-brand-gray">
                Maintaining the highest standards in product quality and service delivery across all our operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Trusted Partnerships</h3>
              <p className="text-body text-brand-gray">
                Building long-term relationships based on mutual trust, transparency, and shared success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Global Reach</h3>
              <p className="text-body text-brand-gray">
                Connecting agricultural markets across continents with our extensive international network.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Innovation</h3>
              <p className="text-body text-brand-gray">
                Continuously improving our processes and adopting new technologies to serve our partners better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-4">Ready to Partner With Us?</h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            Join our network of global partners and discover new opportunities in agro-commodities trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}