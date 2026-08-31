import { CompanyMilestone } from '../types';

export const COMPANY_PROFILE = {
  name: 'PT Artavel',
  fullNameLegal: 'PT Artavel (Draf — memerlukan konfirmasi Akta Legalitas Manajemen)',
  establishedYear: 2012,
  tagline: 'Solusi Teknologi Informasi Terintegrasi untuk Layanan, Dokumen, Keamanan, dan Infrastruktur',
  positioning: 'Artavel adalah perusahaan solusi teknologi yang mengintegrasikan aplikasi, data, AI, analytics, IoT, keamanan, dan sistem digital untuk pendidikan, retail, pemerintahan, serta enterprise.',
  brandPromise: 'Teknologi yang menata proses kerja, melindungi aset data, dan membantu organisasi memberikan layanan yang lebih jelas, cepat, dan dapat dipercaya.',
  brandEssence: 'Teknologi terintegrasi untuk layanan yang terpercaya.',
  supportingConcept: 'Yang ribet, biar sistem yang bekerja.',
  profileSummary:
    'Melalui semangat tinggi, kreativitas, inovasi, dan komitmen yang kompetitif, Artavel terus mengembangkan kualitas produk dan layanan agar mampu memberikan hasil terbaik bagi pelanggan. Dengan konsep terpadu dan sumber daya manusia yang berpengalaman di bidangnya, Artavel hadir sebagai mitra teknologi yang mendampingi organisasi dari perencanaan, implementasi, pelatihan, sampai pengembangan berkelanjutan.',
  businessFocus: [
    'Membangun kemitraan teknologi yang sinergis dan berkelanjutan.',
    'Solusi manajemen dokumen konvensional dan elektronik beserta seluruh aspek pendukungnya.',
    'Solusi sistem pelayanan perizinan terpadu berbasis dokumen elektronik.',
    'Solusi keamanan, perlindungan data, backup, audit trail, dan kontrol akses.',
    'Pemasangan CCTV, IoT, integrasi jaringan, website, aplikasi web, dan UI/UX.',
    'Konsultasi manajemen kearsipan serta otomasi, digitalisasi, dan alih media dokumen konvensional ke digital.'
  ],
  
  address: {
    street: 'Jl. Lidah Kulon II No.24',
    city: 'Surabaya',
    province: 'Jawa Timur',
    country: 'Indonesia',
    postalCode: '60213',
    verified: true,
    label: 'Alamat resmi PT Artavel'
  },
  contact: {
    email: 'admin@artavel.co.id',
    phone: '+6231 7533334',
    whatsapp: '+6231 7533334',
    website: 'artavel.co.id',
    workingHours: 'Senin - Jumat | 08.00 - 16.00 WIB',
    verified: true
  },
  socialMedia: [
    { platform: 'Facebook', url: '', active: false },
    { platform: 'Instagram', url: 'https://www.instagram.com/artavel.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', active: true },
    { platform: 'TikTok', url: '', active: false },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/artavel', active: true },
    { platform: 'YouTube', url: 'https://youtube.com/@artavelofficial', active: true }
  ],
  vision: {
    text: 'Menjadi perusahaan teknologi informasi yang terpercaya dalam menyediakan solusi dan layanan terintegrasi, berpengalaman dalam penerapan teknologi di berbagai kebutuhan organisasi, serta mampu memberikan nilai tambah yang berkelanjutan bagi kepuasan pelanggan.',
    status: 'Draf — memerlukan persetujuan manajemen'
  },
  mission: [
    'Menyediakan produk dan jasa teknologi informasi yang terintegrasi, aman, andal, dan sesuai kebutuhan pelanggan.',
    'Menerapkan solusi aplikasi, dokumen elektronik, kearsipan, keamanan data, CCTV & IoT, website, dan UI/UX dengan pendekatan yang profesional dan terukur.',
    'Mendampingi pelanggan melalui konsultasi, analisis proses, implementasi, pelatihan, pemeliharaan, dan dukungan berkelanjutan.',
    'Membangun hubungan bisnis yang sinergis, transparan, dan berorientasi pada keberhasilan jangka panjang.',
    'Mengembangkan inovasi layanan secara berkelanjutan agar organisasi pelanggan lebih efektif, efisien, dan siap menghadapi kebutuhan digital berikutnya.'
  ],
  values: [
    { title: 'Terpercaya', description: 'Menjaga integritas, keandalan sistem, dan kerahasiaan data pengguna.' },
    { title: 'Terintegrasi', description: 'Menghubungkan proses yang terpisah menjadi satu alur kerja yang saling menopang.' },
    { title: 'Bertanggung Jawab', description: 'Mendampingi pengguna dari tahap perencanaan hingga sistem dimanfaatkan secara optimal.' },
    { title: 'Adaptif & Kolaboratif', description: 'Terus mendengarkan kebutuhan regulasi daerah dan dinamika pengguna.' }
  ]
};

export const COMPANY_MILESTONES: CompanyMilestone[] = [
  {
    year: '2012',
    title: 'Awal Perjalanan Artavel',
    description: 'Berdiri sebagai pengembang perangkat lunak berfokus pada sistem informasi pelayanan daerah.',
    verified: false
  },
  {
    year: '2016',
    title: 'Pengembangan Ekosistem Smarchlink®',
    description: 'Peluncuran modul terpadu perizinan SIPPADU dan sistem kearsipan digital E-Archive.',
    verified: false
  },
  {
    year: '2020',
    title: 'Inovasi TNDE & Integrasi TTE BSrE',
    description: 'Penerapan modul Tata Naskah Dinas Elektronik terintegrasi Sertifikat Digital nasional BSSN.',
    verified: false
  },
  {
    year: '2024+',
    title: 'Transformasi Pelayanan Publik Berkelanjutan',
    description: 'Modernisasi arsitektur cloud, integrasi OSS RBA, SIMBG PBG, dan pengembangan solusi generasi baru.',
    verified: false
  }
];
