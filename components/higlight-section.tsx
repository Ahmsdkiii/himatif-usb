"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Sparkles, Code2, Rocket } from "lucide-react";

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Komunitas Informatika",
      description:
        "Wadah mahasiswa Teknik Informatika untuk saling belajar, berbagi pengalaman, dan berkembang bersama.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      borderColor: "group-hover:border-blue-500/40",
    },
    {
      icon: Rocket,
      title: "Kegiatan & Pelatihan",
      description:
        "Program seperti workshop, kelas, dan project kolaboratif untuk meningkatkan kemampuan teknologi dan soft skill.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      borderColor: "group-hover:border-yellow-500/40",
    },
    {
      icon: Handshake,
      title: "Relasi & Kolaborasi",
      description:
        "Membangun relasi antar mahasiswa, alumni, dan pihak kampus melalui kegiatan yang positif dan bermanfaat.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/40",
    },
    {
      icon: TrendingUp,
      title: "Pengembangan Diri",
      description:
        "Mendorong anggota untuk aktif, kreatif, dan siap menghadapi dunia akademik maupun dunia kerja.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      borderColor: "group-hover:border-green-500/40",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Keunggulan Kami</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Kenapa Memilih HIMATIF?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Temukan wadah yang mendukung mahasiswa Teknik Informatika untuk
            berkembang, berprestasi, dan berkarya bersama.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 ${highlight.borderColor} transition-all duration-300 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${highlight.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/10`}
                  >
                    <Icon
                      className={`${highlight.iconColor} transition-colors duration-300`}
                      size={28}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {highlight.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div
                  className={`absolute -bottom-12 -right-12 w-32 h-32 ${highlight.bgColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="absolute top-0 right-0 w-20 h-20 border border-primary/5 rounded-bl-3xl"></div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Siap Bergabung dengan HIMATIF?
              </h3>
              <p className="text-muted-foreground text-sm">
                Mari bersama-sama membangun lingkungan yang aktif, kreatif, dan
                bermanfaat.
              </p>
            </div>

            <button className="shrink-0 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 active:scale-95">
              Gabung Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
