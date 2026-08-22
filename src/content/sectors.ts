import { Sector } from '../types';

export const SECTORS_DATA: Sector[] = [
  {
    id: 'pemerintah-layanan-publik',
    slug: 'pemerintah-layanan-publik',
    title: 'Pemerintah & Layanan Publik',
    subtitle: 'Layanan publik, dokumen, antrean, dan data wilayah yang lebih tertata',
    description: 'Pemda, Dinas, MPP, BUMD dan layanan publik.',
    iconName: 'Building2',
    targetOrganizations: [
      'Pemerintah daerah kabupaten, kota, dan provinsi',
      'Dinas teknis, DPMPTSP, Diskominfo, dan Setda',
      'Mal Pelayanan Publik dan loket terpadu',
      'BUMD dan unit layanan masyarakat'
    ],
    keyChallenges: [
      'Alur layanan, dokumen, antrean, dan pelaporan masih berjalan pada beberapa sistem atau proses manual.',
      'Kebutuhan integrasi dengan sistem nasional, kanal pemohon, dan data internal perlu dirancang hati-hati.',
      'Pimpinan membutuhkan visibilitas status layanan, dokumen, dan aktivitas lapangan yang mudah dipantau.'
    ],
    recommendedSolutions: [
      'pelayanan-publik-dan-perizinan',
      'sistem-antrean-dan-tracking',
      'tata-naskah-dinas-elektronik',
      'manajemen-dokumen-dan-arsip',
      'cctv-iot-dan-monitoring'
    ],
    relatedProductIds: [
      'smarchlink-sippadu',
      'sianter',
      'tnde',
      'smarchlink-archive',
      'smartmap-gis-analytics'
    ],
    expectedImpacts: [
      'Status layanan dan dokumen lebih mudah ditelusuri oleh petugas maupun pimpinan.',
      'Ruang layanan dapat dibantu dengan antrean, tracking, dan monitoring yang lebih tertata.',
      'Data wilayah, dokumen, dan aktivitas operasional lebih mudah dibaca sebagai dasar evaluasi.'
    ]
  },
  {
    id: 'pendidikan',
    slug: 'pendidikan',
    title: 'Pendidikan',
    subtitle: 'Ekosistem sekolah yang menghubungkan akademik, administrasi, dan komunikasi',
    description: 'Sekolah, Yayasan dan Institusi Pendidikan.',
    iconName: 'GraduationCap',
    targetOrganizations: [
      'Sekolah dasar, menengah, dan multi-jenjang',
      'Yayasan pendidikan dan pengelola sekolah',
      'Institusi pendidikan yang membutuhkan portal terintegrasi',
      'Tim akademik, administrasi, keuangan, guru, siswa, dan orang tua'
    ],
    keyChallenges: [
      'Data akademik, administrasi, keuangan, dan komunikasi sering tersebar di banyak media.',
      'Guru, admin, siswa, orang tua, dan yayasan membutuhkan akses informasi yang berbeda.',
      'Proses PPDB, absensi, nilai, tagihan, dan pelaporan perlu terhubung agar tidak direkap berulang.'
    ],
    recommendedSolutions: [
      'website-ui-ux-dan-aplikasi-web',
      'keamanan-data-dan-integrasi'
    ],
    relatedProductIds: [
      'otoschool'
    ],
    expectedImpacts: [
      'Informasi sekolah lebih konsisten karena dikelola dalam ekosistem yang terhubung.',
      'Pengguna melihat data sesuai peran, mulai dari admin hingga orang tua.',
      'Pimpinan sekolah atau yayasan memiliki ringkasan operasional yang lebih mudah dipantau.'
    ]
  },
  {
    id: 'retail-fnb',
    slug: 'retail-fnb',
    title: 'Retail & F&B',
    subtitle: 'Operasional outlet, transaksi, inventory, dan performa yang saling terhubung',
    description: 'Retail, restoran, kafe dan bisnis multi-outlet.',
    iconName: 'Store',
    targetOrganizations: [
      'Restoran, kafe, dan bisnis F&B',
      'Retail dan toko multi-outlet',
      'Owner, manajer outlet, kasir, inventory, dan tim operasional',
      'Area komersial yang membutuhkan visitor analytics'
    ],
    keyChallenges: [
      'Transaksi, stok, karyawan, loyalty, dan keuangan sering tidak terhubung dalam satu alur.',
      'Owner membutuhkan data outlet, shift, produk, dan performa cabang yang mudah dibandingkan.',
      'Traffic pengunjung dan pola area dapat membantu keputusan operasional ketika datanya tersedia.'
    ],
    recommendedSolutions: [
      'cctv-iot-dan-monitoring',
      'keamanan-data-dan-integrasi',
      'website-ui-ux-dan-aplikasi-web'
    ],
    relatedProductIds: [
      'otopos-fnb',
      'footfallcam',
      'ai-cctv-computer-vision'
    ],
    expectedImpacts: [
      'Penjualan, inventory, absensi, loyalty, dan laporan performa lebih mudah dipantau.',
      'Pengelola dapat membaca pola operasional outlet dan traffic pengunjung secara lebih objektif.',
      'Keputusan stok, jadwal staf, dan evaluasi cabang memiliki data pendukung yang lebih jelas.'
    ]
  },
  {
    id: 'enterprise-organisasi',
    slug: 'enterprise-organisasi',
    title: 'Enterprise & Organisasi',
    subtitle: 'Keamanan, analytics, aplikasi enterprise, dan pengelolaan dokumen lintas unit',
    description: 'Perusahaan, BUMD, lembaga dan organisasi.',
    iconName: 'Briefcase',
    targetOrganizations: [
      'Perusahaan, BUMD, BUMN, dan grup usaha',
      'Lembaga, yayasan, organisasi, dan unit operasional multi-lokasi',
      'Tim IT, operasional, legal, keuangan, dan manajemen',
      'Organisasi yang membutuhkan security, analytics, dan aplikasi enterprise'
    ],
    keyChallenges: [
      'Dokumen, aset data, dan proses persetujuan sering tersebar antarunit atau cabang.',
      'Endpoint, email, pengguna, dan akses sistem membutuhkan perlindungan dan awareness yang konsisten.',
      'Manajemen membutuhkan analytics, integrasi, dan dashboard agar keputusan tidak hanya bergantung pada laporan manual.'
    ],
    recommendedSolutions: [
      'keamanan-data-dan-integrasi',
      'manajemen-dokumen-dan-arsip',
      'tata-naskah-dinas-elektronik',
      'cctv-iot-dan-monitoring',
      'website-ui-ux-dan-aplikasi-web'
    ],
    relatedProductIds: [
      'opentext-cybersecurity',
      'smarchlink-archive',
      'tnde',
      'smartmap-gis-analytics',
      'footfallcam'
    ],
    expectedImpacts: [
      'Dokumen, persetujuan, dan akses data lebih mudah ditata sesuai peran pengguna.',
      'Program keamanan dapat menggabungkan proteksi teknis dengan awareness pengguna.',
      'Data operasional dan lokasi lebih mudah divisualisasikan untuk kebutuhan monitoring dan evaluasi.'
    ]
  }
];
