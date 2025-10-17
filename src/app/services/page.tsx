import { Button } from "@/components/ui/button"
import { Globe, Truck, BarChart3, Users, Package, Shield } from "lucide-react"
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
      "name": "Pallyflo"
    },
    "serviceType": "Agricultural Trading Services",
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
      title: "Distribution of Goods & Services",
      description: "End-to-end distribution network ensuring efficient delivery of agricultural commodities worldwide.",
      features: ["Global distribution network", "Warehousing solutions", "Last-mile delivery", "Inventory management"]
    },
    {
      icon: BarChart3,
      title: "Market Research",
      description: "Comprehensive market intelligence and analysis to drive informed business decisions.",
      features: ["Real-time market updates", "Data-driven decisions", "Risk assessment", "Investor-backed market entry"]
    },
    {
      icon: Users,
      title: "Collaboration Strategy",
      description: "Building strategic partnerships and fostering long-term business relationships globally.",
      features: ["Partnership development", "Strategic planning", "Relationship management", "Joint ventures"]
    },
    {
      icon: Package,
      title: "Shipment & Logistics",
      description: "Complete logistics solutions with secure and timely delivery of agricultural products.",
      features: ["End-to-end logistics", "Global shipping network", "Secure delivery", "Real-time tracking"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring premium standards for all our products.",
      features: ["Strict quality checks", "International certifications", "Product traceability", "Compliance standards"]
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Market Analysis",
      description: "Comprehensive market research and opportunity identification"
    },
    {
      step: "2", 
      title: "Partnership",
      description: "Building strategic relationships with buyers and sellers"
    },
    {
      step: "3",
      title: "Execution", 
      description: "Seamless transaction processing and quality assurance"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Secure logistics and timely delivery worldwide"
    }
  ]

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
              <p className="text-brand-secondary font-semibold text-lg mb-4">
                Comprehensive Solutions
              </p>
              <h1 className="text-hero text-brand-primary mb-6">
                OUR SERVICES
              </h1>
              <p className="text-body-large text-brand-gray max-w-3xl mx-auto">
                End-to-end services for global agro-commodities trading
              </p>
            </div>
          </div>
        </section>

        {/* Complete Trading Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                Complete Trading Solutions
              </h2>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
                From market research to final delivery, we provide comprehensive services that ensure successful global trade operations for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-subsection-title text-brand-primary mb-3">{service.title}</h3>
                  <p className="text-body text-brand-gray mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-body-small text-brand-gray flex items-center">
                        <span className="w-2 h-2 bg-brand-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Trading Process Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-4">
                Our Trading Process
              </h2>
              <p className="text-body-large text-brand-gray">
                A streamlined approach that ensures efficiency, transparency, and success in every transaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-subsection-title text-brand-primary mb-3">{step.title}</h3>
                  <p className="text-body text-brand-gray">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title mb-4">Ready to Start Trading?</h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Discover how our comprehensive trading solutions can support your business objectives.
            </p>
            <Button variant="secondary" size="lg">
              Get Quote
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
