import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Work With Us', href: '/work-with-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Reach Us', href: '/reach-us' },
  ]

  const legalLinks = [
    { name: 'Legal', href: '/legal' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
  ]

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">Pallyflo</span>
              <p className="mt-4 text-brand-light-gray text-body">
                Leading Canadian multinational agro-commodities exporter. Your trusted partner in global agricultural trade.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-secondary" />
                <div>
                  <p className="text-sm text-brand-light-gray">General Enquiry</p>
                  <p className="text-white">info@pallyflo.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-secondary" />
                <div>
                  <p className="text-sm text-brand-light-gray">Sales Enquiry</p>
                  <p className="text-white">sales@pallyflo.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-secondary" />
                <div>
                  <p className="text-sm text-brand-light-gray">Phone</p>
                  <p className="text-white">+1 (647) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-light-gray hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-secondary mt-1" />
                <div>
                  <p className="text-white font-medium">Canada HQ</p>
                  <p className="text-brand-light-gray text-sm">
                    123 Bay Street, Toronto, ON M5J 2Z1, Canada
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-secondary mt-1" />
                <div>
                  <p className="text-white font-medium">India Branch</p>
                  <p className="text-brand-light-gray text-sm">
                    456 Mount Road, Chennai, TN 600015, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-brand-light-gray hover:text-brand-secondary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-brand-light-gray hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-brand-light-gray text-sm">
              © 2024 Pallyflo. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
