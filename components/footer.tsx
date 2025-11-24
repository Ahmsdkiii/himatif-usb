'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Github, ChevronRight, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = 2025

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/cabinet', label: 'Cabinet' },
    { href: '/programs', label: 'Programs' },
  ]

  const resources = [
    { href: '/news', label: 'News & Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/divisions', label: 'Divisions' },
  ]

  const socialLinks = [
    { href: '#', icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400' },
    { href: '#', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { href: '#', icon: Github, label: 'GitHub', color: 'hover:text-foreground' },
    { href: '#', icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500' },
  ]

  return (
    <footer className="relative bg-background border-t border-primary/20 mt-20">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group mb-4">
              <div className="relative">
                <div className="font-bold text-3xl text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                  HIMATIF USB
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Himpunan Mahasiswa Teknik Informatika USB YPKP Bandung - Membangun komunitas developer yang inovatif dan saling mendukung pertumbuhan skill satu sama lain.
            </p>
            <div className="flex items-start gap-3 text-sm text-muted-foreground group hover:text-primary transition-colors duration-200">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Jl. Khp Hasan Mustopa No.68, Cikutra, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40124</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground text-base mb-4 flex items-center gap-2">
              Quick Links
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground text-base mb-4 flex items-center gap-2">
              Resources
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-semibold text-foreground text-base mb-4 flex items-center gap-2">
              Get In Touch
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:himatifusbypkp@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>himatifusbypkp@gmail.com</span>
              </a>
              <a 
                href="tel:+6222022950" 
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+62 22 020 950</span>
              </a>
              
              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`p-2.5 rounded-lg bg-primary/10 text-muted-foreground hover:bg-primary/20 ${social.color} transition-all duration-200 hover:scale-110 active:scale-95`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent h-px"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} HIMATIF USB YPKP. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Privacy Policy
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link 
                href="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Terms of Service
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link 
                href="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Contact Us
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  )
}