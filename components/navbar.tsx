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
      label: 'Tentang',
      items: [
        {
          href: '/about',
          label: 'Tentang Kami',
          description: 'Kenali lebih dekat organisasi HIMATIF',
        },
        {
          href: '/cabinet',
          label: 'Kabinet',
          description: 'Kenali jajaran pengurus HIMATIF',
        },
        {
          href: '/divisions',
          label: 'Divisi',
          description: 'Struktur divisi dan peran organisasi',
        },
      ],
    },
    activities: {
      label: 'Kegiatan',
      items: [
        {
          href: '/programs',
          label: 'Program',
          description: 'Program kerja dan kegiatan HIMATIF',
        },
        {
          href: '/news',
          label: 'Berita',
          description: 'Info terbaru, pengumuman, dan update kegiatan',
        },
        {
          href: '/products',
          label: 'Produk',
          description: 'Karya, produk, dan layanan dari HIMATIF',
        },
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-primary/20'
            : 'bg-background shadow-lg shadow-primary/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            <Link
              href="/"
              className="shrink-0 group flex items-center gap-2.5 lg:gap-3"
              onClick={closeMobileMenu}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-primary rounded-lg lg:rounded-xl p-2 shadow-md lg:shadow-lg shadow-primary/20 lg:shadow-primary/25">
                <Image
                  src="/assets/img/Himatif-White.png"
                  alt="Logo HIMATIF USB"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>

              <div className="relative">
                <div className="font-bold text-lg sm:text-xl lg:text-2xl text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                  HIMATIF USB
                </div>
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-3 xl:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
              >
                Beranda
              </Link>

              {/* Tentang */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5">
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
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kegiatan */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5">
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
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                className="px-3 xl:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
              >
                Galeri
              </Link>

              <div className="ml-2">
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className="ml-2 px-4 xl:px-5 py-2 xl:py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:scale-105 active:scale-95"
              >
                Kontak
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 active:scale-95"
              aria-label="Buka menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-[320px] sm:w-[360px] bg-background/95 backdrop-blur-xl border-r border-primary/20 shadow-2xl shadow-primary/20 z-40 lg:hidden transform transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center p-4 sm:p-5 border-b border-primary/20">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              onClick={closeMobileMenu}
            >
              <div className="relative w-10 h-10 bg-primary rounded-lg p-2 shadow-md shadow-primary/20">
                <Image
                  src="/assets/img/Himatif-White.png"
                  alt="Logo HIMATIF USB"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <div className="relative">
                <div className="font-bold text-lg sm:text-xl text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                  HIMATIF USB
                </div>
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-3">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Beranda
              </Link>

              {/* Tentang */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                >
                  <span>{menuStructure.about.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-1 pt-1">
                    {menuStructure.about.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 ml-2"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kegiatan */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                >
                  <span>{menuStructure.activities.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActivitiesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActivitiesOpen
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-1 pt-1">
                    {menuStructure.activities.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 ml-2"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
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
                Galeri
              </Link>

              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">
                    Tema
                  </span>
                  <ThemeToggle />
                </div>
              </div>

              <Link
                href="/contact"
                className="block mt-4 mx-1 px-6 py-3.5 text-base font-medium text-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/40 active:scale-95"
                onClick={closeMobileMenu}
              >
                Kontak
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
