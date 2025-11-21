'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Lightbulb, Megaphone, Briefcase } from 'lucide-react'

interface Division {
  id: number
  name: string
  shortName: string
  description: string
  responsibilities: string[]
  icon: any
  color: string
  bgColor: string
  borderColor: string
}

export default function DivisionsList() {
  const divisions: Division[] = [
    {
      id: 1,
      name: 'Human Resource Development Organization',
      shortName: 'HRDO',
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

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {divisions.map((division) => {
            const Icon = division.icon
            return (
              <motion.div
                key={division.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-black/40 backdrop-blur-sm border ${division.borderColor} rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 ${division.bgColor} rounded-xl border ${division.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={division.color} size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{division.name}</h3>
                        <p className="text-green-400 font-semibold text-xs">{division.shortName}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {division.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-white mb-3 text-sm">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {division.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex gap-3 items-start text-sm group/item">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 shrink-0 mt-0.5 group-hover/item:bg-green-500/20 group-hover/item:border-green-500/40 transition-all duration-300">
                            <span className="text-green-400 text-xs">→</span>
                          </div>
                          <span className="text-gray-400 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`absolute -bottom-12 -right-12 w-32 h-32 ${division.bgColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}