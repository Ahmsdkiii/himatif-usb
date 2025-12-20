'use client'

import { motion } from 'framer-motion'
import { Crown, Target, Users, FileText, Wallet, CheckCircle2, Award, Lightbulb, Megaphone } from 'lucide-react'

export default function DivisionDetailInti() {
  const structure = [
    {
      title: 'Walikota Mahasiswa',
      description: 'Pimpinan tertinggi dalam struktur HIMATIF yang memegang kebijakan umum organisasi',
      icon: Crown,
      responsibilities: [
        'Menjalankan mandat hasil Rapat Kerja Pengurus HIMATIF',
        'Mengambil kebijakan organisasi berdasarkan musyawarah mufakat',
        'Mewakili HIMATIF dalam menjalin hubungan dengan pihak eksternal',
        'Menjadi penanggung jawab umum seluruh kegiatan dan program HIMATIF',
        'Memimpin rapat umum, rapat evaluasi, dan forum resmi organisasi',
        'Memberikan mandat kepada pengurus lain secara tertulis maupun lisan',
        'Menandatangani surat-surat organisasi bersama Sekretaris Umum',
        'Menonaktifkan pengurus yang tidak aktif sesuai mekanisme yang berlaku'
      ]
    },
    {
      title: 'Wakil Walikota Mahasiswa',
      description: 'Pendamping dan pengganti Walikota Mahasiswa apabila berhalangan',
      icon: Users,
      responsibilities: [
        'Membantu Walikota Mahasiswa dalam menjalankan roda organisasi',
        'Mewakili tugas Walikota Mahasiswa apabila berhalangan',
        'Bertanggung jawab terhadap pengembangan dan optimalisasi kinerja bidang',
        'Mengajukan penonaktifan pengurus kepada Walikota Mahasiswa sesuai mekanisme',
        'Bertanggung jawab langsung kepada Walikota Mahasiswa'
      ]
    },
    {
      title: 'Sekretaris Umum',
      description: 'Bertanggung jawab terhadap pengelolaan administrasi dan kesekretariatan organisasi',
      icon: FileText,
      responsibilities: [
        'Mendampingi Walikota Mahasiswa dalam menjalankan organisasi',
        'Mengelola administrasi dan arsip organisasi',
        'Melakukan pendokumentasian hasil rapat',
        'Membuat dokumen resmi kesekretariatan',
        'Membantu kinerja pengurus lain dalam bidang administrasi',
        'Menandatangani surat-surat organisasi bersama Walikota Mahasiswa',
        'Bertanggung jawab kepada Walikota Mahasiswa'
      ]
    },
    {
      title: 'Bendahara Umum',
      description: 'Bertanggung jawab dalam pengelolaan keuangan HIMATIF',
      icon: Wallet,
      responsibilities: [
        'Mengatur, menyimpan, dan mencatat sirkulasi keuangan organisasi',
        'Mengelola keuangan kepengurusan dan kepanitiaan',
        'Mengontrol penggunaan kas organisasi',
        'Melaporkan kondisi keuangan dalam setiap rapat umum',
        'Bertanggung jawab atas kas besar organisasi yang bersumber dari kampus dan jurusan',
        'Bertanggung jawab kepada Walikota Mahasiswa'
      ]
    }
  ]

  const visionMission = {
    vision: 'Menjadi wadah aspirasi mahasiswa Teknik Informatika Universitas Sangga Buana YPKP Bandung serta menciptakan sumber daya manusia yang berkompetensi di bidang teknologi informasi.',
    missions: [
      'Menampung dan menyalurkan aspirasi mahasiswa Teknik Informatika',
      'Menumbuhkan rasa solidaritas dan membentuk karakter anggota HIMATIF yang profesional',
      'Berperan aktif dalam kegiatan organisasi eksternal di bidang teknologi informasi',
      'Meningkatkan rasa kebersamaan di lingkungan Teknik Informatika',
      'Mengoptimalkan fungsionalitas dan sistematika kerja organisasi',
      'Menciptakan sarana kreatif untuk meningkatkan potensi akademik dan non-akademik mahasiswa'
    ]
  }

  const iteConnect = [
    {
      title: 'Study With Us',
      description: 'Forum belajar bersama untuk meningkatkan pemahaman akademik mahasiswa',
      icon: Lightbulb,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      title: 'Creabiz',
      description: 'Program pengembangan kreativitas dan bisnis mahasiswa',
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'Communication Training',
      description: 'Pelatihan komunikasi dan pengembangan soft skill',
      icon: Megaphone,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    }
  ]

  return (
    <div className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 rounded-2xl border border-amber-500/20 mb-4">
            <Crown className="text-amber-400" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Inti HIMATIF
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Struktur kepengurusan utama yang memegang peranan strategis dalam mengarahkan, mengoordinasikan, dan mengawasi seluruh jalannya organisasi HIMATIF
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/40 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Inti HIMATIF menjadi pusat pengambilan kebijakan dan penanggung jawab utama atas seluruh aktivitas organisasi selama satu periode kepengurusan. Inti HIMATIF bertugas memastikan visi, misi, serta hasil Rapat Kerja dapat diimplementasikan dengan baik oleh seluruh bidang, serta menjaga organisasi tetap berjalan sesuai dengan nilai profesionalisme, tanggung jawab, dan musyawarah mufakat.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Struktur Inti HIMATIF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {structure.map((position, idx) => {
              const Icon = position.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-card/40 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/10 rounded-xl border border-amber-500/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-amber-400" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{position.title}</h3>
                      <p className="text-sm text-muted-foreground">{position.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Tugas & Tanggung Jawab:</h4>
                    {position.responsibilities.map((resp, ridx) => (
                      <div key={ridx} className="flex gap-3 items-start text-sm">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5">
                          <span className="text-amber-400 text-xs">→</span>
                        </div>
                        <span className="text-muted-foreground">{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Visi HIMATIF</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{visionMission.vision}</p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Misi HIMATIF</h2>
            </div>
            <div className="space-y-3">
              {visionMission.missions.map((mission, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5">
                    <span className="text-amber-400 text-xs font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">{mission}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Program Unggulan: ITE Connect</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              <span className="font-semibold text-primary">Collaborative, Network for Knowledge, Empowerment, and Community Impact</span> - 
              Wadah eksplorasi dan pengembangan potensi mahasiswa Teknik Informatika melalui kegiatan kolaboratif yang berfokus pada pengembangan pengetahuan, kreativitas, dan dampak positif bagi komunitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {iteConnect.map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group bg-card/40 backdrop-blur-sm border ${program.borderColor} rounded-2xl p-6 hover:border-primary/40 transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${program.bgColor} rounded-xl border ${program.borderColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={program.color} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
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