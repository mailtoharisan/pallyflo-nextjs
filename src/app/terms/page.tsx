import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Pallyflo Terms and Conditions",
  description: "Terms of service and conditions for Pallyflo global agro-commodities trading services.",
  keywords: "terms of service, terms and conditions, pallyflo terms",
  openGraph: {
    title: "Terms of Service - Pallyflo Terms and Conditions",
    description: "Terms of service and conditions for Pallyflo services.",
    type: "website",
  },
}

export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-hero text-brand-primary mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-body text-brand-gray">
            This page contains our terms of service and conditions for using Pallyflo&apos;s services.
          </p>
        </div>
      </div>
    </div>
  )
}
