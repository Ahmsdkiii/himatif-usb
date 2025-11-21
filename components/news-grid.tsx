'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
}

interface Props {
  onSelectArticle: (id: number) => void
}

export default function NewsGrid({ onSelectArticle }: Props) {
  const articles: Article[] = [
    {
      id: 1,
      title: 'HIMATIF USB Wins Campus Excellence Award',
      excerpt: 'Organisasi kami telah diakui dengan prestigious Campus Excellence Award untuk outstanding leadership dan community impact.',
      date: 'March 18, 2025',
      author: 'Ahmad Fauzi',
      category: 'Achievement',
      readTime: '4 min read',
    },
    {
      id: 2,
      title: 'Tech Festival Breaks Attendance Records',
      excerpt: 'Tech Festival tahun ini attracted over 2,000 students, making it the largest event dalam sejarah organisasi kami.',
      date: 'March 12, 2025',
      author: 'Siti Nurhaliza',
      category: 'Event',
      readTime: '3 min read',
    },
    {
      id: 3,
      title: 'New Research & Education Initiative Launches',
      excerpt: 'Excited untuk announce launch comprehensive R&E Initiative, designed untuk advance technical excellence members.',
      date: 'March 5, 2025',
      author: 'Budi Santoso',
      category: 'Initiative',
      readTime: '5 min read',
    },
    {
      id: 4,
      title: 'Hackathon Project Reaches Industry Recognition',
      excerpt: 'Project hackathon kami reached milestone dengan recognition dari tech companies dan potential for implementation.',
      date: 'February 28, 2025',
      author: 'Dewi Lestari',
      category: 'Achievement',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Leadership Summit Offers Free Professional Development',
      excerpt: 'Join us untuk annual Leadership Summit featuring industry experts, networking opportunities, dan career development workshops.',
      date: 'February 20, 2025',
      author: 'Rizki Pratama',
      category: 'Learning',
      readTime: '3 min read',
    },
    {
      id: 6,
      title: 'HIMATIF Announces New Scholarship Fund',
      excerpt: 'Proud untuk announce creation scholarship fund untuk support deserving students pursuing tech excellence.',
      date: 'February 10, 2025',
      author: 'Anisa Rahma',
      category: 'Scholarship',
      readTime: '3 min read',
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Achievement: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Event: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
      Initiative: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Learning: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
      Scholarship: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20' }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {articles.map((article) => {
            const colors = getCategoryColor(article.category)
            return (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => onSelectArticle(article.id)}
                className="group relative bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3 grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-green-500/20">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div className="text-green-400 group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}