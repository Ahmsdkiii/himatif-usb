'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CabinetHero() {
  const kabinets = [
    {
      id: 1,
      name: 'Kabinet Cyberpunk',
      logo: '/assets/img/sol.png',
      periode: 'Periode 2023/2024',
      slug: 'cyberpunk',
    },
    {
      id: 2,
      name: 'Kabinet No Man’s Sky',
      logo: '/assets/img/sol.png',
      periode: 'Periode 2024/2025',
      slug: 'no-mans-sky',
    },
    {
      id: 3,
      name: 'Kabinet Solaris',
      logo: '/assets/img/sol.png',
      periode: 'Periode 2025/2026',
      slug: 'solaris',
    },   
  ]

  const sortedKabinets = [...kabinets].sort((a, b) => {
    const getEndYear = (periode: string) => {
      const match = periode.match(/(\d{4})\s*\/\s*(\d{4})/)
      if (!match) return 0
      return Number(match[2])
    }
    return getEndYear(b.periode) - getEndYear(a.periode)
  })

  const getRowSizes = (total: number) => {
    const rows: number[] = []
    let remaining = total
    let size = 1
    while (remaining > 0) {
      const take = Math.min(size, remaining)
      rows.push(take)
      remaining -= take
      size += 1
    }
    return rows
  }

  const rowSizes = getRowSizes(sortedKabinets.length)

  const rows: typeof sortedKabinets[] = []
  let cursor = 0
  for (const size of rowSizes) {
    rows.push(sortedKabinets.slice(cursor, cursor + size))
    cursor += size
  }

  const Card = ({
    kabinet,
    index,
    priority,
  }: {
    kabinet: (typeof kabinets)[number]
    index: number
    priority?: boolean
  }) => {
    return (
      <Link href={`/cabinet/${kabinet.slug}`} className="block w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 + index * 0.08 }}
          whileHover={{ y: -8, transition: { duration: 0.25 } }}
          className="relative bg-black dark:bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-pointer"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative aspect-square w-full flex items-center justify-center p-10 sm:p-12">
            <div className="relative w-full h-full max-w-[260px] max-h-[260px]">
              <Image
                src={kabinet.logo}
                alt={kabinet.name}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                priority={priority}
                quality={95}
              />
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative px-6 pb-7">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-white dark:text-foreground group-hover:text-primary transition-colors duration-300">
                {kabinet.name}
              </h3>
              <p className="text-sm text-white/70 dark:text-muted-foreground">
                {kabinet.periode}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    )
  }

  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[45vh] pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm mb-5"
            >
              <span>HIMATIF USB</span>
              <span className="text-primary/50">•</span>
              <span>Sejarah Kepengurusan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Kabinet{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
                Kepengurusan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Berikut adalah daftar kabinet HIMATIF USB dari beberapa periode
              terakhir sebagai bagian dari perjalanan organisasi.
            </motion.p>
          </motion.div>
        </div>

        <div className="pb-24 space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-8"
            >
              {row.map((kabinet, itemIndex) => {
                const globalIndex =
                  rows.slice(0, rowIndex).reduce((a, b) => a + b.length, 0) +
                  itemIndex

                const widthClass =
                  row.length === 1
                    ? 'w-full max-w-md'
                    : row.length === 2
                      ? 'w-full sm:w-[calc(50%-16px)] max-w-md'
                      : 'w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm'

                return (
                  <div key={kabinet.id} className={widthClass}>
                    <Card
                      kabinet={kabinet}
                      index={globalIndex}
                      priority={globalIndex < 2}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
