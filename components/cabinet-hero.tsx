'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function CabinetHero() {
  return (
    <section className="relative min-h-[60vh] bg-black flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-green-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm mb-6"
        >
          <Users className="w-4 h-4" />
          <span>Leadership Team</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Leadership <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-500">Cabinet</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Meet the dedicated individuals leading HIMATIF USB dan driving our mission forward dalam mengembangkan komunitas developer.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}