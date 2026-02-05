import { cabinetCyberpunk } from './cabinet-cyberpunk'
import { cabinetNoMansSky } from './cabinet-no-mans-sky'
import { cabinetSolarisMembers } from './cabinet-solaris'

export const cabinetInfo = {
  'cyberpunk': {
    name: 'Kabinet Cyberpunk',
    logo: '/assets/img/sol.png',
    periode: '2024/2025',
    tagline: 'Inovasi Digital Masa Depan',
    description: 'Kabinet Cyberpunk hadir dengan visi membawa HIMATIF USB ke era digital yang lebih maju melalui berbagai program inovatif dan pengembangan teknologi informasi.',
    visi: 'Mewujudkan HIMATIF USB sebagai wadah organisasi yang inovatif, kreatif, dan profesional dalam menghadapi era digital dengan memanfaatkan teknologi informasi untuk kemajuan bersama.',
    misi: [
      'Meningkatkan kualitas sumber daya manusia melalui pelatihan dan workshop teknologi',
      'Membangun ekosistem digital yang mendukung kreativitas dan inovasi mahasiswa',
      'Menjalin kerjasama dengan industri teknologi untuk membuka peluang karir',
      'Mengembangkan platform digital untuk memfasilitasi komunikasi dan kolaborasi',
      'Menciptakan budaya belajar yang berkelanjutan di bidang teknologi informasi',
    ],
    members: cabinetCyberpunk,
  },
  'no-mans-sky': {
    name: 'Kabinet No Man\'s Sky',
    logo: '/assets/img/sol.png',
    periode: '2025/2026',
    tagline: 'Menjelajah Tanpa Batas',
    description: 'Kabinet No Man\'s Sky berfokus pada eksplorasi dan pengembangan potensi mahasiswa dalam berbagai bidang teknologi dengan semangat penjelajahan tanpa batas.',
    visi: 'Menjadikan HIMATIF USB sebagai organisasi yang adaptif, exploratif, dan inklusif dalam mengembangkan potensi mahasiswa tanpa batas untuk mencapai prestasi gemilang.',
    misi: [
      'Mengeksplorasi berbagai bidang teknologi informasi melalui riset dan pengembangan',
      'Memfasilitasi mahasiswa untuk mengembangkan skill dan kompetensi sesuai minat',
      'Menciptakan ruang kolaborasi yang terbuka untuk semua anggota',
      'Mengadakan kompetisi dan event untuk mengasah kemampuan mahasiswa',
      'Membangun jaringan alumni yang kuat untuk mendukung pengembangan karir',
    ],
    members: cabinetNoMansSky,
  },
  'solaris': {
    name: 'Kabinet Solaris',
    logo: '/assets/img/sol.png',
    periode: '2025/2026',
    tagline: 'Bersinar Bersama',
    description: 'Kabinet Solaris berkomitmen untuk mencerahkan dan memberdayakan seluruh anggota HIMATIF USB melalui kolaborasi dan inovasi yang berkelanjutan.',
    visi: 'Menjadikan HIMATIF USB sebagai organisasi yang solid, inspiratif, dan berprestasi dengan mencerahkan setiap anggota untuk bersinar dan berkontribusi maksimal.',
    misi: [
      'Membangun solidaritas dan kekeluargaan yang kuat antar anggota HIMATIF',
      'Menyelenggarakan program yang inspiratif dan bermanfaat bagi mahasiswa',
      'Meningkatkan prestasi akademik dan non-akademik di tingkat lokal dan nasional',
      'Mengembangkan soft skill dan hard skill melalui berbagai kegiatan pelatihan',
      'Menciptakan lingkungan yang positif dan supportif untuk pertumbuhan bersama',
    ],
    members: cabinetSolarisMembers,
  },
}

export type CabinetSlug = keyof typeof cabinetInfo