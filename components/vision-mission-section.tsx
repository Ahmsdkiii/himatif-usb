'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Flag } from 'lucide-react'

export default function VisionMissionSection() {
  const missions = [
    'Menyelenggarakan kegiatan dan program teknologi yang inklusif untuk seluruh mahasiswa',
    'Membentuk calon pemimpin mahasiswa melalui pelatihan dan pendampingan',
    'Menjadi wadah aspirasi serta memperjuangkan kepentingan dan kesejahteraan mahasiswa',
    'Membangun rasa kebersamaan dan solidaritas di lingkungan mahasiswa Teknik Informatika',
    'Mendukung pengembangan akademik dan penguatan keterampilan di bidang teknologi',
  ]

  return (
    <section className="relative py-24 bg-background/40 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* VISION */}
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

            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Membangun Generasi Pemimpin Teknologi Masa Depan
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-justify">
                Kami membayangkan lingkungan kampus yang aktif dan suportif,
                di mana setiap mahasiswa memiliki kesempatan untuk berkembang,
                berkontribusi, dan memberi dampak nyata. Kami percaya pada
                kekuatan kolaborasi dan sikap inklusif, sehingga setiap ide dan
                suara mahasiswa dapat dihargai serta didengar.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                Visi kami tidak hanya terbatas di lingkungan kampus, tetapi juga
                mendorong terciptanya rasa tanggung jawab dan kepedulian sosial.
                Kami ingin menginspirasi anggota HIMATIF untuk menjadi pribadi
                yang aktif, bermanfaat, dan mampu menjadi agen perubahan di
                masyarakat.
              </p>
            </div>
          </motion.div>

          {/* MISSION */}
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
              Menyatukan, Menginspirasi, dan Memberdayakan
            </h3>

            <p className="text-muted-foreground leading-relaxed text-justify">
              Misi kami adalah menyatukan mahasiswa melalui program, kegiatan,
              dan inisiatif yang bermakna, guna mendorong pengembangan diri,
              prestasi akademik, serta tanggung jawab sosial di bidang teknologi.
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
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>

                  <span className="text-muted-foreground leading-relaxed text-justify">
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
