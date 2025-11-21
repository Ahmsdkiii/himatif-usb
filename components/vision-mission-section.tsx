'use client'

import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

export default function VisionMissionSection() {
  const missions = [
    'Create inclusive tech events dan programs untuk semua mahasiswa',
    'Develop student leaders melalui training dan mentorship',
    'Advocate untuk student interests dan well-being',
    'Foster sense of community dan belonging di kalangan developer',
    'Support academic dan personal development di bidang teknologi',
  ]

  return (
    <section className="relative py-24 bg-black/40 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
              <Eye className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Building Tomorrow's Tech Leaders</h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Kami membayangkan vibrant campus community di mana setiap mahasiswa memiliki kesempatan untuk grow, lead, dan make meaningful impact. Kami percaya pada power of collaboration dan inclusivity, menciptakan spaces di mana diverse voices dihargai dan didengar.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Visi kami melampaui campus walls—kami bertujuan memupuk sense of responsibility dan commitment to community service, menginspirasi members kami menjadi engaged citizens dan changemakers di society.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Unite, Inspire & Empower</h3>
            <p className="text-gray-300 leading-relaxed">
              Misi kami adalah menyatukan student body melalui meaningful programs, events, dan initiatives yang foster personal growth, academic excellence, dan social responsibility di bidang teknologi.
            </p>
            <div className="space-y-3 pt-2">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 items-start group"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 shrink-0 mt-0.5 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                    <span className="text-green-400 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 leading-relaxed">{mission}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}