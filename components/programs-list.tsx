'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Code, Lightbulb, Rocket, Trophy } from 'lucide-react'

interface Program {
  id: number
  title: string
  category: 'Annual' | 'Routine'
  description: string
  details: string[]
  icon: React.ComponentType<{ size?: number; className?: string }>
  season?: string
}

export default function ProgramsList() {
  const programs: Program[] = [
    {
      id: 1,
      title: 'Tech Festival',
      category: 'Annual',
      season: 'Semester Ganjil',
      description: 'Event teknologi terbesar kami dengan hackathon, tech talks, dan showcase project dari mahasiswa dan industri.',
      details: [
        'Multiple tech competitions',
        'Speaker dari tech companies',
        'Networking dengan professionals',
        'Project exhibition dan demo',
      ],
      icon: Rocket,
    },
    {
      id: 2,
      title: 'Welcome Week',
      category: 'Annual',
      season: 'Awal Semester',
      description: 'Menyambut mahasiswa baru dengan activities yang dirancang untuk membangun connections dan introduce tech community.',
      details: [
        'Orientation dengan 100+ organizations',
        'Ice breaker dan team building',
        'Campus tours dan info sessions',
        'Games dan giveaways',
      ],
      icon: Users,
    },
    {
      id: 3,
      title: 'Leadership Summit',
      category: 'Annual',
      season: 'Semester Genap',
      description: 'Intensive program untuk develop student leaders melalui workshops, networking, dan skill-building sessions.',
      details: [
        'Leadership skills workshops',
        'Networking dengan campus leaders',
        'Professional development sessions',
        'Mentorship matching program',
      ],
      icon: Trophy,
    },
    {
      id: 4,
      title: 'Weekly Code Sessions',
      category: 'Routine',
      description: 'Sesi coding rutin untuk belajar bersama, solve problems, dan share knowledge dalam programming.',
      details: [
        'Algorithm problem solving',
        'Code review sessions',
        'Pair programming activities',
        'Open Q&A dan discussions',
      ],
      icon: Code,
    },
    {
      id: 5,
      title: 'Tech Workshops',
      category: 'Routine',
      description: 'Workshop bulanan covering latest technologies, best practices, dan industry-relevant skills.',
      details: [
        'Hands-on technical training',
        'Industry expert speakers',
        'Certificate of completion',
        'Project-based learning',
      ],
      icon: Lightbulb,
    },
    {
      id: 6,
      title: 'Monthly Meetups',
      category: 'Routine',
      description: 'Casual meetups untuk networking, knowledge sharing, dan building lasting friendships dalam tech community.',
      details: [
        'Casual networking atmosphere',
        'Lightning talks dari members',
        'Tech demos dan showcases',
        'Open untuk semua members',
      ],
      icon: Calendar,
    },
  ]

  const annualPrograms = programs.filter((p) => p.category === 'Annual')
  const routinePrograms = programs.filter((p) => p.category === 'Routine')

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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              Annual Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Flagship events yang highlight the year dan bring our tech community together.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {annualPrograms.map((program) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-green-400" size={28} />
                      </div>
                      {program.season && (
                        <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-green-500/20">
                          {program.season}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{program.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 grow leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-2">
                      {program.details.map((detail, index) => (
                        <li key={index} className="flex gap-2 text-xs">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500/10 border border-green-500/20 shrink-0 mt-0.5">
                            <span className="text-green-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div>
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              Routine Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Regular initiatives yang support ongoing student development dan community building.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {routinePrograms.map((program) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-green-400" size={32} />
                      </div>
                    </div>

                    <div className="grow">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{program.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">{program.description}</p>

                      <ul className="space-y-1">
                        {program.details.slice(0, 2).map((detail, index) => (
                          <li key={index} className="flex gap-2 text-xs">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}