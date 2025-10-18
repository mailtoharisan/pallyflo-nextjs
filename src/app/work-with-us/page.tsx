"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Handshake, Globe, Users, Award, TrendingUp, Shield, Mail, Phone, CheckCircle, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    companyAddress: "",
    website: "",
    phone: "",
    message: "",
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/business-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

            await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          companyAddress: "",
          website: "",
          phone: "",
          message: "",
          consent: false
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                index % 2 === 0 ? 'border-l-4 border-brand-primary' : 'border-l-4 border-brand-secondary'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'
                }`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subsection-title text-brand-primary mb-3">{benefit.title}</h3>
                <p className="text-body text-brand-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Inquiries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Business Inquiries
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Start your journey with Pallyflo by submitting a business inquiry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Submit Your Inquiry Form */}
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Submit Your Inquiry</h3>
              <p className="text-body text-brand-gray mb-6">
                Fill out the form below and our business development team will reach out to discuss potential partnership opportunities.
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="block text-sm font-medium text-brand-primary mb-2">
                        Full Name *
                      </Label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="companyName" className="block text-sm font-medium text-brand-primary mb-2">
                        Company Name *
                      </Label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-2">
                      Email Address *
                    </Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyAddress" className="block text-sm font-medium text-brand-primary mb-2">
                      Company Address *
                    </Label>
                    <input
                      id="companyAddress"
                      name="companyAddress"
                      type="text"
                      placeholder="Enter company address"
                      value={formData.companyAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="block text-sm font-medium text-brand-primary mb-2">
                      Website
                    </Label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://www.example.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-2">
                      Phone Number *
                    </Label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-2">
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business needs, products of interest, or any specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3"
                    />
                    <Label htmlFor="consent" className="text-sm text-brand-gray">
                      I agree to Pallyflo&apos;s terms and conditions and consent to the processing of my personal data for business communication purposes. *
                    </Label>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        Thank you! Your business inquiry has been submitted successfully. We&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">
                        There was an error submitting your inquiry. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-medium py-4 px-6 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </div>

            {/* What Happens Next? */}
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">What Happens Next?</h3>
              <p className="text-body text-brand-gray mb-8">
                After submitting your inquiry, here&apos;s what you can expect from our team.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary mb-2">Quick Response</h4>
                      <p className="text-body text-brand-gray">Get a response within 24 hours from our dedicated team</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary mb-2">Direct Communication</h4>
                      <p className="text-body text-brand-gray">Speak directly with our business development specialists</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary mb-2">Customized Solutions</h4>
                      <p className="text-body text-brand-gray">Receive tailored partnership proposals based on your needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-subsection-title text-brand-primary mb-2">Global Network Access</h4>
                      <p className="text-body text-brand-gray">Connect with our worldwide network of partners and suppliers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-brand-primary mb-4">Need Immediate Assistance?</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-secondary mr-3" />
                    <span className="text-body text-brand-gray">sales@pallyflo.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-secondary mr-3" />
                    <span className="text-body text-brand-gray">+1 (647) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Partnership Requirements
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              To ensure secure and compliant business relationships, all potential partners must meet our stringent requirements and complete the verification process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Due Diligence & KYC */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-4 text-center">Due Diligence & KYC</h3>
              <p className="text-body text-brand-gray mb-6 text-center">
                Complete Know Your Customer verification and due diligence documentation required for all new partnerships.
              </p>
              <ul className="space-y-3">
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Company registration documents
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Financial statements (last 2 years)
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Trade references and bank references
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Authorized signatory identification
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Business license and permits
                </li>
              </ul>
            </div>

            {/* ICC NCNDA & MFPA Required */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-4 text-center">ICC NCNDA & MFPA Required</h3>
              <p className="text-body text-brand-gray mb-6 text-center">
                International Chamber of Commerce Non-Circumvention, Non-Disclosure Agreement and Master Fee Protection Agreement must be signed.
              </p>
              <ul className="space-y-3">
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  ICC-compliant NCNDA execution
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Master Fee Protection Agreement
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Authorized signatory verification
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Legal entity confirmation
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Jurisdiction specification
                </li>
              </ul>
            </div>

            {/* Direct Buyers/Sellers Only */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-4 text-center">Direct Buyers/Sellers Only</h3>
              <p className="text-body text-brand-gray mb-6 text-center">
                We work exclusively with direct buyers and sellers. No intermediaries or brokers will be entertained.
              </p>
              <ul className="space-y-3">
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Proof of direct buying/selling authority
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  End-user certificate (if applicable)
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Financial capability verification
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Authorized mandate documentation
                </li>
                <li className="text-body-small text-brand-gray flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></span>
                  Direct contact verification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Application Process
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Follow our structured process to become an authorized Pallyflo partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Process Steps */}
            <div>
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-subsection-title text-brand-primary mb-3">Initial Contact</h3>
                    <p className="text-body text-brand-gray">
                      Submit your business inquiry through our official channels
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-subsection-title text-brand-primary mb-3">Documentation Review</h3>
                    <p className="text-body text-brand-gray">
                      Provide all required KYC and due diligence documents
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-subsection-title text-brand-primary mb-3">Legal Agreements</h3>
                    <p className="text-body text-brand-gray">
                      Execute ICC NCNDA and MFPA documentation
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-subsection-title text-brand-primary mb-3">Verification</h3>
                    <p className="text-body text-brand-gray">
                      Complete verification of credentials and financial capability
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-subsection-title text-brand-primary mb-3">Partnership Approval</h3>
                    <p className="text-body text-brand-gray">
                      Final approval and onboarding as an authorized partner
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Important Notes</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ul className="space-y-4">
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    All documentation must be in English or officially translated
                  </li>
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    Digital signatures are acceptable for initial agreements
                  </li>
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    Original documents may be required for final verification
                  </li>
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    Processing time typically ranges from 5-15 business days
                  </li>
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    Incomplete submissions will not be processed
                  </li>
                  <li className="text-body text-brand-gray flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    All information is treated with strict confidentiality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Become a Partner? Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title text-white mb-4">Ready to Become a Partner?</h2>
          <p className="text-body-large text-white mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful partnership with Pallyflo. Submit your business inquiry today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild className="transition-all duration-300">
              <Link href="/work-with-us#business-inquiries">Submit Inquiry</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 border-white text-white hover:bg-white hover:text-brand-secondary">
              <Link href="/reach-us#quick-contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}