'use client'

import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, Megaphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedArticles } from '@/lib/data/news-data'

interface AnnouncementsSectionProps {
  onArticleClick?: (articleId: number) => void
}

export default function AnnouncementsSection({ onArticleClick }: AnnouncementsSectionProps) {
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

  const featuredArticles = getFeaturedArticles()

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { color: string; bgColor: string; borderColor: string; textColor: string }> = {
      Program: {
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20',
        textColor: 'text-blue-400'
      },
      Kegiatan: {
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20',
        textColor: 'text-green-400'
      },
      Workshop: {
        color: 'from-purple-500 to-fuchsia-500',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
        textColor: 'text-purple-400'
      },
      Networking: {
        color: 'from-pink-500 to-rose-500',
        bgColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/20',
        textColor: 'text-pink-400'
      }
    }
    return colors[category] || {
      color: 'from-primary to-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      textColor: 'text-primary'
    }
  }

  const handleArticleClick = (articleId: number) => {
    if (onArticleClick) {
      onArticleClick(articleId)
    }
  }

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
            <span>Kegiatan Terbaru</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Program & Kegiatan Unggulan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Lihat dokumentasi kegiatan terbaru yang telah terlaksana di HIMATIF USB YPKP
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredArticles.map((article) => {
            const colors = getCategoryColor(article.category)
            return (
              <motion.div
                key={article.id}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handleArticleClick(article.id)}
                className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >          
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colors.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 flex flex-col h-80">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span
                      className={`${colors.bgColor} ${colors.textColor} text-xs font-semibold px-3 py-1.5 rounded-lg border ${colors.borderColor}`}
                    >
                      {article.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs whitespace-nowrap">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-14">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/news">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 hover:border-primary/40 text-primary font-medium rounded-xl transition-all duration-300 hover:bg-primary/20">
              Lihat Semua Berita & Kegiatan
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}