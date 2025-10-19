import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Pallyflo Data Protection",
  description: "Privacy policy and data protection information for Pallyflo global agro-commodities trading services.",
  keywords: "privacy policy, data protection, pallyflo privacy",
  openGraph: {
    title: "Privacy Policy - Pallyflo Data Protection",
    description: "Privacy policy and data protection information for Pallyflo services.",
    type: "website",
  },
}

export default function Privacy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-hero text-brand-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-body text-brand-gray">
            This page contains our privacy policy and data protection information.
          </p>
        </div>
      </div>
    </div>
  )
}


