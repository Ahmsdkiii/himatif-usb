'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Users, GraduationCap, Lightbulb, Megaphone, Briefcase } from 'lucide-react'
import { cabinetInfo, CabinetSlug } from '@/lib/data/cabinet-data'

interface LeadershipTeamProps {
  cabinetSlug?: string
}

export default function LeadershipTeam({ cabinetSlug = 'solaris' }: LeadershipTeamProps) {
  const [activeTab, setActiveTab] = useState('executive')
  
  const teamMembers = cabinetInfo[cabinetSlug as CabinetSlug]?.members || cabinetInfo.solaris.members

  const tabs = [
    { id: 'executive', label: 'Executive Board', icon: Users },
    { id: 'hrdo', label: 'HRDO', icon: GraduationCap },
    { id: 'research', label: 'Research & Education', icon: Lightbulb },
    { id: 'pr', label: 'Public Relations', icon: Megaphone },
    { id: 'creative', label: 'Creative & Business', icon: Briefcase },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers[activeTab as keyof typeof teamMembers]?.map((member: any, index: number) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative aspect-3/4 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority={index < 4}
                    quality={85} 
                  />                    
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.position}</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>NPP: {member.npp}</p>
                    <p>Angkatan: {member.angkatan}</p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}