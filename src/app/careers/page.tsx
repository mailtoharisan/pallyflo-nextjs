"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Briefcase, Users, Globe, Award, ArrowUp, TrendingUp, Users2, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === 'resume' && files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log('Submitting form data:', formData)
      
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }
      
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()
      console.log('API response:', result)

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resume: null
        })
      } else {
        console.error('API error:', result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-images/careers-hero.jpg"
            alt="Pallyflo Careers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                Join Our Team
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              CAREERS
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
              Build your career with a global leader in agro-commodities trading
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Career Opportunities
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              Join our team of experienced professionals and contribute to the global agricultural trade industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Trading Positions</h3>
              <p className="text-body text-brand-gray">
                Join our trading team and help facilitate global agricultural trade
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Business Development</h3>
              <p className="text-body text-brand-gray">
                Build relationships and expand our global market presence
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">International Operations</h3>
              <p className="text-body text-brand-gray">
                Work across our global offices and international markets
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Quality Assurance</h3>
              <p className="text-body text-brand-gray">
                Ensure the highest standards in our products and services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Career and Application Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Build Your Career With Pallyflo
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
              At Pallyflo, we believe our people are our greatest asset. Join our dynamic team and be part of shaping the future of global agricultural trade while growing your career in an international environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Career Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-6">Why Choose Pallyflo?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-subsection-title text-brand-primary mb-3">Global Opportunities</h4>
                  <p className="text-body text-brand-gray">
                    Work with international teams across 9+ countries and expand your global perspective
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-subsection-title text-brand-primary mb-3">Career Growth</h4>
                  <p className="text-body text-brand-gray">
                    Continuous learning opportunities and clear career progression paths
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-subsection-title text-brand-primary mb-3">Collaborative Culture</h4>
                  <p className="text-body text-brand-gray">
                    Join a diverse team of professionals committed to excellence and innovation
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-subsection-title text-brand-primary mb-3">Competitive Benefits</h4>
                  <p className="text-body text-brand-gray">
                    Comprehensive benefits package including health coverage and performance bonuses
                  </p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div id="application-form">
              <h3 className="text-xl font-semibold text-brand-primary mb-6">Submit Your Application</h3>
              <p className="text-body text-brand-gray mb-6">
                Interested in joining our team? Submit your information and we&apos;ll keep you informed about relevant opportunities.
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-brand-primary mb-2">
                    First Name *
                  </Label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-brand-primary mb-2">
                    Last Name *
                  </Label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
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
                <Label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-2">
                  Phone Number *
                </Label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              <div>
                <Label htmlFor="resume" className="block text-sm font-medium text-brand-primary mb-2">
                  CV/Resume Upload *
                </Label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload your CV/Resume (PDF, DOC, DOCX, TXT - Max 5MB)
                </p>
                {formData.resume && (
                  <p className="text-sm text-green-600 mt-1">
                    Selected: {formData.resume.name} ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    Thank you! Your application has been submitted successfully. We&apos;ll be in touch soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">
                    There was an error submitting your application. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-medium py-4 px-6 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join Our Team? Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-body-large text-white mb-8 max-w-2xl mx-auto">
            Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild className="transition-all duration-300">
              <Link href="/careers#application-form">Submit Application</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 border-white text-white hover:bg-white hover:text-brand-primary">
              <Link href="/reach-us#quick-contact">Contact HR</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
