import { Button } from "@/components/ui/button"
import { Award, Globe, Users, Target, Heart } from "lucide-react"
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-hero text-brand-primary mb-6">
                ABOUT PALLYFLO
              </h1>
              <p className="text-section-title text-brand-primary mb-6">
                Leading Canadian Multinational Agro-Commodities Exporter
              </p>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
                Pallyflo stands at the forefront of global agricultural trade, connecting farmers with markets across continents. As a trusted Canadian multinational corporation, we specialize in the export and distribution of premium agro-commodities, fostering sustainable growth in the agricultural sector worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-2">Trusted Partner</h3>
                <p className="text-brand-gray">Industry Leader</p>
                <p className="text-body-small text-brand-gray">Established reputation in global trade</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-2">9+ Countries</h3>
                <p className="text-brand-gray">International market presence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-2">50+ Clients</h3>
                <p className="text-brand-gray">Satisfied business partners worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                Who We Are
              </h2>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto mb-8">
                Founded on the principles of excellence and integrity, Pallyflo has grown from a regional trader to a global powerhouse in agro-commodities. Our team of experienced professionals brings decades of expertise in international trade, quality assurance, and market analysis.
              </p>
              <p className="text-body text-brand-gray max-w-4xl mx-auto mb-8">
                We understand the complexities of global markets and work tirelessly to bridge the gap between producers and consumers, ensuring fair pricing and reliable supply chains that benefit all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-subsection-title text-brand-primary mb-4">What We Do</h3>
                <ul className="space-y-3 text-body text-brand-gray">
                  <li>• Export premium pulses, grains, and oil seeds globally</li>
                  <li>• Provide comprehensive market research and analysis</li>
                  <li>• Facilitate cross-border trade relationships</li>
                  <li>• Ensure quality assurance and compliance</li>
                  <li>• Deliver end-to-end logistics solutions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-subsection-title text-brand-primary mb-4">Our Mission</h3>
                <p className="text-body text-brand-gray mb-4">
                  To be the leading global platform for agro-commodities trade, connecting agricultural producers with international markets while maintaining the highest standards of quality, integrity, and sustainability. We strive to contribute to global food security and economic prosperity.
                </p>
                <h3 className="text-subsection-title text-brand-primary mb-4">Our Vision</h3>
                <p className="text-body text-brand-gray">
                  To revolutionize global agricultural trade through innovation, transparency, and sustainable practices. We envision a world where quality agricultural products reach every corner of the globe efficiently, fostering prosperity for farmers and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-4">
                Our Values
              </h2>
              <p className="text-body-large text-brand-gray">
                Our core values guide every decision we make and every relationship we build, ensuring we maintain the highest standards in all our operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Global Responsibility</h3>
                <p className="text-body text-brand-gray">
                  Contributing to sustainable agricultural practices worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Integrity</h3>
                <p className="text-body text-brand-gray">
                  Honest and transparent business practices in all our dealings
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Excellence</h3>
                <p className="text-body text-brand-gray">
                  Delivering superior quality products and services consistently
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Client Success</h3>
                <p className="text-body text-brand-gray">
                  Dedicated to our partners' growth and long-term success
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Diversity & Inclusion</h3>
                <p className="text-body text-brand-gray">
                  Embracing diverse perspectives and inclusive business practices
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
