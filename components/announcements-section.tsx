'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Megaphone } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementsSection() {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const announcements = [
    {
      id: 1,
      title: 'Hackathon 2025 - Code for Impact',
      description: 'Join our largest hackathon with 48-hour coding challenge, amazing prizes, dan kesempatan networking dengan tech leaders. Buktikan skill mu!',
      date: 'April 12-14, 2025',
      category: 'Hackathon',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      textColor: 'text-pink-400',
    },
    {
      id: 2,
      title: 'Web Development Workshop Series',
      description: 'Series workshop komprehensif tentang Modern Stack Development dengan mentor dari industri. Mulai dari basics hingga advanced level.',
      date: 'March 25, 2025',
      category: 'Workshop',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400',
    },
    {
      id: 3,
      title: 'Cabinet Recruitment 2025',
      description: 'Jadilah bagian dari leadership team HIMATIF! Kami mencari talented individuals dengan passion untuk mengembangkan komunitas tech.',
      date: 'March 10, 2025',
      category: 'Leadership',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400',
    },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm mb-6"
          >
            <Megaphone className="w-4 h-4" />
            <span>Latest Updates</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Announcements & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Stay updated dengan event, workshop, dan opportunities terbaru dari HIMATIF USB YPKP
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${announcement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className={`${announcement.bgColor} ${announcement.textColor} text-xs font-semibold px-3 py-1.5 rounded-lg border ${announcement.borderColor}`}>
                    {announcement.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{announcement.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {announcement.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {announcement.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/news">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 hover:border-primary/40 text-primary font-medium rounded-xl transition-all duration-300 hover:bg-primary/20">
              View All Events & News
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}