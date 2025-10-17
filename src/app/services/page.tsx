import { Button } from "@/components/ui/button"
import { Globe, Truck, BarChart3, Users, Package, Shield } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Pallyflo Global Agro-Commodities Trading",
  description: "Comprehensive end-to-end services for global agro-commodities trading including trade facilitation, distribution, market research, collaboration, logistics, and quality assurance.",
  keywords: "agro-commodities services, global trading, distribution, market research, logistics, quality assurance",
  openGraph: {
    title: "Services - Pallyflo Global Agro-Commodities Trading",
    description: "Comprehensive end-to-end services for global agro-commodities trading.",
    type: "website",
  },
}

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Global Agro-Commodities Trading Services",
    "description": "Comprehensive end-to-end services for global agro-commodities trading",
    "provider": {
      "@type": "Organization",
      "name": "Pallyflo",
      "url": "https://pallyflo.netlify.app"
    },
    "areaServed": "Global",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://pallyflo.netlify.app/services"
    }
  }

  const services = [
    {
      icon: Globe,
      title: "Trade Across Borders",
      description: "Facilitating seamless international trade relationships with comprehensive border management and customs expertise.",
      features: ["Customs clearance", "International regulations", "Multi-country operations", "Compliance management"]
    },
    {
      icon: Truck,
      title: "Distribution & Logistics",
      description: "End-to-end logistics solutions ensuring timely and efficient delivery of agro-commodities to global markets.",
      features: ["Global shipping", "Warehouse management", "Supply chain optimization", "Real-time tracking"]
    },
    {
      icon: BarChart3,
      title: "Market Research & Intelligence",
      description: "Comprehensive market analysis and intelligence to help clients make informed trading decisions.",
      features: ["Market analysis", "Price forecasting", "Trend identification", "Competitive intelligence"]
    },
    {
      icon: Users,
      title: "Partnership Development",
      description: "Building strategic partnerships with producers, buyers, and stakeholders across the agricultural value chain.",
      features: ["Network building", "Partnership facilitation", "Relationship management", "Strategic alliances"]
    },
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Connecting buyers with premium agricultural products from verified suppliers worldwide.",
      features: ["Supplier verification", "Quality assessment", "Product sourcing", "Supply chain management"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring all products meet international standards and certifications.",
      features: ["Quality testing", "Certification management", "Compliance monitoring", "Standards adherence"]
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
            src="/assets/hero-images/services-hero.jpg"
            alt="Pallyflo Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                Comprehensive Trading Solutions
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              End-to-end services for global agro-commodities trading and distribution
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              From market research to global logistics, we provide end-to-end solutions for agro-commodities trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-subtle p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-4">{service.title}</h3>
                <p className="text-body text-brand-gray mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-body-small text-brand-gray flex items-center">
                      <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Our Process
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              A streamlined approach to agro-commodities trading that ensures quality, efficiency, and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Initial Consultation</h3>
              <p className="text-body text-brand-gray">
                Understanding your specific requirements and market needs through detailed consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Market Research</h3>
              <p className="text-body text-brand-gray">
                Comprehensive analysis of market conditions, pricing, and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Sourcing & Quality</h3>
              <p className="text-body text-brand-gray">
                Identifying and verifying suppliers while ensuring quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Delivery & Support</h3>
              <p className="text-body text-brand-gray">
                Coordinating logistics and providing ongoing support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-4">Ready to Start Trading?</h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your agro-commodities trading needs and discover how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Started
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