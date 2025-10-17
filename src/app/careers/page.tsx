import { Button } from "@/components/ui/button"
import { Briefcase, Users, Globe, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Join Pallyflo Global Agro-Commodities Team",
  description: "Build your career with a global leader in agro-commodities trading. Explore exciting job opportunities and join our team.",
  keywords: "careers, jobs, employment, agro-commodities careers, trading careers",
  openGraph: {
    title: "Careers - Join Pallyflo Global Agro-Commodities Team",
    description: "Build your career with a global leader in agro-commodities trading.",
    type: "website",
  },
}

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-hero text-brand-primary mb-6">
              CAREERS
            </h1>
            <p className="text-body-large text-brand-gray max-w-3xl mx-auto">
              Build your career with a global leader in agro-commodities trading. Explore exciting opportunities.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-brand-light-gray rounded-lg">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Trading Positions</h3>
              <p className="text-body text-brand-gray">
                Join our trading team and help facilitate global agricultural trade
              </p>
            </div>
            <div className="text-center p-6 border border-brand-light-gray rounded-lg">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Business Development</h3>
              <p className="text-body text-brand-gray">
                Build relationships and expand our global market presence
              </p>
            </div>
            <div className="text-center p-6 border border-brand-light-gray rounded-lg">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">International Operations</h3>
              <p className="text-body text-brand-gray">
                Work across our global offices and international markets
              </p>
            </div>
            <div className="text-center p-6 border border-brand-light-gray rounded-lg">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Quality Assurance</h3>
              <p className="text-body text-brand-gray">
                Ensure the highest standards in our products and services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-4">Join Our Team</h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            Explore exciting career opportunities with a global leader in agro-commodities trading.
          </p>
          <Button variant="secondary" size="lg">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  )
}
