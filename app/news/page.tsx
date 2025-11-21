'use client'

import { useState } from 'react'
import NewsHero from '@/components/news-hero'
import NewsGrid from '@/components/news-grid'
import NewsDetail from '@/components/news-detail'

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  return (
    <main>
      <NewsHero />
      {selectedArticle === null ? (
        <NewsGrid onSelectArticle={setSelectedArticle} />
      ) : (
        <NewsDetail articleId={selectedArticle} onBack={() => setSelectedArticle(null)} />
      )}
    </main>
  )
}
