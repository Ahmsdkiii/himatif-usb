'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Lightbulb, Megaphone, Briefcase, ArrowRight, Crown } from 'lucide-react'
import Link from 'next/link'

interface Division {
  id: number
  name: string
  shortName: string
  slug: string
  description: string
  responsibilities: string[]
  icon: any
  color: string
  bgColor: string
  borderColor: string
  isHighlight?: boolean
}

export default function DivisionsList() {
  const divisions: Division[] = [
    {
      id: 0,
      name: 'Inti HIMATIF',
      shortName: 'INTI',
      slug: 'inti',
      description: 'Struktur kepengurusan utama yang mengarahkan, mengoordinasikan, dan mengawasi seluruh jalannya organisasi HIMATIF.',
      responsibilities: [
        'Menjalankan mandat hasil Rapat Kerja Pengurus',
        'Mengambil kebijakan organisasi strategis',
        'Mewakili HIMATIF dalam hubungan eksternal',
        'Mengawasi implementasi visi dan misi organisasi',
      ],
      icon: Crown,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      isHighlight: true,
    },
    {
      id: 1,
      name: 'Human Resource Development Organization',
      shortName: 'HRDO',
      slug: 'hrdo',
      description: 'Mengembangkan kapasitas dan potensi anggota melalui program training, mentorship, dan character building.',
      responsibilities: [
        'Mengelola program pelatihan dan pengembangan SDM',
        'Koordinasi recruitment dan onboarding members',
        'Membangun kultur organisasi yang positif',
        'Evaluasi performa dan feedback mechanism',
      ],
      icon: GraduationCap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      id: 2,
      name: 'Research & Education',
      shortName: 'R&E',
      slug: 'research-education',
      description: 'Memimpin research initiatives dan academic programs untuk meningkatkan technical excellence members.',
      responsibilities: [
        'Organize workshop dan technical training',
        'Koordinasi research projects dan publications',
        'Facilitate mentorship dan study groups',
        'Connect members dengan academic opportunities',
      ],
      icon: Lightbulb,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
    },
    {
      id: 3,
      name: 'Public Relations',
      shortName: 'PR',
      slug: 'public-relations',
      description: 'Mengelola komunikasi eksternal, brand awareness, dan membangun network dengan stakeholders.',
      responsibilities: [
        'Manage social media dan digital presence',
        'Koordinasi event promotion dan branding',
        'Handle media relations dan press releases',
        'Build partnership dengan external organizations',
      ],
      icon: Megaphone,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
    },
    {
      id: 4,
      name: 'Creative & Business',
      shortName: 'C&B',
      slug: 'creative-business',
      description: 'Menghandle creative projects, business development, dan revenue-generating initiatives.',
      responsibilities: [
        'Create design assets dan marketing materials',
        'Manage business partnerships dan sponsorships',
        'Coordinate merchandise dan product development',
        'Develop sustainable revenue streams',
      ],
      icon: Briefcase,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const intiDivision = divisions[0]
  const otherDivisions = divisions.slice(1)

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Link href={`/divisions/${intiDivision.slug}`}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-card/40 backdrop-blur-sm border-2 ${intiDivision.borderColor} rounded-2xl p-10 hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold">
                  <Crown size={12} />
                  Kepemimpinan Utama
                </span>
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${intiDivision.bgColor} rounded-2xl border-2 ${intiDivision.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Crown className={intiDivision.color} size={40} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {intiDivision.name}
                    </h3>
                    <p className="text-primary font-semibold">{intiDivision.shortName}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {intiDivision.description}
                </p>

                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {intiDivision.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex gap-3 items-start group/item">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5 group-hover/item:bg-amber-500/20 group-hover/item:border-amber-500/40 transition-all duration-300">
                        <span className="text-amber-400 text-sm">→</span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Lihat Detail Lengkap</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </Link>
        </motion.div>

        <div className="text-center py-8">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="h-px w-12 bg-border"></div>
            <span className="text-sm font-medium">Bidang Operasional</span>
            <div className="h-px w-12 bg-border"></div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {otherDivisions.map((division) => {
            const Icon = division.icon
            return (
              <motion.div
                key={division.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-card/40 backdrop-blur-sm border ${division.borderColor} rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer`}
              >
                <Link href={`/divisions/${division.slug}`} className="block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex items-center justify-center w-14 h-14 ${division.bgColor} rounded-xl border ${division.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={division.color} size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{division.name}</h3>
                          <p className="text-primary font-semibold text-xs">{division.shortName}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {division.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {division.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex gap-3 items-start text-sm group/item">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5 group-hover/item:bg-primary/20 group-hover/item:border-primary/40 transition-all duration-300">
                              <span className="text-primary text-xs">→</span>
                            </div>
                            <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Selengkapnya</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className={`absolute -bottom-12 -right-12 w-32 h-32 ${division.bgColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}