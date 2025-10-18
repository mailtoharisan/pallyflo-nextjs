import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-images/home-hero.jpg"
            alt="Pallyflo Global Agro-Commodities Trading"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-brand-secondary text-lg font-semibold">
                Your Trusted Partner in Agricultural Trade
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              GLOBAL AGRO-COMMODITIES TRADING EXCELLENCE
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light mb-8">
              Leading Canadian multinational exporter connecting quality agricultural products with global markets across 9+ countries.
            </p>
            <div className="flex justify-center">
            <Button variant="default" size="lg" asChild className="text-lg px-8 py-4 transition-all duration-300">
              <Link href="/work-with-us#business-inquiries">Start Trading Today</Link>
            </Button>
            </div>
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
              <p className="text-brand-gray">Industry Leader with established reputation in global trade</p>
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
              <Button variant="secondary" size="lg">
                Learn About Us →
              </Button>
              <Button variant="outline" size="lg" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pallyflo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-4">
              Why Choose Pallyflo?
            </h2>
            <p className="text-body-large text-brand-gray">
              Discover what sets us apart as a leader in global agro-commodities trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Global Trading Solutions</h3>
              <p className="text-body text-brand-gray">
                Comprehensive agro-commodities trading across international markets with established networks in 9+ countries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Quality Assurance</h3>
              <p className="text-body text-brand-gray">
                Rigorous quality control processes and international certifications ensuring premium product standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-subsection-title text-brand-primary mb-3">Trusted Partnerships</h3>
              <p className="text-body text-brand-gray">
                Building long-term relationships with 50+ satisfied clients worldwide through transparency and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-secondary shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
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
      <section id="explore-solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-brand-primary mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-body-large text-brand-gray">
              From products to partnerships, discover how Pallyflo can support your business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-subsection-title text-brand-primary mb-4">Our Products</h3>
              <p className="text-body text-brand-gray mb-6">
                Explore our comprehensive range of premium agro-commodities including pulses, grains, and oil seeds.
              </p>
              <Button variant="secondary" asChild className="transition-all duration-300">
                <Link href="/products">View Products →</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-subsection-title text-brand-primary mb-4">Our Services</h3>
              <p className="text-body text-brand-gray mb-6">
                Discover our end-to-end trading solutions from market research to global logistics and delivery.
              </p>
              <Button variant="secondary" asChild className="transition-all duration-300">
                <Link href="/services">Learn More →</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-subsection-title text-brand-primary mb-4">Join Our Team</h3>
              <p className="text-body text-brand-gray mb-6">
                Build your career with a global leader in agro-commodities trading. Explore exciting opportunities.
              </p>
              <Button variant="secondary" asChild className="transition-all duration-300">
                <Link href="/careers">View Careers →</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-subsection-title text-brand-primary mb-4">Work With Us</h3>
              <p className="text-body text-brand-gray mb-6">
                Partner with Pallyflo for your agro-commodities needs. Start your business relationship today.
              </p>
              <Button variant="secondary" asChild className="transition-all duration-300">
                <Link href="/work-with-us">Get Started →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Trading Section */}
      <section className="py-16 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-body-large text-white mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Pallyflo for their agro-commodities trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild className="transition-all duration-300">
              <Link href="/work-with-us#business-inquiries">Start Partnership</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 border-white text-white hover:bg-white hover:text-brand-primary">
              <Link href="/reach-us#quick-contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}