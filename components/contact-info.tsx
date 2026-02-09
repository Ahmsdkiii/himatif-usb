'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      content: 'himatifusbypkp@gmail.com',
      link: 'mailto:himatifusbypkp@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 812-2339-7272',
      link: 'tel:+6281223397272',
    },
    {
      icon: MapPin,
      title: 'Lokasi Sekretariat',
      content: 'Jl. Khp Hasan Mustopa No.68, Cikutra, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40124',
      link: null,
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat\n09:00 - 17:00 WIB',
      link: null,
    },
  ]

  const socialMedia = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/himatifypkp_/',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@himatifusbypkp?_r=1&_t=ZS-93ldxDZ6kRm',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/@himpunanmahasiswateknikinf-usb?si=DUlHN7ArllM3bgM9',
    },
  ]
    
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-foreground mb-2 transition-colors duration-300">
          Informasi Kontak
        </h2>
        <p className="text-muted-foreground mb-8 transition-colors duration-300">
          Hubungi kami melalui berbagai saluran yang tersedia.
        </p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-background/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300">
                        {detail.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line transition-colors duration-300">
                        {detail.content}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-background/20 transition-colors duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-colors duration-300 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300">
                        {detail.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line transition-colors duration-300">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center transition-colors duration-300"
      >
        <h3 className="text-lg font-bold text-foreground mb-3 transition-colors duration-300">
          Ikuti Kami
        </h3>
        <p className="text-muted-foreground mb-6 transition-colors duration-300">
          Tetap terhubung lewat media sosial kami untuk mendapatkan informasi terbaru.
        </p>

        <div className="flex justify-center gap-4">
          {socialMedia.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center"
                aria-label={item.name}
              >
                <Icon size={18} />
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
