'use client'

import { motion } from 'framer-motion'
import { Megaphone, Target, Users, CheckCircle2, Calendar, Award } from 'lucide-react'

export default function DivisionDetailPR() {
  const programs = [
    {
      title: 'TICO',
      subtitle: 'Teknik Informatika Competition',
      description: 'Kegiatan kompetisi e-sport dan olahraga sebagai wadah pengembangan minat dan bakat mahasiswa Teknik Informatika.',
      icon: Award
    },
    {
      title: 'Benchmarking',
      description: 'Kegiatan studi banding antar himpunan untuk berbagi pengalaman, sistem organisasi, dan program kerja.',
      icon: Users
    },
    {
      title: 'Pengabdian Masyarakat',
      subtitle: 'P2M',
      description: 'Kegiatan edukatif berupa literasi digital, keamanan data, dan pemanfaatan teknologi bagi masyarakat dan sekolah.',
      icon: Target
    },
    {
      title: 'ASTI & Harmonic',
      description: 'Forum aspirasi, diskusi, serta bonding mahasiswa Teknik Informatika untuk memperkuat solidaritas dan komunikasi.',
      icon: Users
    },
    {
      title: 'Communication Training',
      description: 'Pelatihan komunikasi dan public speaking untuk meningkatkan kepercayaan diri mahasiswa.',
      icon: Megaphone
    },
    {
      title: 'Dies Natalis',
      description: 'Kegiatan eksternal untuk memperingati hari jadi HIMATIF dan menjalin silaturahmi antar himpunan.',
      icon: Calendar
    }
  ]

  const responsibilities = {
    internal: [
      'Menampung dan menyalurkan aspirasi mahasiswa',
      'Menjalin hubungan dengan civitas akademika',
      'Menyediakan wadah minat dan bakat mahasiswa'
    ],
    external: [
      'Menjalin hubungan dengan himpunan lain',
      'Kerja sama dengan PERMIKOMNAS',
      'Membangun relasi dengan masyarakat luar'
    ]
  }

  return (
    <div className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-500/10 rounded-2xl border border-pink-500/20 mb-4">
            <Megaphone className="text-pink-400" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Public Relations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bidang yang bertanggung jawab mengelola komunikasi internal dan eksternal HIMATIF USB YPKP Bandung
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-pink-400" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Tujuan Public Relations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Mengembangkan potensi komunikasi pengurus HIMATIF',
              'Menjalin silaturahmi internal dan eksternal',
              'Membangun citra positif HIMATIF'
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="text-pink-400 shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Tugas Internal</h3>
            <div className="space-y-3">
              {responsibilities.internal.map((task, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/10 border border-pink-500/20 shrink-0 mt-0.5">
                    <span className="text-pink-400 text-xs">→</span>
                  </div>
                  <span className="text-muted-foreground">{task}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Tugas Eksternal</h3>
            <div className="space-y-3">
              {responsibilities.external.map((task, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/10 border border-pink-500/20 shrink-0 mt-0.5">
                    <span className="text-pink-400 text-xs">→</span>
                  </div>
                  <span className="text-muted-foreground">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Program Kerja Public Relations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-card/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/10 rounded-xl border border-pink-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-pink-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{program.title}</h3>
                  {program.subtitle && (
                    <p className="text-sm text-primary font-semibold mb-2">{program.subtitle}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}