'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { getArticleById } from '@/lib/data/news-data'

interface NewsDetailModalProps {
  articleId: number
  onClose: () => void
}

export default function NewsDetailModal({ articleId, onClose }: NewsDetailModalProps) {
  const article = getArticleById(articleId)

  if (!article) return null

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

  const colors = getCategoryColor(article.category)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
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
              onClick={onClose}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Kembali</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>

          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                {article.category}
              </span>
              <span className={`text-sm font-semibold ${getDivisionColor(article.division)}`}>
                {article.division}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <User size={16} />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime}
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}