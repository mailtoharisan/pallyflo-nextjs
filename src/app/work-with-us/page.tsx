import { Button } from "@/components/ui/button"
import { Handshake, FileText, Users, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work With Us - Pallyflo Partnership Opportunities",
  description: "Partner with Pallyflo for your agro-commodities needs. Explore business partnership opportunities and start your business relationship today.",
  keywords: "partnership opportunities, business partnerships, agro-commodities partnerships, trading partnerships",
  openGraph: {
    title: "Work With Us - Pallyflo Partnership Opportunities",
    description: "Partner with Pallyflo for your agro-commodities needs. Explore business partnership opportunities.",
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
                WORK WITH US
              </h1>
              <p className="text-body-large text-brand-gray max-w-3xl mx-auto">
                Partner with Pallyflo for your agro-commodities needs. Start your business relationship today.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
                Join our network of global partners and discover new opportunities in agro-commodities trading.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-brand-light-gray rounded-lg">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Business Partnerships</h3>
                <p className="text-body text-brand-gray">
                  Strategic partnerships for mutual growth and success
                </p>
              </div>
              <div className="text-center p-6 border border-brand-light-gray rounded-lg">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Proposal Guidelines</h3>
                <p className="text-body text-brand-gray">
                  Clear guidelines for partnership proposals and submissions
                </p>
              </div>
              <div className="text-center p-6 border border-brand-light-gray rounded-lg">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Business Inquiries</h3>
                <p className="text-body text-brand-gray">
                  Direct channels for business inquiries and discussions
                </p>
              </div>
              <div className="text-center p-6 border border-brand-light-gray rounded-lg">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">Global Reach</h3>
                <p className="text-body text-brand-gray">
                  Access to our international network and markets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title mb-4">Ready to Partner With Us?</h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Start your business relationship with Pallyflo today and discover new opportunities in agro-commodities trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Submit Business Inquiry
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
                View Proposal Guidelines
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
