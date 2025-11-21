'use client'

import { useState } from 'react'
import GalleryHero from '@/components/gallery-hero'
import GalleryGrid from '@/components/gallery-grid'
import Lightbox from '@/components/lightbox'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <main>
      <GalleryHero />
      <GalleryGrid onSelectImage={setSelectedImage} />
      {selectedImage !== null && (
        <Lightbox imageId={selectedImage} onClose={() => setSelectedImage(null)} onNext={() => setSelectedImage((prev) => (prev! + 1) % 12)} onPrev={() => setSelectedImage((prev) => (prev! - 1 + 12) % 12)} />
      )}
    </main>
  )
}
