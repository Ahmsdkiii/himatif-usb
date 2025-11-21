'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, UserCheck, FileText, DollarSign, GraduationCap, Lightbulb, Megaphone, Briefcase } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  position: string
  department: string
  bio: string
  icon: any
}

export default function LeadershipTeam() {
  const [activeTab, setActiveTab] = useState('executive')

  const tabs = [
    { id: 'executive', label: 'Executive Board', icon: Users },
    { id: 'hrdo', label: 'HRDO', icon: GraduationCap },
    { id: 'research', label: 'Research & Education', icon: Lightbulb },
    { id: 'pr', label: 'Public Relations', icon: Megaphone },
    { id: 'creative', label: 'Creative & Business', icon: Briefcase },
  ]

  const teamMembers: Record<string, TeamMember[]> = {
    executive: [
      {
        id: 1,
        name: 'Ahmad Fauzi',
        position: 'Ketua Himpunan',
        department: 'Executive',
        bio: 'Memimpin organisasi dengan visi dan komitmen untuk kesuksesan mahasiswa dan community engagement.',
        icon: Users,
      },
      {
        id: 2,
        name: 'Siti Nurhaliza',
        position: 'Wakil Ketua Himpunan',
        department: 'Executive',
        bio: 'Mendukung inisiatif organisasi dan memastikan operasi berjalan lancar di seluruh departemen.',
        icon: UserCheck,
      },
      {
        id: 3,
        name: 'Budi Santoso',
        position: 'Sekretaris',
        department: 'Administrative',
        bio: 'Maintaining records dan communications untuk menjaga organisasi tetap terorganisir dengan baik.',
        icon: FileText,
      },
      {
        id: 4,
        name: 'Dewi Lestari',
        position: 'Bendahara',
        department: 'Finance',
        bio: 'Mengelola keuangan dan memastikan fiscal responsibility untuk semua dana HIMATIF.',
        icon: DollarSign,
      },
    ],
    hrdo: [
      {
        id: 5,
        name: 'Rizki Pratama',
        position: 'Head of HRDO',
        department: 'HRDO',
        bio: 'Memimpin pengembangan SDM dan membangun kultur organisasi yang positif.',
        icon: GraduationCap,
      },
      {
        id: 6,
        name: 'Anisa Rahma',
        position: 'HRDO Coordinator',
        department: 'HRDO',
        bio: 'Koordinasi training programs dan member development initiatives.',
        icon: GraduationCap,
      },
    ],
    research: [
      {
        id: 7,
        name: 'Fajar Ramadhan',
        position: 'Head of Research',
        department: 'Research & Education',
        bio: 'Memimpin research initiatives dan academic development programs.',
        icon: Lightbulb,
      },
      {
        id: 8,
        name: 'Linda Wijaya',
        position: 'Education Coordinator',
        department: 'Research & Education',
        bio: 'Mengelola workshop dan training untuk meningkatkan technical skills members.',
        icon: Lightbulb,
      },
    ],
    pr: [
      {
        id: 9,
        name: 'Andi Wijaya',
        position: 'Head of PR',
        department: 'Public Relations',
        bio: 'Mengelola komunikasi eksternal dan membangun brand awareness HIMATIF.',
        icon: Megaphone,
      },
      {
        id: 10,
        name: 'Maya Kartika',
        position: 'PR Coordinator',
        department: 'Public Relations',
        bio: 'Koordinasi social media dan public engagement activities.',
        icon: Megaphone,
      },
    ],
    creative: [
      {
        id: 11,
        name: 'Reza Pahlevi',
        position: 'Head of Creative',
        department: 'Creative & Business',
        bio: 'Memimpin creative projects dan business development initiatives.',
        icon: Briefcase,
      },
      {
        id: 12,
        name: 'Dina Amalia',
        position: 'Business Coordinator',
        department: 'Creative & Business',
        bio: 'Mengelola partnership dan revenue-generating projects.',
        icon: Briefcase,
      },
    ],
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-black shadow-lg shadow-green-500/30'
                      : 'bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/40'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers[activeTab].map((member, index) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-green-500/10 h-48 flex items-center justify-center border-b border-green-500/20">
                    <Icon className="text-green-400" size={48} />
                  </div>

                  <div className="relative p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-green-400 font-semibold text-sm mb-3">{member.position}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}