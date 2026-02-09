'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Flag } from 'lucide-react'

export default function VisionMissionSection() {
  const missions = [
    'Menampung segala bentuk aspirasi dari mahasiswa Teknik Informatika Sangga Buana YPKP Bandung.',
    'Menumbuh kembangkan rasa solidaritas dan membentuk karakter anggota HIMATIF yang professional.',
    'Berperan aktif dalam kegiatan organisasi eksternal di bidang Teknologi Informasi.',
  ]

  return (
    <section className="relative py-24 bg-background/40 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* VISION - Berdasarkan Pasal 8 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
              <Lightbulb className="w-4 h-4" />
              <span>Visi</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Mewujudkan Wadah Aspirasi dan Inovasi Teknologi
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Menjadi wadah aspirasi mahasiswa Teknik Informatika Sangga Buana YPKP Bandung 
                dan menciptakan sumber daya manusia yang berkompetensi dalam bidang teknologi informasi.
              </p>
            </div>
          </motion.div>

          {/* MISSION - Berdasarkan Pasal 9 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
              <Flag className="w-4 h-4" />
              <span>Misi</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Membangun Karakter, Solidaritas, dan Aksi
            </h3>

            <div className="space-y-4 pt-2">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>

                  <span className="text-muted-foreground text-lg leading-relaxed">
                    {mission}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}