export interface Article {
  id: number
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
  // {
  //   id: 2,
  //   title: 'Appreciation of The Month: Mengapresiasi Dedikasi Pengurus HIMATIF',
  //   excerpt: 'Program apresiasi bulanan yang memberikan penghargaan kepada pengurus dengan kinerja dan kontribusi terbaik sebagai bentuk motivasi dan pengakuan atas kerja keras mereka.',
  //   content: [
  //     'Appreciation of The Month merupakan program rutin bulanan yang diinisiasi oleh bidang HRDO untuk memberikan penghargaan kepada pengurus HIMATIF yang menunjukkan dedikasi, kinerja, dan kontribusi luar biasa dalam menjalankan tugasnya.',
  //     'Sistem penilaian dilakukan secara objektif dan transparan dengan melibatkan evaluasi dari koordinator bidang, penilaian peer-to-peer, serta tracking pencapaian target program kerja. Setiap pengurus memiliki kesempatan yang sama untuk mendapatkan apresiasi ini.',
  //     'Bulan ini, apresiasi diberikan kepada Sarah Wulandari dari bidang Creative & Business yang berhasil meningkatkan engagement media sosial HIMATIF hingga 150% dalam sebulan terakhir. Sarah konsisten menghasilkan konten berkualitas tinggi, kreatif, dan relevan dengan target audience.',
  //     'Dalam sharing session yang diadakan, Sarah berbagi strategi content planning-nya, mulai dari riset tren, brainstorming ide kreatif, hingga eksekusi dan evaluasi performa konten. "Kunci sukses adalah konsistensi, kreativitas, dan selalu listening kepada feedback dari audience," ungkap Sarah.',
  //     'Sebagai bentuk apresiasi, Sarah menerima sertifikat penghargaan, voucher belanja, dan kesempatan untuk featured dalam konten Instagram HIMATIF. Foto dan profilnya juga dipajang di wall of fame kantor HIMATIF sebagai inspirasi bagi pengurus lainnya.',
  //     'Program Appreciation of The Month terbukti efektif meningkatkan motivasi dan produktivitas pengurus. Banyak pengurus yang termotivasi untuk memberikan yang terbaik dan berlomba-lomba menciptakan inovasi dalam program kerja mereka. Ke depan, program ini akan terus dilanjutkan dengan kriteria penilaian yang semakin komprehensif.'
  //   ],
  //   date: 'Oktober 28, 2024',
  //   author: 'Dewi Lestari',
  //   category: 'Program',
  //   readTime: '5 min',
  //   image: '/images/appreciation.jpg',
  //   division: 'HRDO',
  //   featured: true
  // },
  {
    id: 2,
    title: 'Harmonisasi: Mempererat Kebersamaan Keluarga Besar HIMATIF',
    excerpt: 'Kegiatan refreshing dan bonding seluruh pengurus HIMATIF ke Ciwidey untuk mempererat tali silaturahmi dan meningkatkan solidaritas tim.',
    content: [
      'Program Harmonisasi merupakan agenda rutin HIMATIF yang bertujuan mempererat rasa kekeluargaan dan memperkuat bonding antar pengurus dari berbagai bidang. Kali ini, kegiatan dilaksanakan di kawasan wisata Ciwidey, Bandung Selatan, dengan konsep outing dan team building.',
      'Sebanyak 60 pengurus dari semua bidang (HRDO, Public Relations, Research & Education, dan Creative & Business) berangkat pukul 06.00 WIB menggunakan bus charter. Perjalanan menuju lokasi sudah dimulai dengan suasana ceria penuh tawa dan nyanyian bersama.',
      'Sesampainya di lokasi, acara dibuka dengan games ice breaking yang dipandu oleh tim HRDO. Berbagai permainan seru seperti estafet air, human knot, dan trust fall berhasil mencairkan suasana dan membuat semua pengurus tertawa lepas. Games dirancang khusus untuk melatih kerjasama tim dan komunikasi.',
      'Sesi sharing session diadakan di sore hari dimana setiap bidang mempresentasikan pencapaian dan tantangan yang mereka hadapi selama periode kepengurusan. Diskusi santai ini membuka wawasan semua pengurus tentang dinamika organisasi dan pentingnya kolaborasi lintas bidang.',
      'Malam hari diisi dengan api unggun, musik akustik, dan heart-to-heart talk. Banyak pengurus yang membagikan pengalaman pribadi, kesulitan yang dihadapi, hingga harapan untuk HIMATIF ke depan. Suasana hangat dan supportif membuat semua merasa menjadi bagian dari keluarga besar.',
      'Hari kedua diisi dengan kegiatan eksplorasi wisata sekitar Ciwidey seperti Kawah Putih dan perkebunan strawberry. Sebelum pulang, diadakan evaluasi acara dan pengurus diminta memberikan feedback. "Harmonisasi ini sangat bermakna, membuat kami lebih solid dan siap menghadapi tantangan bersama," ujar salah satu peserta. Program ini sukses mencapai tujuannya dan meninggalkan kenangan indah bagi seluruh pengurus.'
    ],
    date: 'November 12, 2024',
    author: 'Rizki Pratama',
    category: 'Kegiatan',
    readTime: '6 min',
    image: '/assets/img/news/harmonisasi.png',
    division: 'HRDO',
    featured: true
  },
  // {
  //   id: 4,
  //   title: 'Benchmarking: Studi Banding ke HIMATIF Institut Teknologi Bandung',
  //   excerpt: 'HIMATIF USB YPKP melakukan kunjungan studi banding ke HIMATIF ITB untuk berbagi pengalaman, best practices, dan memperluas networking antar himpunan.',
  //   content: [
  //     'Dalam rangka meningkatkan kualitas organisasi dan program kerja, HIMATIF USB YPKP melaksanakan kegiatan Benchmarking dengan mengunjungi HIMATIF Institut Teknologi Bandung (ITB). Kegiatan ini diikuti oleh 15 perwakilan pengurus inti dari berbagai bidang.',
  //     'Delegasi HIMATIF USB YPKP diterima dengan hangat oleh pengurus HIMATIF ITB di kantor himpunan mereka. Acara dibuka dengan sesi perkenalan dan ice breaking untuk mencairkan suasana. Kedua himpunan saling memperkenalkan struktur organisasi, visi misi, dan program kerja unggulan masing-masing.',
  //     'Sesi sharing pertama membahas tentang sistem keorganisasian dan manajemen sumber daya. HIMATIF ITB berbagi pengalaman mereka dalam mengelola organisasi dengan jumlah anggota lebih dari 500 mahasiswa, termasuk sistem divisi, job description yang jelas, dan mekanisme koordinasi yang efektif.',
  //     'Diskusi dilanjutkan dengan topik program kerja inovatif. HIMATIF ITB mempresentasikan program-program unggulan mereka seperti hackathon nasional, tech conference, dan program kewirausahaan mahasiswa. Mereka juga berbagi strategi sponsorship, partnership dengan perusahaan, dan sustainability program.',
  //     'Tim USB YPKP juga berkesempatan melakukan campus tour dan melihat fasilitas-fasilitas yang dimiliki ITB seperti innovation lab dan maker space. Banyak insight berharga yang didapat tentang bagaimana memanfaatkan fasilitas kampus untuk mendukung program himpunan.',
  //     'Acara ditutup dengan sesi networking informal dan tukar kontak untuk kolaborasi masa depan. Kedua himpunan sepakat untuk menjalin kerjasama jangka panjang dan berkomitmen saling mendukung dalam berbagai kegiatan. "Benchmarking ini membuka mata kami tentang banyak hal yang bisa kami improve di HIMATIF. Kami pulang dengan semangat baru dan ide-ide fresh untuk diterapkan," ungkap Ketua HIMATIF USB YPKP.'
  //   ],
  //   date: 'Oktober 5, 2024',
  //   author: 'Linda Kusuma',
  //   category: 'Networking',
  //   readTime: '6 min',
  //   image: '/images/benchmarking.jpg',
  //   division: 'PR',
  //   featured: true
  // },
  {
    id: 3,
    title: 'Communication Training: Meningkatkan Skill Public Speaking Mahasiswa',
    excerpt: 'Workshop intensif selama 2 hari untuk meningkatkan kemampuan komunikasi dan public speaking mahasiswa Teknik Informatika dengan trainer profesional.',
    content: [
      'Bidang Public Relations HIMATIF menggelar Communication Training yang diikuti oleh 50 mahasiswa Teknik Informatika dari berbagai angkatan. Program ini bertujuan meningkatkan soft skills mahasiswa, khususnya dalam hal komunikasi efektif dan public speaking yang sangat dibutuhkan di dunia kerja.',
      'Training dibawakan oleh Bapak Andi Wijaya, seorang communication consultant dan trainer berpengalaman yang telah melatih ratusan profesional dan mahasiswa di berbagai perusahaan dan universitas. Materi dirancang praktikal dan langsung applicable dalam kehidupan sehari-hari.',
      'Hari pertama fokus pada fundamental komunikasi efektif. Peserta belajar tentang prinsip-prinsip komunikasi, body language, voice modulation, dan cara membangun rapport dengan audience. Trainer menekankan bahwa komunikasi bukan hanya tentang apa yang kita katakan, tapi bagaimana kita mengatakannya.',
      'Sesi praktik dilakukan dengan berbagai simulasi seperti self introduction, impromptu speaking, dan storytelling. Setiap peserta mendapat kesempatan tampil di depan dan menerima feedback langsung dari trainer dan peers. Atmosfer yang supportive membuat peserta nyaman untuk keluar dari zona comfort mereka.',
      'Hari kedua fokus pada public speaking dan presentasi. Peserta belajar struktur presentasi yang efektif, cara menangani nervous, teknik engaging audience, dan handling Q&A session. Materi diperkaya dengan studi kasus presentasi dari TED Talks dan pemimpin dunia yang inspiring.',
      'Di sesi final, setiap peserta diminta mempresentasikan topik pilihan mereka selama 5 menit di hadapan seluruh peserta. Peningkatan yang signifikan terlihat dari sesi awal hingga akhir. "Training ini benar-benar game changer. Sekarang saya lebih percaya diri berbicara di depan umum dan presentasi," ungkap salah satu peserta. Program ditutup dengan pembagian sertifikat dan komitmen untuk terus mengasah skill komunikasi.'
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
    title: 'Lab Maintenance: Perawatan Berkala Laboratorium Komputer',
    excerpt: 'Tim Research & Education melaksanakan maintenance rutin laboratorium komputer untuk memastikan semua perangkat dalam kondisi optimal dan siap digunakan untuk pembelajaran.',
    content: [
      'Bidang Research & Education HIMATIF melaksanakan agenda rutin Lab Maintenance yang melibatkan 20 mahasiswa terlatih untuk melakukan perawatan menyeluruh terhadap 3 laboratorium komputer di Program Studi Teknik Informatika.',
      'Kegiatan dimulai pukul 08.00 WIB dengan briefing singkat dari koordinator tim. Setiap anggota dibagi ke dalam 3 kelompok, masing-masing bertanggung jawab untuk satu lab. Checklist maintenance sudah disiapkan untuk memastikan tidak ada item yang terlewat.',
      'Tahap pertama adalah hardware maintenance. Tim melakukan pembersihan menyeluruh pada CPU, keyboard, mouse, dan monitor menggunakan peralatan khusus. Debu dan kotoran yang menumpuk dibersihkan dengan hati-hati menggunakan blower dan microfiber cloth. Pengecekan kabel dan koneksi juga dilakukan untuk memastikan tidak ada yang rusak atau longgar.',
      'Dilanjutkan dengan software maintenance yang meliputi update sistem operasi Windows dan Linux, instalasi patch keamanan terbaru, update antivirus database, dan pembersihan file temporary yang memenuhi storage. Beberapa komputer yang mengalami masalah software dilakukan troubleshooting dan reinstall bila diperlukan.',
      'Tim juga melakukan testing menyeluruh untuk memastikan semua komputer berfungsi dengan baik. Testing meliputi uji koneksi internet, fungsi USB port, audio output, dan performa general. Komputer yang mengalami masalah hardware dicatat untuk dilaporkan ke bagian sarana prasarana.',
      'Hasil maintenance didokumentasikan dalam form checklist dan laporan tertulis yang diserahkan kepada laboran dan Ketua Program Studi. Dari 90 unit komputer yang dimaintenance, 85 unit dalam kondisi baik, 3 unit memerlukan upgrade RAM, dan 2 unit memerlukan penggantian hard disk. "Lab maintenance ini penting untuk memastikan mahasiswa mendapat fasilitas pembelajaran yang optimal. Kami berkomitmen melakukan ini rutin setiap bulan," ujar Koordinator Lab Maintenance.'
    ],
    date: 'Desember 7, 2024',
    author: 'Fajar Ramadhan',
    category: 'Maintenance',
    readTime: '5 min',
    image: '/assets/img/news/lab.png',
    division: 'RE',
    featured: true
  },
  // {
  //   id: 7,
  //   title: 'Study With Us: Persiapan UTS Bersama untuk Semester Sukses',
  //   excerpt: 'Program belajar bersama dengan sistem tutor sebaya membantu mahasiswa mempersiapkan Ujian Tengah Semester dengan fokus pada mata kuliah yang dianggap sulit.',
  //   content: [
  //     'Bidang Research & Education mengadakan program Study With Us sebagai persiapan menghadapi Ujian Tengah Semester (UTS). Program ini menyediakan tutor sebaya dari mahasiswa senior yang memiliki IPK di atas 3.5 untuk membimbing mata kuliah yang dianggap challenging.',
  //     'Sesi belajar diadakan setiap hari Senin-Jumat pukul 19.00-21.00 WIB selama 2 minggu menjelang UTS. Lokasi belajar berada di ruang kelas kampus yang nyaman dengan fasilitas LCD proyektor dan whiteboard. Total ada 4 sesi paralel untuk mata kuliah berbeda.',
  //     'Mata kuliah yang menjadi fokus adalah Algoritma & Struktur Data, Basis Data, Pemrograman Berorientasi Objek, dan Matematika Diskrit. Keempat mata kuliah ini dipilih berdasarkan survey kepada mahasiswa tentang matkul yang paling membutuhkan bimbingan tambahan.',
  //     'Metode belajar yang digunakan sangat efektif dengan pendekatan three-step learning: pertama, tutor menjelaskan konsep dan teori secara mendalam dengan bahasa yang mudah dipahami; kedua, latihan soal bersama-sama dengan pembahasan detail; ketiga, diskusi kelompok untuk saling membantu menyelesaikan soal-soal sulit.',
  //     'Setiap sesi dihadiri oleh 20-30 mahasiswa yang antusias belajar. Atmosfer belajar yang supportive dan collaborative membuat mahasiswa nyaman untuk bertanya apapun tanpa takut dihakimi. Tutor juga membagikan tips-tips jitu mengerjakan soal UTS berdasarkan pengalaman mereka.',
  //     'Hasil dari program ini sangat positif. Berdasarkan tracking nilai UTS, 75% peserta Study With Us mengalami peningkatan nilai dibanding kuis sebelumnya. Banyak mahasiswa yang menyatakan bahwa mereka lebih paham konsep setelah mengikuti program ini. "Study With Us sangat membantu! Penjelasan dari kakak tutor lebih mudah dipahami dan suasana belajarnya fun," ujar salah satu peserta. Program ini akan terus dilanjutkan untuk persiapan UAS dan semester-semester berikutnya dengan ekspansi mata kuliah yang ditawarkan.'
  //   ],
  //   date: 'Oktober 18, 2024',
  //   author: 'Maya Putri',
  //   category: 'Akademik',
  //   readTime: '6 min',
  //   image: '/images/study-with-us.jpg',
  //   division: 'RE'
  // }
]

export const getFeaturedArticles = () => {
  return newsArticles.filter(article => article.featured).slice(0, 4)
}

export const getArticleById = (id: number) => {
  return newsArticles.find(article => article.id === id)
}

export const getArticlesByDivision = (division: 'HRDO' | 'PR' | 'RE' | 'CnB' | 'all') => {
  if (division === 'all') return newsArticles
  return newsArticles.filter(article => article.division === division)
}