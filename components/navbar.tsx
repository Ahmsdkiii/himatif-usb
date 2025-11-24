'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

interface MenuItem {
  href: string
  label: string
  description: string
}

interface MenuSection {
  label: string
  items: MenuItem[]
}

interface MenuStructure {
  about: MenuSection
  activities: MenuSection
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuStructure: MenuStructure = {
    about: {
      label: 'About',
      items: [
        { href: '/about', label: 'About Us', description: 'Learn about our organization' },
        { href: '/cabinet', label: 'Cabinet', description: 'Meet our leadership team' },
        { href: '/divisions', label: 'Divisions', description: 'Our organizational structure' },
      ],
    },
    activities: {
      label: 'Activities',
      items: [
        { href: '/programs', label: 'Programs', description: 'Our programs and initiatives' },
        { href: '/news', label: 'News', description: 'Latest updates and announcements' },
        { href: '/products', label: 'Products', description: 'Our products and services' },
      ],
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsAboutOpen(false)
    setIsActivitiesOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-primary/20' 
          : 'bg-background shadow-lg shadow-primary/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            <Link href="/" className="shrink-0 group flex items-center gap-2 md:gap-3" onClick={closeMobileMenu}>              
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg md:rounded-xl p-1.5 md:p-2 shadow-md md:shadow-lg shadow-primary/20 md:shadow-primary/25">
                <Image
                  src="/assets/img/Himatif-White.png"
                  alt="HIMATIF USB Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
              
              
              <div className="relative">
                <div className="font-bold text-xl lg:text-2xl text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                  HIMATIF USB 
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
              >
                Home
              </Link>
              
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5">
                  {menuStructure.about.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-background/95 backdrop-blur-md rounded-xl border border-primary/20 shadow-xl shadow-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50">
                  <div className="py-2">
                    {menuStructure.about.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                      >
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5">
                  {menuStructure.activities.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-background/95 backdrop-blur-md rounded-xl border border-primary/20 shadow-xl shadow-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50">
                  <div className="py-2">
                    {menuStructure.activities.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                      >
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
              >
                Gallery
              </Link>

              <div className="ml-2">
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className="ml-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:scale-105 active:scale-95"
              >
                Contact
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      </div>

      <div className={`fixed right-0 top-0 h-full w-[75%] max-w-sm bg-background/95 backdrop-blur-xl border-l border-primary/20 shadow-2xl shadow-primary/20 z-40 md:hidden transform transition-all duration-300 ease-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-primary/20">
              <Link href="/" className="group flex items-center gap-2" onClick={closeMobileMenu}>
                <div className="relative w-8 h-8 bg-primary rounded-lg p-1.5 shadow-md shadow-primary/20">
                  <Image
                    src="/assets/img/Himatif-White.png"
                    alt="HIMATIF USB Logo"
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <div className="relative">
                  <div className="font-bold text-lg text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                    HIMATIF USB
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
                </div>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-3">
                <Link
                  href="/"
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <div className="space-y-1">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    <span>{menuStructure.about.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-1 pt-1">
                      {menuStructure.about.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 ml-2"
                          onClick={closeMobileMenu}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    <span>{menuStructure.activities.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${isActivitiesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActivitiesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-1 pt-1">
                      {menuStructure.activities.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 ml-2"
                          onClick={closeMobileMenu}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>

                <div className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block mt-4 px-6 py-3.5 text-base font-medium text-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/40 active:scale-95"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>      
    </>
  )
}