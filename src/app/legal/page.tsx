import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal - Pallyflo Legal Information",
  description: "Legal information and terms for Pallyflo global agro-commodities trading services.",
  keywords: "legal information, terms, conditions, pallyflo legal",
  openGraph: {
    title: "Legal - Pallyflo Legal Information",
    description: "Legal information and terms for Pallyflo services.",
    type: "website",
  },
}

export default function Legal() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-hero text-brand-primary mb-8">Legal Information</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-body text-brand-gray">
            This page contains legal information and terms for Pallyflo's global agro-commodities trading services.
          </p>
        </div>
      </div>
    </div>
  )
}
