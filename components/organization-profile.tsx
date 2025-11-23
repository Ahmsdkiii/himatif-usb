'use client'

import { motion } from 'framer-motion'

export default function OrganizationProfile() {
  const stats = [
    { value: '1000+', label: 'Active Members' },
    { value: '50+', label: 'Events Annually' },
    { value: '10+', label: 'Tech Divisions' },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl aspect-square flex items-center justify-center overflow-hidden group hover:border-primary/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-center z-10">
              <div className="text-8xl font-bold text-primary/20 mb-4">HIMATIF</div>
              <p className="text-muted-foreground text-lg">Organization Logo</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HIMATIF USB didirikan dengan misi sederhana namun powerful: menyatukan mahasiswa Teknik Informatika dan menciptakan komunitas developer yang thriving. Sejak awal, kami telah berkembang menjadi salah satu organisasi mahasiswa paling aktif dan berpengaruh, dengan membership yang diverse dari berbagai background dan interest.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Selama bertahun-tahun, kami telah mengorganisir ratusan event, mendukung countless student initiatives, dan mengembangkan strong culture of leadership dan collaboration. Organisasi kami menjadi jembatan antara mahasiswa dan fakultas, memastikan bahwa suara mahasiswa didengar dan dihargai.
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <h3 className="font-semibold text-foreground text-lg mb-6">Key Statistics</h3>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-primary/5 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}