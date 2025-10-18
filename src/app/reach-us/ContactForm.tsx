"use client"

import { Send } from "lucide-react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
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
          email: "",
          phone: "",
          message: ""
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <p className="text-body text-brand-gray mb-6">
        Send us a message and we&apos;ll get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-brand-primary mb-2">
                  Full Name *
                </label>
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
                <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-2">
                  Email Address *
                </label>
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
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none"
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">
                  There was an error sending your message. Please try again.
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
    </div>
  )
}
