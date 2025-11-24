'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

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
      title: 'Phone',
      content: '+62 22 020 950',
      link: 'tel:+6222022950',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'Jl. Khp Hasan Mustopa No.68, Cikutra, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40124',
      link: null,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday\n9:00 AM - 5:00 PM',
      link: null,
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
      <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
        <p className="text-muted-foreground mb-8">Reach out melalui berbagai channel kami.</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-background/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-all shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{detail.content}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-background/20">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{detail.content}</p>
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
        className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center"
      >
        <h3 className="text-lg font-bold text-foreground mb-3">Follow Us</h3>
        <p className="text-muted-foreground mb-6">Stay connected pada social media kami untuk latest updates.</p>
        <div className="flex justify-center gap-4">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
            <motion.button
              key={platform}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all flex items-center justify-center font-semibold text-xs"
            >
              {platform[0]}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}