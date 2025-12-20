'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Code, Lightbulb, Rocket, Trophy, Award, Target, BookOpen, Megaphone, GraduationCap, Briefcase } from 'lucide-react'

interface Program {
  id: number
  title: string
  subtitle?: string
  category: 'Annual' | 'Routine'
  division?: 'HRDO' | 'PR' | 'RE' | 'CnB' | 'General'
  description: string
  details: string[]
  icon: React.ComponentType<{ size?: number; className?: string }>
  season?: string
  objectives?: string[]
}

const hrdoPrograms: Program[] = [
  {
    id: 1,
    title: 'Prospektif',
    subtitle: 'Program Orientasi Teknik Informatika',
    category: 'Annual',
    division: 'HRDO',
    season: 'Awal Semester Ganjil',
    description: 'Rangkaian kegiatan orientasi mahasiswa baru Teknik Informatika yang bertujuan mengenalkan lingkungan kampus, sistem perkuliahan, serta organisasi HIMATIF.',
    details: [
      'Orientasi lingkungan kampus dan fasilitas',
      'Pengenalan sistem perkuliahan dan akademik',
      'Pengenalan organisasi HIMATIF dan kepengurusan',
      'Ice breaking dan team building activities'
    ],
    icon: Users
  },
  {
    id: 2,
    title: 'Upgrading',
    subtitle: 'MABIM & Magang',
    category: 'Annual',
    division: 'HRDO',
    season: 'Awal Periode Kepengurusan',
    description: 'Kegiatan pembekalan calon pengurus melalui Masa Bimbingan (MABIM) dan magang bidang untuk menyiapkan calon pengurus.',
    details: [
      'Masa Bimbingan (MABIM) untuk calon pengurus',
      'Magang bidang sesuai divisi masing-masing',
      'Pelatihan soft skills dan leadership',
      'Pemahaman AD/ART dan produk hukum organisasi'
    ],
    icon: Award
  },
  {
    id: 3,
    title: 'Materi Keorganisasian',
    category: 'Routine',
    division: 'HRDO',
    description: 'Forum atau kuliah umum yang membahas keorganisasian, produk hukum, serta simulasi persidangan.',
    details: [
      'Kuliah umum tentang sistem keorganisasian',
      'Pembahasan AD/ART dan produk hukum HIMATIF',
      'Simulasi rapat dan persidangan',
      'Studi kasus penyelesaian masalah organisasi'
    ],
    icon: BookOpen
  },
  {
    id: 4,
    title: 'Rapat & Musyawarah',
    category: 'Routine',
    division: 'HRDO',
    description: 'Forum resmi organisasi untuk menetapkan program kerja, evaluasi berkala, dan menentukan arah kebijakan organisasi.',
    details: [
      'Rapat koordinasi rutin antar bidang',
      'Musyawarah penetapan program kerja',
      'Evaluasi pelaksanaan kegiatan berkala',
      'Pembahasan kebijakan strategis organisasi'
    ],
    icon: Calendar
  },
  {
    id: 5,
    title: 'Apresiasi of The Month',
    category: 'Routine',
    division: 'HRDO',
    description: 'Program apresiasi bulanan bagi pengurus dengan kinerja terbaik sebagai bentuk motivasi dan penghargaan.',
    details: [
      'Penilaian kinerja pengurus setiap bulan',
      'Pemberian penghargaan kepada best performer',
      'Sharing session dari pengurus terpilih',
      'Dokumentasi dan publikasi apresiasi'
    ],
    icon: Award
  },
  {
    id: 6,
    title: 'Harmonisasi',
    category: 'Routine',
    division: 'HRDO',
    description: 'Kegiatan kebersamaan untuk mempererat rasa kekeluargaan antar pengurus melalui diskusi santai dan kegiatan luar kampus.',
    details: [
      'Kegiatan bonding antar pengurus',
      'Outing dan refreshing bersama',
      'Diskusi santai membahas dinamika organisasi',
      'Games dan aktivitas team building'
    ],
    icon: Users
  }
]

const prPrograms: Program[] = [
  {
    id: 7,
    title: 'TICO',
    subtitle: 'Teknik Informatika Competition',
    category: 'Annual',
    division: 'PR',
    season: 'Semester Genap',
    description: 'Kegiatan kompetisi e-sport dan olahraga sebagai wadah pengembangan minat dan bakat mahasiswa Teknik Informatika.',
    details: [
      'Kompetisi e-sport berbagai game populer',
      'Turnamen olahraga antar angkatan',
      'Sistem knockout dan league table',
      'Hadiah dan penghargaan bagi pemenang'
    ],
    icon: Award
  },
  {
    id: 8,
    title: 'Benchmarking',
    category: 'Annual',
    division: 'PR',
    season: 'Semester Ganjil/Genap',
    description: 'Kegiatan studi banding antar himpunan untuk berbagi pengalaman, sistem organisasi, dan program kerja.',
    details: [
      'Kunjungan ke himpunan mahasiswa lain',
      'Sharing session tentang sistem organisasi',
      'Diskusi best practices dan lessons learned',
      'Networking dengan pengurus himpunan lain'
    ],
    icon: Users
  },
  {
    id: 9,
    title: 'Pengabdian Masyarakat',
    subtitle: 'P2M',
    category: 'Annual',
    division: 'PR',
    season: 'Semester Genap',
    description: 'Kegiatan edukatif berupa literasi digital, keamanan data, dan pemanfaatan teknologi bagi masyarakat dan sekolah.',
    details: [
      'Workshop literasi digital untuk masyarakat',
      'Pelatihan keamanan data dan privasi online',
      'Edukasi pemanfaatan teknologi dalam kehidupan',
      'Sosialisasi bahaya cybercrime'
    ],
    icon: Target
  },
  {
    id: 10,
    title: 'ASTI & Harmonic',
    category: 'Routine',
    division: 'PR',
    description: 'Forum aspirasi, diskusi, serta bonding mahasiswa Teknik Informatika untuk memperkuat solidaritas dan komunikasi.',
    details: [
      'Forum aspirasi mahasiswa berkala',
      'Diskusi santai membahas isu kampus',
      'Kegiatan bonding antar mahasiswa',
      'Penampungan masukan dan saran'
    ],
    icon: Users
  },
  {
    id: 11,
    title: 'Communication Training',
    category: 'Routine',
    division: 'PR',
    description: 'Pelatihan komunikasi dan public speaking untuk meningkatkan kepercayaan diri mahasiswa.',
    details: [
      'Workshop public speaking',
      'Pelatihan komunikasi efektif',
      'Praktik presentasi dan pitching',
      'Feedback dan evaluasi dari trainer'
    ],
    icon: Megaphone
  },
  {
    id: 12,
    title: 'Dies Natalis',
    category: 'Annual',
    division: 'PR',
    season: 'Sesuai Tanggal Berdiri HIMATIF',
    description: 'Kegiatan eksternal untuk memperingati hari jadi HIMATIF dan menjalin silaturahmi antar himpunan.',
    details: [
      'Perayaan hari jadi HIMATIF',
      'Undangan alumni dan himpunan lain',
      'Sharing session dari alumni sukses',
      'Entertainment dan penampilan seni'
    ],
    icon: Calendar
  }
]

const rePrograms: Program[] = [
  {
    id: 13,
    title: 'Web Development',
    category: 'Routine',
    division: 'RE',
    description: 'Pengembangan dan pemeliharaan website resmi HIMATIF sebagai pusat informasi digital.',
    details: [
      'Development dan maintenance website HIMATIF',
      'Update konten dan informasi berkala',
      'Optimasi performance dan SEO',
      'Implementasi fitur-fitur baru'
    ],
    icon: Code
  },
  {
    id: 14,
    title: 'Industrial Visit',
    category: 'Annual',
    division: 'RE',
    season: 'Semester Genap',
    description: 'Kunjungan ke perusahaan IT untuk mengenalkan dunia industri secara langsung.',
    details: [
      'Kunjungan ke perusahaan teknologi terkemuka',
      'Company tour dan office visit',
      'Sharing session dengan praktisi industri',
      'Q&A tentang dunia kerja IT'
    ],
    icon: Target
  },
  {
    id: 15,
    title: 'Infotalks',
    category: 'Annual',
    division: 'RE',
    season: 'Semester Ganjil/Genap',
    description: 'Seminar edukatif dan inspiratif dengan narasumber profesional di bidang teknologi.',
    details: [
      'Seminar dengan speaker dari industri',
      'Topik seputar teknologi terkini',
      'Interactive session dan networking',
      'Certificate untuk peserta'
    ],
    icon: Lightbulb
  },
  {
    id: 16,
    title: 'Study With Us',
    category: 'Routine',
    division: 'RE',
    description: 'Forum belajar bersama untuk meningkatkan pemahaman akademik mahasiswa.',
    details: [
      'Sesi belajar bersama rutin',
      'Tutor sebaya untuk mata kuliah sulit',
      'Diskusi solving problem dan tugas',
      'Sharing materi dan catatan'
    ],
    icon: BookOpen
  },
  {
    id: 17,
    title: 'Lab Maintenance',
    category: 'Routine',
    division: 'RE',
    description: 'Agenda rutin perawatan laboratorium komputer.',
    details: [
      'Maintenance hardware komputer lab',
      'Update software dan sistem operasi',
      'Troubleshooting masalah teknis',
      'Cleaning dan perawatan berkala'
    ],
    icon: Target
  },
  {
    id: 18,
    title: 'Informatif',
    category: 'Routine',
    division: 'RE',
    description: 'Penyebaran informasi magang, beasiswa, lomba, dan seminar melalui media resmi HIMATIF.',
    details: [
      'Kurasi informasi magang dan internship',
      'Update info beasiswa dalam dan luar negeri',
      'Informasi kompetisi dan lomba IT',
      'Announcement seminar dan workshop'
    ],
    icon: Megaphone
  },
  {
    id: 19,
    title: 'Collaborative Research',
    category: 'Routine',
    division: 'RE',
    description: 'Kolaborasi riset dengan bidang lain untuk menghasilkan konten edukatif berbasis data.',
    details: [
      'Proyek riset kolaboratif antar bidang',
      'Data collection dan analisis',
      'Publikasi hasil riset',
      'Pembuatan paper atau artikel ilmiah'
    ],
    icon: Users
  },
  {
    id: 20,
    title: 'INFOLAB',
    category: 'Annual',
    division: 'RE',
    season: 'Semester Genap',
    description: 'Pelatihan soft skill dan personal branding untuk kesiapan karier mahasiswa.',
    details: [
      'Workshop CV writing dan portfolio building',
      'Pelatihan interview skills',
      'LinkedIn optimization workshop',
      'Personal branding session'
    ],
    icon: Award
  }
]

const cnbPrograms: Program[] = [
  {
    id: 21,
    title: 'Konten Media Sosial',
    category: 'Routine',
    division: 'CnB',
    description: 'Perencanaan, produksi, dan publikasi konten media sosial HIMATIF secara konsisten dan profesional.',
    details: [
      'Content planning dan scheduling',
      'Desain grafis untuk feeds dan story',
      'Video editing untuk reels dan TikTok',
      'Copywriting yang engaging'
    ],
    icon: Megaphone
  },
  {
    id: 22,
    title: 'Branding HIMATIF',
    category: 'Routine',
    division: 'CnB',
    description: 'Memperkuat identitas visual HIMATIF melalui konsistensi desain dan tone warna.',
    details: [
      'Pengembangan brand guidelines',
      'Konsistensi visual identity',
      'Design template untuk berbagai kebutuhan',
      'Color palette dan typography standards'
    ],
    icon: Target
  },
  {
    id: 23,
    title: 'Birthday Shout-Out',
    category: 'Routine',
    division: 'CnB',
    description: 'Program apresiasi berupa ucapan ulang tahun kepada anggota HIMATIF melalui Instagram Story.',
    details: [
      'Database ulang tahun seluruh anggota',
      'Desain custom birthday template',
      'Publikasi melalui Instagram Story',
      'Personal message untuk pengurus'
    ],
    icon: Award
  },
  {
    id: 24,
    title: 'QnA & Interactive Quiz',
    category: 'Routine',
    division: 'CnB',
    description: 'Program interaktif mingguan melalui media sosial untuk meningkatkan engagement.',
    details: [
      'QnA session di Instagram Story',
      'Quiz interaktif dengan hadiah',
      'Polling dan voting untuk keputusan',
      'Trivia tech-related'
    ],
    icon: Users
  },
  {
    id: 25,
    title: 'Studio Day',
    category: 'Annual',
    division: 'CnB',
    season: 'Awal Periode Kepengurusan',
    description: 'Dokumentasi foto studio seluruh pengurus HIMATIF sebagai arsip visual resmi.',
    details: [
      'Pemotretan formal seluruh pengurus',
      'Konsep dan art direction photo session',
      'Professional lighting dan setup',
      'Editing dan retouching foto'
    ],
    icon: Calendar
  },
  {
    id: 26,
    title: 'Insight HIMATIF',
    category: 'Annual',
    division: 'CnB',
    season: 'Akhir Periode Kepengurusan',
    description: 'Proyek dokumenter akhir periode yang merekam perjalanan dan capaian HIMATIF.',
    details: [
      'Dokumentasi video sepanjang periode',
      'Wawancara dengan pengurus dan alumni',
      'Highlight program kerja dan achievement',
      'Cinematic storytelling'
    ],
    icon: BookOpen
  },
  {
    id: 27,
    title: 'Merchandise Project',
    category: 'Annual',
    division: 'CnB',
    season: 'Semester Ganjil/Genap',
    description: 'Produksi dan penjualan merchandise resmi HIMATIF seperti kaos, totebag, stiker, dan pin.',
    details: [
      'Desain merchandise eksklusif HIMATIF',
      'Produksi dengan vendor terpercaya',
      'Pre-order dan marketing campaign',
      'Distribusi kepada pembeli'
    ],
    icon: Briefcase
  },
  {
    id: 28,
    title: 'Creativepreneur Service',
    category: 'Routine',
    division: 'CnB',
    description: 'Layanan jasa kreatif seperti desain grafis, editing video, dan pembuatan website.',
    details: [
      'Jasa desain grafis untuk berbagai kebutuhan',
      'Video editing untuk event atau promosi',
      'Web development untuk klien eksternal',
      'Photography dan videography service'
    ],
    icon: Target
  },
  {
    id: 29,
    title: 'CnB Food Project',
    category: 'Routine',
    division: 'CnB',
    description: 'Program usaha makanan dan minuman berbasis sistem pre-order.',
    details: [
      'Menu makanan dan minuman pilihan',
      'Sistem pre-order melalui WhatsApp atau form',
      'Partnership dengan supplier atau UMKM',
      'Delivery service dalam kampus'
    ],
    icon: Award
  }
]

export default function ProgramsShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'HRDO' | 'PR' | 'RE' | 'CnB'>('all')

  const tabs = [
    { id: 'all' as const, label: 'All Programs', icon: Rocket },
    { id: 'HRDO' as const, label: 'HRDO', icon: GraduationCap },
    { id: 'RE' as const, label: 'Research & Education', icon: Lightbulb },
    { id: 'PR' as const, label: 'Public Relations', icon: Megaphone },
    { id: 'CnB' as const, label: 'Creative & Business', icon: Briefcase },
  ]

  const allPrograms = [...hrdoPrograms, ...prPrograms, ...rePrograms, ...cnbPrograms]
  
  const filteredPrograms = activeTab === 'all' 
    ? allPrograms 
    : allPrograms.filter(p => p.division === activeTab)

  const divisionColors: Record<string, string> = {
    HRDO: 'blue',
    PR: 'pink',
    RE: 'yellow',
    CnB: 'purple'
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPrograms.map((program, index) => {
              const Icon = program.icon
              const color = divisionColors[program.division || 'HRDO']
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-${color}-500/10 rounded-xl border border-${color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`text-${color}-400`} size={28} />
                      </div>
                      <div className="flex flex-col gap-1.5 items-end">
                        {program.division && (
                          <span className={`bg-${color}-500/10 text-${color}-400 text-xs font-semibold px-3 py-1 rounded-lg border border-${color}-500/20`}>
                            {program.division}
                          </span>
                        )}
                        {program.season && (
                          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded border border-primary/20">
                            {program.season}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    {program.subtitle && (
                      <p className="text-sm text-primary font-semibold mb-2">
                        {program.subtitle}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-2">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 text-xs">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                            <span className="text-primary text-xs">✓</span>
                          </div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                        program.category === 'Annual' 
                          ? 'text-orange-400' 
                          : 'text-green-400'
                      }`}>
                        <Calendar size={14} />
                        {program.category} Program
                      </span>
                    </div>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filteredPrograms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No programs found for this division</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}