import { Button } from "@/components/ui/button"
import { Award, Globe, Users, Target, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">Trusted Partner</h3>
              <p className="text-brand-gray">Industry Leader</p>
              <p className="text-body-small text-brand-gray">Established reputation in global trade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">9+ Countries</h3>
              <p className="text-brand-gray">International market presence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">50+ Clients</h3>
              <p className="text-brand-gray">Satisfied business partners worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-primary shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-section-title text-brand-primary">
                  Who We Are
                </h2>
              </div>
              <p className="text-body text-brand-gray">
                Pallyflo Corporation is a Canadian multinational agro-commodities exporting company, headquartered in Toronto, Ontario - Canada, that delivers Pulses and Seeds to buyers throughout the world in a secure manner. We source products from producers, farmers, processors, and local suppliers, and market and deliver commodities physically to our buyers, importers, processors, whole-sellers, and retailers all over the world.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-r-4 border-brand-secondary shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-section-title text-brand-primary">
                  What We Do
                </h2>
              </div>
              <p className="text-body text-brand-gray">
                Pallyflo&apos;s objective is to connect key resources for physical commodities at the heart of the global supply chain in a sustainable and ethical manner. We pay attention to the demands of society and use our in-depth knowledge of the markets we serve to improve supply chain management and ensure the long-term viability of the resources we distribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-primary shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-section-title text-brand-primary">
                  Our Mission
                </h2>
              </div>
              <p className="text-body text-brand-gray">
                To be the leading global platform for agro-commodities trade, connecting agricultural producers with international markets while maintaining the highest standards of quality, integrity, and sustainability. We strive to contribute to global food security and economic prosperity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-r-4 border-brand-secondary shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-section-title text-brand-primary">
                  Our Vision
                </h2>
              </div>
              <p className="text-body text-brand-gray">
                To revolutionize global agricultural trade through innovation, transparency, and sustainable practices. We envision a world where quality agricultural products reach every corner of the globe efficiently, fostering prosperity for farmers and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Our Values
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Our core values guide every decision we make and every relationship we build, ensuring we maintain the highest standards in all our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Global Responsibility</h3>
              <p className="text-body text-brand-gray">
                Contributing to sustainable agricultural practices worldwide
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Integrity</h3>
              <p className="text-body text-brand-gray">
                Honest and transparent business practices in all our dealings
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Excellence</h3>
              <p className="text-body text-brand-gray">
                Delivering superior quality products and services consistently
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Client Success</h3>
              <p className="text-body text-brand-gray">
                Dedicated to our partners&apos; growth and long-term success
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Diversity & Inclusion</h3>
              <p className="text-body text-brand-gray">
                Embracing diverse perspectives and inclusive business practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Partner With Us? Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-body-large text-white mb-8 max-w-2xl mx-auto">
            Join our network of trusted partners and experience the Pallyflo difference in agro-commodities trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild className="transition-all duration-300">
              <Link href="/work-with-us#business-inquiries">Start Partnership</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 border-white text-white hover:bg-white hover:text-brand-primary">
              <Link href="/about#our-values">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}