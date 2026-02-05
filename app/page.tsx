'use client'

import { useState } from 'react'
import HeroSection from '@/components/hero-section'
import AnnouncementsSection from '@/components/announcements-section'
import HighlightsSection from '@/components/higlight-section'
import NewsDetailModal from '@/components/news-detail-modal'

export default function Home() {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null)

  return (
    <main>
      <HeroSection />
      <AnnouncementsSection onArticleClick={setSelectedArticleId} />
      <HighlightsSection />
      
      {selectedArticleId !== null && (
        <NewsDetailModal 
          articleId={selectedArticleId} 
          onClose={() => setSelectedArticleId(null)} 
        />
      )}
    </main>
  )
}