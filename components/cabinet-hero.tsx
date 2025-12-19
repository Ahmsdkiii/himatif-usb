'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function CabinetHero() {
  return (
    <section className="relative w-full bg-background flex items-center justify-center px-4 overflow-hidden min-h-[120vh] sm:min-h-[90vh] lg:min-h-[80vh]">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-5 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center z-10 py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm mb-4"
        >
          <Users className="w-4 h-4" />
          <span>Leadership Team</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
        >
          Leadership <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">Cabinet</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Meet the dedicated individuals leading HIMATIF USB dan driving our mission forward dalam mengembangkan komunitas developer.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
