'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Target, Eye } from 'lucide-react'
import { cabinetInfo, CabinetSlug } from '@/lib/data/cabinet-data'

export default function CabinetDetailHero({ slug }: { slug: string }) {
  const cabinet = cabinetInfo[slug as CabinetSlug]

  if (!cabinet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Kabinet tidak ditemukan
          </h1>
          <Link href="/cabinet" className="text-primary hover:underline">
            Kembali ke Daftar Kabinet
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative w-full bg-background overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/cabinet"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Kabinet</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full flex items-center justify-center overflow-hidden"
            >
              <div className="relative z-10 w-full h-full flex items-center justify-center p-10 sm:p-12">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <Image
                    src="/assets/img/sol.png"
                    alt={cabinet.name}
                    fill
                    className="object-contain drop-shadow-[0_22px_40px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_22px_40px_rgba(0,0,0,0.65)]"
                    sizes="(max-width: 640px) 288px, 384px"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm mb-4">
                  <span>{cabinet.periode}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {cabinet.name}
                </h1>

                <p className="text-xl text-primary font-semibold mb-6 italic">
                  &quot;{cabinet.tagline}&quot;
                </p>

                <p className="text-muted-foreground leading-relaxed text-justify">
                  {cabinet.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visi & Misi
            </h2>
            <p className="text-muted-foreground">Ketua Himpunan {cabinet.name}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Visi</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-justify">
                  {cabinet.visi}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                </div>

                <ul className="space-y-3">
                  {cabinet.misi.map((item, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary font-semibold mt-1 shrink-0">
                        {index + 1}.
                      </span>
                      <span className="leading-relaxed text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
