'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, Clock, GraduationCap, Megaphone, Lightbulb, Briefcase, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getArticlesByDivision } from '@/lib/data/news-data'

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Program:     { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/30' },
  Kegiatan:    { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/30' },
  Workshop:    { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  Networking:  { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  Maintenance: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  Akademik:    { bg: 'bg-pink-500/10',   text: 'text-pink-400',   border: 'border-pink-500/30' },
}

const DIVISION_STYLES: Record<string, { text: string; dot: string }> = {
  HRDO: { text: 'text-blue-400',   dot: 'bg-blue-400' },
  PR:   { text: 'text-pink-400',   dot: 'bg-pink-400' },
  RE:   { text: 'text-yellow-400', dot: 'bg-yellow-400' },
  CnB:  { text: 'text-purple-400', dot: 'bg-purple-400' },
}

type FilterId = 'all' | 'HRDO' | 'PR' | 'RE' | 'CnB'

const filters: { id: FilterId; label: string; icon: React.ElementType }[] = [
  { id: 'all',  label: 'Semua',    icon: LayoutGrid },
  { id: 'HRDO', label: 'HRDO',     icon: GraduationCap },
  { id: 'RE',   label: 'Research', icon: Lightbulb },
  { id: 'PR',   label: 'Public Relations', icon: Megaphone },
  { id: 'CnB',  label: 'Creative & Business', icon: Briefcase },
]

export default function NewsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const articles = getArticlesByDivision(activeFilter)

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter bar */}
        <div className="mb-14 flex flex-wrap gap-2 justify-center">
          {filters.map((f) => {
            const Icon = f.icon
            const active = activeFilter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card/50 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {f.label}
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article, i) => {
              const cat = CATEGORY_STYLES[article.category] ?? {
                bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20',
              }
              const div = DIVISION_STYLES[article.division] ?? { text: 'text-primary', dot: 'bg-primary' }

              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={`/news/${article.slug}`}
                    className="group flex flex-col h-full bg-card/40 backdrop-blur-sm border border-primary/15 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-400"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority={i < 3}
                        quality={85}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md ${cat.bg} ${cat.text} border ${cat.border}`}>
                          {article.category}
                        </span>
                        <span className={`flex items-center gap-1.5 text-[11px] font-bold ${div.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${div.dot}`} />
                          {article.division}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-primary/10 mt-auto">
                        <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-300">
                          Baca <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {articles.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg">Belum ada artikel untuk divisi ini.</p>
          </div>
        )}
      </div>
    </section>
  )
}