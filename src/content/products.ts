import type { Product, SolutionCategory } from '../types';

const OTOSCHOOL_DEMO_URL = process.env.NEXT_PUBLIC_OTOSCHOOL_DEMO_URL || '';
const OTOPOS_DEMO_URL = process.env.NEXT_PUBLIC_OTOPOS_DEMO_URL || '';

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'ai-analytics-monitoring',
    slug: 'ai-analytics-smart-monitoring',
    title: 'AI, Analytics & Smart Monitoring',
    description:
      'Solusi berbasis AI, computer vision, IoT, data analytics, dan geospasial untuk monitoring real-time dan keputusan berbasis data.',
    iconName: 'Camera',
    accentColor: 'blue',
    path: '/solusi#ai-analytics-smart-monitoring',
    relatedProductIds: ['smartmap-gis-analytics', 'ai-cctv-computer-vision', 'footfallcam']
  },
  {
    id: 'smart-education',
    slug: 'smart-education',
    title: 'Smart Education',
    description:
      'Ekosistem pendidikan digital untuk sekolah, guru, siswa, orang tua, administrasi, pembelajaran, dan yayasan.',
    iconName: 'GraduationCap',
    accentColor: 'green',
    path: '/solusi#smart-education',
    relatedProductIds: ['otoschool']
  },
  {
    id: 'retail-fnb',
    slug: 'retail-fnb',
    title: 'Retail & F&B',
    description:
      'Solusi transaksi, operasional outlet, inventory, workforce, loyalty, keuangan, dan analytics bisnis retail/F&B.',
    iconName: 'ShoppingCart',
    accentColor: 'green',
    path: '/solusi#retail-fnb',
    relatedProductIds: ['otopos-fnb']
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security',
    title: 'Cyber Security',
    description:
      'Perlindungan pengguna, perangkat, endpoint, email, awareness training, EDR, dan opsi monitoring keamanan berbasis partner technology.',
    iconName: 'ShieldAlert',
    accentColor: 'blue',
    path: '/solusi/cyber-security',
    relatedProductIds: ['opentext-cybersecurity']
  },
  {
    id: 'digital-government-enterprise',
    slug: 'digital-government-enterprise',
    title: 'Digital Government & Enterprise',
    description:
      'Payung solusi government dan enterprise untuk layanan publik, perizinan, antrean, dokumen, persuratan, arsip, dan aplikasi operasional.',
    iconName: 'FileCheck2',
    accentColor: 'green',
    path: '/solusi#digital-government-enterprise',
    relatedProductIds: ['smarchlink-sippadu', 'sianter', 'tnde', 'smarchlink-archive']
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'otoschool',
    slug: 'otoschool',
    name: 'otoSchool',
    shortName: 'otoSchool',
    subtitle: 'Sistem Manajemen Sekolah Terpadu',
    categoryId: 'smart-education',
    categoryLabel: 'Smart Education',
    tagline: 'Satu sistem untuk menghubungkan seluruh kebutuhan sekolah dalam satu ekosistem digital.',
    shortDescription:
      'Ekosistem digital sekolah dari website, PPDB online, portal peran, pembelajaran, raport, keuangan, hingga PWA.',
    heroDescription:
      'otoSchool menyatukan website sekolah, PPDB online, ruang kelas digital, raport, tagihan, e-wallet siswa, dan portal untuk admin, guru, siswa, orang tua, serta yayasan dalam satu basis data yang saling terhubung.',
    iconName: 'GraduationCap',
    accentColor: 'green',
    ownership: 'artavel-product',
    technologyTags: ['AI', 'Analytics', 'Education'],
    statusLabel: 'Siap Demo',
    detailPath: '/produk/otoschool',
    demoUrl: OTOSCHOOL_DEMO_URL,
    demoConfigKey: 'OTOSCHOOL_DEMO_URL',
    targetUsers: [
      'Yayasan pendidikan',
      'SD, SMP, SMA, dan SMK',
      'Madrasah',
      'Sekolah berasrama atau pesantren',
      'Kepala sekolah',
      'Administrator sekolah',
      'Guru',
      'Siswa',
      'Orang tua atau wali murid'
    ],
    challenges: [
      'Data sekolah tersebar di banyak aplikasi, spreadsheet, dan berkas manual.',
      'Nilai, administrasi, absensi, dan keuangan tidak saling terhubung.',
      'Informasi perkembangan siswa terlambat diterima orang tua.',
      'PPDB masih mengandalkan formulir kertas, antrean, dan rekap manual panitia.',
      'Guru menghabiskan banyak waktu untuk rekap nilai, absensi, dan tugas administratif.',
      'Pimpinan sekolah dan yayasan sulit melihat data lintas unit secara menyeluruh.'
    ],
    outcomes: [
      'Data pendaftaran, akademik, keuangan, dan aktivitas sekolah mengalir ke satu basis data.',
      'Orang tua dapat memantau nilai, kehadiran, tugas, jadwal, tagihan, dan e-wallet anak dari satu akun.',
      'Guru memiliki ruang kerja digital untuk modul belajar, tugas, ujian, dan penilaian.',
      'Raport digital tersusun dari data nilai, kehadiran, ekstrakurikuler, dan catatan wali kelas.',
      'Yayasan dapat mengelola banyak unit atau jenjang dari satu login dengan hak akses sesuai peran.'
    ],
    modules: [
      {
        id: 'website-sekolah',
        title: 'Website Sekolah',
        description:
          'Profil sekolah, program unggulan, artikel parenting, dan berita dikelola dari satu panel admin.'
      },
      {
        id: 'ppdb-online',
        title: 'PPDB Online',
        description:
          'Alur pendaftaran digital dari akun orang tua, data anak, kesehatan, dokumen, hingga pembayaran.',
        details: [
          'Mendukung banyak jalur pendaftaran dengan biaya berbeda per jalur.',
          'Siswa lanjut jenjang dapat terhubung ke data lama tanpa daftar ulang dari awal.'
        ]
      },
      {
        id: 'portal-admin-yayasan',
        title: 'Portal Administrator & Yayasan',
        description:
          'Admin dan yayasan melihat data operasional lintas unit sesuai hak akses dan kebutuhan perannya.'
      },
      {
        id: 'portal-guru',
        title: 'Portal Guru',
        description:
          'Guru mengelola materi, tugas, jadwal, ujian, penilaian, dan progres belajar siswa.'
      },
      {
        id: 'portal-siswa',
        title: 'Portal Siswa',
        description:
          'Siswa mengakses jadwal, modul belajar, tugas online, ujian, kalender, dan informasi sekolah.'
      },
      {
        id: 'portal-orang-tua',
        title: 'Portal Orang Tua',
        description:
          'Satu akun orang tua dapat memantau beberapa anak dan menerima informasi penting secara terpusat.'
      },
      {
        id: 'pembelajaran-digital',
        title: 'Pembelajaran Digital',
        description:
          'Ruang kelas digital untuk materi, progres belajar, tugas, dan aktivitas pembelajaran harian.'
      },
      {
        id: 'modul-belajar',
        title: 'Modul Belajar',
        description:
          'Materi tersusun per mata pelajaran dengan pelacakan progres otomatis per siswa dan kelas.'
      },
      {
        id: 'tugas-online',
        title: 'Tugas Online',
        description:
          'Guru mengunggah tugas, siswa mengumpulkan dari perangkat masing-masing, lalu penilaian dibantu rubrik.'
      },
      {
        id: 'smart-exam',
        title: 'SmartExam',
        description:
          'Ujian online dengan mode layar penuh wajib, deteksi berpindah tab, koreksi otomatis untuk pilihan ganda, dan koreksi manual untuk esai.'
      },
      {
        id: 'bank-soal',
        title: 'Bank Soal',
        description:
          'Repositori soal yang dapat digunakan guru untuk menyusun ujian dan menjaga materi evaluasi tetap tertata.'
      },
      {
        id: 'ai-draft-soal',
        title: 'AI Penyusunan Draf Soal',
        description:
          'AI membantu menyusun variasi draf soal, kunci jawaban, dan pembahasan; guru tetap wajib mereview dan menyetujui sebelum soal masuk bank resmi.'
      },
      {
        id: 'penilaian',
        title: 'Penilaian',
        description:
          'Nilai akhir dapat dihitung berbobot dari komponen harian, UTS, dan UAS sesuai konfigurasi sekolah.'
      },
      {
        id: 'raport-digital',
        title: 'Raport Digital',
        description:
          'Raport menyatukan nilai per mapel, kehadiran, ekstrakurikuler, dan catatan wali kelas dari data yang sudah tersimpan.'
      },
      {
        id: 'absensi-kehadiran',
        title: 'Absensi / Kehadiran',
        description:
          'Presensi siswa berbasis QR code untuk kebutuhan harian maupun per jam pelajaran.'
      },
      {
        id: 'kalender-akademik',
        title: 'Kalender Akademik',
        description:
          'Kalender satu pintu untuk libur, ujian, kegiatan sekolah, ekstrakurikuler, kategori warna, dan reminder.'
      },
      {
        id: 'ekstrakurikuler',
        title: 'Ekstrakurikuler',
        description:
          'Siswa memilih prioritas ekstrakurikuler, kuota dikelola sistem, absensi latihan masuk ke raport, dan jadwal tersinkron ke kalender.'
      },
      {
        id: 'keuangan-sekolah',
        title: 'Keuangan Sekolah',
        description:
          'Tagihan SPP dan biaya lain dapat dibuat sesuai tarif per jenjang atau kelas, dilengkapi laporan tunggakan dan rekonsiliasi.'
      },
      {
        id: 'tagihan',
        title: 'Tagihan',
        description:
          'Informasi tagihan sekolah terhubung ke akun orang tua sehingga proses pemantauan pembayaran lebih tertata.'
      },
      {
        id: 'e-wallet-siswa',
        title: 'E-Wallet Siswa',
        description:
          'Orang tua top-up, bendahara melakukan verifikasi, dan siswa dapat bertransaksi cashless di kantin atau koperasi.'
      },
      {
        id: 'kesehatan-siswa',
        title: 'Kesehatan Siswa',
        description:
          'Kunjungan klinik, penanganan, rujukan, stok obat, dan riwayat tumbuh kembang siswa tercatat per periode.'
      },
      {
        id: 'sarana-prasarana',
        title: 'Sarana & Prasarana',
        description:
          'Data aset sekolah, jadwal servis, biaya, dan reminder jatuh tempo membantu operasional fasilitas lebih tertata.'
      },
      {
        id: 'asset-management',
        title: 'Asset Management',
        description:
          'Setiap aset dapat dicatat dengan QR code untuk pengecekan cepat dan riwayat servis yang terdokumentasi.'
      },
      {
        id: 'multi-jenjang-unit',
        title: 'Multi-Jenjang / Multi-Unit',
        description:
          'Satu yayasan dapat mengelola banyak unit atau jenjang seperti SD, SMP, dan SMA dari satu ekosistem.'
      },
      {
        id: 'multi-role-user',
        title: 'Multi-Role User',
        description:
          'Lebih dari 14 peran pengguna dapat dibedakan sehingga tiap peran hanya melihat menu yang relevan.'
      },
      {
        id: 'progressive-web-app',
        title: 'Progressive Web App',
        description:
          'Aplikasi dapat di-install di ponsel seperti aplikasi native tanpa distribusi melalui app store.'
      }
    ],
    differentiators: [
      {
        id: 'single-database',
        title: 'Satu basis data sekolah',
        description:
          'Pendaftaran, akademik, keuangan, dan portal peran memakai sumber data yang sama sehingga tidak perlu rekap berulang.'
      },
      {
        id: 'parent-realtime',
        title: 'Informasi orang tua lebih cepat',
        description:
          'Perkembangan anak tidak menunggu pembagian raport karena nilai, kehadiran, tugas, dan tagihan bisa dipantau dari portal.'
      },
      {
        id: 'ai-with-teacher-review',
        title: 'AI tetap di bawah review guru',
        description:
          'AI hanya membantu draf soal; keputusan akhir tetap berada pada guru sebelum soal dipakai.'
      }
    ],
    showcase: [
      {
        id: 'website-ppdb',
        title: 'Website & PPDB Online',
        description:
          'Wajah publik sekolah dan alur pendaftaran siswa baru dalam satu pengalaman digital.',
        imageSrc: '/products/otoschool/website-ppdb.png',
        imageAlt: 'Screenshot website sekolah dan PPDB online otoSchool dari brosur'
      },
      {
        id: 'portal-orang-tua',
        title: 'Portal Orang Tua',
        description:
          'Satu akun untuk memantau beberapa anak, nilai, kehadiran, tugas, jadwal, tagihan, dan e-wallet.',
        imageSrc: '/products/otoschool/portal-orang-tua.png',
        imageAlt: 'Screenshot portal orang tua otoSchool dari brosur'
      }
    ],
    integrations: [
      'Pembayaran sekolah dan verifikasi bendahara',
      'Notifikasi orang tua sesuai kanal yang diaktifkan',
      'QR code untuk presensi dan pengecekan aset',
      'Portal publik sekolah dan PPDB online'
    ],
    securityFeatures: [
      'Hak akses dibedakan berdasarkan peran pengguna.',
      'Setiap peran hanya melihat menu dan data yang relevan.',
      'Draf soal dari AI wajib direview guru sebelum digunakan.',
      'Demo harus memakai data fiktif dan lingkungan terisolasi.'
    ],
    faqs: [
      {
        id: 'faq-otoschool-demo',
        question: 'Apakah otoSchool sudah bisa didemokan?',
        answer:
          'Ya. Materi brosur menyebut seluruh fitur dalam proposal sudah berjalan nyata dan dapat ditinjau melalui sesi demo.'
      },
      {
        id: 'faq-otoschool-multi-unit',
        question: 'Apakah otoSchool bisa dipakai untuk yayasan dengan beberapa unit sekolah?',
        answer:
          'Bisa. otoSchool mendukung struktur multi-jenjang atau multi-unit sehingga yayasan dapat memantau unit berbeda dari satu login sesuai hak akses.'
      },
      {
        id: 'faq-otoschool-ai',
        question: 'Apakah AI menggantikan guru dalam penyusunan soal?',
        answer:
          'Tidak. AI hanya membantu membuat draf soal, kunci jawaban, dan pembahasan. Guru tetap wajib mereview dan menyetujui sebelum soal masuk bank resmi.'
      },
      {
        id: 'faq-otoschool-pwa',
        question: 'Apakah otoSchool harus diunduh dari app store?',
        answer:
          'Tidak harus. Brosur menyebut otoSchool mendukung Progressive Web App sehingga dapat di-install di ponsel seperti aplikasi native.'
      }
    ],
    metadata: {
      title: 'otoSchool - Sistem Manajemen Sekolah Terpadu | PT Artavel',
      description:
        'otoSchool adalah sistem manajemen sekolah terpadu untuk PPDB online, portal guru, siswa, orang tua, pembelajaran digital, raport, keuangan, dan operasional sekolah.'
    }
  },
  {
    id: 'otopos-fnb',
    slug: 'otopos-fnb',
    name: 'otoPOS F&B',
    shortName: 'otoPOS',
    subtitle: 'POS & Operasional F&B Terintegrasi',
    categoryId: 'retail-fnb',
    categoryLabel: 'Retail & F&B',
    tagline:
      'Bukan hanya melihat berapa yang terjual, tetapi memahami siapa yang menjual dan bagaimana performanya.',
    shortDescription:
      'POS dan operasional F&B untuk penjualan multi-channel, multi-cabang, absensi wajah, inventory resep, loyalty, keuangan, aset, dan performance analytics.',
    heroDescription:
      'otoPOS F&B menghubungkan transaksi kasir dengan data karyawan dan operasional outlet. Owner dan manajer dapat melihat penjualan, jam kerja aktual, ketepatan waktu, inventory, loyalty, biaya, aset, dan performa cabang dari satu ekosistem.',
    iconName: 'ShoppingCart',
    accentColor: 'green',
    ownership: 'artavel-product',
    technologyTags: ['Analytics', 'Retail', 'Smart Workforce'],
    statusLabel: 'Siap Demo',
    detailPath: '/produk/otopos-fnb',
    demoUrl: OTOPOS_DEMO_URL,
    demoConfigKey: 'OTOPOS_DEMO_URL',
    targetUsers: [
      'Kafe',
      'Restoran',
      'Bisnis F&B',
      'Outlet multi-cabang',
      'Owner F&B',
      'Manager outlet',
      'Kasir',
      'Tim operasional'
    ],
    challenges: [
      'Data penjualan dan data karyawan berjalan di sistem yang terpisah.',
      'Owner sulit melihat hubungan omzet dengan jam kerja aktual dan ketepatan waktu karyawan.',
      'Skenario dine-in, take-away, delivery, pembayaran, meja, modifier, dan tiket dapur tersebar di alat berbeda.',
      'Inventory bahan baku, resep, modifier, dan stok per cabang sulit dipantau secara rapi.',
      'Biaya operasional, laporan laba-rugi, dan perawatan aset masih sering direkap manual.',
      'Program member dan poin belum terhubung langsung dengan transaksi kasir.'
    ],
    outcomes: [
      'Transaksi walk-in, dine-in, take-away, delivery, pembayaran, meja, modifier, struk, dan tiket dapur dikelola dari satu POS.',
      'Absensi wajah dapat berjalan dari satu kios per cabang dengan deteksi telat, pulang cepat, anti-spoof, review manual, dan audit trail.',
      'Performa kasir dapat dikaitkan dengan jam kerja aktual serta catatan ketepatan waktu.',
      'Inventory per unit, resep, bahan baku, modifier, dan cabang menjadi lebih mudah dikontrol.',
      'Biaya operasional, laba-rugi, loyalty member, dan jadwal perawatan aset dapat dipantau lebih tertata.'
    ],
    modules: [
      {
        id: 'kasir-penjualan',
        title: '01 Kasir & Penjualan',
        description:
          'Satu titik kasir untuk dine-in, take-away, delivery, channel aplikasi ojek online, meja, pembayaran, modifier, struk, dan tiket dapur.',
        details: [
          'Mendukung multi-cabang dari satu panel kontrol.',
          'Channel penjualan mencakup walk-in, dine-in, take-away, delivery, GoFood, GrabFood, dan ShopeeFood.',
          'Pembayaran mencakup cash, QRIS, debit/kredit, dan e-wallet.',
          'Modifier wajib atau opsional dapat memengaruhi harga otomatis.'
        ]
      },
      {
        id: 'karyawan-absensi',
        title: '02 Karyawan & Absensi Cerdas',
        description:
          'Absensi wajah 1:N dari satu kios per cabang dengan jadwal shift, deteksi telat, pulang cepat, anti-spoof, review manual, dan audit trail.',
        details: [
          'Karyawan tidak perlu absen dari ponsel masing-masing.',
          'Anti-spoof menolak foto dari layar ponsel.',
          'Kasus meragukan masuk antrean review manual approve/reject.',
          'Jadwal shift mingguan dapat dibuat berulang.'
        ]
      },
      {
        id: 'loyalitas-member',
        title: '03 Loyalitas Member',
        description:
          'Pelanggan login tanpa password, mengumpulkan poin tiap transaksi, melihat promosi, dan menukar poin dengan kode klaim unik.',
        details: [
          'Login pelanggan memakai OTP Email atau WhatsApp jika kanal diaktifkan.',
          'Order online mandiri dapat dibayar dengan QRIS dan kode unik per pesanan.',
          'Poin transaksi member tercatat dan dapat diverifikasi di kasir.'
        ]
      },
      {
        id: 'inventori-cerdas',
        title: '04 Inventori Cerdas',
        description:
          'Kontrol stok tidak hanya per unit, tetapi juga bahan baku, resep, add-on atau modifier, serta stok terpisah per cabang.',
        details: [
          'Produk sederhana dapat memotong stok per unit.',
          'Produk berbasis resep memotong bahan baku sesuai komposisi.',
          'Resep berlaku sampai add-on atau modifier, bukan hanya produk utama.'
        ]
      },
      {
        id: 'keuangan',
        title: '05 Keuangan',
        description:
          'Pencatatan biaya operasional, laporan laba-rugi per periode, dan perhitungan pajak terpungut sesuai konfigurasi.',
        details: [
          'Biaya operasional dapat dicatat per cabang dan kategori.',
          'Laporan laba-rugi tersedia untuk periode harian, mingguan, bulanan, atau tahunan.'
        ]
      },
      {
        id: 'perawatan-aset',
        title: '06 Perawatan Aset',
        description:
          'Jadwal servis alat, status jatuh tempo di panel admin, dan riwayat servis per aset tersimpan rapi.',
        details: [
          'Interval servis per alat dapat disiapkan otomatis.',
          'Status jatuh tempo atau segera jatuh tempo terlihat sebagai badge admin.'
        ]
      },
      {
        id: 'dashboard-performa',
        title: '07 Dashboard Performa',
        description:
          'Dashboard menggabungkan omzet, jam kerja, ketepatan waktu, dan performa kasir dalam satu layar.',
        details: [
          'Omzet dapat dibaca bersama jam kerja aktual, bukan sebagai angka penjualan mentah saja.',
          'Catatan telat dan data penjualan kasir ditampilkan dalam konteks yang sama.'
        ]
      }
    ],
    differentiators: [
      {
        id: 'pos-workforce',
        title: 'Kasir + workforce dalam satu sistem',
        description:
          'Data penjualan dan data karyawan tidak berjalan terpisah, sehingga performa kasir dapat dibaca bersama jam kerja dan ketepatan waktu.'
      },
      {
        id: 'face-kiosk',
        title: 'Absensi wajah dari kios cabang',
        description:
          'Satu kios per cabang menggantikan absensi via ponsel masing-masing dan didukung anti-spoof serta review manual.'
      },
      {
        id: 'recipe-inventory',
        title: 'Inventory berbasis resep',
        description:
          'Stok bahan baku dapat terpotong sesuai resep, termasuk add-on atau modifier, dengan pemisahan stok per cabang.'
      }
    ],
    showcase: [
      {
        id: 'kasir-penjualan',
        title: 'Kasir & Penjualan',
        description:
          'Skenario dine-in, take-away, delivery, pembayaran, modifier, struk, dan tiket dapur.',
        imageSrc: '/products/otopos-fnb/kasir-penjualan.png',
        imageAlt: 'Visual modul kasir dan penjualan otoPOS F&B dari brosur'
      },
      {
        id: 'karyawan-absensi',
        title: 'Karyawan & Absensi',
        description:
          'Absensi wajah dari satu kios cabang dengan anti-spoof, shift, review manual, dan audit trail.',
        imageSrc: '/products/otopos-fnb/karyawan-absensi.png',
        imageAlt: 'Visual modul karyawan dan absensi otoPOS F&B dari brosur'
      }
    ],
    integrations: [
      'Cash, QRIS, debit/kredit, dan e-wallet',
      'GoFood, GrabFood, dan ShopeeFood',
      'Printer struk dan tiket dapur per stasiun',
      'OTP Email atau WhatsApp untuk pelanggan jika diaktifkan',
      'QRIS untuk order online mandiri'
    ],
    securityFeatures: [
      'Anti-spoof absensi wajah untuk menolak foto dari layar ponsel.',
      'Antrean review manual dengan keputusan approve/reject dan jejak audit.',
      'Retensi foto otomatis untuk membantu menjaga privasi.',
      'Demo harus menggunakan data dummy dan lingkungan terisolasi.'
    ],
    faqs: [
      {
        id: 'faq-otopos-multibranch',
        question: 'Apakah otoPOS F&B mendukung banyak cabang?',
        answer:
          'Ya. Brosur menyebut otoPOS F&B mendukung multi-cabang dari satu panel kontrol.'
      },
      {
        id: 'faq-otopos-hr',
        question: 'Apa yang membedakan otoPOS F&B dari kasir biasa?',
        answer:
          'Diferensiasi utamanya adalah kasir dan workforce berada dalam satu sistem, sehingga data penjualan dapat dibaca bersama jam kerja aktual, ketepatan waktu, dan performa kasir.'
      },
      {
        id: 'faq-otopos-inventory',
        question: 'Apakah inventory mendukung bahan baku dan resep?',
        answer:
          'Ya. Inventory otoPOS F&B mendukung stok per unit, bahan baku berbasis resep, add-on atau modifier, dan stok terpisah per cabang.'
      },
      {
        id: 'faq-otopos-delivery',
        question: 'Apakah otoPOS F&B mendukung channel delivery?',
        answer:
          'Ya. Materi brosur mencantumkan delivery melalui GoFood, GrabFood, dan ShopeeFood sebagai bagian dari channel penjualan.'
      }
    ],
    metadata: {
      title: 'otoPOS F&B - Sistem Kasir & Operasional F&B | PT Artavel',
      description:
        'otoPOS F&B adalah sistem kasir dan operasional F&B yang menyatukan penjualan multi-channel, absensi wajah, inventory resep, loyalty, keuangan, aset, dan dashboard performa.'
    }
  },
  {
    id: 'smartmap-gis-analytics',
    slug: 'smartmap-gis-analytics',
    name: 'SmartMap & GIS Analytics',
    shortName: 'SmartMap',
    subtitle: 'Smart Mapping, WebGIS & Location Analytics',
    categoryId: 'ai-analytics-monitoring',
    categoryLabel: 'AI, Analytics & Smart Monitoring',
    tagline:
      'Visualisasi dan analitik berbasis peta untuk memahami lokasi, objek, potensi wilayah, serta aktivitas lapangan secara lebih terukur.',
    shortDescription:
      'Solusi GIS dan location analytics untuk PBB Online berbasis map, JobMAP, VirtualMAP, WebGIS, peta potensi, dan monitoring berbasis lokasi.',
    heroDescription:
      'SmartMap & GIS Analytics membantu organisasi membaca data berbasis lokasi melalui peta digital. Materi Artavel menampilkan PBB Online terintegrasi map, JobMAP, VirtualMAP, WebGIS, manajemen peta berbasis web/client, peta potensi, dan visualisasi objek pajak berbasis area.',
    iconName: 'Globe2',
    accentColor: 'blue',
    ownership: 'artavel-solution',
    technologyTags: ['GIS', 'Analytics', 'SmartMap'],
    detailPath: '/produk/smartmap-gis-analytics',
    targetUsers: [
      'Bapenda atau badan pajak daerah',
      'Dinas teknis yang membutuhkan data spasial',
      'Pemerintah kabupaten/kota',
      'Tim pemetaan dan survey lapangan',
      'Pimpinan organisasi yang membutuhkan visualisasi wilayah',
      'Tim pengambil kebijakan berbasis lokasi'
    ],
    challenges: [
      'Data objek, potensi wilayah, dan aktivitas lapangan sulit dibaca jika hanya berbentuk tabel.',
      'Pimpinan membutuhkan tampilan peta untuk memahami sebaran objek dan status wilayah secara cepat.',
      'Proses PBB, mutasi, pemecahan, penggabungan, dan pemantauan objek membutuhkan konteks lokasi yang jelas.',
      'Penugasan lapangan membutuhkan koordinasi berbasis titik, area, dan status pekerjaan.',
      'Analisis ekonomi, sosial, atau fiskal sulit dilakukan tanpa visualisasi geografis yang rapi.'
    ],
    outcomes: [
      'Data lokasi, objek, dan potensi wilayah dapat dibaca melalui peta digital yang lebih mudah dipahami.',
      'Tim lapangan dan pimpinan memiliki konteks area yang sama saat melakukan monitoring.',
      'Layanan PBB Online, VirtualMAP, JobMAP, dan WebGIS dapat diposisikan sebagai satu ekosistem location analytics.',
      'Peta potensi membantu organisasi melihat prioritas wilayah tanpa membaca data tabel satu per satu.',
      'Monitoring berbasis lokasi menjadi lebih terukur dan mudah dipresentasikan.'
    ],
    modules: [
      {
        id: 'smartmap',
        title: 'SmartMap / Peta Digital',
        description:
          'Lapisan peta untuk membaca objek, potensi, status, dan informasi wilayah secara visual.'
      },
      {
        id: 'webgis',
        title: 'WebGIS',
        description:
          'Peta berbasis web untuk menampilkan data spasial, area, layer, dan informasi detail objek.'
      },
      {
        id: 'virtualmap',
        title: 'VirtualMAP',
        description:
          'Aplikasi peta digital untuk melihat detail objek berbasis lokasi, termasuk konteks area dan data terkait.'
      },
      {
        id: 'jobmap',
        title: 'JobMAP',
        description:
          'Aplikasi penugasan berbasis peta untuk membantu koordinasi pekerjaan lapangan dan pemantauan titik kerja.'
      },
      {
        id: 'pbb-online-map',
        title: 'PBB Online Berbasis Map',
        description:
          'Layanan PBB yang terhubung dengan map untuk kebutuhan mutasi penuh, pecah, gabung, dan visualisasi objek.'
      },
      {
        id: 'peta-potensi',
        title: 'Peta Potensi',
        description:
          'Visualisasi potensi wilayah dan objek sehingga analisis area tidak hanya bergantung pada laporan tabular.'
      },
      {
        id: 'location-analytics',
        title: 'Location Analytics',
        description:
          'Analisis berbasis lokasi untuk membantu membaca sebaran objek, kondisi geografis, dan prioritas area.'
      },
      {
        id: 'map-monitoring',
        title: 'Monitoring Berbasis Lokasi',
        description:
          'Pemantauan aktivitas lapangan atau objek wilayah melalui data titik, polygon, status, dan detail atribut.'
      }
    ],
    differentiators: [
      {
        id: 'map-first',
        title: 'Data lebih mudah dipahami melalui peta',
        description:
          'Objek dan potensi wilayah dapat dilihat dalam konteks lokasi, bukan hanya tabel dan daftar.'
      },
      {
        id: 'government-context',
        title: 'Relevan untuk pajak daerah dan layanan wilayah',
        description:
          'Materi Artavel menempatkan JobMAP, VirtualMAP, WebGIS, dan PBB berbasis map dalam konteks manajemen pajak daerah terpadu.'
      },
      {
        id: 'analytics-without-ai-washing',
        title: 'Analytics berbasis GIS yang kredibel',
        description:
          'Halaman ini menggunakan istilah analytics dan smart mapping; klaim AI tidak digunakan untuk mapping karena belum menjadi fitur yang terverifikasi.'
      }
    ],
    showcase: [
      {
        id: 'virtualmap-positioning',
        title: 'VirtualMAP untuk Potensi Wilayah',
        description:
          'Materi video menjelaskan VirtualMAP untuk mengidentifikasi dan memantau potensi pajak per area.',
        imageSrc: '/products/smartmap-gis-analytics/virtualmap-positioning.png',
        imageAlt: 'Frame video VirtualMAP tentang pemantauan potensi pajak per area'
      },
      {
        id: 'virtualmap-parcel-detail',
        title: 'Detail Objek Berbasis Peta',
        description:
          'Tampilan peta parcel dengan detail objek, status, dan atribut lokasi.',
        imageSrc: '/products/smartmap-gis-analytics/virtualmap-parcel-detail.png',
        imageAlt: 'Frame video VirtualMAP dengan detail objek pajak berbasis peta'
      }
    ],
    integrations: [
      'Data objek berbasis lokasi',
      'Layer peta dan atribut wilayah',
      'WebGIS dan peta berbasis web/client',
      'Layanan PBB Online',
      'Kebutuhan integrasi internal pemerintah daerah'
    ],
    securityFeatures: [
      'Akses data peta dan atribut mengikuti hak akses per peran.',
      'Data demo dan showcase tidak menggunakan data operasional rahasia.',
      'Klaim integrasi final mengikuti ruang lingkup implementasi yang disepakati.',
      'Audit dan logging dapat disiapkan sesuai kebutuhan organisasi.'
    ],
    faqs: [
      {
        id: 'faq-smartmap-product-name',
        question: 'Apakah SmartMap adalah nama produk resmi terpisah?',
        answer:
          'SmartMap digunakan sebagai istilah public-facing untuk solusi smart mapping dan location analytics. Nama resmi yang muncul di materi Artavel seperti JobMAP, VirtualMAP, WebGIS, dan PBB berbasis map tetap dipertahankan.'
      },
      {
        id: 'faq-smartmap-ai',
        question: 'Apakah solusi mapping ini menggunakan AI?',
        answer:
          'Halaman ini tidak mengklaim AI untuk mapping. Positioning yang digunakan adalah GIS, WebGIS, Smart Mapping, dan Location Analytics sesuai materi yang tersedia.'
      },
      {
        id: 'faq-smartmap-sector',
        question: 'Apakah SmartMap hanya untuk pajak daerah?',
        answer:
          'Materi sumber paling kuat berada pada konteks pajak daerah. Namun pendekatan GIS dan location analytics dapat dibahas untuk kebutuhan lain yang memiliki objek, lokasi, area, atau aktivitas lapangan.'
      }
    ],
    metadata: {
      title: 'SmartMap & GIS Analytics | PT Artavel',
      description:
        'SmartMap & GIS Analytics dari Artavel menampilkan JobMAP, VirtualMAP, WebGIS, PBB Online berbasis map, peta potensi, dan monitoring berbasis lokasi.'
    }
  },
  {
    id: 'ai-cctv-computer-vision',
    slug: 'ai-cctv-computer-vision',
    name: 'AI CCTV & Computer Vision',
    shortName: 'AI CCTV',
    subtitle: 'CCTV, AI, IoT & Computer Vision Monitoring',
    categoryId: 'ai-analytics-monitoring',
    categoryLabel: 'AI, Analytics & Smart Monitoring',
    tagline:
      'Kamera tidak hanya merekam, tetapi menghasilkan data yang dapat digunakan untuk monitoring dan analisis operasional.',
    shortDescription:
      'Solusi camera dan IoT untuk people counting, people detection, vehicle counting, parking zone monitoring, license plate recognition, dan speed detection.',
    heroDescription:
      'AI CCTV & Computer Vision membantu organisasi mengubah kamera dan perangkat IoT menjadi sumber data operasional. Materi Artavel menampilkan people counting and detection, vehicle counting untuk mobil, bus, truk, motor, parking zone monitoring, vehicle license plate recognition, dan vehicle speed detection.',
    iconName: 'Camera',
    accentColor: 'blue',
    ownership: 'artavel-solution',
    technologyTags: ['AI', 'Computer Vision', 'IoT'],
    detailPath: '/produk/ai-cctv-computer-vision',
    targetUsers: [
      'Pengelola gedung dan fasilitas publik',
      'Retail, mall, dan pusat keramaian',
      'Area parkir dan kawasan operasional',
      'Instansi yang membutuhkan monitoring CCTV berbasis data',
      'Tim keamanan dan operasional',
      'Manajemen yang membutuhkan insight dari kamera'
    ],
    challenges: [
      'CCTV hanya digunakan sebagai rekaman pasif dan sulit diubah menjadi data operasional.',
      'Jumlah pengunjung, kendaraan, atau kepadatan area tidak mudah dipantau secara terukur.',
      'Area parkir membutuhkan pemantauan zona dan okupansi yang lebih jelas.',
      'Identifikasi kendaraan dan kecepatan kendaraan membutuhkan teknologi visual yang lebih terstruktur.',
      'Tim operasional sulit mendapatkan insight real-time dari kondisi lapangan.'
    ],
    outcomes: [
      'Kamera dapat membantu menghasilkan data jumlah orang, kendaraan, dan aktivitas area.',
      'People counting dan detection memberikan insight untuk ruang publik, retail, atau fasilitas layanan.',
      'Vehicle counting membantu membaca arus mobil, bus, truk, dan motor.',
      'Parking zone monitoring membantu melihat kondisi area parkir secara visual.',
      'License plate recognition dan speed detection dapat dibahas sesuai kebutuhan implementasi.'
    ],
    modules: [
      {
        id: 'people-counting',
        title: 'People Counting',
        description:
          'Menghitung jumlah orang yang masuk, keluar, atau berada di area tertentu sesuai konfigurasi kamera.'
      },
      {
        id: 'people-detection',
        title: 'People Detection',
        description:
          'Mendeteksi keberadaan orang pada frame kamera untuk kebutuhan monitoring area.'
      },
      {
        id: 'vehicle-counting',
        title: 'Vehicle Counting',
        description:
          'Menghitung kendaraan yang melewati area pantau, termasuk mobil, bus, truk, dan motor sesuai materi Artavel.'
      },
      {
        id: 'parking-zone',
        title: 'Parking Zone Monitoring',
        description:
          'Memantau zona parkir dan okupansi area untuk kebutuhan operasional fasilitas.'
      },
      {
        id: 'license-plate',
        title: 'Vehicle License Plate Recognition',
        description:
          'Membaca plat nomor kendaraan sebagai capability computer vision yang dapat dibahas sesuai kebutuhan.'
      },
      {
        id: 'speed-detection',
        title: 'Vehicle Speed Detection',
        description:
          'Mendeteksi kecepatan kendaraan dalam skenario monitoring yang sesuai.'
      },
      {
        id: 'iot-device',
        title: 'Camera & IoT Device Integration',
        description:
          'Menghubungkan kamera, sensor, dan perangkat monitoring sebagai bagian dari ekosistem smart monitoring.'
      }
    ],
    differentiators: [
      {
        id: 'camera-to-data',
        title: 'CCTV menjadi sumber data',
        description:
          'Fokusnya bukan hanya penyimpanan rekaman, tetapi data jumlah, deteksi, dan kondisi area.'
      },
      {
        id: 'operational-monitoring',
        title: 'Monitoring operasional real-time',
        description:
          'Data visual dapat membantu tim membaca kepadatan, pergerakan kendaraan, dan area yang perlu perhatian.'
      },
      {
        id: 'partner-ready',
        title: 'Terhubung dengan technology solution',
        description:
          'FootfallCam dapat diposisikan sebagai teknologi terkait untuk people counting dan visitor analytics.'
      }
    ],
    showcase: [
      {
        id: 'people-counting-entry',
        title: 'People Counting Area',
        description:
          'Contoh visual people counting dari materi Artavel untuk memantau keluar-masuk pengunjung.',
        imageSrc: '/products/ai-cctv-computer-vision/people-counting-entry.png',
        imageAlt: 'Cuplikan people counting dari materi Artavel'
      },
      {
        id: 'zone-monitoring',
        title: 'Zone Monitoring',
        description:
          'Area pantau dapat ditandai untuk membaca aktivitas dalam zona tertentu.',
        imageSrc: '/products/ai-cctv-computer-vision/zone-monitoring.png',
        imageAlt: 'Cuplikan zone monitoring computer vision dari materi Artavel'
      }
    ],
    integrations: [
      'Kamera CCTV dan perangkat monitoring',
      'IoT sensor sesuai kebutuhan implementasi',
      'Dashboard monitoring',
      'API atau integrasi data internal jika diperlukan',
      'Technology solution terkait seperti FootfallCam'
    ],
    securityFeatures: [
      'Akses dashboard monitoring mengikuti hak akses pengguna.',
      'Demo dan showcase menggunakan materi presentasi, bukan data sensitif operasional.',
      'Kebijakan penyimpanan rekaman dan data visual harus disepakati pada ruang lingkup implementasi.',
      'Integrasi perangkat mengikuti kebijakan jaringan organisasi.'
    ],
    faqs: [
      {
        id: 'faq-cctv-product',
        question: 'Apakah setiap capability computer vision menjadi produk terpisah?',
        answer:
          'Tidak. People counting, vehicle counting, parking monitoring, LPR, dan speed detection diposisikan sebagai capability dari AI CCTV & Computer Vision.'
      },
      {
        id: 'faq-cctv-ai',
        question: 'Kapan istilah AI digunakan pada solusi CCTV?',
        answer:
          'Istilah AI digunakan untuk capability computer vision yang menganalisis objek visual seperti orang, kendaraan, zona, plat nomor, atau kecepatan.'
      },
      {
        id: 'faq-cctv-footfallcam',
        question: 'Apa hubungan solusi ini dengan FootfallCam?',
        answer:
          'FootfallCam adalah partner technology yang relevan untuk people counting dan visitor analytics. FootfallCam tidak diposisikan sebagai produk proprietary Artavel.'
      }
    ],
    metadata: {
      title: 'AI CCTV & Computer Vision | PT Artavel',
      description:
        'AI CCTV & Computer Vision Artavel mencakup people counting, people detection, vehicle counting, parking zone monitoring, LPR, speed detection, dan IoT monitoring.'
    }
  },
  {
    id: 'footfallcam',
    slug: 'footfallcam',
    name: 'FootfallCam',
    shortName: 'FootfallCam',
    subtitle: 'People Counting & Visitor Analytics',
    categoryId: 'ai-analytics-monitoring',
    categoryLabel: 'AI, Analytics & Smart Monitoring',
    tagline:
      'Partner technology untuk people counting, footfall analytics, dan visitor behavior analytics.',
    shortDescription:
      'Technology solution untuk visitor count, visit duration, returning visitor, outside traffic, cross shopping, zone analytics, BI analytics, predictive analytics, centralized counter management, dan API integration.',
    heroDescription:
      'FootfallCam diposisikan sebagai partner technology Artavel untuk people counting dan visitor analytics. Brosur FootfallCam menampilkan kombinasi counter, analytics software, Wi-Fi/video analytics, data metrics, business intelligence analytics, predictive analytics, centralized counter management, dan API integration.',
    iconName: 'Camera',
    accentColor: 'green',
    ownership: 'partner-technology',
    technologyTags: ['Analytics', 'IoT', 'Computer Vision'],
    detailPath: '/produk/footfallcam',
    targetUsers: [
      'Retail chains',
      'Shopping malls',
      'Public space',
      'Museum dan library',
      'Small shops',
      'Area layanan dengan kebutuhan visitor analytics',
      'Manajemen operasional yang membutuhkan data footfall'
    ],
    challenges: [
      'Pengelola lokasi tidak mengetahui jumlah pengunjung secara konsisten.',
      'Durasi kunjungan, repeat visitor, dan traffic di luar lokasi sulit diukur.',
      'Pergerakan antar area atau cross shopping belum terlihat dari laporan kasir biasa.',
      'Manajemen membutuhkan laporan footfall dan visitor behavior yang dapat dibandingkan antar lokasi.',
      'Data visitor perlu diintegrasikan dengan sistem lain untuk analisis lanjutan.'
    ],
    outcomes: [
      'Jumlah pengunjung dan durasi kunjungan dapat dipantau sebagai metrik operasional.',
      'Returning visitor, outside traffic, cross shopping, dan zone analytics dapat membantu membaca perilaku pengunjung.',
      'Business intelligence analytics membantu manajemen melihat pola dan tren pengunjung.',
      'Centralized counter management memudahkan pengelolaan banyak counter dari pusat.',
      'API integration memudahkan pertukaran data dengan sistem lain sesuai kebutuhan.'
    ],
    modules: [
      {
        id: 'visitor-count',
        title: 'Visitor Count',
        description:
          'Mengukur jumlah orang yang masuk ke lokasi sebagai dasar analisis traffic.'
      },
      {
        id: 'visit-duration',
        title: 'Visit Duration',
        description:
          'Mengukur durasi kunjungan untuk memahami lamanya pengunjung berada di lokasi.'
      },
      {
        id: 'returning-visitor',
        title: 'Returning Visitor',
        description:
          'Mengukur pengunjung berulang untuk membantu membaca loyalitas dan pola kunjungan.'
      },
      {
        id: 'outside-traffic',
        title: 'Outside Traffic',
        description:
          'Memvisualisasikan traffic di luar lokasi dan membantu membaca turn-in rate.'
      },
      {
        id: 'cross-shopping',
        title: 'Cross Shopping',
        description:
          'Melihat perpindahan pengunjung dari satu area atau toko ke area lainnya.'
      },
      {
        id: 'zone-analytics',
        title: 'Zone Analytics',
        description:
          'Memvisualisasikan traffic flow pada zona tertentu.'
      },
      {
        id: 'business-intelligence',
        title: 'Business Intelligence Analytics',
        description:
          'Workspace analytics untuk membaca pola traffic, tren pelanggan, dan laporan operasional.'
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description:
          'Analytics engine untuk mempelajari tren historis dan membantu memperkirakan pola masa depan sesuai materi brosur.'
      },
      {
        id: 'centralized-management',
        title: 'Centralised Counter Management',
        description:
          'Pengelolaan banyak counter dari pusat untuk organisasi dengan banyak lokasi.'
      },
      {
        id: 'api-integration',
        title: 'API Integration',
        description:
          'Pertukaran data footfall dengan sistem lain melalui API sesuai kebutuhan integrasi.'
      }
    ],
    differentiators: [
      {
        id: 'partner-position',
        title: 'Partner technology, bukan produk proprietary',
        description:
          'FootfallCam ditampilkan sebagai teknologi partner yang dapat diintegrasikan dalam solusi monitoring Artavel.'
      },
      {
        id: 'visitor-behavior',
        title: 'Analytics perilaku pengunjung',
        description:
          'Tidak hanya menghitung orang, tetapi juga membaca durasi, repeat visitor, traffic luar, cross shopping, dan zona.'
      },
      {
        id: 'centralized-api',
        title: 'Siap untuk multi-lokasi dan integrasi',
        description:
          'Brosur mendukung centralized counter management dan API integration untuk kebutuhan data enterprise.'
      }
    ],
    showcase: [
      {
        id: 'dashboard-device',
        title: 'Counter & Dashboard',
        description:
          'Visual perangkat counter dan dashboard people counting dari brosur FootfallCam.',
        imageSrc: '/products/footfallcam/dashboard-device.png',
        imageAlt: 'Cuplikan perangkat dan dashboard FootfallCam dari brosur'
      },
      {
        id: 'analytics-software',
        title: 'Footfall Analytics Software',
        description:
          'Software analytics berbasis web untuk mengolah data footfall dan Wi-Fi analytics.',
        imageSrc: '/products/footfallcam/analytics-software.png',
        imageAlt: 'Cuplikan analytics software FootfallCam dari brosur'
      }
    ],
    integrations: [
      'Counter dan analytics software FootfallCam',
      'Data integration API',
      'Centralized counter management',
      'BI reporting dan export data',
      'Integrasi dengan sistem retail atau operasional sesuai ruang lingkup'
    ],
    securityFeatures: [
      'FootfallCam diposisikan sebagai partner technology dengan konfigurasi mengikuti kebijakan implementasi.',
      'Akses software dan data mengikuti account management serta access level yang disiapkan.',
      'Integrasi API harus memakai kredensial dan environment yang terisolasi dari production bila digunakan untuk demo.',
      'Klaim fitur final mengikuti brosur dan konfigurasi resmi yang dipilih.'
    ],
    faqs: [
      {
        id: 'faq-footfallcam-owned',
        question: 'Apakah FootfallCam dibuat oleh Artavel?',
        answer:
          'Tidak. FootfallCam diposisikan sebagai partner technology atau technology solution yang dapat dihadirkan dan diintegrasikan oleh Artavel sesuai kebutuhan.'
      },
      {
        id: 'faq-footfallcam-use',
        question: 'Untuk sektor apa FootfallCam relevan?',
        answer:
          'FootfallCam relevan untuk retail, shopping malls, ruang publik, museum, library, small shops, dan lokasi yang membutuhkan visitor analytics.'
      },
      {
        id: 'faq-footfallcam-api',
        question: 'Apakah data FootfallCam bisa diintegrasikan?',
        answer:
          'Brosur FootfallCam mencantumkan Data Integration API sehingga integrasi data dapat dibahas sesuai kebutuhan sistem.'
      }
    ],
    metadata: {
      title: 'FootfallCam - People Counting & Visitor Analytics | PT Artavel',
      description:
        'FootfallCam adalah partner technology untuk people counting, visitor analytics, BI analytics, predictive analytics, centralized counter management, dan API integration.'
    }
  },
  {
    id: 'opentext-cybersecurity',
    slug: 'opentext-cybersecurity',
    name: 'OpenText Cybersecurity',
    shortName: 'OpenText',
    subtitle: 'Endpoint Security, EDR & Security Awareness Training',
    categoryId: 'cyber-security',
    categoryLabel: 'Cyber Security',
    tagline:
      'Partner solution untuk membantu melindungi pengguna, perangkat, endpoint, dan organisasi dari risiko siber.',
    shortDescription:
      'Solusi cyber security berbasis teknologi OpenText untuk endpoint protection, EDR, security awareness training, phishing simulation, microlearning, reporting, serta opsi SIEM & SOAR add-ons sesuai materi Artavel.',
    heroDescription:
      'OpenText Cybersecurity diposisikan sebagai partner technology Artavel. Materi Artavel mencantumkan Endpoint Security Protection, EDR, SIEM & SOAR add-ons, sementara referensi resmi OpenText mendukung security awareness training, phishing simulation, microlearning, automated training, reporting, endpoint protection, dan EDR.',
    iconName: 'ShieldAlert',
    accentColor: 'blue',
    ownership: 'partner-technology',
    technologyTags: ['Security', 'EDR', 'Awareness Training'],
    detailPath: '/produk/opentext-cybersecurity',
    targetUsers: [
      'Organisasi dengan banyak endpoint dan pengguna',
      'Tim IT dan security',
      'Instansi pemerintah dan enterprise',
      'Perusahaan yang membutuhkan awareness training',
      'Organisasi yang ingin memperkuat deteksi dan respons endpoint',
      'Manajemen yang membutuhkan laporan risiko pengguna'
    ],
    challenges: [
      'Risiko siber sering dimulai dari pengguna, email, phishing, dan kebiasaan kerja yang belum aman.',
      'Perangkat endpoint membutuhkan perlindungan dan deteksi yang konsisten.',
      'Tim IT membutuhkan visibilitas terhadap ancaman endpoint dan aktivitas yang perlu ditindaklanjuti.',
      'Program pelatihan keamanan sering tidak berjalan rutin, tidak terukur, atau sulit dilaporkan.',
      'Organisasi membutuhkan pendekatan sederhana: protect users, protect devices, detect and respond.'
    ],
    outcomes: [
      'Pengguna mendapat materi security awareness yang lebih terstruktur melalui pelatihan dan simulasi.',
      'Simulasi phishing membantu organisasi mengukur kesiapan karyawan menghadapi email berisiko.',
      'Endpoint protection dan EDR membantu memperkuat perlindungan serta respons terhadap ancaman perangkat.',
      'Reporting membantu tim melihat progres pelatihan, kampanye, dan risiko pengguna.',
      'SIEM & SOAR dapat dibahas sebagai add-ons sesuai scope resmi yang dipilih.'
    ],
    modules: [
      {
        id: 'protect-users',
        title: 'Protect Users',
        description:
          'Security Awareness Training membantu pengguna mengenali phishing, kebiasaan kerja berisiko, dan praktik keamanan dasar.',
        details: [
          'Mendukung phishing simulation.',
          'Mendukung microlearning dan automated training.',
          'Reporting membantu memantau progres dan hasil kampanye.'
        ]
      },
      {
        id: 'protect-devices',
        title: 'Protect Devices',
        description:
          'Endpoint Protection membantu melindungi perangkat dari malware, ransomware, phishing, dan ancaman endpoint lain sesuai teknologi OpenText.'
      },
      {
        id: 'edr',
        title: 'Endpoint Detection & Response',
        description:
          'EDR membantu deteksi dan respons endpoint untuk memperkuat visibilitas tim IT terhadap ancaman perangkat.'
      },
      {
        id: 'phishing-simulation',
        title: 'Phishing Simulation',
        description:
          'Simulasi phishing digunakan untuk menguji dan melatih kewaspadaan pengguna terhadap email berisiko.'
      },
      {
        id: 'microlearning',
        title: 'Microlearning',
        description:
          'Materi pelatihan singkat membantu edukasi keamanan dilakukan lebih rutin dan mudah diterima pengguna.'
      },
      {
        id: 'reporting',
        title: 'Reporting',
        description:
          'Laporan membantu organisasi membaca progres pelatihan, hasil simulasi, dan area risiko yang perlu diperbaiki.'
      },
      {
        id: 'siem-soar',
        title: 'SIEM & SOAR Add-ons',
        description:
          'Materi Artavel mencantumkan SIEM & SOAR sebagai add-ons. Positioning ini mengikuti teknologi partner, bukan produk buatan Artavel.'
      }
    ],
    differentiators: [
      {
        id: 'partner-technology',
        title: 'Partner solution yang jelas',
        description:
          'OpenText ditampilkan sebagai technology partner, sehingga klaim fitur mengikuti sumber resmi OpenText dan materi Artavel.'
      },
      {
        id: 'simple-security',
        title: 'Cyber security dibuat sederhana',
        description:
          'Halaman memecah security menjadi tiga fokus yang mudah dipahami: protect users, protect devices, detect and respond.'
      },
      {
        id: 'awareness-endpoint',
        title: 'Awareness + endpoint dalam satu narasi',
        description:
          'Security tidak hanya perangkat, tetapi juga perilaku pengguna melalui training, phishing simulation, dan reporting.'
      }
    ],
    showcase: [
      {
        id: 'opentext-profile-block',
        title: 'Endpoint Security Protection',
        description:
          'Materi profile Artavel mencantumkan OpenText untuk endpoint security protection, EDR, SIEM, dan SOAR add-ons.',
        imageSrc: '/products/opentext-cybersecurity/opentext-profile-block.png',
        imageAlt: 'Cuplikan profile Artavel tentang Endpoint Security Protection OpenText'
      }
    ],
    integrations: [
      'Endpoint protection dan EDR sesuai produk OpenText yang dipilih',
      'Security Awareness Training',
      'Phishing simulation campaign',
      'Reporting dan API/reporting integration bila tersedia dalam paket resmi',
      'SIEM & SOAR sebagai add-ons sesuai scope partner solution'
    ],
    securityFeatures: [
      'OpenText diposisikan sebagai partner technology, bukan produk proprietary Artavel.',
      'Demo cyber security harus memakai environment dan data dummy yang terisolasi.',
      'Tidak menggunakan database production, API key production, atau data pengguna asli untuk demo.',
      'Konfigurasi final mengikuti lisensi, paket, dan scope resmi yang disepakati.'
    ],
    faqs: [
      {
        id: 'faq-opentext-owned',
        question: 'Apakah OpenText Cybersecurity dibuat oleh Artavel?',
        answer:
          'Tidak. OpenText Cybersecurity adalah partner technology atau partner solution yang dapat Artavel posisikan untuk kebutuhan cyber security.'
      },
      {
        id: 'faq-opentext-awareness',
        question: 'Apa fokus Security Awareness Training?',
        answer:
          'Fokusnya membantu karyawan mengenali phishing dan kebiasaan berisiko melalui training singkat, simulasi phishing, automated training, dan reporting.'
      },
      {
        id: 'faq-opentext-edr',
        question: 'Apa hubungan Endpoint Protection dan EDR?',
        answer:
          'Endpoint Protection berfokus pada perlindungan perangkat, sedangkan EDR menambah kemampuan deteksi dan respons endpoint sesuai produk OpenText yang digunakan.'
      }
    ],
    metadata: {
      title: 'Cyber Security & OpenText Solutions | PT Artavel',
      description:
        'Solusi Cyber Security Artavel berbasis partner technology OpenText untuk endpoint protection, EDR, security awareness training, phishing simulation, microlearning, reporting, dan SIEM/SOAR add-ons.'
    }
  },
  {
    id: 'smarchlink-sippadu',
    slug: 'smarchlink-sippadu',
    name: 'Smarchlink SIPPADU',
    shortName: 'SIPPADU',
    subtitle: 'Pelayanan Publik & Perizinan Terpadu',
    categoryId: 'digital-government-enterprise',
    categoryLabel: 'Digital Government & Enterprise',
    tagline: 'Alur pelayanan publik, perizinan, tracking, dan integrasi layanan dalam satu sistem.',
    shortDescription:
      'Produk Smarchlink untuk pelayanan publik dan perizinan terpadu dengan workflow, tracking, TTE, dashboard, dan integrasi layanan.',
    heroDescription:
      'Smarchlink SIPPADU membantu instansi menata permohonan layanan dan perizinan, verifikasi, penerbitan, tracking, serta pelaporan.',
    iconName: 'FileCheck2',
    accentColor: 'blue',
    ownership: 'artavel-product',
    technologyTags: ['Digital Government', 'Integration'],
    detailPath: '/produk/smarchlink-sippadu',
    redirectPath: '/solusi/pelayanan-publik-dan-perizinan',
    targetUsers: [],
    challenges: [],
    outcomes: [],
    modules: [],
    differentiators: [],
    showcase: [],
    integrations: [],
    securityFeatures: [],
    faqs: [],
    metadata: {
      title: 'Smarchlink SIPPADU - PT Artavel',
      description: 'Produk pelayanan publik dan perizinan terpadu dari PT Artavel.'
    }
  },
  {
    id: 'smarchlink-archive',
    slug: 'smarchlink-archive',
    name: 'Smarchlink Archive',
    shortName: 'Archive',
    subtitle: 'Manajemen Dokumen & Arsip',
    categoryId: 'digital-government-enterprise',
    categoryLabel: 'Digital Government & Enterprise',
    tagline: 'Pengelolaan dokumen dan arsip digital yang terstruktur, mudah dicari, dan aman.',
    shortDescription:
      'Produk Smarchlink untuk penataan arsip, klasifikasi, pencarian, retensi, dan pengelolaan dokumen digital.',
    heroDescription:
      'Smarchlink Archive membantu organisasi menyimpan, mengklasifikasikan, mengamankan, dan menelusuri arsip aktif maupun inaktif.',
    iconName: 'FolderKanban',
    accentColor: 'green',
    ownership: 'artavel-product',
    technologyTags: ['Digital Government', 'Archive'],
    detailPath: '/produk/smarchlink-archive',
    redirectPath: '/solusi/manajemen-dokumen-dan-arsip',
    targetUsers: [],
    challenges: [],
    outcomes: [],
    modules: [],
    differentiators: [],
    showcase: [],
    integrations: [],
    securityFeatures: [],
    faqs: [],
    metadata: {
      title: 'Smarchlink Archive - PT Artavel',
      description: 'Produk manajemen dokumen dan arsip digital dari PT Artavel.'
    }
  },
  {
    id: 'tnde',
    slug: 'tnde',
    name: 'TNDE',
    shortName: 'TNDE',
    subtitle: 'Tata Naskah Dinas Elektronik',
    categoryId: 'digital-government-enterprise',
    categoryLabel: 'Digital Government & Enterprise',
    tagline: 'Disposisi, templat surat, penomoran, dan tanda tangan elektronik untuk naskah dinas.',
    shortDescription:
      'Produk tata naskah dinas elektronik untuk mempercepat korespondensi, persetujuan, disposisi, dan monitoring surat.',
    heroDescription:
      'TNDE membantu organisasi mengelola surat masuk, surat keluar, disposisi, paraf, penomoran, dan tanda tangan elektronik.',
    iconName: 'MailCheck',
    accentColor: 'blue',
    ownership: 'artavel-product',
    technologyTags: ['Digital Government', 'Workflow'],
    detailPath: '/produk/tnde',
    redirectPath: '/solusi/tata-naskah-dinas-elektronik#simulasi-alur',
    targetUsers: [],
    challenges: [],
    outcomes: [],
    modules: [],
    differentiators: [],
    showcase: [],
    integrations: [],
    securityFeatures: [],
    faqs: [],
    metadata: {
      title: 'TNDE - PT Artavel',
      description: 'Produk tata naskah dinas elektronik dari PT Artavel.'
    }
  },
  {
    id: 'sianter',
    slug: 'sianter',
    name: 'SIANter',
    shortName: 'SIANter',
    subtitle: 'Sistem Antrean & Tracking',
    categoryId: 'digital-government-enterprise',
    categoryLabel: 'Digital Government & Enterprise',
    tagline: 'Antrean layanan, panggilan loket, display, dan tracking pemohon.',
    shortDescription:
      'Produk sistem antrean dan tracking untuk membantu ruang layanan mengelola alur kedatangan, loket, dan status layanan.',
    heroDescription:
      'SIANter membantu gedung pelayanan publik menata antrean fisik dan digital, panggilan loket, display, dan tracking status pemohon.',
    iconName: 'Users',
    accentColor: 'yellow',
    ownership: 'artavel-product',
    technologyTags: ['Digital Government', 'Analytics'],
    detailPath: '/produk/sianter',
    redirectPath: '/solusi/sistem-antrean-dan-tracking',
    targetUsers: [],
    challenges: [],
    outcomes: [],
    modules: [],
    differentiators: [],
    showcase: [],
    integrations: [],
    securityFeatures: [],
    faqs: [],
    metadata: {
      title: 'SIANter - PT Artavel',
      description: 'Produk sistem antrean dan tracking dari PT Artavel.'
    }
  }
];

export const FEATURED_PRODUCT_IDS = [
  'smartmap-gis-analytics',
  'ai-cctv-computer-vision',
  'footfallcam',
  'otoschool',
  'otopos-fnb',
  'opentext-cybersecurity',
  'smarchlink-sippadu',
  'sianter',
  'tnde',
  'smarchlink-archive',
];

export const PRODUCTS_FOR_MEGAMENU = [
  'smartmap-gis-analytics',
  'ai-cctv-computer-vision',
  'footfallcam',
  'otoschool',
  'otopos-fnb',
  'opentext-cybersecurity',
  'smarchlink-sippadu',
  'sianter',
  'tnde',
  'smarchlink-archive'
]
  .map((id) => PRODUCTS_DATA.find((product) => product.id === id))
  .filter((product): product is Product => Boolean(product));

export const getProductBySlug = (slug: string) =>
  PRODUCTS_DATA.find((product) => product.slug === slug);

export const getProductById = (id: string) =>
  PRODUCTS_DATA.find((product) => product.id === id);

export const getRelatedProducts = (category: SolutionCategory) =>
  category.relatedProductIds
    .map((productId) => getProductById(productId))
    .filter((product): product is Product => Boolean(product));
