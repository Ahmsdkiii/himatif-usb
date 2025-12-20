'use client'

import { motion } from 'framer-motion'
import { Briefcase, Target, Megaphone, Users, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react'

export default function DivisionDetailCnB() {
  const creativePrograms = [
    {
      title: 'Konten Media Sosial',
      description: 'Perencanaan, produksi, dan publikasi konten media sosial HIMATIF secara konsisten dan profesional.',
      icon: Megaphone
    },
    {
      title: 'Branding HIMATIF',
      description: 'Memperkuat identitas visual HIMATIF melalui konsistensi desain dan tone warna.',
      icon: Target
    },
    {
      title: 'Birthday Shout-Out',
      description: 'Program apresiasi berupa ucapan ulang tahun kepada anggota HIMATIF melalui Instagram Story.',
      icon: Award
    },
    {
      title: 'QnA & Interactive Quiz',
      description: 'Program interaktif mingguan melalui media sosial untuk meningkatkan engagement.',
      icon: Users
    },
    {
      title: 'Studio Day',
      description: 'Dokumentasi foto studio seluruh pengurus HIMATIF sebagai arsip visual resmi.',
      icon: Calendar
    },
    {
      title: 'Insight HIMATIF',
      description: 'Proyek dokumenter akhir periode yang merekam perjalanan dan capaian HIMATIF.',
      icon: BookOpen
    }
  ]

  const businessPrograms = [
    {
      title: 'Merchandise Project',
      description: 'Produksi dan penjualan merchandise resmi HIMATIF seperti kaos, totebag, stiker, dan pin.',
      icon: Briefcase
    },
    {
      title: 'Creativepreneur Service',
      description: 'Layanan jasa kreatif seperti desain grafis, editing video, dan pembuatan website.',
      icon: Target
    },
    {
      title: 'CnB Food Project',
      description: 'Program usaha makanan dan minuman berbasis sistem pre-order.',
      icon: Award
    }
  ]

  return (
    <div className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/10 rounded-2xl border border-purple-500/20 mb-4">
            <Briefcase className="text-purple-400" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Creative & Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bidang yang bergerak dalam pengelolaan multimedia, publikasi informasi, serta pengembangan kewirausahaan di lingkungan HIMATIF
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-purple-400" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Tujuan Creative & Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Mengelola dan mengoordinasikan seluruh kegiatan publikasi dan dokumentasi HIMATIF',
              'Mengembangkan kreativitas dan jiwa kewirausahaan mahasiswa',
              'Meningkatkan sumber pendanaan mandiri HIMATIF',
              'Membangun citra positif dan profesional HIMATIF'
            ].map((goal, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Sub-Bagian Creative</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creativePrograms.map((program, idx) => {
                const Icon = program.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-card/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Sub-Bagian Business</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {businessPrograms.map((program, idx) => {
                const Icon = program.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-card/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-card/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Parameter Keberhasilan</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Terpenuhinya kebutuhan konten dan media publikasi HIMATIF',
              'Terlaksananya program usaha yang berkontribusi terhadap ekonomi organisasi',
              'Terciptanya karya kreatif bernilai jual dan meningkatkan citra HIMATIF'
            ].map((param, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">{param}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
