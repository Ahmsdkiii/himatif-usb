'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OrganizationProfile() {
  const stats = [
    { value: '100+', label: 'Anggota Aktif' },
    { value: '20+', label: 'Event per Tahun' },
    { value: '5', label: 'Divisi' },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-black dark:bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl aspect-square flex items-center justify-center overflow-hidden group hover:border-primary/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <Image
                  src="/assets/img/Himatif-White.png"
                  alt="Logo HIMATIF USB"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                  priority
                />
              </div>

              <p className="mt-6 text-sm sm:text-base text-muted-foreground">
                Logo Resmi HIMATIF USB YPKP Bandung
              </p>
            </div>

            <div className="absolute -top-12 -right-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Kisah Kami
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Himpunan Mahasiswa Teknik Informatika USB YPKP Bandung adalah
                  wadah organisasi mahasiswa Jurusan Teknik Informatika
                  Universitas Sangga Buana YPKP Bandung yang berperan sebagai
                  lembaga aspiratif.
                </p>

                <p>
                  HIMATIF USB YPKP Bandung berdiri pada tanggal{' '}
                  <span className="font-semibold text-foreground/90">
                    21 Juli 2022
                  </span>{' '}
                  dan berkedudukan di Universitas Sangga Buana YPKP Bandung.
                </p>

                <p>
                  HIMATIF USB YPKP Bandung didirikan berdasarkan landasan{' '}
                  <span className="font-semibold text-foreground/90">
                    Pancasila
                  </span>{' '}
                  serta berasaskan pada{' '}
                  <span className="font-semibold text-foreground/90">
                    Tri Dharma Perguruan Tinggi
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <h3 className="font-semibold text-foreground text-lg mb-6">
                Statistik Utama
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-primary/5 border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
