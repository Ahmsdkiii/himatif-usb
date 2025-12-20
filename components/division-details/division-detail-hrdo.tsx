'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target, BookOpen, Users, CheckCircle2, Calendar, Award } from 'lucide-react'

export default function DivisionDetailHRDO() {
  const programs = [
    {
      title: 'Prospektif',
      subtitle: 'Program Orientasi Teknik Informatika',
      description: 'Rangkaian kegiatan orientasi mahasiswa baru Teknik Informatika yang bertujuan mengenalkan lingkungan kampus, sistem perkuliahan, serta organisasi HIMATIF.',
      icon: Users
    },
    {
      title: 'Upgrading',
      subtitle: 'MABIM & Magang',
      description: 'Kegiatan pembekalan calon pengurus melalui Masa Bimbingan (MABIM) dan magang bidang untuk menyiapkan calon pengurus.',
      icon: Award
    },
    {
      title: 'Materi Keorganisasian',
      description: 'Forum atau kuliah umum yang membahas keorganisasian, produk hukum, serta simulasi persidangan.',
      icon: BookOpen
    },
    {
      title: 'Rapat & Musyawarah',
      description: 'Forum resmi organisasi untuk menetapkan program kerja, evaluasi berkala, dan menentukan arah kebijakan organisasi.',
      icon: Calendar
    },
    {
      title: 'Apresiasi of The Month',
      description: 'Program apresiasi bulanan bagi pengurus dengan kinerja terbaik sebagai bentuk motivasi dan penghargaan.',
      icon: Award
    },
    {
      title: 'Harmonisasi',
      description: 'Kegiatan kebersamaan untuk mempererat rasa kekeluargaan antar pengurus melalui diskusi santai dan kegiatan luar kampus.',
      icon: Users
    }
  ]

  const subDivisions = [
    {
      name: 'Development Management',
      description: 'Berfokus pada proses kaderisasi dan pengembangan anggota',
      responsibilities: [
        'Merancang pola pengkaderan selama satu periode kepengurusan',
        'Memberikan pelatihan dan pembekalan keorganisasian',
        'Membimbing pengurus muda memahami nilai dan budaya organisasi',
        'Menyiapkan regenerasi kepengurusan'
      ]
    },
    {
      name: 'Management (Controlling)',
      description: 'Berfokus pada pengawasan dan pengendalian kinerja organisasi',
      responsibilities: [
        'Mengawasi kinerja seluruh bidang',
        'Memberikan penilaian berkala terhadap pengurus',
        'Melakukan pemanggilan dan pengarahan jika terjadi kendala',
        'Menindaklanjuti permasalahan internal sesuai produk hukum'
      ]
    }
  ]

  return (
    <div className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-2xl border border-blue-500/20 mb-4">
            <GraduationCap className="text-blue-400" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Human Resource Development & Organization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bidang yang berfokus pada pengembangan sumber daya manusia serta penguatan struktur organisasi HIMATIF USB YPKP Bandung
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Tujuan HRDO</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Menciptakan kondisi kepengurusan yang kondusif dan terorganisir',
              'Membentuk kader-kader pengurus untuk regenerasi kepemimpinan',
              'Mengembangkan kualitas sumber daya manusia HIMATIF',
              'Menjaga stabilitas dan keberlangsungan roda organisasi'
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Sub Bidang HRDO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subDivisions.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-card/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{sub.name}</h3>
                <p className="text-muted-foreground mb-4">{sub.description}</p>
                <div className="space-y-2">
                  {sub.responsibilities.map((resp, ridx) => (
                    <div key={ridx} className="flex gap-3 items-start text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0 mt-0.5">
                        <span className="text-blue-400 text-xs">→</span>
                      </div>
                      <span className="text-muted-foreground">{resp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Program Kerja HRDO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-card/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-blue-400" size={24} />
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