'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  imageId: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ imageId, onClose, onNext, onPrev }: Props) {
  const galleryItems = [
    { title: 'Spring Festival Crowd', event: 'Spring Festival 2025' },
    { title: 'Live Performance', event: 'Spring Festival 2025' },
    { title: 'Welcome Week Booth', event: 'Welcome Week 2024' },
    { title: 'Community Service Day', event: 'Community Service' },
    { title: 'Leadership Summit', event: 'Leadership Summit 2025' },
    { title: 'Cabinet Meeting', event: 'General Meeting' },
    { title: 'Diversity Event', event: 'Diversity & Inclusion' },
    { title: 'Student Mixer', event: 'Monthly Mixer' },
    { title: 'Food Trucks', event: 'Spring Festival 2025' },
    { title: 'Network Night', event: 'Professional Development' },
    { title: 'Campus Cleanup', event: 'Community Service' },
    { title: 'Event Highlights', event: 'Spring Festival 2025' },
  ]

  const item = galleryItems[imageId]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-white/10 z-50"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 shadow-2xl">
            <div className="bg-linear-to-br from-green-500/20 to-green-400/10 aspect-video rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="text-9xl font-bold text-green-400/30">
                {String.fromCharCode(65 + (imageId % 26))}
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-green-400 font-medium">{item.event}</p>
            </div>

            <div className="flex items-center justify-between px-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onPrev}
                className="text-white hover:text-green-400 transition-colors p-3 hover:bg-white/10 rounded-xl"
                aria-label="Previous"
              >
                <ChevronLeft size={32} />
              </motion.button>

              <div className="text-white text-center">
                <p className="text-sm text-gray-400">
                  {imageId + 1} / {galleryItems.length}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onNext}
                className="text-white hover:text-green-400 transition-colors p-3 hover:bg-white/10 rounded-xl"
                aria-label="Next"
              >
                <ChevronRight size={32} />
              </motion.button>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-400 text-xs">
            <p>Press ESC atau click X untuk close. Use arrow keys untuk navigate.</p>
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}