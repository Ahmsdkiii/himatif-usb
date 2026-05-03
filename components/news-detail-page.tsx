'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type Article } from '@/lib/data/news-data'

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Program:     { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/30' },
  Kegiatan:    { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/30' },
  Workshop:    { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  Networking:  { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  Maintenance: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  Akademik:    { bg: 'bg-pink-500/10',   text: 'text-pink-400',   border: 'border-pink-500/30' },
}

const DIVISION_STYLES: Record<string, { text: string; bar: string }> = {
  HRDO: { text: 'text-blue-400',   bar: 'bg-blue-400' },
  PR:   { text: 'text-pink-400',   bar: 'bg-pink-400' },
  RE:   { text: 'text-yellow-400', bar: 'bg-yellow-400' },
  CnB:  { text: 'text-purple-400', bar: 'bg-purple-400' },
}

interface Props {
  article: Article
}

export default function NewsDetailPage({ article }: Props) {
  const cat = CATEGORY_STYLES[article.category] ?? { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  const div = DIVISION_STYLES[article.division] ?? { text: 'text-primary', bar: 'bg-primary' }

  return (
    <section className="relative bg-background min-h-screen overflow-hidden">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4"
        >
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/news" className="hover:text-primary transition-colors">Berita</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-muted-foreground/50 truncate max-w-[200px]">{article.title}</span>
        </motion.nav>

        {/* Back button — above image */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-6"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Kembali ke Berita</span>
          </Link>
        </motion.div>

        {/* Image — wider container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-primary/10"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Badges overlaid on image bottom */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.bg} ${cat.text} border ${cat.border} backdrop-blur-sm`}>
              {article.category}
            </span>
            <span className={`flex items-center gap-1.5 text-xs font-bold ${div.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${div.bar}`} />
              {article.division}
            </span>
          </div>
        </motion.div>

        {/* Title + meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-primary/15">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-primary" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{article.readTime} read</span>
            </div>
          </div>
        </motion.div>

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-5 max-w-4xl"
        >
          {article.content.length > 0 && (
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium border-l-[3px] border-primary/60 pl-5">
              {article.content[0]}
            </p>
          )}
          {article.content.slice(1).map((paragraph, i) => (
            <p key={i} className="text-base text-muted-foreground leading-[1.9] text-justify">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}