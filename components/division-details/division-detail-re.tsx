'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, BookOpen, Users, CheckCircle2, Megaphone, Award } from 'lucide-react'

export default function DivisionDetailRE() {
  const programs = [
    {
      title: 'Web Development',
      description: 'Pengembangan dan pemeliharaan website resmi HIMATIF sebagai pusat informasi digital.',
      icon: BookOpen
    },
    {
      title: 'Industrial Visit',
      description: 'Kunjungan ke perusahaan IT untuk mengenalkan dunia industri secara langsung.',
      icon: Target
    },
    {
      title: 'Infotalks',
      description: 'Seminar edukatif dan inspiratif dengan narasumber profesional di bidang teknologi.',
      icon: Users
    },
    {
      title: 'Study With Us',
      description: 'Forum belajar bersama untuk meningkatkan pemahaman akademik mahasiswa.',
      icon: BookOpen
    },
    {
      title: 'Lab Maintenance',
      description: 'Agenda rutin perawatan laboratorium komputer.',
      icon: Target
    },
    {
      title: 'Informatif',
      description: 'Penyebaran informasi magang, beasiswa, lomba, dan seminar melalui media resmi HIMATIF.',
      icon: Megaphone
    },
    {
      title: 'Collaborative Research',
      description: 'Kolaborasi riset dengan bidang lain untuk menghasilkan konten edukatif berbasis data.',
      icon: Users
    },
    {
      title: 'INFOLAB',
      description: 'Pelatihan soft skill dan personal branding untuk kesiapan karier mahasiswa.',
      icon: Award
    }
  ]

  return (
    <div className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 mb-4">
            <Lightbulb className="text-yellow-400" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Research & Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bidang yang bertujuan meningkatkan intelektualitas dan profesionalitas mahasiswa Teknik Informatika melalui kegiatan riset, edukasi, dan pengembangan ilmu pengetahuan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-yellow-400" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Tujuan Research & Education</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Memfasilitasi pengembangan intelektual mahasiswa',
              'Menumbuhkan budaya riset dan akademik',
              'Meningkatkan kompetensi dan kesiapan karier mahasiswa'
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="text-yellow-400 shrink-0 mt-1" size={20} />
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Program Kerja Research & Education</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-card/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-xl border border-yellow-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-yellow-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
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