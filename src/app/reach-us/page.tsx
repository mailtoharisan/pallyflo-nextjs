import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reach Us - Contact Pallyflo Global Offices",
  description: "Contact Pallyflo at our global offices. Get in touch with our team for business inquiries, partnerships, and support.",
  keywords: "contact pallyflo, global offices, business inquiries, customer support",
  openGraph: {
    title: "Reach Us - Contact Pallyflo Global Offices",
    description: "Contact Pallyflo at our global offices for business inquiries and support.",
    type: "website",
  },
}

export default function ReachUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Pallyflo",
    "description": "Contact information for Pallyflo global offices",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pallyflo",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "123 Bay Street",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "postalCode": "M5J 2Z1",
          "addressCountry": "CA"
        },
        {
          "@type": "PostalAddress", 
          "streetAddress": "456 Mount Road",
          "addressLocality": "Chennai",
          "addressRegion": "TN",
          "postalCode": "600015",
          "addressCountry": "IN"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-647-123-4567",
          "contactType": "customer service",
          "email": "info@pallyflo.com"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-647-123-4567", 
          "contactType": "sales",
          "email": "sales@pallyflo.com"
        }
      ]
    }
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
                REACH US
              </h1>
              <p className="text-body-large text-brand-gray max-w-3xl mx-auto">
                Contact Pallyflo at our global offices. Get in touch with our team for business inquiries, partnerships, and support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-section-title text-brand-primary mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <h3 className="text-subsection-title text-brand-primary mb-2">General Enquiry</h3>
                      <p className="text-body text-brand-gray">info@pallyflo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <h3 className="text-subsection-title text-brand-primary mb-2">Sales Enquiry</h3>
                      <p className="text-body text-brand-gray">sales@pallyflo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <h3 className="text-subsection-title text-brand-primary mb-2">Phone</h3>
                      <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <h3 className="text-subsection-title text-brand-primary mb-2">Business Hours</h3>
                      <p className="text-body text-brand-gray">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-section-title text-brand-primary mb-8">
                  Our Offices
                </h2>
                <div className="space-y-8">
                  <div className="border border-brand-light-gray rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-brand-secondary mt-1" />
                      <div>
                        <h3 className="text-subsection-title text-brand-primary mb-2">Canada HQ</h3>
                        <p className="text-body text-brand-gray">
                          123 Bay Street, Toronto, ON M5J 2Z1, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-brand-light-gray rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-brand-secondary mt-1" />
                      <div>
                        <h3 className="text-subsection-title text-brand-primary mb-2">India Branch</h3>
                        <p className="text-body text-brand-gray">
                          456 Mount Road, Chennai, TN 600015, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title mb-4">Ready to Connect?</h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your agro-commodities needs and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Send Message
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
                Schedule Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
