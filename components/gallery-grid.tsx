'use client'

import { motion } from 'framer-motion'
import { Play, Calendar } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  event: string
  date: string
  type: 'photo' | 'video'
}

interface Props {
  onSelectImage: (id: number) => void
}

export default function GalleryGrid({ onSelectImage }: Props) {
  const galleryItems: GalleryItem[] = [
    { id: 0, title: 'Spring Festival Crowd', event: 'Spring Festival 2025', date: 'March 15, 2025', type: 'photo' },
    { id: 1, title: 'Live Performance', event: 'Spring Festival 2025', date: 'March 15, 2025', type: 'photo' },
    { id: 2, title: 'Welcome Week Booth', event: 'Welcome Week 2024', date: 'August 28, 2024', type: 'photo' },
    { id: 3, title: 'Community Service Day', event: 'Community Service', date: 'February 10, 2025', type: 'photo' },
    { id: 4, title: 'Leadership Summit', event: 'Leadership Summit 2025', date: 'March 1, 2025', type: 'photo' },
    { id: 5, title: 'Cabinet Meeting', event: 'General Meeting', date: 'January 15, 2025', type: 'photo' },
    { id: 6, title: 'Diversity Event', event: 'Diversity & Inclusion', date: 'February 20, 2025', type: 'photo' },
    { id: 7, title: 'Student Mixer', event: 'Monthly Mixer', date: 'March 5, 2025', type: 'photo' },
    { id: 8, title: 'Food Trucks', event: 'Spring Festival 2025', date: 'March 15, 2025', type: 'photo' },
    { id: 9, title: 'Network Night', event: 'Professional Development', date: 'February 28, 2025', type: 'photo' },
    { id: 10, title: 'Campus Cleanup', event: 'Community Service', date: 'March 8, 2025', type: 'video' },
    { id: 11, title: 'Event Highlights', event: 'Spring Festival 2025', date: 'March 15, 2025', type: 'video' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onClick={() => onSelectImage(item.id)}
              className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden aspect-square cursor-pointer hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <div className="text-8xl font-bold text-primary/20">
                  {String.fromCharCode(65 + (item.id % 26))}
                </div>
              </div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors z-10">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/50">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                <h3 className="text-foreground font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-primary text-sm mb-3 font-medium">{item.event}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}