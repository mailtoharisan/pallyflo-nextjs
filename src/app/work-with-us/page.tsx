import { Button } from "@/components/ui/button"
import { Handshake, Globe, Users, Award, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work With Us - Partnership Opportunities | Pallyflo",
  description: "Partner with Pallyflo for your agro-commodities needs. Explore partnership opportunities, business collaboration, and strategic alliances.",
  keywords: "partnership opportunities, business collaboration, agro-commodities partnership, strategic alliances",
  openGraph: {
    title: "Work With Us - Partnership Opportunities",
    description: "Partner with Pallyflo for your agro-commodities needs and explore business opportunities.",
    type: "website",
  },
}

export default function WorkWithUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Work With Us - Partnership Opportunities",
    "description": "Partner with Pallyflo for your agro-commodities needs",
    "url": "https://pallyflo.netlify.app/work-with-us"
  }

  const benefits = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Access to international markets and trading networks across multiple continents."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with experienced professionals in agro-commodities trading and logistics."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring premium products and services."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Scalable business solutions that grow with your trading requirements."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for secure trading."
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Building lasting relationships based on trust, transparency, and mutual success."
    }
  ]

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
            src="/assets/hero-images/work-with-us-hero.jpg"
            alt="Work With Pallyflo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                Partnership Opportunities
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              WORK WITH US
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              Join our network of global partners and discover new opportunities in agro-commodities trading
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Why Partner With Pallyflo?
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Discover the advantages of partnering with Pallyflo for your agro-commodities trading needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-subtle rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">{benefit.title}</h3>
                <p className="text-body text-brand-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Explore various partnership models tailored to your business needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-4">Strategic Partnerships</h3>
              <p className="text-body text-brand-gray mb-6">
                Long-term strategic alliances for mutual growth and market expansion across global agro-commodities markets.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Joint market development
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Shared resources and expertise
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Risk sharing and mitigation
                </li>
              </ul>
              <Button variant="outline" size="lg" className="w-full">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-4">Supplier Partnerships</h3>
              <p className="text-body text-brand-gray mb-6">
                Connect with verified suppliers and buyers in our global network for reliable agro-commodities sourcing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Verified supplier network
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Quality assurance programs
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Direct market access
                </li>
              </ul>
              <Button variant="outline" size="lg" className="w-full">
                Get Started
              </Button>
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
              Submit Partnership Proposal
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              View Proposal Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}