'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang HIMATIF' },
    { href: '/cabinet', label: 'Kabinet' },
    { href: '/divisions', label: 'Divisi' },
  ]

  const resources = [
    { href: '/programs', label: 'Program Kerja' },
    { href: '/news', label: 'Berita & Kegiatan' },
    { href: '/gallery', label: 'Galeri Dokumentasi' },
    { href: '/workshops', label: 'Workshop & Pelatihan' },
  ]

  const socialLinks = [
    {
      href: 'https://www.instagram.com/himatifypkp_/',
      icon: FaInstagram,
      label: 'Instagram',
      color: 'hover:text-primary',
    },
    {
      href: 'https://www.tiktok.com/@himatifusbypkp?_r=1&_t=ZS-93ldxDZ6kRm',
      icon: FaTiktok,
      label: 'TikTok',
      color: 'hover:text-primary',
    },
    {
      href: 'https://youtube.com/@himpunanmahasiswateknikinf-usb?si=DUlHN7ArllM3bgM9',
      icon: FaYoutube,
      label: 'YouTube',
      color: 'hover:text-primary',
    },
  ]

  return (
    <footer className="relative bg-background border-t border-primary/20">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block group mb-4 sm:mb-5">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl p-2 shadow-lg shadow-primary/25">
                  <Image
                    src="/assets/img/Himatif-White.png"
                    alt="HIMATIF USB Logo"
                    fill
                    className="object-contain drop-shadow-sm"
                    priority
                  />
                </div>

                <div className="relative">
                  <div className="font-bold text-xl sm:text-2xl text-primary tracking-tight transition-all duration-300 group-hover:text-primary/80">
                    HIMATIF USB
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-sm">
              Himpunan Mahasiswa Teknik Informatika USB YPKP Bandung — wadah pengembangan potensi mahasiswa,
              kolaborasi, serta penyaluran aspirasi dan kontribusi nyata di bidang teknologi informasi.
            </p>

            <div className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-muted-foreground group hover:text-primary transition-colors duration-200">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
              <span>
                Jl. Khp Hasan Mustopa No.68, Cikutra, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40124
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2">
              Tautan Cepat
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2">
              Informasi
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>

            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="font-semibold text-foreground text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2">
              Hubungi Kami
              <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></div>
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:himatifusbypkp@gmail.com"
                className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors duration-200 group"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="break-all">himatifusbypkp@gmail.com</span>
              </a>

              <a
                href="tel:+6222022950"
                className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors duration-200 group"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span>+62 812-2339-7272</span>
              </a>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-3">Ikuti Kami di Media Sosial</p>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`p-2.5 sm:p-3 rounded-lg bg-primary/10 text-muted-foreground hover:bg-primary/20 ${social.color} transition-all duration-200 hover:scale-110 active:scale-95`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
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

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
              &copy; {currentYear} HIMATIF USB YPKP. Seluruh hak cipta dilindungi.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Kebijakan Privasi
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>

              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Syarat & Ketentuan
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>

              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                Kontak
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  )
}
