'use client'

import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function ProductsHero() {
  return (
    <section className="relative min-h-[60vh] bg-background flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm mb-6"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Merchandise Resmi</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
        >
          Toko{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
            HIMATIF
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Tunjukkan kebanggaanmu dengan merchandise resmi kami. Setiap pembelian
          turut mendukung program, kegiatan, dan pengembangan mahasiswa.
        </motion.p>
      </motion.div>
    </section>
  )
}
