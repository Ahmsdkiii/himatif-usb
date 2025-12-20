'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, X, Clock, User, ArrowLeft, GraduationCap, Megaphone, Lightbulb, Briefcase } from 'lucide-react'
import Image from 'next/image'

interface Article {
  id: number
  title: string
  excerpt: string
  content: string[]
  date: string
  author: string
  category: string
  readTime: string
  image: string
  division: 'HRDO' | 'PR' | 'RE' | 'CnB' | 'General'
}

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'HRDO' | 'PR' | 'RE' | 'CnB'>('all')

  const articles: Article[] = [
    {
      id: 1,
      title: 'Prospektif 2025: Menyambut Mahasiswa Baru dengan Orientasi Komprehensif',
      excerpt: 'Program orientasi terbesar tahun ini berhasil menyambut 300+ mahasiswa baru Teknik Informatika dengan rangkaian kegiatan yang engaging dan informatif.',
      content: [
        'Program Prospektif 2025 telah sukses dilaksanakan dengan antusiasme tinggi dari mahasiswa baru. Kegiatan ini meliputi orientasi kampus, pengenalan sistem perkuliahan, dan introduction kepada organisasi HIMATIF.',
        'Lebih dari 300 mahasiswa baru mengikuti seluruh rangkaian kegiatan yang dirancang khusus untuk membantu mereka beradaptasi dengan lingkungan kampus. Ice breaking dan team building activities menciptakan suasana kekeluargaan yang kuat sejak hari pertama.',
        '"Prospektif bukan hanya tentang orientasi, tapi tentang membangun fondasi kuat untuk perjalanan akademik mereka," kata Ketua Panitia Prospektif 2025.',
        'Program ini juga menampilkan sesi mentoring dari senior yang memberikan tips dan trik sukses berkuliah di Teknik Informatika, serta panel diskusi tentang peluang karir di industri teknologi.'
      ],
      date: 'March 18, 2025',
      author: 'Ahmad Fauzi',
      category: 'Program',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      division: 'HRDO'
    },
    {
      id: 2,
      title: 'TICO 2025: Kompetisi E-Sport Terbesar Pecahkan Rekor Peserta',
      excerpt: 'Teknik Informatika Competition (TICO) tahun ini menarik 500+ peserta dari berbagai angkatan, menjadikannya event kompetisi terbesar dalam sejarah HIMATIF.',
      content: [
        'TICO 2025 telah menjadi event paling dinanti tahun ini dengan total 500+ peserta yang berkompetisi di berbagai cabang e-sport dan olahraga. Event ini menampilkan turnamen Mobile Legends, Valorant, PUBG Mobile, dan juga kompetisi futsal serta basket.',
        'Antusiasme peserta sangat tinggi sejak babak penyisihan hingga grand final. Setiap pertandingan dipenuhi dengan aksi-aksi menarik dan persaingan ketat antar tim dari berbagai angkatan.',
        'Ketua Pelaksana TICO, Dewi Lestari, menyatakan bahwa kesuksesan event ini tidak lepas dari dukungan seluruh panitia dan sponsor yang telah berkontribusi. Total hadiah yang diperebutkan mencapai puluhan juta rupiah.',
        'Grand final yang digelar di Auditorium Utama disaksikan oleh ratusan penonton dan disiarkan secara live streaming, menciptakan atmosfer yang sangat meriah dan kompetitif.'
      ],
      date: 'March 15, 2025',
      author: 'Dewi Lestari',
      category: 'Event',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      division: 'PR'
    },
    {
      id: 3,
      title: 'Industrial Visit ke Tokopedia: Membuka Wawasan Dunia Kerja IT',
      excerpt: 'Mahasiswa Teknik Informatika berkesempatan mengunjungi kantor Tokopedia dan mendapat insight berharga tentang industri teknologi dari para praktisi.',
      content: [
        'Program Industrial Visit yang diinisiasi oleh bidang Research & Education membawa 80 mahasiswa berkunjung ke kantor Tokopedia di Jakarta. Kegiatan ini bertujuan memberikan gambaran nyata tentang lingkungan kerja di perusahaan teknologi terkemuka.',
        'Peserta mendapatkan company tour lengkap dan berkesempatan melihat langsung bagaimana tim engineering, product, dan design bekerja dalam mengembangkan platform e-commerce terbesar di Indonesia.',
        'Sesi sharing dengan para engineer dan product manager Tokopedia memberikan insights berharga tentang teknologi yang mereka gunakan, kultur kerja, dan tips untuk fresh graduate yang ingin berkarir di industri tech.',
        'Program ini juga dilengkapi dengan sesi Q&A interaktif dimana mahasiswa dapat bertanya langsung tentang career path, skill yang dibutuhkan, dan proses rekrutmen di Tokopedia. Banyak mahasiswa yang terinspirasi dan semakin termotivasi untuk mengembangkan skill mereka.'
      ],
      date: 'March 10, 2025',
      author: 'Budi Santoso',
      category: 'Learning',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      division: 'RE'
    },
    {
      id: 4,
      title: 'Infotalks: AI & Machine Learning untuk Pemula',
      excerpt: 'Seminar teknologi menghadirkan praktisi AI dari Google untuk berbagi knowledge tentang implementasi Machine Learning dalam produk nyata.',
      content: [
        'Infotalks kali ini mengangkat tema "AI & Machine Learning untuk Pemula" dengan menghadirkan Rizki Pratama, Senior ML Engineer dari Google Indonesia. Acara ini dihadiri oleh 200+ mahasiswa yang antusias belajar tentang AI.',
        'Rizki membagikan pengalamannya dalam mengembangkan fitur-fitur AI untuk produk Google, mulai dari konsep dasar machine learning, data preprocessing, hingga deployment model ke production. Materi disampaikan dengan cara yang mudah dipahami bahkan untuk pemula.',
        'Workshop hands-on yang dilakukan memungkinkan peserta untuk langsung praktik membuat model sederhana menggunakan Python dan TensorFlow. Peserta dibimbing step-by-step mulai dari data preparation hingga evaluasi model.',
        'Acara ditutup dengan sesi networking dimana peserta dapat berdiskusi lebih lanjut dengan speaker dan sesama peserta. Banyak yang menyatakan bahwa Infotalks ini membuka mata mereka tentang peluang karir di bidang AI dan ML.'
      ],
      date: 'March 5, 2025',
      author: 'Siti Nurhaliza',
      category: 'Learning',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      division: 'RE'
    },
    {
      id: 5,
      title: 'Studio Day: Dokumentasi Visual Kepengurusan HIMATIF 2025',
      excerpt: 'Seluruh pengurus HIMATIF periode 2025 mengikuti sesi pemotretan profesional untuk dokumentasi resmi organisasi.',
      content: [
        'Bidang Creative & Business menggelar Studio Day sebagai bagian dari program dokumentasi kepengurusan. Seluruh pengurus dari berbagai bidang mengikuti sesi pemotretan yang dilaksanakan di studio profesional dengan konsep formal dan modern.',
        'Art direction yang matang menghasilkan foto-foto berkualitas tinggi yang akan digunakan untuk berbagai keperluan publikasi, mulai dari website resmi, media sosial, hingga ID card pengurus. Setiap bidang memiliki konsep warna dan tema yang disesuaikan dengan karakteristik divisi masing-masing.',
        'Proses pemotretan berlangsung selama satu hari penuh dengan melibatkan photographer dan lighting crew profesional. Hasilnya tidak hanya untuk dokumentasi, tetapi juga untuk memperkuat branding HIMATIF sebagai organisasi yang profesional dan modern.',
        'Foto-foto hasil Studio Day ini akan menjadi legacy kepengurusan periode 2025 dan diharapkan dapat menginspirasi generasi selanjutnya untuk terus menjaga citra positif HIMATIF.'
      ],
      date: 'February 28, 2025',
      author: 'Anisa Rahma',
      category: 'Documentation',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
      division: 'CnB'
    },
    {
      id: 6,
      title: 'Upgrading HIMATIF: Membentuk Leader Masa Depan',
      excerpt: 'Program MABIM dan Magang memberikan pembekalan intensif kepada calon pengurus baru tentang sistem organisasi dan leadership.',
      content: [
        'Program Upgrading yang terdiri dari Masa Bimbingan (MABIM) dan Magang Bidang telah sukses dilaksanakan untuk mempersiapkan calon pengurus HIMATIF. Sebanyak 60 calon pengurus mengikuti serangkaian kegiatan yang dirancang untuk mengembangkan kompetensi organisasi dan kepemimpinan.',
        'MABIM memberikan pemahaman mendalam tentang AD/ART, produk hukum organisasi, serta nilai-nilai yang dianut HIMATIF. Materi disampaikan melalui metode interaktif dengan studi kasus nyata yang pernah terjadi dalam organisasi.',
        'Setelah MABIM, peserta melanjutkan dengan magang di bidang masing-masing selama 2 bulan. Mereka dibimbing langsung oleh pengurus senior untuk memahami tugas, tanggung jawab, dan sistem kerja divisi mereka secara detail.',
        'Program ini tidak hanya fokus pada hard skills organisasi, tetapi juga mengembangkan soft skills seperti komunikasi, problem solving, dan teamwork. Evaluasi berkala dilakukan untuk memastikan setiap peserta siap menjalankan amanah sebagai pengurus.'
      ],
      date: 'February 20, 2025',
      author: 'Fajar Ramadhan',
      category: 'Program',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      division: 'HRDO'
    },
    {
      id: 7,
      title: 'Merchandise HIMATIF: Produk Berkualitas untuk Mahasiswa',
      excerpt: 'Peluncuran merchandise resmi HIMATIF dengan desain eksklusif dan kualitas premium mendapat respon positif dari mahasiswa.',
      content: [
        'Creative & Business meluncurkan merchandise resmi HIMATIF dengan koleksi yang beragam, mulai dari kaos, hoodie, totebag, stiker, hingga pin eksklusif. Desain yang modern dan aesthetic berhasil menarik minat mahasiswa untuk memilikinya.',
        'Proses produksi melibatkan vendor terpercaya dengan quality control ketat untuk memastikan produk yang sampai ke tangan pembeli memiliki kualitas terbaik. Material yang digunakan dipilih dengan cermat, seperti cotton combed untuk kaos yang nyaman dipakai.',
        'Pre-order dibuka selama 2 minggu dan mendapat respons luar biasa dengan total pemesanan mencapai 500+ item. Sistem pembayaran dan distribusi dikelola dengan baik sehingga proses berjalan lancar tanpa kendala berarti.',
        'Selain sebagai produk identity HIMATIF, penjualan merchandise juga menjadi sumber pendapatan tambahan untuk mendukung program-program organisasi. Profit yang didapat akan dialokasikan untuk kegiatan yang bermanfaat bagi seluruh mahasiswa.'
      ],
      date: 'February 15, 2025',
      author: 'Linda Kusuma',
      category: 'Business',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      division: 'CnB'
    },
    {
      id: 8,
      title: 'Pengabdian Masyarakat: Literasi Digital untuk Generasi Muda',
      excerpt: 'HIMATIF menggelar program P2M dengan memberikan edukasi literasi digital dan keamanan data kepada siswa SMP di Bandung.',
      content: [
        'Program Pengabdian Masyarakat (P2M) kali ini fokus pada edukasi literasi digital untuk siswa SMP. Sebanyak 30 pengurus HIMATIF turun langsung mengajar di 3 sekolah di wilayah Bandung untuk memberikan pemahaman tentang penggunaan teknologi yang bijak dan aman.',
        'Materi yang disampaikan meliputi dasar-dasar internet safety, bahaya cyberbullying, cara melindungi data pribadi, dan etika bermedia sosial. Penyampaian disesuaikan dengan tingkat pemahaman siswa SMP dengan metode yang interaktif dan menyenangkan.',
        'Selain teori, siswa juga diajak praktik langsung mengecek keamanan akun media sosial mereka dan mengidentifikasi potensi ancaman online. Workshop ini mendapat apresiasi tinggi dari pihak sekolah dan orang tua siswa.',
        'Program P2M ini merupakan wujud komitmen HIMATIF untuk berkontribusi kepada masyarakat dengan memanfaatkan keahlian di bidang teknologi. Ke depan, program serupa akan terus dilanjutkan dengan jangkauan yang lebih luas.'
      ],
      date: 'February 10, 2025',
      author: 'Hendra Wijaya',
      category: 'Social',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      division: 'PR'
    },
    {
      id: 9,
      title: 'Study With Us: Persiapan UTS Bersama untuk Semester Sukses',
      excerpt: 'Program belajar bersama membantu mahasiswa mempersiapkan UTS dengan bimbingan dari senior berprestasi.',
      content: [
        'Bidang Research & Education mengadakan program Study With Us sebagai persiapan menghadapi Ujian Tengah Semester. Program ini menyediakan tutor sebaya dari mahasiswa senior yang memiliki IPK tinggi untuk membimbing mata kuliah yang dianggap sulit.',
        'Sesi belajar diadakan setiap malam selama 2 minggu menjelang UTS dengan fokus pada mata kuliah seperti Algoritma & Struktur Data, Basis Data, Pemrograman Berorientasi Objek, dan Matematika Diskrit. Setiap sesi dihadiri oleh 20-30 mahasiswa.',
        'Metode belajar yang digunakan sangat efektif dengan kombinasi penjelasan materi, latihan soal, dan diskusi kelompok. Mahasiswa dapat bertanya langsung kepada tutor dan berdiskusi dengan teman-teman untuk saling membantu memahami konsep yang sulit.',
        'Hasil dari program ini sangat positif dengan banyak peserta yang melaporkan peningkatan pemahaman dan nilai UTS mereka. Program Study With Us akan terus dilanjutkan untuk persiapan UAS dan semester-semester berikutnya.'
      ],
      date: 'February 5, 2025',
      author: 'Maya Putri',
      category: 'Learning',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      division: 'RE'
    }
  ]

  const filters = [
    { id: 'all' as const, label: 'All News', icon: Calendar },
    { id: 'HRDO' as const, label: 'HRDO', icon: GraduationCap },
    { id: 'RE' as const, label: 'R&E', icon: Lightbulb },
    { id: 'PR' as const, label: 'PR', icon: Megaphone },
    { id: 'CnB' as const, label: 'C&B', icon: Briefcase },
  ]

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.division === activeFilter)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Program: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Event: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
      Learning: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
      Documentation: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Business: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
      Social: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const getDivisionColor = (division: string) => {
    const colors: Record<string, string> = {
      HRDO: 'text-blue-400',
      PR: 'text-pink-400',
      RE: 'text-yellow-400',
      CnB: 'text-purple-400',
      General: 'text-primary'
    }
    return colors[division] || 'text-primary'
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with our latest programs, events, and achievements
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{filter.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article, index) => {
              const colors = getCategoryColor(article.category)
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority={index < 3}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm`}>
                        {article.category}
                      </span>
                      <span className={`text-xs font-semibold ${getDivisionColor(article.division)}`}>
                        {article.division}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 min-h-[3.5rem]">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-primary/20 mt-auto">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-background border border-primary/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-6 flex items-center justify-between z-10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span className="text-sm font-medium">Back to News</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const colors = getCategoryColor(selectedArticle.category)
                    return (
                      <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {selectedArticle.category}
                      </span>
                    )
                  })()}
                  <span className={`text-sm font-semibold ${getDivisionColor(selectedArticle.division)}`}>
                    {selectedArticle.division}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-primary/20">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {selectedArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {selectedArticle.readTime}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedArticle.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}