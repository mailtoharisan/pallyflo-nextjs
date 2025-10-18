import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./ContactForm"
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
                Global Presence
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              REACH US
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              Connect with our international offices and team members
            </p>
          </div>
        </div>
      </section>

      {/* Get In Touch and Quick Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Multiple ways to connect with our team. Choose the method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get In Touch Options */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-6">Contact Options</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary">General Enquiries</h4>
                      <p className="text-body text-brand-gray">info@pallyflo.com</p>
                    </div>
                  </div>
                  <p className="text-body-small text-brand-gray">For general information and support</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary">Sales Enquiries</h4>
                      <p className="text-body text-brand-gray">sales@pallyflo.com</p>
                    </div>
                  </div>
                  <p className="text-body-small text-brand-gray">For business partnerships and trading opportunities</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary">Global Hotline</h4>
                      <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                    </div>
                  </div>
                  <p className="text-body-small text-brand-gray">24/7 support for urgent business matters</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary">WhatsApp Business</h4>
                      <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                    </div>
                  </div>
                  <p className="text-body-small text-brand-gray">Quick communication for existing partners</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div id="quick-contact">
              <h3 className="text-xl font-semibold text-brand-primary mb-6">Quick Contact</h3>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Our Global Offices
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Visit us at our international locations or schedule a meeting with our local teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Canada Office */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-subsection-title text-brand-primary">Canada 🇨🇦</h3>
                  <p className="text-body text-brand-gray">Headquarters</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">123 Bay Street, Suite 1200, Toronto, ON M5J 2Z1, Canada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+1 (647) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">canada@pallyflo.com</p>
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
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-secondary shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-subsection-title text-brand-primary">India 🇮🇳</h3>
                  <p className="text-body text-brand-gray">Branch Office</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">456 Mount Road, 5th Floor, Chennai, Tamil Nadu 600015, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+91 44 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">india@pallyflo.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-brand-secondary mt-1 mr-3" />
                  <div>
                    <p className="text-body text-brand-gray">Monday - Saturday: 9:30 AM - 6:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Worldwide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Find Us Worldwide
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Our strategic locations enable us to serve clients across the globe efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-primary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">North America</h3>
              <p className="text-body text-brand-gray mb-2">Toronto, Canada</p>
              <p className="text-body-small text-brand-gray mb-6">Headquarters</p>
              <div className="mt-6">
                <Button variant="outline" asChild className="transition-all duration-300">
                  <Link href="https://maps.google.com/maps?q=123+Bay+Street+Suite+1200+Toronto+ON+M5J+2Z1+Canada" target="_blank">View on Map →</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Asia Pacific</h3>
              <p className="text-body text-brand-gray mb-2">Chennai, India</p>
              <p className="text-body-small text-brand-gray mb-6">Regional Office</p>
              <div className="mt-6">
                <Button variant="outline" asChild className="transition-all duration-300">
                  <Link href="https://maps.google.com/maps?q=456+Mount+Road+5th+Floor+Chennai+Tamil+Nadu+600015+India" target="_blank">View on Map →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}