'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-green-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto text-center z-10 w-full"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs sm:text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Welcome to HIMATIF USB YPKP</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Innovate,
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-300 to-green-500">
              Code & Collaborate
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Komunitas Developer & Tech Enthusiast yang membangun inovasi, 
            berbagi pengetahuan, dan menciptakan impact di industri teknologi.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6"
          >
            <Link href="/about" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                  Learn About Us
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-green-500/50 hover:border-green-400 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-green-500/10 hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">1000+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Active Developers</div>
            </div>
            <div className="w-px bg-green-500/20"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">50+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Tech Programs</div>
            </div>
            <div className="w-px bg-green-500/20"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">10+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Tech Divisions</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}