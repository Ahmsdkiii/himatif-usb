'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, X, Clock, User, ArrowLeft, GraduationCap, Megaphone, Lightbulb, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { newsArticles, getArticlesByDivision, getArticleById, type Article } from '@/lib/data/news-data'

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'HRDO' | 'PR' | 'RE' | 'CnB'>('all')

  const filters = [
    { id: 'all' as const, label: 'Semua Berita', icon: Calendar },
    { id: 'HRDO' as const, label: 'HRDO', icon: GraduationCap },
    { id: 'RE' as const, label: 'Research & Education', icon: Lightbulb },
    { id: 'PR' as const, label: 'Public Relations', icon: Megaphone },
    { id: 'CnB' as const, label: 'Creative & Business', icon: Briefcase },
  ]

  const filteredArticles = getArticlesByDivision(activeFilter)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Program: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Kegiatan: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
      Workshop: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
      Networking: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Maintenance: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
      Akademik: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const getDivisionColor = (division: string) => {
    const colors: Record<string, string> = {
      HRDO: 'text-blue-400',
      PR: 'text-pink-400',
      RE: 'text-yellow-400',
      CnB: 'text-purple-400',
    }
    return colors[division] || 'text-primary'
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Berita & Kegiatan Terbaru
          </h1>
          <p className="text-xl text-muted-foreground">
            Dokumentasi program dan kegiatan yang telah terlaksana di HIMATIF USB YPKP
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{filter.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article, index) => {
              const colors = getCategoryColor(article.category)
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority={index < 3}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm`}>
                        {article.category}
                      </span>
                      <span className={`text-xs font-semibold ${getDivisionColor(article.division)}`}>
                        {article.division}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-6 flex flex-col grow">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 min-h-14">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 grow">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-primary/20 mt-auto">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-background border border-primary/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-6 flex items-center justify-between z-10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span className="text-sm font-medium">Kembali ke Berita</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const colors = getCategoryColor(selectedArticle.category)
                    return (
                      <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {selectedArticle.category}
                      </span>
                    )
                  })()}
                  <span className={`text-sm font-semibold ${getDivisionColor(selectedArticle.division)}`}>
                    {selectedArticle.division}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-primary/20">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {selectedArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {selectedArticle.readTime}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedArticle.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}