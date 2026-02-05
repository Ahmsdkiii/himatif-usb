'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'

interface Props {
  articleId: number
  onBack: () => void
}

interface ArticleContent {
  title: string
  author: string
  date: string
  readTime: string
  category: string
  content: string
}

export default function NewsDetail({ articleId, onBack }: Props) {
  const articles: Record<number, ArticleContent> = {
    1: {
      title: 'Prospektif 2025: Menyambut Mahasiswa Baru dengan Orientasi Komprehensif',
      author: 'Ahmad Fauzi',
      date: 'September 15, 2024',
      readTime: '6 min',
      category: 'Program',
      content: `Program Prospektif 2025 telah sukses dilaksanakan dengan antusiasme tinggi dari mahasiswa baru angkatan 2025. Kegiatan ini dirancang khusus untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus dan sistem perkuliahan di Program Studi Teknik Informatika USB YPKP.

Lebih dari 300 mahasiswa baru mengikuti seluruh rangkaian kegiatan yang berlangsung selama 3 hari penuh. Acara dibuka dengan sambutan dari Ketua Program Studi Teknik Informatika dan Ketua HIMATIF, dilanjutkan dengan sesi pengenalan lingkungan kampus, fasilitas laboratorium, dan berbagai unit kegiatan mahasiswa.

Rangkaian acara meliputi campus tour yang dipandu oleh senior, workshop pengenalan sistem perkuliahan dan KRS online, serta introduction kepada organisasi HIMATIF beserta program-program yang dapat diikuti mahasiswa. Ice breaking dan team building activities menciptakan suasana kekeluargaan yang kuat sejak hari pertama.

Hari kedua diisi dengan sesi motivasi dari alumni sukses yang telah berkarir di industri teknologi terkemuka seperti Gojek, Tokopedia, dan Telkom Indonesia. Para alumni berbagi pengalaman dan tips sukses berkuliah di Teknik Informatika serta mempersiapkan diri untuk dunia kerja.

Acara ditutup dengan malam keakraban yang menampilkan penampilan seni dari mahasiswa dan games interaktif. "Prospektif bukan hanya tentang orientasi, tapi tentang membangun fondasi kuat untuk perjalanan akademik mereka dan menciptakan bonding yang akan bertahan selama kuliah," ujar Ketua Panitia Prospektif 2025.

Program ini juga menampilkan sesi mentoring dari senior berprestasi yang memberikan tips dan trik sukses berkuliah, manajemen waktu, dan cara menghadapi tantangan akademik. Setiap mahasiswa baru juga mendapatkan buddy mentor yang siap membantu mereka sepanjang semester pertama.`,
    },
    2: {
      title: 'Appreciation of The Month: Mengapresiasi Dedikasi Pengurus HIMATIF',
      author: 'Dewi Lestari',
      date: 'Oktober 28, 2024',
      readTime: '5 min',
      category: 'Program',
      content: `Appreciation of The Month merupakan program rutin bulanan yang diinisiasi oleh bidang HRDO untuk memberikan penghargaan kepada pengurus HIMATIF yang menunjukkan dedikasi, kinerja, dan kontribusi luar biasa dalam menjalankan tugasnya.

Sistem penilaian dilakukan secara objektif dan transparan dengan melibatkan evaluasi dari koordinator bidang, penilaian peer-to-peer, serta tracking pencapaian target program kerja. Setiap pengurus memiliki kesempatan yang sama untuk mendapatkan apresiasi ini.

Bulan ini, apresiasi diberikan kepada Sarah Wulandari dari bidang Creative & Business yang berhasil meningkatkan engagement media sosial HIMATIF hingga 150% dalam sebulan terakhir. Sarah konsisten menghasilkan konten berkualitas tinggi, kreatif, dan relevan dengan target audience.

Dalam sharing session yang diadakan, Sarah berbagi strategi content planning-nya, mulai dari riset tren, brainstorming ide kreatif, hingga eksekusi dan evaluasi performa konten. "Kunci sukses adalah konsistensi, kreativitas, dan selalu listening kepada feedback dari audience," ungkap Sarah.

Sebagai bentuk apresiasi, Sarah menerima sertifikat penghargaan, voucher belanja, dan kesempatan untuk featured dalam konten Instagram HIMATIF. Foto dan profilnya juga dipajang di wall of fame kantor HIMATIF sebagai inspirasi bagi pengurus lainnya.

Program Appreciation of The Month terbukti efektif meningkatkan motivasi dan produktivitas pengurus. Banyak pengurus yang termotivasi untuk memberikan yang terbaik dan berlomba-lomba menciptakan inovasi dalam program kerja mereka.`,
    },
  }

  const article = articles[articleId] || articles[1]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Program: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Kegiatan: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
      Workshop: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const colors = getCategoryColor(article.category)

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Kembali ke Berita</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">{article.title}</h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground text-sm border-b border-primary/20 pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <span>{article.readTime} read</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-muted-foreground leading-relaxed space-y-6 text-lg">
            {article.content.split('\n\n').map((paragraph: string, index: number) => {
              if (paragraph.includes('- ')) {
                return (
                  <ul key={index} className="space-y-3 ml-2">
                    {paragraph.split('\n').map((item: string, i: number) => (
                      item.trim() && (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-1">
                            <span className="text-primary text-xs font-bold">•</span>
                          </div>
                          <span className="text-foreground pt-0.5">{item.replace(/^- /, '')}</span>
                        </li>
                      )
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-foreground leading-relaxed text-justify">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.div>

        <div className="border-t border-primary/20 my-16"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Tetap Terhubung</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">Subscribe newsletter untuk mendapatkan update terbaru dari HIMATIF USB YPKP.</p>
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 active:scale-95">
            Subscribe Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  )
}