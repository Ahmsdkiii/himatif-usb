export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string[]
  date: string
  author: string
  category: string
  readTime: string
  image: string
  division: 'HRDO' | 'PR' | 'RE' | 'CnB'
  featured?: boolean
}

export const newsArticles: Article[] = [
  {
    id: 1,
    slug: 'prospektif-2025-menyambut-mahasiswa-baru',
    title: 'Prospektif 2025: Menyambut Mahasiswa Baru dengan Orientasi Komprehensif',
    excerpt: 'Program orientasi terbesar tahun ini berhasil menyambut 300+ mahasiswa baru Teknik Informatika dengan rangkaian kegiatan yang engaging dan informatif.',
    content: [
      'Program Prospektif 2025 telah sukses dilaksanakan dengan antusiasme tinggi dari mahasiswa baru angkatan 2025. Kegiatan ini dirancang khusus untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus dan sistem perkuliahan di Program Studi Teknik Informatika USB YPKP.',
      'Lebih dari 300 mahasiswa baru mengikuti seluruh rangkaian kegiatan yang berlangsung selama 3 hari penuh. Acara dibuka dengan sambutan dari Ketua Program Studi Teknik Informatika dan Ketua HIMATIF, dilanjutkan dengan sesi pengenalan lingkungan kampus, fasilitas laboratorium, dan berbagai unit kegiatan mahasiswa.',
      'Rangkaian acara meliputi campus tour yang dipandu oleh senior, workshop pengenalan sistem perkuliahan dan KRS online, serta introduction kepada organisasi HIMATIF beserta program-program yang dapat diikuti mahasiswa. Ice breaking dan team building activities menciptakan suasana kekeluargaan yang kuat sejak hari pertama.',
      'Hari kedua diisi dengan sesi motivasi dari alumni sukses yang telah berkarir di industri teknologi terkemuka seperti Gojek, Tokopedia, dan Telkom Indonesia. Para alumni berbagi pengalaman dan tips sukses berkuliah di Teknik Informatika serta mempersiapkan diri untuk dunia kerja.',
      'Acara ditutup dengan malam keakraban yang menampilkan penampilan seni dari mahasiswa dan games interaktif. "Prospektif bukan hanya tentang orientasi, tapi tentang membangun fondasi kuat untuk perjalanan akademik mereka dan menciptakan bonding yang akan bertahan selama kuliah," ujar Ketua Panitia Prospektif 2025.',
      'Program ini juga menampilkan sesi mentoring dari senior berprestasi yang memberikan tips dan trik sukses berkuliah, manajemen waktu, dan cara menghadapi tantangan akademik. Setiap mahasiswa baru juga mendapatkan buddy mentor yang siap membantu mereka sepanjang semester pertama.'
    ],
    date: 'September 15, 2024',
    author: 'Ahmad Fauzi',
    category: 'Program',
    readTime: '6 min',
    image: '/assets/img/news/pro.png',
    division: 'HRDO',
    featured: true
  },
  {
    id: 2,
    slug: 'harmonisasi-mempererat-kebersamaan-himatif',
    title: 'Harmonisasi: Mempererat Kebersamaan Keluarga Besar HIMATIF',
    excerpt: 'Kegiatan refreshing dan bonding seluruh pengurus HIMATIF ke Ciwidey untuk mempererat tali silaturahmi dan meningkatkan solidaritas tim.',
    content: [
      'Program Harmonisasi merupakan agenda rutin HIMATIF yang bertujuan mempererat rasa kekeluargaan dan memperkuat bonding antar pengurus dari berbagai bidang. Kali ini, kegiatan dilaksanakan di kawasan wisata Ciwidey, Bandung Selatan, dengan konsep outing dan team building.',
      'Sebanyak 60 pengurus dari semua bidang (HRDO, Public Relations, Research & Education, dan Creative & Business) berangkat pukul 06.00 WIB menggunakan bus charter. Perjalanan menuju lokasi sudah dimulai dengan suasana ceria penuh tawa dan nyanyian bersama.',
      'Sesampainya di lokasi, acara dibuka dengan games ice breaking yang dipandu oleh tim HRDO. Berbagai permainan seru seperti estafet air, human knot, dan trust fall berhasil mencairkan suasana dan membuat semua pengurus tertawa lepas. Games dirancang khusus untuk melatih kerjasama tim dan komunikasi.',
      'Sesi sharing session diadakan di sore hari dimana setiap bidang mempresentasikan pencapaian dan tantangan yang mereka hadapi selama periode kepengurusan. Diskusi santai ini membuka wawasan semua pengurus tentang dinamika organisasi dan pentingnya kolaborasi lintas bidang.',
      'Malam hari diisi dengan api unggun, musik akustik, dan heart-to-heart talk. Banyak pengurus yang membagikan pengalaman pribadi, kesulitan yang dihadapi, hingga harapan untuk HIMATIF ke depan. Suasana hangat dan supportive membuat semua merasa menjadi bagian dari keluarga besar.',
      'Hari kedua diisi dengan kegiatan eksplorasi wisata sekitar Ciwidey seperti Kawah Putih dan perkebunan strawberry. Sebelum pulang, diadakan evaluasi acara dan pengurus diminta memberikan feedback. "Harmonisasi ini sangat bermakna, membuat kami lebih solid dan siap menghadapi tantangan bersama," ujar salah satu peserta.'
    ],
    date: 'November 12, 2024',
    author: 'Rizki Pratama',
    category: 'Kegiatan',
    readTime: '6 min',
    image: '/assets/img/news/harmonisasi.png',
    division: 'HRDO',
    featured: true
  },
  {
    id: 3,
    slug: 'communication-training-public-speaking',
    title: 'Communication Training: Meningkatkan Skill Public Speaking Mahasiswa',
    excerpt: 'Workshop intensif selama 2 hari untuk meningkatkan kemampuan komunikasi dan public speaking mahasiswa Teknik Informatika dengan trainer profesional.',
    content: [
      'Bidang Public Relations HIMATIF menggelar Communication Training yang diikuti oleh 50 mahasiswa Teknik Informatika dari berbagai angkatan. Program ini bertujuan meningkatkan soft skills mahasiswa, khususnya dalam hal komunikasi efektif dan public speaking yang sangat dibutuhkan di dunia kerja.',
      'Training dibawakan oleh Bapak Andi Wijaya, seorang communication consultant dan trainer berpengalaman yang telah melatih ratusan profesional dan mahasiswa di berbagai perusahaan dan universitas. Materi dirancang praktikal dan langsung applicable dalam kehidupan sehari-hari.',
      'Hari pertama fokus pada fundamental komunikasi efektif. Peserta belajar tentang prinsip-prinsip komunikasi, body language, voice modulation, dan cara membangun rapport dengan audience. Trainer menekankan bahwa komunikasi bukan hanya tentang apa yang kita katakan, tapi bagaimana kita mengatakannya.',
      'Sesi praktik dilakukan dengan berbagai simulasi seperti self introduction, impromptu speaking, dan storytelling. Setiap peserta mendapat kesempatan tampil di depan dan menerima feedback langsung dari trainer dan peers. Atmosfer yang supportive membuat peserta nyaman untuk keluar dari zona comfort mereka.',
      'Hari kedua fokus pada public speaking dan presentasi. Peserta belajar struktur presentasi yang efektif, cara menangani nervous, teknik engaging audience, dan handling Q&A session. Materi diperkaya dengan studi kasus presentasi dari TED Talks dan pemimpin dunia yang inspiring.',
      'Di sesi final, setiap peserta diminta mempresentasikan topik pilihan mereka selama 5 menit di hadapan seluruh peserta. Peningkatan yang signifikan terlihat dari sesi awal hingga akhir. "Training ini benar-benar game changer. Sekarang saya lebih percaya diri berbicara di depan umum dan presentasi," ungkap salah satu peserta.'
    ],
    date: 'November 23, 2024',
    author: 'Anisa Rahma',
    category: 'Workshop',
    readTime: '6 min',
    image: '/assets/img/news/p2m.png',
    division: 'PR',
    featured: true
  },
  {
    id: 4,
    slug: 'lab-maintenance-perawatan-laboratorium-komputer',
    title: 'Lab Maintenance: Perawatan Berkala Laboratorium Komputer',
    excerpt: 'Tim Research & Education melaksanakan maintenance rutin laboratorium komputer untuk memastikan semua perangkat dalam kondisi optimal dan siap digunakan untuk pembelajaran.',
    content: [
      'Bidang Research & Education HIMATIF melaksanakan agenda rutin Lab Maintenance yang melibatkan 20 mahasiswa terlatih untuk melakukan perawatan menyeluruh terhadap 3 laboratorium komputer di Program Studi Teknik Informatika.',
      'Kegiatan dimulai pukul 08.00 WIB dengan briefing singkat dari koordinator tim. Setiap anggota dibagi ke dalam 3 kelompok, masing-masing bertanggung jawab untuk satu lab. Checklist maintenance sudah disiapkan untuk memastikan tidak ada item yang terlewat.',
      'Tahap pertama adalah hardware maintenance. Tim melakukan pembersihan menyeluruh pada CPU, keyboard, mouse, dan monitor menggunakan peralatan khusus. Debu dan kotoran yang menumpuk dibersihkan dengan hati-hati menggunakan blower dan microfiber cloth. Pengecekan kabel dan koneksi juga dilakukan untuk memastikan tidak ada yang rusak atau longgar.',
      'Dilanjutkan dengan software maintenance yang meliputi update sistem operasi Windows dan Linux, instalasi patch keamanan terbaru, update antivirus database, dan pembersihan file temporary yang memenuhi storage. Beberapa komputer yang mengalami masalah software dilakukan troubleshooting dan reinstall bila diperlukan.',
      'Tim juga melakukan testing menyeluruh untuk memastikan semua komputer berfungsi dengan baik. Testing meliputi uji koneksi internet, fungsi USB port, audio output, dan performa general. Komputer yang mengalami masalah hardware dicatat untuk dilaporkan ke bagian sarana prasarana.',
      'Hasil maintenance didokumentasikan dalam form checklist dan laporan tertulis yang diserahkan kepada laboran dan Ketua Program Studi. Dari 90 unit komputer yang dimaintenance, 85 unit dalam kondisi baik, 3 unit memerlukan upgrade RAM, dan 2 unit memerlukan penggantian hard disk. "Lab maintenance ini penting untuk memastikan mahasiswa mendapat fasilitas pembelajaran yang optimal," ujar Koordinator Lab Maintenance.'
    ],
    date: 'Desember 7, 2024',
    author: 'Fajar Ramadhan',
    category: 'Maintenance',
    readTime: '5 min',
    image: '/assets/img/news/lab.png',
    division: 'RE',
    featured: true
  },
]

export const getFeaturedArticles = () => {
  return newsArticles.filter(article => article.featured).slice(0, 4)
}

export const getArticleById = (id: number) => {
  return newsArticles.find(article => article.id === id)
}

export const getArticleBySlug = (slug: string) => {
  return newsArticles.find(article => article.slug === slug)
}

export const getArticlesByDivision = (division: 'HRDO' | 'PR' | 'RE' | 'CnB' | 'all') => {
  if (division === 'all') return newsArticles
  return newsArticles.filter(article => article.division === division)
}

export const getRelatedArticles = (currentSlug: string, division: string, limit = 3) => {
  return newsArticles
    .filter(a => a.slug !== currentSlug && a.division === division)
    .slice(0, limit)
}