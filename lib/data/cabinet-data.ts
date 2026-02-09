import { cabinetCyberpunk } from './cabinet-cyberpunk'
import { cabinetNoMansSky } from './cabinet-no-mans-sky'
import { cabinetSolarisMembers } from './cabinet-solaris'

export const cabinetInfo = {
  'cyberpunk': {
    name: 'Kabinet Cyberpunk',
    logo: '/assets/img/Himatif-White.png',
    periode: '2023/2024',
    tagline: 'Inovasi Digital Masa Depan',
    description: 'Layaknya cyberpunk yang semakin maju, himatif juga harus mengikuti perkembangan yang semakin maju dan terus beradaptasi dengan perkembangan jaman.',
    visi: 'One for all',
    misi: [
      'Himatif yang inklusif',
      'Himatif yang berkarakter',
      'Himatif yang memiliki peran dan fungsi lebih baik',      
    ],
    members: cabinetCyberpunk,
  },
  'no-mans-sky': {
    name: 'Kabinet No Man\'s Sky',
    logo: '/assets/img/LOGO-NMS.png',
    periode: '2024/2025',
    tagline: 'Menjelajah Tanpa Batas',
    description: 'Mengexplorasi hal-hal yang belum di lakukan di himatif dan menjadikan himatif lebiih berkembang menembus langit.',
    visi: 'Regenerasi disini merujuk pada proses pembaharuan atau penyegaran yang dilakukan untuk memastikan kelangsungan dan efektivitas himatif.',
    misi: [
      'HIMATIF sebagai sarana bagi anggota untuk mengembangkan potensi diri.',
      'Mendorong partisipasi aktif anggota dalam pengambilan Keputusan dan pengelolaan organisasi.',
      'Membangun budaya organisasi HIMATIF yang berlandaskan pada semangat kebersamaan dan kolaborasi.',      
    ],
    members: cabinetNoMansSky,
  },
  'solaris': {
    name: 'Kabinet Solaris',
    logo: '/assets/img/sol.png',
    periode: '2025/2026',
    tagline: 'Bersinar Bersama',
    description: 'Solaris melambangkan cahaya yang tidak pernah padam, begitupun himatif yang harus selalu terang menerangi setiap perjalanan.',
    visi: 'A Responsibility and Professionalism Network In HIMATIF.',
    misi: [
      'Meningkatkan rasa kebersamaan di teknik informatika',
      'Mengoptimalkan fungsionalitas dan sistematika kerja himpunan',
      'Menciptakan sarana kreatif untuk meningkatkan hasrat akademik dan non-akademik di teknik informatika',      
    ],
    members: cabinetSolarisMembers,
  },
}

export type CabinetSlug = keyof typeof cabinetInfo