import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-brand-secondary font-semibold text-lg mb-4">
              Your Trusted Partner in Agricultural Trade
            </p>
            <h1 className="text-hero text-brand-primary mb-6">
              Global Agro-Commodities Trading Excellence
            </h1>
            <p className="text-body-large text-brand-gray max-w-3xl mx-auto mb-8">
              Leading Canadian multinational exporter connecting quality agricultural products with global markets across 9+ countries.
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Start Trading Today
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">Trusted Partner</h3>
              <p className="text-brand-gray">Industry Leader</p>
              <p className="text-body-small text-brand-gray">Established reputation in global trade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">9+ Countries</h3>
              <p className="text-brand-gray">International market presence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-2">50+ Clients</h3>
              <p className="text-brand-gray">Satisfied business partners worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leading the Future Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-6">
              Leading the Future of Agricultural Trade
            </h2>
            <p className="text-body-large text-brand-gray max-w-4xl mx-auto mb-8">
              Pallyflo stands at the forefront of global agro-commodities trading, bridging the gap between premium agricultural producers and international markets. With our Canadian headquarters and international presence, we deliver excellence through every transaction while maintaining the highest standards of quality and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
              <Button variant="default" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pallyflo Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-4">
              Why Choose Pallyflo?
            </h2>
            <p className="text-body-large text-brand-gray">
              Discover what sets us apart as a leader in global agro-commodities trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Global Trading Solutions</h3>
              <p className="text-body text-brand-gray">
                Comprehensive agro-commodities trading across international markets with established networks in 9+ countries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Quality Assurance</h3>
              <p className="text-body text-brand-gray">
                Rigorous quality control processes and international certifications ensuring premium product standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Trusted Partnerships</h3>
              <p className="text-body text-brand-gray">
                Building long-term relationships with 50+ satisfied clients worldwide through transparency and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Market Expertise</h3>
              <p className="text-body text-brand-gray">
                Deep market knowledge and real-time intelligence to drive informed trading decisions and maximize opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-body-large text-brand-gray">
              From products to partnerships, discover how Pallyflo can support your business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border-2 border-brand-secondary rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Our Products</h3>
              <p className="text-body text-brand-gray mb-4">
                Explore our comprehensive range of premium agro-commodities including pulses, grains, and oil seeds.
              </p>
              <Button variant="outline" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
            <div className="text-center p-6 border-2 border-brand-secondary rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Our Services</h3>
              <p className="text-body text-brand-gray mb-4">
                Discover our end-to-end trading solutions from market research to global logistics and delivery.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="text-center p-6 border-2 border-brand-secondary rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Join Our Team</h3>
              <p className="text-body text-brand-gray mb-4">
                Build your career with a global leader in agro-commodities trading. Explore exciting opportunities.
              </p>
              <Button variant="outline" asChild>
                <Link href="/careers">View Careers</Link>
              </Button>
            </div>
            <div className="text-center p-6 border-2 border-brand-secondary rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Work With Us</h3>
              <p className="text-body text-brand-gray mb-4">
                Partner with Pallyflo for your agro-commodities needs. Start your business relationship today.
              </p>
              <Button variant="outline" asChild>
                <Link href="/work-with-us">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Trading Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title mb-4">Ready to Start Trading?</h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            Join our network of global partners and discover new opportunities in agro-commodities trading.
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