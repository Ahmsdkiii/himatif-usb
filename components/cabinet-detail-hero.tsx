'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Flag, Lightbulb } from 'lucide-react'
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
                    src={cabinet.logo}
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

      <section className="relative py-24 bg-background/40 backdrop-blur-sm overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
          <Lightbulb className="w-4 h-4" />
          <span>Visi</span>
        </div>      
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            {cabinet.visi}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
          <Flag className="w-4 h-4" />
          <span>Misi</span>
        </div>
        <div className="space-y-4 pt-2">
          {cabinet.misi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <span className="text-primary font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              <span className="text-muted-foreground text-lg leading-relaxed text-justify">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

    </>
  )
}
