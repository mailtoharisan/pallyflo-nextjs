import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
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
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-images/reach-us-hero.jpg"
            alt="Contact Pallyflo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              REACH US
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              Contact our global offices for business inquiries and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Global Offices
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Connect with our team across our global offices for business inquiries, partnerships, and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Canada Office */}
            <div className="bg-gradient-subtle p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary">Canada Headquarters</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">123 Bay Street, Toronto, ON M5J 2Z1, Canada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">info@pallyflo.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div className="bg-gradient-subtle p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary">India Branch</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">456 Mount Road, Chennai, TN 600015, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+91 (44) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">sales@pallyflo.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-4">Ready to Start Your Partnership?</h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your agro-commodities needs and explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Submit Business Inquiry
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              View Our Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}