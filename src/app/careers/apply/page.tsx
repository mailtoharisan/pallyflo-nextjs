"use client"

import { Label } from "@/components/ui/label"
import { ArrowUp } from "lucide-react"
import { useState } from "react"

export default function CareerApplication() {
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
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Submit Your Application
          </h1>
          <p className="text-xl text-brand-gray">
            Interested in joining our team? Submit your information and we&apos;ll keep you informed about relevant opportunities.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
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
  )
}
